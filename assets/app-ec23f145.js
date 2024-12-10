const ku="modulepreload",_u=function(n){return"/newblog/"+n},gp={},r=function(e,s,t){if(!s||s.length===0)return e();const a=document.getElementsByTagName("link");return Promise.all(s.map(o=>{if(o=_u(o),o in gp)return;gp[o]=!0;const p=o.endsWith(".css"),l=p?'[rel="stylesheet"]':"";if(!!t)for(let d=a.length-1;d>=0;d--){const v=a[d];if(v.href===o&&(!p||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const u=document.createElement("link");if(u.rel=p?"stylesheet":ku,p||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),p)return new Promise((d,v)=>{u.addEventListener("load",d),u.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e())};/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function xo(n){const e=Object.create(null);for(const s of n.split(","))e[s]=1;return s=>s in e}const Tn={},Os=[],me=()=>{},hu=()=>!1,bt=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),So=n=>n.startsWith("onUpdate:"),In=Object.assign,Ao=(n,e)=>{const s=n.indexOf(e);s>-1&&n.splice(s,1)},bu=Object.prototype.hasOwnProperty,hn=(n,e)=>bu.call(n,e),Y=Array.isArray,Is=n=>gt(n)==="[object Map]",Ws=n=>gt(n)==="[object Set]",yp=n=>gt(n)==="[object Date]",tn=n=>typeof n=="function",pn=n=>typeof n=="string",Ae=n=>typeof n=="symbol",yn=n=>n!==null&&typeof n=="object",Wr=n=>(yn(n)||tn(n))&&tn(n.then)&&tn(n.catch),Jr=Object.prototype.toString,gt=n=>Jr.call(n),gu=n=>gt(n).slice(8,-1),Ur=n=>gt(n)==="[object Object]",Lo=n=>pn(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ds=xo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),va=n=>{const e=Object.create(null);return s=>e[s]||(e[s]=n(s))},yu=/-(\w)/g,Kn=va(n=>n.replace(yu,(e,s)=>s?s.toUpperCase():"")),Eu=/\B([A-Z])/g,hs=va(n=>n.replace(Eu,"-$1").toLowerCase()),yt=va(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ra=va(n=>n?`on${yt(n)}`:""),Ye=(n,e)=>!Object.is(n,e),Xt=(n,...e)=>{for(let s=0;s<n.length;s++)n[s](...e)},Gr=(n,e,s,t=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:t,value:s})},na=n=>{const e=parseFloat(n);return isNaN(e)?n:e},wu=n=>{const e=pn(n)?Number(n):NaN;return isNaN(e)?n:e};let Ep;const ma=()=>Ep||(Ep=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ro(n){if(Y(n)){const e={};for(let s=0;s<n.length;s++){const t=n[s],a=pn(t)?Au(t):Ro(t);if(a)for(const o in a)e[o]=a[o]}return e}else if(pn(n)||yn(n))return n}const Tu=/;(?![^(]*\))/g,xu=/:([^]+)/,Su=/\/\*[^]*?\*\//g;function Au(n){const e={};return n.replace(Su,"").split(Tu).forEach(s=>{if(s){const t=s.split(xu);t.length>1&&(e[t[0].trim()]=t[1].trim())}}),e}function Po(n){let e="";if(pn(n))e=n;else if(Y(n))for(let s=0;s<n.length;s++){const t=Po(n[s]);t&&(e+=t+" ")}else if(yn(n))for(const s in n)n[s]&&(e+=s+" ");return e.trim()}const Lu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ru=xo(Lu);function Kr(n){return!!n||n===""}function Pu(n,e){if(n.length!==e.length)return!1;let s=!0;for(let t=0;s&&t<n.length;t++)s=us(n[t],e[t]);return s}function us(n,e){if(n===e)return!0;let s=yp(n),t=yp(e);if(s||t)return s&&t?n.getTime()===e.getTime():!1;if(s=Ae(n),t=Ae(e),s||t)return n===e;if(s=Y(n),t=Y(e),s||t)return s&&t?Pu(n,e):!1;if(s=yn(n),t=yn(e),s||t){if(!s||!t)return!1;const a=Object.keys(n).length,o=Object.keys(e).length;if(a!==o)return!1;for(const p in n){const l=n.hasOwnProperty(p),c=e.hasOwnProperty(p);if(l&&!c||!l&&c||!us(n[p],e[p]))return!1}}return String(n)===String(e)}function Oo(n,e){return n.findIndex(s=>us(s,e))}const Yr=n=>!!(n&&n.__v_isRef===!0),Ou=n=>pn(n)?n:n==null?"":Y(n)||yn(n)&&(n.toString===Jr||!tn(n.toString))?Yr(n)?Ou(n.value):JSON.stringify(n,Xr,2):String(n),Xr=(n,e)=>Yr(e)?Xr(n,e.value):Is(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((s,[t,a],o)=>(s[Pa(t,o)+" =>"]=a,s),{})}:Ws(e)?{[`Set(${e.size})`]:[...e.values()].map(s=>Pa(s))}:Ae(e)?Pa(e):yn(e)&&!Y(e)&&!Ur(e)?String(e):e,Pa=(n,e="")=>{var s;return Ae(n)?`Symbol(${(s=n.description)!=null?s:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Hn;class Iu{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Hn,!e&&Hn&&(this.index=(Hn.scopes||(Hn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,s;if(this.scopes)for(e=0,s=this.scopes.length;e<s;e++)this.scopes[e].pause();for(e=0,s=this.effects.length;e<s;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,s;if(this.scopes)for(e=0,s=this.scopes.length;e<s;e++)this.scopes[e].resume();for(e=0,s=this.effects.length;e<s;e++)this.effects[e].resume()}}run(e){if(this._active){const s=Hn;try{return Hn=this,e()}finally{Hn=s}}}on(){Hn=this}off(){Hn=this.parent}stop(e){if(this._active){this._active=!1;let s,t;for(s=0,t=this.effects.length;s<t;s++)this.effects[s].stop();for(this.effects.length=0,s=0,t=this.cleanups.length;s<t;s++)this.cleanups[s]();if(this.cleanups.length=0,this.scopes){for(s=0,t=this.scopes.length;s<t;s++)this.scopes[s].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0}}}function Qr(){return Hn}function Du(n,e=!1){Hn&&Hn.cleanups.push(n)}let An;const Oa=new WeakSet;class Zr{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Hn&&Hn.active&&Hn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Oa.has(this)&&(Oa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||el(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,wp(this),sl(this);const e=An,s=fe;An=this,fe=!0;try{return this.fn()}finally{tl(this),An=e,fe=s,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Vo(e);this.deps=this.depsTail=void 0,wp(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Oa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){no(this)&&this.run()}get dirty(){return no(this)}}let nl=0,st,tt;function el(n,e=!1){if(n.flags|=8,e){n.next=tt,tt=n;return}n.next=st,st=n}function Io(){nl++}function Do(){if(--nl>0)return;if(tt){let e=tt;for(tt=void 0;e;){const s=e.next;e.next=void 0,e.flags&=-9,e=s}}let n;for(;st;){let e=st;for(st=void 0;e;){const s=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(t){n||(n=t)}e=s}}if(n)throw n}function sl(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function tl(n){let e,s=n.depsTail,t=s;for(;t;){const a=t.prevDep;t.version===-1?(t===s&&(s=a),Vo(t),Vu(t)):e=t,t.dep.activeLink=t.prevActiveLink,t.prevActiveLink=void 0,t=a}n.deps=e,n.depsTail=s}function no(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(al(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function al(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===it))return;n.globalVersion=it;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!no(n)){n.flags&=-3;return}const s=An,t=fe;An=n,fe=!0;try{sl(n);const a=n.fn(n._value);(e.version===0||Ye(a,n._value))&&(n._value=a,e.version++)}catch(a){throw e.version++,a}finally{An=s,fe=t,tl(n),n.flags&=-3}}function Vo(n,e=!1){const{dep:s,prevSub:t,nextSub:a}=n;if(t&&(t.nextSub=a,n.prevSub=void 0),a&&(a.prevSub=t,n.nextSub=void 0),s.subs===n&&(s.subs=t,!t&&s.computed)){s.computed.flags&=-5;for(let o=s.computed.deps;o;o=o.nextDep)Vo(o,!0)}!e&&!--s.sc&&s.map&&s.map.delete(s.key)}function Vu(n){const{prevDep:e,nextDep:s}=n;e&&(e.nextDep=s,n.prevDep=void 0),s&&(s.prevDep=e,n.nextDep=void 0)}let fe=!0;const ol=[];function Ze(){ol.push(fe),fe=!1}function ns(){const n=ol.pop();fe=n===void 0?!0:n}function wp(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const s=An;An=void 0;try{e()}finally{An=s}}}let it=0;class Cu{constructor(e,s){this.sub=e,this.dep=s,this.version=s.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class fa{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!An||!fe||An===this.computed)return;let s=this.activeLink;if(s===void 0||s.sub!==An)s=this.activeLink=new Cu(An,this),An.deps?(s.prevDep=An.depsTail,An.depsTail.nextDep=s,An.depsTail=s):An.deps=An.depsTail=s,pl(s);else if(s.version===-1&&(s.version=this.version,s.nextDep)){const t=s.nextDep;t.prevDep=s.prevDep,s.prevDep&&(s.prevDep.nextDep=t),s.prevDep=An.depsTail,s.nextDep=void 0,An.depsTail.nextDep=s,An.depsTail=s,An.deps===s&&(An.deps=t)}return s}trigger(e){this.version++,it++,this.notify(e)}notify(e){Io();try{for(let s=this.subs;s;s=s.prevSub)s.sub.notify()&&s.sub.dep.notify()}finally{Do()}}}function pl(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let t=e.deps;t;t=t.nextDep)pl(t)}const s=n.dep.subs;s!==n&&(n.prevSub=s,s&&(s.nextSub=n)),n.dep.subs=n}}const ea=new WeakMap,rs=Symbol(""),eo=Symbol(""),ct=Symbol("");function $n(n,e,s){if(fe&&An){let t=ea.get(n);t||ea.set(n,t=new Map);let a=t.get(s);a||(t.set(s,a=new fa),a.map=t,a.key=s),a.track()}}function Ce(n,e,s,t,a,o){const p=ea.get(n);if(!p){it++;return}const l=c=>{c&&c.trigger()};if(Io(),e==="clear")p.forEach(l);else{const c=Y(n),u=c&&Lo(s);if(c&&s==="length"){const d=Number(t);p.forEach((v,k)=>{(k==="length"||k===ct||!Ae(k)&&k>=d)&&l(v)})}else switch((s!==void 0||p.has(void 0))&&l(p.get(s)),u&&l(p.get(ct)),e){case"add":c?u&&l(p.get("length")):(l(p.get(rs)),Is(n)&&l(p.get(eo)));break;case"delete":c||(l(p.get(rs)),Is(n)&&l(p.get(eo)));break;case"set":Is(n)&&l(p.get(rs));break}}Do()}function ju(n,e){const s=ea.get(n);return s&&s.get(e)}function Ts(n){const e=vn(n);return e===n?e:($n(e,"iterate",ct),ie(n)?e:e.map(qn))}function ka(n){return $n(n=vn(n),"iterate",ct),n}const Mu={__proto__:null,[Symbol.iterator](){return Ia(this,Symbol.iterator,qn)},concat(...n){return Ts(this).concat(...n.map(e=>Y(e)?Ts(e):e))},entries(){return Ia(this,"entries",n=>(n[1]=qn(n[1]),n))},every(n,e){return Pe(this,"every",n,e,void 0,arguments)},filter(n,e){return Pe(this,"filter",n,e,s=>s.map(qn),arguments)},find(n,e){return Pe(this,"find",n,e,qn,arguments)},findIndex(n,e){return Pe(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Pe(this,"findLast",n,e,qn,arguments)},findLastIndex(n,e){return Pe(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Pe(this,"forEach",n,e,void 0,arguments)},includes(...n){return Da(this,"includes",n)},indexOf(...n){return Da(this,"indexOf",n)},join(n){return Ts(this).join(n)},lastIndexOf(...n){return Da(this,"lastIndexOf",n)},map(n,e){return Pe(this,"map",n,e,void 0,arguments)},pop(){return Xs(this,"pop")},push(...n){return Xs(this,"push",n)},reduce(n,...e){return Tp(this,"reduce",n,e)},reduceRight(n,...e){return Tp(this,"reduceRight",n,e)},shift(){return Xs(this,"shift")},some(n,e){return Pe(this,"some",n,e,void 0,arguments)},splice(...n){return Xs(this,"splice",n)},toReversed(){return Ts(this).toReversed()},toSorted(n){return Ts(this).toSorted(n)},toSpliced(...n){return Ts(this).toSpliced(...n)},unshift(...n){return Xs(this,"unshift",n)},values(){return Ia(this,"values",qn)}};function Ia(n,e,s){const t=ka(n),a=t[e]();return t!==n&&!ie(n)&&(a._next=a.next,a.next=()=>{const o=a._next();return o.value&&(o.value=s(o.value)),o}),a}const Nu=Array.prototype;function Pe(n,e,s,t,a,o){const p=ka(n),l=p!==n&&!ie(n),c=p[e];if(c!==Nu[e]){const v=c.apply(n,o);return l?qn(v):v}let u=s;p!==n&&(l?u=function(v,k){return s.call(this,qn(v),k,n)}:s.length>2&&(u=function(v,k){return s.call(this,v,k,n)}));const d=c.call(p,u,t);return l&&a?a(d):d}function Tp(n,e,s,t){const a=ka(n);let o=s;return a!==n&&(ie(n)?s.length>3&&(o=function(p,l,c){return s.call(this,p,l,c,n)}):o=function(p,l,c){return s.call(this,p,qn(l),c,n)}),a[e](o,...t)}function Da(n,e,s){const t=vn(n);$n(t,"iterate",ct);const a=t[e](...s);return(a===-1||a===!1)&&Mo(s[0])?(s[0]=vn(s[0]),t[e](...s)):a}function Xs(n,e,s=[]){Ze(),Io();const t=vn(n)[e].apply(n,s);return Do(),ns(),t}const $u=xo("__proto__,__v_isRef,__isVue"),rl=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Ae));function qu(n){Ae(n)||(n=String(n));const e=vn(this);return $n(e,"has",n),e.hasOwnProperty(n)}class ll{constructor(e=!1,s=!1){this._isReadonly=e,this._isShallow=s}get(e,s,t){if(s==="__v_skip")return e.__v_skip;const a=this._isReadonly,o=this._isShallow;if(s==="__v_isReactive")return!a;if(s==="__v_isReadonly")return a;if(s==="__v_isShallow")return o;if(s==="__v_raw")return t===(a?o?Yu:dl:o?ul:cl).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(t)?e:void 0;const p=Y(e);if(!a){let c;if(p&&(c=Mu[s]))return c;if(s==="hasOwnProperty")return qu}const l=Reflect.get(e,s,On(e)?e:t);return(Ae(s)?rl.has(s):$u(s))||(a||$n(e,"get",s),o)?l:On(l)?p&&Lo(s)?l:l.value:yn(l)?a?es(l):Et(l):l}}class il extends ll{constructor(e=!1){super(!1,e)}set(e,s,t,a){let o=e[s];if(!this._isShallow){const c=ds(o);if(!ie(t)&&!ds(t)&&(o=vn(o),t=vn(t)),!Y(e)&&On(o)&&!On(t))return c?!1:(o.value=t,!0)}const p=Y(e)&&Lo(s)?Number(s)<e.length:hn(e,s),l=Reflect.set(e,s,t,On(e)?e:a);return e===vn(a)&&(p?Ye(t,o)&&Ce(e,"set",s,t):Ce(e,"add",s,t)),l}deleteProperty(e,s){const t=hn(e,s);e[s];const a=Reflect.deleteProperty(e,s);return a&&t&&Ce(e,"delete",s,void 0),a}has(e,s){const t=Reflect.has(e,s);return(!Ae(s)||!rl.has(s))&&$n(e,"has",s),t}ownKeys(e){return $n(e,"iterate",Y(e)?"length":rs),Reflect.ownKeys(e)}}class Bu extends ll{constructor(e=!1){super(!0,e)}set(e,s){return!0}deleteProperty(e,s){return!0}}const Hu=new il,Fu=new Bu,zu=new il(!0);const so=n=>n,$t=n=>Reflect.getPrototypeOf(n);function Wu(n,e,s){return function(...t){const a=this.__v_raw,o=vn(a),p=Is(o),l=n==="entries"||n===Symbol.iterator&&p,c=n==="keys"&&p,u=a[n](...t),d=s?so:e?to:qn;return!e&&$n(o,"iterate",c?eo:rs),{next(){const{value:v,done:k}=u.next();return k?{value:v,done:k}:{value:l?[d(v[0]),d(v[1])]:d(v),done:k}},[Symbol.iterator](){return this}}}}function qt(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Ju(n,e){const s={get(a){const o=this.__v_raw,p=vn(o),l=vn(a);n||(Ye(a,l)&&$n(p,"get",a),$n(p,"get",l));const{has:c}=$t(p),u=e?so:n?to:qn;if(c.call(p,a))return u(o.get(a));if(c.call(p,l))return u(o.get(l));o!==p&&o.get(a)},get size(){const a=this.__v_raw;return!n&&$n(vn(a),"iterate",rs),Reflect.get(a,"size",a)},has(a){const o=this.__v_raw,p=vn(o),l=vn(a);return n||(Ye(a,l)&&$n(p,"has",a),$n(p,"has",l)),a===l?o.has(a):o.has(a)||o.has(l)},forEach(a,o){const p=this,l=p.__v_raw,c=vn(l),u=e?so:n?to:qn;return!n&&$n(c,"iterate",rs),l.forEach((d,v)=>a.call(o,u(d),u(v),p))}};return In(s,n?{add:qt("add"),set:qt("set"),delete:qt("delete"),clear:qt("clear")}:{add(a){!e&&!ie(a)&&!ds(a)&&(a=vn(a));const o=vn(this);return $t(o).has.call(o,a)||(o.add(a),Ce(o,"add",a,a)),this},set(a,o){!e&&!ie(o)&&!ds(o)&&(o=vn(o));const p=vn(this),{has:l,get:c}=$t(p);let u=l.call(p,a);u||(a=vn(a),u=l.call(p,a));const d=c.call(p,a);return p.set(a,o),u?Ye(o,d)&&Ce(p,"set",a,o):Ce(p,"add",a,o),this},delete(a){const o=vn(this),{has:p,get:l}=$t(o);let c=p.call(o,a);c||(a=vn(a),c=p.call(o,a)),l&&l.call(o,a);const u=o.delete(a);return c&&Ce(o,"delete",a,void 0),u},clear(){const a=vn(this),o=a.size!==0,p=a.clear();return o&&Ce(a,"clear",void 0,void 0),p}}),["keys","values","entries",Symbol.iterator].forEach(a=>{s[a]=Wu(a,n,e)}),s}function Co(n,e){const s=Ju(n,e);return(t,a,o)=>a==="__v_isReactive"?!n:a==="__v_isReadonly"?n:a==="__v_raw"?t:Reflect.get(hn(s,a)&&a in t?s:t,a,o)}const Uu={get:Co(!1,!1)},Gu={get:Co(!1,!0)},Ku={get:Co(!0,!1)};const cl=new WeakMap,ul=new WeakMap,dl=new WeakMap,Yu=new WeakMap;function Xu(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Qu(n){return n.__v_skip||!Object.isExtensible(n)?0:Xu(gu(n))}function Et(n){return ds(n)?n:jo(n,!1,Hu,Uu,cl)}function vl(n){return jo(n,!1,zu,Gu,ul)}function es(n){return jo(n,!0,Fu,Ku,dl)}function jo(n,e,s,t,a){if(!yn(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const o=a.get(n);if(o)return o;const p=Qu(n);if(p===0)return n;const l=new Proxy(n,p===2?t:s);return a.set(n,l),l}function ls(n){return ds(n)?ls(n.__v_raw):!!(n&&n.__v_isReactive)}function ds(n){return!!(n&&n.__v_isReadonly)}function ie(n){return!!(n&&n.__v_isShallow)}function Mo(n){return n?!!n.__v_raw:!1}function vn(n){const e=n&&n.__v_raw;return e?vn(e):n}function Zu(n){return!hn(n,"__v_skip")&&Object.isExtensible(n)&&Gr(n,"__v_skip",!0),n}const qn=n=>yn(n)?Et(n):n,to=n=>yn(n)?es(n):n;function On(n){return n?n.__v_isRef===!0:!1}function Z(n){return ml(n,!1)}function be(n){return ml(n,!0)}function ml(n,e){return On(n)?n:new nd(n,e)}class nd{constructor(e,s){this.dep=new fa,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=s?e:vn(e),this._value=s?e:qn(e),this.__v_isShallow=s}get value(){return this.dep.track(),this._value}set value(e){const s=this._rawValue,t=this.__v_isShallow||ie(e)||ds(e);e=t?e:vn(e),Ye(e,s)&&(this._rawValue=e,this._value=t?e:qn(e),this.dep.trigger())}}function is(n){return On(n)?n.value:n}const ed={get:(n,e,s)=>e==="__v_raw"?n:is(Reflect.get(n,e,s)),set:(n,e,s,t)=>{const a=n[e];return On(a)&&!On(s)?(a.value=s,!0):Reflect.set(n,e,s,t)}};function fl(n){return ls(n)?n:new Proxy(n,ed)}class sd{constructor(e){this.__v_isRef=!0,this._value=void 0;const s=this.dep=new fa,{get:t,set:a}=e(s.track.bind(s),s.trigger.bind(s));this._get=t,this._set=a}get value(){return this._value=this._get()}set value(e){this._set(e)}}function td(n){return new sd(n)}class ad{constructor(e,s,t){this._object=e,this._key=s,this._defaultValue=t,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return ju(vn(this._object),this._key)}}class od{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Js(n,e,s){return On(n)?n:tn(n)?new od(n):yn(n)&&arguments.length>1?pd(n,e,s):Z(n)}function pd(n,e,s){const t=n[e];return On(t)?t:new ad(n,e,s)}class rd{constructor(e,s,t){this.fn=e,this.setter=s,this._value=void 0,this.dep=new fa(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=it-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!s,this.isSSR=t}notify(){if(this.flags|=16,!(this.flags&8)&&An!==this)return el(this,!0),!0}get value(){const e=this.dep.track();return al(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function ld(n,e,s=!1){let t,a;return tn(n)?t=n:(t=n.get,a=n.set),new rd(t,a,s)}const Bt={},sa=new WeakMap;let os;function id(n,e=!1,s=os){if(s){let t=sa.get(s);t||sa.set(s,t=[]),t.push(n)}}function cd(n,e,s=Tn){const{immediate:t,deep:a,once:o,scheduler:p,augmentJob:l,call:c}=s,u=T=>a?T:ie(T)||a===!1||a===0?je(T,1):je(T);let d,v,k,f,g=!1,y=!1;if(On(n)?(v=()=>n.value,g=ie(n)):ls(n)?(v=()=>u(n),g=!0):Y(n)?(y=!0,g=n.some(T=>ls(T)||ie(T)),v=()=>n.map(T=>{if(On(T))return T.value;if(ls(T))return u(T);if(tn(T))return c?c(T,2):T()})):tn(n)?e?v=c?()=>c(n,2):n:v=()=>{if(k){Ze();try{k()}finally{ns()}}const T=os;os=d;try{return c?c(n,3,[f]):n(f)}finally{os=T}}:v=me,e&&a){const T=v,C=a===!0?1/0:a;v=()=>je(T(),C)}const A=Qr(),E=()=>{d.stop(),A&&A.active&&Ao(A.effects,d)};if(o&&e){const T=e;e=(...C)=>{T(...C),E()}}let S=y?new Array(n.length).fill(Bt):Bt;const b=T=>{if(!(!(d.flags&1)||!d.dirty&&!T))if(e){const C=d.run();if(a||g||(y?C.some((P,M)=>Ye(P,S[M])):Ye(C,S))){k&&k();const P=os;os=d;try{const M=[C,S===Bt?void 0:y&&S[0]===Bt?[]:S,f];c?c(e,3,M):e(...M),S=C}finally{os=P}}}else d.run()};return l&&l(b),d=new Zr(v),d.scheduler=p?()=>p(b,!1):b,f=T=>id(T,!1,d),k=d.onStop=()=>{const T=sa.get(d);if(T){if(c)c(T,4);else for(const C of T)C();sa.delete(d)}},e?t?b(!0):S=d.run():p?p(b.bind(null,!0),!0):d.run(),E.pause=d.pause.bind(d),E.resume=d.resume.bind(d),E.stop=E,E}function je(n,e=1/0,s){if(e<=0||!yn(n)||n.__v_skip||(s=s||new Set,s.has(n)))return n;if(s.add(n),e--,On(n))je(n.value,e,s);else if(Y(n))for(let t=0;t<n.length;t++)je(n[t],e,s);else if(Ws(n)||Is(n))n.forEach(t=>{je(t,e,s)});else if(Ur(n)){for(const t in n)je(n[t],e,s);for(const t of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,t)&&je(n[t],e,s)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function wt(n,e,s,t){try{return t?n(...t):n()}catch(a){Tt(a,e,s)}}function ke(n,e,s,t){if(tn(n)){const a=wt(n,e,s,t);return a&&Wr(a)&&a.catch(o=>{Tt(o,e,s)}),a}if(Y(n)){const a=[];for(let o=0;o<n.length;o++)a.push(ke(n[o],e,s,t));return a}}function Tt(n,e,s,t=!0){const a=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:p}=e&&e.appContext.config||Tn;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${s}`;for(;l;){const d=l.ec;if(d){for(let v=0;v<d.length;v++)if(d[v](n,c,u)===!1)return}l=l.parent}if(o){Ze(),wt(o,null,10,[n,c,u]),ns();return}}ud(n,s,a,t,p)}function ud(n,e,s,t=!0,a=!1){if(a)throw n;console.error(n)}const Fn=[];let Te=-1;const Vs=[];let We=null,As=0;const kl=Promise.resolve();let ta=null;function ss(n){const e=ta||kl;return n?e.then(this?n.bind(this):n):e}function dd(n){let e=Te+1,s=Fn.length;for(;e<s;){const t=e+s>>>1,a=Fn[t],o=ut(a);o<n||o===n&&a.flags&2?e=t+1:s=t}return e}function No(n){if(!(n.flags&1)){const e=ut(n),s=Fn[Fn.length-1];!s||!(n.flags&2)&&e>=ut(s)?Fn.push(n):Fn.splice(dd(e),0,n),n.flags|=1,_l()}}function _l(){ta||(ta=kl.then(hl))}function vd(n){Y(n)?Vs.push(...n):We&&n.id===-1?We.splice(As+1,0,n):n.flags&1||(Vs.push(n),n.flags|=1),_l()}function xp(n,e,s=Te+1){for(;s<Fn.length;s++){const t=Fn[s];if(t&&t.flags&2){if(n&&t.id!==n.uid)continue;Fn.splice(s,1),s--,t.flags&4&&(t.flags&=-2),t(),t.flags&4||(t.flags&=-2)}}}function aa(n){if(Vs.length){const e=[...new Set(Vs)].sort((s,t)=>ut(s)-ut(t));if(Vs.length=0,We){We.push(...e);return}for(We=e,As=0;As<We.length;As++){const s=We[As];s.flags&4&&(s.flags&=-2),s.flags&8||s(),s.flags&=-2}We=null,As=0}}const ut=n=>n.id==null?n.flags&2?-1:1/0:n.id;function hl(n){const e=me;try{for(Te=0;Te<Fn.length;Te++){const s=Fn[Te];s&&!(s.flags&8)&&(s.flags&4&&(s.flags&=-2),wt(s,s.i,s.i?15:14),s.flags&4||(s.flags&=-2))}}finally{for(;Te<Fn.length;Te++){const s=Fn[Te];s&&(s.flags&=-2)}Te=-1,Fn.length=0,aa(),ta=null,(Fn.length||Vs.length)&&hl()}}let Un=null,bl=null;function oa(n){const e=Un;return Un=n,bl=n&&n.type.__scopeId||null,e}function md(n,e=Un,s){if(!e||n._n)return n;const t=(...a)=>{t._d&&Mp(-1);const o=oa(e);let p;try{p=n(...a)}finally{oa(o),t._d&&Mp(1)}return p};return t._n=!0,t._c=!0,t._d=!0,t}function x_(n,e){if(Un===null)return n;const s=ba(Un),t=n.dirs||(n.dirs=[]);for(let a=0;a<e.length;a++){let[o,p,l,c=Tn]=e[a];o&&(tn(o)&&(o={mounted:o,updated:o}),o.deep&&je(p),t.push({dir:o,instance:s,value:p,oldValue:void 0,arg:l,modifiers:c}))}return n}function xe(n,e,s,t){const a=n.dirs,o=e&&e.dirs;for(let p=0;p<a.length;p++){const l=a[p];o&&(l.oldValue=o[p].value);let c=l.dir[t];c&&(Ze(),ke(c,s,8,[n.el,l,n,e]),ns())}}const fd=Symbol("_vte"),gl=n=>n.__isTeleport,Je=Symbol("_leaveCb"),Ht=Symbol("_enterCb");function yl(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return xn(()=>{n.isMounted=!0}),Bo(()=>{n.isUnmounting=!0}),n}const pe=[Function,Array],El={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:pe,onEnter:pe,onAfterEnter:pe,onEnterCancelled:pe,onBeforeLeave:pe,onLeave:pe,onAfterLeave:pe,onLeaveCancelled:pe,onBeforeAppear:pe,onAppear:pe,onAfterAppear:pe,onAppearCancelled:pe},wl=n=>{const e=n.subTree;return e.component?wl(e.component):e},kd={name:"BaseTransition",props:El,setup(n,{slots:e}){const s=Us(),t=yl();return()=>{const a=e.default&&$o(e.default(),!0);if(!a||!a.length)return;const o=Tl(a),p=vn(n),{mode:l}=p;if(t.isLeaving)return Va(o);const c=Sp(o);if(!c)return Va(o);let u=dt(c,p,t,s,v=>u=v);c.type!==zn&&vs(c,u);let d=s.subTree&&Sp(s.subTree);if(d&&d.type!==zn&&!ps(c,d)&&wl(s).type!==zn){let v=dt(d,p,t,s);if(vs(d,v),l==="out-in"&&c.type!==zn)return t.isLeaving=!0,v.afterLeave=()=>{t.isLeaving=!1,s.job.flags&8||s.update(),delete v.afterLeave,d=void 0},Va(o);l==="in-out"&&c.type!==zn?v.delayLeave=(k,f,g)=>{const y=xl(t,d);y[String(d.key)]=d,k[Je]=()=>{f(),k[Je]=void 0,delete u.delayedLeave,d=void 0},u.delayedLeave=()=>{g(),delete u.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return o}}};function Tl(n){let e=n[0];if(n.length>1){for(const s of n)if(s.type!==zn){e=s;break}}return e}const _d=kd;function xl(n,e){const{leavingVNodes:s}=n;let t=s.get(e.type);return t||(t=Object.create(null),s.set(e.type,t)),t}function dt(n,e,s,t,a){const{appear:o,mode:p,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:d,onEnterCancelled:v,onBeforeLeave:k,onLeave:f,onAfterLeave:g,onLeaveCancelled:y,onBeforeAppear:A,onAppear:E,onAfterAppear:S,onAppearCancelled:b}=e,T=String(n.key),C=xl(s,n),P=(B,I)=>{B&&ke(B,t,9,I)},M=(B,I)=>{const J=I[1];P(B,I),Y(B)?B.every(j=>j.length<=1)&&J():B.length<=1&&J()},U={mode:p,persisted:l,beforeEnter(B){let I=c;if(!s.isMounted)if(o)I=A||c;else return;B[Je]&&B[Je](!0);const J=C[T];J&&ps(n,J)&&J.el[Je]&&J.el[Je](),P(I,[B])},enter(B){let I=u,J=d,j=v;if(!s.isMounted)if(o)I=E||u,J=S||d,j=b||v;else return;let en=!1;const wn=B[Ht]=Ln=>{en||(en=!0,Ln?P(j,[B]):P(J,[B]),U.delayedLeave&&U.delayedLeave(),B[Ht]=void 0)};I?M(I,[B,wn]):wn()},leave(B,I){const J=String(n.key);if(B[Ht]&&B[Ht](!0),s.isUnmounting)return I();P(k,[B]);let j=!1;const en=B[Je]=wn=>{j||(j=!0,I(),wn?P(y,[B]):P(g,[B]),B[Je]=void 0,C[J]===n&&delete C[J])};C[J]=n,f?M(f,[B,en]):en()},clone(B){const I=dt(B,e,s,t,a);return a&&a(I),I}};return U}function Va(n){if(xt(n))return n=Xe(n),n.children=null,n}function Sp(n){if(!xt(n))return gl(n.type)&&n.children?Tl(n.children):n;const{shapeFlag:e,children:s}=n;if(s){if(e&16)return s[0];if(e&32&&tn(s.default))return s.default()}}function vs(n,e){n.shapeFlag&6&&n.component?(n.transition=e,vs(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function $o(n,e=!1,s){let t=[],a=0;for(let o=0;o<n.length;o++){let p=n[o];const l=s==null?p.key:String(s)+String(p.key!=null?p.key:o);p.type===ne?(p.patchFlag&128&&a++,t=t.concat($o(p.children,e,l))):(e||p.type!==zn)&&t.push(l!=null?Xe(p,{key:l}):p)}if(a>1)for(let o=0;o<t.length;o++)t[o].patchFlag=-2;return t}/*! #__NO_SIDE_EFFECTS__ */function $(n,e){return tn(n)?(()=>In({name:n.name},e,{setup:n}))():n}function qo(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function vt(n,e,s,t,a=!1){if(Y(n)){n.forEach((g,y)=>vt(g,e&&(Y(e)?e[y]:e),s,t,a));return}if(Cs(t)&&!a){t.shapeFlag&512&&t.type.__asyncResolved&&t.component.subTree.component&&vt(n,e,s,t.component.subTree);return}const o=t.shapeFlag&4?ba(t.component):t.el,p=a?null:o,{i:l,r:c}=n,u=e&&e.r,d=l.refs===Tn?l.refs={}:l.refs,v=l.setupState,k=vn(v),f=v===Tn?()=>!1:g=>hn(k,g);if(u!=null&&u!==c&&(pn(u)?(d[u]=null,f(u)&&(v[u]=null)):On(u)&&(u.value=null)),tn(c))wt(c,l,12,[p,d]);else{const g=pn(c),y=On(c);if(g||y){const A=()=>{if(n.f){const E=g?f(c)?v[c]:d[c]:c.value;a?Y(E)&&Ao(E,o):Y(E)?E.includes(o)||E.push(o):g?(d[c]=[o],f(c)&&(v[c]=d[c])):(c.value=[o],n.k&&(d[n.k]=c.value))}else g?(d[c]=p,f(c)&&(v[c]=p)):y&&(c.value=p,n.k&&(d[n.k]=p))};p?(A.id=-1,Zn(A,s)):A()}}}let Ap=!1;const xs=()=>{Ap||(console.error("Hydration completed but contains mismatches."),Ap=!0)},hd=n=>n.namespaceURI.includes("svg")&&n.tagName!=="foreignObject",bd=n=>n.namespaceURI.includes("MathML"),Ft=n=>{if(n.nodeType===1){if(hd(n))return"svg";if(bd(n))return"mathml"}},Rs=n=>n.nodeType===8;function gd(n){const{mt:e,p:s,o:{patchProp:t,createText:a,nextSibling:o,parentNode:p,remove:l,insert:c,createComment:u}}=n,d=(b,T)=>{if(!T.hasChildNodes()){s(null,b,T),aa(),T._vnode=b;return}v(T.firstChild,b,null,null,null),aa(),T._vnode=b},v=(b,T,C,P,M,U=!1)=>{U=U||!!T.dynamicChildren;const B=Rs(b)&&b.data==="[",I=()=>y(b,T,C,P,M,B),{type:J,ref:j,shapeFlag:en,patchFlag:wn}=T;let Ln=b.nodeType;T.el=b,wn===-2&&(U=!1,T.dynamicChildren=null);let X=null;switch(J){case cs:Ln!==3?T.children===""?(c(T.el=a(""),p(b),b),X=b):X=I():(b.data!==T.children&&(xs(),b.data=T.children),X=o(b));break;case zn:S(b)?(X=o(b),E(T.el=b.content.firstChild,b,C)):Ln!==8||B?X=I():X=o(b);break;case ot:if(B&&(b=o(b),Ln=b.nodeType),Ln===1||Ln===3){X=b;const an=!T.children.length;for(let G=0;G<T.staticCount;G++)an&&(T.children+=X.nodeType===1?X.outerHTML:X.data),G===T.staticCount-1&&(T.anchor=X),X=o(X);return B?o(X):X}else I();break;case ne:B?X=g(b,T,C,P,M,U):X=I();break;default:if(en&1)(Ln!==1||T.type.toLowerCase()!==b.tagName.toLowerCase())&&!S(b)?X=I():X=k(b,T,C,P,M,U);else if(en&6){T.slotScopeIds=M;const an=p(b);if(B?X=A(b):Rs(b)&&b.data==="teleport start"?X=A(b,b.data,"teleport end"):X=o(b),e(T,an,null,C,P,Ft(an),U),Cs(T)&&!T.type.__asyncResolved){let G;B?(G=Pn(ne),G.anchor=X?X.previousSibling:an.lastChild):G=b.nodeType===3?Xl(""):Pn("div"),G.el=b,T.component.subTree=G}}else en&64?Ln!==8?X=I():X=T.type.hydrate(b,T,C,P,M,U,n,f):en&128&&(X=T.type.hydrate(b,T,C,P,Ft(p(b)),M,U,n,v))}return j!=null&&vt(j,null,P,T),X},k=(b,T,C,P,M,U)=>{U=U||!!T.dynamicChildren;const{type:B,props:I,patchFlag:J,shapeFlag:j,dirs:en,transition:wn}=T,Ln=B==="input"||B==="option";if(Ln||J!==-1){en&&xe(T,null,C,"created");let X=!1;if(S(b)){X=ql(null,wn)&&C&&C.vnode.props&&C.vnode.props.appear;const G=b.content.firstChild;X&&wn.beforeEnter(G),E(G,b,C),T.el=b=G}if(j&16&&!(I&&(I.innerHTML||I.textContent))){let G=f(b.firstChild,T,b,C,P,M,U);for(;G;){zt(b,1)||xs();const Dn=G;G=G.nextSibling,l(Dn)}}else if(j&8){let G=T.children;G[0]===`
`&&(b.tagName==="PRE"||b.tagName==="TEXTAREA")&&(G=G.slice(1)),b.textContent!==G&&(zt(b,0)||xs(),b.textContent=T.children)}if(I){if(Ln||!U||J&48){const G=b.tagName.includes("-");for(const Dn in I)(Ln&&(Dn.endsWith("value")||Dn==="indeterminate")||bt(Dn)&&!Ds(Dn)||Dn[0]==="."||G)&&t(b,Dn,null,I[Dn],void 0,C)}else if(I.onClick)t(b,"onClick",null,I.onClick,void 0,C);else if(J&4&&ls(I.style))for(const G in I.style)I.style[G]}let an;(an=I&&I.onVnodeBeforeMount)&&re(an,C,T),en&&xe(T,null,C,"beforeMount"),((an=I&&I.onVnodeMounted)||en||X)&&Ul(()=>{an&&re(an,C,T),X&&wn.enter(b),en&&xe(T,null,C,"mounted")},P)}return b.nextSibling},f=(b,T,C,P,M,U,B)=>{B=B||!!T.dynamicChildren;const I=T.children,J=I.length;for(let j=0;j<J;j++){const en=B?I[j]:I[j]=le(I[j]),wn=en.type===cs;b?(wn&&!B&&j+1<J&&le(I[j+1]).type===cs&&(c(a(b.data.slice(en.children.length)),C,o(b)),b.data=en.children),b=v(b,en,P,M,U,B)):wn&&!en.children?c(en.el=a(""),C):(zt(C,1)||xs(),s(null,en,C,null,P,M,Ft(C),U))}return b},g=(b,T,C,P,M,U)=>{const{slotScopeIds:B}=T;B&&(M=M?M.concat(B):B);const I=p(b),J=f(o(b),T,I,C,P,M,U);return J&&Rs(J)&&J.data==="]"?o(T.anchor=J):(xs(),c(T.anchor=u("]"),I,J),J)},y=(b,T,C,P,M,U)=>{if(zt(b.parentElement,1)||xs(),T.el=null,U){const J=A(b);for(;;){const j=o(b);if(j&&j!==J)l(j);else break}}const B=o(b),I=p(b);return l(b),s(null,T,I,B,C,P,Ft(I),M),C&&(C.vnode.el=T.el,Wl(C,T.el)),B},A=(b,T="[",C="]")=>{let P=0;for(;b;)if(b=o(b),b&&Rs(b)&&(b.data===T&&P++,b.data===C)){if(P===0)return o(b);P--}return b},E=(b,T,C)=>{const P=T.parentNode;P&&P.replaceChild(b,T);let M=C;for(;M;)M.vnode.el===T&&(M.vnode.el=M.subTree.el=b),M=M.parent},S=b=>b.nodeType===1&&b.tagName==="TEMPLATE";return[d,v]}const Lp="data-allow-mismatch",yd={[0]:"text",[1]:"children",[2]:"class",[3]:"style",[4]:"attribute"};function zt(n,e){if(e===0||e===1)for(;n&&!n.hasAttribute(Lp);)n=n.parentElement;const s=n&&n.getAttribute(Lp);if(s==null)return!1;if(s==="")return!0;{const t=s.split(",");return e===0&&t.includes("children")?!0:s.split(",").includes(yd[e])}}ma().requestIdleCallback;ma().cancelIdleCallback;function Ed(n,e){if(Rs(n)&&n.data==="["){let s=1,t=n.nextSibling;for(;t;){if(t.nodeType===1){if(e(t)===!1)break}else if(Rs(t))if(t.data==="]"){if(--s===0)break}else t.data==="["&&s++;t=t.nextSibling}}else e(n)}const Cs=n=>!!n.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function m(n){tn(n)&&(n={loader:n});const{loader:e,loadingComponent:s,errorComponent:t,delay:a=200,hydrate:o,timeout:p,suspensible:l=!0,onError:c}=n;let u=null,d,v=0;const k=()=>(v++,u=null,f()),f=()=>{let g;return u||(g=u=e().catch(y=>{if(y=y instanceof Error?y:new Error(String(y)),c)return new Promise((A,E)=>{c(y,()=>A(k()),()=>E(y),v+1)});throw y}).then(y=>g!==u&&u?u:(y&&(y.__esModule||y[Symbol.toStringTag]==="Module")&&(y=y.default),d=y,y)))};return $({name:"AsyncComponentWrapper",__asyncLoader:f,__asyncHydrate(g,y,A){const E=o?()=>{const S=o(A,b=>Ed(g,b));S&&(y.bum||(y.bum=[])).push(S)}:A;d?E():f().then(()=>!y.isUnmounted&&E())},get __asyncResolved(){return d},setup(){const g=Cn;if(qo(g),d)return()=>Ca(d,g);const y=b=>{u=null,Tt(b,g,13,!t)};if(l&&g.suspense||$s)return f().then(b=>()=>Ca(b,g)).catch(b=>(y(b),()=>t?Pn(t,{error:b}):null));const A=Z(!1),E=Z(),S=Z(!!a);return a&&setTimeout(()=>{S.value=!1},a),p!=null&&setTimeout(()=>{if(!A.value&&!E.value){const b=new Error(`Async component timed out after ${p}ms.`);y(b),E.value=b}},p),f().then(()=>{A.value=!0,g.parent&&xt(g.parent.vnode)&&g.parent.update()}).catch(b=>{y(b),E.value=b}),()=>{if(A.value&&d)return Ca(d,g);if(E.value&&t)return Pn(t,{error:E.value});if(s&&!S.value)return Pn(s)}}})}function Ca(n,e){const{ref:s,props:t,children:a,ce:o}=e.vnode,p=Pn(n,t,a);return p.ref=s,p.ce=o,delete e.vnode.ce,p}const xt=n=>n.type.__isKeepAlive;function wd(n,e){Sl(n,"a",e)}function Td(n,e){Sl(n,"da",e)}function Sl(n,e,s=Cn){const t=n.__wdc||(n.__wdc=()=>{let a=s;for(;a;){if(a.isDeactivated)return;a=a.parent}return n()});if(_a(e,t,s),s){let a=s.parent;for(;a&&a.parent;)xt(a.parent.vnode)&&xd(t,e,s,a),a=a.parent}}function xd(n,e,s,t){const a=_a(e,n,t,!0);St(()=>{Ao(t[e],a)},s)}function _a(n,e,s=Cn,t=!1){if(s){const a=s[n]||(s[n]=[]),o=e.__weh||(e.__weh=(...p)=>{Ze();const l=At(s),c=ke(e,s,n,p);return l(),ns(),c});return t?a.unshift(o):a.push(o),o}}const $e=n=>(e,s=Cn)=>{(!$s||n==="sp")&&_a(n,(...t)=>e(...t),s)},Sd=$e("bm"),xn=$e("m"),Ad=$e("bu"),Al=$e("u"),Bo=$e("bum"),St=$e("um"),Ld=$e("sp"),Rd=$e("rtg"),Pd=$e("rtc");function Od(n,e=Cn){_a("ec",n,e)}const Ll="components";function se(n,e){return Dd(Ll,n,!0,e)||n}const Id=Symbol.for("v-ndc");function Dd(n,e,s=!0,t=!1){const a=Un||Cn;if(a){const o=a.type;if(n===Ll){const l=bv(o,!1);if(l&&(l===e||l===Kn(e)||l===yt(Kn(e))))return o}const p=Rp(a[n]||o[n],e)||Rp(a.appContext[n],e);return!p&&t?o:p}}function Rp(n,e){return n&&(n[e]||n[Kn(e)]||n[yt(Kn(e))])}function S_(n,e,s,t){let a;const o=s&&s[t],p=Y(n);if(p||pn(n)){const l=p&&ls(n);let c=!1;l&&(c=!ie(n),n=ka(n)),a=new Array(n.length);for(let u=0,d=n.length;u<d;u++)a[u]=e(c?qn(n[u]):n[u],u,void 0,o&&o[u])}else if(typeof n=="number"){a=new Array(n);for(let l=0;l<n;l++)a[l]=e(l+1,l,void 0,o&&o[l])}else if(yn(n))if(n[Symbol.iterator])a=Array.from(n,(l,c)=>e(l,c,void 0,o&&o[c]));else{const l=Object.keys(n);a=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const d=l[c];a[c]=e(n[d],d,c,o&&o[c])}}else a=[];return s&&(s[t]=a),a}const ao=n=>n?Ql(n)?ba(n):ao(n.parent):null,at=In(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>ao(n.parent),$root:n=>ao(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Ho(n),$forceUpdate:n=>n.f||(n.f=()=>{No(n.update)}),$nextTick:n=>n.n||(n.n=ss.bind(n.proxy)),$watch:n=>nv.bind(n)}),ja=(n,e)=>n!==Tn&&!n.__isScriptSetup&&hn(n,e),Vd={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:s,setupState:t,data:a,props:o,accessCache:p,type:l,appContext:c}=n;let u;if(e[0]!=="$"){const f=p[e];if(f!==void 0)switch(f){case 1:return t[e];case 2:return a[e];case 4:return s[e];case 3:return o[e]}else{if(ja(t,e))return p[e]=1,t[e];if(a!==Tn&&hn(a,e))return p[e]=2,a[e];if((u=n.propsOptions[0])&&hn(u,e))return p[e]=3,o[e];if(s!==Tn&&hn(s,e))return p[e]=4,s[e];oo&&(p[e]=0)}}const d=at[e];let v,k;if(d)return e==="$attrs"&&$n(n.attrs,"get",""),d(n);if((v=l.__cssModules)&&(v=v[e]))return v;if(s!==Tn&&hn(s,e))return p[e]=4,s[e];if(k=c.config.globalProperties,hn(k,e))return k[e]},set({_:n},e,s){const{data:t,setupState:a,ctx:o}=n;return ja(a,e)?(a[e]=s,!0):t!==Tn&&hn(t,e)?(t[e]=s,!0):hn(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(o[e]=s,!0)},has({_:{data:n,setupState:e,accessCache:s,ctx:t,appContext:a,propsOptions:o}},p){let l;return!!s[p]||n!==Tn&&hn(n,p)||ja(e,p)||(l=o[0])&&hn(l,p)||hn(t,p)||hn(at,p)||hn(a.config.globalProperties,p)},defineProperty(n,e,s){return s.get!=null?n._.accessCache[e]=0:hn(s,"value")&&this.set(n,e,s.value,null),Reflect.defineProperty(n,e,s)}};function Pp(n){return Y(n)?n.reduce((e,s)=>(e[s]=null,e),{}):n}let oo=!0;function Cd(n){const e=Ho(n),s=n.proxy,t=n.ctx;oo=!1,e.beforeCreate&&Op(e.beforeCreate,n,"bc");const{data:a,computed:o,methods:p,watch:l,provide:c,inject:u,created:d,beforeMount:v,mounted:k,beforeUpdate:f,updated:g,activated:y,deactivated:A,beforeDestroy:E,beforeUnmount:S,destroyed:b,unmounted:T,render:C,renderTracked:P,renderTriggered:M,errorCaptured:U,serverPrefetch:B,expose:I,inheritAttrs:J,components:j,directives:en,filters:wn}=e;if(u&&jd(u,t,null),p)for(const an in p){const G=p[an];tn(G)&&(t[an]=G.bind(s))}if(a){const an=a.call(s,s);yn(an)&&(n.data=Et(an))}if(oo=!0,o)for(const an in o){const G=o[an],Dn=tn(G)?G.bind(s,s):tn(G.get)?G.get.bind(s,s):me,He=!tn(G)&&tn(G.set)?G.set.bind(s):me,ye=w({get:Dn,set:He});Object.defineProperty(t,an,{enumerable:!0,configurable:!0,get:()=>ye.value,set:Jn=>ye.value=Jn})}if(l)for(const an in l)Rl(l[an],t,s,an);if(c){const an=tn(c)?c.call(s):c;Reflect.ownKeys(an).forEach(G=>{ce(G,an[G])})}d&&Op(d,n,"c");function X(an,G){Y(G)?G.forEach(Dn=>an(Dn.bind(s))):G&&an(G.bind(s))}if(X(Sd,v),X(xn,k),X(Ad,f),X(Al,g),X(wd,y),X(Td,A),X(Od,U),X(Pd,P),X(Rd,M),X(Bo,S),X(St,T),X(Ld,B),Y(I))if(I.length){const an=n.exposed||(n.exposed={});I.forEach(G=>{Object.defineProperty(an,G,{get:()=>s[G],set:Dn=>s[G]=Dn})})}else n.exposed||(n.exposed={});C&&n.render===me&&(n.render=C),J!=null&&(n.inheritAttrs=J),j&&(n.components=j),en&&(n.directives=en),B&&qo(n)}function jd(n,e,s=me){Y(n)&&(n=po(n));for(const t in n){const a=n[t];let o;yn(a)?"default"in a?o=fn(a.from||t,a.default,!0):o=fn(a.from||t):o=fn(a),On(o)?Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:()=>o.value,set:p=>o.value=p}):e[t]=o}}function Op(n,e,s){ke(Y(n)?n.map(t=>t.bind(e.proxy)):n.bind(e.proxy),e,s)}function Rl(n,e,s,t){let a=t.includes(".")?Fl(s,t):()=>s[t];if(pn(n)){const o=e[n];tn(o)&&cn(a,o)}else if(tn(n))cn(a,n.bind(s));else if(yn(n))if(Y(n))n.forEach(o=>Rl(o,e,s,t));else{const o=tn(n.handler)?n.handler.bind(s):e[n.handler];tn(o)&&cn(a,o,n)}}function Ho(n){const e=n.type,{mixins:s,extends:t}=e,{mixins:a,optionsCache:o,config:{optionMergeStrategies:p}}=n.appContext,l=o.get(e);let c;return l?c=l:!a.length&&!s&&!t?c=e:(c={},a.length&&a.forEach(u=>pa(c,u,p,!0)),pa(c,e,p)),yn(e)&&o.set(e,c),c}function pa(n,e,s,t=!1){const{mixins:a,extends:o}=e;o&&pa(n,o,s,!0),a&&a.forEach(p=>pa(n,p,s,!0));for(const p in e)if(!(t&&p==="expose")){const l=Md[p]||s&&s[p];n[p]=l?l(n[p],e[p]):e[p]}return n}const Md={data:Ip,props:Dp,emits:Dp,methods:et,computed:et,beforeCreate:Bn,created:Bn,beforeMount:Bn,mounted:Bn,beforeUpdate:Bn,updated:Bn,beforeDestroy:Bn,beforeUnmount:Bn,destroyed:Bn,unmounted:Bn,activated:Bn,deactivated:Bn,errorCaptured:Bn,serverPrefetch:Bn,components:et,directives:et,watch:$d,provide:Ip,inject:Nd};function Ip(n,e){return e?n?function(){return In(tn(n)?n.call(this,this):n,tn(e)?e.call(this,this):e)}:e:n}function Nd(n,e){return et(po(n),po(e))}function po(n){if(Y(n)){const e={};for(let s=0;s<n.length;s++)e[n[s]]=n[s];return e}return n}function Bn(n,e){return n?[...new Set([].concat(n,e))]:e}function et(n,e){return n?In(Object.create(null),n,e):e}function Dp(n,e){return n?Y(n)&&Y(e)?[...new Set([...n,...e])]:In(Object.create(null),Pp(n),Pp(e??{})):e}function $d(n,e){if(!n)return e;if(!e)return n;const s=In(Object.create(null),n);for(const t in e)s[t]=Bn(n[t],e[t]);return s}function Pl(){return{app:null,config:{isNativeTag:hu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qd=0;function Bd(n,e){return function(t,a=null){tn(t)||(t=In({},t)),a!=null&&!yn(a)&&(a=null);const o=Pl(),p=new WeakSet,l=[];let c=!1;const u=o.app={_uid:qd++,_component:t,_props:a,_container:null,_context:o,_instance:null,version:yv,get config(){return o.config},set config(d){},use(d,...v){return p.has(d)||(d&&tn(d.install)?(p.add(d),d.install(u,...v)):tn(d)&&(p.add(d),d(u,...v))),u},mixin(d){return o.mixins.includes(d)||o.mixins.push(d),u},component(d,v){return v?(o.components[d]=v,u):o.components[d]},directive(d,v){return v?(o.directives[d]=v,u):o.directives[d]},mount(d,v,k){if(!c){const f=u._ceVNode||Pn(t,a);return f.appContext=o,k===!0?k="svg":k===!1&&(k=void 0),v&&e?e(f,d):n(f,d,k),c=!0,u._container=d,d.__vue_app__=u,ba(f.component)}},onUnmount(d){l.push(d)},unmount(){c&&(ke(l,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(d,v){return o.provides[d]=v,u},runWithContext(d){const v=js;js=u;try{return d()}finally{js=v}}};return u}}let js=null;function ce(n,e){if(Cn){let s=Cn.provides;const t=Cn.parent&&Cn.parent.provides;t===s&&(s=Cn.provides=Object.create(t)),s[n]=e}}function fn(n,e,s=!1){const t=Cn||Un;if(t||js){const a=js?js._context.provides:t?t.parent==null?t.vnode.appContext&&t.vnode.appContext.provides:t.parent.provides:void 0;if(a&&n in a)return a[n];if(arguments.length>1)return s&&tn(e)?e.call(t&&t.proxy):e}}const Ol={},Il=()=>Object.create(Ol),Dl=n=>Object.getPrototypeOf(n)===Ol;function Hd(n,e,s,t=!1){const a={},o=Il();n.propsDefaults=Object.create(null),Vl(n,e,a,o);for(const p in n.propsOptions[0])p in a||(a[p]=void 0);s?n.props=t?a:vl(a):n.type.props?n.props=a:n.props=o,n.attrs=o}function Fd(n,e,s,t){const{props:a,attrs:o,vnode:{patchFlag:p}}=n,l=vn(a),[c]=n.propsOptions;let u=!1;if((t||p>0)&&!(p&16)){if(p&8){const d=n.vnode.dynamicProps;for(let v=0;v<d.length;v++){let k=d[v];if(ha(n.emitsOptions,k))continue;const f=e[k];if(c)if(hn(o,k))f!==o[k]&&(o[k]=f,u=!0);else{const g=Kn(k);a[g]=ro(c,l,g,f,n,!1)}else f!==o[k]&&(o[k]=f,u=!0)}}}else{Vl(n,e,a,o)&&(u=!0);let d;for(const v in l)(!e||!hn(e,v)&&((d=hs(v))===v||!hn(e,d)))&&(c?s&&(s[v]!==void 0||s[d]!==void 0)&&(a[v]=ro(c,l,v,void 0,n,!0)):delete a[v]);if(o!==l)for(const v in o)(!e||!hn(e,v))&&(delete o[v],u=!0)}u&&Ce(n.attrs,"set","")}function Vl(n,e,s,t){const[a,o]=n.propsOptions;let p=!1,l;if(e)for(let c in e){if(Ds(c))continue;const u=e[c];let d;a&&hn(a,d=Kn(c))?!o||!o.includes(d)?s[d]=u:(l||(l={}))[d]=u:ha(n.emitsOptions,c)||(!(c in t)||u!==t[c])&&(t[c]=u,p=!0)}if(o){const c=vn(s),u=l||Tn;for(let d=0;d<o.length;d++){const v=o[d];s[v]=ro(a,c,v,u[v],n,!hn(u,v))}}return p}function ro(n,e,s,t,a,o){const p=n[s];if(p!=null){const l=hn(p,"default");if(l&&t===void 0){const c=p.default;if(p.type!==Function&&!p.skipFactory&&tn(c)){const{propsDefaults:u}=a;if(s in u)t=u[s];else{const d=At(a);t=u[s]=c.call(null,e),d()}}else t=c;a.ce&&a.ce._setProp(s,t)}p[0]&&(o&&!l?t=!1:p[1]&&(t===""||t===hs(s))&&(t=!0))}return t}const zd=new WeakMap;function Cl(n,e,s=!1){const t=s?zd:e.propsCache,a=t.get(n);if(a)return a;const o=n.props,p={},l=[];let c=!1;if(!tn(n)){const d=v=>{c=!0;const[k,f]=Cl(v,e,!0);In(p,k),f&&l.push(...f)};!s&&e.mixins.length&&e.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!o&&!c)return yn(n)&&t.set(n,Os),Os;if(Y(o))for(let d=0;d<o.length;d++){const v=Kn(o[d]);Vp(v)&&(p[v]=Tn)}else if(o)for(const d in o){const v=Kn(d);if(Vp(v)){const k=o[d],f=p[v]=Y(k)||tn(k)?{type:k}:In({},k),g=f.type;let y=!1,A=!0;if(Y(g))for(let E=0;E<g.length;++E){const S=g[E],b=tn(S)&&S.name;if(b==="Boolean"){y=!0;break}else b==="String"&&(A=!1)}else y=tn(g)&&g.name==="Boolean";f[0]=y,f[1]=A,(y||hn(f,"default"))&&l.push(v)}}const u=[p,l];return yn(n)&&t.set(n,u),u}function Vp(n){return n[0]!=="$"&&!Ds(n)}const jl=n=>n[0]==="_"||n==="$stable",Fo=n=>Y(n)?n.map(le):[le(n)],Wd=(n,e,s)=>{if(e._n)return e;const t=md((...a)=>Fo(e(...a)),s);return t._c=!1,t},Ml=(n,e,s)=>{const t=n._ctx;for(const a in n){if(jl(a))continue;const o=n[a];if(tn(o))e[a]=Wd(a,o,t);else if(o!=null){const p=Fo(o);e[a]=()=>p}}},Nl=(n,e)=>{const s=Fo(e);n.slots.default=()=>s},$l=(n,e,s)=>{for(const t in e)(s||t!=="_")&&(n[t]=e[t])},Jd=(n,e,s)=>{const t=n.slots=Il();if(n.vnode.shapeFlag&32){const a=e._;a?($l(t,e,s),s&&Gr(t,"_",a,!0)):Ml(e,t)}else e&&Nl(n,e)},Ud=(n,e,s)=>{const{vnode:t,slots:a}=n;let o=!0,p=Tn;if(t.shapeFlag&32){const l=e._;l?s&&l===1?o=!1:$l(a,e,s):(o=!e.$stable,Ml(e,a)),p=e}else e&&(Nl(n,e),p={default:1});if(o)for(const l in a)!jl(l)&&p[l]==null&&delete a[l]},Zn=Ul;function Gd(n){return Kd(n,gd)}function Kd(n,e){const s=ma();s.__VUE__=!0;const{insert:t,remove:a,patchProp:o,createElement:p,createText:l,createComment:c,setText:u,setElementText:d,parentNode:v,nextSibling:k,setScopeId:f=me,insertStaticContent:g}=n,y=(_,h,x,O=null,L=null,D=null,H=void 0,q=null,N=!!h.dynamicChildren)=>{if(_===h)return;_&&!ps(_,h)&&(O=R(_),Jn(_,L,D,!0),_=null),h.patchFlag===-2&&(N=!1,h.dynamicChildren=null);const{type:V,ref:nn,shapeFlag:z}=h;switch(V){case cs:A(_,h,x,O);break;case zn:E(_,h,x,O);break;case ot:_==null&&S(h,x,O,H);break;case ne:j(_,h,x,O,L,D,H,q,N);break;default:z&1?C(_,h,x,O,L,D,H,q,N):z&6?en(_,h,x,O,L,D,H,q,N):(z&64||z&128)&&V.process(_,h,x,O,L,D,H,q,N,K)}nn!=null&&L&&vt(nn,_&&_.ref,D,h||_,!h)},A=(_,h,x,O)=>{if(_==null)t(h.el=l(h.children),x,O);else{const L=h.el=_.el;h.children!==_.children&&u(L,h.children)}},E=(_,h,x,O)=>{_==null?t(h.el=c(h.children||""),x,O):h.el=_.el},S=(_,h,x,O)=>{[_.el,_.anchor]=g(_.children,h,x,O,_.el,_.anchor)},b=({el:_,anchor:h},x,O)=>{let L;for(;_&&_!==h;)L=k(_),t(_,x,O),_=L;t(h,x,O)},T=({el:_,anchor:h})=>{let x;for(;_&&_!==h;)x=k(_),a(_),_=x;a(h)},C=(_,h,x,O,L,D,H,q,N)=>{h.type==="svg"?H="svg":h.type==="math"&&(H="mathml"),_==null?P(h,x,O,L,D,H,q,N):B(_,h,L,D,H,q,N)},P=(_,h,x,O,L,D,H,q)=>{let N,V;const{props:nn,shapeFlag:z,transition:Q,dirs:sn}=_;if(N=_.el=p(_.type,D,nn&&nn.is,nn),z&8?d(N,_.children):z&16&&U(_.children,N,null,O,L,Ma(_,D),H,q),sn&&xe(_,null,O,"created"),M(N,_,_.scopeId,H,O),nn){for(const Sn in nn)Sn!=="value"&&!Ds(Sn)&&o(N,Sn,null,nn[Sn],D,O);"value"in nn&&o(N,"value",null,nn.value,D),(V=nn.onVnodeBeforeMount)&&re(V,O,_)}sn&&xe(_,null,O,"beforeMount");const ln=ql(L,Q);ln&&Q.beforeEnter(N),t(N,h,x),((V=nn&&nn.onVnodeMounted)||ln||sn)&&Zn(()=>{V&&re(V,O,_),ln&&Q.enter(N),sn&&xe(_,null,O,"mounted")},L)},M=(_,h,x,O,L)=>{if(x&&f(_,x),O)for(let D=0;D<O.length;D++)f(_,O[D]);if(L){let D=L.subTree;if(h===D||Jl(D.type)&&(D.ssContent===h||D.ssFallback===h)){const H=L.vnode;M(_,H,H.scopeId,H.slotScopeIds,L.parent)}}},U=(_,h,x,O,L,D,H,q,N=0)=>{for(let V=N;V<_.length;V++){const nn=_[V]=q?Ue(_[V]):le(_[V]);y(null,nn,h,x,O,L,D,H,q)}},B=(_,h,x,O,L,D,H)=>{const q=h.el=_.el;let{patchFlag:N,dynamicChildren:V,dirs:nn}=h;N|=_.patchFlag&16;const z=_.props||Tn,Q=h.props||Tn;let sn;if(x&&ts(x,!1),(sn=Q.onVnodeBeforeUpdate)&&re(sn,x,h,_),nn&&xe(h,_,x,"beforeUpdate"),x&&ts(x,!0),(z.innerHTML&&Q.innerHTML==null||z.textContent&&Q.textContent==null)&&d(q,""),V?I(_.dynamicChildren,V,q,x,O,Ma(h,L),D):H||G(_,h,q,null,x,O,Ma(h,L),D,!1),N>0){if(N&16)J(q,z,Q,x,L);else if(N&2&&z.class!==Q.class&&o(q,"class",null,Q.class,L),N&4&&o(q,"style",z.style,Q.style,L),N&8){const ln=h.dynamicProps;for(let Sn=0;Sn<ln.length;Sn++){const bn=ln[Sn],Yn=z[bn],Nn=Q[bn];(Nn!==Yn||bn==="value")&&o(q,bn,Yn,Nn,L,x)}}N&1&&_.children!==h.children&&d(q,h.children)}else!H&&V==null&&J(q,z,Q,x,L);((sn=Q.onVnodeUpdated)||nn)&&Zn(()=>{sn&&re(sn,x,h,_),nn&&xe(h,_,x,"updated")},O)},I=(_,h,x,O,L,D,H)=>{for(let q=0;q<h.length;q++){const N=_[q],V=h[q],nn=N.el&&(N.type===ne||!ps(N,V)||N.shapeFlag&70)?v(N.el):x;y(N,V,nn,null,O,L,D,H,!0)}},J=(_,h,x,O,L)=>{if(h!==x){if(h!==Tn)for(const D in h)!Ds(D)&&!(D in x)&&o(_,D,h[D],null,L,O);for(const D in x){if(Ds(D))continue;const H=x[D],q=h[D];H!==q&&D!=="value"&&o(_,D,q,H,L,O)}"value"in x&&o(_,"value",h.value,x.value,L)}},j=(_,h,x,O,L,D,H,q,N)=>{const V=h.el=_?_.el:l(""),nn=h.anchor=_?_.anchor:l("");let{patchFlag:z,dynamicChildren:Q,slotScopeIds:sn}=h;sn&&(q=q?q.concat(sn):sn),_==null?(t(V,x,O),t(nn,x,O),U(h.children||[],x,nn,L,D,H,q,N)):z>0&&z&64&&Q&&_.dynamicChildren?(I(_.dynamicChildren,Q,x,L,D,H,q),(h.key!=null||L&&h===L.subTree)&&Bl(_,h,!0)):G(_,h,x,nn,L,D,H,q,N)},en=(_,h,x,O,L,D,H,q,N)=>{h.slotScopeIds=q,_==null?h.shapeFlag&512?L.ctx.activate(h,x,O,H,N):wn(h,x,O,L,D,H,N):Ln(_,h,N)},wn=(_,h,x,O,L,D,H)=>{const q=_.component=mv(_,O,L);if(xt(_)&&(q.ctx.renderer=K),fv(q,!1,H),q.asyncDep){if(L&&L.registerDep(q,X,H),!_.el){const N=q.subTree=Pn(zn);E(null,N,h,x)}}else X(q,_,h,x,L,D,H)},Ln=(_,h,x)=>{const O=h.component=_.component;if(ov(_,h,x))if(O.asyncDep&&!O.asyncResolved){an(O,h,x);return}else O.next=h,O.update();else h.el=_.el,O.vnode=h},X=(_,h,x,O,L,D,H)=>{const q=()=>{if(_.isMounted){let{next:z,bu:Q,u:sn,parent:ln,vnode:Sn}=_;{const Xn=Hl(_);if(Xn){z&&(z.el=Sn.el,an(_,z,H)),Xn.asyncDep.then(()=>{_.isUnmounted||q()});return}}let bn=z,Yn;ts(_,!1),z?(z.el=Sn.el,an(_,z,H)):z=Sn,Q&&Xt(Q),(Yn=z.props&&z.props.onVnodeBeforeUpdate)&&re(Yn,ln,z,Sn),ts(_,!0);const Nn=Na(_),ve=_.subTree;_.subTree=Nn,y(ve,Nn,v(ve.el),R(ve),_,L,D),z.el=Nn.el,bn===null&&Wl(_,Nn.el),sn&&Zn(sn,L),(Yn=z.props&&z.props.onVnodeUpdated)&&Zn(()=>re(Yn,ln,z,Sn),L)}else{let z;const{el:Q,props:sn}=h,{bm:ln,m:Sn,parent:bn,root:Yn,type:Nn}=_,ve=Cs(h);if(ts(_,!1),ln&&Xt(ln),!ve&&(z=sn&&sn.onVnodeBeforeMount)&&re(z,bn,h),ts(_,!0),Q&&Rn){const Xn=()=>{_.subTree=Na(_),Rn(Q,_.subTree,_,L,null)};ve&&Nn.__asyncHydrate?Nn.__asyncHydrate(Q,_,Xn):Xn()}else{Yn.ce&&Yn.ce._injectChildStyle(Nn);const Xn=_.subTree=Na(_);y(null,Xn,x,O,_,L,D),h.el=Xn.el}if(Sn&&Zn(Sn,L),!ve&&(z=sn&&sn.onVnodeMounted)){const Xn=h;Zn(()=>re(z,bn,Xn),L)}(h.shapeFlag&256||bn&&Cs(bn.vnode)&&bn.vnode.shapeFlag&256)&&_.a&&Zn(_.a,L),_.isMounted=!0,h=x=O=null}};_.scope.on();const N=_.effect=new Zr(q);_.scope.off();const V=_.update=N.run.bind(N),nn=_.job=N.runIfDirty.bind(N);nn.i=_,nn.id=_.uid,N.scheduler=()=>No(nn),ts(_,!0),V()},an=(_,h,x)=>{h.component=_;const O=_.vnode.props;_.vnode=h,_.next=null,Fd(_,h.props,O,x),Ud(_,h.children,x),Ze(),xp(_),ns()},G=(_,h,x,O,L,D,H,q,N=!1)=>{const V=_&&_.children,nn=_?_.shapeFlag:0,z=h.children,{patchFlag:Q,shapeFlag:sn}=h;if(Q>0){if(Q&128){He(V,z,x,O,L,D,H,q,N);return}else if(Q&256){Dn(V,z,x,O,L,D,H,q,N);return}}sn&8?(nn&16&&oe(V,L,D),z!==V&&d(x,z)):nn&16?sn&16?He(V,z,x,O,L,D,H,q,N):oe(V,L,D,!0):(nn&8&&d(x,""),sn&16&&U(z,x,O,L,D,H,q,N))},Dn=(_,h,x,O,L,D,H,q,N)=>{_=_||Os,h=h||Os;const V=_.length,nn=h.length,z=Math.min(V,nn);let Q;for(Q=0;Q<z;Q++){const sn=h[Q]=N?Ue(h[Q]):le(h[Q]);y(_[Q],sn,x,null,L,D,H,q,N)}V>nn?oe(_,L,D,!0,!1,z):U(h,x,O,L,D,H,q,N,z)},He=(_,h,x,O,L,D,H,q,N)=>{let V=0;const nn=h.length;let z=_.length-1,Q=nn-1;for(;V<=z&&V<=Q;){const sn=_[V],ln=h[V]=N?Ue(h[V]):le(h[V]);if(ps(sn,ln))y(sn,ln,x,null,L,D,H,q,N);else break;V++}for(;V<=z&&V<=Q;){const sn=_[z],ln=h[Q]=N?Ue(h[Q]):le(h[Q]);if(ps(sn,ln))y(sn,ln,x,null,L,D,H,q,N);else break;z--,Q--}if(V>z){if(V<=Q){const sn=Q+1,ln=sn<nn?h[sn].el:O;for(;V<=Q;)y(null,h[V]=N?Ue(h[V]):le(h[V]),x,ln,L,D,H,q,N),V++}}else if(V>Q)for(;V<=z;)Jn(_[V],L,D,!0),V++;else{const sn=V,ln=V,Sn=new Map;for(V=ln;V<=Q;V++){const Qn=h[V]=N?Ue(h[V]):le(h[V]);Qn.key!=null&&Sn.set(Qn.key,V)}let bn,Yn=0;const Nn=Q-ln+1;let ve=!1,Xn=0;const Ys=new Array(Nn);for(V=0;V<Nn;V++)Ys[V]=0;for(V=sn;V<=z;V++){const Qn=_[V];if(Yn>=Nn){Jn(Qn,L,D,!0);continue}let Ee;if(Qn.key!=null)Ee=Sn.get(Qn.key);else for(bn=ln;bn<=Q;bn++)if(Ys[bn-ln]===0&&ps(Qn,h[bn])){Ee=bn;break}Ee===void 0?Jn(Qn,L,D,!0):(Ys[Ee-ln]=V+1,Ee>=Xn?Xn=Ee:ve=!0,y(Qn,h[Ee],x,null,L,D,H,q,N),Yn++)}const hp=ve?Yd(Ys):Os;for(bn=hp.length-1,V=Nn-1;V>=0;V--){const Qn=ln+V,Ee=h[Qn],bp=Qn+1<nn?h[Qn+1].el:O;Ys[V]===0?y(null,Ee,x,bp,L,D,H,q,N):ve&&(bn<0||V!==hp[bn]?ye(Ee,x,bp,2):bn--)}}},ye=(_,h,x,O,L=null)=>{const{el:D,type:H,transition:q,children:N,shapeFlag:V}=_;if(V&6){ye(_.component.subTree,h,x,O);return}if(V&128){_.suspense.move(h,x,O);return}if(V&64){H.move(_,h,x,K);return}if(H===ne){t(D,h,x);for(let z=0;z<N.length;z++)ye(N[z],h,x,O);t(_.anchor,h,x);return}if(H===ot){b(_,h,x);return}if(O!==2&&V&1&&q)if(O===0)q.beforeEnter(D),t(D,h,x),Zn(()=>q.enter(D),L);else{const{leave:z,delayLeave:Q,afterLeave:sn}=q,ln=()=>t(D,h,x),Sn=()=>{z(D,()=>{ln(),sn&&sn()})};Q?Q(D,ln,Sn):Sn()}else t(D,h,x)},Jn=(_,h,x,O=!1,L=!1)=>{const{type:D,props:H,ref:q,children:N,dynamicChildren:V,shapeFlag:nn,patchFlag:z,dirs:Q,cacheIndex:sn}=_;if(z===-2&&(L=!1),q!=null&&vt(q,null,x,_,!0),sn!=null&&(h.renderCache[sn]=void 0),nn&256){h.ctx.deactivate(_);return}const ln=nn&1&&Q,Sn=!Cs(_);let bn;if(Sn&&(bn=H&&H.onVnodeBeforeUnmount)&&re(bn,h,_),nn&6)Nt(_.component,x,O);else{if(nn&128){_.suspense.unmount(x,O);return}ln&&xe(_,null,h,"beforeUnmount"),nn&64?_.type.remove(_,h,x,K,O):V&&!V.hasOnce&&(D!==ne||z>0&&z&64)?oe(V,h,x,!1,!0):(D===ne&&z&384||!L&&nn&16)&&oe(N,h,x),O&&Es(_)}(Sn&&(bn=H&&H.onVnodeUnmounted)||ln)&&Zn(()=>{bn&&re(bn,h,_),ln&&xe(_,null,h,"unmounted")},x)},Es=_=>{const{type:h,el:x,anchor:O,transition:L}=_;if(h===ne){ws(x,O);return}if(h===ot){T(_);return}const D=()=>{a(x),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(_.shapeFlag&1&&L&&!L.persisted){const{leave:H,delayLeave:q}=L,N=()=>H(x,D);q?q(_.el,D,N):N()}else D()},ws=(_,h)=>{let x;for(;_!==h;)x=k(_),a(_),_=x;a(h)},Nt=(_,h,x)=>{const{bum:O,scope:L,job:D,subTree:H,um:q,m:N,a:V}=_;Cp(N),Cp(V),O&&Xt(O),L.stop(),D&&(D.flags|=8,Jn(H,_,h,x)),q&&Zn(q,h),Zn(()=>{_.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},oe=(_,h,x,O=!1,L=!1,D=0)=>{for(let H=D;H<_.length;H++)Jn(_[H],h,x,O,L)},R=_=>{if(_.shapeFlag&6)return R(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const h=k(_.anchor||_.el),x=h&&h[fd];return x?k(x):h};let W=!1;const F=(_,h,x)=>{_==null?h._vnode&&Jn(h._vnode,null,null,!0):y(h._vnode||null,_,h,null,null,null,x),h._vnode=_,W||(W=!0,xp(),aa(),W=!1)},K={p:y,um:Jn,m:ye,r:Es,mt:wn,mc:U,pc:G,pbc:I,n:R,o:n};let kn,Rn;return e&&([kn,Rn]=e(K)),{render:F,hydrate:kn,createApp:Bd(F,kn)}}function Ma({type:n,props:e},s){return s==="svg"&&n==="foreignObject"||s==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:s}function ts({effect:n,job:e},s){s?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function ql(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Bl(n,e,s=!1){const t=n.children,a=e.children;if(Y(t)&&Y(a))for(let o=0;o<t.length;o++){const p=t[o];let l=a[o];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=a[o]=Ue(a[o]),l.el=p.el),!s&&l.patchFlag!==-2&&Bl(p,l)),l.type===cs&&(l.el=p.el)}}function Yd(n){const e=n.slice(),s=[0];let t,a,o,p,l;const c=n.length;for(t=0;t<c;t++){const u=n[t];if(u!==0){if(a=s[s.length-1],n[a]<u){e[t]=a,s.push(t);continue}for(o=0,p=s.length-1;o<p;)l=o+p>>1,n[s[l]]<u?o=l+1:p=l;u<n[s[o]]&&(o>0&&(e[t]=s[o-1]),s[o]=t)}}for(o=s.length,p=s[o-1];o-- >0;)s[o]=p,p=e[p];return s}function Hl(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Hl(e)}function Cp(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const Xd=Symbol.for("v-scx"),Qd=()=>fn(Xd);function Zd(n,e){return zo(n,null,e)}function cn(n,e,s){return zo(n,e,s)}function zo(n,e,s=Tn){const{immediate:t,deep:a,flush:o,once:p}=s,l=In({},s),c=e&&t||!e&&o!=="post";let u;if($s){if(o==="sync"){const f=Qd();u=f.__watcherHandles||(f.__watcherHandles=[])}else if(!c){const f=()=>{};return f.stop=me,f.resume=me,f.pause=me,f}}const d=Cn;l.call=(f,g,y)=>ke(f,d,g,y);let v=!1;o==="post"?l.scheduler=f=>{Zn(f,d&&d.suspense)}:o!=="sync"&&(v=!0,l.scheduler=(f,g)=>{g?f():No(f)}),l.augmentJob=f=>{e&&(f.flags|=4),v&&(f.flags|=2,d&&(f.id=d.uid,f.i=d))};const k=cd(n,e,l);return $s&&(u?u.push(k):c&&k()),k}function nv(n,e,s){const t=this.proxy,a=pn(n)?n.includes(".")?Fl(t,n):()=>t[n]:n.bind(t,t);let o;tn(e)?o=e:(o=e.handler,s=e);const p=At(this),l=zo(a,o.bind(t),s);return p(),l}function Fl(n,e){const s=e.split(".");return()=>{let t=n;for(let a=0;a<s.length&&t;a++)t=t[s[a]];return t}}const ev=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Kn(e)}Modifiers`]||n[`${hs(e)}Modifiers`];function sv(n,e,...s){if(n.isUnmounted)return;const t=n.vnode.props||Tn;let a=s;const o=e.startsWith("update:"),p=o&&ev(t,e.slice(7));p&&(p.trim&&(a=s.map(d=>pn(d)?d.trim():d)),p.number&&(a=s.map(na)));let l,c=t[l=Ra(e)]||t[l=Ra(Kn(e))];!c&&o&&(c=t[l=Ra(hs(e))]),c&&ke(c,n,6,a);const u=t[l+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[l])return;n.emitted[l]=!0,ke(u,n,6,a)}}function zl(n,e,s=!1){const t=e.emitsCache,a=t.get(n);if(a!==void 0)return a;const o=n.emits;let p={},l=!1;if(!tn(n)){const c=u=>{const d=zl(u,e,!0);d&&(l=!0,In(p,d))};!s&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!o&&!l?(yn(n)&&t.set(n,null),null):(Y(o)?o.forEach(c=>p[c]=null):In(p,o),yn(n)&&t.set(n,p),p)}function ha(n,e){return!n||!bt(e)?!1:(e=e.slice(2).replace(/Once$/,""),hn(n,e[0].toLowerCase()+e.slice(1))||hn(n,hs(e))||hn(n,e))}function Na(n){const{type:e,vnode:s,proxy:t,withProxy:a,propsOptions:[o],slots:p,attrs:l,emit:c,render:u,renderCache:d,props:v,data:k,setupState:f,ctx:g,inheritAttrs:y}=n,A=oa(n);let E,S;try{if(s.shapeFlag&4){const T=a||t,C=T;E=le(u.call(C,T,d,v,f,k,g)),S=l}else{const T=e;E=le(T.length>1?T(v,{attrs:l,slots:p,emit:c}):T(v,null)),S=e.props?l:tv(l)}}catch(T){pt.length=0,Tt(T,n,1),E=Pn(zn)}let b=E;if(S&&y!==!1){const T=Object.keys(S),{shapeFlag:C}=b;T.length&&C&7&&(o&&T.some(So)&&(S=av(S,o)),b=Xe(b,S,!1,!0))}return s.dirs&&(b=Xe(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(s.dirs):s.dirs),s.transition&&vs(b,s.transition),E=b,oa(A),E}const tv=n=>{let e;for(const s in n)(s==="class"||s==="style"||bt(s))&&((e||(e={}))[s]=n[s]);return e},av=(n,e)=>{const s={};for(const t in n)(!So(t)||!(t.slice(9)in e))&&(s[t]=n[t]);return s};function ov(n,e,s){const{props:t,children:a,component:o}=n,{props:p,children:l,patchFlag:c}=e,u=o.emitsOptions;if(e.dirs||e.transition)return!0;if(s&&c>=0){if(c&1024)return!0;if(c&16)return t?jp(t,p,u):!!p;if(c&8){const d=e.dynamicProps;for(let v=0;v<d.length;v++){const k=d[v];if(p[k]!==t[k]&&!ha(u,k))return!0}}}else return(a||l)&&(!l||!l.$stable)?!0:t===p?!1:t?p?jp(t,p,u):!0:!!p;return!1}function jp(n,e,s){const t=Object.keys(e);if(t.length!==Object.keys(n).length)return!0;for(let a=0;a<t.length;a++){const o=t[a];if(e[o]!==n[o]&&!ha(s,o))return!0}return!1}function Wl({vnode:n,parent:e},s){for(;e;){const t=e.subTree;if(t.suspense&&t.suspense.activeBranch===n&&(t.el=n.el),t===n)(n=e.vnode).el=s,e=e.parent;else break}}const Jl=n=>n.__isSuspense;function Ul(n,e){e&&e.pendingBranch?Y(n)?e.effects.push(...n):e.effects.push(n):vd(n)}const ne=Symbol.for("v-fgt"),cs=Symbol.for("v-txt"),zn=Symbol.for("v-cmt"),ot=Symbol.for("v-stc"),pt=[];let ee=null;function pv(n=!1){pt.push(ee=n?null:[])}function rv(){pt.pop(),ee=pt[pt.length-1]||null}let mt=1;function Mp(n,e=!1){mt+=n,n<0&&ee&&e&&(ee.hasOnce=!0)}function Gl(n){return n.dynamicChildren=mt>0?ee||Os:null,rv(),mt>0&&ee&&ee.push(n),n}function A_(n,e,s,t,a,o){return Gl(Yl(n,e,s,t,a,o,!0))}function lv(n,e,s,t,a){return Gl(Pn(n,e,s,t,a,!0))}function ra(n){return n?n.__v_isVNode===!0:!1}function ps(n,e){return n.type===e.type&&n.key===e.key}const Kl=({key:n})=>n??null,Qt=({ref:n,ref_key:e,ref_for:s})=>(typeof n=="number"&&(n=""+n),n!=null?pn(n)||On(n)||tn(n)?{i:Un,r:n,k:e,f:!!s}:n:null);function Yl(n,e=null,s=null,t=0,a=null,o=n===ne?0:1,p=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Kl(e),ref:e&&Qt(e),scopeId:bl,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:t,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Un};return l?(Wo(c,s),o&128&&n.normalize(c)):s&&(c.shapeFlag|=pn(s)?8:16),mt>0&&!p&&ee&&(c.patchFlag>0||o&6)&&c.patchFlag!==32&&ee.push(c),c}const Pn=iv;function iv(n,e=null,s=null,t=0,a=null,o=!1){if((!n||n===Id)&&(n=zn),ra(n)){const l=Xe(n,e,!0);return s&&Wo(l,s),mt>0&&!o&&ee&&(l.shapeFlag&6?ee[ee.indexOf(n)]=l:ee.push(l)),l.patchFlag=-2,l}if(gv(n)&&(n=n.__vccOpts),e){e=cv(e);let{class:l,style:c}=e;l&&!pn(l)&&(e.class=Po(l)),yn(c)&&(Mo(c)&&!Y(c)&&(c=In({},c)),e.style=Ro(c))}const p=pn(n)?1:Jl(n)?128:gl(n)?64:yn(n)?4:tn(n)?2:0;return Yl(n,e,s,t,a,p,o,!0)}function cv(n){return n?Mo(n)||Dl(n)?In({},n):n:null}function Xe(n,e,s=!1,t=!1){const{props:a,ref:o,patchFlag:p,children:l,transition:c}=n,u=e?uv(a||{},e):a,d={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&Kl(u),ref:e&&e.ref?s&&o?Y(o)?o.concat(Qt(e)):[o,Qt(e)]:Qt(e):o,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:l,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==ne?p===-1?16:p|16:p,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Xe(n.ssContent),ssFallback:n.ssFallback&&Xe(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&t&&vs(d,c.clone(d)),d}function Xl(n=" ",e=0){return Pn(cs,null,n,e)}function L_(n,e){const s=Pn(ot,null,n);return s.staticCount=e,s}function R_(n="",e=!1){return e?(pv(),lv(zn,null,n)):Pn(zn,null,n)}function le(n){return n==null||typeof n=="boolean"?Pn(zn):Y(n)?Pn(ne,null,n.slice()):ra(n)?Ue(n):Pn(cs,null,String(n))}function Ue(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Xe(n)}function Wo(n,e){let s=0;const{shapeFlag:t}=n;if(e==null)e=null;else if(Y(e))s=16;else if(typeof e=="object")if(t&65){const a=e.default;a&&(a._c&&(a._d=!1),Wo(n,a()),a._c&&(a._d=!0));return}else{s=32;const a=e._;!a&&!Dl(e)?e._ctx=Un:a===3&&Un&&(Un.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else tn(e)?(e={default:e,_ctx:Un},s=32):(e=String(e),t&64?(s=16,e=[Xl(e)]):s=8);n.children=e,n.shapeFlag|=s}function uv(...n){const e={};for(let s=0;s<n.length;s++){const t=n[s];for(const a in t)if(a==="class")e.class!==t.class&&(e.class=Po([e.class,t.class]));else if(a==="style")e.style=Ro([e.style,t.style]);else if(bt(a)){const o=e[a],p=t[a];p&&o!==p&&!(Y(o)&&o.includes(p))&&(e[a]=o?[].concat(o,p):p)}else a!==""&&(e[a]=t[a])}return e}function re(n,e,s,t=null){ke(n,e,7,[s,t])}const dv=Pl();let vv=0;function mv(n,e,s){const t=n.type,a=(e?e.appContext:n.appContext)||dv,o={uid:vv++,vnode:n,type:t,parent:e,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Iu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(a.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Cl(t,a),emitsOptions:zl(t,a),emit:null,emitted:null,propsDefaults:Tn,inheritAttrs:t.inheritAttrs,ctx:Tn,data:Tn,props:Tn,attrs:Tn,slots:Tn,refs:Tn,setupState:Tn,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=sv.bind(null,o),n.ce&&n.ce(o),o}let Cn=null;const Us=()=>Cn||Un;let la,lo;{const n=ma(),e=(s,t)=>{let a;return(a=n[s])||(a=n[s]=[]),a.push(t),o=>{a.length>1?a.forEach(p=>p(o)):a[0](o)}};la=e("__VUE_INSTANCE_SETTERS__",s=>Cn=s),lo=e("__VUE_SSR_SETTERS__",s=>$s=s)}const At=n=>{const e=Cn;return la(n),n.scope.on(),()=>{n.scope.off(),la(e)}},Np=()=>{Cn&&Cn.scope.off(),la(null)};function Ql(n){return n.vnode.shapeFlag&4}let $s=!1;function fv(n,e=!1,s=!1){e&&lo(e);const{props:t,children:a}=n.vnode,o=Ql(n);Hd(n,t,o,e),Jd(n,a,s);const p=o?kv(n,e):void 0;return e&&lo(!1),p}function kv(n,e){const s=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Vd);const{setup:t}=s;if(t){Ze();const a=n.setupContext=t.length>1?hv(n):null,o=At(n),p=wt(t,n,0,[n.props,a]),l=Wr(p);if(ns(),o(),(l||n.sp)&&!Cs(n)&&qo(n),l){if(p.then(Np,Np),e)return p.then(c=>{$p(n,c,e)}).catch(c=>{Tt(c,n,0)});n.asyncDep=p}else $p(n,p,e)}else Zl(n,e)}function $p(n,e,s){tn(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:yn(e)&&(n.setupState=fl(e)),Zl(n,s)}let qp;function Zl(n,e,s){const t=n.type;if(!n.render){if(!e&&qp&&!t.render){const a=t.template||Ho(n).template;if(a){const{isCustomElement:o,compilerOptions:p}=n.appContext.config,{delimiters:l,compilerOptions:c}=t,u=In(In({isCustomElement:o,delimiters:l},p),c);t.render=qp(a,u)}}n.render=t.render||me}{const a=At(n);Ze();try{Cd(n)}finally{ns(),a()}}}const _v={get(n,e){return $n(n,"get",""),n[e]}};function hv(n){const e=s=>{n.exposed=s||{}};return{attrs:new Proxy(n.attrs,_v),slots:n.slots,emit:n.emit,expose:e}}function ba(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(fl(Zu(n.exposed)),{get(e,s){if(s in e)return e[s];if(s in at)return at[s](n)},has(e,s){return s in e||s in at}})):n.proxy}function bv(n,e=!0){return tn(n)?n.displayName||n.name:n.name||e&&n.__name}function gv(n){return tn(n)&&"__vccOpts"in n}const w=(n,e)=>ld(n,e,$s);function i(n,e,s){const t=arguments.length;return t===2?yn(e)&&!Y(e)?ra(e)?Pn(n,null,[e]):Pn(n,e):Pn(n,null,e):(t>3?s=Array.prototype.slice.call(arguments,2):t===3&&ra(s)&&(s=[s]),Pn(n,e,s))}const yv="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let io;const Bp=typeof window<"u"&&window.trustedTypes;if(Bp)try{io=Bp.createPolicy("vue",{createHTML:n=>n})}catch{}const ni=io?n=>io.createHTML(n):n=>n,Ev="http://www.w3.org/2000/svg",wv="http://www.w3.org/1998/Math/MathML",Ve=typeof document<"u"?document:null,Hp=Ve&&Ve.createElement("template"),Tv={insert:(n,e,s)=>{e.insertBefore(n,s||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,s,t)=>{const a=e==="svg"?Ve.createElementNS(Ev,n):e==="mathml"?Ve.createElementNS(wv,n):s?Ve.createElement(n,{is:s}):Ve.createElement(n);return n==="select"&&t&&t.multiple!=null&&a.setAttribute("multiple",t.multiple),a},createText:n=>Ve.createTextNode(n),createComment:n=>Ve.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Ve.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,s,t,a,o){const p=s?s.previousSibling:e.lastChild;if(a&&(a===o||a.nextSibling))for(;e.insertBefore(a.cloneNode(!0),s),!(a===o||!(a=a.nextSibling)););else{Hp.innerHTML=ni(t==="svg"?`<svg>${n}</svg>`:t==="mathml"?`<math>${n}</math>`:n);const l=Hp.content;if(t==="svg"||t==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,s)}return[p?p.nextSibling:e.firstChild,s?s.previousSibling:e.lastChild]}},Fe="transition",Qs="animation",qs=Symbol("_vtc"),ei={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},si=In({},El,ei),xv=n=>(n.displayName="Transition",n.props=si,n),ms=xv((n,{slots:e})=>i(_d,ti(n),e)),as=(n,e=[])=>{Y(n)?n.forEach(s=>s(...e)):n&&n(...e)},Fp=n=>n?Y(n)?n.some(e=>e.length>1):n.length>1:!1;function ti(n){const e={};for(const j in n)j in ei||(e[j]=n[j]);if(n.css===!1)return e;const{name:s="v",type:t,duration:a,enterFromClass:o=`${s}-enter-from`,enterActiveClass:p=`${s}-enter-active`,enterToClass:l=`${s}-enter-to`,appearFromClass:c=o,appearActiveClass:u=p,appearToClass:d=l,leaveFromClass:v=`${s}-leave-from`,leaveActiveClass:k=`${s}-leave-active`,leaveToClass:f=`${s}-leave-to`}=n,g=Sv(a),y=g&&g[0],A=g&&g[1],{onBeforeEnter:E,onEnter:S,onEnterCancelled:b,onLeave:T,onLeaveCancelled:C,onBeforeAppear:P=E,onAppear:M=S,onAppearCancelled:U=b}=e,B=(j,en,wn,Ln)=>{j._enterCancelled=Ln,ze(j,en?d:l),ze(j,en?u:p),wn&&wn()},I=(j,en)=>{j._isLeaving=!1,ze(j,v),ze(j,f),ze(j,k),en&&en()},J=j=>(en,wn)=>{const Ln=j?M:S,X=()=>B(en,j,wn);as(Ln,[en,X]),zp(()=>{ze(en,j?c:o),we(en,j?d:l),Fp(Ln)||Wp(en,t,y,X)})};return In(e,{onBeforeEnter(j){as(E,[j]),we(j,o),we(j,p)},onBeforeAppear(j){as(P,[j]),we(j,c),we(j,u)},onEnter:J(!1),onAppear:J(!0),onLeave(j,en){j._isLeaving=!0;const wn=()=>I(j,en);we(j,v),j._enterCancelled?(we(j,k),co()):(co(),we(j,k)),zp(()=>{j._isLeaving&&(ze(j,v),we(j,f),Fp(T)||Wp(j,t,A,wn))}),as(T,[j,wn])},onEnterCancelled(j){B(j,!1,void 0,!0),as(b,[j])},onAppearCancelled(j){B(j,!0,void 0,!0),as(U,[j])},onLeaveCancelled(j){I(j),as(C,[j])}})}function Sv(n){if(n==null)return null;if(yn(n))return[$a(n.enter),$a(n.leave)];{const e=$a(n);return[e,e]}}function $a(n){return wu(n)}function we(n,e){e.split(/\s+/).forEach(s=>s&&n.classList.add(s)),(n[qs]||(n[qs]=new Set)).add(e)}function ze(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.remove(t));const s=n[qs];s&&(s.delete(e),s.size||(n[qs]=void 0))}function zp(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Av=0;function Wp(n,e,s,t){const a=n._endId=++Av,o=()=>{a===n._endId&&t()};if(s!=null)return setTimeout(o,s);const{type:p,timeout:l,propCount:c}=ai(n,e);if(!p)return t();const u=p+"end";let d=0;const v=()=>{n.removeEventListener(u,k),o()},k=f=>{f.target===n&&++d>=c&&v()};setTimeout(()=>{d<c&&v()},l+1),n.addEventListener(u,k)}function ai(n,e){const s=window.getComputedStyle(n),t=g=>(s[g]||"").split(", "),a=t(`${Fe}Delay`),o=t(`${Fe}Duration`),p=Jp(a,o),l=t(`${Qs}Delay`),c=t(`${Qs}Duration`),u=Jp(l,c);let d=null,v=0,k=0;e===Fe?p>0&&(d=Fe,v=p,k=o.length):e===Qs?u>0&&(d=Qs,v=u,k=c.length):(v=Math.max(p,u),d=v>0?p>u?Fe:Qs:null,k=d?d===Fe?o.length:c.length:0);const f=d===Fe&&/\b(transform|all)(,|$)/.test(t(`${Fe}Property`).toString());return{type:d,timeout:v,propCount:k,hasTransform:f}}function Jp(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((s,t)=>Up(s)+Up(n[t])))}function Up(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function co(){return document.body.offsetHeight}function Lv(n,e,s){const t=n[qs];t&&(e=(e?[e,...t]:[...t]).join(" ")),e==null?n.removeAttribute("class"):s?n.setAttribute("class",e):n.className=e}const ia=Symbol("_vod"),oi=Symbol("_vsh"),P_={beforeMount(n,{value:e},{transition:s}){n[ia]=n.style.display==="none"?"":n.style.display,s&&e?s.beforeEnter(n):Zs(n,e)},mounted(n,{value:e},{transition:s}){s&&e&&s.enter(n)},updated(n,{value:e,oldValue:s},{transition:t}){!e!=!s&&(t?e?(t.beforeEnter(n),Zs(n,!0),t.enter(n)):t.leave(n,()=>{Zs(n,!1)}):Zs(n,e))},beforeUnmount(n,{value:e}){Zs(n,e)}};function Zs(n,e){n.style.display=e?n[ia]:"none",n[oi]=!e}const Rv=Symbol(""),Pv=/(^|;)\s*display\s*:/;function Ov(n,e,s){const t=n.style,a=pn(s);let o=!1;if(s&&!a){if(e)if(pn(e))for(const p of e.split(";")){const l=p.slice(0,p.indexOf(":")).trim();s[l]==null&&Zt(t,l,"")}else for(const p in e)s[p]==null&&Zt(t,p,"");for(const p in s)p==="display"&&(o=!0),Zt(t,p,s[p])}else if(a){if(e!==s){const p=t[Rv];p&&(s+=";"+p),t.cssText=s,o=Pv.test(s)}}else e&&n.removeAttribute("style");ia in n&&(n[ia]=o?t.display:"",n[oi]&&(t.display="none"))}const Gp=/\s*!important$/;function Zt(n,e,s){if(Y(s))s.forEach(t=>Zt(n,e,t));else if(s==null&&(s=""),e.startsWith("--"))n.setProperty(e,s);else{const t=Iv(n,e);Gp.test(s)?n.setProperty(hs(t),s.replace(Gp,""),"important"):n[t]=s}}const Kp=["Webkit","Moz","ms"],qa={};function Iv(n,e){const s=qa[e];if(s)return s;let t=Kn(e);if(t!=="filter"&&t in n)return qa[e]=t;t=yt(t);for(let a=0;a<Kp.length;a++){const o=Kp[a]+t;if(o in n)return qa[e]=o}return e}const Yp="http://www.w3.org/1999/xlink";function Xp(n,e,s,t,a,o=Ru(e)){t&&e.startsWith("xlink:")?s==null?n.removeAttributeNS(Yp,e.slice(6,e.length)):n.setAttributeNS(Yp,e,s):s==null||o&&!Kr(s)?n.removeAttribute(e):n.setAttribute(e,o?"":Ae(s)?String(s):s)}function Qp(n,e,s,t,a){if(e==="innerHTML"||e==="textContent"){s!=null&&(n[e]=e==="innerHTML"?ni(s):s);return}const o=n.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){const l=o==="OPTION"?n.getAttribute("value")||"":n.value,c=s==null?n.type==="checkbox"?"on":"":String(s);(l!==c||!("_value"in n))&&(n.value=c),s==null&&n.removeAttribute(e),n._value=s;return}let p=!1;if(s===""||s==null){const l=typeof n[e];l==="boolean"?s=Kr(s):s==null&&l==="string"?(s="",p=!0):l==="number"&&(s=0,p=!0)}try{n[e]=s}catch{}p&&n.removeAttribute(a||e)}function Me(n,e,s,t){n.addEventListener(e,s,t)}function Dv(n,e,s,t){n.removeEventListener(e,s,t)}const Zp=Symbol("_vei");function Vv(n,e,s,t,a=null){const o=n[Zp]||(n[Zp]={}),p=o[e];if(t&&p)p.value=t;else{const[l,c]=Cv(e);if(t){const u=o[e]=Nv(t,a);Me(n,l,u,c)}else p&&(Dv(n,l,p,c),o[e]=void 0)}}const nr=/(?:Once|Passive|Capture)$/;function Cv(n){let e;if(nr.test(n)){e={};let t;for(;t=n.match(nr);)n=n.slice(0,n.length-t[0].length),e[t[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):hs(n.slice(2)),e]}let Ba=0;const jv=Promise.resolve(),Mv=()=>Ba||(jv.then(()=>Ba=0),Ba=Date.now());function Nv(n,e){const s=t=>{if(!t._vts)t._vts=Date.now();else if(t._vts<=s.attached)return;ke($v(t,s.value),e,5,[t])};return s.value=n,s.attached=Mv(),s}function $v(n,e){if(Y(e)){const s=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{s.call(n),n._stopped=!0},e.map(t=>a=>!a._stopped&&t&&t(a))}else return e}const er=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,qv=(n,e,s,t,a,o)=>{const p=a==="svg";e==="class"?Lv(n,t,p):e==="style"?Ov(n,s,t):bt(e)?So(e)||Vv(n,e,s,t,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Bv(n,e,t,p))?(Qp(n,e,t),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Xp(n,e,t,p,o,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!pn(t))?Qp(n,Kn(e),t,o,e):(e==="true-value"?n._trueValue=t:e==="false-value"&&(n._falseValue=t),Xp(n,e,t,p))};function Bv(n,e,s,t){if(t)return!!(e==="innerHTML"||e==="textContent"||e in n&&er(e)&&tn(s));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const a=n.tagName;if(a==="IMG"||a==="VIDEO"||a==="CANVAS"||a==="SOURCE")return!1}return er(e)&&pn(s)?!1:e in n}const pi=new WeakMap,ri=new WeakMap,ca=Symbol("_moveCb"),sr=Symbol("_enterCb"),Hv=n=>(delete n.props.mode,n),Fv=Hv({name:"TransitionGroup",props:In({},si,{tag:String,moveClass:String}),setup(n,{slots:e}){const s=Us(),t=yl();let a,o;return Al(()=>{if(!a.length)return;const p=n.moveClass||`${n.name||"v"}-move`;if(!Gv(a[0].el,s.vnode.el,p))return;a.forEach(Wv),a.forEach(Jv);const l=a.filter(Uv);co(),l.forEach(c=>{const u=c.el,d=u.style;we(u,p),d.transform=d.webkitTransform=d.transitionDuration="";const v=u[ca]=k=>{k&&k.target!==u||(!k||/transform$/.test(k.propertyName))&&(u.removeEventListener("transitionend",v),u[ca]=null,ze(u,p))};u.addEventListener("transitionend",v)})}),()=>{const p=vn(n),l=ti(p);let c=p.tag||ne;if(a=[],o)for(let u=0;u<o.length;u++){const d=o[u];d.el&&d.el instanceof Element&&(a.push(d),vs(d,dt(d,l,t,s)),pi.set(d,d.el.getBoundingClientRect()))}o=e.default?$o(e.default()):[];for(let u=0;u<o.length;u++){const d=o[u];d.key!=null&&vs(d,dt(d,l,t,s))}return Pn(c,null,o)}}}),zv=Fv;function Wv(n){const e=n.el;e[ca]&&e[ca](),e[sr]&&e[sr]()}function Jv(n){ri.set(n,n.el.getBoundingClientRect())}function Uv(n){const e=pi.get(n),s=ri.get(n),t=e.left-s.left,a=e.top-s.top;if(t||a){const o=n.el.style;return o.transform=o.webkitTransform=`translate(${t}px,${a}px)`,o.transitionDuration="0s",n}}function Gv(n,e,s){const t=n.cloneNode(),a=n[qs];a&&a.forEach(l=>{l.split(/\s+/).forEach(c=>c&&t.classList.remove(c))}),s.split(/\s+/).forEach(l=>l&&t.classList.add(l)),t.style.display="none";const o=e.nodeType===1?e:e.parentNode;o.appendChild(t);const{hasTransform:p}=ai(t);return o.removeChild(t),p}const Qe=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Y(e)?s=>Xt(e,s):e};function Kv(n){n.target.composing=!0}function tr(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ue=Symbol("_assign"),ar={created(n,{modifiers:{lazy:e,trim:s,number:t}},a){n[ue]=Qe(a);const o=t||a.props&&a.props.type==="number";Me(n,e?"change":"input",p=>{if(p.target.composing)return;let l=n.value;s&&(l=l.trim()),o&&(l=na(l)),n[ue](l)}),s&&Me(n,"change",()=>{n.value=n.value.trim()}),e||(Me(n,"compositionstart",Kv),Me(n,"compositionend",tr),Me(n,"change",tr))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:s,modifiers:{lazy:t,trim:a,number:o}},p){if(n[ue]=Qe(p),n.composing)return;const l=(o||n.type==="number")&&!/^0\d/.test(n.value)?na(n.value):n.value,c=e??"";l!==c&&(document.activeElement===n&&n.type!=="range"&&(t&&e===s||a&&n.value.trim()===c)||(n.value=c))}},Yv={deep:!0,created(n,e,s){n[ue]=Qe(s),Me(n,"change",()=>{const t=n._modelValue,a=Bs(n),o=n.checked,p=n[ue];if(Y(t)){const l=Oo(t,a),c=l!==-1;if(o&&!c)p(t.concat(a));else if(!o&&c){const u=[...t];u.splice(l,1),p(u)}}else if(Ws(t)){const l=new Set(t);o?l.add(a):l.delete(a),p(l)}else p(li(n,o))})},mounted:or,beforeUpdate(n,e,s){n[ue]=Qe(s),or(n,e,s)}};function or(n,{value:e,oldValue:s},t){n._modelValue=e;let a;if(Y(e))a=Oo(e,t.props.value)>-1;else if(Ws(e))a=e.has(t.props.value);else{if(e===s)return;a=us(e,li(n,!0))}n.checked!==a&&(n.checked=a)}const Xv={created(n,{value:e},s){n.checked=us(e,s.props.value),n[ue]=Qe(s),Me(n,"change",()=>{n[ue](Bs(n))})},beforeUpdate(n,{value:e,oldValue:s},t){n[ue]=Qe(t),e!==s&&(n.checked=us(e,t.props.value))}},Qv={deep:!0,created(n,{value:e,modifiers:{number:s}},t){const a=Ws(e);Me(n,"change",()=>{const o=Array.prototype.filter.call(n.options,p=>p.selected).map(p=>s?na(Bs(p)):Bs(p));n[ue](n.multiple?a?new Set(o):o:o[0]),n._assigning=!0,ss(()=>{n._assigning=!1})}),n[ue]=Qe(t)},mounted(n,{value:e}){pr(n,e)},beforeUpdate(n,e,s){n[ue]=Qe(s)},updated(n,{value:e}){n._assigning||pr(n,e)}};function pr(n,e){const s=n.multiple,t=Y(e);if(!(s&&!t&&!Ws(e))){for(let a=0,o=n.options.length;a<o;a++){const p=n.options[a],l=Bs(p);if(s)if(t){const c=typeof l;c==="string"||c==="number"?p.selected=e.some(u=>String(u)===String(l)):p.selected=Oo(e,l)>-1}else p.selected=e.has(l);else if(us(Bs(p),e)){n.selectedIndex!==a&&(n.selectedIndex=a);return}}!s&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Bs(n){return"_value"in n?n._value:n.value}function li(n,e){const s=e?"_trueValue":"_falseValue";return s in n?n[s]:e}const O_={created(n,e,s){Wt(n,e,s,null,"created")},mounted(n,e,s){Wt(n,e,s,null,"mounted")},beforeUpdate(n,e,s,t){Wt(n,e,s,t,"beforeUpdate")},updated(n,e,s,t){Wt(n,e,s,t,"updated")}};function Zv(n,e){switch(n){case"SELECT":return Qv;case"TEXTAREA":return ar;default:switch(e){case"checkbox":return Yv;case"radio":return Xv;default:return ar}}}function Wt(n,e,s,t,a){const p=Zv(n.tagName,s.props&&s.props.type)[a];p&&p(n,e,s,t)}const nm=In({patchProp:qv},Tv);let Ha,rr=!1;function em(){return Ha=rr?Ha:Gd(nm),rr=!0,Ha}const sm=(...n)=>{const e=em().createApp(...n),{mount:s}=e;return e.mount=t=>{const a=am(t);if(a)return s(a,!0,tm(a))},e};function tm(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function am(n){return pn(n)?document.querySelector(n):n}const om={"v-8daa1a0e":()=>r(()=>import("./index.html-5214930c.js"),[]).then(({data:n})=>n),"v-184f4da6":()=>r(()=>import("./intro.html-be79d2ec.js"),[]).then(({data:n})=>n),"v-69693975":()=>r(()=>import("./AppNotes.html-4813f287.js"),[]).then(({data:n})=>n),"v-1735a0be":()=>r(()=>import("./Applist.html-d234384c.js"),[]).then(({data:n})=>n),"v-d967ed6c":()=>r(()=>import("./ChatGPT.html-0d6696fb.js"),[]).then(({data:n})=>n),"v-5c29014a":()=>r(()=>import("./Chrome.html-e74006a0.js"),[]).then(({data:n})=>n),"v-1d7dd2b7":()=>r(()=>import("./design.html-3ec0edb5.js"),[]).then(({data:n})=>n),"v-1c7fca9e":()=>r(()=>import("./Cloudflare.html-bc59bca1.js"),[]).then(({data:n})=>n),"v-2b70157f":()=>r(()=>import("./DNS.html-69804a29.js"),[]).then(({data:n})=>n),"v-bc154f32":()=>r(()=>import("./GitHub.html-7265829f.js"),[]).then(({data:n})=>n),"v-7c5f209c":()=>r(()=>import("./Static.html-4765be9d.js"),[]).then(({data:n})=>n),"v-39dc98a2":()=>r(()=>import("./VPS.html-278d449d.js"),[]).then(({data:n})=>n),"v-2bc6566a":()=>r(()=>import("./cherry.html-9d39dcc0.js"),[]).then(({data:n})=>n),"v-24b7c48d":()=>r(()=>import("./dragonfruit.html-8af8cca2.js"),[]).then(({data:n})=>n),"v-f0ec4556":()=>r(()=>import("./strawberry.html-49ab3efc.js"),[]).then(({data:n})=>n),"v-df8b6e0c":()=>r(()=>import("./tomato.html-806d51d5.js"),[]).then(({data:n})=>n),"v-00f6d5f1":()=>r(()=>import("./Comments.html-3b176678.js"),[]).then(({data:n})=>n),"v-3b0b9f28":()=>r(()=>import("./VuePress.html-5d012db8.js"),[]).then(({data:n})=>n),"v-3cdca328":()=>r(()=>import("./docsify.html-e16bafca.js"),[]).then(({data:n})=>n),"v-77e3440a":()=>r(()=>import("./01.html-524b3280.js"),[]).then(({data:n})=>n),"v-79981ca9":()=>r(()=>import("./02.html-6c1f0414.js"),[]).then(({data:n})=>n),"v-7b4cf548":()=>r(()=>import("./03.html-d75fefac.js"),[]).then(({data:n})=>n),"v-7d01cde7":()=>r(()=>import("./04.html-2fc207b1.js"),[]).then(({data:n})=>n),"v-7eb6a686":()=>r(()=>import("./05.html-37335865.js"),[]).then(({data:n})=>n),"v-ff2901b6":()=>r(()=>import("./06.html-84d56fb8.js"),[]).then(({data:n})=>n),"v-fbbf5078":()=>r(()=>import("./07.html-a21e3c66.js"),[]).then(({data:n})=>n),"v-f8559f3a":()=>r(()=>import("./08.html-72bd742f.js"),[]).then(({data:n})=>n),"v-f4ebedfc":()=>r(()=>import("./09.html-e82fe026.js"),[]).then(({data:n})=>n),"v-a9d6b2a8":()=>r(()=>import("./10.html-8a6cf45e.js"),[]).then(({data:n})=>n),"v-a66d016a":()=>r(()=>import("./11.html-422f34ac.js"),[]).then(({data:n})=>n),"v-2632f347":()=>r(()=>import("./01.html-c579b027.js"),[]).then(({data:n})=>n),"v-27e7cbe6":()=>r(()=>import("./02.html-66026e53.js"),[]).then(({data:n})=>n),"v-299ca485":()=>r(()=>import("./03.html-b97d845d.js"),[]).then(({data:n})=>n),"v-2b517d24":()=>r(()=>import("./04.html-817f9d9c.js"),[]).then(({data:n})=>n),"v-2d0655c3":()=>r(()=>import("./05.html-75f6bfb0.js"),[]).then(({data:n})=>n),"v-2ebb2e62":()=>r(()=>import("./06.html-9d2cf5e1.js"),[]).then(({data:n})=>n),"v-30700701":()=>r(()=>import("./07.html-b468089f.js"),[]).then(({data:n})=>n),"v-3224dfa0":()=>r(()=>import("./08.html-e7b09fef.js"),[]).then(({data:n})=>n),"v-33d9b83f":()=>r(()=>import("./09.html-5ce5b534.js"),[]).then(({data:n})=>n),"v-596455e9":()=>r(()=>import("./10.html-5fc2a310.js"),[]).then(({data:n})=>n),"v-5b192e88":()=>r(()=>import("./11.html-1a6addba.js"),[]).then(({data:n})=>n),"v-5cce0727":()=>r(()=>import("./12.html-92a8da06.js"),[]).then(({data:n})=>n),"v-5e82dfc6":()=>r(()=>import("./13.html-f4f11e6c.js"),[]).then(({data:n})=>n),"v-6037b865":()=>r(()=>import("./14.html-14bbc68c.js"),[]).then(({data:n})=>n),"v-61ec9104":()=>r(()=>import("./15.html-daafddb8.js"),[]).then(({data:n})=>n),"v-63a169a3":()=>r(()=>import("./16.html-2ba63b6a.js"),[]).then(({data:n})=>n),"v-65564242":()=>r(()=>import("./17.html-90ff7820.js"),[]).then(({data:n})=>n),"v-670b1ae1":()=>r(()=>import("./18.html-3f0e39d1.js"),[]).then(({data:n})=>n),"v-67b8c712":()=>r(()=>import("./1.html-78e40b18.js"),[]).then(({data:n})=>n),"v-696d9fb1":()=>r(()=>import("./2.html-afe2d393.js"),[]).then(({data:n})=>n),"v-6b227850":()=>r(()=>import("./3.html-783c4a32.js"),[]).then(({data:n})=>n),"v-6cd750ef":()=>r(()=>import("./4.html-416ea7a9.js"),[]).then(({data:n})=>n),"v-7a07405d":()=>r(()=>import("./1.html-9f562e49.js"),[]).then(({data:n})=>n),"v-7bbc18fc":()=>r(()=>import("./2.html-97555b66.js"),[]).then(({data:n})=>n),"v-7d70f19b":()=>r(()=>import("./3.html-840fd87e.js"),[]).then(({data:n})=>n),"v-7f25ca3a":()=>r(()=>import("./4.html-b416903a.js"),[]).then(({data:n})=>n),"v-3d41e0e3":()=>r(()=>import("./01.html-b7911c12.js"),[]).then(({data:n})=>n),"v-3ef6b982":()=>r(()=>import("./02.html-58806f31.js"),[]).then(({data:n})=>n),"v-40ab9221":()=>r(()=>import("./03.html-4c600fee.js"),[]).then(({data:n})=>n),"v-42606ac0":()=>r(()=>import("./04.html-15ec8ab0.js"),[]).then(({data:n})=>n),"v-4415435f":()=>r(()=>import("./05.html-a5071a0d.js"),[]).then(({data:n})=>n),"v-45ca1bfe":()=>r(()=>import("./06.html-80f70074.js"),[]).then(({data:n})=>n),"v-8f5a8800":()=>r(()=>import("./01.html-0c6dc73f.js"),[]).then(({data:n})=>n),"v-8bf0d6c2":()=>r(()=>import("./02.html-359fb156.js"),[]).then(({data:n})=>n),"v-88872584":()=>r(()=>import("./03.html-a13b926a.js"),[]).then(({data:n})=>n),"v-851d7446":()=>r(()=>import("./04.html-8b894047.js"),[]).then(({data:n})=>n),"v-81b3c308":()=>r(()=>import("./05.html-54356795.js"),[]).then(({data:n})=>n),"v-7e4a11ca":()=>r(()=>import("./06.html-21edbe88.js"),[]).then(({data:n})=>n),"v-7ae0608c":()=>r(()=>import("./07.html-e401b31b.js"),[]).then(({data:n})=>n),"v-7776af4e":()=>r(()=>import("./08.html-99060621.js"),[]).then(({data:n})=>n),"v-740cfe10":()=>r(()=>import("./09.html-c32ac70e.js"),[]).then(({data:n})=>n),"v-28f7c2bc":()=>r(()=>import("./10.html-b84376bb.js"),[]).then(({data:n})=>n),"v-63e77b20":()=>r(()=>import("./bookmark-scripts.html-8869cd71.js"),[]).then(({data:n})=>n),"v-60213eb0":()=>r(()=>import("./online-tools.html-92f5621e.js"),[]).then(({data:n})=>n),"v-20ee9d86":()=>r(()=>import("./01.html-691f7627.js"),[]).then(({data:n})=>n),"v-1d84ec48":()=>r(()=>import("./02.html-846d97af.js"),[]).then(({data:n})=>n),"v-1a1b3b0a":()=>r(()=>import("./03.html-4c7e9b66.js"),[]).then(({data:n})=>n),"v-16b189cc":()=>r(()=>import("./04.html-afb75c82.js"),[]).then(({data:n})=>n),"v-6c412aac":()=>r(()=>import("./01.html-bd8f0ba3.js"),[]).then(({data:n})=>n),"v-68d7796e":()=>r(()=>import("./02.html-383003c1.js"),[]).then(({data:n})=>n),"v-656dc830":()=>r(()=>import("./03.html-1cc7bae1.js"),[]).then(({data:n})=>n),"v-6e34a17a":()=>r(()=>import("./01.html-a1d3ea6a.js"),[]).then(({data:n})=>n),"v-fa8ee52c":()=>r(()=>import("./01.html-337fadb6.js"),[]).then(({data:n})=>n),"v-f72533ee":()=>r(()=>import("./02.html-280c1f1d.js"),[]).then(({data:n})=>n),"v-f3bb82b0":()=>r(()=>import("./03.html-a58034d2.js"),[]).then(({data:n})=>n),"v-f051d172":()=>r(()=>import("./04.html-4af1dc59.js"),[]).then(({data:n})=>n),"v-ece82034":()=>r(()=>import("./05.html-d7958b85.js"),[]).then(({data:n})=>n),"v-e97e6ef6":()=>r(()=>import("./06.html-ef725901.js"),[]).then(({data:n})=>n),"v-e614bdb8":()=>r(()=>import("./07.html-2fc34b8d.js"),[]).then(({data:n})=>n),"v-e2ab0c7a":()=>r(()=>import("./08.html-7a59cbdb.js"),[]).then(({data:n})=>n),"v-df415b3c":()=>r(()=>import("./09.html-452395a0.js"),[]).then(({data:n})=>n),"v-942c1fe8":()=>r(()=>import("./10.html-b55decc6.js"),[]).then(({data:n})=>n),"v-90c26eaa":()=>r(()=>import("./11.html-1757a2af.js"),[]).then(({data:n})=>n),"v-5f498b30":()=>r(()=>import("./01.html-754d4293.js"),[]).then(({data:n})=>n),"v-6b5bab47":()=>r(()=>import("./01.html-efa27be8.js"),[]).then(({data:n})=>n),"v-6d1083e6":()=>r(()=>import("./02.html-360f1d30.js"),[]).then(({data:n})=>n),"v-6ec55c85":()=>r(()=>import("./03.html-e0e408cf.js"),[]).then(({data:n})=>n),"v-707a3524":()=>r(()=>import("./04.html-a4e6b44b.js"),[]).then(({data:n})=>n),"v-722f0dc3":()=>r(()=>import("./05.html-5baeccc2.js"),[]).then(({data:n})=>n),"v-73e3e662":()=>r(()=>import("./06.html-e8902615.js"),[]).then(({data:n})=>n),"v-7598bf01":()=>r(()=>import("./07.html-8455871b.js"),[]).then(({data:n})=>n),"v-774d97a0":()=>r(()=>import("./08.html-9f3c15d3.js"),[]).then(({data:n})=>n),"v-7902703f":()=>r(()=>import("./09.html-53fa570e.js"),[]).then(({data:n})=>n),"v-c2e5e42e":()=>r(()=>import("./10.html-e869da04.js"),[]).then(({data:n})=>n),"v-bf7c32f0":()=>r(()=>import("./11.html-5dad8ae4.js"),[]).then(({data:n})=>n),"v-8403a022":()=>r(()=>import("./01.html-3891d2fb.js"),[]).then(({data:n})=>n),"v-8099eee4":()=>r(()=>import("./02.html-ead8c7c7.js"),[]).then(({data:n})=>n),"v-7d303da6":()=>r(()=>import("./03.html-bcd3d352.js"),[]).then(({data:n})=>n),"v-79c68c68":()=>r(()=>import("./04.html-9feb53a1.js"),[]).then(({data:n})=>n),"v-6f4eb639":()=>r(()=>import("./01.html-75fa35c5.js"),[]).then(({data:n})=>n),"v-71038ed8":()=>r(()=>import("./02.html-5eb42a1b.js"),[]).then(({data:n})=>n),"v-72b86777":()=>r(()=>import("./03.html-d6d8721b.js"),[]).then(({data:n})=>n),"v-746d4016":()=>r(()=>import("./04.html-41c422fa.js"),[]).then(({data:n})=>n),"v-762218b5":()=>r(()=>import("./05.html-a537356e.js"),[]).then(({data:n})=>n),"v-77d6f154":()=>r(()=>import("./06.html-c791675a.js"),[]).then(({data:n})=>n),"v-798bc9f3":()=>r(()=>import("./07.html-9700a404.js"),[]).then(({data:n})=>n),"v-7b40a292":()=>r(()=>import("./08.html-a80a0fc3.js"),[]).then(({data:n})=>n),"v-7cf57b31":()=>r(()=>import("./09.html-3273d356.js"),[]).then(({data:n})=>n),"v-baffce4a":()=>r(()=>import("./10.html-e4ef95a1.js"),[]).then(({data:n})=>n),"v-b7961d0c":()=>r(()=>import("./11.html-01f6b809.js"),[]).then(({data:n})=>n),"v-b42c6bce":()=>r(()=>import("./12.html-a77bf0b4.js"),[]).then(({data:n})=>n),"v-b0c2ba90":()=>r(()=>import("./13.html-44ad6041.js"),[]).then(({data:n})=>n),"v-ad590952":()=>r(()=>import("./14.html-5d0b252d.js"),[]).then(({data:n})=>n),"v-a9ef5814":()=>r(()=>import("./15.html-45c3ca2d.js"),[]).then(({data:n})=>n),"v-a685a6d6":()=>r(()=>import("./16.html-b93211d3.js"),[]).then(({data:n})=>n),"v-a31bf598":()=>r(()=>import("./17.html-66c9e25e.js"),[]).then(({data:n})=>n),"v-9fb2445a":()=>r(()=>import("./18.html-b26d127a.js"),[]).then(({data:n})=>n),"v-9c48931c":()=>r(()=>import("./19.html-4fab54df.js"),[]).then(({data:n})=>n),"v-513357c8":()=>r(()=>import("./20.html-62e79015.js"),[]).then(({data:n})=>n),"v-4dc9a68a":()=>r(()=>import("./21.html-adb0708b.js"),[]).then(({data:n})=>n),"v-4a5ff54c":()=>r(()=>import("./22.html-57bebe53.js"),[]).then(({data:n})=>n),"v-46f6440e":()=>r(()=>import("./23.html-7371fe4a.js"),[]).then(({data:n})=>n),"v-3ae21c12":()=>r(()=>import("./01.html-0e9109f4.js"),[]).then(({data:n})=>n),"v-37786ad4":()=>r(()=>import("./02.html-010b71b9.js"),[]).then(({data:n})=>n),"v-340eb996":()=>r(()=>import("./03.html-8af577ee.js"),[]).then(({data:n})=>n),"v-30a50858":()=>r(()=>import("./04.html-8a12d421.js"),[]).then(({data:n})=>n),"v-2d3b571a":()=>r(()=>import("./05.html-cdad9bd2.js"),[]).then(({data:n})=>n),"v-29d1a5dc":()=>r(()=>import("./06.html-1ee6abb3.js"),[]).then(({data:n})=>n),"v-2667f49e":()=>r(()=>import("./07.html-f093df37.js"),[]).then(({data:n})=>n),"v-22fe4360":()=>r(()=>import("./08.html-9efd8327.js"),[]).then(({data:n})=>n),"v-1f949222":()=>r(()=>import("./09.html-793c4bee.js"),[]).then(({data:n})=>n),"v-15c05499":()=>r(()=>import("./10.html-cba957cd.js"),[]).then(({data:n})=>n),"v-17752d38":()=>r(()=>import("./11.html-3e889984.js"),[]).then(({data:n})=>n),"v-192a05d7":()=>r(()=>import("./12.html-7920d48a.js"),[]).then(({data:n})=>n),"v-1adede76":()=>r(()=>import("./13.html-0df018c3.js"),[]).then(({data:n})=>n),"v-1c93b715":()=>r(()=>import("./14.html-232632bc.js"),[]).then(({data:n})=>n),"v-1e488fb4":()=>r(()=>import("./15.html-2b1a53c9.js"),[]).then(({data:n})=>n),"v-1ffd6853":()=>r(()=>import("./16.html-a18a11f3.js"),[]).then(({data:n})=>n),"v-21b240f2":()=>r(()=>import("./17.html-399302f8.js"),[]).then(({data:n})=>n),"v-23671991":()=>r(()=>import("./18.html-b4e171a6.js"),[]).then(({data:n})=>n),"v-251bf230":()=>r(()=>import("./19.html-d44b1db3.js"),[]).then(({data:n})=>n),"v-4aa68fda":()=>r(()=>import("./20.html-26383a81.js"),[]).then(({data:n})=>n),"v-4c5b6879":()=>r(()=>import("./21.html-37b27c52.js"),[]).then(({data:n})=>n),"v-4e104118":()=>r(()=>import("./22.html-0d8531c5.js"),[]).then(({data:n})=>n),"v-4fc519b7":()=>r(()=>import("./23.html-364f15a4.js"),[]).then(({data:n})=>n),"v-5179f256":()=>r(()=>import("./24.html-4974ea7c.js"),[]).then(({data:n})=>n),"v-532ecaf5":()=>r(()=>import("./25.html-8ad3cabd.js"),[]).then(({data:n})=>n),"v-54e3a394":()=>r(()=>import("./26.html-98721571.js"),[]).then(({data:n})=>n),"v-56987c33":()=>r(()=>import("./27.html-ecee45c1.js"),[]).then(({data:n})=>n),"v-584d54d2":()=>r(()=>import("./28.html-cbe6e849.js"),[]).then(({data:n})=>n),"v-5a022d71":()=>r(()=>import("./29.html-f8448322.js"),[]).then(({data:n})=>n),"v-7f8ccb1b":()=>r(()=>import("./30.html-4eea1975.js"),[]).then(({data:n})=>n),"v-fd7cb88c":()=>r(()=>import("./31.html-e3820ba8.js"),[]).then(({data:n})=>n),"v-fa13074e":()=>r(()=>import("./32.html-1d4e6d3d.js"),[]).then(({data:n})=>n),"v-f6a95610":()=>r(()=>import("./33.html-290c956b.js"),[]).then(({data:n})=>n),"v-f33fa4d2":()=>r(()=>import("./34.html-eed2d21a.js"),[]).then(({data:n})=>n),"v-efd5f394":()=>r(()=>import("./35.html-9ead6cfa.js"),[]).then(({data:n})=>n),"v-ec6c4256":()=>r(()=>import("./36.html-b71204a8.js"),[]).then(({data:n})=>n),"v-c15f9c8c":()=>r(()=>import("./01.html-25bea8f3.js"),[]).then(({data:n})=>n),"v-bdf5eb4e":()=>r(()=>import("./02.html-901ef3e2.js"),[]).then(({data:n})=>n),"v-ba8c3a10":()=>r(()=>import("./03.html-cee0263a.js"),[]).then(({data:n})=>n),"v-b72288d2":()=>r(()=>import("./04.html-e0a2fc48.js"),[]).then(({data:n})=>n),"v-b3b8d794":()=>r(()=>import("./05.html-b78e5333.js"),[]).then(({data:n})=>n),"v-b04f2656":()=>r(()=>import("./06.html-1d78b01c.js"),[]).then(({data:n})=>n),"v-ace57518":()=>r(()=>import("./07.html-e3ce6887.js"),[]).then(({data:n})=>n),"v-a97bc3da":()=>r(()=>import("./08.html-0e4d296d.js"),[]).then(({data:n})=>n),"v-a612129c":()=>r(()=>import("./09.html-8f253149.js"),[]).then(({data:n})=>n),"v-5afcd748":()=>r(()=>import("./10.html-29616535.js"),[]).then(({data:n})=>n),"v-5793260a":()=>r(()=>import("./11.html-5f021323.js"),[]).then(({data:n})=>n),"v-542974cc":()=>r(()=>import("./12.html-ac91b0ba.js"),[]).then(({data:n})=>n),"v-50bfc38e":()=>r(()=>import("./13.html-1bde8d17.js"),[]).then(({data:n})=>n),"v-4d561250":()=>r(()=>import("./14.html-a3649754.js"),[]).then(({data:n})=>n),"v-49ec6112":()=>r(()=>import("./15.html-ed648c69.js"),[]).then(({data:n})=>n),"v-4682afd4":()=>r(()=>import("./16.html-41d5767e.js"),[]).then(({data:n})=>n),"v-4318fe96":()=>r(()=>import("./17.html-2ad38688.js"),[]).then(({data:n})=>n),"v-3faf4d58":()=>r(()=>import("./18.html-6dca63e2.js"),[]).then(({data:n})=>n),"v-3c459c1a":()=>r(()=>import("./19.html-06f2680a.js"),[]).then(({data:n})=>n),"v-0767cf9d":()=>r(()=>import("./20.html-7b4ee77c.js"),[]).then(({data:n})=>n),"v-091ca83c":()=>r(()=>import("./21.html-1ab8dfac.js"),[]).then(({data:n})=>n),"v-0ad180db":()=>r(()=>import("./22.html-a70ec33f.js"),[]).then(({data:n})=>n),"v-0c86597a":()=>r(()=>import("./23.html-99e88d13.js"),[]).then(({data:n})=>n),"v-bfed7bf0":()=>r(()=>import("./01.html-565f0085.js"),[]).then(({data:n})=>n),"v-bc83cab2":()=>r(()=>import("./02.html-62e69ab4.js"),[]).then(({data:n})=>n),"v-b91a1974":()=>r(()=>import("./03.html-3e77677f.js"),[]).then(({data:n})=>n),"v-b5b06836":()=>r(()=>import("./04.html-e2d76eb5.js"),[]).then(({data:n})=>n),"v-b246b6f8":()=>r(()=>import("./05.html-203c90a9.js"),[]).then(({data:n})=>n),"v-aedd05ba":()=>r(()=>import("./06.html-cb13b146.js"),[]).then(({data:n})=>n),"v-ab73547c":()=>r(()=>import("./07.html-88a0a3ed.js"),[]).then(({data:n})=>n),"v-a809a33e":()=>r(()=>import("./08.html-02bbc0c1.js"),[]).then(({data:n})=>n),"v-a49ff200":()=>r(()=>import("./09.html-2f1f8dfe.js"),[]).then(({data:n})=>n),"v-0055f2c3":()=>r(()=>import("./01.html-05a43042.js"),[]).then(({data:n})=>n),"v-020acb62":()=>r(()=>import("./02.html-f619e992.js"),[]).then(({data:n})=>n),"v-03bfa401":()=>r(()=>import("./03.html-f8def6f7.js"),[]).then(({data:n})=>n),"v-05747ca0":()=>r(()=>import("./04.html-7088671e.js"),[]).then(({data:n})=>n),"v-0729553f":()=>r(()=>import("./05.html-925ebb40.js"),[]).then(({data:n})=>n),"v-08de2dde":()=>r(()=>import("./06.html-ae035239.js"),[]).then(({data:n})=>n),"v-0a93067d":()=>r(()=>import("./07.html-14d52b12.js"),[]).then(({data:n})=>n),"v-0c47df1c":()=>r(()=>import("./08.html-802391e4.js"),[]).then(({data:n})=>n),"v-0dfcb7bb":()=>r(()=>import("./09.html-b2e05401.js"),[]).then(({data:n})=>n),"v-33875565":()=>r(()=>import("./10.html-990a54c7.js"),[]).then(({data:n})=>n),"v-353c2e04":()=>r(()=>import("./11.html-c8439551.js"),[]).then(({data:n})=>n),"v-36f106a3":()=>r(()=>import("./12.html-b7efba08.js"),[]).then(({data:n})=>n),"v-38a5df42":()=>r(()=>import("./13.html-51354a0c.js"),[]).then(({data:n})=>n),"v-3a5ab7e1":()=>r(()=>import("./14.html-9f732374.js"),[]).then(({data:n})=>n),"v-3c0f9080":()=>r(()=>import("./15.html-dc2b71c8.js"),[]).then(({data:n})=>n),"v-3dc4691f":()=>r(()=>import("./16.html-0d747c52.js"),[]).then(({data:n})=>n),"v-d6cb3c78":()=>r(()=>import("./01.html-5a1dcfe8.js"),[]).then(({data:n})=>n),"v-d3618b3a":()=>r(()=>import("./02.html-e6a77f67.js"),[]).then(({data:n})=>n),"v-cff7d9fc":()=>r(()=>import("./03.html-8630ff11.js"),[]).then(({data:n})=>n),"v-cc8e28be":()=>r(()=>import("./04.html-06a0eb82.js"),[]).then(({data:n})=>n),"v-c5bac642":()=>r(()=>import("./06.html-f50d07e0.js"),[]).then(({data:n})=>n),"v-c2511504":()=>r(()=>import("./07.html-f229106a.js"),[]).then(({data:n})=>n),"v-bee763c6":()=>r(()=>import("./08.html-716655aa.js"),[]).then(({data:n})=>n),"v-bb7db288":()=>r(()=>import("./09.html-37773ba8.js"),[]).then(({data:n})=>n),"v-70687734":()=>r(()=>import("./10.html-e9701930.js"),[]).then(({data:n})=>n),"v-6cfec5f6":()=>r(()=>import("./11.html-ba642711.js"),[]).then(({data:n})=>n),"v-699514b8":()=>r(()=>import("./12.html-10ba71cf.js"),[]).then(({data:n})=>n),"v-662b637a":()=>r(()=>import("./13.html-cfe5b52c.js"),[]).then(({data:n})=>n),"v-62c1b23c":()=>r(()=>import("./14.html-299a7495.js"),[]).then(({data:n})=>n),"v-5f5800fe":()=>r(()=>import("./15.html-04052fed.js"),[]).then(({data:n})=>n),"v-5bee4fc0":()=>r(()=>import("./16.html-d82954f5.js"),[]).then(({data:n})=>n),"v-58849e82":()=>r(()=>import("./17.html-c9551520.js"),[]).then(({data:n})=>n),"v-551aed44":()=>r(()=>import("./18.html-f1649555.js"),[]).then(({data:n})=>n),"v-01544aa3":()=>r(()=>import("./01.html-e5162c7b.js"),[]).then(({data:n})=>n),"v-03092342":()=>r(()=>import("./02.html-15e6ef99.js"),[]).then(({data:n})=>n),"v-04bdfbe1":()=>r(()=>import("./03.html-33ac806f.js"),[]).then(({data:n})=>n),"v-0672d480":()=>r(()=>import("./04.html-6ff96410.js"),[]).then(({data:n})=>n),"v-33cf2509":()=>r(()=>import("./01.html-8b60c9b4.js"),[]).then(({data:n})=>n),"v-3583fda8":()=>r(()=>import("./02.html-db7d944e.js"),[]).then(({data:n})=>n),"v-3738d647":()=>r(()=>import("./03.html-a7bc9651.js"),[]).then(({data:n})=>n),"v-38edaee6":()=>r(()=>import("./04.html-58ea6f46.js"),[]).then(({data:n})=>n),"v-3aa28785":()=>r(()=>import("./05.html-33a9b78b.js"),[]).then(({data:n})=>n),"v-266cbe57":()=>r(()=>import("./01.html-f5bad7d9.js"),[]).then(({data:n})=>n),"v-282196f6":()=>r(()=>import("./02.html-7f38afab.js"),[]).then(({data:n})=>n),"v-29d66f95":()=>r(()=>import("./03.html-dbf79dd3.js"),[]).then(({data:n})=>n),"v-2b8b4834":()=>r(()=>import("./04.html-572b915e.js"),[]).then(({data:n})=>n),"v-2d4020d3":()=>r(()=>import("./05.html-54acf4eb.js"),[]).then(({data:n})=>n),"v-2ef4f972":()=>r(()=>import("./06.html-e99424f6.js"),[]).then(({data:n})=>n),"v-30a9d211":()=>r(()=>import("./07.html-89e2ab71.js"),[]).then(({data:n})=>n),"v-325eaab0":()=>r(()=>import("./08.html-80253b34.js"),[]).then(({data:n})=>n),"v-3413834f":()=>r(()=>import("./09.html-b6b9d6aa.js"),[]).then(({data:n})=>n),"v-599e20f9":()=>r(()=>import("./10.html-555369cd.js"),[]).then(({data:n})=>n),"v-5b52f998":()=>r(()=>import("./11.html-1268e9bd.js"),[]).then(({data:n})=>n),"v-5d07d237":()=>r(()=>import("./12.html-2c6b7674.js"),[]).then(({data:n})=>n),"v-5ebcaad6":()=>r(()=>import("./13.html-9b22bde0.js"),[]).then(({data:n})=>n),"v-60718375":()=>r(()=>import("./14.html-87c9fd8b.js"),[]).then(({data:n})=>n),"v-05e216f0":()=>r(()=>import("./01.html-1a8c7e67.js"),[]).then(({data:n})=>n),"v-027865b2":()=>r(()=>import("./02.html-210f89ad.js"),[]).then(({data:n})=>n),"v-0078a5c6":()=>r(()=>import("./03.html-4b2a4e8f.js"),[]).then(({data:n})=>n),"v-022d7e65":()=>r(()=>import("./04.html-e4f6c17d.js"),[]).then(({data:n})=>n),"v-03e25704":()=>r(()=>import("./05.html-2ed5a86e.js"),[]).then(({data:n})=>n),"v-05972fa3":()=>r(()=>import("./06.html-7ff02c8a.js"),[]).then(({data:n})=>n),"v-671ae07c":()=>r(()=>import("./01.html-c0a933bd.js"),[]).then(({data:n})=>n),"v-68cfb91b":()=>r(()=>import("./02.html-f61f138c.js"),[]).then(({data:n})=>n),"v-6a8491ba":()=>r(()=>import("./03.html-0f5d3a39.js"),[]).then(({data:n})=>n),"v-6c396a59":()=>r(()=>import("./04.html-1b90ebbd.js"),[]).then(({data:n})=>n),"v-1ff273ed":()=>r(()=>import("./01.html-25baf8b0.js"),[]).then(({data:n})=>n),"v-21a74c8c":()=>r(()=>import("./02.html-a7158824.js"),[]).then(({data:n})=>n),"v-235c252b":()=>r(()=>import("./03.html-a4894e9d.js"),[]).then(({data:n})=>n),"v-2510fdca":()=>r(()=>import("./04.html-093b550e.js"),[]).then(({data:n})=>n),"v-26c5d669":()=>r(()=>import("./05.html-be2b60a5.js"),[]).then(({data:n})=>n),"v-287aaf08":()=>r(()=>import("./06.html-98e1d7c9.js"),[]).then(({data:n})=>n),"v-2a2f87a7":()=>r(()=>import("./07.html-01776d5e.js"),[]).then(({data:n})=>n),"v-2be46046":()=>r(()=>import("./08.html-d33dd55d.js"),[]).then(({data:n})=>n),"v-2d9938e5":()=>r(()=>import("./09.html-cc623c8d.js"),[]).then(({data:n})=>n),"v-5323d68f":()=>r(()=>import("./10.html-c14d2e03.js"),[]).then(({data:n})=>n),"v-3296bd31":()=>r(()=>import("./browser.html-3d88c6cf.js"),[]).then(({data:n})=>n),"v-3a8682f9":()=>r(()=>import("./cross-platform.html-083a6759.js"),[]).then(({data:n})=>n),"v-71b3b66f":()=>r(()=>import("./vscode.html-de788548.js"),[]).then(({data:n})=>n),"v-10d9f538":()=>r(()=>import("./webstorm.html-0bb33712.js"),[]).then(({data:n})=>n),"v-85bcb294":()=>r(()=>import("./windows.html-140ba991.js"),[]).then(({data:n})=>n),"v-3706649a":()=>r(()=>import("./404.html-3ad2e6ac.js"),[]).then(({data:n})=>n),"v-144e84a4":()=>r(()=>import("./index.html-966c5600.js"),[]).then(({data:n})=>n),"v-72a9c1e2":()=>r(()=>import("./index.html-9537d932.js"),[]).then(({data:n})=>n),"v-e1e3da16":()=>r(()=>import("./index.html-5f00cdbe.js"),[]).then(({data:n})=>n),"v-744e6dd4":()=>r(()=>import("./index.html-159118b7.js"),[]).then(({data:n})=>n),"v-b22fa0a4":()=>r(()=>import("./index.html-b81ccfa1.js"),[]).then(({data:n})=>n),"v-4e029433":()=>r(()=>import("./index.html-d820269e.js"),[]).then(({data:n})=>n),"v-acdb09de":()=>r(()=>import("./index.html-0a6989bc.js"),[]).then(({data:n})=>n),"v-08f42f4a":()=>r(()=>import("./index.html-7e2ec73f.js"),[]).then(({data:n})=>n),"v-30be3cd5":()=>r(()=>import("./index.html-ece8a4ac.js"),[]).then(({data:n})=>n),"v-326764f5":()=>r(()=>import("./index.html-021b00c8.js"),[]).then(({data:n})=>n),"v-dc68d520":()=>r(()=>import("./index.html-0ed1a6ba.js"),[]).then(({data:n})=>n),"v-2d582078":()=>r(()=>import("./index.html-61ca3851.js"),[]).then(({data:n})=>n),"v-429fc9e8":()=>r(()=>import("./index.html-d556eb6f.js"),[]).then(({data:n})=>n),"v-1559ca3e":()=>r(()=>import("./index.html-d9bd380c.js"),[]).then(({data:n})=>n),"v-3a02344a":()=>r(()=>import("./index.html-b63def14.js"),[]).then(({data:n})=>n),"v-7d243d0e":()=>r(()=>import("./index.html-ceb0fb35.js"),[]).then(({data:n})=>n),"v-c3b7df84":()=>r(()=>import("./index.html-221a7b85.js"),[]).then(({data:n})=>n),"v-5ebe9341":()=>r(()=>import("./index.html-a94b5e68.js"),[]).then(({data:n})=>n),"v-3b98b24e":()=>r(()=>import("./index.html-af746964.js"),[]).then(({data:n})=>n),"v-4031f170":()=>r(()=>import("./index.html-3d023949.js"),[]).then(({data:n})=>n),"v-2307d72e":()=>r(()=>import("./index.html-692059f9.js"),[]).then(({data:n})=>n),"v-8681a27a":()=>r(()=>import("./index.html-670b2c66.js"),[]).then(({data:n})=>n),"v-3f6e79de":()=>r(()=>import("./index.html-a7d87424.js"),[]).then(({data:n})=>n),"v-364ea92e":()=>r(()=>import("./index.html-2e210375.js"),[]).then(({data:n})=>n),"v-26ee445f":()=>r(()=>import("./index.html-92cc63f7.js"),[]).then(({data:n})=>n),"v-02f17b61":()=>r(()=>import("./index.html-fa662667.js"),[]).then(({data:n})=>n),"v-0e6aa261":()=>r(()=>import("./index.html-4d68d7d2.js"),[]).then(({data:n})=>n),"v-734e47fe":()=>r(()=>import("./index.html-a576d094.js"),[]).then(({data:n})=>n),"v-1b3e1bee":()=>r(()=>import("./index.html-09888d9e.js"),[]).then(({data:n})=>n),"v-b60e5920":()=>r(()=>import("./index.html-f43093b0.js"),[]).then(({data:n})=>n),"v-299ca1d6":()=>r(()=>import("./index.html-1f465710.js"),[]).then(({data:n})=>n),"v-299ca198":()=>r(()=>import("./index.html-0e475e27.js"),[]).then(({data:n})=>n),"v-7e747335":()=>r(()=>import("./index.html-ad43addd.js"),[]).then(({data:n})=>n),"v-58897f1a":()=>r(()=>import("./index.html-fac42bd9.js"),[]).then(({data:n})=>n),"v-2d1c40e2":()=>r(()=>import("./index.html-7f42fe07.js"),[]).then(({data:n})=>n),"v-295ffbfe":()=>r(()=>import("./index.html-d70af3db.js"),[]).then(({data:n})=>n),"v-4bdef0f0":()=>r(()=>import("./index.html-564fd04b.js"),[]).then(({data:n})=>n),"v-d0bc6108":()=>r(()=>import("./index.html-0625a0ae.js"),[]).then(({data:n})=>n),"v-cc046daa":()=>r(()=>import("./index.html-ac310fc8.js"),[]).then(({data:n})=>n),"v-5f8133a2":()=>r(()=>import("./index.html-45da5fa8.js"),[]).then(({data:n})=>n),"v-5b2ca300":()=>r(()=>import("./index.html-7bb7dcf6.js"),[]).then(({data:n})=>n),"v-5bc93818":()=>r(()=>import("./index.html-4f29d740.js"),[]).then(({data:n})=>n),"v-744d024e":()=>r(()=>import("./index.html-60c38201.js"),[]).then(({data:n})=>n),"v-e52c881c":()=>r(()=>import("./index.html-8f0e4fda.js"),[]).then(({data:n})=>n),"v-154dc4c4":()=>r(()=>import("./index.html-473a2d60.js"),[]).then(({data:n})=>n),"v-01560935":()=>r(()=>import("./index.html-da9dbc9e.js"),[]).then(({data:n})=>n),"v-0c75a0f8":()=>r(()=>import("./index.html-1292ef06.js"),[]).then(({data:n})=>n),"v-0f1d0e94":()=>r(()=>import("./index.html-7fef5079.js"),[]).then(({data:n})=>n),"v-226a68ec":()=>r(()=>import("./index.html-f57d13ac.js"),[]).then(({data:n})=>n),"v-3e6b05e8":()=>r(()=>import("./index.html-7ce8cd6f.js"),[]).then(({data:n})=>n),"v-12590846":()=>r(()=>import("./index.html-0e4ea655.js"),[]).then(({data:n})=>n),"v-301b24f4":()=>r(()=>import("./index.html-d9621494.js"),[]).then(({data:n})=>n),"v-247d58ff":()=>r(()=>import("./index.html-6a4f7d0c.js"),[]).then(({data:n})=>n),"v-3ceeab45":()=>r(()=>import("./index.html-3e858bf3.js"),[]).then(({data:n})=>n),"v-76b80ea2":()=>r(()=>import("./index.html-e8b02696.js"),[]).then(({data:n})=>n),"v-42254370":()=>r(()=>import("./index.html-22ad6b81.js"),[]).then(({data:n})=>n),"v-40b68770":()=>r(()=>import("./index.html-716bef39.js"),[]).then(({data:n})=>n),"v-3aafda76":()=>r(()=>import("./index.html-d23830f3.js"),[]).then(({data:n})=>n),"v-4c41ef7e":()=>r(()=>import("./index.html-9f987d6a.js"),[]).then(({data:n})=>n),"v-624a9248":()=>r(()=>import("./index.html-7bd1c251.js"),[]).then(({data:n})=>n)},pm=JSON.parse('{"base":"/newblog/","lang":"zh-CN","title":"blog","description":"开源工具、效率方法的自我提升笔记，记录并输出一切能让自己提升的知识。","head":[["meta",{"name":"referrer","content":"no-referrer"}],["link",{"rel":"icon","href":"/favicon.ico"}],["link",{"rel":"manifest","href":"/newblog/manifest.webmanifest","crossorigin":"use-credentials"}],["meta",{"name":"theme-color","content":"#46bd87"}],["meta",{"name":"viewport","content":"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"}]],"locales":{}}');var rm=([n,e,s])=>n==="meta"&&e.name?`${n}.${e.name}`:["title","base"].includes(n)?n:n==="template"&&e.id?`${n}.${e.id}`:JSON.stringify([n,e,s]),lm=n=>{const e=new Set,s=[];return n.forEach(t=>{const a=rm(t);e.has(a)||(e.add(a),s.push(t))}),s},im=n=>n[n.length-1]==="/"||n.endsWith(".html")?n:`${n}/`,cm=n=>n.startsWith("ftp://"),bs=n=>/^(https?:)?\/\//.test(n),um=/.md((\?|#).*)?$/,ua=(n,e="/")=>!!(bs(n)||cm(n)||n.startsWith("/")&&!n.startsWith(e)&&!um.test(n)),ii=n=>/^mailto:/.test(n),dm=n=>/^tel:/.test(n),Jo=n=>Object.prototype.toString.call(n)==="[object Object]",Uo=n=>n[n.length-1]==="/"?n.slice(0,-1):n,ci=n=>n[0]==="/"?n.slice(1):n,vm=(n,e)=>{const s=Object.keys(n).sort((t,a)=>{const o=a.split("/").length-t.split("/").length;return o!==0?o:a.length-t.length});for(const t of s)if(e.startsWith(t))return t;return"/"};const ui={"v-8daa1a0e":m(()=>r(()=>import("./index.html-5b6ccdc5.js"),["assets/index.html-5b6ccdc5.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-184f4da6":m(()=>r(()=>import("./intro.html-12c4eb27.js"),["assets/intro.html-12c4eb27.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-69693975":m(()=>r(()=>import("./AppNotes.html-3f3b7d8b.js"),["assets/AppNotes.html-3f3b7d8b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1735a0be":m(()=>r(()=>import("./Applist.html-1ea3fbe0.js"),["assets/Applist.html-1ea3fbe0.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-d967ed6c":m(()=>r(()=>import("./ChatGPT.html-530a22ad.js"),["assets/ChatGPT.html-530a22ad.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5c29014a":m(()=>r(()=>import("./Chrome.html-48b3e95c.js"),["assets/Chrome.html-48b3e95c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1d7dd2b7":m(()=>r(()=>import("./design.html-b389dee9.js"),["assets/design.html-b389dee9.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1c7fca9e":m(()=>r(()=>import("./Cloudflare.html-ef325ed3.js"),["assets/Cloudflare.html-ef325ed3.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2b70157f":m(()=>r(()=>import("./DNS.html-603e946f.js"),["assets/DNS.html-603e946f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-bc154f32":m(()=>r(()=>import("./GitHub.html-0b243d23.js"),["assets/GitHub.html-0b243d23.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7c5f209c":m(()=>r(()=>import("./Static.html-38942977.js"),["assets/Static.html-38942977.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-39dc98a2":m(()=>r(()=>import("./VPS.html-4f601887.js"),["assets/VPS.html-4f601887.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2bc6566a":m(()=>r(()=>import("./cherry.html-f0738d35.js"),["assets/cherry.html-f0738d35.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-24b7c48d":m(()=>r(()=>import("./dragonfruit.html-c1924c83.js"),["assets/dragonfruit.html-c1924c83.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-f0ec4556":m(()=>r(()=>import("./strawberry.html-240c85e1.js"),["assets/strawberry.html-240c85e1.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-df8b6e0c":m(()=>r(()=>import("./tomato.html-6a575e6a.js"),["assets/tomato.html-6a575e6a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-00f6d5f1":m(()=>r(()=>import("./Comments.html-e730f7ff.js"),["assets/Comments.html-e730f7ff.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3b0b9f28":m(()=>r(()=>import("./VuePress.html-425080dd.js"),["assets/VuePress.html-425080dd.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3cdca328":m(()=>r(()=>import("./docsify.html-3f4d02ab.js"),["assets/docsify.html-3f4d02ab.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-77e3440a":m(()=>r(()=>import("./01.html-743ce81c.js"),["assets/01.html-743ce81c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-79981ca9":m(()=>r(()=>import("./02.html-4f47b302.js"),["assets/02.html-4f47b302.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7b4cf548":m(()=>r(()=>import("./03.html-13dda294.js"),["assets/03.html-13dda294.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7d01cde7":m(()=>r(()=>import("./04.html-3e3e3be4.js"),["assets/04.html-3e3e3be4.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7eb6a686":m(()=>r(()=>import("./05.html-fd44149f.js"),["assets/05.html-fd44149f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-ff2901b6":m(()=>r(()=>import("./06.html-d4418c23.js"),["assets/06.html-d4418c23.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-fbbf5078":m(()=>r(()=>import("./07.html-636d47bd.js"),["assets/07.html-636d47bd.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-f8559f3a":m(()=>r(()=>import("./08.html-5426cd88.js"),["assets/08.html-5426cd88.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-f4ebedfc":m(()=>r(()=>import("./09.html-856ac6dd.js"),["assets/09.html-856ac6dd.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-a9d6b2a8":m(()=>r(()=>import("./10.html-6684ce78.js"),["assets/10.html-6684ce78.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-a66d016a":m(()=>r(()=>import("./11.html-233d7d28.js"),["assets/11.html-233d7d28.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2632f347":m(()=>r(()=>import("./01.html-2a1c32b4.js"),["assets/01.html-2a1c32b4.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-27e7cbe6":m(()=>r(()=>import("./02.html-ce94eef3.js"),["assets/02.html-ce94eef3.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-299ca485":m(()=>r(()=>import("./03.html-8186fd70.js"),["assets/03.html-8186fd70.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2b517d24":m(()=>r(()=>import("./04.html-9a8b9721.js"),["assets/04.html-9a8b9721.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2d0655c3":m(()=>r(()=>import("./05.html-366088b7.js"),["assets/05.html-366088b7.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2ebb2e62":m(()=>r(()=>import("./06.html-4c7f1261.js"),["assets/06.html-4c7f1261.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-30700701":m(()=>r(()=>import("./07.html-b515fc78.js"),["assets/07.html-b515fc78.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3224dfa0":m(()=>r(()=>import("./08.html-5fcd6101.js"),["assets/08.html-5fcd6101.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-33d9b83f":m(()=>r(()=>import("./09.html-731b7db0.js"),["assets/09.html-731b7db0.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-596455e9":m(()=>r(()=>import("./10.html-89cd8738.js"),["assets/10.html-89cd8738.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5b192e88":m(()=>r(()=>import("./11.html-c693c413.js"),["assets/11.html-c693c413.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5cce0727":m(()=>r(()=>import("./12.html-d94ae292.js"),["assets/12.html-d94ae292.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5e82dfc6":m(()=>r(()=>import("./13.html-640ed624.js"),["assets/13.html-640ed624.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6037b865":m(()=>r(()=>import("./14.html-fed6ef92.js"),["assets/14.html-fed6ef92.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-61ec9104":m(()=>r(()=>import("./15.html-39a3a836.js"),["assets/15.html-39a3a836.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-63a169a3":m(()=>r(()=>import("./16.html-6648e8f3.js"),["assets/16.html-6648e8f3.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-65564242":m(()=>r(()=>import("./17.html-e7028765.js"),["assets/17.html-e7028765.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-670b1ae1":m(()=>r(()=>import("./18.html-a7b0ee87.js"),["assets/18.html-a7b0ee87.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-67b8c712":m(()=>r(()=>import("./1.html-0777cf36.js"),["assets/1.html-0777cf36.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-696d9fb1":m(()=>r(()=>import("./2.html-50d682b1.js"),["assets/2.html-50d682b1.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6b227850":m(()=>r(()=>import("./3.html-0d8dcdd5.js"),["assets/3.html-0d8dcdd5.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6cd750ef":m(()=>r(()=>import("./4.html-db8613f2.js"),["assets/4.html-db8613f2.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7a07405d":m(()=>r(()=>import("./1.html-eba6f80c.js"),["assets/1.html-eba6f80c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7bbc18fc":m(()=>r(()=>import("./2.html-07320d3e.js"),["assets/2.html-07320d3e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7d70f19b":m(()=>r(()=>import("./3.html-3d9f6e23.js"),["assets/3.html-3d9f6e23.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7f25ca3a":m(()=>r(()=>import("./4.html-0998ee7d.js"),["assets/4.html-0998ee7d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3d41e0e3":m(()=>r(()=>import("./01.html-8f258e2f.js"),["assets/01.html-8f258e2f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3ef6b982":m(()=>r(()=>import("./02.html-47b2d54c.js"),["assets/02.html-47b2d54c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-40ab9221":m(()=>r(()=>import("./03.html-16ca0ebd.js"),["assets/03.html-16ca0ebd.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-42606ac0":m(()=>r(()=>import("./04.html-01055f55.js"),["assets/04.html-01055f55.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4415435f":m(()=>r(()=>import("./05.html-c9317b90.js"),["assets/05.html-c9317b90.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-45ca1bfe":m(()=>r(()=>import("./06.html-a7c0953f.js"),["assets/06.html-a7c0953f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-8f5a8800":m(()=>r(()=>import("./01.html-3a1a38e5.js"),["assets/01.html-3a1a38e5.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-8bf0d6c2":m(()=>r(()=>import("./02.html-18a70d72.js"),["assets/02.html-18a70d72.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-88872584":m(()=>r(()=>import("./03.html-95155fe8.js"),["assets/03.html-95155fe8.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-851d7446":m(()=>r(()=>import("./04.html-2604c66d.js"),["assets/04.html-2604c66d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-81b3c308":m(()=>r(()=>import("./05.html-1403f782.js"),["assets/05.html-1403f782.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7e4a11ca":m(()=>r(()=>import("./06.html-00d72bc6.js"),["assets/06.html-00d72bc6.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7ae0608c":m(()=>r(()=>import("./07.html-4898b482.js"),["assets/07.html-4898b482.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7776af4e":m(()=>r(()=>import("./08.html-5f96afdc.js"),["assets/08.html-5f96afdc.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-740cfe10":m(()=>r(()=>import("./09.html-66920915.js"),["assets/09.html-66920915.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-28f7c2bc":m(()=>r(()=>import("./10.html-9c992eac.js"),["assets/10.html-9c992eac.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-63e77b20":m(()=>r(()=>import("./bookmark-scripts.html-270f616e.js"),["assets/bookmark-scripts.html-270f616e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-60213eb0":m(()=>r(()=>import("./online-tools.html-73515fa4.js"),["assets/online-tools.html-73515fa4.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-20ee9d86":m(()=>r(()=>import("./01.html-fda1c847.js"),["assets/01.html-fda1c847.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1d84ec48":m(()=>r(()=>import("./02.html-fa07553e.js"),["assets/02.html-fa07553e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1a1b3b0a":m(()=>r(()=>import("./03.html-3a542fa2.js"),["assets/03.html-3a542fa2.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-16b189cc":m(()=>r(()=>import("./04.html-26476058.js"),["assets/04.html-26476058.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6c412aac":m(()=>r(()=>import("./01.html-f875dff5.js"),["assets/01.html-f875dff5.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-68d7796e":m(()=>r(()=>import("./02.html-74a392e7.js"),["assets/02.html-74a392e7.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-656dc830":m(()=>r(()=>import("./03.html-576346d0.js"),["assets/03.html-576346d0.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6e34a17a":m(()=>r(()=>import("./01.html-7422bd6e.js"),["assets/01.html-7422bd6e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-fa8ee52c":m(()=>r(()=>import("./01.html-14fa77b0.js"),["assets/01.html-14fa77b0.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-f72533ee":m(()=>r(()=>import("./02.html-7d6b72ff.js"),["assets/02.html-7d6b72ff.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-f3bb82b0":m(()=>r(()=>import("./03.html-52c3f557.js"),["assets/03.html-52c3f557.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-f051d172":m(()=>r(()=>import("./04.html-89b36cf0.js"),["assets/04.html-89b36cf0.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-ece82034":m(()=>r(()=>import("./05.html-302cc9e7.js"),["assets/05.html-302cc9e7.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-e97e6ef6":m(()=>r(()=>import("./06.html-735cc0a2.js"),["assets/06.html-735cc0a2.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-e614bdb8":m(()=>r(()=>import("./07.html-1bcd562d.js"),["assets/07.html-1bcd562d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-e2ab0c7a":m(()=>r(()=>import("./08.html-cc3dae0c.js"),["assets/08.html-cc3dae0c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-df415b3c":m(()=>r(()=>import("./09.html-61b66580.js"),["assets/09.html-61b66580.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-942c1fe8":m(()=>r(()=>import("./10.html-fd794020.js"),["assets/10.html-fd794020.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-90c26eaa":m(()=>r(()=>import("./11.html-b2e189c9.js"),["assets/11.html-b2e189c9.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5f498b30":m(()=>r(()=>import("./01.html-420fd6fe.js"),["assets/01.html-420fd6fe.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6b5bab47":m(()=>r(()=>import("./01.html-e933fc80.js"),["assets/01.html-e933fc80.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6d1083e6":m(()=>r(()=>import("./02.html-b65e25b6.js"),["assets/02.html-b65e25b6.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6ec55c85":m(()=>r(()=>import("./03.html-c354423f.js"),["assets/03.html-c354423f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-707a3524":m(()=>r(()=>import("./04.html-54169216.js"),["assets/04.html-54169216.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-722f0dc3":m(()=>r(()=>import("./05.html-5d08641c.js"),["assets/05.html-5d08641c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-73e3e662":m(()=>r(()=>import("./06.html-c630db67.js"),["assets/06.html-c630db67.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7598bf01":m(()=>r(()=>import("./07.html-5d504e10.js"),["assets/07.html-5d504e10.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-774d97a0":m(()=>r(()=>import("./08.html-e5a53ca3.js"),["assets/08.html-e5a53ca3.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7902703f":m(()=>r(()=>import("./09.html-61e92972.js"),["assets/09.html-61e92972.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-c2e5e42e":m(()=>r(()=>import("./10.html-52b89b1b.js"),["assets/10.html-52b89b1b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-bf7c32f0":m(()=>r(()=>import("./11.html-0fa681da.js"),["assets/11.html-0fa681da.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-8403a022":m(()=>r(()=>import("./01.html-5eef8466.js"),["assets/01.html-5eef8466.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-8099eee4":m(()=>r(()=>import("./02.html-9bd5998a.js"),["assets/02.html-9bd5998a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7d303da6":m(()=>r(()=>import("./03.html-f5e24909.js"),["assets/03.html-f5e24909.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-79c68c68":m(()=>r(()=>import("./04.html-0139aa57.js"),["assets/04.html-0139aa57.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6f4eb639":m(()=>r(()=>import("./01.html-503ffa28.js"),["assets/01.html-503ffa28.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-71038ed8":m(()=>r(()=>import("./02.html-93e7127f.js"),["assets/02.html-93e7127f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-72b86777":m(()=>r(()=>import("./03.html-957d32f1.js"),["assets/03.html-957d32f1.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-746d4016":m(()=>r(()=>import("./04.html-85ec36bd.js"),["assets/04.html-85ec36bd.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-762218b5":m(()=>r(()=>import("./05.html-c1eddf1c.js"),["assets/05.html-c1eddf1c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-77d6f154":m(()=>r(()=>import("./06.html-20e5d3be.js"),["assets/06.html-20e5d3be.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-798bc9f3":m(()=>r(()=>import("./07.html-9b527e3c.js"),["assets/07.html-9b527e3c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7b40a292":m(()=>r(()=>import("./08.html-08d8b926.js"),["assets/08.html-08d8b926.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7cf57b31":m(()=>r(()=>import("./09.html-773be702.js"),["assets/09.html-773be702.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-baffce4a":m(()=>r(()=>import("./10.html-ab414bdf.js"),["assets/10.html-ab414bdf.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-b7961d0c":m(()=>r(()=>import("./11.html-caa50351.js"),["assets/11.html-caa50351.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-b42c6bce":m(()=>r(()=>import("./12.html-caa0fa6f.js"),["assets/12.html-caa0fa6f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-b0c2ba90":m(()=>r(()=>import("./13.html-d3406762.js"),["assets/13.html-d3406762.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-ad590952":m(()=>r(()=>import("./14.html-461eadc2.js"),["assets/14.html-461eadc2.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-a9ef5814":m(()=>r(()=>import("./15.html-635917af.js"),["assets/15.html-635917af.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-a685a6d6":m(()=>r(()=>import("./16.html-ccdbdb3b.js"),["assets/16.html-ccdbdb3b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-a31bf598":m(()=>r(()=>import("./17.html-c4a4f84e.js"),["assets/17.html-c4a4f84e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-9fb2445a":m(()=>r(()=>import("./18.html-eba8bfed.js"),["assets/18.html-eba8bfed.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-9c48931c":m(()=>r(()=>import("./19.html-62091261.js"),["assets/19.html-62091261.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-513357c8":m(()=>r(()=>import("./20.html-9c1b3a7a.js"),["assets/20.html-9c1b3a7a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4dc9a68a":m(()=>r(()=>import("./21.html-f63b73d4.js"),["assets/21.html-f63b73d4.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4a5ff54c":m(()=>r(()=>import("./22.html-cee75b90.js"),["assets/22.html-cee75b90.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-46f6440e":m(()=>r(()=>import("./23.html-d0c8dd38.js"),["assets/23.html-d0c8dd38.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3ae21c12":m(()=>r(()=>import("./01.html-84f4e835.js"),["assets/01.html-84f4e835.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-37786ad4":m(()=>r(()=>import("./02.html-3926272e.js"),["assets/02.html-3926272e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-340eb996":m(()=>r(()=>import("./03.html-b1e6e5de.js"),["assets/03.html-b1e6e5de.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-30a50858":m(()=>r(()=>import("./04.html-e7c0673a.js"),["assets/04.html-e7c0673a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2d3b571a":m(()=>r(()=>import("./05.html-b5a714ac.js"),["assets/05.html-b5a714ac.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-29d1a5dc":m(()=>r(()=>import("./06.html-fbe26dbb.js"),["assets/06.html-fbe26dbb.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2667f49e":m(()=>r(()=>import("./07.html-924b6794.js"),["assets/07.html-924b6794.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-22fe4360":m(()=>r(()=>import("./08.html-eb636150.js"),["assets/08.html-eb636150.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1f949222":m(()=>r(()=>import("./09.html-5ec1f33c.js"),["assets/09.html-5ec1f33c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-15c05499":m(()=>r(()=>import("./10.html-f2776734.js"),["assets/10.html-f2776734.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-17752d38":m(()=>r(()=>import("./11.html-e77ca954.js"),["assets/11.html-e77ca954.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-192a05d7":m(()=>r(()=>import("./12.html-9c3da1c4.js"),["assets/12.html-9c3da1c4.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1adede76":m(()=>r(()=>import("./13.html-d38c39c8.js"),["assets/13.html-d38c39c8.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1c93b715":m(()=>r(()=>import("./14.html-7c036638.js"),["assets/14.html-7c036638.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1e488fb4":m(()=>r(()=>import("./15.html-eea4c4e8.js"),["assets/15.html-eea4c4e8.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1ffd6853":m(()=>r(()=>import("./16.html-65047b57.js"),["assets/16.html-65047b57.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-21b240f2":m(()=>r(()=>import("./17.html-2d394bb5.js"),["assets/17.html-2d394bb5.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-23671991":m(()=>r(()=>import("./18.html-cabbf1be.js"),["assets/18.html-cabbf1be.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-251bf230":m(()=>r(()=>import("./19.html-4fe1c3c5.js"),["assets/19.html-4fe1c3c5.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4aa68fda":m(()=>r(()=>import("./20.html-956e61ce.js"),["assets/20.html-956e61ce.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4c5b6879":m(()=>r(()=>import("./21.html-acbe0ece.js"),["assets/21.html-acbe0ece.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4e104118":m(()=>r(()=>import("./22.html-599e969e.js"),["assets/22.html-599e969e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4fc519b7":m(()=>r(()=>import("./23.html-1ac2ea9a.js"),["assets/23.html-1ac2ea9a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5179f256":m(()=>r(()=>import("./24.html-725c9842.js"),["assets/24.html-725c9842.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-532ecaf5":m(()=>r(()=>import("./25.html-442ee429.js"),["assets/25.html-442ee429.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-54e3a394":m(()=>r(()=>import("./26.html-54022dcd.js"),["assets/26.html-54022dcd.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-56987c33":m(()=>r(()=>import("./27.html-65bc8e06.js"),["assets/27.html-65bc8e06.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-584d54d2":m(()=>r(()=>import("./28.html-b9c929cc.js"),["assets/28.html-b9c929cc.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5a022d71":m(()=>r(()=>import("./29.html-124d3422.js"),["assets/29.html-124d3422.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7f8ccb1b":m(()=>r(()=>import("./30.html-67ba8dd0.js"),["assets/30.html-67ba8dd0.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-fd7cb88c":m(()=>r(()=>import("./31.html-2da6c229.js"),["assets/31.html-2da6c229.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-fa13074e":m(()=>r(()=>import("./32.html-eeada15f.js"),["assets/32.html-eeada15f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-f6a95610":m(()=>r(()=>import("./33.html-06fa93d8.js"),["assets/33.html-06fa93d8.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-f33fa4d2":m(()=>r(()=>import("./34.html-d36b050b.js"),["assets/34.html-d36b050b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-efd5f394":m(()=>r(()=>import("./35.html-ee50bec5.js"),["assets/35.html-ee50bec5.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-ec6c4256":m(()=>r(()=>import("./36.html-b3717a6b.js"),["assets/36.html-b3717a6b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-c15f9c8c":m(()=>r(()=>import("./01.html-d90bdbbf.js"),["assets/01.html-d90bdbbf.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-bdf5eb4e":m(()=>r(()=>import("./02.html-d7ff68d7.js"),["assets/02.html-d7ff68d7.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-ba8c3a10":m(()=>r(()=>import("./03.html-2a931def.js"),["assets/03.html-2a931def.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-b72288d2":m(()=>r(()=>import("./04.html-852c674f.js"),["assets/04.html-852c674f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-b3b8d794":m(()=>r(()=>import("./05.html-5da2e368.js"),["assets/05.html-5da2e368.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-b04f2656":m(()=>r(()=>import("./06.html-c2558e9a.js"),["assets/06.html-c2558e9a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-ace57518":m(()=>r(()=>import("./07.html-441bc948.js"),["assets/07.html-441bc948.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-a97bc3da":m(()=>r(()=>import("./08.html-988a2419.js"),["assets/08.html-988a2419.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-a612129c":m(()=>r(()=>import("./09.html-95520d25.js"),["assets/09.html-95520d25.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5afcd748":m(()=>r(()=>import("./10.html-25ea327b.js"),["assets/10.html-25ea327b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5793260a":m(()=>r(()=>import("./11.html-4d156dfb.js"),["assets/11.html-4d156dfb.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-542974cc":m(()=>r(()=>import("./12.html-0e2ed122.js"),["assets/12.html-0e2ed122.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-50bfc38e":m(()=>r(()=>import("./13.html-9b4f622f.js"),["assets/13.html-9b4f622f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4d561250":m(()=>r(()=>import("./14.html-08a28ec8.js"),["assets/14.html-08a28ec8.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-49ec6112":m(()=>r(()=>import("./15.html-14c87a74.js"),["assets/15.html-14c87a74.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4682afd4":m(()=>r(()=>import("./16.html-d44ac22c.js"),["assets/16.html-d44ac22c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4318fe96":m(()=>r(()=>import("./17.html-94990610.js"),["assets/17.html-94990610.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3faf4d58":m(()=>r(()=>import("./18.html-edafcfae.js"),["assets/18.html-edafcfae.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3c459c1a":m(()=>r(()=>import("./19.html-849e7ffb.js"),["assets/19.html-849e7ffb.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0767cf9d":m(()=>r(()=>import("./20.html-b7f7eabf.js"),["assets/20.html-b7f7eabf.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-091ca83c":m(()=>r(()=>import("./21.html-8763d5db.js"),["assets/21.html-8763d5db.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0ad180db":m(()=>r(()=>import("./22.html-6bdf4269.js"),["assets/22.html-6bdf4269.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0c86597a":m(()=>r(()=>import("./23.html-9626d4d7.js"),["assets/23.html-9626d4d7.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-bfed7bf0":m(()=>r(()=>import("./01.html-1b340340.js"),["assets/01.html-1b340340.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-bc83cab2":m(()=>r(()=>import("./02.html-c9e53107.js"),["assets/02.html-c9e53107.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-b91a1974":m(()=>r(()=>import("./03.html-a99707fd.js"),["assets/03.html-a99707fd.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-b5b06836":m(()=>r(()=>import("./04.html-a1e0aeb6.js"),["assets/04.html-a1e0aeb6.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-b246b6f8":m(()=>r(()=>import("./05.html-d7241b33.js"),["assets/05.html-d7241b33.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-aedd05ba":m(()=>r(()=>import("./06.html-37d1439e.js"),["assets/06.html-37d1439e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-ab73547c":m(()=>r(()=>import("./07.html-020f8206.js"),["assets/07.html-020f8206.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-a809a33e":m(()=>r(()=>import("./08.html-174d4664.js"),["assets/08.html-174d4664.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-a49ff200":m(()=>r(()=>import("./09.html-25be54a6.js"),["assets/09.html-25be54a6.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0055f2c3":m(()=>r(()=>import("./01.html-2856fec3.js"),["assets/01.html-2856fec3.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-020acb62":m(()=>r(()=>import("./02.html-5656545c.js"),["assets/02.html-5656545c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-03bfa401":m(()=>r(()=>import("./03.html-693ff98f.js"),["assets/03.html-693ff98f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-05747ca0":m(()=>r(()=>import("./04.html-1b7c1cf6.js"),["assets/04.html-1b7c1cf6.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0729553f":m(()=>r(()=>import("./05.html-84420a7b.js"),["assets/05.html-84420a7b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-08de2dde":m(()=>r(()=>import("./06.html-e96bc737.js"),["assets/06.html-e96bc737.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0a93067d":m(()=>r(()=>import("./07.html-f7053cfe.js"),["assets/07.html-f7053cfe.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0c47df1c":m(()=>r(()=>import("./08.html-0d2f634e.js"),["assets/08.html-0d2f634e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0dfcb7bb":m(()=>r(()=>import("./09.html-160abb65.js"),["assets/09.html-160abb65.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-33875565":m(()=>r(()=>import("./10.html-d1811a96.js"),["assets/10.html-d1811a96.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-353c2e04":m(()=>r(()=>import("./11.html-7cff604b.js"),["assets/11.html-7cff604b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-36f106a3":m(()=>r(()=>import("./12.html-ab120980.js"),["assets/12.html-ab120980.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-38a5df42":m(()=>r(()=>import("./13.html-e9ca0796.js"),["assets/13.html-e9ca0796.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3a5ab7e1":m(()=>r(()=>import("./14.html-d70353a6.js"),["assets/14.html-d70353a6.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3c0f9080":m(()=>r(()=>import("./15.html-ad7cec28.js"),["assets/15.html-ad7cec28.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3dc4691f":m(()=>r(()=>import("./16.html-fb89d973.js"),["assets/16.html-fb89d973.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-d6cb3c78":m(()=>r(()=>import("./01.html-744bedf7.js"),["assets/01.html-744bedf7.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-d3618b3a":m(()=>r(()=>import("./02.html-0072c34d.js"),["assets/02.html-0072c34d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-cff7d9fc":m(()=>r(()=>import("./03.html-20c8ad2e.js"),["assets/03.html-20c8ad2e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-cc8e28be":m(()=>r(()=>import("./04.html-7a0e3b4f.js"),["assets/04.html-7a0e3b4f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-c5bac642":m(()=>r(()=>import("./06.html-49b400f7.js"),["assets/06.html-49b400f7.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-c2511504":m(()=>r(()=>import("./07.html-2a2388bd.js"),["assets/07.html-2a2388bd.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-bee763c6":m(()=>r(()=>import("./08.html-734cda39.js"),["assets/08.html-734cda39.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-bb7db288":m(()=>r(()=>import("./09.html-841543d2.js"),["assets/09.html-841543d2.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-70687734":m(()=>r(()=>import("./10.html-1784d231.js"),["assets/10.html-1784d231.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6cfec5f6":m(()=>r(()=>import("./11.html-c07f90a1.js"),["assets/11.html-c07f90a1.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-699514b8":m(()=>r(()=>import("./12.html-d968d18a.js"),["assets/12.html-d968d18a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-662b637a":m(()=>r(()=>import("./13.html-4ef78e7f.js"),["assets/13.html-4ef78e7f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-62c1b23c":m(()=>r(()=>import("./14.html-6d2f0009.js"),["assets/14.html-6d2f0009.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5f5800fe":m(()=>r(()=>import("./15.html-9dbaa8bf.js"),["assets/15.html-9dbaa8bf.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5bee4fc0":m(()=>r(()=>import("./16.html-1887c61a.js"),["assets/16.html-1887c61a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-58849e82":m(()=>r(()=>import("./17.html-40bd525c.js"),["assets/17.html-40bd525c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-551aed44":m(()=>r(()=>import("./18.html-f1e89582.js"),["assets/18.html-f1e89582.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-01544aa3":m(()=>r(()=>import("./01.html-257683f9.js"),["assets/01.html-257683f9.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-03092342":m(()=>r(()=>import("./02.html-c09972d7.js"),["assets/02.html-c09972d7.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-04bdfbe1":m(()=>r(()=>import("./03.html-c2dc31d2.js"),["assets/03.html-c2dc31d2.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0672d480":m(()=>r(()=>import("./04.html-cb578dbd.js"),["assets/04.html-cb578dbd.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-33cf2509":m(()=>r(()=>import("./01.html-99994192.js"),["assets/01.html-99994192.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3583fda8":m(()=>r(()=>import("./02.html-492b4669.js"),["assets/02.html-492b4669.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3738d647":m(()=>r(()=>import("./03.html-959cf1f5.js"),["assets/03.html-959cf1f5.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-38edaee6":m(()=>r(()=>import("./04.html-2e6cf3f5.js"),["assets/04.html-2e6cf3f5.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3aa28785":m(()=>r(()=>import("./05.html-80b45db7.js"),["assets/05.html-80b45db7.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-266cbe57":m(()=>r(()=>import("./01.html-ac411d4a.js"),["assets/01.html-ac411d4a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-282196f6":m(()=>r(()=>import("./02.html-d42aa153.js"),["assets/02.html-d42aa153.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-29d66f95":m(()=>r(()=>import("./03.html-9aa93cb4.js"),["assets/03.html-9aa93cb4.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2b8b4834":m(()=>r(()=>import("./04.html-c47c51b9.js"),["assets/04.html-c47c51b9.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2d4020d3":m(()=>r(()=>import("./05.html-59728f44.js"),["assets/05.html-59728f44.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2ef4f972":m(()=>r(()=>import("./06.html-f8f8e8ab.js"),["assets/06.html-f8f8e8ab.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-30a9d211":m(()=>r(()=>import("./07.html-a438a317.js"),["assets/07.html-a438a317.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-325eaab0":m(()=>r(()=>import("./08.html-5ede3736.js"),["assets/08.html-5ede3736.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3413834f":m(()=>r(()=>import("./09.html-7942bbc0.js"),["assets/09.html-7942bbc0.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-599e20f9":m(()=>r(()=>import("./10.html-5a7c492e.js"),["assets/10.html-5a7c492e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5b52f998":m(()=>r(()=>import("./11.html-7081de50.js"),["assets/11.html-7081de50.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5d07d237":m(()=>r(()=>import("./12.html-f005777f.js"),["assets/12.html-f005777f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5ebcaad6":m(()=>r(()=>import("./13.html-e87c36fe.js"),["assets/13.html-e87c36fe.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-60718375":m(()=>r(()=>import("./14.html-8a58bfe6.js"),["assets/14.html-8a58bfe6.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-05e216f0":m(()=>r(()=>import("./01.html-08f71062.js"),["assets/01.html-08f71062.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-027865b2":m(()=>r(()=>import("./02.html-4f63f1f7.js"),["assets/02.html-4f63f1f7.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0078a5c6":m(()=>r(()=>import("./03.html-1bdd1bfd.js"),["assets/03.html-1bdd1bfd.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-022d7e65":m(()=>r(()=>import("./04.html-ef5d2f9d.js"),["assets/04.html-ef5d2f9d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-03e25704":m(()=>r(()=>import("./05.html-7f1ac02e.js"),["assets/05.html-7f1ac02e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-05972fa3":m(()=>r(()=>import("./06.html-98b9c004.js"),["assets/06.html-98b9c004.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-671ae07c":m(()=>r(()=>import("./01.html-a68dfb8d.js"),["assets/01.html-a68dfb8d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-68cfb91b":m(()=>r(()=>import("./02.html-d60ac7a6.js"),["assets/02.html-d60ac7a6.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6a8491ba":m(()=>r(()=>import("./03.html-e98a2f5f.js"),["assets/03.html-e98a2f5f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6c396a59":m(()=>r(()=>import("./04.html-698e7576.js"),["assets/04.html-698e7576.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1ff273ed":m(()=>r(()=>import("./01.html-fc756b71.js"),["assets/01.html-fc756b71.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-21a74c8c":m(()=>r(()=>import("./02.html-145f52e6.js"),["assets/02.html-145f52e6.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-235c252b":m(()=>r(()=>import("./03.html-6d67770e.js"),["assets/03.html-6d67770e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2510fdca":m(()=>r(()=>import("./04.html-3fdc9181.js"),["assets/04.html-3fdc9181.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-26c5d669":m(()=>r(()=>import("./05.html-ee61e411.js"),["assets/05.html-ee61e411.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-287aaf08":m(()=>r(()=>import("./06.html-48e6d8d3.js"),["assets/06.html-48e6d8d3.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2a2f87a7":m(()=>r(()=>import("./07.html-73463a43.js"),["assets/07.html-73463a43.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2be46046":m(()=>r(()=>import("./08.html-39f7d3f1.js"),["assets/08.html-39f7d3f1.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2d9938e5":m(()=>r(()=>import("./09.html-6e0a66e4.js"),["assets/09.html-6e0a66e4.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5323d68f":m(()=>r(()=>import("./10.html-aa1945d0.js"),["assets/10.html-aa1945d0.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3296bd31":m(()=>r(()=>import("./browser.html-39539e6c.js"),["assets/browser.html-39539e6c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3a8682f9":m(()=>r(()=>import("./cross-platform.html-8e396eab.js"),["assets/cross-platform.html-8e396eab.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-71b3b66f":m(()=>r(()=>import("./vscode.html-ea9faf46.js"),["assets/vscode.html-ea9faf46.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-10d9f538":m(()=>r(()=>import("./webstorm.html-3e887d89.js"),["assets/webstorm.html-3e887d89.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-85bcb294":m(()=>r(()=>import("./windows.html-9a2f501d.js"),["assets/windows.html-9a2f501d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3706649a":m(()=>r(()=>import("./404.html-44cef167.js"),["assets/404.html-44cef167.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-144e84a4":m(()=>r(()=>import("./index.html-2f3786bb.js"),["assets/index.html-2f3786bb.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-72a9c1e2":m(()=>r(()=>import("./index.html-8b3db911.js"),["assets/index.html-8b3db911.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-e1e3da16":m(()=>r(()=>import("./index.html-ad97f978.js"),["assets/index.html-ad97f978.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-744e6dd4":m(()=>r(()=>import("./index.html-94bf6f40.js"),["assets/index.html-94bf6f40.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-b22fa0a4":m(()=>r(()=>import("./index.html-c298f271.js"),["assets/index.html-c298f271.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4e029433":m(()=>r(()=>import("./index.html-2f4a09bb.js"),["assets/index.html-2f4a09bb.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-acdb09de":m(()=>r(()=>import("./index.html-74f55b10.js"),["assets/index.html-74f55b10.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-08f42f4a":m(()=>r(()=>import("./index.html-37c0c4e0.js"),["assets/index.html-37c0c4e0.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-30be3cd5":m(()=>r(()=>import("./index.html-98cb7a8a.js"),["assets/index.html-98cb7a8a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-326764f5":m(()=>r(()=>import("./index.html-b000bac3.js"),["assets/index.html-b000bac3.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-dc68d520":m(()=>r(()=>import("./index.html-5055a5ae.js"),["assets/index.html-5055a5ae.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2d582078":m(()=>r(()=>import("./index.html-4ef5fbe3.js"),["assets/index.html-4ef5fbe3.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-429fc9e8":m(()=>r(()=>import("./index.html-b8bc4e03.js"),["assets/index.html-b8bc4e03.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1559ca3e":m(()=>r(()=>import("./index.html-f303da1c.js"),["assets/index.html-f303da1c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3a02344a":m(()=>r(()=>import("./index.html-1fda7883.js"),["assets/index.html-1fda7883.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7d243d0e":m(()=>r(()=>import("./index.html-1650e77b.js"),["assets/index.html-1650e77b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-c3b7df84":m(()=>r(()=>import("./index.html-d90bf61b.js"),["assets/index.html-d90bf61b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5ebe9341":m(()=>r(()=>import("./index.html-6a5ba35e.js"),["assets/index.html-6a5ba35e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3b98b24e":m(()=>r(()=>import("./index.html-6773afba.js"),["assets/index.html-6773afba.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4031f170":m(()=>r(()=>import("./index.html-4170c3ad.js"),["assets/index.html-4170c3ad.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2307d72e":m(()=>r(()=>import("./index.html-3ae76600.js"),["assets/index.html-3ae76600.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-8681a27a":m(()=>r(()=>import("./index.html-71a8e136.js"),["assets/index.html-71a8e136.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3f6e79de":m(()=>r(()=>import("./index.html-89d88079.js"),["assets/index.html-89d88079.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-364ea92e":m(()=>r(()=>import("./index.html-d62c544b.js"),["assets/index.html-d62c544b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-26ee445f":m(()=>r(()=>import("./index.html-f917c370.js"),["assets/index.html-f917c370.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-02f17b61":m(()=>r(()=>import("./index.html-b6497cfb.js"),["assets/index.html-b6497cfb.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0e6aa261":m(()=>r(()=>import("./index.html-d5785ed7.js"),["assets/index.html-d5785ed7.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-734e47fe":m(()=>r(()=>import("./index.html-f108b4b7.js"),["assets/index.html-f108b4b7.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1b3e1bee":m(()=>r(()=>import("./index.html-490800b3.js"),["assets/index.html-490800b3.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-b60e5920":m(()=>r(()=>import("./index.html-d7ce1ad9.js"),["assets/index.html-d7ce1ad9.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-299ca1d6":m(()=>r(()=>import("./index.html-b4015801.js"),["assets/index.html-b4015801.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-299ca198":m(()=>r(()=>import("./index.html-c200a9ef.js"),["assets/index.html-c200a9ef.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7e747335":m(()=>r(()=>import("./index.html-a9c1788c.js"),["assets/index.html-a9c1788c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-58897f1a":m(()=>r(()=>import("./index.html-f789346c.js"),["assets/index.html-f789346c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2d1c40e2":m(()=>r(()=>import("./index.html-6efed930.js"),["assets/index.html-6efed930.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-295ffbfe":m(()=>r(()=>import("./index.html-2a20f543.js"),["assets/index.html-2a20f543.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4bdef0f0":m(()=>r(()=>import("./index.html-dbc6ace9.js"),["assets/index.html-dbc6ace9.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-d0bc6108":m(()=>r(()=>import("./index.html-90e599e9.js"),["assets/index.html-90e599e9.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-cc046daa":m(()=>r(()=>import("./index.html-d1bf4c3f.js"),["assets/index.html-d1bf4c3f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5f8133a2":m(()=>r(()=>import("./index.html-2f063ce7.js"),["assets/index.html-2f063ce7.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5b2ca300":m(()=>r(()=>import("./index.html-f59c16e4.js"),["assets/index.html-f59c16e4.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5bc93818":m(()=>r(()=>import("./index.html-626c1181.js"),["assets/index.html-626c1181.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-744d024e":m(()=>r(()=>import("./index.html-27abdda5.js"),["assets/index.html-27abdda5.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-e52c881c":m(()=>r(()=>import("./index.html-262980db.js"),["assets/index.html-262980db.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-154dc4c4":m(()=>r(()=>import("./index.html-0098e8ec.js"),["assets/index.html-0098e8ec.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-01560935":m(()=>r(()=>import("./index.html-c3ad2316.js"),["assets/index.html-c3ad2316.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0c75a0f8":m(()=>r(()=>import("./index.html-cb39a6c6.js"),["assets/index.html-cb39a6c6.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0f1d0e94":m(()=>r(()=>import("./index.html-6e2e2cb5.js"),["assets/index.html-6e2e2cb5.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-226a68ec":m(()=>r(()=>import("./index.html-d8a6d56b.js"),["assets/index.html-d8a6d56b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3e6b05e8":m(()=>r(()=>import("./index.html-8af2a723.js"),["assets/index.html-8af2a723.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-12590846":m(()=>r(()=>import("./index.html-392ee8aa.js"),["assets/index.html-392ee8aa.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-301b24f4":m(()=>r(()=>import("./index.html-e76520af.js"),["assets/index.html-e76520af.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-247d58ff":m(()=>r(()=>import("./index.html-920b767a.js"),["assets/index.html-920b767a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3ceeab45":m(()=>r(()=>import("./index.html-d4141145.js"),["assets/index.html-d4141145.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-76b80ea2":m(()=>r(()=>import("./index.html-16fec1da.js"),["assets/index.html-16fec1da.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-42254370":m(()=>r(()=>import("./index.html-404325e1.js"),["assets/index.html-404325e1.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-40b68770":m(()=>r(()=>import("./index.html-7c383920.js"),["assets/index.html-7c383920.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3aafda76":m(()=>r(()=>import("./index.html-dd6bdc7c.js"),["assets/index.html-dd6bdc7c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4c41ef7e":m(()=>r(()=>import("./index.html-130d67fc.js"),["assets/index.html-130d67fc.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-624a9248":m(()=>r(()=>import("./index.html-ab10be7e.js"),["assets/index.html-ab10be7e.js","assets/plugin-vue_export-helper-c27b6911.js"]))};var mm=Symbol(""),fm=Z(om),di=es({key:"",path:"",title:"",lang:"",frontmatter:{},headers:[]}),Ge=Z(di),un=()=>Ge,vi=Symbol(""),En=()=>{const n=fn(vi);if(!n)throw new Error("usePageFrontmatter() is called without provider.");return n},mi=Symbol(""),km=()=>{const n=fn(mi);if(!n)throw new Error("usePageHead() is called without provider.");return n},fi=Symbol(""),_m=()=>{const n=fn(fi);if(!n)throw new Error("usePageHeadTitle() is called without provider.");return n},ki=Symbol(""),Go=()=>{const n=fn(ki);if(!n)throw new Error("usePageLang() is called without provider.");return n},_i=Symbol(""),hm=()=>{const n=fn(_i);if(!n)throw new Error("usePageLayout() is called without provider.");return n},Ko=Symbol(""),qe=()=>{const n=fn(Ko);if(!n)throw new Error("useRouteLocale() is called without provider.");return n},Ps=Z(pm),hi=()=>Ps,bi=Symbol(""),ga=()=>{const n=fn(bi);if(!n)throw new Error("useSiteLocaleData() is called without provider.");return n},bm=Symbol(""),gm="Layout",ym="NotFound",Ie=Et({resolveLayouts:n=>n.reduce((e,s)=>({...e,...s.layouts}),{}),resolvePageData:async n=>{const e=fm.value[n];return await(e==null?void 0:e())??di},resolvePageFrontmatter:n=>n.frontmatter,resolvePageHead:(n,e,s)=>{const t=pn(e.description)?e.description:s.description,a=[...Y(e.head)?e.head:[],...s.head,["title",{},n],["meta",{name:"description",content:t}]];return lm(a)},resolvePageHeadTitle:(n,e)=>[n.title,e.title].filter(s=>!!s).join(" | "),resolvePageLang:n=>n.lang||"en",resolvePageLayout:(n,e)=>{let s;if(n.path){const t=n.frontmatter.layout;pn(t)?s=t:s=gm}else s=ym;return e[s]},resolveRouteLocale:(n,e)=>vm(n,e),resolveSiteLocaleData:(n,e)=>({...n,...n.locales[e]})}),ya=$({name:"ClientOnly",setup(n,e){const s=Z(!1);return xn(()=>{s.value=!0}),()=>{var t,a;return s.value?(a=(t=e.slots).default)==null?void 0:a.call(t):null}}}),gi=$({name:"Content",props:{pageKey:{type:String,required:!1,default:""}},setup(n){const e=un(),s=w(()=>ui[n.pageKey||e.value.key]);return()=>s.value?i(s.value):i("div","404 Not Found")}}),ae=(n={})=>n,jn=n=>bs(n)?n:`/newblog/${ci(n)}`;const Em={},on=({name:n="",color:e="currentColor"},{slots:s})=>{var t;return i("svg",{xmlns:"http://www.w3.org/2000/svg",class:["icon",`${n}-icon`],viewBox:"0 0 1024 1024",fill:e,"aria-label":`${n} icon`},(t=s.default)==null?void 0:t.call(s))};on.displayName="IconBase";const yi=({size:n=48,stroke:e=4,wrapper:s=!0,height:t=2*n})=>{const a=i("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,preserveAspectRatio:"xMidYMid",viewBox:"25 25 50 50"},[i("animateTransform",{attributeName:"transform",type:"rotate",dur:"2s",keyTimes:"0;1",repeatCount:"indefinite",values:"0;360"}),i("circle",{cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e,"stroke-linecap":"round"},[i("animate",{attributeName:"stroke-dasharray",dur:"1.5s",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"1,200;90,200;1,200"}),i("animate",{attributeName:"stroke-dashoffset",dur:"1.5s",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"0;-35px;-125px"})])]);return s?i("div",{class:"loading-icon-wrapper",style:`display:flex;align-items:center;justify-content:center;height:${t}px`},a):a};yi.displayName="LoadingIcon";const Ei=(n,{slots:e})=>{var s;return(s=e.default)==null?void 0:s.call(e)},wi=()=>i(on,{name:"github"},()=>i("path",{d:"M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z"}));wi.displayName="GitHubIcon";const Ti=()=>i(on,{name:"gitlab"},()=>i("path",{d:"M229.333 78.688C223.52 62 199.895 62 193.895 78.688L87.958 406.438h247.5c-.188 0-106.125-327.75-106.125-327.75zM33.77 571.438c-4.875 15 .563 31.687 13.313 41.25l464.812 345L87.77 406.438zm301.5-165 176.813 551.25 176.812-551.25zm655.125 165-54-165-424.312 551.25 464.812-345c12.938-9.563 18.188-26.25 13.5-41.25zM830.27 78.688c-5.812-16.688-29.437-16.688-35.437 0l-106.125 327.75h247.5z"}));Ti.displayName="GitLabIcon";const xi=()=>i(on,{name:"gitee"},()=>i("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z"}));xi.displayName="GiteeIcon";const Si=()=>i(on,{name:"bitbucket"},()=>i("path",{d:"M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z"}));Si.displayName="BitbucketIcon";const Ai=()=>i(on,{name:"source"},()=>i("path",{d:"M601.92 475.2c0 76.428-8.91 83.754-28.512 99.594-14.652 11.88-43.956 14.058-78.012 16.434-18.81 1.386-40.392 2.97-62.172 6.534-18.612 2.97-36.432 9.306-53.064 17.424V299.772c37.818-21.978 63.36-62.766 63.36-109.692 0-69.894-56.826-126.72-126.72-126.72S190.08 120.186 190.08 190.08c0 46.926 25.542 87.714 63.36 109.692v414.216c-37.818 21.978-63.36 62.766-63.36 109.692 0 69.894 56.826 126.72 126.72 126.72s126.72-56.826 126.72-126.72c0-31.086-11.286-59.598-29.7-81.576 13.266-9.504 27.522-17.226 39.996-19.206 16.038-2.574 32.868-3.762 50.688-5.148 48.312-3.366 103.158-7.326 148.896-44.55 61.182-49.698 74.25-103.158 75.24-187.902V475.2h-126.72zM316.8 126.72c34.848 0 63.36 28.512 63.36 63.36s-28.512 63.36-63.36 63.36-63.36-28.512-63.36-63.36 28.512-63.36 63.36-63.36zm0 760.32c-34.848 0-63.36-28.512-63.36-63.36s28.512-63.36 63.36-63.36 63.36 28.512 63.36 63.36-28.512 63.36-63.36 63.36zM823.68 158.4h-95.04V63.36h-126.72v95.04h-95.04v126.72h95.04v95.04h126.72v-95.04h95.04z"}));Ai.displayName="SourceIcon";const Li=Array.isArray,wm=n=>typeof n=="function",Tm=n=>typeof n=="string";var Ri=n=>/^(https?:)?\/\//.test(n),Pi=n=>Object.prototype.toString.call(n)==="[object Object]";const Ne=(n,e)=>{const s=e?e._instance:Us();return Pi(s==null?void 0:s.appContext.components)&&(n in s.appContext.components||Kn(n)in s.appContext.components||yt(Kn(n))in s.appContext.components)};function xm(){const n=Z(!1);return Us()&&xn(()=>{n.value=!0}),n}function Sm(n){return xm(),w(()=>!!n())}const Am=()=>Sm(()=>typeof window<"u"&&window.navigator&&"userAgent"in window.navigator),Lm=()=>{const n=Am();return w(()=>n.value&&/\b(?:Android|iPhone)/i.test(navigator.userAgent))},gs=n=>{const e=qe();return w(()=>n[e.value])},Yo=(n="")=>{if(n){if(typeof n=="number")return new Date(n);const e=Date.parse(n.toString());if(!Number.isNaN(e))return new Date(e)}return null},Ea=(n,e)=>{let s=1;for(let t=0;t<n.length;t++)s+=n.charCodeAt(t),s+=s<<10,s^=s>>6;return s+=s<<3,s^=s>>11,s%e},fs=n=>typeof n=="string",ft=(n,e)=>fs(n)&&n.startsWith(e),Ss=(n,e)=>fs(n)&&n.endsWith(e),Lt=Object.entries,Rm=Object.fromEntries,Le=Object.keys,lr=n=>Pi(n)&&fs(n.name),kt=(n,e=!1)=>n?Li(n)?n.map(s=>fs(s)?{name:s}:lr(s)?s:null).filter(s=>s!==null):fs(n)?[{name:n}]:lr(n)?[n]:(console.error(`Expect "author" to be \`AuthorInfo[] | AuthorInfo | string[] | string ${e?"":"| false"} | undefined\`, but got`,n),[]):[],Oi=(n,e)=>{if(n){if(Li(n)&&n.every(fs))return n;if(fs(n))return[n];console.error(`Expect ${e||"value"} to be \`string[] | string | undefined\`, but got`,n)}return[]},Ii=n=>Oi(n,"category"),Di=n=>Oi(n,"tag"),wa=n=>ft(n,"/");let Pm=class{constructor(){this.messageElements={};const e="message-container",s=document.getElementById(e);s?this.containerElement=s:(this.containerElement=document.createElement("div"),this.containerElement.id=e,document.body.appendChild(this.containerElement))}pop(e,s=2e3){const t=document.createElement("div"),a=Date.now();return t.className="message move-in",t.innerHTML=e,this.containerElement.appendChild(t),this.messageElements[a]=t,s>0&&setTimeout(()=>{this.close(a)},s),a}close(e){if(e){const s=this.messageElements[e];s.classList.remove("move-in"),s.classList.add("move-out"),s.addEventListener("animationend",()=>{s.remove(),delete this.messageElements[e]})}else Le(this.messageElements).forEach(s=>this.close(Number(s)))}destroy(){document.body.removeChild(this.containerElement)}};const Vi=/#.*$/u,Om=n=>{const e=Vi.exec(n);return e?e[0]:""},ir=n=>decodeURI(n).replace(Vi,"").replace(/(index)?\.(md|html)$/,""),Xo=(n,e)=>{if(e===void 0)return!1;const s=ir(n.path),t=ir(e),a=Om(e);return a?a===n.hash&&(!t||s===t):s===t},Im=n=>Ri(n)?n:`https://github.com/${n}`,Ci=n=>!Ri(n)||/github\.com/.test(n)?"GitHub":/bitbucket\.org/.test(n)?"Bitbucket":/gitlab\.com/.test(n)?"GitLab":/gitee\.com/.test(n)?"Gitee":null,Rt=(n,...e)=>{const s=n.resolve(...e),t=s.matched[s.matched.length-1];if(!(t!=null&&t.redirect))return s;const{redirect:a}=t,o=wm(a)?a(s):a,p=Tm(o)?{path:o}:o;return Rt(n,{hash:s.hash,query:s.query,params:s.params,...p})};function _e(n){return Qr()?(Du(n),!0):!1}function Vn(n){return typeof n=="function"?n():is(n)}const ks=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Dm=n=>n!=null,Vm=Object.prototype.toString,Cm=n=>Vm.call(n)==="[object Object]",_s=()=>{},cr=jm();function jm(){var n,e;return ks&&((n=window==null?void 0:window.navigator)==null?void 0:n.userAgent)&&(/iP(?:ad|hone|od)/.test(window.navigator.userAgent)||((e=window==null?void 0:window.navigator)==null?void 0:e.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function Qo(n,e){function s(...t){return new Promise((a,o)=>{Promise.resolve(n(()=>e.apply(this,t),{fn:e,thisArg:this,args:t})).then(a).catch(o)})}return s}const ji=n=>n();function Mm(n,e={}){let s,t,a=_s;const o=l=>{clearTimeout(l),a(),a=_s};return l=>{const c=Vn(n),u=Vn(e.maxWait);return s&&o(s),c<=0||u!==void 0&&u<=0?(t&&(o(t),t=null),Promise.resolve(l())):new Promise((d,v)=>{a=e.rejectOnCancel?v:d,u&&!t&&(t=setTimeout(()=>{s&&o(s),t=null,d(l())},u)),s=setTimeout(()=>{t&&o(t),t=null,d(l())},c)})}}function Nm(...n){let e=0,s,t=!0,a=_s,o,p,l,c,u;!On(n[0])&&typeof n[0]=="object"?{delay:p,trailing:l=!0,leading:c=!0,rejectOnCancel:u=!1}=n[0]:[p,l=!0,c=!0,u=!1]=n;const d=()=>{s&&(clearTimeout(s),s=void 0,a(),a=_s)};return k=>{const f=Vn(p),g=Date.now()-e,y=()=>o=k();return d(),f<=0?(e=Date.now(),y()):(g>f&&(c||!t)?(e=Date.now(),y()):l&&(o=new Promise((A,E)=>{a=u?E:A,s=setTimeout(()=>{e=Date.now(),t=!0,A(y()),d()},Math.max(0,f-g))})),!c&&!s&&(s=setTimeout(()=>t=!0,f)),t=!1,o)}}function $m(n=ji){const e=Z(!0);function s(){e.value=!1}function t(){e.value=!0}const a=(...o)=>{e.value&&n(...o)};return{isActive:es(e),pause:s,resume:t,eventFilter:a}}function qm(n){let e;function s(){return e||(e=n()),e}return s.reset=async()=>{const t=e;e=void 0,t&&await t},s}function Mi(n){return n||Us()}function Bm(...n){if(n.length!==1)return Js(...n);const e=n[0];return typeof e=="function"?es(td(()=>({get:e,set:_s}))):Z(e)}function D_(n,e=200,s={}){return Qo(Mm(e,s),n)}function Hm(n,e=200,s=!1,t=!0,a=!1){return Qo(Nm(e,s,t,a),n)}function Fm(n,e,s={}){const{eventFilter:t=ji,...a}=s;return cn(n,Qo(t,e),a)}function zm(n,e,s={}){const{eventFilter:t,...a}=s,{eventFilter:o,pause:p,resume:l,isActive:c}=$m(t);return{stop:Fm(n,e,{...a,eventFilter:o}),pause:p,resume:l,isActive:c}}function Pt(n,e=!0,s){Mi()?xn(n,s):e?n():ss(n)}function Wm(n,e){Mi(e)&&St(n,e)}function Jm(n,e=1e3,s={}){const{immediate:t=!0,immediateCallback:a=!1}=s;let o=null;const p=Z(!1);function l(){o&&(clearInterval(o),o=null)}function c(){p.value=!1,l()}function u(){const d=Vn(e);d<=0||(p.value=!0,a&&n(),l(),o=setInterval(n,d))}if(t&&ks&&u(),On(e)||typeof e=="function"){const d=cn(e,()=>{p.value&&ks&&u()});_e(d)}return _e(c),{isActive:p,pause:c,resume:u}}function Um(n,e,s={}){const{immediate:t=!0}=s,a=Z(!1);let o=null;function p(){o&&(clearTimeout(o),o=null)}function l(){a.value=!1,p()}function c(...u){p(),a.value=!0,o=setTimeout(()=>{a.value=!1,o=null,n(...u)},Vn(e))}return t&&(a.value=!0,ks&&c()),_e(l),{isPending:es(a),start:c,stop:l}}function ur(n=!1,e={}){const{truthyValue:s=!0,falsyValue:t=!1}=e,a=On(n),o=Z(n);function p(l){if(arguments.length)return o.value=l,o.value;{const c=Vn(s);return o.value=o.value===c?Vn(t):c,o.value}}return a?p:[o,p]}function Se(n){var e;const s=Vn(n);return(e=s==null?void 0:s.$el)!=null?e:s}const Re=ks?window:void 0,Zo=ks?window.document:void 0,Ni=ks?window.navigator:void 0;function Wn(...n){let e,s,t,a;if(typeof n[0]=="string"||Array.isArray(n[0])?([s,t,a]=n,e=Re):[e,s,t,a]=n,!e)return _s;Array.isArray(s)||(s=[s]),Array.isArray(t)||(t=[t]);const o=[],p=()=>{o.forEach(d=>d()),o.length=0},l=(d,v,k,f)=>(d.addEventListener(v,k,f),()=>d.removeEventListener(v,k,f)),c=cn(()=>[Se(e),Vn(a)],([d,v])=>{if(p(),!d)return;const k=Cm(v)?{...v}:v;o.push(...s.flatMap(f=>t.map(g=>l(d,f,g,k))))},{immediate:!0,flush:"post"}),u=()=>{c(),p()};return _e(u),u}function Gm(){const n=Z(!1),e=Us();return e&&xn(()=>{n.value=!0},e),n}function Gs(n){const e=Gm();return w(()=>(e.value,!!n()))}function Km(n,e,s={}){const{window:t=Re,...a}=s;let o;const p=Gs(()=>t&&"MutationObserver"in t),l=()=>{o&&(o.disconnect(),o=void 0)},c=w(()=>{const k=Vn(n),f=(Array.isArray(k)?k:[k]).map(Se).filter(Dm);return new Set(f)}),u=cn(()=>c.value,k=>{l(),p.value&&k.size&&(o=new MutationObserver(e),k.forEach(f=>o.observe(f,a)))},{immediate:!0,flush:"post"}),d=()=>o==null?void 0:o.takeRecords(),v=()=>{l(),u()};return _e(v),{isSupported:p,stop:v,takeRecords:d}}function Ym(n,e={}){const{immediate:s=!0,fpsLimit:t=void 0,window:a=Re}=e,o=Z(!1),p=t?1e3/t:null;let l=0,c=null;function u(k){if(!o.value||!a)return;l||(l=k);const f=k-l;if(p&&f<p){c=a.requestAnimationFrame(u);return}l=k,n({delta:f,timestamp:k}),c=a.requestAnimationFrame(u)}function d(){!o.value&&a&&(o.value=!0,l=0,c=a.requestAnimationFrame(u))}function v(){o.value=!1,c!=null&&a&&(a.cancelAnimationFrame(c),c=null)}return s&&d(),_e(v),{isActive:es(o),pause:v,resume:d}}function $i(n,e={}){const{window:s=Re}=e,t=Gs(()=>s&&"matchMedia"in s&&typeof s.matchMedia=="function");let a;const o=Z(!1),p=u=>{o.value=u.matches},l=()=>{a&&("removeEventListener"in a?a.removeEventListener("change",p):a.removeListener(p))},c=Zd(()=>{t.value&&(l(),a=s.matchMedia(Vn(n)),"addEventListener"in a?a.addEventListener("change",p):a.addListener(p),o.value=a.matches)});return _e(()=>{c(),l(),a=void 0}),o}function dr(n,e={}){const{controls:s=!1,navigator:t=Ni}=e,a=Gs(()=>t&&"permissions"in t);let o;const p=typeof n=="string"?{name:n}:n,l=Z(),c=()=>{o&&(l.value=o.state)},u=qm(async()=>{if(a.value){if(!o)try{o=await t.permissions.query(p),Wn(o,"change",c),c()}catch{l.value="prompt"}return o}});return u(),s?{state:l,isSupported:a,query:u}:l}function Xm(n={}){const{navigator:e=Ni,read:s=!1,source:t,copiedDuring:a=1500,legacy:o=!1}=n,p=Gs(()=>e&&"clipboard"in e),l=dr("clipboard-read"),c=dr("clipboard-write"),u=w(()=>p.value||o),d=Z(""),v=Z(!1),k=Um(()=>v.value=!1,a);function f(){p.value&&E(l.value)?e.clipboard.readText().then(S=>{d.value=S}):d.value=A()}u.value&&s&&Wn(["copy","cut"],f);async function g(S=Vn(t)){u.value&&S!=null&&(p.value&&E(c.value)?await e.clipboard.writeText(S):y(S),d.value=S,v.value=!0,k.start())}function y(S){const b=document.createElement("textarea");b.value=S??"",b.style.position="absolute",b.style.opacity="0",document.body.appendChild(b),b.select(),document.execCommand("copy"),b.remove()}function A(){var S,b,T;return(T=(b=(S=document==null?void 0:document.getSelection)==null?void 0:S.call(document))==null?void 0:b.toString())!=null?T:""}function E(S){return S==="granted"||S==="prompt"}return{isSupported:u,text:d,copied:v,copy:g}}const Jt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ut="__vueuse_ssr_handlers__",Qm=Zm();function Zm(){return Ut in Jt||(Jt[Ut]=Jt[Ut]||{}),Jt[Ut]}function n0(n,e){return Qm[n]||e}function e0(n){return n==null?"any":n instanceof Set?"set":n instanceof Map?"map":n instanceof Date?"date":typeof n=="boolean"?"boolean":typeof n=="string"?"string":typeof n=="object"?"object":Number.isNaN(n)?"any":"number"}const s0={boolean:{read:n=>n==="true",write:n=>String(n)},object:{read:n=>JSON.parse(n),write:n=>JSON.stringify(n)},number:{read:n=>Number.parseFloat(n),write:n=>String(n)},any:{read:n=>n,write:n=>String(n)},string:{read:n=>n,write:n=>String(n)},map:{read:n=>new Map(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n.entries()))},set:{read:n=>new Set(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n))},date:{read:n=>new Date(n),write:n=>n.toISOString()}},vr="vueuse-storage";function t0(n,e,s,t={}){var a;const{flush:o="pre",deep:p=!0,listenToStorageChanges:l=!0,writeDefaults:c=!0,mergeDefaults:u=!1,shallow:d,window:v=Re,eventFilter:k,onError:f=I=>{console.error(I)},initOnMounted:g}=t,y=(d?be:Z)(typeof e=="function"?e():e);if(!s)try{s=n0("getDefaultStorage",()=>{var I;return(I=Re)==null?void 0:I.localStorage})()}catch(I){f(I)}if(!s)return y;const A=Vn(e),E=e0(A),S=(a=t.serializer)!=null?a:s0[E],{pause:b,resume:T}=zm(y,()=>P(y.value),{flush:o,deep:p,eventFilter:k});v&&l&&Pt(()=>{Wn(v,"storage",U),Wn(v,vr,B),g&&U()}),g||U();function C(I,J){v&&v.dispatchEvent(new CustomEvent(vr,{detail:{key:n,oldValue:I,newValue:J,storageArea:s}}))}function P(I){try{const J=s.getItem(n);if(I==null)C(J,null),s.removeItem(n);else{const j=S.write(I);J!==j&&(s.setItem(n,j),C(J,j))}}catch(J){f(J)}}function M(I){const J=I?I.newValue:s.getItem(n);if(J==null)return c&&A!=null&&s.setItem(n,S.write(A)),A;if(!I&&u){const j=S.read(J);return typeof u=="function"?u(j,A):E==="object"&&!Array.isArray(j)?{...A,...j}:j}else return typeof J!="string"?J:S.read(J)}function U(I){if(!(I&&I.storageArea!==s)){if(I&&I.key==null){y.value=A;return}if(!(I&&I.key!==n)){b();try{(I==null?void 0:I.newValue)!==S.write(y.value)&&(y.value=M(I))}catch(J){f(J)}finally{I?ss(T):T()}}}}function B(I){U(I.detail)}return y}function a0(n){return $i("(prefers-color-scheme: dark)",n)}function o0(n,e,s={}){const{window:t=Re,...a}=s;let o;const p=Gs(()=>t&&"ResizeObserver"in t),l=()=>{o&&(o.disconnect(),o=void 0)},c=w(()=>Array.isArray(n)?n.map(v=>Se(v)):[Se(n)]),u=cn(c,v=>{if(l(),p.value&&t){o=new ResizeObserver(e);for(const k of v)k&&o.observe(k,a)}},{immediate:!0,flush:"post"}),d=()=>{l(),u()};return _e(d),{isSupported:p,stop:d}}function p0(n,e={width:0,height:0},s={}){const{window:t=Re,box:a="content-box"}=s,o=w(()=>{var v,k;return(k=(v=Se(n))==null?void 0:v.namespaceURI)==null?void 0:k.includes("svg")}),p=Z(e.width),l=Z(e.height),{stop:c}=o0(n,([v])=>{const k=a==="border-box"?v.borderBoxSize:a==="content-box"?v.contentBoxSize:v.devicePixelContentBoxSize;if(t&&o.value){const f=Se(n);if(f){const g=f.getBoundingClientRect();p.value=g.width,l.value=g.height}}else if(k){const f=Array.isArray(k)?k:[k];p.value=f.reduce((g,{inlineSize:y})=>g+y,0),l.value=f.reduce((g,{blockSize:y})=>g+y,0)}else p.value=v.contentRect.width,l.value=v.contentRect.height},s);Pt(()=>{const v=Se(n);v&&(p.value="offsetWidth"in v?v.offsetWidth:e.width,l.value="offsetHeight"in v?v.offsetHeight:e.height)});const u=cn(()=>Se(n),v=>{p.value=v?e.width:0,l.value=v?e.height:0});function d(){c(),u()}return{width:p,height:l,stop:d}}const mr=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function np(n,e={}){const{document:s=Zo,autoExit:t=!1}=e,a=w(()=>{var E;return(E=Se(n))!=null?E:s==null?void 0:s.querySelector("html")}),o=Z(!1),p=w(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(E=>s&&E in s||a.value&&E in a.value)),l=w(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(E=>s&&E in s||a.value&&E in a.value)),c=w(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(E=>s&&E in s||a.value&&E in a.value)),u=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(E=>s&&E in s),d=Gs(()=>a.value&&s&&p.value!==void 0&&l.value!==void 0&&c.value!==void 0),v=()=>u?(s==null?void 0:s[u])===a.value:!1,k=()=>{if(c.value){if(s&&s[c.value]!=null)return s[c.value];{const E=a.value;if((E==null?void 0:E[c.value])!=null)return!!E[c.value]}}return!1};async function f(){if(!(!d.value||!o.value)){if(l.value)if((s==null?void 0:s[l.value])!=null)await s[l.value]();else{const E=a.value;(E==null?void 0:E[l.value])!=null&&await E[l.value]()}o.value=!1}}async function g(){if(!d.value||o.value)return;k()&&await f();const E=a.value;p.value&&(E==null?void 0:E[p.value])!=null&&(await E[p.value](),o.value=!0)}async function y(){await(o.value?f():g())}const A=()=>{const E=k();(!E||E&&v())&&(o.value=E)};return Wn(s,mr,A,!1),Wn(()=>Se(a),mr,A,!1),t&&_e(f),{isSupported:d,isFullscreen:o,enter:g,exit:f,toggle:y}}function Fa(n){return typeof Window<"u"&&n instanceof Window?n.document.documentElement:typeof Document<"u"&&n instanceof Document?n.documentElement:n}function V_(n={}){const{controls:e=!1,interval:s="requestAnimationFrame"}=n,t=Z(new Date),a=()=>t.value=new Date,o=s==="requestAnimationFrame"?Ym(a,{immediate:!0}):Jm(a,s,{immediate:!0});return e?{now:t,...o}:t}function C_(n,e=_s,s={}){const{immediate:t=!0,manual:a=!1,type:o="text/javascript",async:p=!0,crossOrigin:l,referrerPolicy:c,noModule:u,defer:d,document:v=Zo,attrs:k={}}=s,f=Z(null);let g=null;const y=S=>new Promise((b,T)=>{const C=U=>(f.value=U,b(U),U);if(!v){b(!1);return}let P=!1,M=v.querySelector(`script[src="${Vn(n)}"]`);M?M.hasAttribute("data-loaded")&&C(M):(M=v.createElement("script"),M.type=o,M.async=p,M.src=Vn(n),d&&(M.defer=d),l&&(M.crossOrigin=l),u&&(M.noModule=u),c&&(M.referrerPolicy=c),Object.entries(k).forEach(([U,B])=>M==null?void 0:M.setAttribute(U,B)),P=!0),M.addEventListener("error",U=>T(U)),M.addEventListener("abort",U=>T(U)),M.addEventListener("load",()=>{M.setAttribute("data-loaded","true"),e(M),C(M)}),P&&(M=v.head.appendChild(M)),S||C(M)}),A=(S=!0)=>(g||(g=y(S)),g),E=()=>{if(!v)return;g=null,f.value&&(f.value=null);const S=v.querySelector(`script[src="${Vn(n)}"]`);S&&v.head.removeChild(S)};return t&&!a&&Pt(A),a||Wm(E),{scriptTag:f,load:A,unload:E}}function qi(n){const e=window.getComputedStyle(n);if(e.overflowX==="scroll"||e.overflowY==="scroll"||e.overflowX==="auto"&&n.clientWidth<n.scrollWidth||e.overflowY==="auto"&&n.clientHeight<n.scrollHeight)return!0;{const s=n.parentNode;return!s||s.tagName==="BODY"?!1:qi(s)}}function r0(n){const e=n||window.event,s=e.target;return qi(s)?!1:e.touches.length>1?!0:(e.preventDefault&&e.preventDefault(),!1)}const za=new WeakMap;function Bi(n,e=!1){const s=Z(e);let t=null,a="";cn(Bm(n),l=>{const c=Fa(Vn(l));if(c){const u=c;if(za.get(u)||za.set(u,u.style.overflow),u.style.overflow!=="hidden"&&(a=u.style.overflow),u.style.overflow==="hidden")return s.value=!0;if(s.value)return u.style.overflow="hidden"}},{immediate:!0});const o=()=>{const l=Fa(Vn(n));!l||s.value||(cr&&(t=Wn(l,"touchmove",c=>{r0(c)},{passive:!1})),l.style.overflow="hidden",s.value=!0)},p=()=>{const l=Fa(Vn(n));!l||!s.value||(cr&&(t==null||t()),l.style.overflow=a,za.delete(l),s.value=!1)};return _e(p),w({get(){return s.value},set(l){l?o():p()}})}let l0=0;function i0(n,e={}){const s=Z(!1),{document:t=Zo,immediate:a=!0,manual:o=!1,id:p=`vueuse_styletag_${++l0}`}=e,l=Z(n);let c=()=>{};const u=()=>{if(!t)return;const v=t.getElementById(p)||t.createElement("style");v.isConnected||(v.id=p,e.media&&(v.media=e.media),t.head.appendChild(v)),!s.value&&(c=cn(l,k=>{v.textContent=k},{immediate:!0}),s.value=!0)},d=()=>{!t||!s.value||(c(),t.head.removeChild(t.getElementById(p)),s.value=!1)};return a&&!o&&Pt(u),o||_e(d),{id:p,css:l,unload:d,load:u,isLoaded:es(s)}}function c0(n={}){const{window:e=Re,behavior:s="auto"}=n;if(!e)return{x:Z(0),y:Z(0)};const t=Z(e.scrollX),a=Z(e.scrollY),o=w({get(){return t.value},set(l){scrollTo({left:l,behavior:s})}}),p=w({get(){return a.value},set(l){scrollTo({top:l,behavior:s})}});return Wn(e,"scroll",()=>{t.value=e.scrollX,a.value=e.scrollY},{capture:!1,passive:!0}),{x:o,y:p}}function u0(n={}){const{window:e=Re,initialWidth:s=Number.POSITIVE_INFINITY,initialHeight:t=Number.POSITIVE_INFINITY,listenOrientation:a=!0,includeScrollbar:o=!0}=n,p=Z(s),l=Z(t),c=()=>{e&&(o?(p.value=e.innerWidth,l.value=e.innerHeight):(p.value=e.document.documentElement.clientWidth,l.value=e.document.documentElement.clientHeight))};if(c(),Pt(c),Wn("resize",c,{passive:!0}),a){const u=$i("(orientation: portrait)");cn(u,()=>c())}return{width:p,height:l}}const Hi=({type:n="info",text:e="",vertical:s="top",color:t},{slots:a})=>{var o;return i("span",{class:["badge",n,{diy:t}],style:{verticalAlign:s,...t?{backgroundColor:t}:{}}},((o=a.default)==null?void 0:o.call(a))||e)};Hi.displayName="Badge";var d0=$({name:"FontIcon",props:{icon:{type:String,default:""},color:{type:String,default:""},size:{type:[String,Number],default:""}},setup(n){const e=w(()=>{const t=["font-icon icon"],a=`iconfont icon-${n.icon}`;return t.push(a),t}),s=w(()=>{const t={};return n.color&&(t.color=n.color),n.size&&(t["font-size"]=Number.isNaN(Number(n.size))?n.size:`${n.size}px`),Le(t).length?t:null});return()=>n.icon?i("span",{key:n.icon,class:e.value,style:s.value}):null}});const Fi=()=>i(on,{name:"back-to-top"},()=>[i("path",{d:"M512 843.2c-36.2 0-66.4-13.6-85.8-21.8-10.8-4.6-22.6 3.6-21.8 15.2l7 102c.4 6.2 7.6 9.4 12.6 5.6l29-22c3.6-2.8 9-1.8 11.4 2l41 64.2c3 4.8 10.2 4.8 13.2 0l41-64.2c2.4-3.8 7.8-4.8 11.4-2l29 22c5 3.8 12.2.6 12.6-5.6l7-102c.8-11.6-11-20-21.8-15.2-19.6 8.2-49.6 21.8-85.8 21.8z"}),i("path",{d:"m795.4 586.2-96-98.2C699.4 172 513 32 513 32S324.8 172 324.8 488l-96 98.2c-3.6 3.6-5.2 9-4.4 14.2L261.2 824c1.8 11.4 14.2 17 23.6 10.8L419 744s41.4 40 94.2 40c52.8 0 92.2-40 92.2-40l134.2 90.8c9.2 6.2 21.6.6 23.6-10.8l37-223.8c.4-5.2-1.2-10.4-4.8-14zM513 384c-34 0-61.4-28.6-61.4-64s27.6-64 61.4-64c34 0 61.4 28.6 61.4 64S547 384 513 384z"})]);Fi.displayName="BackToTopIcon";var v0=$({name:"BackToTop",props:{threshold:{type:Number,default:100},noProgress:Boolean},setup(n){const e=En(),s=gs({"/":{backToTop:"返回顶部"}}),t=be(),{height:a}=p0(t),{height:o}=u0(),{y:p}=c0(),l=w(()=>e.value.backToTop!==!1&&p.value>n.threshold),c=w(()=>p.value/(a.value-o.value));return xn(()=>{t.value=document.body}),()=>i(ms,{name:"fade"},()=>l.value?i("button",{type:"button",class:"back-to-top","aria-label":s.value.backToTop,"data-balloon-pos":"left",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},[n.noProgress?null:i("svg",{class:"scroll-progress"},i("circle",{cx:"50%",cy:"50%",style:{"stroke-dasharray":`calc(${Math.PI*c.value*100}% - ${4*Math.PI}px) calc(${Math.PI*100}% - ${4*Math.PI}px)`}})),i(Fi)]):null)}});const m0=ae({enhance:({app:n})=>{Ne("Badge")||n.component("Badge",Hi),Ne("FontIcon")||n.component("FontIcon",d0)},setup:()=>{i0(`  @import url("https://at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css");
  `)},rootComponents:[()=>i(v0,{})]});function f0(n,e,s){var t,a,o;e===void 0&&(e=50),s===void 0&&(s={});var p=(t=s.isImmediate)!=null&&t,l=(a=s.callback)!=null&&a,c=s.maxWait,u=Date.now(),d=[];function v(){if(c!==void 0){var f=Date.now()-u;if(f+e>=c)return c-f}return e}var k=function(){var f=[].slice.call(arguments),g=this;return new Promise(function(y,A){var E=p&&o===void 0;if(o!==void 0&&clearTimeout(o),o=setTimeout(function(){if(o=void 0,u=Date.now(),!p){var b=n.apply(g,f);l&&l(b),d.forEach(function(T){return(0,T.resolve)(b)}),d=[]}},v()),E){var S=n.apply(g,f);return l&&l(S),y(S)}d.push({resolve:y,reject:A})})};return k.cancel=function(f){o!==void 0&&clearTimeout(o),d.forEach(function(g){return(0,g.reject)(f)}),d=[]},k}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Ls=typeof document<"u";function zi(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function k0(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&zi(n.default)}const _n=Object.assign;function Wa(n,e){const s={};for(const t in e){const a=e[t];s[t]=he(a)?a.map(n):n(a)}return s}const rt=()=>{},he=Array.isArray,Wi=/#/g,_0=/&/g,h0=/\//g,b0=/=/g,g0=/\?/g,Ji=/\+/g,y0=/%5B/g,E0=/%5D/g,Ui=/%5E/g,w0=/%60/g,Gi=/%7B/g,T0=/%7C/g,Ki=/%7D/g,x0=/%20/g;function ep(n){return encodeURI(""+n).replace(T0,"|").replace(y0,"[").replace(E0,"]")}function S0(n){return ep(n).replace(Gi,"{").replace(Ki,"}").replace(Ui,"^")}function uo(n){return ep(n).replace(Ji,"%2B").replace(x0,"+").replace(Wi,"%23").replace(_0,"%26").replace(w0,"`").replace(Gi,"{").replace(Ki,"}").replace(Ui,"^")}function A0(n){return uo(n).replace(b0,"%3D")}function L0(n){return ep(n).replace(Wi,"%23").replace(g0,"%3F")}function R0(n){return n==null?"":L0(n).replace(h0,"%2F")}function _t(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const P0=/\/$/,O0=n=>n.replace(P0,"");function Ja(n,e,s="/"){let t,a={},o="",p="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(t=e.slice(0,c),o=e.slice(c+1,l>-1?l:e.length),a=n(o)),l>-1&&(t=t||e.slice(0,l),p=e.slice(l,e.length)),t=C0(t??e,s),{fullPath:t+(o&&"?")+o+p,path:t,query:a,hash:_t(p)}}function I0(n,e){const s=e.query?n(e.query):"";return e.path+(s&&"?")+s+(e.hash||"")}function fr(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function D0(n,e,s){const t=e.matched.length-1,a=s.matched.length-1;return t>-1&&t===a&&Hs(e.matched[t],s.matched[a])&&Yi(e.params,s.params)&&n(e.query)===n(s.query)&&e.hash===s.hash}function Hs(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Yi(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const s in n)if(!V0(n[s],e[s]))return!1;return!0}function V0(n,e){return he(n)?kr(n,e):he(e)?kr(e,n):n===e}function kr(n,e){return he(e)?n.length===e.length&&n.every((s,t)=>s===e[t]):n.length===1&&n[0]===e}function C0(n,e){if(n.startsWith("/"))return n;if(!n)return e;const s=e.split("/"),t=n.split("/"),a=t[t.length-1];(a===".."||a===".")&&t.push("");let o=s.length-1,p,l;for(p=0;p<t.length;p++)if(l=t[p],l!==".")if(l==="..")o>1&&o--;else break;return s.slice(0,o).join("/")+"/"+t.slice(p).join("/")}const De={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ht;(function(n){n.pop="pop",n.push="push"})(ht||(ht={}));var lt;(function(n){n.back="back",n.forward="forward",n.unknown=""})(lt||(lt={}));function j0(n){if(!n)if(Ls){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),O0(n)}const M0=/^[^#]+#/;function N0(n,e){return n.replace(M0,"#")+e}function $0(n,e){const s=document.documentElement.getBoundingClientRect(),t=n.getBoundingClientRect();return{behavior:e.behavior,left:t.left-s.left-(e.left||0),top:t.top-s.top-(e.top||0)}}const Ta=()=>({left:window.scrollX,top:window.scrollY});function q0(n){let e;if("el"in n){const s=n.el,t=typeof s=="string"&&s.startsWith("#"),a=typeof s=="string"?t?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!a)return;e=$0(a,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function _r(n,e){return(history.state?history.state.position-e:-1)+n}const vo=new Map;function B0(n,e){vo.set(n,e)}function H0(n){const e=vo.get(n);return vo.delete(n),e}let F0=()=>location.protocol+"//"+location.host;function Xi(n,e){const{pathname:s,search:t,hash:a}=e,o=n.indexOf("#");if(o>-1){let l=a.includes(n.slice(o))?n.slice(o).length:1,c=a.slice(l);return c[0]!=="/"&&(c="/"+c),fr(c,"")}return fr(s,n)+t+a}function z0(n,e,s,t){let a=[],o=[],p=null;const l=({state:k})=>{const f=Xi(n,location),g=s.value,y=e.value;let A=0;if(k){if(s.value=f,e.value=k,p&&p===g){p=null;return}A=y?k.position-y.position:0}else t(f);a.forEach(E=>{E(s.value,g,{delta:A,type:ht.pop,direction:A?A>0?lt.forward:lt.back:lt.unknown})})};function c(){p=s.value}function u(k){a.push(k);const f=()=>{const g=a.indexOf(k);g>-1&&a.splice(g,1)};return o.push(f),f}function d(){const{history:k}=window;k.state&&k.replaceState(_n({},k.state,{scroll:Ta()}),"")}function v(){for(const k of o)k();o=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:u,destroy:v}}function hr(n,e,s,t=!1,a=!1){return{back:n,current:e,forward:s,replaced:t,position:window.history.length,scroll:a?Ta():null}}function W0(n){const{history:e,location:s}=window,t={value:Xi(n,s)},a={value:e.state};a.value||o(t.value,{back:null,current:t.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function o(c,u,d){const v=n.indexOf("#"),k=v>-1?(s.host&&document.querySelector("base")?n:n.slice(v))+c:F0()+n+c;try{e[d?"replaceState":"pushState"](u,"",k),a.value=u}catch(f){console.error(f),s[d?"replace":"assign"](k)}}function p(c,u){const d=_n({},e.state,hr(a.value.back,c,a.value.forward,!0),u,{position:a.value.position});o(c,d,!0),t.value=c}function l(c,u){const d=_n({},a.value,e.state,{forward:c,scroll:Ta()});o(d.current,d,!0);const v=_n({},hr(t.value,c,null),{position:d.position+1},u);o(c,v,!1),t.value=c}return{location:t,state:a,push:l,replace:p}}function J0(n){n=j0(n);const e=W0(n),s=z0(n,e.state,e.location,e.replace);function t(o,p=!0){p||s.pauseListeners(),history.go(o)}const a=_n({location:"",base:n,go:t,createHref:N0.bind(null,n)},e,s);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>e.state.value}),a}function U0(n){return typeof n=="string"||n&&typeof n=="object"}function Qi(n){return typeof n=="string"||typeof n=="symbol"}const Zi=Symbol("");var br;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(br||(br={}));function Fs(n,e){return _n(new Error,{type:n,[Zi]:!0},e)}function Oe(n,e){return n instanceof Error&&Zi in n&&(e==null||!!(n.type&e))}const gr="[^/]+?",G0={sensitive:!1,strict:!1,start:!0,end:!0},K0=/[.+*?^${}()[\]/\\]/g;function Y0(n,e){const s=_n({},G0,e),t=[];let a=s.start?"^":"";const o=[];for(const u of n){const d=u.length?[]:[90];s.strict&&!u.length&&(a+="/");for(let v=0;v<u.length;v++){const k=u[v];let f=40+(s.sensitive?.25:0);if(k.type===0)v||(a+="/"),a+=k.value.replace(K0,"\\$&"),f+=40;else if(k.type===1){const{value:g,repeatable:y,optional:A,regexp:E}=k;o.push({name:g,repeatable:y,optional:A});const S=E||gr;if(S!==gr){f+=10;try{new RegExp(`(${S})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${g}" (${S}): `+T.message)}}let b=y?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;v||(b=A&&u.length<2?`(?:/${b})`:"/"+b),A&&(b+="?"),a+=b,f+=20,A&&(f+=-8),y&&(f+=-20),S===".*"&&(f+=-50)}d.push(f)}t.push(d)}if(s.strict&&s.end){const u=t.length-1;t[u][t[u].length-1]+=.7000000000000001}s.strict||(a+="/?"),s.end?a+="$":s.strict&&!a.endsWith("/")&&(a+="(?:/|$)");const p=new RegExp(a,s.sensitive?"":"i");function l(u){const d=u.match(p),v={};if(!d)return null;for(let k=1;k<d.length;k++){const f=d[k]||"",g=o[k-1];v[g.name]=f&&g.repeatable?f.split("/"):f}return v}function c(u){let d="",v=!1;for(const k of n){(!v||!d.endsWith("/"))&&(d+="/"),v=!1;for(const f of k)if(f.type===0)d+=f.value;else if(f.type===1){const{value:g,repeatable:y,optional:A}=f,E=g in u?u[g]:"";if(he(E)&&!y)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const S=he(E)?E.join("/"):E;if(!S)if(A)k.length<2&&(d.endsWith("/")?d=d.slice(0,-1):v=!0);else throw new Error(`Missing required param "${g}"`);d+=S}}return d||"/"}return{re:p,score:t,keys:o,parse:l,stringify:c}}function X0(n,e){let s=0;for(;s<n.length&&s<e.length;){const t=e[s]-n[s];if(t)return t;s++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function nc(n,e){let s=0;const t=n.score,a=e.score;for(;s<t.length&&s<a.length;){const o=X0(t[s],a[s]);if(o)return o;s++}if(Math.abs(a.length-t.length)===1){if(yr(t))return 1;if(yr(a))return-1}return a.length-t.length}function yr(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const Q0={type:0,value:""},Z0=/[a-zA-Z0-9_]/;function n1(n){if(!n)return[[]];if(n==="/")return[[Q0]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(f){throw new Error(`ERR (${s})/"${u}": ${f}`)}let s=0,t=s;const a=[];let o;function p(){o&&a.push(o),o=[]}let l=0,c,u="",d="";function v(){u&&(s===0?o.push({type:0,value:u}):s===1||s===2||s===3?(o.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function k(){u+=c}for(;l<n.length;){if(c=n[l++],c==="\\"&&s!==2){t=s,s=4;continue}switch(s){case 0:c==="/"?(u&&v(),p()):c===":"?(v(),s=1):k();break;case 4:k(),s=t;break;case 1:c==="("?s=2:Z0.test(c)?k():(v(),s=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:s=3:d+=c;break;case 3:v(),s=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return s===2&&e(`Unfinished custom RegExp for param "${u}"`),v(),p(),a}function e1(n,e,s){const t=Y0(n1(n.path),s),a=_n(t,{record:n,parent:e,children:[],alias:[]});return e&&!a.record.aliasOf==!e.record.aliasOf&&e.children.push(a),a}function s1(n,e){const s=[],t=new Map;e=xr({strict:!1,end:!0,sensitive:!1},e);function a(v){return t.get(v)}function o(v,k,f){const g=!f,y=wr(v);y.aliasOf=f&&f.record;const A=xr(e,v),E=[y];if("alias"in v){const T=typeof v.alias=="string"?[v.alias]:v.alias;for(const C of T)E.push(wr(_n({},y,{components:f?f.record.components:y.components,path:C,aliasOf:f?f.record:y})))}let S,b;for(const T of E){const{path:C}=T;if(k&&C[0]!=="/"){const P=k.record.path,M=P[P.length-1]==="/"?"":"/";T.path=k.record.path+(C&&M+C)}if(S=e1(T,k,A),f?f.alias.push(S):(b=b||S,b!==S&&b.alias.push(S),g&&v.name&&!Tr(S)&&p(v.name)),ec(S)&&c(S),y.children){const P=y.children;for(let M=0;M<P.length;M++)o(P[M],S,f&&f.children[M])}f=f||S}return b?()=>{p(b)}:rt}function p(v){if(Qi(v)){const k=t.get(v);k&&(t.delete(v),s.splice(s.indexOf(k),1),k.children.forEach(p),k.alias.forEach(p))}else{const k=s.indexOf(v);k>-1&&(s.splice(k,1),v.record.name&&t.delete(v.record.name),v.children.forEach(p),v.alias.forEach(p))}}function l(){return s}function c(v){const k=o1(v,s);s.splice(k,0,v),v.record.name&&!Tr(v)&&t.set(v.record.name,v)}function u(v,k){let f,g={},y,A;if("name"in v&&v.name){if(f=t.get(v.name),!f)throw Fs(1,{location:v});A=f.record.name,g=_n(Er(k.params,f.keys.filter(b=>!b.optional).concat(f.parent?f.parent.keys.filter(b=>b.optional):[]).map(b=>b.name)),v.params&&Er(v.params,f.keys.map(b=>b.name))),y=f.stringify(g)}else if(v.path!=null)y=v.path,f=s.find(b=>b.re.test(y)),f&&(g=f.parse(y),A=f.record.name);else{if(f=k.name?t.get(k.name):s.find(b=>b.re.test(k.path)),!f)throw Fs(1,{location:v,currentLocation:k});A=f.record.name,g=_n({},k.params,v.params),y=f.stringify(g)}const E=[];let S=f;for(;S;)E.unshift(S.record),S=S.parent;return{name:A,path:y,params:g,matched:E,meta:a1(E)}}n.forEach(v=>o(v));function d(){s.length=0,t.clear()}return{addRoute:o,resolve:u,removeRoute:p,clearRoutes:d,getRoutes:l,getRecordMatcher:a}}function Er(n,e){const s={};for(const t of e)t in n&&(s[t]=n[t]);return s}function wr(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:t1(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function t1(n){const e={},s=n.props||!1;if("component"in n)e.default=s;else for(const t in n.components)e[t]=typeof s=="object"?s[t]:s;return e}function Tr(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function a1(n){return n.reduce((e,s)=>_n(e,s.meta),{})}function xr(n,e){const s={};for(const t in n)s[t]=t in e?e[t]:n[t];return s}function o1(n,e){let s=0,t=e.length;for(;s!==t;){const o=s+t>>1;nc(n,e[o])<0?t=o:s=o+1}const a=p1(n);return a&&(t=e.lastIndexOf(a,t-1)),t}function p1(n){let e=n;for(;e=e.parent;)if(ec(e)&&nc(n,e)===0)return e}function ec({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function r1(n){const e={};if(n===""||n==="?")return e;const t=(n[0]==="?"?n.slice(1):n).split("&");for(let a=0;a<t.length;++a){const o=t[a].replace(Ji," "),p=o.indexOf("="),l=_t(p<0?o:o.slice(0,p)),c=p<0?null:_t(o.slice(p+1));if(l in e){let u=e[l];he(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function Sr(n){let e="";for(let s in n){const t=n[s];if(s=A0(s),t==null){t!==void 0&&(e+=(e.length?"&":"")+s);continue}(he(t)?t.map(o=>o&&uo(o)):[t&&uo(t)]).forEach(o=>{o!==void 0&&(e+=(e.length?"&":"")+s,o!=null&&(e+="="+o))})}return e}function l1(n){const e={};for(const s in n){const t=n[s];t!==void 0&&(e[s]=he(t)?t.map(a=>a==null?null:""+a):t==null?t:""+t)}return e}const i1=Symbol(""),Ar=Symbol(""),xa=Symbol(""),sp=Symbol(""),mo=Symbol("");function nt(){let n=[];function e(t){return n.push(t),()=>{const a=n.indexOf(t);a>-1&&n.splice(a,1)}}function s(){n=[]}return{add:e,list:()=>n.slice(),reset:s}}function Ke(n,e,s,t,a,o=p=>p()){const p=t&&(t.enterCallbacks[a]=t.enterCallbacks[a]||[]);return()=>new Promise((l,c)=>{const u=k=>{k===!1?c(Fs(4,{from:s,to:e})):k instanceof Error?c(k):U0(k)?c(Fs(2,{from:e,to:k})):(p&&t.enterCallbacks[a]===p&&typeof k=="function"&&p.push(k),l())},d=o(()=>n.call(t&&t.instances[a],e,s,u));let v=Promise.resolve(d);n.length<3&&(v=v.then(u)),v.catch(k=>c(k))})}function Ua(n,e,s,t,a=o=>o()){const o=[];for(const p of n)for(const l in p.components){let c=p.components[l];if(!(e!=="beforeRouteEnter"&&!p.instances[l]))if(zi(c)){const d=(c.__vccOpts||c)[e];d&&o.push(Ke(d,s,t,p,l,a))}else{let u=c();o.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${p.path}"`);const v=k0(d)?d.default:d;p.mods[l]=d,p.components[l]=v;const f=(v.__vccOpts||v)[e];return f&&Ke(f,s,t,p,l,a)()}))}}return o}function fo(n){const e=fn(xa),s=fn(sp),t=w(()=>{const c=is(n.to);return e.resolve(c)}),a=w(()=>{const{matched:c}=t.value,{length:u}=c,d=c[u-1],v=s.matched;if(!d||!v.length)return-1;const k=v.findIndex(Hs.bind(null,d));if(k>-1)return k;const f=Lr(c[u-2]);return u>1&&Lr(d)===f&&v[v.length-1].path!==f?v.findIndex(Hs.bind(null,c[u-2])):k}),o=w(()=>a.value>-1&&v1(s.params,t.value.params)),p=w(()=>a.value>-1&&a.value===s.matched.length-1&&Yi(s.params,t.value.params));function l(c={}){if(d1(c)){const u=e[is(n.replace)?"replace":"push"](is(n.to)).catch(rt);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:t,href:w(()=>t.value.href),isActive:o,isExactActive:p,navigate:l}}function c1(n){return n.length===1?n[0]:n}const u1=$({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:fo,setup(n,{slots:e}){const s=Et(fo(n)),{options:t}=fn(xa),a=w(()=>({[Rr(n.activeClass,t.linkActiveClass,"router-link-active")]:s.isActive,[Rr(n.exactActiveClass,t.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const o=e.default&&c1(e.default(s));return n.custom?o:i("a",{"aria-current":s.isExactActive?n.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:a.value},o)}}}),Mn=u1;function d1(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function v1(n,e){for(const s in e){const t=e[s],a=n[s];if(typeof t=="string"){if(t!==a)return!1}else if(!he(a)||a.length!==t.length||t.some((o,p)=>o!==a[p]))return!1}return!0}function Lr(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Rr=(n,e,s)=>n??e??s,m1=$({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:s}){const t=fn(mo),a=w(()=>n.route||t.value),o=fn(Ar,0),p=w(()=>{let u=is(o);const{matched:d}=a.value;let v;for(;(v=d[u])&&!v.components;)u++;return u}),l=w(()=>a.value.matched[p.value]);ce(Ar,w(()=>p.value+1)),ce(i1,l),ce(mo,a);const c=Z();return cn(()=>[c.value,l.value,n.name],([u,d,v],[k,f,g])=>{d&&(d.instances[v]=u,f&&f!==d&&u&&u===k&&(d.leaveGuards.size||(d.leaveGuards=f.leaveGuards),d.updateGuards.size||(d.updateGuards=f.updateGuards))),u&&d&&(!f||!Hs(d,f)||!k)&&(d.enterCallbacks[v]||[]).forEach(y=>y(u))},{flush:"post"}),()=>{const u=a.value,d=n.name,v=l.value,k=v&&v.components[d];if(!k)return Pr(s.default,{Component:k,route:u});const f=v.props[d],g=f?f===!0?u.params:typeof f=="function"?f(u):f:null,A=i(k,_n({},g,e,{onVnodeUnmounted:E=>{E.component.isUnmounted&&(v.instances[d]=null)},ref:c}));return Pr(s.default,{Component:A,route:u})||A}}});function Pr(n,e){if(!n)return null;const s=n(e);return s.length===1?s[0]:s}const sc=m1;function f1(n){const e=s1(n.routes,n),s=n.parseQuery||r1,t=n.stringifyQuery||Sr,a=n.history,o=nt(),p=nt(),l=nt(),c=be(De);let u=De;Ls&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Wa.bind(null,R=>""+R),v=Wa.bind(null,R0),k=Wa.bind(null,_t);function f(R,W){let F,K;return Qi(R)?(F=e.getRecordMatcher(R),K=W):K=R,e.addRoute(K,F)}function g(R){const W=e.getRecordMatcher(R);W&&e.removeRoute(W)}function y(){return e.getRoutes().map(R=>R.record)}function A(R){return!!e.getRecordMatcher(R)}function E(R,W){if(W=_n({},W||c.value),typeof R=="string"){const h=Ja(s,R,W.path),x=e.resolve({path:h.path},W),O=a.createHref(h.fullPath);return _n(h,x,{params:k(x.params),hash:_t(h.hash),redirectedFrom:void 0,href:O})}let F;if(R.path!=null)F=_n({},R,{path:Ja(s,R.path,W.path).path});else{const h=_n({},R.params);for(const x in h)h[x]==null&&delete h[x];F=_n({},R,{params:v(h)}),W.params=v(W.params)}const K=e.resolve(F,W),kn=R.hash||"";K.params=d(k(K.params));const Rn=I0(t,_n({},R,{hash:S0(kn),path:K.path})),_=a.createHref(Rn);return _n({fullPath:Rn,hash:kn,query:t===Sr?l1(R.query):R.query||{}},K,{redirectedFrom:void 0,href:_})}function S(R){return typeof R=="string"?Ja(s,R,c.value.path):_n({},R)}function b(R,W){if(u!==R)return Fs(8,{from:W,to:R})}function T(R){return M(R)}function C(R){return T(_n(S(R),{replace:!0}))}function P(R){const W=R.matched[R.matched.length-1];if(W&&W.redirect){const{redirect:F}=W;let K=typeof F=="function"?F(R):F;return typeof K=="string"&&(K=K.includes("?")||K.includes("#")?K=S(K):{path:K},K.params={}),_n({query:R.query,hash:R.hash,params:K.path!=null?{}:R.params},K)}}function M(R,W){const F=u=E(R),K=c.value,kn=R.state,Rn=R.force,_=R.replace===!0,h=P(F);if(h)return M(_n(S(h),{state:typeof h=="object"?_n({},kn,h.state):kn,force:Rn,replace:_}),W||F);const x=F;x.redirectedFrom=W;let O;return!Rn&&D0(t,K,F)&&(O=Fs(16,{to:x,from:K}),ye(K,K,!0,!1)),(O?Promise.resolve(O):I(x,K)).catch(L=>Oe(L)?Oe(L,2)?L:He(L):G(L,x,K)).then(L=>{if(L){if(Oe(L,2))return M(_n({replace:_},S(L.to),{state:typeof L.to=="object"?_n({},kn,L.to.state):kn,force:Rn}),W||x)}else L=j(x,K,!0,_,kn);return J(x,K,L),L})}function U(R,W){const F=b(R,W);return F?Promise.reject(F):Promise.resolve()}function B(R){const W=ws.values().next().value;return W&&typeof W.runWithContext=="function"?W.runWithContext(R):R()}function I(R,W){let F;const[K,kn,Rn]=k1(R,W);F=Ua(K.reverse(),"beforeRouteLeave",R,W);for(const h of K)h.leaveGuards.forEach(x=>{F.push(Ke(x,R,W))});const _=U.bind(null,R,W);return F.push(_),oe(F).then(()=>{F=[];for(const h of o.list())F.push(Ke(h,R,W));return F.push(_),oe(F)}).then(()=>{F=Ua(kn,"beforeRouteUpdate",R,W);for(const h of kn)h.updateGuards.forEach(x=>{F.push(Ke(x,R,W))});return F.push(_),oe(F)}).then(()=>{F=[];for(const h of Rn)if(h.beforeEnter)if(he(h.beforeEnter))for(const x of h.beforeEnter)F.push(Ke(x,R,W));else F.push(Ke(h.beforeEnter,R,W));return F.push(_),oe(F)}).then(()=>(R.matched.forEach(h=>h.enterCallbacks={}),F=Ua(Rn,"beforeRouteEnter",R,W,B),F.push(_),oe(F))).then(()=>{F=[];for(const h of p.list())F.push(Ke(h,R,W));return F.push(_),oe(F)}).catch(h=>Oe(h,8)?h:Promise.reject(h))}function J(R,W,F){l.list().forEach(K=>B(()=>K(R,W,F)))}function j(R,W,F,K,kn){const Rn=b(R,W);if(Rn)return Rn;const _=W===De,h=Ls?history.state:{};F&&(K||_?a.replace(R.fullPath,_n({scroll:_&&h&&h.scroll},kn)):a.push(R.fullPath,kn)),c.value=R,ye(R,W,F,_),He()}let en;function wn(){en||(en=a.listen((R,W,F)=>{if(!Nt.listening)return;const K=E(R),kn=P(K);if(kn){M(_n(kn,{replace:!0,force:!0}),K).catch(rt);return}u=K;const Rn=c.value;Ls&&B0(_r(Rn.fullPath,F.delta),Ta()),I(K,Rn).catch(_=>Oe(_,12)?_:Oe(_,2)?(M(_n(S(_.to),{force:!0}),K).then(h=>{Oe(h,20)&&!F.delta&&F.type===ht.pop&&a.go(-1,!1)}).catch(rt),Promise.reject()):(F.delta&&a.go(-F.delta,!1),G(_,K,Rn))).then(_=>{_=_||j(K,Rn,!1),_&&(F.delta&&!Oe(_,8)?a.go(-F.delta,!1):F.type===ht.pop&&Oe(_,20)&&a.go(-1,!1)),J(K,Rn,_)}).catch(rt)}))}let Ln=nt(),X=nt(),an;function G(R,W,F){He(R);const K=X.list();return K.length?K.forEach(kn=>kn(R,W,F)):console.error(R),Promise.reject(R)}function Dn(){return an&&c.value!==De?Promise.resolve():new Promise((R,W)=>{Ln.add([R,W])})}function He(R){return an||(an=!R,wn(),Ln.list().forEach(([W,F])=>R?F(R):W()),Ln.reset()),R}function ye(R,W,F,K){const{scrollBehavior:kn}=n;if(!Ls||!kn)return Promise.resolve();const Rn=!F&&H0(_r(R.fullPath,0))||(K||!F)&&history.state&&history.state.scroll||null;return ss().then(()=>kn(R,W,Rn)).then(_=>_&&q0(_)).catch(_=>G(_,R,W))}const Jn=R=>a.go(R);let Es;const ws=new Set,Nt={currentRoute:c,listening:!0,addRoute:f,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:A,getRoutes:y,resolve:E,options:n,push:T,replace:C,go:Jn,back:()=>Jn(-1),forward:()=>Jn(1),beforeEach:o.add,beforeResolve:p.add,afterEach:l.add,onError:X.add,isReady:Dn,install(R){const W=this;R.component("RouterLink",Mn),R.component("RouterView",sc),R.config.globalProperties.$router=W,Object.defineProperty(R.config.globalProperties,"$route",{enumerable:!0,get:()=>is(c)}),Ls&&!Es&&c.value===De&&(Es=!0,T(a.location).catch(kn=>{}));const F={};for(const kn in De)Object.defineProperty(F,kn,{get:()=>c.value[kn],enumerable:!0});R.provide(xa,W),R.provide(sp,vl(F)),R.provide(mo,c);const K=R.unmount;ws.add(R),R.unmount=function(){ws.delete(R),ws.size<1&&(u=De,en&&en(),en=null,c.value=De,Es=!1,an=!1),K()}}};function oe(R){return R.reduce((W,F)=>W.then(()=>B(F)),Promise.resolve())}return Nt}function k1(n,e){const s=[],t=[],a=[],o=Math.max(e.matched.length,n.matched.length);for(let p=0;p<o;p++){const l=e.matched[p];l&&(n.matched.find(u=>Hs(u,l))?t.push(l):s.push(l));const c=n.matched[p];c&&(e.matched.find(u=>Hs(u,c))||a.push(c))}return[s,t,a]}function de(){return fn(xa)}function ge(n){return fn(sp)}const _1=({headerLinkSelector:n,headerAnchorSelector:e,delay:s,offset:t=5})=>{const a=de(),p=f0(()=>{var y,A;const l=Math.max(window.scrollY,document.documentElement.scrollTop,document.body.scrollTop);if(Math.abs(l-0)<t){Or(a,"");return}const u=window.innerHeight+l,d=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),v=Math.abs(d-u)<t,k=Array.from(document.querySelectorAll(n)),g=Array.from(document.querySelectorAll(e)).filter(E=>k.some(S=>S.hash===E.hash));for(let E=0;E<g.length;E++){const S=g[E],b=g[E+1],T=l>=(((y=S.parentElement)==null?void 0:y.offsetTop)??0)-t,C=!b||l<(((A=b.parentElement)==null?void 0:A.offsetTop)??0)-t;if(!(T&&C))continue;const M=decodeURIComponent(a.currentRoute.value.hash),U=decodeURIComponent(S.hash);if(M===U)return;if(v){for(let B=E+1;B<g.length;B++)if(M===decodeURIComponent(g[B].hash))return}Or(a,U);return}},s);xn(()=>{window.addEventListener("scroll",p)}),Bo(()=>{window.removeEventListener("scroll",p)})},Or=async(n,e)=>{const{scrollBehavior:s}=n.options;n.options.scrollBehavior=void 0,await n.replace({query:n.currentRoute.value.query,hash:e,force:!0}).finally(()=>n.options.scrollBehavior=s)},h1=".sidebar-link, .toc-link",b1=".header-anchor",g1=200,y1=5,E1=ae({setup(){_1({headerLinkSelector:h1,headerAnchorSelector:b1,delay:g1,offset:y1})}});let tc=()=>null;const ac=Symbol(""),w1=n=>{tc=n},T1=()=>fn(ac),x1=n=>{n.provide(ac,tc)};var S1=$({name:"AutoCatalog",props:{base:{type:String,default:""},level:{type:Number,default:3},index:Boolean},setup(n){const e=T1(),s=gs({"/":{title:"目录",empty:"暂无目录"}}),t=un(),a=de(),o=hi(),p=u=>{const d=u.I;return typeof d>"u"||d},l=()=>{const u=n.base||t.value.path.replace(/\/[^/]+$/,"/"),d=a.getRoutes(),v=[];return d.filter(({meta:k,path:f})=>{if(!ft(f,u)||f===u)return!1;if(u==="/"){const g=Le(o.value.locales).filter(y=>y!=="/");if(f==="/404.html"||g.some(y=>ft(f,y)))return!1}return(Ss(f,".html")&&!Ss(f,"/index.html")||Ss(f,"/"))&&p(k)}).map(({path:k,meta:f})=>{const g=k.substring(u.length).split("/").length;return{title:f.t||"",icon:f.i,base:k.replace(/\/[^/]+\/?$/,"/"),order:f.O||null,level:Ss(k,"/")?g-1:g,path:k}}).filter(({title:k,level:f})=>k&&f<=n.level).sort(({title:k,level:f,path:g,order:y},{title:A,level:E,path:S,order:b})=>f-E||(Ss(g,"/index.html")?-1:Ss(S,"/index.html")?1:y===null?b===null?k.localeCompare(A):b:b===null?y:y>0?b>0?y-b:-1:b<0?y-b:1)).forEach(k=>{var f;const{base:g,level:y}=k;switch(y){case 1:v.push(k);break;case 2:{const A=v.find(E=>E.path===g);A&&(A.children??(A.children=[])).push(k);break}default:{const A=v.find(E=>E.path===g.replace(/\/[^/]+\/$/,"/"));if(A){const E=(f=A.children)==null?void 0:f.find(S=>S.path===g);E&&(E.children??(E.children=[])).push(k)}}}}),v},c=w(()=>l());return()=>i("div",{class:"auto-catalog-wrapper"},[i("h2",{class:"main-title"},s.value.title),c.value.length?c.value.map(({children:u=[],icon:d,path:v,title:k},f)=>[i("h3",{id:k,class:["child-title",{"has-children":u.length}]},[i("a",{href:`#${k}`,class:"header-anchor"},"#"),i(Mn,{class:"catalog-title",to:v},()=>[n.index?`${f+1}.`:null,d&&e?i(e,{icon:d}):null,k||"Unknown"])]),u.length?i("ul",{class:"child-catalog-wrapper"},u.map(({children:g=[],icon:y,path:A,title:E},S)=>i("li",{class:"child-catalog-item"},[i("div",{class:["sub-title",{"has-children":g.length}]},[i("a",{href:`#${E}`,class:"header-anchor"},"#"),i(Mn,{class:"catalog-title",to:A},()=>[n.index?`${f+1}.${S+1}`:null,y&&e?i(e,{icon:y}):null,E||"Unknown"])]),g.length?i("div",{class:"sub-catalog-wrapper"},g.map(({icon:b,path:T,title:C},P)=>i(Mn,{class:"sub-catalog-item",to:T},()=>[n.index?`${f+1}.${S+1}.${P+1}`:null,b&&e?i(e,{icon:b}):null,C||"Unknown"]))):null]))):null]):i("p",{class:"empty-catalog"},s.value.empty)])}}),A1=ae({enhance:({app:n})=>{x1(n),Ne("AutoCatalog",n)||n.component("AutoCatalog",S1)}});const L1=i("svg",{class:"external-link-icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},[i("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),i("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})]),oc=$({name:"ExternalLinkIcon",props:{locales:{type:Object,required:!1,default:()=>({})}},setup(n){const e=qe(),s=w(()=>n.locales[e.value]??{openInNewWindow:"open in new window"});return()=>i("span",[L1,i("span",{class:"external-link-icon-sr-only"},s.value.openInNewWindow)])}}),R1={},P1=ae({enhance({app:n}){n.component("ExternalLinkIcon",i(oc,{locales:R1}))}});/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */const dn={settings:{minimum:.08,easing:"ease",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,barSelector:'[role="bar"]',parent:"body",template:'<div class="bar" role="bar"></div>'},status:null,set:n=>{const e=dn.isStarted();n=Ga(n,dn.settings.minimum,1),dn.status=n===1?null:n;const s=dn.render(!e),t=s.querySelector(dn.settings.barSelector),a=dn.settings.speed,o=dn.settings.easing;return s.offsetWidth,O1(p=>{Gt(t,{transform:"translate3d("+Ir(n)+"%,0,0)",transition:"all "+a+"ms "+o}),n===1?(Gt(s,{transition:"none",opacity:"1"}),s.offsetWidth,setTimeout(function(){Gt(s,{transition:"all "+a+"ms linear",opacity:"0"}),setTimeout(function(){dn.remove(),p()},a)},a)):setTimeout(()=>p(),a)}),dn},isStarted:()=>typeof dn.status=="number",start:()=>{dn.status||dn.set(0);const n=()=>{setTimeout(()=>{dn.status&&(dn.trickle(),n())},dn.settings.trickleSpeed)};return dn.settings.trickle&&n(),dn},done:n=>!n&&!dn.status?dn:dn.inc(.3+.5*Math.random()).set(1),inc:n=>{let e=dn.status;return e?(typeof n!="number"&&(n=(1-e)*Ga(Math.random()*e,.1,.95)),e=Ga(e+n,0,.994),dn.set(e)):dn.start()},trickle:()=>dn.inc(Math.random()*dn.settings.trickleRate),render:n=>{if(dn.isRendered())return document.getElementById("nprogress");Dr(document.documentElement,"nprogress-busy");const e=document.createElement("div");e.id="nprogress",e.innerHTML=dn.settings.template;const s=e.querySelector(dn.settings.barSelector),t=n?"-100":Ir(dn.status||0),a=document.querySelector(dn.settings.parent);return Gt(s,{transition:"all 0 linear",transform:"translate3d("+t+"%,0,0)"}),a!==document.body&&Dr(a,"nprogress-custom-parent"),a==null||a.appendChild(e),e},remove:()=>{Vr(document.documentElement,"nprogress-busy"),Vr(document.querySelector(dn.settings.parent),"nprogress-custom-parent");const n=document.getElementById("nprogress");n&&I1(n)},isRendered:()=>!!document.getElementById("nprogress")},Ga=(n,e,s)=>n<e?e:n>s?s:n,Ir=n=>(-1+n)*100,O1=function(){const n=[];function e(){const s=n.shift();s&&s(e)}return function(s){n.push(s),n.length===1&&e()}}(),Gt=function(){const n=["Webkit","O","Moz","ms"],e={};function s(p){return p.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(l,c){return c.toUpperCase()})}function t(p){const l=document.body.style;if(p in l)return p;let c=n.length;const u=p.charAt(0).toUpperCase()+p.slice(1);let d;for(;c--;)if(d=n[c]+u,d in l)return d;return p}function a(p){return p=s(p),e[p]??(e[p]=t(p))}function o(p,l,c){l=a(l),p.style[l]=c}return function(p,l){for(const c in l){const u=l[c];u!==void 0&&Object.prototype.hasOwnProperty.call(l,c)&&o(p,c,u)}}}(),pc=(n,e)=>(typeof n=="string"?n:tp(n)).indexOf(" "+e+" ")>=0,Dr=(n,e)=>{const s=tp(n),t=s+e;pc(s,e)||(n.className=t.substring(1))},Vr=(n,e)=>{const s=tp(n);if(!pc(n,e))return;const t=s.replace(" "+e+" "," ");n.className=t.substring(1,t.length-1)},tp=n=>(" "+(n.className||"")+" ").replace(/\s+/gi," "),I1=n=>{n&&n.parentNode&&n.parentNode.removeChild(n)};const D1=()=>{xn(()=>{const n=de(),e=new Set;e.add(n.currentRoute.value.path),n.beforeEach(s=>{e.has(s.path)||dn.start()}),n.afterEach(s=>{e.add(s.path),dn.done()})})},V1=ae({setup(){D1()}}),C1=JSON.parse('{"encrypt":{},"logo":"/logo.png","breadcrumb":true,"contributors":false,"lastUpdated":true,"editLink":true,"darkmode":"toggle","themeColor":false,"navbarLayout":{"start":["Brand","Search"],"center":["Links"],"end":["Repo","Outlook"]},"displayFooter":true,"pageInfo":["Category","Tag","Word","ReadingTime","PageView"],"blog":{"articleInfo":["Date","PageView","Category","Tag","ReadingTime"],"name":"lb","avatar":"/avatar.png","description":"迷信新工具，热衷于研究开源软件，定期分享探索成果","intro":"/intro.html","roundAvatar":true},"locales":{"/":{"lang":"zh-CN","navbarLocales":{"langName":"简体中文","selectLangAriaLabel":"选择语言"},"metaLocales":{"author":"作者","date":"写作日期","origin":"原创","views":"访问量","category":"分类","tag":"标签","readingTime":"阅读时间","words":"字数","toc":"此页内容","prev":"上一页","next":"下一页","lastUpdated":"上次编辑于","contributors":"贡献者","editLink":"编辑此页","print":"打印"},"blogLocales":{"article":"文章","articleList":"文章列表","category":"分类","tag":"标签","timeline":"时间轴","timelineTitle":"昨日不在","all":"全部","intro":"个人介绍","star":"收藏"},"paginationLocales":{"prev":"上一页","next":"下一页","navigate":"跳转到","action":"前往","errorText":"请输入 1 到 $page 之前的页码！"},"outlookLocales":{"themeColor":"主题色","darkmode":"外观","fullscreen":"全屏"},"routeLocales":{"skipToContent":"跳至主要內容","notFoundTitle":"页面不存在","notFoundMsg":["这里什么也没有","我们是怎么来到这儿的？","这 是 四 零 四 !","看起来你访问了一个失效的链接"],"back":"返回上一页","home":"带我回家","openInNewWindow":"Open in new window"},"navbar":[{"text":"主页","icon":"home","link":"/"},{"text":"页面开发","icon":"network","prefix":"/","children":["web/VuePress","web/docsify","deploy/VPS"]},{"text":"应用","icon":"app","prefix":"/apps/","children":["Applist","ChatGPT","design","AppNotes","Chrome"]},{"text":"专业知识","icon":"computer","prefix":"/professional_knowledge/","children":[{"text":"计算机网络","icon":"network","link":"computer_network/01.html"},{"text":"软件工程","icon":"repair","link":"software_engineer/01.html"}]},{"text":"前端","icon":"html","prefix":"/front_end/","children":[{"text":"基础三剑客","prefix":"front_end_base/","children":[{"text":"html/css","icon":"html","link":"html_css/01.html"},{"text":"javascript","icon":"javascript","link":"javascript/01.html"}]},{"text":"css提高","prefix":"css_advanced/","children":[{"text":"less","icon":"css","link":"less/01.html"},{"text":"scss","icon":"css","link":"scss/01.html"},{"text":"tailwind","icon":"css","link":"tailwind/01.html"}]},{"text":"js提高","prefix":"js_advanced/","children":[{"text":"es6","icon":"es6","link":"es6/01.html"},{"text":"ajax","icon":"ajax","link":"ajax/01.html"},{"text":"echarts","icon":"javascript","link":"echarts/01.html"},{"text":"webpack","icon":"javascript","link":"webpack/01.html"},{"text":"typescript","icon":"typescript","link":"typescript/01.html"}]},{"text":"框架","prefix":"front_end_framework/","children":[{"text":"vue2","icon":"vue","link":"vue2/01.html"},{"text":"vue3","icon":"vue","link":"vue3/01.html"},{"text":"uniapp","icon":"wechat","link":"uniapp/01.html"},{"text":"react","icon":"react","link":"react/01.html"}]},{"text":"其它","prefix":"other/","children":[{"text":"electron","icon":"javascript","link":"electron/01.html"}]}]},{"text":"服务端","prefix":"/back_end/","icon":"page","children":[{"text":"nodeJs","icon":"nodeJS","link":"nodeJs/01.html"},{"text":"linux","icon":"linux","link":"linux/01.html"},{"text":"数据库","prefix":"database/","children":[{"text":"mysql","icon":"mysql","link":"mysql/01.html"},{"text":"mongodb","icon":"mysql","link":"mongodb/01.html"}]}]},{"text":"工具","icon":"tool","prefix":"/tool/","children":[{"text":"git","icon":"git","link":"git/01.html"},{"text":"前端代码规范化","prefix":"lint/","children":[{"text":"JS 代码规范","icon":"javascript","link":"01.html"},{"text":"CSS 代码规范","icon":"css","link":"02.html"},{"text":"Git 规范化","icon":"git","link":"03.html"}]},{"text":"软件推荐与配置","prefix":"efficiency/","children":[{"text":"多平台软件","link":"software/cross-platform.html"},{"text":"windows","link":"software/windows.html"},{"text":"browser","link":"software/browser.html"},{"text":"vscode","link":"software/vscode.html"},{"text":"webstorm","link":"software/webstorm.html"},{"text":"在线工具","link":"online-tools.html"},{"text":"书签脚本","link":"bookmark-scripts.html"}]}]}],"sidebar":{"/web/":[{"text":"🌐 页面开发","children":"structure"}],"/apps/":[{"text":"🧰 应用手册","children":"structure"}],"/professional_knowledge/":[{"text":"计算机网络","icon":"network","prefix":"computer_network/","children":"structure"},{"text":"软件工程","icon":"repair","prefix":"software_engineer/","children":"structure"}],"/front_end/":[{"text":"基础三剑客","icon":"","prefix":"front_end_base/","link":"","children":[{"text":"html_css","icon":"html","prefix":"html_css/","collapsible":true,"children":"structure"},{"text":"javascript","icon":"javascript","prefix":"javascript/","collapsible":true,"children":"structure"}]},{"text":"css提高","icon":"","prefix":"css_advanced/","link":"","children":[{"text":"less","icon":"css","prefix":"less/","collapsible":true,"children":"structure"},{"text":"scss","icon":"css","prefix":"scss/","collapsible":true,"children":"structure"},{"text":"tailwind","icon":"css","prefix":"tailwind/","collapsible":true,"children":"structure"}]},{"text":"js提高","icon":"","prefix":"js_advanced/","link":"","children":[{"text":"es6","icon":"es6","prefix":"es6/","collapsible":true,"children":"structure"},{"text":"ajax","icon":"ajax","prefix":"ajax/","collapsible":true,"children":"structure"},{"text":"echarts","icon":"javascript","prefix":"echarts/","collapsible":true,"children":"structure"},{"text":"webpack","icon":"javascript","prefix":"webpack/","collapsible":true,"children":"structure"},{"text":"typescript","icon":"typescript","prefix":"typescript/","collapsible":true,"children":"structure"}]},{"text":"框架","icon":"","prefix":"front_end_framework/","link":"","children":[{"text":"vue2","icon":"vue","prefix":"vue2/","collapsible":true,"children":"structure"},{"text":"vue3","icon":"vue","prefix":"vue3/","collapsible":true,"children":"structure"},{"text":"uniapp","icon":"wechat","prefix":"uniapp/","collapsible":true,"children":"structure"},{"text":"react","icon":"react","prefix":"react/","collapsible":true,"children":"structure"}]},{"text":"其它","icon":"","prefix":"other/","link":"","children":[{"text":"electron","icon":"javascript","prefix":"electron/","collapsible":true,"children":"structure"}]}],"/back_end/":[{"text":"nodeJs","icon":"nodeJS","prefix":"nodeJs/","link":"","collapsible":true,"children":"structure"},{"text":"linux","icon":"linux","prefix":"linux/","link":"","collapsible":true,"children":"structure"},{"text":"数据库","icon":"","prefix":"database/","link":"","children":[{"text":"mysql","icon":"mysql","prefix":"mysql/","link":"","collapsible":true,"children":"structure"},{"text":"mongodb","icon":"mysql","prefix":"mongodb/","link":"","collapsible":true,"children":"structure"}]}],"/tool/":[{"text":"git","icon":"git","prefix":"git/","collapsible":true,"children":"structure"},{"text":"前端代码规范化","icon":"","prefix":"lint/","link":"","children":[{"text":"JS 代码规范","icon":"javascript","link":"01.html"},{"text":"CSS 代码规范","icon":"css","link":"02.html"},{"text":"Git 规范化","icon":"git","link":"03.html"}]},{"text":"软件推荐与配置","prefix":"efficiency/","children":[{"text":"多平台软件","link":"software/cross-platform.html"},{"text":"windows","link":"software/windows.html"},{"text":"browser","link":"software/browser.html"},{"text":"vscode","link":"software/vscode.html"},{"text":"webstorm","link":"software/webstorm.html"},{"text":"在线工具","link":"online-tools.html"},{"text":"书签脚本","link":"bookmark-scripts.html"}]}]}}}}'),j1=Z(C1),rc=()=>j1,lc=Symbol(""),M1=()=>{const n=fn(lc);if(!n)throw new Error("useThemeLocaleData() is called without provider.");return n},N1=(n,e)=>{const{locales:s,...t}=n;return{...t,...s==null?void 0:s[e]}},$1=ae({enhance({app:n}){const e=rc(),s=n._context.provides[Ko],t=w(()=>N1(e.value,s.value));n.provide(lc,t),Object.defineProperties(n.config.globalProperties,{$theme:{get(){return e.value}},$themeLocale:{get(){return t.value}}})}}),q1={"Content-Type":"application/json"},B1=({serverURL:n,lang:e,paths:s,signal:t})=>(({serverURL:a,lang:o,paths:p,type:l,signal:c})=>fetch(`${a}/article?path=${encodeURIComponent(p.join(","))}&type=${encodeURIComponent(l.join(","))}&lang=${o}`,{signal:c}).then(u=>u.json()))({serverURL:n,lang:e,paths:s,type:["time"],signal:t}).then(a=>Array.isArray(a)?a:[a]),H1=n=>(({serverURL:e,lang:s,path:t,type:a,action:o})=>fetch(`${e}/article?lang=${s}`,{method:"POST",headers:q1,body:JSON.stringify({path:t,type:a,action:o})}).then(p=>p.json()))({...n,type:"time",action:"inc"}),Cr=n=>{const e=((s="")=>s.replace(/\/$/u,""))(n);return/^(https?:)?\/\//.test(e)?e:`https://${e}`},F1=n=>{n.name!=="AbortError"&&console.error(n.message)},jr=n=>n.dataset.path||n.getAttribute("id"),Mr=(n,e)=>{e.forEach((s,t)=>{s.innerText=n[t].toString()})},z1=({serverURL:n,path:e=window.location.pathname,selector:s=".waline-pageview-count",update:t=!0,lang:a=navigator.language})=>{const o=new AbortController,p=Array.from(document.querySelectorAll(s)),l=u=>{const d=jr(u);return d!==null&&e!==d},c=u=>B1({serverURL:Cr(n),paths:u.map(d=>jr(d)||e),lang:a,signal:o.signal}).then(d=>Mr(d,u)).catch(F1);if(t){const u=p.filter(v=>!l(v)),d=p.filter(l);H1({serverURL:Cr(n),path:e,lang:a}).then(v=>Mr(new Array(u.length).fill(v),u)),d.length&&c(d)}else c(p);return o.abort.bind(o)};const W1={provider:"Waline",dark:'html[data-theme="dark"]',serverURL:"https://waline.dselegent.icu",reaction:["https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-y/twemoji/13.1.0/72x72/1f44d.png","https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-y/twemoji/13.1.0/72x72/1f44f.png","https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-y/twemoji/13.1.0/72x72/1f60e.png","https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-y/twemoji/13.1.0/72x72/1f602.png","https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-y/twemoji/13.1.0/72x72/1f635-200d-1f4ab.png"],pageview:!0};let J1=W1;const ic=Symbol(""),cc=()=>fn(ic),U1=cc,G1=n=>{n.provide(ic,J1)},K1={"/":{placeholder:"请留言。(填写邮箱可在被回复时收到邮件提醒)",reactionTitle:"已到达文章底部，欢迎留言、表情互动~",reaction0:"赞一个",reaction1:"支持下",reaction2:"有点酷",reaction3:"啥玩意",reaction4:"看不懂",admin:"盛年不重来，一日难再晨",level0:"锻体",level1:"炼气",level2:"筑基",level3:"金丹",level4:"元婴",level5:"化神"}};r(()=>import("./waline-meta-56fbc549.js"),[]);var Y1=$({name:"WalineComment",props:{identifier:{type:String,required:!0}},setup(n){const e=U1(),s=En(),t=Go(),a=gs(K1);let o;const p=!!e.serverURL,l=w(()=>{if(!p)return!1;const u=e.pageview!==!1,d=s.value.pageview;return!!d||u!==!1&&d!==!1}),c=w(()=>({lang:t.value==="zh-CN"?"zh-CN":"en",locale:a.value,dark:"html.dark",...e,path:n.identifier}));return xn(()=>{cn(()=>n.identifier,()=>{o==null||o(),l.value&&ss().then(()=>{setTimeout(()=>{o=z1({serverURL:e.serverURL,path:n.identifier})},e.delay||800)})},{immediate:!0})}),()=>p?i("div",{class:"waline-wrapper",id:"comment"},i(m({loader:async()=>(await r(()=>import("./component-a0315cbe.js"),[])).Waline,loadingComponent:yi}),c.value)):null}}),X1=$({name:"CommentService",props:{darkmode:Boolean},setup(n){const e=cc(),s=un(),t=En(),a=e.comment!==!1,o=w(()=>t.value.comment||a&&t.value.comment!==!1);return()=>i(Y1,{identifier:t.value.commentID||s.value.path,darkmode:n.darkmode,style:{display:o.value?"block":"none"}})}}),Q1=ae({enhance:({app:n})=>{G1(n),n.component("CommentService",X1)}});const Z1=800,nf=2e3,ef={"/":{copy:"复制代码",copied:"已复制",hint:"复制成功"}},sf=!1,tf=['.theme-hope-content div[class*="language-"] pre'],Nr=!1,Ka=new Map,af=()=>{const{copy:n}=Xm({legacy:!0}),e=gs(ef),s=un(),t=Lm(),a=l=>{if(!l.hasAttribute("copy-code-registered")){const c=document.createElement("button");c.type="button",c.classList.add("copy-code-button"),c.innerHTML='<div class="copy-icon" />',c.setAttribute("aria-label",e.value.copy),c.setAttribute("data-copied",e.value.copied),l.parentElement&&l.parentElement.insertBefore(c,l),l.setAttribute("copy-code-registered","")}},o=()=>ss().then(()=>new Promise(l=>{setTimeout(()=>{tf.forEach(c=>{document.querySelectorAll(c).forEach(a)}),l()},Z1)})),p=(l,c,u)=>{let{innerText:d=""}=c;/language-(shellscript|shell|bash|sh|zsh)/.test(l.classList.toString())&&(d=d.replace(/^ *(\$|>) /gm,"")),n(d).then(()=>{u.classList.add("copied"),clearTimeout(Ka.get(u));const v=setTimeout(()=>{u.classList.remove("copied"),u.blur(),Ka.delete(u)},nf);Ka.set(u,v)})};xn(()=>{(!t.value||Nr)&&o(),Wn("click",l=>{const c=l.target;if(c.matches('div[class*="language-"] > button.copy')){const u=c.parentElement,d=c.nextElementSibling;d&&p(u,d,c)}else if(c.matches('div[class*="language-"] div.copy-icon')){const u=c.parentElement,d=u.parentElement,v=u.nextElementSibling;v&&p(d,v,u)}}),cn(()=>s.value.path,()=>{(!t.value||Nr)&&o()})})};var of=ae({setup:()=>{af()}});const pf=ae({enhance:({app:n})=>{}});let rf={};const uc=Symbol(""),lf=()=>fn(uc),cf=n=>{n.provide(uc,rf)};const uf=".theme-hope-content :not(a) > img:not([no-view])",df={"/":{closeTitle:"关闭",downloadTitle:"下载图片",fullscreenTitle:"切换全屏",zoomTitle:"缩放",arrowPrevTitle:"上一个 (左箭头)",arrowNextTitle:"下一个 (右箭头)"}},vf=800,mf='<div class="photo-swipe-loading"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" preserveAspectRatio="xMidYMid" viewBox="25 25 50 50"><animateTransform attributeName="transform" type="rotate" dur="2s" keyTimes="0;1" repeatCount="indefinite" values="0;360"></animateTransform><circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1,200;90,200;1,200"></animate><animate attributeName="stroke-dashoffset" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="0;-35px;-125px"></animate></circle></svg></div>',ff=n=>pn(n)?Array.from(document.querySelectorAll(n)):n.map(e=>Array.from(document.querySelectorAll(e))).flat(),dc=n=>new Promise((e,s)=>{n.complete?e({type:"image",element:n,src:n.src,width:n.naturalWidth,height:n.naturalHeight,alt:n.alt,msrc:n.src}):(n.onload=()=>e(dc(n)),n.onerror=t=>s(t))}),kf=()=>{const{isSupported:n,toggle:e}=np(),s=lf(),t=gs(df),a=un();let o;const p=c=>{c.on("uiRegister",()=>{n&&c.ui.registerElement({name:"fullscreen",order:7,isButton:!0,html:'<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>',onClick:()=>{e()}}),c.ui.registerElement({name:"download",order:8,isButton:!0,tagName:"a",html:{isCustomSVG:!0,inner:'<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>',outlineID:"pswp__icn-download"},onInit:(u,d)=>{u.setAttribute("download",""),u.setAttribute("target","_blank"),u.setAttribute("rel","noopener"),d.on("change",()=>{u.setAttribute("href",d.currSlide.data.src)})}}),c.ui.registerElement({name:"bulletsIndicator",className:"photo-swipe-bullets-indicator",appendTo:"wrapper",onInit:(u,d)=>{const v=[];let k=-1;for(let f=0;f<d.getNumItems();f++){const g=document.createElement("div");g.className="photo-swipe-bullet",g.onclick=y=>{d.goTo(v.indexOf(y.target))},v.push(g),u.appendChild(g)}d.on("change",()=>{k>=0&&v[k].classList.remove("active"),v[d.currIndex].classList.add("active"),k=d.currIndex})}})})},l=()=>Promise.all([r(()=>import("./photoswipe.esm-3ee328cd.js"),[]),ss().then(()=>new Promise(c=>setTimeout(c,vf)).then(()=>ff(uf)))]).then(([{default:c},u])=>{const d=u.map(v=>({html:mf,element:v,msrc:v.src}));u.forEach((v,k)=>{const f=()=>{o=new c({preloaderDelay:0,showHideAnimationType:"zoom",...t.value,...s,dataSource:d,index:k,closeOnVerticalDrag:!0,wheelToZoom:!1}),p(o),o.addFilter("thumbEl",()=>v),o.addFilter("placeholderSrc",()=>v.src),o.init()};v.style.cursor="zoom-in",v.addEventListener("click",()=>{f()}),v.addEventListener("keypress",({key:g})=>{g==="Enter"&&f()})}),u.forEach((v,k)=>{dc(v).then(f=>{d.splice(k,1,f),o==null||o.refreshSlideContent(k)})})});xn(()=>{Wn("wheel",()=>{o==null||o.close()}),l(),cn(()=>a.value.path,()=>l())})};var _f=ae({enhance:({app:n})=>{cf(n)},setup:()=>{kf()}});function hf(n){return{all:n=n||new Map,on:function(e,s){var t=n.get(e);t?t.push(s):n.set(e,[s])},off:function(e,s){var t=n.get(e);t&&(s?t.splice(t.indexOf(s)>>>0,1):n.set(e,[]))},emit:function(e,s){var t=n.get(e);t&&t.slice().map(function(a){a(s)}),(t=n.get("*"))&&t.slice().map(function(a){a(e,s)})}}}const vc=Symbol(""),bf=()=>{const n=fn(vc);if(!n)throw new Error("usePWAEvent() is called without provider.");return n},gf=async n=>{const{register:e}=await r(()=>import("./index-e32a7948.js"),[]);e(jn("service-worker.js"),{ready(s){console.log("[PWA]: Service worker is active"),n.emit("ready",s)},registered(s){console.log("[PWA]: Service worker has been registered."),n.emit("registered",s)},cached(s){console.log("[PWA]: Content has been cached for offline usage"),n.emit("cached",s)},async updatefound(s){await navigator.serviceWorker.getRegistration()&&(console.log("[PWA]: New content is downloading."),n.emit("updatefound",s))},updated(s){console.log("[PWA]: New content is available, please refresh.");const t="service-worker-version",a=Number(localStorage.getItem(t)||0);localStorage.setItem(t,(a+1).toString()),localStorage.removeItem("manifest"),n.emit("updated",s)},offline(){console.log("[PWA]: No internet connection found. App is running in offline mode."),n.emit("offline")},error(s){console.log("[PWA]: Error during service worker registration:",s),n.emit("error",s)}})},yf=()=>{const n=hf();ce(vc,n),xn(async()=>{var e;let s=!1;(e=navigator.serviceWorker)!=null&&e.controller&&navigator.serviceWorker.addEventListener("controllerchange",()=>{s||(s=!0,window.location.reload())}),await gf(n)})},mc=()=>i(on,{name:"update"},()=>i("path",{d:"M949.949 146.25v255.826c0 21.981-13.989 35.97-35.97 35.97H658.154c-13.988 0-25.983-7.992-33.973-21.981-5.997-13.989-4-27.977 7.991-39.97l79.942-77.946c-55.954-51.973-121.918-77.955-199.863-77.955-37.975 0-75.95 8.002-113.924 21.99-37.975 15.985-67.948 37.976-91.934 63.957-25.982 23.987-47.973 53.96-63.957 91.934-29.983 73.955-29.983 153.895 0 227.85 15.984 37.976 37.975 67.947 63.957 91.934 23.986 25.982 53.959 47.973 91.934 63.956 37.974 13.989 75.95 21.991 113.924 21.991 45.967 0 87.942-9.998 127.913-29.982 41.976-17.99 75.951-45.967 101.931-83.943 7.993-4 11.994-5.995 13.989-5.995 5.997 0 9.998 1.994 13.988 5.995l77.958 77.946c3.989 4 5.986 7.993 5.986 11.994 0 1.994-1.996 5.995-3.99 11.994-43.973 51.962-93.941 91.934-151.9 117.914-53.958 25.983-115.92 39.972-185.874 39.972-61.961 0-119.921-11.984-169.89-33.973-57.96-25.985-105.923-57.963-139.896-93.943-35.98-33.972-67.958-81.936-93.94-139.897-45.967-101.93-45.967-237.846 0-339.777 25.982-57.96 57.96-105.923 93.94-139.896 33.973-35.98 81.936-67.958 139.896-93.94 49.968-21.99 107.928-33.974 169.89-33.974 55.963 0 109.923 9.988 161.885 29.973 53.97 21.99 101.933 51.963 139.908 89.938l73.954-73.944c9.987-9.998 23.987-13.988 39.971-8.002 13.988 8.002 21.98 19.995 21.98 33.984z"}));mc.displayName="UpdateIcon";const Ef={"/":{install:"安装",iOSInstall:"点击分享按钮然后点击“添加到主屏幕”",cancel:"取消",close:"关闭",prevImage:"上一张图片",nextImage:"下一张图片",desc:"详情",feature:"主要特色",explain:"该应用可以安装在你的 PC 或移动设备上。这将使该 Web 应用程序外观和行为与其他应用程序相同。它将在出现在应用程序列表中，并可以固定到主屏幕，开始菜单或任务栏。此 Web 应用程序还将能够与其他应用程序和你的操作系统安全地进行交互。",hint:"发现新内容可用",update:"新内容已就绪"}};const wf=n=>{const e=n.waiting;if(!e)return;const s=new MessageChannel;e.postMessage({type:"SKIP_WAITING"},[s.port2])};var Tf=$({name:"SWUpdatePopup",slots:Object,setup(n,{slots:e}){const s=gs(Ef),t=be(),a=w(()=>!!t.value),o=()=>{t.value&&(wf(t.value),t.value=void 0)};return xn(()=>{bf().on("updated",p=>{p&&(t.value=p)})}),()=>i(ms,{name:"popup"},()=>{var p;return((p=e.default)==null?void 0:p.call(e,{enabled:a.value,reload:o}))||(a.value?i("button",{type:"button",class:"sw-update-popup",tabindex:0,onClick:()=>o()},[s.value.update,i("span",{class:"icon-wrapper"},i(mc))]):null)})}});const xf=ae({setup:()=>{yf()},rootComponents:[Tf]}),fc=()=>{const n=un();return w(()=>n.value.readingTime??null)},ko=typeof{"/":{word:"约 $word 字",less1Minute:"小于 1 分钟",time:"大约 $time 分钟"}}>"u"?null:{"/":{word:"约 $word 字",less1Minute:"小于 1 分钟",time:"大约 $time 分钟"}},kc=(n,e)=>{const{minutes:s,words:t}=n,{less1Minute:a,word:o,time:p}=e;return{time:s<1?a:p.replace("$time",Math.round(s).toString()),words:o.replace("$word",t.toString())}},$r={words:"",time:""},_c=()=>ko?gs(ko):w(()=>null),Sf=()=>{if(typeof ko>"u")return w(()=>$r);const n=fc(),e=_c();return w(()=>n.value&&e.value?kc(n.value,e.value):$r)},ys=()=>rc(),rn=()=>M1(),Ks=()=>w(()=>!!ys().value.pure);var Ya=$({name:"EmptyComponent",setup:()=>()=>null});const Af="719px",Lf="1440px",Rf="false",Pf="_rainbow_1rnh5_1",ap={mobileBreakPoint:Af,pcBreakPoint:Lf,enableThemeColor:Rf,rainbow:Pf},op={"/web/":["VuePress","docsify","Comments"],"/apps/":["Applist","ChatGPT","design","AppNotes","Chrome"],"/professional_knowledge/computer_network/":["01","02","03","04","05","06"],"/professional_knowledge/software_engineer/":["01","02","03","04","05","06","07","08","09","10"],"/front_end/front_end_base/html_css/":["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"],"/front_end/front_end_base/javascript/":["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36"],"/front_end/css_advanced/less/":["01"],"/front_end/css_advanced/scss/":["01","02","03","04","05","06","07","08","09","10","11"],"/front_end/css_advanced/tailwind/":["01","02","03","04"],"/front_end/js_advanced/es6/":["01","02","03","04","05","06","07","08","09","10","11","12","13","14"],"/front_end/js_advanced/ajax/":["01","02","03","04"],"/front_end/js_advanced/echarts/":["01","02","03","04","05"],"/front_end/js_advanced/webpack/":["01","02","03","04"],"/front_end/js_advanced/typescript/":["03","01","02","04","05","06"],"/front_end/front_end_framework/vue2/":["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16"],"/front_end/front_end_framework/vue3/":["01","02","03","04","06","07","08","09","10","11","12","13","14","15","16","17","18"],"/front_end/front_end_framework/uniapp/":["01","02","03","04","05","06","07","08","09"],"/front_end/front_end_framework/react/":["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"],"/front_end/other/electron/":["01","02","03","04","05","06","07","08","09","10"],"/back_end/nodeJs/":["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18"],"/back_end/linux/":["01","02","03","04","05","06","07","08","09","10","11"],"/back_end/database/mysql/":["01","02","03","04","05","06","07","08","09","10","11"],"/back_end/database/mongodb/":["01"],"/tool/git/":["01","02","03","04"]},hc=n=>{const{icon:e="",color:s,size:t}=n,a={};return s&&(a.color=s),t&&(a.height=Number.isNaN(Number(t))?t:`${t}px`),bs(e)?i("img",{class:"icon",src:e,"no-view":"",style:a}):wa(e)?i("img",{class:"icon",src:jn(e),"no-view":"",style:a}):i(se("FontIcon"),n)};hc.displayName="HopeIcon";var te=hc,gn=(n=>(n.type="y",n.title="t",n.shortTitle="s",n.icon="i",n.author="a",n.date="d",n.localizedDate="l",n.category="c",n.tag="g",n.isEncrypted="n",n.isOriginal="o",n.readingTime="r",n.excerpt="e",n.sticky="u",n.cover="v",n.index="I",n.order="O",n))(gn||{}),bc=(n=>(n.article="a",n.home="h",n.slide="s",n.page="p",n))(bc||{});const Ms=(n,e=!1)=>{const s=de(),{fullPath:t,meta:a,name:o}=Rt(s,encodeURI(n));return{text:!e&&a[gn.shortTitle]?a[gn.shortTitle]:a[gn.title]||n,link:o==="404"?n:t,...a[gn.icon]?{icon:a[gn.icon]}:{}}},Ot=()=>{const n=de(),e=ge();return s=>{if(s)if(wa(s))e.path!==s&&n.push(s);else if(bs(s)||ii(s))window&&window.open(s);else{const t=e.path.slice(0,e.path.lastIndexOf("/"));n.push(`${t}/${encodeURI(s)}`)}}},gc=()=>{const n=rn(),e=En();return w(()=>{const{author:s}=e.value;return s?kt(s):s===!1?[]:kt(n.value.author,!1)})},Of=()=>{const n=En();return w(()=>Ii(n.value.category).map(e=>{var s,t;return{name:e,path:((t=(s=fn(Symbol.for("categoryMap")))==null?void 0:s.value.map[e])==null?void 0:t.path)||""}}))},If=()=>{const n=En();return w(()=>Di(n.value.tag).map(e=>{var s,t;return{name:e,path:((t=(s=fn(Symbol.for("tagMap")))==null?void 0:s.value.map[e])==null?void 0:t.path)||""}}))},Df=()=>{const n=En(),e=un();return w(()=>{const s=Yo(n.value.date);if(s)return s;const{createdTime:t}=e.value.git||{};return t?new Date(t):null})},Vf=()=>{const n=rn(),e=un(),s=En(),t=gc(),a=Of(),o=If(),p=Df(),l=fc(),c=Sf(),u=w(()=>({author:t.value,category:a.value,date:p.value,localizedDate:e.value.localizedDate,tag:o.value,isOriginal:s.value.isOriginal||!1,readingTime:l.value,readingTimeLocale:c.value,pageview:"pageview"in s.value?s.value.pageview:!0})),d=w(()=>"pageInfo"in s.value?s.value.pageInfo:"pageInfo"in n.value?n.value.pageInfo:null);return{info:u,items:d}},{mobileBreakPoint:Cf,pcBreakPoint:jf}=ap,qr=n=>n.endsWith("px")?Number(n.slice(0,-2)):null,It=()=>{const n=Z(!1),e=Z(!1),s=()=>{n.value=window.innerWidth<=(qr(Cf)??719),e.value=window.innerWidth>=(qr(jf)??1440)};return xn(()=>{s(),Wn("resize",s,!1),Wn("orientationchange",s,!1)}),{isMobile:n,isPC:e}},yc=Symbol(""),Dt=()=>{const n=fn(yc);if(!n)throw new Error("useDarkmode() is called without provider.");return n},Mf=n=>{const e=ys(),s=a0(),t=t0("vuepress-theme-hope-scheme","auto"),a=w(()=>e.value.darkmode||"switch"),o=w(()=>{const l=a.value;return l==="disable"?!1:l==="enable"?!0:l==="auto"?s.value:l==="toggle"?t.value==="dark":t.value==="dark"||t.value==="auto"&&s.value}),p=w(()=>{const l=a.value;return l==="switch"||l==="toggle"});n.provide(yc,{canToggle:p,config:a,isDarkmode:o,status:t}),Object.defineProperties(n.config.globalProperties,{$isDarkmode:{get:()=>o.value}})},Nf=()=>{const{isDarkmode:n}=Dt(),e=(s=n.value)=>document.documentElement.setAttribute("data-theme",s?"dark":"light");xn(()=>{cn(n,e,{immediate:!0})})};var Gn=$({name:"AutoLink",inheritAttrs:!1,props:{config:{type:Object,required:!0},exact:Boolean,noExternalLinkIcon:Boolean},emits:["focusout"],slots:Object,setup(n,{attrs:e,emit:s,slots:t}){const a=ge(),o=hi(),p=Js(n,"config"),l=w(()=>bs(p.value.link)),c=w(()=>ii(p.value.link)||dm(p.value.link)),u=w(()=>c.value?void 0:p.value.target||(l.value?"_blank":void 0)),d=w(()=>u.value==="_blank"),v=w(()=>!l.value&&!c.value&&!d.value),k=w(()=>c.value?void 0:p.value.rel||(d.value?"noopener noreferrer":void 0)),f=w(()=>p.value.ariaLabel||p.value.text),g=w(()=>{if(n.exact)return!1;const A=Le(o.value.locales);return A.length?A.every(E=>E!==p.value.link):p.value.link!=="/"}),y=w(()=>v.value?p.value.activeMatch?new RegExp(p.value.activeMatch).test(a.path):g.value?ft(a.path,p.value.link):a.path===p.value.link:!1);return()=>{const{before:A,after:E,default:S}=t,{text:b,icon:T,link:C}=p.value;return v.value?i(Mn,{to:C,"aria-label":f.value,...e,class:["nav-link",{active:y.value},e.class],onFocusout:()=>s("focusout")},()=>S?S():[A?A():i(te,{icon:T}),b,E==null?void 0:E()]):i("a",{href:C,rel:k.value,target:u.value,"aria-label":f.value,...e,class:["nav-link",e.class],onFocusout:()=>s("focusout")},S?S():[A?A():i(te,{icon:T}),b,n.noExternalLinkIcon?null:i(oc),E==null?void 0:E()])}}});const zs=(n,e,s=!1)=>"activeMatch"in e?new RegExp(e.activeMatch).test(n.path):Xo(n,e.link)?!0:e.children&&!s?e.children.some(t=>zs(n,t)):!1,Ec=(n,e)=>e.type==="group"?e.children.some(s=>s.type==="group"?Ec(n,s):s.type==="page"&&zs(n,s,!0))||"prefix"in e&&Xo(n,e.prefix):!1,wc=(n,e)=>pn(n.link)?i(Gn,{...e,config:n}):i("p",e,[i(te,{icon:n.icon}),n.text]),Tc=n=>{const e=ge();return n?i("ul",{class:"sidebar-sub-headers"},n.map(s=>{const t=zs(e,s,!0);return i("li",{class:"sidebar-sub-header"},[wc(s,{class:["sidebar-link","heading",{active:t}]}),Tc(s.children)])})):null},Xa=(n="",e="")=>wa(e)?e:`${im(n)}${e}`,$f=(n,e)=>{const s=un();return{type:"heading",text:n.title,link:`${s.value.path}#${n.slug}`,children:pp(n.children,e)}},pp=(n,e)=>e>0?n.map(s=>$f(s,e-1)):[],xc=n=>{const e=un();return pp(e.value.headers,n)},_o=(n,e,s="")=>{const t=un(),a=(o,p=s)=>{var l;const c=pn(o)?Ms(Xa(p,o)):o.link?{...o,...ua(o.link)?{}:{link:Ms(Xa(p,o.link)).link}}:o;if("children"in c){const u=Xa(p,c.prefix),d=c.children==="structure"?op[u]:c.children;return{type:"group",...c,prefix:u,children:d.map(v=>a(v,u))}}return{type:"page",...c,children:c.link===t.value.path?pp(((l=t.value.headers[0])==null?void 0:l.level)===1?t.value.headers[0].children:t.value.headers,e):[]}};return n.map(o=>a(o))},qf=(n,e)=>{const s=un(),t=Le(n).sort((a,o)=>o.length-a.length);for(const a of t)if(ft(decodeURI(s.value.path),a)){const o=n[a];return o?_o(o==="structure"?op[a]:o==="heading"?xc(e):o,e,a):[]}return console.warn(`${s.value.path} is missing sidebar config.`),[]},Bf=()=>{const n=qe(),e=En(),s=rn(),t=e.value.home?!1:e.value.sidebar??s.value.sidebar??"structure",a=e.value.headerDepth??s.value.headerDepth??2;return t===!1?[]:t==="heading"?xc(a):t==="structure"?_o(op[n.value],a,n.value):Y(t)?_o(t,a):Jo(t)?qf(t,a):[]},Sc=Symbol(""),Hf=()=>{const n=w(()=>Bf());ce(Sc,n)},rp=()=>{const n=fn(Sc);if(!n)throw new Error("useSidebarItems() is called without provider.");return n};var Ff=$({name:"PageFooter",setup(){const n=En(),e=rn(),s=gc(),t=w(()=>{const{copyright:p,footer:l}=n.value;return l!==!1&&!!(p||l||e.value.displayFooter)}),a=w(()=>{const{footer:p}=n.value;return p===!1?!1:pn(p)?p:e.value.footer||""}),o=w(()=>"copyright"in n.value?n.value.copyright:"copyright"in e.value?e.value.copyright:s.value.length?`Copyright © ${new Date().getFullYear()} ${s.value[0].name}`:!1);return()=>t.value?i("footer",{class:"vp-footer-wrapper"},[a.value?i("div",{class:"vp-footer",innerHTML:a.value}):null,o.value?i("div",{class:"vp-copyright",innerHTML:o.value}):null]):null}}),zf=$({name:"NavbarDropdownLink",props:{config:{type:Object,required:!0}},slots:Object,setup(n,{slots:e}){const s=un(),t=Js(n,"config"),a=w(()=>t.value.ariaLabel||t.value.text),o=Z(!1);cn(()=>s.value.path,()=>{o.value=!1});const p=l=>{l.detail===0&&(o.value=!o.value)};return()=>{var l;return i("div",{class:["dropdown-wrapper",{open:o.value}]},[i("button",{type:"button",class:"dropdown-title","aria-label":a.value,onClick:p},[((l=e.title)==null?void 0:l.call(e))||i("span",{class:"title"},[i(te,{icon:t.value.icon}),n.config.text]),i("span",{class:"arrow"}),i("ul",{class:"nav-dropdown"},t.value.children.map((c,u)=>{const d=u===t.value.children.length-1;return i("li",{class:"dropdown-item"},"children"in c?[i("h4",{class:"dropdown-subtitle"},c.link?i(Gn,{config:c,onFocusout:()=>{c.children.length===0&&d&&(o.value=!1)}}):i("span",c.text)),i("ul",{class:"dropdown-subitem-wrapper"},c.children.map((v,k)=>i("li",{class:"dropdown-subitem"},i(Gn,{config:v,onFocusout:()=>{k===c.children.length-1&&d&&(o.value=!1)}}))))]:i(Gn,{config:c,onFocusout:()=>{d&&(o.value=!1)}}))}))])])}}});const Ac=(n,e="")=>pn(n)?Ms(`${e}${n}`):"children"in n?{...n,...n.link&&!ua(n.link)?Ms(`${e}${n.link}`):{},children:n.children.map(s=>Ac(s,`${e}${n.prefix||""}`))}:{...n,link:ua(n.link)?n.link:Ms(`${e}${n.link}`).link},Lc=()=>w(()=>(rn().value.navbar||[]).map(n=>Ac(n))),Wf=()=>{const n=rn(),e=w(()=>n.value.repo||null),s=w(()=>e.value?Im(e.value):null),t=w(()=>e.value?Ci(e.value):null),a=w(()=>s.value?n.value.repoLabel??(t.value===null?"Source":t.value):null);return w(()=>!s.value||!a.value||n.value.repoDisplay===!1?null:{type:t.value||"Source",label:a.value,link:s.value})};var Jf=$({name:"NavScreenDropdown",props:{config:{type:Object,required:!0}},setup(n){const e=un(),s=Js(n,"config"),t=w(()=>s.value.ariaLabel||s.value.text),a=Z(!1);cn(()=>e.value.path,()=>{a.value=!1});const o=(p,l)=>l[l.length-1]===p;return()=>[i("button",{type:"button",class:["nav-screen-dropdown-title",{active:a.value}],"aria-label":t.value,onClick:()=>{a.value=!a.value}},[i("span",{class:"title"},[i(te,{icon:s.value.icon}),n.config.text]),i("span",{class:["arrow",a.value?"down":"end"]})]),i("ul",{class:["nav-screen-dropdown",{hide:!a.value}]},s.value.children.map(p=>i("li",{class:"dropdown-item"},"children"in p?[i("h4",{class:"dropdown-subtitle"},p.link?i(Gn,{config:p,onFocusout:()=>{o(p,s.value.children)&&p.children.length===0&&(a.value=!1)}}):i("span",p.text)),i("ul",{class:"dropdown-subitem-wrapper"},p.children.map(l=>i("li",{class:"dropdown-subitem"},i(Gn,{config:l,onFocusout:()=>{o(l,p.children)&&o(p,s.value.children)&&(a.value=!1)}}))))]:i(Gn,{config:p,onFocusout:()=>{o(p,s.value.children)&&(a.value=!1)}}))))]}}),Uf=$({name:"NavScreenLinks",setup(){const n=Lc();return()=>n.value.length?i("nav",{class:"nav-screen-links"},n.value.map(e=>i("div",{class:"navbar-links-item"},"children"in e?i(Jf,{config:e}):i(Gn,{config:e})))):null}});const Rc=()=>i(on,{name:"dark"},()=>i("path",{d:"M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z"}));Rc.displayName="DarkIcon";const Pc=()=>i(on,{name:"light"},()=>i("path",{d:"M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z"}));Pc.displayName="LightIcon";const Oc=()=>i(on,{name:"auto"},()=>i("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z"}));Oc.displayName="AutoIcon";const Ic=()=>i(on,{name:"enter-fullscreen"},()=>i("path",{d:"M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z"}));Ic.displayName="EnterFullScreenIcon";const Dc=()=>i(on,{name:"cancel-fullscreen"},()=>i("path",{d:"M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z"}));Dc.displayName="CancelFullScreenIcon";const Vc=()=>i(on,{name:"outlook"},()=>[i("path",{d:"M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z"})]);Vc.displayName="OutlookIcon";var Cc=$({name:"AppearanceSwitch",setup(){const{config:n,status:e}=Dt(),s=()=>{n.value==="switch"?e.value={light:"dark",dark:"auto",auto:"light"}[e.value]:e.value=e.value==="light"?"dark":"light"};return()=>i("button",{type:"button",id:"appearance-switch",onClick:()=>s()},[i(Oc,{style:{display:e.value==="auto"?"block":"none"}}),i(Rc,{style:{display:e.value==="dark"?"block":"none"}}),i(Pc,{style:{display:e.value==="light"?"block":"none"}})])}}),Gf=$({name:"AppearanceMode",setup(){const n=rn(),{canToggle:e}=Dt(),s=w(()=>n.value.outlookLocales.darkmode);return()=>e.value?i("div",{class:"appearance-wrapper"},[i("label",{class:"appearance-title",for:"appearance-switch"},s.value),i(Cc)]):null}});const Qa="VUEPRESS_THEME_COLOR";var Kf=$({name:"ThemeColorPicker",props:{themeColor:{type:Object,required:!0}},setup(n){const e=(s="")=>{const t=document.documentElement.classList,a=Le(n.themeColor);if(!s){localStorage.removeItem(Qa),t.remove(...a);return}t.remove(...a.filter(o=>o!==s)),t.add(s),localStorage.setItem(Qa,s)};return xn(()=>{const s=localStorage.getItem(Qa);s&&e(s)}),()=>i("ul",{id:"theme-color-picker"},[i("li",i("span",{class:"theme-color",onClick:()=>e()})),Lt(n.themeColor).map(([s,t])=>i("li",i("span",{style:{background:t},onClick:()=>e(s)})))])}});const Ns=ap.enableThemeColor==="true",Yf=Ns?Rm(Lt(ap).filter(([n])=>n.startsWith("theme-"))):{};var Xf=$({name:"ThemeColor",setup(){const n=rn(),e=w(()=>n.value.outlookLocales.themeColor);return()=>Ns?i("div",{class:"theme-color-wrapper"},[i("label",{class:"theme-color-title",for:"theme-color-picker"},e.value),i(Kf,{themeColor:Yf})]):null}}),jc=$({name:"ToggleFullScreenButton",setup(){const n=rn(),{isSupported:e,isFullscreen:s,toggle:t}=np(),a=w(()=>n.value.outlookLocales.fullscreen);return()=>e?i("div",{class:"full-screen-wrapper"},[i("label",{class:"full-screen-title",for:"full-screen-switch"},a.value),i("button",{type:"button",class:"full-screen",id:"full-screen-switch",ariaPressed:s.value,onClick:()=>t()},s.value?i(Dc):i(Ic))]):null}}),Mc=$({name:"OutlookSettings",setup(){const n=ys(),e=Ks(),s=w(()=>!e.value&&n.value.fullscreen);return()=>i(ya,()=>[Ns?i(Xf):null,i(Gf),s.value?i(jc):null])}}),Qf=$({name:"NavScreen",props:{show:Boolean},emits:["close"],slots:Object,setup(n,{emit:e,slots:s}){const t=un(),{isMobile:a}=It(),o=be(),p=Bi(o);return xn(()=>{o.value=document.body,cn(a,l=>{!l&&n.show&&(p.value=!1,e("close"))}),cn(()=>t.value.path,()=>{p.value=!1,e("close")})}),St(()=>{p.value=!1}),()=>i(ms,{name:"fade",onEnter:()=>{p.value=!0},onAfterLeave:()=>{p.value=!1}},()=>{var l,c;return n.show?i("div",{id:"nav-screen"},i("div",{class:"vp-nav-screen-container"},[(l=s.before)==null?void 0:l.call(s),i(Uf),i("div",{class:"vp-outlook-wrapper"},i(Mc)),(c=s.after)==null?void 0:c.call(s)])):null})}}),Zf=$({name:"NavbarBrand",setup(){const n=qe(),e=ga(),s=rn(),t=w(()=>s.value.home||n.value),a=w(()=>e.value.title),o=w(()=>s.value.navTitle??a.value),p=w(()=>s.value.logo?jn(s.value.logo):null),l=w(()=>s.value.logoDark?jn(s.value.logoDark):null);return()=>i(Mn,{to:t.value,class:"vp-brand"},()=>[p.value?i("img",{class:["vp-nav-logo",{light:!!l.value}],src:p.value,alt:a.value}):null,l.value?i("img",{class:["vp-nav-logo dark"],src:l.value,alt:a.value}):null,o.value?i("span",{class:["vp-site-name",{"hide-in-pad":p.value&&s.value.hideSiteNameOnMobile!==!1}]},o.value):null])}}),nk=$({name:"NavbarLinks",setup(){const n=Lc();return()=>n.value.length?i("nav",{class:"vp-nav-links"},n.value.map(e=>i("div",{class:"nav-item hide-in-mobile"},"children"in e?i(zf,{config:e}):i(Gn,{config:e})))):null}}),ek=$({name:"RepoLink",components:{BitbucketIcon:Si,GiteeIcon:xi,GitHubIcon:wi,GitLabIcon:Ti,SourceIcon:Ai},setup(){const n=Wf();return()=>n.value?i("div",{class:"nav-item"},i("a",{class:"vp-repo-link",href:n.value.link,target:"_blank",rel:"noopener noreferrer","aria-label":n.value.label},i(se(`${n.value.type}Icon`),{style:{width:"1.25rem",height:"1.25rem",verticalAlign:"middle"}}))):null}});const Nc=({active:n=!1},{emit:e})=>i("button",{type:"button",class:["vp-toggle-navbar-button",{"is-active":n}],"aria-label":"Toggle Navbar","aria-expanded":n,"aria-controls":"nav-screen",onClick:()=>e("toggle")},i("span",[i("span",{class:"vp-top"}),i("span",{class:"vp-middle"}),i("span",{class:"vp-bottom"})]));Nc.displayName="ToggleNavbarButton";var sk=Nc;const ho=(n,{emit:e})=>i("button",{type:"button",class:"vp-toggle-sidebar-button",title:"Toggle Sidebar",onClick:()=>e("toggle")},i("span",{class:"icon"}));ho.displayName="ToggleSidebarButton",ho.emits=["toggle"];var tk=ho,ak=$({name:"OutlookButton",setup(){const{isSupported:n}=np(),e=ys(),s=Ks(),t=un(),{canToggle:a}=Dt(),o=Z(!1),p=w(()=>!s.value&&e.value.fullscreen&&n);return cn(()=>t.value.path,()=>{o.value=!1}),()=>a.value||p.value||Ns?i("div",{class:"nav-item hide-in-mobile"},a.value&&!p.value&&!Ns?i(Cc):p.value&&!a.value&&!Ns?i(jc):i("button",{type:"button",class:["outlook-button",{open:o.value}],tabindex:"-1","aria-hidden":!0},[i(Vc),i("div",{class:"outlook-dropdown"},i(Mc))])):null}}),ok=$({name:"NavBar",emits:["toggleSidebar"],slots:Object,setup(n,{emit:e,slots:s}){const t=rn(),{isMobile:a}=It(),o=Z(!1),p=w(()=>{const{navbarAutoHide:d="mobile"}=t.value;return d!=="none"&&(d==="always"||a.value)}),l=w(()=>t.value.navbarLayout||{start:["Brand"],center:["Links"],end:["Language","Repo","Outlook","Search"]}),c={Brand:Zf,Language:Ya,Links:nk,Repo:ek,Outlook:ak,Search:Ne("Docsearch")?se("Docsearch"):Ne("SearchBox")?se("SearchBox"):Ya},u=d=>c[d]??(Ne(d)?se(d):Ya);return()=>{var d,v,k,f,g,y;return[i("header",{class:["vp-navbar",{"auto-hide":p.value,"hide-icon":t.value.navbarIcon===!1}],id:"navbar"},[i("div",{class:"vp-navbar-start"},[i(tk,{onToggle:()=>{o.value&&(o.value=!1),e("toggleSidebar")}}),(d=s.startBefore)==null?void 0:d.call(s),(l.value.start||[]).map(A=>i(u(A))),(v=s.startAfter)==null?void 0:v.call(s)]),i("div",{class:"vp-navbar-center"},[(k=s.centerBefore)==null?void 0:k.call(s),(l.value.center||[]).map(A=>i(u(A))),(f=s.centerAfter)==null?void 0:f.call(s)]),i("div",{class:"vp-navbar-end"},[(g=s.endBefore)==null?void 0:g.call(s),(l.value.end||[]).map(A=>i(u(A))),(y=s.endAfter)==null?void 0:y.call(s),i(sk,{active:o.value,onToggle:()=>{o.value=!o.value}})])]),i(Qf,{show:o.value,onClose:()=>{o.value=!1}},{before:()=>{var A;return(A=s.screenTop)==null?void 0:A.call(s)},after:()=>{var A;return(A=s.screenBottom)==null?void 0:A.call(s)}})]}}}),pk=$({name:"SidebarChild",props:{config:{type:Object,required:!0}},setup(n){const e=ge();return()=>[wc(n.config,{class:["sidebar-link",`sidebar-${n.config.type}`,{active:zs(e,n.config,!0)}],exact:!0}),Tc(n.config.children)]}}),rk=$({name:"SidebarGroup",props:{config:{type:Object,required:!0},open:{type:Boolean,required:!0}},emits:["toggle"],setup(n,{emit:e}){const s=ge(),t=w(()=>zs(s,n.config)),a=w(()=>zs(s,n.config,!0));return()=>{const{collapsible:o,children:p=[],icon:l,prefix:c,link:u,text:d}=n.config;return i("section",{class:"sidebar-group"},[i(o?"button":"p",{class:["sidebar-heading",{clickable:o||u,exact:a.value,active:t.value}],...o?{type:"button",onClick:()=>e("toggle"),onKeydown:v=>{v.key==="Enter"&&e("toggle")}}:{}},[i(te,{icon:l}),u?i(Gn,{class:"title",config:{text:d,link:u},noExternalLinkIcon:!0}):i("span",{class:"title"},d),o?i("span",{class:["arrow",n.open?"down":"end"]}):null]),n.open||!o?i($c,{key:c,config:p}):null])}}}),$c=$({name:"SidebarLinks",props:{config:{type:Array,required:!0}},setup(n){const e=ge(),s=Z(-1),t=a=>{s.value=a===s.value?-1:a};return cn(()=>e.path,()=>{const a=n.config.findIndex(o=>Ec(e,o));s.value=a},{immediate:!0,flush:"post"}),()=>i("ul",{class:"sidebar-links"},n.config.map((a,o)=>i("li",a.type==="group"?i(rk,{config:a,open:o===s.value,onToggle:()=>t(o)}):i(pk,{config:a}))))}}),lk=$({name:"SideBar",slots:Object,setup(n,{slots:e}){const s=ge(),t=rn(),a=rp(),o=be();return xn(()=>{cn(()=>s.hash,p=>{const l=document.querySelector(`.sidebar a.sidebar-link[href="${s.path}${p}"]`);if(!l)return;const{top:c,height:u}=o.value.getBoundingClientRect(),{top:d,height:v}=l.getBoundingClientRect();d<c?l.scrollIntoView(!0):d+v>c+u&&l.scrollIntoView(!1)})}),()=>{var p,l,c;return i("aside",{class:["sidebar",{"hide-icon":t.value.sidebarIcon===!1}],id:"sidebar",ref:o},[(p=e.top)==null?void 0:p.call(e),((l=e.default)==null?void 0:l.call(e))||i($c,{config:a.value}),(c=e.bottom)==null?void 0:c.call(e)])}}}),lp=$({name:"CommonWrapper",props:{noNavbar:Boolean,noSidebar:Boolean,noToc:Boolean},slots:Object,setup(n,{slots:e}){const s=de(),t=un(),a=En(),o=rn(),{isMobile:p,isPC:l}=It(),[c,u]=ur(!1),[d,v]=ur(!1),k=rp(),f=Z(!1),g=w(()=>n.noNavbar||a.value.navbar===!1||o.value.navbar===!1?!1:!!(t.value.title||o.value.logo||o.value.repo||o.value.navbar)),y=w(()=>n.noSidebar?!1:a.value.sidebar!==!1&&k.value.length!==0&&!a.value.home),A=w(()=>n.noToc||a.value.home?!1:a.value.toc||o.value.toc!==!1&&a.value.toc!==!1),E={x:0,y:0},S=P=>{E.x=P.changedTouches[0].clientX,E.y=P.changedTouches[0].clientY},b=P=>{const M=P.changedTouches[0].clientX-E.x,U=P.changedTouches[0].clientY-E.y;Math.abs(M)>Math.abs(U)*1.5&&Math.abs(M)>40&&(M>0&&E.x<=80?u(!0):u(!1))},T=()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;let C=0;return Wn("scroll",Hm(()=>{const P=T();P<=58||P<C?f.value=!1:C+200<P&&!c.value&&(f.value=!0),C=P},300,!0)),cn(p,P=>{P||u(!1)}),xn(()=>{const P=Bi(document.body);cn(c,U=>{P.value=U});const M=s.afterEach(()=>{u(!1)});St(()=>{P.value=!1,M()})}),()=>i(Ne("GlobalEncrypt")?se("GlobalEncrypt"):Ei,()=>i("div",{class:["theme-container",{"no-navbar":!g.value,"no-sidebar":!y.value&&!(e.sidebar||e.sidebarTop||e.sidebarBottom),"has-toc":A.value,"hide-navbar":f.value,"sidebar-collapsed":!p.value&&!l.value&&d.value,"sidebar-open":p.value&&c.value},a.value.containerClass||""],onTouchStart:S,onTouchEnd:b},[g.value?i(ok,{onToggleSidebar:()=>u()},{startBefore:()=>{var P;return(P=e.navbarStartBefore)==null?void 0:P.call(e)},startAfter:()=>{var P;return(P=e.navbarStartAfter)==null?void 0:P.call(e)},centerBefore:()=>{var P;return(P=e.navbarCenterBefore)==null?void 0:P.call(e)},centerAfter:()=>{var P;return(P=e.navbarCenterAfter)==null?void 0:P.call(e)},endBefore:()=>{var P;return(P=e.navbarEndBefore)==null?void 0:P.call(e)},endAfter:()=>{var P;return(P=e.navbarEndAfter)==null?void 0:P.call(e)},screenTop:()=>{var P;return(P=e.navScreenTop)==null?void 0:P.call(e)},screenBottom:()=>{var P;return(P=e.navScreenBottom)==null?void 0:P.call(e)}}):null,i(ms,{name:"fade"},()=>c.value?i("div",{class:"sidebar-mask",onClick:()=>u(!1)}):null),i(ms,{name:"fade"},()=>p.value?null:i("div",{class:"toggle-sidebar-wrapper",onClick:()=>v()},i("span",{class:["arrow",d.value?"end":"start"]}))),i(lk,{},{...e.sidebar?{default:()=>e.sidebar()}:{},top:()=>{var P;return(P=e.sidebarTop)==null?void 0:P.call(e)},bottom:()=>{var P;return(P=e.sidebarBottom)==null?void 0:P.call(e)}}),e.default(),i(Ff)]))}}),mn=$({name:"DropTransition",props:{type:{type:String,default:"single"},delay:{type:Number,default:0},duration:{type:Number,default:.25},appear:Boolean},slots:Object,setup(n,{slots:e}){const s=a=>{a.style.transition=`transform ${n.duration}s ease-in-out ${n.delay}s, opacity ${n.duration}s ease-in-out ${n.delay}s`,a.style.transform="translateY(-20px)",a.style.opacity="0"},t=a=>{a.style.transform="translateY(0)",a.style.opacity="1"};return()=>i(n.type==="single"?ms:zv,{name:"drop",appear:n.appear,onAppear:s,onAfterAppear:t,onEnter:s,onAfterEnter:t,onBeforeLeave:s},()=>e.default())}});const bo=({custom:n})=>i(gi,{class:["theme-hope-content",{custom:n}]});bo.displayName="MarkdownContent",bo.props={custom:Boolean};var ip=bo;const qc=()=>i(on,{name:"author"},()=>i("path",{d:"M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z"}));qc.displayName="AuthorIcon";const Bc=()=>i(on,{name:"calendar"},()=>i("path",{d:"M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z"}));Bc.displayName="CalendarIcon";const Hc=()=>i(on,{name:"category"},()=>i("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));Hc.displayName="CategoryIcon";const Fc=()=>i(on,{name:"eye"},()=>i("path",{d:"M992 512.096c0-5.76-.992-10.592-1.28-11.136-.192-2.88-1.152-8.064-2.08-10.816-.256-.672-.544-1.376-.832-2.08-.48-1.568-1.024-3.104-1.6-4.32C897.664 290.112 707.104 160 512 160c-195.072 0-385.632 130.016-473.76 322.592-1.056 2.112-1.792 4.096-2.272 5.856a55.512 55.512 0 00-.64 1.6c-1.76 5.088-1.792 8.64-1.632 7.744-.832 3.744-1.568 11.168-1.568 11.168-.224 2.272-.224 4.032.032 6.304 0 0 .736 6.464 1.088 7.808.128 1.824.576 4.512 1.12 6.976h-.032c.448 2.08 1.12 4.096 1.984 6.08.48 1.536.992 2.976 1.472 4.032C126.432 733.856 316.992 864 512 864c195.136 0 385.696-130.048 473.216-321.696 1.376-2.496 2.24-4.832 2.848-6.912.256-.608.48-1.184.672-1.728 1.536-4.48 1.856-8.32 1.728-8.32l-.032.032c.608-3.104 1.568-7.744 1.568-13.28zM512 672c-88.224 0-160-71.776-160-160s71.776-160 160-160 160 71.776 160 160-71.776 160-160 160z"}));Fc.displayName="EyeIcon";const zc=()=>i(on,{name:"fire"},()=>i("path",{d:"M726.4 201.6c-12.8-9.6-28.8-6.4-38.4 0-9.6 9.6-16 25.6-9.6 38.4 6.4 12.8 9.6 28.8 12.8 44.8C604.8 83.2 460.8 38.4 454.4 35.2c-9.6-3.2-22.4 0-28.8 6.4-9.6 6.4-12.8 19.2-9.6 28.8 12.8 86.4-25.6 188.8-115.2 310.4-6.4-25.6-16-51.2-32-80-9.6-9.6-22.4-16-35.2-12.8-16 3.2-25.6 12.8-25.6 28.8-3.2 48-25.6 92.8-51.2 140.8C134.4 499.2 112 544 102.4 592c-32 150.4 99.2 329.6 233.6 380.8 9.6 3.2 19.2 6.4 32 9.6-25.6-19.2-41.6-51.2-48-96C294.4 691.2 505.6 640 515.2 460.8c153.6 105.6 224 336 137.6 505.6 3.2 0 6.4-3.2 9.6-3.2 0 0 3.2 0 3.2-3.2 163.2-89.6 252.8-208 259.2-345.6 16-211.2-163.2-390.4-198.4-412.8z"}));zc.displayName="FireIcon";const Wc=()=>i(on,{name:"print"},()=>i("path",{d:"M819.2 364.8h-44.8V128c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v236.8h-44.8C145.067 364.8 96 413.867 96 473.6v192c0 59.733 49.067 108.8 108.8 108.8h44.8V896c0 17.067 14.933 32 32 32h460.8c17.067 0 32-14.933 32-32V774.4h44.8c59.733 0 108.8-49.067 108.8-108.8v-192c0-59.733-49.067-108.8-108.8-108.8zM313.6 160h396.8v204.8H313.6V160zm396.8 704H313.6V620.8h396.8V864zM864 665.6c0 25.6-19.2 44.8-44.8 44.8h-44.8V588.8c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v121.6h-44.8c-25.6 0-44.8-19.2-44.8-44.8v-192c0-25.6 19.2-44.8 44.8-44.8h614.4c25.6 0 44.8 19.2 44.8 44.8v192z"}));Wc.displayName="PrintIcon";const Jc=()=>i(on,{name:"tag"},()=>i("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));Jc.displayName="TagIcon";const Uc=()=>i(on,{name:"timer"},()=>i("path",{d:"M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z"}));Uc.displayName="TimerIcon";const Gc=()=>i(on,{name:"word"},()=>[i("path",{d:"M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z"}),i("path",{d:"M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z"})]);Gc.displayName="WordIcon";const Be=()=>{const n=rn();return w(()=>n.value.metaLocales)};var ik=$({name:"AuthorInfo",inheritAttrs:!1,props:{author:{type:Array,required:!0},pure:Boolean},setup(n){const e=Be();return()=>n.author.length?i("span",{class:"page-author-info","aria-label":`${e.value.author}${n.pure?"":"🖊"}`,...n.pure?{}:{"data-balloon-pos":"down"}},[i(qc),i("span",n.author.map(s=>s.url?i("a",{class:"page-author-item",href:s.url,target:"_blank",rel:"noopener noreferrer"},s.name):i("span",{class:"page-author-item"},s.name))),i("span",{property:"author",content:n.author.map(s=>s.name).join(", ")})]):null}}),ck=$({name:"CategoryInfo",inheritAttrs:!1,props:{category:{type:Array,required:!0},pure:Boolean},setup(n){const e=de(),s=un(),t=Be(),a=(o,p="")=>{p&&s.value.path!==p&&(o.preventDefault(),e.push(p))};return()=>n.category.length?i("span",{class:"page-category-info","aria-label":`${t.value.category}${n.pure?"":"🌈"}`,...n.pure?{}:{"data-balloon-pos":"down"}},[i(Hc),n.category.map(({name:o,path:p})=>i("span",{class:["page-category-item",{[`category${Ea(o,9)}`]:!n.pure,clickable:p}],role:p?"navigation":"",onClick:l=>a(l,p)},o)),i("meta",{property:"articleSection",content:n.category.map(({name:o})=>o).join(",")})]):null}}),uk=$({name:"DateInfo",inheritAttrs:!1,props:{date:{type:Object,default:null},localizedDate:{type:String,default:""},pure:Boolean},setup(n){const e=Go(),s=Be();return()=>n.date?i("span",{class:"page-date-info","aria-label":`${s.value.date}${n.pure?"":"📅"}`,...n.pure?{}:{"data-balloon-pos":"down"}},[i(Bc),i("span",i(ya,()=>n.localizedDate||n.date.toLocaleDateString(e.value))),i("meta",{property:"datePublished",content:n.date.toISOString()||""})]):null}}),dk=$({name:"OriginalInfo",inheritAttrs:!1,props:{isOriginal:Boolean},setup(n){const e=Be();return()=>n.isOriginal?i("span",{class:"page-original-info"},e.value.origin):null}}),vk=$({name:"PageViewInfo",inheritAttrs:!1,props:{pageview:{type:[Boolean,String],default:!1},pure:Boolean},setup(n){const e=ge(),s=Be(),t=be(),a=Z(0);return Km(t,()=>{const o=t.value.textContent;o&&!isNaN(Number(o))&&(a.value=Number(o))},{childList:!0}),()=>n.pageview?i("span",{class:"page-pageview-info","aria-label":`${s.value.views}${n.pure?"":"🔢"}`,...n.pure?{}:{"data-balloon-pos":"down"}},[i(a.value<1e3?Fc:zc),i("span",{ref:t,class:"waline-pageview-count",id:"ArtalkPV","data-path":pn(n.pageview)?n.pageview:jn(e.path)},"...")]):null}}),mk=$({name:"ReadingTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},readingTimeLocale:{type:Object,default:()=>null},pure:Boolean},setup(n){const e=Be(),s=w(()=>{if(!n.readingTime)return null;const{minutes:t}=n.readingTime;return t<1?"PT1M":`PT${Math.round(t)}M`});return()=>{var t,a;return(t=n.readingTimeLocale)!=null&&t.time?i("span",{class:"page-reading-time-info","aria-label":`${e.value.readingTime}${n.pure?"":"⌛"}`,...n.pure?{}:{"data-balloon-pos":"down"}},[i(Uc),i("span",(a=n.readingTimeLocale)==null?void 0:a.time),i("meta",{property:"timeRequired",content:s.value})]):null}}}),fk=$({name:"TagInfo",inheritAttrs:!1,props:{tag:{type:Array,default:()=>[]},pure:Boolean},setup(n){const e=de(),s=un(),t=Be(),a=(o,p="")=>{p&&s.value.path!==p&&(o.preventDefault(),e.push(p))};return()=>n.tag.length?i("span",{class:"page-tag-info","aria-label":`${t.value.tag}${n.pure?"":"🏷"}`,...n.pure?{}:{"data-balloon-pos":"down"}},[i(Jc),n.tag.map(({name:o,path:p})=>i("span",{class:["page-tag-item",{[`tag${Ea(o,9)}`]:!n.pure,clickable:p}],role:p?"navigation":"",onClick:l=>a(l,p)},o)),i("meta",{property:"keywords",content:n.tag.map(({name:o})=>o).join(",")})]):null}}),kk=$({name:"ReadTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},readingTimeLocale:{type:Object,default:()=>null},pure:Boolean},setup(n){const e=Be();return()=>{var s,t,a;return(s=n.readingTimeLocale)!=null&&s.words?i("span",{class:"page-word-info","aria-label":`${e.value.words}${n.pure?"":"🔠"}`,...n.pure?{}:{"data-balloon-pos":"down"}},[i(Gc),i("span",(t=n.readingTimeLocale)==null?void 0:t.words),i("meta",{property:"wordCount",content:(a=n.readingTime)==null?void 0:a.words})]):null}}}),Kc=$({name:"PageInfo",components:{AuthorInfo:ik,CategoryInfo:ck,DateInfo:uk,OriginalInfo:dk,PageViewInfo:vk,ReadingTimeInfo:mk,TagInfo:fk,WordInfo:kk},props:{items:{type:[Array,Boolean],default:()=>["Author","Original","Date","PageView","ReadingTime","Category","Tag"]},info:{type:Object,required:!0}},setup(n){const e=Ks();return()=>n.items?i("div",{class:"page-info"},n.items.map(s=>i(se(`${s}Info`),{...n.info,pure:e.value}))):null}}),_k=$({name:"PrintButton",setup(){const n=ys(),e=rn();return()=>n.value.print===!1?null:i("button",{type:"button",class:"print-button",title:e.value.metaLocales.print,onClick:()=>{window.print()}},i(Wc))}});const hk=({title:n,level:e,slug:s})=>i(Mn,{to:`#${s}`,class:["toc-link",`level${e}`]},()=>n),go=(n,e)=>{const s=ge();return n.length&&e>0?i("ul",{class:"toc-list"},n.map(t=>{const a=go(t.children,e-1);return[i("li",{class:["toc-item",{active:Xo(s,`#${t.slug}`)}]},hk(t)),a?i("li",a):null]})):null};var Yc=$({name:"TOC",props:{items:{type:Array,default:()=>[]},headerDepth:{type:Number,default:2}},slots:Object,setup(n,{slots:e}){const s=ge(),t=un(),a=Be(),o=be(),p=Z("-1.7rem"),l=u=>{var d;(d=o.value)==null||d.scrollTo({top:u,behavior:"smooth"})},c=()=>{if(o.value){const u=document.querySelector(".toc-item.active");u?p.value=`${u.getBoundingClientRect().top-o.value.getBoundingClientRect().top+o.value.scrollTop}px`:p.value="-1.7rem"}else p.value="-1.7rem"};return xn(()=>{cn(()=>s.hash,u=>{if(o.value){const d=document.querySelector(`#toc a.toc-link[href$="${u}"]`);if(!d)return;const{top:v,height:k}=o.value.getBoundingClientRect(),{top:f,height:g}=d.getBoundingClientRect();f<v?l(o.value.scrollTop+f-v):f+g>v+k&&l(o.value.scrollTop+f+g-v-k)}}),cn(()=>s.fullPath,()=>c(),{flush:"post",immediate:!0})}),()=>{var u,d;const v=n.items.length?go(n.items,n.headerDepth):t.value.headers?go(t.value.headers,n.headerDepth):null;return v?i("div",{class:"toc-place-holder"},[i("aside",{id:"toc"},[(u=e.before)==null?void 0:u.call(e),i("div",{class:"toc-header"},[a.value.toc,i(_k)]),i("div",{class:"toc-wrapper",ref:o},[v,i("div",{class:"toc-marker",style:{top:p.value}})]),(d=e.after)==null?void 0:d.call(e)])]):null}}}),cp=$({name:"SkipLink",props:{content:{type:String,default:"main-content"}},setup(n){const e=un(),s=rn(),t=be(),a=({target:o})=>{const p=document.querySelector(o.hash);if(p){const l=()=>{p.removeAttribute("tabindex"),p.removeEventListener("blur",l)};p.setAttribute("tabindex","-1"),p.addEventListener("blur",l),p.focus(),window.scrollTo(0,0)}};return xn(()=>{cn(()=>e.value.path,()=>t.value.focus())}),()=>[i("span",{ref:t,tabindex:"-1"}),i("a",{href:`#${n.content}`,class:"vp-skip-link sr-only",onClick:a},s.value.routeLocales.skipToContent)]}});let Za=null,Kt=null;const bk={wait:()=>Za,pending:()=>{Za=new Promise(n=>Kt=n)},resolve:()=>{Kt==null||Kt(),Za=null,Kt=null}},Xc=()=>bk;var gk=$({name:"FadeSlideY",slots:Object,setup(n,{slots:e}){const{resolve:s,pending:t}=Xc();return()=>i(ms,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:s,onBeforeLeave:t},()=>{var a;return(a=e.default)==null?void 0:a.call(e)})}}),yk=$({name:"FeaturePanel",props:{items:{type:Object,default:()=>[]},header:{type:String,default:""}},setup(n){return()=>i("div",{class:"vp-feature-panel"},[n.header?i("h2",{class:"vp-feature-title"},n.header):null,n.items.length?i("div",{class:"vp-features-wrapper"},n.items.map(e=>{const s=[i("h3",{class:"vp-feature-header"},[i(te,{icon:e.icon}),i("span",{innerHTML:e.title})]),i("p",{class:"vp-feature-content",innerHTML:e.details})];return e.link?ua(e.link)?i("a",{class:"vp-feature link",href:e.link,role:"navigation","aria-label":e.title,target:"_blank"},s):i(Mn,{class:"vp-feature link",to:e.link,role:"navigation","aria-label":e.title},()=>s):i("div",{class:"vp-feature"},s)})):null])}}),Ek=$({name:"HeroInfo",slots:Object,setup(n,{slots:e}){const s=En(),t=ga(),a=w(()=>s.value.heroText===!1?!1:s.value.heroText||t.value.title||"Hello"),o=w(()=>s.value.tagline===!1?!1:s.value.tagline||t.value.description||"Welcome to your VuePress site"),p=w(()=>s.value.heroImage?jn(s.value.heroImage):null),l=w(()=>s.value.heroImageDark?jn(s.value.heroImageDark):null),c=w(()=>s.value.heroAlt||a.value||"hero"),u=w(()=>s.value.actions??[]);return()=>{var d,v;return i("header",{class:"vp-hero-info-wrapper"},[((d=e.heroImage)==null?void 0:d.call(e))||i(mn,{appear:!0,type:"group"},()=>[p.value?i("img",{key:"light",class:["vp-hero-image",{light:l.value}],src:p.value,alt:c.value}):null,l.value?i("img",{key:"dark",class:"vp-hero-image dark",src:l.value,alt:c.value}):null]),((v=e.heroInfo)==null?void 0:v.call(e))??i("div",{class:"vp-hero-info"},[a.value?i(mn,{appear:!0,delay:.04},()=>i("h1",{id:"main-title"},a.value)):null,o.value?i(mn,{appear:!0,delay:.08},()=>i("p",{class:"vp-description"},o.value)):null,u.value.length?i(mn,{appear:!0,delay:.12},()=>i("p",{class:"vp-actions"},u.value.map(k=>i(Gn,{class:["vp-action",k.type||"default"],config:k,noExternalLinkIcon:!0})))):null])])}}}),wk=$({name:"HomePage",slots:Object,setup(n,{slots:e}){const s=Ks(),t=En(),a=w(()=>{const{features:o}=t.value;return Y(o)?o.some(p=>!("items"in p))?[{items:o}]:o:[]});return()=>{var o,p,l;return i("main",{class:["vp-project-home ",{pure:s.value}],id:"main-content","aria-labelledby":t.value.heroText===null?void 0:"main-title"},[(o=e.top)==null?void 0:o.call(e),i(Ek),a.value.map(({header:c="",items:u},d)=>i(mn,{appear:!0,delay:.16+d*.08},()=>i(yk,{header:c,items:u}))),(p=e.center)==null?void 0:p.call(e),i(mn,{appear:!0,delay:.16+a.value.length*.08},()=>i(ip)),(l=e.bottom)==null?void 0:l.call(e)])}}});const Tk=(n,e)=>{const s=n.replace(e,"/").split("/"),t=[];let a=Uo(e);return s.forEach((o,p)=>{p!==s.length-1?(a+=`${o}/`,t.push(a)):o!==""&&(a+=o,t.push(a))}),t};var xk=$({name:"BreadCrumb",setup(){const n=de(),e=un(),s=qe(),t=En(),a=rn(),o=be([]),p=w(()=>(t.value.breadcrumb||t.value.breadcrumb!==!1&&a.value.breadcrumb!==!1)&&o.value.length>1),l=w(()=>t.value.breadcrumbIcon||t.value.breadcrumbIcon!==!1&&a.value.breadcrumbIcon!==!1),c=()=>{const u=n.getRoutes(),d=Tk(e.value.path,s.value).map(v=>{const k=u.find(f=>f.path===v);if(k){const{meta:f,path:g}=Rt(n,k.path),y=f[gn.shortTitle]||f[gn.title];if(y)return{title:y,icon:f[gn.icon],path:g}}return null}).filter(v=>v!==null);d.length>1&&(o.value=d)};return xn(()=>{c(),cn(()=>e.value.path,c)}),()=>i("nav",{class:["vp-breadcrumb",{disable:!p.value}]},p.value?i("ol",{vocab:"https://schema.org/",typeof:"BreadcrumbList"},o.value.map((u,d)=>i("li",{class:{"is-active":o.value.length-1===d},property:"itemListElement",typeof:"ListItem"},[i(Mn,{to:u.path,property:"item",typeof:"WebPage"},()=>[l.value?i(te,{icon:u.icon}):null,i("span",{property:"name"},u.title||"Unknown")]),i("meta",{property:"position",content:d+1})]))):[])}});const Br=n=>n===!1?!1:pn(n)?Ms(n,!0):Jo(n)?n:null,yo=(n,e,s)=>{const t=n.findIndex(a=>a.link===e);if(t!==-1){const a=n[t+s];return a!=null&&a.link?a:null}for(const a of n)if(a.children){const o=yo(a.children,e,s);if(o)return o}return null};var Sk=$({name:"PageNav",setup(){const n=rn(),e=En(),s=rp(),t=un(),a=Ot(),o=w(()=>{const l=Br(e.value.prev);return l===!1?null:l||(n.value.prevLink===!1?null:yo(s.value,t.value.path,-1))}),p=w(()=>{const l=Br(e.value.next);return l===!1?null:l||(n.value.nextLink===!1?null:yo(s.value,t.value.path,1))});return Wn("keydown",l=>{l.altKey&&(l.key==="ArrowRight"?p.value&&(a(p.value.link),l.preventDefault()):l.key==="ArrowLeft"&&o.value&&(a(o.value.link),l.preventDefault()))}),()=>o.value||p.value?i("nav",{class:"vp-page-nav"},[o.value?i(Gn,{class:"prev",config:o.value},()=>{var l,c;return[i("div",{class:"hint"},[i("span",{class:"arrow start"}),n.value.metaLocales.prev]),i("div",{class:"link"},[i(te,{icon:(l=o.value)==null?void 0:l.icon}),(c=o.value)==null?void 0:c.text])]}):null,p.value?i(Gn,{class:"next",config:p.value},()=>{var l,c;return[i("div",{class:"hint"},[n.value.metaLocales.next,i("span",{class:"arrow end"})]),i("div",{class:"link"},[(l=p.value)==null?void 0:l.text,i(te,{icon:(c=p.value)==null?void 0:c.icon})])]}):null]):null}});const Ak={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},Lk=({docsRepo:n,docsBranch:e,docsDir:s,filePathRelative:t,editLinkPattern:a})=>{if(!t)return null;const o=Ci(n);let p;return a?p=a:o!==null&&(p=Ak[o]),p?p.replace(/:repo/,bs(n)?n:`https://github.com/${n}`).replace(/:branch/,e).replace(/:path/,ci(`${Uo(s)}/${t}`)):null},Rk=()=>{const n=rn(),e=un(),s=En();return w(()=>{const{repo:t,docsRepo:a=t,docsBranch:o="main",docsDir:p="",editLink:l,editLinkPattern:c=""}=n.value;if(!(s.value.editLink??l??!0)||!a)return null;const u=Lk({docsRepo:a,docsBranch:o,docsDir:p,editLinkPattern:c,filePathRelative:e.value.filePathRelative});return u?{text:n.value.metaLocales.editLink,link:u}:null})},Pk=()=>{const n=ga(),e=rn(),s=un(),t=En();return w(()=>{var a,o;return!(t.value.lastUpdated??e.value.lastUpdated??!0)||!((a=s.value.git)!=null&&a.updatedTime)?null:new Date((o=s.value.git)==null?void 0:o.updatedTime).toLocaleString(n.value.lang)})},Ok=()=>{const n=rn(),e=un(),s=En();return w(()=>{var t;return s.value.contributors??n.value.contributors??!0?((t=e.value.git)==null?void 0:t.contributors)??null:null})};var Ik=$({name:"PageTitle",setup(){const n=un(),e=En(),s=rn(),{info:t,items:a}=Vf();return()=>i("div",{class:"vp-page-title"},[i("h1",[s.value.titleIcon===!1?null:i(te,{icon:e.value.icon}),n.value.title]),i(Kc,{info:t.value,...a.value===null?{}:{items:a.value}}),i("hr")])}});const Qc=()=>i(on,{name:"edit"},()=>[i("path",{d:"M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z"}),i("path",{d:"M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z"})]);Qc.displayName="EditIcon";var Dk=$({name:"PageMeta",setup(){const n=rn(),e=Rk(),s=Pk(),t=Ok();return()=>{const{metaLocales:a}=n.value;return i("footer",{class:"page-meta"},[e.value?i("div",{class:"meta-item edit-link"},i(Gn,{class:"label",config:e.value},{before:()=>i(Qc)})):null,i("div",{class:"meta-item git-info"},[s.value?i("div",{class:"update-time"},[i("span",{class:"label"},`${a.lastUpdated}: `),i(ya,()=>i("span",{class:"info"},s.value))]):null,t.value&&t.value.length?i("div",{class:"contributors"},[i("span",{class:"label"},`${a.contributors}: `),t.value.map(({email:o,name:p},l)=>[i("span",{class:"contributor",title:`email: ${o}`},p),l!==t.value.length-1?",":""])]):null])])}}}),Vk=$({name:"NormalPage",slots:Object,setup(n,{slots:e}){const s=En(),t=un(),{isDarkmode:a}=Dt(),o=rn(),p=w(()=>s.value.toc||s.value.toc!==!1&&o.value.toc!==!1);return()=>i("main",{class:"vp-page",id:"main-content"},i(Ne("LocalEncrypt")?se("LocalEncrypt"):Ei,()=>{var l,c,u,d;return[(l=e.top)==null?void 0:l.call(e),s.value.cover?i("img",{class:"page-cover",src:jn(s.value.cover),alt:t.value.title,"no-view":""}):null,i(xk),i(Ik),p.value?i(Yc,{headerDepth:s.value.headerDepth??o.value.headerDepth??2},{before:()=>{var v;return(v=e.tocBefore)==null?void 0:v.call(e)},after:()=>{var v;return(v=e.tocAfter)==null?void 0:v.call(e)}}):null,(c=e.contentBefore)==null?void 0:c.call(e),i(ip),(u=e.contentAfter)==null?void 0:u.call(e),i(Dk),i(Sk),Ne("CommentService")?i(se("CommentService"),{darkmode:a.value}):null,(d=e.bottom)==null?void 0:d.call(e)]}))}}),Ck=$({name:"Layout",setup(){const n=ys(),e=rn(),s=un(),t=En(),{isMobile:a}=It(),o=w(()=>{var p,l;return((p=e.value.blog)==null?void 0:p.sidebarDisplay)||((l=n.value.blog)==null?void 0:l.sidebarDisplay)||"mobile"});return()=>[i(cp),i(lp,{},{default:()=>t.value.home?i(wk):i(gk,()=>i(Vk,{key:s.value.path})),...o.value!=="none"?{navScreenBottom:()=>i(se("BloggerInfo"))}:{},...!a.value&&o.value==="always"?{sidebar:()=>i(se("BloggerInfo"))}:{}})]}}),jk=$({name:"NotFoundHint",setup(){const n=rn(),e=()=>{const s=n.value.routeLocales.notFoundMsg;return s[Math.floor(Math.random()*s.length)]};return()=>i("div",{class:"not-found-hint"},[i("p",{class:"error-code"},"404"),i("h1",{class:"error-title"},n.value.routeLocales.notFoundTitle),i("p",{class:"error-hint"},e())])}}),Mk=$({name:"NotFound",slots:Object,setup(n,{slots:e}){const s=qe(),t=rn(),{navigate:a}=fo({to:t.value.home??s.value});return()=>[i(cp),i(lp,{noSidebar:!0},()=>{var o;return i("main",{class:"vp-page not-found",id:"main-content"},((o=e.default)==null?void 0:o.call(e))||[i(jk),i("div",{class:"actions"},[i("button",{type:"button",class:"action-button",onClick:()=>{window.history.go(-1)}},t.value.routeLocales.back),i("button",{type:"button",class:"action-button",onClick:()=>a()},t.value.routeLocales.home)])])})]}});const Nk={},$k={category:{"/":{path:"/category/",map:{樱桃:{path:"/category/%E6%A8%B1%E6%A1%83/",keys:["v-2bc6566a"]},火龙果:{path:"/category/%E7%81%AB%E9%BE%99%E6%9E%9C/",keys:["v-24b7c48d"]},水果:{path:"/category/%E6%B0%B4%E6%9E%9C/",keys:["v-f0ec4556","v-24b7c48d","v-7bbc18fc","v-7a07405d","v-6cd750ef","v-6b227850"]},草莓:{path:"/category/%E8%8D%89%E8%8E%93/",keys:["v-f0ec4556"]},蔬菜:{path:"/category/%E8%94%AC%E8%8F%9C/",keys:["v-df8b6e0c"]},苹果:{path:"/category/%E8%8B%B9%E6%9E%9C/",keys:["v-6cd750ef","v-6b227850","v-696d9fb1","v-67b8c712"]},香蕉:{path:"/category/%E9%A6%99%E8%95%89/",keys:["v-7f25ca3a","v-7d70f19b","v-7bbc18fc","v-7a07405d"]}}}},tag:{"/":{path:"/tag/",map:{红:{path:"/tag/%E7%BA%A2/",keys:["v-df8b6e0c","v-f0ec4556","v-24b7c48d","v-2bc6566a","v-6cd750ef","v-6b227850","v-696d9fb1","v-67b8c712"]},小:{path:"/tag/%E5%B0%8F/",keys:["v-f0ec4556","v-2bc6566a"]},圆:{path:"/tag/%E5%9C%86/",keys:["v-df8b6e0c","v-2bc6566a","v-6cd750ef","v-6b227850","v-696d9fb1","v-67b8c712"]},大:{path:"/tag/%E5%A4%A7/",keys:["v-24b7c48d","v-6cd750ef","v-6b227850","v-696d9fb1","v-67b8c712"]},黄:{path:"/tag/%E9%BB%84/",keys:["v-7f25ca3a","v-7d70f19b","v-7bbc18fc","v-7a07405d"]},弯曲的:{path:"/tag/%E5%BC%AF%E6%9B%B2%E7%9A%84/",keys:["v-7f25ca3a","v-7d70f19b","v-7bbc18fc","v-7a07405d"]},长:{path:"/tag/%E9%95%BF/",keys:["v-7f25ca3a","v-7d70f19b","v-7bbc18fc","v-7a07405d"]}}}}},qk={article:{"/":{path:"/article/",keys:["v-df8b6e0c","v-184f4da6","v-77e3440a","v-79981ca9","v-7b4cf548","v-7d01cde7","v-7eb6a686","v-ff2901b6","v-fbbf5078","v-f8559f3a","v-f4ebedfc","v-a9d6b2a8","v-a66d016a","v-2632f347","v-27e7cbe6","v-299ca485","v-2b517d24","v-2d0655c3","v-2ebb2e62","v-30700701","v-3224dfa0","v-33d9b83f","v-596455e9","v-5b192e88","v-5cce0727","v-5e82dfc6","v-6037b865","v-61ec9104","v-63a169a3","v-65564242","v-670b1ae1","v-3d41e0e3","v-3ef6b982","v-40ab9221","v-42606ac0","v-4415435f","v-45ca1bfe","v-8f5a8800","v-8bf0d6c2","v-88872584","v-851d7446","v-81b3c308","v-7e4a11ca","v-7ae0608c","v-7776af4e","v-740cfe10","v-28f7c2bc","v-63e77b20","v-60213eb0","v-20ee9d86","v-1d84ec48","v-1a1b3b0a","v-16b189cc","v-6c412aac","v-68d7796e","v-656dc830","v-6e34a17a","v-fa8ee52c","v-f72533ee","v-f3bb82b0","v-f051d172","v-ece82034","v-e97e6ef6","v-e614bdb8","v-e2ab0c7a","v-df415b3c","v-942c1fe8","v-90c26eaa","v-5f498b30","v-6b5bab47","v-6d1083e6","v-6ec55c85","v-707a3524","v-722f0dc3","v-73e3e662","v-7598bf01","v-774d97a0","v-7902703f","v-c2e5e42e","v-bf7c32f0","v-8403a022","v-8099eee4","v-7d303da6","v-79c68c68","v-6f4eb639","v-71038ed8","v-72b86777","v-746d4016","v-762218b5","v-77d6f154","v-798bc9f3","v-7b40a292","v-7cf57b31","v-baffce4a","v-b7961d0c","v-b42c6bce","v-b0c2ba90","v-ad590952","v-a9ef5814","v-a685a6d6","v-a31bf598","v-9fb2445a","v-9c48931c","v-513357c8","v-4dc9a68a","v-4a5ff54c","v-46f6440e","v-3ae21c12","v-37786ad4","v-340eb996","v-30a50858","v-2d3b571a","v-29d1a5dc","v-2667f49e","v-22fe4360","v-1f949222","v-15c05499","v-17752d38","v-192a05d7","v-1adede76","v-1c93b715","v-1e488fb4","v-1ffd6853","v-21b240f2","v-23671991","v-251bf230","v-4aa68fda","v-4c5b6879","v-4e104118","v-4fc519b7","v-5179f256","v-532ecaf5","v-54e3a394","v-56987c33","v-584d54d2","v-5a022d71","v-7f8ccb1b","v-fd7cb88c","v-fa13074e","v-f6a95610","v-f33fa4d2","v-efd5f394","v-ec6c4256","v-c15f9c8c","v-bdf5eb4e","v-ba8c3a10","v-b72288d2","v-b3b8d794","v-b04f2656","v-ace57518","v-a97bc3da","v-a612129c","v-5afcd748","v-5793260a","v-542974cc","v-50bfc38e","v-4d561250","v-49ec6112","v-4682afd4","v-4318fe96","v-3faf4d58","v-3c459c1a","v-0767cf9d","v-091ca83c","v-0ad180db","v-0c86597a","v-bfed7bf0","v-bc83cab2","v-b91a1974","v-b5b06836","v-b246b6f8","v-aedd05ba","v-ab73547c","v-a809a33e","v-a49ff200","v-0055f2c3","v-020acb62","v-03bfa401","v-05747ca0","v-0729553f","v-08de2dde","v-0a93067d","v-0c47df1c","v-0dfcb7bb","v-33875565","v-353c2e04","v-36f106a3","v-38a5df42","v-3a5ab7e1","v-3c0f9080","v-3dc4691f","v-d6cb3c78","v-d3618b3a","v-cff7d9fc","v-cc8e28be","v-c5bac642","v-c2511504","v-bee763c6","v-bb7db288","v-70687734","v-6cfec5f6","v-699514b8","v-662b637a","v-62c1b23c","v-5f5800fe","v-5bee4fc0","v-58849e82","v-551aed44","v-01544aa3","v-03092342","v-04bdfbe1","v-0672d480","v-33cf2509","v-3583fda8","v-3738d647","v-38edaee6","v-3aa28785","v-266cbe57","v-282196f6","v-29d66f95","v-2b8b4834","v-2d4020d3","v-2ef4f972","v-30a9d211","v-325eaab0","v-3413834f","v-599e20f9","v-5b52f998","v-5d07d237","v-5ebcaad6","v-60718375","v-05e216f0","v-027865b2","v-0078a5c6","v-022d7e65","v-03e25704","v-05972fa3","v-671ae07c","v-68cfb91b","v-6a8491ba","v-6c396a59","v-1ff273ed","v-21a74c8c","v-235c252b","v-2510fdca","v-26c5d669","v-287aaf08","v-2a2f87a7","v-2be46046","v-2d9938e5","v-5323d68f","v-3296bd31","v-3a8682f9","v-71b3b66f","v-10d9f538","v-85bcb294","v-f0ec4556","v-24b7c48d","v-2bc6566a","v-7f25ca3a","v-7d70f19b","v-7bbc18fc","v-7a07405d","v-6cd750ef","v-6b227850","v-696d9fb1","v-67b8c712"]}},star:{"/":{path:"/star/",keys:["v-7bbc18fc","v-df8b6e0c","v-696d9fb1"]}},timeline:{"/":{path:"/timeline/",keys:["v-184f4da6","v-77e3440a","v-79981ca9","v-7b4cf548","v-7d01cde7","v-7eb6a686","v-ff2901b6","v-fbbf5078","v-f8559f3a","v-f4ebedfc","v-a9d6b2a8","v-a66d016a","v-2632f347","v-27e7cbe6","v-299ca485","v-2b517d24","v-2d0655c3","v-2ebb2e62","v-30700701","v-3224dfa0","v-33d9b83f","v-596455e9","v-5b192e88","v-5cce0727","v-5e82dfc6","v-6037b865","v-61ec9104","v-63a169a3","v-65564242","v-670b1ae1","v-3d41e0e3","v-3ef6b982","v-40ab9221","v-42606ac0","v-4415435f","v-45ca1bfe","v-8f5a8800","v-8bf0d6c2","v-88872584","v-851d7446","v-81b3c308","v-7e4a11ca","v-7ae0608c","v-7776af4e","v-740cfe10","v-28f7c2bc","v-63e77b20","v-60213eb0","v-20ee9d86","v-1d84ec48","v-1a1b3b0a","v-16b189cc","v-6c412aac","v-68d7796e","v-656dc830","v-6e34a17a","v-fa8ee52c","v-f72533ee","v-f3bb82b0","v-f051d172","v-ece82034","v-e97e6ef6","v-e614bdb8","v-e2ab0c7a","v-df415b3c","v-942c1fe8","v-90c26eaa","v-5f498b30","v-6b5bab47","v-6d1083e6","v-6ec55c85","v-707a3524","v-722f0dc3","v-73e3e662","v-7598bf01","v-774d97a0","v-7902703f","v-c2e5e42e","v-bf7c32f0","v-8403a022","v-8099eee4","v-7d303da6","v-79c68c68","v-6f4eb639","v-71038ed8","v-72b86777","v-746d4016","v-762218b5","v-77d6f154","v-798bc9f3","v-7b40a292","v-7cf57b31","v-baffce4a","v-b7961d0c","v-b42c6bce","v-b0c2ba90","v-ad590952","v-a9ef5814","v-a685a6d6","v-a31bf598","v-9fb2445a","v-9c48931c","v-513357c8","v-4dc9a68a","v-4a5ff54c","v-46f6440e","v-3ae21c12","v-37786ad4","v-340eb996","v-30a50858","v-2d3b571a","v-29d1a5dc","v-2667f49e","v-22fe4360","v-1f949222","v-15c05499","v-17752d38","v-192a05d7","v-1adede76","v-1c93b715","v-1e488fb4","v-1ffd6853","v-21b240f2","v-23671991","v-251bf230","v-4aa68fda","v-4c5b6879","v-4e104118","v-4fc519b7","v-5179f256","v-532ecaf5","v-54e3a394","v-56987c33","v-584d54d2","v-5a022d71","v-7f8ccb1b","v-fd7cb88c","v-fa13074e","v-f6a95610","v-f33fa4d2","v-efd5f394","v-ec6c4256","v-c15f9c8c","v-bdf5eb4e","v-ba8c3a10","v-b72288d2","v-b3b8d794","v-b04f2656","v-ace57518","v-a97bc3da","v-a612129c","v-5afcd748","v-5793260a","v-542974cc","v-50bfc38e","v-4d561250","v-49ec6112","v-4682afd4","v-4318fe96","v-3faf4d58","v-3c459c1a","v-0767cf9d","v-091ca83c","v-0ad180db","v-0c86597a","v-bfed7bf0","v-bc83cab2","v-b91a1974","v-b5b06836","v-b246b6f8","v-aedd05ba","v-ab73547c","v-a809a33e","v-a49ff200","v-0055f2c3","v-020acb62","v-03bfa401","v-05747ca0","v-0729553f","v-08de2dde","v-0a93067d","v-0c47df1c","v-0dfcb7bb","v-33875565","v-353c2e04","v-36f106a3","v-38a5df42","v-3a5ab7e1","v-3c0f9080","v-3dc4691f","v-d6cb3c78","v-d3618b3a","v-cff7d9fc","v-cc8e28be","v-c5bac642","v-c2511504","v-bee763c6","v-bb7db288","v-70687734","v-6cfec5f6","v-699514b8","v-662b637a","v-62c1b23c","v-5f5800fe","v-5bee4fc0","v-58849e82","v-551aed44","v-01544aa3","v-03092342","v-04bdfbe1","v-0672d480","v-33cf2509","v-3583fda8","v-3738d647","v-38edaee6","v-3aa28785","v-266cbe57","v-282196f6","v-29d66f95","v-2b8b4834","v-2d4020d3","v-2ef4f972","v-30a9d211","v-325eaab0","v-3413834f","v-599e20f9","v-5b52f998","v-5d07d237","v-5ebcaad6","v-60718375","v-05e216f0","v-027865b2","v-0078a5c6","v-022d7e65","v-03e25704","v-05972fa3","v-671ae07c","v-68cfb91b","v-6a8491ba","v-6c396a59","v-1ff273ed","v-21a74c8c","v-235c252b","v-2510fdca","v-26c5d669","v-287aaf08","v-2a2f87a7","v-2be46046","v-2d9938e5","v-5323d68f","v-3296bd31","v-3a8682f9","v-71b3b66f","v-10d9f538","v-85bcb294","v-df8b6e0c","v-f0ec4556","v-24b7c48d","v-2bc6566a","v-7f25ca3a","v-7d70f19b","v-7bbc18fc","v-7a07405d","v-6cd750ef","v-6b227850","v-696d9fb1","v-67b8c712"]}}},Hr=Z($k),Zc=(n="")=>{const e=un(),s=de(),t=qe();return w(()=>{var a;const o=n||((a=En().value.blog)==null?void 0:a.key)||"";if(!o)return console.warn("useBlogCategory: key not found"),{path:"/",map:{}};const p=s.getRoutes();if(!Hr.value[o])throw new Error(`useBlogCategory: key ${o} is invalid`);const l=Hr.value[o][t.value],c={path:l.path,map:{}};for(const u in l.map){const d=l.map[u];c.map[u]={path:d.path,items:[]};for(const v of d.keys){const k=p.find(({name:f})=>f===v);if(k){const f=Rt(s,k.path);c.map[u].items.push({path:f.path,info:f.meta})}}e.value.path===d.path&&(c.currentItems=c.map[u].items)}return c})},Fr=Z(qk),Sa=(n="")=>{const e=de(),s=qe();return w(()=>{var t;const a=n||((t=En().value.blog)==null?void 0:t.key)||"";if(!a)return console.warn("useBlogType: key not found"),{path:"/",items:[]};if(!Fr.value[a])throw new Error(`useBlogType: key ${n} is invalid`);const o=e.getRoutes(),p=Fr.value[a][s.value],l={path:p.path,items:[]};for(const c of p.keys){const u=o.find(({name:d})=>d===c);if(u){const d=Rt(e,u.path);l.items.push({path:d.path,info:d.meta})}}return l})};const Bk="/newblog/assets/hero-197a9d2d.jpg",nu=Symbol.for("categoryMap"),Vt=()=>{const n=fn(nu);if(!n)throw new Error("useCategoryMap() is called without provider.");return n},Hk=()=>{const n=Zc("category");ce(nu,n)},Ct=()=>{const n=ys(),e=rn();return w(()=>({...n.value.blog,...e.value.blog}))},eu=Symbol.for("tagMap"),jt=()=>{const n=fn(eu);if(!n)throw new Error("useTagMap() is called without provider.");return n},Fk=()=>{const n=Zc("tag");ce(eu,n)},zk=n=>{const e=rn();return w(()=>{const{[gn.author]:s}=n.value;return s?kt(s):s===!1?[]:kt(e.value.author,!1)})},Wk=n=>{const e=Vt();return w(()=>Ii(n.value[gn.category]).map(s=>({name:s,path:e.value.map[s].path})))},Jk=n=>{const e=jt();return w(()=>Di(n.value[gn.tag]).map(s=>({name:s,path:e.value.map[s].path})))},Uk=n=>w(()=>{const{[gn.date]:e}=n.value;return Yo(e)}),Gk=n=>{const e=Js(n,"info"),s=Ct(),t=zk(e),a=Wk(e),o=Jk(e),p=Uk(e),l=_c(),c=w(()=>({author:t.value,category:a.value,date:p.value,localizedDate:e.value[gn.localizedDate]||"",tag:o.value,isOriginal:e.value[gn.isOriginal]||!1,readingTime:e.value[gn.readingTime]||null,readingTimeLocale:e.value[gn.readingTime]&&l.value?kc(e.value[gn.readingTime],l.value):null,pageview:n.path})),u=w(()=>s.value.articleInfo);return{info:c,items:u}},su=Symbol(""),Mt=()=>{const n=fn(su);if(!n)throw new Error("useArticles() is called without provider.");return n},Kk=()=>{const n=Sa("article");ce(su,n)},tu=Symbol(""),up=()=>{const n=fn(tu);if(!n)throw new Error("useStars() is called without provider.");return n},Yk=()=>{const n=Sa("star");ce(tu,n)},au=Symbol(""),dp=()=>{const n=fn(au);if(!n)throw new Error("useTimelines() is called without provider.");return n},Xk=()=>{const n=Sa("timeline"),e=w(()=>{const s=[];return n.value.items.forEach(({info:t,path:a})=>{const o=Yo(t[gn.date]),p=o==null?void 0:o.getFullYear(),l=o?o.getMonth()+1:null,c=o==null?void 0:o.getDate();p&&l&&c&&((!s[0]||s[0].year!==p)&&s.unshift({year:p,items:[]}),s[0].items.push({date:`${l}/${c}`,info:t,path:a}))}),{...n.value,config:s.reverse()}});ce(au,e)},Qk=()=>{Kk(),Hk(),Yk(),Fk(),Xk()};var Zk=$({name:"SocialMedia",setup(){const n=Ct(),e=Ks(),s=w(()=>{const t=n.value.medias;return t?Lt(t).map(([a,o])=>({name:a,icon:Nk[a],url:o})):[]});return()=>s.value.length?i("div",{class:"vp-social-medias"},s.value.map(({name:t,icon:a,url:o})=>i("a",{class:"vp-social-media",href:o,rel:"noopener noreferrer",target:"_blank","aria-label":t,...e.value?{}:{"data-balloon-pos":"up"},innerHTML:a}))):null}}),vp=$({name:"BloggerInfo",setup(){const n=Ct(),e=ga(),s=rn(),t=Mt(),a=Vt(),o=jt(),p=dp(),l=Ot(),c=w(()=>{var k;return n.value.name||((k=kt(s.value.author)[0])==null?void 0:k.name)||e.value.title}),u=w(()=>n.value.avatar||s.value.logo),d=w(()=>s.value.blogLocales),v=w(()=>n.value.intro);return()=>{const{article:k,category:f,tag:g,timeline:y}=d.value,A=[[t.value.path,t.value.items.length,k],[a.value.path,Le(a.value.map).length,f],[o.value.path,Le(o.value.map).length,g],[p.value.path,p.value.items.length,y]];return i("div",{class:"vp-blogger-info",vocab:"https://schema.org/",typeof:"Person"},[i("div",{class:"vp-blogger",...v.value?{style:{cursor:"pointer"},"aria-label":d.value.intro,"data-balloon-pos":"down",role:"navigation",onClick:()=>l(v.value)}:{}},[u.value?i("img",{class:["vp-blogger-avatar",{round:n.value.roundAvatar}],src:jn(u.value),property:"image",alt:"Blogger Avatar"}):null,c.value?i("div",{class:"vp-blogger-name",property:"name"},c.value):null,n.value.description?i("div",{class:"vp-blogger-description",innerHTML:n.value.description}):null,v.value?i("meta",{property:"url",content:jn(v.value)}):null]),i("div",{class:"vp-blog-counts"},A.map(([E,S,b])=>i(Mn,{class:"vp-blog-count",to:E},()=>[i("div",{class:"count"},S),i("div",b)]))),i(Zk)])}}});const Eo=()=>i(on,{name:"category"},()=>i("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));Eo.displayName="CategoryIcon";const wo=()=>i(on,{name:"tag"},()=>i("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));wo.displayName="TagIcon";const mp=()=>i(on,{name:"timeline"},()=>i("path",{d:"M511.997 70.568c-243.797 0-441.429 197.633-441.429 441.435 0 243.797 197.632 441.429 441.43 441.429S953.431 755.8 953.431 512.002c0-243.796-197.637-441.434-441.435-441.434zm150.158 609.093-15.605 15.61c-8.621 8.615-22.596 8.615-31.215 0L472.197 552.126c-4.95-4.944-4.34-14.888-4.34-24.677V247.14c0-12.19 9.882-22.07 22.07-22.07h22.07c12.19 0 22.07 9.882 22.07 22.07v273.218l128.088 128.088c8.62 8.62 8.62 22.595 0 31.215zm0 0"}));mp.displayName="TimelineIcon";const ou=()=>i(on,{name:"slides"},()=>i("path",{d:"M896 170.667v426.666a85.333 85.333 0 0 1-85.333 85.334h-256v61.184l192.597 115.584-43.861 73.13-148.736-89.173v95.275h-85.334v-95.318l-148.736 89.216-43.861-73.13 192.597-115.627v-61.141h-256A85.333 85.333 0 0 1 128 597.333V170.667H85.333V85.333h853.334v85.334H896zm-682.667 0v426.666h597.334V170.667H213.333zM426.667 512h-85.334V341.333h85.334V512zm128 0h-85.334V256h85.334v256zm128 0h-85.334V384h85.334v128z"}));ou.displayName="SlideIcon";const pu=()=>i(on,{name:"sticky"},()=>[i("path",{d:"m381.3 733.8l-161.9 118c-5.9 4.5-13.2 6.6-20.1 6.6-8.7 0-17.7-3.4-24.3-10-12.2-12.2-13.9-31.3-3.5-45.2l144.5-195.5-113.6-112.9c-11.1-11.1-13.2-28.4-5.5-42 5.5-8.7 52.1-76.4 155.5-51 1.8 0.3 3.5 0.3 5.6 0.7 4.2 0.3 9 0.7 14.2 1.7 21.9 3.5 60.8-13.9 94.5-42.7 32.3-27.5 53.1-59.4 53.1-81.6 0-5.2 0-10.8-0.3-16-0.7-20.8-2.1-52.8 21.5-76.4 28.1-28.1 72.9-30.6 103.9-5.2 0.6 0.3 1 1 1.7 1.7 16.7 16.3 187.5 187.2 189.3 188.9 14.5 14.6 22.9 34.4 22.9 55.3 0 20.8-8 40.2-22.9 54.8-23.7 23.6-56 22.6-77.1 21.6-4.9 0-10.5-0.4-15.7-0.4-20.8 0-45.8 14.6-70.5 41.3-34.3 37.5-55.5 85.8-53.8 107.7 0.7 6.9 2.1 19.1 2.4 20.8 25 101.4-42.7 147.6-50.7 152.8-13.9 8.4-31.6 6.3-42.7-4.8l-112.1-112.2z"})]);pu.displayName="StickyIcon";const da=()=>i(on,{name:"article"},()=>i("path",{d:"M853.333 938.667H170.667A42.667 42.667 0 0 1 128 896V128a42.667 42.667 0 0 1 42.667-42.667h682.666A42.667 42.667 0 0 1 896 128v768a42.667 42.667 0 0 1-42.667 42.667zm-42.666-85.334V170.667H213.333v682.666h597.334zM298.667 256h170.666v170.667H298.667V256zm0 256h426.666v85.333H298.667V512zm0 170.667h426.666V768H298.667v-85.333zm256-384h170.666V384H554.667v-85.333z"}));da.displayName="ArticleIcon";const ru=()=>i(on,{name:"book"},()=>i("path",{d:"M256 853.333h426.667A85.333 85.333 0 0 0 768 768V256a85.333 85.333 0 0 0-85.333-85.333H469.333a42.667 42.667 0 0 1 0-85.334h213.334A170.667 170.667 0 0 1 853.333 256v512a170.667 170.667 0 0 1-170.666 170.667H213.333A42.667 42.667 0 0 1 170.667 896V128a42.667 42.667 0 0 1 42.666-42.667h128A42.667 42.667 0 0 1 384 128v304.256l61.653-41.088a42.667 42.667 0 0 1 47.36 0l61.654 41.045V256A42.667 42.667 0 0 1 640 256v256a42.667 42.667 0 0 1-66.347 35.499l-104.32-69.547-104.32 69.547A42.667 42.667 0 0 1 298.667 512V170.667H256v682.666z"}));ru.displayName="BookIcon";const lu=()=>i(on,{name:"link"},()=>i("path",{d:"M460.8 584.533c17.067 17.067 17.067 42.667 0 59.734-17.067 17.066-42.667 17.066-59.733 0-85.334-85.334-85.334-217.6 0-302.934L554.667 192C640 110.933 776.533 110.933 857.6 196.267c81.067 81.066 81.067 213.333 0 294.4l-68.267 64c0-34.134-4.266-68.267-17.066-102.4l21.333-21.334c51.2-46.933 55.467-128 4.267-179.2s-128-55.466-179.2-4.266c-4.267 0-4.267 4.266-4.267 4.266L465.067 401.067c-51.2 51.2-51.2 132.266-4.267 183.466m123.733-183.466C601.6 384 627.2 384 644.267 401.067c85.333 85.333 85.333 217.6 0 302.933l-153.6 149.333C405.333 934.4 268.8 934.4 187.733 849.067c-81.066-81.067-81.066-213.334 0-294.4l68.267-64c0 34.133 4.267 72.533 17.067 102.4L251.733 614.4C204.8 665.6 204.8 746.667 256 793.6c51.2 46.933 123.733 46.933 174.933 0l149.334-149.333c51.2-51.2 51.2-128 0-179.2-12.8-17.067-17.067-46.934 4.266-64z"}));lu.displayName="LinkIcon";const iu=()=>i(on,{name:"project"},()=>i("path",{d:"M987.456 425.152H864V295.296a36.48 36.48 0 0 0-36.544-36.544h-360l-134.08-128.256A9.344 9.344 0 0 0 327.04 128H36.48A36.48 36.48 0 0 0 0 164.544v676.608a36.48 36.48 0 0 0 36.544 36.544h797.76a36.672 36.672 0 0 0 33.92-22.848L1021.44 475.52a36.48 36.48 0 0 0-33.92-50.304zM82.304 210.304h215.424l136.64 130.752h347.328v84.096H198.848A36.672 36.672 0 0 0 164.928 448L82.304 652.8V210.304zM808.32 795.456H108.544l118.08-292.608h699.904L808.32 795.52z"}));iu.displayName="ProjectIcon";const cu=()=>i(on,{name:"friend"},()=>i("path",{d:"M860.16 213.333A268.373 268.373 0 0 0 512 186.027a267.52 267.52 0 0 0-348.16 404.48L428.8 855.893a118.613 118.613 0 0 0 166.4 0l264.96-265.386a267.52 267.52 0 0 0 0-377.174zM800 531.627l-264.96 264.96a32.427 32.427 0 0 1-46.08 0L224 530.347a183.04 183.04 0 0 1 0-256 182.187 182.187 0 0 1 256 0 42.667 42.667 0 0 0 60.587 0 182.187 182.187 0 0 1 256 0 183.04 183.04 0 0 1 3.413 256z"}));cu.displayName="FriendIcon";const To=()=>i(on,{name:"slide-down"},()=>i("path",{d:"M108.775 312.23c13.553 0 27.106 3.734 39.153 11.806l375.205 250.338 363.641-252.808c32.587-21.624 76.499-12.83 98.123 19.757 21.685 32.467 12.95 76.56-19.576 98.184l-402.854 278.89c-23.733 15.901-54.694 15.962-78.547.12L69.501 442.097c-32.647-21.685-41.441-65.777-19.817-98.304 13.734-20.54 36.201-31.563 59.09-31.563Z"}));To.displayName="SlideDownIcon";const uu=()=>i("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",class:"empty-icon",viewBox:"0 0 1024 1024",innerHTML:'<defs><linearGradient id="f" x1="512.342" y1="2266.13" x2="512.342" y2="666.063" gradientUnits="userSpaceOnUse"><stop offset=".919" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="g" x1="528.912" y1="774" x2="388.088" y2="612" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#e6e6e6" stop-opacity="0"/></linearGradient><linearGradient id="h" x1="213.219" y1="721.704" x2="251.313" y2="683.61" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d7d7d7"/><stop offset=".485" stop-color="#fafafa"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="i" x1="724.813" y1="821.718" x2="768.656" y2="777.876" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="a" x1="513.493" y1="714.594" x2="471.007" y2="544.188" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#999"/><stop offset="1" stop-color="#ccc"/></linearGradient><linearGradient id="b" x1="440.156" y1="564.031" x2="508.594" y2="495.594" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="l" x1="660.988" y1="754.156" x2="608.637" y2="544.188" xlink:href="#a"/><linearGradient id="m" x1="479.188" y1="774.219" x2="649.782" y2="603.625" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b3b3b3"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="n" x1="447.121" y1="774.219" x2="394.661" y2="563.813" xlink:href="#a"/><linearGradient id="o" x1="494" y1="597" x2="628" y2="463" xlink:href="#b"/><linearGradient id="d" x1="610.485" y1="604.938" x2="697.298" y2="518.125" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="p" x1="457.438" y1="619.25" x2="353.469" y2="619.25" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="q" x1="542.734" y1="674.25" x2="615.672" y2="601.313" xlink:href="#b"/><linearGradient id="c" x1="627.933" y1="358.938" x2="685.192" y2="422.531" gradientUnits="userSpaceOnUse"><stop offset=".4" stop-color="#e6e6e6" stop-opacity=".4"/><stop offset=".443" stop-color="#fff"/><stop offset=".6" stop-color="#ccc"/></linearGradient><linearGradient id="r" x1="618.547" y1="422.531" x2="681.547" y2="359.531" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="s" x1="625" y1="441.5" x2="697" y2="369.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="t" x1="627.681" y1="361.438" x2="692.257" y2="433.156" xlink:href="#c"/><linearGradient id="u" x1="561.414" y1="735.438" x2="573.149" y2="688.375" xlink:href="#d"/><linearGradient id="v" x1="405" y1="485.875" x2="440" y2="450.875" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".702"/></linearGradient><linearGradient id="w" x1="404.61" y1="486.906" x2="441.86" y2="449.656" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".495" stop-color="#ccc" stop-opacity=".702"/><stop offset=".498" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".302"/></linearGradient><radialGradient id="e" cx="329.297" cy="647.578" r="8.172" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fafafa"/><stop offset="1.2" stop-color="#e6e6e6"/></radialGradient><radialGradient id="j" cx="802.297" cy="673.578" r="8.172" xlink:href="#e"/><radialGradient id="k" cx="774.844" cy="642.75" r="5.531" xlink:href="#e"/></defs><path d="M512.33 666.07c441.828 0 800 358.18 800 800.03s-358.172 800.02-800 800.02-800-358.18-800-800.02 358.17-800.03 800-800.03z" style="fill:url(#f);fill-rule:evenodd"/><path d="m272 694 242-82 131 119-188 43z" style="fill:url(#g);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M232.391 723.534a2.4 2.4 0 0 1 2.4 2.4v17.725a2.4 2.4 0 0 1-4.8 0v-17.725a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M232.255 676.559c10.33 0 17.067 15.408 18.7 28.493 1.619 12.942-2.372 23.694-18.7 23.694-16.878 0-20.213-10.733-18.7-23.694 1.633-14.061 8.37-28.493 18.7-28.493z" style="fill:url(#h);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M745.853 826h.938a2.4 2.4 0 0 1 2.4 2.4v22.238a2.4 2.4 0 0 1-2.4 2.4h-.938a2.4 2.4 0 0 1-2.4-2.4V828.4a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M746.727 830.3c-19.438 0-23.278-9.326-21.541-20.59a34.467 34.467 0 0 1 3.289-10.369 16.628 16.628 0 0 1 0-9.112c2.889-12.327 12.059-20.911 18.356-20.911 6.56 0 15.468 9.1 18.356 20.911a14.589 14.589 0 0 1-.335 9.217 34.36 34.36 0 0 1 3.419 10.264c1.861 11.243-2.735 20.59-21.544 20.59z" style="fill:url(#i);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M328.841 654.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.109.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M328.383 653.73a6.567 6.567 0 0 0-5.2-5.027q-4.109-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#e);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M801.841 680.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.108.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M801.383 679.73a6.567 6.567 0 0 0-5.2-5.027q-4.108-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#j);fill-rule:evenodd"/><path d="M774.21 646.9a4.446 4.446 0 0 0-3.517-3.4q-2.778-.643-.023-1.383a4.443 4.443 0 0 0 3.4-3.517q.645-2.778 1.383-.023a4.443 4.443 0 0 0 3.517 3.4q2.778.645.023 1.383a4.446 4.446 0 0 0-3.4 3.517q-.645 2.78-1.383.023z" style="fill:url(#k);fill-rule:evenodd"/><path d="m385.6 714.6.158-150.658L598.9 544.174l-.158 150.658z" style="fill:url(#a);fill-rule:evenodd"/><path d="m385.474 564.031 214.763-19.383-36.171-49.067-215.559 17.634z" style="fill:url(#b);fill-rule:evenodd"/><path d="m598.744 694.832.156-150.658 71.975 59.319-.158 150.658z" style="fill:url(#l);fill-rule:evenodd"/><path d="m457.064 774.209.158-150.658 214.691-19.914-.158 150.663z" style="fill:url(#m);fill-rule:evenodd"/><path d="m384.566 714.459.158-150.659 72.5 59.75-.158 150.658z" style="fill:url(#n);fill-rule:evenodd"/><path d="M494 640s75.357-58.4 42-83-38.887 1.663-37 14 53.847 12.465 54-26c.2-49.979 75-125 75-125" style="fill:none;stroke-width:3px;stroke-dasharray:12 6;stroke:url(#o);fill-rule:evenodd"/><path d="m670.275 604.939-72.041-59.9 38.476-26.909 72.86 58.159z" style="fill:url(#d);fill-rule:evenodd"/><path d="m425.5 674.383-72.042-59.9 31.109-50.347 72.86 58.16z" style="fill:url(#p);fill-rule:evenodd"/><path d="m487.918 674.235 214.482-22.57-31.1-50.346-215.309 20.833z" style="fill:url(#q);fill-rule:evenodd"/><path style="fill:#fff;fill-rule:evenodd" d="m697.363 358.927-69.58 62.511-12.035 1.082z"/><path d="m697.363 358.927-69.58 62.511-12.035 1.082z" style="fill:url(#c);fill-rule:evenodd"/><path d="M615.748 422.52 604 413l92.089-53.46" style="fill:url(#r);fill-rule:evenodd"/><path d="m625 432 12 18 60-89" style="fill:url(#s);fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:#fff;fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:url(#t);fill-rule:evenodd"/><path d="m494.814 735.44 21.293-2.1v-6.613l-13.4 1.319v-6.965l10.977-1.08v-6.613l-10.977 1.08v-6.084l12.917-1.27v-6.525l-20.808 2.047v32.8zM521 732.863l7.054-.694v-11.241a106.361 106.361 0 0 0-1.014-11.274l.176-.017 2.645 7.586 4.453 11.553 4.32-.425 4.408-12.424 2.733-8.116.177-.018a111.811 111.811 0 0 0-1.014 11.474v11.241l7.185-.707V697l-8.552.841-5.025 14.646c-.618 1.956-1.147 4.08-1.808 6.173l-.22.022c-.617-1.968-1.146-3.987-1.808-5.818l-5.2-13.639-8.508.837v32.8zm37.213-3.661 7.891-.776v-10.889l3.835-.377c6.922-.681 12.961-4.714 12.961-12.517 0-8.111-5.951-10.082-13.181-9.371l-11.504 1.128v32.8zm7.891-17.881v-9.478l3.218-.316c3.792-.373 5.908.565 5.908 3.871 0 3.218-1.852 5.208-5.687 5.585zM594 725.682l7.891-.777v-26.274l8.905-.876v-6.524l-25.657 2.524v6.524l8.861-.871v26.274zm27.991-2.754 7.847-.772v-11.594l9.919-22.18-8.244.811-2.733 7.542c-.925 2.56-1.807 4.939-2.733 7.587l-.176.018c-.926-2.466-1.764-4.676-2.645-7.058l-2.734-7-8.375.824 9.874 20.233v11.594z" style="fill:url(#u);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M408.938 457.309a17.5 17.5 0 0 0 21.374 26.725 17.5 17.5 0 1 1-16.306-30.955 17.442 17.442 0 0 0-5.068 4.23z"/><circle cx="422.5" cy="468.375" r="17.5" style="fill:url(#v)"/><path fill="#ccc" fill-rule="evenodd" d="M391.76 451.5c-2.358 4.419 9.827 15.52 27.215 24.8 15.131 8.071 29.212 12.1 34.166 10.093-4.191 2.772-18.943-1.24-34.86-9.73-17.388-9.275-29.573-20.376-27.215-24.8a2.96 2.96 0 0 1 1.585-1.3 2.606 2.606 0 0 0-.891.937z"/><path d="M418.975 476.29c-17.388-9.275-29.573-20.376-27.215-24.8s18.363-.484 35.751 8.791 29.572 20.376 27.215 24.8-18.364.483-35.751-8.791zm31.634 5.732c1.824-3.42-8.789-12.642-23.7-20.6s-28.486-11.633-30.31-8.213 8.789 12.642 23.7 20.6 28.486 11.633 30.31 8.213zm-36.645-29.008-2.775 1.452.032 1.751 28.637 14.183.266-4.559z" style="fill:url(#w);fill-rule:evenodd"/><g class="people"><path style="fill:#f8cfad;fill-rule:evenodd" d="m612.131 676.5 1.362 3.532 3.255-2.324-1.361-3.532zM629.131 665.5l1.362 3.532 3.255-2.324-1.361-3.532z"/><path style="fill:#141a33;fill-rule:evenodd" d="m617.764 678.184-3.162-.078a11.028 11.028 0 0 0-1.034 3.454c-.258 2.006-1.177 5-.449 5.367 1.5 2.659 4.118-.215 4.118-.215s2.187-2.848 1.925-5.265c-.106-.973-1.181-1.869-1.398-3.263zM633.781 665.855l3.019.945a11.008 11.008 0 0 1-.137 3.6c-.4 1.981-.179 4.166-.986 4.277-2.283 2.03-3.827-1.533-3.827-1.533s-1.473-2.456-.444-4.659c.412-.88 1.718-1.385 2.375-2.63z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M599.935 592.534s10.293 9.761 11.95 7.564 3.536-3.463-6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M611.3 596.361c1.674-1.105 11.5 7.048 14.5 11.774s-12.705-4.36-14.632-6.776-1.54-3.893.132-4.998z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M621.815 607.988s1.809 2.549 2.433 1.756 2.475-1.064 2.449-1.138.1-.819 1.288-2.331-3.8-3.632-5.81-.494a2.556 2.556 0 0 0-.36 2.207z"/><path fill="#232c57" fill-rule="evenodd" d="M598 617s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s12.666 11.836 16 19c0 0-4.753-1.629-4 2 0 0-18.132-14.647-19-19s-9.148-18.716-12-31z"/><path d="M589 622s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s4.666 17.836 8 25c0 0-4.753-1.629-4 2 0 0-10.132-20.647-11-25s-9.148-18.716-12-31z" style="fill:#292966;fill-rule:evenodd"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M585.626 597.7s-10.292 9.761-11.95 7.563-3.536-3.463 6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M574.259 601.529c-1.675-1.105-11.5 7.049-14.5 11.774s12.7-4.36 14.631-6.775 1.543-3.894-.131-4.999z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M591.715 577.752s-.606 1.681 1.48 3.716-3.615 5.307-4.645 2.85-.48-2.716-.48-2.716z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M583.527 574.123c-.839 1.043.491 3.873 1.453 5.449s2.749 2.833 3.364 2.428 4.088-2.657 4-4-.228-3.4-.228-3.4 2.562-1.641 2.154-2.916-2.916-.154-2.916-.154a15.853 15.853 0 0 0-.227-2.224c-.189-.929-6.887-1.445-7.827 2.6s.558 1.805.227 2.217z"/><path fill="#232c57" fill-rule="evenodd" d="M584.227 567.758c2.1-.885 7.2-3.684 10.125.318s.842 4.385.989 5.294-1.894 5.69-1.341 6.63-3.865.8-4.657-1.179-2.844-.539-2.227-1.224-1.3-4.456-2.916-2.154a9.252 9.252 0 0 0 .309-1.38c-.115.192.259-3.257-.673-1.32s-2.1 1.037-3.069.762-1.8-1.118-1.071-1.689c.023-.016 2.436-3.172 4.531-4.058z"/><path d="M589 585c-2.584-.47-10.055.362-13 13 0 0 1.9 3.349 5 4s6 21 6 21 24.016 11.06 27-3c-.07-13.826-8-21-8-21s5.829-3.2 5-6-8.016-10.153-11-10-6 0-6 0-2.416 2.47-5 2z" style="fill:#f6bb07;fill-rule:evenodd"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M563.284 612.581s-.986 2.965-1.814 2.389-2.678-.3-2.675-.374-.333-.755-1.912-1.854 2.577-4.583 5.414-2.167a2.551 2.551 0 0 1 .987 2.006z"/></g>'});uu.displayName="EmptyIcon";const du=()=>i(on,{name:"lock"},()=>i("path",{d:"M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z"}));du.displayName="LockIcon";var n_=$({name:"ArticleItem",props:{info:{type:Object,required:!0},path:{type:String,required:!0}},slots:Object,setup(n,{slots:e}){const s=Js(n,"info"),{info:t,items:a}=Gk(n);return()=>{var o,p,l;const{[gn.title]:c,[gn.type]:u,[gn.isEncrypted]:d=!1,[gn.cover]:v,[gn.excerpt]:k,[gn.sticky]:f}=s.value,g=t.value;return i("div",{class:"vp-article-wrapper"},i("article",{class:"vp-article-item",vocab:"https://schema.org/",typeof:"Article"},[((o=e.cover)==null?void 0:o.call(e,{cover:v}))||(v?[i("img",{class:"vp-article-cover",src:jn(v)}),i("meta",{property:"image",content:jn(v)})]:[]),f?i(pu):null,i(Mn,{to:n.path},()=>{var y;return((y=e.title)==null?void 0:y.call(e,{title:c,isEncrypted:d,type:u}))||i("header",{class:"vp-article-title"},[d?i(du):null,u===bc.slide?i(ou):null,i("span",{property:"headline"},c)])}),((p=e.excerpt)==null?void 0:p.call(e,{excerpt:k}))||(k?i("div",{class:"vp-article-excerpt",innerHTML:k}):null),i("hr",{class:"vp-article-hr"}),((l=e.info)==null?void 0:l.call(e,{info:g}))||i(Kc,{info:g,...a.value?{items:a.value}:{}})]))}}}),e_=$({name:"Pagination",props:{total:{type:Number,default:10},perPage:{type:Number,default:10},current:{type:Number,default:1}},emits:["updateCurrentPage"],setup(n,{emit:e}){let s;const t=rn(),a=Z(""),o=w(()=>t.value.paginationLocales),p=w(()=>Math.ceil(n.total/n.perPage)),l=w(()=>!!p.value&&p.value!==1),c=w(()=>p.value<7?!1:n.current>4),u=w(()=>p.value<7?!1:n.current<p.value-3),d=w(()=>{const{current:f}=n;let g=1,y=p.value;const A=[];p.value>=7&&(f<=4&&f<p.value-3?(g=1,y=5):f>4&&f>=p.value-3?(y=p.value,g=p.value-4):p.value>7&&(g=f-2,y=f+2));for(let E=g;E<=y;E++)A.push(E);return A}),v=f=>e("updateCurrentPage",f),k=f=>{const g=parseInt(f);g<=p.value&&g>0?v(g):s.pop(`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M64 512a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#FA5151"/><path d="m557.3 512 113.1-113.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L512 466.7 398.9 353.6c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 512 353.6 625.1c-12.5 12.5-12.5 32.8 0 45.3 6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L512 557.3l113.1 113.1c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L557.3 512z" fill="#FFF"/></svg>${o.value.errorText.replace(/\$page/g,p.value.toString())}`)};return xn(()=>{s=new Pm}),()=>i("div",{class:"vp-pagination"},l.value?i("div",{class:"vp-pagination-list"},[i("div",{class:"vp-pagination-number "},[n.current>1?i("div",{class:"prev",role:"navigation",unselectable:"on",onClick:()=>v(n.current-1)},o.value.prev):null,c.value?[i("div",{role:"navigation",onClick:()=>v(1)},1),i("div",{class:"ellipsis"},"...")]:null,d.value.map(f=>i("div",{key:f,class:{active:n.current===f},role:"navigation",onClick:()=>v(f)},f)),u.value?[i("div",{class:"ellipsis"},"..."),i("div",{role:"navigation",onClick:()=>v(p.value)},p.value)]:null,n.current<p.value?i("div",{class:"next",role:"navigation",unselectable:"on",onClick:()=>v(n.current+1)},o.value.next):null]),i("div",{class:"vp-pagination-nav"},[i("label",{for:"navigation-text"},`${o.value.navigate}: `),i("input",{id:"navigation-text",value:a.value,onInput:({target:f})=>{a.value=f.value},onKeydown:f=>{f.key==="Enter"&&(f.preventDefault(),k(a.value))}}),i("button",{class:"vp-pagination-button",role:"navigation",title:o.value.action,onClick:()=>k(a.value)},o.value.action)])]):[])}}),fp=$({name:"ArticleList",props:{items:{type:Array,default:()=>[]}},setup(n){const e=ge(),s=de(),t=Ct(),a=Z(1),o=w(()=>t.value.articlePerPage||10),p=w(()=>n.items.slice((a.value-1)*o.value,a.value*o.value)),l=c=>{a.value=c;const u={...e.query};u.page===c.toString()||c===1&&!u.page||(c===1?delete u.page:u.page=c.toString(),s.push({path:e.path,query:u}))};return xn(()=>{const{page:c}=e.query;l(c?Number(c):1),r(()=>import("./pageview-e97593a9.js"),[]).then(({updatePageview:u})=>{u()}),cn(a,()=>{const u=document.querySelector("#article-list").getBoundingClientRect().top+window.scrollY;setTimeout(()=>{window.scrollTo(0,u)},100)}),cn(()=>e.query,({page:u})=>{l(u?Number(u):1)})}),()=>i("div",{id:"article-list",class:"vp-article-list"},p.value.length?[...p.value.map(({info:c,path:u},d)=>i(mn,{appear:!0,delay:d*.04},()=>i(n_,{key:u,info:c,path:u}))),i(e_,{current:a.value,perPage:o.value,total:n.items.length,onUpdateCurrentPage:l})]:i(uu))}}),kp=$({name:"CategoryList",setup(){const n=un(),e=Vt();return()=>i("ul",{class:"vp-category-list"},Lt(e.value.map).map(([s,{path:t,items:a}])=>i("li",{class:["vp-category",`vp-category${Ea(s,9)}`,{active:t===n.value.path}]},i(Mn,{to:t},()=>[s,i("span",{class:"count"},a.length)]))))}}),_p=$({name:"TagList",setup(){const n=En(),e=jt(),s=t=>{var a;return t===((a=n.value.blog)==null?void 0:a.name)};return()=>i("ul",{class:"tag-list-wrapper"},Lt(e.value.map).map(([t,{path:a,items:o}])=>i("li",{class:["tag",`tag${Ea(t,9)}`,{active:s(t)}]},i(Mn,{to:a},()=>[t,i("span",{class:"tag-num"},o.length)]))))}}),s_=$({name:"TimelineList",setup(){const n=rn(),e=dp(),s=Ot(),t=w(()=>n.value.blogLocales.timeline);return()=>i("div",{class:"timeline-list-wrapper"},[i("div",{class:"timeline-list-title",onClick:()=>s(e.value.path)},[i(mp),i("span",{class:"num"},e.value.items.length),t.value]),i("hr"),i("div",{class:"timeline-content"},i("ul",{class:"timeline-list"},e.value.config.map(({year:a,items:o},p)=>i(mn,{appear:!0,delay:.08*(p+1)},()=>i("li",[i("h3",{class:"timeline-year"},a),i("ul",{class:"timeline-year-wrapper"},o.map(({date:l,info:c,path:u})=>i("li",{class:"timeline-item"},[i("span",{class:"timeline-date"},l),i(Mn,{class:"timeline-title",to:u},()=>c[gn.title])])))])))))])}}),vu=$({name:"InfoList",setup(){const n=rn(),e=Mt(),s=Vt(),t=w(()=>Le(s.value.map).length),a=up(),o=jt(),p=w(()=>Le(o.value.map).length),l=Ot(),c=Z("article"),u=w(()=>n.value.blogLocales),d=[["article",da],["category",Eo],["tag",wo],["timeline",mp]];return()=>i("div",{class:"vp-blog-infos"},[i("div",{class:"vp-blog-type-switcher"},d.map(([v,k])=>i("button",{type:"button",class:"vp-blog-type-button",onClick:()=>{c.value=v}},i("div",{class:["icon-wrapper",{active:c.value===v}],"aria-label":u.value[v],"data-balloon-pos":"up"},i(k))))),i(mn,()=>c.value==="article"?i("div",{class:"vp-sticky-article-wrapper"},[i("div",{class:"title",onClick:()=>l(e.value.path)},[i(da),i("span",{class:"num"},e.value.items.length),u.value.article]),i("hr"),i("ul",{class:"vp-sticky-articles"},a.value.items.map(({info:v,path:k},f)=>i(mn,{appear:!0,delay:.08*(f+1)},()=>i("li",{class:"vp-sticky-article"},i(Mn,{to:k},()=>v[gn.title])))))]):c.value==="category"?i("div",{class:"vp-category-wrapper"},[t.value?i("div",{class:"title",onClick:()=>l(s.value.path)},[i(Eo),i("span",{class:"num"},t.value),u.value.category]):null,i("hr"),i(mn,{delay:.04},()=>i(kp))]):c.value==="tag"?i("div",{class:"vp-tag-wrapper"},[p.value?i("div",{class:"title",onClick:()=>l(o.value.path)},[i(wo),i("span",{class:"num"},p.value),u.value.tag]):null,i("hr"),i(mn,{delay:.04},()=>i(_p))]):i(mn,()=>i(s_)))])}}),Aa=$({name:"BlogWrapper",slots:Object,setup(n,{slots:e}){const{isMobile:s}=It();return()=>[i(cp),i(lp,{noSidebar:!0,noToc:!0},{default:()=>e.default(),navScreenBottom:()=>i(vp),...s.value?{sidebar:()=>i(vu)}:{}})]}});const mu=()=>i("aside",{class:"vp-blog-info-wrapper"},[i(mn,()=>i(vp)),i(mn,{delay:.04},()=>i(vu))]);mu.displayName="InfoPanel";var La=mu,t_=$({name:"BlogPage",components:{CategoryList:kp,TagList:_p},setup(){const n=un(),e=En(),s=Vt(),t=jt(),a=w(()=>e.value.blog||{}),o=w(()=>{const{key:l=""}=a.value;return l==="category"?"CategoryList":l==="tag"?"TagList":null}),p=w(()=>{const{name:l="",key:c=""}=a.value;return c==="category"?l?s.value.map[l].items:[]:c==="tag"?l?t.value.map[l].items:[]:[]});return()=>i(Aa,()=>i("div",{class:"vp-page vp-blog"},i("div",{class:"blog-page-wrapper"},[i("main",{class:"vp-blog-main",id:"main-content"},[i(mn,()=>o.value?i(se(o.value)):null),a.value.name?i(mn,{appear:!0,delay:.24},()=>i(fp,{key:n.value.path,items:p.value})):null]),i(mn,{delay:.16},()=>i(La))])))}}),a_=$({name:"BlogHero",slots:Object,setup(n,{slots:e}){const s=_m(),t=En(),a=be(),o=w(()=>t.value.heroFullScreen??!1),p=w(()=>{const{heroText:c,heroImage:u,heroImageDark:d,heroAlt:v,heroImageStyle:k,tagline:f=null}=t.value;return{text:c===!1?null:c||s.value,image:u?jn(u):null,imageDark:d?jn(d):null,heroStyle:k,alt:v||"hero image",tagline:f,isFullScreen:o.value}}),l=w(()=>{const{bgImage:c,bgImageStyle:u}=t.value;return{image:pn(c)?jn(c):c===!1?null:Bk,bgStyle:u,isFullScreen:o.value}});return()=>{var c,u;return t.value.hero===!1?null:i("div",{ref:a,class:["vp-blog-hero",{fullscreen:o.value,"no-bg":!l.value.image}]},[((c=e.heroBg)==null?void 0:c.call(e,l.value))||(l.value.image?i("div",{class:"vp-blog-mask",style:[{background:`url(${l.value.image}) center/cover no-repeat`},l.value.bgStyle]}):null),((u=e.heroInfo)==null?void 0:u.call(e,p.value))||[i(mn,{appear:!0,type:"group",delay:.04},()=>[p.value.image?i("img",{key:"light",class:["vp-blog-hero-image",{light:p.value.imageDark}],style:p.value.heroStyle,src:p.value.image,alt:p.value.alt}):null,p.value.imageDark?i("img",{key:"dark",class:"vp-blog-hero-image dark",style:p.value.heroStyle,src:p.value.imageDark,alt:p.value.alt}):null]),i(mn,{appear:!0,delay:.08},()=>p.value.text?i("h1",{class:"vp-blog-hero-title"},p.value.text):null),i(mn,{appear:!0,delay:.12},()=>p.value.tagline?i("p",{class:"vp-blog-hero-description",innerHTML:p.value.tagline}):null)],p.value.isFullScreen?i("button",{type:"button",class:"slide-down-button",onClick:()=>{window.scrollTo({top:a.value.clientHeight,behavior:"smooth"})}},[i(To),i(To)]):null])}}});const o_=["link","article","book","project","friend"];var p_=$({name:"ProjectPanel",components:{ArticleIcon:da,BookIcon:ru,FriendIcon:cu,LinkIcon:lu,ProjectIcon:iu},setup(){const n=En(),e=Ks(),s=Ot(),t=(a="",o="icon")=>o_.includes(a)?i(se(`${a}-icon`)):bs(a)?i("img",{class:"vp-project-image",src:a,alt:o}):wa(a)?i("img",{class:"vp-project-image",src:jn(a),alt:o}):i(te,{icon:a});return()=>{var a;return(a=n.value.projects)!=null&&a.length?i("div",{class:"vp-project-panel"},n.value.projects.map(({icon:o,link:p,name:l,desc:c},u)=>i("div",{class:["vp-project-card",{[`project${u%9}`]:!e.value}],onClick:()=>s(p)},[t(o,l),i("div",{class:"vp-project-name"},l),i("div",{class:"vp-project-desc"},c)]))):null}}}),r_=$({name:"BlogHome",setup(){const n=Mt();return()=>i("div",{class:"vp-page vp-blog"},[i(a_),i("div",{class:"blog-page-wrapper"},[i("main",{class:"vp-blog-home",id:"main-content"},[i(mn,{appear:!0,delay:.16},()=>i(p_)),i(mn,{appear:!0,delay:.24},()=>i(fp,{items:n.value.items}))]),i(mn,{appear:!0,delay:.16},()=>i(La))]),i(mn,{appear:!0,delay:.28},()=>i(ip))])}}),l_=$({name:"BlogHome",setup(){return()=>i(Aa,()=>i(r_))}}),fu=$({name:"ArticleType",setup(){const n=un(),e=qe(),s=rn(),t=Mt(),a=up(),o=w(()=>{const p=s.value.blogLocales;return[{text:p.all,path:t.value.path},{text:p.star,path:a.value.path},...[].map(({key:l,path:c})=>({text:p[l],path:c.replace(/^\//,e.value)}))]});return()=>i("ul",{class:"vp-article-type-wrapper"},o.value.map(p=>i("li",{class:["vp-article-type",{active:p.path===n.value.path}]},i(Mn,{to:p.path},()=>p.text))))}}),i_=$({name:"BlogPage",setup(){const n=Sa(),e=En(),s=un(),t=Mt(),a=up(),o=w(()=>{const{key:p="",type:l}=e.value.blog||{};return p==="star"?a.value.items:l==="type"&&p?n.value.items:t.value.items});return()=>i(Aa,()=>i("div",{class:"vp-page vp-blog"},i("div",{class:"blog-page-wrapper"},[i("main",{class:"vp-blog-main",id:"main-content"},[i(mn,()=>i(fu)),i(mn,{appear:!0,delay:.24},()=>i(fp,{key:s.value.path,items:o.value}))]),i(mn,{delay:.16},()=>i(La))])))}}),c_=$({name:"TimelineItems",setup(){const n=Ct(),e=rn(),s=dp(),t=w(()=>n.value.timeline||e.value.blogLocales.timelineTitle),a=w(()=>s.value.config.map(({year:o})=>({title:o.toString(),level:2,slug:o.toString(),children:[]})));return()=>i("div",{class:"timeline-wrapper"},i("ul",{class:"timeline-content"},[i(mn,()=>i("li",{class:"motto"},t.value)),i(Yc,{items:a.value}),s.value.config.map(({year:o,items:p},l)=>i(mn,{appear:!0,delay:.08*(l+1),type:"group"},()=>[i("h3",{key:"title",id:o,class:"timeline-year-title"},i("span",o)),i("li",{key:"content",class:"timeline-year-list"},[i("ul",{class:"timeline-year-wrapper"},p.map(({date:c,info:u,path:d})=>i("li",{class:"timeline-item"},[i("span",{class:"timeline-date"},c),i(Mn,{class:"timeline-title",to:d},()=>u[gn.title])])))])]))]))}}),u_=$({name:"Timeline",components:{ArticleType:fu,CategoryList:kp,TagList:_p},setup(){return()=>i(Aa,()=>i("div",{class:"vp-page vp-blog"},i("div",{class:"blog-page-wrapper"},[i("main",{class:"vp-blog-main",id:"main-content"},[i(mn,{appear:!0,delay:.24},()=>i(c_))]),i(mn,{delay:.16},()=>i(La))])))}});w1(te);const d_=ae({enhance:({app:n,router:e})=>{const{scrollBehavior:s}=e.options;e.options.scrollBehavior=async(...t)=>(await Xc().wait(),s(...t)),Mf(n),n.component("BloggerInfo",vp)},setup:()=>{Nf(),Hf(),Qk()},layouts:{Layout:Ck,NotFound:Mk,BlogCategory:t_,BlogHome:l_,BlogType:i_,Timeline:u_}}),v_=ae({setup(){xn(()=>{console.log(String.raw`

__          __  _                            _                            _     _             _ 
\ \        / / | |                          | |                          | |   | |           | |
 \ \  /\  / /__| | ___ ___  _ __ ___   ___  | |_ ___    _ __ ___  _   _  | |__ | | ___   __ _| |
  \ \/  \/ / _ \ |/ __/ _ \| '_ ${"`"} _ \ / _ \ | __/ _ \  | '_ ${"`"} _ \| | | | | '_ \| |/ _ \ / _${"`"} | |
   \  /\  /  __/ | (_| (_) | | | | | |  __/ | || (_) | | | | | | | |_| | | |_) | | (_) | (_| |_|
    \/  \/ \___|_|\___\___/|_| |_| |_|\___|  \__\___/  |_| |_| |_|\__, | |_.__/|_|\___/ \__, (_)
                                                                   __/ |                 __/ |  
                                                                  |___/                 |___/   

`)})}}),Yt=[Em,m0,E1,A1,P1,V1,$1,Q1,of,pf,_f,xf,d_,v_],m_=[["v-8daa1a0e","/",{y:"h",t:"",i:"home"},["/index.html","/README.md"]],["v-184f4da6","/intro.html",{d:173312745e4,v:"/assets/images/cover3.jpg",e:`<h1> 介绍页</h1>
<p>欢迎来到我的博客</p>
`,r:{minutes:.05,words:16},y:"a",t:"介绍页",i:"circle-info"},["/intro","/intro.md"]],["v-69693975","/apps/AppNotes.html",{y:"p",t:"工具笔记",i:"plugin",O:4},["/apps/AppNotes","/apps/AppNotes.md"]],["v-1735a0be","/apps/Applist.html",{y:"p",t:"必备应用",i:"list",O:1},["/apps/Applist","/apps/Applist.md"]],["v-d967ed6c","/apps/ChatGPT.html",{y:"p",t:"ChatGPT",i:"creative",O:2},["/apps/ChatGPT","/apps/ChatGPT.md"]],["v-5c29014a","/apps/Chrome.html",{y:"p",t:"Chrome 扩展",i:"chrome",O:5},["/apps/Chrome","/apps/Chrome.md"]],["v-1d7dd2b7","/apps/design.html",{y:"p",t:"平面设计",i:"pic",O:3},["/apps/design","/apps/design.md"]],["v-1c7fca9e","/deploy/Cloudflare.html",{y:"p",t:"Cloudflare",i:"proxy",O:4},["/deploy/Cloudflare","/deploy/Cloudflare.md"]],["v-2b70157f","/deploy/DNS.html",{y:"p",t:"域名 DNS 托管",i:"sitemap",O:5},["/deploy/DNS","/deploy/DNS.md"]],["v-bc154f32","/deploy/GitHub.html",{y:"p",t:"GitHub",i:"github",O:3},["/deploy/GitHub","/deploy/GitHub.md"]],["v-7c5f209c","/deploy/Static.html",{y:"p",t:"静态部署",i:"generic",O:1},["/deploy/Static","/deploy/Static.md"]],["v-39dc98a2","/deploy/VPS.html",{y:"p",t:"服务器 VPS",i:"IO",O:2},["/deploy/VPS","/deploy/VPS.md"]],["v-2bc6566a","/posts/cherry.html",{d:16416864e5,l:"2022年1月9日",c:["樱桃"],g:["红","小","圆"],e:`<h1> 樱桃</h1>
<h2> 标题 2</h2>
<p>这里是内容。</p>
<h3> 标题 3</h3>
<p>这里是内容。</p>
`,r:{minutes:.11,words:33},y:"a",t:"樱桃",i:"pen-to-square"},["/posts/cherry","/posts/cherry.md"]],["v-24b7c48d","/posts/dragonfruit.html",{d:16417728e5,l:"2022年1月10日",c:["火龙果","水果"],g:["红","大"],e:`<h1> 火龙果</h1>
<h2> 标题 2</h2>
<p>这里是内容。</p>
<h3> 标题 3</h3>
<p>这里是内容。</p>
`,r:{minutes:.12,words:36},y:"a",t:"火龙果",i:"pen-to-square"},["/posts/dragonfruit","/posts/dragonfruit.md"]],["v-f0ec4556","/posts/strawberry.html",{d:16418592e5,l:"2022年1月11日",c:["水果","草莓"],g:["红","小"],e:`<h1> 草莓</h1>
<h2> 标题 2</h2>
<p>这里是内容。</p>
<h3> 标题 3</h3>
<p>这里是内容。</p>
`,r:{minutes:.11,words:34},y:"a",t:"草莓",i:"pen-to-square"},["/posts/strawberry","/posts/strawberry.md"]],["v-df8b6e0c","/posts/tomato.html",{d:16419456e5,l:"2022年1月12日",c:["蔬菜"],g:["红","圆"],u:!0,v:"/assets/images/cover2.jpg",e:`<h1> 番茄</h1>
<h2> 标题 2</h2>
<p>这里是内容。</p>
<h3> 标题 3</h3>
<p>这里是内容。</p>
`,r:{minutes:.13,words:38},y:"a",t:"番茄",i:"pen-to-square"},["/posts/tomato","/posts/tomato.md"]],["v-00f6d5f1","/web/Comments.html",{y:"p",t:"评论插件",i:"comment",O:3},["/web/Comments","/web/Comments.md"]],["v-3b0b9f28","/web/VuePress.html",{y:"p",t:"VuePress",i:"vue",O:1},["/web/VuePress","/web/VuePress.md"]],["v-3cdca328","/web/docsify.html",{y:"p",t:"docsify",i:"edit",O:2},["/web/docsify","/web/docsify.md"]],["v-77e3440a","/back_end/linux/01.html",{d:173312745e4,e:`<h1> 01 【入门篇-介绍和安装】</h1>
<h2> 1.Linux课程介绍</h2>
<h3> 1.1 学习方向</h3>
<ul>
<li>linux运维工程师： 维护linux的服务器（一般大型企业）</li>
<li>linux嵌入式工程师： linux做驱动开发，或者linux的嵌入式</li>
<li>linux下开发项目
<img src="https://i0.hdslb.com/bfs/album/08c3b1b814156e29bf4e53e0b59f4961a9f0bc41.jpg" alt="学习方向" loading="lazy"></li>
</ul>
<h3> 1.2 应用领域</h3>`,r:{minutes:6.04,words:1812},y:"a",t:"01 【入门篇-介绍和安装】"},["/back_end/linux/01","/back_end/linux/01.md"]],["v-79981ca9","/back_end/linux/02.html",{d:173312745e4,e:`<h1> 02 【基础篇-vim编辑器 网络配置 远程登录】</h1>
<h2> 1.vi和vim编辑器</h2>
<h3> 1.1 vi和vim的基本介绍</h3>
<ul>
<li>所有Linux系统都会内置vi文本编辑器</li>
<li>vim是vi的升级版，可以主动以字体颜色分辨语法的正确性，代码补完和编译，错误跳转等功能。</li>
</ul>
<figure><img src="https://i0.hdslb.com/bfs/album/a0196d78f8e7e4af8150fc199185b84c90fc644a.png" alt="image-20220815123840409" tabindex="0" loading="lazy"><figcaption>image-20220815123840409</figcaption></figure>`,r:{minutes:23.25,words:6974},y:"a",t:"02 【基础篇-vim编辑器 网络配置 远程登录】"},["/back_end/linux/02","/back_end/linux/02.md"]],["v-7b4cf548","/back_end/linux/03.html",{d:173312745e4,e:`<h1> 03 【基础篇-系统管理】</h1>
<h2> 1.Linux 中的进程和服务</h2>
<p>计算机中，一个正在执行的程序或命令，被叫做“进程”（process）。</p>
<p>启动之后一只存在、常驻内存的进程，一般被称作“服务”（service）。</p>
<blockquote>
<p>详细操作后面说明</p>
</blockquote>
<h2> 2.systemctl 服务管理</h2>
<blockquote>
<p>service 服务管理（CentOS 6 版本-了解）</p>
<p>systemctl （CentOS 7 版本-重点掌握）</p>
</blockquote>`,r:{minutes:10.21,words:3063},y:"a",t:"03 【基础篇-系统管理】"},["/back_end/linux/03","/back_end/linux/03.md"]],["v-7d01cde7","/back_end/linux/04.html",{d:173312745e4,e:`<h1> 04 【实操篇-帮助命令 文件目录管理基础知识】</h1>
<h2> 1.帮助命令</h2>
<p>通常linux命令都十分简单，但是有些还是有些复杂度的。比如<code>find</code>，<code>ps</code>这种命令，如果要照顾到所有的场合，可能需要非常巨大的篇幅。但是，万一用到这种偏门的场合怎么办？</p>
<p>全面了解一下是非常有必要的，以便在使用的时候能够唤起记忆中最浅显的印象。然后剩下的，就可以交给类似于<code>man </code>的这种命令了。Linux上的每一个命令，都会有配套的帮助文件，这远比网络上那些转来转去的信息，正确的多。</p>
<p>正式介绍一下下面的两个命令：</p>`,r:{minutes:13.14,words:3942},y:"a",t:"04 【实操篇-帮助命令 文件目录管理基础知识】"},["/back_end/linux/04","/back_end/linux/04.md"]],["v-7eb6a686","/back_end/linux/05.html",{d:173312745e4,e:`<h1> 05【实操篇-文件目录类命令】</h1>
<h2> 1.pwd 显示当前工作目录的绝对路径</h2>
<blockquote>
<p>pwd:print working directory 打印工作目录</p>
</blockquote>
<p>到现在为止，我们还不知道自己在系统的什么地方。在浏览器上，我们能够通过导航栏上的url，了解到自己在互联网上的具体坐标。相似的功能，是由<code>pwd</code>命令提供的，它能够输出当前的工作目录。</p>
<p><code>pwd</code>命令是非常非常常用的命令，尤其是在一些<code>命令提示符</code>设置不太友好的机器上。另外，它也经常用在shell脚本中，用来判断当前的运行目录是否符合需求。</p>`,r:{minutes:20.35,words:6106},y:"a",t:"05【实操篇-文件目录类命令】"},["/back_end/linux/05","/back_end/linux/05.md"]],["v-ff2901b6","/back_end/linux/06.html",{d:173312745e4,e:`<h1> 06 【实操篇-时间日期类 用户和用户组管理】</h1>
<h2> 1.时间日期类</h2>
<h3> 1.1 显示当前日期</h3>
<ul>
<li>基本语法</li>
</ul>
<ol>
<li><code>date</code> (功能描述:显示当前时间)</li>
<li><code>date +%Y</code>(功能描述:显示当前年份)</li>
<li><code>date +%m</code>(功能描述:显示当前月份)</li>
<li><code>date +%d</code> (功能描述:显示当前是哪一天)</li>
<li><code>date "+%Y-%m-%d %H:%M:%S"</code> (功能描述:显示年月日时分秒)</li>
<li><code>date +%s</code> (功能描述:显示当前日期时间戳)</li>
</ol>`,r:{minutes:33.59,words:10076},y:"a",t:"06 【实操篇-时间日期类 用户和用户组管理】"},["/back_end/linux/06","/back_end/linux/06.md"]],["v-fbbf5078","/back_end/linux/07.html",{d:173312745e4,e:`<h1> 07 【实操篇-文件权限和搜索查找类命令】</h1>
<h2> 1.文件权限类</h2>
<h3> 1.1 权限管理的重要性</h3>
<p>和 Windows 系统不同，Linux 系统为每个文件都添加了很多的属性，最大的作用就是维护数据的安全。举个简单的例子，在你的 Linux 系统中，和系统服务相关的文件通常只有 root 用户才能读或写，就拿 /etc/shadow 这个文件来说，此文件记录了系统中所有用户的密码数据，非常重要，因此绝不能让任何人读取（否则密码数据会被窃取），只有 root 才可以有读取权限。</p>
<p>此外，如果你有一个软件开发团队，你希望团队中的每个人都可以使用某一些目录下的文件，而非团队的其他人则不予以开放。通过前面章节的学习我们知道，只需要将团队中的所有人加入新的群组，并赋予此群组读写目录的权限，即可实现要求。反之，如果你的目录权限没有做好，就很难防止其他人在你的系统中乱搞。</p>`,r:{minutes:17.87,words:5360},y:"a",t:"07 【实操篇-文件权限和搜索查找类命令】"},["/back_end/linux/07","/back_end/linux/07.md"]],["v-f8559f3a","/back_end/linux/08.html",{d:173312745e4,e:`<h1> 08 【实操篇-压缩和解压类】</h1>
<h2> 1.打包（归档）和压缩</h2>
<p>归档，也称为打包，指的是一个文件或目录的集合，而这个集合被存储在一个文件中。归档文件没有经过压缩，因此，它占用的空间是其中所有文件和目录的总和。</p>
<blockquote>
<p>通常，归档总是会和系统（数据）备份联系在一起，不过，有关数据备份的内容，留到后续章节讲，本章仅学习归档命令的基本使用。</p>
</blockquote>
<p>和归档文件类似，压缩文件也是一个文件和目录的集合，且这个集合也被存储在一个文件中，但它们的不同之处在于，压缩文件采用了不同的存储方式，使其所占用的磁盘空间比集合中所有文件大小的总和要小。</p>`,r:{minutes:11.77,words:3531},y:"a",t:"08 【实操篇-压缩和解压类】"},["/back_end/linux/08","/back_end/linux/08.md"]],["v-f4ebedfc","/back_end/linux/09.html",{d:173312745e4,e:`<h1> 09 【实操篇-磁盘查看和分区类】</h1>
<h2> 1.du 查看文件和目录占用的磁盘空间</h2>
<p>du: disk usage 磁盘占用情况</p>
<p>du 是统计目录或文件所占磁盘空间大小的命令。</p>
<p>需要注意的是，使用"ls -r"命令是可以看到文件的大小的。但是大家会发现，在使用"ls -r"命令査看目录大小时，目录的大小多数是 4KB，这是因为目录下的子目录名和子文件名是保存到父目录的 block（默认大小为 4KB）中的，如果父目录下的子目录和子文件并不多，一个 block 就能放下，那么这个父目录就只占用了一个 block 大小。</p>
<p>大家可以将其想象成图书馆的书籍目录和实际书籍。如果我们用"ls-l"命令査看，则只能看到这些书籍占用了 1 页纸的书籍目录，但是实际书籍到底有多少是看不到的，哪怕它堆满了几个房间。</p>`,r:{minutes:15,words:4501},y:"a",t:"09 【实操篇-磁盘查看和分区类】"},["/back_end/linux/09","/back_end/linux/09.md"]],["v-a9d6b2a8","/back_end/linux/10.html",{d:173312745e4,e:`<h1> 10 【实操篇-进程管理类】</h1>
<p>无论是 Linux 系统管理员还是普通用户，监视系统进程的运行情况并适时终止一些失控的进程，是每天的例行事务。和 Linux 系统相比，进程管理在 Windows 中更加直观，它主要是使用"任务管理器"来进行进程管理的。</p>
<p>通常，使用"任务管理器"主要有 3 个目的：</p>
<ol>
<li>利用"应用程序"和"进程"标签来査看系统中到底运行了哪些程序和进程；</li>
<li>利用"性能"和"用户"标签来判断服务器的健康状态；</li>
<li>在"应用程序"和"进程"标签中强制中止任务和进程；</li>
</ol>
<p>Linux 中虽然使用命令进行进程管理，但是进程管理的主要目的是一样的，即查看系统中运行的程序和进程、判断服务器的健康状态和强制中止不需要的进程。</p>`,r:{minutes:23.34,words:7002},y:"a",t:"10 【实操篇-进程管理类】"},["/back_end/linux/10","/back_end/linux/10.md"]],["v-a66d016a","/back_end/linux/11.html",{d:173312745e4,e:`<h1> 11 【实操篇-定时任务 软件安装 克隆虚拟机】</h1>
<h2> 1.crontab 系统定时任务</h2>
<p>在实际工作中，系统的定时任务一般是需要重复执行的，这就需要使用 crontab 命令来执行循环定时任务。</p>
<p>每个用户都可以实现自己的 crontab 定时任务，只需使用这个用户身份执行“crontab -e”命令即可。当然，这个用户不能写入 /etc/cron.deny 文件。</p>
<p>crontab 命令的基本格式如下：</p>
<p><code>[root@localhost ~]# crontab [选项] [file]</code></p>`,r:{minutes:26.42,words:7925},y:"a",t:"11 【实操篇-定时任务 软件安装 克隆虚拟机】"},["/back_end/linux/11","/back_end/linux/11.md"]],["v-2632f347","/back_end/nodeJs/01.html",{d:173312745e4,e:`<h1> 01 【nodejs简介】</h1>
<h2> 1.前言</h2>
<p>Node 的重要性已经不言而喻，很多互联网公司都已经有大量的高性能系统运行在 Node 之上。Node 凭借其单线程、异步等举措实现了极高的性能基准。此外，目前最为流行的 Web 开发模式是前后端分离的形式，即前端开发者与后端开发者在自己喜欢的 IDE 上独立进行开发，然后通过 HTTP 或是 RPC 等方式实现数据与流程的交互。这种开发模式在 Node 的强大功能的引领下变得越来越高效，也越来越受到各个互联网公司的青睐。</p>
<h3> 1.1 前端同学为什么要学习后端/后端同学为什么要学习前端</h3>
`,r:{minutes:10.08,words:3024},y:"a",t:"01 【nodejs简介】"},["/back_end/nodeJs/01","/back_end/nodeJs/01.md"]],["v-27e7cbe6","/back_end/nodeJs/02.html",{d:173312745e4,e:`<h1> 02 【nodejs开发环境安装】</h1>
<h2> 1.版本介绍</h2>
<ul>
<li>在命令窗口中输入 node -v 可以查看版本</li>
<li>0.x 完全不技术 ES6</li>
<li>4.x 部分支持 ES6 特性</li>
<li>5.x 部分支持ES6特性（比4.x多些），属于过渡产品，现在来说应该没有什么理由去用这个了</li>
<li>6.x 支持98%的 ES6 特性</li>
<li>8.x 支持 ES6 特性</li>
</ul>
<h2> 2.Node.js 运行环境配置：通过 Node.js 安装包（不推荐）</h2>
<p>去 Node.js 的<a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">官网</a>下载安装包：</p>`,r:{minutes:3.66,words:1099},y:"a",t:"02 【nodejs开发环境安装】"},["/back_end/nodeJs/02","/back_end/nodeJs/02.md"]],["v-299ca485","/back_end/nodeJs/03.html",{d:173312745e4,e:`<h1> 03 【npm的使用】</h1>
<h2> 1.包和npm</h2>
<h3> 1.1 什么是包</h3>
<p>由于 Node 是一套轻内核的平台，虽然提供了一系列的内置模块，但是不足以满足开发者的需求，于是乎出现了包（package）的概念： 与核心模块类似，就是将一些预先设计好的功能或者说 API 封装到一个文件夹，提供给开发者使用。</p>
<p>Node 本身并没有太多的功能性 API，所以市面上涌现出大量的第三方人员开发出来的 Package。</p>
<h3> 1.2 包的加载机制</h3>
<p>Node.js中使用<code>CommonJs</code>模块化机制，通过<code>npm</code>下载的第三方包，我们在项目中引入第三方包都是：<code>let xx = require('第三方包名')</code>，究竟<code>require</code>方法加载第三方包的原理机制是什么，今天我们来探讨下。</p>`,r:{minutes:10.54,words:3163},y:"a",t:"03 【npm的使用】"},["/back_end/nodeJs/03","/back_end/nodeJs/03.md"]],["v-2b517d24","/back_end/nodeJs/04.html",{d:173312745e4,e:`<h1> 04 【nodejs模块化规范：CommonJS】</h1>
<h2> 1.前言</h2>
<p>网站越来越复杂，js代码、js文件也越来越多，会遇到<strong>一些问题</strong>：</p>
<ul>
<li>文件依赖</li>
<li>全局污染、命名冲突</li>
</ul>
<p>程序模块化包括：</p>
<ul>
<li>日期模块</li>
<li>数学计算模块</li>
<li>日志模块</li>
<li>登陆认证模块</li>
<li>报表展示模块等。</li>
</ul>
<p>所有这些模块共同组成了程序软件系统。</p>
<p>一次编写，多次使用，才是提高效率的核心。</p>`,r:{minutes:11.21,words:3362},y:"a",t:"04 【nodejs模块化规范：CommonJS】"},["/back_end/nodeJs/04","/back_end/nodeJs/04.md"]],["v-2d0655c3","/back_end/nodeJs/05.html",{d:173312745e4,e:`<h1> 05 【nodejs内置模块（上）】</h1>
<h2> 1.nodejs 的官方API文档</h2>
<ul>
<li>Node.js 的API文档（英文）： <a href="https://nodejs.org/docs/latest-v8.x/api/index.html" target="_blank" rel="noopener noreferrer">https://nodejs.org/docs/latest-v8.x/api/index.html</a></li>
<li>Node.js 的API文档（中文）：<a href="http://nodejs.cn/api/" target="_blank" rel="noopener noreferrer">http://nodejs.cn/api/</a></li>
</ul>`,r:{minutes:19.4,words:5819},y:"a",t:"05 【nodejs内置模块（上）】"},["/back_end/nodeJs/05","/back_end/nodeJs/05.md"]],["v-2ebb2e62","/back_end/nodeJs/06.html",{d:173312745e4,e:`<h1> 06 【nodejs内置模块（中）】</h1>
<h2> 1.路劲处理模块 path</h2>
<h3> 1.1 模块概览</h3>
<p>在nodejs中，path是个使用频率很高，但却让人又爱又恨的模块。部分因为文档说的不够清晰，部分因为接口的平台差异性。</p>
<p>将path的接口按照用途归类，仔细琢磨琢磨，也就没那么费解了。</p>
<h3> 1.2 获取路径/文件名/扩展名</h3>
<ul>
<li>获取路径：path.dirname(filepath)</li>
<li>获取文件名：path.basename(filepath)</li>
<li>获取扩展名：path.extname(filepath)</li>
</ul>`,r:{minutes:9.65,words:2894},y:"a",t:"06 【nodejs内置模块（中）】"},["/back_end/nodeJs/06","/back_end/nodeJs/06.md"]],["v-30700701","/back_end/nodeJs/07.html",{d:173312745e4,e:`<h1> 07 【nodejs内置模块（下）】</h1>
<h2> 1.stream 模块</h2>
<p><code>stream</code>是Node.js提供的又一个仅在服务区端可用的模块，目的是支持“流”这种数据结构。</p>
<p>什么是流？流是一种抽象的数据结构。想象水流，当在水管中流动时，就可以从某个地方（例如自来水厂）源源不断地到达另一个地方（比如你家的洗手池）。我们也可以把数据看成是数据流，比如你敲键盘的时候，就可以把每个字符依次连起来，看成字符流。这个流是从键盘输入到应用程序，实际上它还对应着一个名字：标准输入流（stdin）。</p>
<p>如果应用程序把字符一个一个输出到显示器上，这也可以看成是一个流，这个流也有名字：标准输出流（stdout）。流的特点是数据是有序的，而且必须依次读取，或者依次写入，不能像Array那样随机定位。</p>`,r:{minutes:9.75,words:2926},y:"a",t:"07 【nodejs内置模块（下）】"},["/back_end/nodeJs/07","/back_end/nodeJs/07.md"]],["v-3224dfa0","/back_end/nodeJs/08.html",{d:173312745e4,e:`<h1> 08 【爬虫】</h1>
<p><strong>puppeteer</strong></p>
<p><strong>文档:<a href="http://www.puppeteerjs.com/" target="_blank" rel="noopener noreferrer">puppeteer.js中文文档|puppeteerjs中文网|puppeteer爬虫教程</a></strong></p>
<p>Puppeteer本身依赖6.4以上的Node，但是为了异步超级好用的<a href="http://es6.ruanyifeng.com/#docs/async" target="_blank" rel="noopener noreferrer">async/await</a>，推荐使用7.6版本以上的Node。另外headless Chrome本身对服务器依赖的库的版本要求比较高，centos服务器依赖偏稳定，v6很难使用headless Chrome，提升依赖版本可能出现各种服务器问题（包括且不限于无法使用ssh），最好使用高版本服务器。</p>`,r:{minutes:5.93,words:1780},y:"a",t:"08 【爬虫】"},["/back_end/nodeJs/08","/back_end/nodeJs/08.md"]],["v-33d9b83f","/back_end/nodeJs/09.html",{d:173312745e4,e:`<h1> 09 【原生nodejs路由、获取参数、静态目录】</h1>
<h2> 1.路由</h2>
<p><strong>index.js</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 启动服务</span>
<span class="token keyword">const</span> server <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./server.js'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//路由模块</span>
<span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./route.js'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//api</span>
<span class="token keyword">const</span> apiRouter <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./api.js'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

server<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>route<span class="token punctuation">)</span><span class="token punctuation">;</span>
server<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>apiRouter<span class="token punctuation">)</span><span class="token punctuation">;</span>
server<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.39,words:717},y:"a",t:"09 【原生nodejs路由、获取参数、静态目录】"},["/back_end/nodeJs/09","/back_end/nodeJs/09.md"]],["v-596455e9","/back_end/nodeJs/10.html",{d:173312745e4,e:`<h1> 10 【Express基本使用】</h1>
<blockquote>
<p><a href="https://www.expressjs.com.cn/" target="_blank" rel="noopener noreferrer">https://www.expressjs.com.cn/</a></p>
</blockquote>
<p>基于 Node.js 平台，快速、开放、极简的 web 开发框架。</p>
<h2> 1.Express的安装方式</h2>
<p>Express的安装可直接使用npm包管理器上的项目，在安装npm之前可先安装淘宝镜像：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> cnpm <span class="token parameter variable">--registry</span><span class="token operator">=</span>https://registry.npmmirror.com/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:14.19,words:4256},y:"a",t:"10 【Express基本使用】"},["/back_end/nodeJs/10","/back_end/nodeJs/10.md"]],["v-5b192e88","/back_end/nodeJs/11.html",{d:173312745e4,e:`<h1> 11 【Express服务端渲染】</h1>
<h2> 1.Express脚手架的安装</h2>
<p>安装Express脚手架有两种方式：</p>
<h3> 1.1 使用express-generator安装</h3>
<p>使用命令行进入项目目录，依次执行：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>cnpm i <span class="token parameter variable">-g</span> express-generator
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:4.32,words:1295},y:"a",t:"11 【Express服务端渲染】"},["/back_end/nodeJs/11","/back_end/nodeJs/11.md"]],["v-5cce0727","/back_end/nodeJs/12.html",{d:173312745e4,e:`<h1> 12 【操作mongodb数据库】</h1>
<h2> 1.简介</h2>
<ul>
<li>1.Mongoose是一个让我们可以通过Node来操作MongoDB的模块。</li>
<li>2.Mongoose是一个对象文档模型(ODM)库,它对Node原生的MongoDB模块进行了进一步的优化封装，并提供了更多的功能。在大多数情况下，它被用来把结构化的模式应用到一个MongoDB集合，并提供了验证和类型转换等好处</li>
<li>3.mongoose中的对象：
<ul>
<li>Schema  模式对象（Schema对象定义约束了数据库中的文档结构）</li>
<li>Model  模型对象（Model对象作为集合中的所有文档的表示，相当于MongoDB数据库中的集合collection）</li>
<li>Document  文档对象（Document表示集合中的具体文档，相当于集合中的一个具体的文档）</li>
</ul>
</li>
</ul>`,r:{minutes:14.6,words:4381},y:"a",t:"12 【操作mongodb数据库】"},["/back_end/nodeJs/12","/back_end/nodeJs/12.md"]],["v-5e82dfc6","/back_end/nodeJs/13.html",{d:173312745e4,e:`<h1> 13 【操作mysql数据库】</h1>
<h2> 1.mysql 介绍</h2>
<p>付费的商用数据库：</p>
<ul>
<li>Oracle，典型的高富帅；</li>
<li>SQL Server，微软自家产品，Windows定制专款；</li>
<li>DB2，IBM的产品，听起来挺高端；</li>
<li>Sybase，曾经跟微软是好基友，后来关系破裂，现在家境惨淡。</li>
</ul>
<p>这些数据库都是不开源而且付费的，最大的好处是花了钱出了问题可以找厂家解决，不过在Web的世界里，常常需要部署成千上万的数据库服务器，当然不能把大把大把的银子扔给厂家，所以，无论是Google、Facebook，还是国内的BAT，无一例外都选择了免费的开源数据库：</p>`,r:{minutes:5.18,words:1554},y:"a",t:"13 【操作mysql数据库】"},["/back_end/nodeJs/13","/back_end/nodeJs/13.md"]],["v-6037b865","/back_end/nodeJs/14.html",{d:173312745e4,e:`<h1> 14 【接口规范和业务分层】</h1>
<h2> 1.接口规范-RESTful架构</h2>
<h3> 1.1 什么是REST</h3>
<p>REST全称是Representational State Transfer，中文意思是表述（编者注：通常译为表征）性状态转移。 它首次出现在2000年Roy Fielding的博士论文中，Roy Fielding是HTTP规范的主要编写者之一。 他在论文中提到："我这篇文章的写作目的，就是想在符合架构原理的前提下，理解和评估以网络为基础的应用软件的架构设计，得到一个功能强、性能好、适宜通信的架构。REST指的是一组架构约束条件和原则。" 如果一个架构符合REST的约束条件和原则，我们就称它为RESTful架构。</p>`,r:{minutes:17.01,words:5104},y:"a",t:"14 【接口规范和业务分层】"},["/back_end/nodeJs/14","/back_end/nodeJs/14.md"]],["v-61ec9104","/back_end/nodeJs/15.html",{d:173312745e4,e:`<h1> 15 【登录鉴权-Cookie】</h1>
<h2> 1.什么是认证（Authentication）</h2>
<ul>
<li>通俗地讲就是验证当前用户的身份，证明“你是你自己”（比如：你每天上下班打卡，都需要通过指纹打卡，当你的指纹和系统里录入的指纹相匹配时，就打卡成功）</li>
<li>互联网中的认证：
<ul>
<li>用户名密码登录</li>
<li>邮箱发送登录链接</li>
<li>手机号接收验证码</li>
<li>只要你能收到邮箱/验证码，就默认你是账号的主人</li>
</ul>
</li>
</ul>
<h2> 2.什么是授权（Authorization）</h2>`,r:{minutes:26.94,words:8082},y:"a",t:"15 【登录鉴权-Cookie】"},["/back_end/nodeJs/15","/back_end/nodeJs/15.md"]],["v-63a169a3","/back_end/nodeJs/16.html",{d:173312745e4,e:`<h1> 16 【跨域】</h1>
<h2> 1.什么是跨域</h2>
<p>跨域，是指浏览器不能执行其他网站的脚本。它是由浏览器的同源策略造成的，是浏览器对JavaScript实施的安全限制。浏览器从一个域名的网页去请求另一个域名的资源时，出现域名、端口、协议任一不同，都属于跨域。</p>
<p>同源策略限制了一下行为：</p>
<p>Cookie、LocalStorage 和 IndexDB 无法读取</p>
<p>DOM 和 JS 对象无法获取</p>
<p>Ajax请求发送不出去</p>
<p>下面举个例子：</p>
<div class="language-ruby line-numbers-mode" data-ext="rb"><pre class="language-ruby"><code>http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>yyy<span class="token punctuation">.</span>cn<span class="token operator">/</span>index<span class="token punctuation">.</span>html 调用 http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>xxxyyy<span class="token punctuation">.</span>cn<span class="token operator">/</span>server<span class="token punctuation">.</span>php 非跨域

<span class="token symbol">http</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token operator">**</span>www<span class="token punctuation">.</span>xxxyyy<span class="token punctuation">.</span>cn<span class="token operator">**</span><span class="token operator">/</span>index<span class="token punctuation">.</span>html 调用  http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token operator">**</span>www<span class="token punctuation">.</span>xxx<span class="token punctuation">.</span>cn<span class="token operator">**</span><span class="token operator">/</span>server<span class="token punctuation">.</span>php  跨域<span class="token punctuation">,</span>主域不同

<span class="token symbol">http</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token operator">**</span>abc<span class="token operator">**</span><span class="token punctuation">.</span>xxxyyy<span class="token punctuation">.</span>cn<span class="token operator">/</span>index<span class="token punctuation">.</span>html 调用  http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token operator">**</span><span class="token keyword">def</span><span class="token operator">**</span><span class="token punctuation">.</span>xxx<span class="token punctuation">.</span>cn<span class="token operator">/</span>server<span class="token punctuation">.</span>php  跨域<span class="token punctuation">,</span>子域名不同

<span class="token symbol">http</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>xxx<span class="token punctuation">.</span>cn<span class="token operator">:</span><span class="token operator">**</span><span class="token number">8080</span><span class="token operator">**</span><span class="token operator">/</span>index<span class="token punctuation">.</span>html 调用  http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>xxx<span class="token punctuation">.</span>cn<span class="token operator">/</span>server<span class="token punctuation">.</span>php  跨域<span class="token punctuation">,</span>端口不同

<span class="token operator">**</span>https<span class="token operator">**</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>xxx<span class="token punctuation">.</span>cn<span class="token operator">/</span>index<span class="token punctuation">.</span>html 调用  <span class="token operator">**</span>http<span class="token operator">**</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>xxx<span class="token punctuation">.</span>cn<span class="token operator">/</span>server<span class="token punctuation">.</span>php  跨域<span class="token punctuation">,</span>协议不同
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:9.78,words:2933},y:"a",t:"16 【跨域】"},["/back_end/nodeJs/16","/back_end/nodeJs/16.md"]],["v-65564242","/back_end/nodeJs/17.html",{d:173312745e4,e:`<h1> 17 【文件上传】</h1>
<h2> 1.初始化准备</h2>
<h3> 1.1 安装依赖</h3>
<p>首先创建一个<code>express-multer-upload</code>工程项目，然后在项目中下好各种依赖包。</p>
<p><strong>multer中间件</strong></p>
<p>Multer 是一个 node.js 中间件，用于处理 <code>multipart/form-data</code> 类型的表单数据，它主要用于上传文件。</p>
<p><strong>注意</strong>: Multer 不会处理任何非 <code>multipart/form-data</code> 类型的表单数据。</p>`,r:{minutes:7.49,words:2246},y:"a",t:"17 【文件上传】"},["/back_end/nodeJs/17","/back_end/nodeJs/17.md"]],["v-670b1ae1","/back_end/nodeJs/18.html",{d:173312745e4,e:`<h1> 18 【Koa基本使用】</h1>
<h2> 1.简介</h2>
<figure><img src="https://i0.hdslb.com/bfs/album/143d174518b6a8dc724b126198b11f07fdac90f7.png" alt="image-20221231151037428" tabindex="0" loading="lazy"><figcaption>image-20221231151037428</figcaption></figure>
<p>koa 是由 Express 原班人马打造的，致力于成为一个更小、更富有表现力、更健壮的 Web 框架。使用 koa 编写 web 应用，通过组合不同的 generator，可以免除重复繁琐的回调函数嵌套，并极大地提升错误处理的效率。koa 不在内核方法中绑定任何中间件，它仅仅提供了一个轻量优雅的函数库，使得编写 Web 应用变得得心应手。</p>`,r:{minutes:8.01,words:2404},y:"a",t:"18 【Koa基本使用】"},["/back_end/nodeJs/18","/back_end/nodeJs/18.md"]],["v-67b8c712","/posts/apple/1.html",{d:16409952e5,l:"2022年1月1日",c:["苹果"],g:["红","大","圆"],e:`<h1> 苹果 1</h1>
<h2> 标题 2</h2>
<p>这里是内容。</p>
<h3> 标题 3</h3>
<p>这里是内容。</p>
`,r:{minutes:.11,words:34},y:"a",t:"苹果 1",i:"pen-to-square"},["/posts/apple/1","/posts/apple/1.md"]],["v-696d9fb1","/posts/apple/2.html",{d:16410816e5,l:"2022年1月2日",c:["苹果"],g:["红","大","圆"],e:`<h1> 苹果 2</h1>
<p>一个被星标了的苹果文章。</p>
`,r:{minutes:.16,words:48},y:"a",t:"苹果 2",i:"pen-to-square"},["/posts/apple/2","/posts/apple/2.md"]],["v-6b227850","/posts/apple/3.html",{d:1641168e6,l:"2022年1月3日",c:["苹果","水果"],g:["红","大","圆"],e:`<h1> 苹果 3</h1>
<h2> 标题 2</h2>
<p>这里是内容。</p>
<h3> 标题 3</h3>
<p>这里是内容。</p>
`,r:{minutes:.12,words:36},y:"a",t:"苹果 3",i:"pen-to-square"},["/posts/apple/3","/posts/apple/3.md"]],["v-6cd750ef","/posts/apple/4.html",{d:16412544e5,l:"2022年1月4日",c:["苹果","水果"],g:["红","大","圆"],e:`<h1> 苹果 4</h1>
<h2> 标题 2</h2>
<p>这里是内容。</p>
<h3> 标题 3</h3>
<p>这里是内容。</p>
`,r:{minutes:.12,words:36},y:"a",t:"苹果 4",i:"pen-to-square"},["/posts/apple/4","/posts/apple/4.md"]],["v-7a07405d","/posts/banana/1.html",{d:16413408e5,l:"2022年1月5日",c:["香蕉","水果"],g:["黄","弯曲的","长"],e:`<h1> 香蕉 1</h1>
<h2> 标题 2</h2>
<p>这里是内容。</p>
<h3> 标题 3</h3>
<p>这里是内容。</p>
`,r:{minutes:.13,words:38},y:"a",t:"香蕉 1",i:"pen-to-square"},["/posts/banana/1","/posts/banana/1.md"]],["v-7bbc18fc","/posts/banana/2.html",{d:16414272e5,l:"2022年1月6日",c:["香蕉","水果"],g:["黄","弯曲的","长"],e:`<h1> 香蕉 2</h1>
<p>一个被数字 <code>10</code> 星标了的香蕉文章。</p>
`,r:{minutes:.18,words:55},y:"a",t:"香蕉 2",i:"pen-to-square"},["/posts/banana/2","/posts/banana/2.md"]],["v-7d70f19b","/posts/banana/3.html",{d:16415136e5,l:"2022年1月7日",c:["香蕉"],g:["黄","弯曲的","长"],e:`<h1> 香蕉 3</h1>
<h2> 标题 2</h2>
<p>这里是内容。</p>
<h3> 标题 3</h3>
<p>这里是内容。</p>
`,r:{minutes:.12,words:36},y:"a",t:"香蕉 3",i:"pen-to-square"},["/posts/banana/3","/posts/banana/3.md"]],["v-7f25ca3a","/posts/banana/4.html",{d:16416e8,l:"2022年1月8日",c:["香蕉"],g:["黄","弯曲的","长"],e:`<h1> 香蕉 4</h1>
<h2> 标题 2</h2>
<p>这里是内容。</p>
<h3> 标题 3</h3>
<p>这里是内容。</p>
`,r:{minutes:.12,words:36},y:"a",t:"香蕉 4",i:"pen-to-square"},["/posts/banana/4","/posts/banana/4.md"]],["v-3d41e0e3","/professional_knowledge/computer_network/01.html",{d:173312745e4,e:`<h1> 01 【计算机网络-概述】</h1>
<p><img src="https://i0.hdslb.com/bfs/album/681a357243cc209b37708885ae3b067c40657e9b.png" alt="image-20230122144219777" style="zoom:50%;">代表着主机</p>
<p><img src="https://i0.hdslb.com/bfs/album/9971846161282f85ab6565b63d133fd3d8c8152b.png" alt="image-20201007144130208" style="zoom:50%;"> 代表服务器</p>`,r:{minutes:20.56,words:6169},y:"a",t:"01 【计算机网络-概述】"},["/professional_knowledge/computer_network/01","/professional_knowledge/computer_network/01.md"]],["v-3ef6b982","/professional_knowledge/computer_network/02.html",{d:173312745e4,e:`<h1> 02 【计算机网络-物理层】</h1>
<h2> 1.物理层的基本概念</h2>
<figure><img src="https://i0.hdslb.com/bfs/album/89c84be25b0ca67655a9df89b183c141a8c82ffe.png" alt="image-20201008130211749" tabindex="0" loading="lazy"><figcaption>image-20201008130211749</figcaption></figure>
<h2> 2.物理层下面的传输媒体</h2>
<p><strong>传输媒体</strong>也称为传输介质或传输媒介，他就是数据传输系统中在发送器和接收器之间的物理通路。<strong>传输媒体</strong>课分为两大类，即<strong>导引型传输媒体</strong>和<strong>非导引型传输媒体</strong></p>`,r:{minutes:10.43,words:3130},y:"a",t:"02 【计算机网络-物理层】"},["/professional_knowledge/computer_network/02","/professional_knowledge/computer_network/02.md"]],["v-40ab9221","/professional_knowledge/computer_network/03.html",{d:173312745e4,e:`<h1> 03 【计算机网络-数据链路层】</h1>
<h2> 1.数据链路层概述</h2>
<h3> 1.1 概述</h3>
<p><strong>链路</strong>是从一个结点到相邻结点的一段物理线路，<strong>数据链路</strong>则是在链路的基础上增加了一些必要的硬件（如网络适配器）和软件（如协议的实现）</p>
<p><strong>网络中的主机、路由器等都必须实现数据链路层</strong></p>
<figure><img src="https://i0.hdslb.com/bfs/album/5acd6abce2b08725ac2a7dd80851f7d8e630bdd4.png" alt="image-20201011102531462" tabindex="0" loading="lazy"><figcaption>image-20201011102531462</figcaption></figure>`,r:{minutes:35.27,words:10582},y:"a",t:"03 【计算机网络-数据链路层】"},["/professional_knowledge/computer_network/03","/professional_knowledge/computer_network/03.md"]],["v-42606ac0","/professional_knowledge/computer_network/04.html",{d:173312745e4,e:`<h1> 04 【计算机网络-网络层】</h1>
<h2> 1.网络层概述</h2>
<h3> 1.1 简介</h3>
<ul>
<li>网络层的主要任务是<strong>实现网络互连</strong>，进而<strong>实现数据包在各网络之间的传输</strong></li>
</ul>
<figure><img src="https://i0.hdslb.com/bfs/album/cc633422af4e17502e62051745ce202b7c5b730f.png" alt="image-20201017134630948" tabindex="0" loading="lazy"><figcaption>image-20201017134630948</figcaption></figure>`,r:{minutes:26.74,words:8023},y:"a",t:"04 【计算机网络-网络层】"},["/professional_knowledge/computer_network/04","/professional_knowledge/computer_network/04.md"]],["v-4415435f","/professional_knowledge/computer_network/05.html",{d:173312745e4,e:`<h1> 05 【计算机网络-运输层】</h1>
<h2> 1.运输层概述</h2>
<h3> 1.1 概念</h3>
<p><strong>进程之间的通信</strong></p>
<figure><img src="https://i0.hdslb.com/bfs/article/c3e0dc7e84683c20677b3b4689d2e6ce3493119651743993.png" alt="image-20240618101829778" tabindex="0" loading="lazy"><figcaption>image-20240618101829778</figcaption></figure>`,r:{minutes:21.44,words:6431},y:"a",t:"05 【计算机网络-运输层】"},["/professional_knowledge/computer_network/05","/professional_knowledge/computer_network/05.md"]],["v-45ca1bfe","/professional_knowledge/computer_network/06.html",{d:173312745e4,e:`<h1> 06 【计算机网络-应用层】</h1>
<h2> 1.应用层概述</h2>
<figure><img src="https://article.biliimg.com/bfs/article/7a067ff7ed5f2a814f3c79dc8e1b2ff09d4fb917.png" alt="image-20201023195112701" tabindex="0" loading="lazy"><figcaption>image-20201023195112701</figcaption></figure>
<figure><img src="https://article.biliimg.com/bfs/article/107b2834eb0dd39dc064b741df13662ef9a2e219.png" alt="image-20201023200511781" tabindex="0" loading="lazy"><figcaption>image-20201023200511781</figcaption></figure>`,r:{minutes:9.53,words:2858},y:"a",t:"06 【计算机网络-应用层】"},["/professional_knowledge/computer_network/06","/professional_knowledge/computer_network/06.md"]],["v-8f5a8800","/professional_knowledge/software_engineer/01.html",{d:173312745e4,e:`<h1> 01 【软件工程学概述】</h1>
<p>迄今为止，计算机系统已经经历了4个不同的发展阶段，但是，人们仍然没有彻底摆脱“软件危机”的困扰，软件已经成为限制计算机系统发展的瓶颈。</p>
<p>为了更有效地开发与维护软件，软件工作者在20世纪60年代后期开始认真研究消除软件危机的途径，从而逐渐形成了一门新兴的工程学科——计算机软件工程学。</p>
<h2> 1.软件危机</h2>
<h3> 1.1 软件危机的介绍</h3>
<p>在计算机软件的开发和维护过程中所遇到的一系列严重问题。</p>
<p><strong>软件危机的典型表现</strong></p>
<ul>
<li>对软件开发成本和进度的估算很不准确</li>
<li>难以准确获取用户需求，用户不满意</li>
<li>质量很不可靠，没有适当的文档</li>
<li>缺乏方法指导和工具支持，大型软件系统经常失败</li>
<li>供不应求：软件开发生产率跟不上计算机应用的迅速发展</li>
<li>做好软件定义时期的工作，是降低软件成本提高软件质量的关键。</li>
</ul>`,r:{minutes:19.53,words:5860},y:"a",t:"01 【软件工程学概述】"},["/professional_knowledge/software_engineer/01","/professional_knowledge/software_engineer/01.md"]],["v-8bf0d6c2","/professional_knowledge/software_engineer/02.html",{d:173312745e4,e:`<h1> 02 【可行性研究】</h1>
<h2> 1.可行性研究的任务</h2>
<h3> 1.1 目的和任务</h3>
<blockquote>
<p>可行性研究的目的不是解决问题，而是<strong>确定问题是否值得去解决。</strong></p>
<p>可行性研究最根本的任务是对以后的行动方针提出建议。</p>
</blockquote>
<h3> 1.2 本质</h3>
<p>可行性研究的本质是要进行一次大大压缩简化了的系统分析和设计的过程，也就是在较高层次上以较抽象的方式进行的系统分析和设计的过程。</p>
<h3> 1.3 步骤</h3>
<ul>
<li>首先需要进一步分析和澄清问题定义</li>
<li>在澄清了问题定义之后，分析员应该导出系统的逻辑模型。</li>
<li>再从逻辑模型出发，探索若干种可供选择的主要解法（即系统实现方案）。对每种解法都应该仔细研究它的可行性，一般说来，至少应该从下述三个方面研究每种解法的可行性：
<ul>
<li>技术可行性：使用现有的技术能够实现这个系统</li>
<li>经济可行性：这个系统的经济效益能超过它的开发成本？</li>
<li>操作可行性：系统的操作方式在这个用户组织内行得通吗</li>
<li>必要时还应该从法律、社会效益等更广泛的方面研究每种解法的可行性。</li>
</ul>
</li>
</ul>`,r:{minutes:14.1,words:4231},y:"a",t:"02 【可行性研究】"},["/professional_knowledge/software_engineer/02","/professional_knowledge/software_engineer/02.md"]],["v-88872584","/professional_knowledge/software_engineer/03.html",{d:173312745e4,e:`<h1> 03 【需求分析】</h1>
<p>为了开发出真正满足用户需求的软件产品，首先必须知道用户的需求。对软件需求的深入理解是软件开发工作获得成功的前提条件，不论人们把设计和编码工作做得如何出色，不能真正满足用户需求的程序只会令用户失望，给开发者带来烦恼。</p>
<p>需求分析是软件定义时期的最后一个阶段，它的基本任务是准确地回答“系统必须做什么?”这个问题，对目标系统提出完整、准确、清晰、具体的要求。 系统分析员应该写出<strong>软件需求规格说明书</strong>，以书面形式准确地描述软件需求。</p>
<h2> 1.需求分析的任务</h2>
<h3> 1.1 确定对系统的综合要求</h3>`,r:{minutes:9.45,words:2836},y:"a",t:"03 【需求分析】"},["/professional_knowledge/software_engineer/03","/professional_knowledge/software_engineer/03.md"]],["v-851d7446","/professional_knowledge/software_engineer/04.html",{d:173312745e4,e:`<h1> 04 【总体设计】</h1>
<p>总体设计的基本目的就是回答“概括地说，系统应该如何实现”这个问题，因此，总体设计又称为概要设计或初步设计。</p>
<p>总体设计阶段的另一项重要任务是设计软件的结构，也就是要确定系统中每个程序是由哪些模块组成的，以及这些模块相互间的关系。</p>
<h2> 1.设计过程</h2>
<p><strong>1.</strong> <strong>设想供选择的方案</strong></p>
<p>在总体设计阶段分析员应该考虑各种可能的实现方案，并且力求从中选出最佳方案。</p>
<p>需求分析阶段得出的数据流图是总体设计的极好的出发点。</p>
<p>设想供选择的方案的一种常用的方法是，设想把数据流图中的处理分组的各种可能的方法，抛弃在技术上行不通的分组方法(例如，组内不同处理的执行时间不相容)，余下的分组方法代表可能的实现策略，并且可以启示供选择的物理系统。</p>`,r:{minutes:12.84,words:3851},y:"a",t:"04 【总体设计】"},["/professional_knowledge/software_engineer/04","/professional_knowledge/software_engineer/04.md"]],["v-81b3c308","/professional_knowledge/software_engineer/05.html",{d:173312745e4,e:`<h1> 05 【详细设计】</h1>
<p>根本目标：确定应该怎样具体地实现所要求的系统。</p>
<p>详细设计阶段的任务不是具体地编写程序，而是要设计出程序的“蓝图”。</p>
<p>详细设计的结果基本上决定了最终的程序代码的质量。</p>
<h2> 1.结构程序设计</h2>
<p><strong>定义</strong></p>
<ul>
<li>结构化程序设计采用<strong>自顶向下、逐步求精</strong>的设计方法，各个模块通过“顺序、选择、循环”的控制结构进行连接，并且只有一个入口、一个出口。</li>
<li>结构化程序设计的原则可表示为：程序=(算法)+(数据结构)。</li>
<li>如果一个程序的代码块仅仅通过<strong>顺序、选择和循环</strong>这3 种基本控制结构进行连接，并且<strong>每个代码块只有一个入口和一个出口，则称这个程序是结构化的。</strong></li>
</ul>`,r:{minutes:15.34,words:4602},y:"a",t:"05 【详细设计】"},["/professional_knowledge/software_engineer/05","/professional_knowledge/software_engineer/05.md"]],["v-7e4a11ca","/professional_knowledge/software_engineer/06.html",{d:173312745e4,e:`<h1> 06 【软件测试】</h1>
<h2> 1.软件测试基础</h2>
<h3> 1.1 软件测试的目标</h3>
<p>G.Myers给出的关于测试的一些规则如下：</p>
<p>测试是为了发现程序中的错误而执行程序的过程。</p>
<p>好的测试方案是极可能发现迄今为止尚未发现的错误的测试方案。</p>
<p>成功的测试是发现了至今为止尚未发现的错误的测试。</p>
<p><strong>测试</strong>的正确定义是“为了发现程序中的错误而执行程序的过程”。应该认识到测试决不能证明程序是正确的。即使经过了最严格的测试之后，仍然可能还有没被发现的错误潜藏在程序中。另外，在综合测试阶段通常由其他人员组成测试小组来完成测试工作。</p>`,r:{minutes:48.66,words:14597},y:"a",t:"06 【软件测试】"},["/professional_knowledge/software_engineer/06","/professional_knowledge/software_engineer/06.md"]],["v-7ae0608c","/professional_knowledge/software_engineer/07.html",{d:173312745e4,e:`<h1> 07 【面向对象方法学引论】</h1>
<p>​     面向对象技术强调在软件开发过程中面向客观世界或问题域中的事物，采用人类在认识客观世界的过程中普遍运用的思维方法，直观、自然地描述客观世界中的有关事物。</p>
<p>面向对象的分析方法是利用面向对象的信息建模概念，如实体、关系、属性等，同时运用封装、继承、多态等机制来构造模拟现实系统的方法。</p>
<p>传统的结构化设计方法的基本点是面向过程，系统被分解成若干个过程。而面向对象的方法是采用构造模型的观点，在系统的开发过程中，各个步骤的共同的目标是建造一个问题域的模型。在面向对象的设计中，初始元素是对象，然后将具有共同特征的对象归纳成类，组织类之间的等级关系，构造类库。在应用时，在类库中选择相应的类。</p>`,r:{minutes:35.16,words:10548},y:"a",t:"07 【面向对象方法学引论】"},["/professional_knowledge/software_engineer/07","/professional_knowledge/software_engineer/07.md"]],["v-7776af4e","/professional_knowledge/software_engineer/08.html",{d:173312745e4,e:`<h1> 08 【面向对象分析】</h1>
<p>在面向对象分析中，主要由对象模型、动态模型和功能模型组成。</p>
<p>面向对象分析(OOA)的关键是识别出问题域内的类与对象，并分析它们相互间的关系，最终建立起问题域的简洁、精确、可理解的正确模型。在用面向对象观点建立起的3种模型中，对象模型是最基本、最重要、最核心的。</p>
<h2> 1.面向对象分析的基本过程</h2>
<h3> 1.1 概述</h3>
<p>​    面向对象分析，就是抽取和整理用户需求并建立问题域精确模型的过程。</p>
<p>​	面向对象分析过程从分析陈述用户需求的文件开始。</p>
<p>​	接下来，系统分析员应该深入理解用户需求，抽象出目标系统的本质属性，并用模型准确地表示出来。</p>`,r:{minutes:31.55,words:9466},y:"a",t:"08 【面向对象分析】"},["/professional_knowledge/software_engineer/08","/professional_knowledge/software_engineer/08.md"]],["v-740cfe10","/professional_knowledge/software_engineer/09.html",{d:173312745e4,e:`<h1> 09 【面向对象设计】</h1>
`,r:{minutes:.02,words:7},y:"a",t:"09 【面向对象设计】"},["/professional_knowledge/software_engineer/09","/professional_knowledge/software_engineer/09.md"]],["v-28f7c2bc","/professional_knowledge/software_engineer/10.html",{d:173312745e4,e:`<h1> 10 【面向对象实现】</h1>
`,r:{minutes:.02,words:7},y:"a",t:"10 【面向对象实现】"},["/professional_knowledge/software_engineer/10","/professional_knowledge/software_engineer/10.md"]],["v-63e77b20","/tool/efficiency/bookmark-scripts.html",{d:173312745e4,e:`<h1> 书签脚本</h1>
<h2> 回到顶部</h2>
<p>只支持窗口滚动，不支持内联滚动</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">javascript</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  document<span class="token punctuation">.</span>scrollingElement<span class="token punctuation">.</span><span class="token function">scrollIntoView</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">behavior</span><span class="token operator">:</span> <span class="token string">'smooth'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.34,words:102},y:"a",t:"书签脚本"},["/tool/efficiency/bookmark-scripts","/tool/efficiency/bookmark-scripts.md"]],["v-60213eb0","/tool/efficiency/online-tools.html",{d:173312745e4,e:`<h1> 在线工具</h1>
<h2> 开发相关</h2>
<ul>
<li><a href="https://caniuse.com" target="_blank" rel="noopener noreferrer">Can I use</a> 兼容性查询</li>
<li><a href="https://carbon.now.sh" target="_blank" rel="noopener noreferrer">carbon</a> 代码图片生成</li>
<li><a href="https://www.npmtrends.com/" target="_blank" rel="noopener noreferrer">npm trends</a> 比较 npm package 的下载情况</li>
<li><a href="https://bundlephobia.com/" target="_blank" rel="noopener noreferrer">Bundlephobia</a> 分析 npm package 的依赖、bundle 后的大小、下载速度预估</li>
<li><a href="https://packagephobia.com/" target="_blank" rel="noopener noreferrer">Package Phobia</a> 查询 npm package 的安装体积（磁盘大小）</li>
</ul>`,r:{minutes:1.93,words:580},y:"a",t:"在线工具"},["/tool/efficiency/online-tools","/tool/efficiency/online-tools.md"]],["v-20ee9d86","/tool/git/01.html",{d:173312745e4,e:`<h1> 01 【版本控制和Git的安装介绍】</h1>
<p>工程设计领域中，使用“版本控制”管理工程蓝图的设计过程。在 IT 开发中也可以使用版本控制思想管理代码的版本迭代。</p>
<h2> 1.目的</h2>
<p>协同修改：支持在服务器对同一个文件多人协同地修改；
数据备份：同时保存目录及文件的当前状态与每次提交时的历史状态；
版本管理：不保存版本间的重复数据以节约存储空间；</p>
<blockquote>
<p>为此，SVN 和 Git 分别采用增量式管理 和文件系统快照 的方式。</p>
</blockquote>
<p>权限控制：对团队协作者进行权限控制（SVN 和 Git 共有）；审核团队外开发者贡献的代码（Git 独有）；
历史记录：查看修改者、修改时间、修改内容、日志信息等项目；将本地文件恢复到某一指定的历史状态；
分支管理：允许开发团队同时优雅地推进多条生产线任务，提高效率。</p>`,r:{minutes:3.57,words:1070},y:"a",t:"01 【版本控制和Git的安装介绍】"},["/tool/git/01","/tool/git/01.md"]],["v-1d84ec48","/tool/git/02.html",{d:173312745e4,e:`<h1> 02 【本地库操作】</h1>
<h2> 1.git的结构</h2>
<figure><img src="https://i0.hdslb.com/bfs/album/b0d661e04d3d9d717e9219742e17879cbf2eed01.png" alt="image-20221006131836575" tabindex="0" loading="lazy"><figcaption>image-20221006131836575</figcaption></figure>
<figure><img src="https://i0.hdslb.com/bfs/album/fb14c4af9eea2c44ce536bd4fb1331512d3c7b94.png" alt="image-20220827212525927" tabindex="0" loading="lazy"><figcaption>image-20220827212525927</figcaption></figure>`,r:{minutes:11.32,words:3395},y:"a",t:"02 【本地库操作】"},["/tool/git/02","/tool/git/02.md"]],["v-1a1b3b0a","/tool/git/03.html",{d:173312745e4,e:`<h1> 03 【远程库操作】</h1>
<h2> 1.推送到远程库</h2>
<h3> 1.1 创建github仓库</h3>
<p><a href="https://github.com/new" target="_blank" rel="noopener noreferrer">创建新仓库 (github.com)</a></p>
<figure><img src="https://i0.hdslb.com/bfs/album/b05d10d6b37bb5f9f891ccf27830a317077d0488.png" alt="image-20221006163144237" tabindex="0" loading="lazy"><figcaption>image-20221006163144237</figcaption></figure>`,r:{minutes:3.07,words:920},y:"a",t:"03 【远程库操作】"},["/tool/git/03","/tool/git/03.md"]],["v-16b189cc","/tool/git/04.html",{d:173312745e4,e:`<h1> 04 【忽略某些文件】</h1>
<p>在push给远程仓库时需要忽略某些文件时，需要在本地仓库新建<code>.gitignore</code>的文件，注意在windows下无法直接创建该文件，只能通过<code>Git Bash</code>来<code>touch .gitignore </code>来生<code>gitignore</code>文件</p>
<p>然后在<code>.gitignore</code>中书写规则如下：</p>
<p>常见规则写法</p>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>/mtk/   过滤整个文件夹

*.zip    过滤所有.zip文件

/mtk/do.java 过滤某个具体文件

!do.java 不过滤某个文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.39,words:116},y:"a",t:"04 【忽略某些文件】"},["/tool/git/04","/tool/git/04.md"]],["v-6c412aac","/tool/lint/01.html",{d:173312745e4,e:`<h1> 01 【JS 代码规范】</h1>
<h2> 1. 统一代码风格的重要性</h2>
<h3> 1.1 为什么要统一代码风格</h3>
<p>团队千千万，团队中每个人的代码风格也是千千万。比如有的同学写代码就喜欢用双引号，缩进用两个字符，而其他同学却可能更喜欢用单引号，四个字符缩进。而团队中的人一多，一往代码仓库提交代码，难免会出现下面这些情况：</p>
<p><strong>（1）如果没有统一代码风格，diff时可能会出现很多因为格式不同的问题，不便于我们查看提交代码所做的修改</strong></p>
<p>如下图所示，提交的文件内容其实没有变化，只是代码风格变了（双引号变成了单引号，缩进从两个字符变成了四个字符），但是diff时大段代码会标红，不利于我们查看提交的修改。</p>`,r:{minutes:18.39,words:5518},y:"a",t:"01 【JS 代码规范】"},["/tool/lint/01","/tool/lint/01.md"]],["v-68d7796e","/tool/lint/02.html",{d:173312745e4,e:`<h1> 02 【CSS 代码规范】</h1>
<h2> 1. Stylelint介绍及安装</h2>
<h3> 1.1 什么是Stylelint</h3>
<p>Stylelint是一个强大的，现代的代码检查工具，与ESLint类似，Stylelint能够通过定义一系列的编码风格规则帮助我们避免在样式表中出现错误。</p>
<p>目前在开源社区上，关于CSS Lint的解决方案主要包括了csslint、SCSS-Lint和Stylelint等几种。而由于Stylelint在技术架构上基于AST 的方式扩展CSS，除原生CSS 语法，其也支持 SCSS、Less 这类预处理器，并且也有非常多的第三方插件，因此我们团队选择了Stylelint作为CSS Lint工具。</p>`,r:{minutes:9.97,words:2992},y:"a",t:"02 【CSS 代码规范】"},["/tool/lint/02","/tool/lint/02.md"]],["v-656dc830","/tool/lint/03.html",{d:173312745e4,e:`<h1> 03 【Git 提交规范】</h1>
<h2> 1.Git提交规范（Commitizen）</h2>
<h3> 1.1 背景</h3>
<p>Git是目前世界上最先进的分布式版本控制系统，在我们平时的项目开发中已经广泛使用。而当我们使用Git提交代码时，都需要写Commit Message提交说明才能够正常提交。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git commit -m "提交"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:14.37,words:4311},y:"a",t:"03 【Git 提交规范】"},["/tool/lint/03","/tool/lint/03.md"]],["v-6e34a17a","/back_end/database/mongodb/01.html",{d:173312745e4,e:`<h1> MongoDB</h1>
<h2> 1.下载安装</h2>
<h3> 1.1 下载MongoDB</h3>
<p>这里我推介下载zip版本，解压到任意盘，由于C盘容易满，所以我放到了D盘。我在D盘创建了一个 mongoDB 的目录，并将压缩包解压到了这个目录里面。</p>
<p>下载地址：<a href="https://www.mongodb.com/try/download/community" target="_blank" rel="noopener noreferrer">https://www.mongodb.com/try/download/community</a></p>`,r:{minutes:10,words:3001},y:"a",t:"MongoDB"},["/back_end/database/mongodb/01","/back_end/database/mongodb/01.md"]],["v-fa8ee52c","/back_end/database/mysql/01.html",{d:173312745e4,e:`<h1> 01 【数据库概述】</h1>
<h2> 1.为什么要使用数据库</h2>
<ul>
<li>持久化(persistence)：<code>把数据保存到可掉电式存储设备中以供之后使用</code>。大多数情况下，特别是企业级应用，数据持久化意味着<code>将内存中的数据保存到硬盘上加以”固化”</code>，而持久化的实现过程大多通过各种关系数据库来完成。</li>
<li>持久化的主要作用是<code>将内存中的数据存储在关系型数据库中</code>，当然也可以存储在磁盘文件、XML数
据文件中。</li>
</ul>
<figure><img src="https://i0.hdslb.com/bfs/album/cb722175a5ba048203bee951d9ee8c6d54f88cbd.png" alt="image-20221010092111082" tabindex="0" loading="lazy"><figcaption>image-20221010092111082</figcaption></figure>`,r:{minutes:12.8,words:3841},y:"a",t:"01 【数据库概述】"},["/back_end/database/mysql/01","/back_end/database/mysql/01.md"]],["v-f72533ee","/back_end/database/mysql/02.html",{d:173312745e4,e:`<h1> 02 【MySQL基本使用】</h1>
<h2> 1.自带客户端的登录与退出</h2>
<p>当MySQL服务启动完成后，便可以通过客户端来登录MySQL数据库。注意：确认服务是开启的。</p>
<h3> 1.1 登录方式1：MySQL自带客户端</h3>
<p>开始菜单 → 所有程序 → MySQL → MySQL 8.0 Command Line Client</p>
<figure><img src="https://i0.hdslb.com/bfs/album/82c689a49082ee2597de8dd3e4c9b384d247ac6f.png" alt="image-20221010111259417" tabindex="0" loading="lazy"><figcaption>image-20221010111259417</figcaption></figure>`,r:{minutes:8.85,words:2655},y:"a",t:"02 【MySQL基本使用】"},["/back_end/database/mysql/02","/back_end/database/mysql/02.md"]],["v-f3bb82b0","/back_end/database/mysql/03.html",{d:173312745e4,e:`<h1> 03 【基本的SELECT语句】</h1>
<h2> 1.SQL分类</h2>
<p>SQL语言在功能上主要分为如下3大类：</p>
<ul>
<li><strong>DDL（Data Definition Languages、数据定义语言）</strong>，这些语句定义了不同的数据库、表、视图、索引等数据库对象，还可以用来创建、删除、修改数据库和数据表的结构。
<ul>
<li>主要的语句关键字包括<code>CREATE</code>、<code>DROP</code>、<code>ALTER</code>、<code>RENAME</code>、<code>TRUNCATE</code>等。</li>
</ul>
</li>
<li><strong>DML（Data Manipulation Language、数据操作语言）</strong>，用于添加、删除、更新和查询数据库记录，并检查数据完整性。
<ul>
<li>主要的语句关键字包括<code>INSERT</code>、<code>DELETE</code>、<code>UPDATE</code>、<code>SELECT</code>等。</li>
<li><strong>SELECT是SQL语言的基础，最为重要。</strong></li>
</ul>
</li>
<li><strong>DCL（Data Control Language、数据控制语言）</strong>，用于定义数据库、表、字段、用户的访问权限和安全级别。
<ul>
<li>主要的语句关键字包括<code>GRANT</code>、<code>REVOKE</code>、<code>COMMIT</code>、<code>ROLLBACK</code>、<code>SAVEPOINT</code>等。</li>
</ul>
</li>
</ul>`,r:{minutes:8.99,words:2698},y:"a",t:"03 【基本的SELECT语句】"},["/back_end/database/mysql/03","/back_end/database/mysql/03.md"]],["v-f051d172","/back_end/database/mysql/04.html",{d:173312745e4,e:`<h1> 04 【运算符】</h1>
<h2> 1.算术运算符</h2>
<p>算术运算符主要用于数学运算，其可以连接运算符前后的两个数值或表达式，对数值或表达式进行加（+）、减（-）、乘（*）、除（/）和取模（%）运算。</p>
<figure><img src="https://i0.hdslb.com/bfs/album/90d6eee192d929e531c353282859ee52b26e98f4.png" alt="image-20221010160251241" tabindex="0" loading="lazy"><figcaption>image-20221010160251241</figcaption></figure>`,r:{minutes:17.56,words:5268},y:"a",t:"04 【运算符】"},["/back_end/database/mysql/04","/back_end/database/mysql/04.md"]],["v-ece82034","/back_end/database/mysql/05.html",{d:173312745e4,e:`<h1> 05 【排序与分页】</h1>
<h2> 1.排序数据</h2>
<p><mark>注：如果没有使用排序操作，默认情况下查询返回的数据是按照添加数据的顺序显示的。</mark></p>
<h3> 1.1 排序规则</h3>
<ul>
<li>使用 ORDER BY 子句排序
<ul>
<li><strong>ASC（ascend）: 升序（默认）</strong></li>
<li><strong>DESC（descend）:降序</strong></li>
</ul>
</li>
<li><strong>ORDER BY 子句在SELECT语句的结尾。</strong></li>
</ul>`,r:{minutes:3,words:900},y:"a",t:"05 【排序与分页】"},["/back_end/database/mysql/05","/back_end/database/mysql/05.md"]],["v-e97e6ef6","/back_end/database/mysql/06.html",{d:173312745e4,e:`<h1> 06 【多表查询】</h1>
<p>多表查询，也称为关联查询，指两个或更多个表一起完成查询操作。</p>
<p>前提条件：这些一起查询的表之间是有关系的（一对一、一对多），它们之间一定是有关联字段，这个关联字段可能建立了外键，也可能没有建立外键。比如：员工表和部门表，这两个表依靠“部门编号”进行关联。</p>
<h2> 1.一个案例引发的多表连接</h2>
<h3> 1.1 案例说明</h3>
<figure><img src="https://i0.hdslb.com/bfs/album/dbd56a91d1ed9a3ef59ecfc9082d72debefdf6b9.png" alt="image-20221011201046719" tabindex="0" loading="lazy"><figcaption>image-20221011201046719</figcaption></figure>`,r:{minutes:19.1,words:5729},y:"a",t:"06 【多表查询】"},["/back_end/database/mysql/06","/back_end/database/mysql/06.md"]],["v-e614bdb8","/back_end/database/mysql/07.html",{d:173312745e4,e:`<h1> 07 【单行函数】</h1>
<h2> 1. 函数的理解</h2>
<h3> 1.1 什么是函数</h3>
<p>函数在计算机语言的使用中贯穿始终，函数的作用是什么呢？它可以把我们经常使用的代码封装起来，需要的时候直接调用即可。这样既<code>提高了代码效率</code>，又<code>提高了可维护性</code>。在 SQL 中我们也可以使用函数对检索出来的数据进行函数操作。使用这些函数，可以极大地<code>提高用户对数据库的管理效率</code>。</p>
<figure><img src="https://i0.hdslb.com/bfs/album/460077e65245adcb0a1a7441d28b59a6be497978.png" alt="image-20221017184722798" tabindex="0" loading="lazy"><figcaption>image-20221017184722798</figcaption></figure>`,r:{minutes:17.96,words:5389},y:"a",t:"07 【单行函数】"},["/back_end/database/mysql/07","/back_end/database/mysql/07.md"]],["v-e2ab0c7a","/back_end/database/mysql/08.html",{d:173312745e4,e:`<h1> 08 【聚合函数与分组查询】</h1>
<p>我们上一章讲到了 SQL 单行函数。实际上 SQL 函数还有一类，叫做聚合（或聚集、分组）函数，它是对一组数据进行汇总的函数，输入的是一组数据的集合，输出的是单个值。</p>
<h2> 1.聚合函数介绍</h2>
<ul>
<li><strong>什么是聚合函数</strong></li>
</ul>
<p>聚合函数作用于一组数据，并对一组数据返回一个值。</p>
<figure><img src="https://i0.hdslb.com/bfs/album/0c825ef5012603764fac185b18d2618c36221385.png" alt="image-20221020133737930" tabindex="0" loading="lazy"><figcaption>image-20221020133737930</figcaption></figure>`,r:{minutes:10.25,words:3076},y:"a",t:"08 【聚合函数与分组查询】"},["/back_end/database/mysql/08","/back_end/database/mysql/08.md"]],["v-df415b3c","/back_end/database/mysql/09.html",{d:173312745e4,e:`<h1> 09 【子查询】</h1>
<p>子查询指一个查询语句嵌套在另一个查询语句内部的查询，这个特性从MySQL 4.1开始引入。</p>
<p>SQL 中子查询的使用大大增强了 SELECT 查询的能力，因为很多时候查询需要从结果集中获取数据，或者需要从同一个表中先计算得出一个数据结果，然后与这个数据结果（可能是某个标量，也可能是某个集合）进行比较。</p>
<p>先写结论：在SELECT中，除了GROUP BY 和 LIMIT之外，其他位置都可以声明子查询！</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">(</span>存在聚合函数<span class="token punctuation">)</span>

<span class="token keyword">FROM</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">(</span><span class="token keyword">LEFT</span> <span class="token operator">/</span> <span class="token keyword">RIGHT</span><span class="token punctuation">)</span><span class="token keyword">JOIN</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token keyword">ON</span> 多表的连接条件 

<span class="token punctuation">(</span><span class="token keyword">LEFT</span> <span class="token operator">/</span> <span class="token keyword">RIGHT</span><span class="token punctuation">)</span><span class="token keyword">JOIN</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">ON</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

<span class="token keyword">WHERE</span> 不包含聚合函数的过滤条件

<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

<span class="token keyword">HAVING</span> 包含聚合函数的过滤条件

<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token keyword">ASC</span> <span class="token operator">/</span> <span class="token keyword">DESC</span> <span class="token punctuation">)</span>

<span class="token keyword">LIMIT</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:14.07,words:4220},y:"a",t:"09 【子查询】"},["/back_end/database/mysql/09","/back_end/database/mysql/09.md"]],["v-942c1fe8","/back_end/database/mysql/10.html",{d:173312745e4,e:`<h1> 10 【创建和管理表】</h1>
<h2> 1. 基础知识</h2>
<h3> 1.1 一条数据存储的过程</h3>
<p><code>存储数据是处理数据的第一步</code>。只有正确地把数据存储起来，我们才能进行有效的处理和分析。否则，只能是一团乱麻，无从下手。</p>
<p>那么，怎样才能把用户各种经营相关的、纷繁复杂的数据，有序、高效地存储起来呢？ 在 MySQL 中，一个完整的数据存储过程总共有 4 步，分别是创建数据库、确认字段、创建数据表、插入数据。</p>
<figure><img src="https://i0.hdslb.com/bfs/album/c96a21089d33165b5ab9876aa51f4d9c421afa4d.png" alt="image-20221021202501281" tabindex="0" loading="lazy"><figcaption>image-20221021202501281</figcaption></figure>`,r:{minutes:13.16,words:3949},y:"a",t:"10 【创建和管理表】"},["/back_end/database/mysql/10","/back_end/database/mysql/10.md"]],["v-90c26eaa","/back_end/database/mysql/11.html",{d:173312745e4,e:`<h1> 11 【数据处理之增删改】</h1>
<h2> 1. 插入数据</h2>
<h3> 1.1 实际问题</h3>
<figure><img src="https://i0.hdslb.com/bfs/album/4890bfaeeb5a2d2296d6ecf595c88adef38cbdb8.png" alt="image-20221021205941367" tabindex="0" loading="lazy"><figcaption>image-20221021205941367</figcaption></figure>
<h3> 1.2 方式1：VALUES的方式添加</h3>`,r:{minutes:12.73,words:3819},y:"a",t:"11 【数据处理之增删改】"},["/back_end/database/mysql/11","/back_end/database/mysql/11.md"]],["v-5f498b30","/front_end/css_advanced/less/01.html",{d:173312745e4,e:`<h1> Less基础</h1>
<h2> 1.维护CSS的弊端</h2>
<p>CSS 是一门非程序式语言，没有变量、函数、SCOPE（作用域）等概念。</p>
<ul>
<li>CSS 需要书写大量看似没有逻辑的代码，CSS 冗余度是比较高的</li>
<li>不方便维护及扩展，不利于复用</li>
<li>CSS 没有很好的计算能力</li>
<li>非前端开发工程师来讲，往往会因为缺少 CSS 编写经验而很难写出组织良好且易于维护的 CSS 代码项目</li>
</ul>
<h2> 2.Less介绍</h2>
<p>Less（Leaner Style Sheets 的缩写）是一门 CSS 扩展语言，也称为 CSS 预处理器。</p>`,r:{minutes:8.05,words:2415},y:"a",t:"Less基础"},["/front_end/css_advanced/less/01","/front_end/css_advanced/less/01.md"]],["v-6b5bab47","/front_end/css_advanced/scss/01.html",{d:173312745e4,e:`<h1> 01 【Sass的安装使用】</h1>
<h2> 1.介绍</h2>
<h3> 1.1 CSS预处理技术，及种类介绍</h3>
<p>什么是css预处理技术</p>
<ul>
<li>CSS 预处理器定义了一种新的语言，其基本思想是，用一种专门的编程语言，为 CSS 增加了一些编程的特性，将 CSS 作为目标生成文件，然后开发者就只要使用这种语言进行编码工作。</li>
<li>通俗的说，“CSS 预处理器用一种专门的编程语言，进行 Web 页面样式设计，然后再编译成正常的 CSS 文件，以供项目使用。CSS 预处理器为 CSS 增加一些编程的特性，无需考虑浏览器的兼容性问题”，例如你可以在 CSS 中使用变量、简单的逻辑程序、函数（如变量$main-color）等等在编程语言中的一些基本特性，可以让你的 CSS 更加简洁、适应性更强、可读性更佳，更易于代码的维护等诸多好处。</li>
</ul>`,r:{minutes:8.6,words:2581},y:"a",t:"01 【Sass的安装使用】"},["/front_end/css_advanced/scss/01","/front_end/css_advanced/scss/01.md"]],["v-6d1083e6","/front_end/css_advanced/scss/02.html",{d:173312745e4,e:`<h1> 02 【Sass语法介绍-变量】</h1>
<p>sass有两种语法格式Sass(早期的缩进格式：Indented Sass)和SCSS(Sassy CSS)</p>
<p>目前最常用的是SCSS，任何css文件将后缀改为scss，都可以直接使用<code>Sassy CSS</code>语法编写。</p>
<p><strong>所有有效的 CSS 也同样都是有效的 SCSS。</strong></p>
<h1> Sass语法介绍-变量</h1>
<h2> 1.前言</h2>
<p>Sass 为 CSS 引入了变量这一功能，在实际项目中使用最普遍的除了 Sass 嵌套 就是 Sass 变量了，你可以把 CSS 的某个<strong>属性值</strong>定义为变量，然后在项目中任何需要它的地方来使用它。本节主要讲解 Sass 变量的主要语法：变量的声明、引用、作用域等，同时还会讲解在实际项目中一般是如何来维护 Sass 变量的。</p>`,r:{minutes:6.93,words:2078},y:"a",t:"02 【Sass语法介绍-变量】"},["/front_end/css_advanced/scss/02","/front_end/css_advanced/scss/02.md"]],["v-6ec55c85","/front_end/css_advanced/scss/03.html",{d:173312745e4,e:`<h1> 03 【Sass语法介绍-嵌套】</h1>
<h2> 1.前言</h2>
<p>在企业的实际项目开发中，Sass 的嵌套可以说是非常非常有用的，它可以让你的 CSS 代码易于管理和维护，看起来也比较清晰，这也是 Sass 中很基础的一个知识点，首先掌握这个至关重要！在此章节我们将学习 Sass 嵌套中的嵌套规则、属性嵌套、父选择器和占位符选择器。Sass 嵌套式一个很基础也很简单的语法，关键在于要多多练习使用！</p>
<h2> 2.什么是嵌套？</h2>
<p>在一般编写 CSS 的时候呢，我们一遍一遍的编写相同的选择器去处理深层级的样式，而 Sass 给你一种轻松的方式，你可以在一个样式规则中直接编写另一个样式规则，而不是重复相同的选择器，Sass 将自动组合内外部的选择器。</p>`,r:{minutes:6.41,words:1922},y:"a",t:"03 【Sass语法介绍-嵌套】"},["/front_end/css_advanced/scss/03","/front_end/css_advanced/scss/03.md"]],["v-707a3524","/front_end/css_advanced/scss/04.html",{d:173312745e4,e:`<h1> 04 【Sass语法介绍-运算】</h1>
<h2> 1.前言</h2>
<p>运算是一种通过已知量可能的组合，获得新的量的行为。Sass 中也为我们提供了各种各样的运算，以便我们更好的处理样式代码。本节我们将学习 Sass 中的数字运算、关系运算、除法运算、颜色运算、字符串运算等等…</p>
<h2> 2.什么是 Sass 运算？</h2>
<p>运算从我们小时候就开始学习了，那在 Sass 中的运算是什么呢？
在我们写样式的时候，很多场景我们是需要用到计算的，而一般我们都是通过 javascript 来计算，CSS3 中也提供了用于运算的函数 calc() ，可能在工作中你使用过这个函数用来计算长度值，能用到的地方也非常有限。而在 Sass 中，扩展出了很多计算方法，使得你不止是可以计算长度值，还能做一些关系运算甚至颜色值的运算等等。这使我们可以把运算应用于更多的场景，来解决更复杂的问题，<strong>运算</strong>也是 Sass 的基本特性之一，下面我们一起来学习它～</p>`,r:{minutes:11.97,words:3590},y:"a",t:"04 【Sass语法介绍-运算】"},["/front_end/css_advanced/scss/04","/front_end/css_advanced/scss/04.md"]],["v-722f0dc3","/front_end/css_advanced/scss/05.html",{d:173312745e4,e:`<h1> 05 【Sass语法介绍-插值】</h1>
<h2> 1.前言</h2>
<p>在很多编程器语言中都有插值这个概念，在 Sass 样式表的任何地方几乎都可以使用插值，你可以将这些包裹在 #{} 中来使用，所以记住在 Sass 中使用插值的方式是 <strong>#{}</strong> ，本节我们一起来看一下插值在 Sass 中的使用场景以及它的语法</p>
<h2> 2.什么是插值？</h2>
<p>插值也就是可以在<strong>特定的区域</strong>插入一段表达式或者插入一个变量，以此来实现内容动态变换的需求。</p>
<blockquote>
<p>类似 es6 中的插值表达，插值几乎可以用在任何地方。</p>
<p>Sass的插值写法为：<code>#{$variable_name}</code>。</p>
</blockquote>`,r:{minutes:5.84,words:1751},y:"a",t:"05 【Sass语法介绍-插值】"},["/front_end/css_advanced/scss/05","/front_end/css_advanced/scss/05.md"]],["v-73e3e662","/front_end/css_advanced/scss/06.html",{d:173312745e4,e:`<h1> 06 【Sass语法介绍-函数】</h1>
<blockquote>
<p>这篇文章只更新了颜色函数，由于Sass使用时间过短，其它函数暂时不太会用</p>
</blockquote>
<h2> 1.前言</h2>
<p>Sass 中的函数，这在 Sass 中是比较强大的一个功能，同时使用场景和语法也比较多，所以本节内容篇幅较长，但你一定要好好学习， Sass 函数很重要！在 Sass 中函数中几乎可以用到前面你学的所有章节的内容，所以说函数包括万象同时功能也非常强大，本节我们将详细讲解 Sass 中各种函数的功能和用法。</p>
<h2> 2.什么是函数？</h2>
<p>函数是一段可以被另外的程序或代码调用的“子程序”，一个函数由称为函数体的一系列代码语句组成，并且函数也可以接收值，在大多数语言中函数都是这样的，Sass 中的函数也是一样。</p>`,r:{minutes:3.32,words:997},y:"a",t:"06 【Sass语法介绍-函数】"},["/front_end/css_advanced/scss/06","/front_end/css_advanced/scss/06.md"]],["v-7598bf01","/front_end/css_advanced/scss/07.html",{d:173312745e4,e:`<h1> 07 【Sass语法介绍-控制指令】</h1>
<h2> 1.前言</h2>
<p>Sass 为我们提供了很多控制指令，使得我们可以更高效的来控制样式的输出，或者在函数中进行逻辑控制。本节内容我们就来讲解什么是 Sass 控制指令？它能用来做什么？它将使你更方便的编写 Sass 。</p>
<h2> 2.什么是 Sass 控制指令</h2>
<p>控制指令，故名思义它是通过条件来控制某些逻辑的，提到条件你首先肯定想到了 if ，没错这是 Sass 控制指令的一种，除了这个还有循环，所以 Sass 一共为我们提供了 4 种控制指令，它们分别是：</p>
<ul>
<li>@if 指令</li>
<li>@each 指令</li>
<li>@for 指令</li>
<li>@while 指令</li>
</ul>`,r:{minutes:7.43,words:2230},y:"a",t:"07 【Sass语法介绍-控制指令】"},["/front_end/css_advanced/scss/07","/front_end/css_advanced/scss/07.md"]],["v-774d97a0","/front_end/css_advanced/scss/08.html",{d:173312745e4,e:`<h1> 08 【Sass语法介绍-混合指令】</h1>
<h2> 1.前言</h2>
<p>混合指令在 Sass 中也是一个比较常用的指令，在前面我们讲解的内容中有编写过混合指令 @mixin ，本节我们将详细讲解混合指令 @mixin 的语法包括定义混合指令和引用混合指令等等，混合指令同样非常好用，我们一起来学习它吧。</p>
<h2> 2.什么是 Sass 混合指令</h2>
<p>混合指令的出现使你可以定义在样式表中重复使用的样式，这可以使你免去编写过多重复的样式，而且在混合指令 @mixin 中你也可以做一些逻辑处理。混合指令是一个很好用的指令，它将帮你更合理的维护样式代码，学会这种方式写起样式来也很便利，下面我们开始详细的讲解它。</p>`,r:{minutes:6.88,words:2064},y:"a",t:"08 【Sass语法介绍-混合指令】"},["/front_end/css_advanced/scss/08","/front_end/css_advanced/scss/08.md"]],["v-7902703f","/front_end/css_advanced/scss/09.html",{d:173312745e4,e:`<h1> 09 【Sass语法介绍-函数指令】</h1>
<h2> 1.前言</h2>
<p>在之前的章节我们学习过 Sass 提供的各种各样的函数，那么如果我们需要自定定义函数来使用就需要用到<strong>函数指令 @function</strong>了。本节内容我们来学习 Sass 函数指令的语法和使用，在 Sass 中自定义函数是必须要掌握的！</p>
<h2> 2.什么是 Sass 函数指令</h2>
<p>函数指令也叫自定义函数让你可以容易的处理各种逻辑和定义复杂的操作，而且你可以在任何需要的地方复用函数，这使得我们可以抽离出来一些常见的公式或者逻辑，我们先来看下它长什么样，代码如下：</p>`,r:{minutes:4.3,words:1291},y:"a",t:"09 【Sass语法介绍-函数指令】"},["/front_end/css_advanced/scss/09","/front_end/css_advanced/scss/09.md"]],["v-c2e5e42e","/front_end/css_advanced/scss/10.html",{d:173312745e4,e:`<h1> 10 【Sass语法介绍-继承】</h1>
<h2> 1.前言</h2>
<p>在我们编写样式的时候，很多情况下我们几个不同的类会有相同的样式代码，同时这几个类又有其自己的样式代码，这使我们就可以通过 Sass 提供的<strong>继承</strong> @extend 来实现。本节内容我们将讲解 Sass 继承的语法以及继承的多重延伸等等，在 Sass 中继承也是非常好用的功能之一，所以你要重点熟悉 @extend 的用法，下面我们一起来学习它。</p>
<h2> 2.什么是 Sass 继承</h2>
<p>继承，我们也叫做代码重用，在 Sass 中支持对样式进行继承。</p>
`,r:{minutes:5.29,words:1587},y:"a",t:"10 【Sass语法介绍-继承】"},["/front_end/css_advanced/scss/10","/front_end/css_advanced/scss/10.md"]],["v-bf7c32f0","/front_end/css_advanced/scss/11.html",{d:173312745e4,e:`<h1> 11【Sass语法介绍-导入】</h1>
<h2> 1.前言</h2>
<p>在 CSS 中我们可以通过 @import 来导入一个样式文件，Sass 扩展了 CSS 的 @import 规则，使得可以导入 CSS 后缀的样式文件和 Scss 后缀的样式文件，并且提供了对 mixin 、函数和变量的访问。</p>
<p>与 CSS 的 @import 不同的是， CSS 使用 @import 导入文件是在页面渲染的时候发起多个 http 请求来获取文件内容，而 Sass 的导入 @import 是在编译时获取文件内容导入的。</p>
<h2> 2.语法详情</h2>
<p>Sass 的导入和 CSS 中的导入语法类似，只不过在 Sass 中<strong>可以导入用逗号分隔的多个文件</strong>， 我们举个例子看下：</p>`,r:{minutes:4.93,words:1479},y:"a",t:"11【Sass语法介绍-导入】"},["/front_end/css_advanced/scss/11","/front_end/css_advanced/scss/11.md"]],["v-8403a022","/front_end/css_advanced/tailwind/01.html",{d:173312745e4,e:`<h1> 01 【Tailwind CSS 安装使用】</h1>
<blockquote>
<p>**简介：**Tailwind CSS 是一个功能类优先的 CSS 框架，它集成了诸如 flex, pt-4, text-center 和 rotate-90 这样的的类，它们能直接在脚本标记语言中组合起来，构建出任何设计。</p>
</blockquote>
<h2> 1.使用 CDN 快速体验 Tailwind CSS</h2>
<blockquote>
<p>使用 Play CDN 直接在浏览器中试用 Tailwind，无需任何构建步骤。Play CDN 仅用于开发目的，不是生产的最佳选择。</p>
</blockquote>`,r:{minutes:2.12,words:637},y:"a",t:"01 【Tailwind CSS 安装使用】"},["/front_end/css_advanced/tailwind/01","/front_end/css_advanced/tailwind/01.md"]],["v-8099eee4","/front_end/css_advanced/tailwind/02.html",{d:173312745e4,e:`<h1> 02 【TailWind CSS 初体验】</h1>
<p>经过上一篇 <code>Tailwind CSS</code> 的学习，现在已经安装好了，万事俱备，只欠东风。这篇文章不往后学习，先来找找<strong>成就感!</strong>，体验一把 <code>Tailwind CSS</code> 的案例。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>../dist/output.css<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-gray-600<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mb-5<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bg-gray-700 p-4 text-white<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Hello world<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container mx-auto<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-center text-5xl<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Hello TailWind CSS<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>my-5<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex justify-center<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./showTwo.html<span class="token punctuation">"</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span>
              <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.ziruchu.com/uploads/slideshow/2019061744096.png<span class="token punctuation">"</span></span>
              <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>shadow-lg border-2 border-sky-500 my-5 align-middle<span class="token punctuation">"</span></span>
            <span class="token punctuation">/&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mt-5<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bg-gray-300 p-4 text-black<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>你好，TailWind CSS。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.21,words:363},y:"a",t:"02 【TailWind CSS 初体验】"},["/front_end/css_advanced/tailwind/02","/front_end/css_advanced/tailwind/02.md"]],["v-7d303da6","/front_end/css_advanced/tailwind/03.html",{d:173312745e4,e:`<h1> 03 【布局之Aspect-Ratio Container Box-Decoration-Break Object-Fit Object-Position】</h1>
<h2> 1.布局-纵横比（Aspect Ratio）</h2>
<h3> 1.1 快速参考</h3>
<p>用于控制元素纵横比的实用程序。</p>
<table>
<thead>
<tr>
<th>class</th>
<th>Properties</th>
</tr>
</thead>
<tbody>
<tr>
<td>aspect-auto</td>
<td>aspect-ratio: auto;</td>
</tr>
<tr>
<td>aspect-square</td>
<td>aspect-ratio: 1 / 1;</td>
</tr>
<tr>
<td>aspect-video</td>
<td>aspect-ratio: 16 / 9;</td>
</tr>
</tbody>
</table>`,r:{minutes:12.66,words:3799},y:"a",t:"03 【布局之Aspect-Ratio Container Box-Decoration-Break Object-Fit Object-Position】"},["/front_end/css_advanced/tailwind/03","/front_end/css_advanced/tailwind/03.md"]],["v-79c68c68","/front_end/css_advanced/tailwind/04.html",{d:173312745e4,e:`<h1> 04 【布局之Overscroll Behavior  定位偏移量】</h1>
<h2> 1.布局-Overscroll Behavior</h2>
<p><code>overscroll behavior</code> 用于控制浏览器到达滚动区域边界时的行为的功能类。这个属性可以用来防止在有多个滚动区域的页面中出现不必要的滚动。</p>
<h3> 1.1 快速参考</h3>
<table>
<thead>
<tr>
<th>Class</th>
<th>Properties</th>
</tr>
</thead>
<tbody>
<tr>
<td>overscroll-auto</td>
<td>overscroll-behavior: auto;</td>
</tr>
<tr>
<td>overscroll-contain</td>
<td>overscroll-behavior: contain;</td>
</tr>
<tr>
<td>overscroll-none</td>
<td>overscroll-behavior: none;</td>
</tr>
<tr>
<td>overscroll-y-auto</td>
<td>overscroll-behavior-y: auto;</td>
</tr>
<tr>
<td>overscroll-y-contain</td>
<td>overscroll-behavior-y: contain;</td>
</tr>
<tr>
<td>overscroll-y-none</td>
<td>overscroll-behavior-y: none;</td>
</tr>
<tr>
<td>overscroll-x-auto</td>
<td>overscroll-behavior-x: auto;</td>
</tr>
<tr>
<td>overscroll-x-contain</td>
<td>overscroll-behavior-x: contain;</td>
</tr>
<tr>
<td>overscroll-x-none</td>
<td>overscroll-behavior-x: none;</td>
</tr>
</tbody>
</table>`,r:{minutes:6.49,words:1947},y:"a",t:"04 【布局之Overscroll Behavior  定位偏移量】"},["/front_end/css_advanced/tailwind/04","/front_end/css_advanced/tailwind/04.md"]],["v-6f4eb639","/front_end/front_end_base/html_css/01.html",{d:173312745e4,e:`<h1> 01 【HTML简介】</h1>
<h2> 1.网页</h2>
<h3> 1.1 什么是网页？</h3>
<p>**网站：**利用前端技术制作的网页集合。</p>
<p>**网页：**构成网站的基本元素，通常是 HTML 格式的文件（.htm 或 .html）必须通过浏览器来阅读。</p>
<h3> 1.2 什么是HTML?</h3>
<p>**超文本：**由图片、声音、动画、视频……构成且可以相互链接的文本。</p>
<p>**HTML：**超文本标记语言（HTML 不是编程语言，而是由一套标记标签构成的标记语言）。</p>
<h3> 1.3 网页的形成</h3>
<p>前端代码开发 ——&gt; 浏览器解析、渲染代码 ——&gt; 呈现 Web 页面。</p>`,r:{minutes:10.17,words:3050},y:"a",t:"01 【HTML简介】"},["/front_end/front_end_base/html_css/01","/front_end/front_end_base/html_css/01.md"]],["v-71038ed8","/front_end/front_end_base/html_css/02.html",{d:173312745e4,e:`<h1> 02 【字符实体与语义标签(上)】</h1>
<h2> 1.字符实体</h2>
<p>有些时候，在HTML中不能直接书写一些特殊符号，如：</p>
<ul>
<li>
<p>多个连续的空格（在网页中编写的多个空格默认情况会自动被浏览器解析为一个空格）</p>
</li>
<li>
<p>比如字母两侧的大于小于号（可能会被认为是标签并解析）</p>
</li>
</ul>
<p>如果我们需要在网页中书写这些特殊的符号，则需要使用html中的实体（转义字符）实体的语法：<code>&amp;实体的名字;</code>，如：</p>
<table>
<thead>
<tr>
<th>实体名称</th>
<th>显示结果</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>&amp;nbsp;</code></td>
<td>\`\`</td>
<td>空格</td>
</tr>
<tr>
<td><code>&amp;gt;</code></td>
<td>&gt;</td>
<td>大于号</td>
</tr>
<tr>
<td><code>&amp;lt;</code></td>
<td>&lt;</td>
<td>小于号</td>
</tr>
<tr>
<td><code>&amp;amp;</code></td>
<td>&amp;</td>
<td>与</td>
</tr>
<tr>
<td><code>&amp;copy;</code></td>
<td>©</td>
<td>版权</td>
</tr>
<tr>
<td><code>&amp;reg;</code></td>
<td>®</td>
<td>注册商标</td>
</tr>
<tr>
<td><code>&amp;trade;</code></td>
<td>™</td>
<td>商标</td>
</tr>
<tr>
<td><code>&amp;times;</code></td>
<td>×</td>
<td>乘号</td>
</tr>
<tr>
<td><code>&amp;divide;</code></td>
<td>÷</td>
<td>除号</td>
</tr>
<tr>
<td><code>&amp;iquest;</code></td>
<td>¿</td>
<td>倒问号</td>
</tr>
</tbody>
</table>`,r:{minutes:24.05,words:7216},y:"a",t:"02 【字符实体与语义标签(上)】"},["/front_end/front_end_base/html_css/02","/front_end/front_end_base/html_css/02.md"]],["v-72b86777","/front_end/front_end_base/html_css/03.html",{d:173312745e4,e:`<h1> 03 【语义标签(下) CSS简介】</h1>
<h2> 1.语义标签(下)</h2>
<h3> 1.1 表格</h3>
<h4> 1.1.1 表格的主要作用</h4>
<p>表格主要用于显示、展示数据。因为它可以让数据显示得非常的规整，可读性非常好。特别是后台展示数据的时候，能够熟练运用表格就显得很重要。一个清爽简约的表格能够把繁杂的数据表现得很有条理（合理的使用表格也能够有效提高 SEO）。</p>
<p>**注意：**表格不是用来布局页面的，而是用来展示数据的。<strong>表格常用于表单数据的 “布局”</strong>。</p>
<blockquote>
<p>特别强调，表格是用于表单数据的 “布局”，而不是页面的布局！</p>
</blockquote>`,r:{minutes:23.42,words:7027},y:"a",t:"03 【语义标签(下) CSS简介】"},["/front_end/front_end_base/html_css/03","/front_end/front_end_base/html_css/03.md"]],["v-746d4016","/front_end/front_end_base/html_css/04.html",{d:173312745e4,e:`<h1> 04 【CSS选择器 】</h1>
<h2> 1.CSS选择器的作用</h2>
<p>选择器就是根据不同的需求把不同的标签选出来，这就是选择器的作用，简单来说，就是：选择标签用的。</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">h1</span> <span class="token punctuation">{</span>
	<span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
	<span class="token property">font-size</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:22.04,words:6613},y:"a",t:"04 【CSS选择器 】"},["/front_end/front_end_base/html_css/04","/front_end/front_end_base/html_css/04.md"]],["v-762218b5","/front_end/front_end_base/html_css/05.html",{d:173312745e4,e:`<h1> 05 【CSS引入方式 CSS的元素显示模式】</h1>
<h2> 1.CSS的引入方式</h2>
<h3> 1.1 CSS的三种引入方式</h3>
<p>按照 CSS 样式书写的位置（或者引入的方式），CSS 样式表可以分为三大类：</p>
<ul>
<li>行内样式表（行内式）</li>
<li>内部样式表（嵌入式）</li>
<li>外部样式表（外链式）</li>
</ul>
<h3> 1.2 行内样式表</h3>
<p>行内样式表（内联样式表）是在元素标签内部的 style 属性中设定 CSS 样式，适合于修改简单样式。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span> <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">&gt;</span></span>
    青春不常在，抓紧谈恋爱
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:6.77,words:2031},y:"a",t:"05 【CSS引入方式 CSS的元素显示模式】"},["/front_end/front_end_base/html_css/05","/front_end/front_end_base/html_css/05.md"]],["v-77d6f154","/front_end/front_end_base/html_css/06.html",{d:173312745e4,e:`<h1> 06 【CSS字体属性 CSS文本属性】</h1>
<h2> 1.CSS字体属性</h2>
<p>CSS Fonts（字体）属性用于定义：<code>字体系列</code>、<code>大小</code>、<code>粗细</code>、和 <code>文字样式</code>（如：斜体）。</p>
<h3> 1.1 字体族</h3>
<p><code>font-family</code> 字体族（字体的格式）</p>
<p>CSS 使用 font-family 属性定义文本的字体系列。</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
	<span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">"Microsoft YaHei"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">div</span> <span class="token punctuation">{</span>
	<span class="token property">font-family</span><span class="token punctuation">:</span> Arial<span class="token punctuation">,</span> <span class="token string">"Microsoft YaHei"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:14.28,words:4283},y:"a",t:"06 【CSS字体属性 CSS文本属性】"},["/front_end/front_end_base/html_css/06","/front_end/front_end_base/html_css/06.md"]],["v-798bc9f3","/front_end/front_end_base/html_css/07.html",{d:173312745e4,e:`<h1> 07 【Emmet语法 三大特性及单位】</h1>
<h2> 1.Emmet语法</h2>
<p><code>Emmet</code> 语法的前身是 <code>Zen coding</code>，它使用缩写，来提高 <code>html/css</code> 的编写速度,，<code>VSCode</code> 内部已经集成该语法。</p>
<ul>
<li>快速生成 HTML 结构语法</li>
<li>快速生成 CSS 样式语法</li>
</ul>
<h3> 1.1 快速生成HTML结构语法</h3>
<ul>
<li>生成标签直接输入标签名按 <kbd>tab</kbd> 键即可，比如 <code>div</code> 然后 <kbd>tab</kbd> 键， 就可以生成 <code>&lt;div&gt;&lt;/div&gt;</code></li>
<li>如果想要生成多个相同标签加上 <code>*</code> 就可以了，比如 <code>div*3</code> 就可以快速生成 3 个 <code>div</code></li>
<li>如果有父子级关系的标签，可以用 <code>&gt;</code> 比如 <code>ul&gt;li</code> 就可以了</li>
<li>如果有兄弟关系的标签，用 <code>+</code> 就可以了 比如 <code>div+p</code></li>
<li>如果生成带有 <code>类名</code> 或者 <code>id</code> 名字的标签， 直接写 <code>标签.demo</code> 或者 <code>标签#demo</code> 再按下 tab 键就可以了</li>
<li>如果生成的事物有顺序，可以用自增符号 <code>$</code></li>
<li>如果想要在生成的标签内部写内容可以用 <code>{}</code> 表示</li>
</ul>`,r:{minutes:10.44,words:3132},y:"a",t:"07 【Emmet语法 三大特性及单位】"},["/front_end/front_end_base/html_css/07","/front_end/front_end_base/html_css/07.md"]],["v-7b40a292","/front_end/front_end_base/html_css/08.html",{d:173312745e4,e:`<h1> 08 【盒模型(上) 盒模型(下)】</h1>
<h2> 1.盒模型(上)</h2>
<h3> 1.1 文档流（normalflow）</h3>
<p>网页是一个多层的结构，一层摁着一层</p>
<p>通过CSS可以分别为每一层来设置样式，作为用户来讲只能看到最顶上一层</p>
<p>这些层中，最底下的一层称为文档流</p>
<p>文档流是网页的基础我们所创建的元素默认都是在文档流中进行排列</p>
<p>对于我们来元素主要有两个状态</p>
<ul>
<li>
<p>在文档流中</p>
</li>
<li>
<p>不在文档流中（脱离文档流）</p>
</li>
</ul>
<h3> 1.2 块元素</h3>`,r:{minutes:19.68,words:5903},y:"a",t:"08 【盒模型(上) 盒模型(下)】"},["/front_end/front_end_base/html_css/08","/front_end/front_end_base/html_css/08.md"]],["v-7cf57b31","/front_end/front_end_base/html_css/09.html",{d:173312745e4,e:`<h1> 09 【浮动 常见网页布局】</h1>
<h2> 1.浮动</h2>
<h3> 1.1 传统网页布局的三种方式</h3>
<p>网页布局的本质：用 CSS 来摆放盒子，把盒子摆放到相应位置。</p>
<p>CSS 提供了三种传统布局方式（简单说就是盒子如何进行排列）。</p>
<ul>
<li>普通流（标准流）</li>
<li>浮动</li>
<li>定位</li>
</ul>
<blockquote>
<p>这里指的只是传统布局，其实还有一些特殊高级的布局方式。</p>
</blockquote>
<h3> 1.2 标准流（普通流/文档流）</h3>
<p>所谓的标准流：就是标签按照规定好的默认方式排列。</p>`,r:{minutes:10.16,words:3049},y:"a",t:"09 【浮动 常见网页布局】"},["/front_end/front_end_base/html_css/09","/front_end/front_end_base/html_css/09.md"]],["v-baffce4a","/front_end/front_end_base/html_css/10.html",{d:173312745e4,e:`<h1> 10 【高度塌陷与BFC】</h1>
<h2> 1.高度塌陷</h2>
<p>在浮动布局中，父元素的高度默认是被子元素撑开的</p>
<p>当子元素浮动后，其会完全脱离文档流，子元素从文档流中脱离将会无法撑起父元素的高度，导致父元素的高度丢失</p>
<p>父元素高度丢失以后，其下的元素会自动上移，导致页面的布局混乱</p>
<figure><img src="https://i0.hdslb.com/bfs/album/cb831d42c016c9f6ddd693d5c1d9135dafa780fc.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,r:{minutes:10.18,words:3054},y:"a",t:"10 【高度塌陷与BFC】"},["/front_end/front_end_base/html_css/10","/front_end/front_end_base/html_css/10.md"]],["v-b7961d0c","/front_end/front_end_base/html_css/11.html",{d:173312745e4,e:`<h1> 11 【定位】</h1>
<h2> 1.为什么需要定位？</h2>
<p>提问： 以下情况使用标准流或者浮动能实现吗？</p>
<ol>
<li>
<p>某个元素可以<strong>自由</strong>的在一个盒子内移动位置，并且压住其他盒子。</p>
</li>
<li>
<p>当我们滚动窗口的时候，盒子是<strong>固定</strong>屏幕某个位置的。</p>
</li>
</ol>
<p>以上效果，标准流或浮动都无法快速实现，此时需要定位来实现。</p>
<p>所以：</p>
<ol>
<li>浮动可以让多个块级盒子一行没有缝隙排列显示， 经常用于横向排列盒子。</li>
<li>定位则是可以让盒子自由的在某个盒子内移动位置或者固定屏幕中某个位置，并且可以压住其他盒子。</li>
</ol>`,r:{minutes:20.52,words:6157},y:"a",t:"11 【定位】"},["/front_end/front_end_base/html_css/11","/front_end/front_end_base/html_css/11.md"]],["v-b42c6bce","/front_end/front_end_base/html_css/12.html",{d:173312745e4,e:`<h1> 12 【网页布局总结 元素的显示与隐藏】</h1>
<h2> 1.网页布局总结</h2>
<p>通过盒子模型，清楚知道大部分 html 标签是一个盒子。</p>
<p>通过 CSS 浮动、定位可以让每个盒子排列成为网页。</p>
<p>一个完整的网页，是标准流、浮动、定位一起完成布局的，每个都有自己的专门用法。</p>
<ol>
<li>标准流</li>
</ol>
<p>可以让盒子上下排列或者左右排列，垂直的块级盒子显示就用标准流布局。</p>
<ol start="2">
<li>浮动</li>
</ol>
<p>可以让多个块级元素一行显示或者左右对齐盒子，多个块级盒子水平显示就用浮动布局。</p>`,r:{minutes:7.59,words:2278},y:"a",t:"12 【网页布局总结 元素的显示与隐藏】"},["/front_end/front_end_base/html_css/12","/front_end/front_end_base/html_css/12.md"]],["v-b0c2ba90","/front_end/front_end_base/html_css/13.html",{d:173312745e4,e:`<h1> 13 【精灵图 图标字体 CSS三角 鼠标样式 溢出省略号】</h1>
<h2> 1.精灵图</h2>
<h3> 1.1为什么需要精灵图？</h3>
<p>一个网页中往往会应用很多小的背景图像作为修饰，当网页中的图像过多时，服务器就会频繁地接收和发送
请求图片，造成服务器请求压力过大，这将大大降低页面的加载速度。</p>
<p>因此，为了有效地减少服务器接收和发送请求的次数，提高页面的加载速度，出现了 CSS 精灵技术（也称 CSS Sprites、CSS 雪碧）。</p>
<p>核心原理：将网页中的一些小背景图像整合到一张大图中 ，这样服务器只需要一次请求就可以了。</p>
<p>精灵技术目的：为了有效地减少服务器接收和发送请求的次数，提高页面的加载速度。</p>`,r:{minutes:14.68,words:4404},y:"a",t:"13 【精灵图 图标字体 CSS三角 鼠标样式 溢出省略号】"},["/front_end/front_end_base/html_css/13","/front_end/front_end_base/html_css/13.md"]],["v-ad590952","/front_end/front_end_base/html_css/14.html",{d:173312745e4,e:`<h1> 14 【布局技巧】</h1>
<h2> 1.margin负值的运用</h2>
<p>如何实现以下效果呢？</p>
<p>多个盒子紧挨在一起，当鼠标放在其中一个盒子上时该盒子的边框自动变色。</p>
<figure><img src="https://i0.hdslb.com/bfs/album/17311749cf5513780db25d586fdf9992dca69a90.png" alt="image-20220731125920552" tabindex="0" loading="lazy"><figcaption>image-20220731125920552</figcaption></figure>`,r:{minutes:4.88,words:1464},y:"a",t:"14 【布局技巧】"},["/front_end/front_end_base/html_css/14","/front_end/front_end_base/html_css/14.md"]],["v-a9ef5814","/front_end/front_end_base/html_css/15.html",{d:173312745e4,e:`<h1> 15【背景 渐变色】</h1>
<h2> 1.背景</h2>
<h3> 1.1 背景颜色</h3>
<p><code>background-color</code> 属性定义了元素的背景颜色。</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-color</span><span class="token punctuation">:</span> 颜色值<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:11.99,words:3598},y:"a",t:"15【背景 渐变色】"},["/front_end/front_end_base/html_css/15","/front_end/front_end_base/html_css/15.md"]],["v-a685a6d6","/front_end/front_end_base/html_css/16.html",{d:173312745e4,e:`<h1> 16 【过渡 动画】</h1>
<h2> 1.过渡</h2>
<h3> 1.1 概述</h3>
<p>在CSS中用于设置过渡特效的属性是 transition，该属性允许CSS的属性值在一定的时间区间内平滑地过渡。这种效果可以在鼠标悬浮<code>（:hover）</code>、鼠标单击<code>（:active）</code>、表单元素获得焦点<code>（:focus）</code>或对元素任何改变以及在JavaScript中某些事件执行后触发，并圆滑（若不对时间曲线进行特殊设置）地以动画效果改变CSS的属性值。</p>
<p>该属性能够对CSS中绝大部分属性的变化生效，但不能对CSS属性值不为“数值”的属性生效，即只有当属性的值为一个数值的时候，该属性才能生效。数值包含“纯数字”、“像素数值”、“百分比数值”、“十六进制数值”等CSS属性的值为数值的元素生效。如：当元素的宽度为<code>“width:100px”</code>变化为<code>“width:200px”</code>的时候过渡效果能够生效，但当元素的宽度为<code>“width:100px”</code>变化为<code>“width:auto”</code>的时候，就不会产生过渡效果了。当一个元素的字体颜色为<code>“#f31e1d”</code>，变化为<code>“#2396fd”</code>的时候过渡有效，但当它的字体颜色由<code>“#f31e1d”</code>变为<code>“transparent”</code>的时候过渡就不会产生效果了。这一点在使用中需要留意。</p>`,r:{minutes:11.02,words:3305},y:"a",t:"16 【过渡 动画】"},["/front_end/front_end_base/html_css/16","/front_end/front_end_base/html_css/16.md"]],["v-a31bf598","/front_end/front_end_base/html_css/17.html",{d:173312745e4,e:`<h1> 17 【2D转换 3D转换 浏览器私有前缀】</h1>
<h2> 1.2D转换</h2>
<p>转换（transform）是 CSS3 中具有颠覆性的特征之一。可以实现元素的位移、旋转、缩放等效果。</p>
<p>转换（transform）你可以简单理解为变形。变形就是指通过css来改变元素的形状或位置，变形不会影响到页面的布局,<code>transform</code>用来设置元素的变形效果。</p>
<ul>
<li>移动：translate</li>
<li>旋转：rotate</li>
<li>缩放：scale</li>
</ul>
<h3> 1.1 二维坐标系</h3>
`,r:{minutes:18.3,words:5489},y:"a",t:"17 【2D转换 3D转换 浏览器私有前缀】"},["/front_end/front_end_base/html_css/17","/front_end/front_end_base/html_css/17.md"]],["v-9fb2445a","/front_end/front_end_base/html_css/18.html",{d:173312745e4,e:`<h1> 18 【移动Web开发之流式布局】</h1>
<h2> 1.移动端基础</h2>
<h3> 1.1 浏览器现状</h3>
<p>由于移动端浏览器的发展比较晚，所以主流移动端浏览器的内核都是基于 <code>Webkit</code> 内核打造的。</p>
<p>我们在进行移动端的页面开发时，兼容性主要考虑 <code>Webkit</code> 内核。</p>
<h3> 1.2 手机屏幕现状</h3>
<p>目前无论是 安卓 还是 IOS，移动端设备的屏幕尺寸非常多，碎片化非常严重。</p>
<p>但是，前端页面开发者无需关注这些分辨率，因为我们常用的尺寸单位是 <code>px</code>。</p>`,r:{minutes:17.69,words:5308},y:"a",t:"18 【移动Web开发之流式布局】"},["/front_end/front_end_base/html_css/18","/front_end/front_end_base/html_css/18.md"]],["v-9c48931c","/front_end/front_end_base/html_css/19.html",{d:173312745e4,e:`<h1> 19 【flex布局】</h1>
<h2> 1.flex布局体验</h2>
<h3> 1.1 传统布局与flex布局</h3>
<p>【传统布局】</p>
<ul>
<li>
<p>兼容性好</p>
</li>
<li>
<p>布局繁琐</p>
</li>
<li>
<p>局限性，不能在移动端很好的布局</p>
</li>
</ul>
<p>【flex布局】</p>
<ul>
<li>操作方便，布局极为简单，移动端应用很广泛</li>
<li>PC 端浏览器支持情况较差</li>
<li>IE11 或更低版本不支持或仅部分支持</li>
</ul>
<p>建议：</p>
<ol>
<li>如果是 PC 端页面布局，我们还是建议使用传统布局</li>
<li>如果是移动端或者不考虑兼容性问题的 PC 端页面布局，推荐使用 flex 弹性布局</li>
</ol>`,r:{minutes:27.09,words:8127},y:"a",t:"19 【flex布局】"},["/front_end/front_end_base/html_css/19","/front_end/front_end_base/html_css/19.md"]],["v-513357c8","/front_end/front_end_base/html_css/20.html",{d:173312745e4,e:`<h1> 20 【rem适配布局】</h1>
<p>【思考】</p>
<ol>
<li>页面布局文字能否随着屏幕大小变化而变化？</li>
<li>流式布局和 flex 布局主要针对于宽度布局，那高度如何设置？</li>
<li>怎么样让屏幕发生变化的时候元素高度和宽度等比例缩放？</li>
</ol>
<h2> 1.rem单位</h2>
<p><code>rem</code>（root em）是一个相对单位，类似于 <code>em</code>，em 是父元素字体大小。</p>
<p>不同的是 rem 的基准是<strong>相对于 html 元素的字体大小</strong>。</p>
<p>比如，根元素（html）设置 <code>font-size=12px</code>，非根元素设置 <code>width: 2rem;</code> 则换成 px 表示就是 24px。</p>`,r:{minutes:12.51,words:3754},y:"a",t:"20 【rem适配布局】"},["/front_end/front_end_base/html_css/20","/front_end/front_end_base/html_css/20.md"]],["v-4dc9a68a","/front_end/front_end_base/html_css/21.html",{d:173312745e4,e:`<h1> 21 【vw布局】</h1>
<h2> 1.移动端布局</h2>
<p>移动端布局 --- flex 布局</p>
<p>为了实现可以适配移动端，页面元素可以宽度和高度等比例缩放</p>
<p>需要移动端适配有如下方案：</p>
<p>（1）rem</p>
<p>市场比较常见：</p>
<ol>
<li>需要不断修改 html 文字大小</li>
<li>需要媒体查询 media</li>
<li>需要 flexible.js</li>
</ol>
<p>（2）vw / vh</p>
<p>未来的趋势：</p>
<ol>
<li>省去各种判断和修改</li>
<li>代表：bilibili、小米……</li>
</ol>`,r:{minutes:2.18,words:655},y:"a",t:"21 【vw布局】"},["/front_end/front_end_base/html_css/21","/front_end/front_end_base/html_css/21.md"]],["v-4a5ff54c","/front_end/front_end_base/html_css/22.html",{d:173312745e4,e:`<h1> 22 【响应式布局】</h1>
<h2> 1.响应式开发</h2>
<h3> 1.1 响应式开发原理</h3>
<p>就是使用媒体查询针对不同宽度的设备进行布局和样式的设置，从而适配不同设备的目的。</p>
<table>
<thead>
<tr>
<th>设备划分</th>
<th>尺寸区间</th>
</tr>
</thead>
<tbody>
<tr>
<td>超小屏幕（手机）</td>
<td>&lt; 768px</td>
</tr>
<tr>
<td>小屏设备（平板）</td>
<td>&gt;= 768px ~ &lt; 992px</td>
</tr>
<tr>
<td>中等屏幕（桌面显示器）</td>
<td>&gt;= 992px ~ &lt; 1200px</td>
</tr>
<tr>
<td>宽屏设置（大桌面显示器）</td>
<td>&gt;= 1200px</td>
</tr>
</tbody>
</table>`,r:{minutes:11.49,words:3446},y:"a",t:"22 【响应式布局】"},["/front_end/front_end_base/html_css/22","/front_end/front_end_base/html_css/22.md"]],["v-46f6440e","/front_end/front_end_base/html_css/23.html",{d:173312745e4,e:`<h1> 23 【grid布局】</h1>
<h2> 1.概述</h2>
<p>网格布局（Grid）是最强大的 CSS 布局方案。</p>
<p>它将网页划分成一个个网格，可以任意组合不同的网格，做出各种各样的布局。以前，只能通过复杂的 CSS 框架达到的效果，现在浏览器内置了。</p>
<img src="https://i0.hdslb.com/bfs/album/2729550f5b4e45483dd0521776047c455a544861.png" alt="img" style="zoom:50%;">
<p>上图这样的布局，就是 Grid 布局的拿手好戏。</p>
<p>Grid 布局与 Flex 布局有一定的相似性，都可以指定容器内多个项目的位置。但是它们也存在重大区别。</p>`,r:{minutes:20.49,words:6147},y:"a",t:"23 【grid布局】"},["/front_end/front_end_base/html_css/23","/front_end/front_end_base/html_css/23.md"]],["v-3ae21c12","/front_end/front_end_base/javascript/01.html",{d:173312745e4,e:`<h1> 01 【基础语法与基本数据类型】</h1>
<table>
<thead>
<tr>
<th></th>
<th>语言</th>
<th>功能</th>
</tr>
</thead>
<tbody>
<tr>
<td>结构层</td>
<td>HTML</td>
<td>搭建结构、放置部件、描述语义</td>
</tr>
<tr>
<td>样式层</td>
<td>CSS</td>
<td>美化网页、实现布局</td>
</tr>
<tr>
<td>行为层</td>
<td>JavaScript</td>
<td>实现交互效果、数据收发、表单验证等</td>
</tr>
</tbody>
</table>`,r:{minutes:16.01,words:4804},y:"a",t:"01 【基础语法与基本数据类型】"},["/front_end/front_end_base/javascript/01","/front_end/front_end_base/javascript/01.md"]],["v-37786ad4","/front_end/front_end_base/javascript/02.html",{d:173312745e4,e:`<h1> 02 【JS表达式与操作符】</h1>
<p><strong>什么是表达式和运算符？</strong></p>
<p>表达式：由 操作数 和 运算符 组成的式子。</p>
<p>表达式的分类：算术、关系、逻辑、赋值、综合。</p>
<h2> 1.算术表达式</h2>
<h3> 1.1 算术运算符</h3>
<table>
<thead>
<tr>
<th>意义</th>
<th>运算符</th>
</tr>
</thead>
<tbody>
<tr>
<td>加</td>
<td><code>+</code></td>
</tr>
<tr>
<td>减</td>
<td><code>-</code></td>
</tr>
<tr>
<td>乘</td>
<td><code>*</code></td>
</tr>
<tr>
<td>除</td>
<td><code>/</code></td>
</tr>
<tr>
<td>取余</td>
<td><code>%</code></td>
</tr>
</tbody>
</table>`,r:{minutes:6.98,words:2094},y:"a",t:"02 【JS表达式与操作符】"},["/front_end/front_end_base/javascript/02","/front_end/front_end_base/javascript/02.md"]],["v-340eb996","/front_end/front_end_base/javascript/03.html",{d:173312745e4,e:`<h1> 03 【流程控制语句】</h1>
<h2> 1.基本介绍</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token operator">*</span>
 <span class="token operator">*</span> 流程控制语句
 <span class="token operator">*</span> 	<span class="token operator">-</span> <span class="token constant">JS</span>中的程序是从上到下一行一行执行的
 <span class="token operator">*</span> 	<span class="token operator">-</span> 通过流程控制语句可以控制程序执行流程，
 <span class="token operator">*</span> 		使程序可以根据一定的条件来选择执行
 <span class="token operator">*</span>  <span class="token operator">-</span> 语句的分类：
 <span class="token operator">*</span> 		<span class="token number">1.</span>条件判断语句
 <span class="token operator">*</span> 		<span class="token number">2.</span>条件分支语句
 <span class="token operator">*</span> 		<span class="token number">3.</span>循环语句			
 <span class="token operator">*</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:5.51,words:1654},y:"a",t:"03 【流程控制语句】"},["/front_end/front_end_base/javascript/03","/front_end/front_end_base/javascript/03.md"]],["v-30a50858","/front_end/front_end_base/javascript/04.html",{d:173312745e4,e:`<h1> 04 【对象】</h1>
<h2> 1.对象基础</h2>
<h3> 1.1 对象介绍</h3>
<p>对象是JS中的引用数据类型<br>
<strong>对象是一种复合数据类型，在对象中可以保存多个不同数据类型的属性</strong><br>
使用typeof检查一个对象时，会返回object</p>
<p>对象（object）是 “键值对” 的集合，表示属性和值的映射关系。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> xiaoming <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'小明'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">'男'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hobbies</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'足球'</span><span class="token punctuation">,</span> <span class="token string">'编程'</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:10.03,words:3008},y:"a",t:"04 【对象】"},["/front_end/front_end_base/javascript/04","/front_end/front_end_base/javascript/04.md"]],["v-2d3b571a","/front_end/front_end_base/javascript/05.html",{d:173312745e4,e:`<h1> 05 【函数（上）】</h1>
<h2> 1.函数基本介绍</h2>
<p>函数就是语句的封装，可以让这些代码方便地被复用。</p>
<p>函数具有 “一次定义，多次调用” 的优点。</p>
<p>使用函数，可以简化代码，让代码更具有可读性。</p>
<p><strong>函数也是一个对象，也具有普通对象的功能（能有属性）</strong><br>
使用typeof检查一个函数时会返回function</p>
<p>和变量类似，函数必须先定义然后才能使用。</p>
<p>使用 <code>function</code> 关键字定义函数。</p>
<blockquote>
<p>function：函数、功能。</p>
</blockquote>`,r:{minutes:20.83,words:6250},y:"a",t:"05 【函数（上）】"},["/front_end/front_end_base/javascript/05","/front_end/front_end_base/javascript/05.md"]],["v-29d1a5dc","/front_end/front_end_base/javascript/06.html",{d:173312745e4,e:`<h1> 06 【函数（下）】</h1>
<h2> 1.用new操作符调用函数</h2>
<p>现在，我们学习一种新的函数调用方式：<code>new 函数()</code></p>
<p>你可能知道 new 操作符和 “面向对象” 息息相关，但是现在我们先不探讨它的 “面向对象” 意义，而是先把用 new 调用函数的执行步骤和它上下文弄清楚。</p>
<h3> 1.1 用new调用函数的四步走</h3>
<p>JS 规定，使用 new 操作符调用函数会进行 “四步走”：</p>
<ol>
<li>函数体内会自动创建出一个空白对象</li>
<li>函数的上下文（this）会指向这个对象</li>
<li>函数体内的语句会执行</li>
<li>函数会自动返回上下文对象，即使函数没有 return 语句</li>
</ol>`,r:{minutes:21.58,words:6475},y:"a",t:"06 【函数（下）】"},["/front_end/front_end_base/javascript/06","/front_end/front_end_base/javascript/06.md"]],["v-2667f49e","/front_end/front_end_base/javascript/07.html",{d:173312745e4,e:`<h1> 07 【数组及常用方法】</h1>
<h2> 1.什么是数组</h2>
<p>数组（Array），顾名思义：用来存储一组相关值的类型。</p>
<p>数组也是一个对象，是一个用来存储数据的对象和Object类似，但是它的存储效率比普通对象要高<br>
数组中保存的内容我们称为元素	<br>
数组使用索引（index）来操作元素<br>
索引指由0开始的整数</p>
<p>数组可以方便地对一组值进行求和、计算平均值、逐项遍历等操作。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> scoreArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">87</span><span class="token punctuation">,</span> <span class="token number">89</span><span class="token punctuation">,</span> <span class="token number">93</span><span class="token punctuation">,</span> <span class="token number">71</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">68</span><span class="token punctuation">,</span> <span class="token number">94</span><span class="token punctuation">,</span> <span class="token number">88</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:16.84,words:5051},y:"a",t:"07 【数组及常用方法】"},["/front_end/front_end_base/javascript/07","/front_end/front_end_base/javascript/07.md"]],["v-22fe4360","/front_end/front_end_base/javascript/08.html",{d:173312745e4,e:`<h1> 08 【标准库之Date对象】</h1>
<p>掌握 Date 日期对象的使用，动态获取当前计算机的时间。</p>
<h2> 1.普通函数的用法</h2>
<p><code>Date</code>对象可以作为普通函数直接调用，返回一个代表当前时间的字符串。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// "Tue Dec 01 2021 09:34:43 GMT+0800 (CST)"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:12.01,words:3603},y:"a",t:"08 【标准库之Date对象】"},["/front_end/front_end_base/javascript/08","/front_end/front_end_base/javascript/08.md"]],["v-1f949222","/front_end/front_end_base/javascript/09.html",{d:173312745e4,e:`<h1> 09 【标准库之Math对象和String对象】</h1>
<h2> 1.Math对象</h2>
<p><code>Math</code>是 JavaScript 的原生对象，提供各种数学功能。该对象不是构造函数，不能生成实例，所有的属性和方法都必须在<code>Math</code>对象上调用。</p>
<p><code>Math</code>对象提供以下一些静态方法。</p>
<ul>
<li><code>Math.abs()</code>：绝对值</li>
<li><code>Math.ceil()</code>：向上取整</li>
<li><code>Math.floor()</code>：向下取整</li>
<li><code>Math.max()</code>：最大值</li>
<li><code>Math.min()</code>：最小值</li>
<li><code>Math.round()</code>：四舍五入</li>
<li><code>Math.random()</code>：随机数</li>
</ul>`,r:{minutes:10.55,words:3165},y:"a",t:"09 【标准库之Math对象和String对象】"},["/front_end/front_end_base/javascript/09","/front_end/front_end_base/javascript/09.md"]],["v-15c05499","/front_end/front_end_base/javascript/10.html",{d:173312745e4,e:`<h1> 10 【标准库之RegExp对象】</h1>
<h2> 1.什么是正则表达式</h2>
<p>正则表达式（regular expression）是一种表达文本模式（即字符串结构）的方法，有点像字符串的模板，常常用来按照“给定模式”匹配文本。</p>
<blockquote>
<p>比如：验证手机号、验证邮箱、验证身份证……</p>
</blockquote>
<h3> 1.1 快速感知正则表达式</h3>
<p>用一个例子快速演示正则表达式基本使用方法：检查某个字符串是否是 6 位数字。</p>
<figure><img src="https://i0.hdslb.com/bfs/album/8078abc7f846e58388c282220840b6950b34f7a2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,r:{minutes:24.91,words:7474},y:"a",t:"10 【标准库之RegExp对象】"},["/front_end/front_end_base/javascript/10","/front_end/front_end_base/javascript/10.md"]],["v-17752d38","/front_end/front_end_base/javascript/11.html",{d:173312745e4,e:`<h1> 11 【标准库之JSON对象 JSON5】</h1>
<h2> 1.JSON 格式</h2>
<p>JSON 格式（JavaScript Object Notation 的缩写）是一种用于数据交换的文本格式，2001年由 Douglas Crockford 提出，目的是取代繁琐笨重的 XML 格式。</p>
<p>相比 XML 格式，JSON 格式有两个显著的优点：书写简单，一目了然；符合 JavaScript 原生语法，可以由解释引擎直接处理，不用另外添加解析代码。所以，JSON 迅速被接受，已经成为各大网站交换数据的标准格式，并被写入标准。</p>
<p>每个 JSON 对象就是一个值，可能是一个数组或对象，也可能是一个原始类型的值。总之，只能是一个值，不能是两个或更多的值。</p>`,r:{minutes:9.6,words:2881},y:"a",t:"11 【标准库之JSON对象 JSON5】"},["/front_end/front_end_base/javascript/11","/front_end/front_end_base/javascript/11.md"]],["v-192a05d7","/front_end/front_end_base/javascript/12.html",{d:173312745e4,e:`<h1> 12 【语法之错误处理机制】</h1>
<p>错误处理机制是指预估代码执行过程中可能发生的错误，然后最大程度的避免错误的发生导致整个程序无法继续运行</p>
<h2> 15.1 Error 实例对象</h2>
<p>JavaScript 解析或运行时，一旦发生错误，引擎就会抛出一个错误对象。JavaScript 原生提供<code>Error</code>构造函数，所有抛出的错误都是这个构造函数的实例。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> err <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'出错了'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
err<span class="token punctuation">.</span>message <span class="token comment">// "出错了"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:9.79,words:2936},y:"a",t:"12 【语法之错误处理机制】"},["/front_end/front_end_base/javascript/12","/front_end/front_end_base/javascript/12.md"]],["v-1adede76","/front_end/front_end_base/javascript/13.html",{d:173312745e4,e:`<h1> 13 【语法之编程风格】</h1>
<h2> 1.概述</h2>
<p>“编程风格”（programming style）指的是编写代码的样式规则。不同的程序员，往往有不同的编程风格。</p>
<p>有人说，编译器的规范叫做“语法规则”（grammar），这是程序员必须遵守的；而编译器忽略的部分，就叫“编程风格”（programming style），这是程序员可以自由选择的。这种说法不完全正确，程序员固然可以自由选择编程风格，但是好的编程风格有助于写出质量更高、错误更少、更易于维护的程序。</p>
<p>所以，编程风格的选择不应该基于个人爱好、熟悉程度、打字量等因素，而要考虑如何尽量使代码清晰易读、减少出错。你选择的，不是你喜欢的风格，而是一种能够清晰表达你的意图的风格。这一点，对于 JavaScript 这种语法自由度很高的语言尤其重要。</p>`,r:{minutes:9.49,words:2848},y:"a",t:"13 【语法之编程风格】"},["/front_end/front_end_base/javascript/13","/front_end/front_end_base/javascript/13.md"]],["v-1c93b715","/front_end/front_end_base/javascript/14.html",{d:173312745e4,e:`<h1> 14 【语法之console 对象与控制台】</h1>
<h2> 1.console 对象</h2>
<p><code>console</code>对象是 JavaScript 的原生对象，它有点像 Unix 系统的标准输出<code>stdout</code>和标准错误<code>stderr</code>，可以输出各种信息到控制台，并且还提供了很多有用的辅助方法。</p>
<p><code>console</code>的常见用途有两个。</p>
<ul>
<li>调试程序，显示网页代码运行时的错误信息。</li>
<li>提供了一个命令行接口，用来与网页代码互动。</li>
</ul>`,r:{minutes:7.72,words:2316},y:"a",t:"14 【语法之console 对象与控制台】"},["/front_end/front_end_base/javascript/14","/front_end/front_end_base/javascript/14.md"]],["v-1e488fb4","/front_end/front_end_base/javascript/15.html",{d:173312745e4,e:`<h1> 15 【严格模式】</h1>
<p>除了正常的运行模式，JavaScript 还有第二种运行模式：严格模式（strict mode）。顾名思义，这种模式采用更加严格的 JavaScript 语法。</p>
<p>同样的代码，在正常模式和严格模式中，可能会有不一样的运行结果。一些在正常模式下可以运行的语句，在严格模式下将不能运行。</p>
<h2> 1.设计目的</h2>
<p>早期的 JavaScript 语言有很多设计不合理的地方，但是为了兼容以前的代码，又不能改变老的语法，只能不断添加新的语法，引导程序员使用新语法。</p>
<p>严格模式是从 ES5 进入标准的，主要目的有以下几个。</p>`,r:{minutes:6.54,words:1963},y:"a",t:"15 【严格模式】"},["/front_end/front_end_base/javascript/15","/front_end/front_end_base/javascript/15.md"]],["v-1ffd6853","/front_end/front_end_base/javascript/16.html",{d:173312745e4,e:`<h1> 16 【DOM概述】</h1>
<h2> 1.DOM基本概念</h2>
<p>DOM（Document Object Model，文档对象模型）是 JavaScript 操作 HTML 文档的接口，使文档操作变得非常优雅、简便。</p>
<p>DOM 最大的特点就是将 HTML 文档表示为 “节点树”。</p>
<h2> 2.DOM节点树</h2>
<p>一个文档的所有节点，按照所在的层级，可以抽象成一种树状结构。这种树状结构就是 DOM 树。它有一个顶层节点，下一层都是顶层节点的子节点，然后子节点又有自己的子节点，就这样层层衍生出一个金字塔结构，又像一棵树。</p>
<p>浏览器原生提供<code>document</code>节点，代表整个文档。</p>`,r:{minutes:2.22,words:667},y:"a",t:"16 【DOM概述】"},["/front_end/front_end_base/javascript/16","/front_end/front_end_base/javascript/16.md"]],["v-21b240f2","/front_end/front_end_base/javascript/17.html",{d:173312745e4,e:`<h1> 17 【Document 节点】</h1>
<h2> 1.Document 节点的概述</h2>
<p><code>document</code>节点对象代表整个文档，每张网页都有自己的<code>document</code>对象。<code>window.document</code>属性就指向这个对象。只要浏览器开始载入 HTML 文档，该对象就存在了，可以直接使用。</p>
<p><code>document</code>对象有不同的办法可以获取。</p>
<ul>
<li>正常的网页，直接使用<code>document</code>或<code>window.document</code>。</li>
<li><code>iframe</code>框架里面的网页，使用<code>iframe</code>节点的<code>contentDocument</code>属性。</li>
<li>Ajax 操作返回的文档，使用<code>XMLHttpRequest</code>对象的<code>responseXML</code>属性。</li>
<li>内部节点的<code>ownerDocument</code>属性。</li>
</ul>`,r:{minutes:12.15,words:3644},y:"a",t:"17 【Document 节点】"},["/front_end/front_end_base/javascript/17","/front_end/front_end_base/javascript/17.md"]],["v-23671991","/front_end/front_end_base/javascript/18.html",{d:173312745e4,e:`<h1> 18 【节点的关系和内部操作】</h1>
<h2> 1.节点的关系</h2>
<figure><img src="https://i0.hdslb.com/bfs/album/a8821cf029e2fa7e8eb3db98db0c675360d99ae4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<table>
<thead>
<tr>
<th>关系</th>
<th>考虑所有结点</th>
</tr>
</thead>
<tbody>
<tr>
<td>子节点</td>
<td><code>childNodes</code></td>
</tr>
<tr>
<td>父节点</td>
<td><code>parentNode</code></td>
</tr>
<tr>
<td>第一个子节点</td>
<td><code>firstChild</code></td>
</tr>
<tr>
<td>最后一个子节点</td>
<td><code>lastChild</code></td>
</tr>
<tr>
<td>前一个兄弟节点</td>
<td><code>previousSibling</code></td>
</tr>
<tr>
<td>后一个兄弟节点</td>
<td><code>nextSibling</code></td>
</tr>
</tbody>
</table>`,r:{minutes:8.74,words:2623},y:"a",t:"18 【节点的关系和内部操作】"},["/front_end/front_end_base/javascript/18","/front_end/front_end_base/javascript/18.md"]],["v-251bf230","/front_end/front_end_base/javascript/19.html",{d:173312745e4,e:`<h1> 19 【节点的增删改查】</h1>
<h2> 1.节点的创建</h2>
<p><code>document.createElement</code>方法用来生成元素节点，并返回该节点。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> newDiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:6.26,words:1878},y:"a",t:"19 【节点的增删改查】"},["/front_end/front_end_base/javascript/19","/front_end/front_end_base/javascript/19.md"]],["v-4aa68fda","/front_end/front_end_base/javascript/20.html",{d:173312745e4,e:`<h1> 20 【节点的集合】</h1>
<h2> 1.NodeList 接口</h2>
<h3> 1.1 概述</h3>
<p><code>NodeList</code>实例是一个类似数组的对象，它的成员是节点对象。通过以下方法可以得到<code>NodeList</code>实例。</p>
<ul>
<li><code>Node.childNodes</code></li>
<li><code>document.querySelectorAll()</code>等节点搜索方法</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>childNodes <span class="token keyword">instanceof</span> <span class="token class-name">NodeList</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:4.14,words:1242},y:"a",t:"20 【节点的集合】"},["/front_end/front_end_base/javascript/20","/front_end/front_end_base/javascript/20.md"]],["v-4c5b6879","/front_end/front_end_base/javascript/21.html",{d:173312745e4,e:`<h1> 21【节点的属性】</h1>
<p>HTML 元素包括标签名和若干个键值对，这个键值对就称为“属性”（attribute）。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>a id<span class="token operator">=</span><span class="token string">"test"</span> href<span class="token operator">=</span><span class="token string">"http://www.example.com"</span><span class="token operator">&gt;</span>
  链接
<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:8.66,words:2598},y:"a",t:"21【节点的属性】"},["/front_end/front_end_base/javascript/21","/front_end/front_end_base/javascript/21.md"]],["v-4e104118","/front_end/front_end_base/javascript/22.html",{d:173312745e4,e:`<h1> 22 【事件监听】</h1>
<p>DOM 允许我们书写 JavaScript 代码以让 HTML 元素作出反应。</p>
<p>什么是 “事件”：用户与网页的交互动作。</p>
<h2> 1.什么是事件监听</h2>
<p>“监听” 顾名思义，就是让计算机随时能够发现这个事件发生了，从而执行程序员预先编写好的一些程序。</p>
<p>设置事件监听的方法主要有 <code>onxxx</code> 和 <code>addEventListener()</code> 两种，二者的区别将在 “事件传播” 一课中介绍。</p>
<blockquote>
<p>原始的事件处理方法：“直接通过事件绑定函数”</p>
<p>比如：</p>
<p>HTML：<code>&lt;button onclick="add();"&gt;点击&lt;/button&gt;</code></p>
<p>JS：<code>function add() { alert("相加"); }</code></p>
<p>以上方式不推荐使用！！！</p>
</blockquote>`,r:{minutes:8.55,words:2565},y:"a",t:"22 【事件监听】"},["/front_end/front_end_base/javascript/22","/front_end/front_end_base/javascript/22.md"]],["v-4fc519b7","/front_end/front_end_base/javascript/23.html",{d:173312745e4,e:`<h1> 23 【事件对象与鼠标事件】</h1>
<blockquote>
<p>这里只是通过鼠标事件简单了解一下事件对象，后续会有专门的章节结合事件传播讲解事件对象</p>
</blockquote>
<h2> 1.什么是事件对象</h2>
<p><strong>任意事件类型被触发时与事件相关的信息会被以对象的形式记录下来</strong>，我们称这个对象为事件对象。</p>
<p>这个参数通常用单词 <code>event</code> 或字母 <code>e</code> 来表示。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>oBox<span class="token punctuation">.</span><span class="token function-variable function">onmousemove</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 对象 e 就是这次事件的“事件对象”</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:7.51,words:2254},y:"a",t:"23 【事件对象与鼠标事件】"},["/front_end/front_end_base/javascript/23","/front_end/front_end_base/javascript/23.md"]],["v-5179f256","/front_end/front_end_base/javascript/24.html",{d:173312745e4,e:`<h1> 24 【键盘事件】</h1>
<h2> 1.键盘事件的种类</h2>
<p>键盘事件由用户击打键盘触发，主要有<code>keydown</code>、<code>keypress</code>、<code>keyup</code>三个事件，它们都继承了<code>KeyboardEvent</code>接口。</p>
<ul>
<li><code>keydown</code>：按下键盘时触发。</li>
<li><code>keypress</code>：按下有值的键时触发，即按下 Ctrl、Alt、Shift、Meta 这样无值的键，这个事件不会触发。对于有值的键，按下时先触发<code>keydown</code>事件，再触发这个事件。</li>
<li><code>keyup</code>：松开键盘时触发该事件。</li>
</ul>`,r:{minutes:4.2,words:1261},y:"a",t:"24 【键盘事件】"},["/front_end/front_end_base/javascript/24","/front_end/front_end_base/javascript/24.md"]],["v-532ecaf5","/front_end/front_end_base/javascript/25.html",{d:173312745e4,e:`<h1> 25 【进度事件和表单事件】</h1>
<h2> 1.文档的加载</h2>
<p>浏览器在加载一个页面时，是按照自上向下的顺序加载的，加载一行执行一行。
如果将js代码编写到页面的上边，当代码执行时，页面中的DOM对象还没有加载，
此时将会无法正常获取到DOM对象，导致DOM操作失败。</p>
<p>解决方式一：
可以将<code>js</code>代码编写到body的下边</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>  
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>  
  
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">  
			<span class="token keyword">var</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"btn"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
			btn<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  
		  
			<span class="token punctuation">}</span><span class="token punctuation">;</span>  
	</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:5.26,words:1578},y:"a",t:"25 【进度事件和表单事件】"},["/front_end/front_end_base/javascript/25","/front_end/front_end_base/javascript/25.md"]],["v-54e3a394","/front_end/front_end_base/javascript/26.html",{d:173312745e4,e:`<h1> 26 【触摸事件和其它常见事件】</h1>
<h2> 1.触摸操作概述</h2>
<p>浏览器的触摸 API 由三个部分组成。</p>
<ul>
<li>Touch：一个触摸点</li>
<li>TouchList：多个触摸点的集合</li>
<li>TouchEvent：触摸引发的事件实例</li>
</ul>
<p><code>Touch</code>接口的实例对象用来表示触摸点（一根手指或者一根触摸笔），包括位置、大小、形状、压力、目标元素等属性。有时，触摸动作由多个触摸点（多根手指）组成，多个触摸点的集合由<code>TouchList</code>接口的实例对象表示。<code>TouchEvent</code>接口的实例对象代表由触摸引发的事件，只有触摸屏才会引发这一类事件。</p>`,r:{minutes:11.73,words:3519},y:"a",t:"26 【触摸事件和其它常见事件】"},["/front_end/front_end_base/javascript/26","/front_end/front_end_base/javascript/26.md"]],["v-56987c33","/front_end/front_end_base/javascript/27.html",{d:173312745e4,e:`<h1> 27 【三大家族scroll、offset、client】</h1>
<p>JS的三大家族主要是Offset、Scroll、Client，通过对三大家族不同属性的灵活使用，我们可以模拟出很多炫酷的JS动画，增强界面的视觉感染力！让静态页面活起来！</p>
<p>注意以下的值全是不带px的，单纯的数字</p>
<figure><img src="https://i0.hdslb.com/bfs/album/a363913f6564155d01e6a619e0689d5fc5d355b0.png" alt="image-20220825182901210" tabindex="0" loading="lazy"><figcaption>image-20220825182901210</figcaption></figure>`,r:{minutes:8.14,words:2443},y:"a",t:"27 【三大家族scroll、offset、client】"},["/front_end/front_end_base/javascript/27","/front_end/front_end_base/javascript/27.md"]],["v-584d54d2","/front_end/front_end_base/javascript/28.html",{d:173312745e4,e:`<h1> 28 【事件传播】</h1>
<h2> 1.事件冒泡</h2>
<p><strong>事件冒泡概念</strong>:
当一个元素的事件被触发时，同样的事件将会在该元素的所有祖先元素中依次被触发。这一过程被称为事件冒泡
简单理解：当一个元素触发事件后，会依次向上调用所有父级元素的同名事件
事件冒泡是默认存在的</p>
<p><strong>鼠标经过事件：</strong>
<code>mouseover</code> 和 <code>mouseout</code> 会有冒泡效果
<code>mouseenter</code> 和 <code>mouseleave</code> 没有冒泡效果(推荐)</p>`,r:{minutes:15.35,words:4605},y:"a",t:"28 【事件传播】"},["/front_end/front_end_base/javascript/28","/front_end/front_end_base/javascript/28.md"]],["v-5a022d71","/front_end/front_end_base/javascript/29.html",{d:173312745e4,e:`<h1> 29【定时器和延时器】</h1>
<h2> 1.定时器</h2>
<h3> 1.1 基本介绍</h3>
<p><code>setInterval()</code> 函数可以重复调用一个函数，在每次调用之间有固定的时间间隔。</p>
<blockquote>
<p>Interval：间隔</p>
</blockquote>
<figure><img src="https://i0.hdslb.com/bfs/album/35904ad7c550d293fa890e6a5876b51a4f8b30c0.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,r:{minutes:16.56,words:4967},y:"a",t:"29【定时器和延时器】"},["/front_end/front_end_base/javascript/29","/front_end/front_end_base/javascript/29.md"]],["v-7f8ccb1b","/front_end/front_end_base/javascript/30.html",{d:173312745e4,e:`<h1> 30【BOM和浏览器环境概述】</h1>
<p>BOM（Browser Object Model，浏览器对象模型）是 JS 与 浏览器窗口交互的接口。</p>
<p>一些与浏览器改变尺寸、滚动条滚动相关的特效，都要借助 BOM 技术。</p>
<p>JavaScript 是浏览器的内置脚本语言。也就是说，浏览器内置了 JavaScript 引擎，并且提供各种接口，让 JavaScript 脚本可以控制浏览器的各种功能。一旦网页内嵌了 JavaScript 脚本，浏览器加载网页，就会去执行脚本，从而达到操作浏览器的目的，实现网页的各种动态效果。</p>
<p>本章开始介绍浏览器提供的各种 JavaScript 接口。首先，介绍 JavaScript 代码嵌入网页的方法。</p>`,r:{minutes:15.98,words:4794},y:"a",t:"30【BOM和浏览器环境概述】"},["/front_end/front_end_base/javascript/30","/front_end/front_end_base/javascript/30.md"]],["v-fd7cb88c","/front_end/front_end_base/javascript/31.html",{d:173312745e4,e:`<h1> 31【window 对象】</h1>
<h2> 1.概述</h2>
<p>浏览器里面，<code>window</code>对象（注意，<code>w</code>为小写）指当前的浏览器窗口。它也是当前页面的顶层对象，即最高一层的对象，所有其他对象都是它的下属。一个变量如果未声明，那么默认就是顶层对象的属性。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
window<span class="token punctuation">.</span>a <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:8.27,words:2480},y:"a",t:"31【window 对象】"},["/front_end/front_end_base/javascript/31","/front_end/front_end_base/javascript/31.md"]],["v-fa13074e","/front_end/front_end_base/javascript/32.html",{d:173312745e4,e:`<h1> 32 【Navigator 对象和Screen 对象】</h1>
<h2> 1.Navigator 对象的属性</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 * Navigator
 * 	- 代表的当前浏览器的信息，通过该对象可以来识别不同的浏览器
 * 	- 由于历史原因，Navigator对象中的大部分属性都已经不能帮助我们识别浏览器了
 * 	- 一般我们只会使用userAgent来判断浏览器的信息，
 * 		userAgent是一个字符串，这个字符串中包含有用来描述浏览器信息的内容，
 * 		不同的浏览器会有不同的userAgent
 * 
 * 火狐的userAgent
 * 	Mozilla/5.0 (Windows NT 6.1; WOW64; rv:50.0) Gecko/20100101 Firefox/50.0
 * 
 * Chrome的userAgent
 *  Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.82 Safari/537.36
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:4.65,words:1394},y:"a",t:"32 【Navigator 对象和Screen 对象】"},["/front_end/front_end_base/javascript/32","/front_end/front_end_base/javascript/32.md"]],["v-f6a95610","/front_end/front_end_base/javascript/33.html",{d:173312745e4,e:`<h1> 33 【History对象和Location对象】</h1>
<h2> 1.History 对象概述</h2>
<p><code>window.history</code>属性指向 History 对象，它表示当前窗口的浏览历史。</p>
<p>History 对象保存了当前窗口访问过的所有页面网址。下面代码表示当前窗口一共访问过3个网址。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span>history<span class="token punctuation">.</span>length <span class="token comment">// 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:5.93,words:1779},y:"a",t:"33 【History对象和Location对象】"},["/front_end/front_end_base/javascript/33","/front_end/front_end_base/javascript/33.md"]],["v-f33fa4d2","/front_end/front_end_base/javascript/34.html",{d:173312745e4,e:`<h1> 34 【表单和FormData 对象】</h1>
<h2> 1.FormData 对象</h2>
<h3> 1.1 概述</h3>
<p>表单数据以键值对的形式向服务器发送，这个过程是浏览器自动完成的。但是有时候，我们希望通过脚本完成这个过程，构造或编辑表单的键值对，然后通过脚本发送给服务器。浏览器原生提供了 FormData 对象来完成这项工作。</p>
<p><code>FormData()</code>首先是一个构造函数，用来生成表单的实例。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> formdata <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span>form<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:8.29,words:2488},y:"a",t:"34 【表单和FormData 对象】"},["/front_end/front_end_base/javascript/34","/front_end/front_end_base/javascript/34.md"]],["v-efd5f394","/front_end/front_end_base/javascript/35.html",{d:173312745e4,e:`<h1> 35【Storage接口】</h1>
<h2> 1.概述</h2>
<p>Storage 接口用于脚本在浏览器保存数据。两个对象部署了这个接口：<code>window.sessionStorage</code>和<code>window.localStorage</code>。</p>
<p><code>sessionStorage</code>保存的数据用于浏览器的一次会话（session），当会话结束（通常是窗口关闭），数据被清空；<code>localStorage</code>保存的数据长期存在，下一次访问该网站的时候，网页可以直接读取以前保存的数据。除了保存期限的长短不同，这两个对象的其他方面都一致。</p>`,r:{minutes:3.87,words:1161},y:"a",t:"35【Storage接口】"},["/front_end/front_end_base/javascript/35","/front_end/front_end_base/javascript/35.md"]],["v-ec6c4256","/front_end/front_end_base/javascript/36.html",{d:173312745e4,e:`<h1> 36 【节流和防抖】</h1>
<h2> 1.节流（throttle）</h2>
<p><strong>所谓节流，就是指连续触发事件但是在 n 秒中只执行一次函数</strong></p>
<div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>开发使用场景 – 小米轮播图点击效果、鼠标移动、页面尺寸缩放resize、滚动条滚动 就可以加节流
假如一张轮播图完成切换需要300ms， 不加节流效果，快速点击，则嗖嗖嗖的切换，加上节流效果，不管快速点击多少次，300ms时间内，只能切换一张图片。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.2,words:661},y:"a",t:"36 【节流和防抖】"},["/front_end/front_end_base/javascript/36","/front_end/front_end_base/javascript/36.md"]],["v-c15f9c8c","/front_end/front_end_framework/react/01.html",{d:173312745e4,e:`<h1> 01 【react入门】</h1>
<h2> 1.React简介</h2>
<p><strong>react是什么？</strong></p>
<p><strong>React</strong> 是一个用于构建用户界面的 JavaScript 库。</p>
<ul>
<li>是一个将数据渲染为 HTML 视图的开源 JS 库</li>
<li>它遵循基于组件的方法，有助于构建可重用的 UI 组件</li>
<li>它用于开发复杂的交互式的 web 和移动 UI</li>
</ul>
<blockquote>
<p>React 有什么特点？</p>
</blockquote>
<ol>
<li>使用虚拟 DOM 而不是真正的 DOM</li>
<li>它可以用服务器渲染</li>
<li>它遵循单向数据流或数据绑定</li>
<li>高效</li>
<li>声明式编码，组件化编码</li>
</ol>`,r:{minutes:6.57,words:1972},y:"a",t:"01 【react入门】"},["/front_end/front_end_framework/react/01","/front_end/front_end_framework/react/01.md"]],["v-bdf5eb4e","/front_end/front_end_framework/react/02.html",{d:173312745e4,e:`<h1> 02 【面向组件编程】</h1>
<h2> 1.组件的使用</h2>
<p>当应用是以多组件的方式实现，这个应用就是一个组件化的应用</p>
<p>只有两种方式的组件</p>
<ul>
<li>函数组件</li>
<li>类式组件</li>
</ul>
<blockquote>
<p><strong>注意：</strong></p>
<ol>
<li>组件名必须是首字母大写（React 会将以小写字母开头的组件视为原生 DOM 标签。例如，&lt; div /&gt;<code>代表 HTML 的 div 标签，而</code>&lt; Weclome /&gt; 则代表一个组件，并且需在作用域内使用 <code>Welcome</code>）</li>
<li>虚拟DOM元素只能有一个根元素</li>
<li>虚拟DOM元素必须有结束标签 <code>&lt; /&gt;</code></li>
</ol>
</blockquote>`,r:{minutes:28.59,words:8576},y:"a",t:"02 【面向组件编程】"},["/front_end/front_end_framework/react/02","/front_end/front_end_framework/react/02.md"]],["v-ba8c3a10","/front_end/front_end_framework/react/03.html",{d:173312745e4,e:`<h1> 03 【事件处理】</h1>
<blockquote>
<p>React的事件是通过onXxx属性指定事件处理函数</p>
<p>React 使用的是自定义事件，而不是原生的 DOM 事件</p>
<p>React 的事件是通过事件委托方式处理的（为了更加的高效）</p>
<p>可以通过事件的 <code>event.target</code>获取发生的 DOM 元素对象，可以尽量减少 <code>refs</code>的使用</p>
<p>事件中必须返回的是函数</p>
</blockquote>
<h2> 1.React事件</h2>
<p>React 元素的事件处理和 DOM 元素的很相似，但是有一点语法上的不同：</p>`,r:{minutes:8.22,words:2466},y:"a",t:"03 【事件处理】"},["/front_end/front_end_framework/react/03","/front_end/front_end_framework/react/03.md"]],["v-b72288d2","/front_end/front_end_framework/react/04.html",{d:173312745e4,e:`<h1> 04 【生命周期】</h1>
<h2> 1.简介</h2>
<p>组件从创建到死亡，会经过一些特定的阶段</p>
<p>React组件中包含一系列钩子函数{生命周期回调函数}，会在特定的时刻调用</p>
<p>我们在定义组件的时候，会在特定的声明周期回调函数中，做特定的工作</p>
<p>在 React 中为我们提供了一些生命周期钩子函数，让我们能在 React 执行的重要阶段，在钩子函数中做一些事情。那么在 React 的生命周期中，有哪些钩子函数呢，我们来总结一下</p>
<p><strong>react生命周期(旧)</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1.</span> <span class="token literal-property property">初始化阶段</span><span class="token operator">:</span> 由ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>触发<span class="token operator">--</span><span class="token operator">-</span>初次渲染
                    <span class="token number">1.</span>	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                    <span class="token number">2.</span>	<span class="token function">componentWillMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                    <span class="token number">3.</span>	<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                    <span class="token number">4.</span>	<span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span><span class="token operator">==</span><span class="token operator">&gt;</span> 常用
                        一般在这个钩子中做一些初始化的事，例如：开启定时器、发送网络请求、订阅消息
<span class="token number">2.</span> <span class="token literal-property property">更新阶段</span><span class="token operator">:</span> 由组件内部<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setSate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>或父组件render触发
                    <span class="token number">1.</span>	<span class="token function">shouldComponentUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                    <span class="token number">2.</span>	<span class="token function">componentWillUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                    <span class="token number">3.</span>	<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span><span class="token operator">==</span><span class="token operator">&gt;</span> 必须使用的一个
                    <span class="token number">4.</span>	<span class="token function">componentDidUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token number">3.</span> <span class="token literal-property property">卸载组件</span><span class="token operator">:</span> 由ReactDOM<span class="token punctuation">.</span><span class="token function">unmountComponentAtNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>触发
                    <span class="token number">1.</span>	<span class="token function">componentWillUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token operator">===</span><span class="token operator">==</span><span class="token operator">&gt;</span> 常用
                        一般在这个钩子中做一些收尾的事，例如：关闭定时器、取消订阅消息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:12.34,words:3703},y:"a",t:"04 【生命周期】"},["/front_end/front_end_framework/react/04","/front_end/front_end_framework/react/04.md"]],["v-b3b8d794","/front_end/front_end_framework/react/05.html",{d:173312745e4,e:`<h1> 05 【条件渲染】</h1>
<p>在 React 中，你可以创建不同的组件来封装各种你需要的行为。然后，依据应用的不同状态，你可以只渲染对应状态下的部分内容。</p>
<h2> 基础配置</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>style<span class="token operator">&gt;</span>
    <span class="token punctuation">.</span>other <span class="token punctuation">{</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> #ff0000<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"app"</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">"text/babel"</span><span class="token operator">&gt;</span>
<span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
    state <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">isLogin</span><span class="token operator">:</span><span class="token boolean">false</span>
    <span class="token punctuation">}</span>

    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span>type<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
                <span class="token punctuation">{</span>type<span class="token punctuation">}</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Demo<span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'app'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:3.85,words:1155},y:"a",t:"05 【条件渲染】"},["/front_end/front_end_framework/react/05","/front_end/front_end_framework/react/05.md"]],["v-b04f2656","/front_end/front_end_framework/react/06.html",{d:173312745e4,e:`<h1> 06 【列表 &amp; Key】</h1>
<p>首先，让我们看下在 Javascript 中如何转化列表。</p>
<p>如下代码，我们使用 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map" target="_blank" rel="noopener noreferrer"><code>map()</code></a> 函数让数组中的每一项变双倍，然后我们得到了一个新的列表 <code>doubled</code> 并打印出来：</p>`,r:{minutes:13.42,words:4025},y:"a",t:"06 【列表 & Key】"},["/front_end/front_end_framework/react/06","/front_end/front_end_framework/react/06.md"]],["v-ace57518","/front_end/front_end_framework/react/07.html",{d:173312745e4,e:`<h1> 07 【收集表单数据】</h1>
<p>在 React 里，HTML 表单元素的工作方式和其他的 DOM 元素有些不同，这是因为表单元素通常会保持一些内部的 state。例如这个纯 HTML 表单只接受一个名称：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span>
    名字:
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>提交<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:7.47,words:2240},y:"a",t:"07 【收集表单数据】"},["/front_end/front_end_framework/react/07","/front_end/front_end_framework/react/07.md"]],["v-a97bc3da","/front_end/front_end_framework/react/08.html",{d:173312745e4,e:`<h1> 08 【状态提升】</h1>
<h2> 1.介绍</h2>
<p>所谓 <strong>状态提升</strong> 就是将各个子组件的 公共state 提升到它们的父组件进行统一存储、处理（这就是所谓的”单一数据源“），负责<code>setState</code>的函数传到下边的子级组件，然后再将父组件处理后的数据或函数props到各子组件中。</p>
<p>那么如果子组件 要 修改父组件的state该怎么办呢？我们的做法就是 将父组件中负责setState的函数，以props的形式传给子组件，然后子组件在需要改变state时调用即可。</p>
<p><strong>实现方式</strong></p>`,r:{minutes:4.05,words:1216},y:"a",t:"08 【状态提升】"},["/front_end/front_end_framework/react/08","/front_end/front_end_framework/react/08.md"]],["v-a612129c","/front_end/front_end_framework/react/09.html",{d:173312745e4,e:`<h1> 09 【组合组件】</h1>
<h2> 1.包含关系</h2>
<p>有些组件无法提前知晓它们子组件的具体内容。在 <code>Sidebar</code>（侧边栏）和 <code>Dialog</code>（对话框）等展现通用容器（box）的组件中特别容易遇到这种情况。</p>
<p>我们建议这些组件使用一个特殊的 <code>children</code> prop 来将他们的子组件传递到渲染结果中：</p>
<blockquote>
<p>组件标签里面包含的子元素会通过 <code>props.children</code> 传递进来。</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">One</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token comment">//特殊的children props</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Two</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
  <span class="token comment">//这使别的组件可以通过JSX嵌套，来将任意组件作为子组件来传递给他们</span>
  <span class="token operator">&lt;</span>One<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>Hello<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>World<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>One<span class="token operator">&gt;</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.44,words:432},y:"a",t:"09 【组合组件】"},["/front_end/front_end_framework/react/09","/front_end/front_end_framework/react/09.md"]],["v-5afcd748","/front_end/front_end_framework/react/10.html",{d:173312745e4,e:`<h1> 10 【初始化脚手架】</h1>
<h2> 1.什么是 React 脚手架？</h2>
<p>在我们的现实生活中，脚手架最常用的使用场景是在工地，它是为了保证施工顺利的、方便的进行而搭建的，在工地上搭建的脚手架可以帮助工人们高校的去完成工作，同时在大楼建设完成后，拆除脚手架并不会有任何的影响。</p>
<p>在我们的 React 项目中，脚手架的作用与之有异曲同工之妙</p>
<p>React 脚手架其实是一个工具帮我们快速的生成项目的工程化结构，每个项目的结构其实大致都是相同的，所以 React 给我提前的搭建好了，这也是脚手架强大之处之一，也是用 React 创建 SPA 应用的最佳方式</p>`,r:{minutes:13.21,words:3964},y:"a",t:"10 【初始化脚手架】"},["/front_end/front_end_framework/react/10","/front_end/front_end_framework/react/10.md"]],["v-5793260a","/front_end/front_end_framework/react/11.html",{d:173312745e4,e:`<h1> 11 【react-router 5】</h1>
<h2> 1.准备</h2>
<h3> 1.1 SPA</h3>
<p>而为了减少这样的情况，我们还有另一种应用，叫做 SPA ，单页应用程序</p>
<p>它比传统的 Web 应用程序更快，因为它们在 Web 浏览器本身而不是在服务器上执行逻辑。在初始页面加载后，<strong>只有数据来回发送</strong>，而不是整个 HTML，这会降低带宽。它们可以独立请求标记和数据，并直接在浏览器中呈现页面</p>
<h3> 1.2 什么是路由？</h3>
<p>路由是根据不同的 URL 地址展示不同的内容或页面</p>
<p>在 SPA 应用中，大部分页面结果不改变，只改变部分内容的使用</p>`,r:{minutes:17.44,words:5232},y:"a",t:"11 【react-router 5】"},["/front_end/front_end_framework/react/11","/front_end/front_end_framework/react/11.md"]],["v-542974cc","/front_end/front_end_framework/react/12.html",{d:173312745e4,e:`<h1> 12 【react高级指引（上）】</h1>
<h2> 1.setState 扩展</h2>
<h3> 1.1 对象式 setState</h3>
<p>首先在我们以前的认知中，<code>setState</code> 是用来更新状态的，我们一般给它传递一个对象，就像这样</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> count <span class="token operator">+</span> <span class="token number">1</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:17.92,words:5377},y:"a",t:"12 【react高级指引（上）】"},["/front_end/front_end_framework/react/12","/front_end/front_end_framework/react/12.md"]],["v-50bfc38e","/front_end/front_end_framework/react/13.html",{d:173312745e4,e:`<h1> 13【react高级指引（下）】</h1>
<h2> 1.组件优化</h2>
<h3> 1.1 shouldComponentUpdate 优化</h3>
<p>在我们之前一直写的代码中，我们一直使用的<code>Component</code> 是有问题存在的</p>
<ol>
<li>只要执行 <code>setState</code> ，即使不改变状态数据，组件也会调用 <code>render</code></li>
<li>当前组件状态更新，也会引起子组件 <code>render</code></li>
</ol>
<p>而我们想要的是只有组件的 <code>state</code> 或者 <code>props</code> 数据发生改变的时候，再调用 <code>render</code></p>`,r:{minutes:10,words:2999},y:"a",t:"13【react高级指引（下）】"},["/front_end/front_end_framework/react/13","/front_end/front_end_framework/react/13.md"]],["v-4d561250","/front_end/front_end_framework/react/14.html",{d:173312745e4,e:`<h1> 14【react-Hook （上）】</h1>
<p><em>Hook</em> 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。</p>
<h2> 1.准备</h2>
<h3> 1.1  什么是 Hook</h3>
<p>Hooks 译为钩子，Hooks 就是在函数组件内，负责钩进外部功能的函数。</p>
<p>React 提供了一些常用钩子，React 也支持自定义钩子，这些钩子都是用于为函数引入外部功能。</p>
<p>当我们在组件中，需要引入外部功能时，就可以使用 React 提供的钩子，或者自定义钩子。</p>`,r:{minutes:25.28,words:7583},y:"a",t:"14【react-Hook （上）】"},["/front_end/front_end_framework/react/14","/front_end/front_end_framework/react/14.md"]],["v-49ec6112","/front_end/front_end_framework/react/15.html",{d:173312745e4,e:`<h1> 15【react-Hook （下）】</h1>
<h2> 1.React.memo</h2>
<h3> 1.1 基本介绍</h3>
<blockquote>
<p>这是一个高阶组件，用来做性能优化的，这个本来应该是写在<code>React高级指引</code>中的，但是这个案例会和后面的<code>useCallback</code>联合起来，所以就写在这里了</p>
</blockquote>
<ul>
<li>React.memo() 是一个高阶组件，如果你的组件在相同 props 的情况下渲染相同的结果，那么你可以通过将其包装在 <code>React.memo</code> 中调用，以此通过记忆组件渲染结果的方式来提高组件的性能表现。
<ul>
<li>它接收另一个组件作为参数，并且会返回一个包装过的新组件</li>
<li>包装过的新组件就会具有缓存功能，这意味着在这种情况下，React 将跳过渲染组件的操作并直接复用最近一次渲染的结果。</li>
<li>包装过后，只有组件的props发生变化，才会触发组件的重新的渲染，否则总是返回缓存中结果。如果函数组件被 <code>React.memo</code> 包裹，且其实现中拥有 <a href="https://zh-hans.reactjs.org/docs/hooks-state.html" target="_blank" rel="noopener noreferrer"><code>useState</code></a>，<a href="https://zh-hans.reactjs.org/docs/hooks-reference.html#usereducer" target="_blank" rel="noopener noreferrer"><code>useReducer</code></a> 或 <a href="https://zh-hans.reactjs.org/docs/hooks-reference.html#usecontext" target="_blank" rel="noopener noreferrer"><code>useContext</code></a> 的 Hook，当 state 或 context 发生变化时，它仍会重新渲染。</li>
</ul>
</li>
</ul>`,r:{minutes:12.57,words:3772},y:"a",t:"15【react-Hook （下）】"},["/front_end/front_end_framework/react/15","/front_end/front_end_framework/react/15.md"]],["v-4682afd4","/front_end/front_end_framework/react/16.html",{d:173312745e4,e:`<h1> 16 【react-router 6】</h1>
<blockquote>
<p>关于路由的知识已在<code>11 【react-router 5】</code>中进行说明，这里主要是对于5版本的api的变换说明</p>
</blockquote>
<h2> 1.概述</h2>
<p>官方文档：<a href="https://reactrouter.com/en/main" target="_blank" rel="noopener noreferrer">Home v6.4.1 | React Router</a>React Router 以三个不同的包发布到 npm 上，它们分别为：</p>`,r:{minutes:13.12,words:3935},y:"a",t:"16 【react-router 6】"},["/front_end/front_end_framework/react/16","/front_end/front_end_framework/react/16.md"]],["v-4318fe96","/front_end/front_end_framework/react/17.html",{d:173312745e4,e:`<h1> 17 【redux】</h1>
<h2> 引言</h2>
<p>我们现在开始学习了 Redux ，在我们之前写的案例当中，我们对于状态的管理，都是通过 state 来实现的，比如，我们在给兄弟组件传递数据时，需要先将数据传递给父组件，再由父组件转发 给它的子组件。这个过程十分的复杂，后来我们又学习了<strong>消息的发布订阅</strong>，我们通过 <strong>pubsub</strong> 库，实现了消息的转发，直接将数据发布，由兄弟组件订阅，实现了兄弟组件间的数据传递。但是，随着我们的需求不断地提升，我们需要进行更加复杂的数据传递，更多层次的数据交换。<strong>因此我们为何不可以将所有的数据交给一个中转站，这个中转站独立于所有的组件之外，由这个中转站来进行数据的分发，这样不管哪个组件需要数据，我们都可以很轻易的给他派发。</strong></p>`,r:{minutes:20.83,words:6248},y:"a",t:"17 【redux】"},["/front_end/front_end_framework/react/17","/front_end/front_end_framework/react/17.md"]],["v-3faf4d58","/front_end/front_end_framework/react/18.html",{d:173312745e4,e:`<h1> 18 【Redux Toolkit】</h1>
<p>上边的案例我们一直在使用Redux核心库来使用Redux，除了Redux核心库外Redux还为我们提供了一种使用Redux的方式——Redux Toolkit。它的名字起的非常直白，Redux工具包，简称RTK。RTK可以帮助我们处理使用Redux过程中的重复性工作，简化Redux中的各种操作。</p>
<h2> 1.Redux Toolkit 概览</h2>
<h3> 1.1  Redux Toolkit 是什么？</h3>
<p><strong>Redux Toolkit</strong> 是官方推荐的编写 <strong>Redux</strong> 逻辑的方法。 它包含我们对于构建 <strong>Redux</strong> 应用程序必不可少的包和函数。 <strong>Redux Toolkit</strong> 的构建简化了大多数 <strong>Redux</strong> 任务，防止了常见错误，并使编写 <strong>Redux</strong> 应用程序变得更加容易。可以说 <strong>Redux Toolkit</strong> 就是目前 <strong>Redux</strong> 的最佳实践方式。</p>`,r:{minutes:24.51,words:7354},y:"a",t:"18 【Redux Toolkit】"},["/front_end/front_end_framework/react/18","/front_end/front_end_framework/react/18.md"]],["v-3c459c1a","/front_end/front_end_framework/react/19.html",{d:173312745e4,e:`<h1> 19 【RTK Query】</h1>
<h2> 1.目前前端常见的发起 ajax 请求的方式</h2>
<ul>
<li>1、使用原生的<code>ajax</code>请求</li>
<li>2、使用<code>jquery</code>封装好的<code>ajax</code>请求</li>
<li>3、使用<code>fetch</code>发起请求</li>
<li>4、第三方的比如<code>axios</code>请求</li>
<li>5、<code>angular</code>中自带的<code>HttpClient</code></li>
</ul>
<p>就目前前端框架开发中来说我们在开发<code>vue</code>、<code>react</code>的时候一般都是使用<code>fetch</code>或<code>axios</code>自己封装一层来与后端数据交互，至于<code>angular</code>肯定是用自带的<code>HttpClient</code>请求方式，但是依然存在几个致命的弱点，</p>`,r:{minutes:31.19,words:9356},y:"a",t:"19 【RTK Query】"},["/front_end/front_end_framework/react/19","/front_end/front_end_framework/react/19.md"]],["v-0767cf9d","/front_end/front_end_framework/react/20.html",{d:173312745e4,e:`<h1> 20 【react中使用ts】</h1>
<p>官方文档：<a href="https://react-typescript-cheatsheet.netlify.app/" target="_blank" rel="noopener noreferrer">React TypeScript Cheatsheets | React TypeScript Cheatsheets (react-typescript-cheatsheet.netlify.app)</a></p>
<blockquote>
<p>找了好久才找到</p>
</blockquote>
<h2> 1.创建一个组件</h2>`,r:{minutes:13.61,words:4082},y:"a",t:"20 【react中使用ts】"},["/front_end/front_end_framework/react/20","/front_end/front_end_framework/react/20.md"]],["v-091ca83c","/front_end/front_end_framework/react/21.html",{d:173312745e4,e:`<h1> 21 【styled-components的使用】</h1>
<h2> 1.为什么要用这个</h2>
<p>我们都知道，我们从最开始学css的时候，为了避免写的样式影响到另外的地方。所以我们这样来写的。</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">#userConten .userBtn button</span><span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:19.29,words:5786},y:"a",t:"21 【styled-components的使用】"},["/front_end/front_end_framework/react/21","/front_end/front_end_framework/react/21.md"]],["v-0ad180db","/front_end/front_end_framework/react/22.html",{d:173312745e4,e:`<h1> 22 【在react中使用Emotion】</h1>
<h2> 1.CSS in JS 的优点</h2>
<p><a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2FMicheleBertoli%2Fcss-in-js" target="_blank" rel="noopener noreferrer">CSS in JS</a> 已逐渐发展为 React 应用中写样式的一个主流的方案，著名组件库 <a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fmui-org%2Fmaterial-ui" target="_blank" rel="noopener noreferrer">material-ui</a> 也已经使用 CSS in JS 来实现。 CSS in JS 的实现方式有两种: 唯一CSS选择器和内联样式。因此</p>`,r:{minutes:11.31,words:3392},y:"a",t:"22 【在react中使用Emotion】"},["/front_end/front_end_framework/react/22","/front_end/front_end_framework/react/22.md"]],["v-0c86597a","/front_end/front_end_framework/react/23.html",{d:173312745e4,e:`<h1> 23 【UmiJS入门】</h1>
<h2> 1.Umi 介绍</h2>
<figure><img src="https://img.alicdn.com/imgextra/i3/O1CN01eBiy611b67KLFOxi3_!!6000000003415-2-tps-200-200.png" alt="Umi" tabindex="0" loading="lazy"><figcaption>Umi</figcaption></figure>
<h3> 1.1 Umi 是什么？</h3>
<p>Umi，中文发音为「乌米」，是可扩展的企业级前端应用框架。Umi 以路由为基础的，同时支持配置式路由和约定式路由，保证路由的功能完备，并以此进行功能扩展。然后配以生命周期完善的插件体系，覆盖从源码到构建产物的每个生命周期，支持各种功能扩展和业务需求。</p>`,r:{minutes:10.34,words:3102},y:"a",t:"23 【UmiJS入门】"},["/front_end/front_end_framework/react/23","/front_end/front_end_framework/react/23.md"]],["v-bfed7bf0","/front_end/front_end_framework/uniapp/01.html",{d:173312745e4,e:`<h1> 01 【微信小程序起步】</h1>
<h2> 1.小程序简介</h2>
<p>小程序与普通网页开发的区别</p>
<ol>
<li>运行环境不同
网页运行在浏览器中
小程序运行在微信环境中</li>
<li>API不同
由于运行环境不同，所以小程序中无法调用DOM和BOM的API
但是小程序中可以调用微信环境提供的各种API，例如：
地理定位
扫码
支付</li>
<li>开发模式不同
网页的开发模式：浏览器+代码编辑器
小程序：
申请小程序开发账号
安装小程序开发者工具
创建和配置小程序项目</li>
</ol>
<h2> 2.注册小程序开发账号</h2>
<p>使用浏览器打开<a href="https://mp.weixin.qq.com/" target="_blank" rel="noopener noreferrer"><code>http://mp.weixin.qq.com/</code></a> 点击立即注册</p>`,r:{minutes:7.11,words:2134},y:"a",t:"01 【微信小程序起步】"},["/front_end/front_end_framework/uniapp/01","/front_end/front_end_framework/uniapp/01.md"]],["v-bc83cab2","/front_end/front_end_framework/uniapp/02.html",{d:173312745e4,e:`<h1> 02 【uni-app起步】</h1>
<h2> 1.什么是uni-app</h2>
<p><code>uni-app</code> 是一个使用 <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">Vue.js (opens new window)</a>开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/飞书/QQ/快手/钉钉/淘宝）、快应用等多个平台。</p>
<blockquote>
<p>翻译翻译就是：写一套代码就可以在多端运行</p>
</blockquote>`,r:{minutes:5.98,words:1793},y:"a",t:"02 【uni-app起步】"},["/front_end/front_end_framework/uniapp/02","/front_end/front_end_framework/uniapp/02.md"]],["v-b91a1974","/front_end/front_end_framework/uniapp/03.html",{d:173312745e4,e:`<h1> 03 【全局配置】</h1>
<h2> 1.globalStyle 全局外观配置</h2>
<p>用于设置应用的状态栏、导航条、标题、窗口背景色等。
部分属性：
navigationBar开头的都是导航栏设置（小程序导航栏+手机导航栏）
navigationBarBackgroundColor  导航栏背景颜色
navigationBarTitleText  导航栏标题文字内容
navigationBarTextStyle 导航栏标题颜色，仅支持 black / white</p>
<p>enablePullDownRefresh 是否开启全局的下拉刷新。 （默认为false）
backgroundTextStyle 下拉 loading 的样式，仅支持 dark / light
backgroundColor  设置下拉 loading的背景颜色</p>`,r:{minutes:6.38,words:1914},y:"a",t:"03 【全局配置】"},["/front_end/front_end_framework/uniapp/03","/front_end/front_end_framework/uniapp/03.md"]],["v-b5b06836","/front_end/front_end_framework/uniapp/04.html",{d:173312745e4,e:`<h1> 04 【内置组件】</h1>
<h2> 1.视图容器</h2>
<h3> 1.1 view</h3>
<p><a href="https://uniapp.dcloud.net.cn/component/view.html" target="_blank" rel="noopener noreferrer">uni-app官网 (dcloud.net.cn)</a></p>
<p>它类似于传统html中的div，用于包裹各种元素内容。</p>
<p>如果使用<a href="https://uniapp.dcloud.io/tutorial/nvue-outline" target="_blank" rel="noopener noreferrer">nvue (opens new window)</a>，则需注意，包裹文字应该使用<code>&lt;text&gt;</code>组件。</p>`,r:{minutes:7.26,words:2177},y:"a",t:"04 【内置组件】"},["/front_end/front_end_framework/uniapp/04","/front_end/front_end_framework/uniapp/04.md"]],["v-b246b6f8","/front_end/front_end_framework/uniapp/05.html",{d:173312745e4,e:`<h1> 05 【uni-app的API】</h1>
<h2> 1.概述</h2>
<p><code>uni-app</code>的 js API 由标准 ECMAScript 的 js API 和 uni 扩展 API 这两部分组成。</p>
<p>标准 ECMAScript 的 js 仅是最基础的 js。浏览器基于它扩展了 window、document、navigator 等对象。小程序也基于标准 js 扩展了各种 wx.xx、my.xx、swan.xx 的 API。node 也扩展了 fs 等模块。</p>
<p>uni-app 基于 ECMAScript 扩展了 uni 对象，并且 API 命名与小程序保持兼容。</p>`,r:{minutes:24.07,words:7220},y:"a",t:"05 【uni-app的API】"},["/front_end/front_end_framework/uniapp/05","/front_end/front_end_framework/uniapp/05.md"]],["v-aedd05ba","/front_end/front_end_framework/uniapp/06.html",{d:173312745e4,e:`<h1> 06 【uniapp生命周期】</h1>
<p>生命周期的概念：一个对象从创建、运行、销毁的整个过程被成为生命周期。</p>
<p>生命周期函数：在生命周期中每个阶段会伴随着每一个函数的触发，这些函数被称为生命周期函数。</p>
<h2> 1.应用生命周期</h2>
<p><a href="https://uniapp.dcloud.net.cn/collocation/App.html#applifecycle" target="_blank" rel="noopener noreferrer">uni-app官网 (dcloud.net.cn)</a></p>
<p><code>uni-app</code> 支持如下应用生命周期函数：</p>`,r:{minutes:4.48,words:1343},y:"a",t:"06 【uniapp生命周期】"},["/front_end/front_end_framework/uniapp/06","/front_end/front_end_framework/uniapp/06.md"]],["v-ab73547c","/front_end/front_end_framework/uniapp/07.html",{d:173312745e4,e:`<h1> 07 【uniCloud】</h1>
<h2> 1.开发自己的第一个uniCloud项目</h2>
<ol>
<li>创建uniCloud项目</li>
</ol>
<p>HBuilderX中新建项目，选择uni-app项目，并勾选<code>启用uniCloud</code>，在右侧选择服务供应商（腾讯云或阿里云）</p>
<p>项目名称随意，比如 firstunicloud</p>
<ol start="2">
<li>关联服务空间</li>
</ol>
<p>一个开发者可以拥有多个服务空间，每个服务空间都是一个独立的serverless云环境，不同服务空间之间的云函数、数据库、存储都是隔离的。</p>`,r:{minutes:15.25,words:4574},y:"a",t:"07 【uniCloud】"},["/front_end/front_end_framework/uniapp/07","/front_end/front_end_framework/uniapp/07.md"]],["v-a809a33e","/front_end/front_end_framework/uniapp/08.html",{d:173312745e4,e:`<h1> 08 【云数据库】</h1>
<h2> 1 入门</h2>
<h3> 1.1 基础概念</h3>
<p><code>uniCloud</code>提供了一个 JSON 格式的文档型数据库。顾名思义，数据库中的每条记录都是一个 JSON 格式的文档。</p>
<p>它是 nosql 非关系型数据库，如果您之前熟悉 sql 关系型数据库，那么两者概念对应关系如下表：</p>
<table>
<thead>
<tr>
<th style="text-align:left">关系型</th>
<th style="text-align:left">JSON 文档型</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">数据库 database</td>
<td style="text-align:left">数据库 database</td>
</tr>
<tr>
<td style="text-align:left">表 table</td>
<td style="text-align:left">集合 collection。但行业里也经常称之为“表”。无需特意区分</td>
</tr>
<tr>
<td style="text-align:left">行 row</td>
<td style="text-align:left">记录 record / doc</td>
</tr>
<tr>
<td style="text-align:left">字段 column / field</td>
<td style="text-align:left">字段 field</td>
</tr>
<tr>
<td style="text-align:left">使用sql语法操作</td>
<td style="text-align:left">使用MongoDB语法或jql语法操作</td>
</tr>
</tbody>
</table>`,r:{minutes:18.98,words:5695},y:"a",t:"08 【云数据库】"},["/front_end/front_end_framework/uniapp/08","/front_end/front_end_framework/uniapp/08.md"]],["v-a49ff200","/front_end/front_end_framework/uniapp/09.html",{d:173312745e4,e:`<h1> 09 【云存储】</h1>
<h2> 1.概述</h2>
<p>云存储的上传方式有3种：</p>
<ol>
<li>web界面：即在<a href="https://unicloud.dcloud.net.cn/" target="_blank" rel="noopener noreferrer">https://unicloud.dcloud.net.cn/ (opens new window)</a>web控制台，点击云存储，通过web界面进行文件上传。该管理界面同时提供了资源浏览、删除等操作界面。</li>
<li>客户端API或组件上传：在前端js中编写<code>uniCloud.uploadFile</code>，或者使用uni ui的<a href="https://ext.dcloud.net.cn/plugin?id=4079" target="_blank" rel="noopener noreferrer">FilePicker组件 (opens new window)</a>，文件选择+上传均封装完毕。</li>
<li>云函数上传文件到云存储：即在云函数js中编写<code>uniCloud.uploadFile</code></li>
</ol>`,r:{minutes:8.51,words:2552},y:"a",t:"09 【云存储】"},["/front_end/front_end_framework/uniapp/09","/front_end/front_end_framework/uniapp/09.md"]],["v-0055f2c3","/front_end/front_end_framework/vue2/01.html",{d:173312745e4,e:`<h1> 01 【Vue简介 初识Vue 模板语法和数据绑定】</h1>
<h2> 1.Vue简介</h2>
<h3> 1.1官网</h3>
<ul>
<li><a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">英文官网</a></li>
<li><a href="https://cn.vuejs.org/" target="_blank" rel="noopener noreferrer">中文官网</a></li>
</ul>
<h3> 1.2介绍与描述</h3>
<ul>
<li>Vue 是一套用来动态构建用户界面的渐进式JavaScript框架
○构建用户界面：把数据通过某种办法变成用户界面
○渐进式：Vue可以自底向上逐层的应用，简单应用只需要一个轻量小巧的核心库，复杂应用可以引入各式各样的Vue插件</li>
<li>作者：尤雨溪</li>
</ul>`,r:{minutes:4.32,words:1296},y:"a",t:"01 【Vue简介 初识Vue 模板语法和数据绑定】"},["/front_end/front_end_framework/vue2/01","/front_end/front_end_framework/vue2/01.md"]],["v-020acb62","/front_end/front_end_framework/vue2/02.html",{d:173312745e4,e:`<h1> 02 【el和data的两种写法 MVVM模型】</h1>
<h2> 1.el和data的两种写法</h2>
<p><strong>el</strong>有2种写法</p>
<ul>
<li>
<p>创建Vue实例对象的时候配置el属性</p>
</li>
<li>
<p>先创建Vue实例，随后再通过vm.$mount('#root')指定el的值</p>
</li>
</ul>
<p><strong>data</strong>有2种写法</p>
<ul>
<li>对象式：data：</li>
<li>函数式：data() { return { } }</li>
<li>如何选择：目前哪种写法都可以，以后到组件时，data必须使用函数，否则会报错
一个重要的原则</li>
<li>由Vue管理的函数，一定不要写箭头函数，否则 this 就不再是Vue实例了</li>
</ul>`,r:{minutes:1.3,words:391},y:"a",t:"02 【el和data的两种写法 MVVM模型】"},["/front_end/front_end_framework/vue2/02","/front_end/front_end_framework/vue2/02.md"]],["v-03bfa401","/front_end/front_end_framework/vue2/03.html",{d:173312745e4,e:`<h1> 03 【数据代理 事件处理】</h1>
<h2> 1.数据代理</h2>
<blockquote>
<p>了解数据代理需要js的一些知识：Object.defineProperty()，属性标志，属性描述符，getter，setter。。。</p>
</blockquote>
<h3> 1.1数据代理</h3>
<p>建议学习文章地址：</p>
<p><a href="https://zh.javascript.info/property-descriptors" target="_blank" rel="noopener noreferrer">https://zh.javascript.info/property-descriptors</a></p>`,r:{minutes:5.96,words:1789},y:"a",t:"03 【数据代理 事件处理】"},["/front_end/front_end_framework/vue2/03","/front_end/front_end_framework/vue2/03.md"]],["v-05747ca0","/front_end/front_end_framework/vue2/04.html",{d:173312745e4,e:`<h1> 04 【计算属性 侦听属性】</h1>
<h2> 1.计算属性</h2>
<h3> 1.1插值语法实现</h3>
<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>姓名案例_插值语法实现<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>root<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  姓：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>firstName<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span>
  名：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lastName<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span>
  全名：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>{{ firstName }}-{{ lastName }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>productionTip <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">'#root'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token literal-property property">firstName</span><span class="token operator">:</span><span class="token string">'张'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lastName</span><span class="token operator">:</span><span class="token string">'三'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:5.56,words:1668},y:"a",t:"04 【计算属性 侦听属性】"},["/front_end/front_end_framework/vue2/04","/front_end/front_end_framework/vue2/04.md"]],["v-0729553f","/front_end/front_end_framework/vue2/05.html",{d:173312745e4,e:`<h1> 05 【绑定样式 条件渲染 列表渲染】</h1>
<h2> 1.绑定样式</h2>
<h3> 1.1class样式</h3>
<p>写法：:class="xxx"    xxx可以是字符串、对象、数。</p>
<p>所以分为三种写法，字符串写法，数组写法，对象写法</p>
<h4> 字符串写法</h4>
<p>字符串写法适用于：类名不确定，要动态获取。</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
	<span class="token selector">.normal</span><span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> skyblue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 准备好一个容器--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>root<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 绑定class样式--字符串写法，适用于：样式的类名不确定，需要动态指定 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>basic<span class="token punctuation">"</span></span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mood<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>changeMood<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>{{name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">const</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">'#root'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token literal-property property">mood</span><span class="token operator">:</span><span class="token string">'normal'</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:13.99,words:4197},y:"a",t:"05 【绑定样式 条件渲染 列表渲染】"},["/front_end/front_end_framework/vue2/05","/front_end/front_end_framework/vue2/05.md"]],["v-08de2dde","/front_end/front_end_framework/vue2/06.html",{d:173312745e4,e:`<h1> 06 【Vue数据监视 v-model双向绑定】</h1>
<h2> 1.Vue数据监视</h2>
<h3> 1.1问题演示</h3>
<p>先来个案例引入一下：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 准备好一个容器--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>root<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>人员列表<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>updateMei<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>更新马冬梅的信息<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(p,index) of persons<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>p.id<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
            {{p.name}}-{{p.age}}-{{p.sex}}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>productionTip <span class="token operator">=</span> <span class="token boolean">false</span>

    <span class="token keyword">const</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">'#root'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token literal-property property">persons</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token string">'001'</span><span class="token punctuation">,</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'马冬梅'</span><span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">30</span><span class="token punctuation">,</span><span class="token literal-property property">sex</span><span class="token operator">:</span><span class="token string">'女'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token string">'002'</span><span class="token punctuation">,</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'周冬雨'</span><span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">31</span><span class="token punctuation">,</span><span class="token literal-property property">sex</span><span class="token operator">:</span><span class="token string">'女'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token string">'003'</span><span class="token punctuation">,</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'周杰伦'</span><span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">,</span><span class="token literal-property property">sex</span><span class="token operator">:</span><span class="token string">'男'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token string">'004'</span><span class="token punctuation">,</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'温兆伦'</span><span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">19</span><span class="token punctuation">,</span><span class="token literal-property property">sex</span><span class="token operator">:</span><span class="token string">'男'</span><span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token function">updateMei</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">// this.persons[0].name = '马老师' //奏效</span>
                <span class="token comment">// this.persons[0].age = 50 //奏效</span>
                <span class="token comment">// this.persons[0].sex = '男' //奏效</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>persons<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token string">'001'</span><span class="token punctuation">,</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'马老师'</span><span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">50</span><span class="token punctuation">,</span><span class="token literal-property property">sex</span><span class="token operator">:</span><span class="token string">'男'</span><span class="token punctuation">}</span> <span class="token comment">//不奏效</span>
                <span class="token comment">// this.persons.splice(0,1,{id:'001',name:'马老师',age:50,sex:'男'})</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span> 

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:6.57,words:1970},y:"a",t:"06 【Vue数据监视 v-model双向绑定】"},["/front_end/front_end_framework/vue2/06","/front_end/front_end_framework/vue2/06.md"]],["v-0a93067d","/front_end/front_end_framework/vue2/07.html",{d:173312745e4,e:`<h1> 07 【内置指令 自定义指令】</h1>
<h2> 1.内置指令</h2>
<p>之前学过的指令：</p>
<ul>
<li>v-bind	  单向绑定解析表达式，可简写为**😗*</li>
<li>v-model	双向数据绑定</li>
<li>v-for		   遍历数组 / 对象 / 字符串</li>
<li>v-on		    绑定事件监听，可简写为**@**</li>
<li>v-show	   条件渲染 (动态控制节点是否展示)</li>
<li>v-if		      条件渲染（动态控制节点是否存存在）</li>
<li>v-else-if	  条件渲染（动态控制节点是否存存在）</li>
<li>v-else	      条件渲染（动态控制节点是否存存在）</li>
</ul>`,r:{minutes:5.39,words:1616},y:"a",t:"07 【内置指令 自定义指令】"},["/front_end/front_end_framework/vue2/07","/front_end/front_end_framework/vue2/07.md"]],["v-0c47df1c","/front_end/front_end_framework/vue2/08.html",{d:173312745e4,e:`<h1> 08 【生命周期 组件】</h1>
<h2> 1.生命周期</h2>
<h3> 1.1引出生命周期</h3>
<p><strong>生命周期</strong></p>
<ol>
<li>又名<strong>生命周期回调函数</strong>、生命周期函数、生命周期钩子</li>
<li>是什么：Vue在关键时刻帮我们调用的一些特殊名称的函数</li>
<li><strong>生命周期函数的名字不可更改</strong>，但函数的具体内容是程序员根据需求编写的</li>
<li>生命周期函数中的<code>this </code>指向是<code>vm</code>或<code>组件实例对象</code></li>
</ol>`,r:{minutes:12.18,words:3653},y:"a",t:"08 【生命周期 组件】"},["/front_end/front_end_framework/vue2/08","/front_end/front_end_framework/vue2/08.md"]],["v-0dfcb7bb","/front_end/front_end_framework/vue2/09.html",{d:173312745e4,e:`<h1> 09 【CLI 初始化脚手架 Vue零碎的一些知识】</h1>
<h2> 1.Vue CLI 初始化脚手架</h2>
<h3> 1.1具体步骤</h3>
<p>1如果下载缓慢请配置npm淘宝镜像npm config set registry <a href="http://registry.npm.taobao.org" target="_blank" rel="noopener noreferrer">http://registry.npm.taobao.org</a>
2全局安装 @vue/cli npm install -g @vue/cli
3切换到创建项目的目录，使用命令创建项目vue create xxx
4选择使用vue的版本
5启动项目npm run serve
6打包项目npm run build
7暂停项目 Ctrl+C</p>`,r:{minutes:9.27,words:2780},y:"a",t:"09 【CLI 初始化脚手架 Vue零碎的一些知识】"},["/front_end/front_end_framework/vue2/09","/front_end/front_end_framework/vue2/09.md"]],["v-33875565","/front_end/front_end_framework/vue2/10.html",{d:173312745e4,e:`<h1> 10 【组件编码流程 组件自定义事件 全局事件总线】</h1>
<h2> 1.组件编码流程</h2>
<ol>
<li>
<p>组件化编码流程：</p>
<p>​	(1).拆分静态组件：组件要按照功能点拆分，命名不要与html元素冲突。</p>
<p>​	(2).实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用：</p>
<p>​			1).一个组件在用：放在组件自身即可。</p>
<p>​			2). 一些组件在用：放在他们共同的父组件上（<span style="color:red">状态提升</span>）。</p>
<p>​	(3).实现交互：从绑定事件开始。</p>
</li>
<li>
<p>props适用于：</p>
<p>​	(1).父组件 ==&gt; 子组件 通信</p>
<p>​	(2).子组件 ==&gt; 父组件 通信（要求父先给子一个函数）</p>
</li>
<li>
<p>使用v-model时要切记：v-model绑定的值不能是props传过来的值，因为props是不可以修改的！</p>
</li>
<li>
<p>props传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做。</p>
</li>
</ol>`,r:{minutes:5.6,words:1681},y:"a",t:"10 【组件编码流程 组件自定义事件 全局事件总线】"},["/front_end/front_end_framework/vue2/10","/front_end/front_end_framework/vue2/10.md"]],["v-353c2e04","/front_end/front_end_framework/vue2/11.html",{d:173312745e4,e:`<h1> 11 【组件通信】</h1>
<h2> 1.props</h2>
<p>适用于的场景:父子组件通信</p>
<p>注意事项:</p>
<p>如果父组件给子组件传递数据(函数):本质其实是子组件给父组件传递数据</p>
<p>如果父组件给子组件传递数据(非函数):本质就是父组件给子组件传递数据</p>
<p>书写方式:3种</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token string">'todos'</span><span class="token punctuation">]</span>
<span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span>Array<span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span>Array<span class="token punctuation">,</span><span class="token keyword">default</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:8.14,words:2443},y:"a",t:"11 【组件通信】"},["/front_end/front_end_framework/vue2/11","/front_end/front_end_framework/vue2/11.md"]],["v-36f106a3","/front_end/front_end_framework/vue2/12.html",{d:173312745e4,e:`<h1> 12 【nextTick 过渡与动画】</h1>
<h2> 1.nextTick</h2>
<p><strong>这是一个生命周期钩子</strong></p>
<ol>
<li>语法：<code>this.$nextTick(回调函数)</code></li>
<li>作用：在下一次 DOM 更新结束后执行其指定的回调。</li>
<li>什么时候用：当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行。</li>
</ol>
<blockquote>
<p>比如编辑按钮使文本变成表单且自动获取焦点</p>
<p>点击表单时会用一个布尔值配合v-show使表单显示，可是改变布尔值的时候，后面的focus方法会跟着执行，然后再渲染模板</p>
</blockquote>`,r:{minutes:2.71,words:814},y:"a",t:"12 【nextTick 过渡与动画】"},["/front_end/front_end_framework/vue2/12","/front_end/front_end_framework/vue2/12.md"]],["v-38a5df42","/front_end/front_end_framework/vue2/13.html",{d:173312745e4,e:"<h1> 13 【代理配置 插槽】</h1>\n<h2> 1.Vue脚手架配置代理</h2>\n<p>本案例需要下载<code>axios</code>库<code>npm install axios</code></p>\n<p>配置参考文档 <code>Vue-Cli devServer.proxy</code>\n<code>vue.config.js </code>是一个可选的配置文件，如果项目的 (和<code> package.json</code> 同级的) 根目录中存在这个文件，那么它会```被 @vue/cli-service<code>自动加载。你也可以使用</code>package.json<code> 中的</code> vue `字段，但是注意这种写法需要你严格遵照 JSON 的格式来写</p>",r:{minutes:7.13,words:2138},y:"a",t:"13 【代理配置 插槽】"},["/front_end/front_end_framework/vue2/13","/front_end/front_end_framework/vue2/13.md"]],["v-3a5ab7e1","/front_end/front_end_framework/vue2/14.html",{d:173312745e4,e:`<h1> 14 【Vuex】</h1>
<h2> 1.理解 Vuex</h2>
<h3> 1.1 Vuex 是什么</h3>
<p>概念：专门在Vue中实现集中式状态（数据）管理的一个Vue插件，对Vue应用中多个组件的共享状态进行集中式的管理（读/写），也是一种组件间通信的方式，且适用于任意组件间通信</p>
<figure><img src="https://i0.hdslb.com/bfs/album/5a0df40952aa1665b2c1040df0d4d916dd2f6871.png" alt="image-20220703163518855" tabindex="0" loading="lazy"><figcaption>image-20220703163518855</figcaption></figure>`,r:{minutes:4.92,words:1476},y:"a",t:"14 【Vuex】"},["/front_end/front_end_framework/vue2/14","/front_end/front_end_framework/vue2/14.md"]],["v-3c0f9080","/front_end/front_end_framework/vue2/15.html",{d:173312745e4,e:`<h1> 15 【Vue-Router】</h1>
<h2> 1.相关理解</h2>
<h3> 1.1 vue-router 的理解</h3>
<p><code>vue</code>的一个插件库，专门用来实现SPA应用</p>
<h3> 1.2 对SPA应用的理解</h3>
<p>1.单页Web应用（single page web application，SPA）
2.整个应用只有一个完整的页面
3.点击页面中的导航链接不会刷新页面，只会做页面的局部更新
4.数据需要通过ajax请求获取</p>
<h3> 1.3 路由的理解</h3>
<p>1.什么是路由?
一个路由就是一组映射关系（key - value）
<code>key</code>为<strong>路径</strong>，<code>value</code>可能是<code>function</code>或<code>component</code></p>`,r:{minutes:19.11,words:5733},y:"a",t:"15 【Vue-Router】"},["/front_end/front_end_framework/vue2/15","/front_end/front_end_framework/vue2/15.md"]],["v-3dc4691f","/front_end/front_end_framework/vue2/16.html",{d:173312745e4,e:`<h1> 16 【打包 图片懒加载】</h1>
<h2> 1.打包</h2>
<p><code>vue.config.js</code></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">//打包时不生成map文件(用来进行错误提示的文件，很占用空间)</span>
  <span class="token literal-property property">productionSourceMap</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 关闭ESLINT校验工具</span>
  <span class="token literal-property property">lintOnSave</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.02,words:306},y:"a",t:"16 【打包 图片懒加载】"},["/front_end/front_end_framework/vue2/16","/front_end/front_end_framework/vue2/16.md"]],["v-d6cb3c78","/front_end/front_end_framework/vue3/01.html",{d:173312745e4,e:`<h1> 01 【创建vue3项目】</h1>
<blockquote>
<p>该笔记是从vue2过渡到vue3的，所以不会特别详细的介绍某些vue2学过的，主要介绍vue3新增的。</p>
</blockquote>
<h2> 1.Vue3快速上手</h2>
<img src="https://user-images.githubusercontent.com/499550/93624428-53932780-f9ae-11ea-8d16-af949e16a09f.png" style="width:200px">
<h3> 1.1 Vue3简介</h3>
<ul>
<li>2020年9月18日，Vue.js发布3.0版本，代号：One Piece（海贼王）</li>
<li>耗时2年多、<a href="https://github.com/vuejs/vue-next/graphs/commit-activity" target="_blank" rel="noopener noreferrer">2600+次提交</a>、<a href="https://github.com/vuejs/rfcs/tree/master/active-rfcs" target="_blank" rel="noopener noreferrer">30+个RFC</a>、<a href="https://github.com/vuejs/vue-next/pulls?q=is%3Apr+is%3Amerged+-author%3Aapp%2Fdependabot-preview+" target="_blank" rel="noopener noreferrer">600+次PR</a>、<a href="https://github.com/vuejs/vue-next/graphs/contributors" target="_blank" rel="noopener noreferrer">99位贡献者</a></li>
<li>github上的tags地址：<a href="https://github.com/vuejs/vue-next/releases/tag/v3.0.0" target="_blank" rel="noopener noreferrer">https://github.com/vuejs/vue-next/releases/tag/v3.0.0</a></li>
</ul>`,r:{minutes:4.8,words:1440},y:"a",t:"01 【创建vue3项目】"},["/front_end/front_end_framework/vue3/01","/front_end/front_end_framework/vue3/01.md"]],["v-d3618b3a","/front_end/front_end_framework/vue3/02.html",{d:173312745e4,e:`<h1> 02 【setup reactive ref】</h1>
<h2> 1.拉开序幕的setup</h2>
<h3> 1.1 为什么使用 setup ？</h3>
<ul>
<li>
<p>大型组件中选项的分离掩盖了潜在的逻辑问题。此外，在处理单个逻辑关注点时，我们必须不断地“跳转”相关代码的选项块。 如果能够将同一个逻辑关注点相关代码收集在一起会更好。而这正是组合式 API 使我们能够做到的。</p>
</li>
<li>
<p>通过创建 Vue 组件，我们可以将界面中重复的部分连同其功能一起提取为可重用的代码段。然而，光靠这一点可能并不够，尤其是当你的应用变得非常大的时候，共享和重用代码变得尤为重要。</p>
</li>
<li>
<p>为了开始使用 组合式 API，我们首先需要一个可以实际使用它的地方。在 Vue 组件中，我们将此位置称为 setup。</p>
</li>
</ul>`,r:{minutes:12.02,words:3607},y:"a",t:"02 【setup reactive ref】"},["/front_end/front_end_framework/vue3/02","/front_end/front_end_framework/vue3/02.md"]],["v-cff7d9fc","/front_end/front_end_framework/vue3/03.html",{d:173312745e4,e:`<h1> 03 【响应式原理 ref和reactive总结 setup注意点】</h1>
<h2> 1.Vue3.0中的响应式原理</h2>
<h3> 1.1 vue2.x的响应式</h3>
<ul>
<li>
<p>实现原理：</p>
<ul>
<li>
<p>对象类型：通过<code>Object.defineProperty()</code>对属性的读取、修改进行拦截（数据劫持）。</p>
</li>
<li>
<p>数组类型：通过重写更新数组的一系列方法来实现拦截。（对数组的变更方法进行了包裹）。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token string">'count'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function">get</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> 
    <span class="token function">set</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>存在问题：</p>
<ul>
<li>新增属性、删除属性, 界面不会更新。</li>
<li>直接通过下标修改数组, 界面不会自动更新。</li>
</ul>
</li>
</ul>`,r:{minutes:5.99,words:1797},y:"a",t:"03 【响应式原理 ref和reactive总结 setup注意点】"},["/front_end/front_end_framework/vue3/03","/front_end/front_end_framework/vue3/03.md"]],["v-cc8e28be","/front_end/front_end_framework/vue3/04.html",{d:173312745e4,e:`<h1> 04 【计算属性 侦听器】</h1>
<h2> 1.计算属性</h2>
<p>有时我们需要依赖于其他状态(普通proxy响应式数据)的状态(computed响应式数据)：
在 Vue 中，这是用组件计算属性处理的，以直接创建计算值，我们可以使用 computed 函数：它接受 getter 函数并为 getter 返回的值返回一个不可变的响应式 ref 对象。</p>
<h3> 1.1 computed函数</h3>
<blockquote>
<p>与Vue2.x中computed配置功能一致</p>
<p>可以直接去看3.7.3完整写法</p>
</blockquote>
<p>模板中的表达式虽然方便，但也只能用来做简单的操作。如果在模板中写太多逻辑，会让模板变得臃肿，难以维护。比如说，我们有这样一个包含嵌套数组的对象：</p>`,r:{minutes:17.98,words:5395},y:"a",t:"04 【计算属性 侦听器】"},["/front_end/front_end_framework/vue3/04","/front_end/front_end_framework/vue3/04.md"]],["v-c5bac642","/front_end/front_end_framework/vue3/06.html",{d:173312745e4,e:`<h1> 06 【生命周期 模板引用】</h1>
<h2> 1.生命周期</h2>
<p><strong>vue2</strong></p>
<figure><img src="https://i0.hdslb.com/bfs/album/a394b0ab95328a0cceb27fcee78c91d85ffe11a5.png" alt="image-20220629211626515" tabindex="0" loading="lazy"><figcaption>image-20220629211626515</figcaption></figure>
<p><strong>vue3</strong></p>`,r:{minutes:14.15,words:4246},y:"a",t:"06 【生命周期 模板引用】"},["/front_end/front_end_framework/vue3/06","/front_end/front_end_framework/vue3/06.md"]],["v-c2511504","/front_end/front_end_framework/vue3/07.html",{d:173312745e4,e:`<h1> 07 【动态组件 组件注册】</h1>
<h2> 1.动态组件</h2>
<h3> 1.1 基本使用</h3>
<p>composition api写法：只适用于vue3</p>
<ul>
<li>在 <code>&lt;script setup&gt;</code> 中，组件被引用为变量而不是作为 字符串键 来注册</li>
<li>核心点 shallowRef()</li>
<li>虽然用 ref() 也能正常使用，但官方不推荐，会爆warn: "这可能会导致不必要的性能开销" （原因，组件不是动态数据，不需要转为proxy）</li>
<li>:is 与 component   &gt;  设置动态组件的必要条件</li>
<li>:is 对应绑定的为字符串值即可，值对应引入的组件名</li>
<li>props 数据父传子</li>
<li>shallowRef   &gt;  声明 :is 绑定的值，值为 import 的组件名</li>
</ul>`,r:{minutes:4.82,words:1446},y:"a",t:"07 【动态组件 组件注册】"},["/front_end/front_end_framework/vue3/07","/front_end/front_end_framework/vue3/07.md"]],["v-bee763c6","/front_end/front_end_framework/vue3/08.html",{d:173312745e4,e:`<h1> 08 【Props 组件事件】</h1>
<h2> 1.Props</h2>
<h3> 1.1 Props 声明<a href="https://staging-cn.vuejs.org/guide/components/props.html#props-declaration" target="_blank" rel="noopener noreferrer">#</a></h3>
<p>Props 是一种特别的 attributes，你可以在组件上声明注册。要传递给子组件内容，我们必须在组件的 props 列表上声明它。</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token comment">&lt;!-- BlogPost.vue --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'title'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">&gt;</span></span>{{ title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:19.19,words:5757},y:"a",t:"08 【Props 组件事件】"},["/front_end/front_end_framework/vue3/08","/front_end/front_end_framework/vue3/08.md"]],["v-bb7db288","/front_end/front_end_framework/vue3/09.html",{d:173312745e4,e:`<h1> 09 【Attributes继承 provide与inject】</h1>
<h2> 1.继承 Attributes</h2>
<h3> 1.1 Attributes 继承</h3>
<h4> 1.1.1 Attributes 继承的基本概念</h4>
<p>“透传 attribute”指的是传递给一个组件，却没有被该组件声明为 <a href="https://staging-cn.vuejs.org/guide/components/props.html" target="_blank" rel="noopener noreferrer">props</a> 或 <a href="https://staging-cn.vuejs.org/guide/components/events.html#defining-custom-events" target="_blank" rel="noopener noreferrer">emits</a> 的 attribute 或者 <code>v-on</code> 事件监听器。最常见的例子就是 <code>class</code>、<code>style</code> 和 <code>id</code>。</p>`,r:{minutes:13.09,words:3926},y:"a",t:"09 【Attributes继承 provide与inject】"},["/front_end/front_end_framework/vue3/09","/front_end/front_end_framework/vue3/09.md"]],["v-70687734","/front_end/front_end_framework/vue3/10.html",{d:173312745e4,e:`<h1> 10 【异步组件 组合式函数(hooks)】</h1>
<h2> 1.异步组件</h2>
<h3> 1.1 为什么要有异步组件</h3>
<p>首先来看这样一段代码</p>
<p>父组件<code>App.vue</code></p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>我是App组件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Child</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Child</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'App'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> Child <span class="token keyword">from</span> <span class="token string">'./components/Child.vue'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:13.26,words:3979},y:"a",t:"10 【异步组件 组合式函数(hooks)】"},["/front_end/front_end_framework/vue3/10","/front_end/front_end_framework/vue3/10.md"]],["v-6cfec5f6","/front_end/front_end_framework/vue3/11.html",{d:173312745e4,e:`<h1> 11 【Teleport CSS功能】</h1>
<h2> 1.内置组件 Teleport</h2>
<p>什么是Teleport？——<code>&lt;Teleport&gt;</code> 是一个内置组件，它是一种能够将我们的模板渲染至指定DOM节点，不受父级style、v-show等属性影响，但data、prop数据依旧能够共用的技术；类似于 React 的 Portal。</p>
<p>主要解决的问题 因为Teleport节点挂载在其他指定的DOM节点下，完全不受父级style样式影响</p>
<ol>
<li>teleport 是内置组件，可以直接在模板中使用，无需注册。</li>
<li>可以被打包工具 tree-shake。所以它们只会在被使用的时候被引入。</li>
<li>需要直接主动访问(获取)它们的场景，也可以将它们显性导入。</li>
</ol>`,r:{minutes:13.47,words:4041},y:"a",t:"11 【Teleport CSS功能】"},["/front_end/front_end_framework/vue3/11","/front_end/front_end_framework/vue3/11.md"]],["v-699514b8","/front_end/front_end_framework/vue3/12.html",{d:173312745e4,e:`<h1> 12 【其它组合式API】</h1>
<p>ref、unref、toRef、toRefs、isRef、customRef、shallowRef、triggerRef</p>
<p>refs api中的重点为：ref、toRefs、shallowRef、customRef，其次是 isRef 等。</p>
<h2> 1.toRef 与 toRefs</h2>
<h3> 1.1 toRef</h3>
<ul>
<li>
<p>作用：可以用来为源响应式对象上的某个 property 新创建一个 ref。然后，ref 可以被传递，它会保持对其源 property 的响应式连接。</p>
</li>
<li>
<p>语法 (源对象 , 源对象属性)\`\`\`\`const name = toRef(person,'name')\`\`\`</p>
</li>
<li>
<p>应用: 源响应式对象(toRef的第一个参数) 上的某个 property 新创建一个 ref</p>
</li>
<li>
<p><strong>toRef示例</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> fooRef <span class="token operator">=</span> <span class="token function">toRef</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> <span class="token string">'foo'</span><span class="token punctuation">)</span>

<span class="token comment">// 更改该 ref 会更新源属性</span>
fooRef<span class="token punctuation">.</span>value<span class="token operator">++</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span>foo<span class="token punctuation">)</span> <span class="token comment">// 2</span>

<span class="token comment">// 更改源属性也会更新该 ref</span>
state<span class="token punctuation">.</span>foo<span class="token operator">++</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fooRef<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请注意，这不同于：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fooRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span>foo<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面这个 ref <strong>不会</strong>和 <code>state.foo</code> 保持同步，因为这个 <code>ref()</code> 接收到的是一个纯数值。</p>
<p><code>toRef()</code> 这个函数在你想把一个 prop 的 ref 传递给一个组合式函数时会很有用：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> toRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token comment">/* ... */</span><span class="token punctuation">)</span>

<span class="token comment">// 将 \`props.foo\` 转换为 ref，然后传入</span>
<span class="token comment">// 一个组合式函数</span>
<span class="token function">useSomeFeature</span><span class="token punctuation">(</span><span class="token function">toRef</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> <span class="token string">'foo'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当 <code>toRef</code> 与组件 props 结合使用时，关于禁止对 props 做出更改的限制依然有效。尝试将新的值传递给 ref 等效于尝试直接更改 props，这是不允许的。在这种场景下，你可能可以考虑使用带有 <code>get</code> 和 <code>set</code> 的 <a href="https://staging-cn.vuejs.org/api/reactivity-core.html#computed" target="_blank" rel="noopener noreferrer"><code>computed</code></a> 替代。详情请见<a href="https://staging-cn.vuejs.org/guide/components/events.html#usage-with-v-model" target="_blank" rel="noopener noreferrer">在组件上使用 <code>v-model</code></a> 指南。</p>
<p>即使源属性当前不存在，<code>toRef()</code> 也会返回一个可用的 ref。这让它在处理可选 props 的时候格外实用，相比之下 <a href="https://staging-cn.vuejs.org/api/reactivity-utilities.html#torefs" target="_blank" rel="noopener noreferrer"><code>toRefs</code></a> 就不会为可选 props 创建对应的 refs。</p>
</li>
</ul>`,r:{minutes:11.84,words:3552},y:"a",t:"12 【其它组合式API】"},["/front_end/front_end_framework/vue3/12","/front_end/front_end_framework/vue3/12.md"]],["v-662b637a","/front_end/front_end_framework/vue3/13.html",{d:173312745e4,e:`<h1> 13 【script setup 总结】</h1>
<blockquote>
<p>因为学习的时候，视频版本并没有一些新的语法糖，笔记是没有使用这些语法糖的，但是用法都会以补充的形式加进来。</p>
</blockquote>
<p>在 <code>setup()</code> 函数中手动暴露大量的状态和方法非常繁琐。幸运的是，我们可以通过使用构建工具来简化该操作。当使用单文件组件（SFC）时，我们可以使用 <code>&lt;script setup&gt;</code> 来大幅度地简化代码。</p>
<p><code>&lt;script setup&gt; </code>是在单文件组件 (SFC) 中使用组合式 API 的编译时语法糖。当同时使用 SFC 与组合式 API 时该语法是默认推荐。相比于普通的<code>&lt;script&gt;</code>语法，它具有更多优势：</p>`,r:{minutes:8.79,words:2637},y:"a",t:"13 【script setup 总结】"},["/front_end/front_end_framework/vue3/13","/front_end/front_end_framework/vue3/13.md"]],["v-62c1b23c","/front_end/front_end_framework/vue3/14.html",{d:173312745e4,e:`<h1> 14 【TS类型声明 keepAlive】</h1>
<h2> 1.Ts 类型声明使用 &amp; 讲解</h2>
<blockquote>
<p>该文章未归纳完，那么多API肯定也说不完。。不过也涵盖了主要的组合式 API 的 TS类型。</p>
<p>核心：大部分都是运用API函数泛型来定义类型。</p>
</blockquote>
<h3> 1.1 父组件相关的</h3>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onsub<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>测试<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleChange<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>child</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>childRef<span class="token punctuation">'</span></span> <span class="token attr-name">:child</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>2<span class="token punctuation">'</span></span> <span class="token attr-name">:strData</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span><span class="token punctuation">"</span>1"<span class="token punctuation">'</span></span> <span class="token attr-name">:arrFor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[]<span class="token punctuation">"</span></span> <span class="token attr-name">@elPsyKongroo</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>onsub<span class="token punctuation">'</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>child</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>ts<span class="token punctuation">'</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> child <span class="token keyword">from</span> <span class="token string">'./child.vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span>Ref<span class="token punctuation">,</span>reactive<span class="token punctuation">,</span>computed<span class="token punctuation">,</span>customRef<span class="token punctuation">,</span>watch<span class="token punctuation">,</span>provide <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
 
<span class="token comment">//&gt; ref</span>
<span class="token comment">// interface Ref&lt;T&gt; {</span>
<span class="token comment">//   value: T</span>
<span class="token comment">// }</span>
<span class="token comment">// function ref&lt;T&gt;(value: T): Ref&lt;T&gt;</span>
<span class="token keyword">const</span> year <span class="token operator">=</span> ref<span class="token operator">&lt;</span>string <span class="token operator">|</span> number<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token string">'2020'</span><span class="token punctuation">)</span>
<span class="token comment">// 如果泛型的类型未知，则建议将 ref 转换为 Ref&lt;T&gt;：</span>
<span class="token keyword">function</span> useState<span class="token operator">&lt;</span>State <span class="token keyword">extends</span> <span class="token class-name">string</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>initial<span class="token operator">:</span> State<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span>initial<span class="token punctuation">)</span> <span class="token keyword">as</span> Ref<span class="token operator">&lt;</span>State<span class="token operator">&gt;</span> <span class="token comment">// state.value -&gt; State extends string</span>
  <span class="token keyword">return</span> state
<span class="token punctuation">}</span>
 
<span class="token comment">//&gt; reactive</span>
<span class="token keyword">interface</span> <span class="token class-name">Book</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> string
  year<span class="token operator">?</span><span class="token operator">:</span> number
<span class="token punctuation">}</span>
<span class="token keyword">const</span> book <span class="token operator">=</span> reactive<span class="token operator">&lt;</span>Book<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">'唉，真有氏的怀表怎么停了!'</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// function reactive&lt;T extends object&gt;(target: T): UnwrapNestedRefs&lt;T&gt;</span>
 
<span class="token comment">//&gt; customRef</span>
<span class="token comment">// function customRef&lt;T&gt;(factory: CustomRefFactory&lt;T&gt;): Ref&lt;T&gt;</span>
<span class="token comment">// type CustomRefFactory&lt;T&gt; = (</span>
<span class="token comment">//   track: () =&gt; void,</span>
<span class="token comment">//   trigger: () =&gt; void</span>
<span class="token comment">// ) =&gt; {</span>
<span class="token comment">//   get: () =&gt; T</span>
<span class="token comment">//   set: (value: T) =&gt; void</span>
<span class="token comment">// }</span>
<span class="token keyword">function</span> <span class="token function">useDebouncedRef</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">value</span><span class="token operator">:</span>string<span class="token punctuation">,</span> delay <span class="token operator">=</span> <span class="token number">200</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> customRef<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">track<span class="token punctuation">,</span> trigger</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> value
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">set</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        value <span class="token operator">=</span> newValue
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> a23 <span class="token operator">=</span> <span class="token function">useDebouncedRef</span><span class="token punctuation">(</span><span class="token string">'heelo1'</span><span class="token punctuation">)</span>
a23<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">'123'</span>
 
 
<span class="token comment">//&gt; provide 与 inject   // inject示例在同级child.vue里</span>
<span class="token comment">// interface InjectionKey&lt;T&gt; extends Symbol {}</span>
<span class="token comment">// function provide&lt;T&gt;(key: InjectionKey&lt;T&gt; | string, value: T): void</span>
<span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">'static'</span><span class="token punctuation">,</span>year<span class="token punctuation">)</span>
<span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">'pbook'</span><span class="token punctuation">,</span>book<span class="token punctuation">)</span>
<span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">'changeFn'</span><span class="token punctuation">,</span>onsub<span class="token punctuation">)</span>
<span class="token comment">//! 有时候可能需要在子组件修改响应式的数据，此时provide一个方法给子组件调用</span>
 
 
 
<span class="token comment">//&gt; computed</span>
<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> doubleCount <span class="token operator">=</span> computed<span class="token operator">&lt;</span>number<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> count<span class="token punctuation">.</span>value <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span>
 
<span class="token comment">//&gt; watch</span>
watch<span class="token operator">&lt;</span>number<span class="token operator">&gt;</span><span class="token punctuation">(</span>count<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// watch&lt;Ref&lt;number&gt;&gt;(count,()=&gt;{}) // 也可以</span>
<span class="token keyword">interface</span> <span class="token class-name">ReactiveData2</span><span class="token punctuation">{</span>
  <span class="token literal-property property">content2</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">count2</span><span class="token operator">:</span> number
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> refData <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> reactiveData <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">content</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">count</span><span class="token operator">:</span><span class="token number">110</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> reactiveData2 <span class="token operator">=</span> reactive<span class="token operator">&lt;</span>ReactiveData2<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">content2</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">count2</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
watch<span class="token operator">&lt;</span><span class="token punctuation">[</span>Ref<span class="token operator">&lt;</span>number<span class="token operator">&gt;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> number<span class="token punctuation">,</span>ReactiveData2<span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">[</span>refData<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span>reactiveData<span class="token punctuation">.</span>content<span class="token punctuation">.</span>count<span class="token punctuation">,</span>reactiveData2<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">]</span><span class="token punctuation">,</span> oldValue</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
 
 
<span class="token comment">// defineExpose 暴露的内容</span>
<span class="token comment">// let childRef = ref()</span>
<span class="token comment">// setTimeout(() =&gt; {</span>
<span class="token comment">//   console.log(childRef.value.ex1); // 如果是子组件的ref对象数据，会自动解包 .value</span>
<span class="token comment">// }, 1000);</span>
 
<span class="token keyword">function</span> <span class="token function">handleChange</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">(</span>el<span class="token punctuation">.</span>target <span class="token keyword">as</span> HTMLInputElement<span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>el<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">onsub</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
  year<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">2036</span>
  book<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">'掌管未来女神的作战计划 El psy kongroo'</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:7.13,words:2140},y:"a",t:"14 【TS类型声明 keepAlive】"},["/front_end/front_end_framework/vue3/14","/front_end/front_end_framework/vue3/14.md"]],["v-5f5800fe","/front_end/front_end_framework/vue3/15.html",{d:173312745e4,e:`<h1> 15 【Pinia】</h1>
<h2> 1.pinia是什么？</h2>
<blockquote>
<p><strong>前言</strong></p>
<p>Vue3已经推出很长时间了，它周边的生态也是越来越完善了。之前我们使用Vue2的时候，Vuex可以说是必备的，它作为一个状态管理工具，给我们带来了极大的方便。Vue3推出后，虽然相对于Vue2很多东西都变了，但是核心的东西还是没有变的，比如说状态管理、路由等等。再Vue3种，尤大神推荐我们使用pinia来实现状态管理，他也说pinia就是Vuex的新版本。</p>
<p>那么pinia究竟是何方神圣，本篇文章带大家一起学透它！</p>
</blockquote>`,r:{minutes:18.67,words:5602},y:"a",t:"15 【Pinia】"},["/front_end/front_end_framework/vue3/15","/front_end/front_end_framework/vue3/15.md"]],["v-5bee4fc0","/front_end/front_end_framework/vue3/16.html",{d:173312745e4,e:`<h1> 16 【Router 4】</h1>
<p>使用Vue3 安装对应的router4版本</p>
<p>使用Vue2安装对应的router3版本</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> vue-router@4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:5.27,words:1582},y:"a",t:"16 【Router 4】"},["/front_end/front_end_framework/vue3/16","/front_end/front_end_framework/vue3/16.md"]],["v-58849e82","/front_end/front_end_framework/vue3/17.html",{d:173312745e4,e:`<h1> 17 【Vue3自动导入配置】</h1>
<h2> 1.自动导入组件库组件</h2>
<p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fantfu%2Funplugin-vue-components%23readme" target="_blank" rel="noopener noreferrer">unplugin-vue-components</a></p>
<figure><img src="https://i0.hdslb.com/bfs/album/1fdd991c3093cfe8e50851df60a5bfe507d764b7.png" alt="image-20220924104148732" tabindex="0" loading="lazy"><figcaption>image-20220924104148732</figcaption></figure>`,r:{minutes:4.12,words:1237},y:"a",t:"17 【Vue3自动导入配置】"},["/front_end/front_end_framework/vue3/17","/front_end/front_end_framework/vue3/17.md"]],["v-551aed44","/front_end/front_end_framework/vue3/18.html",{d:173312745e4,e:`<h1> 18 【Vue3组件通信方总结式】</h1>
<blockquote>
<p><strong>通信仓库地址:</strong><a href="https://gitee.com/jch1011/vue3_communication.git" target="_blank" rel="noopener noreferrer"><strong>https://gitee.com/jch1011/vue3_communication.git</strong></a></p>
<p>不管是vue2还是vue3,组件通信方式很重要,不管是项目还是面试都是经常用到的知识点。</p>
</blockquote>`,r:{minutes:11.09,words:3328},y:"a",t:"18 【Vue3组件通信方总结式】"},["/front_end/front_end_framework/vue3/18","/front_end/front_end_framework/vue3/18.md"]],["v-01544aa3","/front_end/js_advanced/ajax/01.html",{d:173312745e4,e:`<h1> 01 【AJAX概述和基本使用】</h1>
<h2> 1.AJAX简介</h2>
<p>AJAX 全称为Asynchronous JavaScript And <a href="https://so.csdn.net/so/search?q=XML&amp;spm=1002101.01.70" target="_blank" rel="noopener noreferrer">XML</a>，就是异步的JS 和XML
通过AJAX 可以在浏览器中向服务器发送异步请求，最大的优势：<strong>无刷新获取数据</strong>
AJAX 不是新的编程语言，而是一种将现有的标准组合在一起使用的新方式</p>`,r:{minutes:7.3,words:2190},y:"a",t:"01 【AJAX概述和基本使用】"},["/front_end/js_advanced/ajax/01","/front_end/js_advanced/ajax/01.md"]],["v-03092342","/front_end/js_advanced/ajax/02.html",{d:173312745e4,e:`<h1> 02 【Axios的概述和基本使用】</h1>
<h2> 1.Axios 是什么?</h2>
<ol>
<li>前端最流行的<code>Ajax</code>请求库</li>
<li>react/vue 官方都推荐使用 axios 发ajax 请求</li>
<li><a href="https://github.com/axios/axios" target="_blank" rel="noopener noreferrer">文档: https://github.com/axios/axios</a></li>
</ol>
<h2> 2.Axios 特点</h2>
<ol>
<li>基于 xhr + promise 的异步 ajax请求库</li>
<li>浏览器端/node 端都可以使用</li>
<li>支持请求／响应拦截器</li>
<li>支持请求取消</li>
<li>请求/响应数据转换</li>
<li>批量发送多个请求</li>
</ol>`,r:{minutes:8.17,words:2450},y:"a",t:"02 【Axios的概述和基本使用】"},["/front_end/js_advanced/ajax/02","/front_end/js_advanced/ajax/02.md"]],["v-04bdfbe1","/front_end/js_advanced/ajax/03.html",{d:173312745e4,e:`<h1> 03 【Fetch的概述和基本使用】</h1>
<h2> 1.XMLHttpRequest缺点</h2>
<p>浏览器提供了原生的AJAX实现类XMLHttpRequest，基于该类实例，我们可以实现在网页上发送AJAX请求到服务端。</p>
<p>但是XMLHttpRequest的设计并不完美，主要体现在以下几个方面：</p>
<p>HTTP请求，响应都被耦合在XMLHttpRequest实例上，结构不够简单明了
采用事件回调的方式获取HTTP响应，可能会产生回调地狱
如果HTTP响应数据过大，则会占用大量内存
最后一点就是，XMLHttpRequest实现AJAX的步骤太零碎了</p>`,r:{minutes:16.13,words:4839},y:"a",t:"03 【Fetch的概述和基本使用】"},["/front_end/js_advanced/ajax/03","/front_end/js_advanced/ajax/03.md"]],["v-0672d480","/front_end/js_advanced/ajax/04.html",{d:173312745e4,e:`<h1> 04 【跨域初识】</h1>
<h2> 1.同源策略</h2>
<ul>
<li>同源策略(Same-Origin Policy)最早由Netscape 公司提出，是浏览器的一种安全策略</li>
<li>同源： 协议、域名、端口号必须完全相同</li>
<li>跨域： 违背同源策略就是<strong>跨域</strong></li>
</ul>
<h2> 2.如何解决跨域</h2>
<h3> 2.1 JSONP</h3>
<blockquote>
<p><strong>jsonp只支持get请求不支持post请求</strong></p>
</blockquote>
<p><strong>1) JSONP 是什么</strong></p>`,r:{minutes:1.68,words:505},y:"a",t:"04 【跨域初识】"},["/front_end/js_advanced/ajax/04","/front_end/js_advanced/ajax/04.md"]],["v-33cf2509","/front_end/js_advanced/echarts/01.html",{d:173312745e4,e:`<h1> 1.Echarts-介绍</h1>
<p>常见的数据可视化库：</p>
<ul>
<li>D3.js   目前 Web 端评价最高的 Javascript 可视化工具库(入手难)</li>
<li>ECharts.js   百度出品的一个开源 Javascript 数据可视化库</li>
<li>Highcharts.js  国外的前端数据可视化库，非商用免费，被许多国外大公司所使用</li>
<li>AntV  蚂蚁金服全新一代数据可视化解决方案  等等</li>
<li>Highcharts 和 Echarts 就像是 Office 和 WPS 的关系</li>
</ul>
<blockquote>
<p>ECharts，一个使用 JavaScript 实现的开源可视化库，可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE8/9/10/11，Chrome，Firefox，Safari等），底层依赖矢量图形库 <a href="https://github.com/ecomfe/zrender" target="_blank" rel="noopener noreferrer">ZRender</a>，提供直观，交互丰富，可高度个性化定制的数据可视化图表。</p>
</blockquote>`,r:{minutes:12.21,words:3663},y:"a",t:"1.Echarts-介绍"},["/front_end/js_advanced/echarts/01","/front_end/js_advanced/echarts/01.md"]],["v-3583fda8","/front_end/js_advanced/echarts/02.html",{d:173312745e4,e:`<h1> 5.echarts 各个配置项详细说明总结</h1>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>theme <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// 全图默认背景</span>
    <span class="token comment">// backgroundColor: 'rgba(0,0,0,0)',</span>

    <span class="token comment">// 默认色板</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'#ff7f50'</span><span class="token punctuation">,</span><span class="token string">'#87cefa'</span><span class="token punctuation">,</span><span class="token string">'#da70d6'</span><span class="token punctuation">,</span><span class="token string">'#32cd32'</span><span class="token punctuation">,</span><span class="token string">'#6495ed'</span><span class="token punctuation">,</span>
            <span class="token string">'#ff69b4'</span><span class="token punctuation">,</span><span class="token string">'#ba55d3'</span><span class="token punctuation">,</span><span class="token string">'#cd5c5c'</span><span class="token punctuation">,</span><span class="token string">'#ffa500'</span><span class="token punctuation">,</span><span class="token string">'#40e0d0'</span><span class="token punctuation">,</span>
            <span class="token string">'#1e90ff'</span><span class="token punctuation">,</span><span class="token string">'#ff6347'</span><span class="token punctuation">,</span><span class="token string">'#7b68ee'</span><span class="token punctuation">,</span><span class="token string">'#00fa9a'</span><span class="token punctuation">,</span><span class="token string">'#ffd700'</span><span class="token punctuation">,</span>
            <span class="token string">'#6699FF'</span><span class="token punctuation">,</span><span class="token string">'#ff6666'</span><span class="token punctuation">,</span><span class="token string">'#3cb371'</span><span class="token punctuation">,</span><span class="token string">'#b8860b'</span><span class="token punctuation">,</span><span class="token string">'#30e0e0'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// 图表标题</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token string">'left'</span><span class="token punctuation">,</span>                 <span class="token comment">// 水平安放位置，默认为左对齐，可选为：</span>
                                   <span class="token comment">// 'center' ¦ 'left' ¦ 'right'</span>
                                   <span class="token comment">// ¦ {number}（x坐标，单位px）</span>
        <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token string">'top'</span><span class="token punctuation">,</span>                  <span class="token comment">// 垂直安放位置，默认为全图顶端，可选为：</span>
                                   <span class="token comment">// 'top' ¦ 'bottom' ¦ 'center'</span>
                                   <span class="token comment">// ¦ {number}（y坐标，单位px）</span>
        <span class="token comment">//textAlign: null          // 水平对齐方式，默认根据x设置自动调整</span>
        <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">'rgba(0,0,0,0)'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">'#ccc'</span><span class="token punctuation">,</span>       <span class="token comment">// 标题边框颜色</span>
        <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>            <span class="token comment">// 标题边框线宽，单位px，默认为0（无边框）</span>
        <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>                <span class="token comment">// 标题内边距，单位px，默认各方向内边距为5，</span>
                                   <span class="token comment">// 接受数组分别设定上右下左边距，同css</span>
        <span class="token literal-property property">itemGap</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>               <span class="token comment">// 主副标题纵向间隔，单位px，默认为10，</span>
        <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
            <span class="token literal-property property">fontWeight</span><span class="token operator">:</span> <span class="token string">'bolder'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#333'</span>          <span class="token comment">// 主标题文字颜色</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">subtextStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#aaa'</span>          <span class="token comment">// 副标题文字颜色</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 图例</span>
    <span class="token literal-property property">legend</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">orient</span><span class="token operator">:</span> <span class="token string">'horizontal'</span><span class="token punctuation">,</span>      <span class="token comment">// 布局方式，默认为水平布局，可选为：</span>
                                   <span class="token comment">// 'horizontal' ¦ 'vertical'</span>
        <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>               <span class="token comment">// 水平安放位置，默认为全图居中，可选为：</span>
                                   <span class="token comment">// 'center' ¦ 'left' ¦ 'right'</span>
                                   <span class="token comment">// ¦ {number}（x坐标，单位px）</span>
        <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token string">'top'</span><span class="token punctuation">,</span>                  <span class="token comment">// 垂直安放位置，默认为全图顶端，可选为：</span>
                                   <span class="token comment">// 'top' ¦ 'bottom' ¦ 'center'</span>
                                   <span class="token comment">// ¦ {number}（y坐标，单位px）</span>
        <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">'rgba(0,0,0,0)'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">'#ccc'</span><span class="token punctuation">,</span>       <span class="token comment">// 图例边框颜色</span>
        <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>            <span class="token comment">// 图例边框线宽，单位px，默认为0（无边框）</span>
        <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>                <span class="token comment">// 图例内边距，单位px，默认各方向内边距为5，</span>
                                   <span class="token comment">// 接受数组分别设定上右下左边距，同css</span>
        <span class="token literal-property property">itemGap</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>               <span class="token comment">// 各个item之间的间隔，单位px，默认为10，</span>
                                   <span class="token comment">// 横向布局时为水平间隔，纵向布局时为纵向间隔</span>
        <span class="token literal-property property">itemWidth</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>             <span class="token comment">// 图例图形宽度</span>
        <span class="token literal-property property">itemHeight</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>            <span class="token comment">// 图例图形高度</span>
        <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#333'</span>          <span class="token comment">// 图例文字颜色</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 值域</span>
    <span class="token literal-property property">dataRange</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">orient</span><span class="token operator">:</span> <span class="token string">'vertical'</span><span class="token punctuation">,</span>        <span class="token comment">// 布局方式，默认为垂直布局，可选为：</span>
                                   <span class="token comment">// 'horizontal' ¦ 'vertical'</span>
        <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token string">'left'</span><span class="token punctuation">,</span>                 <span class="token comment">// 水平安放位置，默认为全图左对齐，可选为：</span>
                                   <span class="token comment">// 'center' ¦ 'left' ¦ 'right'</span>
                                   <span class="token comment">// ¦ {number}（x坐标，单位px）</span>
        <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token string">'bottom'</span><span class="token punctuation">,</span>               <span class="token comment">// 垂直安放位置，默认为全图底部，可选为：</span>
                                   <span class="token comment">// 'top' ¦ 'bottom' ¦ 'center'</span>
                                   <span class="token comment">// ¦ {number}（y坐标，单位px）</span>
        <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">'rgba(0,0,0,0)'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">'#ccc'</span><span class="token punctuation">,</span>       <span class="token comment">// 值域边框颜色</span>
        <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>            <span class="token comment">// 值域边框线宽，单位px，默认为0（无边框）</span>
        <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>                <span class="token comment">// 值域内边距，单位px，默认各方向内边距为5，</span>
                                   <span class="token comment">// 接受数组分别设定上右下左边距，同css</span>
        <span class="token literal-property property">itemGap</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>               <span class="token comment">// 各个item之间的间隔，单位px，默认为10，</span>
                                   <span class="token comment">// 横向布局时为水平间隔，纵向布局时为纵向间隔</span>
        <span class="token literal-property property">itemWidth</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>             <span class="token comment">// 值域图形宽度，线性渐变水平布局宽度为该值 * 10</span>
        <span class="token literal-property property">itemHeight</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>            <span class="token comment">// 值域图形高度，线性渐变垂直布局高度为该值 * 10</span>
        <span class="token literal-property property">splitNumber</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>            <span class="token comment">// 分割段数，默认为5，为0时为线性渐变</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">'#1e90ff'</span><span class="token punctuation">,</span><span class="token string">'#f0ffff'</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token comment">//颜色 </span>
        <span class="token comment">//text:['高','低'],         // 文本，默认为数值文本</span>
        <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#333'</span>          <span class="token comment">// 值域文字颜色</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">toolbox</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">orient</span><span class="token operator">:</span> <span class="token string">'horizontal'</span><span class="token punctuation">,</span>      <span class="token comment">// 布局方式，默认为水平布局，可选为：</span>
                                   <span class="token comment">// 'horizontal' ¦ 'vertical'</span>
        <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token string">'right'</span><span class="token punctuation">,</span>                <span class="token comment">// 水平安放位置，默认为全图右对齐，可选为：</span>
                                   <span class="token comment">// 'center' ¦ 'left' ¦ 'right'</span>
                                   <span class="token comment">// ¦ {number}（x坐标，单位px）</span>
        <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token string">'top'</span><span class="token punctuation">,</span>                  <span class="token comment">// 垂直安放位置，默认为全图顶端，可选为：</span>
                                   <span class="token comment">// 'top' ¦ 'bottom' ¦ 'center'</span>
                                   <span class="token comment">// ¦ {number}（y坐标，单位px）</span>
        <span class="token literal-property property">color</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'#1e90ff'</span><span class="token punctuation">,</span><span class="token string">'#22bb22'</span><span class="token punctuation">,</span><span class="token string">'#4b0082'</span><span class="token punctuation">,</span><span class="token string">'#d2691e'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">'rgba(0,0,0,0)'</span><span class="token punctuation">,</span> <span class="token comment">// 工具箱背景颜色</span>
        <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">'#ccc'</span><span class="token punctuation">,</span>       <span class="token comment">// 工具箱边框颜色</span>
        <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>            <span class="token comment">// 工具箱边框线宽，单位px，默认为0（无边框）</span>
        <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>                <span class="token comment">// 工具箱内边距，单位px，默认各方向内边距为5，</span>
                                   <span class="token comment">// 接受数组分别设定上右下左边距，同css</span>
        <span class="token literal-property property">itemGap</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>               <span class="token comment">// 各个item之间的间隔，单位px，默认为10，</span>
                                   <span class="token comment">// 横向布局时为水平间隔，纵向布局时为纵向间隔</span>
        <span class="token literal-property property">itemSize</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>              <span class="token comment">// 工具箱图形宽度</span>
        <span class="token literal-property property">featureImageIcon</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>     <span class="token comment">// 自定义图片icon</span>
        <span class="token literal-property property">featureTitle</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">mark</span> <span class="token operator">:</span> <span class="token string">'辅助线开关'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">markUndo</span> <span class="token operator">:</span> <span class="token string">'删除辅助线'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">markClear</span> <span class="token operator">:</span> <span class="token string">'清空辅助线'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">dataZoom</span> <span class="token operator">:</span> <span class="token string">'区域缩放'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">dataZoomReset</span> <span class="token operator">:</span> <span class="token string">'区域缩放后退'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">dataView</span> <span class="token operator">:</span> <span class="token string">'数据视图'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">lineChart</span> <span class="token operator">:</span> <span class="token string">'折线图切换'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">barChart</span> <span class="token operator">:</span> <span class="token string">'柱形图切换'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">restore</span> <span class="token operator">:</span> <span class="token string">'还原'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">saveAsImage</span> <span class="token operator">:</span> <span class="token string">'保存为图片'</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 提示框</span>
    <span class="token literal-property property">tooltip</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">'item'</span><span class="token punctuation">,</span>           <span class="token comment">// 触发类型，默认数据触发，见下图，可选为：'item' ¦ 'axis'</span>
        <span class="token literal-property property">showDelay</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>             <span class="token comment">// 显示延迟，添加显示延迟可以避免频繁切换，单位ms</span>
        <span class="token literal-property property">hideDelay</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>            <span class="token comment">// 隐藏延迟，单位ms</span>
        <span class="token literal-property property">transitionDuration</span> <span class="token operator">:</span> <span class="token number">0.4</span><span class="token punctuation">,</span>  <span class="token comment">// 动画变换时间，单位s</span>
        <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">'rgba(0,0,0,0.7)'</span><span class="token punctuation">,</span>     <span class="token comment">// 提示背景颜色，默认为透明度为0.7的黑色</span>
        <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">'#333'</span><span class="token punctuation">,</span>       <span class="token comment">// 提示边框颜色</span>
        <span class="token literal-property property">borderRadius</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>           <span class="token comment">// 提示边框圆角，单位px，默认为4</span>
        <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>            <span class="token comment">// 提示边框线宽，单位px，默认为0（无边框）</span>
        <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>                <span class="token comment">// 提示内边距，单位px，默认各方向内边距为5，</span>
                                   <span class="token comment">// 接受数组分别设定上右下左边距，同css</span>
        <span class="token literal-property property">axisPointer</span> <span class="token operator">:</span> <span class="token punctuation">{</span>            <span class="token comment">// 坐标轴指示器，坐标轴触发有效</span>
            <span class="token literal-property property">type</span> <span class="token operator">:</span> <span class="token string">'line'</span><span class="token punctuation">,</span>         <span class="token comment">// 默认为直线，可选为：'line' | 'shadow'</span>
            <span class="token literal-property property">lineStyle</span> <span class="token operator">:</span> <span class="token punctuation">{</span>          <span class="token comment">// 直线指示器样式设置</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#48b'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'solid'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">shadowStyle</span> <span class="token operator">:</span> <span class="token punctuation">{</span>                       <span class="token comment">// 阴影指示器样式设置</span>
                <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'auto'</span><span class="token punctuation">,</span>                   <span class="token comment">// 阴影大小</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'rgba(150,150,150,0.3)'</span>  <span class="token comment">// 阴影颜色</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#fff'</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 区域缩放控制器</span>
    <span class="token literal-property property">dataZoom</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">orient</span><span class="token operator">:</span> <span class="token string">'horizontal'</span><span class="token punctuation">,</span>      <span class="token comment">// 布局方式，默认为水平布局，可选为：</span>
                                   <span class="token comment">// 'horizontal' ¦ 'vertical'</span>
        <span class="token comment">// x: {number},            // 水平安放位置，默认为根据grid参数适配，可选为：</span>
                                   <span class="token comment">// {number}（x坐标，单位px）</span>
        <span class="token comment">// y: {number},            // 垂直安放位置，默认为根据grid参数适配，可选为：</span>
                                   <span class="token comment">// {number}（y坐标，单位px）</span>
        <span class="token comment">// width: {number},        // 指定宽度，横向布局时默认为根据grid参数适配</span>
        <span class="token comment">// height: {number},       // 指定高度，纵向布局时默认为根据grid参数适配</span>
        <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">'rgba(0,0,0,0)'</span><span class="token punctuation">,</span>       <span class="token comment">// 背景颜色</span>
        <span class="token literal-property property">dataBackgroundColor</span><span class="token operator">:</span> <span class="token string">'#eee'</span><span class="token punctuation">,</span>            <span class="token comment">// 数据背景颜色</span>
        <span class="token literal-property property">fillerColor</span><span class="token operator">:</span> <span class="token string">'rgba(144,197,237,0.2)'</span><span class="token punctuation">,</span>   <span class="token comment">// 填充颜色</span>
        <span class="token literal-property property">handleColor</span><span class="token operator">:</span> <span class="token string">'rgba(70,130,180,0.8)'</span>     <span class="token comment">// 手柄颜色</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 网格</span>
    <span class="token literal-property property">grid</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
        <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
        <span class="token literal-property property">x2</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
        <span class="token literal-property property">y2</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
        <span class="token comment">// width: {totalWidth} - x - x2,</span>
        <span class="token comment">// height: {totalHeight} - y - y2,</span>
        <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">'rgba(0,0,0,0)'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">'#ccc'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 类目轴</span>
    <span class="token literal-property property">categoryAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">'bottom'</span><span class="token punctuation">,</span>    <span class="token comment">// 位置</span>
        <span class="token literal-property property">nameLocation</span><span class="token operator">:</span> <span class="token string">'end'</span><span class="token punctuation">,</span>   <span class="token comment">// 坐标轴名字位置，支持'start' | 'end'</span>
        <span class="token literal-property property">boundaryGap</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>     <span class="token comment">// 类目起始和结束两端空白策略</span>
        <span class="token literal-property property">axisLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>            <span class="token comment">// 坐标轴线</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>        <span class="token comment">// 默认显示，属性show控制显示与否</span>
            <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>       <span class="token comment">// 属性lineStyle控制线条样式</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#48b'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'solid'</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">axisTick</span><span class="token operator">:</span> <span class="token punctuation">{</span>            <span class="token comment">// 坐标轴小标记</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>       <span class="token comment">// 属性show控制显示与否，默认不显示</span>
            <span class="token literal-property property">interval</span><span class="token operator">:</span> <span class="token string">'auto'</span><span class="token punctuation">,</span>
            <span class="token comment">// onGap: null,</span>
            <span class="token literal-property property">inside</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>    <span class="token comment">// 控制小标记是否在grid里 </span>
            <span class="token literal-property property">length</span> <span class="token operator">:</span><span class="token number">5</span><span class="token punctuation">,</span>         <span class="token comment">// 属性length控制线长</span>
            <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>       <span class="token comment">// 属性lineStyle控制线条样式</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#333'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">1</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">axisLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>           <span class="token comment">// 坐标轴文本标签，详见axis.axisLabel</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">interval</span><span class="token operator">:</span> <span class="token string">'auto'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">rotate</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
            <span class="token comment">// formatter: null,</span>
            <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>       <span class="token comment">// 其余属性默认使用全局文本样式，详见TEXTSTYLE</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#333'</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">splitLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>           <span class="token comment">// 分隔线</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>        <span class="token comment">// 默认显示，属性show控制显示与否</span>
            <span class="token comment">// onGap: null,</span>
            <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>       <span class="token comment">// 属性lineStyle（详见lineStyle）控制线条样式</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'#ccc'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'solid'</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">splitArea</span><span class="token operator">:</span> <span class="token punctuation">{</span>           <span class="token comment">// 分隔区域</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>       <span class="token comment">// 默认不显示，属性show控制显示与否</span>
            <span class="token comment">// onGap: null,</span>
            <span class="token literal-property property">areaStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>       <span class="token comment">// 属性areaStyle（详见areaStyle）控制区域样式</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'rgba(250,250,250,0.3)'</span><span class="token punctuation">,</span><span class="token string">'rgba(200,200,200,0.3)'</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 数值型坐标轴默认参数</span>
    <span class="token literal-property property">valueAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">'left'</span><span class="token punctuation">,</span>      <span class="token comment">// 位置</span>
        <span class="token literal-property property">nameLocation</span><span class="token operator">:</span> <span class="token string">'end'</span><span class="token punctuation">,</span>   <span class="token comment">// 坐标轴名字位置，支持'start' | 'end'</span>
        <span class="token literal-property property">nameTextStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>     <span class="token comment">// 坐标轴文字样式，默认取全局样式</span>
        <span class="token literal-property property">boundaryGap</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>   <span class="token comment">// 数值起始和结束两端空白策略</span>
        <span class="token literal-property property">splitNumber</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>        <span class="token comment">// 分割段数，默认为5</span>
        <span class="token literal-property property">axisLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>            <span class="token comment">// 坐标轴线</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>        <span class="token comment">// 默认显示，属性show控制显示与否</span>
            <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>       <span class="token comment">// 属性lineStyle控制线条样式</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#48b'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'solid'</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">axisTick</span><span class="token operator">:</span> <span class="token punctuation">{</span>            <span class="token comment">// 坐标轴小标记</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>       <span class="token comment">// 属性show控制显示与否，默认不显示</span>
            <span class="token literal-property property">inside</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>    <span class="token comment">// 控制小标记是否在grid里 </span>
            <span class="token literal-property property">length</span> <span class="token operator">:</span><span class="token number">5</span><span class="token punctuation">,</span>         <span class="token comment">// 属性length控制线长</span>
            <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>       <span class="token comment">// 属性lineStyle控制线条样式</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#333'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">1</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">axisLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>           <span class="token comment">// 坐标轴文本标签，详见axis.axisLabel</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">rotate</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
            <span class="token comment">// formatter: null,</span>
            <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>       <span class="token comment">// 其余属性默认使用全局文本样式，详见TEXTSTYLE</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#333'</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">splitLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>           <span class="token comment">// 分隔线</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>        <span class="token comment">// 默认显示，属性show控制显示与否</span>
            <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>       <span class="token comment">// 属性lineStyle（详见lineStyle）控制线条样式</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'#ccc'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'solid'</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">splitArea</span><span class="token operator">:</span> <span class="token punctuation">{</span>           <span class="token comment">// 分隔区域</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>       <span class="token comment">// 默认不显示，属性show控制显示与否</span>
            <span class="token literal-property property">areaStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>       <span class="token comment">// 属性areaStyle（详见areaStyle）控制区域样式</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'rgba(250,250,250,0.3)'</span><span class="token punctuation">,</span><span class="token string">'rgba(200,200,200,0.3)'</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">polar</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">center</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'50%'</span><span class="token punctuation">,</span> <span class="token string">'50%'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>    <span class="token comment">// 默认全局居中</span>
        <span class="token literal-property property">radius</span> <span class="token operator">:</span> <span class="token string">'75%'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">startAngle</span> <span class="token operator">:</span> <span class="token number">90</span><span class="token punctuation">,</span>
        <span class="token literal-property property">splitNumber</span> <span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>       <span class="token comment">// 其余属性默认使用全局文本样式，详见TEXTSTYLE</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#333'</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">axisLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>            <span class="token comment">// 坐标轴线</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>        <span class="token comment">// 默认显示，属性show控制显示与否</span>
            <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>       <span class="token comment">// 属性lineStyle控制线条样式</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#ccc'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'solid'</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">axisLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>           <span class="token comment">// 坐标轴文本标签，详见axis.axisLabel</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>       <span class="token comment">// 其余属性默认使用全局文本样式，详见TEXTSTYLE</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#333'</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">splitArea</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">show</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">areaStyle</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'rgba(250,250,250,0.3)'</span><span class="token punctuation">,</span><span class="token string">'rgba(200,200,200,0.3)'</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">splitLine</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">show</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">lineStyle</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">width</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token literal-property property">color</span> <span class="token operator">:</span> <span class="token string">'#ccc'</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 柱形图默认参数</span>
    <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">barMinHeight</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>          <span class="token comment">// 最小高度改为0</span>
        <span class="token comment">// barWidth: null,        // 默认自适应</span>
        <span class="token literal-property property">barGap</span><span class="token operator">:</span> <span class="token string">'30%'</span><span class="token punctuation">,</span>            <span class="token comment">// 柱间距离，默认为柱形宽度的30%，可设固定值</span>
        <span class="token literal-property property">barCategoryGap</span> <span class="token operator">:</span> <span class="token string">'20%'</span><span class="token punctuation">,</span>   <span class="token comment">// 类目间柱形距离，默认为类目间距的20%，可设固定值</span>
        <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: '各异',</span>
                <span class="token literal-property property">barBorderColor</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>       <span class="token comment">// 柱条边线</span>
                <span class="token literal-property property">barBorderRadius</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>           <span class="token comment">// 柱条边线圆角，单位px，默认为0</span>
                <span class="token literal-property property">barBorderWidth</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>            <span class="token comment">// 柱条边线线宽，单位px，默认为1</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
                    <span class="token comment">// position: 默认自适应，水平布局为'top'，垂直布局为'right'，可选为</span>
                    <span class="token comment">//           'inside'|'left'|'right'|'top'|'bottom'</span>
                    <span class="token comment">// textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">emphasis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: '各异',</span>
                <span class="token literal-property property">barBorderColor</span><span class="token operator">:</span> <span class="token string">'rgba(0,0,0,0)'</span><span class="token punctuation">,</span>   <span class="token comment">// 柱条边线</span>
                <span class="token literal-property property">barBorderRadius</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>                <span class="token comment">// 柱条边线圆角，单位px，默认为0</span>
                <span class="token literal-property property">barBorderWidth</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>                 <span class="token comment">// 柱条边线线宽，单位px，默认为1</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
                    <span class="token comment">// position: 默认自适应，水平布局为'top'，垂直布局为'right'，可选为</span>
                    <span class="token comment">//           'inside'|'left'|'right'|'top'|'bottom'</span>
                    <span class="token comment">// textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 折线图默认参数</span>
    <span class="token literal-property property">line</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: 各异,</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
                    <span class="token comment">// position: 默认自适应，水平布局为'top'，垂直布局为'right'，可选为</span>
                    <span class="token comment">//           'inside'|'left'|'right'|'top'|'bottom'</span>
                    <span class="token comment">// textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'solid'</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">shadowColor</span> <span class="token operator">:</span> <span class="token string">'rgba(0,0,0,0)'</span><span class="token punctuation">,</span> <span class="token comment">//默认透明</span>
                    <span class="token literal-property property">shadowBlur</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">shadowOffsetX</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">shadowOffsetY</span><span class="token operator">:</span> <span class="token number">3</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">emphasis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: 各异,</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
                    <span class="token comment">// position: 默认自适应，水平布局为'top'，垂直布局为'right'，可选为</span>
                    <span class="token comment">//           'inside'|'left'|'right'|'top'|'bottom'</span>
                    <span class="token comment">// textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">//smooth : false,</span>
        <span class="token comment">//symbol: null,         // 拐点图形类型</span>
        <span class="token literal-property property">symbolSize</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>          <span class="token comment">// 拐点图形大小</span>
        <span class="token comment">//symbolRotate : null,  // 拐点图形旋转控制</span>
        <span class="token literal-property property">showAllSymbol</span><span class="token operator">:</span> <span class="token boolean">false</span>    <span class="token comment">// 标志图形默认只有主轴显示（随主轴标签间隔隐藏策略）</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// K线图默认参数</span>
    <span class="token literal-property property">k</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// barWidth : null          // 默认自适应</span>
        <span class="token comment">// barMaxWidth : null       // 默认自适应 </span>
        <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>          <span class="token comment">// 阳线填充颜色</span>
                <span class="token literal-property property">color0</span><span class="token operator">:</span> <span class="token string">'#00aa11'</span><span class="token punctuation">,</span>      <span class="token comment">// 阴线填充颜色</span>
                <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#ff3200'</span><span class="token punctuation">,</span>   <span class="token comment">// 阳线边框颜色</span>
                    <span class="token literal-property property">color0</span><span class="token operator">:</span> <span class="token string">'#00aa11'</span>   <span class="token comment">// 阴线边框颜色</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">emphasis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: 各异,</span>
                <span class="token comment">// color0: 各异</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 散点图默认参数</span>
    <span class="token literal-property property">scatter</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">//symbol: null,      // 图形类型</span>
        <span class="token literal-property property">symbolSize</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>       <span class="token comment">// 图形大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2</span>
        <span class="token comment">//symbolRotate : null,  // 图形旋转控制</span>
        <span class="token literal-property property">large</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>        <span class="token comment">// 大规模散点图</span>
        <span class="token literal-property property">largeThreshold</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span><span class="token comment">// 大规模阀值，large为true且数据量&gt;largeThreshold才启用大规模模式</span>
        <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: 各异,</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
                    <span class="token comment">// position: 默认自适应，水平布局为'top'，垂直布局为'right'，可选为</span>
                    <span class="token comment">//           'inside'|'left'|'right'|'top'|'bottom'</span>
                    <span class="token comment">// textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">emphasis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: '各异'</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
                    <span class="token comment">// position: 默认自适应，水平布局为'top'，垂直布局为'right'，可选为</span>
                    <span class="token comment">//           'inside'|'left'|'right'|'top'|'bottom'</span>
                    <span class="token comment">// textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 雷达图默认参数</span>
    <span class="token literal-property property">radar</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: 各异,</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'solid'</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">emphasis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: 各异,</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">//symbol: null,         // 拐点图形类型</span>
        <span class="token literal-property property">symbolSize</span><span class="token operator">:</span> <span class="token number">2</span>           <span class="token comment">// 可计算特性参数，空数据拖拽提示图形大小</span>
        <span class="token comment">//symbolRotate : null,  // 图形旋转控制</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 饼图默认参数</span>
    <span class="token literal-property property">pie</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">center</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'50%'</span><span class="token punctuation">,</span> <span class="token string">'50%'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>    <span class="token comment">// 默认全局居中</span>
        <span class="token literal-property property">radius</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">'75%'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">clockWise</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>          <span class="token comment">// 默认逆时针</span>
        <span class="token literal-property property">startAngle</span><span class="token operator">:</span> <span class="token number">90</span><span class="token punctuation">,</span>
        <span class="token literal-property property">minAngle</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>                <span class="token comment">// 最小角度改为0</span>
        <span class="token literal-property property">selectedOffset</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>         <span class="token comment">// 选中是扇区偏移量</span>
        <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: 各异,</span>
                <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">'outer'</span>
                    <span class="token comment">// textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">labelLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token comment">// color: 各异,</span>
                        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'solid'</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">emphasis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: 各异,</span>
                <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">'rgba(0,0,0,0)'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
                    <span class="token comment">// position: 'outer'</span>
                    <span class="token comment">// textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">labelLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token comment">// color: 各异,</span>
                        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'solid'</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">map</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">mapType</span><span class="token operator">:</span> <span class="token string">'china'</span><span class="token punctuation">,</span>   <span class="token comment">// 各省的mapType暂时都用中文</span>
        <span class="token literal-property property">mapLocation</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">x</span> <span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">y</span> <span class="token operator">:</span> <span class="token string">'center'</span>
            <span class="token comment">// width    // 自适应</span>
            <span class="token comment">// height   // 自适应</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">showLegendSymbol</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>       <span class="token comment">// 显示图例颜色标识（系列标识的小圆点），存在legend时生效</span>
        <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: 各异,</span>
                <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token literal-property property">areaStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#ccc'</span><span class="token comment">//rgba(135,206,250,0.8)</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'rgba(139,69,19,1)'</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">emphasis</span><span class="token operator">:</span> <span class="token punctuation">{</span>                 <span class="token comment">// 也是选中样式</span>
                <span class="token comment">// color: 各异,</span>
                <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">'rgba(0,0,0,0)'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token literal-property property">areaStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'rgba(255,215,0,0.8)'</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'rgba(139,69,19,1)'</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">force</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 数据map到圆的半径的最小值和最大值</span>
        <span class="token literal-property property">minRadius</span> <span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token literal-property property">maxRadius</span> <span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
        <span class="token literal-property property">density</span> <span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
        <span class="token literal-property property">attractiveness</span> <span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
        <span class="token comment">// 初始化的随机大小位置</span>
        <span class="token literal-property property">initSize</span> <span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
        <span class="token comment">// 向心力因子，越大向心力越大</span>
        <span class="token literal-property property">centripetal</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token comment">// 冷却因子</span>
        <span class="token literal-property property">coolDown</span> <span class="token operator">:</span> <span class="token number">0.99</span><span class="token punctuation">,</span>
        <span class="token comment">// 分类里如果有样式会覆盖节点默认样式</span>
        <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: 各异,</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
                    <span class="token comment">// textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">nodeStyle</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">brushType</span> <span class="token operator">:</span> <span class="token string">'both'</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">color</span> <span class="token operator">:</span> <span class="token string">'#f08c2e'</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">strokeColor</span> <span class="token operator">:</span> <span class="token string">'#5182ab'</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">linkStyle</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">strokeColor</span> <span class="token operator">:</span> <span class="token string">'#5182ab'</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">emphasis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: 各异,</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
                    <span class="token comment">// textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">nodeStyle</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">linkStyle</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">chord</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">radius</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'65%'</span><span class="token punctuation">,</span> <span class="token string">'75%'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">center</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'50%'</span><span class="token punctuation">,</span> <span class="token string">'50%'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">padding</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token literal-property property">sort</span> <span class="token operator">:</span> <span class="token string">'none'</span><span class="token punctuation">,</span> <span class="token comment">// can be 'none', 'ascending', 'descending'</span>
        <span class="token literal-property property">sortSub</span> <span class="token operator">:</span> <span class="token string">'none'</span><span class="token punctuation">,</span> <span class="token comment">// can be 'none', 'ascending', 'descending'</span>
        <span class="token literal-property property">startAngle</span> <span class="token operator">:</span> <span class="token number">90</span><span class="token punctuation">,</span>
        <span class="token literal-property property">clockWise</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">showScale</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">showScaleText</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">itemStyle</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">normal</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">label</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span> <span class="token operator">:</span> <span class="token boolean">true</span>
                    <span class="token comment">// textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">lineStyle</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">width</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">color</span> <span class="token operator">:</span> <span class="token string">'#000'</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">chordStyle</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">lineStyle</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">width</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">color</span> <span class="token operator">:</span> <span class="token string">'#666'</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">emphasis</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">lineStyle</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">width</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">color</span> <span class="token operator">:</span> <span class="token string">'#000'</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">chordStyle</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">lineStyle</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">width</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">color</span> <span class="token operator">:</span> <span class="token string">'#333'</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">island</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
        <span class="token literal-property property">calculateStep</span><span class="token operator">:</span> <span class="token number">0.1</span>  <span class="token comment">// 滚轮可计算步长 0.1 = 10%</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">markPoint</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token string">'pin'</span><span class="token punctuation">,</span>         <span class="token comment">// 标注类型</span>
        <span class="token literal-property property">symbolSize</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>        <span class="token comment">// 标注大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2</span>
        <span class="token comment">//symbolRotate : null, // 标注旋转控制</span>
        <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: 各异，</span>
                <span class="token comment">// borderColor: 各异,     // 标注边线颜色，优先于color </span>
                <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>            <span class="token comment">// 标注边线线宽，单位px，默认为1</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">'inside'</span> <span class="token comment">// 可选为'left'|'right'|'top'|'bottom'</span>
                    <span class="token comment">// textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">emphasis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: 各异</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span>
                    <span class="token comment">// position: 'inside'  // 'left'|'right'|'top'|'bottom'</span>
                    <span class="token comment">// textStyle: null     // 默认使用全局文本样式，详见TEXTSTYLE</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">markLine</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 标线起始和结束的symbol介绍类型，如果都一样，可以直接传string</span>
        <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'circle'</span><span class="token punctuation">,</span> <span class="token string">'arrow'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>  
        <span class="token comment">// 标线起始和结束的symbol大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2</span>
        <span class="token literal-property property">symbolSize</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// 标线起始和结束的symbol旋转控制</span>
        <span class="token comment">//symbolRotate : null,</span>
        <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: 各异,           // 标线主色，线色，symbol主色</span>
                <span class="token comment">// borderColor: 随color,     // 标线symbol边框颜色，优先于color </span>
                <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>          <span class="token comment">// 标线symbol边框线宽，单位px，默认为2</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                    <span class="token comment">// 可选为 'start'|'end'|'left'|'right'|'top'|'bottom'</span>
                    <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">'inside'</span><span class="token punctuation">,</span>  
                    <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>         <span class="token comment">// 默认使用全局文本样式，详见TEXTSTYLE</span>
                        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#333'</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token comment">// color: 随borderColor, // 主色，线色，优先级高于borderColor和color</span>
                    <span class="token comment">// width: 随borderWidth, // 优先于borderWidth</span>
                    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'solid'</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">shadowColor</span> <span class="token operator">:</span> <span class="token string">'rgba(0,0,0,0)'</span><span class="token punctuation">,</span> <span class="token comment">//默认透明</span>
                    <span class="token literal-property property">shadowBlur</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">shadowOffsetX</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">shadowOffsetY</span><span class="token operator">:</span> <span class="token number">3</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">emphasis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: 各异</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
                    <span class="token comment">// position: 'inside' // 'left'|'right'|'top'|'bottom'</span>
                    <span class="token comment">// textStyle: null    // 默认使用全局文本样式，详见TEXTSTYLE</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">lineStyle</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">decoration</span><span class="token operator">:</span> <span class="token string">'none'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">fontFamily</span><span class="token operator">:</span> <span class="token string">'Arial, Verdana, sans-serif'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">fontFamily2</span><span class="token operator">:</span> <span class="token string">'微软雅黑'</span><span class="token punctuation">,</span>    <span class="token comment">// IE8- 字体模糊并且不支持不同字体混排，额外指定一份</span>
        <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
        <span class="token literal-property property">fontStyle</span><span class="token operator">:</span> <span class="token string">'normal'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">fontWeight</span><span class="token operator">:</span> <span class="token string">'normal'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 默认标志图形类型列表</span>
    <span class="token literal-property property">symbolList</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">'circle'</span><span class="token punctuation">,</span> <span class="token string">'rectangle'</span><span class="token punctuation">,</span> <span class="token string">'triangle'</span><span class="token punctuation">,</span> <span class="token string">'diamond'</span><span class="token punctuation">,</span>
      <span class="token string">'emptyCircle'</span><span class="token punctuation">,</span> <span class="token string">'emptyRectangle'</span><span class="token punctuation">,</span> <span class="token string">'emptyTriangle'</span><span class="token punctuation">,</span> <span class="token string">'emptyDiamond'</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">loadingText</span> <span class="token operator">:</span> <span class="token string">'Loading...'</span><span class="token punctuation">,</span>
    <span class="token comment">// 可计算特性配置，孤岛，提示颜色</span>
    <span class="token literal-property property">calculable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>              <span class="token comment">// 默认关闭可计算特性</span>
    <span class="token literal-property property">calculableColor</span><span class="token operator">:</span> <span class="token string">'rgba(255,165,0,0.6)'</span><span class="token punctuation">,</span>       <span class="token comment">// 拖拽提示边框颜色</span>
    <span class="token literal-property property">calculableHolderColor</span><span class="token operator">:</span> <span class="token string">'#ccc'</span><span class="token punctuation">,</span> <span class="token comment">// 可计算占位提示颜色</span>
    <span class="token literal-property property">nameConnector</span><span class="token operator">:</span> <span class="token string">' &amp; '</span><span class="token punctuation">,</span>
    <span class="token literal-property property">valueConnector</span><span class="token operator">:</span> <span class="token string">' : '</span><span class="token punctuation">,</span>
    <span class="token literal-property property">animation</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">animationThreshold</span><span class="token operator">:</span> <span class="token number">2500</span><span class="token punctuation">,</span>       <span class="token comment">// 动画元素阀值，产生的图形原素超过2500不出动画</span>
    <span class="token literal-property property">addDataAnimation</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>         <span class="token comment">// 动态数据接口是否开启动画效果</span>
    <span class="token literal-property property">animationDuration</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>
    <span class="token literal-property property">animationEasing</span><span class="token operator">:</span> <span class="token string">'ExponentialOut'</span>    <span class="token comment">//BounceOut</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:13.72,words:4115},y:"a",t:"5.echarts 各个配置项详细说明总结"},["/front_end/js_advanced/echarts/02","/front_end/js_advanced/echarts/02.md"]],["v-3738d647","/front_end/js_advanced/echarts/03.html",{d:173312745e4,e:`<h1> 6.柱状图</h1>
<ul>
<li>
<p>常见效果</p>
<ul>
<li>
<p>标记</p>
<ul>
<li>markPoint：标记点（最大值，最小值）</li>
<li>markLine：标记线（平均值）</li>
</ul>
</li>
<li>
<p>显示</p>
<ul>
<li>label：数值显示</li>
<li>barWidth：柱宽度</li>
<li>调换x轴y轴实现横向柱状图</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2> 6.1柱状图图表（两大步骤）</h2>
<ul>
<li>官网找到类似实例， 适当分析，并且引入到HTML页面中</li>
<li>根据需求定制图表</li>
</ul>`,r:{minutes:7.33,words:2198},y:"a",t:"6.柱状图"},["/front_end/js_advanced/echarts/03","/front_end/js_advanced/echarts/03.md"]],["v-38edaee6","/front_end/js_advanced/echarts/04.html",{d:173312745e4,e:`<h1> 7.折线图</h1>
<h2> 7.1常见效果</h2>
<p>常见效果</p>
<ul>
<li>标记
<ul>
<li>markPoint：标记点（最大值，最小值）</li>
<li>markLine：标记线（平均值）</li>
<li>markArea：标注区间</li>
</ul>
</li>
<li>线条控制
<ul>
<li>smooth：平滑</li>
<li>lineStyle：线条样式</li>
</ul>
</li>
<li>填充风格
<ul>
<li>areaStyle：填充区域风格</li>
</ul>
</li>
<li>紧挨边缘
<ul>
<li>boundaryGap (配置在xAxis中)</li>
</ul>
</li>
<li>缩放：脱离0值比例
<ul>
<li>scale</li>
</ul>
</li>
<li>堆叠图（当有多个系列使图表显得杂乱无章时使用）
<ul>
<li>atack</li>
</ul>
</li>
<li>显示
<ul>
<li>label：数值显示</li>
</ul>
</li>
</ul>`,r:{minutes:7.69,words:2308},y:"a",t:"7.折线图"},["/front_end/js_advanced/echarts/04","/front_end/js_advanced/echarts/04.md"]],["v-3aa28785","/front_end/js_advanced/echarts/05.html",{d:173312745e4,e:`<h1> 8.饼图</h1>
<h2> 8.1常见效果</h2>
<ul>
<li>显示数值
<ul>
<li>label
<ul>
<li>show</li>
<li>formatter （回调函数）</li>
</ul>
</li>
</ul>
</li>
<li>圆环
<ul>
<li>radius：饼半径，设置两个半径即圆环radius:[‘30%’,‘80%’]</li>
</ul>
</li>
<li>南丁格尔图 （饼图的每一个区域的半径不一样，随着数值变化）
<ul>
<li>roseType:‘radius’</li>
</ul>
</li>
<li>选中效果
<ul>
<li>selectedMode：设置选中效果 single/multiple</li>
<li>selectedOffset：设置选中偏移量</li>
</ul>
</li>
</ul>`,r:{minutes:5.32,words:1595},y:"a",t:"8.饼图"},["/front_end/js_advanced/echarts/05","/front_end/js_advanced/echarts/05.md"]],["v-266cbe57","/front_end/js_advanced/es6/01.html",{d:173312745e4,e:`<h1> 01 【ES6 介绍】</h1>
<p>ECMAScript 6.0（以下简称 ES6）是 JavaScript 语言的下一代标准，已经在 2015 年 6 月正式发布了。它的目标，是使得 JavaScript 语言可以用来编写复杂的大型应用程序，成为企业级开发语言。</p>
<h2> 1.ECMAScript 和 JavaScript 的关系</h2>
<p>一个常见的问题是，ECMAScript 和 JavaScript 到底是什么关系？</p>
<p>要讲清楚这个问题，需要回顾历史。1996 年 11 月，JavaScript 的创造者 Netscape 公司，决定将 JavaScript 提交给标准化组织 ECMA，希望这种语言能够成为国际标准。次年，ECMA 发布 262 号标准文件（ECMA-262）的第一版，规定了浏览器脚本语言的标准，并将这种语言称为 ECMAScript，这个版本就是 1.0 版。</p>`,r:{minutes:3.77,words:1131},y:"a",t:"01 【ES6 介绍】"},["/front_end/js_advanced/es6/01","/front_end/js_advanced/es6/01.md"]],["v-282196f6","/front_end/js_advanced/es6/02.html",{d:173312745e4,e:`<h1> 02 【let和const】</h1>
<h2> 1.let 命令</h2>
<h3> 1.1 基本用法</h3>
<p>ES6 新增了<code>let</code>命令，用来声明变量。它的用法类似于<code>var</code>，但是所声明的变量，只在<code>let</code>命令所在的代码块内有效。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

a <span class="token comment">// ReferenceError: a is not defined.</span>
b <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:13.89,words:4168},y:"a",t:"02 【let和const】"},["/front_end/js_advanced/es6/02","/front_end/js_advanced/es6/02.md"]],["v-29d66f95","/front_end/js_advanced/es6/03.html",{d:173312745e4,e:`<h1> 03【解构赋值】</h1>
<h2> 1.数组的解构赋值</h2>
<h3> 1.1 原理</h3>
<p>ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。</p>
<p>以前，为变量赋值，只能直接指定值。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:8.21,words:2464},y:"a",t:"03【解构赋值】"},["/front_end/js_advanced/es6/03","/front_end/js_advanced/es6/03.md"]],["v-2b8b4834","/front_end/js_advanced/es6/04.html",{d:173312745e4,e:`<h1> 04 【函数的扩展】</h1>
<h2> 1.函数参数的默认值</h2>
<h3> 1.1 认识函数参数的默认值</h3>
<p>调用函数的时候传参了，就用传递的参数；如果没传参，就用默认值</p>
<h3> 1.2 函数参数默认值的基本用法</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 之前的默认值实现方式</span>
<span class="token keyword">const</span> <span class="token function-variable function">multiply</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> y <span class="token operator">===</span> <span class="token string">'undefined'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        y <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> x <span class="token operator">*</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">multiply</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 4</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">multiply</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">// 6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:16.72,words:5015},y:"a",t:"04 【函数的扩展】"},["/front_end/js_advanced/es6/04","/front_end/js_advanced/es6/04.md"]],["v-2d4020d3","/front_end/js_advanced/es6/05.html",{d:173312745e4,e:`<h1> 05【数组的扩展】</h1>
<h2> 1.扩展运算符</h2>
<h3> 1.1 含义</h3>
<p>扩展运算符（spread）是三个点（<code>...</code>）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// 1 2 3</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token comment">// 1 2 3 4 5</span>

<span class="token punctuation">[</span><span class="token operator">...</span>document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token comment">// [&lt;div&gt;, &lt;div&gt;, &lt;div&gt;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:25.44,words:7633},y:"a",t:"05【数组的扩展】"},["/front_end/js_advanced/es6/05","/front_end/js_advanced/es6/05.md"]],["v-2ef4f972","/front_end/js_advanced/es6/06.html",{d:173312745e4,e:`<h1> 06【对象的扩展】</h1>
<h2> 1.属性的简洁表示法</h2>
<p>ES6 允许在大括号里面，直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token string">'bar'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> baz <span class="token operator">=</span> <span class="token punctuation">{</span>foo<span class="token punctuation">}</span><span class="token punctuation">;</span>
baz <span class="token comment">// {foo: "bar"}</span>

<span class="token comment">// 等同于</span>
<span class="token keyword">const</span> baz <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">foo</span><span class="token operator">:</span> foo<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:8.49,words:2548},y:"a",t:"06【对象的扩展】"},["/front_end/js_advanced/es6/06","/front_end/js_advanced/es6/06.md"]],["v-30a9d211","/front_end/js_advanced/es6/07.html",{d:173312745e4,e:`<h1> 07【字符串的扩展】</h1>
<h2> 1.模板字符串</h2>
<h3> 1.1 认识模板字符串</h3>
<ul>
<li>普通字符串：</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">'字符串'</span>
<span class="token string">"字符串"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:5.1,words:1531},y:"a",t:"07【字符串的扩展】"},["/front_end/js_advanced/es6/07","/front_end/js_advanced/es6/07.md"]],["v-325eaab0","/front_end/js_advanced/es6/08.html",{d:173312745e4,e:`<h1> 08【运算符的扩展】</h1>
<h2> 1.指数运算符</h2>
<p>ES2016 新增了一个指数运算符（<code>**</code>）。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">2</span> <span class="token operator">**</span> <span class="token number">2</span> <span class="token comment">// 4</span>
<span class="token number">2</span> <span class="token operator">**</span> <span class="token number">3</span> <span class="token comment">// 8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:6.55,words:1965},y:"a",t:"08【运算符的扩展】"},["/front_end/js_advanced/es6/08","/front_end/js_advanced/es6/08.md"]],["v-3413834f","/front_end/js_advanced/es6/09.html",{d:173312745e4,e:`<h1> 09【Set 和 Map 数据结构】</h1>
<h2> 1.什么是 Set？</h2>
<p>Set 是一系列无序、没有重复值的数据集合。</p>
<blockquote>
<p>数组是一系列有序（下标索引）的数据集合。</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
s<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
s<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Set 中不能有重复的成员</span>
s<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>		<span class="token comment">// Set(2) { 1, 2 }</span>

<span class="token comment">// Set 没有下标去标识每一个值，所以 Set 是无序的，也不能像数组那样通过下标去访问 Set 的成员。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:6.33,words:1899},y:"a",t:"09【Set 和 Map 数据结构】"},["/front_end/js_advanced/es6/09","/front_end/js_advanced/es6/09.md"]],["v-599e20f9","/front_end/js_advanced/es6/10.html",{d:173312745e4,e:`<h1> 10【Promise对象】</h1>
<h2> 1.同步异步的介绍</h2>
<p>Promise 是异步操作的一种解决方案。</p>
<blockquote>
<h4> 异步的概念</h4>
<p>异步（Asynchronous, async）是与同步（Synchronous, sync）相对的概念。</p>
<p>在我们学习的传统单线程编程中，程序的运行是同步的（同步不意味着所有步骤同时运行，而是指步骤在一个控制流序列中按顺序执行）。而异步的概念则是不保证同步的概念，也就是说，一个异步过程的执行将不再与原有的序列有顺序关系。</p>
<p>简单来理解就是：同步按你的代码顺序执行，异步不按照代码顺序执行，异步的执行效率更高。</p>
<p>以上是关于异步的概念的解释，接下来我们通俗地解释一下异步：异步就是从主线程发射一个子线程来完成任务。</p>
<figure><img src="https://i0.hdslb.com/bfs/album/d1cc4d26fc4056acf3f704bddb4bfecdf3b3ddd0.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h4> 什么时候用异步编程</h4>
<p>在前端编程中（甚至后端有时也是这样），我们在处理一些简短、快速的操作时，例如计算 1 + 1 的结果，往往在主线程中就可以完成。主线程作为一个线程，不能够同时接受多方面的请求。所以，当一个事件没有结束时，界面将无法处理其他请求。</p>
<p>现在有一个按钮，如果我们设置它的 onclick 事件为一个死循环，那么当这个按钮按下，整个网页将失去响应。</p>
<p>为了避免这种情况的发生，我们常常用子线程来完成一些可能消耗时间足够长以至于被用户察觉的事情（或者是一些需要等待某个时机在背后自动执行的任务，比如：事件监听），比如读取一个大文件或者发出一个网络请求。因为子线程独立于主线程，所以即使出现阻塞也不会影响主线程的运行。但是子线程有一个局限：一旦发射了以后就会与主线程失去同步，我们无法确定它的结束，如果结束之后需要处理一些事情，比如处理来自服务器的信息，我们是无法将它合并到主线程中去的。</p>
<p>JavaScript 是单线程语言，为了解决多线程问题，JavaScript 中的异步操作函数往往通过<strong>回调函数</strong>来实现异步任务的结果处理。</p>
<h4> 回调函数（callback function）</h4>
<blockquote>
<p>在 JavaScript 中，回调函数具体的定义为：函数A 作为参数（函数引用）传递到另一个 函数B 中，并且这个 函数B 执行函数A。我们就说 函数A 叫做回调函数。如果没有名称（函数表达式），就叫做匿名回调函数。</p>
</blockquote>
<p>回调函数就是一个作为参数的函数，它是在我们启动一个异步任务的时候就告诉它：等你完成了这个任务之后要干什么。这样一来主线程几乎不用关心异步任务的状态了，他自己会善始善终。</p>
<blockquote>
<p>注意：回调和异步不是同一个东西，许多人误认为 js 中每个回调函数都是异步处理的，实际上并不是，可以同步回调，也可以异步回调。只不过说：<strong>回调可以是同步也可以是异步，异步必须放在回调里执行，也就是对于一个异步任务只有回调函数里的才是异步的部分。</strong></p>
<p>回调同步的例子：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">test</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">func</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'func'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>回调异步的例子：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'one'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'two'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<h3> 实例</h3>
<p><code>setInterval()</code> 和 <code>setTimeout()</code> 是两个异步语句。</p>
<p>异步（asynchronous）：不会阻塞 CPU 继续执行其他语句，当异步完成时（包含回调函数的主函数的正常语句完成时），会执行 “回调函数”（callback）。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>菜鸟教程(runoob.com)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>回调函数等待 3 秒后执行。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>异步方式，不影响后续执行。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">function</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"demo"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">"RUNOOB!"</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span>print<span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://i0.hdslb.com/bfs/album/365c74378381a0e69761dfe542d2de267c1b3828.gif" alt="1" tabindex="0" loading="lazy"><figcaption>1</figcaption></figure>
<p>这段程序中的 setTimeout 就是一个消耗时间较长（3 秒）的过程，它的第一个参数是个回调函数，第二个参数是毫秒数，这个函数执行之后会产生一个子线程，子线程会等待 3 秒，然后执行回调函数 "print"，在命令行输出 "RUNOOB!"。</p>
<p>当然，JavaScript 语法十分友好，我们不必单独定义一个函数 print ，我们常常将上面的程序写成：</p>
<h3> 实例</h3>
<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>菜鸟教程(runoob.com)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>回调函数等待 3 秒后执行。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>异步方式，不影响后续执行。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"demo"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">"RUNOOB!"</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">/* ES6 箭头函数写法
  setTimeout(() =&gt; {
      document.getElementById("demo").innerHTML = "RUNOOB!";
  }, 3000);
  */</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**注意：**既然 setTimeout 会在子线程中等待 3 秒，在 setTimeout 函数执行之后主线程并没有停止，所以：</p>
<h3> 实例</h3>
<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>菜鸟教程(runoob.com)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>回调函数等待 3 秒后执行。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo1<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo2<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"demo1"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">"RUNOOB-1!"</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"demo2"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">"RUNOOB-2!"</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这段程序的执行结果是：</p>
<figure><img src="https://i0.hdslb.com/bfs/album/ad3300e4fccf3861082bcb9633584d5aad190b98.gif" alt="2" tabindex="0" loading="lazy"><figcaption>2</figcaption></figure>
</blockquote>`,r:{minutes:25.79,words:7736},y:"a",t:"10【Promise对象】"},["/front_end/js_advanced/es6/10","/front_end/js_advanced/es6/10.md"]],["v-5b52f998","/front_end/js_advanced/es6/11.html",{d:173312745e4,e:`<h1> 11【async 函数】</h1>
<h2> 1.基本用法</h2>
<p><code>async</code>函数返回一个 Promise 对象，可以使用<code>then</code>方法添加回调函数。当函数执行的时候，一旦遇到<code>await</code>就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。</p>
<p>下面是一个例子。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getStockPriceByName</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> symbol <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getStockSymbol</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> stockPrice <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getStockPrice</span><span class="token punctuation">(</span>symbol<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> stockPrice<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">getStockPriceByName</span><span class="token punctuation">(</span><span class="token string">'goog'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:8.36,words:2509},y:"a",t:"11【async 函数】"},["/front_end/js_advanced/es6/11","/front_end/js_advanced/es6/11.md"]],["v-5d07d237","/front_end/js_advanced/es6/12.html",{d:173312745e4,e:`<h1> 12【es6模块化】</h1>
<h2> 1.初识Module</h2>
<p>（1）什么是模块</p>
<p>模块：一个一个的局部作用域的代码块。</p>
<p>（2）什么是模块系统</p>
<p>模块系统：系统的解决了模块化一系列问题。</p>
<ol>
<li>模块化的写法（之前我们用立即执行函数模拟模块化，ES6 则实现了针对模块化的语法）</li>
<li>消除全局变量（模块中的变量都是局部的，不同模块之间不会相互干扰，可以通过特定语法暴露指定内容）</li>
<li>管理加载顺序（之前我们将一个总的 JavaScript 程序分几个文件写，但在最终合并调用时，js 的引入需要满足前后依赖关系。比如：被引用的 js 文件就一定要在引用它的 js 文件之前加载）</li>
</ol>`,r:{minutes:9.16,words:2748},y:"a",t:"12【es6模块化】"},["/front_end/js_advanced/es6/12","/front_end/js_advanced/es6/12.md"]],["v-5ebcaad6","/front_end/js_advanced/es6/13.html",{d:173312745e4,e:`<h1> 13【Class的语法】</h1>
<h2> 1.类的由来</h2>
<p>JavaScript 语言中，生成实例对象的传统方法是通过构造函数。下面是一个例子。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Point</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">=</span> x<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">=</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Point</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">toString</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">'('</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">+</span> <span class="token string">', '</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">+</span> <span class="token string">')'</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Point</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:19.11,words:5732},y:"a",t:"13【Class的语法】"},["/front_end/js_advanced/es6/13","/front_end/js_advanced/es6/13.md"]],["v-60718375","/front_end/js_advanced/es6/14.html",{d:173312745e4,e:`<h1> 14 【Class extends】</h1>
<h2> 1.简介</h2>
<p>Class 可以通过<code>extends</code>关键字实现继承，让子类继承父类的属性和方法。extends 的写法比 ES5 的原型链继承，要清晰和方便很多。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ColorPoint</span> <span class="token keyword">extends</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:11.2,words:3361},y:"a",t:"14 【Class extends】"},["/front_end/js_advanced/es6/14","/front_end/js_advanced/es6/14.md"]],["v-05e216f0","/front_end/js_advanced/typescript/01.html",{d:173312745e4,e:`<h1> 1.简介</h1>
<h2> 1.1 TypeScript简介</h2>
<ul>
<li><a href="https://link.juejin.cn/?target=https%3A%2F%2Fwww.typescriptlang.org%2F" target="_blank" rel="noopener noreferrer">TS 官方文档</a></li>
</ul>
<ol>
<li><strong><code>TypeScript</code> 简称：TS，是 JavaScript 的超集</strong>，简单来说就是：JS 有的 TS 都有。</li>
<li>它对JS进行了扩展，向JS中引入了类型的概念，并添加了许多新的特性。</li>
<li>TS代码需要通过编译器编译为JS，然后再交由JS解析器执行。</li>
<li>TS完全兼容JS，换言之，任何的JS代码都可以直接当成JS使用。</li>
<li>相较于JS而言，TS拥有了静态类型，更加严格的语法，更强大的功能；TS可以在代码执行前就完成代码的检查，减小了运行时异常的出现的几率；TS代码可以编译为任意版本的JS代码，可有效解决不同JS运行环境的兼容问题；同样的功能，TS的代码量要大于JS，但由于TS的代码结构更加清晰，变量类型更加明确，在后期代码的维护中TS却远远胜于JS。</li>
</ol>`,r:{minutes:5.34,words:1602},y:"a",t:"1.简介"},["/front_end/js_advanced/typescript/01","/front_end/js_advanced/typescript/01.md"]],["v-027865b2","/front_end/js_advanced/typescript/02.html",{d:173312745e4,e:`<h1> 3.TypeScript常用类型</h1>
<h2> 3.1 概述</h2>
<p>TypeScript 是 JS 的超集，TS 提供了 JS 的所有功能，并且额外的增加了：<strong>类型系统</strong></p>
<ul>
<li>所有的 JS 代码都是 TS 代码</li>
<li><strong>JS 有类型</strong>（比如，number/string 等），但是 <strong>JS 不会检查变量的类型是否发生变化</strong>，而 TS 会检查</li>
</ul>
<p>TypeScript 类型系统的主要优势：<strong>可以显示标记出代码中的意外行为，从而降低了发生错误的可能性</strong></p>`,r:{minutes:21.13,words:6340},y:"a",t:"3.TypeScript常用类型"},["/front_end/js_advanced/typescript/02","/front_end/js_advanced/typescript/02.md"]],["v-0078a5c6","/front_end/js_advanced/typescript/03.html",{d:173312745e4,e:`<h2> 3.11 字面量类型</h2>
<p>在 TypeScript 中，字面量不仅可以表示值，还可以表示类型，即所谓的字面量类型。</p>
<h3> 3.11.1 基本使用</h3>
<ul>
<li>思考以下代码，两个变量的类型分别是什么?</li>
</ul>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> str1 <span class="token operator">=</span> <span class="token string">'Hello TS'</span>
<span class="token keyword">const</span> str2 <span class="token operator">=</span> <span class="token string">'Hello TS'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:17.41,words:5222},y:"a",t:""},["/front_end/js_advanced/typescript/03","/front_end/js_advanced/typescript/03.md"]],["v-022d7e65","/front_end/js_advanced/typescript/04.html",{d:173312745e4,e:`<h1> 4.编译选项</h1>
<blockquote>
<p>tsconfig.json 是 TypeScript 项目的配置文件。如果一个目录下存在一个 tsconfig.json 文件，那么往往意味着这个目录就是 TypeScript 项目的根目录。</p>
<p>tsconfig.json 包含 TypeScript 编译的相关配置，通过更改编译配置项，我们可以让 TypeScript 编译出 ES6、ES5、node 的代码。</p>
<p><strong>tsconfig.json 重要字段</strong></p>
<ul>
<li>files - 设置要编译的文件的名称；</li>
<li>include - 设置需要进行编译的文件，支持路径模式匹配；</li>
<li>exclude - 设置无需进行编译的文件，支持路径模式匹配；</li>
<li>compilerOptions - 设置与编译流程相关的选项。</li>
</ul>
</blockquote>`,r:{minutes:10.42,words:3127},y:"a",t:"4.编译选项"},["/front_end/js_advanced/typescript/04","/front_end/js_advanced/typescript/04.md"]],["v-03e25704","/front_end/js_advanced/typescript/05.html",{d:173312745e4,e:`<h1> 6.接口（ interface）</h1>
<p>在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型。</p>
<h2> 6.1 什么是接口</h2>
<p>在面向对象语言中，接口（Interfaces）是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implement）。</p>
<p>TypeScript 中的接口是一个非常灵活的概念，除了可用于[对类的一部分行为进行抽象]以外，也常用于对「对象的形状（Shape）」进行描述。</p>
<h2> 6.2 基本使用</h2>
<p>当一个对象类型被多次使用时，一般会使用接口（<code>interface</code>）来描述对象的类型，达到复用的目的</p>`,r:{minutes:6.59,words:1978},y:"a",t:"6.接口（ interface）"},["/front_end/js_advanced/typescript/05","/front_end/js_advanced/typescript/05.md"]],["v-05972fa3","/front_end/js_advanced/typescript/06.html",{d:173312745e4,e:`<h1> 8.泛型</h1>
<h2> 8.1 基本介绍</h2>
<p>定义一个函数或类时，有些情况下无法确定其中要使用的具体类型（返回值、参数、属性的类型不能确定），此时泛型便能够发挥作用。</p>
<ul>
<li>
<p>举个例子：</p>
<ul>
<li>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">identity</span> <span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">{</span>
	<span class="token keyword">return</span> arg<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>上例中，identity 函数有一个参数类型不确定，但是能确定的时其返回值的类型和参数的类型是相同的，由于类型不确定所以参数和返回值均使用了any，但是很明显这样做是不合适的，首先使用any会关闭TS的类型检查，其次这样设置也不能体现出参数和返回值是相同的类型</p>
</li>
<li>
<p>使用泛型：
为了解决上面的这些问题，我们<strong>使用泛型对上面的代码进行重构</strong>。和我们的定义不同，这里用了一个 类型 T，这个 <strong>T 是一个抽象类型，只有在调用的时候才确定它的值</strong>。</p>
</li>
<li>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">identity</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> arg<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<ol>
<li>语法：在函数名称的后面添加 <code>&lt;&gt;</code>(尖括号)，<strong>尖括号中添加类型变量</strong>，比如此处的 Type</li>
<li><strong>类型变量 Type，是一种特殊类型的变量，它处理类型而不是值</strong></li>
<li><strong>该类型变量相当于一个类型容器</strong>，能够捕获用户提供的类型(具体是什么类型由用户调用该函数时指定)</li>
<li>因为 Type 是类型，因此可以将其作为函数参数和返回值的类型，表示参数和返回值具有相同的类型</li>
<li>类型变量 Type，可以是任意合法的变量名称</li>
</ol>
</li>
<li>
<p>除了 <code>T</code> 之外，以下是常见泛型变量代表的意思：</p>
<ul>
<li>K（Key）：表示对象中的键类型；</li>
<li>V（Value）：表示对象中的值类型；</li>
<li>E（Element）：表示元素类型。
<img src="https://i0.hdslb.com/bfs/album/f0875f26e68c8533ab32d23a82bbae11e2232b50.png" alt="image-20220807133943971" loading="lazy"></li>
</ul>
</li>
<li>
<p>那么如何使用上边的函数呢？</p>
<ul>
<li>
<p>方式一（直接使用）：</p>
<ul>
<li>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token function">identity</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<ol>
<li>在调用泛型函数时，<strong>可以省略 <code>&lt;类型&gt;</code> 来简化泛型函数的调用</strong></li>
<li>此时，TS 内部会采用一种叫做<strong>类型参数推断</strong>的机制，来根据传入的实参自动推断出类型变量 Type 的类型</li>
<li>比如，传入实参 10，TS 会自动推断出变量 num 的类型 number，并作为 Type 的类型</li>
</ol>
<blockquote>
<ul>
<li>推荐：使用这种简化的方式调用泛型函数，使代码更短，更易于阅读</li>
<li>说明：<strong>当编译器无法推断类型或者推断的类型不准确时，就需要显式地传入类型参数</strong></li>
</ul>
</blockquote>
</li>
</ul>
</li>
<li>
<p>方式二（指定类型）：</p>
<ul>
<li>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token generic-function"><span class="token function">identity</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<ol>
<li>
<p>语法：在函数名称的后面添加 <code>&lt;&gt;</code>(尖括号)，<strong>尖括号中指定具体的类型</strong>，比如，此处的 number</p>
</li>
<li>
<p>当传入类型 number 后，这个类型就会被函数声明时指定的类型变量 Type 捕获到</p>
</li>
<li>
<p>此时，Type 的类型就是 number，所以，函数 id 参数和返回值的类型也都是 number</p>
<blockquote>
<ul>
<li>
<p>同样，如果传入类型 string，函数 id 参数和返回值的类型就都是 string</p>
</li>
<li>
<p>这样，通过泛型就做到了让 id 函数与多种不同的类型一起工作，<strong>实现了复用的同时保证了类型安全</strong></p>
</li>
</ul>
</blockquote>
</li>
</ol>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>其实并不是只能定义一个类型变量，我们可以引入希望定义的任何数量的类型变量。比如我们引入一个新的类型变量 <code>U</code>，用于扩展我们定义的 <code>identity</code> 函数：</p>
<ul>
<li>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">identity</span> <span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token constant">U</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> value<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token generic-function"><span class="token function">identity</span><span class="token generic class-name"><span class="token operator">&lt;</span>Number<span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token number">68</span><span class="token punctuation">,</span> <span class="token string">"Semlinker"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://i0.hdslb.com/bfs/album/1d646c21096038011017b93333d8fecd97639e4f.png" alt="image-20220807134038387" tabindex="0" loading="lazy"><figcaption>image-20220807134038387</figcaption></figure>
</li>
<li>
<p>使用泛型时，完全可以将泛型当成是一个普通的类去使用</p>
</li>
</ul>
</li>
<li>
<p>类中同样可以使用泛型：</p>
<ul>
<li>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">MyClass<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span><span class="token punctuation">{</span>
    prop<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>prop<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>prop <span class="token operator">=</span> prop<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
</li>
</ul>`,r:{minutes:5.47,words:1640},y:"a",t:"8.泛型"},["/front_end/js_advanced/typescript/06","/front_end/js_advanced/typescript/06.md"]],["v-671ae07c","/front_end/js_advanced/webpack/01.html",{d:173312745e4,e:`<h1> 01 【前言 基础使用 核心概念】</h1>
<h2> 1.前言</h2>
<h3> 1.1 概述</h3>
<blockquote>
<p><a href="https://link.juejin.cn?target=https%3A%2F%2Fwww.webpackjs.com%2Fconcepts%2F" target="_blank" rel="noopener noreferrer">官网</a>的描述：</p>
<p>本质上，<strong>webpack</strong>是一个现代 JavaScript 应用程序的<strong>静态模块打包器</strong>(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个<strong>依赖关系图</strong>(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个<strong>静态资源(bundle)</strong>。</p>
</blockquote>`,r:{minutes:20.54,words:6163},y:"a",t:"01 【前言 基础使用 核心概念】"},["/front_end/js_advanced/webpack/01","/front_end/js_advanced/webpack/01.md"]],["v-68cfb91b","/front_end/js_advanced/webpack/02.html",{d:173312745e4,e:`<h1> 02 【开发服务器 资源模块】</h1>
<h2> 1.开发服务器&amp;自动化</h2>
<p><a href="https://github.com/webpack/webpack-dev-server" target="_blank" rel="noopener noreferrer">webpack-dev-server</a> 可用于快速开发应用程序。请查阅 <a href="https://webpack.docschina.org/guides/development/" target="_blank" rel="noopener noreferrer">开发指南</a> 开始使用。</p>`,r:{minutes:8.5,words:2549},y:"a",t:"02 【开发服务器 资源模块】"},["/front_end/js_advanced/webpack/02","/front_end/js_advanced/webpack/02.md"]],["v-6a8491ba","/front_end/js_advanced/webpack/03.html",{d:173312745e4,e:`<h1> 03 【资源处理】</h1>
<p>在上一章，我们讲解了四种资源模块引入外部资源。除了资源模块，我们还可以通过 loader引入其他类型的文件。</p>
<p><strong>什么是loader</strong></p>
<p><code>webpack</code> 只能理解 <code>JavaScript</code> 和<code>JSON</code>文件，这是 webpack 开箱可用的自带能力。 loader 让 webpack 能够去处理其他类型的文件，并将它们转换为有效 模块，以供 应用程序使用，以及被添加到依赖图中。</p>
<p>在 webpack 的配置中，<code>loader</code> 有两个属性：</p>`,r:{minutes:28.59,words:8577},y:"a",t:"03 【资源处理】"},["/front_end/js_advanced/webpack/03","/front_end/js_advanced/webpack/03.md"]],["v-6c396a59","/front_end/js_advanced/webpack/04.html",{d:173312745e4,e:`<h1> 04 【优化】</h1>
<h2> 1.Public Path(公共路径)</h2>
<p>webpack 提供一个非常有用的配置，该配置能帮助你为项目中的所有资源指定一个基础路径。它被称为<code>公共路径(publicPath)</code>。</p>
<p>在开发模式中，我们通常有一个 <code>assets/</code> 文件夹，它往往存放在和首页一个级别的目录下。这样是挺方便；但是如果在生产环境下，你想把这些静态文件统一使用CDN加载，那该怎么办？</p>
<p><code>publicPath </code>配置公共路径，所有文件的引用将自动添加公共路径的绝对地址。</p>`,r:{minutes:29.96,words:8989},y:"a",t:"04 【优化】"},["/front_end/js_advanced/webpack/04","/front_end/js_advanced/webpack/04.md"]],["v-1ff273ed","/front_end/other/electron/01.html",{d:173312745e4,e:`<h1> 01 【创建一个electron应用】</h1>
<h2> 1.Electron 初探</h2>
<h3> 1.1 常见的桌面GUI工具介绍</h3>
<table>
<thead>
<tr>
<th>名称</th>
<th>语音</th>
<th>优点</th>
<th>缺点</th>
</tr>
</thead>
<tbody>
<tr>
<td>QT</td>
<td>C++</td>
<td>跨平台、性能好、生态好</td>
<td>依赖多，程序包大</td>
</tr>
<tr>
<td>PyQT</td>
<td>Python</td>
<td>底层集成度高、易上手</td>
<td>授权问题</td>
</tr>
<tr>
<td>WPF</td>
<td>C#</td>
<td>类库丰富、扩展灵活</td>
<td>只支持Windows，程序包大</td>
</tr>
<tr>
<td>WinForm</td>
<td>C#</td>
<td>性能好，组件丰富，易上手</td>
<td>只支持Windows，UI差</td>
</tr>
<tr>
<td>Swing</td>
<td>Java</td>
<td>基于AWT，组件丰富</td>
<td>性能差，UI一般</td>
</tr>
<tr>
<td>NW.js</td>
<td>JS</td>
<td>跨平台性好，界面美观</td>
<td>底层交互差、性能差，包大</td>
</tr>
<tr>
<td>Electron</td>
<td>JS</td>
<td>相比NW发展更好</td>
<td>底层交互差、性能差，包大</td>
</tr>
<tr>
<td>CEF</td>
<td>C++</td>
<td>性能好，灵活集成，UI美观</td>
<td>占用资源多，包大</td>
</tr>
</tbody>
</table>`,r:{minutes:10.9,words:3271},y:"a",t:"01 【创建一个electron应用】"},["/front_end/other/electron/01","/front_end/other/electron/01.md"]],["v-21a74c8c","/front_end/other/electron/02.html",{d:173312745e4,e:`<h1> 02 【使用预加载脚本】</h1>
<h2> 1.什么是预加载脚本？</h2>
<p>Electron 的主进程是一个拥有着完全操作系统访问权限的 Node.js 环境。 除了 <a href="https://www.electronjs.org/zh/docs/latest/api/app" target="_blank" rel="noopener noreferrer">Electron 模组</a> 之外，你也可以使用 <a href="https://nodejs.org/dist/latest/docs/api/" target="_blank" rel="noopener noreferrer">Node.js 内置模块</a> 和所有通过 npm 安装的软件包。 另一方面，出于安全原因，渲染进程默认跑在网页页面上，而并非 Node.js里。</p>`,r:{minutes:5.2,words:1559},y:"a",t:"02 【使用预加载脚本】"},["/front_end/other/electron/02","/front_end/other/electron/02.md"]],["v-235c252b","/front_end/other/electron/03.html",{d:173312745e4,e:`<h1> 03 【electron的Remote模块】</h1>
<p>在渲染进程里（比如<code>index.html</code>里面加载了一些<strong>js文件</strong>，那里面的<strong>js</strong>如果要使用到 <strong>BrowserWindow</strong> 这些属性的话就必须使用 <code>remote</code>）</p>
<p>使用 <code>remote</code> 模块, 你可以调用 <code>main</code> <strong>进程对象的方法</strong></p>
<h2> 1.electron14.0之前版本使用</h2>`,r:{minutes:1.82,words:547},y:"a",t:"03 【electron的Remote模块】"},["/front_end/other/electron/03","/front_end/other/electron/03.md"]],["v-2510fdca","/front_end/other/electron/04.html",{d:173312745e4,e:`<h1> 04 【electron的一些主进程Api】</h1>
<h2> 1.App</h2>
<h3> 1.1 事件</h3>
<h4> 1.1.1 before-quit</h4>
<blockquote>
<p>在应用程序开始关闭窗口之前触发。</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'before-quit'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'App is quiting'</span><span class="token punctuation">)</span>
  e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:8.71,words:2612},y:"a",t:"04 【electron的一些主进程Api】"},["/front_end/other/electron/04","/front_end/other/electron/04.md"]],["v-26c5d669","/front_end/other/electron/05.html",{d:173312745e4,e:`<h1> 05 【electron的一些渲染进程Api】</h1>
<h2> 1.clipboard</h2>
<blockquote>
<p>在系统剪贴板上进行复制和粘贴操作。</p>
<p>在主进程（main process）和渲染进程（renderer process）上均可用。</p>
</blockquote>
<h3> 1.1 <code>readText()</code></h3>
<p>返回字符串 - 剪贴板中的内容为纯文本。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> clipboard <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'electron'</span><span class="token punctuation">)</span>

clipboard<span class="token punctuation">.</span><span class="token function">writeText</span><span class="token punctuation">(</span><span class="token string">'千锋教育HTML5大前端!'</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> text <span class="token operator">=</span> clipboard<span class="token punctuation">.</span><span class="token function">readText</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span>
<span class="token comment">// hello i am a bit of text!'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:3.31,words:993},y:"a",t:"05 【electron的一些渲染进程Api】"},["/front_end/other/electron/05","/front_end/other/electron/05.md"]],["v-287aaf08","/front_end/other/electron/06.html",{d:173312745e4,e:`<h1> 06 【electron对话框】</h1>
<blockquote>
<p>显示用于打开和保存文件、警报等的本机系统对话框</p>
</blockquote>
<h2> 1.选择文件</h2>
<p><code>browserWindow</code> 参数允许该对话框将自身附加到父窗口, 作为父窗口的模态框。</p>
<p><code>dialog.showOpenDialog([browserWindow, ]options)</code></p>
<ul>
<li><code>browserWindow</code> <a href="https://www.electronjs.org/zh/docs/latest/api/browser-window" target="_blank" rel="noopener noreferrer">BrowserWindow</a> (可选)</li>
<li><code>选项</code> 对象
<ul>
<li><code>title</code> string (可选) - 对话框窗口的标题</li>
<li><code>defaultPath</code> string (可选) - 对话框的默认展示路径</li>
<li><code>buttonLabel</code> string (可选) - 「确认」按钮的自定义标签, 当为空时, 将使用默认标签。</li>
<li><code>filters</code> [FileFilter<a href="https://www.electronjs.org/zh/docs/latest/api/structures/file-filter" target="_blank" rel="noopener noreferrer">]</a> (可选)</li>
<li><code>properties</code> string[] (可选) - 包含对话框相关属性。 支持以下属性值:
<ul>
<li><code>openFile</code> - 允许选择文件</li>
<li><code>openDirectory</code> - 允许选择文件夹</li>
<li><code>multiSelections</code>-允许多选。</li>
<li><code>showHiddenFiles</code>-显示对话框中的隐藏文件。</li>
<li><code>createDirectory</code> <em>macOS</em> -允许你通过对话框的形式创建新的目录。</li>
<li><code>promptToCreate</code> <em>Windows</em>-如果输入的文件路径在对话框中不存在, 则提示创建。 这并不是真的在路径上创建一个文件，而是允许返回一些不存在的地址交由应用程序去创建。</li>
<li><code>noResolveAliases</code> <em>macOS</em>-禁用自动的别名路径(符号链接) 解析。 所选别名现在将会返回别名路径而非其目标路径。</li>
<li><code>treatPackageAsDirectory</code> <em>macOS</em> -将包 (如 <code>.app </code>文件夹) 视为目录而不是文件。</li>
<li><code>dontAddToRecent</code> <em>Windows</em> - 不要将正在打开的项目添加到最近的文档列表中。</li>
</ul>
</li>
<li><code>message</code> string (可选) <em>macOS</em> -显示在输入框上方的消息。</li>
<li><code>securityScopedBookmarks</code> boolean (可选) <em>macOS</em> <em>mas</em> - 在打包提交到Mac App Store时创建 <a href="https://developer.apple.com/library/content/documentation/Security/Conceptual/AppSandboxDesignGuide/AppSandboxInDepth/AppSandboxInDepth.html#//apple_ref/doc/uid/TP40011183-CH3-SW16" target="_blank" rel="noopener noreferrer">security scoped bookmarks</a></li>
</ul>
</li>
</ul>`,r:{minutes:6.32,words:1896},y:"a",t:"06 【electron对话框】"},["/front_end/other/electron/06","/front_end/other/electron/06.md"]],["v-2a2f87a7","/front_end/other/electron/07.html",{d:173312745e4,e:`<h1> 07【electron菜单】</h1>
<h2> 1.创建系统菜单</h2>
<blockquote>
<p>创建原生应用菜单和上下文菜单。</p>
</blockquote>
<p><strong>进程</strong>：<a href="https://www.electronjs.org/zh/docs/latest/glossary#main-process" target="_blank" rel="noopener noreferrer">主进程</a></p>
<p><code>new Menu()</code>创建新菜单。</p>
<p><strong>静态方法</strong></p>`,r:{minutes:3.63,words:1090},y:"a",t:"07【electron菜单】"},["/front_end/other/electron/07","/front_end/other/electron/07.md"]],["v-2be46046","/front_end/other/electron/08.html",{d:173312745e4,e:`<h1> 08 【electron系统托盘 】</h1>
<p>当我们关闭一个应用程序的时候，它其实关闭了，但是没有完全关闭，只是隐藏了，有的就存在系统托盘中，那么如何在<code>electron</code> 设置系统托盘呢</p>
<p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fwww.electronjs.org%2Fdocs%2Ftutorial%2Ftray" target="_blank" rel="noopener noreferrer">官方文档：Tray</a></p>
<h2> 1.概览</h2>
<p>当前指南将带领你创建 <a href="https://www.electronjs.org/docs/api/tray" target="_blank" rel="noopener noreferrer">Tray</a> 图标, 并且其拥有系统通知区域的独立上下文菜单</p>`,r:{minutes:2.26,words:678},y:"a",t:"08 【electron系统托盘 】"},["/front_end/other/electron/08","/front_end/other/electron/08.md"]],["v-2d9938e5","/front_end/other/electron/09.html",{d:173312745e4,e:`<h1> 09 【进程间通信】</h1>
<p>进程间通信 (IPC) 是在 Electron 中构建功能丰富的桌面应用程序的关键部分之一。 由于主进程和渲染器进程在 Electron 的进程模型具有不同的职责，因此 IPC 是执行许多常见任务的唯一方法，例如从 UI 调用原生 API 或从原生菜单触发 Web 内容的更改。</p>
<blockquote>
<p>官方文档：</p>
<p><a href="https://www.electronjs.org/docs/latest/api/ipc-main" target="_blank" rel="noopener noreferrer">ipcMain</a></p>
<p><a href="https://www.electronjs.org/docs/latest/api/ipc-renderer" target="_blank" rel="noopener noreferrer">ipcRenderer</a></p>
<p><a href="https://www.electronjs.org/docs/latest/api/web-contents#contentssendchannel-args" target="_blank" rel="noopener noreferrer">webContents</a></p>
</blockquote>`,r:{minutes:8,words:2400},y:"a",t:"09 【进程间通信】"},["/front_end/other/electron/09","/front_end/other/electron/09.md"]],["v-5323d68f","/front_end/other/electron/10.html",{d:173312745e4,e:`<h1> 10 【Vite + Vue3 + Electron 创建打包桌面程序】</h1>
<h2> 1.使用 Vite 构建 Electron 项目</h2>
<h3> 1.1 创建 Vite 应用，安装 Electron 依赖</h3>
<p>创建一个 Vite 项目</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> init vite@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:6.39,words:1918},y:"a",t:"10 【Vite + Vue3 + Electron 创建打包桌面程序】"},["/front_end/other/electron/10","/front_end/other/electron/10.md"]],["v-3296bd31","/tool/efficiency/software/browser.html",{d:173312745e4,e:`<h1> 浏览器设置与扩展</h1>
<ul>
<li><a href="https://github.com/sxei/chrome-plugin-demo" target="_blank" rel="noopener noreferrer">Chrome 插件开发全攻略</a></li>
</ul>
<h2> 扩展商店</h2>
<ul>
<li>
<p><a href="https://chrome.google.com/webstore/category/extensions" target="_blank" rel="noopener noreferrer">Chrome 网上应用店</a></p>
</li>
<li>
<p><a href="https://crxdl.com/" target="_blank" rel="noopener noreferrer">CrxDL - Chrome 浏览器扩展插件 CRX 下载网</a> 更新及时，可下载历史版本</p>
</li>
<li>
<p><a href="https://www.extfans.com/" target="_blank" rel="noopener noreferrer">Chrome 插件扩展下载网 (免翻墙)</a></p>
</li>
</ul>`,r:{minutes:3.82,words:1145},y:"a",t:"浏览器设置与扩展"},["/tool/efficiency/software/browser","/tool/efficiency/software/browser.md"]],["v-3a8682f9","/tool/efficiency/software/cross-platform.html",{d:173312745e4,e:`<h1> 多平台软件</h1>
<h2> 效率神器 uTools</h2>
<ol>
<li>强大的插件化</li>
<li>多功能输入框，支持文本、截图、图片、文件、文件夹</li>
<li>自动识别 / 粘贴</li>
<li>全局快捷键</li>
<li>云端数据同步</li>
<li>支持 Windows、Mac、Linux</li>
</ol>
<p><a href="https://u.tools/" target="_blank" rel="noopener noreferrer">软件官网</a></p>
<h2> 下载神器 Motrix</h2>
<ol>
<li>界面清爽简洁</li>
<li>支持 BT 和磁力链任务</li>
<li>支持选择性下载 BT 部分文件</li>
<li>基于 Aria2</li>
<li>自动更新 Tracker 服务器列表</li>
</ol>`,r:{minutes:1.58,words:473},y:"a",t:"多平台软件"},["/tool/efficiency/software/cross-platform","/tool/efficiency/software/cross-platform.md"]],["v-71b3b66f","/tool/efficiency/software/vscode.html",{d:173312745e4,e:`<h1> Visual Studio Code 配置</h1>
<h2> 扩展插件推荐</h2>
<h3> 主题相关</h3>
<ul>
<li>
<p><code>One Dark Pro</code></p>
<ul>
<li>黑色主题</li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme" target="_blank" rel="noopener noreferrer">插件地址</a></li>
</ul>
</li>
<li>
<p><code>Shades of Purple</code></p>
<ul>
<li>紫色主题（来自彤姐的推荐：没有什么比骚更重要）</li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=ahmadawais.shades-of-purple" target="_blank" rel="noopener noreferrer">插件地址</a></li>
</ul>
</li>
<li>
<p><code>Dracula Official</code></p>
<ul>
<li>黑色主题</li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula" target="_blank" rel="noopener noreferrer">插件地址</a></li>
</ul>
</li>
<li>
<p><code>Bluloco Dark</code></p>
<ul>
<li>黑色主题</li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=uloco.theme-bluloco-dark" target="_blank" rel="noopener noreferrer">插件地址</a></li>
</ul>
</li>
<li>
<p><code>Material Icon Theme</code></p>
<ul>
<li>文件图标美化</li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme" target="_blank" rel="noopener noreferrer">插件地址</a></li>
</ul>
</li>
<li>
<p><code>background</code></p>
<ul>
<li>自定义背景</li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=shalldie.background" target="_blank" rel="noopener noreferrer">插件地址</a></li>
</ul>
</li>
</ul>`,r:{minutes:6.74,words:2023},y:"a",t:"Visual Studio Code 配置"},["/tool/efficiency/software/vscode","/tool/efficiency/software/vscode.md"]],["v-10d9f538","/tool/efficiency/software/webstorm.html",{d:173312745e4,e:`<h1> WebStorm 配置</h1>
<h2> 获取许可证</h2>
<p><a href="https://www.jetbrains.com/shop/eform/opensource" target="_blank" rel="noopener noreferrer">使用开源项目免费申请 JetBrains 全家桶开源许可证</a></p>
<h2> 汉化</h2>
<ul>
<li>方案一
<ul>
<li>进入 <code>文件 - 设置 - Plugins - Marketplace</code></li>
<li>搜索 <code>Chinese ​(Simplified)​ Language Pack EAP</code> 下载安装</li>
</ul>
</li>
<li>方案二
<ul>
<li>打开 <a href="https://plugins.jetbrains.com/plugin/13710-chinese-simplified-language-pack-eap" target="_blank" rel="noopener noreferrer">Chinese ​(Simplified)​ Language Pack EAP</a></li>
<li>点击 <code>Install to IDE</code> 按钮再选择对应编辑器</li>
</ul>
</li>
<li>方案三
<ul>
<li>查看本地 <code>WebStorm</code> 版本
<ul>
<li>进入 <code>帮助 - 关于</code></li>
<li>找到 <code>Build #WS-</code> 后面的数字</li>
</ul>
</li>
<li>打开 <a href="https://plugins.jetbrains.com/plugin/13710-chinese-simplified-language-pack-eap" target="_blank" rel="noopener noreferrer">Chinese ​(Simplified)​ Language Pack EAP</a></li>
<li>点击 <code>Versions</code> 选择对应编辑器再搜索对应版本下载（当找不到一样的版本时，可以看列表的第二栏版本范围，找包含你编辑器的版本下载就行）</li>
<li>通过磁盘安装刚下载的文件</li>
</ul>
</li>
</ul>`,r:{minutes:1.54,words:461},y:"a",t:"WebStorm 配置"},["/tool/efficiency/software/webstorm","/tool/efficiency/software/webstorm.md"]],["v-85bcb294","/tool/efficiency/software/windows.html",{d:173312745e4,e:`<h1> Windows 平台</h1>
<h2> 终端神器 Cmder</h2>
<ol>
<li>便携，解压即可用</li>
<li>支持子窗口</li>
<li>自带 <code>git</code>、<code>ls</code> 等命令</li>
<li>自定义配置项</li>
</ol>
<p><a href="https://github.com/cmderdev/cmder" target="_blank" rel="noopener noreferrer">Github</a>
<a href="https://cmder.net/" target="_blank" rel="noopener noreferrer">软件官网</a></p>`,r:{minutes:4.92,words:1476},y:"a",t:"Windows 平台"},["/tool/efficiency/software/windows","/tool/efficiency/software/windows.md"]],["v-3706649a","/404.html",{y:"p",t:""},["/404"]],["v-144e84a4","/apps/",{y:"p",t:"Apps"},["/apps/index.html"]],["v-72a9c1e2","/deploy/",{y:"p",t:"Deploy"},["/deploy/index.html"]],["v-e1e3da16","/posts/",{y:"p",t:"Posts"},["/posts/index.html"]],["v-744e6dd4","/web/",{y:"p",t:"Web"},["/web/index.html"]],["v-b22fa0a4","/back_end/linux/",{y:"p",t:"Linux"},["/back_end/linux/index.html"]],["v-4e029433","/back_end/",{y:"p",t:"Back End"},["/back_end/index.html"]],["v-acdb09de","/back_end/nodeJs/",{y:"p",t:"Node Js"},["/back_end/nodeJs/index.html"]],["v-08f42f4a","/posts/apple/",{y:"p",t:"Apple"},["/posts/apple/index.html"]],["v-30be3cd5","/posts/banana/",{y:"p",t:"Banana"},["/posts/banana/index.html"]],["v-326764f5","/professional_knowledge/computer_network/",{y:"p",t:"Computer Network"},["/professional_knowledge/computer_network/index.html"]],["v-dc68d520","/professional_knowledge/",{y:"p",t:"Professional Knowledge"},["/professional_knowledge/index.html"]],["v-2d582078","/professional_knowledge/software_engineer/",{y:"p",t:"Software Engineer"},["/professional_knowledge/software_engineer/index.html"]],["v-429fc9e8","/tool/efficiency/",{y:"p",t:"Efficiency"},["/tool/efficiency/index.html"]],["v-1559ca3e","/tool/",{y:"p",t:"Tool"},["/tool/index.html"]],["v-3a02344a","/tool/git/",{y:"p",t:"Git"},["/tool/git/index.html"]],["v-7d243d0e","/tool/lint/",{y:"p",t:"Lint"},["/tool/lint/index.html"]],["v-c3b7df84","/back_end/database/mongodb/",{y:"p",t:"Mongodb"},["/back_end/database/mongodb/index.html"]],["v-5ebe9341","/back_end/database/",{y:"p",t:"Database"},["/back_end/database/index.html"]],["v-3b98b24e","/back_end/database/mysql/",{y:"p",t:"Mysql"},["/back_end/database/mysql/index.html"]],["v-4031f170","/front_end/css_advanced/less/",{y:"p",t:"Less"},["/front_end/css_advanced/less/index.html"]],["v-2307d72e","/front_end/css_advanced/",{y:"p",t:"Css Advanced"},["/front_end/css_advanced/index.html"]],["v-8681a27a","/front_end/",{y:"p",t:"Front End"},["/front_end/index.html"]],["v-3f6e79de","/front_end/css_advanced/scss/",{y:"p",t:"Scss"},["/front_end/css_advanced/scss/index.html"]],["v-364ea92e","/front_end/css_advanced/tailwind/",{y:"p",t:"Tailwind"},["/front_end/css_advanced/tailwind/index.html"]],["v-26ee445f","/front_end/front_end_base/html_css/",{y:"p",t:"Html Css"},["/front_end/front_end_base/html_css/index.html"]],["v-02f17b61","/front_end/front_end_base/",{y:"p",t:"Front End Base"},["/front_end/front_end_base/index.html"]],["v-0e6aa261","/front_end/front_end_base/javascript/",{y:"p",t:"Javascript"},["/front_end/front_end_base/javascript/index.html"]],["v-734e47fe","/front_end/front_end_framework/react/",{y:"p",t:"React"},["/front_end/front_end_framework/react/index.html"]],["v-1b3e1bee","/front_end/front_end_framework/",{y:"p",t:"Front End Framework"},["/front_end/front_end_framework/index.html"]],["v-b60e5920","/front_end/front_end_framework/uniapp/",{y:"p",t:"Uniapp"},["/front_end/front_end_framework/uniapp/index.html"]],["v-299ca1d6","/front_end/front_end_framework/vue2/",{y:"p",t:"Vue2"},["/front_end/front_end_framework/vue2/index.html"]],["v-299ca198","/front_end/front_end_framework/vue3/",{y:"p",t:"Vue3"},["/front_end/front_end_framework/vue3/index.html"]],["v-7e747335","/front_end/js_advanced/ajax/",{y:"p",t:"Ajax"},["/front_end/js_advanced/ajax/index.html"]],["v-58897f1a","/front_end/js_advanced/",{y:"p",t:"Js Advanced"},["/front_end/js_advanced/index.html"]],["v-2d1c40e2","/front_end/js_advanced/echarts/",{y:"p",t:"Echarts"},["/front_end/js_advanced/echarts/index.html"]],["v-295ffbfe","/front_end/js_advanced/es6/",{y:"p",t:"Es6"},["/front_end/js_advanced/es6/index.html"]],["v-4bdef0f0","/front_end/js_advanced/typescript/",{y:"p",t:"Typescript"},["/front_end/js_advanced/typescript/index.html"]],["v-d0bc6108","/front_end/js_advanced/webpack/",{y:"p",t:"Webpack"},["/front_end/js_advanced/webpack/index.html"]],["v-cc046daa","/front_end/other/electron/",{y:"p",t:"Electron"},["/front_end/other/electron/index.html"]],["v-5f8133a2","/front_end/other/",{y:"p",t:"Other"},["/front_end/other/index.html"]],["v-5b2ca300","/tool/efficiency/software/",{y:"p",t:"Software"},["/tool/efficiency/software/index.html"]],["v-5bc93818","/category/",{y:"p",t:"分类"},["/category/index.html"]],["v-744d024e","/tag/",{y:"p",t:"标签"},["/tag/index.html"]],["v-e52c881c","/article/",{y:"p",t:"文章"},["/article/index.html"]],["v-154dc4c4","/star/",{y:"p",t:"收藏"},["/star/index.html"]],["v-01560935","/timeline/",{y:"p",t:"时间轴"},["/timeline/index.html"]],["v-0c75a0f8","/category/%E6%A8%B1%E6%A1%83/",{y:"p",t:"樱桃 分类"},["/category/樱桃/","/category/%E6%A8%B1%E6%A1%83/index.html"]],["v-0f1d0e94","/tag/%E7%BA%A2/",{y:"p",t:"红 标签"},["/tag/红/","/tag/%E7%BA%A2/index.html"]],["v-226a68ec","/category/%E7%81%AB%E9%BE%99%E6%9E%9C/",{y:"p",t:"火龙果 分类"},["/category/火龙果/","/category/%E7%81%AB%E9%BE%99%E6%9E%9C/index.html"]],["v-3e6b05e8","/tag/%E5%B0%8F/",{y:"p",t:"小 标签"},["/tag/小/","/tag/%E5%B0%8F/index.html"]],["v-12590846","/category/%E6%B0%B4%E6%9E%9C/",{y:"p",t:"水果 分类"},["/category/水果/","/category/%E6%B0%B4%E6%9E%9C/index.html"]],["v-301b24f4","/tag/%E5%9C%86/",{y:"p",t:"圆 标签"},["/tag/圆/","/tag/%E5%9C%86/index.html"]],["v-247d58ff","/category/%E8%8D%89%E8%8E%93/",{y:"p",t:"草莓 分类"},["/category/草莓/","/category/%E8%8D%89%E8%8E%93/index.html"]],["v-3ceeab45","/tag/%E5%A4%A7/",{y:"p",t:"大 标签"},["/tag/大/","/tag/%E5%A4%A7/index.html"]],["v-76b80ea2","/category/%E8%94%AC%E8%8F%9C/",{y:"p",t:"蔬菜 分类"},["/category/蔬菜/","/category/%E8%94%AC%E8%8F%9C/index.html"]],["v-42254370","/tag/%E9%BB%84/",{y:"p",t:"黄 标签"},["/tag/黄/","/tag/%E9%BB%84/index.html"]],["v-40b68770","/category/%E8%8B%B9%E6%9E%9C/",{y:"p",t:"苹果 分类"},["/category/苹果/","/category/%E8%8B%B9%E6%9E%9C/index.html"]],["v-3aafda76","/tag/%E5%BC%AF%E6%9B%B2%E7%9A%84/",{y:"p",t:"弯曲的 标签"},["/tag/弯曲的/","/tag/%E5%BC%AF%E6%9B%B2%E7%9A%84/index.html"]],["v-4c41ef7e","/category/%E9%A6%99%E8%95%89/",{y:"p",t:"香蕉 分类"},["/category/香蕉/","/category/%E9%A6%99%E8%95%89/index.html"]],["v-624a9248","/tag/%E9%95%BF/",{y:"p",t:"长 标签"},["/tag/长/","/tag/%E9%95%BF/index.html"]]];var zr=$({name:"Vuepress",setup(){const n=hm();return()=>i(n.value)}}),f_=()=>m_.reduce((n,[e,s,t,a])=>(n.push({name:e,path:s,component:zr,meta:t},...a.map(o=>({path:o,redirect:s}))),n),[{name:"404",path:"/:catchAll(.*)",component:zr}]),k_=J0,__=()=>{const n=f1({history:k_(Uo("/newblog/")),routes:f_(),scrollBehavior:(e,s,t)=>t||(e.hash?{el:e.hash}:{top:0})});return n.beforeResolve(async(e,s)=>{var t;(e.path!==s.path||s===De)&&([Ge.value]=await Promise.all([Ie.resolvePageData(e.name),(t=ui[e.name])==null?void 0:t.__asyncLoader()]))}),n},h_=n=>{n.component("ClientOnly",ya),n.component("Content",gi)},b_=(n,e,s)=>{const t=Z(e.currentRoute.value.path);cn(()=>e.currentRoute.value.path,k=>t.value=k);const a=w(()=>Ie.resolveLayouts(s)),o=w(()=>Ie.resolveRouteLocale(Ps.value.locales,t.value)),p=w(()=>Ie.resolveSiteLocaleData(Ps.value,o.value)),l=w(()=>Ie.resolvePageFrontmatter(Ge.value)),c=w(()=>Ie.resolvePageHeadTitle(Ge.value,p.value)),u=w(()=>Ie.resolvePageHead(c.value,l.value,p.value)),d=w(()=>Ie.resolvePageLang(Ge.value)),v=w(()=>Ie.resolvePageLayout(Ge.value,a.value));return n.provide(mm,a),n.provide(vi,l),n.provide(fi,c),n.provide(mi,u),n.provide(ki,d),n.provide(_i,v),n.provide(Ko,o),n.provide(bi,p),Object.defineProperties(n.config.globalProperties,{$frontmatter:{get:()=>l.value},$head:{get:()=>u.value},$headTitle:{get:()=>c.value},$lang:{get:()=>d.value},$page:{get:()=>Ge.value},$routeLocale:{get:()=>o.value},$site:{get:()=>Ps.value},$siteLocale:{get:()=>p.value},$withBase:{get:()=>jn}}),{layouts:a,pageData:Ge,pageFrontmatter:l,pageHead:u,pageHeadTitle:c,pageLang:d,pageLayout:v,routeLocale:o,siteData:Ps,siteLocaleData:p}},g_=()=>{const n=km(),e=Go(),s=Z([]),t=()=>{n.value.forEach(o=>{const p=y_(o);p&&s.value.push(p)})},a=()=>{document.documentElement.lang=e.value,s.value.forEach(o=>{o.parentNode===document.head&&document.head.removeChild(o)}),s.value.splice(0,s.value.length),n.value.forEach(o=>{const p=E_(o);p!==null&&(document.head.appendChild(p),s.value.push(p))})};ce(bm,a),xn(()=>{t(),a(),cn(()=>n.value,()=>a())})},y_=([n,e,s=""])=>{const t=Object.entries(e).map(([l,c])=>pn(c)?`[${l}=${JSON.stringify(c)}]`:c===!0?`[${l}]`:"").join(""),a=`head > ${n}${t}`;return Array.from(document.querySelectorAll(a)).find(l=>l.innerText===s)||null},E_=([n,e,s])=>{if(!pn(n))return null;const t=document.createElement(n);return Jo(e)&&Object.entries(e).forEach(([a,o])=>{pn(o)?t.setAttribute(a,o):o===!0&&t.setAttribute(a,"")}),pn(s)&&t.appendChild(document.createTextNode(s)),t},w_=sm,T_=async()=>{var s;const n=w_({name:"VuepressApp",setup(){var t;g_();for(const a of Yt)(t=a.setup)==null||t.call(a);return()=>[i(sc),...Yt.flatMap(({rootComponents:a=[]})=>a.map(o=>i(o)))]}}),e=__();h_(n),b_(n,e,Yt);for(const t of Yt)await((s=t.enhance)==null?void 0:s.call(t,{app:n,router:e,siteData:Ps}));return n.use(e),{app:n,router:e}};T_().then(({app:n,router:e})=>{e.isReady().then(()=>{n.mount("#app")})});export{Et as A,x_ as B,O_ as C,ar as D,On as E,ne as F,P_ as G,i0 as H,ce as I,ss as J,C_ as K,D_ as L,z1 as M,Yl as a,Xl as b,A_ as c,T_ as createVueApp,Pn as d,L_ as e,R_ as f,$ as g,Z as h,xn as i,cn as j,Bo as k,S_ as l,fn as m,Ro as n,pv as o,w as p,lv as q,se as r,is as s,Ou as t,V_ as u,Po as v,md as w,i as x,t0 as y,St as z};

function Ok(n,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in n)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(n,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();var tu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function bS(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function $k(n){if(n.__esModule)return n;var e=n.default;if(typeof e=="function"){var t=function r(){if(this instanceof r){var i=[null];i.push.apply(i,arguments);var s=Function.bind.apply(e,i);return new s}return e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach(function(r){var i=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(t,r,i.get?i:{enumerable:!0,get:function(){return n[r]}})}),t}var L={},Uk={get exports(){return L},set exports(n){L=n}},tv={},ie={},Fk={get exports(){return ie},set exports(n){ie=n}},Lt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $d=Symbol.for("react.element"),zk=Symbol.for("react.portal"),Bk=Symbol.for("react.fragment"),Hk=Symbol.for("react.strict_mode"),Vk=Symbol.for("react.profiler"),Gk=Symbol.for("react.provider"),qk=Symbol.for("react.context"),Wk=Symbol.for("react.forward_ref"),jk=Symbol.for("react.suspense"),Xk=Symbol.for("react.memo"),Yk=Symbol.for("react.lazy"),PM=Symbol.iterator;function Zk(n){return n===null||typeof n!="object"?null:(n=PM&&n[PM]||n["@@iterator"],typeof n=="function"?n:null)}var sR={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},oR=Object.assign,aR={};function yu(n,e,t){this.props=n,this.context=e,this.refs=aR,this.updater=t||sR}yu.prototype.isReactComponent={};yu.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};yu.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function lR(){}lR.prototype=yu.prototype;function ES(n,e,t){this.props=n,this.context=e,this.refs=aR,this.updater=t||sR}var MS=ES.prototype=new lR;MS.constructor=ES;oR(MS,yu.prototype);MS.isPureReactComponent=!0;var LM=Array.isArray,cR=Object.prototype.hasOwnProperty,TS={current:null},uR={key:!0,ref:!0,__self:!0,__source:!0};function fR(n,e,t){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)cR.call(e,r)&&!uR.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=t;else if(1<a){for(var l=Array(a),f=0;f<a;f++)l[f]=arguments[f+2];i.children=l}if(n&&n.defaultProps)for(r in a=n.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:$d,type:n,key:s,ref:o,props:i,_owner:TS.current}}function Kk(n,e){return{$$typeof:$d,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function AS(n){return typeof n=="object"&&n!==null&&n.$$typeof===$d}function Jk(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var NM=/\/+/g;function g1(n,e){return typeof n=="object"&&n!==null&&n.key!=null?Jk(""+n.key):e.toString(36)}function Dm(n,e,t,r,i){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case $d:case zk:o=!0}}if(o)return o=n,i=i(o),n=r===""?"."+g1(o,0):r,LM(i)?(t="",n!=null&&(t=n.replace(NM,"$&/")+"/"),Dm(i,e,t,"",function(f){return f})):i!=null&&(AS(i)&&(i=Kk(i,t+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(NM,"$&/")+"/")+n)),e.push(i)),1;if(o=0,r=r===""?".":r+":",LM(n))for(var a=0;a<n.length;a++){s=n[a];var l=r+g1(s,a);o+=Dm(s,e,t,l,i)}else if(l=Zk(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=r+g1(s,a++),o+=Dm(s,e,t,l,i);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function sp(n,e,t){if(n==null)return n;var r=[],i=0;return Dm(n,r,"","",function(s){return e.call(t,s,i++)}),r}function Qk(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Br={current:null},km={transition:null},eO={ReactCurrentDispatcher:Br,ReactCurrentBatchConfig:km,ReactCurrentOwner:TS};Lt.Children={map:sp,forEach:function(n,e,t){sp(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return sp(n,function(){e++}),e},toArray:function(n){return sp(n,function(e){return e})||[]},only:function(n){if(!AS(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Lt.Component=yu;Lt.Fragment=Bk;Lt.Profiler=Vk;Lt.PureComponent=ES;Lt.StrictMode=Hk;Lt.Suspense=jk;Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eO;Lt.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var r=oR({},n.props),i=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=TS.current),e.key!==void 0&&(i=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)cR.call(e,l)&&!uR.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=t;else if(1<l){a=Array(l);for(var f=0;f<l;f++)a[f]=arguments[f+2];r.children=a}return{$$typeof:$d,type:n.type,key:i,ref:s,props:r,_owner:o}};Lt.createContext=function(n){return n={$$typeof:qk,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:Gk,_context:n},n.Consumer=n};Lt.createElement=fR;Lt.createFactory=function(n){var e=fR.bind(null,n);return e.type=n,e};Lt.createRef=function(){return{current:null}};Lt.forwardRef=function(n){return{$$typeof:Wk,render:n}};Lt.isValidElement=AS;Lt.lazy=function(n){return{$$typeof:Yk,_payload:{_status:-1,_result:n},_init:Qk}};Lt.memo=function(n,e){return{$$typeof:Xk,type:n,compare:e===void 0?null:e}};Lt.startTransition=function(n){var e=km.transition;km.transition={};try{n()}finally{km.transition=e}};Lt.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Lt.useCallback=function(n,e){return Br.current.useCallback(n,e)};Lt.useContext=function(n){return Br.current.useContext(n)};Lt.useDebugValue=function(){};Lt.useDeferredValue=function(n){return Br.current.useDeferredValue(n)};Lt.useEffect=function(n,e){return Br.current.useEffect(n,e)};Lt.useId=function(){return Br.current.useId()};Lt.useImperativeHandle=function(n,e,t){return Br.current.useImperativeHandle(n,e,t)};Lt.useInsertionEffect=function(n,e){return Br.current.useInsertionEffect(n,e)};Lt.useLayoutEffect=function(n,e){return Br.current.useLayoutEffect(n,e)};Lt.useMemo=function(n,e){return Br.current.useMemo(n,e)};Lt.useReducer=function(n,e,t){return Br.current.useReducer(n,e,t)};Lt.useRef=function(n){return Br.current.useRef(n)};Lt.useState=function(n){return Br.current.useState(n)};Lt.useSyncExternalStore=function(n,e,t){return Br.current.useSyncExternalStore(n,e,t)};Lt.useTransition=function(){return Br.current.useTransition()};Lt.version="18.2.0";(function(n){n.exports=Lt})(Fk);const Mn=bS(ie),tO=Ok({__proto__:null,default:Mn},[ie]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nO=ie,rO=Symbol.for("react.element"),iO=Symbol.for("react.fragment"),sO=Object.prototype.hasOwnProperty,oO=nO.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,aO={key:!0,ref:!0,__self:!0,__source:!0};function dR(n,e,t){var r,i={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)sO.call(e,r)&&!aO.hasOwnProperty(r)&&(i[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:rO,type:n,key:s,ref:o,props:i,_owner:oO.current}}tv.Fragment=iO;tv.jsx=dR;tv.jsxs=dR;(function(n){n.exports=tv})(Uk);var a_={},lO={get exports(){return a_},set exports(n){a_=n}},hR={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nu=ie;function cO(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var uO=typeof Object.is=="function"?Object.is:cO,fO=nu.useState,dO=nu.useEffect,hO=nu.useLayoutEffect,pO=nu.useDebugValue;function mO(n,e){var t=e(),r=fO({inst:{value:t,getSnapshot:e}}),i=r[0].inst,s=r[1];return hO(function(){i.value=t,i.getSnapshot=e,v1(i)&&s({inst:i})},[n,t,e]),dO(function(){return v1(i)&&s({inst:i}),n(function(){v1(i)&&s({inst:i})})},[n]),pO(t),t}function v1(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!uO(n,t)}catch{return!0}}function gO(n,e){return e()}var vO=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?gO:mO;hR.useSyncExternalStore=nu.useSyncExternalStore!==void 0?nu.useSyncExternalStore:vO;(function(n){n.exports=hR})(lO);const{useEffect:yO,useLayoutEffect:_O,useRef:xO,useInsertionEffect:SO}=tO,wO=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",bO=wO?_O:yO,pR=SO||bO,mR=n=>{const e=xO([n,(...t)=>e[0](...t)]).current;return pR(()=>{e[0]=n}),e[1]},EO=(n="",e=location.pathname)=>e.toLowerCase().indexOf(n.toLowerCase())?"~"+e:e.slice(n.length)||"/",MO=(n,e="")=>n[0]==="~"?n.slice(1):e+n,TO="popstate",CS="pushState",RS="replaceState",AO="hashchange",IM=[TO,CS,RS,AO],CO=n=>{for(const e of IM)addEventListener(e,n);return()=>{for(const e of IM)removeEventListener(e,n)}},RO=(n,e)=>a_.useSyncExternalStore(CO,n,e),DM=()=>location.pathname,PO=({ssrPath:n}={})=>RO(DM,n?()=>n:DM),LO=(n,{replace:e=!1}={})=>history[e?RS:CS](null,"",n),NO=(n={})=>[EO(n.base,PO(n)),mR((e,t)=>LO(MO(e,n.base),t))];if(typeof history<"u")for(const n of[CS,RS]){const e=history[n];history[n]=function(){const t=e.apply(this,arguments),r=new Event(n);return r.arguments=arguments,dispatchEvent(r),t}}function IO(n=kO){let e={};const t=r=>e[r]||(e[r]=n(r));return(r,i)=>{const{regexp:s,keys:o}=t(r||""),a=s.exec(i);return a?[!0,o.reduce((f,d,h)=>(f[d.name]=a[h+1],f),{})]:[!1,null]}}const kM=n=>n.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),DO=(n,e,t)=>{let r=n?"((?:[^\\/]+?)(?:\\/(?:[^\\/]+?))*)":"([^\\/]+?)";return e&&t&&(r="(?:\\/"+r+")"),r+(e?"?":"")},kO=n=>{const e=/:([A-Za-z0-9_]+)([?+*]?)/g;let t=null,r=0,i=[],s="";for(;(t=e.exec(n))!==null;){const[o,a,l]=t,f=l==="+"||l==="*",d=l==="?"||l==="*",h=d&&n[t.index-1]==="/"?1:0,p=n.substring(r,t.index-h);i.push({name:a}),r=e.lastIndex,s+=kM(p)+DO(f,d,h)}return s+=kM(n.substring(r)),{keys:i,regexp:new RegExp("^"+s+"(?:\\/)?$","i")}},l_={hook:NO,matcher:IO(),base:""},gR=ie.createContext(l_),nv=()=>ie.useContext(gR),rv=n=>n.hook(n),PS=()=>rv(nv()),vR=n=>{const e=nv(),[t]=rv(e);return e.matcher(n,t)},yR=({hook:n,matcher:e,ssrPath:t,base:r="",parent:i,children:s})=>{const o=(l,f=i||l_)=>(l.hook=n||f.hook,l.matcher=e||f.matcher,l.ssrPath=t||f.ssrPath,l.ownBase=r,l.parent=i,l),[a]=ie.useState(()=>o({get base(){return(a.parent||l_).base+a.ownBase}}));return pR(()=>{o(a)}),ie.createElement(gR.Provider,{value:a,children:s})},Nt=({path:n,match:e,component:t,children:r})=>{const i=vR(n),[s,o]=e||i;return s?t?ie.createElement(t,{params:o}):typeof r=="function"?r(o):r:null},$r=ie.forwardRef((n,e)=>{const t=nv(),[,r]=rv(t),{to:i,href:s=i,children:o,onClick:a}=n,l=mR(h=>{h.ctrlKey||h.metaKey||h.altKey||h.shiftKey||h.button!==0||(a&&a(h),h.defaultPrevented||(h.preventDefault(),r(i||s,n)))}),f={href:s[0]==="~"?s.slice(1):t.base+s,onClick:l,to:null,ref:e},d=ie.isValidElement(o)?o:ie.createElement("a",n);return ie.cloneElement(d,f)}),c_=n=>Array.isArray(n)?[].concat(...n.map(e=>e&&e.type===ie.Fragment?c_(e.props.children):c_(e))):[n],OO=({children:n,location:e})=>{const t=nv(),r=t.matcher,[i]=rv(t);for(const s of c_(n)){let o=0;if(ie.isValidElement(s)&&(o=s.props.path?r(s.props.path,e||i):[!0,{}])[0])return ie.cloneElement(s,{match:o})}return null};function $O(){const[n]=PS();return ie.useEffect(()=>{window.scrollTo(0,0)},[n]),null}function UO(){return L.jsxs("div",{className:"home-container",children:[L.jsx("h1",{className:"home-text",role:"heading","aria-level":"1",children:"Hi, I'm Andrew."}),L.jsxs("h2",{className:"home-text",role:"heading","aria-level":"2",children:["I'm a computational designer ",L.jsx("br",{})," and part-time developer."]}),L.jsx("p",{className:"home-text",children:"My passion is empowering architects and designers to accomplish more with less by integrating technology and computational thinking into the way we work."})]})}var og={},FO={get exports(){return og},set exports(n){og=n}};const zO={0:65533,128:8364,130:8218,131:402,132:8222,133:8230,134:8224,135:8225,136:710,137:8240,138:352,139:8249,140:338,142:381,145:8216,146:8217,147:8220,148:8221,149:8226,150:8211,151:8212,152:732,153:8482,154:353,155:8250,156:339,158:382,159:376};var OM=zO,BO=HO;function HO(n){if(n>=55296&&n<=57343||n>1114111)return"�";n in OM&&(n=OM[n]);var e="";return n>65535&&(n-=65536,e+=String.fromCharCode(n>>>10&1023|55296),n=56320|n&1023),e+=String.fromCharCode(n),e}const VO="Á",GO="á",qO="Ă",WO="ă",jO="∾",XO="∿",YO="∾̳",ZO="Â",KO="â",JO="´",QO="А",e$="а",t$="Æ",n$="æ",r$="⁡",i$="𝔄",s$="𝔞",o$="À",a$="à",l$="ℵ",c$="ℵ",u$="Α",f$="α",d$="Ā",h$="ā",p$="⨿",m$="&",g$="&",v$="⩕",y$="⩓",_$="∧",x$="⩜",S$="⩘",w$="⩚",b$="∠",E$="⦤",M$="∠",T$="⦨",A$="⦩",C$="⦪",R$="⦫",P$="⦬",L$="⦭",N$="⦮",I$="⦯",D$="∡",k$="∟",O$="⊾",$$="⦝",U$="∢",F$="Å",z$="⍼",B$="Ą",H$="ą",V$="𝔸",G$="𝕒",q$="⩯",W$="≈",j$="⩰",X$="≊",Y$="≋",Z$="'",K$="⁡",J$="≈",Q$="≊",eU="Å",tU="å",nU="𝒜",rU="𝒶",iU="≔",sU="*",oU="≈",aU="≍",lU="Ã",cU="ã",uU="Ä",fU="ä",dU="∳",hU="⨑",pU="≌",mU="϶",gU="‵",vU="∽",yU="⋍",_U="∖",xU="⫧",SU="⊽",wU="⌅",bU="⌆",EU="⌅",MU="⎵",TU="⎶",AU="≌",CU="Б",RU="б",PU="„",LU="∵",NU="∵",IU="∵",DU="⦰",kU="϶",OU="ℬ",$U="ℬ",UU="Β",FU="β",zU="ℶ",BU="≬",HU="𝔅",VU="𝔟",GU="⋂",qU="◯",WU="⋃",jU="⨀",XU="⨁",YU="⨂",ZU="⨆",KU="★",JU="▽",QU="△",eF="⨄",tF="⋁",nF="⋀",rF="⤍",iF="⧫",sF="▪",oF="▴",aF="▾",lF="◂",cF="▸",uF="␣",fF="▒",dF="░",hF="▓",pF="█",mF="=⃥",gF="≡⃥",vF="⫭",yF="⌐",_F="𝔹",xF="𝕓",SF="⊥",wF="⊥",bF="⋈",EF="⧉",MF="┐",TF="╕",AF="╖",CF="╗",RF="┌",PF="╒",LF="╓",NF="╔",IF="─",DF="═",kF="┬",OF="╤",$F="╥",UF="╦",FF="┴",zF="╧",BF="╨",HF="╩",VF="⊟",GF="⊞",qF="⊠",WF="┘",jF="╛",XF="╜",YF="╝",ZF="└",KF="╘",JF="╙",QF="╚",e4="│",t4="║",n4="┼",r4="╪",i4="╫",s4="╬",o4="┤",a4="╡",l4="╢",c4="╣",u4="├",f4="╞",d4="╟",h4="╠",p4="‵",m4="˘",g4="˘",v4="¦",y4="𝒷",_4="ℬ",x4="⁏",S4="∽",w4="⋍",b4="⧅",E4="\\",M4="⟈",T4="•",A4="•",C4="≎",R4="⪮",P4="≏",L4="≎",N4="≏",I4="Ć",D4="ć",k4="⩄",O4="⩉",$4="⩋",U4="∩",F4="⋒",z4="⩇",B4="⩀",H4="ⅅ",V4="∩︀",G4="⁁",q4="ˇ",W4="ℭ",j4="⩍",X4="Č",Y4="č",Z4="Ç",K4="ç",J4="Ĉ",Q4="ĉ",ez="∰",tz="⩌",nz="⩐",rz="Ċ",iz="ċ",sz="¸",oz="¸",az="⦲",lz="¢",cz="·",uz="·",fz="𝔠",dz="ℭ",hz="Ч",pz="ч",mz="✓",gz="✓",vz="Χ",yz="χ",_z="ˆ",xz="≗",Sz="↺",wz="↻",bz="⊛",Ez="⊚",Mz="⊝",Tz="⊙",Az="®",Cz="Ⓢ",Rz="⊖",Pz="⊕",Lz="⊗",Nz="○",Iz="⧃",Dz="≗",kz="⨐",Oz="⫯",$z="⧂",Uz="∲",Fz="”",zz="’",Bz="♣",Hz="♣",Vz=":",Gz="∷",qz="⩴",Wz="≔",jz="≔",Xz=",",Yz="@",Zz="∁",Kz="∘",Jz="∁",Qz="ℂ",eB="≅",tB="⩭",nB="≡",rB="∮",iB="∯",sB="∮",oB="𝕔",aB="ℂ",lB="∐",cB="∐",uB="©",fB="©",dB="℗",hB="∳",pB="↵",mB="✗",gB="⨯",vB="𝒞",yB="𝒸",_B="⫏",xB="⫑",SB="⫐",wB="⫒",bB="⋯",EB="⤸",MB="⤵",TB="⋞",AB="⋟",CB="↶",RB="⤽",PB="⩈",LB="⩆",NB="≍",IB="∪",DB="⋓",kB="⩊",OB="⊍",$B="⩅",UB="∪︀",FB="↷",zB="⤼",BB="⋞",HB="⋟",VB="⋎",GB="⋏",qB="¤",WB="↶",jB="↷",XB="⋎",YB="⋏",ZB="∲",KB="∱",JB="⌭",QB="†",e5="‡",t5="ℸ",n5="↓",r5="↡",i5="⇓",s5="‐",o5="⫤",a5="⊣",l5="⤏",c5="˝",u5="Ď",f5="ď",d5="Д",h5="д",p5="‡",m5="⇊",g5="ⅅ",v5="ⅆ",y5="⤑",_5="⩷",x5="°",S5="∇",w5="Δ",b5="δ",E5="⦱",M5="⥿",T5="𝔇",A5="𝔡",C5="⥥",R5="⇃",P5="⇂",L5="´",N5="˙",I5="˝",D5="`",k5="˜",O5="⋄",$5="⋄",U5="⋄",F5="♦",z5="♦",B5="¨",H5="ⅆ",V5="ϝ",G5="⋲",q5="÷",W5="÷",j5="⋇",X5="⋇",Y5="Ђ",Z5="ђ",K5="⌞",J5="⌍",Q5="$",eH="𝔻",tH="𝕕",nH="¨",rH="˙",iH="⃜",sH="≐",oH="≑",aH="≐",lH="∸",cH="∔",uH="⊡",fH="⌆",dH="∯",hH="¨",pH="⇓",mH="⇐",gH="⇔",vH="⫤",yH="⟸",_H="⟺",xH="⟹",SH="⇒",wH="⊨",bH="⇑",EH="⇕",MH="∥",TH="⤓",AH="↓",CH="↓",RH="⇓",PH="⇵",LH="̑",NH="⇊",IH="⇃",DH="⇂",kH="⥐",OH="⥞",$H="⥖",UH="↽",FH="⥟",zH="⥗",BH="⇁",HH="↧",VH="⊤",GH="⤐",qH="⌟",WH="⌌",jH="𝒟",XH="𝒹",YH="Ѕ",ZH="ѕ",KH="⧶",JH="Đ",QH="đ",eV="⋱",tV="▿",nV="▾",rV="⇵",iV="⥯",sV="⦦",oV="Џ",aV="џ",lV="⟿",cV="É",uV="é",fV="⩮",dV="Ě",hV="ě",pV="Ê",mV="ê",gV="≖",vV="≕",yV="Э",_V="э",xV="⩷",SV="Ė",wV="ė",bV="≑",EV="ⅇ",MV="≒",TV="𝔈",AV="𝔢",CV="⪚",RV="È",PV="è",LV="⪖",NV="⪘",IV="⪙",DV="∈",kV="⏧",OV="ℓ",$V="⪕",UV="⪗",FV="Ē",zV="ē",BV="∅",HV="∅",VV="◻",GV="∅",qV="▫",WV=" ",jV=" ",XV=" ",YV="Ŋ",ZV="ŋ",KV=" ",JV="Ę",QV="ę",e8="𝔼",t8="𝕖",n8="⋕",r8="⧣",i8="⩱",s8="ε",o8="Ε",a8="ε",l8="ϵ",c8="≖",u8="≕",f8="≂",d8="⪖",h8="⪕",p8="⩵",m8="=",g8="≂",v8="≟",y8="⇌",_8="≡",x8="⩸",S8="⧥",w8="⥱",b8="≓",E8="ℯ",M8="ℰ",T8="≐",A8="⩳",C8="≂",R8="Η",P8="η",L8="Ð",N8="ð",I8="Ë",D8="ë",k8="€",O8="!",$8="∃",U8="∃",F8="ℰ",z8="ⅇ",B8="ⅇ",H8="≒",V8="Ф",G8="ф",q8="♀",W8="ﬃ",j8="ﬀ",X8="ﬄ",Y8="𝔉",Z8="𝔣",K8="ﬁ",J8="◼",Q8="▪",e6="fj",t6="♭",n6="ﬂ",r6="▱",i6="ƒ",s6="𝔽",o6="𝕗",a6="∀",l6="∀",c6="⋔",u6="⫙",f6="ℱ",d6="⨍",h6="½",p6="⅓",m6="¼",g6="⅕",v6="⅙",y6="⅛",_6="⅔",x6="⅖",S6="¾",w6="⅗",b6="⅜",E6="⅘",M6="⅚",T6="⅝",A6="⅞",C6="⁄",R6="⌢",P6="𝒻",L6="ℱ",N6="ǵ",I6="Γ",D6="γ",k6="Ϝ",O6="ϝ",$6="⪆",U6="Ğ",F6="ğ",z6="Ģ",B6="Ĝ",H6="ĝ",V6="Г",G6="г",q6="Ġ",W6="ġ",j6="≥",X6="≧",Y6="⪌",Z6="⋛",K6="≥",J6="≧",Q6="⩾",eG="⪩",tG="⩾",nG="⪀",rG="⪂",iG="⪄",sG="⋛︀",oG="⪔",aG="𝔊",lG="𝔤",cG="≫",uG="⋙",fG="⋙",dG="ℷ",hG="Ѓ",pG="ѓ",mG="⪥",gG="≷",vG="⪒",yG="⪤",_G="⪊",xG="⪊",SG="⪈",wG="≩",bG="⪈",EG="≩",MG="⋧",TG="𝔾",AG="𝕘",CG="`",RG="≥",PG="⋛",LG="≧",NG="⪢",IG="≷",DG="⩾",kG="≳",OG="𝒢",$G="ℊ",UG="≳",FG="⪎",zG="⪐",BG="⪧",HG="⩺",VG=">",GG=">",qG="≫",WG="⋗",jG="⦕",XG="⩼",YG="⪆",ZG="⥸",KG="⋗",JG="⋛",QG="⪌",eq="≷",tq="≳",nq="≩︀",rq="≩︀",iq="ˇ",sq=" ",oq="½",aq="ℋ",lq="Ъ",cq="ъ",uq="⥈",fq="↔",dq="⇔",hq="↭",pq="^",mq="ℏ",gq="Ĥ",vq="ĥ",yq="♥",_q="♥",xq="…",Sq="⊹",wq="𝔥",bq="ℌ",Eq="ℋ",Mq="⤥",Tq="⤦",Aq="⇿",Cq="∻",Rq="↩",Pq="↪",Lq="𝕙",Nq="ℍ",Iq="―",Dq="─",kq="𝒽",Oq="ℋ",$q="ℏ",Uq="Ħ",Fq="ħ",zq="≎",Bq="≏",Hq="⁃",Vq="‐",Gq="Í",qq="í",Wq="⁣",jq="Î",Xq="î",Yq="И",Zq="и",Kq="İ",Jq="Е",Qq="е",eW="¡",tW="⇔",nW="𝔦",rW="ℑ",iW="Ì",sW="ì",oW="ⅈ",aW="⨌",lW="∭",cW="⧜",uW="℩",fW="Ĳ",dW="ĳ",hW="Ī",pW="ī",mW="ℑ",gW="ⅈ",vW="ℐ",yW="ℑ",_W="ı",xW="ℑ",SW="⊷",wW="Ƶ",bW="⇒",EW="℅",MW="∞",TW="⧝",AW="ı",CW="⊺",RW="∫",PW="∬",LW="ℤ",NW="∫",IW="⊺",DW="⋂",kW="⨗",OW="⨼",$W="⁣",UW="⁢",FW="Ё",zW="ё",BW="Į",HW="į",VW="𝕀",GW="𝕚",qW="Ι",WW="ι",jW="⨼",XW="¿",YW="𝒾",ZW="ℐ",KW="∈",JW="⋵",QW="⋹",ej="⋴",tj="⋳",nj="∈",rj="⁢",ij="Ĩ",sj="ĩ",oj="І",aj="і",lj="Ï",cj="ï",uj="Ĵ",fj="ĵ",dj="Й",hj="й",pj="𝔍",mj="𝔧",gj="ȷ",vj="𝕁",yj="𝕛",_j="𝒥",xj="𝒿",Sj="Ј",wj="ј",bj="Є",Ej="є",Mj="Κ",Tj="κ",Aj="ϰ",Cj="Ķ",Rj="ķ",Pj="К",Lj="к",Nj="𝔎",Ij="𝔨",Dj="ĸ",kj="Х",Oj="х",$j="Ќ",Uj="ќ",Fj="𝕂",zj="𝕜",Bj="𝒦",Hj="𝓀",Vj="⇚",Gj="Ĺ",qj="ĺ",Wj="⦴",jj="ℒ",Xj="Λ",Yj="λ",Zj="⟨",Kj="⟪",Jj="⦑",Qj="⟨",e7="⪅",t7="ℒ",n7="«",r7="⇤",i7="⤟",s7="←",o7="↞",a7="⇐",l7="⤝",c7="↩",u7="↫",f7="⤹",d7="⥳",h7="↢",p7="⤙",m7="⤛",g7="⪫",v7="⪭",y7="⪭︀",_7="⤌",x7="⤎",S7="❲",w7="{",b7="[",E7="⦋",M7="⦏",T7="⦍",A7="Ľ",C7="ľ",R7="Ļ",P7="ļ",L7="⌈",N7="{",I7="Л",D7="л",k7="⤶",O7="“",$7="„",U7="⥧",F7="⥋",z7="↲",B7="≤",H7="≦",V7="⟨",G7="⇤",q7="←",W7="←",j7="⇐",X7="⇆",Y7="↢",Z7="⌈",K7="⟦",J7="⥡",Q7="⥙",e9="⇃",t9="⌊",n9="↽",r9="↼",i9="⇇",s9="↔",o9="↔",a9="⇔",l9="⇆",c9="⇋",u9="↭",f9="⥎",d9="↤",h9="⊣",p9="⥚",m9="⋋",g9="⧏",v9="⊲",y9="⊴",_9="⥑",x9="⥠",S9="⥘",w9="↿",b9="⥒",E9="↼",M9="⪋",T9="⋚",A9="≤",C9="≦",R9="⩽",P9="⪨",L9="⩽",N9="⩿",I9="⪁",D9="⪃",k9="⋚︀",O9="⪓",$9="⪅",U9="⋖",F9="⋚",z9="⪋",B9="⋚",H9="≦",V9="≶",G9="≶",q9="⪡",W9="≲",j9="⩽",X9="≲",Y9="⥼",Z9="⌊",K9="𝔏",J9="𝔩",Q9="≶",eX="⪑",tX="⥢",nX="↽",rX="↼",iX="⥪",sX="▄",oX="Љ",aX="љ",lX="⇇",cX="≪",uX="⋘",fX="⌞",dX="⇚",hX="⥫",pX="◺",mX="Ŀ",gX="ŀ",vX="⎰",yX="⎰",_X="⪉",xX="⪉",SX="⪇",wX="≨",bX="⪇",EX="≨",MX="⋦",TX="⟬",AX="⇽",CX="⟦",RX="⟵",PX="⟵",LX="⟸",NX="⟷",IX="⟷",DX="⟺",kX="⟼",OX="⟶",$X="⟶",UX="⟹",FX="↫",zX="↬",BX="⦅",HX="𝕃",VX="𝕝",GX="⨭",qX="⨴",WX="∗",jX="_",XX="↙",YX="↘",ZX="◊",KX="◊",JX="⧫",QX="(",eY="⦓",tY="⇆",nY="⌟",rY="⇋",iY="⥭",sY="‎",oY="⊿",aY="‹",lY="𝓁",cY="ℒ",uY="↰",fY="↰",dY="≲",hY="⪍",pY="⪏",mY="[",gY="‘",vY="‚",yY="Ł",_Y="ł",xY="⪦",SY="⩹",wY="<",bY="<",EY="≪",MY="⋖",TY="⋋",AY="⋉",CY="⥶",RY="⩻",PY="◃",LY="⊴",NY="◂",IY="⦖",DY="⥊",kY="⥦",OY="≨︀",$Y="≨︀",UY="¯",FY="♂",zY="✠",BY="✠",HY="↦",VY="↦",GY="↧",qY="↤",WY="↥",jY="▮",XY="⨩",YY="М",ZY="м",KY="—",JY="∺",QY="∡",eZ=" ",tZ="ℳ",nZ="𝔐",rZ="𝔪",iZ="℧",sZ="µ",oZ="*",aZ="⫰",lZ="∣",cZ="·",uZ="⊟",fZ="−",dZ="∸",hZ="⨪",pZ="∓",mZ="⫛",gZ="…",vZ="∓",yZ="⊧",_Z="𝕄",xZ="𝕞",SZ="∓",wZ="𝓂",bZ="ℳ",EZ="∾",MZ="Μ",TZ="μ",AZ="⊸",CZ="⊸",RZ="∇",PZ="Ń",LZ="ń",NZ="∠⃒",IZ="≉",DZ="⩰̸",kZ="≋̸",OZ="ŉ",$Z="≉",UZ="♮",FZ="ℕ",zZ="♮",BZ=" ",HZ="≎̸",VZ="≏̸",GZ="⩃",qZ="Ň",WZ="ň",jZ="Ņ",XZ="ņ",YZ="≇",ZZ="⩭̸",KZ="⩂",JZ="Н",QZ="н",eK="–",tK="⤤",nK="↗",rK="⇗",iK="↗",sK="≠",oK="≐̸",aK="​",lK="​",cK="​",uK="​",fK="≢",dK="⤨",hK="≂̸",pK="≫",mK="≪",gK=`
`,vK="∄",yK="∄",_K="𝔑",xK="𝔫",SK="≧̸",wK="≱",bK="≱",EK="≧̸",MK="⩾̸",TK="⩾̸",AK="⋙̸",CK="≵",RK="≫⃒",PK="≯",LK="≯",NK="≫̸",IK="↮",DK="⇎",kK="⫲",OK="∋",$K="⋼",UK="⋺",FK="∋",zK="Њ",BK="њ",HK="↚",VK="⇍",GK="‥",qK="≦̸",WK="≰",jK="↚",XK="⇍",YK="↮",ZK="⇎",KK="≰",JK="≦̸",QK="⩽̸",eJ="⩽̸",tJ="≮",nJ="⋘̸",rJ="≴",iJ="≪⃒",sJ="≮",oJ="⋪",aJ="⋬",lJ="≪̸",cJ="∤",uJ="⁠",fJ=" ",dJ="𝕟",hJ="ℕ",pJ="⫬",mJ="¬",gJ="≢",vJ="≭",yJ="∦",_J="∉",xJ="≠",SJ="≂̸",wJ="∄",bJ="≯",EJ="≱",MJ="≧̸",TJ="≫̸",AJ="≹",CJ="⩾̸",RJ="≵",PJ="≎̸",LJ="≏̸",NJ="∉",IJ="⋵̸",DJ="⋹̸",kJ="∉",OJ="⋷",$J="⋶",UJ="⧏̸",FJ="⋪",zJ="⋬",BJ="≮",HJ="≰",VJ="≸",GJ="≪̸",qJ="⩽̸",WJ="≴",jJ="⪢̸",XJ="⪡̸",YJ="∌",ZJ="∌",KJ="⋾",JJ="⋽",QJ="⊀",eQ="⪯̸",tQ="⋠",nQ="∌",rQ="⧐̸",iQ="⋫",sQ="⋭",oQ="⊏̸",aQ="⋢",lQ="⊐̸",cQ="⋣",uQ="⊂⃒",fQ="⊈",dQ="⊁",hQ="⪰̸",pQ="⋡",mQ="≿̸",gQ="⊃⃒",vQ="⊉",yQ="≁",_Q="≄",xQ="≇",SQ="≉",wQ="∤",bQ="∦",EQ="∦",MQ="⫽⃥",TQ="∂̸",AQ="⨔",CQ="⊀",RQ="⋠",PQ="⊀",LQ="⪯̸",NQ="⪯̸",IQ="⤳̸",DQ="↛",kQ="⇏",OQ="↝̸",$Q="↛",UQ="⇏",FQ="⋫",zQ="⋭",BQ="⊁",HQ="⋡",VQ="⪰̸",GQ="𝒩",qQ="𝓃",WQ="∤",jQ="∦",XQ="≁",YQ="≄",ZQ="≄",KQ="∤",JQ="∦",QQ="⋢",eee="⋣",tee="⊄",nee="⫅̸",ree="⊈",iee="⊂⃒",see="⊈",oee="⫅̸",aee="⊁",lee="⪰̸",cee="⊅",uee="⫆̸",fee="⊉",dee="⊃⃒",hee="⊉",pee="⫆̸",mee="≹",gee="Ñ",vee="ñ",yee="≸",_ee="⋪",xee="⋬",See="⋫",wee="⋭",bee="Ν",Eee="ν",Mee="#",Tee="№",Aee=" ",Cee="≍⃒",Ree="⊬",Pee="⊭",Lee="⊮",Nee="⊯",Iee="≥⃒",Dee=">⃒",kee="⤄",Oee="⧞",$ee="⤂",Uee="≤⃒",Fee="<⃒",zee="⊴⃒",Bee="⤃",Hee="⊵⃒",Vee="∼⃒",Gee="⤣",qee="↖",Wee="⇖",jee="↖",Xee="⤧",Yee="Ó",Zee="ó",Kee="⊛",Jee="Ô",Qee="ô",ete="⊚",tte="О",nte="о",rte="⊝",ite="Ő",ste="ő",ote="⨸",ate="⊙",lte="⦼",cte="Œ",ute="œ",fte="⦿",dte="𝔒",hte="𝔬",pte="˛",mte="Ò",gte="ò",vte="⧁",yte="⦵",_te="Ω",xte="∮",Ste="↺",wte="⦾",bte="⦻",Ete="‾",Mte="⧀",Tte="Ō",Ate="ō",Cte="Ω",Rte="ω",Pte="Ο",Lte="ο",Nte="⦶",Ite="⊖",Dte="𝕆",kte="𝕠",Ote="⦷",$te="“",Ute="‘",Fte="⦹",zte="⊕",Bte="↻",Hte="⩔",Vte="∨",Gte="⩝",qte="ℴ",Wte="ℴ",jte="ª",Xte="º",Yte="⊶",Zte="⩖",Kte="⩗",Jte="⩛",Qte="Ⓢ",ene="𝒪",tne="ℴ",nne="Ø",rne="ø",ine="⊘",sne="Õ",one="õ",ane="⨶",lne="⨷",cne="⊗",une="Ö",fne="ö",dne="⌽",hne="‾",pne="⏞",mne="⎴",gne="⏜",vne="¶",yne="∥",_ne="∥",xne="⫳",Sne="⫽",wne="∂",bne="∂",Ene="П",Mne="п",Tne="%",Ane=".",Cne="‰",Rne="⊥",Pne="‱",Lne="𝔓",Nne="𝔭",Ine="Φ",Dne="φ",kne="ϕ",One="ℳ",$ne="☎",Une="Π",Fne="π",zne="⋔",Bne="ϖ",Hne="ℏ",Vne="ℎ",Gne="ℏ",qne="⨣",Wne="⊞",jne="⨢",Xne="+",Yne="∔",Zne="⨥",Kne="⩲",Jne="±",Qne="±",ere="⨦",tre="⨧",nre="±",rre="ℌ",ire="⨕",sre="𝕡",ore="ℙ",are="£",lre="⪷",cre="⪻",ure="≺",fre="≼",dre="⪷",hre="≺",pre="≼",mre="≺",gre="⪯",vre="≼",yre="≾",_re="⪯",xre="⪹",Sre="⪵",wre="⋨",bre="⪯",Ere="⪳",Mre="≾",Tre="′",Are="″",Cre="ℙ",Rre="⪹",Pre="⪵",Lre="⋨",Nre="∏",Ire="∏",Dre="⌮",kre="⌒",Ore="⌓",$re="∝",Ure="∝",Fre="∷",zre="∝",Bre="≾",Hre="⊰",Vre="𝒫",Gre="𝓅",qre="Ψ",Wre="ψ",jre=" ",Xre="𝔔",Yre="𝔮",Zre="⨌",Kre="𝕢",Jre="ℚ",Qre="⁗",eie="𝒬",tie="𝓆",nie="ℍ",rie="⨖",iie="?",sie="≟",oie='"',aie='"',lie="⇛",cie="∽̱",uie="Ŕ",fie="ŕ",die="√",hie="⦳",pie="⟩",mie="⟫",gie="⦒",vie="⦥",yie="⟩",_ie="»",xie="⥵",Sie="⇥",wie="⤠",bie="⤳",Eie="→",Mie="↠",Tie="⇒",Aie="⤞",Cie="↪",Rie="↬",Pie="⥅",Lie="⥴",Nie="⤖",Iie="↣",Die="↝",kie="⤚",Oie="⤜",$ie="∶",Uie="ℚ",Fie="⤍",zie="⤏",Bie="⤐",Hie="❳",Vie="}",Gie="]",qie="⦌",Wie="⦎",jie="⦐",Xie="Ř",Yie="ř",Zie="Ŗ",Kie="ŗ",Jie="⌉",Qie="}",ese="Р",tse="р",nse="⤷",rse="⥩",ise="”",sse="”",ose="↳",ase="ℜ",lse="ℛ",cse="ℜ",use="ℝ",fse="ℜ",dse="▭",hse="®",pse="®",mse="∋",gse="⇋",vse="⥯",yse="⥽",_se="⌋",xse="𝔯",Sse="ℜ",wse="⥤",bse="⇁",Ese="⇀",Mse="⥬",Tse="Ρ",Ase="ρ",Cse="ϱ",Rse="⟩",Pse="⇥",Lse="→",Nse="→",Ise="⇒",Dse="⇄",kse="↣",Ose="⌉",$se="⟧",Use="⥝",Fse="⥕",zse="⇂",Bse="⌋",Hse="⇁",Vse="⇀",Gse="⇄",qse="⇌",Wse="⇉",jse="↝",Xse="↦",Yse="⊢",Zse="⥛",Kse="⋌",Jse="⧐",Qse="⊳",eoe="⊵",toe="⥏",noe="⥜",roe="⥔",ioe="↾",soe="⥓",ooe="⇀",aoe="˚",loe="≓",coe="⇄",uoe="⇌",foe="‏",doe="⎱",hoe="⎱",poe="⫮",moe="⟭",goe="⇾",voe="⟧",yoe="⦆",_oe="𝕣",xoe="ℝ",Soe="⨮",woe="⨵",boe="⥰",Eoe=")",Moe="⦔",Toe="⨒",Aoe="⇉",Coe="⇛",Roe="›",Poe="𝓇",Loe="ℛ",Noe="↱",Ioe="↱",Doe="]",koe="’",Ooe="’",$oe="⋌",Uoe="⋊",Foe="▹",zoe="⊵",Boe="▸",Hoe="⧎",Voe="⧴",Goe="⥨",qoe="℞",Woe="Ś",joe="ś",Xoe="‚",Yoe="⪸",Zoe="Š",Koe="š",Joe="⪼",Qoe="≻",eae="≽",tae="⪰",nae="⪴",rae="Ş",iae="ş",sae="Ŝ",oae="ŝ",aae="⪺",lae="⪶",cae="⋩",uae="⨓",fae="≿",dae="С",hae="с",pae="⊡",mae="⋅",gae="⩦",vae="⤥",yae="↘",_ae="⇘",xae="↘",Sae="§",wae=";",bae="⤩",Eae="∖",Mae="∖",Tae="✶",Aae="𝔖",Cae="𝔰",Rae="⌢",Pae="♯",Lae="Щ",Nae="щ",Iae="Ш",Dae="ш",kae="↓",Oae="←",$ae="∣",Uae="∥",Fae="→",zae="↑",Bae="­",Hae="Σ",Vae="σ",Gae="ς",qae="ς",Wae="∼",jae="⩪",Xae="≃",Yae="≃",Zae="⪞",Kae="⪠",Jae="⪝",Qae="⪟",ele="≆",tle="⨤",nle="⥲",rle="←",ile="∘",sle="∖",ole="⨳",ale="⧤",lle="∣",cle="⌣",ule="⪪",fle="⪬",dle="⪬︀",hle="Ь",ple="ь",mle="⌿",gle="⧄",vle="/",yle="𝕊",_le="𝕤",xle="♠",Sle="♠",wle="∥",ble="⊓",Ele="⊓︀",Mle="⊔",Tle="⊔︀",Ale="√",Cle="⊏",Rle="⊑",Ple="⊏",Lle="⊑",Nle="⊐",Ile="⊒",Dle="⊐",kle="⊒",Ole="□",$le="□",Ule="⊓",Fle="⊏",zle="⊑",Ble="⊐",Hle="⊒",Vle="⊔",Gle="▪",qle="□",Wle="▪",jle="→",Xle="𝒮",Yle="𝓈",Zle="∖",Kle="⌣",Jle="⋆",Qle="⋆",ece="☆",tce="★",nce="ϵ",rce="ϕ",ice="¯",sce="⊂",oce="⋐",ace="⪽",lce="⫅",cce="⊆",uce="⫃",fce="⫁",dce="⫋",hce="⊊",pce="⪿",mce="⥹",gce="⊂",vce="⋐",yce="⊆",_ce="⫅",xce="⊆",Sce="⊊",wce="⫋",bce="⫇",Ece="⫕",Mce="⫓",Tce="⪸",Ace="≻",Cce="≽",Rce="≻",Pce="⪰",Lce="≽",Nce="≿",Ice="⪰",Dce="⪺",kce="⪶",Oce="⋩",$ce="≿",Uce="∋",Fce="∑",zce="∑",Bce="♪",Hce="¹",Vce="²",Gce="³",qce="⊃",Wce="⋑",jce="⪾",Xce="⫘",Yce="⫆",Zce="⊇",Kce="⫄",Jce="⊃",Qce="⊇",eue="⟉",tue="⫗",nue="⥻",rue="⫂",iue="⫌",sue="⊋",oue="⫀",aue="⊃",lue="⋑",cue="⊇",uue="⫆",fue="⊋",due="⫌",hue="⫈",pue="⫔",mue="⫖",gue="⤦",vue="↙",yue="⇙",_ue="↙",xue="⤪",Sue="ß",wue="	",bue="⌖",Eue="Τ",Mue="τ",Tue="⎴",Aue="Ť",Cue="ť",Rue="Ţ",Pue="ţ",Lue="Т",Nue="т",Iue="⃛",Due="⌕",kue="𝔗",Oue="𝔱",$ue="∴",Uue="∴",Fue="∴",zue="Θ",Bue="θ",Hue="ϑ",Vue="ϑ",Gue="≈",que="∼",Wue="  ",jue=" ",Xue=" ",Yue="≈",Zue="∼",Kue="Þ",Jue="þ",Que="˜",efe="∼",tfe="≃",nfe="≅",rfe="≈",ife="⨱",sfe="⊠",ofe="×",afe="⨰",lfe="∭",cfe="⤨",ufe="⌶",ffe="⫱",dfe="⊤",hfe="𝕋",pfe="𝕥",mfe="⫚",gfe="⤩",vfe="‴",yfe="™",_fe="™",xfe="▵",Sfe="▿",wfe="◃",bfe="⊴",Efe="≜",Mfe="▹",Tfe="⊵",Afe="◬",Cfe="≜",Rfe="⨺",Pfe="⃛",Lfe="⨹",Nfe="⧍",Ife="⨻",Dfe="⏢",kfe="𝒯",Ofe="𝓉",$fe="Ц",Ufe="ц",Ffe="Ћ",zfe="ћ",Bfe="Ŧ",Hfe="ŧ",Vfe="≬",Gfe="↞",qfe="↠",Wfe="Ú",jfe="ú",Xfe="↑",Yfe="↟",Zfe="⇑",Kfe="⥉",Jfe="Ў",Qfe="ў",ede="Ŭ",tde="ŭ",nde="Û",rde="û",ide="У",sde="у",ode="⇅",ade="Ű",lde="ű",cde="⥮",ude="⥾",fde="𝔘",dde="𝔲",hde="Ù",pde="ù",mde="⥣",gde="↿",vde="↾",yde="▀",_de="⌜",xde="⌜",Sde="⌏",wde="◸",bde="Ū",Ede="ū",Mde="¨",Tde="_",Ade="⏟",Cde="⎵",Rde="⏝",Pde="⋃",Lde="⊎",Nde="Ų",Ide="ų",Dde="𝕌",kde="𝕦",Ode="⤒",$de="↑",Ude="↑",Fde="⇑",zde="⇅",Bde="↕",Hde="↕",Vde="⇕",Gde="⥮",qde="↿",Wde="↾",jde="⊎",Xde="↖",Yde="↗",Zde="υ",Kde="ϒ",Jde="ϒ",Qde="Υ",ehe="υ",the="↥",nhe="⊥",rhe="⇈",ihe="⌝",she="⌝",ohe="⌎",ahe="Ů",lhe="ů",che="◹",uhe="𝒰",fhe="𝓊",dhe="⋰",hhe="Ũ",phe="ũ",mhe="▵",ghe="▴",vhe="⇈",yhe="Ü",_he="ü",xhe="⦧",She="⦜",whe="ϵ",bhe="ϰ",Ehe="∅",Mhe="ϕ",The="ϖ",Ahe="∝",Che="↕",Rhe="⇕",Phe="ϱ",Lhe="ς",Nhe="⊊︀",Ihe="⫋︀",Dhe="⊋︀",khe="⫌︀",Ohe="ϑ",$he="⊲",Uhe="⊳",Fhe="⫨",zhe="⫫",Bhe="⫩",Hhe="В",Vhe="в",Ghe="⊢",qhe="⊨",Whe="⊩",jhe="⊫",Xhe="⫦",Yhe="⊻",Zhe="∨",Khe="⋁",Jhe="≚",Qhe="⋮",epe="|",tpe="‖",npe="|",rpe="‖",ipe="∣",spe="|",ope="❘",ape="≀",lpe=" ",cpe="𝔙",upe="𝔳",fpe="⊲",dpe="⊂⃒",hpe="⊃⃒",ppe="𝕍",mpe="𝕧",gpe="∝",vpe="⊳",ype="𝒱",_pe="𝓋",xpe="⫋︀",Spe="⊊︀",wpe="⫌︀",bpe="⊋︀",Epe="⊪",Mpe="⦚",Tpe="Ŵ",Ape="ŵ",Cpe="⩟",Rpe="∧",Ppe="⋀",Lpe="≙",Npe="℘",Ipe="𝔚",Dpe="𝔴",kpe="𝕎",Ope="𝕨",$pe="℘",Upe="≀",Fpe="≀",zpe="𝒲",Bpe="𝓌",Hpe="⋂",Vpe="◯",Gpe="⋃",qpe="▽",Wpe="𝔛",jpe="𝔵",Xpe="⟷",Ype="⟺",Zpe="Ξ",Kpe="ξ",Jpe="⟵",Qpe="⟸",eme="⟼",tme="⋻",nme="⨀",rme="𝕏",ime="𝕩",sme="⨁",ome="⨂",ame="⟶",lme="⟹",cme="𝒳",ume="𝓍",fme="⨆",dme="⨄",hme="△",pme="⋁",mme="⋀",gme="Ý",vme="ý",yme="Я",_me="я",xme="Ŷ",Sme="ŷ",wme="Ы",bme="ы",Eme="¥",Mme="𝔜",Tme="𝔶",Ame="Ї",Cme="ї",Rme="𝕐",Pme="𝕪",Lme="𝒴",Nme="𝓎",Ime="Ю",Dme="ю",kme="ÿ",Ome="Ÿ",$me="Ź",Ume="ź",Fme="Ž",zme="ž",Bme="З",Hme="з",Vme="Ż",Gme="ż",qme="ℨ",Wme="​",jme="Ζ",Xme="ζ",Yme="𝔷",Zme="ℨ",Kme="Ж",Jme="ж",Qme="⇝",ege="𝕫",tge="ℤ",nge="𝒵",rge="𝓏",ige="‍",sge="‌",oge={Aacute:VO,aacute:GO,Abreve:qO,abreve:WO,ac:jO,acd:XO,acE:YO,Acirc:ZO,acirc:KO,acute:JO,Acy:QO,acy:e$,AElig:t$,aelig:n$,af:r$,Afr:i$,afr:s$,Agrave:o$,agrave:a$,alefsym:l$,aleph:c$,Alpha:u$,alpha:f$,Amacr:d$,amacr:h$,amalg:p$,amp:m$,AMP:g$,andand:v$,And:y$,and:_$,andd:x$,andslope:S$,andv:w$,ang:b$,ange:E$,angle:M$,angmsdaa:T$,angmsdab:A$,angmsdac:C$,angmsdad:R$,angmsdae:P$,angmsdaf:L$,angmsdag:N$,angmsdah:I$,angmsd:D$,angrt:k$,angrtvb:O$,angrtvbd:$$,angsph:U$,angst:F$,angzarr:z$,Aogon:B$,aogon:H$,Aopf:V$,aopf:G$,apacir:q$,ap:W$,apE:j$,ape:X$,apid:Y$,apos:Z$,ApplyFunction:K$,approx:J$,approxeq:Q$,Aring:eU,aring:tU,Ascr:nU,ascr:rU,Assign:iU,ast:sU,asymp:oU,asympeq:aU,Atilde:lU,atilde:cU,Auml:uU,auml:fU,awconint:dU,awint:hU,backcong:pU,backepsilon:mU,backprime:gU,backsim:vU,backsimeq:yU,Backslash:_U,Barv:xU,barvee:SU,barwed:wU,Barwed:bU,barwedge:EU,bbrk:MU,bbrktbrk:TU,bcong:AU,Bcy:CU,bcy:RU,bdquo:PU,becaus:LU,because:NU,Because:IU,bemptyv:DU,bepsi:kU,bernou:OU,Bernoullis:$U,Beta:UU,beta:FU,beth:zU,between:BU,Bfr:HU,bfr:VU,bigcap:GU,bigcirc:qU,bigcup:WU,bigodot:jU,bigoplus:XU,bigotimes:YU,bigsqcup:ZU,bigstar:KU,bigtriangledown:JU,bigtriangleup:QU,biguplus:eF,bigvee:tF,bigwedge:nF,bkarow:rF,blacklozenge:iF,blacksquare:sF,blacktriangle:oF,blacktriangledown:aF,blacktriangleleft:lF,blacktriangleright:cF,blank:uF,blk12:fF,blk14:dF,blk34:hF,block:pF,bne:mF,bnequiv:gF,bNot:vF,bnot:yF,Bopf:_F,bopf:xF,bot:SF,bottom:wF,bowtie:bF,boxbox:EF,boxdl:MF,boxdL:TF,boxDl:AF,boxDL:CF,boxdr:RF,boxdR:PF,boxDr:LF,boxDR:NF,boxh:IF,boxH:DF,boxhd:kF,boxHd:OF,boxhD:$F,boxHD:UF,boxhu:FF,boxHu:zF,boxhU:BF,boxHU:HF,boxminus:VF,boxplus:GF,boxtimes:qF,boxul:WF,boxuL:jF,boxUl:XF,boxUL:YF,boxur:ZF,boxuR:KF,boxUr:JF,boxUR:QF,boxv:e4,boxV:t4,boxvh:n4,boxvH:r4,boxVh:i4,boxVH:s4,boxvl:o4,boxvL:a4,boxVl:l4,boxVL:c4,boxvr:u4,boxvR:f4,boxVr:d4,boxVR:h4,bprime:p4,breve:m4,Breve:g4,brvbar:v4,bscr:y4,Bscr:_4,bsemi:x4,bsim:S4,bsime:w4,bsolb:b4,bsol:E4,bsolhsub:M4,bull:T4,bullet:A4,bump:C4,bumpE:R4,bumpe:P4,Bumpeq:L4,bumpeq:N4,Cacute:I4,cacute:D4,capand:k4,capbrcup:O4,capcap:$4,cap:U4,Cap:F4,capcup:z4,capdot:B4,CapitalDifferentialD:H4,caps:V4,caret:G4,caron:q4,Cayleys:W4,ccaps:j4,Ccaron:X4,ccaron:Y4,Ccedil:Z4,ccedil:K4,Ccirc:J4,ccirc:Q4,Cconint:ez,ccups:tz,ccupssm:nz,Cdot:rz,cdot:iz,cedil:sz,Cedilla:oz,cemptyv:az,cent:lz,centerdot:cz,CenterDot:uz,cfr:fz,Cfr:dz,CHcy:hz,chcy:pz,check:mz,checkmark:gz,Chi:vz,chi:yz,circ:_z,circeq:xz,circlearrowleft:Sz,circlearrowright:wz,circledast:bz,circledcirc:Ez,circleddash:Mz,CircleDot:Tz,circledR:Az,circledS:Cz,CircleMinus:Rz,CirclePlus:Pz,CircleTimes:Lz,cir:Nz,cirE:Iz,cire:Dz,cirfnint:kz,cirmid:Oz,cirscir:$z,ClockwiseContourIntegral:Uz,CloseCurlyDoubleQuote:Fz,CloseCurlyQuote:zz,clubs:Bz,clubsuit:Hz,colon:Vz,Colon:Gz,Colone:qz,colone:Wz,coloneq:jz,comma:Xz,commat:Yz,comp:Zz,compfn:Kz,complement:Jz,complexes:Qz,cong:eB,congdot:tB,Congruent:nB,conint:rB,Conint:iB,ContourIntegral:sB,copf:oB,Copf:aB,coprod:lB,Coproduct:cB,copy:uB,COPY:fB,copysr:dB,CounterClockwiseContourIntegral:hB,crarr:pB,cross:mB,Cross:gB,Cscr:vB,cscr:yB,csub:_B,csube:xB,csup:SB,csupe:wB,ctdot:bB,cudarrl:EB,cudarrr:MB,cuepr:TB,cuesc:AB,cularr:CB,cularrp:RB,cupbrcap:PB,cupcap:LB,CupCap:NB,cup:IB,Cup:DB,cupcup:kB,cupdot:OB,cupor:$B,cups:UB,curarr:FB,curarrm:zB,curlyeqprec:BB,curlyeqsucc:HB,curlyvee:VB,curlywedge:GB,curren:qB,curvearrowleft:WB,curvearrowright:jB,cuvee:XB,cuwed:YB,cwconint:ZB,cwint:KB,cylcty:JB,dagger:QB,Dagger:e5,daleth:t5,darr:n5,Darr:r5,dArr:i5,dash:s5,Dashv:o5,dashv:a5,dbkarow:l5,dblac:c5,Dcaron:u5,dcaron:f5,Dcy:d5,dcy:h5,ddagger:p5,ddarr:m5,DD:g5,dd:v5,DDotrahd:y5,ddotseq:_5,deg:x5,Del:S5,Delta:w5,delta:b5,demptyv:E5,dfisht:M5,Dfr:T5,dfr:A5,dHar:C5,dharl:R5,dharr:P5,DiacriticalAcute:L5,DiacriticalDot:N5,DiacriticalDoubleAcute:I5,DiacriticalGrave:D5,DiacriticalTilde:k5,diam:O5,diamond:$5,Diamond:U5,diamondsuit:F5,diams:z5,die:B5,DifferentialD:H5,digamma:V5,disin:G5,div:q5,divide:W5,divideontimes:j5,divonx:X5,DJcy:Y5,djcy:Z5,dlcorn:K5,dlcrop:J5,dollar:Q5,Dopf:eH,dopf:tH,Dot:nH,dot:rH,DotDot:iH,doteq:sH,doteqdot:oH,DotEqual:aH,dotminus:lH,dotplus:cH,dotsquare:uH,doublebarwedge:fH,DoubleContourIntegral:dH,DoubleDot:hH,DoubleDownArrow:pH,DoubleLeftArrow:mH,DoubleLeftRightArrow:gH,DoubleLeftTee:vH,DoubleLongLeftArrow:yH,DoubleLongLeftRightArrow:_H,DoubleLongRightArrow:xH,DoubleRightArrow:SH,DoubleRightTee:wH,DoubleUpArrow:bH,DoubleUpDownArrow:EH,DoubleVerticalBar:MH,DownArrowBar:TH,downarrow:AH,DownArrow:CH,Downarrow:RH,DownArrowUpArrow:PH,DownBreve:LH,downdownarrows:NH,downharpoonleft:IH,downharpoonright:DH,DownLeftRightVector:kH,DownLeftTeeVector:OH,DownLeftVectorBar:$H,DownLeftVector:UH,DownRightTeeVector:FH,DownRightVectorBar:zH,DownRightVector:BH,DownTeeArrow:HH,DownTee:VH,drbkarow:GH,drcorn:qH,drcrop:WH,Dscr:jH,dscr:XH,DScy:YH,dscy:ZH,dsol:KH,Dstrok:JH,dstrok:QH,dtdot:eV,dtri:tV,dtrif:nV,duarr:rV,duhar:iV,dwangle:sV,DZcy:oV,dzcy:aV,dzigrarr:lV,Eacute:cV,eacute:uV,easter:fV,Ecaron:dV,ecaron:hV,Ecirc:pV,ecirc:mV,ecir:gV,ecolon:vV,Ecy:yV,ecy:_V,eDDot:xV,Edot:SV,edot:wV,eDot:bV,ee:EV,efDot:MV,Efr:TV,efr:AV,eg:CV,Egrave:RV,egrave:PV,egs:LV,egsdot:NV,el:IV,Element:DV,elinters:kV,ell:OV,els:$V,elsdot:UV,Emacr:FV,emacr:zV,empty:BV,emptyset:HV,EmptySmallSquare:VV,emptyv:GV,EmptyVerySmallSquare:qV,emsp13:WV,emsp14:jV,emsp:XV,ENG:YV,eng:ZV,ensp:KV,Eogon:JV,eogon:QV,Eopf:e8,eopf:t8,epar:n8,eparsl:r8,eplus:i8,epsi:s8,Epsilon:o8,epsilon:a8,epsiv:l8,eqcirc:c8,eqcolon:u8,eqsim:f8,eqslantgtr:d8,eqslantless:h8,Equal:p8,equals:m8,EqualTilde:g8,equest:v8,Equilibrium:y8,equiv:_8,equivDD:x8,eqvparsl:S8,erarr:w8,erDot:b8,escr:E8,Escr:M8,esdot:T8,Esim:A8,esim:C8,Eta:R8,eta:P8,ETH:L8,eth:N8,Euml:I8,euml:D8,euro:k8,excl:O8,exist:$8,Exists:U8,expectation:F8,exponentiale:z8,ExponentialE:B8,fallingdotseq:H8,Fcy:V8,fcy:G8,female:q8,ffilig:W8,fflig:j8,ffllig:X8,Ffr:Y8,ffr:Z8,filig:K8,FilledSmallSquare:J8,FilledVerySmallSquare:Q8,fjlig:e6,flat:t6,fllig:n6,fltns:r6,fnof:i6,Fopf:s6,fopf:o6,forall:a6,ForAll:l6,fork:c6,forkv:u6,Fouriertrf:f6,fpartint:d6,frac12:h6,frac13:p6,frac14:m6,frac15:g6,frac16:v6,frac18:y6,frac23:_6,frac25:x6,frac34:S6,frac35:w6,frac38:b6,frac45:E6,frac56:M6,frac58:T6,frac78:A6,frasl:C6,frown:R6,fscr:P6,Fscr:L6,gacute:N6,Gamma:I6,gamma:D6,Gammad:k6,gammad:O6,gap:$6,Gbreve:U6,gbreve:F6,Gcedil:z6,Gcirc:B6,gcirc:H6,Gcy:V6,gcy:G6,Gdot:q6,gdot:W6,ge:j6,gE:X6,gEl:Y6,gel:Z6,geq:K6,geqq:J6,geqslant:Q6,gescc:eG,ges:tG,gesdot:nG,gesdoto:rG,gesdotol:iG,gesl:sG,gesles:oG,Gfr:aG,gfr:lG,gg:cG,Gg:uG,ggg:fG,gimel:dG,GJcy:hG,gjcy:pG,gla:mG,gl:gG,glE:vG,glj:yG,gnap:_G,gnapprox:xG,gne:SG,gnE:wG,gneq:bG,gneqq:EG,gnsim:MG,Gopf:TG,gopf:AG,grave:CG,GreaterEqual:RG,GreaterEqualLess:PG,GreaterFullEqual:LG,GreaterGreater:NG,GreaterLess:IG,GreaterSlantEqual:DG,GreaterTilde:kG,Gscr:OG,gscr:$G,gsim:UG,gsime:FG,gsiml:zG,gtcc:BG,gtcir:HG,gt:VG,GT:GG,Gt:qG,gtdot:WG,gtlPar:jG,gtquest:XG,gtrapprox:YG,gtrarr:ZG,gtrdot:KG,gtreqless:JG,gtreqqless:QG,gtrless:eq,gtrsim:tq,gvertneqq:nq,gvnE:rq,Hacek:iq,hairsp:sq,half:oq,hamilt:aq,HARDcy:lq,hardcy:cq,harrcir:uq,harr:fq,hArr:dq,harrw:hq,Hat:pq,hbar:mq,Hcirc:gq,hcirc:vq,hearts:yq,heartsuit:_q,hellip:xq,hercon:Sq,hfr:wq,Hfr:bq,HilbertSpace:Eq,hksearow:Mq,hkswarow:Tq,hoarr:Aq,homtht:Cq,hookleftarrow:Rq,hookrightarrow:Pq,hopf:Lq,Hopf:Nq,horbar:Iq,HorizontalLine:Dq,hscr:kq,Hscr:Oq,hslash:$q,Hstrok:Uq,hstrok:Fq,HumpDownHump:zq,HumpEqual:Bq,hybull:Hq,hyphen:Vq,Iacute:Gq,iacute:qq,ic:Wq,Icirc:jq,icirc:Xq,Icy:Yq,icy:Zq,Idot:Kq,IEcy:Jq,iecy:Qq,iexcl:eW,iff:tW,ifr:nW,Ifr:rW,Igrave:iW,igrave:sW,ii:oW,iiiint:aW,iiint:lW,iinfin:cW,iiota:uW,IJlig:fW,ijlig:dW,Imacr:hW,imacr:pW,image:mW,ImaginaryI:gW,imagline:vW,imagpart:yW,imath:_W,Im:xW,imof:SW,imped:wW,Implies:bW,incare:EW,in:"∈",infin:MW,infintie:TW,inodot:AW,intcal:CW,int:RW,Int:PW,integers:LW,Integral:NW,intercal:IW,Intersection:DW,intlarhk:kW,intprod:OW,InvisibleComma:$W,InvisibleTimes:UW,IOcy:FW,iocy:zW,Iogon:BW,iogon:HW,Iopf:VW,iopf:GW,Iota:qW,iota:WW,iprod:jW,iquest:XW,iscr:YW,Iscr:ZW,isin:KW,isindot:JW,isinE:QW,isins:ej,isinsv:tj,isinv:nj,it:rj,Itilde:ij,itilde:sj,Iukcy:oj,iukcy:aj,Iuml:lj,iuml:cj,Jcirc:uj,jcirc:fj,Jcy:dj,jcy:hj,Jfr:pj,jfr:mj,jmath:gj,Jopf:vj,jopf:yj,Jscr:_j,jscr:xj,Jsercy:Sj,jsercy:wj,Jukcy:bj,jukcy:Ej,Kappa:Mj,kappa:Tj,kappav:Aj,Kcedil:Cj,kcedil:Rj,Kcy:Pj,kcy:Lj,Kfr:Nj,kfr:Ij,kgreen:Dj,KHcy:kj,khcy:Oj,KJcy:$j,kjcy:Uj,Kopf:Fj,kopf:zj,Kscr:Bj,kscr:Hj,lAarr:Vj,Lacute:Gj,lacute:qj,laemptyv:Wj,lagran:jj,Lambda:Xj,lambda:Yj,lang:Zj,Lang:Kj,langd:Jj,langle:Qj,lap:e7,Laplacetrf:t7,laquo:n7,larrb:r7,larrbfs:i7,larr:s7,Larr:o7,lArr:a7,larrfs:l7,larrhk:c7,larrlp:u7,larrpl:f7,larrsim:d7,larrtl:h7,latail:p7,lAtail:m7,lat:g7,late:v7,lates:y7,lbarr:_7,lBarr:x7,lbbrk:S7,lbrace:w7,lbrack:b7,lbrke:E7,lbrksld:M7,lbrkslu:T7,Lcaron:A7,lcaron:C7,Lcedil:R7,lcedil:P7,lceil:L7,lcub:N7,Lcy:I7,lcy:D7,ldca:k7,ldquo:O7,ldquor:$7,ldrdhar:U7,ldrushar:F7,ldsh:z7,le:B7,lE:H7,LeftAngleBracket:V7,LeftArrowBar:G7,leftarrow:q7,LeftArrow:W7,Leftarrow:j7,LeftArrowRightArrow:X7,leftarrowtail:Y7,LeftCeiling:Z7,LeftDoubleBracket:K7,LeftDownTeeVector:J7,LeftDownVectorBar:Q7,LeftDownVector:e9,LeftFloor:t9,leftharpoondown:n9,leftharpoonup:r9,leftleftarrows:i9,leftrightarrow:s9,LeftRightArrow:o9,Leftrightarrow:a9,leftrightarrows:l9,leftrightharpoons:c9,leftrightsquigarrow:u9,LeftRightVector:f9,LeftTeeArrow:d9,LeftTee:h9,LeftTeeVector:p9,leftthreetimes:m9,LeftTriangleBar:g9,LeftTriangle:v9,LeftTriangleEqual:y9,LeftUpDownVector:_9,LeftUpTeeVector:x9,LeftUpVectorBar:S9,LeftUpVector:w9,LeftVectorBar:b9,LeftVector:E9,lEg:M9,leg:T9,leq:A9,leqq:C9,leqslant:R9,lescc:P9,les:L9,lesdot:N9,lesdoto:I9,lesdotor:D9,lesg:k9,lesges:O9,lessapprox:$9,lessdot:U9,lesseqgtr:F9,lesseqqgtr:z9,LessEqualGreater:B9,LessFullEqual:H9,LessGreater:V9,lessgtr:G9,LessLess:q9,lesssim:W9,LessSlantEqual:j9,LessTilde:X9,lfisht:Y9,lfloor:Z9,Lfr:K9,lfr:J9,lg:Q9,lgE:eX,lHar:tX,lhard:nX,lharu:rX,lharul:iX,lhblk:sX,LJcy:oX,ljcy:aX,llarr:lX,ll:cX,Ll:uX,llcorner:fX,Lleftarrow:dX,llhard:hX,lltri:pX,Lmidot:mX,lmidot:gX,lmoustache:vX,lmoust:yX,lnap:_X,lnapprox:xX,lne:SX,lnE:wX,lneq:bX,lneqq:EX,lnsim:MX,loang:TX,loarr:AX,lobrk:CX,longleftarrow:RX,LongLeftArrow:PX,Longleftarrow:LX,longleftrightarrow:NX,LongLeftRightArrow:IX,Longleftrightarrow:DX,longmapsto:kX,longrightarrow:OX,LongRightArrow:$X,Longrightarrow:UX,looparrowleft:FX,looparrowright:zX,lopar:BX,Lopf:HX,lopf:VX,loplus:GX,lotimes:qX,lowast:WX,lowbar:jX,LowerLeftArrow:XX,LowerRightArrow:YX,loz:ZX,lozenge:KX,lozf:JX,lpar:QX,lparlt:eY,lrarr:tY,lrcorner:nY,lrhar:rY,lrhard:iY,lrm:sY,lrtri:oY,lsaquo:aY,lscr:lY,Lscr:cY,lsh:uY,Lsh:fY,lsim:dY,lsime:hY,lsimg:pY,lsqb:mY,lsquo:gY,lsquor:vY,Lstrok:yY,lstrok:_Y,ltcc:xY,ltcir:SY,lt:wY,LT:bY,Lt:EY,ltdot:MY,lthree:TY,ltimes:AY,ltlarr:CY,ltquest:RY,ltri:PY,ltrie:LY,ltrif:NY,ltrPar:IY,lurdshar:DY,luruhar:kY,lvertneqq:OY,lvnE:$Y,macr:UY,male:FY,malt:zY,maltese:BY,Map:"⤅",map:HY,mapsto:VY,mapstodown:GY,mapstoleft:qY,mapstoup:WY,marker:jY,mcomma:XY,Mcy:YY,mcy:ZY,mdash:KY,mDDot:JY,measuredangle:QY,MediumSpace:eZ,Mellintrf:tZ,Mfr:nZ,mfr:rZ,mho:iZ,micro:sZ,midast:oZ,midcir:aZ,mid:lZ,middot:cZ,minusb:uZ,minus:fZ,minusd:dZ,minusdu:hZ,MinusPlus:pZ,mlcp:mZ,mldr:gZ,mnplus:vZ,models:yZ,Mopf:_Z,mopf:xZ,mp:SZ,mscr:wZ,Mscr:bZ,mstpos:EZ,Mu:MZ,mu:TZ,multimap:AZ,mumap:CZ,nabla:RZ,Nacute:PZ,nacute:LZ,nang:NZ,nap:IZ,napE:DZ,napid:kZ,napos:OZ,napprox:$Z,natural:UZ,naturals:FZ,natur:zZ,nbsp:BZ,nbump:HZ,nbumpe:VZ,ncap:GZ,Ncaron:qZ,ncaron:WZ,Ncedil:jZ,ncedil:XZ,ncong:YZ,ncongdot:ZZ,ncup:KZ,Ncy:JZ,ncy:QZ,ndash:eK,nearhk:tK,nearr:nK,neArr:rK,nearrow:iK,ne:sK,nedot:oK,NegativeMediumSpace:aK,NegativeThickSpace:lK,NegativeThinSpace:cK,NegativeVeryThinSpace:uK,nequiv:fK,nesear:dK,nesim:hK,NestedGreaterGreater:pK,NestedLessLess:mK,NewLine:gK,nexist:vK,nexists:yK,Nfr:_K,nfr:xK,ngE:SK,nge:wK,ngeq:bK,ngeqq:EK,ngeqslant:MK,nges:TK,nGg:AK,ngsim:CK,nGt:RK,ngt:PK,ngtr:LK,nGtv:NK,nharr:IK,nhArr:DK,nhpar:kK,ni:OK,nis:$K,nisd:UK,niv:FK,NJcy:zK,njcy:BK,nlarr:HK,nlArr:VK,nldr:GK,nlE:qK,nle:WK,nleftarrow:jK,nLeftarrow:XK,nleftrightarrow:YK,nLeftrightarrow:ZK,nleq:KK,nleqq:JK,nleqslant:QK,nles:eJ,nless:tJ,nLl:nJ,nlsim:rJ,nLt:iJ,nlt:sJ,nltri:oJ,nltrie:aJ,nLtv:lJ,nmid:cJ,NoBreak:uJ,NonBreakingSpace:fJ,nopf:dJ,Nopf:hJ,Not:pJ,not:mJ,NotCongruent:gJ,NotCupCap:vJ,NotDoubleVerticalBar:yJ,NotElement:_J,NotEqual:xJ,NotEqualTilde:SJ,NotExists:wJ,NotGreater:bJ,NotGreaterEqual:EJ,NotGreaterFullEqual:MJ,NotGreaterGreater:TJ,NotGreaterLess:AJ,NotGreaterSlantEqual:CJ,NotGreaterTilde:RJ,NotHumpDownHump:PJ,NotHumpEqual:LJ,notin:NJ,notindot:IJ,notinE:DJ,notinva:kJ,notinvb:OJ,notinvc:$J,NotLeftTriangleBar:UJ,NotLeftTriangle:FJ,NotLeftTriangleEqual:zJ,NotLess:BJ,NotLessEqual:HJ,NotLessGreater:VJ,NotLessLess:GJ,NotLessSlantEqual:qJ,NotLessTilde:WJ,NotNestedGreaterGreater:jJ,NotNestedLessLess:XJ,notni:YJ,notniva:ZJ,notnivb:KJ,notnivc:JJ,NotPrecedes:QJ,NotPrecedesEqual:eQ,NotPrecedesSlantEqual:tQ,NotReverseElement:nQ,NotRightTriangleBar:rQ,NotRightTriangle:iQ,NotRightTriangleEqual:sQ,NotSquareSubset:oQ,NotSquareSubsetEqual:aQ,NotSquareSuperset:lQ,NotSquareSupersetEqual:cQ,NotSubset:uQ,NotSubsetEqual:fQ,NotSucceeds:dQ,NotSucceedsEqual:hQ,NotSucceedsSlantEqual:pQ,NotSucceedsTilde:mQ,NotSuperset:gQ,NotSupersetEqual:vQ,NotTilde:yQ,NotTildeEqual:_Q,NotTildeFullEqual:xQ,NotTildeTilde:SQ,NotVerticalBar:wQ,nparallel:bQ,npar:EQ,nparsl:MQ,npart:TQ,npolint:AQ,npr:CQ,nprcue:RQ,nprec:PQ,npreceq:LQ,npre:NQ,nrarrc:IQ,nrarr:DQ,nrArr:kQ,nrarrw:OQ,nrightarrow:$Q,nRightarrow:UQ,nrtri:FQ,nrtrie:zQ,nsc:BQ,nsccue:HQ,nsce:VQ,Nscr:GQ,nscr:qQ,nshortmid:WQ,nshortparallel:jQ,nsim:XQ,nsime:YQ,nsimeq:ZQ,nsmid:KQ,nspar:JQ,nsqsube:QQ,nsqsupe:eee,nsub:tee,nsubE:nee,nsube:ree,nsubset:iee,nsubseteq:see,nsubseteqq:oee,nsucc:aee,nsucceq:lee,nsup:cee,nsupE:uee,nsupe:fee,nsupset:dee,nsupseteq:hee,nsupseteqq:pee,ntgl:mee,Ntilde:gee,ntilde:vee,ntlg:yee,ntriangleleft:_ee,ntrianglelefteq:xee,ntriangleright:See,ntrianglerighteq:wee,Nu:bee,nu:Eee,num:Mee,numero:Tee,numsp:Aee,nvap:Cee,nvdash:Ree,nvDash:Pee,nVdash:Lee,nVDash:Nee,nvge:Iee,nvgt:Dee,nvHarr:kee,nvinfin:Oee,nvlArr:$ee,nvle:Uee,nvlt:Fee,nvltrie:zee,nvrArr:Bee,nvrtrie:Hee,nvsim:Vee,nwarhk:Gee,nwarr:qee,nwArr:Wee,nwarrow:jee,nwnear:Xee,Oacute:Yee,oacute:Zee,oast:Kee,Ocirc:Jee,ocirc:Qee,ocir:ete,Ocy:tte,ocy:nte,odash:rte,Odblac:ite,odblac:ste,odiv:ote,odot:ate,odsold:lte,OElig:cte,oelig:ute,ofcir:fte,Ofr:dte,ofr:hte,ogon:pte,Ograve:mte,ograve:gte,ogt:vte,ohbar:yte,ohm:_te,oint:xte,olarr:Ste,olcir:wte,olcross:bte,oline:Ete,olt:Mte,Omacr:Tte,omacr:Ate,Omega:Cte,omega:Rte,Omicron:Pte,omicron:Lte,omid:Nte,ominus:Ite,Oopf:Dte,oopf:kte,opar:Ote,OpenCurlyDoubleQuote:$te,OpenCurlyQuote:Ute,operp:Fte,oplus:zte,orarr:Bte,Or:Hte,or:Vte,ord:Gte,order:qte,orderof:Wte,ordf:jte,ordm:Xte,origof:Yte,oror:Zte,orslope:Kte,orv:Jte,oS:Qte,Oscr:ene,oscr:tne,Oslash:nne,oslash:rne,osol:ine,Otilde:sne,otilde:one,otimesas:ane,Otimes:lne,otimes:cne,Ouml:une,ouml:fne,ovbar:dne,OverBar:hne,OverBrace:pne,OverBracket:mne,OverParenthesis:gne,para:vne,parallel:yne,par:_ne,parsim:xne,parsl:Sne,part:wne,PartialD:bne,Pcy:Ene,pcy:Mne,percnt:Tne,period:Ane,permil:Cne,perp:Rne,pertenk:Pne,Pfr:Lne,pfr:Nne,Phi:Ine,phi:Dne,phiv:kne,phmmat:One,phone:$ne,Pi:Une,pi:Fne,pitchfork:zne,piv:Bne,planck:Hne,planckh:Vne,plankv:Gne,plusacir:qne,plusb:Wne,pluscir:jne,plus:Xne,plusdo:Yne,plusdu:Zne,pluse:Kne,PlusMinus:Jne,plusmn:Qne,plussim:ere,plustwo:tre,pm:nre,Poincareplane:rre,pointint:ire,popf:sre,Popf:ore,pound:are,prap:lre,Pr:cre,pr:ure,prcue:fre,precapprox:dre,prec:hre,preccurlyeq:pre,Precedes:mre,PrecedesEqual:gre,PrecedesSlantEqual:vre,PrecedesTilde:yre,preceq:_re,precnapprox:xre,precneqq:Sre,precnsim:wre,pre:bre,prE:Ere,precsim:Mre,prime:Tre,Prime:Are,primes:Cre,prnap:Rre,prnE:Pre,prnsim:Lre,prod:Nre,Product:Ire,profalar:Dre,profline:kre,profsurf:Ore,prop:$re,Proportional:Ure,Proportion:Fre,propto:zre,prsim:Bre,prurel:Hre,Pscr:Vre,pscr:Gre,Psi:qre,psi:Wre,puncsp:jre,Qfr:Xre,qfr:Yre,qint:Zre,qopf:Kre,Qopf:Jre,qprime:Qre,Qscr:eie,qscr:tie,quaternions:nie,quatint:rie,quest:iie,questeq:sie,quot:oie,QUOT:aie,rAarr:lie,race:cie,Racute:uie,racute:fie,radic:die,raemptyv:hie,rang:pie,Rang:mie,rangd:gie,range:vie,rangle:yie,raquo:_ie,rarrap:xie,rarrb:Sie,rarrbfs:wie,rarrc:bie,rarr:Eie,Rarr:Mie,rArr:Tie,rarrfs:Aie,rarrhk:Cie,rarrlp:Rie,rarrpl:Pie,rarrsim:Lie,Rarrtl:Nie,rarrtl:Iie,rarrw:Die,ratail:kie,rAtail:Oie,ratio:$ie,rationals:Uie,rbarr:Fie,rBarr:zie,RBarr:Bie,rbbrk:Hie,rbrace:Vie,rbrack:Gie,rbrke:qie,rbrksld:Wie,rbrkslu:jie,Rcaron:Xie,rcaron:Yie,Rcedil:Zie,rcedil:Kie,rceil:Jie,rcub:Qie,Rcy:ese,rcy:tse,rdca:nse,rdldhar:rse,rdquo:ise,rdquor:sse,rdsh:ose,real:ase,realine:lse,realpart:cse,reals:use,Re:fse,rect:dse,reg:hse,REG:pse,ReverseElement:mse,ReverseEquilibrium:gse,ReverseUpEquilibrium:vse,rfisht:yse,rfloor:_se,rfr:xse,Rfr:Sse,rHar:wse,rhard:bse,rharu:Ese,rharul:Mse,Rho:Tse,rho:Ase,rhov:Cse,RightAngleBracket:Rse,RightArrowBar:Pse,rightarrow:Lse,RightArrow:Nse,Rightarrow:Ise,RightArrowLeftArrow:Dse,rightarrowtail:kse,RightCeiling:Ose,RightDoubleBracket:$se,RightDownTeeVector:Use,RightDownVectorBar:Fse,RightDownVector:zse,RightFloor:Bse,rightharpoondown:Hse,rightharpoonup:Vse,rightleftarrows:Gse,rightleftharpoons:qse,rightrightarrows:Wse,rightsquigarrow:jse,RightTeeArrow:Xse,RightTee:Yse,RightTeeVector:Zse,rightthreetimes:Kse,RightTriangleBar:Jse,RightTriangle:Qse,RightTriangleEqual:eoe,RightUpDownVector:toe,RightUpTeeVector:noe,RightUpVectorBar:roe,RightUpVector:ioe,RightVectorBar:soe,RightVector:ooe,ring:aoe,risingdotseq:loe,rlarr:coe,rlhar:uoe,rlm:foe,rmoustache:doe,rmoust:hoe,rnmid:poe,roang:moe,roarr:goe,robrk:voe,ropar:yoe,ropf:_oe,Ropf:xoe,roplus:Soe,rotimes:woe,RoundImplies:boe,rpar:Eoe,rpargt:Moe,rppolint:Toe,rrarr:Aoe,Rrightarrow:Coe,rsaquo:Roe,rscr:Poe,Rscr:Loe,rsh:Noe,Rsh:Ioe,rsqb:Doe,rsquo:koe,rsquor:Ooe,rthree:$oe,rtimes:Uoe,rtri:Foe,rtrie:zoe,rtrif:Boe,rtriltri:Hoe,RuleDelayed:Voe,ruluhar:Goe,rx:qoe,Sacute:Woe,sacute:joe,sbquo:Xoe,scap:Yoe,Scaron:Zoe,scaron:Koe,Sc:Joe,sc:Qoe,sccue:eae,sce:tae,scE:nae,Scedil:rae,scedil:iae,Scirc:sae,scirc:oae,scnap:aae,scnE:lae,scnsim:cae,scpolint:uae,scsim:fae,Scy:dae,scy:hae,sdotb:pae,sdot:mae,sdote:gae,searhk:vae,searr:yae,seArr:_ae,searrow:xae,sect:Sae,semi:wae,seswar:bae,setminus:Eae,setmn:Mae,sext:Tae,Sfr:Aae,sfr:Cae,sfrown:Rae,sharp:Pae,SHCHcy:Lae,shchcy:Nae,SHcy:Iae,shcy:Dae,ShortDownArrow:kae,ShortLeftArrow:Oae,shortmid:$ae,shortparallel:Uae,ShortRightArrow:Fae,ShortUpArrow:zae,shy:Bae,Sigma:Hae,sigma:Vae,sigmaf:Gae,sigmav:qae,sim:Wae,simdot:jae,sime:Xae,simeq:Yae,simg:Zae,simgE:Kae,siml:Jae,simlE:Qae,simne:ele,simplus:tle,simrarr:nle,slarr:rle,SmallCircle:ile,smallsetminus:sle,smashp:ole,smeparsl:ale,smid:lle,smile:cle,smt:ule,smte:fle,smtes:dle,SOFTcy:hle,softcy:ple,solbar:mle,solb:gle,sol:vle,Sopf:yle,sopf:_le,spades:xle,spadesuit:Sle,spar:wle,sqcap:ble,sqcaps:Ele,sqcup:Mle,sqcups:Tle,Sqrt:Ale,sqsub:Cle,sqsube:Rle,sqsubset:Ple,sqsubseteq:Lle,sqsup:Nle,sqsupe:Ile,sqsupset:Dle,sqsupseteq:kle,square:Ole,Square:$le,SquareIntersection:Ule,SquareSubset:Fle,SquareSubsetEqual:zle,SquareSuperset:Ble,SquareSupersetEqual:Hle,SquareUnion:Vle,squarf:Gle,squ:qle,squf:Wle,srarr:jle,Sscr:Xle,sscr:Yle,ssetmn:Zle,ssmile:Kle,sstarf:Jle,Star:Qle,star:ece,starf:tce,straightepsilon:nce,straightphi:rce,strns:ice,sub:sce,Sub:oce,subdot:ace,subE:lce,sube:cce,subedot:uce,submult:fce,subnE:dce,subne:hce,subplus:pce,subrarr:mce,subset:gce,Subset:vce,subseteq:yce,subseteqq:_ce,SubsetEqual:xce,subsetneq:Sce,subsetneqq:wce,subsim:bce,subsub:Ece,subsup:Mce,succapprox:Tce,succ:Ace,succcurlyeq:Cce,Succeeds:Rce,SucceedsEqual:Pce,SucceedsSlantEqual:Lce,SucceedsTilde:Nce,succeq:Ice,succnapprox:Dce,succneqq:kce,succnsim:Oce,succsim:$ce,SuchThat:Uce,sum:Fce,Sum:zce,sung:Bce,sup1:Hce,sup2:Vce,sup3:Gce,sup:qce,Sup:Wce,supdot:jce,supdsub:Xce,supE:Yce,supe:Zce,supedot:Kce,Superset:Jce,SupersetEqual:Qce,suphsol:eue,suphsub:tue,suplarr:nue,supmult:rue,supnE:iue,supne:sue,supplus:oue,supset:aue,Supset:lue,supseteq:cue,supseteqq:uue,supsetneq:fue,supsetneqq:due,supsim:hue,supsub:pue,supsup:mue,swarhk:gue,swarr:vue,swArr:yue,swarrow:_ue,swnwar:xue,szlig:Sue,Tab:wue,target:bue,Tau:Eue,tau:Mue,tbrk:Tue,Tcaron:Aue,tcaron:Cue,Tcedil:Rue,tcedil:Pue,Tcy:Lue,tcy:Nue,tdot:Iue,telrec:Due,Tfr:kue,tfr:Oue,there4:$ue,therefore:Uue,Therefore:Fue,Theta:zue,theta:Bue,thetasym:Hue,thetav:Vue,thickapprox:Gue,thicksim:que,ThickSpace:Wue,ThinSpace:jue,thinsp:Xue,thkap:Yue,thksim:Zue,THORN:Kue,thorn:Jue,tilde:Que,Tilde:efe,TildeEqual:tfe,TildeFullEqual:nfe,TildeTilde:rfe,timesbar:ife,timesb:sfe,times:ofe,timesd:afe,tint:lfe,toea:cfe,topbot:ufe,topcir:ffe,top:dfe,Topf:hfe,topf:pfe,topfork:mfe,tosa:gfe,tprime:vfe,trade:yfe,TRADE:_fe,triangle:xfe,triangledown:Sfe,triangleleft:wfe,trianglelefteq:bfe,triangleq:Efe,triangleright:Mfe,trianglerighteq:Tfe,tridot:Afe,trie:Cfe,triminus:Rfe,TripleDot:Pfe,triplus:Lfe,trisb:Nfe,tritime:Ife,trpezium:Dfe,Tscr:kfe,tscr:Ofe,TScy:$fe,tscy:Ufe,TSHcy:Ffe,tshcy:zfe,Tstrok:Bfe,tstrok:Hfe,twixt:Vfe,twoheadleftarrow:Gfe,twoheadrightarrow:qfe,Uacute:Wfe,uacute:jfe,uarr:Xfe,Uarr:Yfe,uArr:Zfe,Uarrocir:Kfe,Ubrcy:Jfe,ubrcy:Qfe,Ubreve:ede,ubreve:tde,Ucirc:nde,ucirc:rde,Ucy:ide,ucy:sde,udarr:ode,Udblac:ade,udblac:lde,udhar:cde,ufisht:ude,Ufr:fde,ufr:dde,Ugrave:hde,ugrave:pde,uHar:mde,uharl:gde,uharr:vde,uhblk:yde,ulcorn:_de,ulcorner:xde,ulcrop:Sde,ultri:wde,Umacr:bde,umacr:Ede,uml:Mde,UnderBar:Tde,UnderBrace:Ade,UnderBracket:Cde,UnderParenthesis:Rde,Union:Pde,UnionPlus:Lde,Uogon:Nde,uogon:Ide,Uopf:Dde,uopf:kde,UpArrowBar:Ode,uparrow:$de,UpArrow:Ude,Uparrow:Fde,UpArrowDownArrow:zde,updownarrow:Bde,UpDownArrow:Hde,Updownarrow:Vde,UpEquilibrium:Gde,upharpoonleft:qde,upharpoonright:Wde,uplus:jde,UpperLeftArrow:Xde,UpperRightArrow:Yde,upsi:Zde,Upsi:Kde,upsih:Jde,Upsilon:Qde,upsilon:ehe,UpTeeArrow:the,UpTee:nhe,upuparrows:rhe,urcorn:ihe,urcorner:she,urcrop:ohe,Uring:ahe,uring:lhe,urtri:che,Uscr:uhe,uscr:fhe,utdot:dhe,Utilde:hhe,utilde:phe,utri:mhe,utrif:ghe,uuarr:vhe,Uuml:yhe,uuml:_he,uwangle:xhe,vangrt:She,varepsilon:whe,varkappa:bhe,varnothing:Ehe,varphi:Mhe,varpi:The,varpropto:Ahe,varr:Che,vArr:Rhe,varrho:Phe,varsigma:Lhe,varsubsetneq:Nhe,varsubsetneqq:Ihe,varsupsetneq:Dhe,varsupsetneqq:khe,vartheta:Ohe,vartriangleleft:$he,vartriangleright:Uhe,vBar:Fhe,Vbar:zhe,vBarv:Bhe,Vcy:Hhe,vcy:Vhe,vdash:Ghe,vDash:qhe,Vdash:Whe,VDash:jhe,Vdashl:Xhe,veebar:Yhe,vee:Zhe,Vee:Khe,veeeq:Jhe,vellip:Qhe,verbar:epe,Verbar:tpe,vert:npe,Vert:rpe,VerticalBar:ipe,VerticalLine:spe,VerticalSeparator:ope,VerticalTilde:ape,VeryThinSpace:lpe,Vfr:cpe,vfr:upe,vltri:fpe,vnsub:dpe,vnsup:hpe,Vopf:ppe,vopf:mpe,vprop:gpe,vrtri:vpe,Vscr:ype,vscr:_pe,vsubnE:xpe,vsubne:Spe,vsupnE:wpe,vsupne:bpe,Vvdash:Epe,vzigzag:Mpe,Wcirc:Tpe,wcirc:Ape,wedbar:Cpe,wedge:Rpe,Wedge:Ppe,wedgeq:Lpe,weierp:Npe,Wfr:Ipe,wfr:Dpe,Wopf:kpe,wopf:Ope,wp:$pe,wr:Upe,wreath:Fpe,Wscr:zpe,wscr:Bpe,xcap:Hpe,xcirc:Vpe,xcup:Gpe,xdtri:qpe,Xfr:Wpe,xfr:jpe,xharr:Xpe,xhArr:Ype,Xi:Zpe,xi:Kpe,xlarr:Jpe,xlArr:Qpe,xmap:eme,xnis:tme,xodot:nme,Xopf:rme,xopf:ime,xoplus:sme,xotime:ome,xrarr:ame,xrArr:lme,Xscr:cme,xscr:ume,xsqcup:fme,xuplus:dme,xutri:hme,xvee:pme,xwedge:mme,Yacute:gme,yacute:vme,YAcy:yme,yacy:_me,Ycirc:xme,ycirc:Sme,Ycy:wme,ycy:bme,yen:Eme,Yfr:Mme,yfr:Tme,YIcy:Ame,yicy:Cme,Yopf:Rme,yopf:Pme,Yscr:Lme,yscr:Nme,YUcy:Ime,yucy:Dme,yuml:kme,Yuml:Ome,Zacute:$me,zacute:Ume,Zcaron:Fme,zcaron:zme,Zcy:Bme,zcy:Hme,Zdot:Vme,zdot:Gme,zeetrf:qme,ZeroWidthSpace:Wme,Zeta:jme,zeta:Xme,zfr:Yme,Zfr:Zme,ZHcy:Kme,zhcy:Jme,zigrarr:Qme,zopf:ege,Zopf:tge,Zscr:nge,zscr:rge,zwj:ige,zwnj:sge},age="Á",lge="á",cge="Â",uge="â",fge="´",dge="Æ",hge="æ",pge="À",mge="à",gge="&",vge="&",yge="Å",_ge="å",xge="Ã",Sge="ã",wge="Ä",bge="ä",Ege="¦",Mge="Ç",Tge="ç",Age="¸",Cge="¢",Rge="©",Pge="©",Lge="¤",Nge="°",Ige="÷",Dge="É",kge="é",Oge="Ê",$ge="ê",Uge="È",Fge="è",zge="Ð",Bge="ð",Hge="Ë",Vge="ë",Gge="½",qge="¼",Wge="¾",jge=">",Xge=">",Yge="Í",Zge="í",Kge="Î",Jge="î",Qge="¡",eve="Ì",tve="ì",nve="¿",rve="Ï",ive="ï",sve="«",ove="<",ave="<",lve="¯",cve="µ",uve="·",fve=" ",dve="¬",hve="Ñ",pve="ñ",mve="Ó",gve="ó",vve="Ô",yve="ô",_ve="Ò",xve="ò",Sve="ª",wve="º",bve="Ø",Eve="ø",Mve="Õ",Tve="õ",Ave="Ö",Cve="ö",Rve="¶",Pve="±",Lve="£",Nve='"',Ive='"',Dve="»",kve="®",Ove="®",$ve="§",Uve="­",Fve="¹",zve="²",Bve="³",Hve="ß",Vve="Þ",Gve="þ",qve="×",Wve="Ú",jve="ú",Xve="Û",Yve="û",Zve="Ù",Kve="ù",Jve="¨",Qve="Ü",eye="ü",tye="Ý",nye="ý",rye="¥",iye="ÿ",sye={Aacute:age,aacute:lge,Acirc:cge,acirc:uge,acute:fge,AElig:dge,aelig:hge,Agrave:pge,agrave:mge,amp:gge,AMP:vge,Aring:yge,aring:_ge,Atilde:xge,atilde:Sge,Auml:wge,auml:bge,brvbar:Ege,Ccedil:Mge,ccedil:Tge,cedil:Age,cent:Cge,copy:Rge,COPY:Pge,curren:Lge,deg:Nge,divide:Ige,Eacute:Dge,eacute:kge,Ecirc:Oge,ecirc:$ge,Egrave:Uge,egrave:Fge,ETH:zge,eth:Bge,Euml:Hge,euml:Vge,frac12:Gge,frac14:qge,frac34:Wge,gt:jge,GT:Xge,Iacute:Yge,iacute:Zge,Icirc:Kge,icirc:Jge,iexcl:Qge,Igrave:eve,igrave:tve,iquest:nve,Iuml:rve,iuml:ive,laquo:sve,lt:ove,LT:ave,macr:lve,micro:cve,middot:uve,nbsp:fve,not:dve,Ntilde:hve,ntilde:pve,Oacute:mve,oacute:gve,Ocirc:vve,ocirc:yve,Ograve:_ve,ograve:xve,ordf:Sve,ordm:wve,Oslash:bve,oslash:Eve,Otilde:Mve,otilde:Tve,Ouml:Ave,ouml:Cve,para:Rve,plusmn:Pve,pound:Lve,quot:Nve,QUOT:Ive,raquo:Dve,reg:kve,REG:Ove,sect:$ve,shy:Uve,sup1:Fve,sup2:zve,sup3:Bve,szlig:Hve,THORN:Vve,thorn:Gve,times:qve,Uacute:Wve,uacute:jve,Ucirc:Xve,ucirc:Yve,Ugrave:Zve,ugrave:Kve,uml:Jve,Uuml:Qve,uuml:eye,Yacute:tye,yacute:nye,yen:rye,yuml:iye},oye="&",aye="'",lye=">",cye="<",uye='"',fye={amp:oye,apos:aye,gt:lye,lt:cye,quot:uye};var _R=Ie,dye=BO,hye=oge,$M=sye,pye=fye,Je=0,Jt=Je++,xR=Je++,bl=Je++,SR=Je++,wR=Je++,Ud=Je++,bR=Je++,va=Je++,iv=Je++,LS=Je++,NS=Je++,IS=Je++,DS=Je++,kS=Je++,ER=Je++,vo=Je++,MR=Je++,TR=Je++,Fd=Je++,OS=Je++,$S=Je++,AR=Je++,CR=Je++,RR=Je++,PR=Je++,LR=Je++,NR=Je++,zd=Je++,US=Je++,FS=Je++,IR=Je++,DR=Je++,kR=Je++,OR=Je++,$R=Je++,UR=Je++,FR=Je++,zR=Je++,BR=Je++,HR=Je++,VR=Je++,GR=Je++,qR=Je++,WR=Je++,jR=Je++,XR=Je++,YR=Je++,ZR=Je++,KR=Je++,JR=Je++,Bd=Je++,QR=Je++,zS=Je++,BS=Je++,HS=Je++,VS=0,_u=VS++,e3=VS++,t3=VS++;function ni(n){return n===" "||n===`
`||n==="	"||n==="\f"||n==="\r"}function ri(n,e,t){var r=n.toLowerCase();return n===r?function(i){i===r?this._state=e:(this._state=t,this._index--)}:function(i){i===r||i===n?this._state=e:(this._state=t,this._index--)}}function El(n,e){var t=n.toLowerCase();return function(r){r===t||r===n?this._state=e:(this._state=bl,this._index--)}}function Ie(n,e){this._state=Jt,this._buffer="",this._sectionStart=0,this._index=0,this._bufferOffset=0,this._baseState=Jt,this._special=_u,this._cbs=e,this._running=!0,this._ended=!1,this._xmlMode=!!(n&&n.xmlMode),this._decodeEntities=!!(n&&n.decodeEntities)}Ie.prototype._stateText=function(n){n==="<"?(this._index>this._sectionStart&&this._cbs.ontext(this._getSection()),this._state=xR,this._sectionStart=this._index):this._decodeEntities&&this._special===_u&&n==="&"&&(this._index>this._sectionStart&&this._cbs.ontext(this._getSection()),this._baseState=Jt,this._state=Bd,this._sectionStart=this._index)};Ie.prototype._stateBeforeTagName=function(n){n==="/"?this._state=wR:n==="<"?(this._cbs.ontext(this._getSection()),this._sectionStart=this._index):n===">"||this._special!==_u||ni(n)?this._state=Jt:n==="!"?(this._state=ER,this._sectionStart=this._index+1):n==="?"?(this._state=MR,this._sectionStart=this._index+1):(this._state=!this._xmlMode&&(n==="s"||n==="S")?IR:bl,this._sectionStart=this._index)};Ie.prototype._stateInTagName=function(n){(n==="/"||n===">"||ni(n))&&(this._emitToken("onopentagname"),this._state=va,this._index--)};Ie.prototype._stateBeforeCloseingTagName=function(n){ni(n)||(n===">"?this._state=Jt:this._special!==_u?n==="s"||n==="S"?this._state=DR:(this._state=Jt,this._index--):(this._state=Ud,this._sectionStart=this._index))};Ie.prototype._stateInCloseingTagName=function(n){(n===">"||ni(n))&&(this._emitToken("onclosetag"),this._state=bR,this._index--)};Ie.prototype._stateAfterCloseingTagName=function(n){n===">"&&(this._state=Jt,this._sectionStart=this._index+1)};Ie.prototype._stateBeforeAttributeName=function(n){n===">"?(this._cbs.onopentagend(),this._state=Jt,this._sectionStart=this._index+1):n==="/"?this._state=SR:ni(n)||(this._state=iv,this._sectionStart=this._index)};Ie.prototype._stateInSelfClosingTag=function(n){n===">"?(this._cbs.onselfclosingtag(),this._state=Jt,this._sectionStart=this._index+1):ni(n)||(this._state=va,this._index--)};Ie.prototype._stateInAttributeName=function(n){(n==="="||n==="/"||n===">"||ni(n))&&(this._cbs.onattribname(this._getSection()),this._sectionStart=-1,this._state=LS,this._index--)};Ie.prototype._stateAfterAttributeName=function(n){n==="="?this._state=NS:n==="/"||n===">"?(this._cbs.onattribend(),this._state=va,this._index--):ni(n)||(this._cbs.onattribend(),this._state=iv,this._sectionStart=this._index)};Ie.prototype._stateBeforeAttributeValue=function(n){n==='"'?(this._state=IS,this._sectionStart=this._index+1):n==="'"?(this._state=DS,this._sectionStart=this._index+1):ni(n)||(this._state=kS,this._sectionStart=this._index,this._index--)};Ie.prototype._stateInAttributeValueDoubleQuotes=function(n){n==='"'?(this._emitToken("onattribdata"),this._cbs.onattribend(),this._state=va):this._decodeEntities&&n==="&"&&(this._emitToken("onattribdata"),this._baseState=this._state,this._state=Bd,this._sectionStart=this._index)};Ie.prototype._stateInAttributeValueSingleQuotes=function(n){n==="'"?(this._emitToken("onattribdata"),this._cbs.onattribend(),this._state=va):this._decodeEntities&&n==="&"&&(this._emitToken("onattribdata"),this._baseState=this._state,this._state=Bd,this._sectionStart=this._index)};Ie.prototype._stateInAttributeValueNoQuotes=function(n){ni(n)||n===">"?(this._emitToken("onattribdata"),this._cbs.onattribend(),this._state=va,this._index--):this._decodeEntities&&n==="&"&&(this._emitToken("onattribdata"),this._baseState=this._state,this._state=Bd,this._sectionStart=this._index)};Ie.prototype._stateBeforeDeclaration=function(n){this._state=n==="["?AR:n==="-"?TR:vo};Ie.prototype._stateInDeclaration=function(n){n===">"&&(this._cbs.ondeclaration(this._getSection()),this._state=Jt,this._sectionStart=this._index+1)};Ie.prototype._stateInProcessingInstruction=function(n){n===">"&&(this._cbs.onprocessinginstruction(this._getSection()),this._state=Jt,this._sectionStart=this._index+1)};Ie.prototype._stateBeforeComment=function(n){n==="-"?(this._state=Fd,this._sectionStart=this._index+1):this._state=vo};Ie.prototype._stateInComment=function(n){n==="-"&&(this._state=OS)};Ie.prototype._stateAfterComment1=function(n){n==="-"?this._state=$S:this._state=Fd};Ie.prototype._stateAfterComment2=function(n){n===">"?(this._cbs.oncomment(this._buffer.substring(this._sectionStart,this._index-2)),this._state=Jt,this._sectionStart=this._index+1):n!=="-"&&(this._state=Fd)};Ie.prototype._stateBeforeCdata1=ri("C",CR,vo);Ie.prototype._stateBeforeCdata2=ri("D",RR,vo);Ie.prototype._stateBeforeCdata3=ri("A",PR,vo);Ie.prototype._stateBeforeCdata4=ri("T",LR,vo);Ie.prototype._stateBeforeCdata5=ri("A",NR,vo);Ie.prototype._stateBeforeCdata6=function(n){n==="["?(this._state=zd,this._sectionStart=this._index+1):(this._state=vo,this._index--)};Ie.prototype._stateInCdata=function(n){n==="]"&&(this._state=US)};Ie.prototype._stateAfterCdata1=function(n){n==="]"?this._state=FS:this._state=zd};Ie.prototype._stateAfterCdata2=function(n){n===">"?(this._cbs.oncdata(this._buffer.substring(this._sectionStart,this._index-2)),this._state=Jt,this._sectionStart=this._index+1):n!=="]"&&(this._state=zd)};Ie.prototype._stateBeforeSpecial=function(n){n==="c"||n==="C"?this._state=kR:n==="t"||n==="T"?this._state=qR:(this._state=bl,this._index--)};Ie.prototype._stateBeforeSpecialEnd=function(n){this._special===e3&&(n==="c"||n==="C")?this._state=zR:this._special===t3&&(n==="t"||n==="T")?this._state=YR:this._state=Jt};Ie.prototype._stateBeforeScript1=El("R",OR);Ie.prototype._stateBeforeScript2=El("I",$R);Ie.prototype._stateBeforeScript3=El("P",UR);Ie.prototype._stateBeforeScript4=El("T",FR);Ie.prototype._stateBeforeScript5=function(n){(n==="/"||n===">"||ni(n))&&(this._special=e3),this._state=bl,this._index--};Ie.prototype._stateAfterScript1=ri("R",BR,Jt);Ie.prototype._stateAfterScript2=ri("I",HR,Jt);Ie.prototype._stateAfterScript3=ri("P",VR,Jt);Ie.prototype._stateAfterScript4=ri("T",GR,Jt);Ie.prototype._stateAfterScript5=function(n){n===">"||ni(n)?(this._special=_u,this._state=Ud,this._sectionStart=this._index-6,this._index--):this._state=Jt};Ie.prototype._stateBeforeStyle1=El("Y",WR);Ie.prototype._stateBeforeStyle2=El("L",jR);Ie.prototype._stateBeforeStyle3=El("E",XR);Ie.prototype._stateBeforeStyle4=function(n){(n==="/"||n===">"||ni(n))&&(this._special=t3),this._state=bl,this._index--};Ie.prototype._stateAfterStyle1=ri("Y",ZR,Jt);Ie.prototype._stateAfterStyle2=ri("L",KR,Jt);Ie.prototype._stateAfterStyle3=ri("E",JR,Jt);Ie.prototype._stateAfterStyle4=function(n){n===">"||ni(n)?(this._special=_u,this._state=Ud,this._sectionStart=this._index-5,this._index--):this._state=Jt};Ie.prototype._stateBeforeEntity=ri("#",QR,zS);Ie.prototype._stateBeforeNumericEntity=ri("X",HS,BS);Ie.prototype._parseNamedEntityStrict=function(){if(this._sectionStart+1<this._index){var n=this._buffer.substring(this._sectionStart+1,this._index),e=this._xmlMode?pye:hye;e.hasOwnProperty(n)&&(this._emitPartial(e[n]),this._sectionStart=this._index+1)}};Ie.prototype._parseLegacyEntity=function(){var n=this._sectionStart+1,e=this._index-n;for(e>6&&(e=6);e>=2;){var t=this._buffer.substr(n,e);if($M.hasOwnProperty(t)){this._emitPartial($M[t]),this._sectionStart+=e+1;return}else e--}};Ie.prototype._stateInNamedEntity=function(n){n===";"?(this._parseNamedEntityStrict(),this._sectionStart+1<this._index&&!this._xmlMode&&this._parseLegacyEntity(),this._state=this._baseState):(n<"a"||n>"z")&&(n<"A"||n>"Z")&&(n<"0"||n>"9")&&(this._xmlMode||this._sectionStart+1===this._index||(this._baseState!==Jt?n!=="="&&this._parseNamedEntityStrict():this._parseLegacyEntity()),this._state=this._baseState,this._index--)};Ie.prototype._decodeNumericEntity=function(n,e){var t=this._sectionStart+n;if(t!==this._index){var r=this._buffer.substring(t,this._index),i=parseInt(r,e);this._emitPartial(dye(i)),this._sectionStart=this._index}else this._sectionStart--;this._state=this._baseState};Ie.prototype._stateInNumericEntity=function(n){n===";"?(this._decodeNumericEntity(2,10),this._sectionStart++):(n<"0"||n>"9")&&(this._xmlMode?this._state=this._baseState:this._decodeNumericEntity(2,10),this._index--)};Ie.prototype._stateInHexEntity=function(n){n===";"?(this._decodeNumericEntity(3,16),this._sectionStart++):(n<"a"||n>"f")&&(n<"A"||n>"F")&&(n<"0"||n>"9")&&(this._xmlMode?this._state=this._baseState:this._decodeNumericEntity(3,16),this._index--)};Ie.prototype._cleanup=function(){this._sectionStart<0?(this._buffer="",this._bufferOffset+=this._index,this._index=0):this._running&&(this._state===Jt?(this._sectionStart!==this._index&&this._cbs.ontext(this._buffer.substr(this._sectionStart)),this._buffer="",this._bufferOffset+=this._index,this._index=0):this._sectionStart===this._index?(this._buffer="",this._bufferOffset+=this._index,this._index=0):(this._buffer=this._buffer.substr(this._sectionStart),this._index-=this._sectionStart,this._bufferOffset+=this._sectionStart),this._sectionStart=0)};Ie.prototype.write=function(n){this._ended&&this._cbs.onerror(Error(".write() after done!")),this._buffer+=n,this._parse()};Ie.prototype._parse=function(){for(;this._index<this._buffer.length&&this._running;){var n=this._buffer.charAt(this._index);this._state===Jt?this._stateText(n):this._state===xR?this._stateBeforeTagName(n):this._state===bl?this._stateInTagName(n):this._state===wR?this._stateBeforeCloseingTagName(n):this._state===Ud?this._stateInCloseingTagName(n):this._state===bR?this._stateAfterCloseingTagName(n):this._state===SR?this._stateInSelfClosingTag(n):this._state===va?this._stateBeforeAttributeName(n):this._state===iv?this._stateInAttributeName(n):this._state===LS?this._stateAfterAttributeName(n):this._state===NS?this._stateBeforeAttributeValue(n):this._state===IS?this._stateInAttributeValueDoubleQuotes(n):this._state===DS?this._stateInAttributeValueSingleQuotes(n):this._state===kS?this._stateInAttributeValueNoQuotes(n):this._state===ER?this._stateBeforeDeclaration(n):this._state===vo?this._stateInDeclaration(n):this._state===MR?this._stateInProcessingInstruction(n):this._state===TR?this._stateBeforeComment(n):this._state===Fd?this._stateInComment(n):this._state===OS?this._stateAfterComment1(n):this._state===$S?this._stateAfterComment2(n):this._state===AR?this._stateBeforeCdata1(n):this._state===CR?this._stateBeforeCdata2(n):this._state===RR?this._stateBeforeCdata3(n):this._state===PR?this._stateBeforeCdata4(n):this._state===LR?this._stateBeforeCdata5(n):this._state===NR?this._stateBeforeCdata6(n):this._state===zd?this._stateInCdata(n):this._state===US?this._stateAfterCdata1(n):this._state===FS?this._stateAfterCdata2(n):this._state===IR?this._stateBeforeSpecial(n):this._state===DR?this._stateBeforeSpecialEnd(n):this._state===kR?this._stateBeforeScript1(n):this._state===OR?this._stateBeforeScript2(n):this._state===$R?this._stateBeforeScript3(n):this._state===UR?this._stateBeforeScript4(n):this._state===FR?this._stateBeforeScript5(n):this._state===zR?this._stateAfterScript1(n):this._state===BR?this._stateAfterScript2(n):this._state===HR?this._stateAfterScript3(n):this._state===VR?this._stateAfterScript4(n):this._state===GR?this._stateAfterScript5(n):this._state===qR?this._stateBeforeStyle1(n):this._state===WR?this._stateBeforeStyle2(n):this._state===jR?this._stateBeforeStyle3(n):this._state===XR?this._stateBeforeStyle4(n):this._state===YR?this._stateAfterStyle1(n):this._state===ZR?this._stateAfterStyle2(n):this._state===KR?this._stateAfterStyle3(n):this._state===JR?this._stateAfterStyle4(n):this._state===Bd?this._stateBeforeEntity(n):this._state===QR?this._stateBeforeNumericEntity(n):this._state===zS?this._stateInNamedEntity(n):this._state===BS?this._stateInNumericEntity(n):this._state===HS?this._stateInHexEntity(n):this._cbs.onerror(Error("unknown _state"),this._state),this._index++}this._cleanup()};Ie.prototype.pause=function(){this._running=!1};Ie.prototype.resume=function(){this._running=!0,this._index<this._buffer.length&&this._parse(),this._ended&&this._finish()};Ie.prototype.end=function(n){this._ended&&this._cbs.onerror(Error(".end() after done!")),n&&this.write(n),this._ended=!0,this._running&&this._finish()};Ie.prototype._finish=function(){this._sectionStart<this._index&&this._handleTrailingData(),this._cbs.onend()};Ie.prototype._handleTrailingData=function(){var n=this._buffer.substr(this._sectionStart);this._state===zd||this._state===US||this._state===FS?this._cbs.oncdata(n):this._state===Fd||this._state===OS||this._state===$S?this._cbs.oncomment(n):this._state===zS&&!this._xmlMode?(this._parseLegacyEntity(),this._sectionStart<this._index&&(this._state=this._baseState,this._handleTrailingData())):this._state===BS&&!this._xmlMode?(this._decodeNumericEntity(2,10),this._sectionStart<this._index&&(this._state=this._baseState,this._handleTrailingData())):this._state===HS&&!this._xmlMode?(this._decodeNumericEntity(3,16),this._sectionStart<this._index&&(this._state=this._baseState,this._handleTrailingData())):this._state!==bl&&this._state!==va&&this._state!==NS&&this._state!==LS&&this._state!==iv&&this._state!==DS&&this._state!==IS&&this._state!==kS&&this._state!==Ud&&this._cbs.ontext(n)};Ie.prototype.reset=function(){Ie.call(this,{xmlMode:this._xmlMode,decodeEntities:this._decodeEntities},this._cbs)};Ie.prototype.getAbsoluteIndex=function(){return this._bufferOffset+this._index};Ie.prototype._getSection=function(){return this._buffer.substring(this._sectionStart,this._index)};Ie.prototype._emitToken=function(n){this._cbs[n](this._getSection()),this._sectionStart=-1};Ie.prototype._emitPartial=function(n){this._baseState!==Jt?this._cbs.onattribdata(n):this._cbs.ontext(n)};var ru={},UM={get exports(){return ru},set exports(n){ru=n}};typeof Object.create=="function"?UM.exports=function(e,t){t&&(e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:UM.exports=function(e,t){if(t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}};const mye={},gye=Object.freeze(Object.defineProperty({__proto__:null,default:mye},Symbol.toStringTag,{value:"Module"})),ag=$k(gye);var FM=_R,jl={input:!0,option:!0,optgroup:!0,select:!0,button:!0,datalist:!0,textarea:!0},zM={tr:{tr:!0,th:!0,td:!0},th:{th:!0},td:{thead:!0,th:!0,td:!0},body:{head:!0,link:!0,script:!0},li:{li:!0},p:{p:!0},h1:{p:!0},h2:{p:!0},h3:{p:!0},h4:{p:!0},h5:{p:!0},h6:{p:!0},select:jl,input:jl,output:jl,button:jl,datalist:jl,textarea:jl,option:{option:!0},optgroup:{optgroup:!0}},GS={__proto__:null,area:!0,base:!0,basefont:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,isindex:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},n3={__proto__:null,math:!0,svg:!0},r3={__proto__:null,mi:!0,mo:!0,mn:!0,ms:!0,mtext:!0,"annotation-xml":!0,foreignObject:!0,desc:!0,title:!0},vye=/\s|\//;function Wt(n,e){this._options=e||{},this._cbs=n||{},this._tagname="",this._attribname="",this._attribvalue="",this._attribs=null,this._stack=[],this._foreignContext=[],this.startIndex=0,this.endIndex=null,this._lowerCaseTagNames="lowerCaseTags"in this._options?!!this._options.lowerCaseTags:!this._options.xmlMode,this._lowerCaseAttributeNames="lowerCaseAttributeNames"in this._options?!!this._options.lowerCaseAttributeNames:!this._options.xmlMode,this._options.Tokenizer&&(FM=this._options.Tokenizer),this._tokenizer=new FM(this._options,this),this._cbs.onparserinit&&this._cbs.onparserinit(this)}ru(Wt,ag.EventEmitter);Wt.prototype._updatePosition=function(n){this.endIndex===null?this._tokenizer._sectionStart<=n?this.startIndex=0:this.startIndex=this._tokenizer._sectionStart-n:this.startIndex=this.endIndex+1,this.endIndex=this._tokenizer.getAbsoluteIndex()};Wt.prototype.ontext=function(n){this._updatePosition(1),this.endIndex--,this._cbs.ontext&&this._cbs.ontext(n)};Wt.prototype.onopentagname=function(n){if(this._lowerCaseTagNames&&(n=n.toLowerCase()),this._tagname=n,!this._options.xmlMode&&n in zM)for(var e;(e=this._stack[this._stack.length-1])in zM[n];this.onclosetag(e));(this._options.xmlMode||!(n in GS))&&(this._stack.push(n),n in n3?this._foreignContext.push(!0):n in r3&&this._foreignContext.push(!1)),this._cbs.onopentagname&&this._cbs.onopentagname(n),this._cbs.onopentag&&(this._attribs={})};Wt.prototype.onopentagend=function(){this._updatePosition(1),this._attribs&&(this._cbs.onopentag&&this._cbs.onopentag(this._tagname,this._attribs),this._attribs=null),!this._options.xmlMode&&this._cbs.onclosetag&&this._tagname in GS&&this._cbs.onclosetag(this._tagname),this._tagname=""};Wt.prototype.onclosetag=function(n){if(this._updatePosition(1),this._lowerCaseTagNames&&(n=n.toLowerCase()),(n in n3||n in r3)&&this._foreignContext.pop(),this._stack.length&&(!(n in GS)||this._options.xmlMode)){var e=this._stack.lastIndexOf(n);if(e!==-1)if(this._cbs.onclosetag)for(e=this._stack.length-e;e--;)this._cbs.onclosetag(this._stack.pop());else this._stack.length=e;else n==="p"&&!this._options.xmlMode&&(this.onopentagname(n),this._closeCurrentTag())}else!this._options.xmlMode&&(n==="br"||n==="p")&&(this.onopentagname(n),this._closeCurrentTag())};Wt.prototype.onselfclosingtag=function(){this._options.xmlMode||this._options.recognizeSelfClosing||this._foreignContext[this._foreignContext.length-1]?this._closeCurrentTag():this.onopentagend()};Wt.prototype._closeCurrentTag=function(){var n=this._tagname;this.onopentagend(),this._stack[this._stack.length-1]===n&&(this._cbs.onclosetag&&this._cbs.onclosetag(n),this._stack.pop())};Wt.prototype.onattribname=function(n){this._lowerCaseAttributeNames&&(n=n.toLowerCase()),this._attribname=n};Wt.prototype.onattribdata=function(n){this._attribvalue+=n};Wt.prototype.onattribend=function(){this._cbs.onattribute&&this._cbs.onattribute(this._attribname,this._attribvalue),this._attribs&&!Object.prototype.hasOwnProperty.call(this._attribs,this._attribname)&&(this._attribs[this._attribname]=this._attribvalue),this._attribname="",this._attribvalue=""};Wt.prototype._getInstructionName=function(n){var e=n.search(vye),t=e<0?n:n.substr(0,e);return this._lowerCaseTagNames&&(t=t.toLowerCase()),t};Wt.prototype.ondeclaration=function(n){if(this._cbs.onprocessinginstruction){var e=this._getInstructionName(n);this._cbs.onprocessinginstruction("!"+e,"!"+n)}};Wt.prototype.onprocessinginstruction=function(n){if(this._cbs.onprocessinginstruction){var e=this._getInstructionName(n);this._cbs.onprocessinginstruction("?"+e,"?"+n)}};Wt.prototype.oncomment=function(n){this._updatePosition(4),this._cbs.oncomment&&this._cbs.oncomment(n),this._cbs.oncommentend&&this._cbs.oncommentend()};Wt.prototype.oncdata=function(n){this._updatePosition(1),this._options.xmlMode||this._options.recognizeCDATA?(this._cbs.oncdatastart&&this._cbs.oncdatastart(),this._cbs.ontext&&this._cbs.ontext(n),this._cbs.oncdataend&&this._cbs.oncdataend()):this.oncomment("[CDATA["+n+"]]")};Wt.prototype.onerror=function(n){this._cbs.onerror&&this._cbs.onerror(n)};Wt.prototype.onend=function(){if(this._cbs.onclosetag)for(var n=this._stack.length;n>0;this._cbs.onclosetag(this._stack[--n]));this._cbs.onend&&this._cbs.onend()};Wt.prototype.reset=function(){this._cbs.onreset&&this._cbs.onreset(),this._tokenizer.reset(),this._tagname="",this._attribname="",this._attribs=null,this._stack=[],this._cbs.onparserinit&&this._cbs.onparserinit(this)};Wt.prototype.parseComplete=function(n){this.reset(),this.end(n)};Wt.prototype.write=function(n){this._tokenizer.write(n)};Wt.prototype.end=function(n){this._tokenizer.end(n)};Wt.prototype.pause=function(){this._tokenizer.pause()};Wt.prototype.resume=function(){this._tokenizer.resume()};Wt.prototype.parseChunk=Wt.prototype.write;Wt.prototype.done=Wt.prototype.end;var i3=Wt,Hd={Text:"text",Directive:"directive",Comment:"comment",Script:"script",Style:"style",Tag:"tag",CDATA:"cdata",Doctype:"doctype",isTag:function(n){return n.type==="tag"||n.type==="script"||n.type==="style"}},lg={},yye={get exports(){return lg},set exports(n){lg=n}};yye.exports={get firstChild(){var n=this.children;return n&&n[0]||null},get lastChild(){var n=this.children;return n&&n[n.length-1]||null},get nodeType(){return HM[this.type]||HM.element}};var BM={tagName:"name",childNodes:"children",parentNode:"parent",previousSibling:"prev",nextSibling:"next",nodeValue:"data"},HM={element:1,text:3,cdata:4,comment:8};Object.keys(BM).forEach(function(n){BM[n]});var u_={},_ye={get exports(){return u_},set exports(n){u_=n}},xye=lg,Sye=_ye.exports=Object.create(xye),VM={tagName:"name"};Object.keys(VM).forEach(function(n){var e=VM[n];Object.defineProperty(Sye,n,{get:function(){return this[e]||null},set:function(t){return this[e]=t,t}})});var is=Hd,y1=/\s+/g,wye=lg,bye=u_;function mr(n,e,t){typeof n=="object"?(t=e,e=n,n=null):typeof e=="function"&&(t=e,e=GM),this._callback=n,this._options=e||GM,this._elementCB=t,this.dom=[],this._done=!1,this._tagStack=[],this._parser=this._parser||null}var GM={normalizeWhitespace:!1,withStartIndices:!1,withEndIndices:!1};mr.prototype.onparserinit=function(n){this._parser=n};mr.prototype.onreset=function(){mr.call(this,this._callback,this._options,this._elementCB)};mr.prototype.onend=function(){this._done||(this._done=!0,this._parser=null,this._handleCallback(null))};mr.prototype._handleCallback=mr.prototype.onerror=function(n){if(typeof this._callback=="function")this._callback(n,this.dom);else if(n)throw n};mr.prototype.onclosetag=function(){var n=this._tagStack.pop();this._options.withEndIndices&&n&&(n.endIndex=this._parser.endIndex),this._elementCB&&this._elementCB(n)};mr.prototype._createDomElement=function(n){if(!this._options.withDomLvl1)return n;var e;n.type==="tag"?e=Object.create(bye):e=Object.create(wye);for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t]);return e};mr.prototype._addDomElement=function(n){var e=this._tagStack[this._tagStack.length-1],t=e?e.children:this.dom,r=t[t.length-1];n.next=null,this._options.withStartIndices&&(n.startIndex=this._parser.startIndex),this._options.withEndIndices&&(n.endIndex=this._parser.endIndex),r?(n.prev=r,r.next=n):n.prev=null,t.push(n),n.parent=e||null};mr.prototype.onopentag=function(n,e){var t={type:n==="script"?is.Script:n==="style"?is.Style:is.Tag,name:n,attribs:e,children:[]},r=this._createDomElement(t);this._addDomElement(r),this._tagStack.push(r)};mr.prototype.ontext=function(n){var e=this._options.normalizeWhitespace||this._options.ignoreWhitespace,t;if(!this._tagStack.length&&this.dom.length&&(t=this.dom[this.dom.length-1]).type===is.Text)e?t.data=(t.data+n).replace(y1," "):t.data+=n;else if(this._tagStack.length&&(t=this._tagStack[this._tagStack.length-1])&&(t=t.children[t.children.length-1])&&t.type===is.Text)e?t.data=(t.data+n).replace(y1," "):t.data+=n;else{e&&(n=n.replace(y1," "));var r=this._createDomElement({data:n,type:is.Text});this._addDomElement(r)}};mr.prototype.oncomment=function(n){var e=this._tagStack[this._tagStack.length-1];if(e&&e.type===is.Comment){e.data+=n;return}var t={data:n,type:is.Comment},r=this._createDomElement(t);this._addDomElement(r),this._tagStack.push(r)};mr.prototype.oncdatastart=function(){var n={children:[{data:"",type:is.Text}],type:is.CDATA},e=this._createDomElement(n);this._addDomElement(e),this._tagStack.push(e)};mr.prototype.oncommentend=mr.prototype.oncdataend=function(){this._tagStack.pop()};mr.prototype.onprocessinginstruction=function(n,e){var t=this._createDomElement({name:n,data:e,type:is.Directive});this._addDomElement(t)};var s3=mr,cg={},Eye={get exports(){return cg},set exports(n){cg=n}},ug={},Mye={get exports(){return ug},set exports(n){ug=n}},_1={},qM;function Tye(){return qM||(qM=1,function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.Doctype=n.CDATA=n.Tag=n.Style=n.Script=n.Comment=n.Directive=n.Text=n.Root=n.isTag=n.ElementType=void 0;var e;(function(r){r.Root="root",r.Text="text",r.Directive="directive",r.Comment="comment",r.Script="script",r.Style="style",r.Tag="tag",r.CDATA="cdata",r.Doctype="doctype"})(e=n.ElementType||(n.ElementType={}));function t(r){return r.type===e.Tag||r.type===e.Script||r.type===e.Style}n.isTag=t,n.Root=e.Root,n.Text=e.Text,n.Directive=e.Directive,n.Comment=e.Comment,n.Script=e.Script,n.Style=e.Style,n.Tag=e.Tag,n.CDATA=e.CDATA,n.Doctype=e.Doctype}(_1)),_1}var x1={},Vs={};const Aye="Á",Cye="á",Rye="Ă",Pye="ă",Lye="∾",Nye="∿",Iye="∾̳",Dye="Â",kye="â",Oye="´",$ye="А",Uye="а",Fye="Æ",zye="æ",Bye="⁡",Hye="𝔄",Vye="𝔞",Gye="À",qye="à",Wye="ℵ",jye="ℵ",Xye="Α",Yye="α",Zye="Ā",Kye="ā",Jye="⨿",Qye="&",e1e="&",t1e="⩕",n1e="⩓",r1e="∧",i1e="⩜",s1e="⩘",o1e="⩚",a1e="∠",l1e="⦤",c1e="∠",u1e="⦨",f1e="⦩",d1e="⦪",h1e="⦫",p1e="⦬",m1e="⦭",g1e="⦮",v1e="⦯",y1e="∡",_1e="∟",x1e="⊾",S1e="⦝",w1e="∢",b1e="Å",E1e="⍼",M1e="Ą",T1e="ą",A1e="𝔸",C1e="𝕒",R1e="⩯",P1e="≈",L1e="⩰",N1e="≊",I1e="≋",D1e="'",k1e="⁡",O1e="≈",$1e="≊",U1e="Å",F1e="å",z1e="𝒜",B1e="𝒶",H1e="≔",V1e="*",G1e="≈",q1e="≍",W1e="Ã",j1e="ã",X1e="Ä",Y1e="ä",Z1e="∳",K1e="⨑",J1e="≌",Q1e="϶",e0e="‵",t0e="∽",n0e="⋍",r0e="∖",i0e="⫧",s0e="⊽",o0e="⌅",a0e="⌆",l0e="⌅",c0e="⎵",u0e="⎶",f0e="≌",d0e="Б",h0e="б",p0e="„",m0e="∵",g0e="∵",v0e="∵",y0e="⦰",_0e="϶",x0e="ℬ",S0e="ℬ",w0e="Β",b0e="β",E0e="ℶ",M0e="≬",T0e="𝔅",A0e="𝔟",C0e="⋂",R0e="◯",P0e="⋃",L0e="⨀",N0e="⨁",I0e="⨂",D0e="⨆",k0e="★",O0e="▽",$0e="△",U0e="⨄",F0e="⋁",z0e="⋀",B0e="⤍",H0e="⧫",V0e="▪",G0e="▴",q0e="▾",W0e="◂",j0e="▸",X0e="␣",Y0e="▒",Z0e="░",K0e="▓",J0e="█",Q0e="=⃥",e_e="≡⃥",t_e="⫭",n_e="⌐",r_e="𝔹",i_e="𝕓",s_e="⊥",o_e="⊥",a_e="⋈",l_e="⧉",c_e="┐",u_e="╕",f_e="╖",d_e="╗",h_e="┌",p_e="╒",m_e="╓",g_e="╔",v_e="─",y_e="═",__e="┬",x_e="╤",S_e="╥",w_e="╦",b_e="┴",E_e="╧",M_e="╨",T_e="╩",A_e="⊟",C_e="⊞",R_e="⊠",P_e="┘",L_e="╛",N_e="╜",I_e="╝",D_e="└",k_e="╘",O_e="╙",$_e="╚",U_e="│",F_e="║",z_e="┼",B_e="╪",H_e="╫",V_e="╬",G_e="┤",q_e="╡",W_e="╢",j_e="╣",X_e="├",Y_e="╞",Z_e="╟",K_e="╠",J_e="‵",Q_e="˘",exe="˘",txe="¦",nxe="𝒷",rxe="ℬ",ixe="⁏",sxe="∽",oxe="⋍",axe="⧅",lxe="\\",cxe="⟈",uxe="•",fxe="•",dxe="≎",hxe="⪮",pxe="≏",mxe="≎",gxe="≏",vxe="Ć",yxe="ć",_xe="⩄",xxe="⩉",Sxe="⩋",wxe="∩",bxe="⋒",Exe="⩇",Mxe="⩀",Txe="ⅅ",Axe="∩︀",Cxe="⁁",Rxe="ˇ",Pxe="ℭ",Lxe="⩍",Nxe="Č",Ixe="č",Dxe="Ç",kxe="ç",Oxe="Ĉ",$xe="ĉ",Uxe="∰",Fxe="⩌",zxe="⩐",Bxe="Ċ",Hxe="ċ",Vxe="¸",Gxe="¸",qxe="⦲",Wxe="¢",jxe="·",Xxe="·",Yxe="𝔠",Zxe="ℭ",Kxe="Ч",Jxe="ч",Qxe="✓",eSe="✓",tSe="Χ",nSe="χ",rSe="ˆ",iSe="≗",sSe="↺",oSe="↻",aSe="⊛",lSe="⊚",cSe="⊝",uSe="⊙",fSe="®",dSe="Ⓢ",hSe="⊖",pSe="⊕",mSe="⊗",gSe="○",vSe="⧃",ySe="≗",_Se="⨐",xSe="⫯",SSe="⧂",wSe="∲",bSe="”",ESe="’",MSe="♣",TSe="♣",ASe=":",CSe="∷",RSe="⩴",PSe="≔",LSe="≔",NSe=",",ISe="@",DSe="∁",kSe="∘",OSe="∁",$Se="ℂ",USe="≅",FSe="⩭",zSe="≡",BSe="∮",HSe="∯",VSe="∮",GSe="𝕔",qSe="ℂ",WSe="∐",jSe="∐",XSe="©",YSe="©",ZSe="℗",KSe="∳",JSe="↵",QSe="✗",ewe="⨯",twe="𝒞",nwe="𝒸",rwe="⫏",iwe="⫑",swe="⫐",owe="⫒",awe="⋯",lwe="⤸",cwe="⤵",uwe="⋞",fwe="⋟",dwe="↶",hwe="⤽",pwe="⩈",mwe="⩆",gwe="≍",vwe="∪",ywe="⋓",_we="⩊",xwe="⊍",Swe="⩅",wwe="∪︀",bwe="↷",Ewe="⤼",Mwe="⋞",Twe="⋟",Awe="⋎",Cwe="⋏",Rwe="¤",Pwe="↶",Lwe="↷",Nwe="⋎",Iwe="⋏",Dwe="∲",kwe="∱",Owe="⌭",$we="†",Uwe="‡",Fwe="ℸ",zwe="↓",Bwe="↡",Hwe="⇓",Vwe="‐",Gwe="⫤",qwe="⊣",Wwe="⤏",jwe="˝",Xwe="Ď",Ywe="ď",Zwe="Д",Kwe="д",Jwe="‡",Qwe="⇊",ebe="ⅅ",tbe="ⅆ",nbe="⤑",rbe="⩷",ibe="°",sbe="∇",obe="Δ",abe="δ",lbe="⦱",cbe="⥿",ube="𝔇",fbe="𝔡",dbe="⥥",hbe="⇃",pbe="⇂",mbe="´",gbe="˙",vbe="˝",ybe="`",_be="˜",xbe="⋄",Sbe="⋄",wbe="⋄",bbe="♦",Ebe="♦",Mbe="¨",Tbe="ⅆ",Abe="ϝ",Cbe="⋲",Rbe="÷",Pbe="÷",Lbe="⋇",Nbe="⋇",Ibe="Ђ",Dbe="ђ",kbe="⌞",Obe="⌍",$be="$",Ube="𝔻",Fbe="𝕕",zbe="¨",Bbe="˙",Hbe="⃜",Vbe="≐",Gbe="≑",qbe="≐",Wbe="∸",jbe="∔",Xbe="⊡",Ybe="⌆",Zbe="∯",Kbe="¨",Jbe="⇓",Qbe="⇐",eEe="⇔",tEe="⫤",nEe="⟸",rEe="⟺",iEe="⟹",sEe="⇒",oEe="⊨",aEe="⇑",lEe="⇕",cEe="∥",uEe="⤓",fEe="↓",dEe="↓",hEe="⇓",pEe="⇵",mEe="̑",gEe="⇊",vEe="⇃",yEe="⇂",_Ee="⥐",xEe="⥞",SEe="⥖",wEe="↽",bEe="⥟",EEe="⥗",MEe="⇁",TEe="↧",AEe="⊤",CEe="⤐",REe="⌟",PEe="⌌",LEe="𝒟",NEe="𝒹",IEe="Ѕ",DEe="ѕ",kEe="⧶",OEe="Đ",$Ee="đ",UEe="⋱",FEe="▿",zEe="▾",BEe="⇵",HEe="⥯",VEe="⦦",GEe="Џ",qEe="џ",WEe="⟿",jEe="É",XEe="é",YEe="⩮",ZEe="Ě",KEe="ě",JEe="Ê",QEe="ê",eMe="≖",tMe="≕",nMe="Э",rMe="э",iMe="⩷",sMe="Ė",oMe="ė",aMe="≑",lMe="ⅇ",cMe="≒",uMe="𝔈",fMe="𝔢",dMe="⪚",hMe="È",pMe="è",mMe="⪖",gMe="⪘",vMe="⪙",yMe="∈",_Me="⏧",xMe="ℓ",SMe="⪕",wMe="⪗",bMe="Ē",EMe="ē",MMe="∅",TMe="∅",AMe="◻",CMe="∅",RMe="▫",PMe=" ",LMe=" ",NMe=" ",IMe="Ŋ",DMe="ŋ",kMe=" ",OMe="Ę",$Me="ę",UMe="𝔼",FMe="𝕖",zMe="⋕",BMe="⧣",HMe="⩱",VMe="ε",GMe="Ε",qMe="ε",WMe="ϵ",jMe="≖",XMe="≕",YMe="≂",ZMe="⪖",KMe="⪕",JMe="⩵",QMe="=",eTe="≂",tTe="≟",nTe="⇌",rTe="≡",iTe="⩸",sTe="⧥",oTe="⥱",aTe="≓",lTe="ℯ",cTe="ℰ",uTe="≐",fTe="⩳",dTe="≂",hTe="Η",pTe="η",mTe="Ð",gTe="ð",vTe="Ë",yTe="ë",_Te="€",xTe="!",STe="∃",wTe="∃",bTe="ℰ",ETe="ⅇ",MTe="ⅇ",TTe="≒",ATe="Ф",CTe="ф",RTe="♀",PTe="ﬃ",LTe="ﬀ",NTe="ﬄ",ITe="𝔉",DTe="𝔣",kTe="ﬁ",OTe="◼",$Te="▪",UTe="fj",FTe="♭",zTe="ﬂ",BTe="▱",HTe="ƒ",VTe="𝔽",GTe="𝕗",qTe="∀",WTe="∀",jTe="⋔",XTe="⫙",YTe="ℱ",ZTe="⨍",KTe="½",JTe="⅓",QTe="¼",eAe="⅕",tAe="⅙",nAe="⅛",rAe="⅔",iAe="⅖",sAe="¾",oAe="⅗",aAe="⅜",lAe="⅘",cAe="⅚",uAe="⅝",fAe="⅞",dAe="⁄",hAe="⌢",pAe="𝒻",mAe="ℱ",gAe="ǵ",vAe="Γ",yAe="γ",_Ae="Ϝ",xAe="ϝ",SAe="⪆",wAe="Ğ",bAe="ğ",EAe="Ģ",MAe="Ĝ",TAe="ĝ",AAe="Г",CAe="г",RAe="Ġ",PAe="ġ",LAe="≥",NAe="≧",IAe="⪌",DAe="⋛",kAe="≥",OAe="≧",$Ae="⩾",UAe="⪩",FAe="⩾",zAe="⪀",BAe="⪂",HAe="⪄",VAe="⋛︀",GAe="⪔",qAe="𝔊",WAe="𝔤",jAe="≫",XAe="⋙",YAe="⋙",ZAe="ℷ",KAe="Ѓ",JAe="ѓ",QAe="⪥",e2e="≷",t2e="⪒",n2e="⪤",r2e="⪊",i2e="⪊",s2e="⪈",o2e="≩",a2e="⪈",l2e="≩",c2e="⋧",u2e="𝔾",f2e="𝕘",d2e="`",h2e="≥",p2e="⋛",m2e="≧",g2e="⪢",v2e="≷",y2e="⩾",_2e="≳",x2e="𝒢",S2e="ℊ",w2e="≳",b2e="⪎",E2e="⪐",M2e="⪧",T2e="⩺",A2e=">",C2e=">",R2e="≫",P2e="⋗",L2e="⦕",N2e="⩼",I2e="⪆",D2e="⥸",k2e="⋗",O2e="⋛",$2e="⪌",U2e="≷",F2e="≳",z2e="≩︀",B2e="≩︀",H2e="ˇ",V2e=" ",G2e="½",q2e="ℋ",W2e="Ъ",j2e="ъ",X2e="⥈",Y2e="↔",Z2e="⇔",K2e="↭",J2e="^",Q2e="ℏ",eCe="Ĥ",tCe="ĥ",nCe="♥",rCe="♥",iCe="…",sCe="⊹",oCe="𝔥",aCe="ℌ",lCe="ℋ",cCe="⤥",uCe="⤦",fCe="⇿",dCe="∻",hCe="↩",pCe="↪",mCe="𝕙",gCe="ℍ",vCe="―",yCe="─",_Ce="𝒽",xCe="ℋ",SCe="ℏ",wCe="Ħ",bCe="ħ",ECe="≎",MCe="≏",TCe="⁃",ACe="‐",CCe="Í",RCe="í",PCe="⁣",LCe="Î",NCe="î",ICe="И",DCe="и",kCe="İ",OCe="Е",$Ce="е",UCe="¡",FCe="⇔",zCe="𝔦",BCe="ℑ",HCe="Ì",VCe="ì",GCe="ⅈ",qCe="⨌",WCe="∭",jCe="⧜",XCe="℩",YCe="Ĳ",ZCe="ĳ",KCe="Ī",JCe="ī",QCe="ℑ",eRe="ⅈ",tRe="ℐ",nRe="ℑ",rRe="ı",iRe="ℑ",sRe="⊷",oRe="Ƶ",aRe="⇒",lRe="℅",cRe="∞",uRe="⧝",fRe="ı",dRe="⊺",hRe="∫",pRe="∬",mRe="ℤ",gRe="∫",vRe="⊺",yRe="⋂",_Re="⨗",xRe="⨼",SRe="⁣",wRe="⁢",bRe="Ё",ERe="ё",MRe="Į",TRe="į",ARe="𝕀",CRe="𝕚",RRe="Ι",PRe="ι",LRe="⨼",NRe="¿",IRe="𝒾",DRe="ℐ",kRe="∈",ORe="⋵",$Re="⋹",URe="⋴",FRe="⋳",zRe="∈",BRe="⁢",HRe="Ĩ",VRe="ĩ",GRe="І",qRe="і",WRe="Ï",jRe="ï",XRe="Ĵ",YRe="ĵ",ZRe="Й",KRe="й",JRe="𝔍",QRe="𝔧",e3e="ȷ",t3e="𝕁",n3e="𝕛",r3e="𝒥",i3e="𝒿",s3e="Ј",o3e="ј",a3e="Є",l3e="є",c3e="Κ",u3e="κ",f3e="ϰ",d3e="Ķ",h3e="ķ",p3e="К",m3e="к",g3e="𝔎",v3e="𝔨",y3e="ĸ",_3e="Х",x3e="х",S3e="Ќ",w3e="ќ",b3e="𝕂",E3e="𝕜",M3e="𝒦",T3e="𝓀",A3e="⇚",C3e="Ĺ",R3e="ĺ",P3e="⦴",L3e="ℒ",N3e="Λ",I3e="λ",D3e="⟨",k3e="⟪",O3e="⦑",$3e="⟨",U3e="⪅",F3e="ℒ",z3e="«",B3e="⇤",H3e="⤟",V3e="←",G3e="↞",q3e="⇐",W3e="⤝",j3e="↩",X3e="↫",Y3e="⤹",Z3e="⥳",K3e="↢",J3e="⤙",Q3e="⤛",ePe="⪫",tPe="⪭",nPe="⪭︀",rPe="⤌",iPe="⤎",sPe="❲",oPe="{",aPe="[",lPe="⦋",cPe="⦏",uPe="⦍",fPe="Ľ",dPe="ľ",hPe="Ļ",pPe="ļ",mPe="⌈",gPe="{",vPe="Л",yPe="л",_Pe="⤶",xPe="“",SPe="„",wPe="⥧",bPe="⥋",EPe="↲",MPe="≤",TPe="≦",APe="⟨",CPe="⇤",RPe="←",PPe="←",LPe="⇐",NPe="⇆",IPe="↢",DPe="⌈",kPe="⟦",OPe="⥡",$Pe="⥙",UPe="⇃",FPe="⌊",zPe="↽",BPe="↼",HPe="⇇",VPe="↔",GPe="↔",qPe="⇔",WPe="⇆",jPe="⇋",XPe="↭",YPe="⥎",ZPe="↤",KPe="⊣",JPe="⥚",QPe="⋋",eLe="⧏",tLe="⊲",nLe="⊴",rLe="⥑",iLe="⥠",sLe="⥘",oLe="↿",aLe="⥒",lLe="↼",cLe="⪋",uLe="⋚",fLe="≤",dLe="≦",hLe="⩽",pLe="⪨",mLe="⩽",gLe="⩿",vLe="⪁",yLe="⪃",_Le="⋚︀",xLe="⪓",SLe="⪅",wLe="⋖",bLe="⋚",ELe="⪋",MLe="⋚",TLe="≦",ALe="≶",CLe="≶",RLe="⪡",PLe="≲",LLe="⩽",NLe="≲",ILe="⥼",DLe="⌊",kLe="𝔏",OLe="𝔩",$Le="≶",ULe="⪑",FLe="⥢",zLe="↽",BLe="↼",HLe="⥪",VLe="▄",GLe="Љ",qLe="љ",WLe="⇇",jLe="≪",XLe="⋘",YLe="⌞",ZLe="⇚",KLe="⥫",JLe="◺",QLe="Ŀ",eNe="ŀ",tNe="⎰",nNe="⎰",rNe="⪉",iNe="⪉",sNe="⪇",oNe="≨",aNe="⪇",lNe="≨",cNe="⋦",uNe="⟬",fNe="⇽",dNe="⟦",hNe="⟵",pNe="⟵",mNe="⟸",gNe="⟷",vNe="⟷",yNe="⟺",_Ne="⟼",xNe="⟶",SNe="⟶",wNe="⟹",bNe="↫",ENe="↬",MNe="⦅",TNe="𝕃",ANe="𝕝",CNe="⨭",RNe="⨴",PNe="∗",LNe="_",NNe="↙",INe="↘",DNe="◊",kNe="◊",ONe="⧫",$Ne="(",UNe="⦓",FNe="⇆",zNe="⌟",BNe="⇋",HNe="⥭",VNe="‎",GNe="⊿",qNe="‹",WNe="𝓁",jNe="ℒ",XNe="↰",YNe="↰",ZNe="≲",KNe="⪍",JNe="⪏",QNe="[",eIe="‘",tIe="‚",nIe="Ł",rIe="ł",iIe="⪦",sIe="⩹",oIe="<",aIe="<",lIe="≪",cIe="⋖",uIe="⋋",fIe="⋉",dIe="⥶",hIe="⩻",pIe="◃",mIe="⊴",gIe="◂",vIe="⦖",yIe="⥊",_Ie="⥦",xIe="≨︀",SIe="≨︀",wIe="¯",bIe="♂",EIe="✠",MIe="✠",TIe="↦",AIe="↦",CIe="↧",RIe="↤",PIe="↥",LIe="▮",NIe="⨩",IIe="М",DIe="м",kIe="—",OIe="∺",$Ie="∡",UIe=" ",FIe="ℳ",zIe="𝔐",BIe="𝔪",HIe="℧",VIe="µ",GIe="*",qIe="⫰",WIe="∣",jIe="·",XIe="⊟",YIe="−",ZIe="∸",KIe="⨪",JIe="∓",QIe="⫛",eDe="…",tDe="∓",nDe="⊧",rDe="𝕄",iDe="𝕞",sDe="∓",oDe="𝓂",aDe="ℳ",lDe="∾",cDe="Μ",uDe="μ",fDe="⊸",dDe="⊸",hDe="∇",pDe="Ń",mDe="ń",gDe="∠⃒",vDe="≉",yDe="⩰̸",_De="≋̸",xDe="ŉ",SDe="≉",wDe="♮",bDe="ℕ",EDe="♮",MDe=" ",TDe="≎̸",ADe="≏̸",CDe="⩃",RDe="Ň",PDe="ň",LDe="Ņ",NDe="ņ",IDe="≇",DDe="⩭̸",kDe="⩂",ODe="Н",$De="н",UDe="–",FDe="⤤",zDe="↗",BDe="⇗",HDe="↗",VDe="≠",GDe="≐̸",qDe="​",WDe="​",jDe="​",XDe="​",YDe="≢",ZDe="⤨",KDe="≂̸",JDe="≫",QDe="≪",eke=`
`,tke="∄",nke="∄",rke="𝔑",ike="𝔫",ske="≧̸",oke="≱",ake="≱",lke="≧̸",cke="⩾̸",uke="⩾̸",fke="⋙̸",dke="≵",hke="≫⃒",pke="≯",mke="≯",gke="≫̸",vke="↮",yke="⇎",_ke="⫲",xke="∋",Ske="⋼",wke="⋺",bke="∋",Eke="Њ",Mke="њ",Tke="↚",Ake="⇍",Cke="‥",Rke="≦̸",Pke="≰",Lke="↚",Nke="⇍",Ike="↮",Dke="⇎",kke="≰",Oke="≦̸",$ke="⩽̸",Uke="⩽̸",Fke="≮",zke="⋘̸",Bke="≴",Hke="≪⃒",Vke="≮",Gke="⋪",qke="⋬",Wke="≪̸",jke="∤",Xke="⁠",Yke=" ",Zke="𝕟",Kke="ℕ",Jke="⫬",Qke="¬",eOe="≢",tOe="≭",nOe="∦",rOe="∉",iOe="≠",sOe="≂̸",oOe="∄",aOe="≯",lOe="≱",cOe="≧̸",uOe="≫̸",fOe="≹",dOe="⩾̸",hOe="≵",pOe="≎̸",mOe="≏̸",gOe="∉",vOe="⋵̸",yOe="⋹̸",_Oe="∉",xOe="⋷",SOe="⋶",wOe="⧏̸",bOe="⋪",EOe="⋬",MOe="≮",TOe="≰",AOe="≸",COe="≪̸",ROe="⩽̸",POe="≴",LOe="⪢̸",NOe="⪡̸",IOe="∌",DOe="∌",kOe="⋾",OOe="⋽",$Oe="⊀",UOe="⪯̸",FOe="⋠",zOe="∌",BOe="⧐̸",HOe="⋫",VOe="⋭",GOe="⊏̸",qOe="⋢",WOe="⊐̸",jOe="⋣",XOe="⊂⃒",YOe="⊈",ZOe="⊁",KOe="⪰̸",JOe="⋡",QOe="≿̸",e$e="⊃⃒",t$e="⊉",n$e="≁",r$e="≄",i$e="≇",s$e="≉",o$e="∤",a$e="∦",l$e="∦",c$e="⫽⃥",u$e="∂̸",f$e="⨔",d$e="⊀",h$e="⋠",p$e="⊀",m$e="⪯̸",g$e="⪯̸",v$e="⤳̸",y$e="↛",_$e="⇏",x$e="↝̸",S$e="↛",w$e="⇏",b$e="⋫",E$e="⋭",M$e="⊁",T$e="⋡",A$e="⪰̸",C$e="𝒩",R$e="𝓃",P$e="∤",L$e="∦",N$e="≁",I$e="≄",D$e="≄",k$e="∤",O$e="∦",$$e="⋢",U$e="⋣",F$e="⊄",z$e="⫅̸",B$e="⊈",H$e="⊂⃒",V$e="⊈",G$e="⫅̸",q$e="⊁",W$e="⪰̸",j$e="⊅",X$e="⫆̸",Y$e="⊉",Z$e="⊃⃒",K$e="⊉",J$e="⫆̸",Q$e="≹",eUe="Ñ",tUe="ñ",nUe="≸",rUe="⋪",iUe="⋬",sUe="⋫",oUe="⋭",aUe="Ν",lUe="ν",cUe="#",uUe="№",fUe=" ",dUe="≍⃒",hUe="⊬",pUe="⊭",mUe="⊮",gUe="⊯",vUe="≥⃒",yUe=">⃒",_Ue="⤄",xUe="⧞",SUe="⤂",wUe="≤⃒",bUe="<⃒",EUe="⊴⃒",MUe="⤃",TUe="⊵⃒",AUe="∼⃒",CUe="⤣",RUe="↖",PUe="⇖",LUe="↖",NUe="⤧",IUe="Ó",DUe="ó",kUe="⊛",OUe="Ô",$Ue="ô",UUe="⊚",FUe="О",zUe="о",BUe="⊝",HUe="Ő",VUe="ő",GUe="⨸",qUe="⊙",WUe="⦼",jUe="Œ",XUe="œ",YUe="⦿",ZUe="𝔒",KUe="𝔬",JUe="˛",QUe="Ò",eFe="ò",tFe="⧁",nFe="⦵",rFe="Ω",iFe="∮",sFe="↺",oFe="⦾",aFe="⦻",lFe="‾",cFe="⧀",uFe="Ō",fFe="ō",dFe="Ω",hFe="ω",pFe="Ο",mFe="ο",gFe="⦶",vFe="⊖",yFe="𝕆",_Fe="𝕠",xFe="⦷",SFe="“",wFe="‘",bFe="⦹",EFe="⊕",MFe="↻",TFe="⩔",AFe="∨",CFe="⩝",RFe="ℴ",PFe="ℴ",LFe="ª",NFe="º",IFe="⊶",DFe="⩖",kFe="⩗",OFe="⩛",$Fe="Ⓢ",UFe="𝒪",FFe="ℴ",zFe="Ø",BFe="ø",HFe="⊘",VFe="Õ",GFe="õ",qFe="⨶",WFe="⨷",jFe="⊗",XFe="Ö",YFe="ö",ZFe="⌽",KFe="‾",JFe="⏞",QFe="⎴",e4e="⏜",t4e="¶",n4e="∥",r4e="∥",i4e="⫳",s4e="⫽",o4e="∂",a4e="∂",l4e="П",c4e="п",u4e="%",f4e=".",d4e="‰",h4e="⊥",p4e="‱",m4e="𝔓",g4e="𝔭",v4e="Φ",y4e="φ",_4e="ϕ",x4e="ℳ",S4e="☎",w4e="Π",b4e="π",E4e="⋔",M4e="ϖ",T4e="ℏ",A4e="ℎ",C4e="ℏ",R4e="⨣",P4e="⊞",L4e="⨢",N4e="+",I4e="∔",D4e="⨥",k4e="⩲",O4e="±",$4e="±",U4e="⨦",F4e="⨧",z4e="±",B4e="ℌ",H4e="⨕",V4e="𝕡",G4e="ℙ",q4e="£",W4e="⪷",j4e="⪻",X4e="≺",Y4e="≼",Z4e="⪷",K4e="≺",J4e="≼",Q4e="≺",eze="⪯",tze="≼",nze="≾",rze="⪯",ize="⪹",sze="⪵",oze="⋨",aze="⪯",lze="⪳",cze="≾",uze="′",fze="″",dze="ℙ",hze="⪹",pze="⪵",mze="⋨",gze="∏",vze="∏",yze="⌮",_ze="⌒",xze="⌓",Sze="∝",wze="∝",bze="∷",Eze="∝",Mze="≾",Tze="⊰",Aze="𝒫",Cze="𝓅",Rze="Ψ",Pze="ψ",Lze=" ",Nze="𝔔",Ize="𝔮",Dze="⨌",kze="𝕢",Oze="ℚ",$ze="⁗",Uze="𝒬",Fze="𝓆",zze="ℍ",Bze="⨖",Hze="?",Vze="≟",Gze='"',qze='"',Wze="⇛",jze="∽̱",Xze="Ŕ",Yze="ŕ",Zze="√",Kze="⦳",Jze="⟩",Qze="⟫",eBe="⦒",tBe="⦥",nBe="⟩",rBe="»",iBe="⥵",sBe="⇥",oBe="⤠",aBe="⤳",lBe="→",cBe="↠",uBe="⇒",fBe="⤞",dBe="↪",hBe="↬",pBe="⥅",mBe="⥴",gBe="⤖",vBe="↣",yBe="↝",_Be="⤚",xBe="⤜",SBe="∶",wBe="ℚ",bBe="⤍",EBe="⤏",MBe="⤐",TBe="❳",ABe="}",CBe="]",RBe="⦌",PBe="⦎",LBe="⦐",NBe="Ř",IBe="ř",DBe="Ŗ",kBe="ŗ",OBe="⌉",$Be="}",UBe="Р",FBe="р",zBe="⤷",BBe="⥩",HBe="”",VBe="”",GBe="↳",qBe="ℜ",WBe="ℛ",jBe="ℜ",XBe="ℝ",YBe="ℜ",ZBe="▭",KBe="®",JBe="®",QBe="∋",e5e="⇋",t5e="⥯",n5e="⥽",r5e="⌋",i5e="𝔯",s5e="ℜ",o5e="⥤",a5e="⇁",l5e="⇀",c5e="⥬",u5e="Ρ",f5e="ρ",d5e="ϱ",h5e="⟩",p5e="⇥",m5e="→",g5e="→",v5e="⇒",y5e="⇄",_5e="↣",x5e="⌉",S5e="⟧",w5e="⥝",b5e="⥕",E5e="⇂",M5e="⌋",T5e="⇁",A5e="⇀",C5e="⇄",R5e="⇌",P5e="⇉",L5e="↝",N5e="↦",I5e="⊢",D5e="⥛",k5e="⋌",O5e="⧐",$5e="⊳",U5e="⊵",F5e="⥏",z5e="⥜",B5e="⥔",H5e="↾",V5e="⥓",G5e="⇀",q5e="˚",W5e="≓",j5e="⇄",X5e="⇌",Y5e="‏",Z5e="⎱",K5e="⎱",J5e="⫮",Q5e="⟭",eHe="⇾",tHe="⟧",nHe="⦆",rHe="𝕣",iHe="ℝ",sHe="⨮",oHe="⨵",aHe="⥰",lHe=")",cHe="⦔",uHe="⨒",fHe="⇉",dHe="⇛",hHe="›",pHe="𝓇",mHe="ℛ",gHe="↱",vHe="↱",yHe="]",_He="’",xHe="’",SHe="⋌",wHe="⋊",bHe="▹",EHe="⊵",MHe="▸",THe="⧎",AHe="⧴",CHe="⥨",RHe="℞",PHe="Ś",LHe="ś",NHe="‚",IHe="⪸",DHe="Š",kHe="š",OHe="⪼",$He="≻",UHe="≽",FHe="⪰",zHe="⪴",BHe="Ş",HHe="ş",VHe="Ŝ",GHe="ŝ",qHe="⪺",WHe="⪶",jHe="⋩",XHe="⨓",YHe="≿",ZHe="С",KHe="с",JHe="⊡",QHe="⋅",eVe="⩦",tVe="⤥",nVe="↘",rVe="⇘",iVe="↘",sVe="§",oVe=";",aVe="⤩",lVe="∖",cVe="∖",uVe="✶",fVe="𝔖",dVe="𝔰",hVe="⌢",pVe="♯",mVe="Щ",gVe="щ",vVe="Ш",yVe="ш",_Ve="↓",xVe="←",SVe="∣",wVe="∥",bVe="→",EVe="↑",MVe="­",TVe="Σ",AVe="σ",CVe="ς",RVe="ς",PVe="∼",LVe="⩪",NVe="≃",IVe="≃",DVe="⪞",kVe="⪠",OVe="⪝",$Ve="⪟",UVe="≆",FVe="⨤",zVe="⥲",BVe="←",HVe="∘",VVe="∖",GVe="⨳",qVe="⧤",WVe="∣",jVe="⌣",XVe="⪪",YVe="⪬",ZVe="⪬︀",KVe="Ь",JVe="ь",QVe="⌿",e8e="⧄",t8e="/",n8e="𝕊",r8e="𝕤",i8e="♠",s8e="♠",o8e="∥",a8e="⊓",l8e="⊓︀",c8e="⊔",u8e="⊔︀",f8e="√",d8e="⊏",h8e="⊑",p8e="⊏",m8e="⊑",g8e="⊐",v8e="⊒",y8e="⊐",_8e="⊒",x8e="□",S8e="□",w8e="⊓",b8e="⊏",E8e="⊑",M8e="⊐",T8e="⊒",A8e="⊔",C8e="▪",R8e="□",P8e="▪",L8e="→",N8e="𝒮",I8e="𝓈",D8e="∖",k8e="⌣",O8e="⋆",$8e="⋆",U8e="☆",F8e="★",z8e="ϵ",B8e="ϕ",H8e="¯",V8e="⊂",G8e="⋐",q8e="⪽",W8e="⫅",j8e="⊆",X8e="⫃",Y8e="⫁",Z8e="⫋",K8e="⊊",J8e="⪿",Q8e="⥹",e6e="⊂",t6e="⋐",n6e="⊆",r6e="⫅",i6e="⊆",s6e="⊊",o6e="⫋",a6e="⫇",l6e="⫕",c6e="⫓",u6e="⪸",f6e="≻",d6e="≽",h6e="≻",p6e="⪰",m6e="≽",g6e="≿",v6e="⪰",y6e="⪺",_6e="⪶",x6e="⋩",S6e="≿",w6e="∋",b6e="∑",E6e="∑",M6e="♪",T6e="¹",A6e="²",C6e="³",R6e="⊃",P6e="⋑",L6e="⪾",N6e="⫘",I6e="⫆",D6e="⊇",k6e="⫄",O6e="⊃",$6e="⊇",U6e="⟉",F6e="⫗",z6e="⥻",B6e="⫂",H6e="⫌",V6e="⊋",G6e="⫀",q6e="⊃",W6e="⋑",j6e="⊇",X6e="⫆",Y6e="⊋",Z6e="⫌",K6e="⫈",J6e="⫔",Q6e="⫖",eGe="⤦",tGe="↙",nGe="⇙",rGe="↙",iGe="⤪",sGe="ß",oGe="	",aGe="⌖",lGe="Τ",cGe="τ",uGe="⎴",fGe="Ť",dGe="ť",hGe="Ţ",pGe="ţ",mGe="Т",gGe="т",vGe="⃛",yGe="⌕",_Ge="𝔗",xGe="𝔱",SGe="∴",wGe="∴",bGe="∴",EGe="Θ",MGe="θ",TGe="ϑ",AGe="ϑ",CGe="≈",RGe="∼",PGe="  ",LGe=" ",NGe=" ",IGe="≈",DGe="∼",kGe="Þ",OGe="þ",$Ge="˜",UGe="∼",FGe="≃",zGe="≅",BGe="≈",HGe="⨱",VGe="⊠",GGe="×",qGe="⨰",WGe="∭",jGe="⤨",XGe="⌶",YGe="⫱",ZGe="⊤",KGe="𝕋",JGe="𝕥",QGe="⫚",eqe="⤩",tqe="‴",nqe="™",rqe="™",iqe="▵",sqe="▿",oqe="◃",aqe="⊴",lqe="≜",cqe="▹",uqe="⊵",fqe="◬",dqe="≜",hqe="⨺",pqe="⃛",mqe="⨹",gqe="⧍",vqe="⨻",yqe="⏢",_qe="𝒯",xqe="𝓉",Sqe="Ц",wqe="ц",bqe="Ћ",Eqe="ћ",Mqe="Ŧ",Tqe="ŧ",Aqe="≬",Cqe="↞",Rqe="↠",Pqe="Ú",Lqe="ú",Nqe="↑",Iqe="↟",Dqe="⇑",kqe="⥉",Oqe="Ў",$qe="ў",Uqe="Ŭ",Fqe="ŭ",zqe="Û",Bqe="û",Hqe="У",Vqe="у",Gqe="⇅",qqe="Ű",Wqe="ű",jqe="⥮",Xqe="⥾",Yqe="𝔘",Zqe="𝔲",Kqe="Ù",Jqe="ù",Qqe="⥣",eWe="↿",tWe="↾",nWe="▀",rWe="⌜",iWe="⌜",sWe="⌏",oWe="◸",aWe="Ū",lWe="ū",cWe="¨",uWe="_",fWe="⏟",dWe="⎵",hWe="⏝",pWe="⋃",mWe="⊎",gWe="Ų",vWe="ų",yWe="𝕌",_We="𝕦",xWe="⤒",SWe="↑",wWe="↑",bWe="⇑",EWe="⇅",MWe="↕",TWe="↕",AWe="⇕",CWe="⥮",RWe="↿",PWe="↾",LWe="⊎",NWe="↖",IWe="↗",DWe="υ",kWe="ϒ",OWe="ϒ",$We="Υ",UWe="υ",FWe="↥",zWe="⊥",BWe="⇈",HWe="⌝",VWe="⌝",GWe="⌎",qWe="Ů",WWe="ů",jWe="◹",XWe="𝒰",YWe="𝓊",ZWe="⋰",KWe="Ũ",JWe="ũ",QWe="▵",eje="▴",tje="⇈",nje="Ü",rje="ü",ije="⦧",sje="⦜",oje="ϵ",aje="ϰ",lje="∅",cje="ϕ",uje="ϖ",fje="∝",dje="↕",hje="⇕",pje="ϱ",mje="ς",gje="⊊︀",vje="⫋︀",yje="⊋︀",_je="⫌︀",xje="ϑ",Sje="⊲",wje="⊳",bje="⫨",Eje="⫫",Mje="⫩",Tje="В",Aje="в",Cje="⊢",Rje="⊨",Pje="⊩",Lje="⊫",Nje="⫦",Ije="⊻",Dje="∨",kje="⋁",Oje="≚",$je="⋮",Uje="|",Fje="‖",zje="|",Bje="‖",Hje="∣",Vje="|",Gje="❘",qje="≀",Wje=" ",jje="𝔙",Xje="𝔳",Yje="⊲",Zje="⊂⃒",Kje="⊃⃒",Jje="𝕍",Qje="𝕧",e7e="∝",t7e="⊳",n7e="𝒱",r7e="𝓋",i7e="⫋︀",s7e="⊊︀",o7e="⫌︀",a7e="⊋︀",l7e="⊪",c7e="⦚",u7e="Ŵ",f7e="ŵ",d7e="⩟",h7e="∧",p7e="⋀",m7e="≙",g7e="℘",v7e="𝔚",y7e="𝔴",_7e="𝕎",x7e="𝕨",S7e="℘",w7e="≀",b7e="≀",E7e="𝒲",M7e="𝓌",T7e="⋂",A7e="◯",C7e="⋃",R7e="▽",P7e="𝔛",L7e="𝔵",N7e="⟷",I7e="⟺",D7e="Ξ",k7e="ξ",O7e="⟵",$7e="⟸",U7e="⟼",F7e="⋻",z7e="⨀",B7e="𝕏",H7e="𝕩",V7e="⨁",G7e="⨂",q7e="⟶",W7e="⟹",j7e="𝒳",X7e="𝓍",Y7e="⨆",Z7e="⨄",K7e="△",J7e="⋁",Q7e="⋀",e9e="Ý",t9e="ý",n9e="Я",r9e="я",i9e="Ŷ",s9e="ŷ",o9e="Ы",a9e="ы",l9e="¥",c9e="𝔜",u9e="𝔶",f9e="Ї",d9e="ї",h9e="𝕐",p9e="𝕪",m9e="𝒴",g9e="𝓎",v9e="Ю",y9e="ю",_9e="ÿ",x9e="Ÿ",S9e="Ź",w9e="ź",b9e="Ž",E9e="ž",M9e="З",T9e="з",A9e="Ż",C9e="ż",R9e="ℨ",P9e="​",L9e="Ζ",N9e="ζ",I9e="𝔷",D9e="ℨ",k9e="Ж",O9e="ж",$9e="⇝",U9e="𝕫",F9e="ℤ",z9e="𝒵",B9e="𝓏",H9e="‍",V9e="‌",o3={Aacute:Aye,aacute:Cye,Abreve:Rye,abreve:Pye,ac:Lye,acd:Nye,acE:Iye,Acirc:Dye,acirc:kye,acute:Oye,Acy:$ye,acy:Uye,AElig:Fye,aelig:zye,af:Bye,Afr:Hye,afr:Vye,Agrave:Gye,agrave:qye,alefsym:Wye,aleph:jye,Alpha:Xye,alpha:Yye,Amacr:Zye,amacr:Kye,amalg:Jye,amp:Qye,AMP:e1e,andand:t1e,And:n1e,and:r1e,andd:i1e,andslope:s1e,andv:o1e,ang:a1e,ange:l1e,angle:c1e,angmsdaa:u1e,angmsdab:f1e,angmsdac:d1e,angmsdad:h1e,angmsdae:p1e,angmsdaf:m1e,angmsdag:g1e,angmsdah:v1e,angmsd:y1e,angrt:_1e,angrtvb:x1e,angrtvbd:S1e,angsph:w1e,angst:b1e,angzarr:E1e,Aogon:M1e,aogon:T1e,Aopf:A1e,aopf:C1e,apacir:R1e,ap:P1e,apE:L1e,ape:N1e,apid:I1e,apos:D1e,ApplyFunction:k1e,approx:O1e,approxeq:$1e,Aring:U1e,aring:F1e,Ascr:z1e,ascr:B1e,Assign:H1e,ast:V1e,asymp:G1e,asympeq:q1e,Atilde:W1e,atilde:j1e,Auml:X1e,auml:Y1e,awconint:Z1e,awint:K1e,backcong:J1e,backepsilon:Q1e,backprime:e0e,backsim:t0e,backsimeq:n0e,Backslash:r0e,Barv:i0e,barvee:s0e,barwed:o0e,Barwed:a0e,barwedge:l0e,bbrk:c0e,bbrktbrk:u0e,bcong:f0e,Bcy:d0e,bcy:h0e,bdquo:p0e,becaus:m0e,because:g0e,Because:v0e,bemptyv:y0e,bepsi:_0e,bernou:x0e,Bernoullis:S0e,Beta:w0e,beta:b0e,beth:E0e,between:M0e,Bfr:T0e,bfr:A0e,bigcap:C0e,bigcirc:R0e,bigcup:P0e,bigodot:L0e,bigoplus:N0e,bigotimes:I0e,bigsqcup:D0e,bigstar:k0e,bigtriangledown:O0e,bigtriangleup:$0e,biguplus:U0e,bigvee:F0e,bigwedge:z0e,bkarow:B0e,blacklozenge:H0e,blacksquare:V0e,blacktriangle:G0e,blacktriangledown:q0e,blacktriangleleft:W0e,blacktriangleright:j0e,blank:X0e,blk12:Y0e,blk14:Z0e,blk34:K0e,block:J0e,bne:Q0e,bnequiv:e_e,bNot:t_e,bnot:n_e,Bopf:r_e,bopf:i_e,bot:s_e,bottom:o_e,bowtie:a_e,boxbox:l_e,boxdl:c_e,boxdL:u_e,boxDl:f_e,boxDL:d_e,boxdr:h_e,boxdR:p_e,boxDr:m_e,boxDR:g_e,boxh:v_e,boxH:y_e,boxhd:__e,boxHd:x_e,boxhD:S_e,boxHD:w_e,boxhu:b_e,boxHu:E_e,boxhU:M_e,boxHU:T_e,boxminus:A_e,boxplus:C_e,boxtimes:R_e,boxul:P_e,boxuL:L_e,boxUl:N_e,boxUL:I_e,boxur:D_e,boxuR:k_e,boxUr:O_e,boxUR:$_e,boxv:U_e,boxV:F_e,boxvh:z_e,boxvH:B_e,boxVh:H_e,boxVH:V_e,boxvl:G_e,boxvL:q_e,boxVl:W_e,boxVL:j_e,boxvr:X_e,boxvR:Y_e,boxVr:Z_e,boxVR:K_e,bprime:J_e,breve:Q_e,Breve:exe,brvbar:txe,bscr:nxe,Bscr:rxe,bsemi:ixe,bsim:sxe,bsime:oxe,bsolb:axe,bsol:lxe,bsolhsub:cxe,bull:uxe,bullet:fxe,bump:dxe,bumpE:hxe,bumpe:pxe,Bumpeq:mxe,bumpeq:gxe,Cacute:vxe,cacute:yxe,capand:_xe,capbrcup:xxe,capcap:Sxe,cap:wxe,Cap:bxe,capcup:Exe,capdot:Mxe,CapitalDifferentialD:Txe,caps:Axe,caret:Cxe,caron:Rxe,Cayleys:Pxe,ccaps:Lxe,Ccaron:Nxe,ccaron:Ixe,Ccedil:Dxe,ccedil:kxe,Ccirc:Oxe,ccirc:$xe,Cconint:Uxe,ccups:Fxe,ccupssm:zxe,Cdot:Bxe,cdot:Hxe,cedil:Vxe,Cedilla:Gxe,cemptyv:qxe,cent:Wxe,centerdot:jxe,CenterDot:Xxe,cfr:Yxe,Cfr:Zxe,CHcy:Kxe,chcy:Jxe,check:Qxe,checkmark:eSe,Chi:tSe,chi:nSe,circ:rSe,circeq:iSe,circlearrowleft:sSe,circlearrowright:oSe,circledast:aSe,circledcirc:lSe,circleddash:cSe,CircleDot:uSe,circledR:fSe,circledS:dSe,CircleMinus:hSe,CirclePlus:pSe,CircleTimes:mSe,cir:gSe,cirE:vSe,cire:ySe,cirfnint:_Se,cirmid:xSe,cirscir:SSe,ClockwiseContourIntegral:wSe,CloseCurlyDoubleQuote:bSe,CloseCurlyQuote:ESe,clubs:MSe,clubsuit:TSe,colon:ASe,Colon:CSe,Colone:RSe,colone:PSe,coloneq:LSe,comma:NSe,commat:ISe,comp:DSe,compfn:kSe,complement:OSe,complexes:$Se,cong:USe,congdot:FSe,Congruent:zSe,conint:BSe,Conint:HSe,ContourIntegral:VSe,copf:GSe,Copf:qSe,coprod:WSe,Coproduct:jSe,copy:XSe,COPY:YSe,copysr:ZSe,CounterClockwiseContourIntegral:KSe,crarr:JSe,cross:QSe,Cross:ewe,Cscr:twe,cscr:nwe,csub:rwe,csube:iwe,csup:swe,csupe:owe,ctdot:awe,cudarrl:lwe,cudarrr:cwe,cuepr:uwe,cuesc:fwe,cularr:dwe,cularrp:hwe,cupbrcap:pwe,cupcap:mwe,CupCap:gwe,cup:vwe,Cup:ywe,cupcup:_we,cupdot:xwe,cupor:Swe,cups:wwe,curarr:bwe,curarrm:Ewe,curlyeqprec:Mwe,curlyeqsucc:Twe,curlyvee:Awe,curlywedge:Cwe,curren:Rwe,curvearrowleft:Pwe,curvearrowright:Lwe,cuvee:Nwe,cuwed:Iwe,cwconint:Dwe,cwint:kwe,cylcty:Owe,dagger:$we,Dagger:Uwe,daleth:Fwe,darr:zwe,Darr:Bwe,dArr:Hwe,dash:Vwe,Dashv:Gwe,dashv:qwe,dbkarow:Wwe,dblac:jwe,Dcaron:Xwe,dcaron:Ywe,Dcy:Zwe,dcy:Kwe,ddagger:Jwe,ddarr:Qwe,DD:ebe,dd:tbe,DDotrahd:nbe,ddotseq:rbe,deg:ibe,Del:sbe,Delta:obe,delta:abe,demptyv:lbe,dfisht:cbe,Dfr:ube,dfr:fbe,dHar:dbe,dharl:hbe,dharr:pbe,DiacriticalAcute:mbe,DiacriticalDot:gbe,DiacriticalDoubleAcute:vbe,DiacriticalGrave:ybe,DiacriticalTilde:_be,diam:xbe,diamond:Sbe,Diamond:wbe,diamondsuit:bbe,diams:Ebe,die:Mbe,DifferentialD:Tbe,digamma:Abe,disin:Cbe,div:Rbe,divide:Pbe,divideontimes:Lbe,divonx:Nbe,DJcy:Ibe,djcy:Dbe,dlcorn:kbe,dlcrop:Obe,dollar:$be,Dopf:Ube,dopf:Fbe,Dot:zbe,dot:Bbe,DotDot:Hbe,doteq:Vbe,doteqdot:Gbe,DotEqual:qbe,dotminus:Wbe,dotplus:jbe,dotsquare:Xbe,doublebarwedge:Ybe,DoubleContourIntegral:Zbe,DoubleDot:Kbe,DoubleDownArrow:Jbe,DoubleLeftArrow:Qbe,DoubleLeftRightArrow:eEe,DoubleLeftTee:tEe,DoubleLongLeftArrow:nEe,DoubleLongLeftRightArrow:rEe,DoubleLongRightArrow:iEe,DoubleRightArrow:sEe,DoubleRightTee:oEe,DoubleUpArrow:aEe,DoubleUpDownArrow:lEe,DoubleVerticalBar:cEe,DownArrowBar:uEe,downarrow:fEe,DownArrow:dEe,Downarrow:hEe,DownArrowUpArrow:pEe,DownBreve:mEe,downdownarrows:gEe,downharpoonleft:vEe,downharpoonright:yEe,DownLeftRightVector:_Ee,DownLeftTeeVector:xEe,DownLeftVectorBar:SEe,DownLeftVector:wEe,DownRightTeeVector:bEe,DownRightVectorBar:EEe,DownRightVector:MEe,DownTeeArrow:TEe,DownTee:AEe,drbkarow:CEe,drcorn:REe,drcrop:PEe,Dscr:LEe,dscr:NEe,DScy:IEe,dscy:DEe,dsol:kEe,Dstrok:OEe,dstrok:$Ee,dtdot:UEe,dtri:FEe,dtrif:zEe,duarr:BEe,duhar:HEe,dwangle:VEe,DZcy:GEe,dzcy:qEe,dzigrarr:WEe,Eacute:jEe,eacute:XEe,easter:YEe,Ecaron:ZEe,ecaron:KEe,Ecirc:JEe,ecirc:QEe,ecir:eMe,ecolon:tMe,Ecy:nMe,ecy:rMe,eDDot:iMe,Edot:sMe,edot:oMe,eDot:aMe,ee:lMe,efDot:cMe,Efr:uMe,efr:fMe,eg:dMe,Egrave:hMe,egrave:pMe,egs:mMe,egsdot:gMe,el:vMe,Element:yMe,elinters:_Me,ell:xMe,els:SMe,elsdot:wMe,Emacr:bMe,emacr:EMe,empty:MMe,emptyset:TMe,EmptySmallSquare:AMe,emptyv:CMe,EmptyVerySmallSquare:RMe,emsp13:PMe,emsp14:LMe,emsp:NMe,ENG:IMe,eng:DMe,ensp:kMe,Eogon:OMe,eogon:$Me,Eopf:UMe,eopf:FMe,epar:zMe,eparsl:BMe,eplus:HMe,epsi:VMe,Epsilon:GMe,epsilon:qMe,epsiv:WMe,eqcirc:jMe,eqcolon:XMe,eqsim:YMe,eqslantgtr:ZMe,eqslantless:KMe,Equal:JMe,equals:QMe,EqualTilde:eTe,equest:tTe,Equilibrium:nTe,equiv:rTe,equivDD:iTe,eqvparsl:sTe,erarr:oTe,erDot:aTe,escr:lTe,Escr:cTe,esdot:uTe,Esim:fTe,esim:dTe,Eta:hTe,eta:pTe,ETH:mTe,eth:gTe,Euml:vTe,euml:yTe,euro:_Te,excl:xTe,exist:STe,Exists:wTe,expectation:bTe,exponentiale:ETe,ExponentialE:MTe,fallingdotseq:TTe,Fcy:ATe,fcy:CTe,female:RTe,ffilig:PTe,fflig:LTe,ffllig:NTe,Ffr:ITe,ffr:DTe,filig:kTe,FilledSmallSquare:OTe,FilledVerySmallSquare:$Te,fjlig:UTe,flat:FTe,fllig:zTe,fltns:BTe,fnof:HTe,Fopf:VTe,fopf:GTe,forall:qTe,ForAll:WTe,fork:jTe,forkv:XTe,Fouriertrf:YTe,fpartint:ZTe,frac12:KTe,frac13:JTe,frac14:QTe,frac15:eAe,frac16:tAe,frac18:nAe,frac23:rAe,frac25:iAe,frac34:sAe,frac35:oAe,frac38:aAe,frac45:lAe,frac56:cAe,frac58:uAe,frac78:fAe,frasl:dAe,frown:hAe,fscr:pAe,Fscr:mAe,gacute:gAe,Gamma:vAe,gamma:yAe,Gammad:_Ae,gammad:xAe,gap:SAe,Gbreve:wAe,gbreve:bAe,Gcedil:EAe,Gcirc:MAe,gcirc:TAe,Gcy:AAe,gcy:CAe,Gdot:RAe,gdot:PAe,ge:LAe,gE:NAe,gEl:IAe,gel:DAe,geq:kAe,geqq:OAe,geqslant:$Ae,gescc:UAe,ges:FAe,gesdot:zAe,gesdoto:BAe,gesdotol:HAe,gesl:VAe,gesles:GAe,Gfr:qAe,gfr:WAe,gg:jAe,Gg:XAe,ggg:YAe,gimel:ZAe,GJcy:KAe,gjcy:JAe,gla:QAe,gl:e2e,glE:t2e,glj:n2e,gnap:r2e,gnapprox:i2e,gne:s2e,gnE:o2e,gneq:a2e,gneqq:l2e,gnsim:c2e,Gopf:u2e,gopf:f2e,grave:d2e,GreaterEqual:h2e,GreaterEqualLess:p2e,GreaterFullEqual:m2e,GreaterGreater:g2e,GreaterLess:v2e,GreaterSlantEqual:y2e,GreaterTilde:_2e,Gscr:x2e,gscr:S2e,gsim:w2e,gsime:b2e,gsiml:E2e,gtcc:M2e,gtcir:T2e,gt:A2e,GT:C2e,Gt:R2e,gtdot:P2e,gtlPar:L2e,gtquest:N2e,gtrapprox:I2e,gtrarr:D2e,gtrdot:k2e,gtreqless:O2e,gtreqqless:$2e,gtrless:U2e,gtrsim:F2e,gvertneqq:z2e,gvnE:B2e,Hacek:H2e,hairsp:V2e,half:G2e,hamilt:q2e,HARDcy:W2e,hardcy:j2e,harrcir:X2e,harr:Y2e,hArr:Z2e,harrw:K2e,Hat:J2e,hbar:Q2e,Hcirc:eCe,hcirc:tCe,hearts:nCe,heartsuit:rCe,hellip:iCe,hercon:sCe,hfr:oCe,Hfr:aCe,HilbertSpace:lCe,hksearow:cCe,hkswarow:uCe,hoarr:fCe,homtht:dCe,hookleftarrow:hCe,hookrightarrow:pCe,hopf:mCe,Hopf:gCe,horbar:vCe,HorizontalLine:yCe,hscr:_Ce,Hscr:xCe,hslash:SCe,Hstrok:wCe,hstrok:bCe,HumpDownHump:ECe,HumpEqual:MCe,hybull:TCe,hyphen:ACe,Iacute:CCe,iacute:RCe,ic:PCe,Icirc:LCe,icirc:NCe,Icy:ICe,icy:DCe,Idot:kCe,IEcy:OCe,iecy:$Ce,iexcl:UCe,iff:FCe,ifr:zCe,Ifr:BCe,Igrave:HCe,igrave:VCe,ii:GCe,iiiint:qCe,iiint:WCe,iinfin:jCe,iiota:XCe,IJlig:YCe,ijlig:ZCe,Imacr:KCe,imacr:JCe,image:QCe,ImaginaryI:eRe,imagline:tRe,imagpart:nRe,imath:rRe,Im:iRe,imof:sRe,imped:oRe,Implies:aRe,incare:lRe,in:"∈",infin:cRe,infintie:uRe,inodot:fRe,intcal:dRe,int:hRe,Int:pRe,integers:mRe,Integral:gRe,intercal:vRe,Intersection:yRe,intlarhk:_Re,intprod:xRe,InvisibleComma:SRe,InvisibleTimes:wRe,IOcy:bRe,iocy:ERe,Iogon:MRe,iogon:TRe,Iopf:ARe,iopf:CRe,Iota:RRe,iota:PRe,iprod:LRe,iquest:NRe,iscr:IRe,Iscr:DRe,isin:kRe,isindot:ORe,isinE:$Re,isins:URe,isinsv:FRe,isinv:zRe,it:BRe,Itilde:HRe,itilde:VRe,Iukcy:GRe,iukcy:qRe,Iuml:WRe,iuml:jRe,Jcirc:XRe,jcirc:YRe,Jcy:ZRe,jcy:KRe,Jfr:JRe,jfr:QRe,jmath:e3e,Jopf:t3e,jopf:n3e,Jscr:r3e,jscr:i3e,Jsercy:s3e,jsercy:o3e,Jukcy:a3e,jukcy:l3e,Kappa:c3e,kappa:u3e,kappav:f3e,Kcedil:d3e,kcedil:h3e,Kcy:p3e,kcy:m3e,Kfr:g3e,kfr:v3e,kgreen:y3e,KHcy:_3e,khcy:x3e,KJcy:S3e,kjcy:w3e,Kopf:b3e,kopf:E3e,Kscr:M3e,kscr:T3e,lAarr:A3e,Lacute:C3e,lacute:R3e,laemptyv:P3e,lagran:L3e,Lambda:N3e,lambda:I3e,lang:D3e,Lang:k3e,langd:O3e,langle:$3e,lap:U3e,Laplacetrf:F3e,laquo:z3e,larrb:B3e,larrbfs:H3e,larr:V3e,Larr:G3e,lArr:q3e,larrfs:W3e,larrhk:j3e,larrlp:X3e,larrpl:Y3e,larrsim:Z3e,larrtl:K3e,latail:J3e,lAtail:Q3e,lat:ePe,late:tPe,lates:nPe,lbarr:rPe,lBarr:iPe,lbbrk:sPe,lbrace:oPe,lbrack:aPe,lbrke:lPe,lbrksld:cPe,lbrkslu:uPe,Lcaron:fPe,lcaron:dPe,Lcedil:hPe,lcedil:pPe,lceil:mPe,lcub:gPe,Lcy:vPe,lcy:yPe,ldca:_Pe,ldquo:xPe,ldquor:SPe,ldrdhar:wPe,ldrushar:bPe,ldsh:EPe,le:MPe,lE:TPe,LeftAngleBracket:APe,LeftArrowBar:CPe,leftarrow:RPe,LeftArrow:PPe,Leftarrow:LPe,LeftArrowRightArrow:NPe,leftarrowtail:IPe,LeftCeiling:DPe,LeftDoubleBracket:kPe,LeftDownTeeVector:OPe,LeftDownVectorBar:$Pe,LeftDownVector:UPe,LeftFloor:FPe,leftharpoondown:zPe,leftharpoonup:BPe,leftleftarrows:HPe,leftrightarrow:VPe,LeftRightArrow:GPe,Leftrightarrow:qPe,leftrightarrows:WPe,leftrightharpoons:jPe,leftrightsquigarrow:XPe,LeftRightVector:YPe,LeftTeeArrow:ZPe,LeftTee:KPe,LeftTeeVector:JPe,leftthreetimes:QPe,LeftTriangleBar:eLe,LeftTriangle:tLe,LeftTriangleEqual:nLe,LeftUpDownVector:rLe,LeftUpTeeVector:iLe,LeftUpVectorBar:sLe,LeftUpVector:oLe,LeftVectorBar:aLe,LeftVector:lLe,lEg:cLe,leg:uLe,leq:fLe,leqq:dLe,leqslant:hLe,lescc:pLe,les:mLe,lesdot:gLe,lesdoto:vLe,lesdotor:yLe,lesg:_Le,lesges:xLe,lessapprox:SLe,lessdot:wLe,lesseqgtr:bLe,lesseqqgtr:ELe,LessEqualGreater:MLe,LessFullEqual:TLe,LessGreater:ALe,lessgtr:CLe,LessLess:RLe,lesssim:PLe,LessSlantEqual:LLe,LessTilde:NLe,lfisht:ILe,lfloor:DLe,Lfr:kLe,lfr:OLe,lg:$Le,lgE:ULe,lHar:FLe,lhard:zLe,lharu:BLe,lharul:HLe,lhblk:VLe,LJcy:GLe,ljcy:qLe,llarr:WLe,ll:jLe,Ll:XLe,llcorner:YLe,Lleftarrow:ZLe,llhard:KLe,lltri:JLe,Lmidot:QLe,lmidot:eNe,lmoustache:tNe,lmoust:nNe,lnap:rNe,lnapprox:iNe,lne:sNe,lnE:oNe,lneq:aNe,lneqq:lNe,lnsim:cNe,loang:uNe,loarr:fNe,lobrk:dNe,longleftarrow:hNe,LongLeftArrow:pNe,Longleftarrow:mNe,longleftrightarrow:gNe,LongLeftRightArrow:vNe,Longleftrightarrow:yNe,longmapsto:_Ne,longrightarrow:xNe,LongRightArrow:SNe,Longrightarrow:wNe,looparrowleft:bNe,looparrowright:ENe,lopar:MNe,Lopf:TNe,lopf:ANe,loplus:CNe,lotimes:RNe,lowast:PNe,lowbar:LNe,LowerLeftArrow:NNe,LowerRightArrow:INe,loz:DNe,lozenge:kNe,lozf:ONe,lpar:$Ne,lparlt:UNe,lrarr:FNe,lrcorner:zNe,lrhar:BNe,lrhard:HNe,lrm:VNe,lrtri:GNe,lsaquo:qNe,lscr:WNe,Lscr:jNe,lsh:XNe,Lsh:YNe,lsim:ZNe,lsime:KNe,lsimg:JNe,lsqb:QNe,lsquo:eIe,lsquor:tIe,Lstrok:nIe,lstrok:rIe,ltcc:iIe,ltcir:sIe,lt:oIe,LT:aIe,Lt:lIe,ltdot:cIe,lthree:uIe,ltimes:fIe,ltlarr:dIe,ltquest:hIe,ltri:pIe,ltrie:mIe,ltrif:gIe,ltrPar:vIe,lurdshar:yIe,luruhar:_Ie,lvertneqq:xIe,lvnE:SIe,macr:wIe,male:bIe,malt:EIe,maltese:MIe,Map:"⤅",map:TIe,mapsto:AIe,mapstodown:CIe,mapstoleft:RIe,mapstoup:PIe,marker:LIe,mcomma:NIe,Mcy:IIe,mcy:DIe,mdash:kIe,mDDot:OIe,measuredangle:$Ie,MediumSpace:UIe,Mellintrf:FIe,Mfr:zIe,mfr:BIe,mho:HIe,micro:VIe,midast:GIe,midcir:qIe,mid:WIe,middot:jIe,minusb:XIe,minus:YIe,minusd:ZIe,minusdu:KIe,MinusPlus:JIe,mlcp:QIe,mldr:eDe,mnplus:tDe,models:nDe,Mopf:rDe,mopf:iDe,mp:sDe,mscr:oDe,Mscr:aDe,mstpos:lDe,Mu:cDe,mu:uDe,multimap:fDe,mumap:dDe,nabla:hDe,Nacute:pDe,nacute:mDe,nang:gDe,nap:vDe,napE:yDe,napid:_De,napos:xDe,napprox:SDe,natural:wDe,naturals:bDe,natur:EDe,nbsp:MDe,nbump:TDe,nbumpe:ADe,ncap:CDe,Ncaron:RDe,ncaron:PDe,Ncedil:LDe,ncedil:NDe,ncong:IDe,ncongdot:DDe,ncup:kDe,Ncy:ODe,ncy:$De,ndash:UDe,nearhk:FDe,nearr:zDe,neArr:BDe,nearrow:HDe,ne:VDe,nedot:GDe,NegativeMediumSpace:qDe,NegativeThickSpace:WDe,NegativeThinSpace:jDe,NegativeVeryThinSpace:XDe,nequiv:YDe,nesear:ZDe,nesim:KDe,NestedGreaterGreater:JDe,NestedLessLess:QDe,NewLine:eke,nexist:tke,nexists:nke,Nfr:rke,nfr:ike,ngE:ske,nge:oke,ngeq:ake,ngeqq:lke,ngeqslant:cke,nges:uke,nGg:fke,ngsim:dke,nGt:hke,ngt:pke,ngtr:mke,nGtv:gke,nharr:vke,nhArr:yke,nhpar:_ke,ni:xke,nis:Ske,nisd:wke,niv:bke,NJcy:Eke,njcy:Mke,nlarr:Tke,nlArr:Ake,nldr:Cke,nlE:Rke,nle:Pke,nleftarrow:Lke,nLeftarrow:Nke,nleftrightarrow:Ike,nLeftrightarrow:Dke,nleq:kke,nleqq:Oke,nleqslant:$ke,nles:Uke,nless:Fke,nLl:zke,nlsim:Bke,nLt:Hke,nlt:Vke,nltri:Gke,nltrie:qke,nLtv:Wke,nmid:jke,NoBreak:Xke,NonBreakingSpace:Yke,nopf:Zke,Nopf:Kke,Not:Jke,not:Qke,NotCongruent:eOe,NotCupCap:tOe,NotDoubleVerticalBar:nOe,NotElement:rOe,NotEqual:iOe,NotEqualTilde:sOe,NotExists:oOe,NotGreater:aOe,NotGreaterEqual:lOe,NotGreaterFullEqual:cOe,NotGreaterGreater:uOe,NotGreaterLess:fOe,NotGreaterSlantEqual:dOe,NotGreaterTilde:hOe,NotHumpDownHump:pOe,NotHumpEqual:mOe,notin:gOe,notindot:vOe,notinE:yOe,notinva:_Oe,notinvb:xOe,notinvc:SOe,NotLeftTriangleBar:wOe,NotLeftTriangle:bOe,NotLeftTriangleEqual:EOe,NotLess:MOe,NotLessEqual:TOe,NotLessGreater:AOe,NotLessLess:COe,NotLessSlantEqual:ROe,NotLessTilde:POe,NotNestedGreaterGreater:LOe,NotNestedLessLess:NOe,notni:IOe,notniva:DOe,notnivb:kOe,notnivc:OOe,NotPrecedes:$Oe,NotPrecedesEqual:UOe,NotPrecedesSlantEqual:FOe,NotReverseElement:zOe,NotRightTriangleBar:BOe,NotRightTriangle:HOe,NotRightTriangleEqual:VOe,NotSquareSubset:GOe,NotSquareSubsetEqual:qOe,NotSquareSuperset:WOe,NotSquareSupersetEqual:jOe,NotSubset:XOe,NotSubsetEqual:YOe,NotSucceeds:ZOe,NotSucceedsEqual:KOe,NotSucceedsSlantEqual:JOe,NotSucceedsTilde:QOe,NotSuperset:e$e,NotSupersetEqual:t$e,NotTilde:n$e,NotTildeEqual:r$e,NotTildeFullEqual:i$e,NotTildeTilde:s$e,NotVerticalBar:o$e,nparallel:a$e,npar:l$e,nparsl:c$e,npart:u$e,npolint:f$e,npr:d$e,nprcue:h$e,nprec:p$e,npreceq:m$e,npre:g$e,nrarrc:v$e,nrarr:y$e,nrArr:_$e,nrarrw:x$e,nrightarrow:S$e,nRightarrow:w$e,nrtri:b$e,nrtrie:E$e,nsc:M$e,nsccue:T$e,nsce:A$e,Nscr:C$e,nscr:R$e,nshortmid:P$e,nshortparallel:L$e,nsim:N$e,nsime:I$e,nsimeq:D$e,nsmid:k$e,nspar:O$e,nsqsube:$$e,nsqsupe:U$e,nsub:F$e,nsubE:z$e,nsube:B$e,nsubset:H$e,nsubseteq:V$e,nsubseteqq:G$e,nsucc:q$e,nsucceq:W$e,nsup:j$e,nsupE:X$e,nsupe:Y$e,nsupset:Z$e,nsupseteq:K$e,nsupseteqq:J$e,ntgl:Q$e,Ntilde:eUe,ntilde:tUe,ntlg:nUe,ntriangleleft:rUe,ntrianglelefteq:iUe,ntriangleright:sUe,ntrianglerighteq:oUe,Nu:aUe,nu:lUe,num:cUe,numero:uUe,numsp:fUe,nvap:dUe,nvdash:hUe,nvDash:pUe,nVdash:mUe,nVDash:gUe,nvge:vUe,nvgt:yUe,nvHarr:_Ue,nvinfin:xUe,nvlArr:SUe,nvle:wUe,nvlt:bUe,nvltrie:EUe,nvrArr:MUe,nvrtrie:TUe,nvsim:AUe,nwarhk:CUe,nwarr:RUe,nwArr:PUe,nwarrow:LUe,nwnear:NUe,Oacute:IUe,oacute:DUe,oast:kUe,Ocirc:OUe,ocirc:$Ue,ocir:UUe,Ocy:FUe,ocy:zUe,odash:BUe,Odblac:HUe,odblac:VUe,odiv:GUe,odot:qUe,odsold:WUe,OElig:jUe,oelig:XUe,ofcir:YUe,Ofr:ZUe,ofr:KUe,ogon:JUe,Ograve:QUe,ograve:eFe,ogt:tFe,ohbar:nFe,ohm:rFe,oint:iFe,olarr:sFe,olcir:oFe,olcross:aFe,oline:lFe,olt:cFe,Omacr:uFe,omacr:fFe,Omega:dFe,omega:hFe,Omicron:pFe,omicron:mFe,omid:gFe,ominus:vFe,Oopf:yFe,oopf:_Fe,opar:xFe,OpenCurlyDoubleQuote:SFe,OpenCurlyQuote:wFe,operp:bFe,oplus:EFe,orarr:MFe,Or:TFe,or:AFe,ord:CFe,order:RFe,orderof:PFe,ordf:LFe,ordm:NFe,origof:IFe,oror:DFe,orslope:kFe,orv:OFe,oS:$Fe,Oscr:UFe,oscr:FFe,Oslash:zFe,oslash:BFe,osol:HFe,Otilde:VFe,otilde:GFe,otimesas:qFe,Otimes:WFe,otimes:jFe,Ouml:XFe,ouml:YFe,ovbar:ZFe,OverBar:KFe,OverBrace:JFe,OverBracket:QFe,OverParenthesis:e4e,para:t4e,parallel:n4e,par:r4e,parsim:i4e,parsl:s4e,part:o4e,PartialD:a4e,Pcy:l4e,pcy:c4e,percnt:u4e,period:f4e,permil:d4e,perp:h4e,pertenk:p4e,Pfr:m4e,pfr:g4e,Phi:v4e,phi:y4e,phiv:_4e,phmmat:x4e,phone:S4e,Pi:w4e,pi:b4e,pitchfork:E4e,piv:M4e,planck:T4e,planckh:A4e,plankv:C4e,plusacir:R4e,plusb:P4e,pluscir:L4e,plus:N4e,plusdo:I4e,plusdu:D4e,pluse:k4e,PlusMinus:O4e,plusmn:$4e,plussim:U4e,plustwo:F4e,pm:z4e,Poincareplane:B4e,pointint:H4e,popf:V4e,Popf:G4e,pound:q4e,prap:W4e,Pr:j4e,pr:X4e,prcue:Y4e,precapprox:Z4e,prec:K4e,preccurlyeq:J4e,Precedes:Q4e,PrecedesEqual:eze,PrecedesSlantEqual:tze,PrecedesTilde:nze,preceq:rze,precnapprox:ize,precneqq:sze,precnsim:oze,pre:aze,prE:lze,precsim:cze,prime:uze,Prime:fze,primes:dze,prnap:hze,prnE:pze,prnsim:mze,prod:gze,Product:vze,profalar:yze,profline:_ze,profsurf:xze,prop:Sze,Proportional:wze,Proportion:bze,propto:Eze,prsim:Mze,prurel:Tze,Pscr:Aze,pscr:Cze,Psi:Rze,psi:Pze,puncsp:Lze,Qfr:Nze,qfr:Ize,qint:Dze,qopf:kze,Qopf:Oze,qprime:$ze,Qscr:Uze,qscr:Fze,quaternions:zze,quatint:Bze,quest:Hze,questeq:Vze,quot:Gze,QUOT:qze,rAarr:Wze,race:jze,Racute:Xze,racute:Yze,radic:Zze,raemptyv:Kze,rang:Jze,Rang:Qze,rangd:eBe,range:tBe,rangle:nBe,raquo:rBe,rarrap:iBe,rarrb:sBe,rarrbfs:oBe,rarrc:aBe,rarr:lBe,Rarr:cBe,rArr:uBe,rarrfs:fBe,rarrhk:dBe,rarrlp:hBe,rarrpl:pBe,rarrsim:mBe,Rarrtl:gBe,rarrtl:vBe,rarrw:yBe,ratail:_Be,rAtail:xBe,ratio:SBe,rationals:wBe,rbarr:bBe,rBarr:EBe,RBarr:MBe,rbbrk:TBe,rbrace:ABe,rbrack:CBe,rbrke:RBe,rbrksld:PBe,rbrkslu:LBe,Rcaron:NBe,rcaron:IBe,Rcedil:DBe,rcedil:kBe,rceil:OBe,rcub:$Be,Rcy:UBe,rcy:FBe,rdca:zBe,rdldhar:BBe,rdquo:HBe,rdquor:VBe,rdsh:GBe,real:qBe,realine:WBe,realpart:jBe,reals:XBe,Re:YBe,rect:ZBe,reg:KBe,REG:JBe,ReverseElement:QBe,ReverseEquilibrium:e5e,ReverseUpEquilibrium:t5e,rfisht:n5e,rfloor:r5e,rfr:i5e,Rfr:s5e,rHar:o5e,rhard:a5e,rharu:l5e,rharul:c5e,Rho:u5e,rho:f5e,rhov:d5e,RightAngleBracket:h5e,RightArrowBar:p5e,rightarrow:m5e,RightArrow:g5e,Rightarrow:v5e,RightArrowLeftArrow:y5e,rightarrowtail:_5e,RightCeiling:x5e,RightDoubleBracket:S5e,RightDownTeeVector:w5e,RightDownVectorBar:b5e,RightDownVector:E5e,RightFloor:M5e,rightharpoondown:T5e,rightharpoonup:A5e,rightleftarrows:C5e,rightleftharpoons:R5e,rightrightarrows:P5e,rightsquigarrow:L5e,RightTeeArrow:N5e,RightTee:I5e,RightTeeVector:D5e,rightthreetimes:k5e,RightTriangleBar:O5e,RightTriangle:$5e,RightTriangleEqual:U5e,RightUpDownVector:F5e,RightUpTeeVector:z5e,RightUpVectorBar:B5e,RightUpVector:H5e,RightVectorBar:V5e,RightVector:G5e,ring:q5e,risingdotseq:W5e,rlarr:j5e,rlhar:X5e,rlm:Y5e,rmoustache:Z5e,rmoust:K5e,rnmid:J5e,roang:Q5e,roarr:eHe,robrk:tHe,ropar:nHe,ropf:rHe,Ropf:iHe,roplus:sHe,rotimes:oHe,RoundImplies:aHe,rpar:lHe,rpargt:cHe,rppolint:uHe,rrarr:fHe,Rrightarrow:dHe,rsaquo:hHe,rscr:pHe,Rscr:mHe,rsh:gHe,Rsh:vHe,rsqb:yHe,rsquo:_He,rsquor:xHe,rthree:SHe,rtimes:wHe,rtri:bHe,rtrie:EHe,rtrif:MHe,rtriltri:THe,RuleDelayed:AHe,ruluhar:CHe,rx:RHe,Sacute:PHe,sacute:LHe,sbquo:NHe,scap:IHe,Scaron:DHe,scaron:kHe,Sc:OHe,sc:$He,sccue:UHe,sce:FHe,scE:zHe,Scedil:BHe,scedil:HHe,Scirc:VHe,scirc:GHe,scnap:qHe,scnE:WHe,scnsim:jHe,scpolint:XHe,scsim:YHe,Scy:ZHe,scy:KHe,sdotb:JHe,sdot:QHe,sdote:eVe,searhk:tVe,searr:nVe,seArr:rVe,searrow:iVe,sect:sVe,semi:oVe,seswar:aVe,setminus:lVe,setmn:cVe,sext:uVe,Sfr:fVe,sfr:dVe,sfrown:hVe,sharp:pVe,SHCHcy:mVe,shchcy:gVe,SHcy:vVe,shcy:yVe,ShortDownArrow:_Ve,ShortLeftArrow:xVe,shortmid:SVe,shortparallel:wVe,ShortRightArrow:bVe,ShortUpArrow:EVe,shy:MVe,Sigma:TVe,sigma:AVe,sigmaf:CVe,sigmav:RVe,sim:PVe,simdot:LVe,sime:NVe,simeq:IVe,simg:DVe,simgE:kVe,siml:OVe,simlE:$Ve,simne:UVe,simplus:FVe,simrarr:zVe,slarr:BVe,SmallCircle:HVe,smallsetminus:VVe,smashp:GVe,smeparsl:qVe,smid:WVe,smile:jVe,smt:XVe,smte:YVe,smtes:ZVe,SOFTcy:KVe,softcy:JVe,solbar:QVe,solb:e8e,sol:t8e,Sopf:n8e,sopf:r8e,spades:i8e,spadesuit:s8e,spar:o8e,sqcap:a8e,sqcaps:l8e,sqcup:c8e,sqcups:u8e,Sqrt:f8e,sqsub:d8e,sqsube:h8e,sqsubset:p8e,sqsubseteq:m8e,sqsup:g8e,sqsupe:v8e,sqsupset:y8e,sqsupseteq:_8e,square:x8e,Square:S8e,SquareIntersection:w8e,SquareSubset:b8e,SquareSubsetEqual:E8e,SquareSuperset:M8e,SquareSupersetEqual:T8e,SquareUnion:A8e,squarf:C8e,squ:R8e,squf:P8e,srarr:L8e,Sscr:N8e,sscr:I8e,ssetmn:D8e,ssmile:k8e,sstarf:O8e,Star:$8e,star:U8e,starf:F8e,straightepsilon:z8e,straightphi:B8e,strns:H8e,sub:V8e,Sub:G8e,subdot:q8e,subE:W8e,sube:j8e,subedot:X8e,submult:Y8e,subnE:Z8e,subne:K8e,subplus:J8e,subrarr:Q8e,subset:e6e,Subset:t6e,subseteq:n6e,subseteqq:r6e,SubsetEqual:i6e,subsetneq:s6e,subsetneqq:o6e,subsim:a6e,subsub:l6e,subsup:c6e,succapprox:u6e,succ:f6e,succcurlyeq:d6e,Succeeds:h6e,SucceedsEqual:p6e,SucceedsSlantEqual:m6e,SucceedsTilde:g6e,succeq:v6e,succnapprox:y6e,succneqq:_6e,succnsim:x6e,succsim:S6e,SuchThat:w6e,sum:b6e,Sum:E6e,sung:M6e,sup1:T6e,sup2:A6e,sup3:C6e,sup:R6e,Sup:P6e,supdot:L6e,supdsub:N6e,supE:I6e,supe:D6e,supedot:k6e,Superset:O6e,SupersetEqual:$6e,suphsol:U6e,suphsub:F6e,suplarr:z6e,supmult:B6e,supnE:H6e,supne:V6e,supplus:G6e,supset:q6e,Supset:W6e,supseteq:j6e,supseteqq:X6e,supsetneq:Y6e,supsetneqq:Z6e,supsim:K6e,supsub:J6e,supsup:Q6e,swarhk:eGe,swarr:tGe,swArr:nGe,swarrow:rGe,swnwar:iGe,szlig:sGe,Tab:oGe,target:aGe,Tau:lGe,tau:cGe,tbrk:uGe,Tcaron:fGe,tcaron:dGe,Tcedil:hGe,tcedil:pGe,Tcy:mGe,tcy:gGe,tdot:vGe,telrec:yGe,Tfr:_Ge,tfr:xGe,there4:SGe,therefore:wGe,Therefore:bGe,Theta:EGe,theta:MGe,thetasym:TGe,thetav:AGe,thickapprox:CGe,thicksim:RGe,ThickSpace:PGe,ThinSpace:LGe,thinsp:NGe,thkap:IGe,thksim:DGe,THORN:kGe,thorn:OGe,tilde:$Ge,Tilde:UGe,TildeEqual:FGe,TildeFullEqual:zGe,TildeTilde:BGe,timesbar:HGe,timesb:VGe,times:GGe,timesd:qGe,tint:WGe,toea:jGe,topbot:XGe,topcir:YGe,top:ZGe,Topf:KGe,topf:JGe,topfork:QGe,tosa:eqe,tprime:tqe,trade:nqe,TRADE:rqe,triangle:iqe,triangledown:sqe,triangleleft:oqe,trianglelefteq:aqe,triangleq:lqe,triangleright:cqe,trianglerighteq:uqe,tridot:fqe,trie:dqe,triminus:hqe,TripleDot:pqe,triplus:mqe,trisb:gqe,tritime:vqe,trpezium:yqe,Tscr:_qe,tscr:xqe,TScy:Sqe,tscy:wqe,TSHcy:bqe,tshcy:Eqe,Tstrok:Mqe,tstrok:Tqe,twixt:Aqe,twoheadleftarrow:Cqe,twoheadrightarrow:Rqe,Uacute:Pqe,uacute:Lqe,uarr:Nqe,Uarr:Iqe,uArr:Dqe,Uarrocir:kqe,Ubrcy:Oqe,ubrcy:$qe,Ubreve:Uqe,ubreve:Fqe,Ucirc:zqe,ucirc:Bqe,Ucy:Hqe,ucy:Vqe,udarr:Gqe,Udblac:qqe,udblac:Wqe,udhar:jqe,ufisht:Xqe,Ufr:Yqe,ufr:Zqe,Ugrave:Kqe,ugrave:Jqe,uHar:Qqe,uharl:eWe,uharr:tWe,uhblk:nWe,ulcorn:rWe,ulcorner:iWe,ulcrop:sWe,ultri:oWe,Umacr:aWe,umacr:lWe,uml:cWe,UnderBar:uWe,UnderBrace:fWe,UnderBracket:dWe,UnderParenthesis:hWe,Union:pWe,UnionPlus:mWe,Uogon:gWe,uogon:vWe,Uopf:yWe,uopf:_We,UpArrowBar:xWe,uparrow:SWe,UpArrow:wWe,Uparrow:bWe,UpArrowDownArrow:EWe,updownarrow:MWe,UpDownArrow:TWe,Updownarrow:AWe,UpEquilibrium:CWe,upharpoonleft:RWe,upharpoonright:PWe,uplus:LWe,UpperLeftArrow:NWe,UpperRightArrow:IWe,upsi:DWe,Upsi:kWe,upsih:OWe,Upsilon:$We,upsilon:UWe,UpTeeArrow:FWe,UpTee:zWe,upuparrows:BWe,urcorn:HWe,urcorner:VWe,urcrop:GWe,Uring:qWe,uring:WWe,urtri:jWe,Uscr:XWe,uscr:YWe,utdot:ZWe,Utilde:KWe,utilde:JWe,utri:QWe,utrif:eje,uuarr:tje,Uuml:nje,uuml:rje,uwangle:ije,vangrt:sje,varepsilon:oje,varkappa:aje,varnothing:lje,varphi:cje,varpi:uje,varpropto:fje,varr:dje,vArr:hje,varrho:pje,varsigma:mje,varsubsetneq:gje,varsubsetneqq:vje,varsupsetneq:yje,varsupsetneqq:_je,vartheta:xje,vartriangleleft:Sje,vartriangleright:wje,vBar:bje,Vbar:Eje,vBarv:Mje,Vcy:Tje,vcy:Aje,vdash:Cje,vDash:Rje,Vdash:Pje,VDash:Lje,Vdashl:Nje,veebar:Ije,vee:Dje,Vee:kje,veeeq:Oje,vellip:$je,verbar:Uje,Verbar:Fje,vert:zje,Vert:Bje,VerticalBar:Hje,VerticalLine:Vje,VerticalSeparator:Gje,VerticalTilde:qje,VeryThinSpace:Wje,Vfr:jje,vfr:Xje,vltri:Yje,vnsub:Zje,vnsup:Kje,Vopf:Jje,vopf:Qje,vprop:e7e,vrtri:t7e,Vscr:n7e,vscr:r7e,vsubnE:i7e,vsubne:s7e,vsupnE:o7e,vsupne:a7e,Vvdash:l7e,vzigzag:c7e,Wcirc:u7e,wcirc:f7e,wedbar:d7e,wedge:h7e,Wedge:p7e,wedgeq:m7e,weierp:g7e,Wfr:v7e,wfr:y7e,Wopf:_7e,wopf:x7e,wp:S7e,wr:w7e,wreath:b7e,Wscr:E7e,wscr:M7e,xcap:T7e,xcirc:A7e,xcup:C7e,xdtri:R7e,Xfr:P7e,xfr:L7e,xharr:N7e,xhArr:I7e,Xi:D7e,xi:k7e,xlarr:O7e,xlArr:$7e,xmap:U7e,xnis:F7e,xodot:z7e,Xopf:B7e,xopf:H7e,xoplus:V7e,xotime:G7e,xrarr:q7e,xrArr:W7e,Xscr:j7e,xscr:X7e,xsqcup:Y7e,xuplus:Z7e,xutri:K7e,xvee:J7e,xwedge:Q7e,Yacute:e9e,yacute:t9e,YAcy:n9e,yacy:r9e,Ycirc:i9e,ycirc:s9e,Ycy:o9e,ycy:a9e,yen:l9e,Yfr:c9e,yfr:u9e,YIcy:f9e,yicy:d9e,Yopf:h9e,yopf:p9e,Yscr:m9e,yscr:g9e,YUcy:v9e,yucy:y9e,yuml:_9e,Yuml:x9e,Zacute:S9e,zacute:w9e,Zcaron:b9e,zcaron:E9e,Zcy:M9e,zcy:T9e,Zdot:A9e,zdot:C9e,zeetrf:R9e,ZeroWidthSpace:P9e,Zeta:L9e,zeta:N9e,zfr:I9e,Zfr:D9e,ZHcy:k9e,zhcy:O9e,zigrarr:$9e,zopf:U9e,Zopf:F9e,Zscr:z9e,zscr:B9e,zwj:H9e,zwnj:V9e},G9e="Á",q9e="á",W9e="Â",j9e="â",X9e="´",Y9e="Æ",Z9e="æ",K9e="À",J9e="à",Q9e="&",eXe="&",tXe="Å",nXe="å",rXe="Ã",iXe="ã",sXe="Ä",oXe="ä",aXe="¦",lXe="Ç",cXe="ç",uXe="¸",fXe="¢",dXe="©",hXe="©",pXe="¤",mXe="°",gXe="÷",vXe="É",yXe="é",_Xe="Ê",xXe="ê",SXe="È",wXe="è",bXe="Ð",EXe="ð",MXe="Ë",TXe="ë",AXe="½",CXe="¼",RXe="¾",PXe=">",LXe=">",NXe="Í",IXe="í",DXe="Î",kXe="î",OXe="¡",$Xe="Ì",UXe="ì",FXe="¿",zXe="Ï",BXe="ï",HXe="«",VXe="<",GXe="<",qXe="¯",WXe="µ",jXe="·",XXe=" ",YXe="¬",ZXe="Ñ",KXe="ñ",JXe="Ó",QXe="ó",eYe="Ô",tYe="ô",nYe="Ò",rYe="ò",iYe="ª",sYe="º",oYe="Ø",aYe="ø",lYe="Õ",cYe="õ",uYe="Ö",fYe="ö",dYe="¶",hYe="±",pYe="£",mYe='"',gYe='"',vYe="»",yYe="®",_Ye="®",xYe="§",SYe="­",wYe="¹",bYe="²",EYe="³",MYe="ß",TYe="Þ",AYe="þ",CYe="×",RYe="Ú",PYe="ú",LYe="Û",NYe="û",IYe="Ù",DYe="ù",kYe="¨",OYe="Ü",$Ye="ü",UYe="Ý",FYe="ý",zYe="¥",BYe="ÿ",HYe={Aacute:G9e,aacute:q9e,Acirc:W9e,acirc:j9e,acute:X9e,AElig:Y9e,aelig:Z9e,Agrave:K9e,agrave:J9e,amp:Q9e,AMP:eXe,Aring:tXe,aring:nXe,Atilde:rXe,atilde:iXe,Auml:sXe,auml:oXe,brvbar:aXe,Ccedil:lXe,ccedil:cXe,cedil:uXe,cent:fXe,copy:dXe,COPY:hXe,curren:pXe,deg:mXe,divide:gXe,Eacute:vXe,eacute:yXe,Ecirc:_Xe,ecirc:xXe,Egrave:SXe,egrave:wXe,ETH:bXe,eth:EXe,Euml:MXe,euml:TXe,frac12:AXe,frac14:CXe,frac34:RXe,gt:PXe,GT:LXe,Iacute:NXe,iacute:IXe,Icirc:DXe,icirc:kXe,iexcl:OXe,Igrave:$Xe,igrave:UXe,iquest:FXe,Iuml:zXe,iuml:BXe,laquo:HXe,lt:VXe,LT:GXe,macr:qXe,micro:WXe,middot:jXe,nbsp:XXe,not:YXe,Ntilde:ZXe,ntilde:KXe,Oacute:JXe,oacute:QXe,Ocirc:eYe,ocirc:tYe,Ograve:nYe,ograve:rYe,ordf:iYe,ordm:sYe,Oslash:oYe,oslash:aYe,Otilde:lYe,otilde:cYe,Ouml:uYe,ouml:fYe,para:dYe,plusmn:hYe,pound:pYe,quot:mYe,QUOT:gYe,raquo:vYe,reg:yYe,REG:_Ye,sect:xYe,shy:SYe,sup1:wYe,sup2:bYe,sup3:EYe,szlig:MYe,THORN:TYe,thorn:AYe,times:CYe,Uacute:RYe,uacute:PYe,Ucirc:LYe,ucirc:NYe,Ugrave:IYe,ugrave:DYe,uml:kYe,Uuml:OYe,uuml:$Ye,Yacute:UYe,yacute:FYe,yen:zYe,yuml:BYe},VYe="&",GYe="'",qYe=">",WYe="<",jYe='"',a3={amp:VYe,apos:GYe,gt:qYe,lt:WYe,quot:jYe};var op={};const XYe={0:65533,128:8364,130:8218,131:402,132:8222,133:8230,134:8224,135:8225,136:710,137:8240,138:352,139:8249,140:338,142:381,145:8216,146:8217,147:8220,148:8221,149:8226,150:8211,151:8212,152:732,153:8482,154:353,155:8250,156:339,158:382,159:376};var WM;function YYe(){if(WM)return op;WM=1;var n=tu&&tu.__importDefault||function(i){return i&&i.__esModule?i:{default:i}};Object.defineProperty(op,"__esModule",{value:!0});var e=n(XYe),t=String.fromCodePoint||function(i){var s="";return i>65535&&(i-=65536,s+=String.fromCharCode(i>>>10&1023|55296),i=56320|i&1023),s+=String.fromCharCode(i),s};function r(i){return i>=55296&&i<=57343||i>1114111?"�":(i in e.default&&(i=e.default[i]),t(i))}return op.default=r,op}var jM;function XM(){if(jM)return Vs;jM=1;var n=tu&&tu.__importDefault||function(f){return f&&f.__esModule?f:{default:f}};Object.defineProperty(Vs,"__esModule",{value:!0}),Vs.decodeHTML=Vs.decodeHTMLStrict=Vs.decodeXML=void 0;var e=n(o3),t=n(HYe),r=n(a3),i=n(YYe()),s=/&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;Vs.decodeXML=o(r.default),Vs.decodeHTMLStrict=o(e.default);function o(f){var d=l(f);return function(h){return String(h).replace(s,d)}}var a=function(f,d){return f<d?1:-1};Vs.decodeHTML=function(){for(var f=Object.keys(t.default).sort(a),d=Object.keys(e.default).sort(a),h=0,p=0;h<d.length;h++)f[p]===d[h]?(d[h]+=";?",p++):d[h]+=";";var g=new RegExp("&(?:"+d.join("|")+"|#[xX][\\da-fA-F]+;?|#\\d+;?)","g"),y=l(e.default);function b(S){return S.substr(-1)!==";"&&(S+=";"),y(S)}return function(S){return String(S).replace(g,b)}}();function l(f){return function(h){if(h.charAt(1)==="#"){var p=h.charAt(2);return p==="X"||p==="x"?i.default(parseInt(h.substr(3),16)):i.default(parseInt(h.substr(2),10))}return f[h.slice(1,-1)]||h}}return Vs}var ui={},YM;function ZM(){if(YM)return ui;YM=1;var n=tu&&tu.__importDefault||function(m){return m&&m.__esModule?m:{default:m}};Object.defineProperty(ui,"__esModule",{value:!0}),ui.escapeUTF8=ui.escape=ui.encodeNonAsciiHTML=ui.encodeHTML=ui.encodeXML=void 0;var e=n(a3),t=a(e.default),r=l(t);ui.encodeXML=S(t);var i=n(o3),s=a(i.default),o=l(s);ui.encodeHTML=p(s,o),ui.encodeNonAsciiHTML=S(s);function a(m){return Object.keys(m).sort().reduce(function(_,w){return _[m[w]]="&"+w+";",_},{})}function l(m){for(var _=[],w=[],M=0,C=Object.keys(m);M<C.length;M++){var A=C[M];A.length===1?_.push("\\"+A):w.push(A)}_.sort();for(var P=0;P<_.length-1;P++){for(var k=P;k<_.length-1&&_[k].charCodeAt(1)+1===_[k+1].charCodeAt(1);)k+=1;var R=1+k-P;R<3||_.splice(P,R,_[P]+"-"+_[k])}return w.unshift("["+_.join("")+"]"),new RegExp(w.join("|"),"g")}var f=/(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,d=String.prototype.codePointAt!=null?function(m){return m.codePointAt(0)}:function(m){return(m.charCodeAt(0)-55296)*1024+m.charCodeAt(1)-56320+65536};function h(m){return"&#x"+(m.length>1?d(m):m.charCodeAt(0)).toString(16).toUpperCase()+";"}function p(m,_){return function(w){return w.replace(_,function(M){return m[M]}).replace(f,h)}}var g=new RegExp(r.source+"|"+f.source,"g");function y(m){return m.replace(g,h)}ui.escape=y;function b(m){return m.replace(r,h)}ui.escapeUTF8=b;function S(m){return function(_){return _.replace(g,function(w){return m[w]||h(w)})}}return ui}var KM;function ZYe(){return KM||(KM=1,function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.decodeXMLStrict=n.decodeHTML5Strict=n.decodeHTML4Strict=n.decodeHTML5=n.decodeHTML4=n.decodeHTMLStrict=n.decodeHTML=n.decodeXML=n.encodeHTML5=n.encodeHTML4=n.escapeUTF8=n.escape=n.encodeNonAsciiHTML=n.encodeHTML=n.encodeXML=n.encode=n.decodeStrict=n.decode=void 0;var e=XM(),t=ZM();function r(l,f){return(!f||f<=0?e.decodeXML:e.decodeHTML)(l)}n.decode=r;function i(l,f){return(!f||f<=0?e.decodeXML:e.decodeHTMLStrict)(l)}n.decodeStrict=i;function s(l,f){return(!f||f<=0?t.encodeXML:t.encodeHTML)(l)}n.encode=s;var o=ZM();Object.defineProperty(n,"encodeXML",{enumerable:!0,get:function(){return o.encodeXML}}),Object.defineProperty(n,"encodeHTML",{enumerable:!0,get:function(){return o.encodeHTML}}),Object.defineProperty(n,"encodeNonAsciiHTML",{enumerable:!0,get:function(){return o.encodeNonAsciiHTML}}),Object.defineProperty(n,"escape",{enumerable:!0,get:function(){return o.escape}}),Object.defineProperty(n,"escapeUTF8",{enumerable:!0,get:function(){return o.escapeUTF8}}),Object.defineProperty(n,"encodeHTML4",{enumerable:!0,get:function(){return o.encodeHTML}}),Object.defineProperty(n,"encodeHTML5",{enumerable:!0,get:function(){return o.encodeHTML}});var a=XM();Object.defineProperty(n,"decodeXML",{enumerable:!0,get:function(){return a.decodeXML}}),Object.defineProperty(n,"decodeHTML",{enumerable:!0,get:function(){return a.decodeHTML}}),Object.defineProperty(n,"decodeHTMLStrict",{enumerable:!0,get:function(){return a.decodeHTMLStrict}}),Object.defineProperty(n,"decodeHTML4",{enumerable:!0,get:function(){return a.decodeHTML}}),Object.defineProperty(n,"decodeHTML5",{enumerable:!0,get:function(){return a.decodeHTML}}),Object.defineProperty(n,"decodeHTML4Strict",{enumerable:!0,get:function(){return a.decodeHTMLStrict}}),Object.defineProperty(n,"decodeHTML5Strict",{enumerable:!0,get:function(){return a.decodeHTMLStrict}}),Object.defineProperty(n,"decodeXMLStrict",{enumerable:!0,get:function(){return a.decodeXML}})}(x1)),x1}const KYe={altglyph:"altGlyph",altglyphdef:"altGlyphDef",altglyphitem:"altGlyphItem",animatecolor:"animateColor",animatemotion:"animateMotion",animatetransform:"animateTransform",clippath:"clipPath",feblend:"feBlend",fecolormatrix:"feColorMatrix",fecomponenttransfer:"feComponentTransfer",fecomposite:"feComposite",feconvolvematrix:"feConvolveMatrix",fediffuselighting:"feDiffuseLighting",fedisplacementmap:"feDisplacementMap",fedistantlight:"feDistantLight",fedropshadow:"feDropShadow",feflood:"feFlood",fefunca:"feFuncA",fefuncb:"feFuncB",fefuncg:"feFuncG",fefuncr:"feFuncR",fegaussianblur:"feGaussianBlur",feimage:"feImage",femerge:"feMerge",femergenode:"feMergeNode",femorphology:"feMorphology",feoffset:"feOffset",fepointlight:"fePointLight",fespecularlighting:"feSpecularLighting",fespotlight:"feSpotLight",fetile:"feTile",feturbulence:"feTurbulence",foreignobject:"foreignObject",glyphref:"glyphRef",lineargradient:"linearGradient",radialgradient:"radialGradient",textpath:"textPath"},JYe={definitionurl:"definitionURL",attributename:"attributeName",attributetype:"attributeType",basefrequency:"baseFrequency",baseprofile:"baseProfile",calcmode:"calcMode",clippathunits:"clipPathUnits",diffuseconstant:"diffuseConstant",edgemode:"edgeMode",filterunits:"filterUnits",glyphref:"glyphRef",gradienttransform:"gradientTransform",gradientunits:"gradientUnits",kernelmatrix:"kernelMatrix",kernelunitlength:"kernelUnitLength",keypoints:"keyPoints",keysplines:"keySplines",keytimes:"keyTimes",lengthadjust:"lengthAdjust",limitingconeangle:"limitingConeAngle",markerheight:"markerHeight",markerunits:"markerUnits",markerwidth:"markerWidth",maskcontentunits:"maskContentUnits",maskunits:"maskUnits",numoctaves:"numOctaves",pathlength:"pathLength",patterncontentunits:"patternContentUnits",patterntransform:"patternTransform",patternunits:"patternUnits",pointsatx:"pointsAtX",pointsaty:"pointsAtY",pointsatz:"pointsAtZ",preservealpha:"preserveAlpha",preserveaspectratio:"preserveAspectRatio",primitiveunits:"primitiveUnits",refx:"refX",refy:"refY",repeatcount:"repeatCount",repeatdur:"repeatDur",requiredextensions:"requiredExtensions",requiredfeatures:"requiredFeatures",specularconstant:"specularConstant",specularexponent:"specularExponent",spreadmethod:"spreadMethod",startoffset:"startOffset",stddeviation:"stdDeviation",stitchtiles:"stitchTiles",surfacescale:"surfaceScale",systemlanguage:"systemLanguage",tablevalues:"tableValues",targetx:"targetX",targety:"targetY",textlength:"textLength",viewbox:"viewBox",viewtarget:"viewTarget",xchannelselector:"xChannelSelector",ychannelselector:"yChannelSelector",zoomandpan:"zoomAndPan"},QYe={elementNames:KYe,attributeNames:JYe};var JM;function eZe(){if(JM)return ug;JM=1;var n=Tye(),e=ZYe(),t=QYe;t.elementNames.__proto__=null,t.attributeNames.__proto__=null;var r={__proto__:null,style:!0,script:!0,xmp:!0,iframe:!0,noembed:!0,noframes:!0,plaintext:!0,noscript:!0};function i(g,y){if(g){var b="",S;for(var m in g)S=g[m],b&&(b+=" "),y.xmlMode==="foreign"&&(m=t.attributeNames[m]||m),b+=m,(S!==null&&S!==""||y.xmlMode)&&(b+='="'+(y.decodeEntities?e.encodeXML(S):S.replace(/\"/g,"&quot;"))+'"');return b}}var s={__proto__:null,area:!0,base:!0,basefont:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,isindex:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},o=Mye.exports=function(g,y){!Array.isArray(g)&&!g.cheerio&&(g=[g]),y=y||{};for(var b="",S=0;S<g.length;S++){var m=g[S];m.type==="root"?b+=o(m.children,y):n.isTag(m)?b+=l(m,y):m.type===n.Directive?b+=f(m):m.type===n.Comment?b+=p(m):m.type===n.CDATA?b+=h(m):b+=d(m,y)}return b},a=["mi","mo","mn","ms","mtext","annotation-xml","foreignObject","desc","title"];function l(g,y){y.xmlMode==="foreign"&&(g.name=t.elementNames[g.name]||g.name,g.parent&&a.indexOf(g.parent.name)>=0&&(y=Object.assign({},y,{xmlMode:!1}))),!y.xmlMode&&["svg","math"].indexOf(g.name)>=0&&(y=Object.assign({},y,{xmlMode:"foreign"}));var b="<"+g.name,S=i(g.attribs,y);return S&&(b+=" "+S),y.xmlMode&&(!g.children||g.children.length===0)?b+="/>":(b+=">",g.children&&(b+=o(g.children,y)),(!s[g.name]||y.xmlMode)&&(b+="</"+g.name+">")),b}function f(g){return"<"+g.data+">"}function d(g,y){var b=g.data||"";return y.decodeEntities&&!(g.parent&&g.parent.name in r)&&(b=e.encodeXML(b)),b}function h(g){return"<![CDATA["+g.children[0].data+"]]>"}function p(g){return"<!--"+g.data+"-->"}return ug}var S1,QM;function tZe(){if(QM)return S1;QM=1;var n=Hd,e=eZe(),t=n.isTag;S1={getInnerHTML:r,getOuterHTML:e,getText:i};function r(s,o){return s.children?s.children.map(function(a){return e(a,o)}).join(""):""}function i(s){return Array.isArray(s)?s.map(i).join(""):t(s)?s.name==="br"?`
`:i(s.children):s.type===n.CDATA?i(s.children):s.type===n.Text?s.data:""}return S1}var Po={},eT;function nZe(){if(eT)return Po;eT=1;var n=Po.getChildren=function(t){return t.children},e=Po.getParent=function(t){return t.parent};return Po.getSiblings=function(t){var r=e(t);return r?n(r):[t]},Po.getAttributeValue=function(t,r){return t.attribs&&t.attribs[r]},Po.hasAttrib=function(t,r){return!!t.attribs&&hasOwnProperty.call(t.attribs,r)},Po.getName=function(t){return t.name},Po}var Da={},tT;function rZe(){return tT||(tT=1,Da.removeElement=function(n){if(n.prev&&(n.prev.next=n.next),n.next&&(n.next.prev=n.prev),n.parent){var e=n.parent.children;e.splice(e.lastIndexOf(n),1)}},Da.replaceElement=function(n,e){var t=e.prev=n.prev;t&&(t.next=e);var r=e.next=n.next;r&&(r.prev=e);var i=e.parent=n.parent;if(i){var s=i.children;s[s.lastIndexOf(n)]=e}},Da.appendChild=function(n,e){if(e.parent=n,n.children.push(e)!==1){var t=n.children[n.children.length-2];t.next=e,e.prev=t,e.next=null}},Da.append=function(n,e){var t=n.parent,r=n.next;if(e.next=r,e.prev=n,n.next=e,e.parent=t,r){if(r.prev=e,t){var i=t.children;i.splice(i.lastIndexOf(r),0,e)}}else t&&t.children.push(e)},Da.prepend=function(n,e){var t=n.parent;if(t){var r=t.children;r.splice(r.lastIndexOf(n),0,e)}n.prev&&(n.prev.next=e),e.parent=t,e.prev=n.prev,e.next=n,n.prev=e}),Da}var w1,nT;function iZe(){if(nT)return w1;nT=1;var n=Hd.isTag;w1={filter:e,find:t,findOneChild:r,findOne:i,existsOne:s,findAll:o};function e(a,l,f,d){return Array.isArray(l)||(l=[l]),(typeof d!="number"||!isFinite(d))&&(d=1/0),t(a,l,f!==!1,d)}function t(a,l,f,d){for(var h=[],p,g=0,y=l.length;g<y&&!(a(l[g])&&(h.push(l[g]),--d<=0)||(p=l[g].children,f&&p&&p.length>0&&(p=t(a,p,f,d),h=h.concat(p),d-=p.length,d<=0)));g++);return h}function r(a,l){for(var f=0,d=l.length;f<d;f++)if(a(l[f]))return l[f];return null}function i(a,l){for(var f=null,d=0,h=l.length;d<h&&!f;d++)if(n(l[d]))a(l[d])?f=l[d]:l[d].children.length>0&&(f=i(a,l[d].children));else continue;return f}function s(a,l){for(var f=0,d=l.length;f<d;f++)if(n(l[f])&&(a(l[f])||l[f].children.length>0&&s(a,l[f].children)))return!0;return!1}function o(a,l){for(var f=[],d=l.slice();d.length;){var h=d.shift();n(h)&&(h.children&&h.children.length>0&&d.unshift.apply(d,h.children),a(h)&&f.push(h))}return f}return w1}var Lo={},rT;function sZe(){if(rT)return Lo;rT=1;var n=Hd,e=Lo.isTag=n.isTag;Lo.testElement=function(s,o){for(var a in s)if(s.hasOwnProperty(a)){if(a==="tag_name"){if(!e(o)||!s.tag_name(o.name))return!1}else if(a==="tag_type"){if(!s.tag_type(o.type))return!1}else if(a==="tag_contains"){if(e(o)||!s.tag_contains(o.data))return!1}else if(!o.attribs||!s[a](o.attribs[a]))return!1}return!0};var t={tag_name:function(s){return typeof s=="function"?function(o){return e(o)&&s(o.name)}:s==="*"?e:function(o){return e(o)&&o.name===s}},tag_type:function(s){return typeof s=="function"?function(o){return s(o.type)}:function(o){return o.type===s}},tag_contains:function(s){return typeof s=="function"?function(o){return!e(o)&&s(o.data)}:function(o){return!e(o)&&o.data===s}}};function r(s,o){return typeof o=="function"?function(a){return a.attribs&&o(a.attribs[s])}:function(a){return a.attribs&&a.attribs[s]===o}}function i(s,o){return function(a){return s(a)||o(a)}}return Lo.getElements=function(s,o,a,l){var f=Object.keys(s).map(function(d){var h=s[d];return d in t?t[d](h):r(d,h)});return f.length===0?[]:this.filter(f.reduce(i),o,a,l)},Lo.getElementById=function(s,o,a){return Array.isArray(o)||(o=[o]),this.findOne(r("id",s),o,a!==!1)},Lo.getElementsByTagName=function(s,o,a,l){return this.filter(t.tag_name(s),o,a,l)},Lo.getElementsByTagType=function(s,o,a,l){return this.filter(t.tag_type(s),o,a,l)},Lo}var Yu={},iT;function oZe(){if(iT)return Yu;iT=1,Yu.removeSubsets=function(t){for(var r=t.length,i,s,o;--r>-1;){for(i=s=t[r],t[r]=null,o=!0;s;){if(t.indexOf(s)>-1){o=!1,t.splice(r,1);break}s=s.parent}o&&(t[r]=i)}return t};var n={DISCONNECTED:1,PRECEDING:2,FOLLOWING:4,CONTAINS:8,CONTAINED_BY:16},e=Yu.compareDocumentPosition=function(t,r){var i=[],s=[],o,a,l,f,d,h;if(t===r)return 0;for(o=t;o;)i.unshift(o),o=o.parent;for(o=r;o;)s.unshift(o),o=o.parent;for(h=0;i[h]===s[h];)h++;return h===0?n.DISCONNECTED:(a=i[h-1],l=a.children,f=i[h],d=s[h],l.indexOf(f)>l.indexOf(d)?a===r?n.FOLLOWING|n.CONTAINED_BY:n.FOLLOWING:a===t?n.PRECEDING|n.CONTAINS:n.PRECEDING)};return Yu.uniqueSort=function(t){var r=t.length,i,s;for(t=t.slice();--r>-1;)i=t[r],s=t.indexOf(i),s>-1&&s<r&&t.splice(r,1);return t.sort(function(o,a){var l=e(o,a);return l&n.PRECEDING?-1:l&n.FOLLOWING?1:0}),t},Yu}var sT;function l3(){return sT||(sT=1,function(n){var e=n.exports;[tZe(),nZe(),rZe(),iZe(),sZe(),oZe()].forEach(function(t){Object.keys(t).forEach(function(r){e[r]=t[r].bind(e)})})}(Eye)),cg}var b1,oT;function aZe(){if(oT)return b1;oT=1;var n=s3,e=l3();function t(l,f){this.init(l,f)}ru(t,n),t.prototype.init=n;function r(l,f){return e.getElementsByTagName(l,f,!0)}function i(l,f){return e.getElementsByTagName(l,f,!0,1)[0]}function s(l,f,d){return e.getText(e.getElementsByTagName(l,f,d,1)).trim()}function o(l,f,d,h,p){var g=s(d,h,p);g&&(l[f]=g)}var a=function(l){return l==="rss"||l==="feed"||l==="rdf:RDF"};return t.prototype.onend=function(){var l={},f=i(a,this.dom),d,h;f&&(f.name==="feed"?(h=f.children,l.type="atom",o(l,"id","id",h),o(l,"title","title",h),(d=i("link",h))&&(d=d.attribs)&&(d=d.href)&&(l.link=d),o(l,"description","subtitle",h),(d=s("updated",h))&&(l.updated=new Date(d)),o(l,"author","email",h,!0),l.items=r("entry",h).map(function(p){var g={},y;return p=p.children,o(g,"id","id",p),o(g,"title","title",p),(y=i("link",p))&&(y=y.attribs)&&(y=y.href)&&(g.link=y),(y=s("summary",p)||s("content",p))&&(g.description=y),(y=s("updated",p))&&(g.pubDate=new Date(y)),g})):(h=i("channel",f.children).children,l.type=f.name.substr(0,3),l.id="",o(l,"title","title",h),o(l,"link","link",h),o(l,"description","description",h),(d=s("lastBuildDate",h))&&(l.updated=new Date(d)),o(l,"author","managingEditor",h,!0),l.items=r("item",f.children).map(function(p){var g={},y;return p=p.children,o(g,"id","guid",p),o(g,"title","title",p),o(g,"link","link",p),o(g,"description","description",p),(y=s("pubDate",p))&&(g.pubDate=new Date(y)),g}))),this.dom=l,n.prototype._handleCallback.call(this,f?null:Error("couldn't find root of feed"))},b1=t,b1}var E1={},Rf={},lZe={get exports(){return Rf},set exports(n){Rf=n}};/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */var aT;function cZe(){return aT||(aT=1,function(n,e){var t=ag,r=t.Buffer;function i(o,a){for(var l in o)a[l]=o[l]}r.from&&r.alloc&&r.allocUnsafe&&r.allocUnsafeSlow?n.exports=t:(i(t,e),e.Buffer=s);function s(o,a,l){return r(o,a,l)}s.prototype=Object.create(r.prototype),i(r,s),s.from=function(o,a,l){if(typeof o=="number")throw new TypeError("Argument must not be a number");return r(o,a,l)},s.alloc=function(o,a,l){if(typeof o!="number")throw new TypeError("Argument must be a number");var f=r(o);return a!==void 0?typeof l=="string"?f.fill(a,l):f.fill(a):f.fill(0),f},s.allocUnsafe=function(o){if(typeof o!="number")throw new TypeError("Argument must be a number");return r(o)},s.allocUnsafeSlow=function(o){if(typeof o!="number")throw new TypeError("Argument must be a number");return t.SlowBuffer(o)}}(lZe,Rf)),Rf}var lT;function uZe(){if(lT)return E1;lT=1;var n=cZe().Buffer,e=n.isEncoding||function(m){switch(m=""+m,m&&m.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}};function t(m){if(!m)return"utf8";for(var _;;)switch(m){case"utf8":case"utf-8":return"utf8";case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return"utf16le";case"latin1":case"binary":return"latin1";case"base64":case"ascii":case"hex":return m;default:if(_)return;m=(""+m).toLowerCase(),_=!0}}function r(m){var _=t(m);if(typeof _!="string"&&(n.isEncoding===e||!e(m)))throw new Error("Unknown encoding: "+m);return _||m}E1.StringDecoder=i;function i(m){this.encoding=r(m);var _;switch(this.encoding){case"utf16le":this.text=h,this.end=p,_=4;break;case"utf8":this.fillLast=l,_=4;break;case"base64":this.text=g,this.end=y,_=3;break;default:this.write=b,this.end=S;return}this.lastNeed=0,this.lastTotal=0,this.lastChar=n.allocUnsafe(_)}i.prototype.write=function(m){if(m.length===0)return"";var _,w;if(this.lastNeed){if(_=this.fillLast(m),_===void 0)return"";w=this.lastNeed,this.lastNeed=0}else w=0;return w<m.length?_?_+this.text(m,w):this.text(m,w):_||""},i.prototype.end=d,i.prototype.text=f,i.prototype.fillLast=function(m){if(this.lastNeed<=m.length)return m.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);m.copy(this.lastChar,this.lastTotal-this.lastNeed,0,m.length),this.lastNeed-=m.length};function s(m){return m<=127?0:m>>5===6?2:m>>4===14?3:m>>3===30?4:m>>6===2?-1:-2}function o(m,_,w){var M=_.length-1;if(M<w)return 0;var C=s(_[M]);return C>=0?(C>0&&(m.lastNeed=C-1),C):--M<w||C===-2?0:(C=s(_[M]),C>=0?(C>0&&(m.lastNeed=C-2),C):--M<w||C===-2?0:(C=s(_[M]),C>=0?(C>0&&(C===2?C=0:m.lastNeed=C-3),C):0))}function a(m,_,w){if((_[0]&192)!==128)return m.lastNeed=0,"�";if(m.lastNeed>1&&_.length>1){if((_[1]&192)!==128)return m.lastNeed=1,"�";if(m.lastNeed>2&&_.length>2&&(_[2]&192)!==128)return m.lastNeed=2,"�"}}function l(m){var _=this.lastTotal-this.lastNeed,w=a(this,m);if(w!==void 0)return w;if(this.lastNeed<=m.length)return m.copy(this.lastChar,_,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);m.copy(this.lastChar,_,0,m.length),this.lastNeed-=m.length}function f(m,_){var w=o(this,m,_);if(!this.lastNeed)return m.toString("utf8",_);this.lastTotal=w;var M=m.length-(w-this.lastNeed);return m.copy(this.lastChar,0,M),m.toString("utf8",_,M)}function d(m){var _=m&&m.length?this.write(m):"";return this.lastNeed?_+"�":_}function h(m,_){if((m.length-_)%2===0){var w=m.toString("utf16le",_);if(w){var M=w.charCodeAt(w.length-1);if(M>=55296&&M<=56319)return this.lastNeed=2,this.lastTotal=4,this.lastChar[0]=m[m.length-2],this.lastChar[1]=m[m.length-1],w.slice(0,-1)}return w}return this.lastNeed=1,this.lastTotal=2,this.lastChar[0]=m[m.length-1],m.toString("utf16le",_,m.length-1)}function p(m){var _=m&&m.length?this.write(m):"";if(this.lastNeed){var w=this.lastTotal-this.lastNeed;return _+this.lastChar.toString("utf16le",0,w)}return _}function g(m,_){var w=(m.length-_)%3;return w===0?m.toString("base64",_):(this.lastNeed=3-w,this.lastTotal=3,w===1?this.lastChar[0]=m[m.length-1]:(this.lastChar[0]=m[m.length-2],this.lastChar[1]=m[m.length-1]),m.toString("base64",_,m.length-w))}function y(m){var _=m&&m.length?this.write(m):"";return this.lastNeed?_+this.lastChar.toString("base64",0,3-this.lastNeed):_}function b(m){return m.toString(this.encoding)}function S(m){return m&&m.length?this.write(m):""}return E1}var M1,cT;function c3(){if(cT)return M1;cT=1,M1=i;var n=i3,e=ag.Writable,t=uZe().StringDecoder,r=ag.Buffer;function i(s,o){var a=this._parser=new n(s,o),l=this._decoder=new t;e.call(this,{decodeStrings:!1}),this.once("finish",function(){a.end(l.end())})}return ru(i,e),i.prototype._write=function(s,o,a){s instanceof r&&(s=this._decoder.write(s)),this._parser.write(s),a()},M1}var T1,uT;function fZe(){if(uT)return T1;uT=1,T1=e;var n=c3();function e(i){n.call(this,new t(this),i)}ru(e,n),e.prototype.readable=!0;function t(i){this.scope=i}var r=sv().EVENTS;return Object.keys(r).forEach(function(i){if(r[i]===0)t.prototype["on"+i]=function(){this.scope.emit(i)};else if(r[i]===1)t.prototype["on"+i]=function(s){this.scope.emit(i,s)};else if(r[i]===2)t.prototype["on"+i]=function(s,o){this.scope.emit(i,s,o)};else throw Error("wrong number of arguments!")}),T1}var A1,fT;function dZe(){if(fT)return A1;fT=1,A1=n;function n(t){this._cbs=t||{}}var e=sv().EVENTS;return Object.keys(e).forEach(function(t){if(e[t]===0)t="on"+t,n.prototype[t]=function(){this._cbs[t]&&this._cbs[t]()};else if(e[t]===1)t="on"+t,n.prototype[t]=function(r){this._cbs[t]&&this._cbs[t](r)};else if(e[t]===2)t="on"+t,n.prototype[t]=function(r,i){this._cbs[t]&&this._cbs[t](r,i)};else throw Error("wrong number of arguments")}),A1}var C1,dT;function hZe(){if(dT)return C1;dT=1,C1=n;function n(t){this._cbs=t||{},this.events=[]}var e=sv().EVENTS;return Object.keys(e).forEach(function(t){if(e[t]===0)t="on"+t,n.prototype[t]=function(){this.events.push([t]),this._cbs[t]&&this._cbs[t]()};else if(e[t]===1)t="on"+t,n.prototype[t]=function(r){this.events.push([t,r]),this._cbs[t]&&this._cbs[t](r)};else if(e[t]===2)t="on"+t,n.prototype[t]=function(r,i){this.events.push([t,r,i]),this._cbs[t]&&this._cbs[t](r,i)};else throw Error("wrong number of arguments")}),n.prototype.onreset=function(){this.events=[],this._cbs.onreset&&this._cbs.onreset()},n.prototype.restart=function(){this._cbs.onreset&&this._cbs.onreset();for(var t=0,r=this.events.length;t<r;t++)if(this._cbs[this.events[t][0]]){var i=this.events[t].length;i===1?this._cbs[this.events[t][0]]():i===2?this._cbs[this.events[t][0]](this.events[t][1]):this._cbs[this.events[t][0]](this.events[t][1],this.events[t][2])}},C1}var hT;function sv(){return hT||(hT=1,function(n){var e=i3,t=s3;function r(i,s){return delete n.exports[i],n.exports[i]=s,s}n.exports={Parser:e,Tokenizer:_R,ElementType:Hd,DomHandler:t,get FeedHandler(){return r("FeedHandler",aZe())},get Stream(){return r("Stream",fZe())},get WritableStream(){return r("WritableStream",c3())},get ProxyHandler(){return r("ProxyHandler",dZe())},get DomUtils(){return r("DomUtils",l3())},get CollectingHandler(){return r("CollectingHandler",hZe())},DefaultHandler:t,get RssHandler(){return r("RssHandler",this.FeedHandler)},parseDOM:function(i,s){var o=new t(s);return new e(o,s).end(i),o.dom},parseFeed:function(i,s){var o=new n.exports.FeedHandler(s);return new e(o,s).end(i),o.dom},createDomStream:function(i,s,o){var a=new t(i,s,o);return new e(a,s)},EVENTS:{attribute:2,cdatastart:0,cdataend:0,text:1,processinginstruction:2,comment:1,commentend:0,closetag:1,opentag:2,opentagname:1,error:1,end:0}}}(FO)),og}var Zs=sv();const pZe=bS(Zs);function mZe(n){return n.type==="text"&&/\r?\n/.test(n.data)&&n.data.trim()===""}function gZe(n){return n.data}const vZe=["allowfullScreen","async","autoplay","capture","checked","controls","default","defer","disabled","formnovalidate","hidden","loop","multiple","muted","novalidate","open","playsinline","readonly","required","reversed","scoped","seamless","selected","itemscope"],yZe={accept:"accept","accept-charset":"acceptCharset",accesskey:"accessKey",action:"action",allowfullscreen:"allowFullScreen",allowtransparency:"allowTransparency",alt:"alt",as:"as",async:"async",autocomplete:"autoComplete",autoplay:"autoPlay",capture:"capture",cellpadding:"cellPadding",cellspacing:"cellSpacing",charset:"charSet",challenge:"challenge",checked:"checked",cite:"cite",classid:"classID",class:"className",cols:"cols",colspan:"colSpan",content:"content",contenteditable:"contentEditable",contextmenu:"contextMenu",controls:"controls",controlsList:"controlsList",coords:"coords",crossorigin:"crossOrigin",data:"data",datetime:"dateTime",default:"default",defer:"defer",dir:"dir",disabled:"disabled",download:"download",draggable:"draggable",enctype:"encType",form:"form",formaction:"formAction",formenctype:"formEncType",formmethod:"formMethod",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",headers:"headers",height:"height",hidden:"hidden",high:"high",href:"href",hreflang:"hrefLang",for:"htmlFor","http-equiv":"httpEquiv",icon:"icon",id:"id",inputmode:"inputMode",integrity:"integrity",is:"is",keyparams:"keyParams",keytype:"keyType",kind:"kind",label:"label",lang:"lang",list:"list",loop:"loop",low:"low",manifest:"manifest",marginheight:"marginHeight",marginwidth:"marginWidth",max:"max",maxlength:"maxLength",media:"media",mediagroup:"mediaGroup",method:"method",min:"min",minlength:"minLength",multiple:"multiple",muted:"muted",name:"name",nonce:"nonce",novalidate:"noValidate",open:"open",optimum:"optimum",pattern:"pattern",placeholder:"placeholder",playsinline:"playsInline",poster:"poster",preload:"preload",profile:"profile",radiogroup:"radioGroup",readonly:"readOnly",referrerpolicy:"referrerPolicy",rel:"rel",required:"required",reversed:"reversed",role:"role",rows:"rows",rowspan:"rowSpan",sandbox:"sandbox",scope:"scope",scoped:"scoped",scrolling:"scrolling",seamless:"seamless",selected:"selected",shape:"shape",size:"size",sizes:"sizes",slot:"slot",span:"span",spellcheck:"spellCheck",src:"src",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",start:"start",step:"step",style:"style",summary:"summary",tabindex:"tabIndex",target:"target",title:"title",type:"type",usemap:"useMap",value:"value",width:"width",wmode:"wmode",wrap:"wrap",about:"about",datatype:"datatype",inlist:"inlist",prefix:"prefix",property:"property",resource:"resource",typeof:"typeof",vocab:"vocab",autocapitalize:"autoCapitalize",autocorrect:"autoCorrect",autosave:"autoSave",color:"color",itemprop:"itemProp",itemscope:"itemScope",itemtype:"itemType",itemid:"itemID",itemref:"itemRef",results:"results",security:"security",unselectable:"unselectable"},_Ze=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,R1={};function u3(n){return R1.hasOwnProperty(n)||(R1[n]=_Ze.test(n)),R1[n]}const xZe=function(n,e){return vZe.map(r=>r.toLowerCase()).indexOf(n.toLowerCase())>=0&&(e=n),e};function SZe(n){return Object.keys(n).filter(e=>u3(e)).reduce((e,t)=>{const r=t.toLowerCase(),i=yZe[r]||r;return e[i]=xZe(i,n[t]),e},{})}function wZe(n=""){return n===""?{}:n.split(";").reduce((e,t)=>{let[r,i]=t.split(/^([^:]+):/).filter((s,o)=>o>0).map(s=>s.trim().toLowerCase());return i===void 0||(r=r.replace(/^-ms-/,"ms-").replace(/-(.)/g,(s,o)=>o.toUpperCase()),e[r]=i),e},{})}function f3(n,e){const t=Object.assign({},SZe(n),{key:e});return typeof t.style=="string"||t.style instanceof String?t.style=wZe(t.style):delete t.style,t}const bZe=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"];function EZe(n,e,t){const r=n.name;if(!u3(r))return null;const i=f3(n.attribs,e);let s=null;return bZe.indexOf(r)===-1&&(s=d3(n.children,t)),Mn.createElement(r,i,s)}function MZe(n,e){let t;n.children.length>0&&(t=n.children[0].data);const r=f3(n.attribs,e);return Mn.createElement("style",r,t)}function Zu(){return null}const TZe={[Zs.ElementType.Text]:gZe,[Zs.ElementType.Tag]:EZe,[Zs.ElementType.Style]:MZe,[Zs.ElementType.Directive]:Zu,[Zs.ElementType.Comment]:Zu,[Zs.ElementType.Script]:Zu,[Zs.ElementType.CDATA]:Zu,[Zs.ElementType.Doctype]:Zu};function AZe(n,e,t){return TZe[n.type](n,e,t)}function d3(n,e){return n.filter(t=>!mZe(t)).map((t,r)=>{let i;return typeof e=="function"&&(i=e(t,r),i===null||i)?i:AZe(t,r,e)})}function Xl(n,{decodeEntities:e=!0,transform:t,preprocessNodes:r=i=>i}={}){const i=r(pZe.parseDOM(n,{decodeEntities:e}));return d3(i,t)}function pT(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function Ue(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?pT(Object(t),!0).forEach(function(r){qn(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):pT(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function fg(n){return fg=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},fg(n)}function CZe(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function mT(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function RZe(n,e,t){return e&&mT(n.prototype,e),t&&mT(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function qn(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function qS(n,e){return LZe(n)||IZe(n,e)||h3(n,e)||kZe()}function Vd(n){return PZe(n)||NZe(n)||h3(n)||DZe()}function PZe(n){if(Array.isArray(n))return f_(n)}function LZe(n){if(Array.isArray(n))return n}function NZe(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function IZe(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r=[],i=!0,s=!1,o,a;try{for(t=t.call(n);!(i=(o=t.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&t.return!=null&&t.return()}finally{if(s)throw a}}return r}}function h3(n,e){if(n){if(typeof n=="string")return f_(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return f_(n,e)}}function f_(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function DZe(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function kZe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var gT=function(){},WS={},p3={},m3=null,g3={mark:gT,measure:gT};try{typeof window<"u"&&(WS=window),typeof document<"u"&&(p3=document),typeof MutationObserver<"u"&&(m3=MutationObserver),typeof performance<"u"&&(g3=performance)}catch{}var OZe=WS.navigator||{},vT=OZe.userAgent,yT=vT===void 0?"":vT,ca=WS,sn=p3,_T=m3,ap=g3;ca.document;var yo=!!sn.documentElement&&!!sn.head&&typeof sn.addEventListener=="function"&&typeof sn.createElement=="function",v3=~yT.indexOf("MSIE")||~yT.indexOf("Trident/"),lp,cp,up,fp,dp,oo="___FONT_AWESOME___",d_=16,y3="fa",_3="svg-inline--fa",pl="data-fa-i2svg",h_="data-fa-pseudo-element",$Ze="data-fa-pseudo-element-pending",jS="data-prefix",XS="data-icon",xT="fontawesome-i2svg",UZe="async",FZe=["HTML","HEAD","STYLE","SCRIPT"],x3=function(){try{return!0}catch{return!1}}(),rn="classic",bn="sharp",YS=[rn,bn];function Gd(n){return new Proxy(n,{get:function(t,r){return r in t?t[r]:t[rn]}})}var jf=Gd((lp={},qn(lp,rn,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),qn(lp,bn,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),lp)),Xf=Gd((cp={},qn(cp,rn,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),qn(cp,bn,{solid:"fass",regular:"fasr",light:"fasl"}),cp)),Yf=Gd((up={},qn(up,rn,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),qn(up,bn,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),up)),zZe=Gd((fp={},qn(fp,rn,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),qn(fp,bn,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),fp)),BZe=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,S3="fa-layers-text",HZe=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,VZe=Gd((dp={},qn(dp,rn,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),qn(dp,bn,{900:"fass",400:"fasr",300:"fasl"}),dp)),w3=[1,2,3,4,5,6,7,8,9,10],GZe=w3.concat([11,12,13,14,15,16,17,18,19,20]),qZe=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Za={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Zf=new Set;Object.keys(Xf[rn]).map(Zf.add.bind(Zf));Object.keys(Xf[bn]).map(Zf.add.bind(Zf));var WZe=[].concat(YS,Vd(Zf),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Za.GROUP,Za.SWAP_OPACITY,Za.PRIMARY,Za.SECONDARY]).concat(w3.map(function(n){return"".concat(n,"x")})).concat(GZe.map(function(n){return"w-".concat(n)})),Pf=ca.FontAwesomeConfig||{};function jZe(n){var e=sn.querySelector("script["+n+"]");if(e)return e.getAttribute(n)}function XZe(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}if(sn&&typeof sn.querySelector=="function"){var YZe=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];YZe.forEach(function(n){var e=qS(n,2),t=e[0],r=e[1],i=XZe(jZe(t));i!=null&&(Pf[r]=i)})}var b3={styleDefault:"solid",familyDefault:"classic",cssPrefix:y3,replacementClass:_3,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Pf.familyPrefix&&(Pf.cssPrefix=Pf.familyPrefix);var iu=Ue(Ue({},b3),Pf);iu.autoReplaceSvg||(iu.observeMutations=!1);var We={};Object.keys(b3).forEach(function(n){Object.defineProperty(We,n,{enumerable:!0,set:function(t){iu[n]=t,Lf.forEach(function(r){return r(We)})},get:function(){return iu[n]}})});Object.defineProperty(We,"familyPrefix",{enumerable:!0,set:function(e){iu.cssPrefix=e,Lf.forEach(function(t){return t(We)})},get:function(){return iu.cssPrefix}});ca.FontAwesomeConfig=We;var Lf=[];function ZZe(n){return Lf.push(n),function(){Lf.splice(Lf.indexOf(n),1)}}var No=d_,Rs={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function KZe(n){if(!(!n||!yo)){var e=sn.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=n;for(var t=sn.head.childNodes,r=null,i=t.length-1;i>-1;i--){var s=t[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return sn.head.insertBefore(e,r),n}}var JZe="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Kf(){for(var n=12,e="";n-- >0;)e+=JZe[Math.random()*62|0];return e}function xu(n){for(var e=[],t=(n||[]).length>>>0;t--;)e[t]=n[t];return e}function ZS(n){return n.classList?xu(n.classList):(n.getAttribute("class")||"").split(" ").filter(function(e){return e})}function E3(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function QZe(n){return Object.keys(n||{}).reduce(function(e,t){return e+"".concat(t,'="').concat(E3(n[t]),'" ')},"").trim()}function ov(n){return Object.keys(n||{}).reduce(function(e,t){return e+"".concat(t,": ").concat(n[t].trim(),";")},"")}function KS(n){return n.size!==Rs.size||n.x!==Rs.x||n.y!==Rs.y||n.rotate!==Rs.rotate||n.flipX||n.flipY}function eKe(n){var e=n.transform,t=n.containerWidth,r=n.iconWidth,i={transform:"translate(".concat(t/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:f}}function tKe(n){var e=n.transform,t=n.width,r=t===void 0?d_:t,i=n.height,s=i===void 0?d_:i,o=n.startCentered,a=o===void 0?!1:o,l="";return a&&v3?l+="translate(".concat(e.x/No-r/2,"em, ").concat(e.y/No-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/No,"em), calc(-50% + ").concat(e.y/No,"em)) "):l+="translate(".concat(e.x/No,"em, ").concat(e.y/No,"em) "),l+="scale(".concat(e.size/No*(e.flipX?-1:1),", ").concat(e.size/No*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var nKe=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function M3(){var n=y3,e=_3,t=We.cssPrefix,r=We.replacementClass,i=nKe;if(t!==n||r!==e){var s=new RegExp("\\.".concat(n,"\\-"),"g"),o=new RegExp("\\--".concat(n,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(t,"-")).replace(o,"--".concat(t,"-")).replace(a,".".concat(r))}return i}var ST=!1;function P1(){We.autoAddCss&&!ST&&(KZe(M3()),ST=!0)}var rKe={mixout:function(){return{dom:{css:M3,insertCss:P1}}},hooks:function(){return{beforeDOMElementCreation:function(){P1()},beforeI2svg:function(){P1()}}}},ao=ca||{};ao[oo]||(ao[oo]={});ao[oo].styles||(ao[oo].styles={});ao[oo].hooks||(ao[oo].hooks={});ao[oo].shims||(ao[oo].shims=[]);var ts=ao[oo],T3=[],iKe=function n(){sn.removeEventListener("DOMContentLoaded",n),dg=1,T3.map(function(e){return e()})},dg=!1;yo&&(dg=(sn.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(sn.readyState),dg||sn.addEventListener("DOMContentLoaded",iKe));function sKe(n){yo&&(dg?setTimeout(n,0):T3.push(n))}function qd(n){var e=n.tag,t=n.attributes,r=t===void 0?{}:t,i=n.children,s=i===void 0?[]:i;return typeof n=="string"?E3(n):"<".concat(e," ").concat(QZe(r),">").concat(s.map(qd).join(""),"</").concat(e,">")}function wT(n,e,t){if(n&&n[e]&&n[e][t])return{prefix:e,iconName:t,icon:n[e][t]}}var oKe=function(e,t){return function(r,i,s,o){return e.call(t,r,i,s,o)}},L1=function(e,t,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?oKe(t,i):t,l,f,d;for(r===void 0?(l=1,d=e[s[0]]):(l=0,d=r);l<o;l++)f=s[l],d=a(d,e[f],f,e);return d};function aKe(n){for(var e=[],t=0,r=n.length;t<r;){var i=n.charCodeAt(t++);if(i>=55296&&i<=56319&&t<r){var s=n.charCodeAt(t++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),t--)}else e.push(i)}return e}function p_(n){var e=aKe(n);return e.length===1?e[0].toString(16):null}function lKe(n,e){var t=n.length,r=n.charCodeAt(e),i;return r>=55296&&r<=56319&&t>e+1&&(i=n.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function bT(n){return Object.keys(n).reduce(function(e,t){var r=n[t],i=!!r.icon;return i?e[r.iconName]=r.icon:e[t]=r,e},{})}function m_(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=t.skipHooks,i=r===void 0?!1:r,s=bT(e);typeof ts.hooks.addPack=="function"&&!i?ts.hooks.addPack(n,bT(e)):ts.styles[n]=Ue(Ue({},ts.styles[n]||{}),s),n==="fas"&&m_("fa",e)}var hp,pp,mp,Ec=ts.styles,cKe=ts.shims,uKe=(hp={},qn(hp,rn,Object.values(Yf[rn])),qn(hp,bn,Object.values(Yf[bn])),hp),JS=null,A3={},C3={},R3={},P3={},L3={},fKe=(pp={},qn(pp,rn,Object.keys(jf[rn])),qn(pp,bn,Object.keys(jf[bn])),pp);function dKe(n){return~WZe.indexOf(n)}function hKe(n,e){var t=e.split("-"),r=t[0],i=t.slice(1).join("-");return r===n&&i!==""&&!dKe(i)?i:null}var N3=function(){var e=function(s){return L1(Ec,function(o,a,l){return o[l]=L1(a,s,{}),o},{})};A3=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),C3=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),L3=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var t="far"in Ec||We.autoFetchSvg,r=L1(cKe,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!t&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});R3=r.names,P3=r.unicodes,JS=av(We.styleDefault,{family:We.familyDefault})};ZZe(function(n){JS=av(n.styleDefault,{family:We.familyDefault})});N3();function QS(n,e){return(A3[n]||{})[e]}function pKe(n,e){return(C3[n]||{})[e]}function Ka(n,e){return(L3[n]||{})[e]}function I3(n){return R3[n]||{prefix:null,iconName:null}}function mKe(n){var e=P3[n],t=QS("fas",n);return e||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function ua(){return JS}var ew=function(){return{prefix:null,iconName:null,rest:[]}};function av(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.family,r=t===void 0?rn:t,i=jf[r][n],s=Xf[r][n]||Xf[r][i],o=n in ts.styles?n:null;return s||o||null}var ET=(mp={},qn(mp,rn,Object.keys(Yf[rn])),qn(mp,bn,Object.keys(Yf[bn])),mp);function lv(n){var e,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.skipLookups,i=r===void 0?!1:r,s=(e={},qn(e,rn,"".concat(We.cssPrefix,"-").concat(rn)),qn(e,bn,"".concat(We.cssPrefix,"-").concat(bn)),e),o=null,a=rn;(n.includes(s[rn])||n.some(function(f){return ET[rn].includes(f)}))&&(a=rn),(n.includes(s[bn])||n.some(function(f){return ET[bn].includes(f)}))&&(a=bn);var l=n.reduce(function(f,d){var h=hKe(We.cssPrefix,d);if(Ec[d]?(d=uKe[a].includes(d)?zZe[a][d]:d,o=d,f.prefix=d):fKe[a].indexOf(d)>-1?(o=d,f.prefix=av(d,{family:a})):h?f.iconName=h:d!==We.replacementClass&&d!==s[rn]&&d!==s[bn]&&f.rest.push(d),!i&&f.prefix&&f.iconName){var p=o==="fa"?I3(f.iconName):{},g=Ka(f.prefix,f.iconName);p.prefix&&(o=null),f.iconName=p.iconName||g||f.iconName,f.prefix=p.prefix||f.prefix,f.prefix==="far"&&!Ec.far&&Ec.fas&&!We.autoFetchSvg&&(f.prefix="fas")}return f},ew());return(n.includes("fa-brands")||n.includes("fab"))&&(l.prefix="fab"),(n.includes("fa-duotone")||n.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===bn&&(Ec.fass||We.autoFetchSvg)&&(l.prefix="fass",l.iconName=Ka(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=ua()||"fas"),l}var gKe=function(){function n(){CZe(this,n),this.definitions={}}return RZe(n,[{key:"add",value:function(){for(var t=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){t.definitions[a]=Ue(Ue({},t.definitions[a]||{}),o[a]),m_(a,o[a]);var l=Yf[rn][a];l&&m_(l,o[a]),N3()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,f=o.icon,d=f[2];t[a]||(t[a]={}),d.length>0&&d.forEach(function(h){typeof h=="string"&&(t[a][h]=f)}),t[a][l]=f}),t}}]),n}(),MT=[],Mc={},Wc={},vKe=Object.keys(Wc);function yKe(n,e){var t=e.mixoutsTo;return MT=n,Mc={},Object.keys(Wc).forEach(function(r){vKe.indexOf(r)===-1&&delete Wc[r]}),MT.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(t[o]=i[o]),fg(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){t[o]||(t[o]={}),t[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){Mc[o]||(Mc[o]=[]),Mc[o].push(s[o])})}r.provides&&r.provides(Wc)}),t}function g_(n,e){for(var t=arguments.length,r=new Array(t>2?t-2:0),i=2;i<t;i++)r[i-2]=arguments[i];var s=Mc[n]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function ml(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var i=Mc[n]||[];i.forEach(function(s){s.apply(null,t)})}function lo(){var n=arguments[0],e=Array.prototype.slice.call(arguments,1);return Wc[n]?Wc[n].apply(null,e):void 0}function v_(n){n.prefix==="fa"&&(n.prefix="fas");var e=n.iconName,t=n.prefix||ua();if(e)return e=Ka(t,e)||e,wT(D3.definitions,t,e)||wT(ts.styles,t,e)}var D3=new gKe,_Ke=function(){We.autoReplaceSvg=!1,We.observeMutations=!1,ml("noAuto")},xKe={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return yo?(ml("beforeI2svg",e),lo("pseudoElements2svg",e),lo("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;We.autoReplaceSvg===!1&&(We.autoReplaceSvg=!0),We.observeMutations=!0,sKe(function(){wKe({autoReplaceSvgRoot:t}),ml("watch",e)})}},SKe={icon:function(e){if(e===null)return null;if(fg(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Ka(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=av(e[0]);return{prefix:r,iconName:Ka(r,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(We.cssPrefix,"-"))>-1||e.match(BZe))){var i=lv(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||ua(),iconName:Ka(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=ua();return{prefix:s,iconName:Ka(s,e)||e}}}},xi={noAuto:_Ke,config:We,dom:xKe,parse:SKe,library:D3,findIconDefinition:v_,toHtml:qd},wKe=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot,r=t===void 0?sn:t;(Object.keys(ts.styles).length>0||We.autoFetchSvg)&&yo&&We.autoReplaceSvg&&xi.dom.i2svg({node:r})};function cv(n,e){return Object.defineProperty(n,"abstract",{get:e}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(function(r){return qd(r)})}}),Object.defineProperty(n,"node",{get:function(){if(yo){var r=sn.createElement("div");return r.innerHTML=n.html,r.children}}}),n}function bKe(n){var e=n.children,t=n.main,r=n.mask,i=n.attributes,s=n.styles,o=n.transform;if(KS(o)&&t.found&&!r.found){var a=t.width,l=t.height,f={x:a/l/2,y:.5};i.style=ov(Ue(Ue({},s),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function EKe(n){var e=n.prefix,t=n.iconName,r=n.children,i=n.attributes,s=n.symbol,o=s===!0?"".concat(e,"-").concat(We.cssPrefix,"-").concat(t):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Ue(Ue({},i),{},{id:o}),children:r}]}]}function tw(n){var e=n.icons,t=e.main,r=e.mask,i=n.prefix,s=n.iconName,o=n.transform,a=n.symbol,l=n.title,f=n.maskId,d=n.titleId,h=n.extra,p=n.watchable,g=p===void 0?!1:p,y=r.found?r:t,b=y.width,S=y.height,m=i==="fak",_=[We.replacementClass,s?"".concat(We.cssPrefix,"-").concat(s):""].filter(function(R){return h.classes.indexOf(R)===-1}).filter(function(R){return R!==""||!!R}).concat(h.classes).join(" "),w={children:[],attributes:Ue(Ue({},h.attributes),{},{"data-prefix":i,"data-icon":s,class:_,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(b," ").concat(S)})},M=m&&!~h.classes.indexOf("fa-fw")?{width:"".concat(b/S*16*.0625,"em")}:{};g&&(w.attributes[pl]=""),l&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(d||Kf())},children:[l]}),delete w.attributes.title);var C=Ue(Ue({},w),{},{prefix:i,iconName:s,main:t,mask:r,maskId:f,transform:o,symbol:a,styles:Ue(Ue({},M),h.styles)}),A=r.found&&t.found?lo("generateAbstractMask",C)||{children:[],attributes:{}}:lo("generateAbstractIcon",C)||{children:[],attributes:{}},P=A.children,k=A.attributes;return C.children=P,C.attributes=k,a?EKe(C):bKe(C)}function TT(n){var e=n.content,t=n.width,r=n.height,i=n.transform,s=n.title,o=n.extra,a=n.watchable,l=a===void 0?!1:a,f=Ue(Ue(Ue({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(f[pl]="");var d=Ue({},o.styles);KS(i)&&(d.transform=tKe({transform:i,startCentered:!0,width:t,height:r}),d["-webkit-transform"]=d.transform);var h=ov(d);h.length>0&&(f.style=h);var p=[];return p.push({tag:"span",attributes:f,children:[e]}),s&&p.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),p}function MKe(n){var e=n.content,t=n.title,r=n.extra,i=Ue(Ue(Ue({},r.attributes),t?{title:t}:{}),{},{class:r.classes.join(" ")}),s=ov(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),t&&o.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),o}var N1=ts.styles;function y_(n){var e=n[0],t=n[1],r=n.slice(4),i=qS(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(We.cssPrefix,"-").concat(Za.GROUP)},children:[{tag:"path",attributes:{class:"".concat(We.cssPrefix,"-").concat(Za.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(We.cssPrefix,"-").concat(Za.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:t,icon:o}}var TKe={found:!1,width:512,height:512};function AKe(n,e){!x3&&!We.showMissingIcons&&n&&console.error('Icon with name "'.concat(n,'" and prefix "').concat(e,'" is missing.'))}function __(n,e){var t=e;return e==="fa"&&We.styleDefault!==null&&(e=ua()),new Promise(function(r,i){if(lo("missingIconAbstract"),t==="fa"){var s=I3(n)||{};n=s.iconName||n,e=s.prefix||e}if(n&&e&&N1[e]&&N1[e][n]){var o=N1[e][n];return r(y_(o))}AKe(n,e),r(Ue(Ue({},TKe),{},{icon:We.showMissingIcons&&n?lo("missingIconAbstract")||{}:{}}))})}var AT=function(){},x_=We.measurePerformance&&ap&&ap.mark&&ap.measure?ap:{mark:AT,measure:AT},wf='FA "6.4.2"',CKe=function(e){return x_.mark("".concat(wf," ").concat(e," begins")),function(){return k3(e)}},k3=function(e){x_.mark("".concat(wf," ").concat(e," ends")),x_.measure("".concat(wf," ").concat(e),"".concat(wf," ").concat(e," begins"),"".concat(wf," ").concat(e," ends"))},nw={begin:CKe,end:k3},Om=function(){};function CT(n){var e=n.getAttribute?n.getAttribute(pl):null;return typeof e=="string"}function RKe(n){var e=n.getAttribute?n.getAttribute(jS):null,t=n.getAttribute?n.getAttribute(XS):null;return e&&t}function PKe(n){return n&&n.classList&&n.classList.contains&&n.classList.contains(We.replacementClass)}function LKe(){if(We.autoReplaceSvg===!0)return $m.replace;var n=$m[We.autoReplaceSvg];return n||$m.replace}function NKe(n){return sn.createElementNS("http://www.w3.org/2000/svg",n)}function IKe(n){return sn.createElement(n)}function O3(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.ceFn,r=t===void 0?n.tag==="svg"?NKe:IKe:t;if(typeof n=="string")return sn.createTextNode(n);var i=r(n.tag);Object.keys(n.attributes||[]).forEach(function(o){i.setAttribute(o,n.attributes[o])});var s=n.children||[];return s.forEach(function(o){i.appendChild(O3(o,{ceFn:r}))}),i}function DKe(n){var e=" ".concat(n.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var $m={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(i){t.parentNode.insertBefore(O3(i),t)}),t.getAttribute(pl)===null&&We.keepOriginalSource){var r=sn.createComment(DKe(t));t.parentNode.replaceChild(r,t)}else t.remove()},nest:function(e){var t=e[0],r=e[1];if(~ZS(t).indexOf(We.replacementClass))return $m.replace(e);var i=new RegExp("".concat(We.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===We.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return qd(a)}).join(`
`);t.setAttribute(pl,""),t.innerHTML=o}};function RT(n){n()}function $3(n,e){var t=typeof e=="function"?e:Om;if(n.length===0)t();else{var r=RT;We.mutateApproach===UZe&&(r=ca.requestAnimationFrame||RT),r(function(){var i=LKe(),s=nw.begin("mutate");n.map(i),s(),t()})}}var rw=!1;function U3(){rw=!0}function S_(){rw=!1}var hg=null;function PT(n){if(_T&&We.observeMutations){var e=n.treeCallback,t=e===void 0?Om:e,r=n.nodeCallback,i=r===void 0?Om:r,s=n.pseudoElementsCallback,o=s===void 0?Om:s,a=n.observeMutationsRoot,l=a===void 0?sn:a;hg=new _T(function(f){if(!rw){var d=ua();xu(f).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!CT(h.addedNodes[0])&&(We.searchPseudoElements&&o(h.target),t(h.target)),h.type==="attributes"&&h.target.parentNode&&We.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&CT(h.target)&&~qZe.indexOf(h.attributeName))if(h.attributeName==="class"&&RKe(h.target)){var p=lv(ZS(h.target)),g=p.prefix,y=p.iconName;h.target.setAttribute(jS,g||d),y&&h.target.setAttribute(XS,y)}else PKe(h.target)&&i(h.target)})}}),yo&&hg.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function kKe(){hg&&hg.disconnect()}function OKe(n){var e=n.getAttribute("style"),t=[];return e&&(t=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),t}function $Ke(n){var e=n.getAttribute("data-prefix"),t=n.getAttribute("data-icon"),r=n.innerText!==void 0?n.innerText.trim():"",i=lv(ZS(n));return i.prefix||(i.prefix=ua()),e&&t&&(i.prefix=e,i.iconName=t),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=pKe(i.prefix,n.innerText)||QS(i.prefix,p_(n.innerText))),!i.iconName&&We.autoFetchSvg&&n.firstChild&&n.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=n.firstChild.data)),i}function UKe(n){var e=xu(n.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),t=n.getAttribute("title"),r=n.getAttribute("data-fa-title-id");return We.autoA11y&&(t?e["aria-labelledby"]="".concat(We.replacementClass,"-title-").concat(r||Kf()):(e["aria-hidden"]="true",e.focusable="false")),e}function FKe(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Rs,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function LT(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=$Ke(n),r=t.iconName,i=t.prefix,s=t.rest,o=UKe(n),a=g_("parseNodeAttributes",{},n),l=e.styleParser?OKe(n):[];return Ue({iconName:r,title:n.getAttribute("title"),titleId:n.getAttribute("data-fa-title-id"),prefix:i,transform:Rs,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var zKe=ts.styles;function F3(n){var e=We.autoReplaceSvg==="nest"?LT(n,{styleParser:!1}):LT(n);return~e.extra.classes.indexOf(S3)?lo("generateLayersText",n,e):lo("generateSvgReplacementMutation",n,e)}var fa=new Set;YS.map(function(n){fa.add("fa-".concat(n))});Object.keys(jf[rn]).map(fa.add.bind(fa));Object.keys(jf[bn]).map(fa.add.bind(fa));fa=Vd(fa);function NT(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!yo)return Promise.resolve();var t=sn.documentElement.classList,r=function(h){return t.add("".concat(xT,"-").concat(h))},i=function(h){return t.remove("".concat(xT,"-").concat(h))},s=We.autoFetchSvg?fa:YS.map(function(d){return"fa-".concat(d)}).concat(Object.keys(zKe));s.includes("fa")||s.push("fa");var o=[".".concat(S3,":not([").concat(pl,"])")].concat(s.map(function(d){return".".concat(d,":not([").concat(pl,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=xu(n.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=nw.begin("onTree"),f=a.reduce(function(d,h){try{var p=F3(h);p&&d.push(p)}catch(g){x3||g.name==="MissingIcon"&&console.error(g)}return d},[]);return new Promise(function(d,h){Promise.all(f).then(function(p){$3(p,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),d()})}).catch(function(p){l(),h(p)})})}function BKe(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;F3(n).then(function(t){t&&$3([t],e)})}function HKe(n){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:v_(e||{}),i=t.mask;return i&&(i=(i||{}).icon?i:v_(i||{})),n(r,Ue(Ue({},t),{},{mask:i}))}}var VKe=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.transform,i=r===void 0?Rs:r,s=t.symbol,o=s===void 0?!1:s,a=t.mask,l=a===void 0?null:a,f=t.maskId,d=f===void 0?null:f,h=t.title,p=h===void 0?null:h,g=t.titleId,y=g===void 0?null:g,b=t.classes,S=b===void 0?[]:b,m=t.attributes,_=m===void 0?{}:m,w=t.styles,M=w===void 0?{}:w;if(e){var C=e.prefix,A=e.iconName,P=e.icon;return cv(Ue({type:"icon"},e),function(){return ml("beforeDOMElementCreation",{iconDefinition:e,params:t}),We.autoA11y&&(p?_["aria-labelledby"]="".concat(We.replacementClass,"-title-").concat(y||Kf()):(_["aria-hidden"]="true",_.focusable="false")),tw({icons:{main:y_(P),mask:l?y_(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:A,transform:Ue(Ue({},Rs),i),symbol:o,title:p,maskId:d,titleId:y,extra:{attributes:_,styles:M,classes:S}})})}},GKe={mixout:function(){return{icon:HKe(VKe)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=NT,t.nodeCallback=BKe,t}}},provides:function(e){e.i2svg=function(t){var r=t.node,i=r===void 0?sn:r,s=t.callback,o=s===void 0?function(){}:s;return NT(i,o)},e.generateSvgReplacementMutation=function(t,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,f=r.symbol,d=r.mask,h=r.maskId,p=r.extra;return new Promise(function(g,y){Promise.all([__(i,a),d.iconName?__(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(b){var S=qS(b,2),m=S[0],_=S[1];g([t,tw({icons:{main:m,mask:_},prefix:a,iconName:i,transform:l,symbol:f,maskId:h,title:s,titleId:o,extra:p,watchable:!0})])}).catch(y)})},e.generateAbstractIcon=function(t){var r=t.children,i=t.attributes,s=t.main,o=t.transform,a=t.styles,l=ov(a);l.length>0&&(i.style=l);var f;return KS(o)&&(f=lo("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(f||s.icon),{children:r,attributes:i}}}},qKe={mixout:function(){return{layer:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return cv({type:"layer"},function(){ml("beforeDOMElementCreation",{assembler:t,params:r});var o=[];return t(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(We.cssPrefix,"-layers")].concat(Vd(s)).join(" ")},children:o}]})}}}},WKe={mixout:function(){return{counter:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,d=r.styles,h=d===void 0?{}:d;return cv({type:"counter",content:t},function(){return ml("beforeDOMElementCreation",{content:t,params:r}),MKe({content:t.toString(),title:s,extra:{attributes:f,styles:h,classes:["".concat(We.cssPrefix,"-layers-counter")].concat(Vd(a))}})})}}}},jKe={mixout:function(){return{text:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?Rs:i,o=r.title,a=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,d=r.attributes,h=d===void 0?{}:d,p=r.styles,g=p===void 0?{}:p;return cv({type:"text",content:t},function(){return ml("beforeDOMElementCreation",{content:t,params:r}),TT({content:t,transform:Ue(Ue({},Rs),s),title:a,extra:{attributes:h,styles:g,classes:["".concat(We.cssPrefix,"-layers-text")].concat(Vd(f))}})})}}},provides:function(e){e.generateLayersText=function(t,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(v3){var f=parseInt(getComputedStyle(t).fontSize,10),d=t.getBoundingClientRect();a=d.width/f,l=d.height/f}return We.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([t,TT({content:t.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},XKe=new RegExp('"',"ug"),IT=[1105920,1112319];function YKe(n){var e=n.replace(XKe,""),t=lKe(e,0),r=t>=IT[0]&&t<=IT[1],i=e.length===2?e[0]===e[1]:!1;return{value:p_(i?e[0]:e),isSecondary:r||i}}function DT(n,e){var t="".concat($Ze).concat(e.replace(":","-"));return new Promise(function(r,i){if(n.getAttribute(t)!==null)return r();var s=xu(n.children),o=s.filter(function(P){return P.getAttribute(h_)===e})[0],a=ca.getComputedStyle(n,e),l=a.getPropertyValue("font-family").match(HZe),f=a.getPropertyValue("font-weight"),d=a.getPropertyValue("content");if(o&&!l)return n.removeChild(o),r();if(l&&d!=="none"&&d!==""){var h=a.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?bn:rn,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Xf[p][l[2].toLowerCase()]:VZe[p][f],y=YKe(h),b=y.value,S=y.isSecondary,m=l[0].startsWith("FontAwesome"),_=QS(g,b),w=_;if(m){var M=mKe(b);M.iconName&&M.prefix&&(_=M.iconName,g=M.prefix)}if(_&&!S&&(!o||o.getAttribute(jS)!==g||o.getAttribute(XS)!==w)){n.setAttribute(t,w),o&&n.removeChild(o);var C=FKe(),A=C.extra;A.attributes[h_]=e,__(_,g).then(function(P){var k=tw(Ue(Ue({},C),{},{icons:{main:P,mask:ew()},prefix:g,iconName:w,extra:A,watchable:!0})),R=sn.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?n.insertBefore(R,n.firstChild):n.appendChild(R),R.outerHTML=k.map(function(N){return qd(N)}).join(`
`),n.removeAttribute(t),r()}).catch(i)}else r()}else r()})}function ZKe(n){return Promise.all([DT(n,"::before"),DT(n,"::after")])}function KKe(n){return n.parentNode!==document.head&&!~FZe.indexOf(n.tagName.toUpperCase())&&!n.getAttribute(h_)&&(!n.parentNode||n.parentNode.tagName!=="svg")}function kT(n){if(yo)return new Promise(function(e,t){var r=xu(n.querySelectorAll("*")).filter(KKe).map(ZKe),i=nw.begin("searchPseudoElements");U3(),Promise.all(r).then(function(){i(),S_(),e()}).catch(function(){i(),S_(),t()})})}var JKe={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=kT,t}}},provides:function(e){e.pseudoElements2svg=function(t){var r=t.node,i=r===void 0?sn:r;We.searchPseudoElements&&kT(i)}}},OT=!1,QKe={mixout:function(){return{dom:{unwatch:function(){U3(),OT=!0}}}},hooks:function(){return{bootstrap:function(){PT(g_("mutationObserverCallbacks",{}))},noAuto:function(){kKe()},watch:function(t){var r=t.observeMutationsRoot;OT?S_():PT(g_("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},$T=function(e){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},t)},eJe={mixout:function(){return{parse:{transform:function(t){return $T(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,r){var i=r.getAttribute("data-fa-transform");return i&&(t.transform=$T(i)),t}}},provides:function(e){e.generateAbstractTransformGrouping=function(t){var r=t.main,i=t.transform,s=t.containerWidth,o=t.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),f="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),d="rotate(".concat(i.rotate," 0 0)"),h={transform:"".concat(l," ").concat(f," ").concat(d)},p={transform:"translate(".concat(o/2*-1," -256)")},g={outer:a,inner:h,path:p};return{tag:"g",attributes:Ue({},g.outer),children:[{tag:"g",attributes:Ue({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:Ue(Ue({},r.icon.attributes),g.path)}]}]}}}},I1={x:0,y:0,width:"100%",height:"100%"};function UT(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||e)&&(n.attributes.fill="black"),n}function tJe(n){return n.tag==="g"?n.children:[n]}var nJe={hooks:function(){return{parseNodeAttributes:function(t,r){var i=r.getAttribute("data-fa-mask"),s=i?lv(i.split(" ").map(function(o){return o.trim()})):ew();return s.prefix||(s.prefix=ua()),t.mask=s,t.maskId=r.getAttribute("data-fa-mask-id"),t}}},provides:function(e){e.generateAbstractMask=function(t){var r=t.children,i=t.attributes,s=t.main,o=t.mask,a=t.maskId,l=t.transform,f=s.width,d=s.icon,h=o.width,p=o.icon,g=eKe({transform:l,containerWidth:h,iconWidth:f}),y={tag:"rect",attributes:Ue(Ue({},I1),{},{fill:"white"})},b=d.children?{children:d.children.map(UT)}:{},S={tag:"g",attributes:Ue({},g.inner),children:[UT(Ue({tag:d.tag,attributes:Ue(Ue({},d.attributes),g.path)},b))]},m={tag:"g",attributes:Ue({},g.outer),children:[S]},_="mask-".concat(a||Kf()),w="clip-".concat(a||Kf()),M={tag:"mask",attributes:Ue(Ue({},I1),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,m]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:tJe(p)},M]};return r.push(C,{tag:"rect",attributes:Ue({fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(_,")")},I1)}),{children:r,attributes:i}}}},rJe={provides:function(e){var t=!1;ca.matchMedia&&(t=ca.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:Ue(Ue({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=Ue(Ue({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:Ue(Ue({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||a.children.push({tag:"animate",attributes:Ue(Ue({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:Ue(Ue({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:Ue(Ue({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:Ue(Ue({},o),{},{values:"1;0;0;0;0;1;"})}]}),t||r.push({tag:"path",attributes:Ue(Ue({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:Ue(Ue({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},iJe={hooks:function(){return{parseNodeAttributes:function(t,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return t.symbol=s,t}}}},sJe=[rKe,GKe,qKe,WKe,jKe,JKe,QKe,eJe,nJe,rJe,iJe];yKe(sJe,{mixoutsTo:xi});xi.noAuto;xi.config;xi.library;xi.dom;var w_=xi.parse;xi.findIconDefinition;xi.toHtml;var oJe=xi.icon;xi.layer;xi.text;xi.counter;var Rt={},aJe={get exports(){return Rt},set exports(n){Rt=n}},lJe="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",cJe=lJe,uJe=cJe;function z3(){}function B3(){}B3.resetWarningCache=z3;var fJe=function(){function n(r,i,s,o,a,l){if(l!==uJe){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}n.isRequired=n;function e(){return n}var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:B3,resetWarningCache:z3};return t.PropTypes=t,t};aJe.exports=fJe();function FT(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function Xo(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?FT(Object(t),!0).forEach(function(r){Tc(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):FT(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function pg(n){return pg=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},pg(n)}function Tc(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function dJe(n,e){if(n==null)return{};var t={},r=Object.keys(n),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(t[i]=n[i]);return t}function hJe(n,e){if(n==null)return{};var t=dJe(n,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}function b_(n){return pJe(n)||mJe(n)||gJe(n)||vJe()}function pJe(n){if(Array.isArray(n))return E_(n)}function mJe(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function gJe(n,e){if(n){if(typeof n=="string")return E_(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return E_(n,e)}}function E_(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function vJe(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function yJe(n){var e,t=n.beat,r=n.fade,i=n.beatFade,s=n.bounce,o=n.shake,a=n.flash,l=n.spin,f=n.spinPulse,d=n.spinReverse,h=n.pulse,p=n.fixedWidth,g=n.inverse,y=n.border,b=n.listItem,S=n.flip,m=n.size,_=n.rotation,w=n.pull,M=(e={"fa-beat":t,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":d,"fa-spin-pulse":f,"fa-pulse":h,"fa-fw":p,"fa-inverse":g,"fa-border":y,"fa-li":b,"fa-flip":S===!0,"fa-flip-horizontal":S==="horizontal"||S==="both","fa-flip-vertical":S==="vertical"||S==="both"},Tc(e,"fa-".concat(m),typeof m<"u"&&m!==null),Tc(e,"fa-rotate-".concat(_),typeof _<"u"&&_!==null&&_!==0),Tc(e,"fa-pull-".concat(w),typeof w<"u"&&w!==null),Tc(e,"fa-swap-opacity",n.swapOpacity),e);return Object.keys(M).map(function(C){return M[C]?C:null}).filter(function(C){return C})}function _Je(n){return n=n-0,n===n}function H3(n){return _Je(n)?n:(n=n.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""}),n.substr(0,1).toLowerCase()+n.substr(1))}var xJe=["style"];function SJe(n){return n.charAt(0).toUpperCase()+n.slice(1)}function wJe(n){return n.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var r=t.indexOf(":"),i=H3(t.slice(0,r)),s=t.slice(r+1).trim();return i.startsWith("webkit")?e[SJe(i)]=s:e[i]=s,e},{})}function V3(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return V3(n,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,f){var d=e.attributes[f];switch(f){case"class":l.attrs.className=d,delete e.attributes.class;break;case"style":l.attrs.style=wJe(d);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?l.attrs[f.toLowerCase()]=d:l.attrs[H3(f)]=d}return l},{attrs:{}}),s=t.style,o=s===void 0?{}:s,a=hJe(t,xJe);return i.attrs.style=Xo(Xo({},i.attrs.style),o),n.apply(void 0,[e.tag,Xo(Xo({},i.attrs),a)].concat(b_(r)))}var G3=!1;try{G3=!0}catch{}function bJe(){if(!G3&&console&&typeof console.error=="function"){var n;(n=console).error.apply(n,arguments)}}function zT(n){if(n&&pg(n)==="object"&&n.prefix&&n.iconName&&n.icon)return n;if(w_.icon)return w_.icon(n);if(n===null)return null;if(n&&pg(n)==="object"&&n.prefix&&n.iconName)return n;if(Array.isArray(n)&&n.length===2)return{prefix:n[0],iconName:n[1]};if(typeof n=="string")return{prefix:"fas",iconName:n}}function D1(n,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Tc({},n,e):{}}var Un=Mn.forwardRef(function(n,e){var t=n.icon,r=n.mask,i=n.symbol,s=n.className,o=n.title,a=n.titleId,l=n.maskId,f=zT(t),d=D1("classes",[].concat(b_(yJe(n)),b_(s.split(" ")))),h=D1("transform",typeof n.transform=="string"?w_.transform(n.transform):n.transform),p=D1("mask",zT(r)),g=oJe(f,Xo(Xo(Xo(Xo({},d),h),p),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!g)return bJe("Could not find icon",f),null;var y=g.abstract,b={ref:e};return Object.keys(n).forEach(function(S){Un.defaultProps.hasOwnProperty(S)||(b[S]=n[S])}),EJe(y[0],b)});Un.displayName="FontAwesomeIcon";Un.propTypes={beat:Rt.bool,border:Rt.bool,beatFade:Rt.bool,bounce:Rt.bool,className:Rt.string,fade:Rt.bool,flash:Rt.bool,mask:Rt.oneOfType([Rt.object,Rt.array,Rt.string]),maskId:Rt.string,fixedWidth:Rt.bool,inverse:Rt.bool,flip:Rt.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Rt.oneOfType([Rt.object,Rt.array,Rt.string]),listItem:Rt.bool,pull:Rt.oneOf(["right","left"]),pulse:Rt.bool,rotation:Rt.oneOf([0,90,180,270]),shake:Rt.bool,size:Rt.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Rt.bool,spinPulse:Rt.bool,spinReverse:Rt.bool,symbol:Rt.oneOfType([Rt.bool,Rt.string]),title:Rt.string,titleId:Rt.string,transform:Rt.oneOfType([Rt.string,Rt.object]),swapOpacity:Rt.bool};Un.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var EJe=V3.bind(null,Mn.createElement),MJe={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},TJe={prefix:"fas",iconName:"lightbulb",icon:[384,512,[128161],"f0eb","M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"]},AJe={prefix:"fas",iconName:"chevron-up",icon:[512,512,[],"f077","M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]},CJe={prefix:"fas",iconName:"a",icon:[384,512,[97],"41","M221.5 51.7C216.6 39.8 204.9 32 192 32s-24.6 7.8-29.5 19.7l-120 288-40 96c-6.8 16.3 .9 35 17.2 41.8s35-.9 41.8-17.2L93.3 384H290.7l31.8 76.3c6.8 16.3 25.5 24 41.8 17.2s24-25.5 17.2-41.8l-40-96-120-288zM264 320H120l72-172.8L264 320z"]},RJe={prefix:"fas",iconName:"filter",icon:[512,512,[],"f0b0","M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"]},PJe={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},LJe={prefix:"fas",iconName:"minus",icon:[448,512,[8211,8722,10134,"subtract"],"f068","M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]},M_={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]},NJe={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},IJe=NJe,DJe={prefix:"fas",iconName:"moon",icon:[384,512,[127769,9214],"f186","M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]};const k1=({profile:n})=>{const[e,t]=ie.useState(!1),r=i=>{i.preventDefault(),i.stopPropagation(),t(!e)};return L.jsxs("div",{className:`dropdown-container ${e?"dropdown-open":"pointer"}`,onClick:e?null:r,children:[L.jsxs("div",{className:`dropdown-header ${e?"dropdown-open pointer":""}`,onClick:e?r:null,children:[L.jsx("h2",{role:"heading","aria-level":"2",children:n.title}),L.jsx("button",{role:"button","aria-pressed":"false",title:"Expand Dropdown","aria-label":"Expand Dropdown",className:"icon",children:e?L.jsx(Un,{icon:LJe}):L.jsx(Un,{icon:M_})})]}),e&&L.jsxs(Mn.Fragment,{children:[L.jsxs("p",{className:"dropdown-tagline",children:[" ",n.tagline," "]}),L.jsxs("h3",{role:"heading","aria-level":"3",children:[" ",n.header," "]}),L.jsx("ul",{className:"dropdown-list",children:n.skills.map((i,s)=>L.jsx("li",{children:L.jsx("p",{children:i})},s))})]})]})},kJe=["Hello","Hi","Hej","안녕","Hola","Salut"],OJe={title:"Part Designer",tagline:"I value things with clear structure, clean style, purpose-driven elements, and thought-provoking interactions.",header:"My design skills:",skills:["Architectural Design","Computational Design","UI/UX/Web Design","Graphic Design"]},$Je={title:"Part Coder",tagline:"I love to write code and build apps that enhance productivity, creativity, and accessibility to information.",header:"My coding skills:",skills:["Data Management","CAD/BIM Plugins","Full Stack Web","OOP Libraries"]},UJe={title:"Part Human",tagline:"I'm an American living in Copenhagen. If I'm not behind my screen, I'm probably outside exploring the city.",header:"My human skills:",skills:["Cycling in the Rain","Astrophotography","Rock Climbing","Backpacking"]},FJe={title:"Profile",text:["Hi, I'm Andrew Smith. I’m a multidisciplinary designer bridging the fields of architecture, computation, and application development. I have a combined 10 years of academic and professional experience in architecture, in which I hold a <a target='_blank' title='See Program Page' class='custom-underline'href='https://www.sciarc.edu/academics/undergraduate'>B.Arch</a> & <a target='_blank' title='See Program Page' class='custom-underline'href='https://royaldanishacademy.com/master-computation-in-architecture'>MA</a> degree. I'm passionate about design, technology, and anything to do with putting things together (or taking them apart!).","During my B.Arch, I developed a deep interest in scripting and programming as a way to create and control architectural geometry. Later, as a designer at HKS Architects, I found programming and computational thinking instrumental in overcoming project-delivery challenges on complex projects like ",". Professionally, I've helped teams of all sizes deliver dozens of competition proposals, construction document sets, and construction administration services within tight deadlines using computational techniques to automate tasks and manage project complexities.","Seeking an academic foundation in computation, I left practice in 2021 to pursue an MA in Computation in Architecture, which I have recently completed. Several applications developed in and around my Master's studies like "," are open-sourced on my Github.","Currently, I'm seeking full-time employment where my experience and skills can contribute to innovative and sustainability-focused projects and initiatives. So, whether it's an employment inquiry, collaborating on a project, discussing app ideas, or simply saying hi, please reach out, and let's start putting something amazing together!"]},zJe={title:"Experience",entries:[{id:0,title:"Open-Source Developer",employer:"Self-Employed",dates:"06/2021- Present",desc:"I am actively developing and maintaining several open-source projects including: StadiumTools, a C# library & plug-in for parametrically modeling stadiums, and Lepidoptera, a web platform for architects to explore ecological datasets.",skills:["Software Development","Git Version Control","C# / OOP Programming","Algorithmic Modeling","Web Development","RESTful APIs","Data Structures"],projects:[23,22,21]},{id:1,title:"Metal Workshop Tutor",employer:"Royal Danish Academy",dates:"08/2021 - 07/2023",desc:"I maintained after-hours operation of the academy's metal shop. In this role, I assisted students with the fabrication of academic projects as they related to pipe bending, sheet metal forming, laser-cutting, and casting.",skills:["Metal Fabrication","Pipe Bending","Sheet Metal Forming","Laser Cutting","Teaching","Problem Solving","Safety Protocols","Student Engagement"],projects:[19]},{id:2,title:"BLOXHUB AEC Hackathon",employer:"Best Overall Project",dates:"03/2023",desc:"OpenMaterialData was a team effort to prototype an open-source data framework to boost the usability of product information by introducing machine-readable open standards for declaring architectural products.",skills:["Open-Source Collaboration","Data Frameworks","Architectural Products","Machine-Readable Standards","Problem Solving","Innovation","Teamwork","Presentation Skills"],projects:[21]},{id:3,title:"Architectural Designer",employer:"HKS Architects",dates:"06/2017 - 06/2021",desc:"Working across teams, I supported the design, documentation, and construction of several state-of-the-art entertainment venues. I also participated in over two dozen design competitions across several sectors. My work focused on parametric modeling, design, and interoperability solutions to improve the speed & quality of the design & documentation.",skills:["Architectural Design","Parametric Modeling","Interoperability Solutions","Design Competitions","Construction Documentation","BIM (Autodesk Revit/BIM360)","3D Visualization","Construction Administration"],projects:["professional"]},{id:4,title:"Film History T.A.",employer:"SCI-Arc",dates:"08/2016 - 04/2017",desc:"I supported several of SCI-Arc's film history classes as a TA by kicking off topical discussions, managing film screenings, and grading written assignments. My tasks also included digitizing course materials and guiding students in analyzing films, aiming to enhance their understanding of cinematic criticism, and encouraging thoughtful communication.",skills:["Teaching Assistance","Film Analysis","Course Material Digitization","Cinematic Criticism","Communication Skills","Time Management","Critical Thinking","Mentoring"],projects:[]}]},BJe={title:"Education",entries:[{id:0,title:"Computation in Architecture (MA)",employer:"Royal Danish Academy",dates:"08/2021 - 07/2023",desc:"I've developed a comprehensive knowledge of computational techniques (programming, digital fabrication, robotics), and gained practical skills in applying that knowledge to solve architectural design problems focused around reducing the ecological footprint of building methods & materials.",skills:["Programming","Digital Fabrication","Robotics","Architectural Design","Sustainable Design","Ecological Footprint Analysis","Bio-Materials Science"],projects:["graduate"]},{id:1,title:"2021 CREATE Summer School",employer:"Syddansk Universitet",dates:"08/2021",desc:"This Summer program focused on exploring data-driven tectonic construction, and the production of 1:1 scale prototypes that aimed at advancing wood architecture through the use of novel digital design-to-fabrication workflows. Concepts introduced included performance-driven aggregations, circular assemblies, and wood forming through programmed material behavior.",skills:["Data-Driven Design","Tectonic Construction","Prototype Production","Digital Design-to-Fabrication","Performance-Driven Design","Circular Assemblies","Material Behavior Programming"],projects:[17]},{id:2,title:"Bachelor of Architecture (B.Arch)",employer:"SCI-Arc",dates:"09/2013 - 05-2018",desc:"In this program, I've gained core competencies of the architectural design profession with an emphasis on innovation and experimentation within topics of architectural design theory, practice, technology, and research.",skills:["Architectural Design","Design Innovation","Design Theory","Design Technology","Design Communication","Design Experimentation","Public Speaking"],projects:["undergraduate"]}]},HJe={title:"Skills",architectural:["Computational Design","Sports Venue Design","Presentations","Conceptual Design","Design Documents","Construction Documents","Construction Admin","BIM Coordination","Life Cycle Assessment"],development:["Plugin Development","Web Development","UI / UX Design","Object Libraries","RESTful APIs"],applications:["Rhinoceros 3D","Grasshopper","Autodesk Revit","Rhino.Inside.Revit","Enscape","Adobe Photoshop","Adobe Illustrator","Adobe InDesign","Adobe Permiere Pro","Bluebeam Studio","Autodesk Navisworks","Autodesk BIM 360","Microsoft VS Code","Microsoft Visual Studio","Autodesk Maya","QGIS"],languages:["C#","JavaScript","Python"],libraries:["React","Express","Mapbox","RhinoCommon","OpenNURBS","Flask"],other:["RESTful APIs","SQLite","Google S3","Google Earth Engine"]},cn={greetings:kJe,designer:OJe,developer:$Je,human:UJe,profile:FJe,professional:zJe,academic:BJe,skills:HJe},mt=[{id:0,name:"Parking Spot Pavilion",href:"parking-pavilion",style:{aspectRatio:.7789},category:2,site:"Los Angeles, CA, US",yearStart:2013,yearEnd:2013,desc:"a small pavilion based on my own proportions"},{id:1,name:"Hollywood Boys and Girls Club",href:"boys-and-girls-club",style:{aspectRatio:1.5456},category:2,site:"Los Angeles, CA",yearStart:2014,yearEnd:2014,desc:"an after-school club inspired by a cemetery's circulation"},{id:2,name:"Downtown LA Culinary School",href:"dtla-culinary-school",style:{aspectRatio:.7825},category:2,site:"Los Angeles, CA",yearStart:2015,yearEnd:2015,desc:"an exercise in programming"},{id:3,name:"10 Hudson Yards",href:"hudson-yards",style:{aspectRatio:.7777},category:2,site:"New York, NY, US",yearStart:2015,yearEnd:2015,desc:"creating depth through a formal process of profiling"},{id:4,name:"SFMOMA Facade Study",href:"sfmoma-facade-study",style:{aspectRatio:.7716},category:2,site:"San Francisco, CA",yearStart:2016,yearEnd:2016,desc:"an exterior facade study of Snøhetta's SFMOMA"},{id:5,name:"SCI-Arc IV",href:"sciarc4",style:{aspectRatio:1.5038},category:2,site:"Copenhagen, DK, US",yearStart:2016,yearEnd:2016,desc:"retopologizing the SCI-Arc campus as a spherical building"},{id:6,name:"Sietch House",href:"sietch-house",style:{aspectRatio:.7391},category:2,site:"Palm Springs, CA, US",yearStart:2016,yearEnd:2016,desc:"a narrative approach to a residential house in water-stricken Palm Springs",collab:["TBD"]},{id:7,name:"Dodgers Stadium Extension",href:"dodgers-stadium-extension",style:{aspectRatio:.80193},category:2,site:"Los Angeles, CA, US",yearStart:2018,yearEnd:2017,desc:"a district plan beyond the outfield of LA's Dodgers Stadium"},{id:8,name:"Structural Optimization Strategies",href:"structural-optimization-strategies",style:{aspectRatio:1.91571},category:1,site:"Austin, TX, US",yearStart:2019,yearEnd:2019,desc:"a topology optimization stratgey for shell structures"},{id:9,name:"Polyhedral Timber Topologies",href:"polyhedral-timber-topologies",style:{aspectRatio:1.7065},category:1,site:"Mexico City, MX",yearStart:2018,yearEnd:2018,desc:"a cross-section optimization stratgey for lattice structures"},{id:10,name:"Hack-A-Frac",href:"hack-a-frac",style:{aspectRatio:1.5773},category:1,site:"Denton, TX, US",yearStart:2019,yearEnd:2020,desc:"a proposal to hack Texas's abandoned fracking infrastructure"},{id:11,name:"Parametric Programming",href:"parametric-programming",style:{aspectRatio:1.4085},category:0,site:"None",yearStart:2019,yearEnd:2020,desc:"a parametric approach to visualizing stadium program data"},{id:12,name:"A Day in LA",href:"a-day-in-LA",style:{aspectRatio:1.5848},category:1,site:"Los Angeles, CA, US",yearStart:2019,yearEnd:2019,desc:"a multi-modal transportation plan for the 2028 LA Olympics"},{id:13,name:"FBI Innovation Center",href:"fbi-innovation-center",style:{aspectRatio:1.7986},category:0,site:"Hunstville, AL, US",yearStart:2020,yearEnd:2020,desc:"using Rhino.Inside.Revit to coordinate a parametric facade"},{id:14,name:"Barangaroo Pier Pavilion",href:"barangaroo-pier-pavilion",style:{aspectRatio:.8013},category:0,site:"Sydney, AU",yearStart:2020,yearEnd:2020,desc:"an iconic waterfront pavilion inspired by storytelling"},{id:15,name:"YouTube Theater",href:"youtube-theater",style:{aspectRatio:1.4993},category:0,site:"Inglewood, CA, US",yearStart:2017,yearEnd:2021,desc:"a cutting-edge 6,000 seat performance venue in Los Angeles."},{id:16,name:"Sofi Stadium",href:"sofi-stadium",style:{aspectRatio:1.6695},category:0,site:"Inglewood, CA, US",yearStart:2017,yearEnd:2021,desc:"a global stage shaped by LA culture"},{id:17,name:"Robotic Timber Fabrication",href:"create-summer-school",style:{aspectRatio:1.2954},category:1,site:"Los Angeles, CA",yearStart:2021,yearEnd:2021,desc:"exploring robotic methods for fabricating freeform structural timber elements"},{id:18,name:"Passive Actuated Space Frames",href:"ptasf",style:{aspectRatio:.9542},category:3,site:"Copenhagen, DK, US",yearStart:2021,yearEnd:2022,desc:"space frame structures that respond passivly to changes in temperature"},{id:19,name:"Sammen",href:"candle-holder-3",style:{aspectRatio:1},category:1,site:"Copenhagen, DK, US",yearStart:2021,yearEnd:2021,desc:"a bespoke interlocking candle set inspired by Japanese joinery"},{id:20,name:"Graded Knitted Membranes",href:"graded-knit",style:{aspectRatio:.8272},category:3,site:"None",yearStart:2022,yearEnd:2022,desc:"steering material differentiation by formal and structural inputs"},{id:21,name:"AEC BLOXHUB Hackathon",href:"aec-hackathon-2023",style:{aspectRatio:1.2151},category:1,site:"Copenhagen, DK",yearStart:2023,yearEnd:2023,desc:"boosting the usability of product data in the AEC industry"},{id:22,name:"StadiumTools",href:"stadiumtools",style:{aspectRatio:.9091},category:1,site:"None",yearStart:2022,yearEnd:2023,desc:"an open-source library for modeling stadium geometries"},{id:23,name:"PLANimal",href:"planimal",style:{aspectRatio:1.0823},category:3,site:"Copenhagen, DK",yearStart:2022,yearEnd:2023,desc:"a computational framework for animal aided design"}],BT=n=>{const e=n.projectIds,t="custom-underline";function r(){if(e.length===1){const i=e[0];if(typeof i=="string")switch(i){case"professional":return L.jsx("li",{children:L.jsx($r,{className:t,href:"/projects/professional",children:"See Professional Projects"})});case"undergraduate":return L.jsx("li",{children:L.jsx($r,{className:t,href:"/projects/undergraduate",children:"See B.Arch Projects"})});case"graduate":return L.jsx("li",{children:L.jsx($r,{className:t,href:"/projects/graduate",children:"See Graduate Projects"})})}else return L.jsx("li",{children:L.jsx($r,{role:"link",className:t,href:`/projects/${mt[i].href}`,children:mt[i].name})})}return e.length>1?L.jsx(L.Fragment,{children:e.map((i,s)=>L.jsx("li",{children:L.jsx($r,{className:t,href:`/projects/${mt[i].href}`,children:mt[i].name},s)},s))}):L.jsx("li",{children:"None Yet"})}return L.jsx("ul",{children:L.jsx(r,{})})},HT=({experienceType:n})=>{const[e,t]=ie.useState(window.innerWidth),[r,i]=ie.useState(0),[s,o]=ie.useState(0);ie.useEffect(()=>{const f=()=>{t(window.innerWidth)};return window.addEventListener("resize",f),()=>{window.removeEventListener("resize",f)}},[]),ie.useEffect(()=>{o(r)},[r]);const a=f=>{i(f)},l=f=>f===r;return L.jsx("section",{className:"experience-section",children:L.jsx("div",{className:"experience-gallery",children:window.innerWidth<800?L.jsx("div",{className:"experience-column-list",children:L.jsx("ul",{className:"experience-list",children:n.entries.map((f,d)=>L.jsxs("div",{className:`experience-job ${l(d)?"selected":""}`,onClick:()=>a(d),children:[L.jsxs("div",{className:"experience-job-header",children:[L.jsxs("ul",{children:[L.jsx("li",{children:L.jsx("h3",{role:"heading","aria-level":"3",children:f.title})}),L.jsx("li",{children:L.jsx("b",{children:f.dates})})]}),L.jsx("button",{role:"button","aria-pressed":"false",title:"Expand Dropdown","aria-label":"Expand Dropdown",className:"icon",children:l(d)?null:L.jsx(Un,{icon:M_})})]}),l(d)&&L.jsxs("div",{className:"experience-details",children:[L.jsx("p",{children:f.desc}),L.jsxs("div",{className:"experience-stats",children:[L.jsxs("div",{className:"experience-skills",children:[L.jsx("h4",{role:"heading","aria-level":"4",children:"Related Skills:"}),L.jsx("ul",{children:f.skills.map((h,p)=>L.jsx("li",{children:h},p))})]}),L.jsxs("div",{className:"experience-projects",children:[L.jsx("h4",{role:"heading","aria-level":"4",children:"Related Projects:"}),L.jsx(BT,{projectIds:f.projects},s)]})]})]})]},d))})}):L.jsxs(L.Fragment,{children:[L.jsx("div",{className:"experience-column-list",children:L.jsx("ul",{className:"experience-list",children:n.entries.map((f,d)=>L.jsx("div",{className:`experience-job ${l(d)?"selected":""}`,onClick:()=>a(d),children:L.jsxs("div",{className:"experience-job-header",children:[L.jsxs("ul",{children:[L.jsx("li",{children:L.jsx("h3",{role:"heading","aria-level":"3",children:f.title})}),L.jsx("li",{children:L.jsx("b",{children:f.dates})})]}),L.jsx("button",{role:"button","aria-pressed":"false",title:"Expand Dropdown","aria-label":"Expand Dropdown",className:"icon",children:l(d)?null:L.jsx(Un,{icon:M_})})]})},d))})}),L.jsx("div",{className:"experience-column-details",children:L.jsxs("div",{className:"experience-details",children:[L.jsx("h4",{role:"heading","aria-level":"4",children:"Description:"}),L.jsx("p",{children:n.entries[r].desc}),L.jsxs("div",{className:"experience-stats",children:[L.jsxs("div",{className:"experience-skills",children:[L.jsx("h4",{role:"heading","aria-level":"4",children:"Related Skills:"}),L.jsx("ul",{children:n.entries[r].skills.map((f,d)=>L.jsx("li",{children:f},d))})]}),L.jsxs("div",{className:"experience-projects",children:[L.jsx("h4",{role:"heading","aria-level":"4",children:"Related Projects:"}),L.jsx(BT,{projectIds:n.entries[r].projects},s)]})]})]})})]})})})},iw=()=>{const[n,e]=ie.useState(!1),t=()=>{document.body.scrollHeight>800?e(!0):e(!1)},r=()=>{window.scrollTo({top:0,behavior:"smooth"})};return ie.useEffect(()=>(t(),window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}),[]),n?L.jsx("div",{className:"scroll-btn-container",children:L.jsx("button",{role:"button",className:"icon scroll-btn",title:"Scroll To Top","aria-label":"Scroll To Top",onClick:r,children:L.jsx(Un,{icon:AJe})})}):null};function VJe(){const n="https://storage.googleapis.com/atsmitharc-media/thumb/degree",e=".webp";return L.jsxs(ie.Fragment,{children:[L.jsxs("div",{className:"about-container",children:[L.jsx("h1",{role:"heading","aria-level":"1",children:"Andrew Smith"}),L.jsx("section",{className:"about-avatar",children:L.jsxs("div",{className:"three-columns-flex",children:[L.jsx("div",{id:"right",className:"about-column",children:L.jsx(k1,{profile:cn.human})}),L.jsx("div",{id:"middle",className:"about-column",children:L.jsx(k1,{profile:cn.designer})}),L.jsx("div",{id:"left",className:"about-column",children:L.jsx(k1,{profile:cn.developer})}),L.jsx("div",{className:"image-slider",children:L.jsxs("div",{id:"bg",className:"image-bg",children:[L.jsx("div",{id:"mg",className:"image-mg"}),L.jsx("div",{id:"fg",className:"image-fg"})]})})]})}),L.jsx("h2",{className:"about-section-header",role:"heading","aria-level":"2",children:cn.profile.title}),L.jsxs("section",{className:"three-columns-flex about-me",children:[L.jsx("div",{className:"about-column img-column",children:L.jsx("img",{src:n+"-800"+e,srcSet:`${n}-400${e} 500w,
                       ${n}-600${e} 700w,
                       ${n}-1000${e} 1100w`,alt:"Andrew Smith holding degree"})}),L.jsxs("div",{className:"about-column bio-column",children:[L.jsx("p",{children:Xl(cn.profile.text[0])}),L.jsxs("p",{children:[Xl(cn.profile.text[1]),L.jsx($r,{title:"See Project",href:"./projects/sofi-stadium",className:"custom-underline",children:"Sofi Stadium"})," and ",L.jsx($r,{title:"See Project",href:"./projects/youtube-theater",className:"custom-underline",children:"YouTube Theater"}),Xl(cn.profile.text[2])]}),L.jsxs("p",{children:[Xl(cn.profile.text[3]),L.jsx($r,{title:"See Project",href:"./projects/stadiumtools",className:"custom-underline",children:"StadiumTools"})," and ",L.jsx($r,{title:"See Project",href:"./projects/planimal",className:"custom-underline",children:"PLANimal"}),Xl(cn.profile.text[4])]}),L.jsx("p",{children:Xl(cn.profile.text[5])})]})]}),L.jsx("h2",{className:"about-section-header",role:"heading","aria-level":"2",children:cn.professional.title}),L.jsx(HT,{experienceType:cn.professional},0),L.jsx("h2",{className:"about-section-header",role:"heading","aria-level":"2",children:cn.academic.title}),L.jsx(HT,{experienceType:cn.academic},1),L.jsx("h2",{className:"about-section-header",role:"heading","aria-level":"2",children:cn.skills.title}),L.jsxs("section",{className:"three-columns-flex skills",children:[L.jsxs("div",{className:"about-column",children:[L.jsx("h3",{role:"heading","aria-level":"3",children:"Languages"}),L.jsx("ul",{children:cn.skills.languages.map((t,r)=>L.jsx("li",{children:t},r))}),L.jsx("h3",{role:"heading","aria-level":"3",children:"Libraries"}),L.jsx("ul",{children:cn.skills.libraries.map((t,r)=>L.jsx("li",{children:t},r))}),L.jsx("h3",{role:"heading","aria-level":"3",children:"Other"}),L.jsx("ul",{children:cn.skills.other.map((t,r)=>L.jsx("li",{children:t},r))})]}),L.jsxs("div",{className:"about-column",children:[L.jsx("h3",{role:"heading","aria-level":"3",children:"Applications"}),L.jsx("ul",{children:cn.skills.applications.map((t,r)=>L.jsx("li",{children:t},r))})]}),L.jsxs("div",{className:"about-column",children:[L.jsx("h3",{role:"heading","aria-level":"3",children:"Architectural"}),L.jsx("ul",{children:cn.skills.architectural.map((t,r)=>L.jsx("li",{children:t},r))}),L.jsx("h3",{role:"heading","aria-level":"3",children:"Development"}),L.jsx("ul",{children:cn.skills.development.map((t,r)=>L.jsx("li",{children:t},r))})]})]})]}),L.jsx(iw,{})]})}const GJe=()=>{const[n,e]=ie.useState(""),[t,r]=ie.useState(!1);ie.useEffect(()=>{const o=["a","t","s","m","i","t","h","a","r","c","&#64;","g","m","a","i","l",".","c","o","m"].map(a=>a==="&#64;"?"@":a).join("");e(o)},[]);const i=()=>{r(!0)};return L.jsxs("div",{className:"contact-header",children:[L.jsxs("p",{className:"contact-text",children:["Email me directly:"," ",t?L.jsx("p",{children:n}):L.jsx("a",{className:"custom-underline",title:"Display Email",onClick:i,children:"Click to Show"})," "]}),L.jsx("br",{}),L.jsx("p",{className:"contact-text",children:" ...or use the form below:"})]})};var Ar={},qJe={get exports(){return Ar},set exports(n){Ar=n}},WJe="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",jJe=WJe,XJe=jJe;function q3(){}function W3(){}W3.resetWarningCache=q3;var YJe=function(){function n(r,i,s,o,a,l){if(l!==XJe){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}n.isRequired=n;function e(){return n}var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:W3,resetWarningCache:q3};return t.PropTypes=t,t};qJe.exports=YJe();var ZJe=["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl","isolated"];function T_(){return T_=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},T_.apply(this,arguments)}function KJe(n,e){if(n==null)return{};var t={},r=Object.keys(n),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(t[i]=n[i]);return t}function gp(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function JJe(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,A_(n,e)}function A_(n,e){return A_=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},A_(n,e)}var uv=function(n){JJe(e,n);function e(){var r;return r=n.call(this)||this,r.handleExpired=r.handleExpired.bind(gp(r)),r.handleErrored=r.handleErrored.bind(gp(r)),r.handleChange=r.handleChange.bind(gp(r)),r.handleRecaptchaRef=r.handleRecaptchaRef.bind(gp(r)),r}var t=e.prototype;return t.getCaptchaFunction=function(i){return this.props.grecaptcha?this.props.grecaptcha.enterprise?this.props.grecaptcha.enterprise[i]:this.props.grecaptcha[i]:null},t.getValue=function(){var i=this.getCaptchaFunction("getResponse");return i&&this._widgetId!==void 0?i(this._widgetId):null},t.getWidgetId=function(){return this.props.grecaptcha&&this._widgetId!==void 0?this._widgetId:null},t.execute=function(){var i=this.getCaptchaFunction("execute");if(i&&this._widgetId!==void 0)return i(this._widgetId);this._executeRequested=!0},t.executeAsync=function(){var i=this;return new Promise(function(s,o){i.executionResolve=s,i.executionReject=o,i.execute()})},t.reset=function(){var i=this.getCaptchaFunction("reset");i&&this._widgetId!==void 0&&i(this._widgetId)},t.forceReset=function(){var i=this.getCaptchaFunction("reset");i&&i()},t.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},t.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},t.handleChange=function(i){this.props.onChange&&this.props.onChange(i),this.executionResolve&&(this.executionResolve(i),delete this.executionReject,delete this.executionResolve)},t.explicitRender=function(){var i=this.getCaptchaFunction("render");if(i&&this._widgetId===void 0){var s=document.createElement("div");this._widgetId=i(s,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge,isolated:this.props.isolated}),this.captcha.appendChild(s)}this._executeRequested&&this.props.grecaptcha&&this._widgetId!==void 0&&(this._executeRequested=!1,this.execute())},t.componentDidMount=function(){this.explicitRender()},t.componentDidUpdate=function(){this.explicitRender()},t.handleRecaptchaRef=function(i){this.captcha=i},t.render=function(){var i=this.props;i.sitekey,i.onChange,i.theme,i.type,i.tabindex,i.onExpired,i.onErrored,i.size,i.stoken,i.grecaptcha,i.badge,i.hl,i.isolated;var s=KJe(i,ZJe);return ie.createElement("div",T_({},s,{ref:this.handleRecaptchaRef}))},e}(ie.Component);uv.displayName="ReCAPTCHA";uv.propTypes={sitekey:Ar.string.isRequired,onChange:Ar.func,grecaptcha:Ar.object,theme:Ar.oneOf(["dark","light"]),type:Ar.oneOf(["image","audio"]),tabindex:Ar.number,onExpired:Ar.func,onErrored:Ar.func,size:Ar.oneOf(["compact","normal","invisible"]),stoken:Ar.string,hl:Ar.string,badge:Ar.oneOf(["bottomright","bottomleft","inline"]),isolated:Ar.bool};uv.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};var C_={},QJe={get exports(){return C_},set exports(n){C_=n}},jt={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var or=typeof Symbol=="function"&&Symbol.for,sw=or?Symbol.for("react.element"):60103,ow=or?Symbol.for("react.portal"):60106,fv=or?Symbol.for("react.fragment"):60107,dv=or?Symbol.for("react.strict_mode"):60108,hv=or?Symbol.for("react.profiler"):60114,pv=or?Symbol.for("react.provider"):60109,mv=or?Symbol.for("react.context"):60110,aw=or?Symbol.for("react.async_mode"):60111,gv=or?Symbol.for("react.concurrent_mode"):60111,vv=or?Symbol.for("react.forward_ref"):60112,yv=or?Symbol.for("react.suspense"):60113,eQe=or?Symbol.for("react.suspense_list"):60120,_v=or?Symbol.for("react.memo"):60115,xv=or?Symbol.for("react.lazy"):60116,tQe=or?Symbol.for("react.block"):60121,nQe=or?Symbol.for("react.fundamental"):60117,rQe=or?Symbol.for("react.responder"):60118,iQe=or?Symbol.for("react.scope"):60119;function Si(n){if(typeof n=="object"&&n!==null){var e=n.$$typeof;switch(e){case sw:switch(n=n.type,n){case aw:case gv:case fv:case hv:case dv:case yv:return n;default:switch(n=n&&n.$$typeof,n){case mv:case vv:case xv:case _v:case pv:return n;default:return e}}case ow:return e}}}function j3(n){return Si(n)===gv}jt.AsyncMode=aw;jt.ConcurrentMode=gv;jt.ContextConsumer=mv;jt.ContextProvider=pv;jt.Element=sw;jt.ForwardRef=vv;jt.Fragment=fv;jt.Lazy=xv;jt.Memo=_v;jt.Portal=ow;jt.Profiler=hv;jt.StrictMode=dv;jt.Suspense=yv;jt.isAsyncMode=function(n){return j3(n)||Si(n)===aw};jt.isConcurrentMode=j3;jt.isContextConsumer=function(n){return Si(n)===mv};jt.isContextProvider=function(n){return Si(n)===pv};jt.isElement=function(n){return typeof n=="object"&&n!==null&&n.$$typeof===sw};jt.isForwardRef=function(n){return Si(n)===vv};jt.isFragment=function(n){return Si(n)===fv};jt.isLazy=function(n){return Si(n)===xv};jt.isMemo=function(n){return Si(n)===_v};jt.isPortal=function(n){return Si(n)===ow};jt.isProfiler=function(n){return Si(n)===hv};jt.isStrictMode=function(n){return Si(n)===dv};jt.isSuspense=function(n){return Si(n)===yv};jt.isValidElementType=function(n){return typeof n=="string"||typeof n=="function"||n===fv||n===gv||n===hv||n===dv||n===yv||n===eQe||typeof n=="object"&&n!==null&&(n.$$typeof===xv||n.$$typeof===_v||n.$$typeof===pv||n.$$typeof===mv||n.$$typeof===vv||n.$$typeof===nQe||n.$$typeof===rQe||n.$$typeof===iQe||n.$$typeof===tQe)};jt.typeOf=Si;(function(n){n.exports=jt})(QJe);var lw=C_,sQe={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},oQe={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},aQe={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},X3={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},cw={};cw[lw.ForwardRef]=aQe;cw[lw.Memo]=X3;function VT(n){return lw.isMemo(n)?X3:cw[n.$$typeof]||sQe}var lQe=Object.defineProperty,cQe=Object.getOwnPropertyNames,GT=Object.getOwnPropertySymbols,uQe=Object.getOwnPropertyDescriptor,fQe=Object.getPrototypeOf,qT=Object.prototype;function Y3(n,e,t){if(typeof e!="string"){if(qT){var r=fQe(e);r&&r!==qT&&Y3(n,r,t)}var i=cQe(e);GT&&(i=i.concat(GT(e)));for(var s=VT(n),o=VT(e),a=0;a<i.length;++a){var l=i[a];if(!oQe[l]&&!(t&&t[l])&&!(o&&o[l])&&!(s&&s[l])){var f=uQe(e,l);try{lQe(n,l,f)}catch{}}}}return n}var dQe=Y3;function R_(){return R_=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},R_.apply(this,arguments)}function hQe(n,e){if(n==null)return{};var t={},r=Object.keys(n),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(t[i]=n[i]);return t}function pQe(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}var qi={},mQe=0;function gQe(n,e){return e=e||{},function(r){var i=r.displayName||r.name||"Component",s=function(a){pQe(l,a);function l(d,h){var p;return p=a.call(this,d,h)||this,p.state={},p.__scriptURL="",p}var f=l.prototype;return f.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+mQe++),this.__scriptLoaderID},f.setupScriptURL=function(){return this.__scriptURL=typeof n=="function"?n():n,this.__scriptURL},f.asyncScriptLoaderHandleLoad=function(h){var p=this;this.setState(h,function(){return p.props.asyncScriptOnLoad&&p.props.asyncScriptOnLoad(p.state)})},f.asyncScriptLoaderTriggerOnScriptLoaded=function(){var h=qi[this.__scriptURL];if(!h||!h.loaded)throw new Error("Script is not loaded.");for(var p in h.observers)h.observers[p](h);delete window[e.callbackName]},f.componentDidMount=function(){var h=this,p=this.setupScriptURL(),g=this.asyncScriptLoaderGetScriptLoaderID(),y=e,b=y.globalName,S=y.callbackName,m=y.scriptId;if(b&&typeof window[b]<"u"&&(qi[p]={loaded:!0,observers:{}}),qi[p]){var _=qi[p];if(_&&(_.loaded||_.errored)){this.asyncScriptLoaderHandleLoad(_);return}_.observers[g]=function(P){return h.asyncScriptLoaderHandleLoad(P)};return}var w={};w[g]=function(P){return h.asyncScriptLoaderHandleLoad(P)},qi[p]={loaded:!1,observers:w};var M=document.createElement("script");M.src=p,M.async=!0;for(var C in e.attributes)M.setAttribute(C,e.attributes[C]);m&&(M.id=m);var A=function(k){if(qi[p]){var R=qi[p],N=R.observers;for(var B in N)k(N[B])&&delete N[B]}};S&&typeof window<"u"&&(window[S]=function(){return h.asyncScriptLoaderTriggerOnScriptLoaded()}),M.onload=function(){var P=qi[p];P&&(P.loaded=!0,A(function(k){return S?!1:(k(P),!0)}))},M.onerror=function(){var P=qi[p];P&&(P.errored=!0,A(function(k){return k(P),!0}))},document.body.appendChild(M)},f.componentWillUnmount=function(){var h=this.__scriptURL;if(e.removeOnUnmount===!0)for(var p=document.getElementsByTagName("script"),g=0;g<p.length;g+=1)p[g].src.indexOf(h)>-1&&p[g].parentNode&&p[g].parentNode.removeChild(p[g]);var y=qi[h];y&&(delete y.observers[this.asyncScriptLoaderGetScriptLoaderID()],e.removeOnUnmount===!0&&delete qi[h])},f.render=function(){var h=e.globalName,p=this.props;p.asyncScriptOnLoad;var g=p.forwardedRef,y=hQe(p,["asyncScriptOnLoad","forwardedRef"]);return h&&typeof window<"u"&&(y[h]=typeof window[h]<"u"?window[h]:void 0),y.ref=g,ie.createElement(r,y)},l}(ie.Component),o=ie.forwardRef(function(a,l){return ie.createElement(s,R_({},a,{forwardedRef:l}))});return o.displayName="AsyncScriptLoader("+i+")",o.propTypes={asyncScriptOnLoad:Ar.func},dQe(o,r)}}var P_="onloadcallback",vQe="grecaptcha";function L_(){return typeof window<"u"&&window.recaptchaOptions||{}}function yQe(){var n=L_(),e=n.useRecaptchaNet?"recaptcha.net":"www.google.com";return n.enterprise?"https://"+e+"/recaptcha/enterprise.js?onload="+P_+"&render=explicit":"https://"+e+"/recaptcha/api.js?onload="+P_+"&render=explicit"}const _Qe=gQe(yQe,{callbackName:P_,globalName:vQe,attributes:L_().nonce?{nonce:L_().nonce}:{}})(uv);var N_={},xQe={get exports(){return N_},set exports(n){N_=n}},wi={},I_={},SQe={get exports(){return I_},set exports(n){I_=n}},Z3={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(D,z){var H=D.length;D.push(z);e:for(;0<H;){var X=H-1>>>1,ne=D[X];if(0<i(ne,z))D[X]=z,D[H]=ne,H=X;else break e}}function t(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var z=D[0],H=D.pop();if(H!==z){D[0]=H;e:for(var X=0,ne=D.length,K=ne>>>1;X<K;){var ae=2*(X+1)-1,ge=D[ae],Me=ae+1,Ee=D[Me];if(0>i(ge,H))Me<ne&&0>i(Ee,ge)?(D[X]=Ee,D[Me]=H,X=Me):(D[X]=ge,D[ae]=H,X=ae);else if(Me<ne&&0>i(Ee,H))D[X]=Ee,D[Me]=H,X=Me;else break e}}return z}function i(D,z){var H=D.sortIndex-z.sortIndex;return H!==0?H:D.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],f=[],d=1,h=null,p=3,g=!1,y=!1,b=!1,S=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(D){for(var z=t(f);z!==null;){if(z.callback===null)r(f);else if(z.startTime<=D)r(f),z.sortIndex=z.expirationTime,e(l,z);else break;z=t(f)}}function M(D){if(b=!1,w(D),!y)if(t(l)!==null)y=!0,te(C);else{var z=t(f);z!==null&&ue(M,z.startTime-D)}}function C(D,z){y=!1,b&&(b=!1,m(k),k=-1),g=!0;var H=p;try{for(w(z),h=t(l);h!==null&&(!(h.expirationTime>z)||D&&!B());){var X=h.callback;if(typeof X=="function"){h.callback=null,p=h.priorityLevel;var ne=X(h.expirationTime<=z);z=n.unstable_now(),typeof ne=="function"?h.callback=ne:h===t(l)&&r(l),w(z)}else r(l);h=t(l)}if(h!==null)var K=!0;else{var ae=t(f);ae!==null&&ue(M,ae.startTime-z),K=!1}return K}finally{h=null,p=H,g=!1}}var A=!1,P=null,k=-1,R=5,N=-1;function B(){return!(n.unstable_now()-N<R)}function W(){if(P!==null){var D=n.unstable_now();N=D;var z=!0;try{z=P(!0,D)}finally{z?J():(A=!1,P=null)}}else A=!1}var J;if(typeof _=="function")J=function(){_(W)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,Y=V.port2;V.port1.onmessage=W,J=function(){Y.postMessage(null)}}else J=function(){S(W,0)};function te(D){P=D,A||(A=!0,J())}function ue(D,z){k=S(function(){D(n.unstable_now())},z)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(D){D.callback=null},n.unstable_continueExecution=function(){y||g||(y=!0,te(C))},n.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<D?Math.floor(1e3/D):5},n.unstable_getCurrentPriorityLevel=function(){return p},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(D){switch(p){case 1:case 2:case 3:var z=3;break;default:z=p}var H=p;p=z;try{return D()}finally{p=H}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(D,z){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var H=p;p=D;try{return z()}finally{p=H}},n.unstable_scheduleCallback=function(D,z,H){var X=n.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?X+H:X):H=X,D){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=H+ne,D={id:d++,callback:z,priorityLevel:D,startTime:H,expirationTime:ne,sortIndex:-1},H>X?(D.sortIndex=H,e(f,D),t(l)===null&&D===t(f)&&(b?(m(k),k=-1):b=!0,ue(M,H-X))):(D.sortIndex=ne,e(l,D),y||g||(y=!0,te(C))),D},n.unstable_shouldYield=B,n.unstable_wrapCallback=function(D){var z=p;return function(){var H=p;p=z;try{return D.apply(this,arguments)}finally{p=H}}}})(Z3);(function(n){n.exports=Z3})(SQe);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K3=ie,_i=I_;function Se(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var J3=new Set,Jf={};function Ml(n,e){su(n,e),su(n+"Capture",e)}function su(n,e){for(Jf[n]=e,n=0;n<e.length;n++)J3.add(e[n])}var co=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),D_=Object.prototype.hasOwnProperty,wQe=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,WT={},jT={};function bQe(n){return D_.call(jT,n)?!0:D_.call(WT,n)?!1:wQe.test(n)?jT[n]=!0:(WT[n]=!0,!1)}function EQe(n,e,t,r){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function MQe(n,e,t,r){if(e===null||typeof e>"u"||EQe(n,e,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Hr(n,e,t,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var gr={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){gr[n]=new Hr(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];gr[e]=new Hr(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){gr[n]=new Hr(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){gr[n]=new Hr(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){gr[n]=new Hr(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){gr[n]=new Hr(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){gr[n]=new Hr(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){gr[n]=new Hr(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){gr[n]=new Hr(n,5,!1,n.toLowerCase(),null,!1,!1)});var uw=/[\-:]([a-z])/g;function fw(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(uw,fw);gr[e]=new Hr(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(uw,fw);gr[e]=new Hr(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(uw,fw);gr[e]=new Hr(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){gr[n]=new Hr(n,1,!1,n.toLowerCase(),null,!1,!1)});gr.xlinkHref=new Hr("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){gr[n]=new Hr(n,1,!1,n.toLowerCase(),null,!0,!0)});function dw(n,e,t,r){var i=gr.hasOwnProperty(e)?gr[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(MQe(e,t,i,r)&&(t=null),r||i===null?bQe(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):i.mustUseProperty?n[i.propertyName]=t===null?i.type===3?!1:"":t:(e=i.attributeName,r=i.attributeNamespace,t===null?n.removeAttribute(e):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?n.setAttributeNS(r,e,t):n.setAttribute(e,t))))}var _o=K3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vp=Symbol.for("react.element"),Ac=Symbol.for("react.portal"),Cc=Symbol.for("react.fragment"),hw=Symbol.for("react.strict_mode"),k_=Symbol.for("react.profiler"),Q3=Symbol.for("react.provider"),eP=Symbol.for("react.context"),pw=Symbol.for("react.forward_ref"),O_=Symbol.for("react.suspense"),$_=Symbol.for("react.suspense_list"),mw=Symbol.for("react.memo"),Ho=Symbol.for("react.lazy"),tP=Symbol.for("react.offscreen"),XT=Symbol.iterator;function Ku(n){return n===null||typeof n!="object"?null:(n=XT&&n[XT]||n["@@iterator"],typeof n=="function"?n:null)}var yn=Object.assign,O1;function bf(n){if(O1===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);O1=e&&e[1]||""}return`
`+O1+n}var $1=!1;function U1(n,e){if(!n||$1)return"";$1=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(f){var r=f}Reflect.construct(n,[],e)}else{try{e.call()}catch(f){r=f}n.call(e.prototype)}else{try{throw Error()}catch(f){r=f}n()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var i=f.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{$1=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?bf(n):""}function TQe(n){switch(n.tag){case 5:return bf(n.type);case 16:return bf("Lazy");case 13:return bf("Suspense");case 19:return bf("SuspenseList");case 0:case 2:case 15:return n=U1(n.type,!1),n;case 11:return n=U1(n.type.render,!1),n;case 1:return n=U1(n.type,!0),n;default:return""}}function U_(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Cc:return"Fragment";case Ac:return"Portal";case k_:return"Profiler";case hw:return"StrictMode";case O_:return"Suspense";case $_:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case eP:return(n.displayName||"Context")+".Consumer";case Q3:return(n._context.displayName||"Context")+".Provider";case pw:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case mw:return e=n.displayName||null,e!==null?e:U_(n.type)||"Memo";case Ho:e=n._payload,n=n._init;try{return U_(n(e))}catch{}}return null}function AQe(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return U_(e);case 8:return e===hw?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function da(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function nP(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function CQe(n){var e=nP(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),r=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function yp(n){n._valueTracker||(n._valueTracker=CQe(n))}function rP(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),r="";return n&&(r=nP(n)?n.checked?"true":"false":n.value),n=r,n!==t?(e.setValue(n),!0):!1}function mg(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function F_(n,e){var t=e.checked;return yn({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function YT(n,e){var t=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;t=da(e.value!=null?e.value:t),n._wrapperState={initialChecked:r,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function iP(n,e){e=e.checked,e!=null&&dw(n,"checked",e,!1)}function z_(n,e){iP(n,e);var t=da(e.value),r=e.type;if(t!=null)r==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(r==="submit"||r==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?B_(n,e.type,t):e.hasOwnProperty("defaultValue")&&B_(n,e.type,da(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function ZT(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function B_(n,e,t){(e!=="number"||mg(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Ef=Array.isArray;function jc(n,e,t,r){if(n=n.options,e){e={};for(var i=0;i<t.length;i++)e["$"+t[i]]=!0;for(t=0;t<n.length;t++)i=e.hasOwnProperty("$"+n[t].value),n[t].selected!==i&&(n[t].selected=i),i&&r&&(n[t].defaultSelected=!0)}else{for(t=""+da(t),e=null,i=0;i<n.length;i++){if(n[i].value===t){n[i].selected=!0,r&&(n[i].defaultSelected=!0);return}e!==null||n[i].disabled||(e=n[i])}e!==null&&(e.selected=!0)}}function H_(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Se(91));return yn({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function KT(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(Se(92));if(Ef(t)){if(1<t.length)throw Error(Se(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:da(t)}}function sP(n,e){var t=da(e.value),r=da(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),r!=null&&(n.defaultValue=""+r)}function JT(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function oP(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function V_(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?oP(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var _p,aP=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,r,i){MSApp.execUnsafeLocalFunction(function(){return n(e,t,r,i)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(_p=_p||document.createElement("div"),_p.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=_p.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Qf(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Nf={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},RQe=["Webkit","ms","Moz","O"];Object.keys(Nf).forEach(function(n){RQe.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Nf[e]=Nf[n]})});function lP(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Nf.hasOwnProperty(n)&&Nf[n]?(""+e).trim():e+"px"}function cP(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=lP(t,e[t],r);t==="float"&&(t="cssFloat"),r?n.setProperty(t,i):n[t]=i}}var PQe=yn({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function G_(n,e){if(e){if(PQe[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Se(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Se(62))}}function q_(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var W_=null;function gw(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var j_=null,Xc=null,Yc=null;function QT(n){if(n=Xd(n)){if(typeof j_!="function")throw Error(Se(280));var e=n.stateNode;e&&(e=Mv(e),j_(n.stateNode,n.type,e))}}function uP(n){Xc?Yc?Yc.push(n):Yc=[n]:Xc=n}function fP(){if(Xc){var n=Xc,e=Yc;if(Yc=Xc=null,QT(n),e)for(n=0;n<e.length;n++)QT(e[n])}}function dP(n,e){return n(e)}function hP(){}var F1=!1;function pP(n,e,t){if(F1)return n(e,t);F1=!0;try{return dP(n,e,t)}finally{F1=!1,(Xc!==null||Yc!==null)&&(hP(),fP())}}function ed(n,e){var t=n.stateNode;if(t===null)return null;var r=Mv(t);if(r===null)return null;t=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(n=n.type,r=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!r;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(Se(231,e,typeof t));return t}var X_=!1;if(co)try{var Ju={};Object.defineProperty(Ju,"passive",{get:function(){X_=!0}}),window.addEventListener("test",Ju,Ju),window.removeEventListener("test",Ju,Ju)}catch{X_=!1}function LQe(n,e,t,r,i,s,o,a,l){var f=Array.prototype.slice.call(arguments,3);try{e.apply(t,f)}catch(d){this.onError(d)}}var If=!1,gg=null,vg=!1,Y_=null,NQe={onError:function(n){If=!0,gg=n}};function IQe(n,e,t,r,i,s,o,a,l){If=!1,gg=null,LQe.apply(NQe,arguments)}function DQe(n,e,t,r,i,s,o,a,l){if(IQe.apply(this,arguments),If){if(If){var f=gg;If=!1,gg=null}else throw Error(Se(198));vg||(vg=!0,Y_=f)}}function Tl(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function mP(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function eA(n){if(Tl(n)!==n)throw Error(Se(188))}function kQe(n){var e=n.alternate;if(!e){if(e=Tl(n),e===null)throw Error(Se(188));return e!==n?null:n}for(var t=n,r=e;;){var i=t.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===t)return eA(i),n;if(s===r)return eA(i),e;s=s.sibling}throw Error(Se(188))}if(t.return!==r.return)t=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===t){o=!0,t=i,r=s;break}if(a===r){o=!0,r=i,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,r=i;break}if(a===r){o=!0,r=s,t=i;break}a=a.sibling}if(!o)throw Error(Se(189))}}if(t.alternate!==r)throw Error(Se(190))}if(t.tag!==3)throw Error(Se(188));return t.stateNode.current===t?n:e}function gP(n){return n=kQe(n),n!==null?vP(n):null}function vP(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=vP(n);if(e!==null)return e;n=n.sibling}return null}var yP=_i.unstable_scheduleCallback,tA=_i.unstable_cancelCallback,OQe=_i.unstable_shouldYield,$Qe=_i.unstable_requestPaint,In=_i.unstable_now,UQe=_i.unstable_getCurrentPriorityLevel,vw=_i.unstable_ImmediatePriority,_P=_i.unstable_UserBlockingPriority,yg=_i.unstable_NormalPriority,FQe=_i.unstable_LowPriority,xP=_i.unstable_IdlePriority,Sv=null,Ps=null;function zQe(n){if(Ps&&typeof Ps.onCommitFiberRoot=="function")try{Ps.onCommitFiberRoot(Sv,n,void 0,(n.current.flags&128)===128)}catch{}}var ss=Math.clz32?Math.clz32:VQe,BQe=Math.log,HQe=Math.LN2;function VQe(n){return n>>>=0,n===0?32:31-(BQe(n)/HQe|0)|0}var xp=64,Sp=4194304;function Mf(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function _g(n,e){var t=n.pendingLanes;if(t===0)return 0;var r=0,i=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~i;a!==0?r=Mf(a):(s&=o,s!==0&&(r=Mf(s)))}else o=t&~i,o!==0?r=Mf(o):s!==0&&(r=Mf(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=r;0<e;)t=31-ss(e),i=1<<t,r|=n[t],e&=~i;return r}function GQe(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qQe(n,e){for(var t=n.suspendedLanes,r=n.pingedLanes,i=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-ss(s),a=1<<o,l=i[o];l===-1?(!(a&t)||a&r)&&(i[o]=GQe(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Z_(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function SP(){var n=xp;return xp<<=1,!(xp&4194240)&&(xp=64),n}function z1(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Wd(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-ss(e),n[e]=t}function WQe(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var r=n.eventTimes;for(n=n.expirationTimes;0<t;){var i=31-ss(t),s=1<<i;e[i]=0,r[i]=-1,n[i]=-1,t&=~s}}function yw(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var r=31-ss(t),i=1<<r;i&e|n[r]&e&&(n[r]|=e),t&=~i}}var Gt=0;function wP(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var bP,_w,EP,MP,TP,K_=!1,wp=[],Jo=null,Qo=null,ea=null,td=new Map,nd=new Map,qo=[],jQe="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function nA(n,e){switch(n){case"focusin":case"focusout":Jo=null;break;case"dragenter":case"dragleave":Qo=null;break;case"mouseover":case"mouseout":ea=null;break;case"pointerover":case"pointerout":td.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":nd.delete(e.pointerId)}}function Qu(n,e,t,r,i,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Xd(e),e!==null&&_w(e)),n):(n.eventSystemFlags|=r,e=n.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),n)}function XQe(n,e,t,r,i){switch(e){case"focusin":return Jo=Qu(Jo,n,e,t,r,i),!0;case"dragenter":return Qo=Qu(Qo,n,e,t,r,i),!0;case"mouseover":return ea=Qu(ea,n,e,t,r,i),!0;case"pointerover":var s=i.pointerId;return td.set(s,Qu(td.get(s)||null,n,e,t,r,i)),!0;case"gotpointercapture":return s=i.pointerId,nd.set(s,Qu(nd.get(s)||null,n,e,t,r,i)),!0}return!1}function AP(n){var e=Ja(n.target);if(e!==null){var t=Tl(e);if(t!==null){if(e=t.tag,e===13){if(e=mP(t),e!==null){n.blockedOn=e,TP(n.priority,function(){EP(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Um(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=J_(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var r=new t.constructor(t.type,t);W_=r,t.target.dispatchEvent(r),W_=null}else return e=Xd(t),e!==null&&_w(e),n.blockedOn=t,!1;e.shift()}return!0}function rA(n,e,t){Um(n)&&t.delete(e)}function YQe(){K_=!1,Jo!==null&&Um(Jo)&&(Jo=null),Qo!==null&&Um(Qo)&&(Qo=null),ea!==null&&Um(ea)&&(ea=null),td.forEach(rA),nd.forEach(rA)}function ef(n,e){n.blockedOn===e&&(n.blockedOn=null,K_||(K_=!0,_i.unstable_scheduleCallback(_i.unstable_NormalPriority,YQe)))}function rd(n){function e(i){return ef(i,n)}if(0<wp.length){ef(wp[0],n);for(var t=1;t<wp.length;t++){var r=wp[t];r.blockedOn===n&&(r.blockedOn=null)}}for(Jo!==null&&ef(Jo,n),Qo!==null&&ef(Qo,n),ea!==null&&ef(ea,n),td.forEach(e),nd.forEach(e),t=0;t<qo.length;t++)r=qo[t],r.blockedOn===n&&(r.blockedOn=null);for(;0<qo.length&&(t=qo[0],t.blockedOn===null);)AP(t),t.blockedOn===null&&qo.shift()}var Zc=_o.ReactCurrentBatchConfig,xg=!0;function ZQe(n,e,t,r){var i=Gt,s=Zc.transition;Zc.transition=null;try{Gt=1,xw(n,e,t,r)}finally{Gt=i,Zc.transition=s}}function KQe(n,e,t,r){var i=Gt,s=Zc.transition;Zc.transition=null;try{Gt=4,xw(n,e,t,r)}finally{Gt=i,Zc.transition=s}}function xw(n,e,t,r){if(xg){var i=J_(n,e,t,r);if(i===null)Z1(n,e,r,Sg,t),nA(n,r);else if(XQe(i,n,e,t,r))r.stopPropagation();else if(nA(n,r),e&4&&-1<jQe.indexOf(n)){for(;i!==null;){var s=Xd(i);if(s!==null&&bP(s),s=J_(n,e,t,r),s===null&&Z1(n,e,r,Sg,t),s===i)break;i=s}i!==null&&r.stopPropagation()}else Z1(n,e,r,null,t)}}var Sg=null;function J_(n,e,t,r){if(Sg=null,n=gw(r),n=Ja(n),n!==null)if(e=Tl(n),e===null)n=null;else if(t=e.tag,t===13){if(n=mP(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Sg=n,null}function CP(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(UQe()){case vw:return 1;case _P:return 4;case yg:case FQe:return 16;case xP:return 536870912;default:return 16}default:return 16}}var Yo=null,Sw=null,Fm=null;function RP(){if(Fm)return Fm;var n,e=Sw,t=e.length,r,i="value"in Yo?Yo.value:Yo.textContent,s=i.length;for(n=0;n<t&&e[n]===i[n];n++);var o=t-n;for(r=1;r<=o&&e[t-r]===i[s-r];r++);return Fm=i.slice(n,1<r?1-r:void 0)}function zm(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function bp(){return!0}function iA(){return!1}function bi(n){function e(t,r,i,s,o){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?bp:iA,this.isPropagationStopped=iA,this}return yn(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=bp)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=bp)},persist:function(){},isPersistent:bp}),e}var Su={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ww=bi(Su),jd=yn({},Su,{view:0,detail:0}),JQe=bi(jd),B1,H1,tf,wv=yn({},jd,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bw,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==tf&&(tf&&n.type==="mousemove"?(B1=n.screenX-tf.screenX,H1=n.screenY-tf.screenY):H1=B1=0,tf=n),B1)},movementY:function(n){return"movementY"in n?n.movementY:H1}}),sA=bi(wv),QQe=yn({},wv,{dataTransfer:0}),eet=bi(QQe),tet=yn({},jd,{relatedTarget:0}),V1=bi(tet),net=yn({},Su,{animationName:0,elapsedTime:0,pseudoElement:0}),ret=bi(net),iet=yn({},Su,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),set=bi(iet),oet=yn({},Su,{data:0}),oA=bi(oet),aet={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cet={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uet={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fet(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=uet[n])?!!e[n]:!1}function bw(){return fet}var det=yn({},jd,{key:function(n){if(n.key){var e=aet[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=zm(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?cet[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bw,charCode:function(n){return n.type==="keypress"?zm(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?zm(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),het=bi(det),pet=yn({},wv,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),aA=bi(pet),met=yn({},jd,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bw}),get=bi(met),vet=yn({},Su,{propertyName:0,elapsedTime:0,pseudoElement:0}),yet=bi(vet),_et=yn({},wv,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),xet=bi(_et),wet=[9,13,27,32],Ew=co&&"CompositionEvent"in window,Df=null;co&&"documentMode"in document&&(Df=document.documentMode);var bet=co&&"TextEvent"in window&&!Df,PP=co&&(!Ew||Df&&8<Df&&11>=Df),lA=String.fromCharCode(32),cA=!1;function LP(n,e){switch(n){case"keyup":return wet.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function NP(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Rc=!1;function Eet(n,e){switch(n){case"compositionend":return NP(e);case"keypress":return e.which!==32?null:(cA=!0,lA);case"textInput":return n=e.data,n===lA&&cA?null:n;default:return null}}function Met(n,e){if(Rc)return n==="compositionend"||!Ew&&LP(n,e)?(n=RP(),Fm=Sw=Yo=null,Rc=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return PP&&e.locale!=="ko"?null:e.data;default:return null}}var Tet={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uA(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Tet[n.type]:e==="textarea"}function IP(n,e,t,r){uP(r),e=wg(e,"onChange"),0<e.length&&(t=new ww("onChange","change",null,t,r),n.push({event:t,listeners:e}))}var kf=null,id=null;function Aet(n){GP(n,0)}function bv(n){var e=Nc(n);if(rP(e))return n}function Cet(n,e){if(n==="change")return e}var DP=!1;if(co){var G1;if(co){var q1="oninput"in document;if(!q1){var fA=document.createElement("div");fA.setAttribute("oninput","return;"),q1=typeof fA.oninput=="function"}G1=q1}else G1=!1;DP=G1&&(!document.documentMode||9<document.documentMode)}function dA(){kf&&(kf.detachEvent("onpropertychange",kP),id=kf=null)}function kP(n){if(n.propertyName==="value"&&bv(id)){var e=[];IP(e,id,n,gw(n)),pP(Aet,e)}}function Ret(n,e,t){n==="focusin"?(dA(),kf=e,id=t,kf.attachEvent("onpropertychange",kP)):n==="focusout"&&dA()}function Pet(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return bv(id)}function Let(n,e){if(n==="click")return bv(e)}function Net(n,e){if(n==="input"||n==="change")return bv(e)}function Iet(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var as=typeof Object.is=="function"?Object.is:Iet;function sd(n,e){if(as(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),r=Object.keys(e);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!D_.call(e,i)||!as(n[i],e[i]))return!1}return!0}function hA(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function pA(n,e){var t=hA(n);n=0;for(var r;t;){if(t.nodeType===3){if(r=n+t.textContent.length,n<=e&&r>=e)return{node:t,offset:e-n};n=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=hA(t)}}function OP(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?OP(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function $P(){for(var n=window,e=mg();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=mg(n.document)}return e}function Mw(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function Det(n){var e=$P(),t=n.focusedElem,r=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&OP(t.ownerDocument.documentElement,t)){if(r!==null&&Mw(t)){if(e=r.start,n=r.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var i=t.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!n.extend&&s>r&&(i=r,r=s,s=i),i=pA(t,s);var o=pA(t,r);i&&o&&(n.rangeCount!==1||n.anchorNode!==i.node||n.anchorOffset!==i.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),n.removeAllRanges(),s>r?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var ket=co&&"documentMode"in document&&11>=document.documentMode,Pc=null,Q_=null,Of=null,ex=!1;function mA(n,e,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ex||Pc==null||Pc!==mg(r)||(r=Pc,"selectionStart"in r&&Mw(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Of&&sd(Of,r)||(Of=r,r=wg(Q_,"onSelect"),0<r.length&&(e=new ww("onSelect","select",null,e,t),n.push({event:e,listeners:r}),e.target=Pc)))}function Ep(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Lc={animationend:Ep("Animation","AnimationEnd"),animationiteration:Ep("Animation","AnimationIteration"),animationstart:Ep("Animation","AnimationStart"),transitionend:Ep("Transition","TransitionEnd")},W1={},UP={};co&&(UP=document.createElement("div").style,"AnimationEvent"in window||(delete Lc.animationend.animation,delete Lc.animationiteration.animation,delete Lc.animationstart.animation),"TransitionEvent"in window||delete Lc.transitionend.transition);function Ev(n){if(W1[n])return W1[n];if(!Lc[n])return n;var e=Lc[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in UP)return W1[n]=e[t];return n}var FP=Ev("animationend"),zP=Ev("animationiteration"),BP=Ev("animationstart"),HP=Ev("transitionend"),VP=new Map,gA="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ya(n,e){VP.set(n,e),Ml(e,[n])}for(var j1=0;j1<gA.length;j1++){var X1=gA[j1],Oet=X1.toLowerCase(),$et=X1[0].toUpperCase()+X1.slice(1);ya(Oet,"on"+$et)}ya(FP,"onAnimationEnd");ya(zP,"onAnimationIteration");ya(BP,"onAnimationStart");ya("dblclick","onDoubleClick");ya("focusin","onFocus");ya("focusout","onBlur");ya(HP,"onTransitionEnd");su("onMouseEnter",["mouseout","mouseover"]);su("onMouseLeave",["mouseout","mouseover"]);su("onPointerEnter",["pointerout","pointerover"]);su("onPointerLeave",["pointerout","pointerover"]);Ml("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ml("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ml("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ml("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ml("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ml("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Uet=new Set("cancel close invalid load scroll toggle".split(" ").concat(Tf));function vA(n,e,t){var r=n.type||"unknown-event";n.currentTarget=t,DQe(r,e,void 0,n),n.currentTarget=null}function GP(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var r=n[t],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,f=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;vA(i,a,f),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,f=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;vA(i,a,f),s=l}}}if(vg)throw n=Y_,vg=!1,Y_=null,n}function nn(n,e){var t=e[sx];t===void 0&&(t=e[sx]=new Set);var r=n+"__bubble";t.has(r)||(qP(e,n,2,!1),t.add(r))}function Y1(n,e,t){var r=0;e&&(r|=4),qP(t,n,r,e)}var Mp="_reactListening"+Math.random().toString(36).slice(2);function od(n){if(!n[Mp]){n[Mp]=!0,J3.forEach(function(t){t!=="selectionchange"&&(Uet.has(t)||Y1(t,!1,n),Y1(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Mp]||(e[Mp]=!0,Y1("selectionchange",!1,e))}}function qP(n,e,t,r){switch(CP(e)){case 1:var i=ZQe;break;case 4:i=KQe;break;default:i=xw}t=i.bind(null,e,t,n),i=void 0,!X_||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?n.addEventListener(e,t,{capture:!0,passive:i}):n.addEventListener(e,t,!0):i!==void 0?n.addEventListener(e,t,{passive:i}):n.addEventListener(e,t,!1)}function Z1(n,e,t,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Ja(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}pP(function(){var f=s,d=gw(t),h=[];e:{var p=VP.get(n);if(p!==void 0){var g=ww,y=n;switch(n){case"keypress":if(zm(t)===0)break e;case"keydown":case"keyup":g=het;break;case"focusin":y="focus",g=V1;break;case"focusout":y="blur",g=V1;break;case"beforeblur":case"afterblur":g=V1;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=sA;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=eet;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=get;break;case FP:case zP:case BP:g=ret;break;case HP:g=yet;break;case"scroll":g=JQe;break;case"wheel":g=xet;break;case"copy":case"cut":case"paste":g=set;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=aA}var b=(e&4)!==0,S=!b&&n==="scroll",m=b?p!==null?p+"Capture":null:p;b=[];for(var _=f,w;_!==null;){w=_;var M=w.stateNode;if(w.tag===5&&M!==null&&(w=M,m!==null&&(M=ed(_,m),M!=null&&b.push(ad(_,M,w)))),S)break;_=_.return}0<b.length&&(p=new g(p,y,null,t,d),h.push({event:p,listeners:b}))}}if(!(e&7)){e:{if(p=n==="mouseover"||n==="pointerover",g=n==="mouseout"||n==="pointerout",p&&t!==W_&&(y=t.relatedTarget||t.fromElement)&&(Ja(y)||y[uo]))break e;if((g||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,g?(y=t.relatedTarget||t.toElement,g=f,y=y?Ja(y):null,y!==null&&(S=Tl(y),y!==S||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=f),g!==y)){if(b=sA,M="onMouseLeave",m="onMouseEnter",_="mouse",(n==="pointerout"||n==="pointerover")&&(b=aA,M="onPointerLeave",m="onPointerEnter",_="pointer"),S=g==null?p:Nc(g),w=y==null?p:Nc(y),p=new b(M,_+"leave",g,t,d),p.target=S,p.relatedTarget=w,M=null,Ja(d)===f&&(b=new b(m,_+"enter",y,t,d),b.target=w,b.relatedTarget=S,M=b),S=M,g&&y)t:{for(b=g,m=y,_=0,w=b;w;w=Yl(w))_++;for(w=0,M=m;M;M=Yl(M))w++;for(;0<_-w;)b=Yl(b),_--;for(;0<w-_;)m=Yl(m),w--;for(;_--;){if(b===m||m!==null&&b===m.alternate)break t;b=Yl(b),m=Yl(m)}b=null}else b=null;g!==null&&yA(h,p,g,b,!1),y!==null&&S!==null&&yA(h,S,y,b,!0)}}e:{if(p=f?Nc(f):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var C=Cet;else if(uA(p))if(DP)C=Net;else{C=Pet;var A=Ret}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(C=Let);if(C&&(C=C(n,f))){IP(h,C,t,d);break e}A&&A(n,p,f),n==="focusout"&&(A=p._wrapperState)&&A.controlled&&p.type==="number"&&B_(p,"number",p.value)}switch(A=f?Nc(f):window,n){case"focusin":(uA(A)||A.contentEditable==="true")&&(Pc=A,Q_=f,Of=null);break;case"focusout":Of=Q_=Pc=null;break;case"mousedown":ex=!0;break;case"contextmenu":case"mouseup":case"dragend":ex=!1,mA(h,t,d);break;case"selectionchange":if(ket)break;case"keydown":case"keyup":mA(h,t,d)}var P;if(Ew)e:{switch(n){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Rc?LP(n,t)&&(k="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(k="onCompositionStart");k&&(PP&&t.locale!=="ko"&&(Rc||k!=="onCompositionStart"?k==="onCompositionEnd"&&Rc&&(P=RP()):(Yo=d,Sw="value"in Yo?Yo.value:Yo.textContent,Rc=!0)),A=wg(f,k),0<A.length&&(k=new oA(k,n,null,t,d),h.push({event:k,listeners:A}),P?k.data=P:(P=NP(t),P!==null&&(k.data=P)))),(P=bet?Eet(n,t):Met(n,t))&&(f=wg(f,"onBeforeInput"),0<f.length&&(d=new oA("onBeforeInput","beforeinput",null,t,d),h.push({event:d,listeners:f}),d.data=P))}GP(h,e)})}function ad(n,e,t){return{instance:n,listener:e,currentTarget:t}}function wg(n,e){for(var t=e+"Capture",r=[];n!==null;){var i=n,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ed(n,t),s!=null&&r.unshift(ad(n,s,i)),s=ed(n,e),s!=null&&r.push(ad(n,s,i))),n=n.return}return r}function Yl(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function yA(n,e,t,r,i){for(var s=e._reactName,o=[];t!==null&&t!==r;){var a=t,l=a.alternate,f=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&f!==null&&(a=f,i?(l=ed(t,s),l!=null&&o.unshift(ad(t,l,a))):i||(l=ed(t,s),l!=null&&o.push(ad(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var Fet=/\r\n?/g,zet=/\u0000|\uFFFD/g;function _A(n){return(typeof n=="string"?n:""+n).replace(Fet,`
`).replace(zet,"")}function Tp(n,e,t){if(e=_A(e),_A(n)!==e&&t)throw Error(Se(425))}function bg(){}var tx=null,nx=null;function rx(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ix=typeof setTimeout=="function"?setTimeout:void 0,Bet=typeof clearTimeout=="function"?clearTimeout:void 0,xA=typeof Promise=="function"?Promise:void 0,Het=typeof queueMicrotask=="function"?queueMicrotask:typeof xA<"u"?function(n){return xA.resolve(null).then(n).catch(Vet)}:ix;function Vet(n){setTimeout(function(){throw n})}function K1(n,e){var t=e,r=0;do{var i=t.nextSibling;if(n.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){n.removeChild(i),rd(e);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);rd(e)}function ta(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function SA(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var wu=Math.random().toString(36).slice(2),Ts="__reactFiber$"+wu,ld="__reactProps$"+wu,uo="__reactContainer$"+wu,sx="__reactEvents$"+wu,Get="__reactListeners$"+wu,qet="__reactHandles$"+wu;function Ja(n){var e=n[Ts];if(e)return e;for(var t=n.parentNode;t;){if(e=t[uo]||t[Ts]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=SA(n);n!==null;){if(t=n[Ts])return t;n=SA(n)}return e}n=t,t=n.parentNode}return null}function Xd(n){return n=n[Ts]||n[uo],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Nc(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(Se(33))}function Mv(n){return n[ld]||null}var ox=[],Ic=-1;function _a(n){return{current:n}}function on(n){0>Ic||(n.current=ox[Ic],ox[Ic]=null,Ic--)}function en(n,e){Ic++,ox[Ic]=n.current,n.current=e}var ha={},Lr=_a(ha),Jr=_a(!1),gl=ha;function ou(n,e){var t=n.type.contextTypes;if(!t)return ha;var r=n.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in t)i[s]=e[s];return r&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=i),i}function Qr(n){return n=n.childContextTypes,n!=null}function Eg(){on(Jr),on(Lr)}function wA(n,e,t){if(Lr.current!==ha)throw Error(Se(168));en(Lr,e),en(Jr,t)}function WP(n,e,t){var r=n.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(Se(108,AQe(n)||"Unknown",i));return yn({},t,r)}function Mg(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ha,gl=Lr.current,en(Lr,n),en(Jr,Jr.current),!0}function bA(n,e,t){var r=n.stateNode;if(!r)throw Error(Se(169));t?(n=WP(n,e,gl),r.__reactInternalMemoizedMergedChildContext=n,on(Jr),on(Lr),en(Lr,n)):on(Jr),en(Jr,t)}var Js=null,Tv=!1,J1=!1;function jP(n){Js===null?Js=[n]:Js.push(n)}function Wet(n){Tv=!0,jP(n)}function xa(){if(!J1&&Js!==null){J1=!0;var n=0,e=Gt;try{var t=Js;for(Gt=1;n<t.length;n++){var r=t[n];do r=r(!0);while(r!==null)}Js=null,Tv=!1}catch(i){throw Js!==null&&(Js=Js.slice(n+1)),yP(vw,xa),i}finally{Gt=e,J1=!1}}return null}var Dc=[],kc=0,Tg=null,Ag=0,$i=[],Ui=0,vl=null,eo=1,to="";function qa(n,e){Dc[kc++]=Ag,Dc[kc++]=Tg,Tg=n,Ag=e}function XP(n,e,t){$i[Ui++]=eo,$i[Ui++]=to,$i[Ui++]=vl,vl=n;var r=eo;n=to;var i=32-ss(r)-1;r&=~(1<<i),t+=1;var s=32-ss(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,eo=1<<32-ss(e)+i|t<<i|r,to=s+n}else eo=1<<s|t<<i|r,to=n}function Tw(n){n.return!==null&&(qa(n,1),XP(n,1,0))}function Aw(n){for(;n===Tg;)Tg=Dc[--kc],Dc[kc]=null,Ag=Dc[--kc],Dc[kc]=null;for(;n===vl;)vl=$i[--Ui],$i[Ui]=null,to=$i[--Ui],$i[Ui]=null,eo=$i[--Ui],$i[Ui]=null}var vi=null,mi=null,fn=!1,Qi=null;function YP(n,e){var t=Fi(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function EA(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,vi=n,mi=ta(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,vi=n,mi=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=vl!==null?{id:eo,overflow:to}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Fi(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,vi=n,mi=null,!0):!1;default:return!1}}function ax(n){return(n.mode&1)!==0&&(n.flags&128)===0}function lx(n){if(fn){var e=mi;if(e){var t=e;if(!EA(n,e)){if(ax(n))throw Error(Se(418));e=ta(t.nextSibling);var r=vi;e&&EA(n,e)?YP(r,t):(n.flags=n.flags&-4097|2,fn=!1,vi=n)}}else{if(ax(n))throw Error(Se(418));n.flags=n.flags&-4097|2,fn=!1,vi=n}}}function MA(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;vi=n}function Ap(n){if(n!==vi)return!1;if(!fn)return MA(n),fn=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!rx(n.type,n.memoizedProps)),e&&(e=mi)){if(ax(n))throw ZP(),Error(Se(418));for(;e;)YP(n,e),e=ta(e.nextSibling)}if(MA(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(Se(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){mi=ta(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}mi=null}}else mi=vi?ta(n.stateNode.nextSibling):null;return!0}function ZP(){for(var n=mi;n;)n=ta(n.nextSibling)}function au(){mi=vi=null,fn=!1}function Cw(n){Qi===null?Qi=[n]:Qi.push(n)}var jet=_o.ReactCurrentBatchConfig;function Zi(n,e){if(n&&n.defaultProps){e=yn({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var Cg=_a(null),Rg=null,Oc=null,Rw=null;function Pw(){Rw=Oc=Rg=null}function Lw(n){var e=Cg.current;on(Cg),n._currentValue=e}function cx(n,e,t){for(;n!==null;){var r=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),n===t)break;n=n.return}}function Kc(n,e){Rg=n,Rw=Oc=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Kr=!0),n.firstContext=null)}function Bi(n){var e=n._currentValue;if(Rw!==n)if(n={context:n,memoizedValue:e,next:null},Oc===null){if(Rg===null)throw Error(Se(308));Oc=n,Rg.dependencies={lanes:0,firstContext:n}}else Oc=Oc.next=n;return e}var Qa=null;function Nw(n){Qa===null?Qa=[n]:Qa.push(n)}function KP(n,e,t,r){var i=e.interleaved;return i===null?(t.next=t,Nw(e)):(t.next=i.next,i.next=t),e.interleaved=t,fo(n,r)}function fo(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Vo=!1;function Iw(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function JP(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function io(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function na(n,e,t){var r=n.updateQueue;if(r===null)return null;if(r=r.shared,Ot&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,fo(n,t)}return i=r.interleaved,i===null?(e.next=e,Nw(r)):(e.next=i.next,i.next=e),r.interleaved=e,fo(n,t)}function Bm(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var r=e.lanes;r&=n.pendingLanes,t|=r,e.lanes=t,yw(n,t)}}function TA(n,e){var t=n.updateQueue,r=n.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?i=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?i=s=e:s=s.next=e}else i=s=e;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Pg(n,e,t,r){var i=n.updateQueue;Vo=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,f=l.next;l.next=null,o===null?s=f:o.next=f,o=l;var d=n.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=f:a.next=f,d.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,d=f=l=null,a=s;do{var p=a.lane,g=a.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=n,b=a;switch(p=e,g=t,b.tag){case 1:if(y=b.payload,typeof y=="function"){h=y.call(g,h,p);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=b.payload,p=typeof y=="function"?y.call(g,h,p):y,p==null)break e;h=yn({},h,p);break e;case 2:Vo=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else g={eventTime:g,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(f=d=g,l=h):d=d.next=g,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(d===null&&(l=h),i.baseState=l,i.firstBaseUpdate=f,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);_l|=o,n.lanes=o,n.memoizedState=h}}function AA(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var r=n[e],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(Se(191,i));i.call(r)}}}var QP=new K3.Component().refs;function ux(n,e,t,r){e=n.memoizedState,t=t(r,e),t=t==null?e:yn({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Av={isMounted:function(n){return(n=n._reactInternals)?Tl(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var r=Fr(),i=ia(n),s=io(r,i);s.payload=e,t!=null&&(s.callback=t),e=na(n,s,i),e!==null&&(os(e,n,i,r),Bm(e,n,i))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var r=Fr(),i=ia(n),s=io(r,i);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=na(n,s,i),e!==null&&(os(e,n,i,r),Bm(e,n,i))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Fr(),r=ia(n),i=io(t,r);i.tag=2,e!=null&&(i.callback=e),e=na(n,i,r),e!==null&&(os(e,n,r,t),Bm(e,n,r))}};function CA(n,e,t,r,i,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!sd(t,r)||!sd(i,s):!0}function eL(n,e,t){var r=!1,i=ha,s=e.contextType;return typeof s=="object"&&s!==null?s=Bi(s):(i=Qr(e)?gl:Lr.current,r=e.contextTypes,s=(r=r!=null)?ou(n,i):ha),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Av,n.stateNode=e,e._reactInternals=n,r&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=s),e}function RA(n,e,t,r){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,r),e.state!==n&&Av.enqueueReplaceState(e,e.state,null)}function fx(n,e,t,r){var i=n.stateNode;i.props=t,i.state=n.memoizedState,i.refs=QP,Iw(n);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Bi(s):(s=Qr(e)?gl:Lr.current,i.context=ou(n,s)),i.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ux(n,e,s,t),i.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Av.enqueueReplaceState(i,i.state,null),Pg(n,t,i,r),i.state=n.memoizedState),typeof i.componentDidMount=="function"&&(n.flags|=4194308)}function nf(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(Se(309));var r=t.stateNode}if(!r)throw Error(Se(147,n));var i=r,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===QP&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(Se(284));if(!t._owner)throw Error(Se(290,n))}return n}function Cp(n,e){throw n=Object.prototype.toString.call(e),Error(Se(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function PA(n){var e=n._init;return e(n._payload)}function tL(n){function e(m,_){if(n){var w=m.deletions;w===null?(m.deletions=[_],m.flags|=16):w.push(_)}}function t(m,_){if(!n)return null;for(;_!==null;)e(m,_),_=_.sibling;return null}function r(m,_){for(m=new Map;_!==null;)_.key!==null?m.set(_.key,_):m.set(_.index,_),_=_.sibling;return m}function i(m,_){return m=sa(m,_),m.index=0,m.sibling=null,m}function s(m,_,w){return m.index=w,n?(w=m.alternate,w!==null?(w=w.index,w<_?(m.flags|=2,_):w):(m.flags|=2,_)):(m.flags|=1048576,_)}function o(m){return n&&m.alternate===null&&(m.flags|=2),m}function a(m,_,w,M){return _===null||_.tag!==6?(_=s0(w,m.mode,M),_.return=m,_):(_=i(_,w),_.return=m,_)}function l(m,_,w,M){var C=w.type;return C===Cc?d(m,_,w.props.children,M,w.key):_!==null&&(_.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ho&&PA(C)===_.type)?(M=i(_,w.props),M.ref=nf(m,_,w),M.return=m,M):(M=jm(w.type,w.key,w.props,null,m.mode,M),M.ref=nf(m,_,w),M.return=m,M)}function f(m,_,w,M){return _===null||_.tag!==4||_.stateNode.containerInfo!==w.containerInfo||_.stateNode.implementation!==w.implementation?(_=o0(w,m.mode,M),_.return=m,_):(_=i(_,w.children||[]),_.return=m,_)}function d(m,_,w,M,C){return _===null||_.tag!==7?(_=ol(w,m.mode,M,C),_.return=m,_):(_=i(_,w),_.return=m,_)}function h(m,_,w){if(typeof _=="string"&&_!==""||typeof _=="number")return _=s0(""+_,m.mode,w),_.return=m,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case vp:return w=jm(_.type,_.key,_.props,null,m.mode,w),w.ref=nf(m,null,_),w.return=m,w;case Ac:return _=o0(_,m.mode,w),_.return=m,_;case Ho:var M=_._init;return h(m,M(_._payload),w)}if(Ef(_)||Ku(_))return _=ol(_,m.mode,w,null),_.return=m,_;Cp(m,_)}return null}function p(m,_,w,M){var C=_!==null?_.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return C!==null?null:a(m,_,""+w,M);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case vp:return w.key===C?l(m,_,w,M):null;case Ac:return w.key===C?f(m,_,w,M):null;case Ho:return C=w._init,p(m,_,C(w._payload),M)}if(Ef(w)||Ku(w))return C!==null?null:d(m,_,w,M,null);Cp(m,w)}return null}function g(m,_,w,M,C){if(typeof M=="string"&&M!==""||typeof M=="number")return m=m.get(w)||null,a(_,m,""+M,C);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case vp:return m=m.get(M.key===null?w:M.key)||null,l(_,m,M,C);case Ac:return m=m.get(M.key===null?w:M.key)||null,f(_,m,M,C);case Ho:var A=M._init;return g(m,_,w,A(M._payload),C)}if(Ef(M)||Ku(M))return m=m.get(w)||null,d(_,m,M,C,null);Cp(_,M)}return null}function y(m,_,w,M){for(var C=null,A=null,P=_,k=_=0,R=null;P!==null&&k<w.length;k++){P.index>k?(R=P,P=null):R=P.sibling;var N=p(m,P,w[k],M);if(N===null){P===null&&(P=R);break}n&&P&&N.alternate===null&&e(m,P),_=s(N,_,k),A===null?C=N:A.sibling=N,A=N,P=R}if(k===w.length)return t(m,P),fn&&qa(m,k),C;if(P===null){for(;k<w.length;k++)P=h(m,w[k],M),P!==null&&(_=s(P,_,k),A===null?C=P:A.sibling=P,A=P);return fn&&qa(m,k),C}for(P=r(m,P);k<w.length;k++)R=g(P,m,k,w[k],M),R!==null&&(n&&R.alternate!==null&&P.delete(R.key===null?k:R.key),_=s(R,_,k),A===null?C=R:A.sibling=R,A=R);return n&&P.forEach(function(B){return e(m,B)}),fn&&qa(m,k),C}function b(m,_,w,M){var C=Ku(w);if(typeof C!="function")throw Error(Se(150));if(w=C.call(w),w==null)throw Error(Se(151));for(var A=C=null,P=_,k=_=0,R=null,N=w.next();P!==null&&!N.done;k++,N=w.next()){P.index>k?(R=P,P=null):R=P.sibling;var B=p(m,P,N.value,M);if(B===null){P===null&&(P=R);break}n&&P&&B.alternate===null&&e(m,P),_=s(B,_,k),A===null?C=B:A.sibling=B,A=B,P=R}if(N.done)return t(m,P),fn&&qa(m,k),C;if(P===null){for(;!N.done;k++,N=w.next())N=h(m,N.value,M),N!==null&&(_=s(N,_,k),A===null?C=N:A.sibling=N,A=N);return fn&&qa(m,k),C}for(P=r(m,P);!N.done;k++,N=w.next())N=g(P,m,k,N.value,M),N!==null&&(n&&N.alternate!==null&&P.delete(N.key===null?k:N.key),_=s(N,_,k),A===null?C=N:A.sibling=N,A=N);return n&&P.forEach(function(W){return e(m,W)}),fn&&qa(m,k),C}function S(m,_,w,M){if(typeof w=="object"&&w!==null&&w.type===Cc&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case vp:e:{for(var C=w.key,A=_;A!==null;){if(A.key===C){if(C=w.type,C===Cc){if(A.tag===7){t(m,A.sibling),_=i(A,w.props.children),_.return=m,m=_;break e}}else if(A.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ho&&PA(C)===A.type){t(m,A.sibling),_=i(A,w.props),_.ref=nf(m,A,w),_.return=m,m=_;break e}t(m,A);break}else e(m,A);A=A.sibling}w.type===Cc?(_=ol(w.props.children,m.mode,M,w.key),_.return=m,m=_):(M=jm(w.type,w.key,w.props,null,m.mode,M),M.ref=nf(m,_,w),M.return=m,m=M)}return o(m);case Ac:e:{for(A=w.key;_!==null;){if(_.key===A)if(_.tag===4&&_.stateNode.containerInfo===w.containerInfo&&_.stateNode.implementation===w.implementation){t(m,_.sibling),_=i(_,w.children||[]),_.return=m,m=_;break e}else{t(m,_);break}else e(m,_);_=_.sibling}_=o0(w,m.mode,M),_.return=m,m=_}return o(m);case Ho:return A=w._init,S(m,_,A(w._payload),M)}if(Ef(w))return y(m,_,w,M);if(Ku(w))return b(m,_,w,M);Cp(m,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,_!==null&&_.tag===6?(t(m,_.sibling),_=i(_,w),_.return=m,m=_):(t(m,_),_=s0(w,m.mode,M),_.return=m,m=_),o(m)):t(m,_)}return S}var lu=tL(!0),nL=tL(!1),Yd={},Ls=_a(Yd),cd=_a(Yd),ud=_a(Yd);function el(n){if(n===Yd)throw Error(Se(174));return n}function Dw(n,e){switch(en(ud,e),en(cd,n),en(Ls,Yd),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:V_(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=V_(e,n)}on(Ls),en(Ls,e)}function cu(){on(Ls),on(cd),on(ud)}function rL(n){el(ud.current);var e=el(Ls.current),t=V_(e,n.type);e!==t&&(en(cd,n),en(Ls,t))}function kw(n){cd.current===n&&(on(Ls),on(cd))}var mn=_a(0);function Lg(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Q1=[];function Ow(){for(var n=0;n<Q1.length;n++)Q1[n]._workInProgressVersionPrimary=null;Q1.length=0}var Hm=_o.ReactCurrentDispatcher,e0=_o.ReactCurrentBatchConfig,yl=0,vn=null,Hn=null,tr=null,Ng=!1,$f=!1,fd=0,Xet=0;function wr(){throw Error(Se(321))}function $w(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!as(n[t],e[t]))return!1;return!0}function Uw(n,e,t,r,i,s){if(yl=s,vn=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Hm.current=n===null||n.memoizedState===null?Jet:Qet,n=t(r,i),$f){s=0;do{if($f=!1,fd=0,25<=s)throw Error(Se(301));s+=1,tr=Hn=null,e.updateQueue=null,Hm.current=ett,n=t(r,i)}while($f)}if(Hm.current=Ig,e=Hn!==null&&Hn.next!==null,yl=0,tr=Hn=vn=null,Ng=!1,e)throw Error(Se(300));return n}function Fw(){var n=fd!==0;return fd=0,n}function Ms(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tr===null?vn.memoizedState=tr=n:tr=tr.next=n,tr}function Hi(){if(Hn===null){var n=vn.alternate;n=n!==null?n.memoizedState:null}else n=Hn.next;var e=tr===null?vn.memoizedState:tr.next;if(e!==null)tr=e,Hn=n;else{if(n===null)throw Error(Se(310));Hn=n,n={memoizedState:Hn.memoizedState,baseState:Hn.baseState,baseQueue:Hn.baseQueue,queue:Hn.queue,next:null},tr===null?vn.memoizedState=tr=n:tr=tr.next=n}return tr}function dd(n,e){return typeof e=="function"?e(n):e}function t0(n){var e=Hi(),t=e.queue;if(t===null)throw Error(Se(311));t.lastRenderedReducer=n;var r=Hn,i=r.baseQueue,s=t.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,t.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,f=s;do{var d=f.lane;if((yl&d)===d)l!==null&&(l=l.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:n(r,f.action);else{var h={lane:d,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,vn.lanes|=d,_l|=d}f=f.next}while(f!==null&&f!==s);l===null?o=r:l.next=a,as(r,e.memoizedState)||(Kr=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,t.lastRenderedState=r}if(n=t.interleaved,n!==null){i=n;do s=i.lane,vn.lanes|=s,_l|=s,i=i.next;while(i!==n)}else i===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function n0(n){var e=Hi(),t=e.queue;if(t===null)throw Error(Se(311));t.lastRenderedReducer=n;var r=t.dispatch,i=t.pending,s=e.memoizedState;if(i!==null){t.pending=null;var o=i=i.next;do s=n(s,o.action),o=o.next;while(o!==i);as(s,e.memoizedState)||(Kr=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,r]}function iL(){}function sL(n,e){var t=vn,r=Hi(),i=e(),s=!as(r.memoizedState,i);if(s&&(r.memoizedState=i,Kr=!0),r=r.queue,zw(lL.bind(null,t,r,n),[n]),r.getSnapshot!==e||s||tr!==null&&tr.memoizedState.tag&1){if(t.flags|=2048,hd(9,aL.bind(null,t,r,i,e),void 0,null),rr===null)throw Error(Se(349));yl&30||oL(t,e,i)}return i}function oL(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=vn.updateQueue,e===null?(e={lastEffect:null,stores:null},vn.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function aL(n,e,t,r){e.value=t,e.getSnapshot=r,cL(e)&&uL(n)}function lL(n,e,t){return t(function(){cL(e)&&uL(n)})}function cL(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!as(n,t)}catch{return!0}}function uL(n){var e=fo(n,1);e!==null&&os(e,n,1,-1)}function LA(n){var e=Ms();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:dd,lastRenderedState:n},e.queue=n,n=n.dispatch=Ket.bind(null,vn,n),[e.memoizedState,n]}function hd(n,e,t,r){return n={tag:n,create:e,destroy:t,deps:r,next:null},e=vn.updateQueue,e===null?(e={lastEffect:null,stores:null},vn.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(r=t.next,t.next=n,n.next=r,e.lastEffect=n)),n}function fL(){return Hi().memoizedState}function Vm(n,e,t,r){var i=Ms();vn.flags|=n,i.memoizedState=hd(1|e,t,void 0,r===void 0?null:r)}function Cv(n,e,t,r){var i=Hi();r=r===void 0?null:r;var s=void 0;if(Hn!==null){var o=Hn.memoizedState;if(s=o.destroy,r!==null&&$w(r,o.deps)){i.memoizedState=hd(e,t,s,r);return}}vn.flags|=n,i.memoizedState=hd(1|e,t,s,r)}function NA(n,e){return Vm(8390656,8,n,e)}function zw(n,e){return Cv(2048,8,n,e)}function dL(n,e){return Cv(4,2,n,e)}function hL(n,e){return Cv(4,4,n,e)}function pL(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function mL(n,e,t){return t=t!=null?t.concat([n]):null,Cv(4,4,pL.bind(null,e,n),t)}function Bw(){}function gL(n,e){var t=Hi();e=e===void 0?null:e;var r=t.memoizedState;return r!==null&&e!==null&&$w(e,r[1])?r[0]:(t.memoizedState=[n,e],n)}function vL(n,e){var t=Hi();e=e===void 0?null:e;var r=t.memoizedState;return r!==null&&e!==null&&$w(e,r[1])?r[0]:(n=n(),t.memoizedState=[n,e],n)}function yL(n,e,t){return yl&21?(as(t,e)||(t=SP(),vn.lanes|=t,_l|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Kr=!0),n.memoizedState=t)}function Yet(n,e){var t=Gt;Gt=t!==0&&4>t?t:4,n(!0);var r=e0.transition;e0.transition={};try{n(!1),e()}finally{Gt=t,e0.transition=r}}function _L(){return Hi().memoizedState}function Zet(n,e,t){var r=ia(n);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},xL(n))SL(e,t);else if(t=KP(n,e,t,r),t!==null){var i=Fr();os(t,n,r,i),wL(t,e,r)}}function Ket(n,e,t){var r=ia(n),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(xL(n))SL(e,i);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(i.hasEagerState=!0,i.eagerState=a,as(a,o)){var l=e.interleaved;l===null?(i.next=i,Nw(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}t=KP(n,e,i,r),t!==null&&(i=Fr(),os(t,n,r,i),wL(t,e,r))}}function xL(n){var e=n.alternate;return n===vn||e!==null&&e===vn}function SL(n,e){$f=Ng=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function wL(n,e,t){if(t&4194240){var r=e.lanes;r&=n.pendingLanes,t|=r,e.lanes=t,yw(n,t)}}var Ig={readContext:Bi,useCallback:wr,useContext:wr,useEffect:wr,useImperativeHandle:wr,useInsertionEffect:wr,useLayoutEffect:wr,useMemo:wr,useReducer:wr,useRef:wr,useState:wr,useDebugValue:wr,useDeferredValue:wr,useTransition:wr,useMutableSource:wr,useSyncExternalStore:wr,useId:wr,unstable_isNewReconciler:!1},Jet={readContext:Bi,useCallback:function(n,e){return Ms().memoizedState=[n,e===void 0?null:e],n},useContext:Bi,useEffect:NA,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Vm(4194308,4,pL.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Vm(4194308,4,n,e)},useInsertionEffect:function(n,e){return Vm(4,2,n,e)},useMemo:function(n,e){var t=Ms();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var r=Ms();return e=t!==void 0?t(e):e,r.memoizedState=r.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},r.queue=n,n=n.dispatch=Zet.bind(null,vn,n),[r.memoizedState,n]},useRef:function(n){var e=Ms();return n={current:n},e.memoizedState=n},useState:LA,useDebugValue:Bw,useDeferredValue:function(n){return Ms().memoizedState=n},useTransition:function(){var n=LA(!1),e=n[0];return n=Yet.bind(null,n[1]),Ms().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var r=vn,i=Ms();if(fn){if(t===void 0)throw Error(Se(407));t=t()}else{if(t=e(),rr===null)throw Error(Se(349));yl&30||oL(r,e,t)}i.memoizedState=t;var s={value:t,getSnapshot:e};return i.queue=s,NA(lL.bind(null,r,s,n),[n]),r.flags|=2048,hd(9,aL.bind(null,r,s,t,e),void 0,null),t},useId:function(){var n=Ms(),e=rr.identifierPrefix;if(fn){var t=to,r=eo;t=(r&~(1<<32-ss(r)-1)).toString(32)+t,e=":"+e+"R"+t,t=fd++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=Xet++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},Qet={readContext:Bi,useCallback:gL,useContext:Bi,useEffect:zw,useImperativeHandle:mL,useInsertionEffect:dL,useLayoutEffect:hL,useMemo:vL,useReducer:t0,useRef:fL,useState:function(){return t0(dd)},useDebugValue:Bw,useDeferredValue:function(n){var e=Hi();return yL(e,Hn.memoizedState,n)},useTransition:function(){var n=t0(dd)[0],e=Hi().memoizedState;return[n,e]},useMutableSource:iL,useSyncExternalStore:sL,useId:_L,unstable_isNewReconciler:!1},ett={readContext:Bi,useCallback:gL,useContext:Bi,useEffect:zw,useImperativeHandle:mL,useInsertionEffect:dL,useLayoutEffect:hL,useMemo:vL,useReducer:n0,useRef:fL,useState:function(){return n0(dd)},useDebugValue:Bw,useDeferredValue:function(n){var e=Hi();return Hn===null?e.memoizedState=n:yL(e,Hn.memoizedState,n)},useTransition:function(){var n=n0(dd)[0],e=Hi().memoizedState;return[n,e]},useMutableSource:iL,useSyncExternalStore:sL,useId:_L,unstable_isNewReconciler:!1};function uu(n,e){try{var t="",r=e;do t+=TQe(r),r=r.return;while(r);var i=t}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:i,digest:null}}function r0(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function dx(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var ttt=typeof WeakMap=="function"?WeakMap:Map;function bL(n,e,t){t=io(-1,t),t.tag=3,t.payload={element:null};var r=e.value;return t.callback=function(){kg||(kg=!0,wx=r),dx(n,e)},t}function EL(n,e,t){t=io(-1,t),t.tag=3;var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;t.payload=function(){return r(i)},t.callback=function(){dx(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){dx(n,e),typeof r!="function"&&(ra===null?ra=new Set([this]):ra.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function IA(n,e,t){var r=n.pingCache;if(r===null){r=n.pingCache=new ttt;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(t)||(i.add(t),n=mtt.bind(null,n,e,t),e.then(n,n))}function DA(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function kA(n,e,t,r,i){return n.mode&1?(n.flags|=65536,n.lanes=i,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=io(-1,1),e.tag=2,na(t,e,1))),t.lanes|=1),n)}var ntt=_o.ReactCurrentOwner,Kr=!1;function Or(n,e,t,r){e.child=n===null?nL(e,null,t,r):lu(e,n.child,t,r)}function OA(n,e,t,r,i){t=t.render;var s=e.ref;return Kc(e,i),r=Uw(n,e,t,r,s,i),t=Fw(),n!==null&&!Kr?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~i,ho(n,e,i)):(fn&&t&&Tw(e),e.flags|=1,Or(n,e,r,i),e.child)}function $A(n,e,t,r,i){if(n===null){var s=t.type;return typeof s=="function"&&!Yw(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,ML(n,e,s,r,i)):(n=jm(t.type,null,r,e,e.mode,i),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&i)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:sd,t(o,r)&&n.ref===e.ref)return ho(n,e,i)}return e.flags|=1,n=sa(s,r),n.ref=e.ref,n.return=e,e.child=n}function ML(n,e,t,r,i){if(n!==null){var s=n.memoizedProps;if(sd(s,r)&&n.ref===e.ref)if(Kr=!1,e.pendingProps=r=s,(n.lanes&i)!==0)n.flags&131072&&(Kr=!0);else return e.lanes=n.lanes,ho(n,e,i)}return hx(n,e,t,r,i)}function TL(n,e,t){var r=e.pendingProps,i=r.children,s=n!==null?n.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},en(Uc,hi),hi|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,en(Uc,hi),hi|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:t,en(Uc,hi),hi|=r}else s!==null?(r=s.baseLanes|t,e.memoizedState=null):r=t,en(Uc,hi),hi|=r;return Or(n,e,i,t),e.child}function AL(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function hx(n,e,t,r,i){var s=Qr(t)?gl:Lr.current;return s=ou(e,s),Kc(e,i),t=Uw(n,e,t,r,s,i),r=Fw(),n!==null&&!Kr?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~i,ho(n,e,i)):(fn&&r&&Tw(e),e.flags|=1,Or(n,e,t,i),e.child)}function UA(n,e,t,r,i){if(Qr(t)){var s=!0;Mg(e)}else s=!1;if(Kc(e,i),e.stateNode===null)Gm(n,e),eL(e,t,r),fx(e,t,r,i),r=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,f=t.contextType;typeof f=="object"&&f!==null?f=Bi(f):(f=Qr(t)?gl:Lr.current,f=ou(e,f));var d=t.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==f)&&RA(e,o,r,f),Vo=!1;var p=e.memoizedState;o.state=p,Pg(e,r,o,i),l=e.memoizedState,a!==r||p!==l||Jr.current||Vo?(typeof d=="function"&&(ux(e,t,d,r),l=e.memoizedState),(a=Vo||CA(e,t,a,r,p,l,f))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=f,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,JP(n,e),a=e.memoizedProps,f=e.type===e.elementType?a:Zi(e.type,a),o.props=f,h=e.pendingProps,p=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Bi(l):(l=Qr(t)?gl:Lr.current,l=ou(e,l));var g=t.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||p!==l)&&RA(e,o,r,l),Vo=!1,p=e.memoizedState,o.state=p,Pg(e,r,o,i);var y=e.memoizedState;a!==h||p!==y||Jr.current||Vo?(typeof g=="function"&&(ux(e,t,g,r),y=e.memoizedState),(f=Vo||CA(e,t,f,r,p,y,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&p===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&p===n.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=f):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&p===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&p===n.memoizedState||(e.flags|=1024),r=!1)}return px(n,e,t,r,s,i)}function px(n,e,t,r,i,s){AL(n,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&bA(e,t,!1),ho(n,e,s);r=e.stateNode,ntt.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,n!==null&&o?(e.child=lu(e,n.child,null,s),e.child=lu(e,null,a,s)):Or(n,e,a,s),e.memoizedState=r.state,i&&bA(e,t,!0),e.child}function CL(n){var e=n.stateNode;e.pendingContext?wA(n,e.pendingContext,e.pendingContext!==e.context):e.context&&wA(n,e.context,!1),Dw(n,e.containerInfo)}function FA(n,e,t,r,i){return au(),Cw(i),e.flags|=256,Or(n,e,t,r),e.child}var mx={dehydrated:null,treeContext:null,retryLane:0};function gx(n){return{baseLanes:n,cachePool:null,transitions:null}}function RL(n,e,t){var r=e.pendingProps,i=mn.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(i|=1),en(mn,i&1),n===null)return lx(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,n=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Lv(o,r,0,null),n=ol(n,r,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=gx(t),e.memoizedState=mx,n):Hw(e,o));if(i=n.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return rtt(n,e,o,r,a,i,t);if(s){s=r.fallback,o=e.mode,i=n.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=sa(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=sa(a,s):(s=ol(s,o,t,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=n.child.memoizedState,o=o===null?gx(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=mx,r}return s=n.child,n=s.sibling,r=sa(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=t),r.return=e,r.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=r,e.memoizedState=null,r}function Hw(n,e){return e=Lv({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Rp(n,e,t,r){return r!==null&&Cw(r),lu(e,n.child,null,t),n=Hw(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function rtt(n,e,t,r,i,s,o){if(t)return e.flags&256?(e.flags&=-257,r=r0(Error(Se(422))),Rp(n,e,o,r)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Lv({mode:"visible",children:r.children},i,0,null),s=ol(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&lu(e,n.child,null,o),e.child.memoizedState=gx(o),e.memoizedState=mx,s);if(!(e.mode&1))return Rp(n,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(Se(419)),r=r0(s,r,void 0),Rp(n,e,o,r)}if(a=(o&n.childLanes)!==0,Kr||a){if(r=rr,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,fo(n,i),os(r,n,i,-1))}return Xw(),r=r0(Error(Se(421))),Rp(n,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=n.child,e=gtt.bind(null,n),i._reactRetry=e,null):(n=s.treeContext,mi=ta(i.nextSibling),vi=e,fn=!0,Qi=null,n!==null&&($i[Ui++]=eo,$i[Ui++]=to,$i[Ui++]=vl,eo=n.id,to=n.overflow,vl=e),e=Hw(e,r.children),e.flags|=4096,e)}function zA(n,e,t){n.lanes|=e;var r=n.alternate;r!==null&&(r.lanes|=e),cx(n.return,e,t)}function i0(n,e,t,r,i){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=t,s.tailMode=i)}function PL(n,e,t){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Or(n,e,r.children,t),r=mn.current,r&2)r=r&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&zA(n,t,e);else if(n.tag===19)zA(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}r&=1}if(en(mn,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(t=e.child,i=null;t!==null;)n=t.alternate,n!==null&&Lg(n)===null&&(i=t),t=t.sibling;t=i,t===null?(i=e.child,e.child=null):(i=t.sibling,t.sibling=null),i0(e,!1,i,t,s);break;case"backwards":for(t=null,i=e.child,e.child=null;i!==null;){if(n=i.alternate,n!==null&&Lg(n)===null){e.child=i;break}n=i.sibling,i.sibling=t,t=i,i=n}i0(e,!0,t,null,s);break;case"together":i0(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Gm(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function ho(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),_l|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(Se(153));if(e.child!==null){for(n=e.child,t=sa(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=sa(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function itt(n,e,t){switch(e.tag){case 3:CL(e),au();break;case 5:rL(e);break;case 1:Qr(e.type)&&Mg(e);break;case 4:Dw(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;en(Cg,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(en(mn,mn.current&1),e.flags|=128,null):t&e.child.childLanes?RL(n,e,t):(en(mn,mn.current&1),n=ho(n,e,t),n!==null?n.sibling:null);en(mn,mn.current&1);break;case 19:if(r=(t&e.childLanes)!==0,n.flags&128){if(r)return PL(n,e,t);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),en(mn,mn.current),r)break;return null;case 22:case 23:return e.lanes=0,TL(n,e,t)}return ho(n,e,t)}var LL,vx,NL,IL;LL=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};vx=function(){};NL=function(n,e,t,r){var i=n.memoizedProps;if(i!==r){n=e.stateNode,el(Ls.current);var s=null;switch(t){case"input":i=F_(n,i),r=F_(n,r),s=[];break;case"select":i=yn({},i,{value:void 0}),r=yn({},r,{value:void 0}),s=[];break;case"textarea":i=H_(n,i),r=H_(n,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(n.onclick=bg)}G_(t,r);var o;t=null;for(f in i)if(!r.hasOwnProperty(f)&&i.hasOwnProperty(f)&&i[f]!=null)if(f==="style"){var a=i[f];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(Jf.hasOwnProperty(f)?s||(s=[]):(s=s||[]).push(f,null));for(f in r){var l=r[f];if(a=i!=null?i[f]:void 0,r.hasOwnProperty(f)&&l!==a&&(l!=null||a!=null))if(f==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(f,t)),t=l;else f==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(f,l)):f==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(f,""+l):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(Jf.hasOwnProperty(f)?(l!=null&&f==="onScroll"&&nn("scroll",n),s||a===l||(s=[])):(s=s||[]).push(f,l))}t&&(s=s||[]).push("style",t);var f=s;(e.updateQueue=f)&&(e.flags|=4)}};IL=function(n,e,t,r){t!==r&&(e.flags|=4)};function rf(n,e){if(!fn)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:r.sibling=null}}function br(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,r=0;if(e)for(var i=n.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=n,i=i.sibling;else for(i=n.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=n,i=i.sibling;return n.subtreeFlags|=r,n.childLanes=t,e}function stt(n,e,t){var r=e.pendingProps;switch(Aw(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return br(e),null;case 1:return Qr(e.type)&&Eg(),br(e),null;case 3:return r=e.stateNode,cu(),on(Jr),on(Lr),Ow(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(n===null||n.child===null)&&(Ap(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Qi!==null&&(Mx(Qi),Qi=null))),vx(n,e),br(e),null;case 5:kw(e);var i=el(ud.current);if(t=e.type,n!==null&&e.stateNode!=null)NL(n,e,t,r,i),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(Se(166));return br(e),null}if(n=el(Ls.current),Ap(e)){r=e.stateNode,t=e.type;var s=e.memoizedProps;switch(r[Ts]=e,r[ld]=s,n=(e.mode&1)!==0,t){case"dialog":nn("cancel",r),nn("close",r);break;case"iframe":case"object":case"embed":nn("load",r);break;case"video":case"audio":for(i=0;i<Tf.length;i++)nn(Tf[i],r);break;case"source":nn("error",r);break;case"img":case"image":case"link":nn("error",r),nn("load",r);break;case"details":nn("toggle",r);break;case"input":YT(r,s),nn("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},nn("invalid",r);break;case"textarea":KT(r,s),nn("invalid",r)}G_(t,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Tp(r.textContent,a,n),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Tp(r.textContent,a,n),i=["children",""+a]):Jf.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&nn("scroll",r)}switch(t){case"input":yp(r),ZT(r,s,!0);break;case"textarea":yp(r),JT(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=bg)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=oP(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof r.is=="string"?n=o.createElement(t,{is:r.is}):(n=o.createElement(t),t==="select"&&(o=n,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):n=o.createElementNS(n,t),n[Ts]=e,n[ld]=r,LL(n,e,!1,!1),e.stateNode=n;e:{switch(o=q_(t,r),t){case"dialog":nn("cancel",n),nn("close",n),i=r;break;case"iframe":case"object":case"embed":nn("load",n),i=r;break;case"video":case"audio":for(i=0;i<Tf.length;i++)nn(Tf[i],n);i=r;break;case"source":nn("error",n),i=r;break;case"img":case"image":case"link":nn("error",n),nn("load",n),i=r;break;case"details":nn("toggle",n),i=r;break;case"input":YT(n,r),i=F_(n,r),nn("invalid",n);break;case"option":i=r;break;case"select":n._wrapperState={wasMultiple:!!r.multiple},i=yn({},r,{value:void 0}),nn("invalid",n);break;case"textarea":KT(n,r),i=H_(n,r),nn("invalid",n);break;default:i=r}G_(t,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?cP(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&aP(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Qf(n,l):typeof l=="number"&&Qf(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Jf.hasOwnProperty(s)?l!=null&&s==="onScroll"&&nn("scroll",n):l!=null&&dw(n,s,l,o))}switch(t){case"input":yp(n),ZT(n,r,!1);break;case"textarea":yp(n),JT(n);break;case"option":r.value!=null&&n.setAttribute("value",""+da(r.value));break;case"select":n.multiple=!!r.multiple,s=r.value,s!=null?jc(n,!!r.multiple,s,!1):r.defaultValue!=null&&jc(n,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(n.onclick=bg)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return br(e),null;case 6:if(n&&e.stateNode!=null)IL(n,e,n.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(Se(166));if(t=el(ud.current),el(Ls.current),Ap(e)){if(r=e.stateNode,t=e.memoizedProps,r[Ts]=e,(s=r.nodeValue!==t)&&(n=vi,n!==null))switch(n.tag){case 3:Tp(r.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Tp(r.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Ts]=e,e.stateNode=r}return br(e),null;case 13:if(on(mn),r=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(fn&&mi!==null&&e.mode&1&&!(e.flags&128))ZP(),au(),e.flags|=98560,s=!1;else if(s=Ap(e),r!==null&&r.dehydrated!==null){if(n===null){if(!s)throw Error(Se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Se(317));s[Ts]=e}else au(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;br(e),s=!1}else Qi!==null&&(Mx(Qi),Qi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(r=r!==null,r!==(n!==null&&n.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(n===null||mn.current&1?Gn===0&&(Gn=3):Xw())),e.updateQueue!==null&&(e.flags|=4),br(e),null);case 4:return cu(),vx(n,e),n===null&&od(e.stateNode.containerInfo),br(e),null;case 10:return Lw(e.type._context),br(e),null;case 17:return Qr(e.type)&&Eg(),br(e),null;case 19:if(on(mn),s=e.memoizedState,s===null)return br(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)rf(s,!1);else{if(Gn!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Lg(n),o!==null){for(e.flags|=128,rf(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=t,t=e.child;t!==null;)s=t,n=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return en(mn,mn.current&1|2),e.child}n=n.sibling}s.tail!==null&&In()>fu&&(e.flags|=128,r=!0,rf(s,!1),e.lanes=4194304)}else{if(!r)if(n=Lg(o),n!==null){if(e.flags|=128,r=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),rf(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!fn)return br(e),null}else 2*In()-s.renderingStartTime>fu&&t!==1073741824&&(e.flags|=128,r=!0,rf(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=In(),e.sibling=null,t=mn.current,en(mn,r?t&1|2:t&1),e):(br(e),null);case 22:case 23:return jw(),r=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?hi&1073741824&&(br(e),e.subtreeFlags&6&&(e.flags|=8192)):br(e),null;case 24:return null;case 25:return null}throw Error(Se(156,e.tag))}function ott(n,e){switch(Aw(e),e.tag){case 1:return Qr(e.type)&&Eg(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return cu(),on(Jr),on(Lr),Ow(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return kw(e),null;case 13:if(on(mn),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(Se(340));au()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return on(mn),null;case 4:return cu(),null;case 10:return Lw(e.type._context),null;case 22:case 23:return jw(),null;case 24:return null;default:return null}}var Pp=!1,Rr=!1,att=typeof WeakSet=="function"?WeakSet:Set,ze=null;function $c(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){wn(n,e,r)}else t.current=null}function yx(n,e,t){try{t()}catch(r){wn(n,e,r)}}var BA=!1;function ltt(n,e){if(tx=xg,n=$P(),Mw(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,f=0,d=0,h=n,p=null;t:for(;;){for(var g;h!==t||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)p=h,h=g;for(;;){if(h===n)break t;if(p===t&&++f===i&&(a=o),p===s&&++d===r&&(l=o),(g=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=g}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(nx={focusedElem:n,selectionRange:t},xg=!1,ze=e;ze!==null;)if(e=ze,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,ze=n;else for(;ze!==null;){e=ze;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var b=y.memoizedProps,S=y.memoizedState,m=e.stateNode,_=m.getSnapshotBeforeUpdate(e.elementType===e.type?b:Zi(e.type,b),S);m.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var w=e.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Se(163))}}catch(M){wn(e,e.return,M)}if(n=e.sibling,n!==null){n.return=e.return,ze=n;break}ze=e.return}return y=BA,BA=!1,y}function Uf(n,e,t){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&n)===n){var s=i.destroy;i.destroy=void 0,s!==void 0&&yx(e,t,s)}i=i.next}while(i!==r)}}function Rv(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var r=t.create;t.destroy=r()}t=t.next}while(t!==e)}}function _x(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function DL(n){var e=n.alternate;e!==null&&(n.alternate=null,DL(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Ts],delete e[ld],delete e[sx],delete e[Get],delete e[qet])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function kL(n){return n.tag===5||n.tag===3||n.tag===4}function HA(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||kL(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function xx(n,e,t){var r=n.tag;if(r===5||r===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=bg));else if(r!==4&&(n=n.child,n!==null))for(xx(n,e,t),n=n.sibling;n!==null;)xx(n,e,t),n=n.sibling}function Sx(n,e,t){var r=n.tag;if(r===5||r===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(r!==4&&(n=n.child,n!==null))for(Sx(n,e,t),n=n.sibling;n!==null;)Sx(n,e,t),n=n.sibling}var hr=null,Ji=!1;function Io(n,e,t){for(t=t.child;t!==null;)OL(n,e,t),t=t.sibling}function OL(n,e,t){if(Ps&&typeof Ps.onCommitFiberUnmount=="function")try{Ps.onCommitFiberUnmount(Sv,t)}catch{}switch(t.tag){case 5:Rr||$c(t,e);case 6:var r=hr,i=Ji;hr=null,Io(n,e,t),hr=r,Ji=i,hr!==null&&(Ji?(n=hr,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):hr.removeChild(t.stateNode));break;case 18:hr!==null&&(Ji?(n=hr,t=t.stateNode,n.nodeType===8?K1(n.parentNode,t):n.nodeType===1&&K1(n,t),rd(n)):K1(hr,t.stateNode));break;case 4:r=hr,i=Ji,hr=t.stateNode.containerInfo,Ji=!0,Io(n,e,t),hr=r,Ji=i;break;case 0:case 11:case 14:case 15:if(!Rr&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&yx(t,e,o),i=i.next}while(i!==r)}Io(n,e,t);break;case 1:if(!Rr&&($c(t,e),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){wn(t,e,a)}Io(n,e,t);break;case 21:Io(n,e,t);break;case 22:t.mode&1?(Rr=(r=Rr)||t.memoizedState!==null,Io(n,e,t),Rr=r):Io(n,e,t);break;default:Io(n,e,t)}}function VA(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new att),e.forEach(function(r){var i=vtt.bind(null,n,r);t.has(r)||(t.add(r),r.then(i,i))})}}function Wi(n,e){var t=e.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:hr=a.stateNode,Ji=!1;break e;case 3:hr=a.stateNode.containerInfo,Ji=!0;break e;case 4:hr=a.stateNode.containerInfo,Ji=!0;break e}a=a.return}if(hr===null)throw Error(Se(160));OL(s,o,i),hr=null,Ji=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(f){wn(i,e,f)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)$L(e,n),e=e.sibling}function $L(n,e){var t=n.alternate,r=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Wi(e,n),Ss(n),r&4){try{Uf(3,n,n.return),Rv(3,n)}catch(b){wn(n,n.return,b)}try{Uf(5,n,n.return)}catch(b){wn(n,n.return,b)}}break;case 1:Wi(e,n),Ss(n),r&512&&t!==null&&$c(t,t.return);break;case 5:if(Wi(e,n),Ss(n),r&512&&t!==null&&$c(t,t.return),n.flags&32){var i=n.stateNode;try{Qf(i,"")}catch(b){wn(n,n.return,b)}}if(r&4&&(i=n.stateNode,i!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&iP(i,s),q_(a,o);var f=q_(a,s);for(o=0;o<l.length;o+=2){var d=l[o],h=l[o+1];d==="style"?cP(i,h):d==="dangerouslySetInnerHTML"?aP(i,h):d==="children"?Qf(i,h):dw(i,d,h,f)}switch(a){case"input":z_(i,s);break;case"textarea":sP(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?jc(i,!!s.multiple,g,!1):p!==!!s.multiple&&(s.defaultValue!=null?jc(i,!!s.multiple,s.defaultValue,!0):jc(i,!!s.multiple,s.multiple?[]:"",!1))}i[ld]=s}catch(b){wn(n,n.return,b)}}break;case 6:if(Wi(e,n),Ss(n),r&4){if(n.stateNode===null)throw Error(Se(162));i=n.stateNode,s=n.memoizedProps;try{i.nodeValue=s}catch(b){wn(n,n.return,b)}}break;case 3:if(Wi(e,n),Ss(n),r&4&&t!==null&&t.memoizedState.isDehydrated)try{rd(e.containerInfo)}catch(b){wn(n,n.return,b)}break;case 4:Wi(e,n),Ss(n);break;case 13:Wi(e,n),Ss(n),i=n.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(qw=In())),r&4&&VA(n);break;case 22:if(d=t!==null&&t.memoizedState!==null,n.mode&1?(Rr=(f=Rr)||d,Wi(e,n),Rr=f):Wi(e,n),Ss(n),r&8192){if(f=n.memoizedState!==null,(n.stateNode.isHidden=f)&&!d&&n.mode&1)for(ze=n,d=n.child;d!==null;){for(h=ze=d;ze!==null;){switch(p=ze,g=p.child,p.tag){case 0:case 11:case 14:case 15:Uf(4,p,p.return);break;case 1:$c(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,t=p.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(b){wn(r,t,b)}}break;case 5:$c(p,p.return);break;case 22:if(p.memoizedState!==null){qA(h);continue}}g!==null?(g.return=p,ze=g):qA(h)}d=d.sibling}e:for(d=null,h=n;;){if(h.tag===5){if(d===null){d=h;try{i=h.stateNode,f?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=lP("display",o))}catch(b){wn(n,n.return,b)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=f?"":h.memoizedProps}catch(b){wn(n,n.return,b)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===n)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break e;for(;h.sibling===null;){if(h.return===null||h.return===n)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Wi(e,n),Ss(n),r&4&&VA(n);break;case 21:break;default:Wi(e,n),Ss(n)}}function Ss(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(kL(t)){var r=t;break e}t=t.return}throw Error(Se(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Qf(i,""),r.flags&=-33);var s=HA(n);Sx(n,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=HA(n);xx(n,a,o);break;default:throw Error(Se(161))}}catch(l){wn(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function ctt(n,e,t){ze=n,UL(n)}function UL(n,e,t){for(var r=(n.mode&1)!==0;ze!==null;){var i=ze,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Pp;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Rr;a=Pp;var f=Rr;if(Pp=o,(Rr=l)&&!f)for(ze=i;ze!==null;)o=ze,l=o.child,o.tag===22&&o.memoizedState!==null?WA(i):l!==null?(l.return=o,ze=l):WA(i);for(;s!==null;)ze=s,UL(s),s=s.sibling;ze=i,Pp=a,Rr=f}GA(n)}else i.subtreeFlags&8772&&s!==null?(s.return=i,ze=s):GA(n)}}function GA(n){for(;ze!==null;){var e=ze;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Rr||Rv(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Rr)if(t===null)r.componentDidMount();else{var i=e.elementType===e.type?t.memoizedProps:Zi(e.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&AA(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}AA(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var f=e.alternate;if(f!==null){var d=f.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&rd(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Se(163))}Rr||e.flags&512&&_x(e)}catch(p){wn(e,e.return,p)}}if(e===n){ze=null;break}if(t=e.sibling,t!==null){t.return=e.return,ze=t;break}ze=e.return}}function qA(n){for(;ze!==null;){var e=ze;if(e===n){ze=null;break}var t=e.sibling;if(t!==null){t.return=e.return,ze=t;break}ze=e.return}}function WA(n){for(;ze!==null;){var e=ze;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Rv(4,e)}catch(l){wn(e,t,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){wn(e,i,l)}}var s=e.return;try{_x(e)}catch(l){wn(e,s,l)}break;case 5:var o=e.return;try{_x(e)}catch(l){wn(e,o,l)}}}catch(l){wn(e,e.return,l)}if(e===n){ze=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ze=a;break}ze=e.return}}var utt=Math.ceil,Dg=_o.ReactCurrentDispatcher,Vw=_o.ReactCurrentOwner,zi=_o.ReactCurrentBatchConfig,Ot=0,rr=null,Fn=null,pr=0,hi=0,Uc=_a(0),Gn=0,pd=null,_l=0,Pv=0,Gw=0,Ff=null,Xr=null,qw=0,fu=1/0,Ks=null,kg=!1,wx=null,ra=null,Lp=!1,Zo=null,Og=0,zf=0,bx=null,qm=-1,Wm=0;function Fr(){return Ot&6?In():qm!==-1?qm:qm=In()}function ia(n){return n.mode&1?Ot&2&&pr!==0?pr&-pr:jet.transition!==null?(Wm===0&&(Wm=SP()),Wm):(n=Gt,n!==0||(n=window.event,n=n===void 0?16:CP(n.type)),n):1}function os(n,e,t,r){if(50<zf)throw zf=0,bx=null,Error(Se(185));Wd(n,t,r),(!(Ot&2)||n!==rr)&&(n===rr&&(!(Ot&2)&&(Pv|=t),Gn===4&&Wo(n,pr)),ei(n,r),t===1&&Ot===0&&!(e.mode&1)&&(fu=In()+500,Tv&&xa()))}function ei(n,e){var t=n.callbackNode;qQe(n,e);var r=_g(n,n===rr?pr:0);if(r===0)t!==null&&tA(t),n.callbackNode=null,n.callbackPriority=0;else if(e=r&-r,n.callbackPriority!==e){if(t!=null&&tA(t),e===1)n.tag===0?Wet(jA.bind(null,n)):jP(jA.bind(null,n)),Het(function(){!(Ot&6)&&xa()}),t=null;else{switch(wP(r)){case 1:t=vw;break;case 4:t=_P;break;case 16:t=yg;break;case 536870912:t=xP;break;default:t=yg}t=WL(t,FL.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function FL(n,e){if(qm=-1,Wm=0,Ot&6)throw Error(Se(327));var t=n.callbackNode;if(Jc()&&n.callbackNode!==t)return null;var r=_g(n,n===rr?pr:0);if(r===0)return null;if(r&30||r&n.expiredLanes||e)e=$g(n,r);else{e=r;var i=Ot;Ot|=2;var s=BL();(rr!==n||pr!==e)&&(Ks=null,fu=In()+500,sl(n,e));do try{htt();break}catch(a){zL(n,a)}while(1);Pw(),Dg.current=s,Ot=i,Fn!==null?e=0:(rr=null,pr=0,e=Gn)}if(e!==0){if(e===2&&(i=Z_(n),i!==0&&(r=i,e=Ex(n,i))),e===1)throw t=pd,sl(n,0),Wo(n,r),ei(n,In()),t;if(e===6)Wo(n,r);else{if(i=n.current.alternate,!(r&30)&&!ftt(i)&&(e=$g(n,r),e===2&&(s=Z_(n),s!==0&&(r=s,e=Ex(n,s))),e===1))throw t=pd,sl(n,0),Wo(n,r),ei(n,In()),t;switch(n.finishedWork=i,n.finishedLanes=r,e){case 0:case 1:throw Error(Se(345));case 2:Wa(n,Xr,Ks);break;case 3:if(Wo(n,r),(r&130023424)===r&&(e=qw+500-In(),10<e)){if(_g(n,0)!==0)break;if(i=n.suspendedLanes,(i&r)!==r){Fr(),n.pingedLanes|=n.suspendedLanes&i;break}n.timeoutHandle=ix(Wa.bind(null,n,Xr,Ks),e);break}Wa(n,Xr,Ks);break;case 4:if(Wo(n,r),(r&4194240)===r)break;for(e=n.eventTimes,i=-1;0<r;){var o=31-ss(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=In()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*utt(r/1960))-r,10<r){n.timeoutHandle=ix(Wa.bind(null,n,Xr,Ks),r);break}Wa(n,Xr,Ks);break;case 5:Wa(n,Xr,Ks);break;default:throw Error(Se(329))}}}return ei(n,In()),n.callbackNode===t?FL.bind(null,n):null}function Ex(n,e){var t=Ff;return n.current.memoizedState.isDehydrated&&(sl(n,e).flags|=256),n=$g(n,e),n!==2&&(e=Xr,Xr=t,e!==null&&Mx(e)),n}function Mx(n){Xr===null?Xr=n:Xr.push.apply(Xr,n)}function ftt(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],s=i.getSnapshot;i=i.value;try{if(!as(s(),i))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Wo(n,e){for(e&=~Gw,e&=~Pv,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-ss(e),r=1<<t;n[t]=-1,e&=~r}}function jA(n){if(Ot&6)throw Error(Se(327));Jc();var e=_g(n,0);if(!(e&1))return ei(n,In()),null;var t=$g(n,e);if(n.tag!==0&&t===2){var r=Z_(n);r!==0&&(e=r,t=Ex(n,r))}if(t===1)throw t=pd,sl(n,0),Wo(n,e),ei(n,In()),t;if(t===6)throw Error(Se(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Wa(n,Xr,Ks),ei(n,In()),null}function Ww(n,e){var t=Ot;Ot|=1;try{return n(e)}finally{Ot=t,Ot===0&&(fu=In()+500,Tv&&xa())}}function xl(n){Zo!==null&&Zo.tag===0&&!(Ot&6)&&Jc();var e=Ot;Ot|=1;var t=zi.transition,r=Gt;try{if(zi.transition=null,Gt=1,n)return n()}finally{Gt=r,zi.transition=t,Ot=e,!(Ot&6)&&xa()}}function jw(){hi=Uc.current,on(Uc)}function sl(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,Bet(t)),Fn!==null)for(t=Fn.return;t!==null;){var r=t;switch(Aw(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Eg();break;case 3:cu(),on(Jr),on(Lr),Ow();break;case 5:kw(r);break;case 4:cu();break;case 13:on(mn);break;case 19:on(mn);break;case 10:Lw(r.type._context);break;case 22:case 23:jw()}t=t.return}if(rr=n,Fn=n=sa(n.current,null),pr=hi=e,Gn=0,pd=null,Gw=Pv=_l=0,Xr=Ff=null,Qa!==null){for(e=0;e<Qa.length;e++)if(t=Qa[e],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,s=t.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}t.pending=r}Qa=null}return n}function zL(n,e){do{var t=Fn;try{if(Pw(),Hm.current=Ig,Ng){for(var r=vn.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ng=!1}if(yl=0,tr=Hn=vn=null,$f=!1,fd=0,Vw.current=null,t===null||t.return===null){Gn=1,pd=e,Fn=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=pr,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var f=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=DA(o);if(g!==null){g.flags&=-257,kA(g,o,a,s,e),g.mode&1&&IA(s,f,e),e=g,l=f;var y=e.updateQueue;if(y===null){var b=new Set;b.add(l),e.updateQueue=b}else y.add(l);break e}else{if(!(e&1)){IA(s,f,e),Xw();break e}l=Error(Se(426))}}else if(fn&&a.mode&1){var S=DA(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),kA(S,o,a,s,e),Cw(uu(l,a));break e}}s=l=uu(l,a),Gn!==4&&(Gn=2),Ff===null?Ff=[s]:Ff.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=bL(s,l,e);TA(s,m);break e;case 1:a=l;var _=s.type,w=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(ra===null||!ra.has(w)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=EL(s,a,e);TA(s,M);break e}}s=s.return}while(s!==null)}VL(t)}catch(C){e=C,Fn===t&&t!==null&&(Fn=t=t.return);continue}break}while(1)}function BL(){var n=Dg.current;return Dg.current=Ig,n===null?Ig:n}function Xw(){(Gn===0||Gn===3||Gn===2)&&(Gn=4),rr===null||!(_l&268435455)&&!(Pv&268435455)||Wo(rr,pr)}function $g(n,e){var t=Ot;Ot|=2;var r=BL();(rr!==n||pr!==e)&&(Ks=null,sl(n,e));do try{dtt();break}catch(i){zL(n,i)}while(1);if(Pw(),Ot=t,Dg.current=r,Fn!==null)throw Error(Se(261));return rr=null,pr=0,Gn}function dtt(){for(;Fn!==null;)HL(Fn)}function htt(){for(;Fn!==null&&!OQe();)HL(Fn)}function HL(n){var e=qL(n.alternate,n,hi);n.memoizedProps=n.pendingProps,e===null?VL(n):Fn=e,Vw.current=null}function VL(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=ott(t,e),t!==null){t.flags&=32767,Fn=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Gn=6,Fn=null;return}}else if(t=stt(t,e,hi),t!==null){Fn=t;return}if(e=e.sibling,e!==null){Fn=e;return}Fn=e=n}while(e!==null);Gn===0&&(Gn=5)}function Wa(n,e,t){var r=Gt,i=zi.transition;try{zi.transition=null,Gt=1,ptt(n,e,t,r)}finally{zi.transition=i,Gt=r}return null}function ptt(n,e,t,r){do Jc();while(Zo!==null);if(Ot&6)throw Error(Se(327));t=n.finishedWork;var i=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(Se(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(WQe(n,s),n===rr&&(Fn=rr=null,pr=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Lp||(Lp=!0,WL(yg,function(){return Jc(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=zi.transition,zi.transition=null;var o=Gt;Gt=1;var a=Ot;Ot|=4,Vw.current=null,ltt(n,t),$L(t,n),Det(nx),xg=!!tx,nx=tx=null,n.current=t,ctt(t),$Qe(),Ot=a,Gt=o,zi.transition=s}else n.current=t;if(Lp&&(Lp=!1,Zo=n,Og=i),s=n.pendingLanes,s===0&&(ra=null),zQe(t.stateNode),ei(n,In()),e!==null)for(r=n.onRecoverableError,t=0;t<e.length;t++)i=e[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(kg)throw kg=!1,n=wx,wx=null,n;return Og&1&&n.tag!==0&&Jc(),s=n.pendingLanes,s&1?n===bx?zf++:(zf=0,bx=n):zf=0,xa(),null}function Jc(){if(Zo!==null){var n=wP(Og),e=zi.transition,t=Gt;try{if(zi.transition=null,Gt=16>n?16:n,Zo===null)var r=!1;else{if(n=Zo,Zo=null,Og=0,Ot&6)throw Error(Se(331));var i=Ot;for(Ot|=4,ze=n.current;ze!==null;){var s=ze,o=s.child;if(ze.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var f=a[l];for(ze=f;ze!==null;){var d=ze;switch(d.tag){case 0:case 11:case 15:Uf(8,d,s)}var h=d.child;if(h!==null)h.return=d,ze=h;else for(;ze!==null;){d=ze;var p=d.sibling,g=d.return;if(DL(d),d===f){ze=null;break}if(p!==null){p.return=g,ze=p;break}ze=g}}}var y=s.alternate;if(y!==null){var b=y.child;if(b!==null){y.child=null;do{var S=b.sibling;b.sibling=null,b=S}while(b!==null)}}ze=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ze=o;else e:for(;ze!==null;){if(s=ze,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Uf(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,ze=m;break e}ze=s.return}}var _=n.current;for(ze=_;ze!==null;){o=ze;var w=o.child;if(o.subtreeFlags&2064&&w!==null)w.return=o,ze=w;else e:for(o=_;ze!==null;){if(a=ze,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Rv(9,a)}}catch(C){wn(a,a.return,C)}if(a===o){ze=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,ze=M;break e}ze=a.return}}if(Ot=i,xa(),Ps&&typeof Ps.onPostCommitFiberRoot=="function")try{Ps.onPostCommitFiberRoot(Sv,n)}catch{}r=!0}return r}finally{Gt=t,zi.transition=e}}return!1}function XA(n,e,t){e=uu(t,e),e=bL(n,e,1),n=na(n,e,1),e=Fr(),n!==null&&(Wd(n,1,e),ei(n,e))}function wn(n,e,t){if(n.tag===3)XA(n,n,t);else for(;e!==null;){if(e.tag===3){XA(e,n,t);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ra===null||!ra.has(r))){n=uu(t,n),n=EL(e,n,1),e=na(e,n,1),n=Fr(),e!==null&&(Wd(e,1,n),ei(e,n));break}}e=e.return}}function mtt(n,e,t){var r=n.pingCache;r!==null&&r.delete(e),e=Fr(),n.pingedLanes|=n.suspendedLanes&t,rr===n&&(pr&t)===t&&(Gn===4||Gn===3&&(pr&130023424)===pr&&500>In()-qw?sl(n,0):Gw|=t),ei(n,e)}function GL(n,e){e===0&&(n.mode&1?(e=Sp,Sp<<=1,!(Sp&130023424)&&(Sp=4194304)):e=1);var t=Fr();n=fo(n,e),n!==null&&(Wd(n,e,t),ei(n,t))}function gtt(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),GL(n,t)}function vtt(n,e){var t=0;switch(n.tag){case 13:var r=n.stateNode,i=n.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=n.stateNode;break;default:throw Error(Se(314))}r!==null&&r.delete(e),GL(n,t)}var qL;qL=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Jr.current)Kr=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Kr=!1,itt(n,e,t);Kr=!!(n.flags&131072)}else Kr=!1,fn&&e.flags&1048576&&XP(e,Ag,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Gm(n,e),n=e.pendingProps;var i=ou(e,Lr.current);Kc(e,t),i=Uw(null,e,r,n,i,t);var s=Fw();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Qr(r)?(s=!0,Mg(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Iw(e),i.updater=Av,e.stateNode=i,i._reactInternals=e,fx(e,r,n,t),e=px(null,e,r,!0,s,t)):(e.tag=0,fn&&s&&Tw(e),Or(null,e,i,t),e=e.child),e;case 16:r=e.elementType;e:{switch(Gm(n,e),n=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=_tt(r),n=Zi(r,n),i){case 0:e=hx(null,e,r,n,t);break e;case 1:e=UA(null,e,r,n,t);break e;case 11:e=OA(null,e,r,n,t);break e;case 14:e=$A(null,e,r,Zi(r.type,n),t);break e}throw Error(Se(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Zi(r,i),hx(n,e,r,i,t);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Zi(r,i),UA(n,e,r,i,t);case 3:e:{if(CL(e),n===null)throw Error(Se(387));r=e.pendingProps,s=e.memoizedState,i=s.element,JP(n,e),Pg(e,r,null,t);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=uu(Error(Se(423)),e),e=FA(n,e,r,t,i);break e}else if(r!==i){i=uu(Error(Se(424)),e),e=FA(n,e,r,t,i);break e}else for(mi=ta(e.stateNode.containerInfo.firstChild),vi=e,fn=!0,Qi=null,t=nL(e,null,r,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(au(),r===i){e=ho(n,e,t);break e}Or(n,e,r,t)}e=e.child}return e;case 5:return rL(e),n===null&&lx(e),r=e.type,i=e.pendingProps,s=n!==null?n.memoizedProps:null,o=i.children,rx(r,i)?o=null:s!==null&&rx(r,s)&&(e.flags|=32),AL(n,e),Or(n,e,o,t),e.child;case 6:return n===null&&lx(e),null;case 13:return RL(n,e,t);case 4:return Dw(e,e.stateNode.containerInfo),r=e.pendingProps,n===null?e.child=lu(e,null,r,t):Or(n,e,r,t),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Zi(r,i),OA(n,e,r,i,t);case 7:return Or(n,e,e.pendingProps,t),e.child;case 8:return Or(n,e,e.pendingProps.children,t),e.child;case 12:return Or(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,en(Cg,r._currentValue),r._currentValue=o,s!==null)if(as(s.value,o)){if(s.children===i.children&&!Jr.current){e=ho(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=io(-1,t&-t),l.tag=2;var f=s.updateQueue;if(f!==null){f=f.shared;var d=f.pending;d===null?l.next=l:(l.next=d.next,d.next=l),f.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),cx(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(Se(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),cx(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Or(n,e,i.children,t),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Kc(e,t),i=Bi(i),r=r(i),e.flags|=1,Or(n,e,r,t),e.child;case 14:return r=e.type,i=Zi(r,e.pendingProps),i=Zi(r.type,i),$A(n,e,r,i,t);case 15:return ML(n,e,e.type,e.pendingProps,t);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Zi(r,i),Gm(n,e),e.tag=1,Qr(r)?(n=!0,Mg(e)):n=!1,Kc(e,t),eL(e,r,i),fx(e,r,i,t),px(null,e,r,!0,n,t);case 19:return PL(n,e,t);case 22:return TL(n,e,t)}throw Error(Se(156,e.tag))};function WL(n,e){return yP(n,e)}function ytt(n,e,t,r){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fi(n,e,t,r){return new ytt(n,e,t,r)}function Yw(n){return n=n.prototype,!(!n||!n.isReactComponent)}function _tt(n){if(typeof n=="function")return Yw(n)?1:0;if(n!=null){if(n=n.$$typeof,n===pw)return 11;if(n===mw)return 14}return 2}function sa(n,e){var t=n.alternate;return t===null?(t=Fi(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function jm(n,e,t,r,i,s){var o=2;if(r=n,typeof n=="function")Yw(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Cc:return ol(t.children,i,s,e);case hw:o=8,i|=8;break;case k_:return n=Fi(12,t,e,i|2),n.elementType=k_,n.lanes=s,n;case O_:return n=Fi(13,t,e,i),n.elementType=O_,n.lanes=s,n;case $_:return n=Fi(19,t,e,i),n.elementType=$_,n.lanes=s,n;case tP:return Lv(t,i,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Q3:o=10;break e;case eP:o=9;break e;case pw:o=11;break e;case mw:o=14;break e;case Ho:o=16,r=null;break e}throw Error(Se(130,n==null?n:typeof n,""))}return e=Fi(o,t,e,i),e.elementType=n,e.type=r,e.lanes=s,e}function ol(n,e,t,r){return n=Fi(7,n,r,e),n.lanes=t,n}function Lv(n,e,t,r){return n=Fi(22,n,r,e),n.elementType=tP,n.lanes=t,n.stateNode={isHidden:!1},n}function s0(n,e,t){return n=Fi(6,n,null,e),n.lanes=t,n}function o0(n,e,t){return e=Fi(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function xtt(n,e,t,r,i){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=z1(0),this.expirationTimes=z1(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=z1(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Zw(n,e,t,r,i,s,o,a,l){return n=new xtt(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Fi(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Iw(s),n}function Stt(n,e,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ac,key:r==null?null:""+r,children:n,containerInfo:e,implementation:t}}function jL(n){if(!n)return ha;n=n._reactInternals;e:{if(Tl(n)!==n||n.tag!==1)throw Error(Se(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Qr(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Se(171))}if(n.tag===1){var t=n.type;if(Qr(t))return WP(n,t,e)}return e}function XL(n,e,t,r,i,s,o,a,l){return n=Zw(t,r,!0,n,i,s,o,a,l),n.context=jL(null),t=n.current,r=Fr(),i=ia(t),s=io(r,i),s.callback=e??null,na(t,s,i),n.current.lanes=i,Wd(n,i,r),ei(n,r),n}function Nv(n,e,t,r){var i=e.current,s=Fr(),o=ia(i);return t=jL(t),e.context===null?e.context=t:e.pendingContext=t,e=io(s,o),e.payload={element:n},r=r===void 0?null:r,r!==null&&(e.callback=r),n=na(i,e,o),n!==null&&(os(n,i,o,s),Bm(n,i,o)),o}function Ug(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function YA(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Kw(n,e){YA(n,e),(n=n.alternate)&&YA(n,e)}function wtt(){return null}var YL=typeof reportError=="function"?reportError:function(n){console.error(n)};function Jw(n){this._internalRoot=n}Iv.prototype.render=Jw.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(Se(409));Nv(n,e,null,null)};Iv.prototype.unmount=Jw.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;xl(function(){Nv(null,n,null,null)}),e[uo]=null}};function Iv(n){this._internalRoot=n}Iv.prototype.unstable_scheduleHydration=function(n){if(n){var e=MP();n={blockedOn:null,target:n,priority:e};for(var t=0;t<qo.length&&e!==0&&e<qo[t].priority;t++);qo.splice(t,0,n),t===0&&AP(n)}};function Qw(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Dv(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function ZA(){}function btt(n,e,t,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var f=Ug(o);s.call(f)}}var o=XL(e,r,n,0,null,!1,!1,"",ZA);return n._reactRootContainer=o,n[uo]=o.current,od(n.nodeType===8?n.parentNode:n),xl(),o}for(;i=n.lastChild;)n.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var f=Ug(l);a.call(f)}}var l=Zw(n,0,!1,null,null,!1,!1,"",ZA);return n._reactRootContainer=l,n[uo]=l.current,od(n.nodeType===8?n.parentNode:n),xl(function(){Nv(e,l,t,r)}),l}function kv(n,e,t,r,i){var s=t._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Ug(o);a.call(l)}}Nv(e,o,n,i)}else o=btt(t,e,n,i,r);return Ug(o)}bP=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Mf(e.pendingLanes);t!==0&&(yw(e,t|1),ei(e,In()),!(Ot&6)&&(fu=In()+500,xa()))}break;case 13:xl(function(){var r=fo(n,1);if(r!==null){var i=Fr();os(r,n,1,i)}}),Kw(n,1)}};_w=function(n){if(n.tag===13){var e=fo(n,134217728);if(e!==null){var t=Fr();os(e,n,134217728,t)}Kw(n,134217728)}};EP=function(n){if(n.tag===13){var e=ia(n),t=fo(n,e);if(t!==null){var r=Fr();os(t,n,e,r)}Kw(n,e)}};MP=function(){return Gt};TP=function(n,e){var t=Gt;try{return Gt=n,e()}finally{Gt=t}};j_=function(n,e,t){switch(e){case"input":if(z_(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var r=t[e];if(r!==n&&r.form===n.form){var i=Mv(r);if(!i)throw Error(Se(90));rP(r),z_(r,i)}}}break;case"textarea":sP(n,t);break;case"select":e=t.value,e!=null&&jc(n,!!t.multiple,e,!1)}};dP=Ww;hP=xl;var Ett={usingClientEntryPoint:!1,Events:[Xd,Nc,Mv,uP,fP,Ww]},sf={findFiberByHostInstance:Ja,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Mtt={bundleType:sf.bundleType,version:sf.version,rendererPackageName:sf.rendererPackageName,rendererConfig:sf.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_o.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=gP(n),n===null?null:n.stateNode},findFiberByHostInstance:sf.findFiberByHostInstance||wtt,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Np=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Np.isDisabled&&Np.supportsFiber)try{Sv=Np.inject(Mtt),Ps=Np}catch{}}wi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ett;wi.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qw(e))throw Error(Se(200));return Stt(n,e,null,t)};wi.createRoot=function(n,e){if(!Qw(n))throw Error(Se(299));var t=!1,r="",i=YL;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Zw(n,1,!1,null,null,t,!1,r,i),n[uo]=e.current,od(n.nodeType===8?n.parentNode:n),new Jw(e)};wi.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(Se(188)):(n=Object.keys(n).join(","),Error(Se(268,n)));return n=gP(e),n=n===null?null:n.stateNode,n};wi.flushSync=function(n){return xl(n)};wi.hydrate=function(n,e,t){if(!Dv(e))throw Error(Se(200));return kv(null,n,e,!0,t)};wi.hydrateRoot=function(n,e,t){if(!Qw(n))throw Error(Se(405));var r=t!=null&&t.hydratedSources||null,i=!1,s="",o=YL;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=XL(e,null,n,1,t??null,i,!1,s,o),n[uo]=e.current,od(n),r)for(n=0;n<r.length;n++)t=r[n],i=t._getVersion,i=i(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,i]:e.mutableSourceEagerHydrationData.push(t,i);return new Iv(e)};wi.render=function(n,e,t){if(!Dv(e))throw Error(Se(200));return kv(null,n,e,!1,t)};wi.unmountComponentAtNode=function(n){if(!Dv(n))throw Error(Se(40));return n._reactRootContainer?(xl(function(){kv(null,null,n,!1,function(){n._reactRootContainer=null,n[uo]=null})}),!0):!1};wi.unstable_batchedUpdates=Ww;wi.unstable_renderSubtreeIntoContainer=function(n,e,t,r){if(!Dv(t))throw Error(Se(200));if(n==null||n._reactInternals===void 0)throw Error(Se(38));return kv(n,e,t,!1,r)};wi.version="18.2.0-next-9e3b772b8-20220608";(function(n){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}e(),n.exports=wi})(xQe);const Ttt=()=>{const[n,e]=ie.useState(""),[t,r]=ie.useState(""),[i,s]=ie.useState(""),[o,a]=ie.useState(!1),[l,f]=ie.useState(!1),[d,h]=ie.useState(!1),[p,g]=ie.useState(null),[y,b]=ie.useState(""),[S,m]=ie.useState(""),[_,w]=ie.useState(!1),[M,C]=ie.useState(!1),A=V=>{e(V.target.value)},P=V=>{r(V.target.value)},k=V=>{s(V.target.value)},R=V=>{g(V)},N=V=>{b(V.target.value)},B=V=>{m(V.target.value)},W=()=>{setTimeout(()=>{w(!0)},1e4)};ie.useEffect(()=>{W()},[]);const J=V=>{if(V.preventDefault(),a(!n),f(!t||!/\S+@\S+\.\S+/.test(t)),h(!i),!p){console.log("Please complete the reCAPTCHA validation.");return}if(y||S){console.log("Potential spam detected.");return}if(!M){if(!_){console.log("Please wait for at least 10 seconds before submitting.");return}if(C(!0),n&&t&&i&&p){var Y="An inquiry from "+n,te="mailto:atsmitharc@gmail.com?subject="+encodeURIComponent(Y)+"&body="+encodeURIComponent(i);window.location.href=te}}};return L.jsx("div",{className:"form-container",children:L.jsxs("form",{role:"form","aria-label":"Send Me An Email",onSubmit:J,children:[L.jsxs("div",{style:{display:"none"},children:[L.jsx("label",{htmlFor:"honeypotField",children:"Do not fill this out"}),L.jsx("input",{type:"text",id:"honeypotField1",name:"honeypotField1",value:y,onChange:N}),L.jsx("label",{htmlFor:"honeypotField",children:"Leave this field blank"}),L.jsx("input",{type:"text",id:"honeypotField2",name:"honeypotField2",value:S,onChange:B})]}),L.jsxs("div",{children:[L.jsxs("label",{htmlFor:"your name",children:["Your Name: ",o&&"*"]}),o&&L.jsx("span",{className:"error",children:"Invalid Name"}),L.jsx("input",{maxLength:"50",type:"text",value:n,onChange:A})]}),L.jsxs("div",{children:[L.jsxs("label",{htmlFor:"your email",children:["Your Email: ",l&&"*"]}),l&&L.jsx("span",{className:"error",children:"Invalid email."}),L.jsx("input",{autoComplete:"email",autoCapitalize:"off",autoCorrect:"off",maxLength:"50",spellCheck:"false",type:"email",value:t,onChange:P})]}),L.jsxs("div",{children:[L.jsxs("label",{htmlFor:"your message",children:["Message: ",d&&"*"]}),d&&L.jsx("span",{className:"error",children:"Invalid message."}),L.jsx("textarea",{maxLength:"1500",value:i,onChange:k})]}),L.jsx("div",{children:L.jsx(_Qe,{sitekey:"6LemA8QnAAAAAEo7ve5Fh7O3iVXxs8rtJF6O7Uty",onChange:R})}),L.jsx("button",{role:"button",className:"contrast-btn",title:"Submit",type:"submit",children:"Submit"})]})})};function Att(){return cn.greetings[Math.floor(Math.random()*cn.greetings.length)]}function Ctt(){const[n,e]=ie.useState(cn.greetings[0]),t=()=>{const r=Att();e(r)};return L.jsxs("div",{className:"page",children:[L.jsxs("h1",{role:"heading","aria-level":"1",onClick:t,children:["Say ",n,"!"]}),L.jsx(GJe,{}),L.jsx(Ttt,{})]})}function Rtt(n,e){if(n==null)return{};var t=Ptt(n,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}function Ptt(n,e){if(n==null)return{};var t={},r=Object.keys(n),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(t[i]=n[i]);return t}function Fg(){return Fg=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Fg.apply(this,arguments)}function KA(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function of(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?KA(Object(t),!0).forEach(function(r){Ltt(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):KA(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function Ltt(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}const Ntt={breakpointCols:void 0,className:void 0,columnClassName:void 0,children:void 0,columnAttrs:void 0,column:void 0},a0=2;class ZL extends Mn.Component{constructor(e){super(e),this.reCalculateColumnCount=this.reCalculateColumnCount.bind(this),this.reCalculateColumnCountDebounce=this.reCalculateColumnCountDebounce.bind(this);let t;this.props.breakpointCols&&this.props.breakpointCols.default?t=this.props.breakpointCols.default:t=parseInt(this.props.breakpointCols)||a0,this.state={columnCount:t}}componentDidMount(){this.reCalculateColumnCount(),window&&window.addEventListener("resize",this.reCalculateColumnCountDebounce)}componentDidUpdate(){this.reCalculateColumnCount()}componentWillUnmount(){window&&window.removeEventListener("resize",this.reCalculateColumnCountDebounce)}reCalculateColumnCountDebounce(){if(!window||!window.requestAnimationFrame){this.reCalculateColumnCount();return}window.cancelAnimationFrame&&window.cancelAnimationFrame(this._lastRecalculateAnimationFrame),this._lastRecalculateAnimationFrame=window.requestAnimationFrame(()=>{this.reCalculateColumnCount()})}reCalculateColumnCount(){const e=window&&window.innerWidth||1/0;let t=this.props.breakpointCols;typeof t!="object"&&(t={default:parseInt(t)||a0});let r=1/0,i=t.default||a0;for(let s in t){const o=parseInt(s);o>0&&e<=o&&o<r&&(r=o,i=t[s])}i=Math.max(1,parseInt(i)||1),this.state.columnCount!==i&&this.setState({columnCount:i})}itemsInColumns(){const e=this.state.columnCount,t=new Array(e),r=Mn.Children.toArray(this.props.children);for(let i=0;i<r.length;i++){const s=i%e;t[s]||(t[s]=[]),t[s].push(r[i])}return t}renderColumns(){const{column:e,columnAttrs:t={},columnClassName:r}=this.props,i=this.itemsInColumns(),s=`${100/i.length}%`;let o=r;o&&typeof o!="string"&&(this.logDeprecated('The property "columnClassName" requires a string'),typeof o>"u"&&(o="my-masonry-grid_column"));const a=of(of(of({},e),t),{},{style:of(of({},t.style),{},{width:s}),className:o});return i.map((l,f)=>Mn.createElement("div",Fg({},a,{key:f}),l))}logDeprecated(e){console.error("[Masonry]",e)}render(){const e=this.props,{children:t,breakpointCols:r,columnClassName:i,columnAttrs:s,column:o,className:a}=e,l=Rtt(e,["children","breakpointCols","columnClassName","columnAttrs","column","className"]);let f=a;return typeof a!="string"&&(this.logDeprecated('The property "className" requires a string'),typeof a>"u"&&(f="my-masonry-grid")),Mn.createElement("div",Fg({},l,{className:f}),this.renderColumns())}}ZL.defaultProps=Ntt;const Itt={default:4,1400:3,1e3:2,400:1},Ip="https://storage.googleapis.com/atsmitharc-media/thumb/";function Dtt(n){const e=[...mt].reverse();return L.jsx(ZL,{breakpointCols:Itt,className:"my-masonry-grid",columnClassName:"my-masonry-grid_column",children:e.filter(t=>{switch(n.category){case"all":return!0;case"professional":return t.category===0;case"pro-bono":return t.category===1;case"undergraduate":return t.category===2;case"graduate":return t.category===3;default:return!1}}).map(t=>L.jsx($r,{role:"link",rel:"preload",as:"image",href:"/projects/"+t.href,className:"masonryLink",children:L.jsxs("div",{className:"masonryItem",style:t.style,children:[L.jsx("h2",{role:"heading","aria-level":"2",children:t.name}),L.jsx("img",{role:"img",rel:"preload",src:Ip+t.href+"-800.webp",srcSet:`${Ip}${t.href}-400.webp 500w,
                       ${Ip}${t.href}-600.webp 700w,
                       ${Ip}${t.href}-1000.webp 1100w`,alt:t.name,"aria-label":`Project thumbnail image of ${t.name}`},t.id),L.jsx("p",{children:t.desc})]})},t.id))})}function ktt(n){const e=ie.useRef(),t=()=>{e.current.classList.toggle("responsive_menu")},r=s=>{t()},i=s=>{const[o]=vR(s.href);return L.jsx($r,{...s,className:o?"menu-item activeLink":"menu-item animatedLinkLeft",onClick:r,children:s.children})};return L.jsx(Mn.Fragment,{children:L.jsxs("aside",{className:"menu-container",children:[L.jsx("button",{title:"Filter Button",className:"icon menu-btn",onClick:t,children:L.jsx(Un,{icon:RJe})}),L.jsxs("ul",{className:"menu",ref:e,children:[L.jsx("li",{children:L.jsx(i,{href:"/projects",children:"All"})}),L.jsx("li",{children:L.jsx(i,{href:"/projects/undergraduate",children:"Undergraduate"})}),L.jsx("li",{children:L.jsx(i,{href:"/projects/graduate",children:"Graduate"})}),L.jsx("li",{children:L.jsx(i,{href:"/projects/professional",children:"Professional"})}),L.jsx("li",{children:L.jsx(i,{href:"/projects/pro-bono",children:"Pro Bono"})})]})]})})}function Zl(n){const e=()=>{switch(n.filter){case"all":return"All";case"professional":return"Professional";case"pro-bono":return"Pro Bono";case"undergraduate":return"Undergraduate";case"graduate":return"Graduate"}};return L.jsxs(ie.Fragment,{children:[L.jsx("h1",{role:"heading","aria-level":"1",children:`${e()} Projects`}),L.jsxs("div",{className:"projects-container",children:[L.jsx(ktt,{filter:n.filter}),L.jsx(Dtt,{category:n.filter})]}),L.jsx(iw,{})]})}function Ott(){return L.jsx("div",{className:"page",children:L.jsx("h1",{children:"404. Page Not Found"})})}const $tt=({project:n,details:e})=>{const{href:t,category:r,title:i,site:s,yearStart:o,yearEnd:a}=n,{collab:l,description:f}=e,d="https://storage.googleapis.com/atsmitharc-media/img/",h=`${t}/01/image-`,p=()=>{switch(n.category){case 0:return"Professional";case 1:return"Pro-Bono";case 2:return"Undergraduate";case 3:return"Graduate"}};return console.log(`${d}${h}2000.webp`),L.jsxs("section",{className:"project-splash",children:[L.jsx("div",{className:"splash-image",children:L.jsx("img",{rel:"preload",className:"splashimg",src:`${d}${h}2000.webp`,srcSet:`${d}${h}3000.webp 3100w,
                   ${d}${h}1000.webp 1100w,
                   ${d}${h}500.webp 600w`,alt:"Placeholder Splash Image"})}),L.jsxs("div",{className:"splash-info",children:[L.jsx("h1",{className:"heading-primary",children:n.name}),L.jsxs("div",{className:"splash-details",children:[L.jsx("div",{className:"splash-stats",children:L.jsxs("ul",{children:[L.jsxs("li",{children:[L.jsx("h2",{className:"splash-stats-text",children:"Category"}),L.jsx("p",{className:"splash-stats-text",children:p()})]}),L.jsxs("li",{children:[L.jsx("h2",{className:"splash-stats-text",children:"Location"}),L.jsx("p",{className:"splash-stats-text",children:s})]}),L.jsxs("li",{children:[L.jsx("h2",{className:"splash-stats-text",children:"Years"}),L.jsxs("p",{className:"splash-stats-text",children:[o," - ",a]})]})]})}),L.jsxs("div",{className:"splash-collab",children:[L.jsx("h2",{className:"splash-collab-text",children:"Collaborators"}),L.jsx("div",{className:"collab-content",children:l.map((g,y)=>L.jsxs("p",{className:"splash-collab-text",children:[g,y<l.length-1?", ":""]},y))})]})]}),L.jsx("div",{className:"splash-desc",children:L.jsx("p",{children:f})})]})]})},Utt=({projectIds:n})=>{n[0];const e="https://storage.googleapis.com/atsmitharc-media/thumb/";return L.jsx("section",{className:"related-section",children:L.jsx("div",{className:"related-gallery",children:n.map(t=>L.jsx($r,{role:"link",rel:"preload",as:"image",href:"/projects/"+mt[t].href,className:"masonryLink",children:L.jsxs("div",{className:"related-card",children:[L.jsx("img",{role:"img",rel:"preload",src:e+mt[t].href+"-800.webp",srcSet:`${e}${mt[t].href}-400.webp 500w,
                         ${e}${mt[t].href}-600.webp 700w`,alt:mt[t].name},mt[t].id),L.jsx("h3",{role:"heading","aria-level":"3",children:mt[t].name})]})},mt[t].id))})})};function dn({i:n,details:e,sections:t}){const r=mt[n];function i(s){let o=mt.length-1;return s===0?[o,o-1]:s===o?[o-1,o-2]:[s+1,s-1]}return r?L.jsxs("div",{className:"project-container",children:[L.jsx($tt,{project:r,details:e}),t,L.jsx("h2",{children:"See more..."}),L.jsx(Utt,{projectIds:i(n)}),L.jsx(iw,{})]}):L.jsxs("div",{className:"page",children:[L.jsx("h1",{children:" This project doesnt appear to exist."}),L.jsx("img",{src:"https://media.tenor.com/aTB70bcZZKcAAAAd/obi-wan-perhaps-the-archives-are-incomplete.gif",alt:"If it's not in the Jedi archive, it probably doesnt exist."})]})}const Ftt={collab:["Mira Henry"],description:"This project was the outcome of my first undergraduate studio and served as an introduction to the means and manners of working spatially and abstractly in relation to the human scale. Regardless of the size of an architectural intervention, the body is a fundamental aspect of space, form, and experience that traverses all scales. Developing an ability to manipulate form towards a desired intent was the broad focus of this project while specifically, the project brief was to design a parking-space-sized pavilion tailored to our own bodily proportions. The pavilion was required to accommodate activities like studying, sleeping, exercising, and sunbathing."},ztt=[L.jsx("section",{})];function Btt(){return L.jsx(dn,{i:0,details:Ftt,sections:ztt})}const Htt={collab:["Benjamin Smith"],description:"This project was the outcome of my second undergraduate studio which introduced several fundamental disciplinary frameworks for designing a project at an institutional scale. These included research,  analysis, and representation of topics of site, context, program, and precedent. The project is a roughly 1,000sqm after-school facility for children and young adults located at the busy intersection of Hollywood Blvd. and Vine Street. In the case of this project, a rigorous precedent study of the Igualada Cemetary in Spain inspired many of the formal, spatial, and circulatory qualities found in the final project’s design."},Vtt=[L.jsx("section",{})];function Gtt(){return L.jsx(dn,{i:1,details:Htt,sections:Vtt})}const qtt={collab:["Mary-Ann Ray","Robert Mangurian"],description:"This project was the outcome of my third undergraduate studio which introduced programming and conceptual narratives as a means of generating organizational models of architecture. The studio emphasized that the formal choices we make as architects impact a range of behavioral outcomes that a building can invoke. The program developed for this project focused on teaching and celebrating the cultural importance of street food, home cooking, and other informal cuisines within the multi-ethnic context of downtown Los Angeles. The architectural result was a serrated tower that acted as part museum, part culinary school, and part market."},Wtt=[L.jsx("section",{})];function jtt(){return L.jsx(dn,{i:2,details:qtt,sections:Wtt})}const Xtt={collab:["Luciano Menghini"],description:"This project was the outcome of my fourth undergraduate studio which attempted to situate processes of expression alongside the magnitudes that control the economies of high-rise towers. The goal of this studio was to articulate design proposals that fulfill the different performative criteria of the contemporary high-rise while also contesting its presumed identity. This proposal is for a 20-story high-rise, situated adjacent to Highline Park in New York City. The form of the tower was reached through a formal exploration into ‘profiling’ where two corners of the tower remain vertical, while the remaining two corners follow a more expressive vertical path."},Ytt=[L.jsx("section",{})];function Ztt(){return L.jsx(dn,{i:3,details:Xtt,sections:Ytt})}const Ktt={collab:["None"],description:"This project, part of a seminar focusing on exterior wall assemblies, was a tectonic precedent study on a corner of the SFMOMA extension by Snøhetta. At the time of this project, details of SFMOMA were not available, so the study was conducted through a combination of studying publicly available construction photos and taking notes of mockups on display at the Encols office in Los Angeles. As part of this project, a detailed 3D model was constructed to represent our understanding of the building’s exterior assembly. The exercise finished with an attempt to re-image the facade by detailing a completely different system in place of the existing one."},Jtt=[L.jsx("section",{})];function Qtt(){return L.jsx(dn,{i:4,details:Ktt,sections:Jtt})}const ent={collab:["Sean Justin","Russell Thompson"],description:"This project is a proposal for a seven-story, 10,000 sqm. school of architecture based on a spherical building typology. The design began with a formal exploration into how aggregations of discrete parts can, at times, appear as heterogeneous wholes using gestures of “cutting”, and with the application of graphic textures. In this case, a simple rectangular prism was aggregated into larger clusters, that were sliced and textured to reappear solid. The whole remained flexible in its tectonic as it began to receive spatial and functional roles. The organization of this school stacks itself around a central, outdoor cavity, designed to illuminate and ventilate the core."},tnt=[L.jsx("section",{})];function nnt(){return L.jsx(dn,{i:5,details:ent,sections:tnt})}const rnt={collab:["Dwayne Oyler"],description:"Named and inspired by safe-haven cities called “Sietches” from the science function novel Dune, this undergraduate project was an exploration into developing a design narrative as the basis for an architectural brief. Situated in Palm Springs, California, this speculative residential project responds to the likely future of catastrophic water scarcity in American Southwest region by burrowing itself into the ground to both protect and celebrate its grotesque mechanical systems that work to provide the property with its precious supply of water. The only visible hint of the residence below is framework of photovoltaic panels that power the mechanisms below."},int=[L.jsx("section",{})];function snt(){return L.jsx(dn,{i:6,details:rnt,sections:int})}const ont={collab:["Willy Müller"],description:"This undergraduate project, operating at the scale of the city, is based on the speculative creation of a new city center on the periphery of downtown Los Angeles. Dodger’s Stadium, opened in 1962, and built on forcibly taken land, is currently surrounded by roughly 2,000 sqm. surface-level parking. Used only on game-days, this land has increasingly been the subject of prospective development plans. With that history in mind, this project reimagines a portion of this prime real estate as a master-planned, mixed-use, and mid-rise residential community that formally and operationally identifies as an extension of the existing ballpark’s outfield."},ant=[L.jsx("section",{})];function lnt(){return L.jsx(dn,{i:7,details:ont,sections:ant})}const cnt={collab:["HKS Line","Thorton Tomasetti"],description:"This project was the result of a three-day workshop held at the 2018 ACADIA Conference. The focus of this workshop was on the structural mechanics and architectural principles of both reciprocal frame and grid shell structures, as well as methods of generating, relaxing, and optimizing FE models of both structural systems using Rhino+Grasshopper and Revit+Dynamo. One and a half days of instruction and computational design was followed by an equal period of fabrication wherein a group-generated computational model was used to fabricate two long-span, self-supporting structures, built from locally acquired wood laminate."},unt=[L.jsx("section",{})];function fnt(){return L.jsx(dn,{i:8,details:cnt,sections:unt})}const dnt={collab:["HKS Line","Thorton Tomasetti","Altair"],description:"This project was the result of a three-day workshop held at the 2019 ACADIA Conference. The focus of the workshop was presenting topological optimization workflows of shell structures using Altair’s OptiStruct Software. Specifically, we explored several processes of translating a 2D mesh-edge network into a 3D shell using a mesh relaxation technique. The relaxed 3D meshes then underwent several discretization and sub-division routines to prepare them for FE analysis in Optistruct. Throughout the workshop, we were able to work between Optistruct and Grasshopper with the help of a proprietary Rhino plugin that supported Optistruct’s data types."},hnt=[L.jsx("section",{})];function pnt(){return L.jsx(dn,{i:9,details:dnt,sections:hnt})}const mnt={collab:["Ryan Griffin (Co-Author)"],description:"Hacking Fracking is a call to arms for the re-purposing of Texas’ network of hydraulic fracturing wells. The ambition of Hacking Fracking is to solve three problems facing the state’s hydrology: Aquifer depletion, worsening hydraulic extremes (droughts & floods), and widespread hydraulic fracturing by the oil and gas industry. This project exploits technical similarities between hydraulic fracturing wells and aquifer injection & recharge wells in order to propose how we can and must re-purpose Texas’ 430,000+ active and abandoned fracking wells into a decentralized state-wide aquifer storage, filtration, recovery, and groundwater quality monitoring network."},gnt=[L.jsx("section",{})];function vnt(){return L.jsx(dn,{i:10,details:mnt,sections:gnt})}const ynt={collab:["Lance Evans","Trip Boswell"],description:"This project explores the automation and visualization of diagramming building program data with the help of Rhino+Grasshopper and Excel. Its ambition is to evolve the industry standard of manually tracking and diagramming program data. This work also reveals how formatting program data in a standard fashion can enable architects to utilize other interdisciplinary tools such as a bioinformatics platform like Cytoscape to visualize the complex networks of relationships that underpin the programming and space planning effort of large architectural projects like stadiums, hospitals, and airports. "},_nt=[L.jsx("section",{})];function xnt(){return L.jsx(dn,{i:11,details:ynt,sections:_nt})}const Snt={collab:["Christy Hernandez, Christina Shin, Jiawei Ji"],description:"This project was the team effort of an internal design charrette held at the HKS LA office. The goal for each team was to design and pitch a piece of urban infrastructure that would make a positive cultural and environmental impact on Los Angeles as part of the 2028 Olympic Games, expected to be held in the city, and beyond the games. This proposal, in anticipation of LA’s “28 by 28” transportation initiative, acknowledges the LA Metro’s departure from a “spoke-hub” train line topology and the introduction of its first peripheral loop. This project celebrates the new loop by proposing a series of multi-modal paths and cultural attractions integrated along the new line."},wnt=[L.jsx("section",{})];function bnt(){return L.jsx(dn,{i:12,details:Snt,sections:wnt})}const Ent={collab:["Heath May","Jon Bailey","James Warton","Chad Porter"],description:"This project is the design for an innovation center located at Redstone Arsenal where the FBI is building a 243-acre campus to build its capabilities, enhance its training programs, and tap into regional talent. As the flagship building of the new Science and Technology District, the 250,000-square-foot building will be a first-of-its-kind facility dedicated to cyber threat intelligence, data analytics, and training to combat emerging threats. My participation in the project was limited to the concept phase, where I helped the exterior design team integrate their parametric grasshopper model into Revit for documentation using (then new) Rhino.Inside.Revit."},Mnt=[L.jsx("section",{})];function Tnt(){return L.jsx(dn,{i:13,details:Ent,sections:Mnt})}const Ant={collab:["Lance Evans","Mike Rogers","Andrew Colling","Bryan Rincon"],description:"The Barangaroo Pier Pavilion competition asked entrants to propose a prominent covered public space that would serve as a visually iconic landmark, designed to accommodate a broad range of programmed events while also offering a protective space to dwell and contemplate 365 days of the year. The conceptual narrative for this proposal emerged out of interest in the cultural significance of storytelling as it relates to both indigenous and immigrated Australians. The pavilion’s design is comprised of a ribbed metallic shell, clad in copper that rests on a reflective slate plinth. The shell’s shape itself carefully responds in several ways to its context."},Cnt=[L.jsx("section",{})];function Rnt(){return L.jsx(dn,{i:14,details:Ant,sections:Cnt})}const Pnt={collab:["Lance Evans","Mike Rogers","Michelle Stevenson","Manzer Mirkar","Bryan Rincon","Niel Prunier","Austin Ash","Zac Potts"],description:"YouTube Theater is a 6,000-seat performing arts venue located beneath neighboring Sofi Stadium's roof canopy. The project faced numerous design challenges in order to seamlessly integrate with the adjacent stadium and canopy above. My involvement in the project spanned nearly four years and included all project phases. In close collaboration with the LA-based project team, my contributions focused on the design and documentation of the exterior facade and interior lobbies and included assisting with parametric 3D modeling, design refinement, rendering, interior and exterior documentation, and resolving RFI’s."},Lnt=[L.jsx("section",{})];function Nnt(){return L.jsx(dn,{i:15,details:Pnt,sections:Lnt})}const Int={collab:["Lance Evans","Mike Rogers","Manzer Mirkar","Bryan Rincon"],description:"Sofi Stadium is a 288,000m2, 70,000 seat indoor-outdoor stadium located in Inglewood, CA. The LAX airport flight path over the site was a significant design-driver of the project and required a majority of the stadium to be built underground. With the pitch at 33m below grade, most fans entering the stadium descend through a series of landscaped “canyon” spaces that provide access to the lower concourse. My day-to-day work on the project spanned three years and included maintenance of several of the project’s LOD 400 models clash detection, visualization, and assisting RFIs relating to the project’s more geometrically complex components."},Dnt=[L.jsx("section",{})];function knt(){return L.jsx(dn,{i:16,details:Int,sections:Dnt})}const Ont={collab:["Roberto Naboni","Anja Kunic","Alessandro Zomparelli","Luca Breseghello","Sandro Sanin","Aina Radovan","Andreas Nielsen","Angelina Garipova","Anne Beyer","Asger Pedersen","Aske Kiehn","Averina Annisa","Cyril Novotny","Guijia Zhao","Ilya Lebedev","Jonathan Nielsen","Juraj Stetiar","Mathilde Eriksen","Maxime Fouillat","Robin Petersen","Veranika Sidorka","Xan Browne","Vojtech Vrtal"],description:"This project is the process and outcome of a three-week summer program held at the University of Southern Denmark that focused on exploring data-driven construction and the production of full-scale prototypes aimed at advancing timber fabrication through the use of digital design-to-fabrication workflows. Several concepts were introduced such as circular assemblies, robotic fabrication, and wood forming through programmed material behavior. With an iterative approach, we experimented with various digital designs and physical prototypes where material, form, and structure were all open to investigation."},$nt=[L.jsx("section",{})];function Unt(){return L.jsx(dn,{i:17,details:Ont,sections:$nt})}const Fnt={collab:["Jacob Riiber","Claudia Colmo"],description:"Passive Thermally Actuated Space Frames was a design-led research project focusing on the architectural applications, behavior, tectonics, and mechanical challenges of simulating and fabricating passively actuated space frame systems. The purpose of this project was to test the limits of the space frame system by exploring the integration of actuating struts and omnidirectional nodes that together drive a passive, mechanical response to changes in ambient temperature and solar radiation. Two large-scale prototypes were fabricated and sensed to understand and measure the performance and physical behavior of the PTASF system."},znt=[L.jsx("section",{})];function Bnt(){return L.jsx(dn,{i:18,details:Fnt,sections:znt})}const Hnt={collab:["None"],description:"'Sammen,' derived from the Danish word for “together,” is meant to capture the essence of this three-piece, nesting candle holder. The candle holder has an interlocking, minimalist design meant to embody the idea that beauty emerges when individuals come together as one. Inspired by the geometry of Japanese Tsugite joinery, subtle details in the form were developed to ensure a successful sand casting process. Limits of the sand casting process meant that the draft angles, tolerances, mold parting lines, material volume, and material distribution were all considered, physically tested, and validated to arrive at the final pattern used in this design."},Vnt=[L.jsx("section",{})];function Gnt(){return L.jsx(dn,{i:19,details:Hnt,sections:Vnt})}const qnt={collab:["Sandro Siefert","Søren Henning","Camila Alarcon","Daniel Bilesky","Yuliya Sinke"],description:"Graded Knitted Membranes was the output of a three-week workshop held at the Royal Danish Academy which explored digital-to-physical workflows fabricating CNC-knitted tensile panels. This project in particular focused on pushing the limits of the existing methodology introduced in the workshop by exploring the implications of diagonal loading (loads with both vertical & horizontal components). An initial design was developed first using simulations, then prototype panels were CNC-knit, loaded, and compared with the simulated model. The model was then tuned based on the prototypes’ behaviors, and a final set of 6 panels were knitted and installed."},Wnt=[L.jsx("section",{})];function jnt(){return L.jsx(dn,{i:20,details:qnt,sections:Wnt})}const Xnt={collab:["Maximilian Vomhoff","Valerio Bompadre","Marcus Steinbrecher","Heidi Wittmann","Elia Gonzalez","Christian Kongensgaard","Tom Svilans"],description:"'OpenMaterialData' won the ‘Best Overall Project’ award at the 2023 BLOXHUB AEC Hackathon. The project addressed the lack of accessible product data for software in the construction industry. OpenMaterialData aimed to solve issues with existing EPD databases by providing an alternative to a patchwork of proprietary data exposure services and by improving data quality by replacing inconsistent proprietary data standards with an open standard. OpenMaterialData proposed and prototyped an open-source distributed database architecture that can meet our industry’s demand for comprehensive, transparent, and standardized digital product data."},Ynt=[L.jsx("section",{})];function Znt(){return L.jsx(dn,{i:21,details:Xnt,sections:Ynt})}const Knt={collab:["None"],description:"StadiumTools is a ground-up, open-source geometry object library, written in C# and for the .NET framework, aimed at making it easier for anyone to develop computational tools for the cross-platform, parametric modeling and analysis of stadium seating bowl geometries and their associated BIM elements. In addition to the C# object library, StadiumTools has been implemented into a Grasshopper Plugin and a forthcoming Revit Addon. StadiumTools accelerates the iterative process of stadium bowl design and implements several novel features for developing seating bowl geometries from irregular plan configurations."},Jnt=[L.jsx("section",{})];function Qnt(){return L.jsx(dn,{i:22,details:Knt,sections:Jnt})}const ert=23,trt={collab:["Tom Svilans"],description:"Urban development has crucial direct and indirect impacts on biodiversity, yet it remains difficult for architects to quickly understand the impact architectural-scale design decisions have on a given site’s wildlife ecology. PLANimal explores how open-source geospatial ecological data can be accessibly generated, queried, structured, and ultimately drive early-stage conceptual design decisions by leveraging the collective specialist knowledge of citizens, scientists, and designers. Based on Animal-Aided-Design and Biodiversity Sensitive Urban Design principles."},nrt=[L.jsx("section",{})];function rrt(){return L.jsx(dn,{i:ert,details:trt,sections:nrt})}const Zt="/projects/",irt=()=>L.jsxs(yR,{children:[L.jsx($O,{}),L.jsxs(OO,{children:[L.jsx(Nt,{path:"/",component:UO}),L.jsx(Nt,{path:"/about",component:VJe}),L.jsx(Nt,{path:"/contact",component:Ctt}),L.jsx(Nt,{path:"/projects",component:()=>L.jsx(Zl,{filter:"all"})}),L.jsx(Nt,{path:Zt+"all",component:()=>L.jsx(Zl,{filter:"all"})}),L.jsx(Nt,{path:Zt+"undergraduate",component:()=>L.jsx(Zl,{filter:"undergraduate"})}),L.jsx(Nt,{path:Zt+"graduate",component:()=>L.jsx(Zl,{filter:"graduate"})}),L.jsx(Nt,{path:Zt+"professional",component:()=>L.jsx(Zl,{filter:"professional"})}),L.jsx(Nt,{path:Zt+"pro-bono",component:()=>L.jsx(Zl,{filter:"pro-bono"})}),L.jsx(Nt,{path:"/projects/parking-pavilion",component:Btt}),L.jsx(Nt,{path:Zt+mt[1].href,component:Gtt}),L.jsx(Nt,{path:Zt+mt[2].href,component:jtt}),L.jsx(Nt,{path:Zt+mt[3].href,component:Ztt}),L.jsx(Nt,{path:Zt+mt[4].href,component:Qtt}),L.jsx(Nt,{path:Zt+mt[5].href,component:nnt}),L.jsx(Nt,{path:Zt+mt[6].href,component:snt}),L.jsx(Nt,{path:Zt+mt[7].href,component:lnt}),L.jsx(Nt,{path:Zt+mt[8].href,component:fnt}),L.jsx(Nt,{path:Zt+mt[9].href,component:pnt}),L.jsx(Nt,{path:Zt+mt[10].href,component:vnt}),L.jsx(Nt,{path:Zt+mt[11].href,component:xnt}),L.jsx(Nt,{path:Zt+mt[12].href,component:bnt}),L.jsx(Nt,{path:Zt+mt[13].href,component:Tnt}),L.jsx(Nt,{path:Zt+mt[14].href,component:Rnt}),L.jsx(Nt,{path:Zt+mt[15].href,component:Nnt}),L.jsx(Nt,{path:Zt+mt[16].href,component:knt}),L.jsx(Nt,{path:Zt+mt[17].href,component:Unt}),L.jsx(Nt,{path:Zt+mt[18].href,component:Bnt}),L.jsx(Nt,{path:Zt+mt[19].href,component:Gnt}),L.jsx(Nt,{path:Zt+mt[20].href,component:jnt}),L.jsx(Nt,{path:Zt+mt[21].href,component:Znt}),L.jsx(Nt,{path:Zt+mt[22].href,component:Qnt}),L.jsx(Nt,{path:Zt+mt[23].href,component:rrt}),L.jsx(Nt,{children:L.jsx(Ott,{})})]})]}),srt="Andrew Smith | Computational Designer & Developer",ort="Andrew Smith is a multidisciplinary designer working between the practices of architecture, computational design, and web development.",art="https://atsmitharc.com",lrt="https://cdn.glitch.com/605e2a51-d45f-4d87-a285-9410ad350515%2Fhello-react-social.png?v=1616712747908",crt="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap",Do={title:srt,description:ort,url:art,image:lrt,font:crt};var Pt={},urt={get exports(){return Pt},set exports(n){Pt=n}},frt="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",drt=frt,hrt=drt;function KL(){}function JL(){}JL.resetWarningCache=KL;var prt=function(){function n(r,i,s,o,a,l){if(l!==hrt){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}n.isRequired=n;function e(){return n}var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:JL,resetWarningCache:KL};return t.PropTypes=t,t};urt.exports=prt();var mrt=typeof Element<"u",grt=typeof Map=="function",vrt=typeof Set=="function",yrt=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Xm(n,e){if(n===e)return!0;if(n&&e&&typeof n=="object"&&typeof e=="object"){if(n.constructor!==e.constructor)return!1;var t,r,i;if(Array.isArray(n)){if(t=n.length,t!=e.length)return!1;for(r=t;r--!==0;)if(!Xm(n[r],e[r]))return!1;return!0}var s;if(grt&&n instanceof Map&&e instanceof Map){if(n.size!==e.size)return!1;for(s=n.entries();!(r=s.next()).done;)if(!e.has(r.value[0]))return!1;for(s=n.entries();!(r=s.next()).done;)if(!Xm(r.value[1],e.get(r.value[0])))return!1;return!0}if(vrt&&n instanceof Set&&e instanceof Set){if(n.size!==e.size)return!1;for(s=n.entries();!(r=s.next()).done;)if(!e.has(r.value[0]))return!1;return!0}if(yrt&&ArrayBuffer.isView(n)&&ArrayBuffer.isView(e)){if(t=n.length,t!=e.length)return!1;for(r=t;r--!==0;)if(n[r]!==e[r])return!1;return!0}if(n.constructor===RegExp)return n.source===e.source&&n.flags===e.flags;if(n.valueOf!==Object.prototype.valueOf)return n.valueOf()===e.valueOf();if(n.toString!==Object.prototype.toString)return n.toString()===e.toString();if(i=Object.keys(n),t=i.length,t!==Object.keys(e).length)return!1;for(r=t;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,i[r]))return!1;if(mrt&&n instanceof Element)return!1;for(r=t;r--!==0;)if(!((i[r]==="_owner"||i[r]==="__v"||i[r]==="__o")&&n.$$typeof)&&!Xm(n[i[r]],e[i[r]]))return!1;return!0}return n!==n&&e!==e}var _rt=function(e,t){try{return Xm(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}},xrt=function(n,e,t,r,i,s,o,a){if(!n){var l;if(e===void 0)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var f=[t,r,i,s,o,a],d=0;l=new Error(e.replace(/%s/g,function(){return f[d++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}},JA=xrt,Srt=function(e,t,r,i){var s=r?r.call(i,e,t):void 0;if(s!==void 0)return!!s;if(e===t)return!0;if(typeof e!="object"||!e||typeof t!="object"||!t)return!1;var o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),f=0;f<o.length;f++){var d=o[f];if(!l(d))return!1;var h=e[d],p=t[d];if(s=r?r.call(i,h,p,d):void 0,s===!1||s===void 0&&h!==p)return!1}return!0};function Ln(){return Ln=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Ln.apply(this,arguments)}function eb(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,Tx(n,e)}function Tx(n,e){return Tx=Object.setPrototypeOf||function(t,r){return t.__proto__=r,t},Tx(n,e)}function QA(n,e){if(n==null)return{};var t,r,i={},s=Object.keys(n);for(r=0;r<s.length;r++)e.indexOf(t=s[r])>=0||(i[t]=n[t]);return i}var ot={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title",FRAGMENT:"Symbol(react.fragment)"},wrt={rel:["amphtml","canonical","alternate"]},brt={type:["application/ld+json"]},Ert={charset:"",name:["robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]},e2=Object.keys(ot).map(function(n){return ot[n]}),zg={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Mrt=Object.keys(zg).reduce(function(n,e){return n[zg[e]]=e,n},{}),Qc=function(n,e){for(var t=n.length-1;t>=0;t-=1){var r=n[t];if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}return null},Trt=function(n){var e=Qc(n,ot.TITLE),t=Qc(n,"titleTemplate");if(Array.isArray(e)&&(e=e.join("")),t&&e)return t.replace(/%s/g,function(){return e});var r=Qc(n,"defaultTitle");return e||r||void 0},Art=function(n){return Qc(n,"onChangeClientState")||function(){}},l0=function(n,e){return e.filter(function(t){return t[n]!==void 0}).map(function(t){return t[n]}).reduce(function(t,r){return Ln({},t,r)},{})},Crt=function(n,e){return e.filter(function(t){return t[ot.BASE]!==void 0}).map(function(t){return t[ot.BASE]}).reverse().reduce(function(t,r){if(!t.length)for(var i=Object.keys(r),s=0;s<i.length;s+=1){var o=i[s].toLowerCase();if(n.indexOf(o)!==-1&&r[o])return t.concat(r)}return t},[])},af=function(n,e,t){var r={};return t.filter(function(i){return!!Array.isArray(i[n])||(i[n]!==void 0&&console&&typeof console.warn=="function"&&console.warn("Helmet: "+n+' should be of type "Array". Instead found type "'+typeof i[n]+'"'),!1)}).map(function(i){return i[n]}).reverse().reduce(function(i,s){var o={};s.filter(function(h){for(var p,g=Object.keys(h),y=0;y<g.length;y+=1){var b=g[y],S=b.toLowerCase();e.indexOf(S)===-1||p==="rel"&&h[p].toLowerCase()==="canonical"||S==="rel"&&h[S].toLowerCase()==="stylesheet"||(p=S),e.indexOf(b)===-1||b!=="innerHTML"&&b!=="cssText"&&b!=="itemprop"||(p=b)}if(!p||!h[p])return!1;var m=h[p].toLowerCase();return r[p]||(r[p]={}),o[p]||(o[p]={}),!r[p][m]&&(o[p][m]=!0,!0)}).reverse().forEach(function(h){return i.push(h)});for(var a=Object.keys(o),l=0;l<a.length;l+=1){var f=a[l],d=Ln({},r[f],o[f]);r[f]=d}return i},[]).reverse()},Rrt=function(n,e){if(Array.isArray(n)&&n.length){for(var t=0;t<n.length;t+=1)if(n[t][e])return!0}return!1},QL=function(n){return Array.isArray(n)?n.join(""):n},c0=function(n,e){return Array.isArray(n)?n.reduce(function(t,r){return function(i,s){for(var o=Object.keys(i),a=0;a<o.length;a+=1)if(s[o[a]]&&s[o[a]].includes(i[o[a]]))return!0;return!1}(r,e)?t.priority.push(r):t.default.push(r),t},{priority:[],default:[]}):{default:n}},t2=function(n,e){var t;return Ln({},n,((t={})[e]=void 0,t))},Prt=[ot.NOSCRIPT,ot.SCRIPT,ot.STYLE],u0=function(n,e){return e===void 0&&(e=!0),e===!1?String(n):String(n).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},n2=function(n){return Object.keys(n).reduce(function(e,t){var r=n[t]!==void 0?t+'="'+n[t]+'"':""+t;return e?e+" "+r:r},"")},r2=function(n,e){return e===void 0&&(e={}),Object.keys(n).reduce(function(t,r){return t[zg[r]||r]=n[r],t},e)},Ym=function(n,e){return e.map(function(t,r){var i,s=((i={key:r})["data-rh"]=!0,i);return Object.keys(t).forEach(function(o){var a=zg[o]||o;a==="innerHTML"||a==="cssText"?s.dangerouslySetInnerHTML={__html:t.innerHTML||t.cssText}:s[a]=t[o]}),Mn.createElement(n,s)})},ki=function(n,e,t){switch(n){case ot.TITLE:return{toComponent:function(){return i=e.titleAttributes,(s={key:r=e.title})["data-rh"]=!0,o=r2(i,s),[Mn.createElement(ot.TITLE,o,r)];var r,i,s,o},toString:function(){return function(r,i,s,o){var a=n2(s),l=QL(i);return a?"<"+r+' data-rh="true" '+a+">"+u0(l,o)+"</"+r+">":"<"+r+' data-rh="true">'+u0(l,o)+"</"+r+">"}(n,e.title,e.titleAttributes,t)}};case"bodyAttributes":case"htmlAttributes":return{toComponent:function(){return r2(e)},toString:function(){return n2(e)}};default:return{toComponent:function(){return Ym(n,e)},toString:function(){return function(r,i,s){return i.reduce(function(o,a){var l=Object.keys(a).filter(function(h){return!(h==="innerHTML"||h==="cssText")}).reduce(function(h,p){var g=a[p]===void 0?p:p+'="'+u0(a[p],s)+'"';return h?h+" "+g:g},""),f=a.innerHTML||a.cssText||"",d=Prt.indexOf(r)===-1;return o+"<"+r+' data-rh="true" '+l+(d?"/>":">"+f+"</"+r+">")},"")}(n,e,t)}}}},Ax=function(n){var e=n.baseTag,t=n.bodyAttributes,r=n.encode,i=n.htmlAttributes,s=n.noscriptTags,o=n.styleTags,a=n.title,l=a===void 0?"":a,f=n.titleAttributes,d=n.linkTags,h=n.metaTags,p=n.scriptTags,g={toComponent:function(){},toString:function(){return""}};if(n.prioritizeSeoTags){var y=function(b){var S=b.linkTags,m=b.scriptTags,_=b.encode,w=c0(b.metaTags,Ert),M=c0(S,wrt),C=c0(m,brt);return{priorityMethods:{toComponent:function(){return[].concat(Ym(ot.META,w.priority),Ym(ot.LINK,M.priority),Ym(ot.SCRIPT,C.priority))},toString:function(){return ki(ot.META,w.priority,_)+" "+ki(ot.LINK,M.priority,_)+" "+ki(ot.SCRIPT,C.priority,_)}},metaTags:w.default,linkTags:M.default,scriptTags:C.default}}(n);g=y.priorityMethods,d=y.linkTags,h=y.metaTags,p=y.scriptTags}return{priority:g,base:ki(ot.BASE,e,r),bodyAttributes:ki("bodyAttributes",t,r),htmlAttributes:ki("htmlAttributes",i,r),link:ki(ot.LINK,d,r),meta:ki(ot.META,h,r),noscript:ki(ot.NOSCRIPT,s,r),script:ki(ot.SCRIPT,p,r),style:ki(ot.STYLE,o,r),title:ki(ot.TITLE,{title:l,titleAttributes:f},r)}},Dp=[],Cx=function(n,e){var t=this;e===void 0&&(e=typeof document<"u"),this.instances=[],this.value={setHelmet:function(r){t.context.helmet=r},helmetInstances:{get:function(){return t.canUseDOM?Dp:t.instances},add:function(r){(t.canUseDOM?Dp:t.instances).push(r)},remove:function(r){var i=(t.canUseDOM?Dp:t.instances).indexOf(r);(t.canUseDOM?Dp:t.instances).splice(i,1)}}},this.context=n,this.canUseDOM=e,e||(n.helmet=Ax({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))},eN=Mn.createContext({}),Lrt=Pt.shape({setHelmet:Pt.func,helmetInstances:Pt.shape({get:Pt.func,add:Pt.func,remove:Pt.func})}),Nrt=typeof document<"u",Fc=function(n){function e(t){var r;return(r=n.call(this,t)||this).helmetData=new Cx(r.props.context,e.canUseDOM),r}return eb(e,n),e.prototype.render=function(){return Mn.createElement(eN.Provider,{value:this.helmetData.value},this.props.children)},e}(ie.Component);Fc.canUseDOM=Nrt,Fc.propTypes={context:Pt.shape({helmet:Pt.shape()}),children:Pt.node.isRequired},Fc.defaultProps={context:{}},Fc.displayName="HelmetProvider";var Kl=function(n,e){var t,r=document.head||document.querySelector(ot.HEAD),i=r.querySelectorAll(n+"[data-rh]"),s=[].slice.call(i),o=[];return e&&e.length&&e.forEach(function(a){var l=document.createElement(n);for(var f in a)Object.prototype.hasOwnProperty.call(a,f)&&(f==="innerHTML"?l.innerHTML=a.innerHTML:f==="cssText"?l.styleSheet?l.styleSheet.cssText=a.cssText:l.appendChild(document.createTextNode(a.cssText)):l.setAttribute(f,a[f]===void 0?"":a[f]));l.setAttribute("data-rh","true"),s.some(function(d,h){return t=h,l.isEqualNode(d)})?s.splice(t,1):o.push(l)}),s.forEach(function(a){return a.parentNode.removeChild(a)}),o.forEach(function(a){return r.appendChild(a)}),{oldTags:s,newTags:o}},f0=function(n,e){var t=document.getElementsByTagName(n)[0];if(t){for(var r=t.getAttribute("data-rh"),i=r?r.split(","):[],s=[].concat(i),o=Object.keys(e),a=0;a<o.length;a+=1){var l=o[a],f=e[l]||"";t.getAttribute(l)!==f&&t.setAttribute(l,f),i.indexOf(l)===-1&&i.push(l);var d=s.indexOf(l);d!==-1&&s.splice(d,1)}for(var h=s.length-1;h>=0;h-=1)t.removeAttribute(s[h]);i.length===s.length?t.removeAttribute("data-rh"):t.getAttribute("data-rh")!==o.join(",")&&t.setAttribute("data-rh",o.join(","))}},i2=function(n,e){var t=n.baseTag,r=n.htmlAttributes,i=n.linkTags,s=n.metaTags,o=n.noscriptTags,a=n.onChangeClientState,l=n.scriptTags,f=n.styleTags,d=n.title,h=n.titleAttributes;f0(ot.BODY,n.bodyAttributes),f0(ot.HTML,r),function(b,S){b!==void 0&&document.title!==b&&(document.title=QL(b)),f0(ot.TITLE,S)}(d,h);var p={baseTag:Kl(ot.BASE,t),linkTags:Kl(ot.LINK,i),metaTags:Kl(ot.META,s),noscriptTags:Kl(ot.NOSCRIPT,o),scriptTags:Kl(ot.SCRIPT,l),styleTags:Kl(ot.STYLE,f)},g={},y={};Object.keys(p).forEach(function(b){var S=p[b],m=S.newTags,_=S.oldTags;m.length&&(g[b]=m),_.length&&(y[b]=p[b].oldTags)}),e&&e(),a(n,g,y)},lf=null,Bg=function(n){function e(){for(var r,i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return(r=n.call.apply(n,[this].concat(s))||this).rendered=!1,r}eb(e,n);var t=e.prototype;return t.shouldComponentUpdate=function(r){return!Srt(r,this.props)},t.componentDidUpdate=function(){this.emitChange()},t.componentWillUnmount=function(){this.props.context.helmetInstances.remove(this),this.emitChange()},t.emitChange=function(){var r,i,s=this.props.context,o=s.setHelmet,a=null,l=(r=s.helmetInstances.get().map(function(f){var d=Ln({},f.props);return delete d.context,d}),{baseTag:Crt(["href"],r),bodyAttributes:l0("bodyAttributes",r),defer:Qc(r,"defer"),encode:Qc(r,"encodeSpecialCharacters"),htmlAttributes:l0("htmlAttributes",r),linkTags:af(ot.LINK,["rel","href"],r),metaTags:af(ot.META,["name","charset","http-equiv","property","itemprop"],r),noscriptTags:af(ot.NOSCRIPT,["innerHTML"],r),onChangeClientState:Art(r),scriptTags:af(ot.SCRIPT,["src","innerHTML"],r),styleTags:af(ot.STYLE,["cssText"],r),title:Trt(r),titleAttributes:l0("titleAttributes",r),prioritizeSeoTags:Rrt(r,"prioritizeSeoTags")});Fc.canUseDOM?(i=l,lf&&cancelAnimationFrame(lf),i.defer?lf=requestAnimationFrame(function(){i2(i,function(){lf=null})}):(i2(i),lf=null)):Ax&&(a=Ax(l)),o(a)},t.init=function(){this.rendered||(this.rendered=!0,this.props.context.helmetInstances.add(this),this.emitChange())},t.render=function(){return this.init(),null},e}(ie.Component);Bg.propTypes={context:Lrt.isRequired},Bg.displayName="HelmetDispatcher";var Irt=["children"],Drt=["children"],Zm=function(n){function e(){return n.apply(this,arguments)||this}eb(e,n);var t=e.prototype;return t.shouldComponentUpdate=function(r){return!_rt(t2(this.props,"helmetData"),t2(r,"helmetData"))},t.mapNestedChildrenToProps=function(r,i){if(!i)return null;switch(r.type){case ot.SCRIPT:case ot.NOSCRIPT:return{innerHTML:i};case ot.STYLE:return{cssText:i};default:throw new Error("<"+r.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")}},t.flattenArrayTypeChildren=function(r){var i,s=r.child,o=r.arrayTypeChildren;return Ln({},o,((i={})[s.type]=[].concat(o[s.type]||[],[Ln({},r.newChildProps,this.mapNestedChildrenToProps(s,r.nestedChildren))]),i))},t.mapObjectTypeChildren=function(r){var i,s,o=r.child,a=r.newProps,l=r.newChildProps,f=r.nestedChildren;switch(o.type){case ot.TITLE:return Ln({},a,((i={})[o.type]=f,i.titleAttributes=Ln({},l),i));case ot.BODY:return Ln({},a,{bodyAttributes:Ln({},l)});case ot.HTML:return Ln({},a,{htmlAttributes:Ln({},l)});default:return Ln({},a,((s={})[o.type]=Ln({},l),s))}},t.mapArrayTypeChildrenToProps=function(r,i){var s=Ln({},i);return Object.keys(r).forEach(function(o){var a;s=Ln({},s,((a={})[o]=r[o],a))}),s},t.warnOnInvalidChildren=function(r,i){return JA(e2.some(function(s){return r.type===s}),typeof r.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":"Only elements types "+e2.join(", ")+" are allowed. Helmet does not support rendering <"+r.type+"> elements. Refer to our API for more information."),JA(!i||typeof i=="string"||Array.isArray(i)&&!i.some(function(s){return typeof s!="string"}),"Helmet expects a string as a child of <"+r.type+">. Did you forget to wrap your children in braces? ( <"+r.type+">{``}</"+r.type+"> ) Refer to our API for more information."),!0},t.mapChildrenToProps=function(r,i){var s=this,o={};return Mn.Children.forEach(r,function(a){if(a&&a.props){var l=a.props,f=l.children,d=QA(l,Irt),h=Object.keys(d).reduce(function(g,y){return g[Mrt[y]||y]=d[y],g},{}),p=a.type;switch(typeof p=="symbol"?p=p.toString():s.warnOnInvalidChildren(a,f),p){case ot.FRAGMENT:i=s.mapChildrenToProps(f,i);break;case ot.LINK:case ot.META:case ot.NOSCRIPT:case ot.SCRIPT:case ot.STYLE:o=s.flattenArrayTypeChildren({child:a,arrayTypeChildren:o,newChildProps:h,nestedChildren:f});break;default:i=s.mapObjectTypeChildren({child:a,newProps:i,newChildProps:h,nestedChildren:f})}}}),this.mapArrayTypeChildrenToProps(o,i)},t.render=function(){var r=this.props,i=r.children,s=QA(r,Drt),o=Ln({},s),a=s.helmetData;return i&&(o=this.mapChildrenToProps(i,o)),!a||a instanceof Cx||(a=new Cx(a.context,a.instances)),a?Mn.createElement(Bg,Ln({},o,{context:a.value,helmetData:void 0})):Mn.createElement(eN.Consumer,null,function(l){return Mn.createElement(Bg,Ln({},o,{context:l}))})},e}(ie.Component);Zm.propTypes={base:Pt.object,bodyAttributes:Pt.object,children:Pt.oneOfType([Pt.arrayOf(Pt.node),Pt.node]),defaultTitle:Pt.string,defer:Pt.bool,encodeSpecialCharacters:Pt.bool,htmlAttributes:Pt.object,link:Pt.arrayOf(Pt.object),meta:Pt.arrayOf(Pt.object),noscript:Pt.arrayOf(Pt.object),onChangeClientState:Pt.func,script:Pt.arrayOf(Pt.object),style:Pt.arrayOf(Pt.object),title:Pt.string,titleAttributes:Pt.object,titleTemplate:Pt.string,prioritizeSeoTags:Pt.bool,helmetData:Pt.object},Zm.defaultProps={defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1},Zm.displayName="Helmet";const krt=()=>{const[n]=PS();function e(r){const i=r.split("/").filter(Boolean),s=i.length>0?i[i.length-1]:"";function o(a){for(let l=0;l<mt.length;l++)if(mt[l].href===a)return mt[l].name;return Do.title}if(s){const a="Andrew Smith | ";switch(s){case"about":return a+"About";case"contact":return a+"Contact";case"projects":return a+"Projects";case"undergraduate":return a+"Projects - Undergraduate";case"graduate":return a+"Projects - Graduate";case"pro-bono":return a+"Projects - Pro Bono";case"professional":return a+"Projects - Professional";default:return o(s)}}else return Do.title}const t=e(n);return L.jsxs(Zm,{children:[L.jsx("title",{children:`${t}`}),L.jsx("meta",{name:"description",content:Do.description}),L.jsx("meta",{name:"robots",content:"index,follow"}),L.jsx("link",{rel:"canonical",href:Do.url}),L.jsx("meta",{property:"og:title",content:`${t}`}),L.jsx("meta",{property:"og:type",content:"article"}),L.jsx("meta",{property:"og:url",content:Do.url}),L.jsx("meta",{property:"og:description",content:Do.description}),L.jsx("meta",{property:"og:image",content:Do.image}),L.jsx("link",{rel:"preload",href:Do.font,as:"font",type:"font/woff2",crossOrigin:"anonymous"})]})},tN=n=>Array.isArray(n),nN=n=>tN(n)?n:[n];let Ort=function(n){let e=function(g){return nN(g).forEach(y=>{var b;return p.set(Symbol((b=y.char)==null?void 0:b.innerText),i({...y}))}),this},t=()=>l().filter(g=>g.typeable),r=function(g,y){let b=[...p.keys()];p.set(b[g],i(y))},i=g=>(g.shouldPauseCursor=function(){return Boolean(this.typeable||this.cursorable||this.deletable)},g),s=function(){p.forEach(g=>delete g.done)},o=function(){p=new Map,e(n)},a=()=>p,l=()=>Array.from(p.values()),f=g=>p.delete(g),d=(g=!1)=>g?l():l().filter(y=>!y.done),h=(g,y=!1)=>y?p.delete(g):p.get(g).done=!0,p=new Map;return e(n),{add:e,set:r,wipe:o,reset:s,destroy:f,done:h,getItems:d,getQueue:a,getTypeable:t}};const rN=n=>Array.from(n),tb=n=>document.createTextNode(n);let nb=n=>([...n.childNodes].forEach(e=>{if(e.nodeValue){[...e.nodeValue].forEach(t=>{e.parentNode.insertBefore(tb(t),e)}),e.remove();return}nb(e)}),n);const iN=n=>{let e=document.implementation.createHTMLDocument();return e.body.innerHTML=n,nb(e.body)},sN="data-typeit-id",al="ti-cursor",$rt="END",Urt={started:!1,completed:!1,frozen:!1,destroyed:!1},zc={breakLines:!0,cursor:{autoPause:!0,autoPauseDelay:500,animation:{frames:[0,0,1].map(n=>({opacity:n})),options:{iterations:1/0,easing:"steps(2, start)",fill:"forwards"}}},cursorChar:"|",cursorSpeed:1e3,deleteSpeed:null,html:!0,lifeLike:!0,loop:!1,loopDelay:750,nextStringDelay:750,speed:100,startDelay:250,startDelete:!1,strings:[],waitUntilVisible:!1,beforeString:()=>{},afterString:()=>{},beforeStep:()=>{},afterStep:()=>{},afterComplete:()=>{}},Frt=`[${sN}]:before {content: '.'; display: inline-block; width: 0; visibility: hidden;}`;function oN(n,e=!1,t=!1){let r=n.querySelector(`.${al}`),i=document.createTreeWalker(n,NodeFilter.SHOW_ALL,{acceptNode:a=>{var l,f;if(r&&t){if((l=a.classList)!=null&&l.contains(al))return NodeFilter.FILTER_ACCEPT;if(r.contains(a))return NodeFilter.FILTER_REJECT}return(f=a.classList)!=null&&f.contains(al)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}}),s,o=[];for(;s=i.nextNode();)s.originalParent||(s.originalParent=s.parentNode),o.push(s);return e?o.reverse():o}function zrt(n){return oN(iN(n))}function Brt(n,e=!0){return e?zrt(n):rN(n).map(tb)}const Km=n=>document.createElement(n),aN=(n,e="")=>{let t=Km("style");t.id=e,t.appendChild(tb(n)),document.head.appendChild(t)},s2=n=>(tN(n)||(n=[n/2,n/2]),n),o2=(n,e)=>Math.abs(Math.random()*(n+e-(n-e))+(n-e));let a2=n=>n/2;function Hrt(n){let{speed:e,deleteSpeed:t,lifeLike:r}=n;return t=t!==null?t:e/3,r?[o2(e,a2(e)),o2(t,a2(t))]:[e,t]}const Vrt=n=>(n.forEach(clearTimeout),[]),Grt=()=>Math.random().toString().substring(2,9),rb=n=>"value"in n;let qrt=n=>rb(n)?rN(n.value):oN(n,!0).filter(e=>!(e.childNodes.length>0));const Wrt=(n,e)=>{new IntersectionObserver((r,i)=>{r.forEach(s=>{s.isIntersecting&&(e(),i.unobserve(n))})},{threshold:1}).observe(n)};let Jl=n=>typeof n=="function"?n():n;const lN=n=>Number.isInteger(n);let ib=(n,e=document,t=!1)=>e[`querySelector${t?"All":""}`](n),jrt=n=>/body/i.test(n==null?void 0:n.tagName),Xrt=(n,e)=>{if(rb(n)){n.value=`${n.value}${e.textContent}`;return}e.innerHTML="";let t=jrt(e.originalParent)?n:e.originalParent||n;t.insertBefore(e,ib("."+al,t)||null)},Yrt=(n,e,t)=>Math.min(Math.max(e+n,0),t.length);const Af=(n,e)=>Object.assign({},n,e),Zrt=(n,e)=>{if(!n)return;let t=n.parentNode;(t.childNodes.length>1||t.isSameNode(e)?n:t).remove()},Krt=(n,e,t)=>{let r=e[t-1],i=ib(`.${al}`,n);n=(r==null?void 0:r.parentNode)||n,n.insertBefore(i,r||null)};function Jrt(n){return typeof n=="string"?ib(n):n}const Qrt=n=>/<(.+)>(.*?)<\/(.+)>/.test(n.outerHTML);let eit=(n,e,t)=>new Promise(r=>{let i=async()=>{await n(),r()};t.push(setTimeout(i,e||0))}),tit={"font-family":"","font-weight":"","font-size":"","font-style":"","line-height":"",color:"",transform:"translateX(-.125em)"},nit=(n,e)=>{let r=`${`[${sN}='${n}']`} .${al}`,i=getComputedStyle(e),s=Object.entries(tit).reduce((o,[a,l])=>`${o} ${a}: var(--ti-cursor-${a}, ${l||i[a]});`,"");aN(`${r} { display: inline-block; width: 0; ${s} }`,n)};const kp=(n,e)=>new Array(e).fill(n),l2=({queueItems:n,selector:e,cursorPosition:t,to:r})=>{if(lN(e))return e*-1;let i=new RegExp($rt,"i").test(r),s=e?[...n].reverse().findIndex(({char:a})=>{let l=a.parentElement,f=l.matches(e);return i&&f?!0:f&&l.firstChild.isSameNode(a)}):-1;s<0&&(s=i?0:n.length-1);let o=i?0:1;return s-t+o};let Hg=n=>new Promise(e=>{requestAnimationFrame(async()=>{e(await n())})}),cN=n=>n==null?void 0:n.getAnimations().find(e=>e.id===n.dataset.tiAnimationId),uN=({cursor:n,frames:e,options:t})=>{let r=n.animate(e,t);return r.pause(),r.id=n.dataset.tiAnimationId,Hg(()=>{Hg(()=>{r.play()})}),r},rit=({cursor:n,options:e,cursorOptions:t})=>{if(!n||!t)return;let r=cN(n),i;r&&(e.delay=r.effect.getComputedTiming().delay,i=r.currentTime,r.cancel());let s=uN({cursor:n,frames:t.animation.frames,options:e});return i&&(s.currentTime=i),s},c2=n=>{var e;return(e=n.func)==null?void 0:e.call(null)},iit=async({index:n,queueItems:e,wait:t,cursor:r,cursorOptions:i})=>{let s=e[n][1],o=[],a=n,l=s,f=()=>l&&!l.delay,d=s.shouldPauseCursor()&&i.autoPause;for(;f();)o.push(l),f()&&a++,l=e[a]?e[a][1]:null;if(o.length)return await Hg(async()=>{for(let g of o)await c2(g)}),a-1;let h=cN(r),p;return h&&(p={...h.effect.getComputedTiming(),delay:d?i.autoPauseDelay:0}),await t(async()=>{h&&d&&h.cancel(),await Hg(()=>{c2(s)})},s.delay),await rit({cursor:r,options:p,cursorOptions:i}),n},sit=n=>{var e,t;if(typeof n=="object"){let r={},{frames:i,options:s}=zc.cursor.animation;return r.animation=n.animation||{},r.animation.frames=((e=n.animation)==null?void 0:e.frames)||i,r.animation.options=Af(s,((t=n.animation)==null?void 0:t.options)||{}),r.autoPause=n.autoPause??zc.cursor.autoPause,r.autoPauseDelay=n.autoPauseDelay||zc.cursor.autoPauseDelay,r}return n===!0?zc.cursor:n};const oit=function(n,e={}){let t=async(D,z,H=!1)=>{W.frozen&&await new Promise(X=>{this.unfreeze=()=>{W.frozen=!1,X()}}),H||await J.beforeStep(this),await eit(D,z,R),H||await J.afterStep(this)},r=(D,z)=>iit({index:D,queueItems:z,wait:t,cursor:ue,cursorOptions:J.cursor}),i=D=>Zrt(D,k),s=()=>rb(k),o=(D=0)=>Hrt(J)[D],a=()=>qrt(k),l=(D={})=>{let z=D.delay;z&&Y.add({delay:z})},f=(D,z)=>(Y.add(D),l(z),this),d=()=>B??N,h=(D={})=>[{func:()=>C(D)},{func:()=>C(J)}],p=D=>{let z=J.nextStringDelay;Y.add([{delay:z[0]},...D,{delay:z[1]}])},g=()=>{if(s())return;let D=Km("span");return D.className=al,te?(D.innerHTML=iN(J.cursorChar).innerHTML,D):(D.style.visibility="hidden",D)},y=async()=>{if(!s()&&ue&&k.appendChild(ue),te){nit(V,k),ue.dataset.tiAnimationId=V;let{animation:D}=J.cursor,{frames:z,options:H}=D;uN({frames:z,cursor:ue,options:{duration:J.cursorSpeed,...H}})}},b=()=>{let D=J.strings.filter(z=>!!z);D.forEach((z,H)=>{if(this.type(z),H+1===D.length)return;let X=J.breakLines?[{func:()=>M(Km("BR")),typeable:!0}]:kp({func:P,delay:o(1)},Y.getTypeable().length);p(X)})},S=async D=>{let z=d();z&&await w({value:z});let H=a().map(X=>[Symbol(),{func:P,delay:o(1),deletable:!0,shouldPauseCursor:()=>!0}]);for(let X=0;X<H.length;X++)await r(X,H);Y.reset(),Y.set(0,{delay:D})},m=D=>{let z=k.innerHTML;return z?(k.innerHTML="",J.startDelete?(k.innerHTML=z,nb(k),p(kp({func:P,delay:o(1),deletable:!0},a().length)),D):z.replace(/<!--(.+?)-->/g,"").trim().split(/<br(?:\s*?)(?:\/)?>/).concat(D)):D},_=async(D=!0)=>{W.started=!0;let z=H=>{Y.done(H,!D)};try{let H=[...Y.getQueue()];for(let ne=0;ne<H.length;ne++){let[K,ae]=H[ne];if(!ae.done){if(!ae.deletable||ae.deletable&&a().length){let ge=await r(ne,H);Array(ge-ne).fill(ne+1).map((Me,Ee)=>Me+Ee).forEach(Me=>{let[Ee]=H[Me];z(Ee)}),ne=ge}z(K)}}if(!D)return this;if(W.completed=!0,await J.afterComplete(this),!J.loop)throw"";let X=J.loopDelay;t(async()=>{await S(X[0]),_()},X[1])}catch{}return this},w=async D=>{N=Yrt(D,N,a()),Krt(k,a(),N)},M=D=>Xrt(k,D),C=async D=>J=Af(J,D),A=async()=>{if(s()){k.value="";return}a().forEach(i)},P=()=>{let D=a();D.length&&(s()?k.value=k.value.slice(0,-1):i(D[N]))};this.break=function(D){return f({func:()=>M(Km("BR")),typeable:!0},D)},this.delete=function(D=null,z={}){D=Jl(D);let H=h(z),X=D,{instant:ne,to:K}=z,ae=Y.getTypeable(),ge=(()=>X===null?ae.length:lN(X)?X:l2({queueItems:ae,selector:X,cursorPosition:d(),to:K}))();return f([H[0],...kp({func:P,delay:ne?0:o(1),deletable:!0},ge),H[1]],z)},this.empty=function(D={}){return f({func:A},D)},this.exec=function(D,z={}){let H=h(z);return f([H[0],{func:()=>D(this)},H[1]],z)},this.move=function(D,z={}){D=Jl(D);let H=h(z),{instant:X,to:ne}=z,K=l2({queueItems:Y.getTypeable(),selector:D===null?"":D,to:ne,cursorPosition:d()}),ae=K<0?-1:1;return B=d()+K,f([H[0],...kp({func:()=>w(ae),delay:X?0:o(),cursorable:!0},Math.abs(K)),H[1]],z)},this.options=function(D,z={}){return D=Jl(D),C(D),f({},z)},this.pause=function(D,z={}){return f({delay:Jl(D)},z)},this.type=function(D,z={}){D=Jl(D);let{instant:H}=z,X=h(z),K=Brt(D,J.html).map(ge=>({func:()=>M(ge),char:ge,delay:H||Qrt(ge)?0:o(),typeable:ge.nodeType===Node.TEXT_NODE})),ae=[X[0],{func:async()=>await J.beforeString(D,this)},...K,{func:async()=>await J.afterString(D,this)},X[1]];return f(ae,z)},this.is=function(D){return W[D]},this.destroy=function(D=!0){R=Vrt(R),Jl(D)&&ue&&i(ue),W.destroyed=!0},this.freeze=function(){W.frozen=!0},this.unfreeze=()=>{},this.reset=function(D){!this.is("destroyed")&&this.destroy(),D?(Y.wipe(),D(this)):Y.reset(),N=0;for(let z in W)W[z]=!1;return k[s()?"value":"innerHTML"]="",this},this.go=function(){return W.started?this:(y(),J.waitUntilVisible?(Wrt(k,_.bind(this)),this):(_(),this))},this.flush=function(D=()=>{}){return y(),_(!1).then(D),this},this.getQueue=()=>Y,this.getOptions=()=>J,this.updateOptions=D=>C(D),this.getElement=()=>k;let k=Jrt(n),R=[],N=0,B=null,W=Af({},Urt);e.cursor=sit(e.cursor??zc.cursor);let J=Af(zc,e);J=Af(J,{html:!s()&&J.html,nextStringDelay:s2(J.nextStringDelay),loopDelay:s2(J.loopDelay)});let V=Grt(),Y=Ort([{delay:J.startDelay}]);k.dataset.typeitId=V,aN(Frt);let te=!!J.cursor&&!s(),ue=g();J.strings=m(nN(J.strings)),J.strings.length&&b()},ait={as:"span",options:{},getBeforeInit:n=>n,getAfterInit:n=>n},lit=ie.forwardRef((n,e)=>{const{as:t}=n;return Mn.createElement(t,{ref:e,...n})}),fN=n=>{const e=ie.useRef(null),t=ie.useRef(null),{options:r,children:i,getBeforeInit:s,getAfterInit:o,...a}=n,[l,f]=ie.useState(!0),[d,h]=ie.useState(null);function p(){const y=Object.assign({},r);i&&e.current&&(y.strings=e.current.innerHTML),h(y)}function g(){t.current=new oit(e.current,d),t.current=s(t.current),t.current.go(),t.current=o(t.current)}return ie.useEffect(()=>{p(),f(!1)},[r]),ie.useEffect(()=>{var y;d&&((y=t.current)!=null&&y.updateOptions(d)||g())},[d]),ie.useEffect(()=>()=>{var y;return(y=t.current)==null?void 0:y.destroy()},[]),Mn.createElement(lit,{ref:e,children:l?i:null,style:{opacity:l?0:1},...a})};fN.defaultProps=ait;const Op=[{"--color-0":"#000000","--color-1":"#ffffff","--color-2":"#ff0000"},{"--color-0":"#6A7BA2","--color-1":"#FFDFDE","--color-2":"#FFA500"},{"--color-0":"#00203F","--color-1":"#ADEFD1","--color-2":"#FFFF00"},{"--color-0":"#7b9acc","--color-1":"#FCF6F5","--color-2":"#008000"},{"--color-0":"#990011","--color-1":"#FCF6F5","--color-2":"#0000FF"},{"--color-0":"#00B1D2","--color-1":"#FDDB27","--color-2":"#EE82EE"}],cit=n=>{const[e,t]=ie.useState({colorSchemeIndex:0,darkMode:!1}),r=()=>{t(s=>{const o=!s.darkMode;return i({...s,darkMode:o}),{...s,darkMode:o}})},i=({colorSchemeIndex:s,darkMode:o})=>{const a=o?{"--color-0":Op[s]["--color-1"],"--color-1":Op[s]["--color-0"],"--color-2":Op[s]["--color-2"]}:Op[s];for(const l in a)document.documentElement.style.setProperty(l,a[l])};return L.jsx("div",{className:"theme-buttons",children:L.jsx("button",{role:"button","aria-pressed":"false",title:"Toggle Dark Mode",className:"icon",onClick:r,children:e.darkMode?L.jsx(Un,{icon:DJe}):L.jsx(Un,{icon:TJe})})})};function uit(){function n(g){let y=g.split("/"),b=y[y.length-1];return[y.slice(0,2).join("/"),b]}function e(g,y,b){if(g==="/projects"&&window.innerWidth>800){for(const S of b)if(S.href===y)return!0}return!1}const t=ie.useRef(),[r,i]=ie.useState(!1),[s]=PS(),[o,a]=n(s),[l,f]=ie.useState(e(o,a,mt));ie.useEffect(()=>{function g(){const[y,b]=n(s);f(e(y,b,mt))}return g(),window.addEventListener("resize",g),()=>{window.removeEventListener("resize",g)}},[s,mt]),ie.useEffect(()=>{r?t.current.classList.add("responsive_nav"):t.current.classList.remove("responsive_nav")},[r]);function d(){i(!r)}function h(){i(!1)}const p=g=>{const y=o===g.href;return L.jsx($r,{...g,className:y?"activeLink":"animatedLink",onClick:h,children:g.children})};return L.jsxs("header",{className:l?"project-header":"",children:[L.jsx("div",{"aria-label":"Andrew Smith Logo",className:"logomation",children:L.jsx($r,{href:"/",children:L.jsx(fN,{getBeforeInit:g=>(g.type("a_s"),g)})})}),L.jsxs("nav",{ref:t,children:[L.jsx(p,{href:"/",children:"Home"}),L.jsx(p,{href:"/projects",children:"Projects"}),L.jsx(p,{href:"/about",children:"About"}),L.jsx(p,{href:"/contact",children:"Contact"}),L.jsx(cit,{}),L.jsx("button",{title:"Close Menu Button",className:"icon nav-close-btn",onClick:h,"aria-label":"Close Menu Button",children:L.jsx(Un,{icon:IJe})})]}),L.jsx("button",{title:"Menu Button",className:"icon nav-btn",onClick:d,"aria-label":"Menu Button",children:L.jsx(Un,{icon:MJe})})]})}var fit={prefix:"fab",iconName:"linkedin-in",icon:[448,512,[],"f0e1","M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"]},dit={prefix:"fab",iconName:"creative-commons-zero",icon:[496,512,[],"f4f3","M247.6 8C389.4 8 496 118.1 496 256c0 147.1-118.5 248-248.4 248C113.6 504 0 394.5 0 256 0 123.1 104.7 8 247.6 8zm.8 44.7C130.2 52.7 44.7 150.6 44.7 256c0 109.8 91.2 202.8 203.7 202.8 103.2 0 202.8-81.1 202.8-202.8.1-113.8-90.2-203.3-202.8-203.3zm-.4 60.5c-81.9 0-102.5 77.3-102.5 142.8 0 65.5 20.6 142.8 102.5 142.8S350.5 321.5 350.5 256c0-65.5-20.6-142.8-102.5-142.8zm0 53.9c3.3 0 6.4.5 9.2 1.2 5.9 5.1 8.8 12.1 3.1 21.9l-54.5 100.2c-1.7-12.7-1.9-25.1-1.9-34.4 0-28.8 2-88.9 44.1-88.9zm40.8 46.2c2.9 15.4 3.3 31.4 3.3 42.7 0 28.9-2 88.9-44.1 88.9-13.5 0-32.6-7.7-20.1-26.4l60.9-105.2z"]},hit={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},pit={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]};function mit(){return L.jsxs("footer",{role:"contentinfo",children:[L.jsxs("ul",{children:[L.jsx("li",{children:L.jsx("a",{role:"link",className:"icon",title:"My LinkedIn",href:"https://www.linkedin.com/in/atsmitharc/",rel:"noopener noreferrer",target:"_blank","aria-label":"LinkedIn Profile",children:L.jsx(Un,{icon:fit})})}),L.jsx("li",{children:L.jsx("a",{role:"link",className:"icon",title:"My Github",href:"https://github.com/ATSmithARC",rel:"noopener noreferrer",target:"_blank","aria-label":"GitHub Profile",children:L.jsx(Un,{icon:hit})})}),L.jsx("li",{children:L.jsx($r,{href:"./contact",children:L.jsx("a",{role:"link",className:"icon",title:"Send Email",href:"mailto:atsmitharc@gmail.com","aria-label":"Send Email",children:L.jsx(Un,{icon:PJe})})})}),L.jsx("li",{children:L.jsx("a",{role:"link",className:"icon",title:"My YouTube",href:"https://www.youtube.com/channel/UCyatriboiXwvFkkuPRFMRxw",rel:"noopener noreferrer",target:"_blank","aria-label":"YouTube Channel",children:L.jsx(Un,{icon:pit})})}),L.jsx("li",{children:L.jsx("a",{role:"link",className:"icon ar",title:"My Archinect",href:"https://archinect.com/atsmitharc",rel:"noopener noreferrer",target:"_blank","aria-label":"Archinect Profile",children:L.jsx(Un,{icon:CJe})})})]}),L.jsxs("a",{role:"link",href:"https://github.com/ATSmithARC/Portfolio",title:"Design By Andrew_Smith (See Source)","aria-label":"Andrew_Smith | _2023 | Copenhagen_DK",children:["Andrew_Smith | ",L.jsx(Un,{icon:dit}),"_2023 | Copenhagen_DK"]})]})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zd="160",git={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},vit={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},dN=0,Rx=1,hN=2,yit=3,pN=0,Ov=1,Bf=2,Ki=3,po=0,zr=1,As=2,_it=2,so=0,ll=1,Px=2,Lx=3,Nx=4,mN=5,jo=100,gN=101,vN=102,Ix=103,Dx=104,yN=200,_N=201,xN=202,SN=203,Vg=204,Gg=205,wN=206,bN=207,EN=208,MN=209,TN=210,AN=211,CN=212,RN=213,PN=214,LN=0,NN=1,IN=2,md=3,DN=4,kN=5,ON=6,$N=7,Kd=0,UN=1,FN=2,Ns=0,zN=1,BN=2,HN=3,sb=4,VN=5,GN=6,kx="attached",qN="detached",$v=300,mo=301,pa=302,gd=303,vd=304,bu=306,yd=1e3,Pr=1001,_d=1002,Nn=1003,qg=1004,xit=1004,Hf=1005,Sit=1005,Dn=1006,ob=1007,wit=1007,ma=1008,bit=1008,Is=1009,WN=1010,jN=1011,Uv=1012,ab=1013,no=1014,ns=1015,du=1016,lb=1017,cb=1018,oa=1020,XN=1021,Ur=1023,YN=1024,ZN=1025,aa=1026,Sl=1027,KN=1028,ub=1029,JN=1030,fb=1031,db=1033,Jm=33776,Qm=33777,eg=33778,tg=33779,Ox=35840,$x=35841,Ux=35842,Fx=35843,hb=36196,zx=37492,Bx=37496,Hx=37808,Vx=37809,Gx=37810,qx=37811,Wx=37812,jx=37813,Xx=37814,Yx=37815,Zx=37816,Kx=37817,Jx=37818,Qx=37819,eS=37820,tS=37821,ng=36492,nS=36494,rS=36495,QN=36283,iS=36284,sS=36285,oS=36286,eI=2200,tI=2201,nI=2202,xd=2300,Sd=2301,rg=2302,tl=2400,nl=2401,wd=2402,Fv=2500,pb=2501,Eit=0,Mit=1,Tit=2,mb=3e3,la=3001,rI=3200,iI=3201,Sa=0,sI=1,pi="",Vn="srgb",ks="srgb-linear",zv="display-p3",Jd="display-p3-linear",bd="linear",Qt="srgb",Ed="rec709",Md="p3",Ait=0,ja=7680,Cit=7681,Rit=7682,Pit=7683,Lit=34055,Nit=34056,Iit=5386,Dit=512,kit=513,Oit=514,$it=515,Uit=516,Fit=517,zit=518,aS=519,oI=512,aI=513,lI=514,gb=515,cI=516,uI=517,fI=518,dI=519,Td=35044,Bit=35048,Hit=35040,Vit=35045,Git=35049,qit=35041,Wit=35046,jit=35050,Xit=35042,Yit="100",lS="300 es",Wg=1035,rs=2e3,hu=2001;class xo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const i=r.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Er=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let u2=1234567;const cl=Math.PI/180,pu=180/Math.PI;function yi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Er[n&255]+Er[n>>8&255]+Er[n>>16&255]+Er[n>>24&255]+"-"+Er[e&255]+Er[e>>8&255]+"-"+Er[e>>16&15|64]+Er[e>>24&255]+"-"+Er[t&63|128]+Er[t>>8&255]+"-"+Er[t>>16&255]+Er[t>>24&255]+Er[r&255]+Er[r>>8&255]+Er[r>>16&255]+Er[r>>24&255]).toLowerCase()}function En(n,e,t){return Math.max(e,Math.min(t,n))}function vb(n,e){return(n%e+e)%e}function Zit(n,e,t,r,i){return r+(n-e)*(i-r)/(t-e)}function Kit(n,e,t){return n!==e?(t-n)/(e-n):0}function Vf(n,e,t){return(1-t)*n+t*e}function Jit(n,e,t,r){return Vf(n,e,1-Math.exp(-t*r))}function Qit(n,e=1){return e-Math.abs(vb(n,e*2)-e)}function est(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function tst(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function nst(n,e){return n+Math.floor(Math.random()*(e-n+1))}function rst(n,e){return n+Math.random()*(e-n)}function ist(n){return n*(.5-Math.random())}function sst(n){n!==void 0&&(u2=n);let e=u2+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ost(n){return n*cl}function ast(n){return n*pu}function cS(n){return(n&n-1)===0&&n!==0}function lst(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function jg(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function cst(n,e,t,r,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),f=s((e+r)/2),d=o((e+r)/2),h=s((e-r)/2),p=o((e-r)/2),g=s((r-e)/2),y=o((r-e)/2);switch(i){case"XYX":n.set(a*d,l*h,l*p,a*f);break;case"YZY":n.set(l*p,a*d,l*h,a*f);break;case"ZXZ":n.set(l*h,l*p,a*d,a*f);break;case"XZX":n.set(a*d,l*y,l*g,a*f);break;case"YXY":n.set(l*g,a*d,l*y,a*f);break;case"ZYZ":n.set(l*y,l*g,a*d,a*f);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Zr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function St(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const hI={DEG2RAD:cl,RAD2DEG:pu,generateUUID:yi,clamp:En,euclideanModulo:vb,mapLinear:Zit,inverseLerp:Kit,lerp:Vf,damp:Jit,pingpong:Qit,smoothstep:est,smootherstep:tst,randInt:nst,randFloat:rst,randFloatSpread:ist,seededRandom:sst,degToRad:ost,radToDeg:ast,isPowerOfTwo:cS,ceilPowerOfTwo:lst,floorPowerOfTwo:jg,setQuaternionFromProperEuler:cst,normalize:St,denormalize:Zr};class pe{constructor(e=0,t=0){pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,i=e.elements;return this.x=i[0]*t+i[3]*r+i[6],this.y=i[1]*t+i[4]*r+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(En(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*r-o*i+e.x,this.y=s*i+o*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Mt{constructor(e,t,r,i,s,o,a,l,f){Mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,i,s,o,a,l,f)}set(e,t,r,i,s,o,a,l,f){const d=this.elements;return d[0]=e,d[1]=i,d[2]=a,d[3]=t,d[4]=s,d[5]=l,d[6]=r,d[7]=o,d[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,i=t.elements,s=this.elements,o=r[0],a=r[3],l=r[6],f=r[1],d=r[4],h=r[7],p=r[2],g=r[5],y=r[8],b=i[0],S=i[3],m=i[6],_=i[1],w=i[4],M=i[7],C=i[2],A=i[5],P=i[8];return s[0]=o*b+a*_+l*C,s[3]=o*S+a*w+l*A,s[6]=o*m+a*M+l*P,s[1]=f*b+d*_+h*C,s[4]=f*S+d*w+h*A,s[7]=f*m+d*M+h*P,s[2]=p*b+g*_+y*C,s[5]=p*S+g*w+y*A,s[8]=p*m+g*M+y*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],f=e[7],d=e[8];return t*o*d-t*a*f-r*s*d+r*a*l+i*s*f-i*o*l}invert(){const e=this.elements,t=e[0],r=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],f=e[7],d=e[8],h=d*o-a*f,p=a*l-d*s,g=f*s-o*l,y=t*h+r*p+i*g;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/y;return e[0]=h*b,e[1]=(i*f-d*r)*b,e[2]=(a*r-i*o)*b,e[3]=p*b,e[4]=(d*t-i*l)*b,e[5]=(i*s-a*t)*b,e[6]=g*b,e[7]=(r*l-f*t)*b,e[8]=(o*t-r*s)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,i,s,o,a){const l=Math.cos(s),f=Math.sin(s);return this.set(r*l,r*f,-r*(l*o+f*a)+o+e,-i*f,i*l,-i*(-f*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(d0.makeScale(e,t)),this}rotate(e){return this.premultiply(d0.makeRotation(-e)),this}translate(e,t){return this.premultiply(d0.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let i=0;i<9;i++)if(t[i]!==r[i])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const d0=new Mt;function pI(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}const ust={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Bc(n,e){return new ust[n](e)}function Ad(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function mI(){const n=Ad("canvas");return n.style.display="block",n}const f2={};function Gf(n){n in f2||(f2[n]=!0,console.warn(n))}const d2=new Mt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),h2=new Mt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),$p={[ks]:{transfer:bd,primaries:Ed,toReference:n=>n,fromReference:n=>n},[Vn]:{transfer:Qt,primaries:Ed,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Jd]:{transfer:bd,primaries:Md,toReference:n=>n.applyMatrix3(h2),fromReference:n=>n.applyMatrix3(d2)},[zv]:{transfer:Qt,primaries:Md,toReference:n=>n.convertSRGBToLinear().applyMatrix3(h2),fromReference:n=>n.applyMatrix3(d2).convertLinearToSRGB()}},fst=new Set([ks,Jd]),Vt={enabled:!0,_workingColorSpace:ks,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!fst.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const r=$p[e].toReference,i=$p[t].fromReference;return i(r(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return $p[n].primaries},getTransfer:function(n){return n===pi?bd:$p[n].transfer}};function eu(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function h0(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ql;class yb{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ql===void 0&&(Ql=Ad("canvas")),Ql.width=e.width,Ql.height=e.height;const r=Ql.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Ql}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ad("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const i=r.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=eu(s[o]/255)*255;return r.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(eu(t[r]/255)*255):t[r]=eu(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dst=0;class rl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dst++}),this.uuid=yi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(p0(i[o].image)):s.push(p0(i[o]))}else s=p0(i);r.url=s}return t||(e.images[this.uuid]=r),r}}function p0(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?yb.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hst=0;class Tn extends xo{constructor(e=Tn.DEFAULT_IMAGE,t=Tn.DEFAULT_MAPPING,r=Pr,i=Pr,s=Dn,o=ma,a=Ur,l=Is,f=Tn.DEFAULT_ANISOTROPY,d=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hst++}),this.uuid=yi(),this.name="",this.source=new rl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=f,this.format=a,this.internalFormat=null,this.type=l,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Gf("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===la?Vn:pi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$v)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yd:e.x=e.x-Math.floor(e.x);break;case Pr:e.x=e.x<0?0:1;break;case _d:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yd:e.y=e.y-Math.floor(e.y);break;case Pr:e.y=e.y<0?0:1;break;case _d:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Gf("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Vn?la:mb}set encoding(e){Gf("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===la?Vn:pi}}Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=$v;Tn.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,t=0,r=0,i=1){It.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,i){return this.x=e,this.y=t,this.z=r,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*r+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*r+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*r+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*r+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,i,s;const l=e.elements,f=l[0],d=l[4],h=l[8],p=l[1],g=l[5],y=l[9],b=l[2],S=l[6],m=l[10];if(Math.abs(d-p)<.01&&Math.abs(h-b)<.01&&Math.abs(y-S)<.01){if(Math.abs(d+p)<.1&&Math.abs(h+b)<.1&&Math.abs(y+S)<.1&&Math.abs(f+g+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(f+1)/2,M=(g+1)/2,C=(m+1)/2,A=(d+p)/4,P=(h+b)/4,k=(y+S)/4;return w>M&&w>C?w<.01?(r=0,i=.707106781,s=.707106781):(r=Math.sqrt(w),i=A/r,s=P/r):M>C?M<.01?(r=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),r=A/i,s=k/i):C<.01?(r=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),r=P/s,i=k/s),this.set(r,i,s,t),this}let _=Math.sqrt((S-y)*(S-y)+(h-b)*(h-b)+(p-d)*(p-d));return Math.abs(_)<.001&&(_=1),this.x=(S-y)/_,this.y=(h-b)/_,this.z=(p-d)/_,this.w=Math.acos((f+g+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gI extends xo{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t);const i={width:e,height:t,depth:1};r.encoding!==void 0&&(Gf("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===la?Vn:pi),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},r),this.texture=new Tn(i,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps,this.texture.internalFormat=r.internalFormat,this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}setSize(e,t,r=1){(this.width!==e||this.height!==t||this.depth!==r)&&(this.width=e,this.height=t,this.depth=r,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new rl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ls extends gI{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Bv extends Tn{constructor(e=null,t=1,r=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:i},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pst extends ls{constructor(e=1,t=1,r=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=r,this.texture=new Bv(null,e,t,r),this.texture.isRenderTargetTexture=!0}}class _b extends Tn{constructor(e=null,t=1,r=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:i},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mst extends ls{constructor(e=1,t=1,r=1,i={}){super(e,t,i),this.isWebGL3DRenderTarget=!0,this.depth=r,this.texture=new _b(null,e,t,r),this.texture.isRenderTargetTexture=!0}}class gst extends ls{constructor(e=1,t=1,r=1,i={}){super(e,t,i),this.isWebGLMultipleRenderTargets=!0;const s=this.texture;this.texture=[];for(let o=0;o<r;o++)this.texture[o]=s.clone(),this.texture[o].isRenderTargetTexture=!0}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let i=0,s=this.texture.length;i<s;i++)this.texture[i].image.width=e,this.texture[i].image.height=t,this.texture[i].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.texture.length=0;for(let t=0,r=e.texture.length;t<r;t++)this.texture[t]=e.texture[t].clone(),this.texture[t].isRenderTargetTexture=!0;return this}}class ti{constructor(e=0,t=0,r=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=i}static slerpFlat(e,t,r,i,s,o,a){let l=r[i+0],f=r[i+1],d=r[i+2],h=r[i+3];const p=s[o+0],g=s[o+1],y=s[o+2],b=s[o+3];if(a===0){e[t+0]=l,e[t+1]=f,e[t+2]=d,e[t+3]=h;return}if(a===1){e[t+0]=p,e[t+1]=g,e[t+2]=y,e[t+3]=b;return}if(h!==b||l!==p||f!==g||d!==y){let S=1-a;const m=l*p+f*g+d*y+h*b,_=m>=0?1:-1,w=1-m*m;if(w>Number.EPSILON){const C=Math.sqrt(w),A=Math.atan2(C,m*_);S=Math.sin(S*A)/C,a=Math.sin(a*A)/C}const M=a*_;if(l=l*S+p*M,f=f*S+g*M,d=d*S+y*M,h=h*S+b*M,S===1-a){const C=1/Math.sqrt(l*l+f*f+d*d+h*h);l*=C,f*=C,d*=C,h*=C}}e[t]=l,e[t+1]=f,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,r,i,s,o){const a=r[i],l=r[i+1],f=r[i+2],d=r[i+3],h=s[o],p=s[o+1],g=s[o+2],y=s[o+3];return e[t]=a*y+d*h+l*g-f*p,e[t+1]=l*y+d*p+f*h-a*g,e[t+2]=f*y+d*g+a*p-l*h,e[t+3]=d*y-a*h-l*p-f*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,i){return this._x=e,this._y=t,this._z=r,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,f=a(r/2),d=a(i/2),h=a(s/2),p=l(r/2),g=l(i/2),y=l(s/2);switch(o){case"XYZ":this._x=p*d*h+f*g*y,this._y=f*g*h-p*d*y,this._z=f*d*y+p*g*h,this._w=f*d*h-p*g*y;break;case"YXZ":this._x=p*d*h+f*g*y,this._y=f*g*h-p*d*y,this._z=f*d*y-p*g*h,this._w=f*d*h+p*g*y;break;case"ZXY":this._x=p*d*h-f*g*y,this._y=f*g*h+p*d*y,this._z=f*d*y+p*g*h,this._w=f*d*h-p*g*y;break;case"ZYX":this._x=p*d*h-f*g*y,this._y=f*g*h+p*d*y,this._z=f*d*y-p*g*h,this._w=f*d*h+p*g*y;break;case"YZX":this._x=p*d*h+f*g*y,this._y=f*g*h+p*d*y,this._z=f*d*y-p*g*h,this._w=f*d*h-p*g*y;break;case"XZY":this._x=p*d*h-f*g*y,this._y=f*g*h-p*d*y,this._z=f*d*y+p*g*h,this._w=f*d*h+p*g*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,i=Math.sin(r);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],f=t[2],d=t[6],h=t[10],p=r+a+h;if(p>0){const g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(d-l)*g,this._y=(s-f)*g,this._z=(o-i)*g}else if(r>a&&r>h){const g=2*Math.sqrt(1+r-a-h);this._w=(d-l)/g,this._x=.25*g,this._y=(i+o)/g,this._z=(s+f)/g}else if(a>h){const g=2*Math.sqrt(1+a-r-h);this._w=(s-f)/g,this._x=(i+o)/g,this._y=.25*g,this._z=(l+d)/g}else{const g=2*Math.sqrt(1+h-r-a);this._w=(o-i)/g,this._x=(s+f)/g,this._y=(l+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(En(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const i=Math.min(1,t/r);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,f=t._z,d=t._w;return this._x=r*d+o*a+i*f-s*l,this._y=i*d+o*l+s*a-r*f,this._z=s*d+o*f+r*l-i*a,this._w=o*d-r*a-i*l-s*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+r*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=r,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-t;return this._w=g*o+t*this._w,this._x=g*r+t*this._x,this._y=g*i+t*this._y,this._z=g*s+t*this._z,this.normalize(),this}const f=Math.sqrt(l),d=Math.atan2(f,a),h=Math.sin((1-t)*d)/f,p=Math.sin(t*d)/f;return this._w=o*h+this._w*p,this._x=r*h+this._x*p,this._y=i*h+this._y*p,this._z=s*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=Math.random(),t=Math.sqrt(1-e),r=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),r*Math.sin(s),r*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,r=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(p2.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(p2.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*r+s[6]*i,this.y=s[1]*t+s[4]*r+s[7]*i,this.z=s[2]*t+s[5]*r+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*r+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*r+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*r+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*r+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,r=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,f=2*(o*i-a*r),d=2*(a*t-s*i),h=2*(s*r-o*t);return this.x=t+l*f+o*h-a*d,this.y=r+l*d+a*f-s*h,this.z=i+l*h+s*d-o*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*r+s[8]*i,this.y=s[1]*t+s[5]*r+s[9]*i,this.z=s[2]*t+s[6]*r+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-r*l,this.z=r*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return m0.copy(this).projectOnVector(e),this.sub(m0)}reflect(e){return this.sub(m0.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(En(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,i=this.z-e.z;return t*t+r*r+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const i=Math.sin(t)*e;return this.x=i*Math.sin(r),this.y=Math.cos(t)*e,this.z=i*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(t),this.y=r*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const m0=new U,p2=new ti;class ir{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(ji.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(ji.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=ji.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const s=r.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ji):ji.fromBufferAttribute(s,o),ji.applyMatrix4(e.matrixWorld),this.expandByPoint(ji);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Up.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Up.copy(r.boundingBox)),Up.applyMatrix4(e.matrixWorld),this.union(Up)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ji),ji.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cf),Fp.subVectors(this.max,cf),ec.subVectors(e.a,cf),tc.subVectors(e.b,cf),nc.subVectors(e.c,cf),ko.subVectors(tc,ec),Oo.subVectors(nc,tc),ka.subVectors(ec,nc);let t=[0,-ko.z,ko.y,0,-Oo.z,Oo.y,0,-ka.z,ka.y,ko.z,0,-ko.x,Oo.z,0,-Oo.x,ka.z,0,-ka.x,-ko.y,ko.x,0,-Oo.y,Oo.x,0,-ka.y,ka.x,0];return!g0(t,ec,tc,nc,Fp)||(t=[1,0,0,0,1,0,0,0,1],!g0(t,ec,tc,nc,Fp))?!1:(zp.crossVectors(ko,Oo),t=[zp.x,zp.y,zp.z],g0(t,ec,tc,nc,Fp))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ji).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ji).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Gs=[new U,new U,new U,new U,new U,new U,new U,new U],ji=new U,Up=new ir,ec=new U,tc=new U,nc=new U,ko=new U,Oo=new U,ka=new U,cf=new U,Fp=new U,zp=new U,Oa=new U;function g0(n,e,t,r,i){for(let s=0,o=n.length-3;s<=o;s+=3){Oa.fromArray(n,s);const a=i.x*Math.abs(Oa.x)+i.y*Math.abs(Oa.y)+i.z*Math.abs(Oa.z),l=e.dot(Oa),f=t.dot(Oa),d=r.dot(Oa);if(Math.max(-Math.max(l,f,d),Math.min(l,f,d))>a)return!1}return!0}const vst=new ir,uf=new U,v0=new U;class sr{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):vst.setFromPoints(e).getCenter(r);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,r.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;uf.subVectors(e,this.center);const t=uf.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),i=(r-this.radius)*.5;this.center.addScaledVector(uf,i/r),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(v0.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(uf.copy(e.center).add(v0)),this.expandByPoint(uf.copy(e.center).sub(v0))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qs=new U,y0=new U,Bp=new U,$o=new U,_0=new U,Hp=new U,x0=new U;class Eu{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qs.copy(this.origin).addScaledVector(this.direction,t),qs.distanceToSquared(e))}distanceSqToSegment(e,t,r,i){y0.copy(e).add(t).multiplyScalar(.5),Bp.copy(t).sub(e).normalize(),$o.copy(this.origin).sub(y0);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Bp),a=$o.dot(this.direction),l=-$o.dot(Bp),f=$o.lengthSq(),d=Math.abs(1-o*o);let h,p,g,y;if(d>0)if(h=o*l-a,p=o*a-l,y=s*d,h>=0)if(p>=-y)if(p<=y){const b=1/d;h*=b,p*=b,g=h*(h+o*p+2*a)+p*(o*h+p+2*l)+f}else p=s,h=Math.max(0,-(o*p+a)),g=-h*h+p*(p+2*l)+f;else p=-s,h=Math.max(0,-(o*p+a)),g=-h*h+p*(p+2*l)+f;else p<=-y?(h=Math.max(0,-(-o*s+a)),p=h>0?-s:Math.min(Math.max(-s,-l),s),g=-h*h+p*(p+2*l)+f):p<=y?(h=0,p=Math.min(Math.max(-s,-l),s),g=p*(p+2*l)+f):(h=Math.max(0,-(o*s+a)),p=h>0?s:Math.min(Math.max(-s,-l),s),g=-h*h+p*(p+2*l)+f);else p=o>0?-s:s,h=Math.max(0,-(o*p+a)),g=-h*h+p*(p+2*l)+f;return r&&r.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(y0).addScaledVector(Bp,p),g}intersectSphere(e,t){qs.subVectors(e.center,this.origin);const r=qs.dot(this.direction),i=qs.dot(qs)-r*r,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=r-o,l=r+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,i,s,o,a,l;const f=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,p=this.origin;return f>=0?(r=(e.min.x-p.x)*f,i=(e.max.x-p.x)*f):(r=(e.max.x-p.x)*f,i=(e.min.x-p.x)*f),d>=0?(s=(e.min.y-p.y)*d,o=(e.max.y-p.y)*d):(s=(e.max.y-p.y)*d,o=(e.min.y-p.y)*d),r>o||s>i||((s>r||isNaN(r))&&(r=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-p.z)*h,l=(e.max.z-p.z)*h):(a=(e.max.z-p.z)*h,l=(e.min.z-p.z)*h),r>l||a>i)||((a>r||r!==r)&&(r=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(r>=0?r:i,t)}intersectsBox(e){return this.intersectBox(e,qs)!==null}intersectTriangle(e,t,r,i,s){_0.subVectors(t,e),Hp.subVectors(r,e),x0.crossVectors(_0,Hp);let o=this.direction.dot(x0),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$o.subVectors(this.origin,e);const l=a*this.direction.dot(Hp.crossVectors($o,Hp));if(l<0)return null;const f=a*this.direction.dot(_0.cross($o));if(f<0||l+f>o)return null;const d=-a*$o.dot(x0);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,t,r,i,s,o,a,l,f,d,h,p,g,y,b,S){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,i,s,o,a,l,f,d,h,p,g,y,b,S)}set(e,t,r,i,s,o,a,l,f,d,h,p,g,y,b,S){const m=this.elements;return m[0]=e,m[4]=t,m[8]=r,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=f,m[6]=d,m[10]=h,m[14]=p,m[3]=g,m[7]=y,m[11]=b,m[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,i=1/rc.setFromMatrixColumn(e,0).length(),s=1/rc.setFromMatrixColumn(e,1).length(),o=1/rc.setFromMatrixColumn(e,2).length();return t[0]=r[0]*i,t[1]=r[1]*i,t[2]=r[2]*i,t[3]=0,t[4]=r[4]*s,t[5]=r[5]*s,t[6]=r[6]*s,t[7]=0,t[8]=r[8]*o,t[9]=r[9]*o,t[10]=r[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,i=e.y,s=e.z,o=Math.cos(r),a=Math.sin(r),l=Math.cos(i),f=Math.sin(i),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const p=o*d,g=o*h,y=a*d,b=a*h;t[0]=l*d,t[4]=-l*h,t[8]=f,t[1]=g+y*f,t[5]=p-b*f,t[9]=-a*l,t[2]=b-p*f,t[6]=y+g*f,t[10]=o*l}else if(e.order==="YXZ"){const p=l*d,g=l*h,y=f*d,b=f*h;t[0]=p+b*a,t[4]=y*a-g,t[8]=o*f,t[1]=o*h,t[5]=o*d,t[9]=-a,t[2]=g*a-y,t[6]=b+p*a,t[10]=o*l}else if(e.order==="ZXY"){const p=l*d,g=l*h,y=f*d,b=f*h;t[0]=p-b*a,t[4]=-o*h,t[8]=y+g*a,t[1]=g+y*a,t[5]=o*d,t[9]=b-p*a,t[2]=-o*f,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const p=o*d,g=o*h,y=a*d,b=a*h;t[0]=l*d,t[4]=y*f-g,t[8]=p*f+b,t[1]=l*h,t[5]=b*f+p,t[9]=g*f-y,t[2]=-f,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const p=o*l,g=o*f,y=a*l,b=a*f;t[0]=l*d,t[4]=b-p*h,t[8]=y*h+g,t[1]=h,t[5]=o*d,t[9]=-a*d,t[2]=-f*d,t[6]=g*h+y,t[10]=p-b*h}else if(e.order==="XZY"){const p=o*l,g=o*f,y=a*l,b=a*f;t[0]=l*d,t[4]=-h,t[8]=f*d,t[1]=p*h+b,t[5]=o*d,t[9]=g*h-y,t[2]=y*h-g,t[6]=a*d,t[10]=b*h+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yst,e,_st)}lookAt(e,t,r){const i=this.elements;return fi.subVectors(e,t),fi.lengthSq()===0&&(fi.z=1),fi.normalize(),Uo.crossVectors(r,fi),Uo.lengthSq()===0&&(Math.abs(r.z)===1?fi.x+=1e-4:fi.z+=1e-4,fi.normalize(),Uo.crossVectors(r,fi)),Uo.normalize(),Vp.crossVectors(fi,Uo),i[0]=Uo.x,i[4]=Vp.x,i[8]=fi.x,i[1]=Uo.y,i[5]=Vp.y,i[9]=fi.y,i[2]=Uo.z,i[6]=Vp.z,i[10]=fi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,i=t.elements,s=this.elements,o=r[0],a=r[4],l=r[8],f=r[12],d=r[1],h=r[5],p=r[9],g=r[13],y=r[2],b=r[6],S=r[10],m=r[14],_=r[3],w=r[7],M=r[11],C=r[15],A=i[0],P=i[4],k=i[8],R=i[12],N=i[1],B=i[5],W=i[9],J=i[13],V=i[2],Y=i[6],te=i[10],ue=i[14],D=i[3],z=i[7],H=i[11],X=i[15];return s[0]=o*A+a*N+l*V+f*D,s[4]=o*P+a*B+l*Y+f*z,s[8]=o*k+a*W+l*te+f*H,s[12]=o*R+a*J+l*ue+f*X,s[1]=d*A+h*N+p*V+g*D,s[5]=d*P+h*B+p*Y+g*z,s[9]=d*k+h*W+p*te+g*H,s[13]=d*R+h*J+p*ue+g*X,s[2]=y*A+b*N+S*V+m*D,s[6]=y*P+b*B+S*Y+m*z,s[10]=y*k+b*W+S*te+m*H,s[14]=y*R+b*J+S*ue+m*X,s[3]=_*A+w*N+M*V+C*D,s[7]=_*P+w*B+M*Y+C*z,s[11]=_*k+w*W+M*te+C*H,s[15]=_*R+w*J+M*ue+C*X,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],f=e[13],d=e[2],h=e[6],p=e[10],g=e[14],y=e[3],b=e[7],S=e[11],m=e[15];return y*(+s*l*h-i*f*h-s*a*p+r*f*p+i*a*g-r*l*g)+b*(+t*l*g-t*f*p+s*o*p-i*o*g+i*f*d-s*l*d)+S*(+t*f*h-t*a*g-s*o*h+r*o*g+s*a*d-r*f*d)+m*(-i*a*d-t*l*h+t*a*p+i*o*h-r*o*p+r*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],f=e[7],d=e[8],h=e[9],p=e[10],g=e[11],y=e[12],b=e[13],S=e[14],m=e[15],_=h*S*f-b*p*f+b*l*g-a*S*g-h*l*m+a*p*m,w=y*p*f-d*S*f-y*l*g+o*S*g+d*l*m-o*p*m,M=d*b*f-y*h*f+y*a*g-o*b*g-d*a*m+o*h*m,C=y*h*l-d*b*l-y*a*p+o*b*p+d*a*S-o*h*S,A=t*_+r*w+i*M+s*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/A;return e[0]=_*P,e[1]=(b*p*s-h*S*s-b*i*g+r*S*g+h*i*m-r*p*m)*P,e[2]=(a*S*s-b*l*s+b*i*f-r*S*f-a*i*m+r*l*m)*P,e[3]=(h*l*s-a*p*s-h*i*f+r*p*f+a*i*g-r*l*g)*P,e[4]=w*P,e[5]=(d*S*s-y*p*s+y*i*g-t*S*g-d*i*m+t*p*m)*P,e[6]=(y*l*s-o*S*s-y*i*f+t*S*f+o*i*m-t*l*m)*P,e[7]=(o*p*s-d*l*s+d*i*f-t*p*f-o*i*g+t*l*g)*P,e[8]=M*P,e[9]=(y*h*s-d*b*s-y*r*g+t*b*g+d*r*m-t*h*m)*P,e[10]=(o*b*s-y*a*s+y*r*f-t*b*f-o*r*m+t*a*m)*P,e[11]=(d*a*s-o*h*s-d*r*f+t*h*f+o*r*g-t*a*g)*P,e[12]=C*P,e[13]=(d*b*i-y*h*i+y*r*p-t*b*p-d*r*S+t*h*S)*P,e[14]=(y*a*i-o*b*i-y*r*l+t*b*l+o*r*S-t*a*S)*P,e[15]=(o*h*i-d*a*i+d*r*l-t*h*l-o*r*p+t*a*p)*P,this}scale(e){const t=this.elements,r=e.x,i=e.y,s=e.z;return t[0]*=r,t[4]*=i,t[8]*=s,t[1]*=r,t[5]*=i,t[9]*=s,t[2]*=r,t[6]*=i,t[10]*=s,t[3]*=r,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,i))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),i=Math.sin(t),s=1-r,o=e.x,a=e.y,l=e.z,f=s*o,d=s*a;return this.set(f*o+r,f*a-i*l,f*l+i*a,0,f*a+i*l,d*a+r,d*l-i*o,0,f*l-i*a,d*l+i*o,s*l*l+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,i,s,o){return this.set(1,r,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,r){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,f=s+s,d=o+o,h=a+a,p=s*f,g=s*d,y=s*h,b=o*d,S=o*h,m=a*h,_=l*f,w=l*d,M=l*h,C=r.x,A=r.y,P=r.z;return i[0]=(1-(b+m))*C,i[1]=(g+M)*C,i[2]=(y-w)*C,i[3]=0,i[4]=(g-M)*A,i[5]=(1-(p+m))*A,i[6]=(S+_)*A,i[7]=0,i[8]=(y+w)*P,i[9]=(S-_)*P,i[10]=(1-(p+b))*P,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,r){const i=this.elements;let s=rc.set(i[0],i[1],i[2]).length();const o=rc.set(i[4],i[5],i[6]).length(),a=rc.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Xi.copy(this);const f=1/s,d=1/o,h=1/a;return Xi.elements[0]*=f,Xi.elements[1]*=f,Xi.elements[2]*=f,Xi.elements[4]*=d,Xi.elements[5]*=d,Xi.elements[6]*=d,Xi.elements[8]*=h,Xi.elements[9]*=h,Xi.elements[10]*=h,t.setFromRotationMatrix(Xi),r.x=s,r.y=o,r.z=a,this}makePerspective(e,t,r,i,s,o,a=rs){const l=this.elements,f=2*s/(t-e),d=2*s/(r-i),h=(t+e)/(t-e),p=(r+i)/(r-i);let g,y;if(a===rs)g=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===hu)g=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=f,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,r,i,s,o,a=rs){const l=this.elements,f=1/(t-e),d=1/(r-i),h=1/(o-s),p=(t+e)*f,g=(r+i)*d;let y,b;if(a===rs)y=(o+s)*h,b=-2*h;else if(a===hu)y=s*h,b=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*f,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=b,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let i=0;i<16;i++)if(t[i]!==r[i])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const rc=new U,Xi=new ut,yst=new U(0,0,0),_st=new U(1,1,1),Uo=new U,Vp=new U,fi=new U,m2=new ut,g2=new ti;class Qd{constructor(e=0,t=0,r=0,i=Qd.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,i=this._order){return this._x=e,this._y=t,this._z=r,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],f=i[5],d=i[9],h=i[2],p=i[6],g=i[10];switch(t){case"XYZ":this._y=Math.asin(En(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,f),this._z=0);break;case"YXZ":this._x=Math.asin(-En(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,f)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(En(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-o,f)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-En(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,f));break;case"YZX":this._z=Math.asin(En(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,f),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-En(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,f),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return m2.makeRotationFromQuaternion(e),this.setFromRotationMatrix(m2,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return g2.setFromEuler(this),this.setFromQuaternion(g2,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qd.DEFAULT_ORDER="XYZ";class ul{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xst=0;const v2=new U,ic=new ti,Ws=new ut,Gp=new U,ff=new U,Sst=new U,wst=new ti,y2=new U(1,0,0),_2=new U(0,1,0),x2=new U(0,0,1),bst={type:"added"},Est={type:"removed"};class Bt extends xo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xst++}),this.uuid=yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bt.DEFAULT_UP.clone();const e=new U,t=new Qd,r=new ti,i=new U(1,1,1);function s(){r.setFromEuler(t,!1)}function o(){t.setFromQuaternion(r,void 0,!1)}t._onChange(s),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ut},normalMatrix:{value:new Mt}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=Bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ul,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ic.setFromAxisAngle(e,t),this.quaternion.multiply(ic),this}rotateOnWorldAxis(e,t){return ic.setFromAxisAngle(e,t),this.quaternion.premultiply(ic),this}rotateX(e){return this.rotateOnAxis(y2,e)}rotateY(e){return this.rotateOnAxis(_2,e)}rotateZ(e){return this.rotateOnAxis(x2,e)}translateOnAxis(e,t){return v2.copy(e).applyQuaternion(this.quaternion),this.position.add(v2.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(y2,e)}translateY(e){return this.translateOnAxis(_2,e)}translateZ(e){return this.translateOnAxis(x2,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ws.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Gp.copy(e):Gp.set(e,t,r);const i=this.parent;this.updateWorldMatrix(!0,!1),ff.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ws.lookAt(ff,Gp,this.up):Ws.lookAt(Gp,ff,this.up),this.quaternion.setFromRotationMatrix(Ws),i&&(Ws.extractRotation(i.matrixWorld),ic.setFromRotationMatrix(Ws),this.quaternion.premultiply(ic.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(bst)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Est)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ws.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ws.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ws),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,i=this.children.length;r<i;r++){const o=this.children[r].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ff,e,Sst),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ff,wst,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,i=t.length;r<i;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,i=t.length;r<i;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,i=t.length;r<i;r++){const s=t[r];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let f=0,d=l.length;f<d;f++){const h=l[f];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,f=this.material.length;l<f;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),f=o(e.textures),d=o(e.images),h=o(e.shapes),p=o(e.skeletons),g=o(e.animations),y=o(e.nodes);a.length>0&&(r.geometries=a),l.length>0&&(r.materials=l),f.length>0&&(r.textures=f),d.length>0&&(r.images=d),h.length>0&&(r.shapes=h),p.length>0&&(r.skeletons=p),g.length>0&&(r.animations=g),y.length>0&&(r.nodes=y)}return r.object=i,r;function o(a){const l=[];for(const f in a){const d=a[f];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const i=e.children[r];this.add(i.clone())}return this}}Bt.DEFAULT_UP=new U(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yi=new U,js=new U,S0=new U,Xs=new U,sc=new U,oc=new U,S2=new U,w0=new U,b0=new U,E0=new U;let qp=!1;class Yr{constructor(e=new U,t=new U,r=new U){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,i){i.subVectors(r,t),Yi.subVectors(e,t),i.cross(Yi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,r,i,s){Yi.subVectors(i,t),js.subVectors(r,t),S0.subVectors(e,t);const o=Yi.dot(Yi),a=Yi.dot(js),l=Yi.dot(S0),f=js.dot(js),d=js.dot(S0),h=o*f-a*a;if(h===0)return s.set(0,0,0),null;const p=1/h,g=(f*l-a*d)*p,y=(o*d-a*l)*p;return s.set(1-g-y,y,g)}static containsPoint(e,t,r,i){return this.getBarycoord(e,t,r,i,Xs)===null?!1:Xs.x>=0&&Xs.y>=0&&Xs.x+Xs.y<=1}static getUV(e,t,r,i,s,o,a,l){return qp===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),qp=!0),this.getInterpolation(e,t,r,i,s,o,a,l)}static getInterpolation(e,t,r,i,s,o,a,l){return this.getBarycoord(e,t,r,i,Xs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Xs.x),l.addScaledVector(o,Xs.y),l.addScaledVector(a,Xs.z),l)}static isFrontFacing(e,t,r,i){return Yi.subVectors(r,t),js.subVectors(e,t),Yi.cross(js).dot(i)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,i){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,r,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yi.subVectors(this.c,this.b),js.subVectors(this.a,this.b),Yi.cross(js).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yr.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,r,i,s){return qp===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),qp=!0),Yr.getInterpolation(e,this.a,this.b,this.c,t,r,i,s)}getInterpolation(e,t,r,i,s){return Yr.getInterpolation(e,this.a,this.b,this.c,t,r,i,s)}containsPoint(e){return Yr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,i=this.b,s=this.c;let o,a;sc.subVectors(i,r),oc.subVectors(s,r),w0.subVectors(e,r);const l=sc.dot(w0),f=oc.dot(w0);if(l<=0&&f<=0)return t.copy(r);b0.subVectors(e,i);const d=sc.dot(b0),h=oc.dot(b0);if(d>=0&&h<=d)return t.copy(i);const p=l*h-d*f;if(p<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(r).addScaledVector(sc,o);E0.subVectors(e,s);const g=sc.dot(E0),y=oc.dot(E0);if(y>=0&&g<=y)return t.copy(s);const b=g*f-l*y;if(b<=0&&f>=0&&y<=0)return a=f/(f-y),t.copy(r).addScaledVector(oc,a);const S=d*y-g*h;if(S<=0&&h-d>=0&&g-y>=0)return S2.subVectors(s,i),a=(h-d)/(h-d+(g-y)),t.copy(i).addScaledVector(S2,a);const m=1/(S+b+p);return o=b*m,a=p*m,t.copy(r).addScaledVector(sc,o).addScaledVector(oc,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vI={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fo={h:0,s:0,l:0},Wp={h:0,s:0,l:0};function M0(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Oe{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Vt.toWorkingColorSpace(this,t),this}setRGB(e,t,r,i=Vt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Vt.toWorkingColorSpace(this,i),this}setHSL(e,t,r,i=Vt.workingColorSpace){if(e=vb(e,1),t=En(t,0,1),r=En(r,0,1),t===0)this.r=this.g=this.b=r;else{const s=r<=.5?r*(1+t):r+t-r*t,o=2*r-s;this.r=M0(o,s,e+1/3),this.g=M0(o,s,e),this.b=M0(o,s,e-1/3)}return Vt.toWorkingColorSpace(this,i),this}setStyle(e,t=Vn){function r(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vn){const r=vI[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=eu(e.r),this.g=eu(e.g),this.b=eu(e.b),this}copyLinearToSRGB(e){return this.r=h0(e.r),this.g=h0(e.g),this.b=h0(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vn){return Vt.fromWorkingColorSpace(Mr.copy(this),e),Math.round(En(Mr.r*255,0,255))*65536+Math.round(En(Mr.g*255,0,255))*256+Math.round(En(Mr.b*255,0,255))}getHexString(e=Vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Vt.workingColorSpace){Vt.fromWorkingColorSpace(Mr.copy(this),t);const r=Mr.r,i=Mr.g,s=Mr.b,o=Math.max(r,i,s),a=Math.min(r,i,s);let l,f;const d=(a+o)/2;if(a===o)l=0,f=0;else{const h=o-a;switch(f=d<=.5?h/(o+a):h/(2-o-a),o){case r:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-r)/h+2;break;case s:l=(r-i)/h+4;break}l/=6}return e.h=l,e.s=f,e.l=d,e}getRGB(e,t=Vt.workingColorSpace){return Vt.fromWorkingColorSpace(Mr.copy(this),t),e.r=Mr.r,e.g=Mr.g,e.b=Mr.b,e}getStyle(e=Vn){Vt.fromWorkingColorSpace(Mr.copy(this),e);const t=Mr.r,r=Mr.g,i=Mr.b;return e!==Vn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(i*255)})`}offsetHSL(e,t,r){return this.getHSL(Fo),this.setHSL(Fo.h+e,Fo.s+t,Fo.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Fo),e.getHSL(Wp);const r=Vf(Fo.h,Wp.h,t),i=Vf(Fo.s,Wp.s,t),s=Vf(Fo.l,Wp.l,t);return this.setHSL(r,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*r+s[6]*i,this.g=s[1]*t+s[4]*r+s[7]*i,this.b=s[2]*t+s[5]*r+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mr=new Oe;Oe.NAMES=vI;let Mst=0;class vr extends xo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mst++}),this.uuid=yi(),this.name="",this.type="Material",this.blending=ll,this.side=po,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vg,this.blendDst=Gg,this.blendEquation=jo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=md,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=aS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ja,this.stencilZFail=ja,this.stencilZPass=ja,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(r):i&&i.isVector3&&r&&r.isVector3?i.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ll&&(r.blending=this.blending),this.side!==po&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Vg&&(r.blendSrc=this.blendSrc),this.blendDst!==Gg&&(r.blendDst=this.blendDst),this.blendEquation!==jo&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==md&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==aS&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ja&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ja&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ja&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(r.textures=s),o.length>0&&(r.images=o)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const i=t.length;r=new Array(i);for(let s=0;s!==i;++s)r[s]=t[s].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class wa extends vr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Kd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qs=Tst();function Tst(){const n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),r=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const f=l-127;f<-27?(r[l]=0,r[l|256]=32768,i[l]=24,i[l|256]=24):f<-14?(r[l]=1024>>-f-14,r[l|256]=1024>>-f-14|32768,i[l]=-f-1,i[l|256]=-f-1):f<=15?(r[l]=f+15<<10,r[l|256]=f+15<<10|32768,i[l]=13,i[l|256]=13):f<128?(r[l]=31744,r[l|256]=64512,i[l]=24,i[l|256]=24):(r[l]=31744,r[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let f=l<<13,d=0;for(;!(f&8388608);)f<<=1,d-=8388608;f&=-8388609,d+=947912704,s[l]=f|d}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:r,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:a}}function jr(n){Math.abs(n)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),n=En(n,-65504,65504),Qs.floatView[0]=n;const e=Qs.uint32View[0],t=e>>23&511;return Qs.baseTable[t]+((e&8388607)>>Qs.shiftTable[t])}function Cf(n){const e=n>>10;return Qs.uint32View[0]=Qs.mantissaTable[Qs.offsetTable[e]+(n&1023)]+Qs.exponentTable[e],Qs.floatView[0]}const Ast={toHalfFloat:jr,fromHalfFloat:Cf},$n=new U,jp=new pe;class qt{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Td,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ns,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[r+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)jp.fromBufferAttribute(this,t),jp.applyMatrix3(e),this.setXY(t,jp.x,jp.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)$n.fromBufferAttribute(this,t),$n.applyMatrix3(e),this.setXYZ(t,$n.x,$n.y,$n.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)$n.fromBufferAttribute(this,t),$n.applyMatrix4(e),this.setXYZ(t,$n.x,$n.y,$n.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)$n.fromBufferAttribute(this,t),$n.applyNormalMatrix(e),this.setXYZ(t,$n.x,$n.y,$n.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)$n.fromBufferAttribute(this,t),$n.transformDirection(e),this.setXYZ(t,$n.x,$n.y,$n.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Zr(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=St(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zr(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zr(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zr(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),r=St(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,i){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),r=St(r,this.array),i=St(i,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=i,this}setXYZW(e,t,r,i,s){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),r=St(r,this.array),i=St(i,this.array),s=St(s,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Td&&(e.usage=this.usage),e}}class Cst extends qt{constructor(e,t,r){super(new Int8Array(e),t,r)}}class Rst extends qt{constructor(e,t,r){super(new Uint8Array(e),t,r)}}class Pst extends qt{constructor(e,t,r){super(new Uint8ClampedArray(e),t,r)}}class Lst extends qt{constructor(e,t,r){super(new Int16Array(e),t,r)}}class xb extends qt{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Nst extends qt{constructor(e,t,r){super(new Int32Array(e),t,r)}}class Sb extends qt{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Ist extends qt{constructor(e,t,r){super(new Uint16Array(e),t,r),this.isFloat16BufferAttribute=!0}getX(e){let t=Cf(this.array[e*this.itemSize]);return this.normalized&&(t=Zr(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=jr(t),this}getY(e){let t=Cf(this.array[e*this.itemSize+1]);return this.normalized&&(t=Zr(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=jr(t),this}getZ(e){let t=Cf(this.array[e*this.itemSize+2]);return this.normalized&&(t=Zr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=jr(t),this}getW(e){let t=Cf(this.array[e*this.itemSize+3]);return this.normalized&&(t=Zr(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=jr(t),this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),r=St(r,this.array)),this.array[e+0]=jr(t),this.array[e+1]=jr(r),this}setXYZ(e,t,r,i){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),r=St(r,this.array),i=St(i,this.array)),this.array[e+0]=jr(t),this.array[e+1]=jr(r),this.array[e+2]=jr(i),this}setXYZW(e,t,r,i,s){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),r=St(r,this.array),i=St(i,this.array),s=St(s,this.array)),this.array[e+0]=jr(t),this.array[e+1]=jr(r),this.array[e+2]=jr(i),this.array[e+3]=jr(s),this}}class Ge extends qt{constructor(e,t,r){super(new Float32Array(e),t,r)}}class Dst extends qt{constructor(e,t,r){super(new Float64Array(e),t,r)}}let kst=0;const Oi=new ut,T0=new Bt,ac=new U,di=new ir,df=new ir,er=new U;class wt extends xo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kst++}),this.uuid=yi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pI(e)?Sb:xb)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const s=new Mt().getNormalMatrix(e);r.applyNormalMatrix(s),r.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Oi.makeRotationFromQuaternion(e),this.applyMatrix4(Oi),this}rotateX(e){return Oi.makeRotationX(e),this.applyMatrix4(Oi),this}rotateY(e){return Oi.makeRotationY(e),this.applyMatrix4(Oi),this}rotateZ(e){return Oi.makeRotationZ(e),this.applyMatrix4(Oi),this}translate(e,t,r){return Oi.makeTranslation(e,t,r),this.applyMatrix4(Oi),this}scale(e,t,r){return Oi.makeScale(e,t,r),this.applyMatrix4(Oi),this}lookAt(e){return T0.lookAt(e),T0.updateMatrix(),this.applyMatrix4(T0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ac).negate(),this.translate(ac.x,ac.y,ac.z),this}setFromPoints(e){const t=[];for(let r=0,i=e.length;r<i;r++){const s=e[r];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ge(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ir);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,i=t.length;r<i;r++){const s=t[r];di.setFromBufferAttribute(s),this.morphTargetsRelative?(er.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint(er),er.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint(er)):(this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const r=this.boundingSphere.center;if(di.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];df.setFromBufferAttribute(a),this.morphTargetsRelative?(er.addVectors(di.min,df.min),di.expandByPoint(er),er.addVectors(di.max,df.max),di.expandByPoint(er)):(di.expandByPoint(df.min),di.expandByPoint(df.max))}di.getCenter(r);let i=0;for(let s=0,o=e.count;s<o;s++)er.fromBufferAttribute(e,s),i=Math.max(i,r.distanceToSquared(er));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let f=0,d=a.count;f<d;f++)er.fromBufferAttribute(a,f),l&&(ac.fromBufferAttribute(e,f),er.add(ac)),i=Math.max(i,r.distanceToSquared(er))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,f=[],d=[];for(let N=0;N<a;N++)f[N]=new U,d[N]=new U;const h=new U,p=new U,g=new U,y=new pe,b=new pe,S=new pe,m=new U,_=new U;function w(N,B,W){h.fromArray(i,N*3),p.fromArray(i,B*3),g.fromArray(i,W*3),y.fromArray(o,N*2),b.fromArray(o,B*2),S.fromArray(o,W*2),p.sub(h),g.sub(h),b.sub(y),S.sub(y);const J=1/(b.x*S.y-S.x*b.y);isFinite(J)&&(m.copy(p).multiplyScalar(S.y).addScaledVector(g,-b.y).multiplyScalar(J),_.copy(g).multiplyScalar(b.x).addScaledVector(p,-S.x).multiplyScalar(J),f[N].add(m),f[B].add(m),f[W].add(m),d[N].add(_),d[B].add(_),d[W].add(_))}let M=this.groups;M.length===0&&(M=[{start:0,count:r.length}]);for(let N=0,B=M.length;N<B;++N){const W=M[N],J=W.start,V=W.count;for(let Y=J,te=J+V;Y<te;Y+=3)w(r[Y+0],r[Y+1],r[Y+2])}const C=new U,A=new U,P=new U,k=new U;function R(N){P.fromArray(s,N*3),k.copy(P);const B=f[N];C.copy(B),C.sub(P.multiplyScalar(P.dot(B))).normalize(),A.crossVectors(k,B);const J=A.dot(d[N])<0?-1:1;l[N*4]=C.x,l[N*4+1]=C.y,l[N*4+2]=C.z,l[N*4+3]=J}for(let N=0,B=M.length;N<B;++N){const W=M[N],J=W.start,V=W.count;for(let Y=J,te=J+V;Y<te;Y+=3)R(r[Y+0]),R(r[Y+1]),R(r[Y+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let p=0,g=r.count;p<g;p++)r.setXYZ(p,0,0,0);const i=new U,s=new U,o=new U,a=new U,l=new U,f=new U,d=new U,h=new U;if(e)for(let p=0,g=e.count;p<g;p+=3){const y=e.getX(p+0),b=e.getX(p+1),S=e.getX(p+2);i.fromBufferAttribute(t,y),s.fromBufferAttribute(t,b),o.fromBufferAttribute(t,S),d.subVectors(o,s),h.subVectors(i,s),d.cross(h),a.fromBufferAttribute(r,y),l.fromBufferAttribute(r,b),f.fromBufferAttribute(r,S),a.add(d),l.add(d),f.add(d),r.setXYZ(y,a.x,a.y,a.z),r.setXYZ(b,l.x,l.y,l.z),r.setXYZ(S,f.x,f.y,f.z)}else for(let p=0,g=t.count;p<g;p+=3)i.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),d.subVectors(o,s),h.subVectors(i,s),d.cross(h),r.setXYZ(p+0,d.x,d.y,d.z),r.setXYZ(p+1,d.x,d.y,d.z),r.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)er.fromBufferAttribute(e,t),er.normalize(),e.setXYZ(t,er.x,er.y,er.z)}toNonIndexed(){function e(a,l){const f=a.array,d=a.itemSize,h=a.normalized,p=new f.constructor(l.length*d);let g=0,y=0;for(let b=0,S=l.length;b<S;b++){a.isInterleavedBufferAttribute?g=l[b]*a.data.stride+a.offset:g=l[b]*d;for(let m=0;m<d;m++)p[y++]=f[g++]}return new qt(p,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wt,r=this.index.array,i=this.attributes;for(const a in i){const l=i[a],f=e(l,r);t.setAttribute(a,f)}const s=this.morphAttributes;for(const a in s){const l=[],f=s[a];for(let d=0,h=f.length;d<h;d++){const p=f[d],g=e(p,r);l.push(g)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const f=o[a];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const f in l)l[f]!==void 0&&(e[f]=l[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const l in r){const f=r[l];e.data.attributes[l]=f.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const f=this.morphAttributes[l],d=[];for(let h=0,p=f.length;h<p;h++){const g=f[h];d.push(g.toJSON(e.data))}d.length>0&&(i[l]=d,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const i=e.attributes;for(const f in i){const d=i[f];this.setAttribute(f,d.clone(t))}const s=e.morphAttributes;for(const f in s){const d=[],h=s[f];for(let p=0,g=h.length;p<g;p++)d.push(h[p].clone(t));this.morphAttributes[f]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let f=0,d=o.length;f<d;f++){const h=o[f];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const w2=new ut,$a=new Eu,Xp=new sr,b2=new U,lc=new U,cc=new U,uc=new U,A0=new U,Yp=new U,Zp=new pe,Kp=new pe,Jp=new pe,E2=new U,M2=new U,T2=new U,Qp=new U,em=new U;class zn extends Bt{constructor(e=new wt,t=new wa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const i=t[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const r=this.geometry,i=r.attributes.position,s=r.morphAttributes.position,o=r.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Yp.set(0,0,0);for(let l=0,f=s.length;l<f;l++){const d=a[l],h=s[l];d!==0&&(A0.fromBufferAttribute(h,e),o?Yp.addScaledVector(A0,d):Yp.addScaledVector(A0.sub(t),d))}t.add(Yp)}return t}raycast(e,t){const r=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Xp.copy(r.boundingSphere),Xp.applyMatrix4(s),$a.copy(e.ray).recast(e.near),!(Xp.containsPoint($a.origin)===!1&&($a.intersectSphere(Xp,b2)===null||$a.origin.distanceToSquared(b2)>(e.far-e.near)**2))&&(w2.copy(s).invert(),$a.copy(e.ray).applyMatrix4(w2),!(r.boundingBox!==null&&$a.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,$a)))}_computeIntersections(e,t,r){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,f=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,p=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,b=p.length;y<b;y++){const S=p[y],m=o[S.materialIndex],_=Math.max(S.start,g.start),w=Math.min(a.count,Math.min(S.start+S.count,g.start+g.count));for(let M=_,C=w;M<C;M+=3){const A=a.getX(M),P=a.getX(M+1),k=a.getX(M+2);i=tm(this,m,e,r,f,d,h,A,P,k),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=S.materialIndex,t.push(i))}}else{const y=Math.max(0,g.start),b=Math.min(a.count,g.start+g.count);for(let S=y,m=b;S<m;S+=3){const _=a.getX(S),w=a.getX(S+1),M=a.getX(S+2);i=tm(this,o,e,r,f,d,h,_,w,M),i&&(i.faceIndex=Math.floor(S/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,b=p.length;y<b;y++){const S=p[y],m=o[S.materialIndex],_=Math.max(S.start,g.start),w=Math.min(l.count,Math.min(S.start+S.count,g.start+g.count));for(let M=_,C=w;M<C;M+=3){const A=M,P=M+1,k=M+2;i=tm(this,m,e,r,f,d,h,A,P,k),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=S.materialIndex,t.push(i))}}else{const y=Math.max(0,g.start),b=Math.min(l.count,g.start+g.count);for(let S=y,m=b;S<m;S+=3){const _=S,w=S+1,M=S+2;i=tm(this,o,e,r,f,d,h,_,w,M),i&&(i.faceIndex=Math.floor(S/3),t.push(i))}}}}function Ost(n,e,t,r,i,s,o,a){let l;if(e.side===zr?l=r.intersectTriangle(o,s,i,!0,a):l=r.intersectTriangle(i,s,o,e.side===po,a),l===null)return null;em.copy(a),em.applyMatrix4(n.matrixWorld);const f=t.ray.origin.distanceTo(em);return f<t.near||f>t.far?null:{distance:f,point:em.clone(),object:n}}function tm(n,e,t,r,i,s,o,a,l,f){n.getVertexPosition(a,lc),n.getVertexPosition(l,cc),n.getVertexPosition(f,uc);const d=Ost(n,e,t,r,lc,cc,uc,Qp);if(d){i&&(Zp.fromBufferAttribute(i,a),Kp.fromBufferAttribute(i,l),Jp.fromBufferAttribute(i,f),d.uv=Yr.getInterpolation(Qp,lc,cc,uc,Zp,Kp,Jp,new pe)),s&&(Zp.fromBufferAttribute(s,a),Kp.fromBufferAttribute(s,l),Jp.fromBufferAttribute(s,f),d.uv1=Yr.getInterpolation(Qp,lc,cc,uc,Zp,Kp,Jp,new pe),d.uv2=d.uv1),o&&(E2.fromBufferAttribute(o,a),M2.fromBufferAttribute(o,l),T2.fromBufferAttribute(o,f),d.normal=Yr.getInterpolation(Qp,lc,cc,uc,E2,M2,T2,new U),d.normal.dot(r.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c:f,normal:new U,materialIndex:0};Yr.getNormal(lc,cc,uc,h.normal),d.face=h}return d}class Al extends wt{constructor(e=1,t=1,r=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],f=[],d=[],h=[];let p=0,g=0;y("z","y","x",-1,-1,r,t,e,o,s,0),y("z","y","x",1,-1,r,t,-e,o,s,1),y("x","z","y",1,1,e,r,t,i,o,2),y("x","z","y",1,-1,e,r,-t,i,o,3),y("x","y","z",1,-1,e,t,r,i,s,4),y("x","y","z",-1,-1,e,t,-r,i,s,5),this.setIndex(l),this.setAttribute("position",new Ge(f,3)),this.setAttribute("normal",new Ge(d,3)),this.setAttribute("uv",new Ge(h,2));function y(b,S,m,_,w,M,C,A,P,k,R){const N=M/P,B=C/k,W=M/2,J=C/2,V=A/2,Y=P+1,te=k+1;let ue=0,D=0;const z=new U;for(let H=0;H<te;H++){const X=H*B-J;for(let ne=0;ne<Y;ne++){const K=ne*N-W;z[b]=K*_,z[S]=X*w,z[m]=V,f.push(z.x,z.y,z.z),z[b]=0,z[S]=0,z[m]=A>0?1:-1,d.push(z.x,z.y,z.z),h.push(ne/P),h.push(1-H/k),ue+=1}}for(let H=0;H<k;H++)for(let X=0;X<P;X++){const ne=p+X+Y*H,K=p+X+Y*(H+1),ae=p+(X+1)+Y*(H+1),ge=p+(X+1)+Y*H;l.push(ne,K,ge),l.push(K,ae,ge),D+=6}a.addGroup(g,D,R),g+=D,p+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Al(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function mu(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const i=n[t][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=i.clone():Array.isArray(i)?e[t][r]=i.slice():e[t][r]=i}}return e}function kr(n){const e={};for(let t=0;t<n.length;t++){const r=mu(n[t]);for(const i in r)e[i]=r[i]}return e}function $st(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function yI(n){return n.getRenderTarget()===null?n.outputColorSpace:Vt.workingColorSpace}const Xg={clone:mu,merge:kr};var Ust=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fst=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cs extends vr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ust,this.fragmentShader=Fst,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mu(e.uniforms),this.uniformsGroups=$st(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const i in this.extensions)this.extensions[i]===!0&&(r[i]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class eh extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=rs}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class nr extends eh{constructor(e=50,t=1,r=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=pu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pu*2*Math.atan(Math.tan(cl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,r,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(cl*.5*this.fov)/this.zoom,r=2*t,i=this.aspect*r,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,f=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*r/f,i*=o.width/l,r*=o.height/f}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fc=-90,dc=1;class _I extends Bt{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new nr(fc,dc,e,t);i.layers=this.layers,this.add(i);const s=new nr(fc,dc,e,t);s.layers=this.layers,this.add(s);const o=new nr(fc,dc,e,t);o.layers=this.layers,this.add(o);const a=new nr(fc,dc,e,t);a.layers=this.layers,this.add(a);const l=new nr(fc,dc,e,t);l.layers=this.layers,this.add(l);const f=new nr(fc,dc,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,i,s,o,a,l]=t;for(const f of t)this.remove(f);if(e===rs)r.up.set(0,1,0),r.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===hu)r.up.set(0,-1,0),r.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,f,d]=this.children,h=e.getRenderTarget(),p=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,i),e.render(t,s),e.setRenderTarget(r,1,i),e.render(t,o),e.setRenderTarget(r,2,i),e.render(t,a),e.setRenderTarget(r,3,i),e.render(t,l),e.setRenderTarget(r,4,i),e.render(t,f),r.texture.generateMipmaps=b,e.setRenderTarget(r,5,i),e.render(t,d),e.setRenderTarget(h,p,g),e.xr.enabled=y,r.texture.needsPMREMUpdate=!0}}class th extends Tn{constructor(e,t,r,i,s,o,a,l,f,d){e=e!==void 0?e:[],t=t!==void 0?t:mo,super(e,t,r,i,s,o,a,l,f,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xI extends ls{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},i=[r,r,r,r,r,r];t.encoding!==void 0&&(Gf("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===la?Vn:pi),this.texture=new th(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Al(5,5,5),s=new cs({name:"CubemapFromEquirect",uniforms:mu(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:zr,blending:so});s.uniforms.tEquirect.value=t;const o=new zn(i,s),a=t.minFilter;return t.minFilter===ma&&(t.minFilter=Dn),new _I(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,r,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,r,i);e.setRenderTarget(s)}}const C0=new U,zst=new U,Bst=new Mt;class Go{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,i){return this.normal.set(e,t,r),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const i=C0.subVectors(r,t).cross(zst.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(C0),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(r,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Bst.getNormalMatrix(e),i=this.coplanarPoint(C0).applyMatrix4(e),s=this.normal.applyMatrix3(r).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ua=new sr,nm=new U;class nh{constructor(e=new Go,t=new Go,r=new Go,i=new Go,s=new Go,o=new Go){this.planes=[e,t,r,i,s,o]}set(e,t,r,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(r),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=rs){const r=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],f=i[4],d=i[5],h=i[6],p=i[7],g=i[8],y=i[9],b=i[10],S=i[11],m=i[12],_=i[13],w=i[14],M=i[15];if(r[0].setComponents(l-s,p-f,S-g,M-m).normalize(),r[1].setComponents(l+s,p+f,S+g,M+m).normalize(),r[2].setComponents(l+o,p+d,S+y,M+_).normalize(),r[3].setComponents(l-o,p-d,S-y,M-_).normalize(),r[4].setComponents(l-a,p-h,S-b,M-w).normalize(),t===rs)r[5].setComponents(l+a,p+h,S+b,M+w).normalize();else if(t===hu)r[5].setComponents(a,h,b,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ua.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ua.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ua)}intersectsSprite(e){return Ua.center.set(0,0,0),Ua.radius=.7071067811865476,Ua.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ua)}intersectsSphere(e){const t=this.planes,r=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(r)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const i=t[r];if(nm.x=i.normal.x>0?e.max.x:e.min.x,nm.y=i.normal.y>0?e.max.y:e.min.y,nm.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(nm)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function SI(){let n=null,e=!1,t=null,r=null;function i(s,o){t(s,o),r=n.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(r=n.requestAnimationFrame(i),e=!0)},stop:function(){n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Hst(n,e){const t=e.isWebGL2,r=new WeakMap;function i(f,d){const h=f.array,p=f.usage,g=h.byteLength,y=n.createBuffer();n.bindBuffer(d,y),n.bufferData(d,h,p),f.onUploadCallback();let b;if(h instanceof Float32Array)b=n.FLOAT;else if(h instanceof Uint16Array)if(f.isFloat16BufferAttribute)if(t)b=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else b=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)b=n.SHORT;else if(h instanceof Uint32Array)b=n.UNSIGNED_INT;else if(h instanceof Int32Array)b=n.INT;else if(h instanceof Int8Array)b=n.BYTE;else if(h instanceof Uint8Array)b=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)b=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:y,type:b,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:g}}function s(f,d,h){const p=d.array,g=d._updateRange,y=d.updateRanges;if(n.bindBuffer(h,f),g.count===-1&&y.length===0&&n.bufferSubData(h,0,p),y.length!==0){for(let b=0,S=y.length;b<S;b++){const m=y[b];t?n.bufferSubData(h,m.start*p.BYTES_PER_ELEMENT,p,m.start,m.count):n.bufferSubData(h,m.start*p.BYTES_PER_ELEMENT,p.subarray(m.start,m.start+m.count))}d.clearUpdateRanges()}g.count!==-1&&(t?n.bufferSubData(h,g.offset*p.BYTES_PER_ELEMENT,p,g.offset,g.count):n.bufferSubData(h,g.offset*p.BYTES_PER_ELEMENT,p.subarray(g.offset,g.offset+g.count)),g.count=-1),d.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),r.get(f)}function a(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=r.get(f);d&&(n.deleteBuffer(d.buffer),r.delete(f))}function l(f,d){if(f.isGLBufferAttribute){const p=r.get(f);(!p||p.version<f.version)&&r.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}f.isInterleavedBufferAttribute&&(f=f.data);const h=r.get(f);if(h===void 0)r.set(f,i(f,d));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,f,d),h.version=f.version}}return{get:o,remove:a,update:l}}class rh extends wt{constructor(e=1,t=1,r=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(r),l=Math.floor(i),f=a+1,d=l+1,h=e/a,p=t/l,g=[],y=[],b=[],S=[];for(let m=0;m<d;m++){const _=m*p-o;for(let w=0;w<f;w++){const M=w*h-s;y.push(M,-_,0),b.push(0,0,1),S.push(w/a),S.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<a;_++){const w=_+f*m,M=_+f*(m+1),C=_+1+f*(m+1),A=_+1+f*m;g.push(w,M,A),g.push(M,C,A)}this.setIndex(g),this.setAttribute("position",new Ge(y,3)),this.setAttribute("normal",new Ge(b,3)),this.setAttribute("uv",new Ge(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rh(e.width,e.height,e.widthSegments,e.heightSegments)}}var Vst=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gst=`#ifdef USE_ALPHAHASH
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
#endif`,qst=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wst=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jst=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Xst=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yst=`#ifdef USE_AOMAP
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
#endif`,Zst=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kst=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Jst=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Qst=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eot=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tot=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,not=`#ifdef USE_IRIDESCENCE
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
#endif`,rot=`#ifdef USE_BUMPMAP
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
#endif`,iot=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,sot=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oot=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,aot=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lot=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cot=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uot=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,fot=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,dot=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,hot=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pot=`vec3 transformedNormal = objectNormal;
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
#endif`,mot=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,got=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vot=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yot=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_ot="gl_FragColor = linearToOutputTexel( gl_FragColor );",xot=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Sot=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,wot=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bot=`#ifdef USE_ENVMAP
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
#endif`,Eot=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mot=`#ifdef USE_ENVMAP
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
#endif`,Tot=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Aot=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cot=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rot=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pot=`#ifdef USE_GRADIENTMAP
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
}`,Lot=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Not=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Iot=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dot=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kot=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,Oot=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,$ot=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Uot=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fot=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zot=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bot=`PhysicalMaterial material;
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
#endif`,Hot=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,Vot=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Got=`#if defined( RE_IndirectDiffuse )
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
#endif`,qot=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wot=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jot=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xot=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Yot=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Zot=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kot=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jot=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qot=`#if defined( USE_POINTS_UV )
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
#endif`,eat=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tat=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nat=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rat=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,iat=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,sat=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,oat=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,aat=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lat=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cat=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uat=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fat=`#ifdef USE_NORMALMAP
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
#endif`,dat=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hat=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pat=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mat=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gat=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vat=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,yat=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_at=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xat=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sat=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wat=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bat=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Eat=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Mat=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Tat=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Aat=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Cat=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rat=`#ifdef USE_SKINNING
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
#endif`,Pat=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lat=`#ifdef USE_SKINNING
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
#endif`,Nat=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Iat=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dat=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kat=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Oat=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$at=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Uat=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fat=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zat=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bat=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hat=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vat=`uniform sampler2D t2D;
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
}`,Gat=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qat=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wat=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jat=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xat=`#include <common>
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
}`,Yat=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,Zat=`#define DISTANCE
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
}`,Kat=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Jat=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qat=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,elt=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tlt=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nlt=`#include <common>
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
}`,rlt=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ilt=`#define LAMBERT
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
}`,slt=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,olt=`#define MATCAP
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
}`,alt=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,llt=`#define NORMAL
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
}`,clt=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ult=`#define PHONG
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
}`,flt=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,dlt=`#define STANDARD
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
}`,hlt=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,plt=`#define TOON
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
}`,mlt=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,glt=`uniform float size;
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
}`,vlt=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ylt=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,_lt=`uniform vec3 color;
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
}`,xlt=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Slt=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,xt={alphahash_fragment:Vst,alphahash_pars_fragment:Gst,alphamap_fragment:qst,alphamap_pars_fragment:Wst,alphatest_fragment:jst,alphatest_pars_fragment:Xst,aomap_fragment:Yst,aomap_pars_fragment:Zst,batching_pars_vertex:Kst,batching_vertex:Jst,begin_vertex:Qst,beginnormal_vertex:eot,bsdfs:tot,iridescence_fragment:not,bumpmap_pars_fragment:rot,clipping_planes_fragment:iot,clipping_planes_pars_fragment:sot,clipping_planes_pars_vertex:oot,clipping_planes_vertex:aot,color_fragment:lot,color_pars_fragment:cot,color_pars_vertex:uot,color_vertex:fot,common:dot,cube_uv_reflection_fragment:hot,defaultnormal_vertex:pot,displacementmap_pars_vertex:mot,displacementmap_vertex:got,emissivemap_fragment:vot,emissivemap_pars_fragment:yot,colorspace_fragment:_ot,colorspace_pars_fragment:xot,envmap_fragment:Sot,envmap_common_pars_fragment:wot,envmap_pars_fragment:bot,envmap_pars_vertex:Eot,envmap_physical_pars_fragment:Oot,envmap_vertex:Mot,fog_vertex:Tot,fog_pars_vertex:Aot,fog_fragment:Cot,fog_pars_fragment:Rot,gradientmap_pars_fragment:Pot,lightmap_fragment:Lot,lightmap_pars_fragment:Not,lights_lambert_fragment:Iot,lights_lambert_pars_fragment:Dot,lights_pars_begin:kot,lights_toon_fragment:$ot,lights_toon_pars_fragment:Uot,lights_phong_fragment:Fot,lights_phong_pars_fragment:zot,lights_physical_fragment:Bot,lights_physical_pars_fragment:Hot,lights_fragment_begin:Vot,lights_fragment_maps:Got,lights_fragment_end:qot,logdepthbuf_fragment:Wot,logdepthbuf_pars_fragment:jot,logdepthbuf_pars_vertex:Xot,logdepthbuf_vertex:Yot,map_fragment:Zot,map_pars_fragment:Kot,map_particle_fragment:Jot,map_particle_pars_fragment:Qot,metalnessmap_fragment:eat,metalnessmap_pars_fragment:tat,morphcolor_vertex:nat,morphnormal_vertex:rat,morphtarget_pars_vertex:iat,morphtarget_vertex:sat,normal_fragment_begin:oat,normal_fragment_maps:aat,normal_pars_fragment:lat,normal_pars_vertex:cat,normal_vertex:uat,normalmap_pars_fragment:fat,clearcoat_normal_fragment_begin:dat,clearcoat_normal_fragment_maps:hat,clearcoat_pars_fragment:pat,iridescence_pars_fragment:mat,opaque_fragment:gat,packing:vat,premultiplied_alpha_fragment:yat,project_vertex:_at,dithering_fragment:xat,dithering_pars_fragment:Sat,roughnessmap_fragment:wat,roughnessmap_pars_fragment:bat,shadowmap_pars_fragment:Eat,shadowmap_pars_vertex:Mat,shadowmap_vertex:Tat,shadowmask_pars_fragment:Aat,skinbase_vertex:Cat,skinning_pars_vertex:Rat,skinning_vertex:Pat,skinnormal_vertex:Lat,specularmap_fragment:Nat,specularmap_pars_fragment:Iat,tonemapping_fragment:Dat,tonemapping_pars_fragment:kat,transmission_fragment:Oat,transmission_pars_fragment:$at,uv_pars_fragment:Uat,uv_pars_vertex:Fat,uv_vertex:zat,worldpos_vertex:Bat,background_vert:Hat,background_frag:Vat,backgroundCube_vert:Gat,backgroundCube_frag:qat,cube_vert:Wat,cube_frag:jat,depth_vert:Xat,depth_frag:Yat,distanceRGBA_vert:Zat,distanceRGBA_frag:Kat,equirect_vert:Jat,equirect_frag:Qat,linedashed_vert:elt,linedashed_frag:tlt,meshbasic_vert:nlt,meshbasic_frag:rlt,meshlambert_vert:ilt,meshlambert_frag:slt,meshmatcap_vert:olt,meshmatcap_frag:alt,meshnormal_vert:llt,meshnormal_frag:clt,meshphong_vert:ult,meshphong_frag:flt,meshphysical_vert:dlt,meshphysical_frag:hlt,meshtoon_vert:plt,meshtoon_frag:mlt,points_vert:glt,points_frag:vlt,shadow_vert:ylt,shadow_frag:_lt,sprite_vert:xlt,sprite_frag:Slt},Te={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Mt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Mt},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0},uvTransform:{value:new Mt}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}}},es={basic:{uniforms:kr([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:kr([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Oe(0)}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:kr([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:kr([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:kr([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new Oe(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:kr([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:kr([Te.points,Te.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:kr([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:kr([Te.common,Te.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:kr([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:kr([Te.sprite,Te.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distanceRGBA:{uniforms:kr([Te.common,Te.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distanceRGBA_vert,fragmentShader:xt.distanceRGBA_frag},shadow:{uniforms:kr([Te.lights,Te.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};es.physical={uniforms:kr([es.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Mt},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Mt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Mt},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Mt},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Mt},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Mt},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Mt}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const rm={r:0,b:0,g:0};function wlt(n,e,t,r,i,s,o){const a=new Oe(0);let l=s===!0?0:1,f,d,h=null,p=0,g=null;function y(S,m){let _=!1,w=m.isScene===!0?m.background:null;w&&w.isTexture&&(w=(m.backgroundBlurriness>0?t:e).get(w)),w===null?b(a,l):w&&w.isColor&&(b(w,1),_=!0);const M=n.xr.getEnvironmentBlendMode();M==="additive"?r.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),w&&(w.isCubeTexture||w.mapping===bu)?(d===void 0&&(d=new zn(new Al(1,1,1),new cs({name:"BackgroundCubeMaterial",uniforms:mu(es.backgroundCube.uniforms),vertexShader:es.backgroundCube.vertexShader,fragmentShader:es.backgroundCube.fragmentShader,side:zr,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=w,d.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,d.material.toneMapped=Vt.getTransfer(w.colorSpace)!==Qt,(h!==w||p!==w.version||g!==n.toneMapping)&&(d.material.needsUpdate=!0,h=w,p=w.version,g=n.toneMapping),d.layers.enableAll(),S.unshift(d,d.geometry,d.material,0,0,null)):w&&w.isTexture&&(f===void 0&&(f=new zn(new rh(2,2),new cs({name:"BackgroundMaterial",uniforms:mu(es.background.uniforms),vertexShader:es.background.vertexShader,fragmentShader:es.background.fragmentShader,side:po,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(f)),f.material.uniforms.t2D.value=w,f.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,f.material.toneMapped=Vt.getTransfer(w.colorSpace)!==Qt,w.matrixAutoUpdate===!0&&w.updateMatrix(),f.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||p!==w.version||g!==n.toneMapping)&&(f.material.needsUpdate=!0,h=w,p=w.version,g=n.toneMapping),f.layers.enableAll(),S.unshift(f,f.geometry,f.material,0,0,null))}function b(S,m){S.getRGB(rm,yI(n)),r.buffers.color.setClear(rm.r,rm.g,rm.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(S,m=1){a.set(S),l=m,b(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,b(a,l)},render:y}}function blt(n,e,t,r){const i=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=r.isWebGL2?null:e.get("OES_vertex_array_object"),o=r.isWebGL2||s!==null,a={},l=S(null);let f=l,d=!1;function h(V,Y,te,ue,D){let z=!1;if(o){const H=b(ue,te,Y);f!==H&&(f=H,g(f.object)),z=m(V,ue,te,D),z&&_(V,ue,te,D)}else{const H=Y.wireframe===!0;(f.geometry!==ue.id||f.program!==te.id||f.wireframe!==H)&&(f.geometry=ue.id,f.program=te.id,f.wireframe=H,z=!0)}D!==null&&t.update(D,n.ELEMENT_ARRAY_BUFFER),(z||d)&&(d=!1,k(V,Y,te,ue),D!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function p(){return r.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function g(V){return r.isWebGL2?n.bindVertexArray(V):s.bindVertexArrayOES(V)}function y(V){return r.isWebGL2?n.deleteVertexArray(V):s.deleteVertexArrayOES(V)}function b(V,Y,te){const ue=te.wireframe===!0;let D=a[V.id];D===void 0&&(D={},a[V.id]=D);let z=D[Y.id];z===void 0&&(z={},D[Y.id]=z);let H=z[ue];return H===void 0&&(H=S(p()),z[ue]=H),H}function S(V){const Y=[],te=[],ue=[];for(let D=0;D<i;D++)Y[D]=0,te[D]=0,ue[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:te,attributeDivisors:ue,object:V,attributes:{},index:null}}function m(V,Y,te,ue){const D=f.attributes,z=Y.attributes;let H=0;const X=te.getAttributes();for(const ne in X)if(X[ne].location>=0){const ae=D[ne];let ge=z[ne];if(ge===void 0&&(ne==="instanceMatrix"&&V.instanceMatrix&&(ge=V.instanceMatrix),ne==="instanceColor"&&V.instanceColor&&(ge=V.instanceColor)),ae===void 0||ae.attribute!==ge||ge&&ae.data!==ge.data)return!0;H++}return f.attributesNum!==H||f.index!==ue}function _(V,Y,te,ue){const D={},z=Y.attributes;let H=0;const X=te.getAttributes();for(const ne in X)if(X[ne].location>=0){let ae=z[ne];ae===void 0&&(ne==="instanceMatrix"&&V.instanceMatrix&&(ae=V.instanceMatrix),ne==="instanceColor"&&V.instanceColor&&(ae=V.instanceColor));const ge={};ge.attribute=ae,ae&&ae.data&&(ge.data=ae.data),D[ne]=ge,H++}f.attributes=D,f.attributesNum=H,f.index=ue}function w(){const V=f.newAttributes;for(let Y=0,te=V.length;Y<te;Y++)V[Y]=0}function M(V){C(V,0)}function C(V,Y){const te=f.newAttributes,ue=f.enabledAttributes,D=f.attributeDivisors;te[V]=1,ue[V]===0&&(n.enableVertexAttribArray(V),ue[V]=1),D[V]!==Y&&((r.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](V,Y),D[V]=Y)}function A(){const V=f.newAttributes,Y=f.enabledAttributes;for(let te=0,ue=Y.length;te<ue;te++)Y[te]!==V[te]&&(n.disableVertexAttribArray(te),Y[te]=0)}function P(V,Y,te,ue,D,z,H){H===!0?n.vertexAttribIPointer(V,Y,te,D,z):n.vertexAttribPointer(V,Y,te,ue,D,z)}function k(V,Y,te,ue){if(r.isWebGL2===!1&&(V.isInstancedMesh||ue.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;w();const D=ue.attributes,z=te.getAttributes(),H=Y.defaultAttributeValues;for(const X in z){const ne=z[X];if(ne.location>=0){let K=D[X];if(K===void 0&&(X==="instanceMatrix"&&V.instanceMatrix&&(K=V.instanceMatrix),X==="instanceColor"&&V.instanceColor&&(K=V.instanceColor)),K!==void 0){const ae=K.normalized,ge=K.itemSize,Me=t.get(K);if(Me===void 0)continue;const Ee=Me.buffer,Qe=Me.type,tt=Me.bytesPerElement,Ce=r.isWebGL2===!0&&(Qe===n.INT||Qe===n.UNSIGNED_INT||K.gpuType===ab);if(K.isInterleavedBufferAttribute){const Ke=K.data,G=Ke.stride,xe=K.offset;if(Ke.isInstancedInterleavedBuffer){for(let he=0;he<ne.locationSize;he++)C(ne.location+he,Ke.meshPerAttribute);V.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=Ke.meshPerAttribute*Ke.count)}else for(let he=0;he<ne.locationSize;he++)M(ne.location+he);n.bindBuffer(n.ARRAY_BUFFER,Ee);for(let he=0;he<ne.locationSize;he++)P(ne.location+he,ge/ne.locationSize,Qe,ae,G*tt,(xe+ge/ne.locationSize*he)*tt,Ce)}else{if(K.isInstancedBufferAttribute){for(let Ke=0;Ke<ne.locationSize;Ke++)C(ne.location+Ke,K.meshPerAttribute);V.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Ke=0;Ke<ne.locationSize;Ke++)M(ne.location+Ke);n.bindBuffer(n.ARRAY_BUFFER,Ee);for(let Ke=0;Ke<ne.locationSize;Ke++)P(ne.location+Ke,ge/ne.locationSize,Qe,ae,ge*tt,ge/ne.locationSize*Ke*tt,Ce)}}else if(H!==void 0){const ae=H[X];if(ae!==void 0)switch(ae.length){case 2:n.vertexAttrib2fv(ne.location,ae);break;case 3:n.vertexAttrib3fv(ne.location,ae);break;case 4:n.vertexAttrib4fv(ne.location,ae);break;default:n.vertexAttrib1fv(ne.location,ae)}}}}A()}function R(){W();for(const V in a){const Y=a[V];for(const te in Y){const ue=Y[te];for(const D in ue)y(ue[D].object),delete ue[D];delete Y[te]}delete a[V]}}function N(V){if(a[V.id]===void 0)return;const Y=a[V.id];for(const te in Y){const ue=Y[te];for(const D in ue)y(ue[D].object),delete ue[D];delete Y[te]}delete a[V.id]}function B(V){for(const Y in a){const te=a[Y];if(te[V.id]===void 0)continue;const ue=te[V.id];for(const D in ue)y(ue[D].object),delete ue[D];delete te[V.id]}}function W(){J(),d=!0,f!==l&&(f=l,g(f.object))}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:W,resetDefaultState:J,dispose:R,releaseStatesOfGeometry:N,releaseStatesOfProgram:B,initAttributes:w,enableAttribute:M,disableUnusedAttributes:A}}function Elt(n,e,t,r){const i=r.isWebGL2;let s;function o(d){s=d}function a(d,h){n.drawArrays(s,d,h),t.update(h,s,1)}function l(d,h,p){if(p===0)return;let g,y;if(i)g=n,y="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[y](s,d,h,p),t.update(h,s,p)}function f(d,h,p){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let y=0;y<p;y++)this.render(d[y],h[y]);else{g.multiDrawArraysWEBGL(s,d,0,h,0,p);let y=0;for(let b=0;b<p;b++)y+=h[b];t.update(y,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=f}function Mlt(n,e,t){let r;function i(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const f=o||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),y=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),b=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),m=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=p>0,M=o||e.has("OES_texture_float"),C=w&&M,A=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:f,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:y,maxAttributes:b,maxVertexUniforms:S,maxVaryings:m,maxFragmentUniforms:_,vertexTextures:w,floatFragmentTextures:M,floatVertexTextures:C,maxSamples:A}}function Tlt(n){const e=this;let t=null,r=0,i=!1,s=!1;const o=new Go,a=new Mt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const g=h.length!==0||p||r!==0||i;return i=p,r=h.length,g},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,p){t=d(h,p,0)},this.setState=function(h,p,g){const y=h.clippingPlanes,b=h.clipIntersection,S=h.clipShadows,m=n.get(h);if(!i||y===null||y.length===0||s&&!S)s?d(null):f();else{const _=s?0:r,w=_*4;let M=m.clippingState||null;l.value=M,M=d(y,p,w,g);for(let C=0;C!==w;++C)M[C]=t[C];m.clippingState=M,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=_}};function f(){l.value!==t&&(l.value=t,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function d(h,p,g,y){const b=h!==null?h.length:0;let S=null;if(b!==0){if(S=l.value,y!==!0||S===null){const m=g+b*4,_=p.matrixWorldInverse;a.getNormalMatrix(_),(S===null||S.length<m)&&(S=new Float32Array(m));for(let w=0,M=g;w!==b;++w,M+=4)o.copy(h[w]).applyMatrix4(_,a),o.normal.toArray(S,M),S[M+3]=o.constant}l.value=S,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,S}}function Alt(n){let e=new WeakMap;function t(o,a){return a===gd?o.mapping=mo:a===vd&&(o.mapping=pa),o}function r(o){if(o&&o.isTexture){const a=o.mapping;if(a===gd||a===vd)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const f=new xI(l.height/2);return f.fromEquirectangularTexture(n,o),e.set(o,f),o.addEventListener("dispose",i),t(f.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:r,dispose:s}}class ih extends eh{constructor(e=-1,t=1,r=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=r-e,o=r+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=f*this.view.offsetX,o=s+f*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Hc=4,A2=[.125,.215,.35,.446,.526,.582],Ya=20,R0=new ih,C2=new Oe;let P0=null,L0=0,N0=0;const Xa=(1+Math.sqrt(5))/2,hc=1/Xa,R2=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,Xa,hc),new U(0,Xa,-hc),new U(hc,0,Xa),new U(-hc,0,Xa),new U(Xa,hc,0),new U(-Xa,hc,0)];class uS{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,i=100){P0=this._renderer.getRenderTarget(),L0=this._renderer.getActiveCubeFace(),N0=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,r,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=N2(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=L2(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(P0,L0,N0),e.scissorTest=!1,im(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===mo||e.mapping===pa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),P0=this._renderer.getRenderTarget(),L0=this._renderer.getActiveCubeFace(),N0=this._renderer.getActiveMipmapLevel();const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:du,format:Ur,colorSpace:ks,depthBuffer:!1},i=P2(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=P2(e,t,r);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Clt(s)),this._blurMaterial=Rlt(s,e,t)}return i}_compileMaterial(e){const t=new zn(this._lodPlanes[0],e);this._renderer.compile(t,R0)}_sceneToCubeUV(e,t,r,i){const a=new nr(90,1,t,r),l=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(C2),d.toneMapping=Ns,d.autoClear=!1;const g=new wa({name:"PMREM.Background",side:zr,depthWrite:!1,depthTest:!1}),y=new zn(new Al,g);let b=!1;const S=e.background;S?S.isColor&&(g.color.copy(S),e.background=null,b=!0):(g.color.copy(C2),b=!0);for(let m=0;m<6;m++){const _=m%3;_===0?(a.up.set(0,l[m],0),a.lookAt(f[m],0,0)):_===1?(a.up.set(0,0,l[m]),a.lookAt(0,f[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,f[m]));const w=this._cubeSize;im(i,_*w,m>2?w:0,w,w),d.setRenderTarget(i),b&&d.render(y,a),d.render(e,a)}y.geometry.dispose(),y.material.dispose(),d.toneMapping=p,d.autoClear=h,e.background=S}_textureToCubeUV(e,t){const r=this._renderer,i=e.mapping===mo||e.mapping===pa;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=N2()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=L2());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new zn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;im(t,0,0,3*l,2*l),r.setRenderTarget(t),r.render(o,R0)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=R2[(i-1)%R2.length];this._blur(e,i-1,i,s,o)}t.autoClear=r}_blur(e,t,r,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,r,i,"latitudinal",s),this._halfBlur(o,e,r,r,i,"longitudinal",s)}_halfBlur(e,t,r,i,s,o,a){const l=this._renderer,f=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new zn(this._lodPlanes[i],f),p=f.uniforms,g=this._sizeLods[r]-1,y=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Ya-1),b=s/y,S=isFinite(s)?1+Math.floor(d*b):Ya;S>Ya&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Ya}`);const m=[];let _=0;for(let P=0;P<Ya;++P){const k=P/b,R=Math.exp(-k*k/2);m.push(R),P===0?_+=R:P<S&&(_+=2*R)}for(let P=0;P<m.length;P++)m[P]=m[P]/_;p.envMap.value=e.texture,p.samples.value=S,p.weights.value=m,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:w}=this;p.dTheta.value=y,p.mipInt.value=w-r;const M=this._sizeLods[i],C=3*M*(i>w-Hc?i-w+Hc:0),A=4*(this._cubeSize-M);im(t,C,A,3*M,2*M),l.setRenderTarget(t),l.render(h,R0)}}function Clt(n){const e=[],t=[],r=[];let i=n;const s=n-Hc+1+A2.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>n-Hc?l=A2[o-n+Hc-1]:o===0&&(l=0),r.push(l);const f=1/(a-2),d=-f,h=1+f,p=[d,d,h,d,h,h,d,d,h,h,d,h],g=6,y=6,b=3,S=2,m=1,_=new Float32Array(b*y*g),w=new Float32Array(S*y*g),M=new Float32Array(m*y*g);for(let A=0;A<g;A++){const P=A%3*2/3-1,k=A>2?0:-1,R=[P,k,0,P+2/3,k,0,P+2/3,k+1,0,P,k,0,P+2/3,k+1,0,P,k+1,0];_.set(R,b*y*A),w.set(p,S*y*A);const N=[A,A,A,A,A,A];M.set(N,m*y*A)}const C=new wt;C.setAttribute("position",new qt(_,b)),C.setAttribute("uv",new qt(w,S)),C.setAttribute("faceIndex",new qt(M,m)),e.push(C),i>Hc&&i--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function P2(n,e,t){const r=new ls(n,e,t);return r.texture.mapping=bu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function im(n,e,t,r,i){n.viewport.set(e,t,r,i),n.scissor.set(e,t,r,i)}function Rlt(n,e,t){const r=new Float32Array(Ya),i=new U(0,1,0);return new cs({name:"SphericalGaussianBlur",defines:{n:Ya,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:wb(),fragmentShader:`

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
		`,blending:so,depthTest:!1,depthWrite:!1})}function L2(){return new cs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wb(),fragmentShader:`

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
		`,blending:so,depthTest:!1,depthWrite:!1})}function N2(){return new cs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wb(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:so,depthTest:!1,depthWrite:!1})}function wb(){return`

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
	`}function Plt(n){let e=new WeakMap,t=null;function r(a){if(a&&a.isTexture){const l=a.mapping,f=l===gd||l===vd,d=l===mo||l===pa;if(f||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new uS(n)),h=f?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(f&&h&&h.height>0||d&&h&&i(h)){t===null&&(t=new uS(n));const p=f?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,p),a.addEventListener("dispose",s),p.texture}else return null}}}return a}function i(a){let l=0;const f=6;for(let d=0;d<f;d++)a[d]!==void 0&&l++;return l===f}function s(a){const l=a.target;l.removeEventListener("dispose",s);const f=e.get(l);f!==void 0&&(e.delete(l),f.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:o}}function Llt(n){const e={};function t(r){if(e[r]!==void 0)return e[r];let i;switch(r){case"WEBGL_depth_texture":i=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=n.getExtension(r)}return e[r]=i,i}return{has:function(r){return t(r)!==null},init:function(r){r.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(r){const i=t(r);return i===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),i}}}function Nlt(n,e,t,r){const i={},s=new WeakMap;function o(h){const p=h.target;p.index!==null&&e.remove(p.index);for(const y in p.attributes)e.remove(p.attributes[y]);for(const y in p.morphAttributes){const b=p.morphAttributes[y];for(let S=0,m=b.length;S<m;S++)e.remove(b[S])}p.removeEventListener("dispose",o),delete i[p.id];const g=s.get(p);g&&(e.remove(g),s.delete(p)),r.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(h,p){return i[p.id]===!0||(p.addEventListener("dispose",o),i[p.id]=!0,t.memory.geometries++),p}function l(h){const p=h.attributes;for(const y in p)e.update(p[y],n.ARRAY_BUFFER);const g=h.morphAttributes;for(const y in g){const b=g[y];for(let S=0,m=b.length;S<m;S++)e.update(b[S],n.ARRAY_BUFFER)}}function f(h){const p=[],g=h.index,y=h.attributes.position;let b=0;if(g!==null){const _=g.array;b=g.version;for(let w=0,M=_.length;w<M;w+=3){const C=_[w+0],A=_[w+1],P=_[w+2];p.push(C,A,A,P,P,C)}}else if(y!==void 0){const _=y.array;b=y.version;for(let w=0,M=_.length/3-1;w<M;w+=3){const C=w+0,A=w+1,P=w+2;p.push(C,A,A,P,P,C)}}else return;const S=new(pI(p)?Sb:xb)(p,1);S.version=b;const m=s.get(h);m&&e.remove(m),s.set(h,S)}function d(h){const p=s.get(h);if(p){const g=h.index;g!==null&&p.version<g.version&&f(h)}else f(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function Ilt(n,e,t,r){const i=r.isWebGL2;let s;function o(g){s=g}let a,l;function f(g){a=g.type,l=g.bytesPerElement}function d(g,y){n.drawElements(s,y,a,g*l),t.update(y,s,1)}function h(g,y,b){if(b===0)return;let S,m;if(i)S=n,m="drawElementsInstanced";else if(S=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",S===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[m](s,y,a,g*l,b),t.update(y,s,b)}function p(g,y,b){if(b===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let m=0;m<b;m++)this.render(g[m]/l,y[m]);else{S.multiDrawElementsWEBGL(s,y,0,a,g,0,b);let m=0;for(let _=0;_<b;_++)m+=y[_];t.update(m,s,1)}}this.setMode=o,this.setIndex=f,this.render=d,this.renderInstances=h,this.renderMultiDraw=p}function Dlt(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:r}}function klt(n,e){return n[0]-e[0]}function Olt(n,e){return Math.abs(e[1])-Math.abs(n[1])}function $lt(n,e,t){const r={},i=new Float32Array(8),s=new WeakMap,o=new It,a=[];for(let f=0;f<8;f++)a[f]=[f,0];function l(f,d,h){const p=f.morphTargetInfluences;if(e.isWebGL2===!0){const y=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,b=y!==void 0?y.length:0;let S=s.get(d);if(S===void 0||S.count!==b){let Y=function(){J.dispose(),s.delete(d),d.removeEventListener("dispose",Y)};var g=Y;S!==void 0&&S.texture.dispose();const w=d.morphAttributes.position!==void 0,M=d.morphAttributes.normal!==void 0,C=d.morphAttributes.color!==void 0,A=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],k=d.morphAttributes.color||[];let R=0;w===!0&&(R=1),M===!0&&(R=2),C===!0&&(R=3);let N=d.attributes.position.count*R,B=1;N>e.maxTextureSize&&(B=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const W=new Float32Array(N*B*4*b),J=new Bv(W,N,B,b);J.type=ns,J.needsUpdate=!0;const V=R*4;for(let te=0;te<b;te++){const ue=A[te],D=P[te],z=k[te],H=N*B*4*te;for(let X=0;X<ue.count;X++){const ne=X*V;w===!0&&(o.fromBufferAttribute(ue,X),W[H+ne+0]=o.x,W[H+ne+1]=o.y,W[H+ne+2]=o.z,W[H+ne+3]=0),M===!0&&(o.fromBufferAttribute(D,X),W[H+ne+4]=o.x,W[H+ne+5]=o.y,W[H+ne+6]=o.z,W[H+ne+7]=0),C===!0&&(o.fromBufferAttribute(z,X),W[H+ne+8]=o.x,W[H+ne+9]=o.y,W[H+ne+10]=o.z,W[H+ne+11]=z.itemSize===4?o.w:1)}}S={count:b,texture:J,size:new pe(N,B)},s.set(d,S),d.addEventListener("dispose",Y)}let m=0;for(let w=0;w<p.length;w++)m+=p[w];const _=d.morphTargetsRelative?1:1-m;h.getUniforms().setValue(n,"morphTargetBaseInfluence",_),h.getUniforms().setValue(n,"morphTargetInfluences",p),h.getUniforms().setValue(n,"morphTargetsTexture",S.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",S.size)}else{const y=p===void 0?0:p.length;let b=r[d.id];if(b===void 0||b.length!==y){b=[];for(let M=0;M<y;M++)b[M]=[M,0];r[d.id]=b}for(let M=0;M<y;M++){const C=b[M];C[0]=M,C[1]=p[M]}b.sort(Olt);for(let M=0;M<8;M++)M<y&&b[M][1]?(a[M][0]=b[M][0],a[M][1]=b[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(klt);const S=d.morphAttributes.position,m=d.morphAttributes.normal;let _=0;for(let M=0;M<8;M++){const C=a[M],A=C[0],P=C[1];A!==Number.MAX_SAFE_INTEGER&&P?(S&&d.getAttribute("morphTarget"+M)!==S[A]&&d.setAttribute("morphTarget"+M,S[A]),m&&d.getAttribute("morphNormal"+M)!==m[A]&&d.setAttribute("morphNormal"+M,m[A]),i[M]=P,_+=P):(S&&d.hasAttribute("morphTarget"+M)===!0&&d.deleteAttribute("morphTarget"+M),m&&d.hasAttribute("morphNormal"+M)===!0&&d.deleteAttribute("morphNormal"+M),i[M]=0)}const w=d.morphTargetsRelative?1:1-_;h.getUniforms().setValue(n,"morphTargetBaseInfluence",w),h.getUniforms().setValue(n,"morphTargetInfluences",i)}}return{update:l}}function Ult(n,e,t,r){let i=new WeakMap;function s(l){const f=r.render.frame,d=l.geometry,h=e.get(l,d);if(i.get(h)!==f&&(e.update(h),i.set(h,f)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==f&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),i.set(l,f))),l.isSkinnedMesh){const p=l.skeleton;i.get(p)!==f&&(p.update(),i.set(p,f))}return h}function o(){i=new WeakMap}function a(l){const f=l.target;f.removeEventListener("dispose",a),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:s,dispose:o}}class bb extends Tn{constructor(e,t,r,i,s,o,a,l,f,d){if(d=d!==void 0?d:aa,d!==aa&&d!==Sl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&d===aa&&(r=no),r===void 0&&d===Sl&&(r=oa),super(null,i,s,o,a,l,d,r,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Nn,this.minFilter=l!==void 0?l:Nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const wI=new Tn,bI=new bb(1,1);bI.compareFunction=gb;const EI=new Bv,MI=new _b,TI=new th,I2=[],D2=[],k2=new Float32Array(16),O2=new Float32Array(9),$2=new Float32Array(4);function Mu(n,e,t){const r=n[0];if(r<=0||r>0)return n;const i=e*t;let s=I2[i];if(s===void 0&&(s=new Float32Array(i),I2[i]=s),e!==0){r.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Wn(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function jn(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function Hv(n,e){let t=D2[e];t===void 0&&(t=new Int32Array(e),D2[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function Flt(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function zlt(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wn(t,e))return;n.uniform2fv(this.addr,e),jn(t,e)}}function Blt(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wn(t,e))return;n.uniform3fv(this.addr,e),jn(t,e)}}function Hlt(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wn(t,e))return;n.uniform4fv(this.addr,e),jn(t,e)}}function Vlt(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(Wn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),jn(t,e)}else{if(Wn(t,r))return;$2.set(r),n.uniformMatrix2fv(this.addr,!1,$2),jn(t,r)}}function Glt(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(Wn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),jn(t,e)}else{if(Wn(t,r))return;O2.set(r),n.uniformMatrix3fv(this.addr,!1,O2),jn(t,r)}}function qlt(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(Wn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),jn(t,e)}else{if(Wn(t,r))return;k2.set(r),n.uniformMatrix4fv(this.addr,!1,k2),jn(t,r)}}function Wlt(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function jlt(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wn(t,e))return;n.uniform2iv(this.addr,e),jn(t,e)}}function Xlt(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wn(t,e))return;n.uniform3iv(this.addr,e),jn(t,e)}}function Ylt(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wn(t,e))return;n.uniform4iv(this.addr,e),jn(t,e)}}function Zlt(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Klt(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wn(t,e))return;n.uniform2uiv(this.addr,e),jn(t,e)}}function Jlt(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wn(t,e))return;n.uniform3uiv(this.addr,e),jn(t,e)}}function Qlt(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wn(t,e))return;n.uniform4uiv(this.addr,e),jn(t,e)}}function ect(n,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i);const s=this.type===n.SAMPLER_2D_SHADOW?bI:wI;t.setTexture2D(e||s,i)}function tct(n,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i),t.setTexture3D(e||MI,i)}function nct(n,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i),t.setTextureCube(e||TI,i)}function rct(n,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i),t.setTexture2DArray(e||EI,i)}function ict(n){switch(n){case 5126:return Flt;case 35664:return zlt;case 35665:return Blt;case 35666:return Hlt;case 35674:return Vlt;case 35675:return Glt;case 35676:return qlt;case 5124:case 35670:return Wlt;case 35667:case 35671:return jlt;case 35668:case 35672:return Xlt;case 35669:case 35673:return Ylt;case 5125:return Zlt;case 36294:return Klt;case 36295:return Jlt;case 36296:return Qlt;case 35678:case 36198:case 36298:case 36306:case 35682:return ect;case 35679:case 36299:case 36307:return tct;case 35680:case 36300:case 36308:case 36293:return nct;case 36289:case 36303:case 36311:case 36292:return rct}}function sct(n,e){n.uniform1fv(this.addr,e)}function oct(n,e){const t=Mu(e,this.size,2);n.uniform2fv(this.addr,t)}function act(n,e){const t=Mu(e,this.size,3);n.uniform3fv(this.addr,t)}function lct(n,e){const t=Mu(e,this.size,4);n.uniform4fv(this.addr,t)}function cct(n,e){const t=Mu(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function uct(n,e){const t=Mu(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function fct(n,e){const t=Mu(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function dct(n,e){n.uniform1iv(this.addr,e)}function hct(n,e){n.uniform2iv(this.addr,e)}function pct(n,e){n.uniform3iv(this.addr,e)}function mct(n,e){n.uniform4iv(this.addr,e)}function gct(n,e){n.uniform1uiv(this.addr,e)}function vct(n,e){n.uniform2uiv(this.addr,e)}function yct(n,e){n.uniform3uiv(this.addr,e)}function _ct(n,e){n.uniform4uiv(this.addr,e)}function xct(n,e,t){const r=this.cache,i=e.length,s=Hv(t,i);Wn(r,s)||(n.uniform1iv(this.addr,s),jn(r,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||wI,s[o])}function Sct(n,e,t){const r=this.cache,i=e.length,s=Hv(t,i);Wn(r,s)||(n.uniform1iv(this.addr,s),jn(r,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||MI,s[o])}function wct(n,e,t){const r=this.cache,i=e.length,s=Hv(t,i);Wn(r,s)||(n.uniform1iv(this.addr,s),jn(r,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||TI,s[o])}function bct(n,e,t){const r=this.cache,i=e.length,s=Hv(t,i);Wn(r,s)||(n.uniform1iv(this.addr,s),jn(r,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||EI,s[o])}function Ect(n){switch(n){case 5126:return sct;case 35664:return oct;case 35665:return act;case 35666:return lct;case 35674:return cct;case 35675:return uct;case 35676:return fct;case 5124:case 35670:return dct;case 35667:case 35671:return hct;case 35668:case 35672:return pct;case 35669:case 35673:return mct;case 5125:return gct;case 36294:return vct;case 36295:return yct;case 36296:return _ct;case 35678:case 36198:case 36298:case 36306:case 35682:return xct;case 35679:case 36299:case 36307:return Sct;case 35680:case 36300:case 36308:case 36293:return wct;case 36289:case 36303:case 36311:case 36292:return bct}}class Mct{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=ict(t.type)}}class Tct{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ect(t.type)}}class Act{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],r)}}}const I0=/(\w+)(\])?(\[|\.)?/g;function U2(n,e){n.seq.push(e),n.map[e.id]=e}function Cct(n,e,t){const r=n.name,i=r.length;for(I0.lastIndex=0;;){const s=I0.exec(r),o=I0.lastIndex;let a=s[1];const l=s[2]==="]",f=s[3];if(l&&(a=a|0),f===void 0||f==="["&&o+2===i){U2(t,f===void 0?new Mct(a,n,e):new Tct(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new Act(a),U2(t,h)),t=h}}}class ig{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<r;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Cct(s,o,this)}}setValue(e,t,r,i){const s=this.map[t];s!==void 0&&s.setValue(e,r,i)}setOptional(e,t,r){const i=t[r];i!==void 0&&this.setValue(e,r,i)}static upload(e,t,r,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=r[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const r=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&r.push(o)}return r}}function F2(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const Rct=37297;let Pct=0;function Lct(n,e){const t=n.split(`
`),r=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;r.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return r.join(`
`)}function Nct(n){const e=Vt.getPrimaries(Vt.workingColorSpace),t=Vt.getPrimaries(n);let r;switch(e===t?r="":e===Md&&t===Ed?r="LinearDisplayP3ToLinearSRGB":e===Ed&&t===Md&&(r="LinearSRGBToLinearDisplayP3"),n){case ks:case Jd:return[r,"LinearTransferOETF"];case Vn:case zv:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[r,"LinearTransferOETF"]}}function z2(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),i=n.getShaderInfoLog(e).trim();if(r&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Lct(n.getShaderSource(e),o)}else return i}function Ict(n,e){const t=Nct(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Dct(n,e){let t;switch(e){case zN:t="Linear";break;case BN:t="Reinhard";break;case HN:t="OptimizedCineon";break;case sb:t="ACESFilmic";break;case GN:t="AgX";break;case VN:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function kct(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Vc).join(`
`)}function Oct(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Vc).join(`
`)}function $ct(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function Uct(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){const s=n.getActiveAttrib(e,i),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Vc(n){return n!==""}function B2(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function H2(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Fct=/^[ \t]*#include +<([\w\d./]+)>/gm;function fS(n){return n.replace(Fct,Bct)}const zct=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Bct(n,e){let t=xt[e];if(t===void 0){const r=zct.get(e);if(r!==void 0)t=xt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return fS(t)}const Hct=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function V2(n){return n.replace(Hct,Vct)}function Vct(n,e,t,r){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=r.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function G2(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Gct(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ov?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Bf?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ki&&(e="SHADOWMAP_TYPE_VSM"),e}function qct(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case mo:case pa:e="ENVMAP_TYPE_CUBE";break;case bu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Wct(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case pa:e="ENVMAP_MODE_REFRACTION";break}return e}function jct(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Kd:e="ENVMAP_BLENDING_MULTIPLY";break;case UN:e="ENVMAP_BLENDING_MIX";break;case FN:e="ENVMAP_BLENDING_ADD";break}return e}function Xct(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function Yct(n,e,t,r){const i=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Gct(t),f=qct(t),d=Wct(t),h=jct(t),p=Xct(t),g=t.isWebGL2?"":kct(t),y=Oct(t),b=$ct(s),S=i.createProgram();let m,_,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Vc).join(`
`),m.length>0&&(m+=`
`),_=[g,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Vc).join(`
`),_.length>0&&(_+=`
`)):(m=[G2(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vc).join(`
`),_=[g,G2(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ns?"#define TONE_MAPPING":"",t.toneMapping!==Ns?xt.tonemapping_pars_fragment:"",t.toneMapping!==Ns?Dct("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,Ict("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vc).join(`
`)),o=fS(o),o=B2(o,t),o=H2(o,t),a=fS(a),a=B2(a,t),a=H2(a,t),o=V2(o),a=V2(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===lS?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lS?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const M=w+m+o,C=w+_+a,A=F2(i,i.VERTEX_SHADER,M),P=F2(i,i.FRAGMENT_SHADER,C);i.attachShader(S,A),i.attachShader(S,P),t.index0AttributeName!==void 0?i.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(S,0,"position"),i.linkProgram(S);function k(W){if(n.debug.checkShaderErrors){const J=i.getProgramInfoLog(S).trim(),V=i.getShaderInfoLog(A).trim(),Y=i.getShaderInfoLog(P).trim();let te=!0,ue=!0;if(i.getProgramParameter(S,i.LINK_STATUS)===!1)if(te=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(i,S,A,P);else{const D=z2(i,A,"vertex"),z=z2(i,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(S,i.VALIDATE_STATUS)+`

Program Info Log: `+J+`
`+D+`
`+z)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(V===""||Y==="")&&(ue=!1);ue&&(W.diagnostics={runnable:te,programLog:J,vertexShader:{log:V,prefix:m},fragmentShader:{log:Y,prefix:_}})}i.deleteShader(A),i.deleteShader(P),R=new ig(i,S),N=Uct(i,S)}let R;this.getUniforms=function(){return R===void 0&&k(this),R};let N;this.getAttributes=function(){return N===void 0&&k(this),N};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=i.getProgramParameter(S,Rct)),B},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Pct++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=A,this.fragmentShader=P,this}let Zct=0;class Kct{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(r),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new Jct(e),t.set(e,r)),r}}class Jct{constructor(e){this.id=Zct++,this.code=e,this.usedTimes=0}}function Qct(n,e,t,r,i,s,o){const a=new ul,l=new Kct,f=[],d=i.isWebGL2,h=i.logarithmicDepthBuffer,p=i.vertexTextures;let g=i.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(R){return R===0?"uv":`uv${R}`}function S(R,N,B,W,J){const V=W.fog,Y=J.geometry,te=R.isMeshStandardMaterial?W.environment:null,ue=(R.isMeshStandardMaterial?t:e).get(R.envMap||te),D=ue&&ue.mapping===bu?ue.image.height:null,z=y[R.type];R.precision!==null&&(g=i.getMaxPrecision(R.precision),g!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",g,"instead."));const H=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,X=H!==void 0?H.length:0;let ne=0;Y.morphAttributes.position!==void 0&&(ne=1),Y.morphAttributes.normal!==void 0&&(ne=2),Y.morphAttributes.color!==void 0&&(ne=3);let K,ae,ge,Me;if(z){const Xn=es[z];K=Xn.vertexShader,ae=Xn.fragmentShader}else K=R.vertexShader,ae=R.fragmentShader,l.update(R),ge=l.getVertexShaderID(R),Me=l.getFragmentShaderID(R);const Ee=n.getRenderTarget(),Qe=J.isInstancedMesh===!0,tt=J.isBatchedMesh===!0,Ce=!!R.map,Ke=!!R.matcap,G=!!ue,xe=!!R.aoMap,he=!!R.lightMap,we=!!R.bumpMap,de=!!R.normalMap,Ze=!!R.displacementMap,ke=!!R.emissiveMap,O=!!R.metalnessMap,I=!!R.roughnessMap,ee=R.anisotropy>0,_e=R.clearcoat>0,ve=R.iridescence>0,me=R.sheen>0,qe=R.transmission>0,Re=ee&&!!R.anisotropyMap,Fe=_e&&!!R.clearcoatMap,it=_e&&!!R.clearcoatNormalMap,gt=_e&&!!R.clearcoatRoughnessMap,ye=ve&&!!R.iridescenceMap,Dt=ve&&!!R.iridescenceThicknessMap,Tt=me&&!!R.sheenColorMap,dt=me&&!!R.sheenRoughnessMap,et=!!R.specularMap,Ve=!!R.specularColorMap,_t=!!R.specularIntensityMap,$t=qe&&!!R.transmissionMap,an=qe&&!!R.thicknessMap,bt=!!R.gradientMap,Ae=!!R.alphaMap,q=R.alphaTest>0,Pe=!!R.alphaHash,Le=!!R.extensions,at=!!Y.attributes.uv1,nt=!!Y.attributes.uv2,Xt=!!Y.attributes.uv3;let Ht=Ns;return R.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(Ht=n.toneMapping),{isWebGL2:d,shaderID:z,shaderType:R.type,shaderName:R.name,vertexShader:K,fragmentShader:ae,defines:R.defines,customVertexShaderID:ge,customFragmentShaderID:Me,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:g,batching:tt,instancing:Qe,instancingColor:Qe&&J.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:Ee===null?n.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:ks,map:Ce,matcap:Ke,envMap:G,envMapMode:G&&ue.mapping,envMapCubeUVHeight:D,aoMap:xe,lightMap:he,bumpMap:we,normalMap:de,displacementMap:p&&Ze,emissiveMap:ke,normalMapObjectSpace:de&&R.normalMapType===sI,normalMapTangentSpace:de&&R.normalMapType===Sa,metalnessMap:O,roughnessMap:I,anisotropy:ee,anisotropyMap:Re,clearcoat:_e,clearcoatMap:Fe,clearcoatNormalMap:it,clearcoatRoughnessMap:gt,iridescence:ve,iridescenceMap:ye,iridescenceThicknessMap:Dt,sheen:me,sheenColorMap:Tt,sheenRoughnessMap:dt,specularMap:et,specularColorMap:Ve,specularIntensityMap:_t,transmission:qe,transmissionMap:$t,thicknessMap:an,gradientMap:bt,opaque:R.transparent===!1&&R.blending===ll,alphaMap:Ae,alphaTest:q,alphaHash:Pe,combine:R.combine,mapUv:Ce&&b(R.map.channel),aoMapUv:xe&&b(R.aoMap.channel),lightMapUv:he&&b(R.lightMap.channel),bumpMapUv:we&&b(R.bumpMap.channel),normalMapUv:de&&b(R.normalMap.channel),displacementMapUv:Ze&&b(R.displacementMap.channel),emissiveMapUv:ke&&b(R.emissiveMap.channel),metalnessMapUv:O&&b(R.metalnessMap.channel),roughnessMapUv:I&&b(R.roughnessMap.channel),anisotropyMapUv:Re&&b(R.anisotropyMap.channel),clearcoatMapUv:Fe&&b(R.clearcoatMap.channel),clearcoatNormalMapUv:it&&b(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&b(R.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&b(R.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&b(R.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&b(R.sheenColorMap.channel),sheenRoughnessMapUv:dt&&b(R.sheenRoughnessMap.channel),specularMapUv:et&&b(R.specularMap.channel),specularColorMapUv:Ve&&b(R.specularColorMap.channel),specularIntensityMapUv:_t&&b(R.specularIntensityMap.channel),transmissionMapUv:$t&&b(R.transmissionMap.channel),thicknessMapUv:an&&b(R.thicknessMap.channel),alphaMapUv:Ae&&b(R.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(de||ee),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,vertexUv1s:at,vertexUv2s:nt,vertexUv3s:Xt,pointsUvs:J.isPoints===!0&&!!Y.attributes.uv&&(Ce||Ae),fog:!!V,useFog:R.fog===!0,fogExp2:V&&V.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:J.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:ne,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:R.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ht,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ce&&R.map.isVideoTexture===!0&&Vt.getTransfer(R.map.colorSpace)===Qt,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===As,flipSided:R.side===zr,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionDerivatives:Le&&R.extensions.derivatives===!0,extensionFragDepth:Le&&R.extensions.fragDepth===!0,extensionDrawBuffers:Le&&R.extensions.drawBuffers===!0,extensionShaderTextureLOD:Le&&R.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Le&&R.extensions.clipCullDistance&&r.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()}}function m(R){const N=[];if(R.shaderID?N.push(R.shaderID):(N.push(R.customVertexShaderID),N.push(R.customFragmentShaderID)),R.defines!==void 0)for(const B in R.defines)N.push(B),N.push(R.defines[B]);return R.isRawShaderMaterial===!1&&(_(N,R),w(N,R),N.push(n.outputColorSpace)),N.push(R.customProgramCacheKey),N.join()}function _(R,N){R.push(N.precision),R.push(N.outputColorSpace),R.push(N.envMapMode),R.push(N.envMapCubeUVHeight),R.push(N.mapUv),R.push(N.alphaMapUv),R.push(N.lightMapUv),R.push(N.aoMapUv),R.push(N.bumpMapUv),R.push(N.normalMapUv),R.push(N.displacementMapUv),R.push(N.emissiveMapUv),R.push(N.metalnessMapUv),R.push(N.roughnessMapUv),R.push(N.anisotropyMapUv),R.push(N.clearcoatMapUv),R.push(N.clearcoatNormalMapUv),R.push(N.clearcoatRoughnessMapUv),R.push(N.iridescenceMapUv),R.push(N.iridescenceThicknessMapUv),R.push(N.sheenColorMapUv),R.push(N.sheenRoughnessMapUv),R.push(N.specularMapUv),R.push(N.specularColorMapUv),R.push(N.specularIntensityMapUv),R.push(N.transmissionMapUv),R.push(N.thicknessMapUv),R.push(N.combine),R.push(N.fogExp2),R.push(N.sizeAttenuation),R.push(N.morphTargetsCount),R.push(N.morphAttributeCount),R.push(N.numDirLights),R.push(N.numPointLights),R.push(N.numSpotLights),R.push(N.numSpotLightMaps),R.push(N.numHemiLights),R.push(N.numRectAreaLights),R.push(N.numDirLightShadows),R.push(N.numPointLightShadows),R.push(N.numSpotLightShadows),R.push(N.numSpotLightShadowsWithMaps),R.push(N.numLightProbes),R.push(N.shadowMapType),R.push(N.toneMapping),R.push(N.numClippingPlanes),R.push(N.numClipIntersection),R.push(N.depthPacking)}function w(R,N){a.disableAll(),N.isWebGL2&&a.enable(0),N.supportsVertexTextures&&a.enable(1),N.instancing&&a.enable(2),N.instancingColor&&a.enable(3),N.matcap&&a.enable(4),N.envMap&&a.enable(5),N.normalMapObjectSpace&&a.enable(6),N.normalMapTangentSpace&&a.enable(7),N.clearcoat&&a.enable(8),N.iridescence&&a.enable(9),N.alphaTest&&a.enable(10),N.vertexColors&&a.enable(11),N.vertexAlphas&&a.enable(12),N.vertexUv1s&&a.enable(13),N.vertexUv2s&&a.enable(14),N.vertexUv3s&&a.enable(15),N.vertexTangents&&a.enable(16),N.anisotropy&&a.enable(17),N.alphaHash&&a.enable(18),N.batching&&a.enable(19),R.push(a.mask),a.disableAll(),N.fog&&a.enable(0),N.useFog&&a.enable(1),N.flatShading&&a.enable(2),N.logarithmicDepthBuffer&&a.enable(3),N.skinning&&a.enable(4),N.morphTargets&&a.enable(5),N.morphNormals&&a.enable(6),N.morphColors&&a.enable(7),N.premultipliedAlpha&&a.enable(8),N.shadowMapEnabled&&a.enable(9),N.useLegacyLights&&a.enable(10),N.doubleSided&&a.enable(11),N.flipSided&&a.enable(12),N.useDepthPacking&&a.enable(13),N.dithering&&a.enable(14),N.transmission&&a.enable(15),N.sheen&&a.enable(16),N.opaque&&a.enable(17),N.pointsUvs&&a.enable(18),N.decodeVideoTexture&&a.enable(19),R.push(a.mask)}function M(R){const N=y[R.type];let B;if(N){const W=es[N];B=Xg.clone(W.uniforms)}else B=R.uniforms;return B}function C(R,N){let B;for(let W=0,J=f.length;W<J;W++){const V=f[W];if(V.cacheKey===N){B=V,++B.usedTimes;break}}return B===void 0&&(B=new Yct(n,N,R,s),f.push(B)),B}function A(R){if(--R.usedTimes===0){const N=f.indexOf(R);f[N]=f[f.length-1],f.pop(),R.destroy()}}function P(R){l.remove(R)}function k(){l.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:M,acquireProgram:C,releaseProgram:A,releaseShaderCache:P,programs:f,dispose:k}}function eut(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function r(s,o,a){n.get(s)[o]=a}function i(){n=new WeakMap}return{get:e,remove:t,update:r,dispose:i}}function tut(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function q2(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function W2(){const n=[];let e=0;const t=[],r=[],i=[];function s(){e=0,t.length=0,r.length=0,i.length=0}function o(h,p,g,y,b,S){let m=n[e];return m===void 0?(m={id:h.id,object:h,geometry:p,material:g,groupOrder:y,renderOrder:h.renderOrder,z:b,group:S},n[e]=m):(m.id=h.id,m.object=h,m.geometry=p,m.material=g,m.groupOrder=y,m.renderOrder=h.renderOrder,m.z=b,m.group=S),e++,m}function a(h,p,g,y,b,S){const m=o(h,p,g,y,b,S);g.transmission>0?r.push(m):g.transparent===!0?i.push(m):t.push(m)}function l(h,p,g,y,b,S){const m=o(h,p,g,y,b,S);g.transmission>0?r.unshift(m):g.transparent===!0?i.unshift(m):t.unshift(m)}function f(h,p){t.length>1&&t.sort(h||tut),r.length>1&&r.sort(p||q2),i.length>1&&i.sort(p||q2)}function d(){for(let h=e,p=n.length;h<p;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:r,transparent:i,init:s,push:a,unshift:l,finish:d,sort:f}}function nut(){let n=new WeakMap;function e(r,i){const s=n.get(r);let o;return s===void 0?(o=new W2,n.set(r,[o])):i>=s.length?(o=new W2,s.push(o)):o=s[i],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function rut(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Oe};break;case"SpotLight":t={position:new U,direction:new U,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function iut(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let sut=0;function out(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function aut(n,e){const t=new rut,r=iut(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new U);const s=new U,o=new ut,a=new ut;function l(d,h){let p=0,g=0,y=0;for(let W=0;W<9;W++)i.probe[W].set(0,0,0);let b=0,S=0,m=0,_=0,w=0,M=0,C=0,A=0,P=0,k=0,R=0;d.sort(out);const N=h===!0?Math.PI:1;for(let W=0,J=d.length;W<J;W++){const V=d[W],Y=V.color,te=V.intensity,ue=V.distance,D=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)p+=Y.r*te*N,g+=Y.g*te*N,y+=Y.b*te*N;else if(V.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(V.sh.coefficients[z],te);R++}else if(V.isDirectionalLight){const z=t.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity*N),V.castShadow){const H=V.shadow,X=r.get(V);X.shadowBias=H.bias,X.shadowNormalBias=H.normalBias,X.shadowRadius=H.radius,X.shadowMapSize=H.mapSize,i.directionalShadow[b]=X,i.directionalShadowMap[b]=D,i.directionalShadowMatrix[b]=V.shadow.matrix,M++}i.directional[b]=z,b++}else if(V.isSpotLight){const z=t.get(V);z.position.setFromMatrixPosition(V.matrixWorld),z.color.copy(Y).multiplyScalar(te*N),z.distance=ue,z.coneCos=Math.cos(V.angle),z.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),z.decay=V.decay,i.spot[m]=z;const H=V.shadow;if(V.map&&(i.spotLightMap[P]=V.map,P++,H.updateMatrices(V),V.castShadow&&k++),i.spotLightMatrix[m]=H.matrix,V.castShadow){const X=r.get(V);X.shadowBias=H.bias,X.shadowNormalBias=H.normalBias,X.shadowRadius=H.radius,X.shadowMapSize=H.mapSize,i.spotShadow[m]=X,i.spotShadowMap[m]=D,A++}m++}else if(V.isRectAreaLight){const z=t.get(V);z.color.copy(Y).multiplyScalar(te),z.halfWidth.set(V.width*.5,0,0),z.halfHeight.set(0,V.height*.5,0),i.rectArea[_]=z,_++}else if(V.isPointLight){const z=t.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity*N),z.distance=V.distance,z.decay=V.decay,V.castShadow){const H=V.shadow,X=r.get(V);X.shadowBias=H.bias,X.shadowNormalBias=H.normalBias,X.shadowRadius=H.radius,X.shadowMapSize=H.mapSize,X.shadowCameraNear=H.camera.near,X.shadowCameraFar=H.camera.far,i.pointShadow[S]=X,i.pointShadowMap[S]=D,i.pointShadowMatrix[S]=V.shadow.matrix,C++}i.point[S]=z,S++}else if(V.isHemisphereLight){const z=t.get(V);z.skyColor.copy(V.color).multiplyScalar(te*N),z.groundColor.copy(V.groundColor).multiplyScalar(te*N),i.hemi[w]=z,w++}}_>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Te.LTC_FLOAT_1,i.rectAreaLTC2=Te.LTC_FLOAT_2):(i.rectAreaLTC1=Te.LTC_HALF_1,i.rectAreaLTC2=Te.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Te.LTC_FLOAT_1,i.rectAreaLTC2=Te.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Te.LTC_HALF_1,i.rectAreaLTC2=Te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=p,i.ambient[1]=g,i.ambient[2]=y;const B=i.hash;(B.directionalLength!==b||B.pointLength!==S||B.spotLength!==m||B.rectAreaLength!==_||B.hemiLength!==w||B.numDirectionalShadows!==M||B.numPointShadows!==C||B.numSpotShadows!==A||B.numSpotMaps!==P||B.numLightProbes!==R)&&(i.directional.length=b,i.spot.length=m,i.rectArea.length=_,i.point.length=S,i.hemi.length=w,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=A+P-k,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=k,i.numLightProbes=R,B.directionalLength=b,B.pointLength=S,B.spotLength=m,B.rectAreaLength=_,B.hemiLength=w,B.numDirectionalShadows=M,B.numPointShadows=C,B.numSpotShadows=A,B.numSpotMaps=P,B.numLightProbes=R,i.version=sut++)}function f(d,h){let p=0,g=0,y=0,b=0,S=0;const m=h.matrixWorldInverse;for(let _=0,w=d.length;_<w;_++){const M=d[_];if(M.isDirectionalLight){const C=i.directional[p];C.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(m),p++}else if(M.isSpotLight){const C=i.spot[y];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(m),C.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(m),y++}else if(M.isRectAreaLight){const C=i.rectArea[b];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(m),a.identity(),o.copy(M.matrixWorld),o.premultiply(m),a.extractRotation(o),C.halfWidth.set(M.width*.5,0,0),C.halfHeight.set(0,M.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),b++}else if(M.isPointLight){const C=i.point[g];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(m),g++}else if(M.isHemisphereLight){const C=i.hemi[S];C.direction.setFromMatrixPosition(M.matrixWorld),C.direction.transformDirection(m),S++}}}return{setup:l,setupView:f,state:i}}function j2(n,e){const t=new aut(n,e),r=[],i=[];function s(){r.length=0,i.length=0}function o(h){r.push(h)}function a(h){i.push(h)}function l(h){t.setup(r,h)}function f(h){t.setupView(r,h)}return{init:s,state:{lightsArray:r,shadowsArray:i,lights:t},setupLights:l,setupLightsView:f,pushLight:o,pushShadow:a}}function lut(n,e){let t=new WeakMap;function r(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new j2(n,e),t.set(s,[l])):o>=a.length?(l=new j2(n,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:r,dispose:i}}class Eb extends vr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rI,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Mb extends vr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const cut=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uut=`uniform sampler2D shadow_pass;
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
 * @license React
 * react-reconciler-constants.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Pl.ConcurrentRoot=1;Pl.ContinuousEventPriority=4;Pl.DefaultEventPriority=16;Pl.DiscreteEventPriority=1;Pl.IdleEventPriority=536870912;Pl.LegacyRoot=0;(function(n){n.exports=Pl})(ldt);function cdt(n){let e;const t=new Set,r=(f,d)=>{const h=typeof f=="function"?f(e):f;if(h!==e){const p=e;e=d?h:Object.assign({},e,h),t.forEach(g=>g(e,p))}},i=()=>e,s=(f,d=i,h=Object.is)=>{console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");let p=d(e);function g(){const y=d(e);if(!h(p,y)){const b=p;f(p=y,b)}}return t.add(g),()=>t.delete(g)},l={setState:r,getState:i,subscribe:(f,d,h)=>d||h?s(f,d,h):(t.add(f),()=>t.delete(f)),destroy:()=>t.clear()};return e=n(r,i,l),l}const udt=typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),FC=udt?ie.useEffect:ie.useLayoutEffect;function fdt(n){const e=typeof n=="function"?cdt(n):n,t=(r=e.getState,i=Object.is)=>{const[,s]=ie.useReducer(S=>S+1,0),o=e.getState(),a=ie.useRef(o),l=ie.useRef(r),f=ie.useRef(i),d=ie.useRef(!1),h=ie.useRef();h.current===void 0&&(h.current=r(o));let p,g=!1;(a.current!==o||l.current!==r||f.current!==i||d.current)&&(p=r(o),g=!i(h.current,p)),FC(()=>{g&&(h.current=p),a.current=o,l.current=r,f.current=i,d.current=!1});const y=ie.useRef(o);FC(()=>{const S=()=>{try{const _=e.getState(),w=l.current(_);f.current(h.current,w)||(a.current=_,h.current=w,s())}catch{d.current=!0,s()}},m=e.subscribe(S);return e.getState()!==y.current&&S(),m},[]);const b=g?p:h.current;return ie.useDebugValue(b),b};return Object.assign(t,e),t[Symbol.iterator]=function(){console.warn("[useStore, api] = create() is deprecated and will be removed in v4");const r=[t,e];return{next(){const i=r.length<=0;return{value:r.shift(),done:i}}}},t}var yS={},ddt={get exports(){return yS},set exports(n){yS=n}},Od={},hdt={get exports(){return Od},set exports(n){Od=n}},bD={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(D,z){var H=D.length;D.push(z);e:for(;0<H;){var X=H-1>>>1,ne=D[X];if(0<i(ne,z))D[X]=z,D[H]=ne,H=X;else break e}}function t(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var z=D[0],H=D.pop();if(H!==z){D[0]=H;e:for(var X=0,ne=D.length,K=ne>>>1;X<K;){var ae=2*(X+1)-1,ge=D[ae],Me=ae+1,Ee=D[Me];if(0>i(ge,H))Me<ne&&0>i(Ee,ge)?(D[X]=Ee,D[Me]=H,X=Me):(D[X]=ge,D[ae]=H,X=ae);else if(Me<ne&&0>i(Ee,H))D[X]=Ee,D[Me]=H,X=Me;else break e}}return z}function i(D,z){var H=D.sortIndex-z.sortIndex;return H!==0?H:D.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],f=[],d=1,h=null,p=3,g=!1,y=!1,b=!1,S=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(D){for(var z=t(f);z!==null;){if(z.callback===null)r(f);else if(z.startTime<=D)r(f),z.sortIndex=z.expirationTime,e(l,z);else break;z=t(f)}}function M(D){if(b=!1,w(D),!y)if(t(l)!==null)y=!0,te(C);else{var z=t(f);z!==null&&ue(M,z.startTime-D)}}function C(D,z){y=!1,b&&(b=!1,m(k),k=-1),g=!0;var H=p;try{for(w(z),h=t(l);h!==null&&(!(h.expirationTime>z)||D&&!B());){var X=h.callback;if(typeof X=="function"){h.callback=null,p=h.priorityLevel;var ne=X(h.expirationTime<=z);z=n.unstable_now(),typeof ne=="function"?h.callback=ne:h===t(l)&&r(l),w(z)}else r(l);h=t(l)}if(h!==null)var K=!0;else{var ae=t(f);ae!==null&&ue(M,ae.startTime-z),K=!1}return K}finally{h=null,p=H,g=!1}}var A=!1,P=null,k=-1,R=5,N=-1;function B(){return!(n.unstable_now()-N<R)}function W(){if(P!==null){var D=n.unstable_now();N=D;var z=!0;try{z=P(!0,D)}finally{z?J():(A=!1,P=null)}}else A=!1}var J;if(typeof _=="function")J=function(){_(W)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,Y=V.port2;V.port1.onmessage=W,J=function(){Y.postMessage(null)}}else J=function(){S(W,0)};function te(D){P=D,A||(A=!0,J())}function ue(D,z){k=S(function(){D(n.unstable_now())},z)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(D){D.callback=null},n.unstable_continueExecution=function(){y||g||(y=!0,te(C))},n.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<D?Math.floor(1e3/D):5},n.unstable_getCurrentPriorityLevel=function(){return p},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(D){switch(p){case 1:case 2:case 3:var z=3;break;default:z=p}var H=p;p=z;try{return D()}finally{p=H}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(D,z){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var H=p;p=D;try{return z()}finally{p=H}},n.unstable_scheduleCallback=function(D,z,H){var X=n.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?X+H:X):H=X,D){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=H+ne,D={id:d++,callback:z,priorityLevel:D,startTime:H,expirationTime:ne,sortIndex:-1},H>X?(D.sortIndex=H,e(f,D),t(l)===null&&D===t(f)&&(b?(m(k),k=-1):b=!0,ue(M,H-X))):(D.sortIndex=ne,e(l,D),y||g||(y=!0,te(C))),D},n.unstable_shouldYield=B,n.unstable_wrapCallback=function(D){var z=p;return function(){var H=p;p=z;try{return D.apply(this,arguments)}finally{p=H}}}})(bD);(function(n){n.exports=bD})(hdt);/**
 * @license React
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pdt=function(e){var t={},r=ie,i=Od,s=Object.assign;function o(c){for(var u="https://reactjs.org/docs/error-decoder.html?invariant="+c,v=1;v<arguments.length;v++)u+="&args[]="+encodeURIComponent(arguments[v]);return"Minified React error #"+c+"; visit "+u+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,l=Symbol.for("react.element"),f=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),y=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),m=Symbol.for("react.suspense_list"),_=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),M=Symbol.for("react.offscreen"),C=Symbol.iterator;function A(c){return c===null||typeof c!="object"?null:(c=C&&c[C]||c["@@iterator"],typeof c=="function"?c:null)}function P(c){if(c==null)return null;if(typeof c=="function")return c.displayName||c.name||null;if(typeof c=="string")return c;switch(c){case d:return"Fragment";case f:return"Portal";case p:return"Profiler";case h:return"StrictMode";case S:return"Suspense";case m:return"SuspenseList"}if(typeof c=="object")switch(c.$$typeof){case y:return(c.displayName||"Context")+".Consumer";case g:return(c._context.displayName||"Context")+".Provider";case b:var u=c.render;return c=c.displayName,c||(c=u.displayName||u.name||"",c=c!==""?"ForwardRef("+c+")":"ForwardRef"),c;case _:return u=c.displayName||null,u!==null?u:P(c.type)||"Memo";case w:u=c._payload,c=c._init;try{return P(c(u))}catch{}}return null}function k(c){var u=c.type;switch(c.tag){case 24:return"Cache";case 9:return(u.displayName||"Context")+".Consumer";case 10:return(u._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return c=u.render,c=c.displayName||c.name||"",u.displayName||(c!==""?"ForwardRef("+c+")":"ForwardRef");case 7:return"Fragment";case 5:return u;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return P(u);case 8:return u===h?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof u=="function")return u.displayName||u.name||null;if(typeof u=="string")return u}return null}function R(c){var u=c,v=c;if(c.alternate)for(;u.return;)u=u.return;else{c=u;do u=c,u.flags&4098&&(v=u.return),c=u.return;while(c)}return u.tag===3?v:null}function N(c){if(R(c)!==c)throw Error(o(188))}function B(c){var u=c.alternate;if(!u){if(u=R(c),u===null)throw Error(o(188));return u!==c?null:c}for(var v=c,x=u;;){var E=v.return;if(E===null)break;var T=E.alternate;if(T===null){if(x=E.return,x!==null){v=x;continue}break}if(E.child===T.child){for(T=E.child;T;){if(T===v)return N(E),c;if(T===x)return N(E),u;T=T.sibling}throw Error(o(188))}if(v.return!==x.return)v=E,x=T;else{for(var F=!1,j=E.child;j;){if(j===v){F=!0,v=E,x=T;break}if(j===x){F=!0,x=E,v=T;break}j=j.sibling}if(!F){for(j=T.child;j;){if(j===v){F=!0,v=T,x=E;break}if(j===x){F=!0,x=T,v=E;break}j=j.sibling}if(!F)throw Error(o(189))}}if(v.alternate!==x)throw Error(o(190))}if(v.tag!==3)throw Error(o(188));return v.stateNode.current===v?c:u}function W(c){return c=B(c),c!==null?J(c):null}function J(c){if(c.tag===5||c.tag===6)return c;for(c=c.child;c!==null;){var u=J(c);if(u!==null)return u;c=c.sibling}return null}function V(c){if(c.tag===5||c.tag===6)return c;for(c=c.child;c!==null;){if(c.tag!==4){var u=V(c);if(u!==null)return u}c=c.sibling}return null}var Y=Array.isArray,te=e.getPublicInstance,ue=e.getRootHostContext,D=e.getChildHostContext,z=e.prepareForCommit,H=e.resetAfterCommit,X=e.createInstance,ne=e.appendInitialChild,K=e.finalizeInitialChildren,ae=e.prepareUpdate,ge=e.shouldSetTextContent,Me=e.createTextInstance,Ee=e.scheduleTimeout,Qe=e.cancelTimeout,tt=e.noTimeout,Ce=e.isPrimaryRenderer,Ke=e.supportsMutation,G=e.supportsPersistence,xe=e.supportsHydration,he=e.getInstanceFromNode,we=e.preparePortalMount,de=e.getCurrentEventPriority,Ze=e.detachDeletedInstance,ke=e.supportsMicrotasks,O=e.scheduleMicrotask,I=e.supportsTestSelectors,ee=e.findFiberRoot,_e=e.getBoundingRect,ve=e.getTextContent,me=e.isHiddenSubtree,qe=e.matchAccessibilityRole,Re=e.setFocusIfFocusable,Fe=e.setupIntersectionObserver,it=e.appendChild,gt=e.appendChildToContainer,ye=e.commitTextUpdate,Dt=e.commitMount,Tt=e.commitUpdate,dt=e.insertBefore,et=e.insertInContainerBefore,Ve=e.removeChild,_t=e.removeChildFromContainer,$t=e.resetTextContent,an=e.hideInstance,bt=e.hideTextInstance,Ae=e.unhideInstance,q=e.unhideTextInstance,Pe=e.clearContainer,Le=e.cloneInstance,at=e.createContainerChildSet,nt=e.appendChildToContainerChildSet,Xt=e.finalizeContainerChildren,Ht=e.replaceContainerChildren,An=e.cloneHiddenInstance,Xn=e.cloneHiddenTextInstance,Yt=e.canHydrateInstance,ar=e.canHydrateTextInstance,Ei=e.canHydrateSuspenseInstance,Cu=e.isSuspenseInstancePending,Ru=e.isSuspenseInstanceFallback,Ll=e.registerSuspenseInstanceRetry,So=e.getNextHydratableSibling,Nl=e.getFirstHydratableChild,uh=e.getFirstHydratableChildWithinContainer,fh=e.getFirstHydratableChildWithinSuspenseInstance,cy=e.hydrateInstance,uy=e.hydrateTextInstance,fy=e.hydrateSuspenseInstance,$=e.getNextHydratableInstanceAfterSuspenseInstance,Q=e.commitHydratedContainer,oe=e.commitHydratedSuspenseInstance,le=e.clearSuspenseBoundary,se=e.clearSuspenseBoundaryFromContainer,$e=e.shouldDeleteUnhydratedTailInstances,Xe=e.didNotMatchHydratedContainerTextInstance,st=e.didNotMatchHydratedTextInstance,lt;function ht(c){if(lt===void 0)try{throw Error()}catch(v){var u=v.stack.trim().match(/\n( *(at )?)/);lt=u&&u[1]||""}return`
`+lt+c}var ft=!1;function pt(c,u){if(!c||ft)return"";ft=!0;var v=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(u)if(u=function(){throw Error()},Object.defineProperty(u.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(u,[])}catch(be){var x=be}Reflect.construct(c,[],u)}else{try{u.call()}catch(be){x=be}c.call(u.prototype)}else{try{throw Error()}catch(be){x=be}c()}}catch(be){if(be&&x&&typeof be.stack=="string"){for(var E=be.stack.split(`
`),T=x.stack.split(`
`),F=E.length-1,j=T.length-1;1<=F&&0<=j&&E[F]!==T[j];)j--;for(;1<=F&&0<=j;F--,j--)if(E[F]!==T[j]){if(F!==1||j!==1)do if(F--,j--,0>j||E[F]!==T[j]){var fe=`
`+E[F].replace(" at new "," at ");return c.displayName&&fe.includes("<anonymous>")&&(fe=fe.replace("<anonymous>",c.displayName)),fe}while(1<=F&&0<=j);break}}}finally{ft=!1,Error.prepareStackTrace=v}return(c=c?c.displayName||c.name:"")?ht(c):""}var hn=Object.prototype.hasOwnProperty,lr=[],tn=-1;function Yn(c){return{current:c}}function ct(c){0>tn||(c.current=lr[tn],lr[tn]=null,tn--)}function Be(c,u){tn++,lr[tn]=c.current,c.current=u}var Mi={},At=Yn(Mi),_n=Yn(!1),ds=Mi;function Ti(c,u){var v=c.type.contextTypes;if(!v)return Mi;var x=c.stateNode;if(x&&x.__reactInternalMemoizedUnmaskedChildContext===u)return x.__reactInternalMemoizedMaskedChildContext;var E={},T;for(T in v)E[T]=u[T];return x&&(c=c.stateNode,c.__reactInternalMemoizedUnmaskedChildContext=u,c.__reactInternalMemoizedMaskedChildContext=E),E}function Zn(c){return c=c.childContextTypes,c!=null}function Cn(){ct(_n),ct(At)}function hs(c,u,v){if(At.current!==Mi)throw Error(o(168));Be(At,u),Be(_n,v)}function Il(c,u,v){var x=c.stateNode;if(u=u.childContextTypes,typeof x.getChildContext!="function")return v;x=x.getChildContext();for(var E in x)if(!(E in u))throw Error(o(108,k(c)||"Unknown",E));return s({},v,x)}function cr(c){return c=(c=c.stateNode)&&c.__reactInternalMemoizedMergedChildContext||Mi,ds=At.current,Be(At,c),Be(_n,_n.current),!0}function Dl(c,u,v){var x=c.stateNode;if(!x)throw Error(o(169));v?(c=Il(c,u,ds),x.__reactInternalMemoizedMergedChildContext=c,ct(_n),ct(At),Be(At,c)):ct(_n),Be(_n,v)}var si=Math.clz32?Math.clz32:jD,dh=Math.log,WD=Math.LN2;function jD(c){return c>>>=0,c===0?32:31-(dh(c)/WD|0)|0}var hh=64,ph=4194304;function Pu(c){switch(c&-c){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return c&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return c&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return c}}function mh(c,u){var v=c.pendingLanes;if(v===0)return 0;var x=0,E=c.suspendedLanes,T=c.pingedLanes,F=v&268435455;if(F!==0){var j=F&~E;j!==0?x=Pu(j):(T&=F,T!==0&&(x=Pu(T)))}else F=v&~E,F!==0?x=Pu(F):T!==0&&(x=Pu(T));if(x===0)return 0;if(u!==0&&u!==x&&!(u&E)&&(E=x&-x,T=u&-u,E>=T||E===16&&(T&4194240)!==0))return u;if(x&4&&(x|=v&16),u=c.entangledLanes,u!==0)for(c=c.entanglements,u&=x;0<u;)v=31-si(u),E=1<<v,x|=c[v],u&=~E;return x}function XD(c,u){switch(c){case 1:case 2:case 4:return u+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return u+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function YD(c,u){for(var v=c.suspendedLanes,x=c.pingedLanes,E=c.expirationTimes,T=c.pendingLanes;0<T;){var F=31-si(T),j=1<<F,fe=E[F];fe===-1?(!(j&v)||j&x)&&(E[F]=XD(j,u)):fe<=u&&(c.expiredLanes|=j),T&=~j}}function dy(c){return c=c.pendingLanes&-1073741825,c!==0?c:c&1073741824?1073741824:0}function hy(c){for(var u=[],v=0;31>v;v++)u.push(c);return u}function Lu(c,u,v){c.pendingLanes|=u,u!==536870912&&(c.suspendedLanes=0,c.pingedLanes=0),c=c.eventTimes,u=31-si(u),c[u]=v}function ZD(c,u){var v=c.pendingLanes&~u;c.pendingLanes=u,c.suspendedLanes=0,c.pingedLanes=0,c.expiredLanes&=u,c.mutableReadLanes&=u,c.entangledLanes&=u,u=c.entanglements;var x=c.eventTimes;for(c=c.expirationTimes;0<v;){var E=31-si(v),T=1<<E;u[E]=0,x[E]=-1,c[E]=-1,v&=~T}}function py(c,u){var v=c.entangledLanes|=u;for(c=c.entanglements;v;){var x=31-si(v),E=1<<x;E&u|c[x]&u&&(c[x]|=u),v&=~E}}var Ut=0;function Qb(c){return c&=-c,1<c?4<c?c&268435455?16:536870912:4:1}var my=i.unstable_scheduleCallback,eE=i.unstable_cancelCallback,KD=i.unstable_shouldYield,JD=i.unstable_requestPaint,Kn=i.unstable_now,gy=i.unstable_ImmediatePriority,QD=i.unstable_UserBlockingPriority,vy=i.unstable_NormalPriority,ek=i.unstable_IdlePriority,gh=null,ps=null;function tk(c){if(ps&&typeof ps.onCommitFiberRoot=="function")try{ps.onCommitFiberRoot(gh,c,void 0,(c.current.flags&128)===128)}catch{}}function nk(c,u){return c===u&&(c!==0||1/c===1/u)||c!==c&&u!==u}var ms=typeof Object.is=="function"?Object.is:nk,$s=null,vh=!1,yy=!1;function tE(c){$s===null?$s=[c]:$s.push(c)}function rk(c){vh=!0,tE(c)}function gs(){if(!yy&&$s!==null){yy=!0;var c=0,u=Ut;try{var v=$s;for(Ut=1;c<v.length;c++){var x=v[c];do x=x(!0);while(x!==null)}$s=null,vh=!1}catch(E){throw $s!==null&&($s=$s.slice(c+1)),my(gy,gs),E}finally{Ut=u,yy=!1}}return null}var ik=a.ReactCurrentBatchConfig;function yh(c,u){if(ms(c,u))return!0;if(typeof c!="object"||c===null||typeof u!="object"||u===null)return!1;var v=Object.keys(c),x=Object.keys(u);if(v.length!==x.length)return!1;for(x=0;x<v.length;x++){var E=v[x];if(!hn.call(u,E)||!ms(c[E],u[E]))return!1}return!0}function sk(c){switch(c.tag){case 5:return ht(c.type);case 16:return ht("Lazy");case 13:return ht("Suspense");case 19:return ht("SuspenseList");case 0:case 2:case 15:return c=pt(c.type,!1),c;case 11:return c=pt(c.type.render,!1),c;case 1:return c=pt(c.type,!0),c;default:return""}}function Vi(c,u){if(c&&c.defaultProps){u=s({},u),c=c.defaultProps;for(var v in c)u[v]===void 0&&(u[v]=c[v]);return u}return u}var _h=Yn(null),xh=null,kl=null,_y=null;function xy(){_y=kl=xh=null}function nE(c,u,v){Ce?(Be(_h,u._currentValue),u._currentValue=v):(Be(_h,u._currentValue2),u._currentValue2=v)}function Sy(c){var u=_h.current;ct(_h),Ce?c._currentValue=u:c._currentValue2=u}function wy(c,u,v){for(;c!==null;){var x=c.alternate;if((c.childLanes&u)!==u?(c.childLanes|=u,x!==null&&(x.childLanes|=u)):x!==null&&(x.childLanes&u)!==u&&(x.childLanes|=u),c===v)break;c=c.return}}function Ol(c,u){xh=c,_y=kl=null,c=c.dependencies,c!==null&&c.firstContext!==null&&(c.lanes&u&&(li=!0),c.firstContext=null)}function Ai(c){var u=Ce?c._currentValue:c._currentValue2;if(_y!==c)if(c={context:c,memoizedValue:u,next:null},kl===null){if(xh===null)throw Error(o(308));kl=c,xh.dependencies={lanes:0,firstContext:c}}else kl=kl.next=c;return u}var vs=null,wo=!1;function by(c){c.updateQueue={baseState:c.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rE(c,u){c=c.updateQueue,u.updateQueue===c&&(u.updateQueue={baseState:c.baseState,firstBaseUpdate:c.firstBaseUpdate,lastBaseUpdate:c.lastBaseUpdate,shared:c.shared,effects:c.effects})}function Us(c,u){return{eventTime:c,lane:u,tag:0,payload:null,callback:null,next:null}}function bo(c,u){var v=c.updateQueue;v!==null&&(v=v.shared,kn!==null&&c.mode&1&&!(Ct&2)?(c=v.interleaved,c===null?(u.next=u,vs===null?vs=[v]:vs.push(v)):(u.next=c.next,c.next=u),v.interleaved=u):(c=v.pending,c===null?u.next=u:(u.next=c.next,c.next=u),v.pending=u))}function Sh(c,u,v){if(u=u.updateQueue,u!==null&&(u=u.shared,(v&4194240)!==0)){var x=u.lanes;x&=c.pendingLanes,v|=x,u.lanes=v,py(c,v)}}function iE(c,u){var v=c.updateQueue,x=c.alternate;if(x!==null&&(x=x.updateQueue,v===x)){var E=null,T=null;if(v=v.firstBaseUpdate,v!==null){do{var F={eventTime:v.eventTime,lane:v.lane,tag:v.tag,payload:v.payload,callback:v.callback,next:null};T===null?E=T=F:T=T.next=F,v=v.next}while(v!==null);T===null?E=T=u:T=T.next=u}else E=T=u;v={baseState:x.baseState,firstBaseUpdate:E,lastBaseUpdate:T,shared:x.shared,effects:x.effects},c.updateQueue=v;return}c=v.lastBaseUpdate,c===null?v.firstBaseUpdate=u:c.next=u,v.lastBaseUpdate=u}function wh(c,u,v,x){var E=c.updateQueue;wo=!1;var T=E.firstBaseUpdate,F=E.lastBaseUpdate,j=E.shared.pending;if(j!==null){E.shared.pending=null;var fe=j,be=fe.next;fe.next=null,F===null?T=be:F.next=be,F=fe;var He=c.alternate;He!==null&&(He=He.updateQueue,j=He.lastBaseUpdate,j!==F&&(j===null?He.firstBaseUpdate=be:j.next=be,He.lastBaseUpdate=fe))}if(T!==null){var vt=E.baseState;F=0,He=be=fe=null,j=T;do{var rt=j.lane,Kt=j.eventTime;if((x&rt)===rt){He!==null&&(He=He.next={eventTime:Kt,lane:0,tag:j.tag,payload:j.payload,callback:j.callback,next:null});e:{var Ye=c,Sr=j;switch(rt=u,Kt=v,Sr.tag){case 1:if(Ye=Sr.payload,typeof Ye=="function"){vt=Ye.call(Kt,vt,rt);break e}vt=Ye;break e;case 3:Ye.flags=Ye.flags&-65537|128;case 0:if(Ye=Sr.payload,rt=typeof Ye=="function"?Ye.call(Kt,vt,rt):Ye,rt==null)break e;vt=s({},vt,rt);break e;case 2:wo=!0}}j.callback!==null&&j.lane!==0&&(c.flags|=64,rt=E.effects,rt===null?E.effects=[j]:rt.push(j))}else Kt={eventTime:Kt,lane:rt,tag:j.tag,payload:j.payload,callback:j.callback,next:null},He===null?(be=He=Kt,fe=vt):He=He.next=Kt,F|=rt;if(j=j.next,j===null){if(j=E.shared.pending,j===null)break;rt=j,j=rt.next,rt.next=null,E.lastBaseUpdate=rt,E.shared.pending=null}}while(1);if(He===null&&(fe=vt),E.baseState=fe,E.firstBaseUpdate=be,E.lastBaseUpdate=He,u=E.shared.interleaved,u!==null){E=u;do F|=E.lane,E=E.next;while(E!==u)}else T===null&&(E.shared.lanes=0);ql|=F,c.lanes=F,c.memoizedState=vt}}function sE(c,u,v){if(c=u.effects,u.effects=null,c!==null)for(u=0;u<c.length;u++){var x=c[u],E=x.callback;if(E!==null){if(x.callback=null,x=v,typeof E!="function")throw Error(o(191,E));E.call(x)}}}var oE=new r.Component().refs;function Ey(c,u,v,x){u=c.memoizedState,v=v(x,u),v=v==null?u:s({},u,v),c.memoizedState=v,c.lanes===0&&(c.updateQueue.baseState=v)}var bh={isMounted:function(c){return(c=c._reactInternals)?R(c)===c:!1},enqueueSetState:function(c,u,v){c=c._reactInternals;var x=Ir(),E=To(c),T=Us(x,E);T.payload=u,v!=null&&(T.callback=v),bo(c,T),u=Ni(c,E,x),u!==null&&Sh(u,c,E)},enqueueReplaceState:function(c,u,v){c=c._reactInternals;var x=Ir(),E=To(c),T=Us(x,E);T.tag=1,T.payload=u,v!=null&&(T.callback=v),bo(c,T),u=Ni(c,E,x),u!==null&&Sh(u,c,E)},enqueueForceUpdate:function(c,u){c=c._reactInternals;var v=Ir(),x=To(c),E=Us(v,x);E.tag=2,u!=null&&(E.callback=u),bo(c,E),u=Ni(c,x,v),u!==null&&Sh(u,c,x)}};function aE(c,u,v,x,E,T,F){return c=c.stateNode,typeof c.shouldComponentUpdate=="function"?c.shouldComponentUpdate(x,T,F):u.prototype&&u.prototype.isPureReactComponent?!yh(v,x)||!yh(E,T):!0}function lE(c,u,v){var x=!1,E=Mi,T=u.contextType;return typeof T=="object"&&T!==null?T=Ai(T):(E=Zn(u)?ds:At.current,x=u.contextTypes,T=(x=x!=null)?Ti(c,E):Mi),u=new u(v,T),c.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=bh,c.stateNode=u,u._reactInternals=c,x&&(c=c.stateNode,c.__reactInternalMemoizedUnmaskedChildContext=E,c.__reactInternalMemoizedMaskedChildContext=T),u}function cE(c,u,v,x){c=u.state,typeof u.componentWillReceiveProps=="function"&&u.componentWillReceiveProps(v,x),typeof u.UNSAFE_componentWillReceiveProps=="function"&&u.UNSAFE_componentWillReceiveProps(v,x),u.state!==c&&bh.enqueueReplaceState(u,u.state,null)}function My(c,u,v,x){var E=c.stateNode;E.props=v,E.state=c.memoizedState,E.refs=oE,by(c);var T=u.contextType;typeof T=="object"&&T!==null?E.context=Ai(T):(T=Zn(u)?ds:At.current,E.context=Ti(c,T)),E.state=c.memoizedState,T=u.getDerivedStateFromProps,typeof T=="function"&&(Ey(c,u,T,v),E.state=c.memoizedState),typeof u.getDerivedStateFromProps=="function"||typeof E.getSnapshotBeforeUpdate=="function"||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(u=E.state,typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount(),u!==E.state&&bh.enqueueReplaceState(E,E.state,null),wh(c,v,E,x),E.state=c.memoizedState),typeof E.componentDidMount=="function"&&(c.flags|=4194308)}var $l=[],Ul=0,Eh=null,Mh=0,Ci=[],Ri=0,Ma=null,Fs=1,zs="";function Ta(c,u){$l[Ul++]=Mh,$l[Ul++]=Eh,Eh=c,Mh=u}function uE(c,u,v){Ci[Ri++]=Fs,Ci[Ri++]=zs,Ci[Ri++]=Ma,Ma=c;var x=Fs;c=zs;var E=32-si(x)-1;x&=~(1<<E),v+=1;var T=32-si(u)+E;if(30<T){var F=E-E%5;T=(x&(1<<F)-1).toString(32),x>>=F,E-=F,Fs=1<<32-si(u)+E|v<<E|x,zs=T+c}else Fs=1<<T|v<<E|x,zs=c}function Ty(c){c.return!==null&&(Ta(c,1),uE(c,1,0))}function Ay(c){for(;c===Eh;)Eh=$l[--Ul],$l[Ul]=null,Mh=$l[--Ul],$l[Ul]=null;for(;c===Ma;)Ma=Ci[--Ri],Ci[Ri]=null,zs=Ci[--Ri],Ci[Ri]=null,Fs=Ci[--Ri],Ci[Ri]=null}var oi=null,ai=null,ln=!1,Nu=!1,Gi=null;function fE(c,u){var v=Ii(5,null,null,0);v.elementType="DELETED",v.stateNode=u,v.return=c,u=c.deletions,u===null?(c.deletions=[v],c.flags|=16):u.push(v)}function dE(c,u){switch(c.tag){case 5:return u=Yt(u,c.type,c.pendingProps),u!==null?(c.stateNode=u,oi=c,ai=Nl(u),!0):!1;case 6:return u=ar(u,c.pendingProps),u!==null?(c.stateNode=u,oi=c,ai=null,!0):!1;case 13:if(u=Ei(u),u!==null){var v=Ma!==null?{id:Fs,overflow:zs}:null;return c.memoizedState={dehydrated:u,treeContext:v,retryLane:1073741824},v=Ii(18,null,null,0),v.stateNode=u,v.return=c,c.child=v,oi=c,ai=null,!0}return!1;default:return!1}}function Cy(c){return(c.mode&1)!==0&&(c.flags&128)===0}function Ry(c){if(ln){var u=ai;if(u){var v=u;if(!dE(c,u)){if(Cy(c))throw Error(o(418));u=So(v);var x=oi;u&&dE(c,u)?fE(x,v):(c.flags=c.flags&-4097|2,ln=!1,oi=c)}}else{if(Cy(c))throw Error(o(418));c.flags=c.flags&-4097|2,ln=!1,oi=c}}}function hE(c){for(c=c.return;c!==null&&c.tag!==5&&c.tag!==3&&c.tag!==13;)c=c.return;oi=c}function Iu(c){if(!xe||c!==oi)return!1;if(!ln)return hE(c),ln=!0,!1;if(c.tag!==3&&(c.tag!==5||$e(c.type)&&!ge(c.type,c.memoizedProps))){var u=ai;if(u){if(Cy(c)){for(c=ai;c;)c=So(c);throw Error(o(418))}for(;u;)fE(c,u),u=So(u)}}if(hE(c),c.tag===13){if(!xe)throw Error(o(316));if(c=c.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(o(317));ai=$(c)}else ai=oi?So(c.stateNode):null;return!0}function Fl(){xe&&(ai=oi=null,Nu=ln=!1)}function Py(c){Gi===null?Gi=[c]:Gi.push(c)}function Du(c,u,v){if(c=v.ref,c!==null&&typeof c!="function"&&typeof c!="object"){if(v._owner){if(v=v._owner,v){if(v.tag!==1)throw Error(o(309));var x=v.stateNode}if(!x)throw Error(o(147,c));var E=x,T=""+c;return u!==null&&u.ref!==null&&typeof u.ref=="function"&&u.ref._stringRef===T?u.ref:(u=function(F){var j=E.refs;j===oE&&(j=E.refs={}),F===null?delete j[T]:j[T]=F},u._stringRef=T,u)}if(typeof c!="string")throw Error(o(284));if(!v._owner)throw Error(o(290,c))}return c}function Th(c,u){throw c=Object.prototype.toString.call(u),Error(o(31,c==="[object Object]"?"object with keys {"+Object.keys(u).join(", ")+"}":c))}function pE(c){var u=c._init;return u(c._payload)}function mE(c){function u(re,Z){if(c){var ce=re.deletions;ce===null?(re.deletions=[Z],re.flags|=16):ce.push(Z)}}function v(re,Z){if(!c)return null;for(;Z!==null;)u(re,Z),Z=Z.sibling;return null}function x(re,Z){for(re=new Map;Z!==null;)Z.key!==null?re.set(Z.key,Z):re.set(Z.index,Z),Z=Z.sibling;return re}function E(re,Z){return re=Co(re,Z),re.index=0,re.sibling=null,re}function T(re,Z,ce){return re.index=ce,c?(ce=re.alternate,ce!==null?(ce=ce.index,ce<Z?(re.flags|=2,Z):ce):(re.flags|=2,Z)):(re.flags|=1048576,Z)}function F(re){return c&&re.alternate===null&&(re.flags|=2),re}function j(re,Z,ce,De){return Z===null||Z.tag!==6?(Z=h1(ce,re.mode,De),Z.return=re,Z):(Z=E(Z,ce),Z.return=re,Z)}function fe(re,Z,ce,De){var je=ce.type;return je===d?He(re,Z,ce.props.children,De,ce.key):Z!==null&&(Z.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===w&&pE(je)===Z.type)?(De=E(Z,ce.props),De.ref=Du(re,Z,ce),De.return=re,De):(De=rp(ce.type,ce.key,ce.props,null,re.mode,De),De.ref=Du(re,Z,ce),De.return=re,De)}function be(re,Z,ce,De){return Z===null||Z.tag!==4||Z.stateNode.containerInfo!==ce.containerInfo||Z.stateNode.implementation!==ce.implementation?(Z=p1(ce,re.mode,De),Z.return=re,Z):(Z=E(Z,ce.children||[]),Z.return=re,Z)}function He(re,Z,ce,De,je){return Z===null||Z.tag!==7?(Z=Ia(ce,re.mode,De,je),Z.return=re,Z):(Z=E(Z,ce),Z.return=re,Z)}function vt(re,Z,ce){if(typeof Z=="string"&&Z!==""||typeof Z=="number")return Z=h1(""+Z,re.mode,ce),Z.return=re,Z;if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case l:return ce=rp(Z.type,Z.key,Z.props,null,re.mode,ce),ce.ref=Du(re,null,Z),ce.return=re,ce;case f:return Z=p1(Z,re.mode,ce),Z.return=re,Z;case w:var De=Z._init;return vt(re,De(Z._payload),ce)}if(Y(Z)||A(Z))return Z=Ia(Z,re.mode,ce,null),Z.return=re,Z;Th(re,Z)}return null}function rt(re,Z,ce,De){var je=Z!==null?Z.key:null;if(typeof ce=="string"&&ce!==""||typeof ce=="number")return je!==null?null:j(re,Z,""+ce,De);if(typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case l:return ce.key===je?fe(re,Z,ce,De):null;case f:return ce.key===je?be(re,Z,ce,De):null;case w:return je=ce._init,rt(re,Z,je(ce._payload),De)}if(Y(ce)||A(ce))return je!==null?null:He(re,Z,ce,De,null);Th(re,ce)}return null}function Kt(re,Z,ce,De,je){if(typeof De=="string"&&De!==""||typeof De=="number")return re=re.get(ce)||null,j(Z,re,""+De,je);if(typeof De=="object"&&De!==null){switch(De.$$typeof){case l:return re=re.get(De.key===null?ce:De.key)||null,fe(Z,re,De,je);case f:return re=re.get(De.key===null?ce:De.key)||null,be(Z,re,De,je);case w:var Et=De._init;return Kt(re,Z,ce,Et(De._payload),je)}if(Y(De)||A(De))return re=re.get(ce)||null,He(Z,re,De,je,null);Th(Z,De)}return null}function Ye(re,Z,ce,De){for(var je=null,Et=null,yt=Z,Ft=Z=0,Qn=null;yt!==null&&Ft<ce.length;Ft++){yt.index>Ft?(Qn=yt,yt=null):Qn=yt.sibling;var zt=rt(re,yt,ce[Ft],De);if(zt===null){yt===null&&(yt=Qn);break}c&&yt&&zt.alternate===null&&u(re,yt),Z=T(zt,Z,Ft),Et===null?je=zt:Et.sibling=zt,Et=zt,yt=Qn}if(Ft===ce.length)return v(re,yt),ln&&Ta(re,Ft),je;if(yt===null){for(;Ft<ce.length;Ft++)yt=vt(re,ce[Ft],De),yt!==null&&(Z=T(yt,Z,Ft),Et===null?je=yt:Et.sibling=yt,Et=yt);return ln&&Ta(re,Ft),je}for(yt=x(re,yt);Ft<ce.length;Ft++)Qn=Kt(yt,re,Ft,ce[Ft],De),Qn!==null&&(c&&Qn.alternate!==null&&yt.delete(Qn.key===null?Ft:Qn.key),Z=T(Qn,Z,Ft),Et===null?je=Qn:Et.sibling=Qn,Et=Qn);return c&&yt.forEach(function(Ro){return u(re,Ro)}),ln&&Ta(re,Ft),je}function Sr(re,Z,ce,De){var je=A(ce);if(typeof je!="function")throw Error(o(150));if(ce=je.call(ce),ce==null)throw Error(o(151));for(var Et=je=null,yt=Z,Ft=Z=0,Qn=null,zt=ce.next();yt!==null&&!zt.done;Ft++,zt=ce.next()){yt.index>Ft?(Qn=yt,yt=null):Qn=yt.sibling;var Ro=rt(re,yt,zt.value,De);if(Ro===null){yt===null&&(yt=Qn);break}c&&yt&&Ro.alternate===null&&u(re,yt),Z=T(Ro,Z,Ft),Et===null?je=Ro:Et.sibling=Ro,Et=Ro,yt=Qn}if(zt.done)return v(re,yt),ln&&Ta(re,Ft),je;if(yt===null){for(;!zt.done;Ft++,zt=ce.next())zt=vt(re,zt.value,De),zt!==null&&(Z=T(zt,Z,Ft),Et===null?je=zt:Et.sibling=zt,Et=zt);return ln&&Ta(re,Ft),je}for(yt=x(re,yt);!zt.done;Ft++,zt=ce.next())zt=Kt(yt,re,Ft,zt.value,De),zt!==null&&(c&&zt.alternate!==null&&yt.delete(zt.key===null?Ft:zt.key),Z=T(zt,Z,Ft),Et===null?je=zt:Et.sibling=zt,Et=zt);return c&&yt.forEach(function(kk){return u(re,kk)}),ln&&Ta(re,Ft),je}function Di(re,Z,ce,De){if(typeof ce=="object"&&ce!==null&&ce.type===d&&ce.key===null&&(ce=ce.props.children),typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case l:e:{for(var je=ce.key,Et=Z;Et!==null;){if(Et.key===je){if(je=ce.type,je===d){if(Et.tag===7){v(re,Et.sibling),Z=E(Et,ce.props.children),Z.return=re,re=Z;break e}}else if(Et.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===w&&pE(je)===Et.type){v(re,Et.sibling),Z=E(Et,ce.props),Z.ref=Du(re,Et,ce),Z.return=re,re=Z;break e}v(re,Et);break}else u(re,Et);Et=Et.sibling}ce.type===d?(Z=Ia(ce.props.children,re.mode,De,ce.key),Z.return=re,re=Z):(De=rp(ce.type,ce.key,ce.props,null,re.mode,De),De.ref=Du(re,Z,ce),De.return=re,re=De)}return F(re);case f:e:{for(Et=ce.key;Z!==null;){if(Z.key===Et)if(Z.tag===4&&Z.stateNode.containerInfo===ce.containerInfo&&Z.stateNode.implementation===ce.implementation){v(re,Z.sibling),Z=E(Z,ce.children||[]),Z.return=re,re=Z;break e}else{v(re,Z);break}else u(re,Z);Z=Z.sibling}Z=p1(ce,re.mode,De),Z.return=re,re=Z}return F(re);case w:return Et=ce._init,Di(re,Z,Et(ce._payload),De)}if(Y(ce))return Ye(re,Z,ce,De);if(A(ce))return Sr(re,Z,ce,De);Th(re,ce)}return typeof ce=="string"&&ce!==""||typeof ce=="number"?(ce=""+ce,Z!==null&&Z.tag===6?(v(re,Z.sibling),Z=E(Z,ce),Z.return=re,re=Z):(v(re,Z),Z=h1(ce,re.mode,De),Z.return=re,re=Z),F(re)):v(re,Z)}return Di}var zl=mE(!0),gE=mE(!1),ku={},Pi=Yn(ku),Ou=Yn(ku),Bl=Yn(ku);function ys(c){if(c===ku)throw Error(o(174));return c}function Ly(c,u){Be(Bl,u),Be(Ou,c),Be(Pi,ku),c=ue(u),ct(Pi),Be(Pi,c)}function Hl(){ct(Pi),ct(Ou),ct(Bl)}function vE(c){var u=ys(Bl.current),v=ys(Pi.current);u=D(v,c.type,u),v!==u&&(Be(Ou,c),Be(Pi,u))}function Ny(c){Ou.current===c&&(ct(Pi),ct(Ou))}var pn=Yn(0);function Ah(c){for(var u=c;u!==null;){if(u.tag===13){var v=u.memoizedState;if(v!==null&&(v=v.dehydrated,v===null||Cu(v)||Ru(v)))return u}else if(u.tag===19&&u.memoizedProps.revealOrder!==void 0){if(u.flags&128)return u}else if(u.child!==null){u.child.return=u,u=u.child;continue}if(u===c)break;for(;u.sibling===null;){if(u.return===null||u.return===c)return null;u=u.return}u.sibling.return=u.return,u=u.sibling}return null}var Iy=[];function Dy(){for(var c=0;c<Iy.length;c++){var u=Iy[c];Ce?u._workInProgressVersionPrimary=null:u._workInProgressVersionSecondary=null}Iy.length=0}var Ch=a.ReactCurrentDispatcher,Li=a.ReactCurrentBatchConfig,Vl=0,xn=null,yr=null,Jn=null,Rh=!1,$u=!1,Uu=0,ok=0;function _r(){throw Error(o(321))}function ky(c,u){if(u===null)return!1;for(var v=0;v<u.length&&v<c.length;v++)if(!ms(c[v],u[v]))return!1;return!0}function Oy(c,u,v,x,E,T){if(Vl=T,xn=u,u.memoizedState=null,u.updateQueue=null,u.lanes=0,Ch.current=c===null||c.memoizedState===null?uk:fk,c=v(x,E),$u){T=0;do{if($u=!1,Uu=0,25<=T)throw Error(o(301));T+=1,Jn=yr=null,u.updateQueue=null,Ch.current=dk,c=v(x,E)}while($u)}if(Ch.current=Dh,u=yr!==null&&yr.next!==null,Vl=0,Jn=yr=xn=null,Rh=!1,u)throw Error(o(300));return c}function $y(){var c=Uu!==0;return Uu=0,c}function Bs(){var c={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Jn===null?xn.memoizedState=Jn=c:Jn=Jn.next=c,Jn}function _s(){if(yr===null){var c=xn.alternate;c=c!==null?c.memoizedState:null}else c=yr.next;var u=Jn===null?xn.memoizedState:Jn.next;if(u!==null)Jn=u,yr=c;else{if(c===null)throw Error(o(310));yr=c,c={memoizedState:yr.memoizedState,baseState:yr.baseState,baseQueue:yr.baseQueue,queue:yr.queue,next:null},Jn===null?xn.memoizedState=Jn=c:Jn=Jn.next=c}return Jn}function Aa(c,u){return typeof u=="function"?u(c):u}function Ph(c){var u=_s(),v=u.queue;if(v===null)throw Error(o(311));v.lastRenderedReducer=c;var x=yr,E=x.baseQueue,T=v.pending;if(T!==null){if(E!==null){var F=E.next;E.next=T.next,T.next=F}x.baseQueue=E=T,v.pending=null}if(E!==null){T=E.next,x=x.baseState;var j=F=null,fe=null,be=T;do{var He=be.lane;if((Vl&He)===He)fe!==null&&(fe=fe.next={lane:0,action:be.action,hasEagerState:be.hasEagerState,eagerState:be.eagerState,next:null}),x=be.hasEagerState?be.eagerState:c(x,be.action);else{var vt={lane:He,action:be.action,hasEagerState:be.hasEagerState,eagerState:be.eagerState,next:null};fe===null?(j=fe=vt,F=x):fe=fe.next=vt,xn.lanes|=He,ql|=He}be=be.next}while(be!==null&&be!==T);fe===null?F=x:fe.next=j,ms(x,u.memoizedState)||(li=!0),u.memoizedState=x,u.baseState=F,u.baseQueue=fe,v.lastRenderedState=x}if(c=v.interleaved,c!==null){E=c;do T=E.lane,xn.lanes|=T,ql|=T,E=E.next;while(E!==c)}else E===null&&(v.lanes=0);return[u.memoizedState,v.dispatch]}function Lh(c){var u=_s(),v=u.queue;if(v===null)throw Error(o(311));v.lastRenderedReducer=c;var x=v.dispatch,E=v.pending,T=u.memoizedState;if(E!==null){v.pending=null;var F=E=E.next;do T=c(T,F.action),F=F.next;while(F!==E);ms(T,u.memoizedState)||(li=!0),u.memoizedState=T,u.baseQueue===null&&(u.baseState=T),v.lastRenderedState=T}return[T,x]}function yE(){}function _E(c,u){var v=xn,x=_s(),E=u(),T=!ms(x.memoizedState,E);if(T&&(x.memoizedState=E,li=!0),x=x.queue,zu(wE.bind(null,v,x,c),[c]),x.getSnapshot!==u||T||Jn!==null&&Jn.memoizedState.tag&1){if(v.flags|=2048,Fu(9,SE.bind(null,v,x,E,u),void 0,null),kn===null)throw Error(o(349));Vl&30||xE(v,u,E)}return E}function xE(c,u,v){c.flags|=16384,c={getSnapshot:u,value:v},u=xn.updateQueue,u===null?(u={lastEffect:null,stores:null},xn.updateQueue=u,u.stores=[c]):(v=u.stores,v===null?u.stores=[c]:v.push(c))}function SE(c,u,v,x){u.value=v,u.getSnapshot=x,bE(u)&&Ni(c,1,-1)}function wE(c,u,v){return v(function(){bE(u)&&Ni(c,1,-1)})}function bE(c){var u=c.getSnapshot;c=c.value;try{var v=u();return!ms(c,v)}catch{return!0}}function Uy(c){var u=Bs();return typeof c=="function"&&(c=c()),u.memoizedState=u.baseState=c,c={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Aa,lastRenderedState:c},u.queue=c,c=c.dispatch=ck.bind(null,xn,c),[u.memoizedState,c]}function Fu(c,u,v,x){return c={tag:c,create:u,destroy:v,deps:x,next:null},u=xn.updateQueue,u===null?(u={lastEffect:null,stores:null},xn.updateQueue=u,u.lastEffect=c.next=c):(v=u.lastEffect,v===null?u.lastEffect=c.next=c:(x=v.next,v.next=c,c.next=x,u.lastEffect=c)),c}function EE(){return _s().memoizedState}function Nh(c,u,v,x){var E=Bs();xn.flags|=c,E.memoizedState=Fu(1|u,v,void 0,x===void 0?null:x)}function Ih(c,u,v,x){var E=_s();x=x===void 0?null:x;var T=void 0;if(yr!==null){var F=yr.memoizedState;if(T=F.destroy,x!==null&&ky(x,F.deps)){E.memoizedState=Fu(u,v,T,x);return}}xn.flags|=c,E.memoizedState=Fu(1|u,v,T,x)}function Fy(c,u){return Nh(8390656,8,c,u)}function zu(c,u){return Ih(2048,8,c,u)}function ME(c,u){return Ih(4,2,c,u)}function TE(c,u){return Ih(4,4,c,u)}function AE(c,u){if(typeof u=="function")return c=c(),u(c),function(){u(null)};if(u!=null)return c=c(),u.current=c,function(){u.current=null}}function CE(c,u,v){return v=v!=null?v.concat([c]):null,Ih(4,4,AE.bind(null,u,c),v)}function zy(){}function RE(c,u){var v=_s();u=u===void 0?null:u;var x=v.memoizedState;return x!==null&&u!==null&&ky(u,x[1])?x[0]:(v.memoizedState=[c,u],c)}function PE(c,u){var v=_s();u=u===void 0?null:u;var x=v.memoizedState;return x!==null&&u!==null&&ky(u,x[1])?x[0]:(c=c(),v.memoizedState=[c,u],c)}function ak(c,u){var v=Ut;Ut=v!==0&&4>v?v:4,c(!0);var x=Li.transition;Li.transition={};try{c(!1),u()}finally{Ut=v,Li.transition=x}}function LE(){return _s().memoizedState}function lk(c,u,v){var x=To(c);v={lane:x,action:v,hasEagerState:!1,eagerState:null,next:null},NE(c)?IE(u,v):(DE(c,u,v),v=Ir(),c=Ni(c,x,v),c!==null&&kE(c,u,x))}function ck(c,u,v){var x=To(c),E={lane:x,action:v,hasEagerState:!1,eagerState:null,next:null};if(NE(c))IE(u,E);else{DE(c,u,E);var T=c.alternate;if(c.lanes===0&&(T===null||T.lanes===0)&&(T=u.lastRenderedReducer,T!==null))try{var F=u.lastRenderedState,j=T(F,v);if(E.hasEagerState=!0,E.eagerState=j,ms(j,F))return}catch{}finally{}v=Ir(),c=Ni(c,x,v),c!==null&&kE(c,u,x)}}function NE(c){var u=c.alternate;return c===xn||u!==null&&u===xn}function IE(c,u){$u=Rh=!0;var v=c.pending;v===null?u.next=u:(u.next=v.next,v.next=u),c.pending=u}function DE(c,u,v){kn!==null&&c.mode&1&&!(Ct&2)?(c=u.interleaved,c===null?(v.next=v,vs===null?vs=[u]:vs.push(u)):(v.next=c.next,c.next=v),u.interleaved=v):(c=u.pending,c===null?v.next=v:(v.next=c.next,c.next=v),u.pending=v)}function kE(c,u,v){if(v&4194240){var x=u.lanes;x&=c.pendingLanes,v|=x,u.lanes=v,py(c,v)}}var Dh={readContext:Ai,useCallback:_r,useContext:_r,useEffect:_r,useImperativeHandle:_r,useInsertionEffect:_r,useLayoutEffect:_r,useMemo:_r,useReducer:_r,useRef:_r,useState:_r,useDebugValue:_r,useDeferredValue:_r,useTransition:_r,useMutableSource:_r,useSyncExternalStore:_r,useId:_r,unstable_isNewReconciler:!1},uk={readContext:Ai,useCallback:function(c,u){return Bs().memoizedState=[c,u===void 0?null:u],c},useContext:Ai,useEffect:Fy,useImperativeHandle:function(c,u,v){return v=v!=null?v.concat([c]):null,Nh(4194308,4,AE.bind(null,u,c),v)},useLayoutEffect:function(c,u){return Nh(4194308,4,c,u)},useInsertionEffect:function(c,u){return Nh(4,2,c,u)},useMemo:function(c,u){var v=Bs();return u=u===void 0?null:u,c=c(),v.memoizedState=[c,u],c},useReducer:function(c,u,v){var x=Bs();return u=v!==void 0?v(u):u,x.memoizedState=x.baseState=u,c={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:c,lastRenderedState:u},x.queue=c,c=c.dispatch=lk.bind(null,xn,c),[x.memoizedState,c]},useRef:function(c){var u=Bs();return c={current:c},u.memoizedState=c},useState:Uy,useDebugValue:zy,useDeferredValue:function(c){var u=Uy(c),v=u[0],x=u[1];return Fy(function(){var E=Li.transition;Li.transition={};try{x(c)}finally{Li.transition=E}},[c]),v},useTransition:function(){var c=Uy(!1),u=c[0];return c=ak.bind(null,c[1]),Bs().memoizedState=c,[u,c]},useMutableSource:function(){},useSyncExternalStore:function(c,u,v){var x=xn,E=Bs();if(ln){if(v===void 0)throw Error(o(407));v=v()}else{if(v=u(),kn===null)throw Error(o(349));Vl&30||xE(x,u,v)}E.memoizedState=v;var T={value:v,getSnapshot:u};return E.queue=T,Fy(wE.bind(null,x,T,c),[c]),x.flags|=2048,Fu(9,SE.bind(null,x,T,v,u),void 0,null),v},useId:function(){var c=Bs(),u=kn.identifierPrefix;if(ln){var v=zs,x=Fs;v=(x&~(1<<32-si(x)-1)).toString(32)+v,u=":"+u+"R"+v,v=Uu++,0<v&&(u+="H"+v.toString(32)),u+=":"}else v=ok++,u=":"+u+"r"+v.toString(32)+":";return c.memoizedState=u},unstable_isNewReconciler:!1},fk={readContext:Ai,useCallback:RE,useContext:Ai,useEffect:zu,useImperativeHandle:CE,useInsertionEffect:ME,useLayoutEffect:TE,useMemo:PE,useReducer:Ph,useRef:EE,useState:function(){return Ph(Aa)},useDebugValue:zy,useDeferredValue:function(c){var u=Ph(Aa),v=u[0],x=u[1];return zu(function(){var E=Li.transition;Li.transition={};try{x(c)}finally{Li.transition=E}},[c]),v},useTransition:function(){var c=Ph(Aa)[0],u=_s().memoizedState;return[c,u]},useMutableSource:yE,useSyncExternalStore:_E,useId:LE,unstable_isNewReconciler:!1},dk={readContext:Ai,useCallback:RE,useContext:Ai,useEffect:zu,useImperativeHandle:CE,useInsertionEffect:ME,useLayoutEffect:TE,useMemo:PE,useReducer:Lh,useRef:EE,useState:function(){return Lh(Aa)},useDebugValue:zy,useDeferredValue:function(c){var u=Lh(Aa),v=u[0],x=u[1];return zu(function(){var E=Li.transition;Li.transition={};try{x(c)}finally{Li.transition=E}},[c]),v},useTransition:function(){var c=Lh(Aa)[0],u=_s().memoizedState;return[c,u]},useMutableSource:yE,useSyncExternalStore:_E,useId:LE,unstable_isNewReconciler:!1};function By(c,u){try{var v="",x=u;do v+=sk(x),x=x.return;while(x);var E=v}catch(T){E=`
Error generating stack: `+T.message+`
`+T.stack}return{value:c,source:u,stack:E}}function Hy(c,u){try{console.error(u.value)}catch(v){setTimeout(function(){throw v})}}var hk=typeof WeakMap=="function"?WeakMap:Map;function OE(c,u,v){v=Us(-1,v),v.tag=3,v.payload={element:null};var x=u.value;return v.callback=function(){Zh||(Zh=!0,o1=x),Hy(c,u)},v}function $E(c,u,v){v=Us(-1,v),v.tag=3;var x=c.type.getDerivedStateFromError;if(typeof x=="function"){var E=u.value;v.payload=function(){return x(E)},v.callback=function(){Hy(c,u)}}var T=c.stateNode;return T!==null&&typeof T.componentDidCatch=="function"&&(v.callback=function(){Hy(c,u),typeof x!="function"&&(Eo===null?Eo=new Set([this]):Eo.add(this));var F=u.stack;this.componentDidCatch(u.value,{componentStack:F!==null?F:""})}),v}function UE(c,u,v){var x=c.pingCache;if(x===null){x=c.pingCache=new hk;var E=new Set;x.set(u,E)}else E=x.get(u),E===void 0&&(E=new Set,x.set(u,E));E.has(v)||(E.add(v),c=Ak.bind(null,c,u,v),u.then(c,c))}function FE(c){do{var u;if((u=c.tag===13)&&(u=c.memoizedState,u=u!==null?u.dehydrated!==null:!0),u)return c;c=c.return}while(c!==null);return null}function zE(c,u,v,x,E){return c.mode&1?(c.flags|=65536,c.lanes=E,c):(c===u?c.flags|=65536:(c.flags|=128,v.flags|=131072,v.flags&=-52805,v.tag===1&&(v.alternate===null?v.tag=17:(u=Us(-1,1),u.tag=2,bo(v,u))),v.lanes|=1),c)}function xs(c){c.flags|=4}function BE(c,u){if(c!==null&&c.child===u.child)return!0;if(u.flags&16)return!1;for(c=u.child;c!==null;){if(c.flags&12854||c.subtreeFlags&12854)return!1;c=c.sibling}return!0}var Bu,Hu,kh,Oh;if(Ke)Bu=function(c,u){for(var v=u.child;v!==null;){if(v.tag===5||v.tag===6)ne(c,v.stateNode);else if(v.tag!==4&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===u)break;for(;v.sibling===null;){if(v.return===null||v.return===u)return;v=v.return}v.sibling.return=v.return,v=v.sibling}},Hu=function(){},kh=function(c,u,v,x,E){if(c=c.memoizedProps,c!==x){var T=u.stateNode,F=ys(Pi.current);v=ae(T,v,c,x,E,F),(u.updateQueue=v)&&xs(u)}},Oh=function(c,u,v,x){v!==x&&xs(u)};else if(G){Bu=function(c,u,v,x){for(var E=u.child;E!==null;){if(E.tag===5){var T=E.stateNode;v&&x&&(T=An(T,E.type,E.memoizedProps,E)),ne(c,T)}else if(E.tag===6)T=E.stateNode,v&&x&&(T=Xn(T,E.memoizedProps,E)),ne(c,T);else if(E.tag!==4){if(E.tag===22&&E.memoizedState!==null)T=E.child,T!==null&&(T.return=E),Bu(c,E,!0,!0);else if(E.child!==null){E.child.return=E,E=E.child;continue}}if(E===u)break;for(;E.sibling===null;){if(E.return===null||E.return===u)return;E=E.return}E.sibling.return=E.return,E=E.sibling}};var HE=function(c,u,v,x){for(var E=u.child;E!==null;){if(E.tag===5){var T=E.stateNode;v&&x&&(T=An(T,E.type,E.memoizedProps,E)),nt(c,T)}else if(E.tag===6)T=E.stateNode,v&&x&&(T=Xn(T,E.memoizedProps,E)),nt(c,T);else if(E.tag!==4){if(E.tag===22&&E.memoizedState!==null)T=E.child,T!==null&&(T.return=E),HE(c,E,!0,!0);else if(E.child!==null){E.child.return=E,E=E.child;continue}}if(E===u)break;for(;E.sibling===null;){if(E.return===null||E.return===u)return;E=E.return}E.sibling.return=E.return,E=E.sibling}};Hu=function(c,u){var v=u.stateNode;if(!BE(c,u)){c=v.containerInfo;var x=at(c);HE(x,u,!1,!1),v.pendingChildren=x,xs(u),Xt(c,x)}},kh=function(c,u,v,x,E){var T=c.stateNode,F=c.memoizedProps;if((c=BE(c,u))&&F===x)u.stateNode=T;else{var j=u.stateNode,fe=ys(Pi.current),be=null;F!==x&&(be=ae(j,v,F,x,E,fe)),c&&be===null?u.stateNode=T:(T=Le(T,be,v,F,x,u,c,j),K(T,v,x,E,fe)&&xs(u),u.stateNode=T,c?xs(u):Bu(T,u,!1,!1))}},Oh=function(c,u,v,x){v!==x?(c=ys(Bl.current),v=ys(Pi.current),u.stateNode=Me(x,c,v,u),xs(u)):u.stateNode=c.stateNode}}else Hu=function(){},kh=function(){},Oh=function(){};function Vu(c,u){if(!ln)switch(c.tailMode){case"hidden":u=c.tail;for(var v=null;u!==null;)u.alternate!==null&&(v=u),u=u.sibling;v===null?c.tail=null:v.sibling=null;break;case"collapsed":v=c.tail;for(var x=null;v!==null;)v.alternate!==null&&(x=v),v=v.sibling;x===null?u||c.tail===null?c.tail=null:c.tail.sibling=null:x.sibling=null}}function xr(c){var u=c.alternate!==null&&c.alternate.child===c.child,v=0,x=0;if(u)for(var E=c.child;E!==null;)v|=E.lanes|E.childLanes,x|=E.subtreeFlags&14680064,x|=E.flags&14680064,E.return=c,E=E.sibling;else for(E=c.child;E!==null;)v|=E.lanes|E.childLanes,x|=E.subtreeFlags,x|=E.flags,E.return=c,E=E.sibling;return c.subtreeFlags|=x,c.childLanes=v,u}function pk(c,u,v){var x=u.pendingProps;switch(Ay(u),u.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xr(u),null;case 1:return Zn(u.type)&&Cn(),xr(u),null;case 3:return x=u.stateNode,Hl(),ct(_n),ct(At),Dy(),x.pendingContext&&(x.context=x.pendingContext,x.pendingContext=null),(c===null||c.child===null)&&(Iu(u)?xs(u):c===null||c.memoizedState.isDehydrated&&!(u.flags&256)||(u.flags|=1024,Gi!==null&&(c1(Gi),Gi=null))),Hu(c,u),xr(u),null;case 5:Ny(u),v=ys(Bl.current);var E=u.type;if(c!==null&&u.stateNode!=null)kh(c,u,E,x,v),c.ref!==u.ref&&(u.flags|=512,u.flags|=2097152);else{if(!x){if(u.stateNode===null)throw Error(o(166));return xr(u),null}if(c=ys(Pi.current),Iu(u)){if(!xe)throw Error(o(175));c=cy(u.stateNode,u.type,u.memoizedProps,v,c,u,!Nu),u.updateQueue=c,c!==null&&xs(u)}else{var T=X(E,x,v,c,u);Bu(T,u,!1,!1),u.stateNode=T,K(T,E,x,v,c)&&xs(u)}u.ref!==null&&(u.flags|=512,u.flags|=2097152)}return xr(u),null;case 6:if(c&&u.stateNode!=null)Oh(c,u,c.memoizedProps,x);else{if(typeof x!="string"&&u.stateNode===null)throw Error(o(166));if(c=ys(Bl.current),v=ys(Pi.current),Iu(u)){if(!xe)throw Error(o(176));if(c=u.stateNode,x=u.memoizedProps,(v=uy(c,x,u,!Nu))&&(E=oi,E!==null))switch(T=(E.mode&1)!==0,E.tag){case 3:Xe(E.stateNode.containerInfo,c,x,T);break;case 5:st(E.type,E.memoizedProps,E.stateNode,c,x,T)}v&&xs(u)}else u.stateNode=Me(x,c,v,u)}return xr(u),null;case 13:if(ct(pn),x=u.memoizedState,ln&&ai!==null&&u.mode&1&&!(u.flags&128)){for(c=ai;c;)c=So(c);return Fl(),u.flags|=98560,u}if(x!==null&&x.dehydrated!==null){if(x=Iu(u),c===null){if(!x)throw Error(o(318));if(!xe)throw Error(o(344));if(c=u.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(o(317));fy(c,u)}else Fl(),!(u.flags&128)&&(u.memoizedState=null),u.flags|=4;return xr(u),null}return Gi!==null&&(c1(Gi),Gi=null),u.flags&128?(u.lanes=v,u):(x=x!==null,v=!1,c===null?Iu(u):v=c.memoizedState!==null,x&&!v&&(u.child.flags|=8192,u.mode&1&&(c===null||pn.current&1?Bn===0&&(Bn=3):f1())),u.updateQueue!==null&&(u.flags|=4),xr(u),null);case 4:return Hl(),Hu(c,u),c===null&&we(u.stateNode.containerInfo),xr(u),null;case 10:return Sy(u.type._context),xr(u),null;case 17:return Zn(u.type)&&Cn(),xr(u),null;case 19:if(ct(pn),E=u.memoizedState,E===null)return xr(u),null;if(x=(u.flags&128)!==0,T=E.rendering,T===null)if(x)Vu(E,!1);else{if(Bn!==0||c!==null&&c.flags&128)for(c=u.child;c!==null;){if(T=Ah(c),T!==null){for(u.flags|=128,Vu(E,!1),c=T.updateQueue,c!==null&&(u.updateQueue=c,u.flags|=4),u.subtreeFlags=0,c=v,x=u.child;x!==null;)v=x,E=c,v.flags&=14680066,T=v.alternate,T===null?(v.childLanes=0,v.lanes=E,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=T.childLanes,v.lanes=T.lanes,v.child=T.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=T.memoizedProps,v.memoizedState=T.memoizedState,v.updateQueue=T.updateQueue,v.type=T.type,E=T.dependencies,v.dependencies=E===null?null:{lanes:E.lanes,firstContext:E.firstContext}),x=x.sibling;return Be(pn,pn.current&1|2),u.child}c=c.sibling}E.tail!==null&&Kn()>s1&&(u.flags|=128,x=!0,Vu(E,!1),u.lanes=4194304)}else{if(!x)if(c=Ah(T),c!==null){if(u.flags|=128,x=!0,c=c.updateQueue,c!==null&&(u.updateQueue=c,u.flags|=4),Vu(E,!0),E.tail===null&&E.tailMode==="hidden"&&!T.alternate&&!ln)return xr(u),null}else 2*Kn()-E.renderingStartTime>s1&&v!==1073741824&&(u.flags|=128,x=!0,Vu(E,!1),u.lanes=4194304);E.isBackwards?(T.sibling=u.child,u.child=T):(c=E.last,c!==null?c.sibling=T:u.child=T,E.last=T)}return E.tail!==null?(u=E.tail,E.rendering=u,E.tail=u.sibling,E.renderingStartTime=Kn(),u.sibling=null,c=pn.current,Be(pn,x?c&1|2:c&1),u):(xr(u),null);case 22:case 23:return u1(),x=u.memoizedState!==null,c!==null&&c.memoizedState!==null!==x&&(u.flags|=8192),x&&u.mode&1?ci&1073741824&&(xr(u),Ke&&u.subtreeFlags&6&&(u.flags|=8192)):xr(u),null;case 24:return null;case 25:return null}throw Error(o(156,u.tag))}var mk=a.ReactCurrentOwner,li=!1;function Nr(c,u,v,x){u.child=c===null?gE(u,null,v,x):zl(u,c.child,v,x)}function VE(c,u,v,x,E){v=v.render;var T=u.ref;return Ol(u,E),x=Oy(c,u,v,x,T,E),v=$y(),c!==null&&!li?(u.updateQueue=c.updateQueue,u.flags&=-2053,c.lanes&=~E,Hs(c,u,E)):(ln&&v&&Ty(u),u.flags|=1,Nr(c,u,x,E),u.child)}function GE(c,u,v,x,E){if(c===null){var T=v.type;return typeof T=="function"&&!d1(T)&&T.defaultProps===void 0&&v.compare===null&&v.defaultProps===void 0?(u.tag=15,u.type=T,qE(c,u,T,x,E)):(c=rp(v.type,null,x,u,u.mode,E),c.ref=u.ref,c.return=u,u.child=c)}if(T=c.child,!(c.lanes&E)){var F=T.memoizedProps;if(v=v.compare,v=v!==null?v:yh,v(F,x)&&c.ref===u.ref)return Hs(c,u,E)}return u.flags|=1,c=Co(T,x),c.ref=u.ref,c.return=u,u.child=c}function qE(c,u,v,x,E){if(c!==null&&yh(c.memoizedProps,x)&&c.ref===u.ref)if(li=!1,(c.lanes&E)!==0)c.flags&131072&&(li=!0);else return u.lanes=c.lanes,Hs(c,u,E);return Vy(c,u,v,x,E)}function WE(c,u,v){var x=u.pendingProps,E=x.children,T=c!==null?c.memoizedState:null;if(x.mode==="hidden")if(!(u.mode&1))u.memoizedState={baseLanes:0,cachePool:null},Be(Gl,ci),ci|=v;else if(v&1073741824)u.memoizedState={baseLanes:0,cachePool:null},x=T!==null?T.baseLanes:v,Be(Gl,ci),ci|=x;else return c=T!==null?T.baseLanes|v:v,u.lanes=u.childLanes=1073741824,u.memoizedState={baseLanes:c,cachePool:null},u.updateQueue=null,Be(Gl,ci),ci|=c,null;else T!==null?(x=T.baseLanes|v,u.memoizedState=null):x=v,Be(Gl,ci),ci|=x;return Nr(c,u,E,v),u.child}function jE(c,u){var v=u.ref;(c===null&&v!==null||c!==null&&c.ref!==v)&&(u.flags|=512,u.flags|=2097152)}function Vy(c,u,v,x,E){var T=Zn(v)?ds:At.current;return T=Ti(u,T),Ol(u,E),v=Oy(c,u,v,x,T,E),x=$y(),c!==null&&!li?(u.updateQueue=c.updateQueue,u.flags&=-2053,c.lanes&=~E,Hs(c,u,E)):(ln&&x&&Ty(u),u.flags|=1,Nr(c,u,v,E),u.child)}function XE(c,u,v,x,E){if(Zn(v)){var T=!0;cr(u)}else T=!1;if(Ol(u,E),u.stateNode===null)c!==null&&(c.alternate=null,u.alternate=null,u.flags|=2),lE(u,v,x),My(u,v,x,E),x=!0;else if(c===null){var F=u.stateNode,j=u.memoizedProps;F.props=j;var fe=F.context,be=v.contextType;typeof be=="object"&&be!==null?be=Ai(be):(be=Zn(v)?ds:At.current,be=Ti(u,be));var He=v.getDerivedStateFromProps,vt=typeof He=="function"||typeof F.getSnapshotBeforeUpdate=="function";vt||typeof F.UNSAFE_componentWillReceiveProps!="function"&&typeof F.componentWillReceiveProps!="function"||(j!==x||fe!==be)&&cE(u,F,x,be),wo=!1;var rt=u.memoizedState;F.state=rt,wh(u,x,F,E),fe=u.memoizedState,j!==x||rt!==fe||_n.current||wo?(typeof He=="function"&&(Ey(u,v,He,x),fe=u.memoizedState),(j=wo||aE(u,v,j,x,rt,fe,be))?(vt||typeof F.UNSAFE_componentWillMount!="function"&&typeof F.componentWillMount!="function"||(typeof F.componentWillMount=="function"&&F.componentWillMount(),typeof F.UNSAFE_componentWillMount=="function"&&F.UNSAFE_componentWillMount()),typeof F.componentDidMount=="function"&&(u.flags|=4194308)):(typeof F.componentDidMount=="function"&&(u.flags|=4194308),u.memoizedProps=x,u.memoizedState=fe),F.props=x,F.state=fe,F.context=be,x=j):(typeof F.componentDidMount=="function"&&(u.flags|=4194308),x=!1)}else{F=u.stateNode,rE(c,u),j=u.memoizedProps,be=u.type===u.elementType?j:Vi(u.type,j),F.props=be,vt=u.pendingProps,rt=F.context,fe=v.contextType,typeof fe=="object"&&fe!==null?fe=Ai(fe):(fe=Zn(v)?ds:At.current,fe=Ti(u,fe));var Kt=v.getDerivedStateFromProps;(He=typeof Kt=="function"||typeof F.getSnapshotBeforeUpdate=="function")||typeof F.UNSAFE_componentWillReceiveProps!="function"&&typeof F.componentWillReceiveProps!="function"||(j!==vt||rt!==fe)&&cE(u,F,x,fe),wo=!1,rt=u.memoizedState,F.state=rt,wh(u,x,F,E);var Ye=u.memoizedState;j!==vt||rt!==Ye||_n.current||wo?(typeof Kt=="function"&&(Ey(u,v,Kt,x),Ye=u.memoizedState),(be=wo||aE(u,v,be,x,rt,Ye,fe)||!1)?(He||typeof F.UNSAFE_componentWillUpdate!="function"&&typeof F.componentWillUpdate!="function"||(typeof F.componentWillUpdate=="function"&&F.componentWillUpdate(x,Ye,fe),typeof F.UNSAFE_componentWillUpdate=="function"&&F.UNSAFE_componentWillUpdate(x,Ye,fe)),typeof F.componentDidUpdate=="function"&&(u.flags|=4),typeof F.getSnapshotBeforeUpdate=="function"&&(u.flags|=1024)):(typeof F.componentDidUpdate!="function"||j===c.memoizedProps&&rt===c.memoizedState||(u.flags|=4),typeof F.getSnapshotBeforeUpdate!="function"||j===c.memoizedProps&&rt===c.memoizedState||(u.flags|=1024),u.memoizedProps=x,u.memoizedState=Ye),F.props=x,F.state=Ye,F.context=fe,x=be):(typeof F.componentDidUpdate!="function"||j===c.memoizedProps&&rt===c.memoizedState||(u.flags|=4),typeof F.getSnapshotBeforeUpdate!="function"||j===c.memoizedProps&&rt===c.memoizedState||(u.flags|=1024),x=!1)}return Gy(c,u,v,x,T,E)}function Gy(c,u,v,x,E,T){jE(c,u);var F=(u.flags&128)!==0;if(!x&&!F)return E&&Dl(u,v,!1),Hs(c,u,T);x=u.stateNode,mk.current=u;var j=F&&typeof v.getDerivedStateFromError!="function"?null:x.render();return u.flags|=1,c!==null&&F?(u.child=zl(u,c.child,null,T),u.child=zl(u,null,j,T)):Nr(c,u,j,T),u.memoizedState=x.state,E&&Dl(u,v,!0),u.child}function YE(c){var u=c.stateNode;u.pendingContext?hs(c,u.pendingContext,u.pendingContext!==u.context):u.context&&hs(c,u.context,!1),Ly(c,u.containerInfo)}function ZE(c,u,v,x,E){return Fl(),Py(E),u.flags|=256,Nr(c,u,v,x),u.child}var $h={dehydrated:null,treeContext:null,retryLane:0};function Uh(c){return{baseLanes:c,cachePool:null}}function KE(c,u,v){var x=u.pendingProps,E=pn.current,T=!1,F=(u.flags&128)!==0,j;if((j=F)||(j=c!==null&&c.memoizedState===null?!1:(E&2)!==0),j?(T=!0,u.flags&=-129):(c===null||c.memoizedState!==null)&&(E|=1),Be(pn,E&1),c===null)return Ry(u),c=u.memoizedState,c!==null&&(c=c.dehydrated,c!==null)?(u.mode&1?Ru(c)?u.lanes=8:u.lanes=1073741824:u.lanes=1,null):(E=x.children,c=x.fallback,T?(x=u.mode,T=u.child,E={mode:"hidden",children:E},!(x&1)&&T!==null?(T.childLanes=0,T.pendingProps=E):T=ip(E,x,0,null),c=Ia(c,x,v,null),T.return=u,c.return=u,T.sibling=c,u.child=T,u.child.memoizedState=Uh(v),u.memoizedState=$h,c):qy(u,E));if(E=c.memoizedState,E!==null){if(j=E.dehydrated,j!==null){if(F)return u.flags&256?(u.flags&=-257,Fh(c,u,v,Error(o(422)))):u.memoizedState!==null?(u.child=c.child,u.flags|=128,null):(T=x.fallback,E=u.mode,x=ip({mode:"visible",children:x.children},E,0,null),T=Ia(T,E,v,null),T.flags|=2,x.return=u,T.return=u,x.sibling=T,u.child=x,u.mode&1&&zl(u,c.child,null,v),u.child.memoizedState=Uh(v),u.memoizedState=$h,T);if(!(u.mode&1))u=Fh(c,u,v,null);else if(Ru(j))u=Fh(c,u,v,Error(o(419)));else if(x=(v&c.childLanes)!==0,li||x){if(x=kn,x!==null){switch(v&-v){case 4:T=2;break;case 16:T=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:T=32;break;case 536870912:T=268435456;break;default:T=0}x=T&(x.suspendedLanes|v)?0:T,x!==0&&x!==E.retryLane&&(E.retryLane=x,Ni(c,x,-1))}f1(),u=Fh(c,u,v,Error(o(421)))}else Cu(j)?(u.flags|=128,u.child=c.child,u=Ck.bind(null,c),Ll(j,u),u=null):(v=E.treeContext,xe&&(ai=fh(j),oi=u,ln=!0,Gi=null,Nu=!1,v!==null&&(Ci[Ri++]=Fs,Ci[Ri++]=zs,Ci[Ri++]=Ma,Fs=v.id,zs=v.overflow,Ma=u)),u=qy(u,u.pendingProps.children),u.flags|=4096);return u}return T?(x=QE(c,u,x.children,x.fallback,v),T=u.child,E=c.child.memoizedState,T.memoizedState=E===null?Uh(v):{baseLanes:E.baseLanes|v,cachePool:null},T.childLanes=c.childLanes&~v,u.memoizedState=$h,x):(v=JE(c,u,x.children,v),u.memoizedState=null,v)}return T?(x=QE(c,u,x.children,x.fallback,v),T=u.child,E=c.child.memoizedState,T.memoizedState=E===null?Uh(v):{baseLanes:E.baseLanes|v,cachePool:null},T.childLanes=c.childLanes&~v,u.memoizedState=$h,x):(v=JE(c,u,x.children,v),u.memoizedState=null,v)}function qy(c,u){return u=ip({mode:"visible",children:u},c.mode,0,null),u.return=c,c.child=u}function JE(c,u,v,x){var E=c.child;return c=E.sibling,v=Co(E,{mode:"visible",children:v}),!(u.mode&1)&&(v.lanes=x),v.return=u,v.sibling=null,c!==null&&(x=u.deletions,x===null?(u.deletions=[c],u.flags|=16):x.push(c)),u.child=v}function QE(c,u,v,x,E){var T=u.mode;c=c.child;var F=c.sibling,j={mode:"hidden",children:v};return!(T&1)&&u.child!==c?(v=u.child,v.childLanes=0,v.pendingProps=j,u.deletions=null):(v=Co(c,j),v.subtreeFlags=c.subtreeFlags&14680064),F!==null?x=Co(F,x):(x=Ia(x,T,E,null),x.flags|=2),x.return=u,v.return=u,v.sibling=x,u.child=v,x}function Fh(c,u,v,x){return x!==null&&Py(x),zl(u,c.child,null,v),c=qy(u,u.pendingProps.children),c.flags|=2,u.memoizedState=null,c}function eM(c,u,v){c.lanes|=u;var x=c.alternate;x!==null&&(x.lanes|=u),wy(c.return,u,v)}function Wy(c,u,v,x,E){var T=c.memoizedState;T===null?c.memoizedState={isBackwards:u,rendering:null,renderingStartTime:0,last:x,tail:v,tailMode:E}:(T.isBackwards=u,T.rendering=null,T.renderingStartTime=0,T.last=x,T.tail=v,T.tailMode=E)}function tM(c,u,v){var x=u.pendingProps,E=x.revealOrder,T=x.tail;if(Nr(c,u,x.children,v),x=pn.current,x&2)x=x&1|2,u.flags|=128;else{if(c!==null&&c.flags&128)e:for(c=u.child;c!==null;){if(c.tag===13)c.memoizedState!==null&&eM(c,v,u);else if(c.tag===19)eM(c,v,u);else if(c.child!==null){c.child.return=c,c=c.child;continue}if(c===u)break e;for(;c.sibling===null;){if(c.return===null||c.return===u)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}x&=1}if(Be(pn,x),!(u.mode&1))u.memoizedState=null;else switch(E){case"forwards":for(v=u.child,E=null;v!==null;)c=v.alternate,c!==null&&Ah(c)===null&&(E=v),v=v.sibling;v=E,v===null?(E=u.child,u.child=null):(E=v.sibling,v.sibling=null),Wy(u,!1,E,v,T);break;case"backwards":for(v=null,E=u.child,u.child=null;E!==null;){if(c=E.alternate,c!==null&&Ah(c)===null){u.child=E;break}c=E.sibling,E.sibling=v,v=E,E=c}Wy(u,!0,v,null,T);break;case"together":Wy(u,!1,null,null,void 0);break;default:u.memoizedState=null}return u.child}function Hs(c,u,v){if(c!==null&&(u.dependencies=c.dependencies),ql|=u.lanes,!(v&u.childLanes))return null;if(c!==null&&u.child!==c.child)throw Error(o(153));if(u.child!==null){for(c=u.child,v=Co(c,c.pendingProps),u.child=v,v.return=u;c.sibling!==null;)c=c.sibling,v=v.sibling=Co(c,c.pendingProps),v.return=u;v.sibling=null}return u.child}function gk(c,u,v){switch(u.tag){case 3:YE(u),Fl();break;case 5:vE(u);break;case 1:Zn(u.type)&&cr(u);break;case 4:Ly(u,u.stateNode.containerInfo);break;case 10:nE(u,u.type._context,u.memoizedProps.value);break;case 13:var x=u.memoizedState;if(x!==null)return x.dehydrated!==null?(Be(pn,pn.current&1),u.flags|=128,null):v&u.child.childLanes?KE(c,u,v):(Be(pn,pn.current&1),c=Hs(c,u,v),c!==null?c.sibling:null);Be(pn,pn.current&1);break;case 19:if(x=(v&u.childLanes)!==0,c.flags&128){if(x)return tM(c,u,v);u.flags|=128}var E=u.memoizedState;if(E!==null&&(E.rendering=null,E.tail=null,E.lastEffect=null),Be(pn,pn.current),x)break;return null;case 22:case 23:return u.lanes=0,WE(c,u,v)}return Hs(c,u,v)}function vk(c,u){switch(Ay(u),u.tag){case 1:return Zn(u.type)&&Cn(),c=u.flags,c&65536?(u.flags=c&-65537|128,u):null;case 3:return Hl(),ct(_n),ct(At),Dy(),c=u.flags,c&65536&&!(c&128)?(u.flags=c&-65537|128,u):null;case 5:return Ny(u),null;case 13:if(ct(pn),c=u.memoizedState,c!==null&&c.dehydrated!==null){if(u.alternate===null)throw Error(o(340));Fl()}return c=u.flags,c&65536?(u.flags=c&-65537|128,u):null;case 19:return ct(pn),null;case 4:return Hl(),null;case 10:return Sy(u.type._context),null;case 22:case 23:return u1(),null;case 24:return null;default:return null}}var zh=!1,Ca=!1,yk=typeof WeakSet=="function"?WeakSet:Set,Ne=null;function Bh(c,u){var v=c.ref;if(v!==null)if(typeof v=="function")try{v(null)}catch(x){Wr(c,u,x)}else v.current=null}function jy(c,u,v){try{v()}catch(x){Wr(c,u,x)}}var nM=!1;function _k(c,u){for(z(c.containerInfo),Ne=u;Ne!==null;)if(c=Ne,u=c.child,(c.subtreeFlags&1028)!==0&&u!==null)u.return=c,Ne=u;else for(;Ne!==null;){c=Ne;try{var v=c.alternate;if(c.flags&1024)switch(c.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,E=v.memoizedState,T=c.stateNode,F=T.getSnapshotBeforeUpdate(c.elementType===c.type?x:Vi(c.type,x),E);T.__reactInternalSnapshotBeforeUpdate=F}break;case 3:Ke&&Pe(c.stateNode.containerInfo);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(j){Wr(c,c.return,j)}if(u=c.sibling,u!==null){u.return=c.return,Ne=u;break}Ne=c.return}return v=nM,nM=!1,v}function Ra(c,u,v){var x=u.updateQueue;if(x=x!==null?x.lastEffect:null,x!==null){var E=x=x.next;do{if((E.tag&c)===c){var T=E.destroy;E.destroy=void 0,T!==void 0&&jy(u,v,T)}E=E.next}while(E!==x)}}function Gu(c,u){if(u=u.updateQueue,u=u!==null?u.lastEffect:null,u!==null){var v=u=u.next;do{if((v.tag&c)===c){var x=v.create;v.destroy=x()}v=v.next}while(v!==u)}}function Xy(c){var u=c.ref;if(u!==null){var v=c.stateNode;switch(c.tag){case 5:c=te(v);break;default:c=v}typeof u=="function"?u(c):u.current=c}}function rM(c,u,v){if(ps&&typeof ps.onCommitFiberUnmount=="function")try{ps.onCommitFiberUnmount(gh,u)}catch{}switch(u.tag){case 0:case 11:case 14:case 15:if(c=u.updateQueue,c!==null&&(c=c.lastEffect,c!==null)){var x=c=c.next;do{var E=x,T=E.destroy;E=E.tag,T!==void 0&&(E&2||E&4)&&jy(u,v,T),x=x.next}while(x!==c)}break;case 1:if(Bh(u,v),c=u.stateNode,typeof c.componentWillUnmount=="function")try{c.props=u.memoizedProps,c.state=u.memoizedState,c.componentWillUnmount()}catch(F){Wr(u,v,F)}break;case 5:Bh(u,v);break;case 4:Ke?cM(c,u,v):G&&G&&(u=u.stateNode.containerInfo,v=at(u),Ht(u,v))}}function iM(c,u,v){for(var x=u;;)if(rM(c,x,v),x.child===null||Ke&&x.tag===4){if(x===u)break;for(;x.sibling===null;){if(x.return===null||x.return===u)return;x=x.return}x.sibling.return=x.return,x=x.sibling}else x.child.return=x,x=x.child}function sM(c){var u=c.alternate;u!==null&&(c.alternate=null,sM(u)),c.child=null,c.deletions=null,c.sibling=null,c.tag===5&&(u=c.stateNode,u!==null&&Ze(u)),c.stateNode=null,c.return=null,c.dependencies=null,c.memoizedProps=null,c.memoizedState=null,c.pendingProps=null,c.stateNode=null,c.updateQueue=null}function oM(c){return c.tag===5||c.tag===3||c.tag===4}function aM(c){e:for(;;){for(;c.sibling===null;){if(c.return===null||oM(c.return))return null;c=c.return}for(c.sibling.return=c.return,c=c.sibling;c.tag!==5&&c.tag!==6&&c.tag!==18;){if(c.flags&2||c.child===null||c.tag===4)continue e;c.child.return=c,c=c.child}if(!(c.flags&2))return c.stateNode}}function lM(c){if(Ke){e:{for(var u=c.return;u!==null;){if(oM(u))break e;u=u.return}throw Error(o(160))}var v=u;switch(v.tag){case 5:u=v.stateNode,v.flags&32&&($t(u),v.flags&=-33),v=aM(c),Zy(c,v,u);break;case 3:case 4:u=v.stateNode.containerInfo,v=aM(c),Yy(c,v,u);break;default:throw Error(o(161))}}}function Yy(c,u,v){var x=c.tag;if(x===5||x===6)c=c.stateNode,u?et(v,c,u):gt(v,c);else if(x!==4&&(c=c.child,c!==null))for(Yy(c,u,v),c=c.sibling;c!==null;)Yy(c,u,v),c=c.sibling}function Zy(c,u,v){var x=c.tag;if(x===5||x===6)c=c.stateNode,u?dt(v,c,u):it(v,c);else if(x!==4&&(c=c.child,c!==null))for(Zy(c,u,v),c=c.sibling;c!==null;)Zy(c,u,v),c=c.sibling}function cM(c,u,v){for(var x=u,E=!1,T,F;;){if(!E){E=x.return;e:for(;;){if(E===null)throw Error(o(160));switch(T=E.stateNode,E.tag){case 5:F=!1;break e;case 3:T=T.containerInfo,F=!0;break e;case 4:T=T.containerInfo,F=!0;break e}E=E.return}E=!0}if(x.tag===5||x.tag===6)iM(c,x,v),F?_t(T,x.stateNode):Ve(T,x.stateNode);else if(x.tag===18)F?se(T,x.stateNode):le(T,x.stateNode);else if(x.tag===4){if(x.child!==null){T=x.stateNode.containerInfo,F=!0,x.child.return=x,x=x.child;continue}}else if(rM(c,x,v),x.child!==null){x.child.return=x,x=x.child;continue}if(x===u)break;for(;x.sibling===null;){if(x.return===null||x.return===u)return;x=x.return,x.tag===4&&(E=!1)}x.sibling.return=x.return,x=x.sibling}}function Ky(c,u){if(Ke){switch(u.tag){case 0:case 11:case 14:case 15:Ra(3,u,u.return),Gu(3,u),Ra(5,u,u.return);return;case 1:return;case 5:var v=u.stateNode;if(v!=null){var x=u.memoizedProps;c=c!==null?c.memoizedProps:x;var E=u.type,T=u.updateQueue;u.updateQueue=null,T!==null&&Tt(v,T,E,c,x,u)}return;case 6:if(u.stateNode===null)throw Error(o(162));v=u.memoizedProps,ye(u.stateNode,c!==null?c.memoizedProps:v,v);return;case 3:xe&&c!==null&&c.memoizedState.isDehydrated&&Q(u.stateNode.containerInfo);return;case 12:return;case 13:Hh(u);return;case 19:Hh(u);return;case 17:return}throw Error(o(163))}switch(u.tag){case 0:case 11:case 14:case 15:Ra(3,u,u.return),Gu(3,u),Ra(5,u,u.return);return;case 12:return;case 13:Hh(u);return;case 19:Hh(u);return;case 3:xe&&c!==null&&c.memoizedState.isDehydrated&&Q(u.stateNode.containerInfo);break;case 22:case 23:return}e:if(G){switch(u.tag){case 1:case 5:case 6:break e;case 3:case 4:u=u.stateNode,Ht(u.containerInfo,u.pendingChildren);break e}throw Error(o(163))}}function Hh(c){var u=c.updateQueue;if(u!==null){c.updateQueue=null;var v=c.stateNode;v===null&&(v=c.stateNode=new yk),u.forEach(function(x){var E=Rk.bind(null,c,x);v.has(x)||(v.add(x),x.then(E,E))})}}function xk(c,u){for(Ne=u;Ne!==null;){u=Ne;var v=u.deletions;if(v!==null)for(var x=0;x<v.length;x++){var E=v[x];try{var T=c;Ke?cM(T,E,u):iM(T,E,u);var F=E.alternate;F!==null&&(F.return=null),E.return=null}catch(je){Wr(E,u,je)}}if(v=u.child,u.subtreeFlags&12854&&v!==null)v.return=u,Ne=v;else for(;Ne!==null;){u=Ne;try{var j=u.flags;if(j&32&&Ke&&$t(u.stateNode),j&512){var fe=u.alternate;if(fe!==null){var be=fe.ref;be!==null&&(typeof be=="function"?be(null):be.current=null)}}if(j&8192)switch(u.tag){case 13:if(u.memoizedState!==null){var He=u.alternate;(He===null||He.memoizedState===null)&&(i1=Kn())}break;case 22:var vt=u.memoizedState!==null,rt=u.alternate,Kt=rt!==null&&rt.memoizedState!==null;if(v=u,Ke){e:if(x=v,E=vt,T=null,Ke)for(var Ye=x;;){if(Ye.tag===5){if(T===null){T=Ye;var Sr=Ye.stateNode;E?an(Sr):Ae(Ye.stateNode,Ye.memoizedProps)}}else if(Ye.tag===6){if(T===null){var Di=Ye.stateNode;E?bt(Di):q(Di,Ye.memoizedProps)}}else if((Ye.tag!==22&&Ye.tag!==23||Ye.memoizedState===null||Ye===x)&&Ye.child!==null){Ye.child.return=Ye,Ye=Ye.child;continue}if(Ye===x)break;for(;Ye.sibling===null;){if(Ye.return===null||Ye.return===x)break e;T===Ye&&(T=null),Ye=Ye.return}T===Ye&&(T=null),Ye.sibling.return=Ye.return,Ye=Ye.sibling}}if(vt&&!Kt&&v.mode&1){Ne=v;for(var re=v.child;re!==null;){for(v=Ne=re;Ne!==null;){x=Ne;var Z=x.child;switch(x.tag){case 0:case 11:case 14:case 15:Ra(4,x,x.return);break;case 1:Bh(x,x.return);var ce=x.stateNode;if(typeof ce.componentWillUnmount=="function"){var De=x.return;try{ce.props=x.memoizedProps,ce.state=x.memoizedState,ce.componentWillUnmount()}catch(je){Wr(x,De,je)}}break;case 5:Bh(x,x.return);break;case 22:if(x.memoizedState!==null){dM(v);continue}}Z!==null?(Z.return=x,Ne=Z):dM(v)}re=re.sibling}}}switch(j&4102){case 2:lM(u),u.flags&=-3;break;case 6:lM(u),u.flags&=-3,Ky(u.alternate,u);break;case 4096:u.flags&=-4097;break;case 4100:u.flags&=-4097,Ky(u.alternate,u);break;case 4:Ky(u.alternate,u)}}catch(je){Wr(u,u.return,je)}if(v=u.sibling,v!==null){v.return=u.return,Ne=v;break}Ne=u.return}}}function Sk(c,u,v){Ne=c,uM(c)}function uM(c,u,v){for(var x=(c.mode&1)!==0;Ne!==null;){var E=Ne,T=E.child;if(E.tag===22&&x){var F=E.memoizedState!==null||zh;if(!F){var j=E.alternate,fe=j!==null&&j.memoizedState!==null||Ca;j=zh;var be=Ca;if(zh=F,(Ca=fe)&&!be)for(Ne=E;Ne!==null;)F=Ne,fe=F.child,F.tag===22&&F.memoizedState!==null?hM(E):fe!==null?(fe.return=F,Ne=fe):hM(E);for(;T!==null;)Ne=T,uM(T),T=T.sibling;Ne=E,zh=j,Ca=be}fM(c)}else E.subtreeFlags&8772&&T!==null?(T.return=E,Ne=T):fM(c)}}function fM(c){for(;Ne!==null;){var u=Ne;if(u.flags&8772){var v=u.alternate;try{if(u.flags&8772)switch(u.tag){case 0:case 11:case 15:Ca||Gu(5,u);break;case 1:var x=u.stateNode;if(u.flags&4&&!Ca)if(v===null)x.componentDidMount();else{var E=u.elementType===u.type?v.memoizedProps:Vi(u.type,v.memoizedProps);x.componentDidUpdate(E,v.memoizedState,x.__reactInternalSnapshotBeforeUpdate)}var T=u.updateQueue;T!==null&&sE(u,T,x);break;case 3:var F=u.updateQueue;if(F!==null){if(v=null,u.child!==null)switch(u.child.tag){case 5:v=te(u.child.stateNode);break;case 1:v=u.child.stateNode}sE(u,F,v)}break;case 5:var j=u.stateNode;v===null&&u.flags&4&&Dt(j,u.type,u.memoizedProps,u);break;case 6:break;case 4:break;case 12:break;case 13:if(xe&&u.memoizedState===null){var fe=u.alternate;if(fe!==null){var be=fe.memoizedState;if(be!==null){var He=be.dehydrated;He!==null&&oe(He)}}}break;case 19:case 17:case 21:case 22:case 23:break;default:throw Error(o(163))}Ca||u.flags&512&&Xy(u)}catch(vt){Wr(u,u.return,vt)}}if(u===c){Ne=null;break}if(v=u.sibling,v!==null){v.return=u.return,Ne=v;break}Ne=u.return}}function dM(c){for(;Ne!==null;){var u=Ne;if(u===c){Ne=null;break}var v=u.sibling;if(v!==null){v.return=u.return,Ne=v;break}Ne=u.return}}function hM(c){for(;Ne!==null;){var u=Ne;try{switch(u.tag){case 0:case 11:case 15:var v=u.return;try{Gu(4,u)}catch(fe){Wr(u,v,fe)}break;case 1:var x=u.stateNode;if(typeof x.componentDidMount=="function"){var E=u.return;try{x.componentDidMount()}catch(fe){Wr(u,E,fe)}}var T=u.return;try{Xy(u)}catch(fe){Wr(u,T,fe)}break;case 5:var F=u.return;try{Xy(u)}catch(fe){Wr(u,F,fe)}}}catch(fe){Wr(u,u.return,fe)}if(u===c){Ne=null;break}var j=u.sibling;if(j!==null){j.return=u.return,Ne=j;break}Ne=u.return}}var Vh=0,Gh=1,qh=2,Wh=3,jh=4;if(typeof Symbol=="function"&&Symbol.for){var qu=Symbol.for;Vh=qu("selector.component"),Gh=qu("selector.has_pseudo_class"),qh=qu("selector.role"),Wh=qu("selector.test_id"),jh=qu("selector.text")}function Jy(c){var u=he(c);if(u!=null){if(typeof u.memoizedProps["data-testname"]!="string")throw Error(o(364));return u}if(c=ee(c),c===null)throw Error(o(362));return c.stateNode.current}function Qy(c,u){switch(u.$$typeof){case Vh:if(c.type===u.value)return!0;break;case Gh:e:{u=u.value,c=[c,0];for(var v=0;v<c.length;){var x=c[v++],E=c[v++],T=u[E];if(x.tag!==5||!me(x)){for(;T!=null&&Qy(x,T);)E++,T=u[E];if(E===u.length){u=!0;break e}else for(x=x.child;x!==null;)c.push(x,E),x=x.sibling}}u=!1}return u;case qh:if(c.tag===5&&qe(c.stateNode,u.value))return!0;break;case jh:if((c.tag===5||c.tag===6)&&(c=ve(c),c!==null&&0<=c.indexOf(u.value)))return!0;break;case Wh:if(c.tag===5&&(c=c.memoizedProps["data-testname"],typeof c=="string"&&c.toLowerCase()===u.value.toLowerCase()))return!0;break;default:throw Error(o(365))}return!1}function e1(c){switch(c.$$typeof){case Vh:return"<"+(P(c.value)||"Unknown")+">";case Gh:return":has("+(e1(c)||"")+")";case qh:return'[role="'+c.value+'"]';case jh:return'"'+c.value+'"';case Wh:return'[data-testname="'+c.value+'"]';default:throw Error(o(365))}}function pM(c,u){var v=[];c=[c,0];for(var x=0;x<c.length;){var E=c[x++],T=c[x++],F=u[T];if(E.tag!==5||!me(E)){for(;F!=null&&Qy(E,F);)T++,F=u[T];if(T===u.length)v.push(E);else for(E=E.child;E!==null;)c.push(E,T),E=E.sibling}}return v}function t1(c,u){if(!I)throw Error(o(363));c=Jy(c),c=pM(c,u),u=[],c=Array.from(c);for(var v=0;v<c.length;){var x=c[v++];if(x.tag===5)me(x)||u.push(x.stateNode);else for(x=x.child;x!==null;)c.push(x),x=x.sibling}return u}var wk=Math.ceil,Xh=a.ReactCurrentDispatcher,n1=a.ReactCurrentOwner,Rn=a.ReactCurrentBatchConfig,Ct=0,kn=null,On=null,ur=0,ci=0,Gl=Yn(0),Bn=0,Wu=null,ql=0,Yh=0,r1=0,ju=null,Gr=null,i1=0,s1=1/0;function Wl(){s1=Kn()+500}var Zh=!1,o1=null,Eo=null,Kh=!1,Mo=null,Jh=0,Xu=0,a1=null,Qh=-1,ep=0;function Ir(){return Ct&6?Kn():Qh!==-1?Qh:Qh=Kn()}function To(c){return c.mode&1?Ct&2&&ur!==0?ur&-ur:ik.transition!==null?(ep===0&&(c=hh,hh<<=1,!(hh&4194240)&&(hh=64),ep=c),ep):(c=Ut,c!==0?c:de()):1}function Ni(c,u,v){if(50<Xu)throw Xu=0,a1=null,Error(o(185));var x=tp(c,u);return x===null?null:(Lu(x,u,v),(!(Ct&2)||x!==kn)&&(x===kn&&(!(Ct&2)&&(Yh|=u),Bn===4&&Ao(x,ur)),qr(x,v),u===1&&Ct===0&&!(c.mode&1)&&(Wl(),vh&&gs())),x)}function tp(c,u){c.lanes|=u;var v=c.alternate;for(v!==null&&(v.lanes|=u),v=c,c=c.return;c!==null;)c.childLanes|=u,v=c.alternate,v!==null&&(v.childLanes|=u),v=c,c=c.return;return v.tag===3?v.stateNode:null}function qr(c,u){var v=c.callbackNode;YD(c,u);var x=mh(c,c===kn?ur:0);if(x===0)v!==null&&eE(v),c.callbackNode=null,c.callbackPriority=0;else if(u=x&-x,c.callbackPriority!==u){if(v!=null&&eE(v),u===1)c.tag===0?rk(gM.bind(null,c)):tE(gM.bind(null,c)),ke?O(function(){Ct===0&&gs()}):my(gy,gs),v=null;else{switch(Qb(x)){case 1:v=gy;break;case 4:v=QD;break;case 16:v=vy;break;case 536870912:v=ek;break;default:v=vy}v=MM(v,mM.bind(null,c))}c.callbackPriority=u,c.callbackNode=v}}function mM(c,u){if(Qh=-1,ep=0,Ct&6)throw Error(o(327));var v=c.callbackNode;if(Na()&&c.callbackNode!==v)return null;var x=mh(c,c===kn?ur:0);if(x===0)return null;if(x&30||x&c.expiredLanes||u)u=np(c,x);else{u=x;var E=Ct;Ct|=2;var T=_M();(kn!==c||ur!==u)&&(Wl(),Pa(c,u));do try{Mk();break}catch(j){yM(c,j)}while(1);xy(),Xh.current=T,Ct=E,On!==null?u=0:(kn=null,ur=0,u=Bn)}if(u!==0){if(u===2&&(E=dy(c),E!==0&&(x=E,u=l1(c,E))),u===1)throw v=Wu,Pa(c,0),Ao(c,x),qr(c,Kn()),v;if(u===6)Ao(c,x);else{if(E=c.current.alternate,!(x&30)&&!bk(E)&&(u=np(c,x),u===2&&(T=dy(c),T!==0&&(x=T,u=l1(c,T))),u===1))throw v=Wu,Pa(c,0),Ao(c,x),qr(c,Kn()),v;switch(c.finishedWork=E,c.finishedLanes=x,u){case 0:case 1:throw Error(o(345));case 2:La(c,Gr);break;case 3:if(Ao(c,x),(x&130023424)===x&&(u=i1+500-Kn(),10<u)){if(mh(c,0)!==0)break;if(E=c.suspendedLanes,(E&x)!==x){Ir(),c.pingedLanes|=c.suspendedLanes&E;break}c.timeoutHandle=Ee(La.bind(null,c,Gr),u);break}La(c,Gr);break;case 4:if(Ao(c,x),(x&4194240)===x)break;for(u=c.eventTimes,E=-1;0<x;){var F=31-si(x);T=1<<F,F=u[F],F>E&&(E=F),x&=~T}if(x=E,x=Kn()-x,x=(120>x?120:480>x?480:1080>x?1080:1920>x?1920:3e3>x?3e3:4320>x?4320:1960*wk(x/1960))-x,10<x){c.timeoutHandle=Ee(La.bind(null,c,Gr),x);break}La(c,Gr);break;case 5:La(c,Gr);break;default:throw Error(o(329))}}}return qr(c,Kn()),c.callbackNode===v?mM.bind(null,c):null}function l1(c,u){var v=ju;return c.current.memoizedState.isDehydrated&&(Pa(c,u).flags|=256),c=np(c,u),c!==2&&(u=Gr,Gr=v,u!==null&&c1(u)),c}function c1(c){Gr===null?Gr=c:Gr.push.apply(Gr,c)}function bk(c){for(var u=c;;){if(u.flags&16384){var v=u.updateQueue;if(v!==null&&(v=v.stores,v!==null))for(var x=0;x<v.length;x++){var E=v[x],T=E.getSnapshot;E=E.value;try{if(!ms(T(),E))return!1}catch{return!1}}}if(v=u.child,u.subtreeFlags&16384&&v!==null)v.return=u,u=v;else{if(u===c)break;for(;u.sibling===null;){if(u.return===null||u.return===c)return!0;u=u.return}u.sibling.return=u.return,u=u.sibling}}return!0}function Ao(c,u){for(u&=~r1,u&=~Yh,c.suspendedLanes|=u,c.pingedLanes&=~u,c=c.expirationTimes;0<u;){var v=31-si(u),x=1<<v;c[v]=-1,u&=~x}}function gM(c){if(Ct&6)throw Error(o(327));Na();var u=mh(c,0);if(!(u&1))return qr(c,Kn()),null;var v=np(c,u);if(c.tag!==0&&v===2){var x=dy(c);x!==0&&(u=x,v=l1(c,x))}if(v===1)throw v=Wu,Pa(c,0),Ao(c,u),qr(c,Kn()),v;if(v===6)throw Error(o(345));return c.finishedWork=c.current.alternate,c.finishedLanes=u,La(c,Gr),qr(c,Kn()),null}function vM(c){Mo!==null&&Mo.tag===0&&!(Ct&6)&&Na();var u=Ct;Ct|=1;var v=Rn.transition,x=Ut;try{if(Rn.transition=null,Ut=1,c)return c()}finally{Ut=x,Rn.transition=v,Ct=u,!(Ct&6)&&gs()}}function u1(){ci=Gl.current,ct(Gl)}function Pa(c,u){c.finishedWork=null,c.finishedLanes=0;var v=c.timeoutHandle;if(v!==tt&&(c.timeoutHandle=tt,Qe(v)),On!==null)for(v=On.return;v!==null;){var x=v;switch(Ay(x),x.tag){case 1:x=x.type.childContextTypes,x!=null&&Cn();break;case 3:Hl(),ct(_n),ct(At),Dy();break;case 5:Ny(x);break;case 4:Hl();break;case 13:ct(pn);break;case 19:ct(pn);break;case 10:Sy(x.type._context);break;case 22:case 23:u1()}v=v.return}if(kn=c,On=c=Co(c.current,null),ur=ci=u,Bn=0,Wu=null,r1=Yh=ql=0,Gr=ju=null,vs!==null){for(u=0;u<vs.length;u++)if(v=vs[u],x=v.interleaved,x!==null){v.interleaved=null;var E=x.next,T=v.pending;if(T!==null){var F=T.next;T.next=E,x.next=F}v.pending=x}vs=null}return c}function yM(c,u){do{var v=On;try{if(xy(),Ch.current=Dh,Rh){for(var x=xn.memoizedState;x!==null;){var E=x.queue;E!==null&&(E.pending=null),x=x.next}Rh=!1}if(Vl=0,Jn=yr=xn=null,$u=!1,Uu=0,n1.current=null,v===null||v.return===null){Bn=1,Wu=u,On=null;break}e:{var T=c,F=v.return,j=v,fe=u;if(u=ur,j.flags|=32768,fe!==null&&typeof fe=="object"&&typeof fe.then=="function"){var be=fe,He=j,vt=He.tag;if(!(He.mode&1)&&(vt===0||vt===11||vt===15)){var rt=He.alternate;rt?(He.updateQueue=rt.updateQueue,He.memoizedState=rt.memoizedState,He.lanes=rt.lanes):(He.updateQueue=null,He.memoizedState=null)}var Kt=FE(F);if(Kt!==null){Kt.flags&=-257,zE(Kt,F,j,T,u),Kt.mode&1&&UE(T,be,u),u=Kt,fe=be;var Ye=u.updateQueue;if(Ye===null){var Sr=new Set;Sr.add(fe),u.updateQueue=Sr}else Ye.add(fe);break e}else{if(!(u&1)){UE(T,be,u),f1();break e}fe=Error(o(426))}}else if(ln&&j.mode&1){var Di=FE(F);if(Di!==null){!(Di.flags&65536)&&(Di.flags|=256),zE(Di,F,j,T,u),Py(fe);break e}}T=fe,Bn!==4&&(Bn=2),ju===null?ju=[T]:ju.push(T),fe=By(fe,j),j=F;do{switch(j.tag){case 3:j.flags|=65536,u&=-u,j.lanes|=u;var re=OE(j,fe,u);iE(j,re);break e;case 1:T=fe;var Z=j.type,ce=j.stateNode;if(!(j.flags&128)&&(typeof Z.getDerivedStateFromError=="function"||ce!==null&&typeof ce.componentDidCatch=="function"&&(Eo===null||!Eo.has(ce)))){j.flags|=65536,u&=-u,j.lanes|=u;var De=$E(j,T,u);iE(j,De);break e}}j=j.return}while(j!==null)}SM(v)}catch(je){u=je,On===v&&v!==null&&(On=v=v.return);continue}break}while(1)}function _M(){var c=Xh.current;return Xh.current=Dh,c===null?Dh:c}function f1(){(Bn===0||Bn===3||Bn===2)&&(Bn=4),kn===null||!(ql&268435455)&&!(Yh&268435455)||Ao(kn,ur)}function np(c,u){var v=Ct;Ct|=2;var x=_M();kn===c&&ur===u||Pa(c,u);do try{Ek();break}catch(E){yM(c,E)}while(1);if(xy(),Ct=v,Xh.current=x,On!==null)throw Error(o(261));return kn=null,ur=0,Bn}function Ek(){for(;On!==null;)xM(On)}function Mk(){for(;On!==null&&!KD();)xM(On)}function xM(c){var u=EM(c.alternate,c,ci);c.memoizedProps=c.pendingProps,u===null?SM(c):On=u,n1.current=null}function SM(c){var u=c;do{var v=u.alternate;if(c=u.return,u.flags&32768){if(v=vk(v,u),v!==null){v.flags&=32767,On=v;return}if(c!==null)c.flags|=32768,c.subtreeFlags=0,c.deletions=null;else{Bn=6,On=null;return}}else if(v=pk(v,u,ci),v!==null){On=v;return}if(u=u.sibling,u!==null){On=u;return}On=u=c}while(u!==null);Bn===0&&(Bn=5)}function La(c,u){var v=Ut,x=Rn.transition;try{Rn.transition=null,Ut=1,Tk(c,u,v)}finally{Rn.transition=x,Ut=v}return null}function Tk(c,u,v){do Na();while(Mo!==null);if(Ct&6)throw Error(o(327));var x=c.finishedWork,E=c.finishedLanes;if(x===null)return null;if(c.finishedWork=null,c.finishedLanes=0,x===c.current)throw Error(o(177));c.callbackNode=null,c.callbackPriority=0;var T=x.lanes|x.childLanes;if(ZD(c,T),c===kn&&(On=kn=null,ur=0),!(x.subtreeFlags&2064)&&!(x.flags&2064)||Kh||(Kh=!0,MM(vy,function(){return Na(),null})),T=(x.flags&15990)!==0,x.subtreeFlags&15990||T){T=Rn.transition,Rn.transition=null;var F=Ut;Ut=1;var j=Ct;Ct|=4,n1.current=null,_k(c,x),xk(c,x),H(c.containerInfo),c.current=x,Sk(x),JD(),Ct=j,Ut=F,Rn.transition=T}else c.current=x;if(Kh&&(Kh=!1,Mo=c,Jh=E),T=c.pendingLanes,T===0&&(Eo=null),tk(x.stateNode),qr(c,Kn()),u!==null)for(v=c.onRecoverableError,x=0;x<u.length;x++)v(u[x]);if(Zh)throw Zh=!1,c=o1,o1=null,c;return Jh&1&&c.tag!==0&&Na(),T=c.pendingLanes,T&1?c===a1?Xu++:(Xu=0,a1=c):Xu=0,gs(),null}function Na(){if(Mo!==null){var c=Qb(Jh),u=Rn.transition,v=Ut;try{if(Rn.transition=null,Ut=16>c?16:c,Mo===null)var x=!1;else{if(c=Mo,Mo=null,Jh=0,Ct&6)throw Error(o(331));var E=Ct;for(Ct|=4,Ne=c.current;Ne!==null;){var T=Ne,F=T.child;if(Ne.flags&16){var j=T.deletions;if(j!==null){for(var fe=0;fe<j.length;fe++){var be=j[fe];for(Ne=be;Ne!==null;){var He=Ne;switch(He.tag){case 0:case 11:case 15:Ra(8,He,T)}var vt=He.child;if(vt!==null)vt.return=He,Ne=vt;else for(;Ne!==null;){He=Ne;var rt=He.sibling,Kt=He.return;if(sM(He),He===be){Ne=null;break}if(rt!==null){rt.return=Kt,Ne=rt;break}Ne=Kt}}}var Ye=T.alternate;if(Ye!==null){var Sr=Ye.child;if(Sr!==null){Ye.child=null;do{var Di=Sr.sibling;Sr.sibling=null,Sr=Di}while(Sr!==null)}}Ne=T}}if(T.subtreeFlags&2064&&F!==null)F.return=T,Ne=F;else e:for(;Ne!==null;){if(T=Ne,T.flags&2048)switch(T.tag){case 0:case 11:case 15:Ra(9,T,T.return)}var re=T.sibling;if(re!==null){re.return=T.return,Ne=re;break e}Ne=T.return}}var Z=c.current;for(Ne=Z;Ne!==null;){F=Ne;var ce=F.child;if(F.subtreeFlags&2064&&ce!==null)ce.return=F,Ne=ce;else e:for(F=Z;Ne!==null;){if(j=Ne,j.flags&2048)try{switch(j.tag){case 0:case 11:case 15:Gu(9,j)}}catch(je){Wr(j,j.return,je)}if(j===F){Ne=null;break e}var De=j.sibling;if(De!==null){De.return=j.return,Ne=De;break e}Ne=j.return}}if(Ct=E,gs(),ps&&typeof ps.onPostCommitFiberRoot=="function")try{ps.onPostCommitFiberRoot(gh,c)}catch{}x=!0}return x}finally{Ut=v,Rn.transition=u}}return!1}function wM(c,u,v){u=By(v,u),u=OE(c,u,1),bo(c,u),u=Ir(),c=tp(c,1),c!==null&&(Lu(c,1,u),qr(c,u))}function Wr(c,u,v){if(c.tag===3)wM(c,c,v);else for(;u!==null;){if(u.tag===3){wM(u,c,v);break}else if(u.tag===1){var x=u.stateNode;if(typeof u.type.getDerivedStateFromError=="function"||typeof x.componentDidCatch=="function"&&(Eo===null||!Eo.has(x))){c=By(v,c),c=$E(u,c,1),bo(u,c),c=Ir(),u=tp(u,1),u!==null&&(Lu(u,1,c),qr(u,c));break}}u=u.return}}function Ak(c,u,v){var x=c.pingCache;x!==null&&x.delete(u),u=Ir(),c.pingedLanes|=c.suspendedLanes&v,kn===c&&(ur&v)===v&&(Bn===4||Bn===3&&(ur&130023424)===ur&&500>Kn()-i1?Pa(c,0):r1|=v),qr(c,u)}function bM(c,u){u===0&&(c.mode&1?(u=ph,ph<<=1,!(ph&130023424)&&(ph=4194304)):u=1);var v=Ir();c=tp(c,u),c!==null&&(Lu(c,u,v),qr(c,v))}function Ck(c){var u=c.memoizedState,v=0;u!==null&&(v=u.retryLane),bM(c,v)}function Rk(c,u){var v=0;switch(c.tag){case 13:var x=c.stateNode,E=c.memoizedState;E!==null&&(v=E.retryLane);break;case 19:x=c.stateNode;break;default:throw Error(o(314))}x!==null&&x.delete(u),bM(c,v)}var EM;EM=function(c,u,v){if(c!==null)if(c.memoizedProps!==u.pendingProps||_n.current)li=!0;else{if(!(c.lanes&v)&&!(u.flags&128))return li=!1,gk(c,u,v);li=!!(c.flags&131072)}else li=!1,ln&&u.flags&1048576&&uE(u,Mh,u.index);switch(u.lanes=0,u.tag){case 2:var x=u.type;c!==null&&(c.alternate=null,u.alternate=null,u.flags|=2),c=u.pendingProps;var E=Ti(u,At.current);Ol(u,v),E=Oy(null,u,x,c,E,v);var T=$y();return u.flags|=1,typeof E=="object"&&E!==null&&typeof E.render=="function"&&E.$$typeof===void 0?(u.tag=1,u.memoizedState=null,u.updateQueue=null,Zn(x)?(T=!0,cr(u)):T=!1,u.memoizedState=E.state!==null&&E.state!==void 0?E.state:null,by(u),E.updater=bh,u.stateNode=E,E._reactInternals=u,My(u,x,c,v),u=Gy(null,u,x,!0,T,v)):(u.tag=0,ln&&T&&Ty(u),Nr(null,u,E,v),u=u.child),u;case 16:x=u.elementType;e:{switch(c!==null&&(c.alternate=null,u.alternate=null,u.flags|=2),c=u.pendingProps,E=x._init,x=E(x._payload),u.type=x,E=u.tag=Lk(x),c=Vi(x,c),E){case 0:u=Vy(null,u,x,c,v);break e;case 1:u=XE(null,u,x,c,v);break e;case 11:u=VE(null,u,x,c,v);break e;case 14:u=GE(null,u,x,Vi(x.type,c),v);break e}throw Error(o(306,x,""))}return u;case 0:return x=u.type,E=u.pendingProps,E=u.elementType===x?E:Vi(x,E),Vy(c,u,x,E,v);case 1:return x=u.type,E=u.pendingProps,E=u.elementType===x?E:Vi(x,E),XE(c,u,x,E,v);case 3:e:{if(YE(u),c===null)throw Error(o(387));x=u.pendingProps,T=u.memoizedState,E=T.element,rE(c,u),wh(u,x,null,v);var F=u.memoizedState;if(x=F.element,xe&&T.isDehydrated)if(T={element:x,isDehydrated:!1,cache:F.cache,transitions:F.transitions},u.updateQueue.baseState=T,u.memoizedState=T,u.flags&256){E=Error(o(423)),u=ZE(c,u,x,v,E);break e}else if(x!==E){E=Error(o(424)),u=ZE(c,u,x,v,E);break e}else for(xe&&(ai=uh(u.stateNode.containerInfo),oi=u,ln=!0,Gi=null,Nu=!1),v=gE(u,null,x,v),u.child=v;v;)v.flags=v.flags&-3|4096,v=v.sibling;else{if(Fl(),x===E){u=Hs(c,u,v);break e}Nr(c,u,x,v)}u=u.child}return u;case 5:return vE(u),c===null&&Ry(u),x=u.type,E=u.pendingProps,T=c!==null?c.memoizedProps:null,F=E.children,ge(x,E)?F=null:T!==null&&ge(x,T)&&(u.flags|=32),jE(c,u),Nr(c,u,F,v),u.child;case 6:return c===null&&Ry(u),null;case 13:return KE(c,u,v);case 4:return Ly(u,u.stateNode.containerInfo),x=u.pendingProps,c===null?u.child=zl(u,null,x,v):Nr(c,u,x,v),u.child;case 11:return x=u.type,E=u.pendingProps,E=u.elementType===x?E:Vi(x,E),VE(c,u,x,E,v);case 7:return Nr(c,u,u.pendingProps,v),u.child;case 8:return Nr(c,u,u.pendingProps.children,v),u.child;case 12:return Nr(c,u,u.pendingProps.children,v),u.child;case 10:e:{if(x=u.type._context,E=u.pendingProps,T=u.memoizedProps,F=E.value,nE(u,x,F),T!==null)if(ms(T.value,F)){if(T.children===E.children&&!_n.current){u=Hs(c,u,v);break e}}else for(T=u.child,T!==null&&(T.return=u);T!==null;){var j=T.dependencies;if(j!==null){F=T.child;for(var fe=j.firstContext;fe!==null;){if(fe.context===x){if(T.tag===1){fe=Us(-1,v&-v),fe.tag=2;var be=T.updateQueue;if(be!==null){be=be.shared;var He=be.pending;He===null?fe.next=fe:(fe.next=He.next,He.next=fe),be.pending=fe}}T.lanes|=v,fe=T.alternate,fe!==null&&(fe.lanes|=v),wy(T.return,v,u),j.lanes|=v;break}fe=fe.next}}else if(T.tag===10)F=T.type===u.type?null:T.child;else if(T.tag===18){if(F=T.return,F===null)throw Error(o(341));F.lanes|=v,j=F.alternate,j!==null&&(j.lanes|=v),wy(F,v,u),F=T.sibling}else F=T.child;if(F!==null)F.return=T;else for(F=T;F!==null;){if(F===u){F=null;break}if(T=F.sibling,T!==null){T.return=F.return,F=T;break}F=F.return}T=F}Nr(c,u,E.children,v),u=u.child}return u;case 9:return E=u.type,x=u.pendingProps.children,Ol(u,v),E=Ai(E),x=x(E),u.flags|=1,Nr(c,u,x,v),u.child;case 14:return x=u.type,E=Vi(x,u.pendingProps),E=Vi(x.type,E),GE(c,u,x,E,v);case 15:return qE(c,u,u.type,u.pendingProps,v);case 17:return x=u.type,E=u.pendingProps,E=u.elementType===x?E:Vi(x,E),c!==null&&(c.alternate=null,u.alternate=null,u.flags|=2),u.tag=1,Zn(x)?(c=!0,cr(u)):c=!1,Ol(u,v),lE(u,x,E),My(u,x,E,v),Gy(null,u,x,!0,c,v);case 19:return tM(c,u,v);case 22:return WE(c,u,v)}throw Error(o(156,u.tag))};function MM(c,u){return my(c,u)}function Pk(c,u,v,x){this.tag=c,this.key=v,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=u,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=x,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ii(c,u,v,x){return new Pk(c,u,v,x)}function d1(c){return c=c.prototype,!(!c||!c.isReactComponent)}function Lk(c){if(typeof c=="function")return d1(c)?1:0;if(c!=null){if(c=c.$$typeof,c===b)return 11;if(c===_)return 14}return 2}function Co(c,u){var v=c.alternate;return v===null?(v=Ii(c.tag,u,c.key,c.mode),v.elementType=c.elementType,v.type=c.type,v.stateNode=c.stateNode,v.alternate=c,c.alternate=v):(v.pendingProps=u,v.type=c.type,v.flags=0,v.subtreeFlags=0,v.deletions=null),v.flags=c.flags&14680064,v.childLanes=c.childLanes,v.lanes=c.lanes,v.child=c.child,v.memoizedProps=c.memoizedProps,v.memoizedState=c.memoizedState,v.updateQueue=c.updateQueue,u=c.dependencies,v.dependencies=u===null?null:{lanes:u.lanes,firstContext:u.firstContext},v.sibling=c.sibling,v.index=c.index,v.ref=c.ref,v}function rp(c,u,v,x,E,T){var F=2;if(x=c,typeof c=="function")d1(c)&&(F=1);else if(typeof c=="string")F=5;else e:switch(c){case d:return Ia(v.children,E,T,u);case h:F=8,E|=8;break;case p:return c=Ii(12,v,u,E|2),c.elementType=p,c.lanes=T,c;case S:return c=Ii(13,v,u,E),c.elementType=S,c.lanes=T,c;case m:return c=Ii(19,v,u,E),c.elementType=m,c.lanes=T,c;case M:return ip(v,E,T,u);default:if(typeof c=="object"&&c!==null)switch(c.$$typeof){case g:F=10;break e;case y:F=9;break e;case b:F=11;break e;case _:F=14;break e;case w:F=16,x=null;break e}throw Error(o(130,c==null?c:typeof c,""))}return u=Ii(F,v,u,E),u.elementType=c,u.type=x,u.lanes=T,u}function Ia(c,u,v,x){return c=Ii(7,c,x,u),c.lanes=v,c}function ip(c,u,v,x){return c=Ii(22,c,x,u),c.elementType=M,c.lanes=v,c.stateNode={},c}function h1(c,u,v){return c=Ii(6,c,null,u),c.lanes=v,c}function p1(c,u,v){return u=Ii(4,c.children!==null?c.children:[],c.key,u),u.lanes=v,u.stateNode={containerInfo:c.containerInfo,pendingChildren:null,implementation:c.implementation},u}function Nk(c,u,v,x,E){this.tag=u,this.containerInfo=c,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=tt,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hy(0),this.expirationTimes=hy(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hy(0),this.identifierPrefix=x,this.onRecoverableError=E,xe&&(this.mutableSourceEagerHydrationData=null)}function TM(c,u,v,x,E,T,F,j,fe){return c=new Nk(c,u,v,j,fe),u===1?(u=1,T===!0&&(u|=8)):u=0,T=Ii(3,null,null,u),c.current=T,T.stateNode=c,T.memoizedState={element:x,isDehydrated:v,cache:null,transitions:null},by(T),c}function AM(c){if(!c)return Mi;c=c._reactInternals;e:{if(R(c)!==c||c.tag!==1)throw Error(o(170));var u=c;do{switch(u.tag){case 3:u=u.stateNode.context;break e;case 1:if(Zn(u.type)){u=u.stateNode.__reactInternalMemoizedMergedChildContext;break e}}u=u.return}while(u!==null);throw Error(o(171))}if(c.tag===1){var v=c.type;if(Zn(v))return Il(c,v,u)}return u}function CM(c){var u=c._reactInternals;if(u===void 0)throw typeof c.render=="function"?Error(o(188)):(c=Object.keys(c).join(","),Error(o(268,c)));return c=W(u),c===null?null:c.stateNode}function RM(c,u){if(c=c.memoizedState,c!==null&&c.dehydrated!==null){var v=c.retryLane;c.retryLane=v!==0&&v<u?v:u}}function m1(c,u){RM(c,u),(c=c.alternate)&&RM(c,u)}function Ik(c){return c=W(c),c===null?null:c.stateNode}function Dk(){return null}return t.attemptContinuousHydration=function(c){if(c.tag===13){var u=Ir();Ni(c,134217728,u),m1(c,134217728)}},t.attemptHydrationAtCurrentPriority=function(c){if(c.tag===13){var u=Ir(),v=To(c);Ni(c,v,u),m1(c,v)}},t.attemptSynchronousHydration=function(c){switch(c.tag){case 3:var u=c.stateNode;if(u.current.memoizedState.isDehydrated){var v=Pu(u.pendingLanes);v!==0&&(py(u,v|1),qr(u,Kn()),!(Ct&6)&&(Wl(),gs()))}break;case 13:var x=Ir();vM(function(){return Ni(c,1,x)}),m1(c,1)}},t.batchedUpdates=function(c,u){var v=Ct;Ct|=1;try{return c(u)}finally{Ct=v,Ct===0&&(Wl(),vh&&gs())}},t.createComponentSelector=function(c){return{$$typeof:Vh,value:c}},t.createContainer=function(c,u,v,x,E,T,F){return TM(c,u,!1,null,v,x,E,T,F)},t.createHasPseudoClassSelector=function(c){return{$$typeof:Gh,value:c}},t.createHydrationContainer=function(c,u,v,x,E,T,F,j,fe){return c=TM(v,x,!0,c,E,T,F,j,fe),c.context=AM(null),v=c.current,x=Ir(),E=To(v),T=Us(x,E),T.callback=u??null,bo(v,T),c.current.lanes=E,Lu(c,E,x),qr(c,x),c},t.createPortal=function(c,u,v){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:x==null?null:""+x,children:c,containerInfo:u,implementation:v}},t.createRoleSelector=function(c){return{$$typeof:qh,value:c}},t.createTestNameSelector=function(c){return{$$typeof:Wh,value:c}},t.createTextSelector=function(c){return{$$typeof:jh,value:c}},t.deferredUpdates=function(c){var u=Ut,v=Rn.transition;try{return Rn.transition=null,Ut=16,c()}finally{Ut=u,Rn.transition=v}},t.discreteUpdates=function(c,u,v,x,E){var T=Ut,F=Rn.transition;try{return Rn.transition=null,Ut=1,c(u,v,x,E)}finally{Ut=T,Rn.transition=F,Ct===0&&Wl()}},t.findAllNodes=t1,t.findBoundingRects=function(c,u){if(!I)throw Error(o(363));u=t1(c,u),c=[];for(var v=0;v<u.length;v++)c.push(_e(u[v]));for(u=c.length-1;0<u;u--){v=c[u];for(var x=v.x,E=x+v.width,T=v.y,F=T+v.height,j=u-1;0<=j;j--)if(u!==j){var fe=c[j],be=fe.x,He=be+fe.width,vt=fe.y,rt=vt+fe.height;if(x>=be&&T>=vt&&E<=He&&F<=rt){c.splice(u,1);break}else if(x!==be||v.width!==fe.width||rt<T||vt>F){if(!(T!==vt||v.height!==fe.height||He<x||be>E)){be>x&&(fe.width+=be-x,fe.x=x),He<E&&(fe.width=E-be),c.splice(u,1);break}}else{vt>T&&(fe.height+=vt-T,fe.y=T),rt<F&&(fe.height=F-vt),c.splice(u,1);break}}}return c},t.findHostInstance=CM,t.findHostInstanceWithNoPortals=function(c){return c=B(c),c=c!==null?V(c):null,c===null?null:c.stateNode},t.findHostInstanceWithWarning=function(c){return CM(c)},t.flushControlled=function(c){var u=Ct;Ct|=1;var v=Rn.transition,x=Ut;try{Rn.transition=null,Ut=1,c()}finally{Ut=x,Rn.transition=v,Ct=u,Ct===0&&(Wl(),gs())}},t.flushPassiveEffects=Na,t.flushSync=vM,t.focusWithin=function(c,u){if(!I)throw Error(o(363));for(c=Jy(c),u=pM(c,u),u=Array.from(u),c=0;c<u.length;){var v=u[c++];if(!me(v)){if(v.tag===5&&Re(v.stateNode))return!0;for(v=v.child;v!==null;)u.push(v),v=v.sibling}}return!1},t.getCurrentUpdatePriority=function(){return Ut},t.getFindAllNodesFailureDescription=function(c,u){if(!I)throw Error(o(363));var v=0,x=[];c=[Jy(c),0];for(var E=0;E<c.length;){var T=c[E++],F=c[E++],j=u[F];if((T.tag!==5||!me(T))&&(Qy(T,j)&&(x.push(e1(j)),F++,F>v&&(v=F)),F<u.length))for(T=T.child;T!==null;)c.push(T,F),T=T.sibling}if(v<u.length){for(c=[];v<u.length;v++)c.push(e1(u[v]));return`findAllNodes was able to match part of the selector:
  `+(x.join(" > ")+`

No matching component was found for:
  `)+c.join(" > ")}return null},t.getPublicRootInstance=function(c){if(c=c.current,!c.child)return null;switch(c.child.tag){case 5:return te(c.child.stateNode);default:return c.child.stateNode}},t.injectIntoDevTools=function(c){if(c={bundleType:c.bundleType,version:c.version,rendererPackageName:c.rendererPackageName,rendererConfig:c.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:a.ReactCurrentDispatcher,findHostInstanceByFiber:Ik,findFiberByHostInstance:c.findFiberByHostInstance||Dk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.0.0-fc46dba67-20220329"},typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")c=!1;else{var u=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(u.isDisabled||!u.supportsFiber)c=!0;else{try{gh=u.inject(c),ps=u}catch{}c=!!u.checkDCE}}return c},t.isAlreadyRendering=function(){return!1},t.observeVisibleRects=function(c,u,v,x){if(!I)throw Error(o(363));c=t1(c,u);var E=Fe(c,v,x).disconnect;return{disconnect:function(){E()}}},t.registerMutableSourceForHydration=function(c,u){var v=u._getVersion;v=v(u._source),c.mutableSourceEagerHydrationData==null?c.mutableSourceEagerHydrationData=[u,v]:c.mutableSourceEagerHydrationData.push(u,v)},t.runWithPriority=function(c,u){var v=Ut;try{return Ut=c,u()}finally{Ut=v}},t.shouldError=function(){return null},t.shouldSuspend=function(){return!1},t.updateContainer=function(c,u,v,x){var E=u.current,T=Ir(),F=To(E);return v=AM(v),u.context===null?u.context=v:u.pendingContext=v,u=Us(T,F),u.payload={element:c},x=x===void 0?null:x,x!==null&&(u.callback=x),bo(E,u),c=Ni(E,F,T),c!==null&&Sh(c,E,F),F},t};(function(n){n.exports=pdt})(ddt);const mdt=bS(yS),Yb={},ED=n=>void Object.assign(Yb,n);function gdt(n,e){function t(d,{args:h=[],attach:p,...g},y){let b=`${d[0].toUpperCase()}${d.slice(1)}`,S;if(d==="primitive"){if(g.object===void 0)throw new Error("R3F: Primitives without 'object' are invalid!");const m=g.object;S=wc(m,{type:d,root:y,attach:p,primitive:!0})}else{const m=Yb[b];if(!m)throw new Error(`R3F: ${b} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);if(!Array.isArray(h))throw new Error("R3F: The args prop must be an array!");S=wc(new m(...h),{type:d,root:y,attach:p,memoizedProps:{args:h}})}return S.__r3f.attach===void 0&&(S instanceof wt?S.__r3f.attach="geometry":S instanceof vr&&(S.__r3f.attach="material")),b!=="inject"&&K0(S,g),S}function r(d,h){let p=!1;if(h){var g,y;(g=h.__r3f)!=null&&g.attach?Z0(d,h,h.__r3f.attach):h.isObject3D&&d.isObject3D&&(d.add(h),p=!0),p||(y=d.__r3f)==null||y.objects.push(h),h.__r3f||wc(h,{}),h.__r3f.parent=d,xS(h),bc(h)}}function i(d,h,p){let g=!1;if(h){var y,b;if((y=h.__r3f)!=null&&y.attach)Z0(d,h,h.__r3f.attach);else if(h.isObject3D&&d.isObject3D){h.parent=d,h.dispatchEvent({type:"added"});const S=d.children.filter(_=>_!==h),m=S.indexOf(p);d.children=[...S.slice(0,m),h,...S.slice(m)],g=!0}g||(b=d.__r3f)==null||b.objects.push(h),h.__r3f||wc(h,{}),h.__r3f.parent=d,xS(h),bc(h)}}function s(d,h,p=!1){d&&[...d].forEach(g=>o(h,g,p))}function o(d,h,p){if(h){var g,y,b;if(h.__r3f&&(h.__r3f.parent=null),(g=d.__r3f)!=null&&g.objects&&(d.__r3f.objects=d.__r3f.objects.filter(M=>M!==h)),(y=h.__r3f)!=null&&y.attach)GC(d,h,h.__r3f.attach);else if(h.isObject3D&&d.isObject3D){var S;d.remove(h),(S=h.__r3f)!=null&&S.root&&Edt(sg(h),h)}const _=(b=h.__r3f)==null?void 0:b.primitive,w=!_&&(p===void 0?h.dispose!==null:p);if(!_){var m;s((m=h.__r3f)==null?void 0:m.objects,h,w),s(h.children,h,w)}if(delete h.__r3f,w&&h.dispose&&h.type!=="Scene"){const M=()=>{try{h.dispose()}catch{}};typeof IS_REACT_ACT_ENVIRONMENT>"u"?Od.unstable_scheduleCallback(Od.unstable_IdlePriority,M):M()}bc(d)}}function a(d,h,p,g){var y;const b=(y=d.__r3f)==null?void 0:y.parent;if(!b)return;const S=t(h,p,d.__r3f.root);if(d.children){for(const m of d.children)m.__r3f&&r(S,m);d.children=d.children.filter(m=>!m.__r3f)}d.__r3f.objects.forEach(m=>r(S,m)),d.__r3f.objects=[],d.__r3f.autoRemovedBeforeAppend||o(b,d),S.parent&&(S.__r3f.autoRemovedBeforeAppend=!0),r(b,S),S.raycast&&S.__r3f.eventCount&&sg(S).getState().internal.interaction.push(S),[g,g.alternate].forEach(m=>{m!==null&&(m.stateNode=S,m.ref&&(typeof m.ref=="function"?m.ref(S):m.ref.current=S))})}const l=()=>console.warn("Text is not allowed in the R3F tree! This could be stray whitespace or characters.");return{reconciler:mdt({createInstance:t,removeChild:o,appendChild:r,appendInitialChild:r,insertBefore:i,supportsMutation:!0,isPrimaryRenderer:!1,supportsPersistence:!1,supportsHydration:!1,noTimeout:-1,appendChildToContainer:(d,h)=>{if(!h)return;const p=d.getState().scene;p.__r3f&&(p.__r3f.root=d,r(p,h))},removeChildFromContainer:(d,h)=>{h&&o(d.getState().scene,h)},insertInContainerBefore:(d,h,p)=>{if(!h||!p)return;const g=d.getState().scene;g.__r3f&&i(g,h,p)},getRootHostContext:()=>null,getChildHostContext:d=>d,finalizeInitialChildren(d){var h;const p=(h=d==null?void 0:d.__r3f)!=null?h:{};return Boolean(p.handlers)},prepareUpdate(d,h,p,g){var y;if(((y=d==null?void 0:d.__r3f)!=null?y:{}).primitive&&g.object&&g.object!==d)return[!0];{const{args:S=[],children:m,..._}=g,{args:w=[],children:M,...C}=p;if(!Array.isArray(S))throw new Error("R3F: the args prop must be an array!");if(S.some((P,k)=>P!==w[k]))return[!0];const A=LD(d,_,C,!0);return A.changes.length?[!1,A]:null}},commitUpdate(d,[h,p],g,y,b,S){h?a(d,g,b,S):K0(d,p)},commitMount(d,h,p,g){var y;const b=(y=d.__r3f)!=null?y:{};d.raycast&&b.handlers&&b.eventCount&&sg(d).getState().internal.interaction.push(d)},getPublicInstance:d=>d,prepareForCommit:()=>null,preparePortalMount:d=>wc(d.getState().scene),resetAfterCommit:()=>{},shouldSetTextContent:()=>!1,clearContainer:()=>!1,hideInstance(d){var h;const{attach:p,parent:g}=(h=d.__r3f)!=null?h:{};p&&g&&GC(g,d,p),d.isObject3D&&(d.visible=!1),bc(d)},unhideInstance(d,h){var p;const{attach:g,parent:y}=(p=d.__r3f)!=null?p:{};g&&y&&Z0(y,d,g),(d.isObject3D&&h.visible==null||h.visible)&&(d.visible=!0),bc(d)},createTextInstance:l,hideTextInstance:l,unhideTextInstance:l,getCurrentEventPriority:()=>e?e():Ko.DefaultEventPriority,beforeActiveInstanceBlur:()=>{},afterActiveInstanceBlur:()=>{},detachDeletedInstance:()=>{},now:typeof performance<"u"&&un.fun(performance.now)?performance.now:un.fun(Date.now)?Date.now:()=>0,scheduleTimeout:un.fun(setTimeout)?setTimeout:void 0,cancelTimeout:un.fun(clearTimeout)?clearTimeout:void 0}),applyProps:K0}}var zC,BC;const Y0=n=>"colorSpace"in n||"outputColorSpace"in n,MD=()=>{var n;return(n=Yb.ColorManagement)!=null?n:null},TD=n=>n&&n.isOrthographicCamera,vdt=n=>n&&n.hasOwnProperty("current"),ch=typeof window<"u"&&((zC=window.document)!=null&&zC.createElement||((BC=window.navigator)==null?void 0:BC.product)==="ReactNative")?ie.useLayoutEffect:ie.useEffect;function AD(n){const e=ie.useRef(n);return ch(()=>void(e.current=n),[n]),e}function ydt({set:n}){return ch(()=>(n(new Promise(()=>null)),()=>n(!1)),[n]),null}class CD extends ie.Component{constructor(...e){super(...e),this.state={error:!1}}componentDidCatch(e){this.props.set(e)}render(){return this.state.error?null:this.props.children}}CD.getDerivedStateFromError=()=>({error:!0});const RD="__default",HC=new Map,_dt=n=>n&&!!n.memoized&&!!n.changes;function PD(n){var e;const t=typeof window<"u"?(e=window.devicePixelRatio)!=null?e:2:1;return Array.isArray(n)?Math.min(Math.max(n[0],t),n[1]):n}const xf=n=>{var e;return(e=n.__r3f)==null?void 0:e.root.getState()};function sg(n){let e=n.__r3f.root;for(;e.getState().previousRoot;)e=e.getState().previousRoot;return e}const un={obj:n=>n===Object(n)&&!un.arr(n)&&typeof n!="function",fun:n=>typeof n=="function",str:n=>typeof n=="string",num:n=>typeof n=="number",boo:n=>typeof n=="boolean",und:n=>n===void 0,arr:n=>Array.isArray(n),equ(n,e,{arrays:t="shallow",objects:r="reference",strict:i=!0}={}){if(typeof n!=typeof e||!!n!=!!e)return!1;if(un.str(n)||un.num(n))return n===e;const s=un.obj(n);if(s&&r==="reference")return n===e;const o=un.arr(n);if(o&&t==="reference")return n===e;if((o||s)&&n===e)return!0;let a;for(a in n)if(!(a in e))return!1;if(s&&t==="shallow"&&r==="shallow"){for(a in i?e:n)if(!un.equ(n[a],e[a],{strict:i,objects:"reference"}))return!1}else for(a in i?e:n)if(n[a]!==e[a])return!1;if(un.und(a)){if(o&&n.length===0&&e.length===0||s&&Object.keys(n).length===0&&Object.keys(e).length===0)return!0;if(n!==e)return!1}return!0}};function xdt(n){n.dispose&&n.type!=="Scene"&&n.dispose();for(const e in n)e.dispose==null||e.dispose(),delete n[e]}function wc(n,e){const t=n;return t.__r3f={type:"",root:null,previousAttach:null,memoizedProps:{},eventCount:0,handlers:{},objects:[],parent:null,...e},n}function _S(n,e){let t=n;if(e.includes("-")){const r=e.split("-"),i=r.pop();return t=r.reduce((s,o)=>s[o],n),{target:t,key:i}}else return{target:t,key:e}}const VC=/-\d+$/;function Z0(n,e,t){if(un.str(t)){if(VC.test(t)){const s=t.replace(VC,""),{target:o,key:a}=_S(n,s);Array.isArray(o[a])||(o[a]=[])}const{target:r,key:i}=_S(n,t);e.__r3f.previousAttach=r[i],r[i]=e}else e.__r3f.previousAttach=t(n,e)}function GC(n,e,t){var r,i;if(un.str(t)){const{target:s,key:o}=_S(n,t),a=e.__r3f.previousAttach;a===void 0?delete s[o]:s[o]=a}else(r=e.__r3f)==null||r.previousAttach==null||r.previousAttach(n,e);(i=e.__r3f)==null||delete i.previousAttach}function LD(n,{children:e,key:t,ref:r,...i},{children:s,key:o,ref:a,...l}={},f=!1){var d;const h=(d=n==null?void 0:n.__r3f)!=null?d:{},p=Object.entries(i),g=[];if(f){const b=Object.keys(l);for(let S=0;S<b.length;S++)i.hasOwnProperty(b[S])||p.unshift([b[S],RD+"remove"])}p.forEach(([b,S])=>{var m;if((m=n.__r3f)!=null&&m.primitive&&b==="object"||un.equ(S,l[b]))return;if(/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/.test(b))return g.push([b,S,!0,[]]);let _=[];b.includes("-")&&(_=b.split("-")),g.push([b,S,!1,_]);for(const w in i){const M=i[w];w.startsWith(`${b}-`)&&g.push([w,M,!1,w.split("-")])}});const y={...i};return h.memoizedProps&&h.memoizedProps.args&&(y.args=h.memoizedProps.args),h.memoizedProps&&h.memoizedProps.attach&&(y.attach=h.memoizedProps.attach),{memoized:y,changes:g}}const Sdt=typeof process<"u"&&!1;function K0(n,e){var t,r,i;const s=(t=n.__r3f)!=null?t:{},o=s.root,a=(r=o==null||o.getState==null?void 0:o.getState())!=null?r:{},{memoized:l,changes:f}=_dt(e)?e:LD(n,e),d=s.eventCount;n.__r3f&&(n.__r3f.memoizedProps=l);for(let p=0;p<f.length;p++){let[g,y,b,S]=f[p];if(Y0(n)){const M="srgb",C="srgb-linear";g==="encoding"?(g="colorSpace",y=y===3001?M:C):g==="outputEncoding"&&(g="outputColorSpace",y=y===3001?M:C)}let m=n,_=m[g];if(S.length&&(_=S.reduce((w,M)=>w[M],n),!(_&&_.set))){const[w,...M]=S.reverse();m=M.reverse().reduce((C,A)=>C[A],n),g=w}if(y===RD+"remove")if(m.constructor){let w=HC.get(m.constructor);w||(w=new m.constructor,HC.set(m.constructor,w)),y=w[g]}else y=0;if(b)y?s.handlers[g]=y:delete s.handlers[g],s.eventCount=Object.keys(s.handlers).length;else if(_&&_.set&&(_.copy||_ instanceof ul)){if(Array.isArray(y))_.fromArray?_.fromArray(y):_.set(...y);else if(_.copy&&y&&y.constructor&&(Sdt?_.constructor.name===y.constructor.name:_.constructor===y.constructor))_.copy(y);else if(y!==void 0){const w=_ instanceof Oe;!w&&_.setScalar?_.setScalar(y):_ instanceof ul&&y instanceof ul?_.mask=y.mask:_.set(y),!MD()&&!a.linear&&w&&_.convertSRGBToLinear()}}else if(m[g]=y,m[g]instanceof Tn&&m[g].format===Ur&&m[g].type===Is){const w=m[g];Y0(w)&&Y0(a.gl)?w.colorSpace=a.gl.outputColorSpace:w.encoding=a.gl.outputEncoding}bc(n)}if(s.parent&&n.raycast&&d!==s.eventCount){const p=sg(n).getState().internal,g=p.interaction.indexOf(n);g>-1&&p.interaction.splice(g,1),s.eventCount&&p.interaction.push(n)}return!(f.length===1&&f[0][0]==="onUpdate")&&f.length&&(i=n.__r3f)!=null&&i.parent&&xS(n),n}function bc(n){var e,t;const r=(e=n.__r3f)==null||(t=e.root)==null||t.getState==null?void 0:t.getState();r&&r.internal.frames===0&&r.invalidate()}function xS(n){n.onUpdate==null||n.onUpdate(n)}function wdt(n,e){n.manual||(TD(n)?(n.left=e.width/-2,n.right=e.width/2,n.top=e.height/2,n.bottom=e.height/-2):n.aspect=e.width/e.height,n.updateProjectionMatrix(),n.updateMatrixWorld())}function Rm(n){return(n.eventObject||n.object).uuid+"/"+n.index+n.instanceId}function bdt(){var n;const e=typeof self<"u"&&self||typeof window<"u"&&window;if(!e)return Ko.DefaultEventPriority;switch((n=e.event)==null?void 0:n.type){case"click":case"contextmenu":case"dblclick":case"pointercancel":case"pointerdown":case"pointerup":return Ko.DiscreteEventPriority;case"pointermove":case"pointerout":case"pointerover":case"pointerenter":case"pointerleave":case"wheel":return Ko.ContinuousEventPriority;default:return Ko.DefaultEventPriority}}function ND(n,e,t,r){const i=t.get(e);i&&(t.delete(e),t.size===0&&(n.delete(r),i.target.releasePointerCapture(r)))}function Edt(n,e){const{internal:t}=n.getState();t.interaction=t.interaction.filter(r=>r!==e),t.initialHits=t.initialHits.filter(r=>r!==e),t.hovered.forEach((r,i)=>{(r.eventObject===e||r.object===e)&&t.hovered.delete(i)}),t.capturedMap.forEach((r,i)=>{ND(t.capturedMap,e,r,i)})}function Mdt(n){function e(l){const{internal:f}=n.getState(),d=l.offsetX-f.initialClick[0],h=l.offsetY-f.initialClick[1];return Math.round(Math.sqrt(d*d+h*h))}function t(l){return l.filter(f=>["Move","Over","Enter","Out","Leave"].some(d=>{var h;return(h=f.__r3f)==null?void 0:h.handlers["onPointer"+d]}))}function r(l,f){const d=n.getState(),h=new Set,p=[],g=f?f(d.internal.interaction):d.internal.interaction;for(let m=0;m<g.length;m++){const _=xf(g[m]);_&&(_.raycaster.camera=void 0)}d.previousRoot||d.events.compute==null||d.events.compute(l,d);function y(m){const _=xf(m);if(!_||!_.events.enabled||_.raycaster.camera===null)return[];if(_.raycaster.camera===void 0){var w;_.events.compute==null||_.events.compute(l,_,(w=_.previousRoot)==null?void 0:w.getState()),_.raycaster.camera===void 0&&(_.raycaster.camera=null)}return _.raycaster.camera?_.raycaster.intersectObject(m,!0):[]}let b=g.flatMap(y).sort((m,_)=>{const w=xf(m.object),M=xf(_.object);return!w||!M?m.distance-_.distance:M.events.priority-w.events.priority||m.distance-_.distance}).filter(m=>{const _=Rm(m);return h.has(_)?!1:(h.add(_),!0)});d.events.filter&&(b=d.events.filter(b,d));for(const m of b){let _=m.object;for(;_;){var S;(S=_.__r3f)!=null&&S.eventCount&&p.push({...m,eventObject:_}),_=_.parent}}if("pointerId"in l&&d.internal.capturedMap.has(l.pointerId))for(let m of d.internal.capturedMap.get(l.pointerId).values())h.has(Rm(m.intersection))||p.push(m.intersection);return p}function i(l,f,d,h){const p=n.getState();if(l.length){const g={stopped:!1};for(const y of l){const b=xf(y.object)||p,{raycaster:S,pointer:m,camera:_,internal:w}=b,M=new U(m.x,m.y,0).unproject(_),C=N=>{var B,W;return(B=(W=w.capturedMap.get(N))==null?void 0:W.has(y.eventObject))!=null?B:!1},A=N=>{const B={intersection:y,target:f.target};w.capturedMap.has(N)?w.capturedMap.get(N).set(y.eventObject,B):w.capturedMap.set(N,new Map([[y.eventObject,B]])),f.target.setPointerCapture(N)},P=N=>{const B=w.capturedMap.get(N);B&&ND(w.capturedMap,y.eventObject,B,N)};let k={};for(let N in f){let B=f[N];typeof B!="function"&&(k[N]=B)}let R={...y,...k,pointer:m,intersections:l,stopped:g.stopped,delta:d,unprojectedPoint:M,ray:S.ray,camera:_,stopPropagation(){const N="pointerId"in f&&w.capturedMap.get(f.pointerId);if((!N||N.has(y.eventObject))&&(R.stopped=g.stopped=!0,w.hovered.size&&Array.from(w.hovered.values()).find(B=>B.eventObject===y.eventObject))){const B=l.slice(0,l.indexOf(y));s([...B,y])}},target:{hasPointerCapture:C,setPointerCapture:A,releasePointerCapture:P},currentTarget:{hasPointerCapture:C,setPointerCapture:A,releasePointerCapture:P},nativeEvent:f};if(h(R),g.stopped===!0)break}}return l}function s(l){const{internal:f}=n.getState();for(const d of f.hovered.values())if(!l.length||!l.find(h=>h.object===d.object&&h.index===d.index&&h.instanceId===d.instanceId)){const p=d.eventObject.__r3f,g=p==null?void 0:p.handlers;if(f.hovered.delete(Rm(d)),p!=null&&p.eventCount){const y={...d,intersections:l};g.onPointerOut==null||g.onPointerOut(y),g.onPointerLeave==null||g.onPointerLeave(y)}}}function o(l,f){for(let d=0;d<f.length;d++){const h=f[d].__r3f;h==null||h.handlers.onPointerMissed==null||h.handlers.onPointerMissed(l)}}function a(l){switch(l){case"onPointerLeave":case"onPointerCancel":return()=>s([]);case"onLostPointerCapture":return f=>{const{internal:d}=n.getState();"pointerId"in f&&d.capturedMap.has(f.pointerId)&&requestAnimationFrame(()=>{d.capturedMap.has(f.pointerId)&&(d.capturedMap.delete(f.pointerId),s([]))})}}return function(d){const{onPointerMissed:h,internal:p}=n.getState();p.lastEvent.current=d;const g=l==="onPointerMove",y=l==="onClick"||l==="onContextMenu"||l==="onDoubleClick",S=r(d,g?t:void 0),m=y?e(d):0;l==="onPointerDown"&&(p.initialClick=[d.offsetX,d.offsetY],p.initialHits=S.map(w=>w.eventObject)),y&&!S.length&&m<=2&&(o(d,p.interaction),h&&h(d)),g&&s(S);function _(w){const M=w.eventObject,C=M.__r3f,A=C==null?void 0:C.handlers;if(C!=null&&C.eventCount)if(g){if(A.onPointerOver||A.onPointerEnter||A.onPointerOut||A.onPointerLeave){const P=Rm(w),k=p.hovered.get(P);k?k.stopped&&w.stopPropagation():(p.hovered.set(P,w),A.onPointerOver==null||A.onPointerOver(w),A.onPointerEnter==null||A.onPointerEnter(w))}A.onPointerMove==null||A.onPointerMove(w)}else{const P=A[l];P?(!y||p.initialHits.includes(M))&&(o(d,p.interaction.filter(k=>!p.initialHits.includes(k))),P(w)):y&&p.initialHits.includes(M)&&o(d,p.interaction.filter(k=>!p.initialHits.includes(k)))}}i(S,d,m,_)}}return{handlePointer:a}}const ID=n=>!!(n!=null&&n.render),DD=ie.createContext(null),Tdt=(n,e)=>{const t=fdt((a,l)=>{const f=new U,d=new U,h=new U;function p(m=l().camera,_=d,w=l().size){const{width:M,height:C,top:A,left:P}=w,k=M/C;_ instanceof U?h.copy(_):h.set(..._);const R=m.getWorldPosition(f).distanceTo(h);if(TD(m))return{width:M/m.zoom,height:C/m.zoom,top:A,left:P,factor:1,distance:R,aspect:k};{const N=m.fov*Math.PI/180,B=2*Math.tan(N/2)*R,W=B*(M/C);return{width:W,height:B,top:A,left:P,factor:M/W,distance:R,aspect:k}}}let g;const y=m=>a(_=>({performance:{..._.performance,current:m}})),b=new pe;return{set:a,get:l,gl:null,camera:null,raycaster:null,events:{priority:1,enabled:!0,connected:!1},xr:null,scene:null,invalidate:(m=1)=>n(l(),m),advance:(m,_)=>e(m,_,l()),legacy:!1,linear:!1,flat:!1,controls:null,clock:new qb,pointer:b,mouse:b,frameloop:"always",onPointerMissed:void 0,performance:{current:1,min:.5,max:1,debounce:200,regress:()=>{const m=l();g&&clearTimeout(g),m.performance.current!==m.performance.min&&y(m.performance.min),g=setTimeout(()=>y(l().performance.max),m.performance.debounce)}},size:{width:0,height:0,top:0,left:0,updateStyle:!1},viewport:{initialDpr:0,dpr:0,width:0,height:0,top:0,left:0,aspect:0,distance:0,factor:0,getCurrentViewport:p},setEvents:m=>a(_=>({..._,events:{..._.events,...m}})),setSize:(m,_,w,M,C)=>{const A=l().camera,P={width:m,height:_,top:M||0,left:C||0,updateStyle:w};a(k=>({size:P,viewport:{...k.viewport,...p(A,d,P)}}))},setDpr:m=>a(_=>{const w=PD(m);return{viewport:{..._.viewport,dpr:w,initialDpr:_.viewport.initialDpr||w}}}),setFrameloop:(m="always")=>{const _=l().clock;_.stop(),_.elapsedTime=0,m!=="never"&&(_.start(),_.elapsedTime=0),a(()=>({frameloop:m}))},previousRoot:void 0,internal:{active:!1,priority:0,frames:0,lastEvent:ie.createRef(),interaction:[],hovered:new Map,subscribers:[],initialClick:[0,0],initialHits:[],capturedMap:new Map,subscribe:(m,_,w)=>{const M=l().internal;return M.priority=M.priority+(_>0?1:0),M.subscribers.push({ref:m,priority:_,store:w}),M.subscribers=M.subscribers.sort((C,A)=>C.priority-A.priority),()=>{const C=l().internal;C!=null&&C.subscribers&&(C.priority=C.priority-(_>0?1:0),C.subscribers=C.subscribers.filter(A=>A.ref!==m))}}}}}),r=t.getState();let i=r.size,s=r.viewport.dpr,o=r.camera;return t.subscribe(()=>{const{camera:a,size:l,viewport:f,gl:d,set:h}=t.getState();if(l.width!==i.width||l.height!==i.height||f.dpr!==s){var p;i=l,s=f.dpr,wdt(a,l),d.setPixelRatio(f.dpr);const g=(p=l.updateStyle)!=null?p:typeof HTMLCanvasElement<"u"&&d.domElement instanceof HTMLCanvasElement;d.setSize(l.width,l.height,g)}a!==o&&(o=a,h(g=>({viewport:{...g.viewport,...g.viewport.getCurrentViewport(a)}})))}),t.subscribe(a=>n(a)),t};let Pm,Adt=new Set,Cdt=new Set,Rdt=new Set;function J0(n,e){if(n.size)for(const{callback:t}of n.values())t(e)}function Sf(n,e){switch(n){case"before":return J0(Adt,e);case"after":return J0(Cdt,e);case"tail":return J0(Rdt,e)}}let Q0,e_;function t_(n,e,t){let r=e.clock.getDelta();for(e.frameloop==="never"&&typeof n=="number"&&(r=n-e.clock.elapsedTime,e.clock.oldTime=e.clock.elapsedTime,e.clock.elapsedTime=n),Q0=e.internal.subscribers,Pm=0;Pm<Q0.length;Pm++)e_=Q0[Pm],e_.ref.current(e_.store.getState(),r,t);return!e.internal.priority&&e.gl.render&&e.gl.render(e.scene,e.camera),e.internal.frames=Math.max(0,e.internal.frames-1),e.frameloop==="always"?1:e.internal.frames}function Pdt(n){let e=!1,t,r,i;function s(l){r=requestAnimationFrame(s),e=!0,t=0,Sf("before",l);for(const d of n.values()){var f;i=d.store.getState(),i.internal.active&&(i.frameloop==="always"||i.internal.frames>0)&&!((f=i.gl.xr)!=null&&f.isPresenting)&&(t+=t_(l,i))}if(Sf("after",l),t===0)return Sf("tail",l),e=!1,cancelAnimationFrame(r)}function o(l,f=1){var d;if(!l)return n.forEach(h=>o(h.store.getState()),f);(d=l.gl.xr)!=null&&d.isPresenting||!l.internal.active||l.frameloop==="never"||(l.internal.frames=Math.min(60,l.internal.frames+f),e||(e=!0,requestAnimationFrame(s)))}function a(l,f=!0,d,h){if(f&&Sf("before",l),d)t_(l,d,h);else for(const p of n.values())t_(l,p.store.getState());f&&Sf("after",l)}return{loop:s,invalidate:o,advance:a}}function kD(){const n=ie.useContext(DD);if(!n)throw new Error("R3F: Hooks can only be used within the Canvas component!");return n}function OD(n=t=>t,e){return kD()(n,e)}function Ldt(n,e=0){const t=kD(),r=t.getState().internal.subscribe,i=AD(n);return ch(()=>r(i,e,t),[e,r,t]),null}const vu=new Map,{invalidate:qC,advance:WC}=Pdt(vu),{reconciler:Jg,applyProps:xc}=gdt(vu,bdt),Sc={objects:"shallow",strict:!1},Ndt=(n,e)=>{const t=typeof n=="function"?n(e):n;return ID(t)?t:new Tb({powerPreference:"high-performance",canvas:e,antialias:!0,alpha:!0,...n})};function Idt(n,e){const t=typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement;if(e){const{width:r,height:i,top:s,left:o,updateStyle:a=t}=e;return{width:r,height:i,top:s,left:o,updateStyle:a}}else if(typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement&&n.parentElement){const{width:r,height:i,top:s,left:o}=n.parentElement.getBoundingClientRect();return{width:r,height:i,top:s,left:o,updateStyle:t}}else if(typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas)return{width:n.width,height:n.height,top:0,left:0,updateStyle:t};return{width:0,height:0,top:0,left:0}}function Ddt(n){const e=vu.get(n),t=e==null?void 0:e.fiber,r=e==null?void 0:e.store;e&&console.warn("R3F.createRoot should only be called once!");const i=typeof reportError=="function"?reportError:console.error,s=r||Tdt(qC,WC),o=t||Jg.createContainer(s,Ko.ConcurrentRoot,null,!1,null,"",i,null);e||vu.set(n,{fiber:o,store:s});let a,l=!1,f;return{configure(d={}){let{gl:h,size:p,scene:g,events:y,onCreated:b,shadows:S=!1,linear:m=!1,flat:_=!1,legacy:w=!1,orthographic:M=!1,frameloop:C="always",dpr:A=[1,2],performance:P,raycaster:k,camera:R,onPointerMissed:N}=d,B=s.getState(),W=B.gl;B.gl||B.set({gl:W=Ndt(h,n)});let J=B.raycaster;J||B.set({raycaster:J=new xD});const{params:V,...Y}=k||{};if(un.equ(Y,J,Sc)||xc(J,{...Y}),un.equ(V,J.params,Sc)||xc(J,{params:{...J.params,...V}}),!B.camera||B.camera===f&&!un.equ(f,R,Sc)){f=R;const H=R instanceof eh,X=H?R:M?new ih(0,0,0,0,.1,1e3):new nr(75,0,.1,1e3);H||(X.position.z=5,R&&xc(X,R),!B.camera&&!(R!=null&&R.rotation)&&X.lookAt(0,0,0)),B.set({camera:X}),J.camera=X}if(!B.scene){let H;g instanceof Yg?H=g:(H=new Yg,g&&xc(H,g)),B.set({scene:wc(H)})}if(!B.xr){var te;const H=(K,ae)=>{const ge=s.getState();ge.frameloop!=="never"&&WC(K,!0,ge,ae)},X=()=>{const K=s.getState();K.gl.xr.enabled=K.gl.xr.isPresenting,K.gl.xr.setAnimationLoop(K.gl.xr.isPresenting?H:null),K.gl.xr.isPresenting||qC(K)},ne={connect(){const K=s.getState().gl;K.xr.addEventListener("sessionstart",X),K.xr.addEventListener("sessionend",X)},disconnect(){const K=s.getState().gl;K.xr.removeEventListener("sessionstart",X),K.xr.removeEventListener("sessionend",X)}};typeof((te=W.xr)==null?void 0:te.addEventListener)=="function"&&ne.connect(),B.set({xr:ne})}if(W.shadowMap){const H=W.shadowMap.enabled,X=W.shadowMap.type;if(W.shadowMap.enabled=!!S,un.boo(S))W.shadowMap.type=Bf;else if(un.str(S)){var ue;const ne={basic:pN,percentage:Ov,soft:Bf,variance:Ki};W.shadowMap.type=(ue=ne[S])!=null?ue:Bf}else un.obj(S)&&Object.assign(W.shadowMap,S);(H!==W.shadowMap.enabled||X!==W.shadowMap.type)&&(W.shadowMap.needsUpdate=!0)}const D=MD();D&&("enabled"in D?D.enabled=!w:"legacyMode"in D&&(D.legacyMode=w)),l||xc(W,{outputEncoding:m?3e3:3001,toneMapping:_?Ns:sb}),B.legacy!==w&&B.set(()=>({legacy:w})),B.linear!==m&&B.set(()=>({linear:m})),B.flat!==_&&B.set(()=>({flat:_})),h&&!un.fun(h)&&!ID(h)&&!un.equ(h,W,Sc)&&xc(W,h),y&&!B.events.handlers&&B.set({events:y(s)});const z=Idt(n,p);return un.equ(z,B.size,Sc)||B.setSize(z.width,z.height,z.updateStyle,z.top,z.left),A&&B.viewport.dpr!==PD(A)&&B.setDpr(A),B.frameloop!==C&&B.setFrameloop(C),B.onPointerMissed||B.set({onPointerMissed:N}),P&&!un.equ(P,B.performance,Sc)&&B.set(H=>({performance:{...H.performance,...P}})),a=b,l=!0,this},render(d){return l||this.configure(),Jg.updateContainer(ie.createElement(kdt,{store:s,children:d,onCreated:a,rootElement:n}),o,null,()=>{}),s},unmount(){$D(n)}}}function kdt({store:n,children:e,onCreated:t,rootElement:r}){return ch(()=>{const i=n.getState();i.set(s=>({internal:{...s.internal,active:!0}})),t&&t(i),n.getState().events.connected||i.events.connect==null||i.events.connect(r)},[]),ie.createElement(DD.Provider,{value:n},e)}function $D(n,e){const t=vu.get(n),r=t==null?void 0:t.fiber;if(r){const i=t==null?void 0:t.store.getState();i&&(i.internal.active=!1),Jg.updateContainer(null,r,null,()=>{i&&setTimeout(()=>{try{var s,o,a,l;i.events.disconnect==null||i.events.disconnect(),(s=i.gl)==null||(o=s.renderLists)==null||o.dispose==null||o.dispose(),(a=i.gl)==null||a.forceContextLoss==null||a.forceContextLoss(),(l=i.gl)!=null&&l.xr&&i.xr.disconnect(),xdt(i),vu.delete(n),e&&e(n)}catch{}},500)})}}Jg.injectIntoDevTools({bundleType:0,rendererPackageName:"@react-three/fiber",version:ie.version});function Qg(){return Qg=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Qg.apply(this,arguments)}function SS(n,e,t){var r,i,s,o,a;e==null&&(e=100);function l(){var d=Date.now()-o;d<e&&d>=0?r=setTimeout(l,e-d):(r=null,t||(a=n.apply(s,i),s=i=null))}var f=function(){s=this,i=arguments,o=Date.now();var d=t&&!r;return r||(r=setTimeout(l,e)),d&&(a=n.apply(s,i),s=i=null),a};return f.clear=function(){r&&(clearTimeout(r),r=null)},f.flush=function(){r&&(a=n.apply(s,i),s=i=null,clearTimeout(r),r=null)},f}SS.debounce=SS;var jC=SS;function Odt(n){let{debounce:e,scroll:t,polyfill:r,offsetSize:i}=n===void 0?{debounce:0,scroll:!1,offsetSize:!1}:n;const s=r||(typeof window>"u"?class{}:window.ResizeObserver);if(!s)throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");const[o,a]=ie.useState({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),l=ie.useRef({element:null,scrollContainers:null,resizeObserver:null,lastBounds:o}),f=e?typeof e=="number"?e:e.scroll:null,d=e?typeof e=="number"?e:e.resize:null,h=ie.useRef(!1);ie.useEffect(()=>(h.current=!0,()=>void(h.current=!1)));const[p,g,y]=ie.useMemo(()=>{const _=()=>{if(!l.current.element)return;const{left:w,top:M,width:C,height:A,bottom:P,right:k,x:R,y:N}=l.current.element.getBoundingClientRect(),B={left:w,top:M,width:C,height:A,bottom:P,right:k,x:R,y:N};l.current.element instanceof HTMLElement&&i&&(B.height=l.current.element.offsetHeight,B.width=l.current.element.offsetWidth),Object.freeze(B),h.current&&!zdt(l.current.lastBounds,B)&&a(l.current.lastBounds=B)};return[_,d?jC(_,d):_,f?jC(_,f):_]},[a,i,f,d]);function b(){l.current.scrollContainers&&(l.current.scrollContainers.forEach(_=>_.removeEventListener("scroll",y,!0)),l.current.scrollContainers=null),l.current.resizeObserver&&(l.current.resizeObserver.disconnect(),l.current.resizeObserver=null)}function S(){l.current.element&&(l.current.resizeObserver=new s(y),l.current.resizeObserver.observe(l.current.element),t&&l.current.scrollContainers&&l.current.scrollContainers.forEach(_=>_.addEventListener("scroll",y,{capture:!0,passive:!0})))}const m=_=>{!_||_===l.current.element||(b(),l.current.element=_,l.current.scrollContainers=UD(_),S())};return Udt(y,Boolean(t)),$dt(g),ie.useEffect(()=>{b(),S()},[t,y,g]),ie.useEffect(()=>b,[]),[m,o,p]}function $dt(n){ie.useEffect(()=>{const e=n;return window.addEventListener("resize",e),()=>void window.removeEventListener("resize",e)},[n])}function Udt(n,e){ie.useEffect(()=>{if(e){const t=n;return window.addEventListener("scroll",t,{capture:!0,passive:!0}),()=>void window.removeEventListener("scroll",t,!0)}},[n,e])}function UD(n){const e=[];if(!n||n===document.body)return e;const{overflow:t,overflowX:r,overflowY:i}=window.getComputedStyle(n);return[t,r,i].some(s=>s==="auto"||s==="scroll")&&e.push(n),[...e,...UD(n.parentElement)]}const Fdt=["x","y","top","bottom","left","right","width","height"],zdt=(n,e)=>Fdt.every(t=>n[t]===e[t]);var Bdt=Object.defineProperty,Hdt=Object.defineProperties,Vdt=Object.getOwnPropertyDescriptors,XC=Object.getOwnPropertySymbols,Gdt=Object.prototype.hasOwnProperty,qdt=Object.prototype.propertyIsEnumerable,YC=(n,e,t)=>e in n?Bdt(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,ZC=(n,e)=>{for(var t in e||(e={}))Gdt.call(e,t)&&YC(n,t,e[t]);if(XC)for(var t of XC(e))qdt.call(e,t)&&YC(n,t,e[t]);return n},Wdt=(n,e)=>Hdt(n,Vdt(e));function FD(n,e,t){if(!n)return;if(t(n)===!0)return n;let r=e?n.return:n.child;for(;r;){const i=FD(r,e,t);if(i)return i;r=e?null:r.sibling}}function zD(n){try{return Object.defineProperties(n,{_currentRenderer:{get(){return null},set(){}},_currentRenderer2:{get(){return null},set(){}}})}catch{return n}}const Zb=zD(ie.createContext(null));class BD extends ie.Component{render(){return ie.createElement(Zb.Provider,{value:this._reactInternals},this.props.children)}}const{ReactCurrentOwner:KC,ReactCurrentDispatcher:JC}=ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function jdt(){const n=ie.useContext(Zb);if(n===null)throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");const e=ie.useId();return ie.useMemo(()=>{for(const r of[KC==null?void 0:KC.current,n,n==null?void 0:n.alternate]){if(!r)continue;const i=FD(r,!1,s=>{let o=s.memoizedState;for(;o;){if(o.memoizedState===e)return!0;o=o.next}});if(i)return i}},[n,e])}function Xdt(){var n,e;const t=jdt(),[r]=ie.useState(()=>new Map);r.clear();let i=t;for(;i;){const s=(n=i.type)==null?void 0:n._context;s&&s!==Zb&&!r.has(s)&&r.set(s,(e=JC==null?void 0:JC.current)==null?void 0:e.readContext(zD(s))),i=i.return}return r}function Ydt(){const n=Xdt();return ie.useMemo(()=>Array.from(n.keys()).reduce((e,t)=>r=>ie.createElement(e,null,ie.createElement(t.Provider,Wdt(ZC({},r),{value:n.get(t)}))),e=>ie.createElement(BD,ZC({},e))),[n])}const n_={onClick:["click",!1],onContextMenu:["contextmenu",!1],onDoubleClick:["dblclick",!1],onWheel:["wheel",!0],onPointerDown:["pointerdown",!0],onPointerUp:["pointerup",!0],onPointerLeave:["pointerleave",!0],onPointerMove:["pointermove",!0],onPointerCancel:["pointercancel",!0],onLostPointerCapture:["lostpointercapture",!0]};function Zdt(n){const{handlePointer:e}=Mdt(n);return{priority:1,enabled:!0,compute(t,r,i){r.pointer.set(t.offsetX/r.size.width*2-1,-(t.offsetY/r.size.height)*2+1),r.raycaster.setFromCamera(r.pointer,r.camera)},connected:void 0,handlers:Object.keys(n_).reduce((t,r)=>({...t,[r]:e(r)}),{}),update:()=>{var t;const{events:r,internal:i}=n.getState();(t=i.lastEvent)!=null&&t.current&&r.handlers&&r.handlers.onPointerMove(i.lastEvent.current)},connect:t=>{var r;const{set:i,events:s}=n.getState();s.disconnect==null||s.disconnect(),i(o=>({events:{...o.events,connected:t}})),Object.entries((r=s.handlers)!=null?r:[]).forEach(([o,a])=>{const[l,f]=n_[o];t.addEventListener(l,a,{passive:f})})},disconnect:()=>{const{set:t,events:r}=n.getState();if(r.connected){var i;Object.entries((i=r.handlers)!=null?i:[]).forEach(([s,o])=>{if(r&&r.connected instanceof HTMLElement){const[a]=n_[s];r.connected.removeEventListener(a,o)}}),t(s=>({events:{...s.events,connected:void 0}}))}}}}const Kdt=ie.forwardRef(function({children:e,fallback:t,resize:r,style:i,gl:s,events:o=Zdt,eventSource:a,eventPrefix:l,shadows:f,linear:d,flat:h,legacy:p,orthographic:g,frameloop:y,dpr:b,performance:S,raycaster:m,camera:_,scene:w,onPointerMissed:M,onCreated:C,...A},P){ie.useMemo(()=>ED(adt),[]);const k=Ydt(),[R,N]=Odt({scroll:!0,debounce:{scroll:50,resize:0},...r}),B=ie.useRef(null),W=ie.useRef(null);ie.useImperativeHandle(P,()=>B.current);const J=AD(M),[V,Y]=ie.useState(!1),[te,ue]=ie.useState(!1);if(V)throw V;if(te)throw te;const D=ie.useRef(null);ch(()=>{const H=B.current;N.width>0&&N.height>0&&H&&(D.current||(D.current=Ddt(H)),D.current.configure({gl:s,events:o,shadows:f,linear:d,flat:h,legacy:p,orthographic:g,frameloop:y,dpr:b,performance:S,raycaster:m,camera:_,scene:w,size:N,onPointerMissed:(...X)=>J.current==null?void 0:J.current(...X),onCreated:X=>{X.events.connect==null||X.events.connect(a?vdt(a)?a.current:a:W.current),l&&X.setEvents({compute:(ne,K)=>{const ae=ne[l+"X"],ge=ne[l+"Y"];K.pointer.set(ae/K.size.width*2-1,-(ge/K.size.height)*2+1),K.raycaster.setFromCamera(K.pointer,K.camera)}}),C==null||C(X)}}),D.current.render(ie.createElement(k,null,ie.createElement(CD,{set:ue},ie.createElement(ie.Suspense,{fallback:ie.createElement(ydt,{set:Y})},e)))))}),ie.useEffect(()=>{const H=B.current;if(H)return()=>$D(H)},[]);const z=a?"none":"auto";return ie.createElement("div",Qg({ref:W,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",pointerEvents:z,...i}},A),ie.createElement("div",{ref:R,style:{width:"100%",height:"100%"}},ie.createElement("canvas",{ref:B,style:{display:"block"}},t)))}),Jdt=ie.forwardRef(function(e,t){return ie.createElement(BD,null,ie.createElement(Kdt,Qg({},e,{ref:t})))}),Qdt=1/3,ws=1/6,r_=n=>Math.floor(n)|0,i_=new Float64Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]);function eht(n=Math.random){const e=tht(n),t=new Float64Array(e).map(s=>i_[s%12*3]),r=new Float64Array(e).map(s=>i_[s%12*3+1]),i=new Float64Array(e).map(s=>i_[s%12*3+2]);return function(o,a,l){let f,d,h,p;const g=(o+a+l)*Qdt,y=r_(o+g),b=r_(a+g),S=r_(l+g),m=(y+b+S)*ws,_=y-m,w=b-m,M=S-m,C=o-_,A=a-w,P=l-M;let k,R,N,B,W,J;C>=A?A>=P?(k=1,R=0,N=0,B=1,W=1,J=0):C>=P?(k=1,R=0,N=0,B=1,W=0,J=1):(k=0,R=0,N=1,B=1,W=0,J=1):A<P?(k=0,R=0,N=1,B=0,W=1,J=1):C<P?(k=0,R=1,N=0,B=0,W=1,J=1):(k=0,R=1,N=0,B=1,W=1,J=0);const V=C-k+ws,Y=A-R+ws,te=P-N+ws,ue=C-B+2*ws,D=A-W+2*ws,z=P-J+2*ws,H=C-1+3*ws,X=A-1+3*ws,ne=P-1+3*ws,K=y&255,ae=b&255,ge=S&255;let Me=.6-C*C-A*A-P*P;if(Me<0)f=0;else{const Ce=K+e[ae+e[ge]];Me*=Me,f=Me*Me*(t[Ce]*C+r[Ce]*A+i[Ce]*P)}let Ee=.6-V*V-Y*Y-te*te;if(Ee<0)d=0;else{const Ce=K+k+e[ae+R+e[ge+N]];Ee*=Ee,d=Ee*Ee*(t[Ce]*V+r[Ce]*Y+i[Ce]*te)}let Qe=.6-ue*ue-D*D-z*z;if(Qe<0)h=0;else{const Ce=K+B+e[ae+W+e[ge+J]];Qe*=Qe,h=Qe*Qe*(t[Ce]*ue+r[Ce]*D+i[Ce]*z)}let tt=.6-H*H-X*X-ne*ne;if(tt<0)p=0;else{const Ce=K+1+e[ae+1+e[ge+1]];tt*=tt,p=tt*tt*(t[Ce]*H+r[Ce]*X+i[Ce]*ne)}return 32*(f+d+h+p)}}function tht(n){const t=new Uint8Array(512);for(let r=0;r<512/2;r++)t[r]=r;for(let r=0;r<512/2-1;r++){const i=r+~~(n()*(256-r)),s=t[r];t[r]=t[i],t[i]=s}for(let r=256;r<512;r++)t[r]=t[r-256];return t}function ev(){return ev=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},ev.apply(this,arguments)}var HD,QC=N_;HD=QC.createRoot,QC.hydrateRoot;const eR=new ir,Lm=new U;class Kb extends Vb{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],r=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(r),this.setAttribute("position",new Ge(e,3)),this.setAttribute("uv",new Ge(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,r=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),r.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const r=new Kg(t,6,1);return this.setAttribute("instanceStart",new gi(r,3,0)),this.setAttribute("instanceEnd",new gi(r,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let r;e instanceof Float32Array?r=e:Array.isArray(e)&&(r=new Float32Array(e));const i=new Kg(r,t*2,1);return this.setAttribute("instanceColorStart",new gi(i,t,0)),this.setAttribute("instanceColorEnd",new gi(i,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Ob(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ir);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),eR.setFromBufferAttribute(t),this.boundingBox.union(eR))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sr),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const r=this.boundingSphere.center;this.boundingBox.getCenter(r);let i=0;for(let s=0,o=e.count;s<o;s++)Lm.fromBufferAttribute(e,s),i=Math.max(i,r.distanceToSquared(Lm)),Lm.fromBufferAttribute(t,s),i=Math.max(i,r.distanceToSquared(Lm));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}class VD extends Kb{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,r=new Float32Array(2*t);for(let i=0;i<t;i+=3)r[2*i]=e[i],r[2*i+1]=e[i+1],r[2*i+2]=e[i+2],r[2*i+3]=e[i+3],r[2*i+4]=e[i+4],r[2*i+5]=e[i+5];return super.setPositions(r),this}setColors(e,t=3){const r=e.length-t,i=new Float32Array(2*r);if(t===3)for(let s=0;s<r;s+=t)i[2*s]=e[s],i[2*s+1]=e[s+1],i[2*s+2]=e[s+2],i[2*s+3]=e[s+3],i[2*s+4]=e[s+4],i[2*s+5]=e[s+5];else for(let s=0;s<r;s+=t)i[2*s]=e[s],i[2*s+1]=e[s+1],i[2*s+2]=e[s+2],i[2*s+3]=e[s+3],i[2*s+4]=e[s+4],i[2*s+5]=e[s+5],i[2*s+6]=e[s+6],i[2*s+7]=e[s+7];return super.setColors(i,t),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class Jb extends cs{constructor(e){super({type:"LineMaterial",uniforms:Xg.clone(Xg.merge([Te.common,Te.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new pe(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${parseInt(Zd.replace(/\D+/g,""))>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(t){this.uniforms.diffuse.value=t}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(t){this.uniforms.linewidth.value=t}},dashed:{enumerable:!0,get:function(){return Boolean("USE_DASH"in this.defines)},set(t){Boolean(t)!==Boolean("USE_DASH"in this.defines)&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(t){this.uniforms.dashScale.value=t}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(t){this.uniforms.dashSize.value=t}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(t){this.uniforms.dashOffset.value=t}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(t){this.uniforms.gapSize.value=t}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(t){this.uniforms.resolution.value.copy(t)}},alphaToCoverage:{enumerable:!0,get:function(){return Boolean("USE_ALPHA_TO_COVERAGE"in this.defines)},set:function(t){Boolean(t)!==Boolean("USE_ALPHA_TO_COVERAGE"in this.defines)&&(this.needsUpdate=!0),t===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}const tR=new U,nR=new U,fr=new It,dr=new It,bs=new It,s_=new U,o_=new ut,Cr=new SD,rR=new U,Nm=new ir,Im=new sr,Es=new It;let Cs,wS,GD,hl;function iR(n,e,t){return Es.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),Es.multiplyScalar(1/Es.w),Es.x=hl/t.width,Es.y=hl/t.height,Es.applyMatrix4(n.projectionMatrixInverse),Es.multiplyScalar(1/Es.w),Math.abs(Math.max(Es.x,Es.y))}function nht(n,e){for(let t=0,r=wS.count;t<r;t++){Cr.start.fromBufferAttribute(wS,t),Cr.end.fromBufferAttribute(GD,t);const i=new U,s=new U;Cs.distanceSqToSegment(Cr.start,Cr.end,s,i),s.distanceTo(i)<hl*.5&&e.push({point:s,pointOnLine:i,distance:Cs.origin.distanceTo(s),object:n,face:null,faceIndex:t,uv:null,uv2:null})}}function rht(n,e,t){const r=e.projectionMatrix,s=n.material.resolution,o=n.matrixWorld,a=n.geometry,l=a.attributes.instanceStart,f=a.attributes.instanceEnd,d=-e.near;Cs.at(1,bs),bs.w=1,bs.applyMatrix4(e.matrixWorldInverse),bs.applyMatrix4(r),bs.multiplyScalar(1/bs.w),bs.x*=s.x/2,bs.y*=s.y/2,bs.z=0,s_.copy(bs),o_.multiplyMatrices(e.matrixWorldInverse,o);for(let h=0,p=l.count;h<p;h++){if(fr.fromBufferAttribute(l,h),dr.fromBufferAttribute(f,h),fr.w=1,dr.w=1,fr.applyMatrix4(o_),dr.applyMatrix4(o_),fr.z>d&&dr.z>d)continue;if(fr.z>d){const _=fr.z-dr.z,w=(fr.z-d)/_;fr.lerp(dr,w)}else if(dr.z>d){const _=dr.z-fr.z,w=(dr.z-d)/_;dr.lerp(fr,w)}fr.applyMatrix4(r),dr.applyMatrix4(r),fr.multiplyScalar(1/fr.w),dr.multiplyScalar(1/dr.w),fr.x*=s.x/2,fr.y*=s.y/2,dr.x*=s.x/2,dr.y*=s.y/2,Cr.start.copy(fr),Cr.start.z=0,Cr.end.copy(dr),Cr.end.z=0;const y=Cr.closestPointToPointParameter(s_,!0);Cr.at(y,rR);const b=hI.lerp(fr.z,dr.z,y),S=b>=-1&&b<=1,m=s_.distanceTo(rR)<hl*.5;if(S&&m){Cr.start.fromBufferAttribute(l,h),Cr.end.fromBufferAttribute(f,h),Cr.start.applyMatrix4(o),Cr.end.applyMatrix4(o);const _=new U,w=new U;Cs.distanceSqToSegment(Cr.start,Cr.end,w,_),t.push({point:w,pointOnLine:_,distance:Cs.origin.distanceTo(w),object:n,face:null,faceIndex:h,uv:null,uv2:null})}}}class qD extends zn{constructor(e=new Kb,t=new Jb({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,r=e.attributes.instanceEnd,i=new Float32Array(2*t.count);for(let o=0,a=0,l=t.count;o<l;o++,a+=2)tR.fromBufferAttribute(t,o),nR.fromBufferAttribute(r,o),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+tR.distanceTo(nR);const s=new Kg(i,2,1);return e.setAttribute("instanceDistanceStart",new gi(s,1,0)),e.setAttribute("instanceDistanceEnd",new gi(s,1,1)),this}raycast(e,t){const r=this.material.worldUnits,i=e.camera;i===null&&!r&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Cs=e.ray;const o=this.matrixWorld,a=this.geometry,l=this.material;hl=l.linewidth+s,wS=a.attributes.instanceStart,GD=a.attributes.instanceEnd,a.boundingSphere===null&&a.computeBoundingSphere(),Im.copy(a.boundingSphere).applyMatrix4(o);let f;if(r)f=hl*.5;else{const h=Math.max(i.near,Im.distanceToPoint(Cs.origin));f=iR(i,h,l.resolution)}if(Im.radius+=f,Cs.intersectsSphere(Im)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Nm.copy(a.boundingBox).applyMatrix4(o);let d;if(r)d=hl*.5;else{const h=Math.max(i.near,Nm.distanceToPoint(Cs.origin));d=iR(i,h,l.resolution)}Nm.expandByScalar(d),Cs.intersectsBox(Nm)!==!1&&(r?nht(this,t):rht(this,i,t))}}class iht extends qD{constructor(e=new VD,t=new Jb({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}const sht=ie.forwardRef(function({points:e,color:t="black",vertexColors:r,linewidth:i,lineWidth:s,segments:o,dashed:a,...l},f){var d;const h=OD(S=>S.size),p=ie.useMemo(()=>o?new qD:new iht,[o]),[g]=ie.useState(()=>new Jb),y=(r==null||(d=r[0])==null?void 0:d.length)===4?4:3,b=ie.useMemo(()=>{const S=o?new Kb:new VD,m=e.map(_=>{const w=Array.isArray(_);return _ instanceof U||_ instanceof It?[_.x,_.y,_.z]:_ instanceof pe?[_.x,_.y,0]:w&&_.length===3?[_[0],_[1],_[2]]:w&&_.length===2?[_[0],_[1],0]:_});if(S.setPositions(m.flat()),r){const _=r.map(w=>w instanceof Oe?w.toArray():w);S.setColors(_.flat(),y)}return S},[e,o,r,y]);return ie.useLayoutEffect(()=>{p.computeLineDistances()},[e,p]),ie.useLayoutEffect(()=>{a?g.defines.USE_DASH="":delete g.defines.USE_DASH,g.needsUpdate=!0},[a,g]),ie.useEffect(()=>()=>b.dispose(),[b]),ie.createElement("primitive",ev({object:p,ref:f},l),ie.createElement("primitive",{object:b,attach:"geometry"}),ie.createElement("primitive",ev({object:g,attach:"material",color:t,vertexColors:Boolean(r),resolution:[h.width,h.height],linewidth:i??s,dashed:a,transparent:y===4},l)))});ED({Line:sht});const oht=()=>{const n={factor:.037,variation:.01,lines:10,speed:.001},e=eht();ie.useRef(0);const t=ie.useRef(),r=20,i=()=>Array.from({length:n.lines},(o,a)=>a*n.factor),s=()=>{const{size:o}=OD(),a=Math.ceil(o.width/r),l=o.height/2,f=h=>{for(let g=0;g<n.lines;g++){let y=[],b=0;for(let S=0;S<=a;S++){b=e(S*n.variation+h[g],S*n.variation,1);var p=Math.random()*.005;y.push(new U(S*r-o.width/2,(l+p)*b,0))}t.current.geometry.setFromPoints(y),h[g]+=n.speed}},d=ie.useMemo(()=>i(),[]);return Ldt(()=>f(d)),L.jsxs("line",{ref:t,children:[L.jsx("bufferGeometry",{attach:"geometry"}),L.jsx("lineBasicMaterial",{attach:"material",color:"black",linewidth:1})]})};return L.jsx("div",{id:"canvas-container",children:L.jsx(Jdt,{camera:{zoom:1,near:.1,far:9999,position:[0,0,100]},orthographic:!0,children:L.jsx(s,{})})})};function aht(){return L.jsxs(yR,{children:[L.jsx(krt,{}),L.jsx(uit,{}),L.jsx("main",{role:"main",className:"wrapper",children:L.jsx("div",{className:"content",children:L.jsx(irt,{})})}),L.jsx(oht,{}),L.jsx(mit,{})]})}const lht=document.getElementById("root"),cht=HD(lht);cht.render(L.jsx(Mn.StrictMode,{children:L.jsx(Fc,{children:L.jsx(aht,{})})}));
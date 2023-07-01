"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[894],{5820:function(e,t,n){n.d(t,{M:function(){return v}});var r=n(7294),i=n(6405),o=n(8868);function s(){let e=(0,r.useRef)(!1);return(0,o.L)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}var l=n(240),f=n(6681);class u extends r.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function c({children:e,isPresent:t}){let n=(0,r.useId)(),i=(0,r.useRef)(null),o=(0,r.useRef)({width:0,height:0,top:0,left:0});return(0,r.useInsertionEffect)(()=>{let{width:e,height:r,top:s,left:l}=o.current;if(t||!i.current||!e||!r)return;i.current.dataset.motionPopId=n;let f=document.createElement("style");return document.head.appendChild(f),f.sheet&&f.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${r}px !important;
            top: ${s}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(f)}},[t]),r.createElement(u,{isPresent:t,childRef:i,sizeRef:o},r.cloneElement(e,{ref:i}))}let a=({children:e,initial:t,isPresent:n,onExitComplete:i,custom:o,presenceAffectsLayout:s,mode:u})=>{let a=(0,f.h)(d),h=(0,r.useId)(),p=(0,r.useMemo)(()=>({id:h,initial:t,isPresent:n,custom:o,onExitComplete:e=>{for(let t of(a.set(e,!0),a.values()))if(!t)return;i&&i()},register:e=>(a.set(e,!1),()=>a.delete(e))}),s?void 0:[n]);return(0,r.useMemo)(()=>{a.forEach((e,t)=>a.set(t,!1))},[n]),r.useEffect(()=>{n||a.size||!i||i()},[n]),"popLayout"===u&&(e=r.createElement(c,{isPresent:n},e)),r.createElement(l.O.Provider,{value:p},e)};function d(){return new Map}var h=n(5364),p=n(5411),g=n(5487);let m=e=>e.key||"",v=({children:e,custom:t,initial:n=!0,onExitComplete:l,exitBeforeEnter:f,presenceAffectsLayout:u=!0,mode:c="sync"})=>{(0,g.k)(!f,"Replace exitBeforeEnter with mode='wait'");let d=(0,r.useContext)(h.p).forceRender||function(){let e=s(),[t,n]=(0,r.useState)(0),o=(0,r.useCallback)(()=>{e.current&&n(t+1)},[t]),l=(0,r.useCallback)(()=>i.Wi.postRender(o),[o]);return[l,t]}()[0],v=s(),y=function(e){let t=[];return r.Children.forEach(e,e=>{(0,r.isValidElement)(e)&&t.push(e)}),t}(e),E=y,w=(0,r.useRef)(new Map).current,x=(0,r.useRef)(E),L=(0,r.useRef)(new Map).current,W=(0,r.useRef)(!0);if((0,o.L)(()=>{W.current=!1,function(e,t){e.forEach(e=>{let n=m(e);t.set(n,e)})}(y,L),x.current=E}),(0,p.z)(()=>{W.current=!0,L.clear(),w.clear()}),W.current)return r.createElement(r.Fragment,null,E.map(e=>r.createElement(a,{key:m(e),isPresent:!0,initial:!!n&&void 0,presenceAffectsLayout:u,mode:c},e)));E=[...E];let R=x.current.map(m),P=y.map(m),k=R.length;for(let e=0;e<k;e++){let t=R[e];-1!==P.indexOf(t)||w.has(t)||w.set(t,void 0)}return"wait"===c&&w.size&&(E=[]),w.forEach((e,n)=>{if(-1!==P.indexOf(n))return;let i=L.get(n);if(!i)return;let o=R.indexOf(n),s=e;if(!s){let e=()=>{L.delete(n),w.delete(n);let e=x.current.findIndex(e=>e.key===n);if(x.current.splice(e,1),!w.size){if(x.current=y,!1===v.current)return;d(),l&&l()}};s=r.createElement(a,{key:m(i),isPresent:!1,onExitComplete:e,custom:t,presenceAffectsLayout:u,mode:c},i),w.set(n,s)}E.splice(o,0,s)}),E=E.map(e=>{let t=e.key;return w.has(t)?e:r.createElement(a,{key:m(e),isPresent:!0,presenceAffectsLayout:u,mode:c},e)}),r.createElement(r.Fragment,null,w.size?E:E.map(e=>(0,r.cloneElement)(e)))}},8459:function(e,t,n){n.d(t,{p:function(){return s}});var r=n(6405),i=n(7294),o=n(6014);function s(e){let t=(0,i.useRef)(0),{isStatic:n}=(0,i.useContext)(o._);(0,i.useEffect)(()=>{if(n)return;let i=({timestamp:n,delta:r})=>{t.current||(t.current=n),e(n-t.current,r)};return r.Wi.update(i,!0),()=>(0,r.Pn)(i)},[e])}},4960:function(e,t,n){n.d(t,{c:function(){return l}});var r=n(7294),i=n(3234),o=n(6014),s=n(6681);function l(e){let t=(0,s.h)(()=>(0,i.B)(e)),{isStatic:n}=(0,r.useContext)(o._);if(n){let[,n]=(0,r.useState)(e);(0,r.useEffect)(()=>t.on("change",n),[])}return t}},5204:function(e,t,n){let r,i;n.d(t,{v:function(){return I}});var o=n(3234),s=n(6681),l=n(7294),f=n(5487),u=n(6405),c=n(7367),a=n(7301);let d=new WeakMap;function h({target:e,contentRect:t,borderBoxSize:n}){var r;null===(r=d.get(e))||void 0===r||r.forEach(r=>{r({target:e,contentSize:t,get size(){return function(e,t){if(t){let{inlineSize:e,blockSize:n}=t[0];return{width:e,height:n}}return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}(e,n)}})})}function p(e){e.forEach(h)}let g=new Set;var m=n(3967),v=n(3038);let y=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),E=()=>({time:0,x:y(),y:y()}),w={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function x(e,t,n,r){let i=n[t],{length:o,position:s}=w[t],l=i.current,f=n.time;i.current=e["scroll"+s],i.scrollLength=e["scroll"+o]-e["client"+o],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=(0,m.Y)(0,i.scrollLength,i.current);let u=r-f;i.velocity=u>50?0:(0,v.R)(i.current-l,u)}let L={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},W={start:0,center:.5,end:1};function R(e,t,n=0){let r=0;if(void 0!==W[e]&&(e=W[e]),"string"==typeof e){let t=parseFloat(e);e.endsWith("px")?r=t:e.endsWith("%")?e=t/100:e.endsWith("vw")?r=t/100*document.documentElement.clientWidth:e.endsWith("vh")?r=t/100*document.documentElement.clientHeight:e=t}return"number"==typeof e&&(r=t*e),n+r}let P=[0,0];var k=n(4606),z=n(599);let b={x:0,y:0},B=new WeakMap,C=new WeakMap,O=new WeakMap,H=e=>e===document.documentElement?window:e;var S=n(8868);function A(e,t){(0,f.K)(!!(!t||t.current),`You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)}let M=()=>({scrollX:(0,o.B)(0),scrollY:(0,o.B)(0),scrollXProgress:(0,o.B)(0),scrollYProgress:(0,o.B)(0)});function I({container:e,target:t,layoutEffect:n=!0,...o}={}){let f=(0,s.h)(M),h=n?S.L:l.useEffect;return h(()=>(A("target",t),A("container",e),function(e,{container:t=document.documentElement,...n}={}){let o=O.get(t);o||(o=new Set,O.set(t,o));let s=E(),l=function(e,t,n,r={}){return{measure:()=>(function(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight})(e,r.target,n),update:t=>{var i;x(e,"x",i=n,t),x(e,"y",i,t),i.time=t,(r.offset||r.target)&&function(e,t,n){let{offset:r=L.All}=n,{target:i=e,axis:o="y"}=n,s="y"===o?"height":"width",l=i!==e?function(e,t){let n={x:0,y:0},r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if(r instanceof SVGGraphicsElement&&"getBBox"in r){let{top:e,left:t}=r.getBBox();for(n.x+=t,n.y+=e;r&&"svg"!==r.tagName;)r=r.parentNode}return n}(i,e):b,f=i===e?{width:e.scrollWidth,height:e.scrollHeight}:{width:i.clientWidth,height:i.clientHeight},u={width:e.clientWidth,height:e.clientHeight};t[o].offset.length=0;let c=!t[o].interpolate,a=r.length;for(let e=0;e<a;e++){let n=function(e,t,n,r){let i=Array.isArray(e)?e:P,o=0;return"number"==typeof e?i=[e,e]:"string"==typeof e&&(i=(e=e.trim()).includes(" ")?e.split(" "):[e,W[e]?e:"0"]),R(i[0],n,r)-R(i[1],t)}(r[e],u[s],f[s],l[o]);c||n===t[o].interpolatorOffsets[e]||(c=!0),t[o].offset[e]=n}c&&(t[o].interpolate=(0,k.s)(t[o].offset,(0,z.Y)(r)),t[o].interpolatorOffsets=[...t[o].offset]),t[o].progress=t[o].interpolate(t[o].current)}(e,n,r)},notify:()=>t(n)}}(t,e,s,n);if(o.add(l),!B.has(t)){let e=()=>{for(let e of o)e.measure()},n=()=>{for(let e of o)e.update(c.w.timestamp)},s=()=>{for(let e of o)e.notify()},l=()=>{u.Wi.read(e,!1,!0),u.Wi.update(n,!1,!0),u.Wi.update(s,!1,!0)};B.set(t,l);let f=H(t);window.addEventListener("resize",l,{passive:!0}),t!==document.documentElement&&C.set(t,"function"==typeof t?(g.add(t),i||(i=()=>{let e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};g.forEach(e=>e(t))},window.addEventListener("resize",i)),()=>{g.delete(t),!g.size&&i&&(i=void 0)}):function(e,t){r||"undefined"==typeof ResizeObserver||(r=new ResizeObserver(p));let n=(0,a.I)(e);return n.forEach(e=>{let n=d.get(e);n||(n=new Set,d.set(e,n)),n.add(t),null==r||r.observe(e)}),()=>{n.forEach(e=>{let n=d.get(e);null==n||n.delete(t),(null==n?void 0:n.size)||null==r||r.unobserve(e)})}}(t,l)),f.addEventListener("scroll",l,{passive:!0})}let f=B.get(t);return u.Wi.read(f,!1,!0),()=>{var e;(0,u.Pn)(f);let n=O.get(t);if(!n||(n.delete(l),n.size))return;let r=B.get(t);B.delete(t),r&&(H(t).removeEventListener("scroll",r),null===(e=C.get(t))||void 0===e||e(),window.removeEventListener("resize",r))}}(({x:e,y:t})=>{f.scrollX.set(e.current),f.scrollXProgress.set(e.progress),f.scrollY.set(t.current),f.scrollYProgress.set(t.progress)},{...o,container:(null==e?void 0:e.current)||void 0,target:(null==t?void 0:t.current)||void 0})),[]),f}},4002:function(e,t,n){n.d(t,{q:function(){return a}});var r=n(7294),i=n(406),o=n(4960),s=n(6014),l=n(8868),f=n(3194),u=n(7367),c=n(6917);function a(e,t={}){let{isStatic:n}=(0,r.useContext)(s._),a=(0,r.useRef)(null),d=(0,o.c)((0,i.i)(e)?e.get():e),h=()=>{a.current&&a.current.stop()};return(0,r.useInsertionEffect)(()=>d.attach((e,r)=>{if(n)return r(e);if(h(),a.current=(0,f.y)({keyframes:[d.get(),e],velocity:d.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...t,onUpdate:r}),!u.w.isProcessing){let e=performance.now()-u.w.timestamp;e<30&&(a.current.time=(0,c.X)(e))}return d.get()},h),[JSON.stringify(t)]),(0,l.L)(()=>{if((0,i.i)(e))return e.on("change",e=>d.set(parseFloat(e)))},[d]),d}},4754:function(e,t,n){n.d(t,{r:function(){return o}});var r=n(8459),i=n(4960);function o(){let e=(0,i.c)(0);return(0,r.p)(t=>e.set(t)),e}},578:function(e,t,n){n.d(t,{H:function(){return c}});var r=n(4606);let i=e=>"object"==typeof e&&e.mix,o=e=>i(e)?e.mix:void 0;var s=n(4960),l=n(6405),f=n(8868),u=n(6681);function c(e,t,n,i){let s="function"==typeof t?t:function(...e){let t=!Array.isArray(e[0]),n=t?0:-1,i=e[0+n],s=e[1+n],l=e[2+n],f=e[3+n],u=(0,r.s)(s,l,{mixer:o(l[0]),...f});return t?u(i):u}(t,n,i);return Array.isArray(e)?a(e,s):a([e],([e])=>s(e))}function a(e,t){let n=(0,u.h)(()=>[]);return function(e,t){let n=(0,s.c)(t()),r=()=>n.set(t());return r(),(0,f.L)(()=>{let t=()=>l.Wi.update(r,!1,!0),n=e.map(e=>e.on("change",t));return()=>{n.forEach(e=>e()),(0,l.Pn)(r)}}),n}(e,()=>{n.length=0;let r=e.length;for(let t=0;t<r;t++)n[t]=e[t].get();return t(n)})}},4827:function(e,t,n){n.d(t,{T:function(){return o}});var r=n(7294),i=n(4960);function o(e){var t,n;let o=(0,i.c)(e.getVelocity());return t="velocityChange",n=e=>{o.set(e)},(0,r.useInsertionEffect)(()=>e.on(t,n),[e,t,n]),o}}}]);
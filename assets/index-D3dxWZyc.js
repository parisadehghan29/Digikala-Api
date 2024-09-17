(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();function Ne(l){return l!==null&&typeof l=="object"&&"constructor"in l&&l.constructor===Object}function He(l,e){l===void 0&&(l={}),e===void 0&&(e={}),Object.keys(e).forEach(t=>{l[t]===void 0?l[t]=e[t]:Ne(e[t])&&Ne(l[t])&&Object.keys(e[t]).length>0&&He(l[t],e[t])})}const Ue={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function X(){const l=typeof document<"u"?document:{};return He(l,Ue),l}const st={document:Ue,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:l=>typeof setTimeout>"u"?(l(),null):setTimeout(l,0),cancelAnimationFrame(l){typeof setTimeout<"u"&&clearTimeout(l)}};function D(){const l=typeof window<"u"?window:{};return He(l,st),l}function Q(l){return l===void 0&&(l=""),l.trim().split(" ").filter(e=>!!e.trim())}function lt(l){const e=l;Object.keys(e).forEach(t=>{try{e[t]=null}catch{}try{delete e[t]}catch{}})}function te(l,e){return e===void 0&&(e=0),setTimeout(l,e)}function W(){return Date.now()}function at(l){const e=D();let t;return e.getComputedStyle&&(t=e.getComputedStyle(l,null)),!t&&l.currentStyle&&(t=l.currentStyle),t||(t=l.style),t}function Ae(l,e){e===void 0&&(e="x");const t=D();let s,i,a;const c=at(l);return t.WebKitCSSMatrix?(i=c.transform||c.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(r=>r.replace(",",".")).join(", ")),a=new t.WebKitCSSMatrix(i==="none"?"":i)):(a=c.MozTransform||c.OTransform||c.MsTransform||c.msTransform||c.transform||c.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),s=a.toString().split(",")),e==="x"&&(i=t.WebKitCSSMatrix?a.m41:s.length===16?parseFloat(s[12]):parseFloat(s[4])),e==="y"&&(i=t.WebKitCSSMatrix?a.m42:s.length===16?parseFloat(s[13]):parseFloat(s[5])),i||0}function oe(l){return typeof l=="object"&&l!==null&&l.constructor&&Object.prototype.toString.call(l).slice(8,-1)==="Object"}function it(l){return typeof window<"u"&&window.HTMLElement!==void 0?l instanceof HTMLElement:l&&(l.nodeType===1||l.nodeType===11)}function R(){const l=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let t=1;t<arguments.length;t+=1){const s=t<0||arguments.length<=t?void 0:arguments[t];if(s!=null&&!it(s)){const i=Object.keys(Object(s)).filter(a=>e.indexOf(a)<0);for(let a=0,c=i.length;a<c;a+=1){const r=i[a],n=Object.getOwnPropertyDescriptor(s,r);n!==void 0&&n.enumerable&&(oe(l[r])&&oe(s[r])?s[r].__swiper__?l[r]=s[r]:R(l[r],s[r]):!oe(l[r])&&oe(s[r])?(l[r]={},s[r].__swiper__?l[r]=s[r]:R(l[r],s[r])):l[r]=s[r])}}}return l}function ne(l,e,t){l.style.setProperty(e,t)}function Ke(l){let{swiper:e,targetPosition:t,side:s}=l;const i=D(),a=-e.translate;let c,r=null;const n=e.params.speed;e.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(e.cssModeFrameID);const f=t>a?"next":"prev",p=(d,b)=>f==="next"&&d>=b||f==="prev"&&d<=b,o=()=>{c=new Date().getTime(),r===null&&(r=c);const d=Math.max(Math.min((c-r)/n,1),0),b=.5-Math.cos(d*Math.PI)/2;let h=a+b*(t-a);if(p(h,t)&&(h=t),e.wrapperEl.scrollTo({[s]:h}),p(h,t))return e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[s]:h})}),void i.cancelAnimationFrame(e.cssModeFrameID);e.cssModeFrameID=i.requestAnimationFrame(o)};o()}function se(l){return l.querySelector(".swiper-slide-transform")||l.shadowRoot&&l.shadowRoot.querySelector(".swiper-slide-transform")||l}function q(l,e){e===void 0&&(e="");const t=[...l.children];return l instanceof HTMLSlotElement&&t.push(...l.assignedElements()),e?t.filter(s=>s.matches(e)):t}function rt(l,e){const t=e.contains(l);return!t&&e instanceof HTMLSlotElement?[...e.assignedElements()].includes(l):t}function he(l){try{return void console.warn(l)}catch{}}function F(l,e){e===void 0&&(e=[]);const t=document.createElement(l);return t.classList.add(...Array.isArray(e)?e:Q(e)),t}function ve(l){const e=D(),t=X(),s=l.getBoundingClientRect(),i=t.body,a=l.clientTop||i.clientTop||0,c=l.clientLeft||i.clientLeft||0,r=l===e?e.scrollY:l.scrollTop,n=l===e?e.scrollX:l.scrollLeft;return{top:s.top+r-a,left:s.left+n-c}}function ot(l,e){const t=[];for(;l.previousElementSibling;){const s=l.previousElementSibling;e?s.matches(e)&&t.push(s):t.push(s),l=s}return t}function nt(l,e){const t=[];for(;l.nextElementSibling;){const s=l.nextElementSibling;e?s.matches(e)&&t.push(s):t.push(s),l=s}return t}function J(l,e){return D().getComputedStyle(l,null).getPropertyValue(e)}function ce(l){let e,t=l;if(t){for(e=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(e+=1);return e}}function ee(l,e){const t=[];let s=l.parentElement;for(;s;)e?s.matches(e)&&t.push(s):t.push(s),s=s.parentElement;return t}function de(l,e){e&&l.addEventListener("transitionend",function t(s){s.target===l&&(e.call(l,s),l.removeEventListener("transitionend",t))})}function Ie(l,e,t){const s=D();return t?l[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(s.getComputedStyle(l,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(s.getComputedStyle(l,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom")):l.offsetWidth}function O(l){return(Array.isArray(l)?l:[l]).filter(e=>!!e)}function ge(l){return e=>Math.abs(e)>0&&l.browser&&l.browser.need3dFix&&Math.abs(e)%90==0?e+.001:e}let Te,Ce,ze;function dt(){const l=D(),e=X();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in l||l.DocumentTouch&&e instanceof l.DocumentTouch)}}function Ze(){return Te||(Te=dt()),Te}function ct(l){let{userAgent:e}=l===void 0?{}:l;const t=Ze(),s=D(),i=s.navigator.platform,a=e||s.navigator.userAgent,c={ios:!1,android:!1},r=s.screen.width,n=s.screen.height,f=a.match(/(Android);?[\s\/]+([\d.]+)?/);let p=a.match(/(iPad).*OS\s([\d_]+)/);const o=a.match(/(iPod)(.*OS\s([\d_]+))?/),d=!p&&a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),b=i==="Win32";let h=i==="MacIntel";return!p&&h&&t.touch&&["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"].indexOf(`${r}x${n}`)>=0&&(p=a.match(/(Version)\/([\d.]+)/),p||(p=[0,1,"13_0_0"]),h=!1),f&&!b&&(c.os="android",c.android=!0),(p||d||o)&&(c.os="ios",c.ios=!0),c}function Qe(l){return l===void 0&&(l={}),Ce||(Ce=ct(l)),Ce}function pt(){const l=D(),e=Qe();let t=!1;function s(){const c=l.navigator.userAgent.toLowerCase();return c.indexOf("safari")>=0&&c.indexOf("chrome")<0&&c.indexOf("android")<0}if(s()){const c=String(l.navigator.userAgent);if(c.includes("Version/")){const[r,n]=c.split("Version/")[1].split(" ")[0].split(".").map(f=>Number(f));t=r<16||r===16&&n<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(l.navigator.userAgent),a=s();return{isSafari:t||a,needPerspectiveFix:t,need3dFix:a||i&&e.ios,isWebView:i}}function ft(){return ze||(ze=pt()),ze}function bt(l){let{swiper:e,on:t,emit:s}=l;const i=D();let a=null,c=null;const r=()=>{e&&!e.destroyed&&e.initialized&&(s("beforeResize"),s("resize"))},n=()=>{e&&!e.destroyed&&e.initialized&&s("orientationchange")};t("init",()=>{e.params.resizeObserver&&i.ResizeObserver!==void 0?e&&!e.destroyed&&e.initialized&&(a=new ResizeObserver(f=>{c=i.requestAnimationFrame(()=>{const{width:p,height:o}=e;let d=p,b=o;f.forEach(h=>{let{contentBoxSize:g,contentRect:x,target:u}=h;u&&u!==e.el||(d=x?x.width:(g[0]||g).inlineSize,b=x?x.height:(g[0]||g).blockSize)}),d===p&&b===o||r()})}),a.observe(e.el)):(i.addEventListener("resize",r),i.addEventListener("orientationchange",n))}),t("destroy",()=>{c&&i.cancelAnimationFrame(c),a&&a.unobserve&&e.el&&(a.unobserve(e.el),a=null),i.removeEventListener("resize",r),i.removeEventListener("orientationchange",n)})}function xt(l){let{swiper:e,extendParams:t,on:s,emit:i}=l;const a=[],c=D(),r=function(n,f){f===void 0&&(f={});const p=new(c.MutationObserver||c.WebkitMutationObserver)(o=>{if(e.__preventObserver__)return;if(o.length===1)return void i("observerUpdate",o[0]);const d=function(){i("observerUpdate",o[0])};c.requestAnimationFrame?c.requestAnimationFrame(d):c.setTimeout(d,0)});p.observe(n,{attributes:f.attributes===void 0||f.attributes,childList:e.isElement||(f.childList===void 0||f).childList,characterData:f.characterData===void 0||f.characterData}),a.push(p)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),s("init",()=>{if(e.params.observer){if(e.params.observeParents){const n=ee(e.hostEl);for(let f=0;f<n.length;f+=1)r(n[f])}r(e.hostEl,{childList:e.params.observeSlideChildren}),r(e.wrapperEl,{attributes:!1})}}),s("destroy",()=>{a.forEach(n=>{n.disconnect()}),a.splice(0,a.length)})}var ut={on(l,e,t){const s=this;if(!s.eventsListeners||s.destroyed||typeof e!="function")return s;const i=t?"unshift":"push";return l.split(" ").forEach(a=>{s.eventsListeners[a]||(s.eventsListeners[a]=[]),s.eventsListeners[a][i](e)}),s},once(l,e,t){const s=this;if(!s.eventsListeners||s.destroyed||typeof e!="function")return s;function i(){s.off(l,i),i.__emitterProxy&&delete i.__emitterProxy;for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];e.apply(s,c)}return i.__emitterProxy=e,s.on(l,i,t)},onAny(l,e){const t=this;if(!t.eventsListeners||t.destroyed||typeof l!="function")return t;const s=e?"unshift":"push";return t.eventsAnyListeners.indexOf(l)<0&&t.eventsAnyListeners[s](l),t},offAny(l){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const t=e.eventsAnyListeners.indexOf(l);return t>=0&&e.eventsAnyListeners.splice(t,1),e},off(l,e){const t=this;return!t.eventsListeners||t.destroyed||t.eventsListeners&&l.split(" ").forEach(s=>{e===void 0?t.eventsListeners[s]=[]:t.eventsListeners[s]&&t.eventsListeners[s].forEach((i,a)=>{(i===e||i.__emitterProxy&&i.__emitterProxy===e)&&t.eventsListeners[s].splice(a,1)})}),t},emit(){const l=this;if(!l.eventsListeners||l.destroyed||!l.eventsListeners)return l;let e,t,s;for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];return typeof a[0]=="string"||Array.isArray(a[0])?(e=a[0],t=a.slice(1,a.length),s=l):(e=a[0].events,t=a[0].data,s=a[0].context||l),t.unshift(s),(Array.isArray(e)?e:e.split(" ")).forEach(r=>{l.eventsAnyListeners&&l.eventsAnyListeners.length&&l.eventsAnyListeners.forEach(n=>{n.apply(s,[r,...t])}),l.eventsListeners&&l.eventsListeners[r]&&l.eventsListeners[r].forEach(n=>{n.apply(s,t)})}),l}};function ht(){const l=this;let e,t;const s=l.el;e=l.params.width!==void 0&&l.params.width!==null?l.params.width:s.clientWidth,t=l.params.height!==void 0&&l.params.height!==null?l.params.height:s.clientHeight,e===0&&l.isHorizontal()||t===0&&l.isVertical()||(e=e-parseInt(J(s,"padding-left")||0,10)-parseInt(J(s,"padding-right")||0,10),t=t-parseInt(J(s,"padding-top")||0,10)-parseInt(J(s,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),Object.assign(l,{width:e,height:t,size:l.isHorizontal()?e:t}))}function vt(){const l=this;function e(m,v){return parseFloat(m.getPropertyValue(l.getDirectionLabel(v))||0)}const t=l.params,{wrapperEl:s,slidesEl:i,size:a,rtlTranslate:c,wrongRTL:r}=l,n=l.virtual&&t.virtual.enabled,f=n?l.virtual.slides.length:l.slides.length,p=q(i,`.${l.params.slideClass}, swiper-slide`),o=n?l.virtual.slides.length:p.length;let d=[];const b=[],h=[];let g=t.slidesOffsetBefore;typeof g=="function"&&(g=t.slidesOffsetBefore.call(l));let x=t.slidesOffsetAfter;typeof x=="function"&&(x=t.slidesOffsetAfter.call(l));const u=l.snapGrid.length,w=l.slidesGrid.length;let E=t.spaceBetween,S=-g,T=0,A=0;if(a===void 0)return;typeof E=="string"&&E.indexOf("%")>=0?E=parseFloat(E.replace("%",""))/100*a:typeof E=="string"&&(E=parseFloat(E)),l.virtualSize=-E,p.forEach(m=>{c?m.style.marginLeft="":m.style.marginRight="",m.style.marginBottom="",m.style.marginTop=""}),t.centeredSlides&&t.cssMode&&(ne(s,"--swiper-centered-offset-before",""),ne(s,"--swiper-centered-offset-after",""));const j=t.grid&&t.grid.rows>1&&l.grid;let z;j?l.grid.initSlides(p):l.grid&&l.grid.unsetSlides();const k=t.slidesPerView==="auto"&&t.breakpoints&&Object.keys(t.breakpoints).filter(m=>t.breakpoints[m].slidesPerView!==void 0).length>0;for(let m=0;m<o;m+=1){let v;if(z=0,p[m]&&(v=p[m]),j&&l.grid.updateSlide(m,v,p),!p[m]||J(v,"display")!=="none"){if(t.slidesPerView==="auto"){k&&(p[m].style[l.getDirectionLabel("width")]="");const y=getComputedStyle(v),M=v.style.transform,L=v.style.webkitTransform;if(M&&(v.style.transform="none"),L&&(v.style.webkitTransform="none"),t.roundLengths)z=l.isHorizontal()?Ie(v,"width",!0):Ie(v,"height",!0);else{const C=e(y,"width"),I=e(y,"padding-left"),P=e(y,"padding-right"),H=e(y,"margin-left"),B=e(y,"margin-right"),Y=y.getPropertyValue("box-sizing");if(Y&&Y==="border-box")z=C+H+B;else{const{clientWidth:$,offsetWidth:V}=v;z=C+I+P+H+B+(V-$)}}M&&(v.style.transform=M),L&&(v.style.webkitTransform=L),t.roundLengths&&(z=Math.floor(z))}else z=(a-(t.slidesPerView-1)*E)/t.slidesPerView,t.roundLengths&&(z=Math.floor(z)),p[m]&&(p[m].style[l.getDirectionLabel("width")]=`${z}px`);p[m]&&(p[m].swiperSlideSize=z),h.push(z),t.centeredSlides?(S=S+z/2+T/2+E,T===0&&m!==0&&(S=S-a/2-E),m===0&&(S=S-a/2-E),Math.abs(S)<.001&&(S=0),t.roundLengths&&(S=Math.floor(S)),A%t.slidesPerGroup==0&&d.push(S),b.push(S)):(t.roundLengths&&(S=Math.floor(S)),(A-Math.min(l.params.slidesPerGroupSkip,A))%l.params.slidesPerGroup==0&&d.push(S),b.push(S),S=S+z+E),l.virtualSize+=z+E,T=z,A+=1}}if(l.virtualSize=Math.max(l.virtualSize,a)+x,c&&r&&(t.effect==="slide"||t.effect==="coverflow")&&(s.style.width=`${l.virtualSize+E}px`),t.setWrapperSize&&(s.style[l.getDirectionLabel("width")]=`${l.virtualSize+E}px`),j&&l.grid.updateWrapperSize(z,d),!t.centeredSlides){const m=[];for(let v=0;v<d.length;v+=1){let y=d[v];t.roundLengths&&(y=Math.floor(y)),d[v]<=l.virtualSize-a&&m.push(y)}d=m,Math.floor(l.virtualSize-a)-Math.floor(d[d.length-1])>1&&d.push(l.virtualSize-a)}if(n&&t.loop){const m=h[0]+E;if(t.slidesPerGroup>1){const v=Math.ceil((l.virtual.slidesBefore+l.virtual.slidesAfter)/t.slidesPerGroup),y=m*t.slidesPerGroup;for(let M=0;M<v;M+=1)d.push(d[d.length-1]+y)}for(let v=0;v<l.virtual.slidesBefore+l.virtual.slidesAfter;v+=1)t.slidesPerGroup===1&&d.push(d[d.length-1]+m),b.push(b[b.length-1]+m),l.virtualSize+=m}if(d.length===0&&(d=[0]),E!==0){const m=l.isHorizontal()&&c?"marginLeft":l.getDirectionLabel("marginRight");p.filter((v,y)=>!(t.cssMode&&!t.loop)||y!==p.length-1).forEach(v=>{v.style[m]=`${E}px`})}if(t.centeredSlides&&t.centeredSlidesBounds){let m=0;h.forEach(y=>{m+=y+(E||0)}),m-=E;const v=m>a?m-a:0;d=d.map(y=>y<=0?-g:y>v?v+x:y)}if(t.centerInsufficientSlides){let m=0;h.forEach(y=>{m+=y+(E||0)}),m-=E;const v=(t.slidesOffsetBefore||0)+(t.slidesOffsetAfter||0);if(m+v<a){const y=(a-m-v)/2;d.forEach((M,L)=>{d[L]=M-y}),b.forEach((M,L)=>{b[L]=M+y})}}if(Object.assign(l,{slides:p,snapGrid:d,slidesGrid:b,slidesSizesGrid:h}),t.centeredSlides&&t.cssMode&&!t.centeredSlidesBounds){ne(s,"--swiper-centered-offset-before",-d[0]+"px"),ne(s,"--swiper-centered-offset-after",l.size/2-h[h.length-1]/2+"px");const m=-l.snapGrid[0],v=-l.slidesGrid[0];l.snapGrid=l.snapGrid.map(y=>y+m),l.slidesGrid=l.slidesGrid.map(y=>y+v)}if(o!==f&&l.emit("slidesLengthChange"),d.length!==u&&(l.params.watchOverflow&&l.checkOverflow(),l.emit("snapGridLengthChange")),b.length!==w&&l.emit("slidesGridLengthChange"),t.watchSlidesProgress&&l.updateSlidesOffset(),l.emit("slidesUpdated"),!(n||t.cssMode||t.effect!=="slide"&&t.effect!=="fade")){const m=`${t.containerModifierClass}backface-hidden`,v=l.el.classList.contains(m);o<=t.maxBackfaceHiddenSlides?v||l.el.classList.add(m):v&&l.el.classList.remove(m)}}function mt(l){const e=this,t=[],s=e.virtual&&e.params.virtual.enabled;let i,a=0;typeof l=="number"?e.setTransition(l):l===!0&&e.setTransition(e.params.speed);const c=r=>s?e.slides[e.getSlideIndexByData(r)]:e.slides[r];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(r=>{t.push(r)});else for(i=0;i<Math.ceil(e.params.slidesPerView);i+=1){const r=e.activeIndex+i;if(r>e.slides.length&&!s)break;t.push(c(r))}else t.push(c(e.activeIndex));for(i=0;i<t.length;i+=1)if(t[i]!==void 0){const r=t[i].offsetHeight;a=r>a?r:a}(a||a===0)&&(e.wrapperEl.style.height=`${a}px`)}function gt(){const l=this,e=l.slides,t=l.isElement?l.isHorizontal()?l.wrapperEl.offsetLeft:l.wrapperEl.offsetTop:0;for(let s=0;s<e.length;s+=1)e[s].swiperSlideOffset=(l.isHorizontal()?e[s].offsetLeft:e[s].offsetTop)-t-l.cssOverflowAdjustment()}const qe=(l,e,t)=>{e&&!l.classList.contains(t)?l.classList.add(t):!e&&l.classList.contains(t)&&l.classList.remove(t)};function wt(l){l===void 0&&(l=this&&this.translate||0);const e=this,t=e.params,{slides:s,rtlTranslate:i,snapGrid:a}=e;if(s.length===0)return;s[0].swiperSlideOffset===void 0&&e.updateSlidesOffset();let c=-l;i&&(c=l),e.visibleSlidesIndexes=[],e.visibleSlides=[];let r=t.spaceBetween;typeof r=="string"&&r.indexOf("%")>=0?r=parseFloat(r.replace("%",""))/100*e.size:typeof r=="string"&&(r=parseFloat(r));for(let n=0;n<s.length;n+=1){const f=s[n];let p=f.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(p-=s[0].swiperSlideOffset);const o=(c+(t.centeredSlides?e.minTranslate():0)-p)/(f.swiperSlideSize+r),d=(c-a[0]+(t.centeredSlides?e.minTranslate():0)-p)/(f.swiperSlideSize+r),b=-(c-p),h=b+e.slidesSizesGrid[n],g=b>=0&&b<=e.size-e.slidesSizesGrid[n],x=b>=0&&b<e.size-1||h>1&&h<=e.size||b<=0&&h>=e.size;x&&(e.visibleSlides.push(f),e.visibleSlidesIndexes.push(n)),qe(f,x,t.slideVisibleClass),qe(f,g,t.slideFullyVisibleClass),f.progress=i?-o:o,f.originalProgress=i?-d:d}}function yt(l){const e=this;if(l===void 0){const p=e.rtlTranslate?-1:1;l=e&&e.translate&&e.translate*p||0}const t=e.params,s=e.maxTranslate()-e.minTranslate();let{progress:i,isBeginning:a,isEnd:c,progressLoop:r}=e;const n=a,f=c;if(s===0)i=0,a=!0,c=!0;else{i=(l-e.minTranslate())/s;const p=Math.abs(l-e.minTranslate())<1,o=Math.abs(l-e.maxTranslate())<1;a=p||i<=0,c=o||i>=1,p&&(i=0),o&&(i=1)}if(t.loop){const p=e.getSlideIndexByData(0),o=e.getSlideIndexByData(e.slides.length-1),d=e.slidesGrid[p],b=e.slidesGrid[o],h=e.slidesGrid[e.slidesGrid.length-1],g=Math.abs(l);r=g>=d?(g-d)/h:(g+h-b)/h,r>1&&(r-=1)}Object.assign(e,{progress:i,progressLoop:r,isBeginning:a,isEnd:c}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&e.updateSlidesProgress(l),a&&!n&&e.emit("reachBeginning toEdge"),c&&!f&&e.emit("reachEnd toEdge"),(n&&!a||f&&!c)&&e.emit("fromEdge"),e.emit("progress",i)}const ke=(l,e,t)=>{e&&!l.classList.contains(t)?l.classList.add(t):!e&&l.classList.contains(t)&&l.classList.remove(t)};function St(){const l=this,{slides:e,params:t,slidesEl:s,activeIndex:i}=l,a=l.virtual&&t.virtual.enabled,c=l.grid&&t.grid&&t.grid.rows>1,r=o=>q(s,`.${t.slideClass}${o}, swiper-slide${o}`)[0];let n,f,p;if(a)if(t.loop){let o=i-l.virtual.slidesBefore;o<0&&(o=l.virtual.slides.length+o),o>=l.virtual.slides.length&&(o-=l.virtual.slides.length),n=r(`[data-swiper-slide-index="${o}"]`)}else n=r(`[data-swiper-slide-index="${i}"]`);else c?(n=e.filter(o=>o.column===i)[0],p=e.filter(o=>o.column===i+1)[0],f=e.filter(o=>o.column===i-1)[0]):n=e[i];n&&(c||(p=nt(n,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!p&&(p=e[0]),f=ot(n,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!f===0&&(f=e[e.length-1]))),e.forEach(o=>{ke(o,o===n,t.slideActiveClass),ke(o,o===p,t.slideNextClass),ke(o,o===f,t.slidePrevClass)}),l.emitSlidesClasses()}const ue=(l,e)=>{if(!l||l.destroyed||!l.params)return;const t=e.closest(l.isElement?"swiper-slide":`.${l.params.slideClass}`);if(t){let s=t.querySelector(`.${l.params.lazyPreloaderClass}`);!s&&l.isElement&&(t.shadowRoot?s=t.shadowRoot.querySelector(`.${l.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{t.shadowRoot&&(s=t.shadowRoot.querySelector(`.${l.params.lazyPreloaderClass}`),s&&s.remove())})),s&&s.remove()}},je=(l,e)=>{if(!l.slides[e])return;const t=l.slides[e].querySelector('[loading="lazy"]');t&&t.removeAttribute("loading")},$e=l=>{if(!l||l.destroyed||!l.params)return;let e=l.params.lazyPreloadPrevNext;const t=l.slides.length;if(!t||!e||e<0)return;e=Math.min(e,t);const s=l.params.slidesPerView==="auto"?l.slidesPerViewDynamic():Math.ceil(l.params.slidesPerView),i=l.activeIndex;if(l.params.grid&&l.params.grid.rows>1){const c=i,r=[c-e];return r.push(...Array.from({length:e}).map((n,f)=>c+s+f)),void l.slides.forEach((n,f)=>{r.includes(n.column)&&je(l,f)})}const a=i+s-1;if(l.params.rewind||l.params.loop)for(let c=i-e;c<=a+e;c+=1){const r=(c%t+t)%t;(r<i||r>a)&&je(l,r)}else for(let c=Math.max(i-e,0);c<=Math.min(a+e,t-1);c+=1)c!==i&&(c>a||c<i)&&je(l,c)};function Mt(l){const{slidesGrid:e,params:t}=l,s=l.rtlTranslate?l.translate:-l.translate;let i;for(let a=0;a<e.length;a+=1)e[a+1]!==void 0?s>=e[a]&&s<e[a+1]-(e[a+1]-e[a])/2?i=a:s>=e[a]&&s<e[a+1]&&(i=a+1):s>=e[a]&&(i=a);return t.normalizeSlideIndex&&(i<0||i===void 0)&&(i=0),i}function Et(l){const e=this,t=e.rtlTranslate?e.translate:-e.translate,{snapGrid:s,params:i,activeIndex:a,realIndex:c,snapIndex:r}=e;let n,f=l;const p=b=>{let h=b-e.virtual.slidesBefore;return h<0&&(h=e.virtual.slides.length+h),h>=e.virtual.slides.length&&(h-=e.virtual.slides.length),h};if(f===void 0&&(f=Mt(e)),s.indexOf(t)>=0)n=s.indexOf(t);else{const b=Math.min(i.slidesPerGroupSkip,f);n=b+Math.floor((f-b)/i.slidesPerGroup)}if(n>=s.length&&(n=s.length-1),f===a&&!e.params.loop)return void(n!==r&&(e.snapIndex=n,e.emit("snapIndexChange")));if(f===a&&e.params.loop&&e.virtual&&e.params.virtual.enabled)return void(e.realIndex=p(f));const o=e.grid&&i.grid&&i.grid.rows>1;let d;if(e.virtual&&i.virtual.enabled&&i.loop)d=p(f);else if(o){const b=e.slides.filter(g=>g.column===f)[0];let h=parseInt(b.getAttribute("data-swiper-slide-index"),10);Number.isNaN(h)&&(h=Math.max(e.slides.indexOf(b),0)),d=Math.floor(h/i.grid.rows)}else if(e.slides[f]){const b=e.slides[f].getAttribute("data-swiper-slide-index");d=b?parseInt(b,10):f}else d=f;Object.assign(e,{previousSnapIndex:r,snapIndex:n,previousRealIndex:c,realIndex:d,previousIndex:a,activeIndex:f}),e.initialized&&$e(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(c!==d&&e.emit("realIndexChange"),e.emit("slideChange"))}function Tt(l,e){const t=this,s=t.params;let i=l.closest(`.${s.slideClass}, swiper-slide`);!i&&t.isElement&&e&&e.length>1&&e.includes(l)&&[...e.slice(e.indexOf(l)+1,e.length)].forEach(r=>{!i&&r.matches&&r.matches(`.${s.slideClass}, swiper-slide`)&&(i=r)});let a,c=!1;if(i){for(let r=0;r<t.slides.length;r+=1)if(t.slides[r]===i){c=!0,a=r;break}}if(!i||!c)return t.clickedSlide=void 0,void(t.clickedIndex=void 0);t.clickedSlide=i,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=a,s.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}var Ct={updateSize:ht,updateSlides:vt,updateAutoHeight:mt,updateSlidesOffset:gt,updateSlidesProgress:wt,updateProgress:yt,updateSlidesClasses:St,updateActiveIndex:Et,updateClickedSlide:Tt};function zt(l){l===void 0&&(l=this.isHorizontal()?"x":"y");const{params:e,rtlTranslate:t,translate:s,wrapperEl:i}=this;if(e.virtualTranslate)return t?-s:s;if(e.cssMode)return s;let a=Ae(i,l);return a+=this.cssOverflowAdjustment(),t&&(a=-a),a||0}function kt(l,e){const t=this,{rtlTranslate:s,params:i,wrapperEl:a,progress:c}=t;let r=0,n=0,f;t.isHorizontal()?r=s?-l:l:n=l,i.roundLengths&&(r=Math.floor(r),n=Math.floor(n)),t.previousTranslate=t.translate,t.translate=t.isHorizontal()?r:n,i.cssMode?a[t.isHorizontal()?"scrollLeft":"scrollTop"]=t.isHorizontal()?-r:-n:i.virtualTranslate||(t.isHorizontal()?r-=t.cssOverflowAdjustment():n-=t.cssOverflowAdjustment(),a.style.transform=`translate3d(${r}px, ${n}px, 0px)`);const p=t.maxTranslate()-t.minTranslate();f=p===0?0:(l-t.minTranslate())/p,f!==c&&t.updateProgress(l),t.emit("setTranslate",t.translate,e)}function jt(){return-this.snapGrid[0]}function Lt(){return-this.snapGrid[this.snapGrid.length-1]}function Pt(l,e,t,s,i){l===void 0&&(l=0),e===void 0&&(e=this.params.speed),t===void 0&&(t=!0),s===void 0&&(s=!0);const a=this,{params:c,wrapperEl:r}=a;if(a.animating&&c.preventInteractionOnTransition)return!1;const n=a.minTranslate(),f=a.maxTranslate();let p;if(p=s&&l>n?n:s&&l<f?f:l,a.updateProgress(p),c.cssMode){const o=a.isHorizontal();if(e===0)r[o?"scrollLeft":"scrollTop"]=-p;else{if(!a.support.smoothScroll)return Ke({swiper:a,targetPosition:-p,side:o?"left":"top"}),!0;r.scrollTo({[o?"left":"top"]:-p,behavior:"smooth"})}return!0}return e===0?(a.setTransition(0),a.setTranslate(p),t&&(a.emit("beforeTransitionStart",e,i),a.emit("transitionEnd"))):(a.setTransition(e),a.setTranslate(p),t&&(a.emit("beforeTransitionStart",e,i),a.emit("transitionStart")),a.animating||(a.animating=!0,a.onTranslateToWrapperTransitionEnd||(a.onTranslateToWrapperTransitionEnd=function(o){a&&!a.destroyed&&o.target===this&&(a.wrapperEl.removeEventListener("transitionend",a.onTranslateToWrapperTransitionEnd),a.onTranslateToWrapperTransitionEnd=null,delete a.onTranslateToWrapperTransitionEnd,a.animating=!1,t&&a.emit("transitionEnd"))}),a.wrapperEl.addEventListener("transitionend",a.onTranslateToWrapperTransitionEnd))),!0}var At={getTranslate:zt,setTranslate:kt,minTranslate:jt,maxTranslate:Lt,translateTo:Pt};function It(l,e){const t=this;t.params.cssMode||(t.wrapperEl.style.transitionDuration=`${l}ms`,t.wrapperEl.style.transitionDelay=l===0?"0ms":""),t.emit("setTransition",l,e)}function Je(l){let{swiper:e,runCallbacks:t,direction:s,step:i}=l;const{activeIndex:a,previousIndex:c}=e;let r=s;if(r||(r=a>c?"next":a<c?"prev":"reset"),e.emit(`transition${i}`),t&&a!==c){if(r==="reset")return void e.emit(`slideResetTransition${i}`);e.emit(`slideChangeTransition${i}`),r==="next"?e.emit(`slideNextTransition${i}`):e.emit(`slidePrevTransition${i}`)}}function $t(l,e){l===void 0&&(l=!0);const t=this,{params:s}=t;s.cssMode||(s.autoHeight&&t.updateAutoHeight(),Je({swiper:t,runCallbacks:l,direction:e,step:"Start"}))}function Ht(l,e){l===void 0&&(l=!0);const t=this,{params:s}=t;t.animating=!1,s.cssMode||(t.setTransition(0),Je({swiper:t,runCallbacks:l,direction:e,step:"End"}))}var Bt={setTransition:It,transitionStart:$t,transitionEnd:Ht};function Ot(l,e,t,s,i){l===void 0&&(l=0),t===void 0&&(t=!0),typeof l=="string"&&(l=parseInt(l,10));const a=this;let c=l;c<0&&(c=0);const{params:r,snapGrid:n,slidesGrid:f,previousIndex:p,activeIndex:o,rtlTranslate:d,wrapperEl:b,enabled:h}=a;if(!h&&!s&&!i||a.destroyed||a.animating&&r.preventInteractionOnTransition)return!1;e===void 0&&(e=a.params.speed);const g=Math.min(a.params.slidesPerGroupSkip,c);let x=g+Math.floor((c-g)/a.params.slidesPerGroup);x>=n.length&&(x=n.length-1);const u=-n[x];if(r.normalizeSlideIndex)for(let S=0;S<f.length;S+=1){const T=-Math.floor(100*u),A=Math.floor(100*f[S]),j=Math.floor(100*f[S+1]);f[S+1]!==void 0?T>=A&&T<j-(j-A)/2?c=S:T>=A&&T<j&&(c=S+1):T>=A&&(c=S)}if(a.initialized&&c!==o&&(!a.allowSlideNext&&(d?u>a.translate&&u>a.minTranslate():u<a.translate&&u<a.minTranslate())||!a.allowSlidePrev&&u>a.translate&&u>a.maxTranslate()&&(o||0)!==c))return!1;let w;c!==(p||0)&&t&&a.emit("beforeSlideChangeStart"),a.updateProgress(u),w=c>o?"next":c<o?"prev":"reset";const E=a.virtual&&a.params.virtual.enabled;if(!(E&&i)&&(d&&-u===a.translate||!d&&u===a.translate))return a.updateActiveIndex(c),r.autoHeight&&a.updateAutoHeight(),a.updateSlidesClasses(),r.effect!=="slide"&&a.setTranslate(u),w!=="reset"&&(a.transitionStart(t,w),a.transitionEnd(t,w)),!1;if(r.cssMode){const S=a.isHorizontal(),T=d?u:-u;if(e===0)E&&(a.wrapperEl.style.scrollSnapType="none",a._immediateVirtual=!0),E&&!a._cssModeVirtualInitialSet&&a.params.initialSlide>0?(a._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{b[S?"scrollLeft":"scrollTop"]=T})):b[S?"scrollLeft":"scrollTop"]=T,E&&requestAnimationFrame(()=>{a.wrapperEl.style.scrollSnapType="",a._immediateVirtual=!1});else{if(!a.support.smoothScroll)return Ke({swiper:a,targetPosition:T,side:S?"left":"top"}),!0;b.scrollTo({[S?"left":"top"]:T,behavior:"smooth"})}return!0}return a.setTransition(e),a.setTranslate(u),a.updateActiveIndex(c),a.updateSlidesClasses(),a.emit("beforeTransitionStart",e,s),a.transitionStart(t,w),e===0?a.transitionEnd(t,w):a.animating||(a.animating=!0,a.onSlideToWrapperTransitionEnd||(a.onSlideToWrapperTransitionEnd=function(S){a&&!a.destroyed&&S.target===this&&(a.wrapperEl.removeEventListener("transitionend",a.onSlideToWrapperTransitionEnd),a.onSlideToWrapperTransitionEnd=null,delete a.onSlideToWrapperTransitionEnd,a.transitionEnd(t,w))}),a.wrapperEl.addEventListener("transitionend",a.onSlideToWrapperTransitionEnd)),!0}function Vt(l,e,t,s){l===void 0&&(l=0),t===void 0&&(t=!0),typeof l=="string"&&(l=parseInt(l,10));const i=this;if(i.destroyed)return;e===void 0&&(e=i.params.speed);const a=i.grid&&i.params.grid&&i.params.grid.rows>1;let c=l;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)c+=i.virtual.slidesBefore;else{let r;if(a){const d=c*i.params.grid.rows;r=i.slides.filter(b=>1*b.getAttribute("data-swiper-slide-index")===d)[0].column}else r=i.getSlideIndexByData(c);const n=a?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:f}=i.params;let p=i.params.slidesPerView;p==="auto"?p=i.slidesPerViewDynamic():(p=Math.ceil(parseFloat(i.params.slidesPerView,10)),f&&p%2==0&&(p+=1));let o=n-r<p;if(f&&(o=o||r<Math.ceil(p/2)),s&&f&&i.params.slidesPerView!=="auto"&&!a&&(o=!1),o){const d=f?r<i.activeIndex?"prev":"next":r-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:d,slideTo:!0,activeSlideIndex:d==="next"?r+1:r-n+1,slideRealIndex:d==="next"?i.realIndex:void 0})}if(a){const d=c*i.params.grid.rows;c=i.slides.filter(b=>1*b.getAttribute("data-swiper-slide-index")===d)[0].column}else c=i.getSlideIndexByData(c)}return requestAnimationFrame(()=>{i.slideTo(c,e,t,s)}),i}function Dt(l,e,t){e===void 0&&(e=!0);const s=this,{enabled:i,params:a,animating:c}=s;if(!i||s.destroyed)return s;l===void 0&&(l=s.params.speed);let r=a.slidesPerGroup;a.slidesPerView==="auto"&&a.slidesPerGroup===1&&a.slidesPerGroupAuto&&(r=Math.max(s.slidesPerViewDynamic("current",!0),1));const n=s.activeIndex<a.slidesPerGroupSkip?1:r,f=s.virtual&&a.virtual.enabled;if(a.loop){if(c&&!f&&a.loopPreventsSliding)return!1;if(s.loopFix({direction:"next"}),s._clientLeft=s.wrapperEl.clientLeft,s.activeIndex===s.slides.length-1&&a.cssMode)return requestAnimationFrame(()=>{s.slideTo(s.activeIndex+n,l,e,t)}),!0}return a.rewind&&s.isEnd?s.slideTo(0,l,e,t):s.slideTo(s.activeIndex+n,l,e,t)}function Gt(l,e,t){e===void 0&&(e=!0);const s=this,{params:i,snapGrid:a,slidesGrid:c,rtlTranslate:r,enabled:n,animating:f}=s;if(!n||s.destroyed)return s;l===void 0&&(l=s.params.speed);const p=s.virtual&&i.virtual.enabled;if(i.loop){if(f&&!p&&i.loopPreventsSliding)return!1;s.loopFix({direction:"prev"}),s._clientLeft=s.wrapperEl.clientLeft}function o(x){return x<0?-Math.floor(Math.abs(x)):Math.floor(x)}const d=o(r?s.translate:-s.translate),b=a.map(x=>o(x));let h=a[b.indexOf(d)-1];if(h===void 0&&i.cssMode){let x;a.forEach((u,w)=>{d>=u&&(x=w)}),x!==void 0&&(h=a[x>0?x-1:x])}let g=0;if(h!==void 0&&(g=c.indexOf(h),g<0&&(g=s.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(g=g-s.slidesPerViewDynamic("previous",!0)+1,g=Math.max(g,0))),i.rewind&&s.isBeginning){const x=s.params.virtual&&s.params.virtual.enabled&&s.virtual?s.virtual.slides.length-1:s.slides.length-1;return s.slideTo(x,l,e,t)}return i.loop&&s.activeIndex===0&&i.cssMode?(requestAnimationFrame(()=>{s.slideTo(g,l,e,t)}),!0):s.slideTo(g,l,e,t)}function Nt(l,e,t){e===void 0&&(e=!0);const s=this;if(!s.destroyed)return l===void 0&&(l=s.params.speed),s.slideTo(s.activeIndex,l,e,t)}function qt(l,e,t,s){e===void 0&&(e=!0),s===void 0&&(s=.5);const i=this;if(i.destroyed)return;l===void 0&&(l=i.params.speed);let a=i.activeIndex;const c=Math.min(i.params.slidesPerGroupSkip,a),r=c+Math.floor((a-c)/i.params.slidesPerGroup),n=i.rtlTranslate?i.translate:-i.translate;if(n>=i.snapGrid[r]){const f=i.snapGrid[r];n-f>(i.snapGrid[r+1]-f)*s&&(a+=i.params.slidesPerGroup)}else{const f=i.snapGrid[r-1];n-f<=(i.snapGrid[r]-f)*s&&(a-=i.params.slidesPerGroup)}return a=Math.max(a,0),a=Math.min(a,i.slidesGrid.length-1),i.slideTo(a,l,e,t)}function Xt(){const l=this;if(l.destroyed)return;const{params:e,slidesEl:t}=l,s=e.slidesPerView==="auto"?l.slidesPerViewDynamic():e.slidesPerView;let i,a=l.clickedIndex;const c=l.isElement?"swiper-slide":`.${e.slideClass}`;if(e.loop){if(l.animating)return;i=parseInt(l.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?a<l.loopedSlides-s/2||a>l.slides.length-l.loopedSlides+s/2?(l.loopFix(),a=l.getSlideIndex(q(t,`${c}[data-swiper-slide-index="${i}"]`)[0]),te(()=>{l.slideTo(a)})):l.slideTo(a):a>l.slides.length-s?(l.loopFix(),a=l.getSlideIndex(q(t,`${c}[data-swiper-slide-index="${i}"]`)[0]),te(()=>{l.slideTo(a)})):l.slideTo(a)}else l.slideTo(a)}var Yt={slideTo:Ot,slideToLoop:Vt,slideNext:Dt,slidePrev:Gt,slideReset:Nt,slideToClosest:qt,slideToClickedSlide:Xt};function Rt(l){const e=this,{params:t,slidesEl:s}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;const i=()=>{q(s,`.${t.slideClass}, swiper-slide`).forEach((p,o)=>{p.setAttribute("data-swiper-slide-index",o)})},a=e.grid&&t.grid&&t.grid.rows>1,c=t.slidesPerGroup*(a?t.grid.rows:1),r=e.slides.length%c!=0,n=a&&e.slides.length%t.grid.rows!=0,f=p=>{for(let o=0;o<p;o+=1){const d=e.isElement?F("swiper-slide",[t.slideBlankClass]):F("div",[t.slideClass,t.slideBlankClass]);e.slidesEl.append(d)}};r?(t.loopAddBlankSlides?(f(c-e.slides.length%c),e.recalcSlides(),e.updateSlides()):he("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"),i()):(n&&(t.loopAddBlankSlides?(f(t.grid.rows-e.slides.length%t.grid.rows),e.recalcSlides(),e.updateSlides()):he("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)")),i()),e.loopFix({slideRealIndex:l,direction:t.centeredSlides?void 0:"next"})}function Ft(l){let{slideRealIndex:e,slideTo:t=!0,direction:s,setTranslate:i,activeSlideIndex:a,byController:c,byMousewheel:r}=l===void 0?{}:l;const n=this;if(!n.params.loop)return;n.emit("beforeLoopFix");const{slides:f,allowSlidePrev:p,allowSlideNext:o,slidesEl:d,params:b}=n,{centeredSlides:h}=b;if(n.allowSlidePrev=!0,n.allowSlideNext=!0,n.virtual&&b.virtual.enabled)return t&&(b.centeredSlides||n.snapIndex!==0?b.centeredSlides&&n.snapIndex<b.slidesPerView?n.slideTo(n.virtual.slides.length+n.snapIndex,0,!1,!0):n.snapIndex===n.snapGrid.length-1&&n.slideTo(n.virtual.slidesBefore,0,!1,!0):n.slideTo(n.virtual.slides.length,0,!1,!0)),n.allowSlidePrev=p,n.allowSlideNext=o,void n.emit("loopFix");let g=b.slidesPerView;g==="auto"?g=n.slidesPerViewDynamic():(g=Math.ceil(parseFloat(b.slidesPerView,10)),h&&g%2==0&&(g+=1));const x=b.slidesPerGroupAuto?g:b.slidesPerGroup;let u=x;u%x!=0&&(u+=x-u%x),u+=b.loopAdditionalSlides,n.loopedSlides=u;const w=n.grid&&b.grid&&b.grid.rows>1;f.length<g+u?he("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):w&&b.grid.fill==="row"&&he("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const E=[],S=[];let T=n.activeIndex;a===void 0?a=n.getSlideIndex(f.filter(y=>y.classList.contains(b.slideActiveClass))[0]):T=a;const A=s==="next"||!s,j=s==="prev"||!s;let z=0,k=0;const m=w?Math.ceil(f.length/b.grid.rows):f.length,v=(w?f[a].column:a)+(h&&i===void 0?-g/2+.5:0);if(v<u){z=Math.max(u-v,x);for(let y=0;y<u-v;y+=1){const M=y-Math.floor(y/m)*m;if(w){const L=m-M-1;for(let C=f.length-1;C>=0;C-=1)f[C].column===L&&E.push(C)}else E.push(m-M-1)}}else if(v+g>m-u){k=Math.max(v-(m-2*u),x);for(let y=0;y<k;y+=1){const M=y-Math.floor(y/m)*m;w?f.forEach((L,C)=>{L.column===M&&S.push(C)}):S.push(M)}}if(n.__preventObserver__=!0,requestAnimationFrame(()=>{n.__preventObserver__=!1}),j&&E.forEach(y=>{f[y].swiperLoopMoveDOM=!0,d.prepend(f[y]),f[y].swiperLoopMoveDOM=!1}),A&&S.forEach(y=>{f[y].swiperLoopMoveDOM=!0,d.append(f[y]),f[y].swiperLoopMoveDOM=!1}),n.recalcSlides(),b.slidesPerView==="auto"?n.updateSlides():w&&(E.length>0&&j||S.length>0&&A)&&n.slides.forEach((y,M)=>{n.grid.updateSlide(M,y,n.slides)}),b.watchSlidesProgress&&n.updateSlidesOffset(),t){if(E.length>0&&j){if(e===void 0){const y=n.slidesGrid[T],M=n.slidesGrid[T+z]-y;r?n.setTranslate(n.translate-M):(n.slideTo(T+Math.ceil(z),0,!1,!0),i&&(n.touchEventsData.startTranslate=n.touchEventsData.startTranslate-M,n.touchEventsData.currentTranslate=n.touchEventsData.currentTranslate-M))}else if(i){const y=w?E.length/b.grid.rows:E.length;n.slideTo(n.activeIndex+y,0,!1,!0),n.touchEventsData.currentTranslate=n.translate}}else if(S.length>0&&A)if(e===void 0){const y=n.slidesGrid[T],M=n.slidesGrid[T-k]-y;r?n.setTranslate(n.translate-M):(n.slideTo(T-k,0,!1,!0),i&&(n.touchEventsData.startTranslate=n.touchEventsData.startTranslate-M,n.touchEventsData.currentTranslate=n.touchEventsData.currentTranslate-M))}else{const y=w?S.length/b.grid.rows:S.length;n.slideTo(n.activeIndex-y,0,!1,!0)}}if(n.allowSlidePrev=p,n.allowSlideNext=o,n.controller&&n.controller.control&&!c){const y={slideRealIndex:e,direction:s,setTranslate:i,activeSlideIndex:a,byController:!0};Array.isArray(n.controller.control)?n.controller.control.forEach(M=>{!M.destroyed&&M.params.loop&&M.loopFix({...y,slideTo:M.params.slidesPerView===b.slidesPerView&&t})}):n.controller.control instanceof n.constructor&&n.controller.control.params.loop&&n.controller.control.loopFix({...y,slideTo:n.controller.control.params.slidesPerView===b.slidesPerView&&t})}n.emit("loopFix")}function _t(){const l=this,{params:e,slidesEl:t}=l;if(!e.loop||l.virtual&&l.params.virtual.enabled)return;l.recalcSlides();const s=[];l.slides.forEach(i=>{const a=i.swiperSlideIndex===void 0?1*i.getAttribute("data-swiper-slide-index"):i.swiperSlideIndex;s[a]=i}),l.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),s.forEach(i=>{t.append(i)}),l.recalcSlides(),l.slideTo(l.realIndex,0)}var Wt={loopCreate:Rt,loopFix:Ft,loopDestroy:_t};function Ut(l){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const t=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),t.style.cursor="move",t.style.cursor=l?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function Kt(){const l=this;l.params.watchOverflow&&l.isLocked||l.params.cssMode||(l.isElement&&(l.__preventObserver__=!0),l[l.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",l.isElement&&requestAnimationFrame(()=>{l.__preventObserver__=!1}))}var Zt={setGrabCursor:Ut,unsetGrabCursor:Kt};function Qt(l,e){return e===void 0&&(e=this),function t(s){if(!s||s===X()||s===D())return null;s.assignedSlot&&(s=s.assignedSlot);const i=s.closest(l);return i||s.getRootNode?i||t(s.getRootNode().host):null}(e)}function Xe(l,e,t){const s=D(),{params:i}=l,a=i.edgeSwipeDetection,c=i.edgeSwipeThreshold;return!a||!(t<=c||t>=s.innerWidth-c)||a==="prevent"&&(e.preventDefault(),!0)}function Jt(l){const e=this,t=X();let s=l;s.originalEvent&&(s=s.originalEvent);const i=e.touchEventsData;if(s.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==s.pointerId)return;i.pointerId=s.pointerId}else s.type==="touchstart"&&s.targetTouches.length===1&&(i.touchId=s.targetTouches[0].identifier);if(s.type==="touchstart")return void Xe(e,s,s.targetTouches[0].pageX);const{params:a,touches:c,enabled:r}=e;if(!r||!a.simulateTouch&&s.pointerType==="mouse"||e.animating&&a.preventInteractionOnTransition)return;!e.animating&&a.cssMode&&a.loop&&e.loopFix();let n=s.target;if(a.touchEventsTarget==="wrapper"&&!rt(n,e.wrapperEl)||"which"in s&&s.which===3||"button"in s&&s.button>0||i.isTouched&&i.isMoved)return;const f=!!a.noSwipingClass&&a.noSwipingClass!=="",p=s.composedPath?s.composedPath():s.path;f&&s.target&&s.target.shadowRoot&&p&&(n=p[0]);const o=a.noSwipingSelector?a.noSwipingSelector:`.${a.noSwipingClass}`,d=!(!s.target||!s.target.shadowRoot);if(a.noSwiping&&(d?Qt(o,n):n.closest(o)))return void(e.allowClick=!0);if(a.swipeHandler&&!n.closest(a.swipeHandler))return;c.currentX=s.pageX,c.currentY=s.pageY;const b=c.currentX,h=c.currentY;if(!Xe(e,s,b))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),c.startX=b,c.startY=h,i.touchStartTime=W(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,a.threshold>0&&(i.allowThresholdMove=!1);let g=!0;n.matches(i.focusableElements)&&(g=!1,n.nodeName==="SELECT"&&(i.isTouched=!1)),t.activeElement&&t.activeElement.matches(i.focusableElements)&&t.activeElement!==n&&t.activeElement.blur();const x=g&&e.allowTouchMove&&a.touchStartPreventDefault;!a.touchStartForcePreventDefault&&!x||n.isContentEditable||s.preventDefault(),a.freeMode&&a.freeMode.enabled&&e.freeMode&&e.animating&&!a.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",s)}function es(l){const e=X(),t=this,s=t.touchEventsData,{params:i,touches:a,rtlTranslate:c,enabled:r}=t;if(!r||!i.simulateTouch&&l.pointerType==="mouse")return;let n,f=l;if(f.originalEvent&&(f=f.originalEvent),f.type==="pointermove"&&(s.touchId!==null||f.pointerId!==s.pointerId))return;if(f.type==="touchmove"){if(n=[...f.changedTouches].filter(T=>T.identifier===s.touchId)[0],!n||n.identifier!==s.touchId)return}else n=f;if(!s.isTouched)return void(s.startMoving&&s.isScrolling&&t.emit("touchMoveOpposite",f));const p=n.pageX,o=n.pageY;if(f.preventedByNestedSwiper)return a.startX=p,void(a.startY=o);if(!t.allowTouchMove)return f.target.matches(s.focusableElements)||(t.allowClick=!1),void(s.isTouched&&(Object.assign(a,{startX:p,startY:o,currentX:p,currentY:o}),s.touchStartTime=W()));if(i.touchReleaseOnEdges&&!i.loop){if(t.isVertical()){if(o<a.startY&&t.translate<=t.maxTranslate()||o>a.startY&&t.translate>=t.minTranslate())return s.isTouched=!1,void(s.isMoved=!1)}else if(p<a.startX&&t.translate<=t.maxTranslate()||p>a.startX&&t.translate>=t.minTranslate())return}if(e.activeElement&&f.target===e.activeElement&&f.target.matches(s.focusableElements))return s.isMoved=!0,void(t.allowClick=!1);s.allowTouchCallbacks&&t.emit("touchMove",f),a.previousX=a.currentX,a.previousY=a.currentY,a.currentX=p,a.currentY=o;const d=a.currentX-a.startX,b=a.currentY-a.startY;if(t.params.threshold&&Math.sqrt(d**2+b**2)<t.params.threshold)return;if(s.isScrolling===void 0){let T;t.isHorizontal()&&a.currentY===a.startY||t.isVertical()&&a.currentX===a.startX?s.isScrolling=!1:d*d+b*b>=25&&(T=180*Math.atan2(Math.abs(b),Math.abs(d))/Math.PI,s.isScrolling=t.isHorizontal()?T>i.touchAngle:90-T>i.touchAngle)}if(s.isScrolling&&t.emit("touchMoveOpposite",f),s.startMoving===void 0&&(a.currentX===a.startX&&a.currentY===a.startY||(s.startMoving=!0)),s.isScrolling||f.type==="touchmove"&&s.preventTouchMoveFromPointerMove)return void(s.isTouched=!1);if(!s.startMoving)return;t.allowClick=!1,!i.cssMode&&f.cancelable&&f.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&f.stopPropagation();let h=t.isHorizontal()?d:b,g=t.isHorizontal()?a.currentX-a.previousX:a.currentY-a.previousY;i.oneWayMovement&&(h=Math.abs(h)*(c?1:-1),g=Math.abs(g)*(c?1:-1)),a.diff=h,h*=i.touchRatio,c&&(h=-h,g=-g);const x=t.touchesDirection;t.swipeDirection=h>0?"prev":"next",t.touchesDirection=g>0?"prev":"next";const u=t.params.loop&&!i.cssMode,w=t.touchesDirection==="next"&&t.allowSlideNext||t.touchesDirection==="prev"&&t.allowSlidePrev;if(!s.isMoved){if(u&&w&&t.loopFix({direction:t.swipeDirection}),s.startTranslate=t.getTranslate(),t.setTransition(0),t.animating){const T=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});t.wrapperEl.dispatchEvent(T)}s.allowMomentumBounce=!1,!i.grabCursor||t.allowSlideNext!==!0&&t.allowSlidePrev!==!0||t.setGrabCursor(!0),t.emit("sliderFirstMove",f)}if(new Date().getTime(),s.isMoved&&s.allowThresholdMove&&x!==t.touchesDirection&&u&&w&&Math.abs(h)>=1)return Object.assign(a,{startX:p,startY:o,currentX:p,currentY:o,startTranslate:s.currentTranslate}),s.loopSwapReset=!0,void(s.startTranslate=s.currentTranslate);t.emit("sliderMove",f),s.isMoved=!0,s.currentTranslate=h+s.startTranslate;let E=!0,S=i.resistanceRatio;if(i.touchReleaseOnEdges&&(S=0),h>0?(u&&w&&s.allowThresholdMove&&s.currentTranslate>(i.centeredSlides?t.minTranslate()-t.slidesSizesGrid[t.activeIndex+1]-(i.slidesPerView!=="auto"&&t.slides.length-i.slidesPerView>=2?t.slidesSizesGrid[t.activeIndex+1]+t.params.spaceBetween:0)-t.params.spaceBetween:t.minTranslate())&&t.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),s.currentTranslate>t.minTranslate()&&(E=!1,i.resistance&&(s.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+s.startTranslate+h)**S))):h<0&&(u&&w&&s.allowThresholdMove&&s.currentTranslate<(i.centeredSlides?t.maxTranslate()+t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween+(i.slidesPerView!=="auto"&&t.slides.length-i.slidesPerView>=2?t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween:0):t.maxTranslate())&&t.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:t.slides.length-(i.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),s.currentTranslate<t.maxTranslate()&&(E=!1,i.resistance&&(s.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-s.startTranslate-h)**S))),E&&(f.preventedByNestedSwiper=!0),!t.allowSlideNext&&t.swipeDirection==="next"&&s.currentTranslate<s.startTranslate&&(s.currentTranslate=s.startTranslate),!t.allowSlidePrev&&t.swipeDirection==="prev"&&s.currentTranslate>s.startTranslate&&(s.currentTranslate=s.startTranslate),t.allowSlidePrev||t.allowSlideNext||(s.currentTranslate=s.startTranslate),i.threshold>0){if(!(Math.abs(h)>i.threshold||s.allowThresholdMove))return void(s.currentTranslate=s.startTranslate);if(!s.allowThresholdMove)return s.allowThresholdMove=!0,a.startX=a.currentX,a.startY=a.currentY,s.currentTranslate=s.startTranslate,void(a.diff=t.isHorizontal()?a.currentX-a.startX:a.currentY-a.startY)}i.followFinger&&!i.cssMode&&((i.freeMode&&i.freeMode.enabled&&t.freeMode||i.watchSlidesProgress)&&(t.updateActiveIndex(),t.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&t.freeMode&&t.freeMode.onTouchMove(),t.updateProgress(s.currentTranslate),t.setTranslate(s.currentTranslate))}function ts(l){const e=this,t=e.touchEventsData;let s,i=l;if(i.originalEvent&&(i=i.originalEvent),i.type==="touchend"||i.type==="touchcancel"){if(s=[...i.changedTouches].filter(S=>S.identifier===t.touchId)[0],!s||s.identifier!==t.touchId)return}else{if(t.touchId!==null||i.pointerId!==t.pointerId)return;s=i}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(i.type)&&!(["pointercancel","contextmenu"].includes(i.type)&&(e.browser.isSafari||e.browser.isWebView)))return;t.pointerId=null,t.touchId=null;const{params:a,touches:c,rtlTranslate:r,slidesGrid:n,enabled:f}=e;if(!f||!a.simulateTouch&&i.pointerType==="mouse")return;if(t.allowTouchCallbacks&&e.emit("touchEnd",i),t.allowTouchCallbacks=!1,!t.isTouched)return t.isMoved&&a.grabCursor&&e.setGrabCursor(!1),t.isMoved=!1,void(t.startMoving=!1);a.grabCursor&&t.isMoved&&t.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const p=W(),o=p-t.touchStartTime;if(e.allowClick){const S=i.path||i.composedPath&&i.composedPath();e.updateClickedSlide(S&&S[0]||i.target,S),e.emit("tap click",i),o<300&&p-t.lastClickTime<300&&e.emit("doubleTap doubleClick",i)}if(t.lastClickTime=W(),te(()=>{e.destroyed||(e.allowClick=!0)}),!t.isTouched||!t.isMoved||!e.swipeDirection||c.diff===0&&!t.loopSwapReset||t.currentTranslate===t.startTranslate&&!t.loopSwapReset)return t.isTouched=!1,t.isMoved=!1,void(t.startMoving=!1);let d;if(t.isTouched=!1,t.isMoved=!1,t.startMoving=!1,d=a.followFinger?r?e.translate:-e.translate:-t.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled)return void e.freeMode.onTouchEnd({currentPos:d});const b=d>=-e.maxTranslate()&&!e.params.loop;let h=0,g=e.slidesSizesGrid[0];for(let S=0;S<n.length;S+=S<a.slidesPerGroupSkip?1:a.slidesPerGroup){const T=S<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;n[S+T]!==void 0?(b||d>=n[S]&&d<n[S+T])&&(h=S,g=n[S+T]-n[S]):(b||d>=n[S])&&(h=S,g=n[n.length-1]-n[n.length-2])}let x=null,u=null;a.rewind&&(e.isBeginning?u=a.virtual&&a.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(x=0));const w=(d-n[h])/g,E=h<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(o>a.longSwipesMs){if(!a.longSwipes)return void e.slideTo(e.activeIndex);e.swipeDirection==="next"&&(w>=a.longSwipesRatio?e.slideTo(a.rewind&&e.isEnd?x:h+E):e.slideTo(h)),e.swipeDirection==="prev"&&(w>1-a.longSwipesRatio?e.slideTo(h+E):u!==null&&w<0&&Math.abs(w)>a.longSwipesRatio?e.slideTo(u):e.slideTo(h))}else{if(!a.shortSwipes)return void e.slideTo(e.activeIndex);e.navigation&&(i.target===e.navigation.nextEl||i.target===e.navigation.prevEl)?i.target===e.navigation.nextEl?e.slideTo(h+E):e.slideTo(h):(e.swipeDirection==="next"&&e.slideTo(x!==null?x:h+E),e.swipeDirection==="prev"&&e.slideTo(u!==null?u:h))}}function Ye(){const l=this,{params:e,el:t}=l;if(t&&t.offsetWidth===0)return;e.breakpoints&&l.setBreakpoint();const{allowSlideNext:s,allowSlidePrev:i,snapGrid:a}=l,c=l.virtual&&l.params.virtual.enabled;l.allowSlideNext=!0,l.allowSlidePrev=!0,l.updateSize(),l.updateSlides(),l.updateSlidesClasses();const r=c&&e.loop;!(e.slidesPerView==="auto"||e.slidesPerView>1)||!l.isEnd||l.isBeginning||l.params.centeredSlides||r?l.params.loop&&!c?l.slideToLoop(l.realIndex,0,!1,!0):l.slideTo(l.activeIndex,0,!1,!0):l.slideTo(l.slides.length-1,0,!1,!0),l.autoplay&&l.autoplay.running&&l.autoplay.paused&&(clearTimeout(l.autoplay.resizeTimeout),l.autoplay.resizeTimeout=setTimeout(()=>{l.autoplay&&l.autoplay.running&&l.autoplay.paused&&l.autoplay.resume()},500)),l.allowSlidePrev=i,l.allowSlideNext=s,l.params.watchOverflow&&a!==l.snapGrid&&l.checkOverflow()}function ss(l){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&l.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(l.stopPropagation(),l.stopImmediatePropagation())))}function ls(){const l=this,{wrapperEl:e,rtlTranslate:t,enabled:s}=l;if(!s)return;let i;l.previousTranslate=l.translate,l.isHorizontal()?l.translate=-e.scrollLeft:l.translate=-e.scrollTop,l.translate===0&&(l.translate=0),l.updateActiveIndex(),l.updateSlidesClasses();const a=l.maxTranslate()-l.minTranslate();i=a===0?0:(l.translate-l.minTranslate())/a,i!==l.progress&&l.updateProgress(t?-l.translate:l.translate),l.emit("setTranslate",l.translate,!1)}function as(l){const e=this;ue(e,l.target),e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight||e.update()}function is(){const l=this;l.documentTouchHandlerProceeded||(l.documentTouchHandlerProceeded=!0,l.params.touchReleaseOnEdges&&(l.el.style.touchAction="auto"))}const et=(l,e)=>{const t=X(),{params:s,el:i,wrapperEl:a,device:c}=l,r=!!s.nested,n=e==="on"?"addEventListener":"removeEventListener",f=e;i&&typeof i!="string"&&(t[n]("touchstart",l.onDocumentTouchStart,{passive:!1,capture:r}),i[n]("touchstart",l.onTouchStart,{passive:!1}),i[n]("pointerdown",l.onTouchStart,{passive:!1}),t[n]("touchmove",l.onTouchMove,{passive:!1,capture:r}),t[n]("pointermove",l.onTouchMove,{passive:!1,capture:r}),t[n]("touchend",l.onTouchEnd,{passive:!0}),t[n]("pointerup",l.onTouchEnd,{passive:!0}),t[n]("pointercancel",l.onTouchEnd,{passive:!0}),t[n]("touchcancel",l.onTouchEnd,{passive:!0}),t[n]("pointerout",l.onTouchEnd,{passive:!0}),t[n]("pointerleave",l.onTouchEnd,{passive:!0}),t[n]("contextmenu",l.onTouchEnd,{passive:!0}),(s.preventClicks||s.preventClicksPropagation)&&i[n]("click",l.onClick,!0),s.cssMode&&a[n]("scroll",l.onScroll),s.updateOnWindowResize?l[f](c.ios||c.android?"resize orientationchange observerUpdate":"resize observerUpdate",Ye,!0):l[f]("observerUpdate",Ye,!0),i[n]("load",l.onLoad,{capture:!0}))};function rs(){const l=this,{params:e}=l;l.onTouchStart=Jt.bind(l),l.onTouchMove=es.bind(l),l.onTouchEnd=ts.bind(l),l.onDocumentTouchStart=is.bind(l),e.cssMode&&(l.onScroll=ls.bind(l)),l.onClick=ss.bind(l),l.onLoad=as.bind(l),et(l,"on")}function os(){et(this,"off")}var ns={attachEvents:rs,detachEvents:os};const Re=(l,e)=>l.grid&&e.grid&&e.grid.rows>1;function ds(){const l=this,{realIndex:e,initialized:t,params:s,el:i}=l,a=s.breakpoints;if(!a||a&&Object.keys(a).length===0)return;const c=l.getBreakpoint(a,l.params.breakpointsBase,l.el);if(!c||l.currentBreakpoint===c)return;const r=(c in a?a[c]:void 0)||l.originalParams,n=Re(l,s),f=Re(l,r),p=l.params.grabCursor,o=r.grabCursor,d=s.enabled;n&&!f?(i.classList.remove(`${s.containerModifierClass}grid`,`${s.containerModifierClass}grid-column`),l.emitContainerClasses()):!n&&f&&(i.classList.add(`${s.containerModifierClass}grid`),(r.grid.fill&&r.grid.fill==="column"||!r.grid.fill&&s.grid.fill==="column")&&i.classList.add(`${s.containerModifierClass}grid-column`),l.emitContainerClasses()),p&&!o?l.unsetGrabCursor():!p&&o&&l.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(w=>{if(r[w]===void 0)return;const E=s[w]&&s[w].enabled,S=r[w]&&r[w].enabled;E&&!S&&l[w].disable(),!E&&S&&l[w].enable()});const b=r.direction&&r.direction!==s.direction,h=s.loop&&(r.slidesPerView!==s.slidesPerView||b),g=s.loop;b&&t&&l.changeDirection(),R(l.params,r);const x=l.params.enabled,u=l.params.loop;Object.assign(l,{allowTouchMove:l.params.allowTouchMove,allowSlideNext:l.params.allowSlideNext,allowSlidePrev:l.params.allowSlidePrev}),d&&!x?l.disable():!d&&x&&l.enable(),l.currentBreakpoint=c,l.emit("_beforeBreakpoint",r),t&&(h?(l.loopDestroy(),l.loopCreate(e),l.updateSlides()):!g&&u?(l.loopCreate(e),l.updateSlides()):g&&!u&&l.loopDestroy()),l.emit("breakpoint",r)}function cs(l,e,t){if(e===void 0&&(e="window"),!l||e==="container"&&!t)return;let s=!1;const i=D(),a=e==="window"?i.innerHeight:t.clientHeight,c=Object.keys(l).map(r=>{if(typeof r=="string"&&r.indexOf("@")===0){const n=parseFloat(r.substr(1));return{value:a*n,point:r}}return{value:r,point:r}});c.sort((r,n)=>parseInt(r.value,10)-parseInt(n.value,10));for(let r=0;r<c.length;r+=1){const{point:n,value:f}=c[r];e==="window"?i.matchMedia(`(min-width: ${f}px)`).matches&&(s=n):f<=t.clientWidth&&(s=n)}return s||"max"}var ps={setBreakpoint:ds,getBreakpoint:cs};function fs(l,e){const t=[];return l.forEach(s=>{typeof s=="object"?Object.keys(s).forEach(i=>{s[i]&&t.push(e+i)}):typeof s=="string"&&t.push(e+s)}),t}function bs(){const l=this,{classNames:e,params:t,rtl:s,el:i,device:a}=l,c=fs(["initialized",t.direction,{"free-mode":l.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:s},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&t.grid.fill==="column"},{android:a.android},{ios:a.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides},{"watch-progress":t.watchSlidesProgress}],t.containerModifierClass);e.push(...c),i.classList.add(...e),l.emitContainerClasses()}function xs(){const{el:l,classNames:e}=this;l&&typeof l!="string"&&(l.classList.remove(...e),this.emitContainerClasses())}var us={addClasses:bs,removeClasses:xs};function hs(){const l=this,{isLocked:e,params:t}=l,{slidesOffsetBefore:s}=t;if(s){const i=l.slides.length-1,a=l.slidesGrid[i]+l.slidesSizesGrid[i]+2*s;l.isLocked=l.size>a}else l.isLocked=l.snapGrid.length===1;t.allowSlideNext===!0&&(l.allowSlideNext=!l.isLocked),t.allowSlidePrev===!0&&(l.allowSlidePrev=!l.isLocked),e&&e!==l.isLocked&&(l.isEnd=!1),e!==l.isLocked&&l.emit(l.isLocked?"lock":"unlock")}var vs={checkOverflow:hs},Fe={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function ms(l,e){return function(t){t===void 0&&(t={});const s=Object.keys(t)[0],i=t[s];typeof i=="object"&&i!==null?(l[s]===!0&&(l[s]={enabled:!0}),s==="navigation"&&l[s]&&l[s].enabled&&!l[s].prevEl&&!l[s].nextEl&&(l[s].auto=!0),["pagination","scrollbar"].indexOf(s)>=0&&l[s]&&l[s].enabled&&!l[s].el&&(l[s].auto=!0),s in l&&"enabled"in i&&(typeof l[s]!="object"||"enabled"in l[s]||(l[s].enabled=!0),l[s]||(l[s]={enabled:!1})),R(e,t)):R(e,t)}}const Le={eventsEmitter:ut,update:Ct,translate:At,transition:Bt,slide:Yt,loop:Wt,grabCursor:Zt,events:ns,breakpoints:ps,checkOverflow:vs,classes:us},Pe={};class N{constructor(){let e,t;for(var s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];i.length===1&&i[0].constructor&&Object.prototype.toString.call(i[0]).slice(8,-1)==="Object"?t=i[0]:[e,t]=i,t||(t={}),t=R({},t),e&&!t.el&&(t.el=e);const c=X();if(t.el&&typeof t.el=="string"&&c.querySelectorAll(t.el).length>1){const p=[];return c.querySelectorAll(t.el).forEach(o=>{const d=R({},t,{el:o});p.push(new N(d))}),p}const r=this;r.__swiper__=!0,r.support=Ze(),r.device=Qe({userAgent:t.userAgent}),r.browser=ft(),r.eventsListeners={},r.eventsAnyListeners=[],r.modules=[...r.__modules__],t.modules&&Array.isArray(t.modules)&&r.modules.push(...t.modules);const n={};r.modules.forEach(p=>{p({params:t,swiper:r,extendParams:ms(t,n),on:r.on.bind(r),once:r.once.bind(r),off:r.off.bind(r),emit:r.emit.bind(r)})});const f=R({},Fe,n);return r.params=R({},f,Pe,t),r.originalParams=R({},r.params),r.passedParams=R({},t),r.params&&r.params.on&&Object.keys(r.params.on).forEach(p=>{r.on(p,r.params.on[p])}),r.params&&r.params.onAny&&r.onAny(r.params.onAny),Object.assign(r,{enabled:r.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:()=>r.params.direction==="horizontal",isVertical:()=>r.params.direction==="vertical",activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:r.params.allowSlideNext,allowSlidePrev:r.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:r.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:r.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),r.emit("_swiper"),r.params.init&&r.init(),r}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:t,params:s}=this,i=q(t,`.${s.slideClass}, swiper-slide`),a=ce(i[0]);return ce(e)-a}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter(t=>1*t.getAttribute("data-swiper-slide-index")===e)[0])}recalcSlides(){const{slidesEl:e,params:t}=this;this.slides=q(e,`.${t.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const s=this;e=Math.min(Math.max(e,0),1);const i=s.minTranslate(),a=(s.maxTranslate()-i)*e+i;s.translateTo(a,t===void 0?0:t),s.updateActiveIndex(),s.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter(s=>s.indexOf("swiper")===0||s.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter(s=>s.indexOf("swiper-slide")===0||s.indexOf(t.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach(s=>{const i=e.getSlideClasses(s);t.push({slideEl:s,classNames:i}),e.emit("_slideClass",s,i)}),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){e===void 0&&(e="current"),t===void 0&&(t=!1);const{params:s,slides:i,slidesGrid:a,slidesSizesGrid:c,size:r,activeIndex:n}=this;let f=1;if(typeof s.slidesPerView=="number")return s.slidesPerView;if(s.centeredSlides){let p,o=i[n]?Math.ceil(i[n].swiperSlideSize):0;for(let d=n+1;d<i.length;d+=1)i[d]&&!p&&(o+=Math.ceil(i[d].swiperSlideSize),f+=1,o>r&&(p=!0));for(let d=n-1;d>=0;d-=1)i[d]&&!p&&(o+=i[d].swiperSlideSize,f+=1,o>r&&(p=!0))}else if(e==="current")for(let p=n+1;p<i.length;p+=1)(t?a[p]+c[p]-a[n]<r:a[p]-a[n]<r)&&(f+=1);else for(let p=n-1;p>=0;p-=1)a[n]-a[p]<r&&(f+=1);return f}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:s}=e;function i(){const c=e.rtlTranslate?-1*e.translate:e.translate,r=Math.min(Math.max(c,e.maxTranslate()),e.minTranslate());e.setTranslate(r),e.updateActiveIndex(),e.updateSlidesClasses()}let a;if(s.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(c=>{c.complete&&ue(e,c)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),s.freeMode&&s.freeMode.enabled&&!s.cssMode)i(),s.autoHeight&&e.updateAutoHeight();else{if((s.slidesPerView==="auto"||s.slidesPerView>1)&&e.isEnd&&!s.centeredSlides){const c=e.virtual&&s.virtual.enabled?e.virtual.slides:e.slides;a=e.slideTo(c.length-1,0,!1,!0)}else a=e.slideTo(e.activeIndex,0,!1,!0);a||i()}s.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){t===void 0&&(t=!0);const s=this,i=s.params.direction;return e||(e=i==="horizontal"?"vertical":"horizontal"),e===i||e!=="horizontal"&&e!=="vertical"||(s.el.classList.remove(`${s.params.containerModifierClass}${i}`),s.el.classList.add(`${s.params.containerModifierClass}${e}`),s.emitContainerClasses(),s.params.direction=e,s.slides.forEach(a=>{e==="vertical"?a.style.width="":a.style.height=""}),s.emit("changeDirection"),t&&s.update()),s}changeLanguageDirection(e){const t=this;t.rtl&&e==="rtl"||!t.rtl&&e==="ltr"||(t.rtl=e==="rtl",t.rtlTranslate=t.params.direction==="horizontal"&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let s=e||t.params.el;if(typeof s=="string"&&(s=document.querySelector(s)),!s)return!1;s.swiper=t,s.parentNode&&s.parentNode.host&&s.parentNode.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);const i=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let a=s&&s.shadowRoot&&s.shadowRoot.querySelector?s.shadowRoot.querySelector(i()):q(s,i())[0];return!a&&t.params.createElements&&(a=F("div",t.params.wrapperClass),s.append(a),q(s,`.${t.params.slideClass}`).forEach(c=>{a.append(c)})),Object.assign(t,{el:s,wrapperEl:a,slidesEl:t.isElement&&!s.parentNode.host.slideSlots?s.parentNode.host:a,hostEl:t.isElement?s.parentNode.host:s,mounted:!0,rtl:s.dir.toLowerCase()==="rtl"||J(s,"direction")==="rtl",rtlTranslate:t.params.direction==="horizontal"&&(s.dir.toLowerCase()==="rtl"||J(s,"direction")==="rtl"),wrongRTL:J(a,"display")==="-webkit-box"}),!0}init(e){const t=this;if(t.initialized||t.mount(e)===!1)return t;t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(),t.attachEvents();const s=[...t.el.querySelectorAll('[loading="lazy"]')];return t.isElement&&s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),s.forEach(i=>{i.complete?ue(t,i):i.addEventListener("load",a=>{ue(t,a.target)})}),$e(t),t.initialized=!0,$e(t),t.emit("init"),t.emit("afterInit"),t}destroy(e,t){e===void 0&&(e=!0),t===void 0&&(t=!0);const s=this,{params:i,el:a,wrapperEl:c,slides:r}=s;return s.params===void 0||s.destroyed||(s.emit("beforeDestroy"),s.initialized=!1,s.detachEvents(),i.loop&&s.loopDestroy(),t&&(s.removeClasses(),a&&typeof a!="string"&&a.removeAttribute("style"),c&&c.removeAttribute("style"),r&&r.length&&r.forEach(n=>{n.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),n.removeAttribute("style"),n.removeAttribute("data-swiper-slide-index")})),s.emit("destroy"),Object.keys(s.eventsListeners).forEach(n=>{s.off(n)}),e!==!1&&(s.el&&typeof s.el!="string"&&(s.el.swiper=null),lt(s)),s.destroyed=!0),null}static extendDefaults(e){R(Pe,e)}static get extendedDefaults(){return Pe}static get defaults(){return Fe}static installModule(e){N.prototype.__modules__||(N.prototype.__modules__=[]);const t=N.prototype.__modules__;typeof e=="function"&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach(t=>N.installModule(t)),N):(N.installModule(e),N)}}Object.keys(Le).forEach(l=>{Object.keys(Le[l]).forEach(e=>{N.prototype[e]=Le[l][e]})}),N.use([bt,xt]);function gs(l){let e,{swiper:t,extendParams:s,on:i,emit:a}=l;s({virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}});const c=X();t.virtual={cache:{},from:void 0,to:void 0,slides:[],offset:0,slidesGrid:[]};const r=c.createElement("div");function n(p,o){const d=t.params.virtual;if(d.cache&&t.virtual.cache[o])return t.virtual.cache[o];let b;return d.renderSlide?(b=d.renderSlide.call(t,p,o),typeof b=="string"&&(r.innerHTML=b,b=r.children[0])):b=t.isElement?F("swiper-slide"):F("div",t.params.slideClass),b.setAttribute("data-swiper-slide-index",o),d.renderSlide||(b.innerHTML=p),d.cache&&(t.virtual.cache[o]=b),b}function f(p,o){const{slidesPerView:d,slidesPerGroup:b,centeredSlides:h,loop:g,initialSlide:x}=t.params;if(o&&!g&&x>0)return;const{addSlidesBefore:u,addSlidesAfter:w}=t.params.virtual,{from:E,to:S,slides:T,slidesGrid:A,offset:j}=t.virtual;t.params.cssMode||t.updateActiveIndex();const z=t.activeIndex||0;let k,m,v;k=t.rtlTranslate?"right":t.isHorizontal()?"left":"top",h?(m=Math.floor(d/2)+b+w,v=Math.floor(d/2)+b+u):(m=d+(b-1)+w,v=(g?d:b)+u);let y=z-v,M=z+m;g||(y=Math.max(y,0),M=Math.min(M,T.length-1));let L=(t.slidesGrid[y]||0)-(t.slidesGrid[0]||0);function C(){t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),a("virtualUpdate")}if(g&&z>=v?(y-=v,h||(L+=t.slidesGrid[0])):g&&z<v&&(y=-v,h&&(L+=t.slidesGrid[0])),Object.assign(t.virtual,{from:y,to:M,offset:L,slidesGrid:t.slidesGrid,slidesBefore:v,slidesAfter:m}),E===y&&S===M&&!p)return t.slidesGrid!==A&&L!==j&&t.slides.forEach($=>{$.style[k]=L-Math.abs(t.cssOverflowAdjustment())+"px"}),t.updateProgress(),void a("virtualUpdate");if(t.params.virtual.renderExternal)return t.params.virtual.renderExternal.call(t,{offset:L,from:y,to:M,slides:function(){const $=[];for(let V=y;V<=M;V+=1)$.push(T[V]);return $}()}),void(t.params.virtual.renderExternalUpdate?C():a("virtualUpdate"));const I=[],P=[],H=$=>{let V=$;return $<0?V=T.length+$:V>=T.length&&(V-=T.length),V};if(p)t.slides.filter($=>$.matches(`.${t.params.slideClass}, swiper-slide`)).forEach($=>{$.remove()});else for(let $=E;$<=S;$+=1)if($<y||$>M){const V=H($);t.slides.filter(_=>_.matches(`.${t.params.slideClass}[data-swiper-slide-index="${V}"], swiper-slide[data-swiper-slide-index="${V}"]`)).forEach(_=>{_.remove()})}const B=g?-T.length:0,Y=g?2*T.length:T.length;for(let $=B;$<Y;$+=1)if($>=y&&$<=M){const V=H($);S===void 0||p?P.push(V):($>S&&P.push(V),$<E&&I.push(V))}if(P.forEach($=>{t.slidesEl.append(n(T[$],$))}),g)for(let $=I.length-1;$>=0;$-=1){const V=I[$];t.slidesEl.prepend(n(T[V],V))}else I.sort(($,V)=>V-$),I.forEach($=>{t.slidesEl.prepend(n(T[$],$))});q(t.slidesEl,".swiper-slide, swiper-slide").forEach($=>{$.style[k]=L-Math.abs(t.cssOverflowAdjustment())+"px"}),C()}i("beforeInit",()=>{if(!t.params.virtual.enabled)return;let p;if(t.passedParams.virtual.slides===void 0){const o=[...t.slidesEl.children].filter(d=>d.matches(`.${t.params.slideClass}, swiper-slide`));o&&o.length&&(t.virtual.slides=[...o],p=!0,o.forEach((d,b)=>{d.setAttribute("data-swiper-slide-index",b),t.virtual.cache[b]=d,d.remove()}))}p||(t.virtual.slides=t.params.virtual.slides),t.classNames.push(`${t.params.containerModifierClass}virtual`),t.params.watchSlidesProgress=!0,t.originalParams.watchSlidesProgress=!0,f(!1,!0)}),i("setTranslate",()=>{t.params.virtual.enabled&&(t.params.cssMode&&!t._immediateVirtual?(clearTimeout(e),e=setTimeout(()=>{f()},100)):f())}),i("init update resize",()=>{t.params.virtual.enabled&&t.params.cssMode&&ne(t.wrapperEl,"--swiper-virtual-size",`${t.virtualSize}px`)}),Object.assign(t.virtual,{appendSlide:function(p){if(typeof p=="object"&&"length"in p)for(let o=0;o<p.length;o+=1)p[o]&&t.virtual.slides.push(p[o]);else t.virtual.slides.push(p);f(!0)},prependSlide:function(p){const o=t.activeIndex;let d=o+1,b=1;if(Array.isArray(p)){for(let h=0;h<p.length;h+=1)p[h]&&t.virtual.slides.unshift(p[h]);d=o+p.length,b=p.length}else t.virtual.slides.unshift(p);if(t.params.virtual.cache){const h=t.virtual.cache,g={};Object.keys(h).forEach(x=>{const u=h[x],w=u.getAttribute("data-swiper-slide-index");w&&u.setAttribute("data-swiper-slide-index",parseInt(w,10)+b),g[parseInt(x,10)+b]=u}),t.virtual.cache=g}f(!0),t.slideTo(d,0)},removeSlide:function(p){if(p==null)return;let o=t.activeIndex;if(Array.isArray(p))for(let d=p.length-1;d>=0;d-=1)t.params.virtual.cache&&(delete t.virtual.cache[p[d]],Object.keys(t.virtual.cache).forEach(b=>{b>p&&(t.virtual.cache[b-1]=t.virtual.cache[b],t.virtual.cache[b-1].setAttribute("data-swiper-slide-index",b-1),delete t.virtual.cache[b])})),t.virtual.slides.splice(p[d],1),p[d]<o&&(o-=1),o=Math.max(o,0);else t.params.virtual.cache&&(delete t.virtual.cache[p],Object.keys(t.virtual.cache).forEach(d=>{d>p&&(t.virtual.cache[d-1]=t.virtual.cache[d],t.virtual.cache[d-1].setAttribute("data-swiper-slide-index",d-1),delete t.virtual.cache[d])})),t.virtual.slides.splice(p,1),p<o&&(o-=1),o=Math.max(o,0);f(!0),t.slideTo(o,0)},removeAllSlides:function(){t.virtual.slides=[],t.params.virtual.cache&&(t.virtual.cache={}),f(!0),t.slideTo(0,0)},update:f})}function ws(l){let{swiper:e,extendParams:t,on:s,emit:i}=l;const a=X(),c=D();function r(p){if(!e.enabled)return;const{rtlTranslate:o}=e;let d=p;d.originalEvent&&(d=d.originalEvent);const b=d.keyCode||d.charCode,h=e.params.keyboard.pageUpDown,g=h&&b===33,x=h&&b===34,u=b===37,w=b===39,E=b===38,S=b===40;if(!e.allowSlideNext&&(e.isHorizontal()&&w||e.isVertical()&&S||x)||!e.allowSlidePrev&&(e.isHorizontal()&&u||e.isVertical()&&E||g))return!1;if(!(d.shiftKey||d.altKey||d.ctrlKey||d.metaKey||a.activeElement&&a.activeElement.nodeName&&(a.activeElement.nodeName.toLowerCase()==="input"||a.activeElement.nodeName.toLowerCase()==="textarea"))){if(e.params.keyboard.onlyInViewport&&(g||x||u||w||E||S)){let T=!1;if(ee(e.el,`.${e.params.slideClass}, swiper-slide`).length>0&&ee(e.el,`.${e.params.slideActiveClass}`).length===0)return;const A=e.el,j=A.clientWidth,z=A.clientHeight,k=c.innerWidth,m=c.innerHeight,v=ve(A);o&&(v.left-=A.scrollLeft);const y=[[v.left,v.top],[v.left+j,v.top],[v.left,v.top+z],[v.left+j,v.top+z]];for(let M=0;M<y.length;M+=1){const L=y[M];if(L[0]>=0&&L[0]<=k&&L[1]>=0&&L[1]<=m){if(L[0]===0&&L[1]===0)continue;T=!0}}if(!T)return}e.isHorizontal()?((g||x||u||w)&&(d.preventDefault?d.preventDefault():d.returnValue=!1),((x||w)&&!o||(g||u)&&o)&&e.slideNext(),((g||u)&&!o||(x||w)&&o)&&e.slidePrev()):((g||x||E||S)&&(d.preventDefault?d.preventDefault():d.returnValue=!1),(x||S)&&e.slideNext(),(g||E)&&e.slidePrev()),i("keyPress",b)}}function n(){e.keyboard.enabled||(a.addEventListener("keydown",r),e.keyboard.enabled=!0)}function f(){e.keyboard.enabled&&(a.removeEventListener("keydown",r),e.keyboard.enabled=!1)}e.keyboard={enabled:!1},t({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}}),s("init",()=>{e.params.keyboard.enabled&&n()}),s("destroy",()=>{e.keyboard.enabled&&f()}),Object.assign(e.keyboard,{enable:n,disable:f})}function ys(l){let{swiper:e,extendParams:t,on:s,emit:i}=l;const a=D();let c;t({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null,noMousewheelClass:"swiper-no-mousewheel"}}),e.mousewheel={enabled:!1};let r,n=W();const f=[];function p(){e.enabled&&(e.mouseEntered=!0)}function o(){e.enabled&&(e.mouseEntered=!1)}function d(u){return!(e.params.mousewheel.thresholdDelta&&u.delta<e.params.mousewheel.thresholdDelta)&&!(e.params.mousewheel.thresholdTime&&W()-n<e.params.mousewheel.thresholdTime)&&(u.delta>=6&&W()-n<60||(u.direction<0?e.isEnd&&!e.params.loop||e.animating||(e.slideNext(),i("scroll",u.raw)):e.isBeginning&&!e.params.loop||e.animating||(e.slidePrev(),i("scroll",u.raw)),n=new a.Date().getTime(),!1))}function b(u){let w=u,E=!0;if(!e.enabled||u.target.closest(`.${e.params.mousewheel.noMousewheelClass}`))return;const S=e.params.mousewheel;e.params.cssMode&&w.preventDefault();let T=e.el;e.params.mousewheel.eventsTarget!=="container"&&(T=document.querySelector(e.params.mousewheel.eventsTarget));const A=T&&T.contains(w.target);if(!e.mouseEntered&&!A&&!S.releaseOnEdges)return!0;w.originalEvent&&(w=w.originalEvent);let j=0;const z=e.rtlTranslate?-1:1,k=function(v){let y=0,M=0,L=0,C=0;return"detail"in v&&(M=v.detail),"wheelDelta"in v&&(M=-v.wheelDelta/120),"wheelDeltaY"in v&&(M=-v.wheelDeltaY/120),"wheelDeltaX"in v&&(y=-v.wheelDeltaX/120),"axis"in v&&v.axis===v.HORIZONTAL_AXIS&&(y=M,M=0),L=10*y,C=10*M,"deltaY"in v&&(C=v.deltaY),"deltaX"in v&&(L=v.deltaX),v.shiftKey&&!L&&(L=C,C=0),(L||C)&&v.deltaMode&&(v.deltaMode===1?(L*=40,C*=40):(L*=800,C*=800)),L&&!y&&(y=L<1?-1:1),C&&!M&&(M=C<1?-1:1),{spinX:y,spinY:M,pixelX:L,pixelY:C}}(w);if(S.forceToAxis)if(e.isHorizontal()){if(!(Math.abs(k.pixelX)>Math.abs(k.pixelY)))return!0;j=-k.pixelX*z}else{if(!(Math.abs(k.pixelY)>Math.abs(k.pixelX)))return!0;j=-k.pixelY}else j=Math.abs(k.pixelX)>Math.abs(k.pixelY)?-k.pixelX*z:-k.pixelY;if(j===0)return!0;S.invert&&(j=-j);let m=e.getTranslate()+j*S.sensitivity;if(m>=e.minTranslate()&&(m=e.minTranslate()),m<=e.maxTranslate()&&(m=e.maxTranslate()),E=!!e.params.loop||!(m===e.minTranslate()||m===e.maxTranslate()),E&&e.params.nested&&w.stopPropagation(),e.params.freeMode&&e.params.freeMode.enabled){const v={time:W(),delta:Math.abs(j),direction:Math.sign(j)},y=r&&v.time<r.time+500&&v.delta<=r.delta&&v.direction===r.direction;if(!y){r=void 0;let M=e.getTranslate()+j*S.sensitivity;const L=e.isBeginning,C=e.isEnd;if(M>=e.minTranslate()&&(M=e.minTranslate()),M<=e.maxTranslate()&&(M=e.maxTranslate()),e.setTransition(0),e.setTranslate(M),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses(),(!L&&e.isBeginning||!C&&e.isEnd)&&e.updateSlidesClasses(),e.params.loop&&e.loopFix({direction:v.direction<0?"next":"prev",byMousewheel:!0}),e.params.freeMode.sticky){clearTimeout(c),c=void 0,f.length>=15&&f.shift();const I=f.length?f[f.length-1]:void 0,P=f[0];if(f.push(v),I&&(v.delta>I.delta||v.direction!==I.direction))f.splice(0);else if(f.length>=15&&v.time-P.time<500&&P.delta-v.delta>=1&&v.delta<=6){const H=j>0?.8:.2;r=v,f.splice(0),c=te(()=>{!e.destroyed&&e.params&&e.slideToClosest(e.params.speed,!0,void 0,H)},0)}c||(c=te(()=>{e.destroyed||!e.params||(r=v,f.splice(0),e.slideToClosest(e.params.speed,!0,void 0,.5))},500))}if(y||i("scroll",w),e.params.autoplay&&e.params.autoplayDisableOnInteraction&&e.autoplay.stop(),S.releaseOnEdges&&(M===e.minTranslate()||M===e.maxTranslate()))return!0}}else{const v={time:W(),delta:Math.abs(j),direction:Math.sign(j),raw:u};f.length>=2&&f.shift();const y=f.length?f[f.length-1]:void 0;if(f.push(v),y?(v.direction!==y.direction||v.delta>y.delta||v.time>y.time+150)&&d(v):d(v),function(M){const L=e.params.mousewheel;if(M.direction<0){if(e.isEnd&&!e.params.loop&&L.releaseOnEdges)return!0}else if(e.isBeginning&&!e.params.loop&&L.releaseOnEdges)return!0;return!1}(v))return!0}return w.preventDefault?w.preventDefault():w.returnValue=!1,!1}function h(u){let w=e.el;e.params.mousewheel.eventsTarget!=="container"&&(w=document.querySelector(e.params.mousewheel.eventsTarget)),w[u]("mouseenter",p),w[u]("mouseleave",o),w[u]("wheel",b)}function g(){return e.params.cssMode?(e.wrapperEl.removeEventListener("wheel",b),!0):!e.mousewheel.enabled&&(h("addEventListener"),e.mousewheel.enabled=!0,!0)}function x(){return e.params.cssMode?(e.wrapperEl.addEventListener(event,b),!0):!!e.mousewheel.enabled&&(h("removeEventListener"),e.mousewheel.enabled=!1,!0)}s("init",()=>{!e.params.mousewheel.enabled&&e.params.cssMode&&x(),e.params.mousewheel.enabled&&g()}),s("destroy",()=>{e.params.cssMode&&g(),e.mousewheel.enabled&&x()}),Object.assign(e.mousewheel,{enable:g,disable:x})}function Be(l,e,t,s){return l.params.createElements&&Object.keys(s).forEach(i=>{if(!t[i]&&t.auto===!0){let a=q(l.el,`.${s[i]}`)[0];a||(a=F("div",s[i]),a.className=s[i],l.el.append(a)),t[i]=a,e[i]=a}}),t}function Ss(l){let{swiper:e,extendParams:t,on:s,emit:i}=l;function a(b){let h;return b&&typeof b=="string"&&e.isElement&&(h=e.el.querySelector(b),h)?h:(b&&(typeof b=="string"&&(h=[...document.querySelectorAll(b)]),e.params.uniqueNavElements&&typeof b=="string"&&h&&h.length>1&&e.el.querySelectorAll(b).length===1?h=e.el.querySelector(b):h&&h.length===1&&(h=h[0])),b&&!h?b:h)}function c(b,h){const g=e.params.navigation;(b=O(b)).forEach(x=>{x&&(x.classList[h?"add":"remove"](...g.disabledClass.split(" ")),x.tagName==="BUTTON"&&(x.disabled=h),e.params.watchOverflow&&e.enabled&&x.classList[e.isLocked?"add":"remove"](g.lockClass))})}function r(){const{nextEl:b,prevEl:h}=e.navigation;if(e.params.loop)return c(h,!1),void c(b,!1);c(h,e.isBeginning&&!e.params.rewind),c(b,e.isEnd&&!e.params.rewind)}function n(b){b.preventDefault(),(!e.isBeginning||e.params.loop||e.params.rewind)&&(e.slidePrev(),i("navigationPrev"))}function f(b){b.preventDefault(),(!e.isEnd||e.params.loop||e.params.rewind)&&(e.slideNext(),i("navigationNext"))}function p(){const b=e.params.navigation;if(e.params.navigation=Be(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!b.nextEl&&!b.prevEl)return;let h=a(b.nextEl),g=a(b.prevEl);Object.assign(e.navigation,{nextEl:h,prevEl:g}),h=O(h),g=O(g);const x=(u,w)=>{u&&u.addEventListener("click",w==="next"?f:n),!e.enabled&&u&&u.classList.add(...b.lockClass.split(" "))};h.forEach(u=>x(u,"next")),g.forEach(u=>x(u,"prev"))}function o(){let{nextEl:b,prevEl:h}=e.navigation;b=O(b),h=O(h);const g=(x,u)=>{x.removeEventListener("click",u==="next"?f:n),x.classList.remove(...e.params.navigation.disabledClass.split(" "))};b.forEach(x=>g(x,"next")),h.forEach(x=>g(x,"prev"))}t({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null},s("init",()=>{e.params.navigation.enabled===!1?d():(p(),r())}),s("toEdge fromEdge lock unlock",()=>{r()}),s("destroy",()=>{o()}),s("enable disable",()=>{let{nextEl:b,prevEl:h}=e.navigation;b=O(b),h=O(h),e.enabled?r():[...b,...h].filter(g=>!!g).forEach(g=>g.classList.add(e.params.navigation.lockClass))}),s("click",(b,h)=>{let{nextEl:g,prevEl:x}=e.navigation;g=O(g),x=O(x);const u=h.target;let w=x.includes(u)||g.includes(u);if(e.isElement&&!w){const E=h.path||h.composedPath&&h.composedPath();E&&(w=E.find(S=>g.includes(S)||x.includes(S)))}if(e.params.navigation.hideOnClick&&!w){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===u||e.pagination.el.contains(u)))return;let E;g.length?E=g[0].classList.contains(e.params.navigation.hiddenClass):x.length&&(E=x[0].classList.contains(e.params.navigation.hiddenClass)),i(E===!0?"navigationShow":"navigationHide"),[...g,...x].filter(S=>!!S).forEach(S=>S.classList.toggle(e.params.navigation.hiddenClass))}});const d=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),o()};Object.assign(e.navigation,{enable:()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),p(),r()},disable:d,update:r,init:p,destroy:o})}function Z(l){return l===void 0&&(l=""),`.${l.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function Ms(l){let{swiper:e,extendParams:t,on:s,emit:i}=l;const a="swiper-pagination";let c;t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:x=>x,formatFractionTotal:x=>x,bulletClass:`${a}-bullet`,bulletActiveClass:`${a}-bullet-active`,modifierClass:`${a}-`,currentClass:`${a}-current`,totalClass:`${a}-total`,hiddenClass:`${a}-hidden`,progressbarFillClass:`${a}-progressbar-fill`,progressbarOppositeClass:`${a}-progressbar-opposite`,clickableClass:`${a}-clickable`,lockClass:`${a}-lock`,horizontalClass:`${a}-horizontal`,verticalClass:`${a}-vertical`,paginationDisabledClass:`${a}-disabled`}}),e.pagination={el:null,bullets:[]};let r=0;function n(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function f(x,u){const{bulletActiveClass:w}=e.params.pagination;x&&(x=x[(u==="prev"?"previous":"next")+"ElementSibling"])&&(x.classList.add(`${w}-${u}`),(x=x[(u==="prev"?"previous":"next")+"ElementSibling"])&&x.classList.add(`${w}-${u}-${u}`))}function p(x){const u=x.target.closest(Z(e.params.pagination.bulletClass));if(!u)return;x.preventDefault();const w=ce(u)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===w)return;const A=(E=e.realIndex,S=w,T=e.slides.length,(S%=T)==1+(E%=T)?"next":S===E-1?"previous":void 0);A==="next"?e.slideNext():A==="previous"?e.slidePrev():e.slideToLoop(w)}else e.slideTo(w);var E,S,T}function o(){const x=e.rtl,u=e.params.pagination;if(n())return;let w,E,S=e.pagination.el;S=O(S);const T=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,A=e.params.loop?Math.ceil(T/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(E=e.previousRealIndex||0,w=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):e.snapIndex!==void 0?(w=e.snapIndex,E=e.previousSnapIndex):(E=e.previousIndex||0,w=e.activeIndex||0),u.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const j=e.pagination.bullets;let z,k,m;if(u.dynamicBullets&&(c=Ie(j[0],e.isHorizontal()?"width":"height",!0),S.forEach(v=>{v.style[e.isHorizontal()?"width":"height"]=c*(u.dynamicMainBullets+4)+"px"}),u.dynamicMainBullets>1&&E!==void 0&&(r+=w-(E||0),r>u.dynamicMainBullets-1?r=u.dynamicMainBullets-1:r<0&&(r=0)),z=Math.max(w-r,0),k=z+(Math.min(j.length,u.dynamicMainBullets)-1),m=(k+z)/2),j.forEach(v=>{const y=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(M=>`${u.bulletActiveClass}${M}`)].map(M=>typeof M=="string"&&M.includes(" ")?M.split(" "):M).flat();v.classList.remove(...y)}),S.length>1)j.forEach(v=>{const y=ce(v);y===w?v.classList.add(...u.bulletActiveClass.split(" ")):e.isElement&&v.setAttribute("part","bullet"),u.dynamicBullets&&(y>=z&&y<=k&&v.classList.add(...`${u.bulletActiveClass}-main`.split(" ")),y===z&&f(v,"prev"),y===k&&f(v,"next"))});else{const v=j[w];if(v&&v.classList.add(...u.bulletActiveClass.split(" ")),e.isElement&&j.forEach((y,M)=>{y.setAttribute("part",M===w?"bullet-active":"bullet")}),u.dynamicBullets){const y=j[z],M=j[k];for(let L=z;L<=k;L+=1)j[L]&&j[L].classList.add(...`${u.bulletActiveClass}-main`.split(" "));f(y,"prev"),f(M,"next")}}if(u.dynamicBullets){const v=Math.min(j.length,u.dynamicMainBullets+4),y=(c*v-c)/2-m*c,M=x?"right":"left";j.forEach(L=>{L.style[e.isHorizontal()?M:"top"]=`${y}px`})}}S.forEach((j,z)=>{if(u.type==="fraction"&&(j.querySelectorAll(Z(u.currentClass)).forEach(k=>{k.textContent=u.formatFractionCurrent(w+1)}),j.querySelectorAll(Z(u.totalClass)).forEach(k=>{k.textContent=u.formatFractionTotal(A)})),u.type==="progressbar"){let k;k=u.progressbarOpposite?e.isHorizontal()?"vertical":"horizontal":e.isHorizontal()?"horizontal":"vertical";const m=(w+1)/A;let v=1,y=1;k==="horizontal"?v=m:y=m,j.querySelectorAll(Z(u.progressbarFillClass)).forEach(M=>{M.style.transform=`translate3d(0,0,0) scaleX(${v}) scaleY(${y})`,M.style.transitionDuration=`${e.params.speed}ms`})}u.type==="custom"&&u.renderCustom?(j.innerHTML=u.renderCustom(e,w+1,A),z===0&&i("paginationRender",j)):(z===0&&i("paginationRender",j),i("paginationUpdate",j)),e.params.watchOverflow&&e.enabled&&j.classList[e.isLocked?"add":"remove"](u.lockClass)})}function d(){const x=e.params.pagination;if(n())return;const u=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let w=e.pagination.el;w=O(w);let E="";if(x.type==="bullets"){let S=e.params.loop?Math.ceil(u/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&S>u&&(S=u);for(let T=0;T<S;T+=1)x.renderBullet?E+=x.renderBullet.call(e,T,x.bulletClass):E+=`<${x.bulletElement} ${e.isElement?'part="bullet"':""} class="${x.bulletClass}"></${x.bulletElement}>`}x.type==="fraction"&&(E=x.renderFraction?x.renderFraction.call(e,x.currentClass,x.totalClass):`<span class="${x.currentClass}"></span> / <span class="${x.totalClass}"></span>`),x.type==="progressbar"&&(E=x.renderProgressbar?x.renderProgressbar.call(e,x.progressbarFillClass):`<span class="${x.progressbarFillClass}"></span>`),e.pagination.bullets=[],w.forEach(S=>{x.type!=="custom"&&(S.innerHTML=E||""),x.type==="bullets"&&e.pagination.bullets.push(...S.querySelectorAll(Z(x.bulletClass)))}),x.type!=="custom"&&i("paginationRender",w[0])}function b(){e.params.pagination=Be(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const x=e.params.pagination;if(!x.el)return;let u;typeof x.el=="string"&&e.isElement&&(u=e.el.querySelector(x.el)),u||typeof x.el!="string"||(u=[...document.querySelectorAll(x.el)]),u||(u=x.el),u&&u.length!==0&&(e.params.uniqueNavElements&&typeof x.el=="string"&&Array.isArray(u)&&u.length>1&&(u=[...e.el.querySelectorAll(x.el)],u.length>1&&(u=u.filter(w=>ee(w,".swiper")[0]===e.el)[0])),Array.isArray(u)&&u.length===1&&(u=u[0]),Object.assign(e.pagination,{el:u}),u=O(u),u.forEach(w=>{x.type==="bullets"&&x.clickable&&w.classList.add(...(x.clickableClass||"").split(" ")),w.classList.add(x.modifierClass+x.type),w.classList.add(e.isHorizontal()?x.horizontalClass:x.verticalClass),x.type==="bullets"&&x.dynamicBullets&&(w.classList.add(`${x.modifierClass}${x.type}-dynamic`),r=0,x.dynamicMainBullets<1&&(x.dynamicMainBullets=1)),x.type==="progressbar"&&x.progressbarOpposite&&w.classList.add(x.progressbarOppositeClass),x.clickable&&w.addEventListener("click",p),e.enabled||w.classList.add(x.lockClass)}))}function h(){const x=e.params.pagination;if(n())return;let u=e.pagination.el;u&&(u=O(u),u.forEach(w=>{w.classList.remove(x.hiddenClass),w.classList.remove(x.modifierClass+x.type),w.classList.remove(e.isHorizontal()?x.horizontalClass:x.verticalClass),x.clickable&&(w.classList.remove(...(x.clickableClass||"").split(" ")),w.removeEventListener("click",p))})),e.pagination.bullets&&e.pagination.bullets.forEach(w=>w.classList.remove(...x.bulletActiveClass.split(" ")))}s("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const x=e.params.pagination;let{el:u}=e.pagination;u=O(u),u.forEach(w=>{w.classList.remove(x.horizontalClass,x.verticalClass),w.classList.add(e.isHorizontal()?x.horizontalClass:x.verticalClass)})}),s("init",()=>{e.params.pagination.enabled===!1?g():(b(),d(),o())}),s("activeIndexChange",()=>{e.snapIndex===void 0&&o()}),s("snapIndexChange",()=>{o()}),s("snapGridLengthChange",()=>{d(),o()}),s("destroy",()=>{h()}),s("enable disable",()=>{let{el:x}=e.pagination;x&&(x=O(x),x.forEach(u=>u.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),s("lock unlock",()=>{o()}),s("click",(x,u)=>{const w=u.target,E=O(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&E&&E.length>0&&!w.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&w===e.navigation.nextEl||e.navigation.prevEl&&w===e.navigation.prevEl))return;const S=E[0].classList.contains(e.params.pagination.hiddenClass);i(S===!0?"paginationShow":"paginationHide"),E.forEach(T=>T.classList.toggle(e.params.pagination.hiddenClass))}});const g=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:x}=e.pagination;x&&(x=O(x),x.forEach(u=>u.classList.add(e.params.pagination.paginationDisabledClass))),h()};Object.assign(e.pagination,{enable:()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:x}=e.pagination;x&&(x=O(x),x.forEach(u=>u.classList.remove(e.params.pagination.paginationDisabledClass))),b(),d(),o()},disable:g,render:d,update:o,init:b,destroy:h})}function Es(l){let{swiper:e,extendParams:t,on:s,emit:i}=l;const a=X();let c,r,n,f,p=!1,o=null,d=null;function b(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:z,rtlTranslate:k}=e,{dragEl:m,el:v}=z,y=e.params.scrollbar,M=e.params.loop?e.progressLoop:e.progress;let L=r,C=(n-r)*M;k?(C=-C,C>0?(L=r-C,C=0):-C+r>n&&(L=n+C)):C<0?(L=r+C,C=0):C+r>n&&(L=n-C),e.isHorizontal()?(m.style.transform=`translate3d(${C}px, 0, 0)`,m.style.width=`${L}px`):(m.style.transform=`translate3d(0px, ${C}px, 0)`,m.style.height=`${L}px`),y.hide&&(clearTimeout(o),v.style.opacity=1,o=setTimeout(()=>{v.style.opacity=0,v.style.transitionDuration="400ms"},1e3))}function h(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:z}=e,{dragEl:k,el:m}=z;k.style.width="",k.style.height="",n=e.isHorizontal()?m.offsetWidth:m.offsetHeight,f=e.size/(e.virtualSize+e.params.slidesOffsetBefore-(e.params.centeredSlides?e.snapGrid[0]:0)),r=e.params.scrollbar.dragSize==="auto"?n*f:parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?k.style.width=`${r}px`:k.style.height=`${r}px`,m.style.display=f>=1?"none":"",e.params.scrollbar.hide&&(m.style.opacity=0),e.params.watchOverflow&&e.enabled&&z.el.classList[e.isLocked?"add":"remove"](e.params.scrollbar.lockClass)}function g(z){return e.isHorizontal()?z.clientX:z.clientY}function x(z){const{scrollbar:k,rtlTranslate:m}=e,{el:v}=k;let y;y=(g(z)-ve(v)[e.isHorizontal()?"left":"top"]-(c!==null?c:r/2))/(n-r),y=Math.max(Math.min(y,1),0),m&&(y=1-y);const M=e.minTranslate()+(e.maxTranslate()-e.minTranslate())*y;e.updateProgress(M),e.setTranslate(M),e.updateActiveIndex(),e.updateSlidesClasses()}function u(z){const k=e.params.scrollbar,{scrollbar:m,wrapperEl:v}=e,{el:y,dragEl:M}=m;p=!0,c=z.target===M?g(z)-z.target.getBoundingClientRect()[e.isHorizontal()?"left":"top"]:null,z.preventDefault(),z.stopPropagation(),v.style.transitionDuration="100ms",M.style.transitionDuration="100ms",x(z),clearTimeout(d),y.style.transitionDuration="0ms",k.hide&&(y.style.opacity=1),e.params.cssMode&&(e.wrapperEl.style["scroll-snap-type"]="none"),i("scrollbarDragStart",z)}function w(z){const{scrollbar:k,wrapperEl:m}=e,{el:v,dragEl:y}=k;p&&(z.preventDefault&&z.cancelable?z.preventDefault():z.returnValue=!1,x(z),m.style.transitionDuration="0ms",v.style.transitionDuration="0ms",y.style.transitionDuration="0ms",i("scrollbarDragMove",z))}function E(z){const k=e.params.scrollbar,{scrollbar:m,wrapperEl:v}=e,{el:y}=m;p&&(p=!1,e.params.cssMode&&(e.wrapperEl.style["scroll-snap-type"]="",v.style.transitionDuration=""),k.hide&&(clearTimeout(d),d=te(()=>{y.style.opacity=0,y.style.transitionDuration="400ms"},1e3)),i("scrollbarDragEnd",z),k.snapOnRelease&&e.slideToClosest())}function S(z){const{scrollbar:k,params:m}=e,v=k.el;if(!v)return;const y=v,M=!!m.passiveListeners&&{passive:!1,capture:!1},L=!!m.passiveListeners&&{passive:!0,capture:!1};if(!y)return;const C=z==="on"?"addEventListener":"removeEventListener";y[C]("pointerdown",u,M),a[C]("pointermove",w,M),a[C]("pointerup",E,L)}function T(){const{scrollbar:z,el:k}=e;e.params.scrollbar=Be(e,e.originalParams.scrollbar,e.params.scrollbar,{el:"swiper-scrollbar"});const m=e.params.scrollbar;if(!m.el)return;let v,y;if(typeof m.el=="string"&&e.isElement&&(v=e.el.querySelector(m.el)),v||typeof m.el!="string")v||(v=m.el);else if(v=a.querySelectorAll(m.el),!v.length)return;e.params.uniqueNavElements&&typeof m.el=="string"&&v.length>1&&k.querySelectorAll(m.el).length===1&&(v=k.querySelector(m.el)),v.length>0&&(v=v[0]),v.classList.add(e.isHorizontal()?m.horizontalClass:m.verticalClass),v&&(y=v.querySelector(Z(e.params.scrollbar.dragClass)),y||(y=F("div",e.params.scrollbar.dragClass),v.append(y))),Object.assign(z,{el:v,dragEl:y}),m.draggable&&e.params.scrollbar.el&&e.scrollbar.el&&S("on"),v&&v.classList[e.enabled?"remove":"add"](...Q(e.params.scrollbar.lockClass))}function A(){const z=e.params.scrollbar,k=e.scrollbar.el;k&&k.classList.remove(...Q(e.isHorizontal()?z.horizontalClass:z.verticalClass)),e.params.scrollbar.el&&e.scrollbar.el&&S("off")}t({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),e.scrollbar={el:null,dragEl:null},s("changeDirection",()=>{if(!e.scrollbar||!e.scrollbar.el)return;const z=e.params.scrollbar;let{el:k}=e.scrollbar;k=O(k),k.forEach(m=>{m.classList.remove(z.horizontalClass,z.verticalClass),m.classList.add(e.isHorizontal()?z.horizontalClass:z.verticalClass)})}),s("init",()=>{e.params.scrollbar.enabled===!1?j():(T(),h(),b())}),s("update resize observerUpdate lock unlock changeDirection",()=>{h()}),s("setTranslate",()=>{b()}),s("setTransition",(z,k)=>{(function(m){e.params.scrollbar.el&&e.scrollbar.el&&(e.scrollbar.dragEl.style.transitionDuration=`${m}ms`)})(k)}),s("enable disable",()=>{const{el:z}=e.scrollbar;z&&z.classList[e.enabled?"remove":"add"](...Q(e.params.scrollbar.lockClass))}),s("destroy",()=>{A()});const j=()=>{e.el.classList.add(...Q(e.params.scrollbar.scrollbarDisabledClass)),e.scrollbar.el&&e.scrollbar.el.classList.add(...Q(e.params.scrollbar.scrollbarDisabledClass)),A()};Object.assign(e.scrollbar,{enable:()=>{e.el.classList.remove(...Q(e.params.scrollbar.scrollbarDisabledClass)),e.scrollbar.el&&e.scrollbar.el.classList.remove(...Q(e.params.scrollbar.scrollbarDisabledClass)),T(),h(),b()},disable:j,updateSize:h,setTranslate:b,init:T,destroy:A})}function Ts(l){let{swiper:e,extendParams:t,on:s}=l;t({parallax:{enabled:!1}});const i="[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",a=(r,n)=>{const{rtl:f}=e,p=f?-1:1,o=r.getAttribute("data-swiper-parallax")||"0";let d=r.getAttribute("data-swiper-parallax-x"),b=r.getAttribute("data-swiper-parallax-y");const h=r.getAttribute("data-swiper-parallax-scale"),g=r.getAttribute("data-swiper-parallax-opacity"),x=r.getAttribute("data-swiper-parallax-rotate");if(d||b?(d=d||"0",b=b||"0"):e.isHorizontal()?(d=o,b="0"):(b=o,d="0"),d=d.indexOf("%")>=0?parseInt(d,10)*n*p+"%":d*n*p+"px",b=b.indexOf("%")>=0?parseInt(b,10)*n+"%":b*n+"px",g!=null){const w=g-(g-1)*(1-Math.abs(n));r.style.opacity=w}let u=`translate3d(${d}, ${b}, 0px)`;h!=null&&(u+=` scale(${h-(h-1)*(1-Math.abs(n))})`),x&&x!=null&&(u+=` rotate(${x*n*-1}deg)`),r.style.transform=u},c=()=>{const{el:r,slides:n,progress:f,snapGrid:p,isElement:o}=e,d=q(r,i);e.isElement&&d.push(...q(e.hostEl,i)),d.forEach(b=>{a(b,f)}),n.forEach((b,h)=>{let g=b.progress;e.params.slidesPerGroup>1&&e.params.slidesPerView!=="auto"&&(g+=Math.ceil(h/2)-f*(p.length-1)),g=Math.min(Math.max(g,-1),1),b.querySelectorAll(`${i}, [data-swiper-parallax-rotate]`).forEach(x=>{a(x,g)})})};s("beforeInit",()=>{e.params.parallax.enabled&&(e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0)}),s("init",()=>{e.params.parallax.enabled&&c()}),s("setTranslate",()=>{e.params.parallax.enabled&&c()}),s("setTransition",(r,n)=>{e.params.parallax.enabled&&function(f){f===void 0&&(f=e.params.speed);const{el:p,hostEl:o}=e,d=[...p.querySelectorAll(i)];e.isElement&&d.push(...o.querySelectorAll(i)),d.forEach(b=>{let h=parseInt(b.getAttribute("data-swiper-parallax-duration"),10)||f;f===0&&(h=0),b.style.transitionDuration=`${h}ms`})}(n)})}function Cs(l){let{swiper:e,extendParams:t,on:s,emit:i}=l;const a=D();t({zoom:{enabled:!1,limitToOriginalSize:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}}),e.zoom={enabled:!1};let c,r,n=1,f=!1;const p=[],o={originX:0,originY:0,slideEl:void 0,slideWidth:void 0,slideHeight:void 0,imageEl:void 0,imageWrapEl:void 0,maxRatio:3},d={isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},b={x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0};let h,g=1;function x(){if(p.length<2)return 1;const C=p[0].pageX,I=p[0].pageY,P=p[1].pageX,H=p[1].pageY;return Math.sqrt((P-C)**2+(H-I)**2)}function u(){const C=e.params.zoom,I=o.imageWrapEl.getAttribute("data-swiper-zoom")||C.maxRatio;if(C.limitToOriginalSize&&o.imageEl&&o.imageEl.naturalWidth){const P=o.imageEl.naturalWidth/o.imageEl.offsetWidth;return Math.min(P,I)}return I}function w(C){const I=e.isElement?"swiper-slide":`.${e.params.slideClass}`;return!!C.target.matches(I)||e.slides.filter(P=>P.contains(C.target)).length>0}function E(C){if(C.pointerType==="mouse"&&p.splice(0,p.length),!w(C))return;const I=e.params.zoom;if(c=!1,r=!1,p.push(C),!(p.length<2)){if(c=!0,o.scaleStart=x(),!o.slideEl){o.slideEl=C.target.closest(`.${e.params.slideClass}, swiper-slide`),o.slideEl||(o.slideEl=e.slides[e.activeIndex]);let P=o.slideEl.querySelector(`.${I.containerClass}`);if(P&&(P=P.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),o.imageEl=P,o.imageWrapEl=P?ee(o.imageEl,`.${I.containerClass}`)[0]:void 0,!o.imageWrapEl)return void(o.imageEl=void 0);o.maxRatio=u()}if(o.imageEl){const[P,H]=function(){if(p.length<2)return{x:null,y:null};const B=o.imageEl.getBoundingClientRect();return[(p[0].pageX+(p[1].pageX-p[0].pageX)/2-B.x-a.scrollX)/n,(p[0].pageY+(p[1].pageY-p[0].pageY)/2-B.y-a.scrollY)/n]}();o.originX=P,o.originY=H,o.imageEl.style.transitionDuration="0ms"}f=!0}}function S(C){if(!w(C))return;const I=e.params.zoom,P=e.zoom,H=p.findIndex(B=>B.pointerId===C.pointerId);H>=0&&(p[H]=C),p.length<2||(r=!0,o.scaleMove=x(),o.imageEl&&(P.scale=o.scaleMove/o.scaleStart*n,P.scale>o.maxRatio&&(P.scale=o.maxRatio-1+(P.scale-o.maxRatio+1)**.5),P.scale<I.minRatio&&(P.scale=I.minRatio+1-(I.minRatio-P.scale+1)**.5),o.imageEl.style.transform=`translate3d(0,0,0) scale(${P.scale})`))}function T(C){if(!w(C)||C.pointerType==="mouse"&&C.type==="pointerout")return;const I=e.params.zoom,P=e.zoom,H=p.findIndex(B=>B.pointerId===C.pointerId);H>=0&&p.splice(H,1),c&&r&&(c=!1,r=!1,o.imageEl&&(P.scale=Math.max(Math.min(P.scale,o.maxRatio),I.minRatio),o.imageEl.style.transitionDuration=`${e.params.speed}ms`,o.imageEl.style.transform=`translate3d(0,0,0) scale(${P.scale})`,n=P.scale,f=!1,P.scale>1&&o.slideEl?o.slideEl.classList.add(`${I.zoomedSlideClass}`):P.scale<=1&&o.slideEl&&o.slideEl.classList.remove(`${I.zoomedSlideClass}`),P.scale===1&&(o.originX=0,o.originY=0,o.slideEl=void 0)))}function A(){e.touchEventsData.preventTouchMoveFromPointerMove=!1}function j(C){if(!w(C)||!function(V){const _=`.${e.params.zoom.containerClass}`;return!!V.target.matches(_)||[...e.hostEl.querySelectorAll(_)].filter(U=>U.contains(V.target)).length>0}(C))return;const I=e.zoom;if(!o.imageEl||!d.isTouched||!o.slideEl)return;d.isMoved||(d.width=o.imageEl.offsetWidth||o.imageEl.clientWidth,d.height=o.imageEl.offsetHeight||o.imageEl.clientHeight,d.startX=Ae(o.imageWrapEl,"x")||0,d.startY=Ae(o.imageWrapEl,"y")||0,o.slideWidth=o.slideEl.offsetWidth,o.slideHeight=o.slideEl.offsetHeight,o.imageWrapEl.style.transitionDuration="0ms");const P=d.width*I.scale,H=d.height*I.scale;if(d.minX=Math.min(o.slideWidth/2-P/2,0),d.maxX=-d.minX,d.minY=Math.min(o.slideHeight/2-H/2,0),d.maxY=-d.minY,d.touchesCurrent.x=p.length>0?p[0].pageX:C.pageX,d.touchesCurrent.y=p.length>0?p[0].pageY:C.pageY,Math.max(Math.abs(d.touchesCurrent.x-d.touchesStart.x),Math.abs(d.touchesCurrent.y-d.touchesStart.y))>5&&(e.allowClick=!1),!d.isMoved&&!f&&(e.isHorizontal()&&(Math.floor(d.minX)===Math.floor(d.startX)&&d.touchesCurrent.x<d.touchesStart.x||Math.floor(d.maxX)===Math.floor(d.startX)&&d.touchesCurrent.x>d.touchesStart.x)||!e.isHorizontal()&&(Math.floor(d.minY)===Math.floor(d.startY)&&d.touchesCurrent.y<d.touchesStart.y||Math.floor(d.maxY)===Math.floor(d.startY)&&d.touchesCurrent.y>d.touchesStart.y)))return d.isTouched=!1,void A();C.cancelable&&C.preventDefault(),C.stopPropagation(),clearTimeout(h),e.touchEventsData.preventTouchMoveFromPointerMove=!0,h=setTimeout(()=>{A()}),d.isMoved=!0;const B=(I.scale-n)/(o.maxRatio-e.params.zoom.minRatio),{originX:Y,originY:$}=o;d.currentX=d.touchesCurrent.x-d.touchesStart.x+d.startX+B*(d.width-2*Y),d.currentY=d.touchesCurrent.y-d.touchesStart.y+d.startY+B*(d.height-2*$),d.currentX<d.minX&&(d.currentX=d.minX+1-(d.minX-d.currentX+1)**.8),d.currentX>d.maxX&&(d.currentX=d.maxX-1+(d.currentX-d.maxX+1)**.8),d.currentY<d.minY&&(d.currentY=d.minY+1-(d.minY-d.currentY+1)**.8),d.currentY>d.maxY&&(d.currentY=d.maxY-1+(d.currentY-d.maxY+1)**.8),b.prevPositionX||(b.prevPositionX=d.touchesCurrent.x),b.prevPositionY||(b.prevPositionY=d.touchesCurrent.y),b.prevTime||(b.prevTime=Date.now()),b.x=(d.touchesCurrent.x-b.prevPositionX)/(Date.now()-b.prevTime)/2,b.y=(d.touchesCurrent.y-b.prevPositionY)/(Date.now()-b.prevTime)/2,Math.abs(d.touchesCurrent.x-b.prevPositionX)<2&&(b.x=0),Math.abs(d.touchesCurrent.y-b.prevPositionY)<2&&(b.y=0),b.prevPositionX=d.touchesCurrent.x,b.prevPositionY=d.touchesCurrent.y,b.prevTime=Date.now(),o.imageWrapEl.style.transform=`translate3d(${d.currentX}px, ${d.currentY}px,0)`}function z(){const C=e.zoom;o.slideEl&&e.activeIndex!==e.slides.indexOf(o.slideEl)&&(o.imageEl&&(o.imageEl.style.transform="translate3d(0,0,0) scale(1)"),o.imageWrapEl&&(o.imageWrapEl.style.transform="translate3d(0,0,0)"),o.slideEl.classList.remove(`${e.params.zoom.zoomedSlideClass}`),C.scale=1,n=1,o.slideEl=void 0,o.imageEl=void 0,o.imageWrapEl=void 0,o.originX=0,o.originY=0)}function k(C){const I=e.zoom,P=e.params.zoom;if(!o.slideEl){C&&C.target&&(o.slideEl=C.target.closest(`.${e.params.slideClass}, swiper-slide`)),o.slideEl||(e.params.virtual&&e.params.virtual.enabled&&e.virtual?o.slideEl=q(e.slidesEl,`.${e.params.slideActiveClass}`)[0]:o.slideEl=e.slides[e.activeIndex]);let re=o.slideEl.querySelector(`.${P.containerClass}`);re&&(re=re.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),o.imageEl=re,o.imageWrapEl=re?ee(o.imageEl,`.${P.containerClass}`)[0]:void 0}if(!o.imageEl||!o.imageWrapEl)return;let H,B,Y,$,V,_,U,K,fe,Oe,Ve,De,be,xe,ye,Se,Me,Ee;e.params.cssMode&&(e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.touchAction="none"),o.slideEl.classList.add(`${P.zoomedSlideClass}`),d.touchesStart.x===void 0&&C?(H=C.pageX,B=C.pageY):(H=d.touchesStart.x,B=d.touchesStart.y);const ie=typeof C=="number"?C:null;n===1&&ie&&(H=void 0,B=void 0,d.touchesStart.x=void 0,d.touchesStart.y=void 0);const Ge=u();I.scale=ie||Ge,n=ie||Ge,!C||n===1&&ie?(U=0,K=0):(Me=o.slideEl.offsetWidth,Ee=o.slideEl.offsetHeight,Y=ve(o.slideEl).left+a.scrollX,$=ve(o.slideEl).top+a.scrollY,V=Y+Me/2-H,_=$+Ee/2-B,fe=o.imageEl.offsetWidth||o.imageEl.clientWidth,Oe=o.imageEl.offsetHeight||o.imageEl.clientHeight,Ve=fe*I.scale,De=Oe*I.scale,be=Math.min(Me/2-Ve/2,0),xe=Math.min(Ee/2-De/2,0),ye=-be,Se=-xe,U=V*I.scale,K=_*I.scale,U<be&&(U=be),U>ye&&(U=ye),K<xe&&(K=xe),K>Se&&(K=Se)),ie&&I.scale===1&&(o.originX=0,o.originY=0),o.imageWrapEl.style.transitionDuration="300ms",o.imageWrapEl.style.transform=`translate3d(${U}px, ${K}px,0)`,o.imageEl.style.transitionDuration="300ms",o.imageEl.style.transform=`translate3d(0,0,0) scale(${I.scale})`}function m(){const C=e.zoom,I=e.params.zoom;if(!o.slideEl){e.params.virtual&&e.params.virtual.enabled&&e.virtual?o.slideEl=q(e.slidesEl,`.${e.params.slideActiveClass}`)[0]:o.slideEl=e.slides[e.activeIndex];let P=o.slideEl.querySelector(`.${I.containerClass}`);P&&(P=P.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),o.imageEl=P,o.imageWrapEl=P?ee(o.imageEl,`.${I.containerClass}`)[0]:void 0}o.imageEl&&o.imageWrapEl&&(e.params.cssMode&&(e.wrapperEl.style.overflow="",e.wrapperEl.style.touchAction=""),C.scale=1,n=1,d.touchesStart.x=void 0,d.touchesStart.y=void 0,o.imageWrapEl.style.transitionDuration="300ms",o.imageWrapEl.style.transform="translate3d(0,0,0)",o.imageEl.style.transitionDuration="300ms",o.imageEl.style.transform="translate3d(0,0,0) scale(1)",o.slideEl.classList.remove(`${I.zoomedSlideClass}`),o.slideEl=void 0,o.originX=0,o.originY=0)}function v(C){const I=e.zoom;I.scale&&I.scale!==1?m():k(C)}function y(){return{passiveListener:!!e.params.passiveListeners&&{passive:!0,capture:!1},activeListenerWithCapture:!e.params.passiveListeners||{passive:!1,capture:!0}}}function M(){const C=e.zoom;if(C.enabled)return;C.enabled=!0;const{passiveListener:I,activeListenerWithCapture:P}=y();e.wrapperEl.addEventListener("pointerdown",E,I),e.wrapperEl.addEventListener("pointermove",S,P),["pointerup","pointercancel","pointerout"].forEach(H=>{e.wrapperEl.addEventListener(H,T,I)}),e.wrapperEl.addEventListener("pointermove",j,P)}function L(){const C=e.zoom;if(!C.enabled)return;C.enabled=!1;const{passiveListener:I,activeListenerWithCapture:P}=y();e.wrapperEl.removeEventListener("pointerdown",E,I),e.wrapperEl.removeEventListener("pointermove",S,P),["pointerup","pointercancel","pointerout"].forEach(H=>{e.wrapperEl.removeEventListener(H,T,I)}),e.wrapperEl.removeEventListener("pointermove",j,P)}Object.defineProperty(e.zoom,"scale",{get:()=>g,set(C){if(g!==C){const I=o.imageEl,P=o.slideEl;i("zoomChange",C,I,P)}g=C}}),s("init",()=>{e.params.zoom.enabled&&M()}),s("destroy",()=>{L()}),s("touchStart",(C,I)=>{e.zoom.enabled&&function(P){const H=e.device;if(!o.imageEl||d.isTouched)return;H.android&&P.cancelable&&P.preventDefault(),d.isTouched=!0;const B=p.length>0?p[0]:P;d.touchesStart.x=B.pageX,d.touchesStart.y=B.pageY}(I)}),s("touchEnd",(C,I)=>{e.zoom.enabled&&function(){const P=e.zoom;if(!o.imageEl)return;if(!d.isTouched||!d.isMoved)return d.isTouched=!1,void(d.isMoved=!1);d.isTouched=!1,d.isMoved=!1;let H=300,B=300;const Y=b.x*H,$=d.currentX+Y,V=b.y*B,_=d.currentY+V;b.x!==0&&(H=Math.abs(($-d.currentX)/b.x)),b.y!==0&&(B=Math.abs((_-d.currentY)/b.y));const U=Math.max(H,B);d.currentX=$,d.currentY=_;const K=d.width*P.scale,fe=d.height*P.scale;d.minX=Math.min(o.slideWidth/2-K/2,0),d.maxX=-d.minX,d.minY=Math.min(o.slideHeight/2-fe/2,0),d.maxY=-d.minY,d.currentX=Math.max(Math.min(d.currentX,d.maxX),d.minX),d.currentY=Math.max(Math.min(d.currentY,d.maxY),d.minY),o.imageWrapEl.style.transitionDuration=`${U}ms`,o.imageWrapEl.style.transform=`translate3d(${d.currentX}px, ${d.currentY}px,0)`}()}),s("doubleTap",(C,I)=>{!e.animating&&e.params.zoom.enabled&&e.zoom.enabled&&e.params.zoom.toggle&&v(I)}),s("transitionEnd",()=>{e.zoom.enabled&&e.params.zoom.enabled&&z()}),s("slideChange",()=>{e.zoom.enabled&&e.params.zoom.enabled&&e.params.cssMode&&z()}),Object.assign(e.zoom,{enable:M,disable:L,in:k,out:m,toggle:v})}function zs(l){let{swiper:e,extendParams:t,on:s}=l;function i(c,r){const n=function(){let o,d,b;return(h,g)=>{for(d=-1,o=h.length;o-d>1;)b=o+d>>1,h[b]<=g?d=b:o=b;return o}}();let f,p;return this.x=c,this.y=r,this.lastIndex=c.length-1,this.interpolate=function(o){return o?(p=n(this.x,o),f=p-1,(o-this.x[f])*(this.y[p]-this.y[f])/(this.x[p]-this.x[f])+this.y[f]):0},this}function a(){e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)}t({controller:{control:void 0,inverse:!1,by:"slide"}}),e.controller={control:void 0},s("beforeInit",()=>{typeof window<"u"&&(typeof e.params.controller.control=="string"||e.params.controller.control instanceof HTMLElement)?(typeof e.params.controller.control=="string"?[...document.querySelectorAll(e.params.controller.control)]:[e.params.controller.control]).forEach(c=>{if(e.controller.control||(e.controller.control=[]),c&&c.swiper)e.controller.control.push(c.swiper);else if(c){const r=`${e.params.eventsPrefix}init`,n=f=>{e.controller.control.push(f.detail[0]),e.update(),c.removeEventListener(r,n)};c.addEventListener(r,n)}}):e.controller.control=e.params.controller.control}),s("update",()=>{a()}),s("resize",()=>{a()}),s("observerUpdate",()=>{a()}),s("setTranslate",(c,r,n)=>{e.controller.control&&!e.controller.control.destroyed&&e.controller.setTranslate(r,n)}),s("setTransition",(c,r,n)=>{e.controller.control&&!e.controller.control.destroyed&&e.controller.setTransition(r,n)}),Object.assign(e.controller,{setTranslate:function(c,r){const n=e.controller.control;let f,p;const o=e.constructor;function d(b){if(b.destroyed)return;const h=e.rtlTranslate?-e.translate:e.translate;e.params.controller.by==="slide"&&(function(g){e.controller.spline=e.params.loop?new i(e.slidesGrid,g.slidesGrid):new i(e.snapGrid,g.snapGrid)}(b),p=-e.controller.spline.interpolate(-h)),p&&e.params.controller.by!=="container"||(f=(b.maxTranslate()-b.minTranslate())/(e.maxTranslate()-e.minTranslate()),!Number.isNaN(f)&&Number.isFinite(f)||(f=1),p=(h-e.minTranslate())*f+b.minTranslate()),e.params.controller.inverse&&(p=b.maxTranslate()-p),b.updateProgress(p),b.setTranslate(p,e),b.updateActiveIndex(),b.updateSlidesClasses()}if(Array.isArray(n))for(let b=0;b<n.length;b+=1)n[b]!==r&&n[b]instanceof o&&d(n[b]);else n instanceof o&&r!==n&&d(n)},setTransition:function(c,r){const n=e.constructor,f=e.controller.control;let p;function o(d){d.destroyed||(d.setTransition(c,e),c!==0&&(d.transitionStart(),d.params.autoHeight&&te(()=>{d.updateAutoHeight()}),de(d.wrapperEl,()=>{f&&d.transitionEnd()})))}if(Array.isArray(f))for(p=0;p<f.length;p+=1)f[p]!==r&&f[p]instanceof n&&o(f[p]);else f instanceof n&&r!==f&&o(f)}})}function ks(l){let{swiper:e,extendParams:t,on:s}=l;t({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,containerRole:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null,scrollOnFocus:!0}}),e.a11y={clicked:!1};let i,a,c=null,r=new Date().getTime();function n(m){const v=c;v.length!==0&&(v.innerHTML="",v.innerHTML=m)}function f(m){(m=O(m)).forEach(v=>{v.setAttribute("tabIndex","0")})}function p(m){(m=O(m)).forEach(v=>{v.setAttribute("tabIndex","-1")})}function o(m,v){(m=O(m)).forEach(y=>{y.setAttribute("role",v)})}function d(m,v){(m=O(m)).forEach(y=>{y.setAttribute("aria-roledescription",v)})}function b(m,v){(m=O(m)).forEach(y=>{y.setAttribute("aria-label",v)})}function h(m){(m=O(m)).forEach(v=>{v.setAttribute("aria-disabled",!0)})}function g(m){(m=O(m)).forEach(v=>{v.setAttribute("aria-disabled",!1)})}function x(m){if(m.keyCode!==13&&m.keyCode!==32)return;const v=e.params.a11y,y=m.target;if(!e.pagination||!e.pagination.el||y!==e.pagination.el&&!e.pagination.el.contains(m.target)||m.target.matches(Z(e.params.pagination.bulletClass))){if(e.navigation&&e.navigation.prevEl&&e.navigation.nextEl){const M=O(e.navigation.prevEl);O(e.navigation.nextEl).includes(y)&&(e.isEnd&&!e.params.loop||e.slideNext(),e.isEnd?n(v.lastSlideMessage):n(v.nextSlideMessage)),M.includes(y)&&(e.isBeginning&&!e.params.loop||e.slidePrev(),e.isBeginning?n(v.firstSlideMessage):n(v.prevSlideMessage))}e.pagination&&y.matches(Z(e.params.pagination.bulletClass))&&y.click()}}function u(){return e.pagination&&e.pagination.bullets&&e.pagination.bullets.length}function w(){return u()&&e.params.pagination.clickable}const E=(m,v,y)=>{f(m),m.tagName!=="BUTTON"&&(o(m,"button"),m.addEventListener("keydown",x)),b(m,y),function(M,L){(M=O(M)).forEach(C=>{C.setAttribute("aria-controls",L)})}(m,v)},S=m=>{a&&a!==m.target&&!a.contains(m.target)&&(i=!0),e.a11y.clicked=!0},T=()=>{i=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.destroyed||(e.a11y.clicked=!1)})})},A=m=>{r=new Date().getTime()},j=m=>{if(e.a11y.clicked||!e.params.a11y.scrollOnFocus||new Date().getTime()-r<100)return;const v=m.target.closest(`.${e.params.slideClass}, swiper-slide`);if(!v||!e.slides.includes(v))return;a=v;const y=e.slides.indexOf(v)===e.activeIndex,M=e.params.watchSlidesProgress&&e.visibleSlides&&e.visibleSlides.includes(v);y||M||m.sourceCapabilities&&m.sourceCapabilities.firesTouchEvents||(e.isHorizontal()?e.el.scrollLeft=0:e.el.scrollTop=0,requestAnimationFrame(()=>{i||(e.params.loop?e.slideToLoop(parseInt(v.getAttribute("data-swiper-slide-index")),0):e.slideTo(e.slides.indexOf(v),0),i=!1)}))},z=()=>{const m=e.params.a11y;m.itemRoleDescriptionMessage&&d(e.slides,m.itemRoleDescriptionMessage),m.slideRole&&o(e.slides,m.slideRole);const v=e.slides.length;m.slideLabelMessage&&e.slides.forEach((y,M)=>{const L=e.params.loop?parseInt(y.getAttribute("data-swiper-slide-index"),10):M;b(y,m.slideLabelMessage.replace(/\{\{index\}\}/,L+1).replace(/\{\{slidesLength\}\}/,v))})},k=()=>{const m=e.params.a11y;e.el.append(c);const v=e.el;m.containerRoleDescriptionMessage&&d(v,m.containerRoleDescriptionMessage),m.containerMessage&&b(v,m.containerMessage),m.containerRole&&o(v,m.containerRole);const y=e.wrapperEl,M=m.id||y.getAttribute("id")||`swiper-wrapper-${L=16,L===void 0&&(L=16),"x".repeat(L).replace(/x/g,()=>Math.round(16*Math.random()).toString(16))}`;var L;const C=e.params.autoplay&&e.params.autoplay.enabled?"off":"polite";var I;I=M,O(y).forEach(B=>{B.setAttribute("id",I)}),function(B,Y){(B=O(B)).forEach($=>{$.setAttribute("aria-live",Y)})}(y,C),z();let{nextEl:P,prevEl:H}=e.navigation?e.navigation:{};P=O(P),H=O(H),P&&P.forEach(B=>E(B,M,m.nextSlideMessage)),H&&H.forEach(B=>E(B,M,m.prevSlideMessage)),w()&&O(e.pagination.el).forEach(B=>{B.addEventListener("keydown",x)}),X().addEventListener("visibilitychange",A),e.el.addEventListener("focus",j,!0),e.el.addEventListener("focus",j,!0),e.el.addEventListener("pointerdown",S,!0),e.el.addEventListener("pointerup",T,!0)};s("beforeInit",()=>{c=F("span",e.params.a11y.notificationClass),c.setAttribute("aria-live","assertive"),c.setAttribute("aria-atomic","true")}),s("afterInit",()=>{e.params.a11y.enabled&&k()}),s("slidesLengthChange snapGridLengthChange slidesGridLengthChange",()=>{e.params.a11y.enabled&&z()}),s("fromEdge toEdge afterInit lock unlock",()=>{e.params.a11y.enabled&&function(){if(e.params.loop||e.params.rewind||!e.navigation)return;const{nextEl:m,prevEl:v}=e.navigation;v&&(e.isBeginning?(h(v),p(v)):(g(v),f(v))),m&&(e.isEnd?(h(m),p(m)):(g(m),f(m)))}()}),s("paginationUpdate",()=>{e.params.a11y.enabled&&function(){const m=e.params.a11y;u()&&e.pagination.bullets.forEach(v=>{e.params.pagination.clickable&&(f(v),e.params.pagination.renderBullet||(o(v,"button"),b(v,m.paginationBulletMessage.replace(/\{\{index\}\}/,ce(v)+1)))),v.matches(Z(e.params.pagination.bulletActiveClass))?v.setAttribute("aria-current","true"):v.removeAttribute("aria-current")})}()}),s("destroy",()=>{e.params.a11y.enabled&&function(){c&&c.remove();let{nextEl:m,prevEl:v}=e.navigation?e.navigation:{};m=O(m),v=O(v),m&&m.forEach(y=>y.removeEventListener("keydown",x)),v&&v.forEach(y=>y.removeEventListener("keydown",x)),w()&&O(e.pagination.el).forEach(y=>{y.removeEventListener("keydown",x)}),X().removeEventListener("visibilitychange",A),e.el&&typeof e.el!="string"&&(e.el.removeEventListener("focus",j,!0),e.el.removeEventListener("pointerdown",S,!0),e.el.removeEventListener("pointerup",T,!0))}()})}function js(l){let{swiper:e,extendParams:t,on:s}=l;t({history:{enabled:!1,root:"",replaceState:!1,key:"slides",keepQuery:!1}});let i=!1,a={};const c=o=>o.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,""),r=o=>{const d=D();let b;b=o?new URL(o):d.location;const h=b.pathname.slice(1).split("/").filter(x=>x!==""),g=h.length;return{key:h[g-2],value:h[g-1]}},n=(o,d)=>{const b=D();if(!i||!e.params.history.enabled)return;let h;h=e.params.url?new URL(e.params.url):b.location;const g=e.virtual&&e.params.virtual.enabled?e.slidesEl.querySelector(`[data-swiper-slide-index="${d}"]`):e.slides[d];let x=c(g.getAttribute("data-history"));if(e.params.history.root.length>0){let w=e.params.history.root;w[w.length-1]==="/"&&(w=w.slice(0,w.length-1)),x=`${w}/${o?`${o}/`:""}${x}`}else h.pathname.includes(o)||(x=`${o?`${o}/`:""}${x}`);e.params.history.keepQuery&&(x+=h.search);const u=b.history.state;u&&u.value===x||(e.params.history.replaceState?b.history.replaceState({value:x},null,x):b.history.pushState({value:x},null,x))},f=(o,d,b)=>{if(d)for(let h=0,g=e.slides.length;h<g;h+=1){const x=e.slides[h];if(c(x.getAttribute("data-history"))===d){const u=e.getSlideIndex(x);e.slideTo(u,o,b)}}else e.slideTo(0,o,b)},p=()=>{a=r(e.params.url),f(e.params.speed,a.value,!1)};s("init",()=>{e.params.history.enabled&&(()=>{const o=D();if(e.params.history){if(!o.history||!o.history.pushState)return e.params.history.enabled=!1,void(e.params.hashNavigation.enabled=!0);i=!0,a=r(e.params.url),(a.key||a.value)&&f(0,a.value,e.params.runCallbacksOnInit),e.params.history.replaceState||o.addEventListener("popstate",p)}})()}),s("destroy",()=>{e.params.history.enabled&&(()=>{const o=D();e.params.history.replaceState||o.removeEventListener("popstate",p)})()}),s("transitionEnd _freeModeNoMomentumRelease",()=>{i&&n(e.params.history.key,e.activeIndex)}),s("slideChange",()=>{i&&e.params.cssMode&&n(e.params.history.key,e.activeIndex)})}function Ls(l){let{swiper:e,extendParams:t,emit:s,on:i}=l,a=!1;const c=X(),r=D();t({hashNavigation:{enabled:!1,replaceState:!1,watchState:!1,getSlideIndex(p,o){if(e.virtual&&e.params.virtual.enabled){const d=e.slides.filter(b=>b.getAttribute("data-hash")===o)[0];return d?parseInt(d.getAttribute("data-swiper-slide-index"),10):0}return e.getSlideIndex(q(e.slidesEl,`.${e.params.slideClass}[data-hash="${o}"], swiper-slide[data-hash="${o}"]`)[0])}}});const n=()=>{s("hashChange");const p=c.location.hash.replace("#",""),o=e.virtual&&e.params.virtual.enabled?e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`):e.slides[e.activeIndex];if(p!==(o?o.getAttribute("data-hash"):"")){const d=e.params.hashNavigation.getSlideIndex(e,p);if(d===void 0||Number.isNaN(d))return;e.slideTo(d)}},f=()=>{if(!a||!e.params.hashNavigation.enabled)return;const p=e.virtual&&e.params.virtual.enabled?e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`):e.slides[e.activeIndex],o=p?p.getAttribute("data-hash")||p.getAttribute("data-history"):"";e.params.hashNavigation.replaceState&&r.history&&r.history.replaceState?(r.history.replaceState(null,null,`#${o}`||""),s("hashSet")):(c.location.hash=o||"",s("hashSet"))};i("init",()=>{e.params.hashNavigation.enabled&&(()=>{if(!e.params.hashNavigation.enabled||e.params.history&&e.params.history.enabled)return;a=!0;const p=c.location.hash.replace("#","");if(p){const d=e.params.hashNavigation.getSlideIndex(e,p);e.slideTo(d||0,0,e.params.runCallbacksOnInit,!0)}e.params.hashNavigation.watchState&&r.addEventListener("hashchange",n)})()}),i("destroy",()=>{e.params.hashNavigation.enabled&&e.params.hashNavigation.watchState&&r.removeEventListener("hashchange",n)}),i("transitionEnd _freeModeNoMomentumRelease",()=>{a&&f()}),i("slideChange",()=>{a&&e.params.cssMode&&f()})}function Ps(l){let e,t,{swiper:s,extendParams:i,on:a,emit:c,params:r}=l;s.autoplay={running:!1,paused:!1,timeLeft:0},i({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let n,f,p,o,d,b,h,g,x=r&&r.autoplay?r.autoplay.delay:3e3,u=r&&r.autoplay?r.autoplay.delay:3e3,w=new Date().getTime();function E(M){s&&!s.destroyed&&s.wrapperEl&&M.target===s.wrapperEl&&(s.wrapperEl.removeEventListener("transitionend",E),g||M.detail&&M.detail.bySwiperTouchMove||k())}const S=()=>{if(s.destroyed||!s.autoplay.running)return;s.autoplay.paused?f=!0:f&&(u=n,f=!1);const M=s.autoplay.paused?n:w+u-new Date().getTime();s.autoplay.timeLeft=M,c("autoplayTimeLeft",M,M/x),t=requestAnimationFrame(()=>{S()})},T=M=>{if(s.destroyed||!s.autoplay.running)return;cancelAnimationFrame(t),S();let L=M===void 0?s.params.autoplay.delay:M;x=s.params.autoplay.delay,u=s.params.autoplay.delay;const C=(()=>{let H;if(H=s.virtual&&s.params.virtual.enabled?s.slides.filter(B=>B.classList.contains("swiper-slide-active"))[0]:s.slides[s.activeIndex],!!H)return parseInt(H.getAttribute("data-swiper-autoplay"),10)})();!Number.isNaN(C)&&C>0&&M===void 0&&(L=C,x=C,u=C),n=L;const I=s.params.speed,P=()=>{s&&!s.destroyed&&(s.params.autoplay.reverseDirection?!s.isBeginning||s.params.loop||s.params.rewind?(s.slidePrev(I,!0,!0),c("autoplay")):s.params.autoplay.stopOnLastSlide||(s.slideTo(s.slides.length-1,I,!0,!0),c("autoplay")):!s.isEnd||s.params.loop||s.params.rewind?(s.slideNext(I,!0,!0),c("autoplay")):s.params.autoplay.stopOnLastSlide||(s.slideTo(0,I,!0,!0),c("autoplay")),s.params.cssMode&&(w=new Date().getTime(),requestAnimationFrame(()=>{T()})))};return L>0?(clearTimeout(e),e=setTimeout(()=>{P()},L)):requestAnimationFrame(()=>{P()}),L},A=()=>{w=new Date().getTime(),s.autoplay.running=!0,T(),c("autoplayStart")},j=()=>{s.autoplay.running=!1,clearTimeout(e),cancelAnimationFrame(t),c("autoplayStop")},z=(M,L)=>{if(s.destroyed||!s.autoplay.running)return;clearTimeout(e),M||(h=!0);const C=()=>{c("autoplayPause"),s.params.autoplay.waitForTransition?s.wrapperEl.addEventListener("transitionend",E):k()};if(s.autoplay.paused=!0,L)return b&&(n=s.params.autoplay.delay),b=!1,void C();n=(n||s.params.autoplay.delay)-(new Date().getTime()-w),s.isEnd&&n<0&&!s.params.loop||(n<0&&(n=0),C())},k=()=>{s.isEnd&&n<0&&!s.params.loop||s.destroyed||!s.autoplay.running||(w=new Date().getTime(),h?(h=!1,T(n)):T(),s.autoplay.paused=!1,c("autoplayResume"))},m=()=>{if(s.destroyed||!s.autoplay.running)return;const M=X();M.visibilityState==="hidden"&&(h=!0,z(!0)),M.visibilityState==="visible"&&k()},v=M=>{M.pointerType==="mouse"&&(h=!0,g=!0,s.animating||s.autoplay.paused||z(!0))},y=M=>{M.pointerType==="mouse"&&(g=!1,s.autoplay.paused&&k())};a("init",()=>{s.params.autoplay.enabled&&(s.params.autoplay.pauseOnMouseEnter&&(s.el.addEventListener("pointerenter",v),s.el.addEventListener("pointerleave",y)),X().addEventListener("visibilitychange",m),A())}),a("destroy",()=>{s.el&&typeof s.el!="string"&&(s.el.removeEventListener("pointerenter",v),s.el.removeEventListener("pointerleave",y)),X().removeEventListener("visibilitychange",m),s.autoplay.running&&j()}),a("_freeModeStaticRelease",()=>{(o||h)&&k()}),a("_freeModeNoMomentumRelease",()=>{s.params.autoplay.disableOnInteraction?j():z(!0,!0)}),a("beforeTransitionStart",(M,L,C)=>{!s.destroyed&&s.autoplay.running&&(C||!s.params.autoplay.disableOnInteraction?z(!0,!0):j())}),a("sliderFirstMove",()=>{!s.destroyed&&s.autoplay.running&&(s.params.autoplay.disableOnInteraction?j():(p=!0,o=!1,h=!1,d=setTimeout(()=>{h=!0,o=!0,z(!0)},200)))}),a("touchEnd",()=>{if(!s.destroyed&&s.autoplay.running&&p){if(clearTimeout(d),clearTimeout(e),s.params.autoplay.disableOnInteraction)return o=!1,void(p=!1);o&&s.params.cssMode&&k(),o=!1,p=!1}}),a("slideChange",()=>{!s.destroyed&&s.autoplay.running&&(b=!0)}),Object.assign(s.autoplay,{start:A,stop:j,pause:z,resume:k})}function As(l){let{swiper:e,extendParams:t,on:s}=l;t({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let i=!1,a=!1;function c(){const f=e.thumbs.swiper;if(!f||f.destroyed)return;const p=f.clickedIndex,o=f.clickedSlide;if(o&&o.classList.contains(e.params.thumbs.slideThumbActiveClass)||p==null)return;let d;d=f.params.loop?parseInt(f.clickedSlide.getAttribute("data-swiper-slide-index"),10):p,e.params.loop?e.slideToLoop(d):e.slideTo(d)}function r(){const{thumbs:f}=e.params;if(i)return!1;i=!0;const p=e.constructor;if(f.swiper instanceof p)e.thumbs.swiper=f.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper.update();else if(oe(f.swiper)){const o=Object.assign({},f.swiper);Object.assign(o,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new p(o),a=!0}return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",c),!0}function n(f){const p=e.thumbs.swiper;if(!p||p.destroyed)return;const o=p.params.slidesPerView==="auto"?p.slidesPerViewDynamic():p.params.slidesPerView;let d=1;const b=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(d=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(d=1),d=Math.floor(d),p.slides.forEach(x=>x.classList.remove(b)),p.params.loop||p.params.virtual&&p.params.virtual.enabled)for(let x=0;x<d;x+=1)q(p.slidesEl,`[data-swiper-slide-index="${e.realIndex+x}"]`).forEach(u=>{u.classList.add(b)});else for(let x=0;x<d;x+=1)p.slides[e.realIndex+x]&&p.slides[e.realIndex+x].classList.add(b);const h=e.params.thumbs.autoScrollOffset,g=h&&!p.params.loop;if(e.realIndex!==p.realIndex||g){const x=p.activeIndex;let u,w;if(p.params.loop){const E=p.slides.filter(S=>S.getAttribute("data-swiper-slide-index")===`${e.realIndex}`)[0];u=p.slides.indexOf(E),w=e.activeIndex>e.previousIndex?"next":"prev"}else u=e.realIndex,w=u>e.previousIndex?"next":"prev";g&&(u+=w==="next"?h:-1*h),p.visibleSlidesIndexes&&p.visibleSlidesIndexes.indexOf(u)<0&&(p.params.centeredSlides?u=u>x?u-Math.floor(o/2)+1:u+Math.floor(o/2)-1:u>x&&p.params.slidesPerGroup,p.slideTo(u,f?0:void 0))}}e.thumbs={swiper:null},s("beforeInit",()=>{const{thumbs:f}=e.params;if(f&&f.swiper)if(typeof f.swiper=="string"||f.swiper instanceof HTMLElement){const p=X(),o=()=>{const b=typeof f.swiper=="string"?p.querySelector(f.swiper):f.swiper;if(b&&b.swiper)f.swiper=b.swiper,r(),n(!0);else if(b){const h=`${e.params.eventsPrefix}init`,g=x=>{f.swiper=x.detail[0],b.removeEventListener(h,g),r(),n(!0),f.swiper.update(),e.update()};b.addEventListener(h,g)}return b},d=()=>{e.destroyed||o()||requestAnimationFrame(d)};requestAnimationFrame(d)}else r(),n(!0)}),s("slideChange update resize observerUpdate",()=>{n()}),s("setTransition",(f,p)=>{const o=e.thumbs.swiper;o&&!o.destroyed&&o.setTransition(p)}),s("beforeDestroy",()=>{const f=e.thumbs.swiper;f&&!f.destroyed&&a&&f.destroy()}),Object.assign(e.thumbs,{init:r,update:n})}function Is(l){let{swiper:e,extendParams:t,emit:s,once:i}=l;t({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}}),Object.assign(e,{freeMode:{onTouchStart:function(){if(e.params.cssMode)return;const a=e.getTranslate();e.setTranslate(a),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})},onTouchMove:function(){if(e.params.cssMode)return;const{touchEventsData:a,touches:c}=e;a.velocities.length===0&&a.velocities.push({position:c[e.isHorizontal()?"startX":"startY"],time:a.touchStartTime}),a.velocities.push({position:c[e.isHorizontal()?"currentX":"currentY"],time:W()})},onTouchEnd:function(a){let{currentPos:c}=a;if(e.params.cssMode)return;const{params:r,wrapperEl:n,rtlTranslate:f,snapGrid:p,touchEventsData:o}=e,d=W()-o.touchStartTime;if(c<-e.minTranslate())e.slideTo(e.activeIndex);else if(c>-e.maxTranslate())e.slides.length<p.length?e.slideTo(p.length-1):e.slideTo(e.slides.length-1);else{if(r.freeMode.momentum){if(o.velocities.length>1){const S=o.velocities.pop(),T=o.velocities.pop(),A=S.position-T.position,j=S.time-T.time;e.velocity=A/j,e.velocity/=2,Math.abs(e.velocity)<r.freeMode.minimumVelocity&&(e.velocity=0),(j>150||W()-S.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=r.freeMode.momentumVelocityRatio,o.velocities.length=0;let b=1e3*r.freeMode.momentumRatio;const h=e.velocity*b;let g=e.translate+h;f&&(g=-g);let x,u=!1;const w=20*Math.abs(e.velocity)*r.freeMode.momentumBounceRatio;let E;if(g<e.maxTranslate())r.freeMode.momentumBounce?(g+e.maxTranslate()<-w&&(g=e.maxTranslate()-w),x=e.maxTranslate(),u=!0,o.allowMomentumBounce=!0):g=e.maxTranslate(),r.loop&&r.centeredSlides&&(E=!0);else if(g>e.minTranslate())r.freeMode.momentumBounce?(g-e.minTranslate()>w&&(g=e.minTranslate()+w),x=e.minTranslate(),u=!0,o.allowMomentumBounce=!0):g=e.minTranslate(),r.loop&&r.centeredSlides&&(E=!0);else if(r.freeMode.sticky){let S;for(let T=0;T<p.length;T+=1)if(p[T]>-g){S=T;break}g=Math.abs(p[S]-g)<Math.abs(p[S-1]-g)||e.swipeDirection==="next"?p[S]:p[S-1],g=-g}if(E&&i("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(b=Math.abs(f?(-g-e.translate)/e.velocity:(g-e.translate)/e.velocity),r.freeMode.sticky){const S=Math.abs((f?-g:g)-e.translate),T=e.slidesSizesGrid[e.activeIndex];b=S<T?r.speed:S<2*T?1.5*r.speed:2.5*r.speed}}else if(r.freeMode.sticky)return void e.slideToClosest();r.freeMode.momentumBounce&&u?(e.updateProgress(x),e.setTransition(b),e.setTranslate(g),e.transitionStart(!0,e.swipeDirection),e.animating=!0,de(n,()=>{e&&!e.destroyed&&o.allowMomentumBounce&&(s("momentumBounce"),e.setTransition(r.speed),setTimeout(()=>{e.setTranslate(x),de(n,()=>{e&&!e.destroyed&&e.transitionEnd()})},0))})):e.velocity?(s("_freeModeNoMomentumRelease"),e.updateProgress(g),e.setTransition(b),e.setTranslate(g),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,de(n,()=>{e&&!e.destroyed&&e.transitionEnd()}))):e.updateProgress(g),e.updateActiveIndex(),e.updateSlidesClasses()}else{if(r.freeMode.sticky)return void e.slideToClosest();r.freeMode&&s("_freeModeNoMomentumRelease")}(!r.freeMode.momentum||d>=r.longSwipesMs)&&(s("_freeModeStaticRelease"),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}}}})}function $s(l){let e,t,s,i,{swiper:a,extendParams:c,on:r}=l;c({grid:{rows:1,fill:"column"}});const n=()=>{let f=a.params.spaceBetween;return typeof f=="string"&&f.indexOf("%")>=0?f=parseFloat(f.replace("%",""))/100*a.size:typeof f=="string"&&(f=parseFloat(f)),f};r("init",()=>{i=a.params.grid&&a.params.grid.rows>1}),r("update",()=>{const{params:f,el:p}=a,o=f.grid&&f.grid.rows>1;i&&!o?(p.classList.remove(`${f.containerModifierClass}grid`,`${f.containerModifierClass}grid-column`),s=1,a.emitContainerClasses()):!i&&o&&(p.classList.add(`${f.containerModifierClass}grid`),f.grid.fill==="column"&&p.classList.add(`${f.containerModifierClass}grid-column`),a.emitContainerClasses()),i=o}),a.grid={initSlides:f=>{const{slidesPerView:p}=a.params,{rows:o,fill:d}=a.params.grid,b=a.virtual&&a.params.virtual.enabled?a.virtual.slides.length:f.length;s=Math.floor(b/o),e=Math.floor(b/o)===b/o?b:Math.ceil(b/o)*o,p!=="auto"&&d==="row"&&(e=Math.max(e,p*o)),t=e/o},unsetSlides:()=>{a.slides&&a.slides.forEach(f=>{f.swiperSlideGridSet&&(f.style.height="",f.style[a.getDirectionLabel("margin-top")]="")})},updateSlide:(f,p,o)=>{const{slidesPerGroup:d}=a.params,b=n(),{rows:h,fill:g}=a.params.grid,x=a.virtual&&a.params.virtual.enabled?a.virtual.slides.length:o.length;let u,w,E;if(g==="row"&&d>1){const S=Math.floor(f/(d*h)),T=f-h*d*S,A=S===0?d:Math.min(Math.ceil((x-S*h*d)/h),d);E=Math.floor(T/A),w=T-E*A+S*d,u=w+E*e/h,p.style.order=u}else g==="column"?(w=Math.floor(f/h),E=f-w*h,(w>s||w===s&&E===h-1)&&(E+=1,E>=h&&(E=0,w+=1))):(E=Math.floor(f/t),w=f-E*t);p.row=E,p.column=w,p.style.height=`calc((100% - ${(h-1)*b}px) / ${h})`,p.style[a.getDirectionLabel("margin-top")]=E!==0?b&&`${b}px`:"",p.swiperSlideGridSet=!0},updateWrapperSize:(f,p)=>{const{centeredSlides:o,roundLengths:d}=a.params,b=n(),{rows:h}=a.params.grid;if(a.virtualSize=(f+b)*e,a.virtualSize=Math.ceil(a.virtualSize/h)-b,a.params.cssMode||(a.wrapperEl.style[a.getDirectionLabel("width")]=`${a.virtualSize+b}px`),o){const g=[];for(let x=0;x<p.length;x+=1){let u=p[x];d&&(u=Math.floor(u)),p[x]<a.virtualSize+p[0]&&g.push(u)}p.splice(0,p.length),p.push(...g)}}}}function Hs(l){const e=this,{params:t,slidesEl:s}=e;t.loop&&e.loopDestroy();const i=a=>{if(typeof a=="string"){const c=document.createElement("div");c.innerHTML=a,s.append(c.children[0]),c.innerHTML=""}else s.append(a)};if(typeof l=="object"&&"length"in l)for(let a=0;a<l.length;a+=1)l[a]&&i(l[a]);else i(l);e.recalcSlides(),t.loop&&e.loopCreate(),t.observer&&!e.isElement||e.update()}function Bs(l){const e=this,{params:t,activeIndex:s,slidesEl:i}=e;t.loop&&e.loopDestroy();let a=s+1;const c=r=>{if(typeof r=="string"){const n=document.createElement("div");n.innerHTML=r,i.prepend(n.children[0]),n.innerHTML=""}else i.prepend(r)};if(typeof l=="object"&&"length"in l){for(let r=0;r<l.length;r+=1)l[r]&&c(l[r]);a=s+l.length}else c(l);e.recalcSlides(),t.loop&&e.loopCreate(),t.observer&&!e.isElement||e.update(),e.slideTo(a,0,!1)}function Os(l,e){const t=this,{params:s,activeIndex:i,slidesEl:a}=t;let c=i;s.loop&&(c-=t.loopedSlides,t.loopDestroy(),t.recalcSlides());const r=t.slides.length;if(l<=0)return void t.prependSlide(e);if(l>=r)return void t.appendSlide(e);let n=c>l?c+1:c;const f=[];for(let p=r-1;p>=l;p-=1){const o=t.slides[p];o.remove(),f.unshift(o)}if(typeof e=="object"&&"length"in e){for(let p=0;p<e.length;p+=1)e[p]&&a.append(e[p]);n=c>l?c+e.length:c}else a.append(e);for(let p=0;p<f.length;p+=1)a.append(f[p]);t.recalcSlides(),s.loop&&t.loopCreate(),s.observer&&!t.isElement||t.update(),s.loop?t.slideTo(n+t.loopedSlides,0,!1):t.slideTo(n,0,!1)}function Vs(l){const e=this,{params:t,activeIndex:s}=e;let i=s;t.loop&&(i-=e.loopedSlides,e.loopDestroy());let a,c=i;if(typeof l=="object"&&"length"in l){for(let r=0;r<l.length;r+=1)a=l[r],e.slides[a]&&e.slides[a].remove(),a<c&&(c-=1);c=Math.max(c,0)}else a=l,e.slides[a]&&e.slides[a].remove(),a<c&&(c-=1),c=Math.max(c,0);e.recalcSlides(),t.loop&&e.loopCreate(),t.observer&&!e.isElement||e.update(),t.loop?e.slideTo(c+e.loopedSlides,0,!1):e.slideTo(c,0,!1)}function Ds(){const l=this,e=[];for(let t=0;t<l.slides.length;t+=1)e.push(t);l.removeSlide(e)}function Gs(l){let{swiper:e}=l;Object.assign(e,{appendSlide:Hs.bind(e),prependSlide:Bs.bind(e),addSlide:Os.bind(e),removeSlide:Vs.bind(e),removeAllSlides:Ds.bind(e)})}function ae(l){const{effect:e,swiper:t,on:s,setTranslate:i,setTransition:a,overwriteParams:c,perspective:r,recreateShadows:n,getEffectParams:f}=l;let p;s("beforeInit",()=>{if(t.params.effect!==e)return;t.classNames.push(`${t.params.containerModifierClass}${e}`),r&&r()&&t.classNames.push(`${t.params.containerModifierClass}3d`);const o=c?c():{};Object.assign(t.params,o),Object.assign(t.originalParams,o)}),s("setTranslate",()=>{t.params.effect===e&&i()}),s("setTransition",(o,d)=>{t.params.effect===e&&a(d)}),s("transitionEnd",()=>{if(t.params.effect===e&&n){if(!f||!f().slideShadows)return;t.slides.forEach(o=>{o.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(d=>d.remove())}),n()}}),s("virtualUpdate",()=>{t.params.effect===e&&(t.slides.length||(p=!0),requestAnimationFrame(()=>{p&&t.slides&&t.slides.length&&(i(),p=!1)}))})}function pe(l,e){const t=se(e);return t!==e&&(t.style.backfaceVisibility="hidden",t.style["-webkit-backface-visibility"]="hidden"),t}function we(l){let{swiper:e,duration:t,transformElements:s,allSlides:i}=l;const{activeIndex:a}=e;if(e.params.virtualTranslate&&t!==0){let c,r=!1;c=i?s:s.filter(n=>{const f=n.classList.contains("swiper-slide-transform")?(p=>p.parentElement?p.parentElement:e.slides.filter(o=>o.shadowRoot&&o.shadowRoot===p.parentNode)[0])(n):n;return e.getSlideIndex(f)===a}),c.forEach(n=>{de(n,()=>{if(r||!e||e.destroyed)return;r=!0,e.animating=!1;const f=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});e.wrapperEl.dispatchEvent(f)})})}}function Ns(l){let{swiper:e,extendParams:t,on:s}=l;t({fadeEffect:{crossFade:!1}}),ae({effect:"fade",swiper:e,on:s,setTranslate:()=>{const{slides:i}=e,a=e.params.fadeEffect;for(let c=0;c<i.length;c+=1){const r=e.slides[c];let n=-r.swiperSlideOffset;e.params.virtualTranslate||(n-=e.translate);let f=0;e.isHorizontal()||(f=n,n=0);const p=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(r.progress),0):1+Math.min(Math.max(r.progress,-1),0),o=pe(a,r);o.style.opacity=p,o.style.transform=`translate3d(${n}px, ${f}px, 0px)`}},setTransition:i=>{const a=e.slides.map(c=>se(c));a.forEach(c=>{c.style.transitionDuration=`${i}ms`}),we({swiper:e,duration:i,transformElements:a,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}function qs(l){let{swiper:e,extendParams:t,on:s}=l;t({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}});const i=(a,c,r)=>{let n=r?a.querySelector(".swiper-slide-shadow-left"):a.querySelector(".swiper-slide-shadow-top"),f=r?a.querySelector(".swiper-slide-shadow-right"):a.querySelector(".swiper-slide-shadow-bottom");n||(n=F("div",("swiper-slide-shadow-cube swiper-slide-shadow-"+(r?"left":"top")).split(" ")),a.append(n)),f||(f=F("div",("swiper-slide-shadow-cube swiper-slide-shadow-"+(r?"right":"bottom")).split(" ")),a.append(f)),n&&(n.style.opacity=Math.max(-c,0)),f&&(f.style.opacity=Math.max(c,0))};ae({effect:"cube",swiper:e,on:s,setTranslate:()=>{const{el:a,wrapperEl:c,slides:r,width:n,height:f,rtlTranslate:p,size:o,browser:d}=e,b=ge(e),h=e.params.cubeEffect,g=e.isHorizontal(),x=e.virtual&&e.params.virtual.enabled;let u,w=0;h.shadow&&(g?(u=e.wrapperEl.querySelector(".swiper-cube-shadow"),u||(u=F("div","swiper-cube-shadow"),e.wrapperEl.append(u)),u.style.height=`${n}px`):(u=a.querySelector(".swiper-cube-shadow"),u||(u=F("div","swiper-cube-shadow"),a.append(u))));for(let S=0;S<r.length;S+=1){const T=r[S];let A=S;x&&(A=parseInt(T.getAttribute("data-swiper-slide-index"),10));let j=90*A,z=Math.floor(j/360);p&&(j=-j,z=Math.floor(-j/360));const k=Math.max(Math.min(T.progress,1),-1);let m=0,v=0,y=0;A%4==0?(m=4*-z*o,y=0):(A-1)%4==0?(m=0,y=4*-z*o):(A-2)%4==0?(m=o+4*z*o,y=o):(A-3)%4==0&&(m=-o,y=3*o+4*o*z),p&&(m=-m),g||(v=m,m=0);const M=`rotateX(${b(g?0:-j)}deg) rotateY(${b(g?j:0)}deg) translate3d(${m}px, ${v}px, ${y}px)`;k<=1&&k>-1&&(w=90*A+90*k,p&&(w=90*-A-90*k)),T.style.transform=M,h.slideShadows&&i(T,k,g)}if(c.style.transformOrigin=`50% 50% -${o/2}px`,c.style["-webkit-transform-origin"]=`50% 50% -${o/2}px`,h.shadow)if(g)u.style.transform=`translate3d(0px, ${n/2+h.shadowOffset}px, ${-n/2}px) rotateX(89.99deg) rotateZ(0deg) scale(${h.shadowScale})`;else{const S=Math.abs(w)-90*Math.floor(Math.abs(w)/90),T=1.5-(Math.sin(2*S*Math.PI/360)/2+Math.cos(2*S*Math.PI/360)/2),A=h.shadowScale,j=h.shadowScale/T,z=h.shadowOffset;u.style.transform=`scale3d(${A}, 1, ${j}) translate3d(0px, ${f/2+z}px, ${-f/2/j}px) rotateX(-89.99deg)`}const E=(d.isSafari||d.isWebView)&&d.needPerspectiveFix?-o/2:0;c.style.transform=`translate3d(0px,0,${E}px) rotateX(${b(e.isHorizontal()?0:w)}deg) rotateY(${b(e.isHorizontal()?-w:0)}deg)`,c.style.setProperty("--swiper-cube-translate-z",`${E}px`)},setTransition:a=>{const{el:c,slides:r}=e;if(r.forEach(n=>{n.style.transitionDuration=`${a}ms`,n.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(f=>{f.style.transitionDuration=`${a}ms`})}),e.params.cubeEffect.shadow&&!e.isHorizontal()){const n=c.querySelector(".swiper-cube-shadow");n&&(n.style.transitionDuration=`${a}ms`)}},recreateShadows:()=>{const a=e.isHorizontal();e.slides.forEach(c=>{const r=Math.max(Math.min(c.progress,1),-1);i(c,r,a)})},getEffectParams:()=>e.params.cubeEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})}function le(l,e,t){const s=`swiper-slide-shadow${t?`-${t}`:""}${l?` swiper-slide-shadow-${l}`:""}`,i=se(e);let a=i.querySelector(`.${s.split(" ").join(".")}`);return a||(a=F("div",s.split(" ")),i.append(a)),a}function Xs(l){let{swiper:e,extendParams:t,on:s}=l;t({flipEffect:{slideShadows:!0,limitRotation:!0}});const i=(a,c)=>{let r=e.isHorizontal()?a.querySelector(".swiper-slide-shadow-left"):a.querySelector(".swiper-slide-shadow-top"),n=e.isHorizontal()?a.querySelector(".swiper-slide-shadow-right"):a.querySelector(".swiper-slide-shadow-bottom");r||(r=le("flip",a,e.isHorizontal()?"left":"top")),n||(n=le("flip",a,e.isHorizontal()?"right":"bottom")),r&&(r.style.opacity=Math.max(-c,0)),n&&(n.style.opacity=Math.max(c,0))};ae({effect:"flip",swiper:e,on:s,setTranslate:()=>{const{slides:a,rtlTranslate:c}=e,r=e.params.flipEffect,n=ge(e);for(let f=0;f<a.length;f+=1){const p=a[f];let o=p.progress;e.params.flipEffect.limitRotation&&(o=Math.max(Math.min(p.progress,1),-1));const d=p.swiperSlideOffset;let b=-180*o,h=0,g=e.params.cssMode?-d-e.translate:-d,x=0;e.isHorizontal()?c&&(b=-b):(x=g,g=0,h=-b,b=0),p.style.zIndex=-Math.abs(Math.round(o))+a.length,r.slideShadows&&i(p,o);const u=`translate3d(${g}px, ${x}px, 0px) rotateX(${n(h)}deg) rotateY(${n(b)}deg)`;pe(r,p).style.transform=u}},setTransition:a=>{const c=e.slides.map(r=>se(r));c.forEach(r=>{r.style.transitionDuration=`${a}ms`,r.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(n=>{n.style.transitionDuration=`${a}ms`})}),we({swiper:e,duration:a,transformElements:c})},recreateShadows:()=>{e.params.flipEffect,e.slides.forEach(a=>{let c=a.progress;e.params.flipEffect.limitRotation&&(c=Math.max(Math.min(a.progress,1),-1)),i(a,c)})},getEffectParams:()=>e.params.flipEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}function Ys(l){let{swiper:e,extendParams:t,on:s}=l;t({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),ae({effect:"coverflow",swiper:e,on:s,setTranslate:()=>{const{width:i,height:a,slides:c,slidesSizesGrid:r}=e,n=e.params.coverflowEffect,f=e.isHorizontal(),p=e.translate,o=f?i/2-p:a/2-p,d=f?n.rotate:-n.rotate,b=n.depth,h=ge(e);for(let g=0,x=c.length;g<x;g+=1){const u=c[g],w=r[g],E=(o-u.swiperSlideOffset-w/2)/w,S=typeof n.modifier=="function"?n.modifier(E):E*n.modifier;let T=f?d*S:0,A=f?0:d*S,j=-b*Math.abs(S),z=n.stretch;typeof z=="string"&&z.indexOf("%")!==-1&&(z=parseFloat(n.stretch)/100*w);let k=f?0:z*S,m=f?z*S:0,v=1-(1-n.scale)*Math.abs(S);Math.abs(m)<.001&&(m=0),Math.abs(k)<.001&&(k=0),Math.abs(j)<.001&&(j=0),Math.abs(T)<.001&&(T=0),Math.abs(A)<.001&&(A=0),Math.abs(v)<.001&&(v=0);const y=`translate3d(${m}px,${k}px,${j}px)  rotateX(${h(A)}deg) rotateY(${h(T)}deg) scale(${v})`;if(pe(n,u).style.transform=y,u.style.zIndex=1-Math.abs(Math.round(S)),n.slideShadows){let M=f?u.querySelector(".swiper-slide-shadow-left"):u.querySelector(".swiper-slide-shadow-top"),L=f?u.querySelector(".swiper-slide-shadow-right"):u.querySelector(".swiper-slide-shadow-bottom");M||(M=le("coverflow",u,f?"left":"top")),L||(L=le("coverflow",u,f?"right":"bottom")),M&&(M.style.opacity=S>0?S:0),L&&(L.style.opacity=-S>0?-S:0)}}},setTransition:i=>{e.slides.map(a=>se(a)).forEach(a=>{a.style.transitionDuration=`${i}ms`,a.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(c=>{c.style.transitionDuration=`${i}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}function Rs(l){let{swiper:e,extendParams:t,on:s}=l;t({creativeEffect:{limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const i=a=>typeof a=="string"?a:`${a}px`;ae({effect:"creative",swiper:e,on:s,setTranslate:()=>{const{slides:a,wrapperEl:c,slidesSizesGrid:r}=e,n=e.params.creativeEffect,{progressMultiplier:f}=n,p=e.params.centeredSlides,o=ge(e);if(p){const d=r[0]/2-e.params.slidesOffsetBefore||0;c.style.transform=`translateX(calc(50% - ${d}px))`}for(let d=0;d<a.length;d+=1){const b=a[d],h=b.progress,g=Math.min(Math.max(b.progress,-n.limitProgress),n.limitProgress);let x=g;p||(x=Math.min(Math.max(b.originalProgress,-n.limitProgress),n.limitProgress));const u=b.swiperSlideOffset,w=[e.params.cssMode?-u-e.translate:-u,0,0],E=[0,0,0];let S=!1;e.isHorizontal()||(w[1]=w[0],w[0]=0);let T={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};g<0?(T=n.next,S=!0):g>0&&(T=n.prev,S=!0),w.forEach((y,M)=>{w[M]=`calc(${y}px + (${i(T.translate[M])} * ${Math.abs(g*f)}))`}),E.forEach((y,M)=>{let L=T.rotate[M]*Math.abs(g*f);E[M]=L}),b.style.zIndex=-Math.abs(Math.round(h))+a.length;const A=w.join(", "),j=`rotateX(${o(E[0])}deg) rotateY(${o(E[1])}deg) rotateZ(${o(E[2])}deg)`,z=x<0?`scale(${1+(1-T.scale)*x*f})`:`scale(${1-(1-T.scale)*x*f})`,k=x<0?1+(1-T.opacity)*x*f:1-(1-T.opacity)*x*f,m=`translate3d(${A}) ${j} ${z}`;if(S&&T.shadow||!S){let y=b.querySelector(".swiper-slide-shadow");if(!y&&T.shadow&&(y=le("creative",b)),y){const M=n.shadowPerProgress?g*(1/n.limitProgress):g;y.style.opacity=Math.min(Math.max(Math.abs(M),0),1)}}const v=pe(n,b);v.style.transform=m,v.style.opacity=k,T.origin&&(v.style.transformOrigin=T.origin)}},setTransition:a=>{const c=e.slides.map(r=>se(r));c.forEach(r=>{r.style.transitionDuration=`${a}ms`,r.querySelectorAll(".swiper-slide-shadow").forEach(n=>{n.style.transitionDuration=`${a}ms`})}),we({swiper:e,duration:a,transformElements:c,allSlides:!0})},perspective:()=>e.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!e.params.cssMode})})}function Fs(l){let{swiper:e,extendParams:t,on:s}=l;t({cardsEffect:{slideShadows:!0,rotate:!0,perSlideRotate:2,perSlideOffset:8}}),ae({effect:"cards",swiper:e,on:s,setTranslate:()=>{const{slides:i,activeIndex:a,rtlTranslate:c}=e,r=e.params.cardsEffect,{startTranslate:n,isTouched:f}=e.touchEventsData,p=c?-e.translate:e.translate;for(let o=0;o<i.length;o+=1){const d=i[o],b=d.progress,h=Math.min(Math.max(b,-4),4);let g=d.swiperSlideOffset;e.params.centeredSlides&&!e.params.cssMode&&(e.wrapperEl.style.transform=`translateX(${e.minTranslate()}px)`),e.params.centeredSlides&&e.params.cssMode&&(g-=i[0].swiperSlideOffset);let x=e.params.cssMode?-g-e.translate:-g,u=0;const w=-100*Math.abs(h);let E=1,S=-r.perSlideRotate*h,T=r.perSlideOffset-.75*Math.abs(h);const A=e.virtual&&e.params.virtual.enabled?e.virtual.from+o:o,j=(A===a||A===a-1)&&h>0&&h<1&&(f||e.params.cssMode)&&p<n,z=(A===a||A===a+1)&&h<0&&h>-1&&(f||e.params.cssMode)&&p>n;if(j||z){const v=(1-Math.abs((Math.abs(h)-.5)/.5))**.5;S+=-28*h*v,E+=-.5*v,T+=96*v,u=-25*v*Math.abs(h)+"%"}if(x=h<0?`calc(${x}px ${c?"-":"+"} (${T*Math.abs(h)}%))`:h>0?`calc(${x}px ${c?"-":"+"} (-${T*Math.abs(h)}%))`:`${x}px`,!e.isHorizontal()){const v=u;u=x,x=v}const k=h<0?""+(1+(1-E)*h):""+(1-(1-E)*h),m=`
        translate3d(${x}, ${u}, ${w}px)
        rotateZ(${r.rotate?c?-S:S:0}deg)
        scale(${k})
      `;if(r.slideShadows){let v=d.querySelector(".swiper-slide-shadow");v||(v=le("cards",d)),v&&(v.style.opacity=Math.min(Math.max((Math.abs(h)-.5)/.5,0),1))}d.style.zIndex=-Math.abs(Math.round(b))+i.length,pe(r,d).style.transform=m}},setTransition:i=>{const a=e.slides.map(c=>se(c));a.forEach(c=>{c.style.transitionDuration=`${i}ms`,c.querySelectorAll(".swiper-slide-shadow").forEach(r=>{r.style.transitionDuration=`${i}ms`})}),we({swiper:e,duration:i,transformElements:a})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!e.params.cssMode})})}const _s=[gs,ws,ys,Ss,Ms,Es,Ts,Cs,zs,ks,js,Ls,Ps,As,Is,$s,Gs,Ns,qs,Xs,Ys,Rs,Fs];N.use(_s);let Ws=`
<!--Header start-->
    <div
      class="w-full mobile:h-[103px] desktop:h-[170px] bg-[#fff] shadow-[0px_1px_1px__#2b2b2b55] *:text-nowrap  sticky top-0 z-[9999999]"
    >
      <!--banner start-->
      <div class="w-full mobile:h-[35px] desktop:h-[60px]">
        <img
          class="h-full w-full object-cover"
          src="./images/header-banner.gif"
          alt="banner"
        />
      </div>
      <!--banner start-->
      <!--middle header start-->
      <div class="w-full h-[68px] flex">
        <div
          class="w-[10%] pr-5 h-[inherit] mobile:hidden desktop:flex justify-center items-center"
        >
          <img src="./images/logo.svg" alt="logo" />
        </div>
        <div
          class="desktop:w-[66%] mobile:w-full h-[inherit] px-[16px] flex items-center mobile:justify-center desktop:justify-start"
        >
          <div
            class="desktop:w-[600px] mobile:w-full h-[44px] bg-[#efefef] desktop:rounded-[8px] mobile:rounded-[40px] p-[8px] flex items-center gap-x-3"
          >
            <svg viewBox="0 0 24 24" class="w-[24px] h-[24px] fill-[#aaaaaabb]">
              <path
                fill-rule="evenodd"
                d="M10.5 18a7.5 7.5 0 115.973-2.963l4.369 4.246-1.394 1.434-4.387-4.263A7.467 7.467 0 0110.5 18zm5.5-7.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="جستجو"
              class="bg-transparent border-none outline-none text-[12px] font-yekan mobile:hidden desktop:block"
            />
            <span
              class="flex desktop:hidden text-[12px] gap-x-[8px] text-[#2b2b2bbb]"
            >
              جستجو در

              <svg
                class="w-[61px] h-[16px]"
                width="136"
                height="36"
                viewBox="0 0 136 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M112.005 13C111.423 13 111.005 13.418 111.005 14V21C111.005 22.3628 110.368 23 109.005 23H100.007V15.5C100.007 11.2647 96.7428 8 92.5083 8H86.0096C85.4045 8 84.3749 8.01669 84.01 8.5L82.0104 11.5C81.6256 12.0092 81.8723 13 82.5103 13H92.5083C93.8711 13 95.0079 14.137 95.0079 15.5V23H74.0119C73.4294 23 73.0121 23.4176 73.0121 24V27C73.0121 27.5826 73.4294 28 74.0119 28H78.0111C78.0111 29.363 76.3745 31 75.0117 31H66.0134C64.6509 31 64.0138 30.363 64.0138 29V19C64.0138 18.4182 63.5959 18 63.014 18H60.0146C59.4327 18 59.0148 18.4182 59.0148 19V29C59.0148 33.5 61.5143 36 66.0134 36H75.0117C79.2462 36 83.0102 32.2353 83.0102 28H99.0071C99.588 28 100.007 27.5808 100.007 27V26L101.098 27.3892C101.463 27.8724 101.901 28 102.506 28H109.005C113.24 28 116.004 25.2353 116.004 21V14C116.004 13.418 115.586 13 115.004 13H112.005ZM105.006 31C104.424 31 104.006 31.4176 104.006 32V35C104.006 35.5826 104.424 36 105.006 36H113.004C113.587 36 114.004 35.5826 114.004 35V32C114.004 31.4176 113.587 31 113.004 31H105.006ZM87.0094 31C86.4271 31 86.0096 31.4176 86.0096 32V35C86.0096 35.5826 86.4271 36 87.0094 36H90.5087C91.091 36 91.5085 35.5826 91.5085 35V32C91.5085 31.4176 91.091 31 90.5087 31H87.0094ZM120.003 8C119.421 8 119.003 8.41803 119.003 9V12C119.003 12.5818 119.421 13 120.003 13H129.001C130.364 13 131.001 13.637 131.001 15V21C131.001 22.3628 130.364 23 129.001 23H120.003C119.421 23 119.003 23.4178 119.003 24V27C119.003 27.582 119.421 28 120.003 28H129.001C133.236 28 136 25.2353 136 21V15C136 10.7647 133.236 8 129.001 8H120.003ZM42.5179 8L47.5664 1.49549C48.0588 0.9 47.6354 0 46.8626 0H43.0217C42.41 0 41.83 0.273083 41.44 0.744663L33.0198 11.5C32.4465 12.1935 32.6198 13 33.5197 13H45.0175C47.8788 13 50.0165 15.1381 50.0165 18V23H30.0203C28.7378 23 28.0207 22.3453 28.0207 21V5C28.0207 4.41823 27.6026 4 27.0209 4H24.0215C23.4396 4 23.0217 4.41823 23.0217 5V21C23.0217 25.5 26.521 28 31.0201 28H54.0157C54.5966 28 55.0155 27.5808 55.0155 27V18C55.0155 12.2657 50.7505 8 45.0175 8H42.5179ZM16.023 4C15.4414 4 15.0232 4.41823 15.0232 5V21C15.0232 22.3632 14.3866 23 13.0236 23H2.02571C1.44386 23 1.0259 23.4182 1.0259 24V27C1.0259 27.5822 1.44386 28 2.02571 28H13.0236C17.5227 28 20.0223 25.5 20.0223 21V5C20.0223 4.41823 19.6043 4 19.0224 4H16.023ZM3.84313 18.7288L0.026095 5C-0.130803 4.44289 0.44723 4 1.0259 4H3.68383C4.21517 4 4.7962 4.23056 4.94037 4.74232L9.04094 18.6329C9.19664 19.1859 8.84274 19.6112 8.26844 19.6112H5.00863C4.46615 19.6112 3.99009 19.2507 3.84313 18.7288Z"
                  fill="#EF394E"
                />
              </svg>
            </span>
          </div>
        </div>
        <div
          class="w-[24%] pl-5 h-[inherit] mobile:hidden desktop:flex items-center gap-x-3 justify-end"
        >
          <a
            href="./account.html"
            class="h-[40px] px-[16px] py-[8px] bg-[#fff] border-[1px] flex w-fit rounded-[8px] font-bold gap-x-1 items-center text-[12px] leading-[40px] text-[#2b2b2b]/[0.7]"
          >
            <svg
              class="w-[24px] h-[24px] fill-[#2b2b2b]/[0.7]"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M16 15h-2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v2h2V7a4 4 0 00-4-4H6a4 4 0 00-4 4v10a4 4 0 004 4h6a4 4 0 004-4v-2zm6-4H9.414l2.293-2.293-1.414-1.414-4 4a1 1 0 000 1.414l4 4 1.414-1.414L9.414 13H22v-2z"
                clip-rule="evenodd"
              ></path>
            </svg>
            ورود
            <span class="inline-block w-px h-[12px] bg-[#2b2b2b]"></span>
            ثبت نام
          </a>

          <span class="inline-block w-px h-[22px] bg-[#2b2b2b57]"></span>
          <a href="#">
            <svg viewBox="0 0 24 24" class="w-[24px] h-[24px] fill-[#2b2b2bbb]">
              <path
                fill-rule="evenodd"
                d="M20 4h2V2h-3a1 1 0 00-1 1v1H3a1 1 0 00-.995 1.1l1 10A1 1 0 004 16h15a1 1 0 001-1V4zm-2 17a2 2 0 110-4 2 2 0 010 4zM5 21a2 2 0 110-4 2 2 0 010 4zm13-7V6H4.105l.8 8H18z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <!--middle header start-->
      <div class="w-full h-[42px] mobile:hidden desktop:flex justify-between">
        <nav class="h-[inherit] w-fit pr-2 flex items-center">
          <div class="text-[14px] mx-2 h-full relative group">
            <a
              class="flex items-center h-full leading-[42px] font-bold"
              href="#"
            >
              <svg viewBox="0 0 24 24" class="w-[24px] h-[24px]">
                <path
                  fill-rule="evenodd"
                  d="M19 8V6H5v2h14zm0 3v2H5v-2h14zm0 5v2H5v-2h14z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              دسته بندی کالا ها</a
            >
            <div
              class="w-[1100px] z-[999999999999999999] h-[calc(95vh-170px)] bg-red-500 absolute top-full hidden group-hover:block"
            >
              <div class="w-[200px] h-[100%] overflow-auto" dir="ltr">
                <div
                  class="w-full h-[45px] flex justify-end items-center pr-3 text-[12px] bg-[#f5f5f5] hover:bg-[#fff] transition-all duration-300 text-[#2b2b2bee] hover:text-[#ef4056] group/y group/q"
                >
                  <a class="flex gap-x-2" href="#">
                    موبایل
                    <svg
                      class="w-[18px] h-[18px] fill-[#2b2b2bbb] group-hover/y:fill-[#ef4056]"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 27.442 27.442"
                      xml:space="preserve"
                    >
                      <g>
                        <path
                          d="M19.494,0H7.948C6.843,0,5.951,0.896,5.951,1.999v23.446c0,1.102,0.892,1.997,1.997,1.997h11.546
                   c1.103,0,1.997-0.895,1.997-1.997V1.999C21.491,0.896,20.597,0,19.494,0z M10.872,1.214h5.7c0.144,0,0.261,0.215,0.261,0.481
                   s-0.117,0.482-0.261,0.482h-5.7c-0.145,0-0.26-0.216-0.26-0.482C10.612,1.429,10.727,1.214,10.872,1.214z M13.722,25.469
                   c-0.703,0-1.275-0.572-1.275-1.276s0.572-1.274,1.275-1.274c0.701,0,1.273,0.57,1.273,1.274S14.423,25.469,13.722,25.469z
                    M19.995,21.1  H7.448V3.373h12.547V21.1z"
                        />
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                      </g>
                    </svg>
                  </a>

                  <div
                    class="w-[900px] h-full bg-[#fff] absolute top-0 left-0 flex gap-x-1 flex-row-reverse group-hover/q:flex overflow-auto c"
                  >
                    <div
                      class="w-[25%] h-fit flex flex-col items-end pr-3 text-[13px] gap-y-3 py-4"
                    >
                      <div
                        class="w-full h-[40px] bg-transparent flex items-end"
                      >
                        <a href="#" class="flex justify-start items-end">
                          <p class="text-[#2a78ff] flex ml-20 font-bold">
                            <svg
                              viewBox="0 0 24 24"
                              class="w-[18px] h-[18px] fill-[#0084ff]"
                            >
                              <path
                                d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"
                              ></path>
                            </svg>
                            همه محصولات موبایل
                          </p>
                        </a>
                      </div>

                      <a
                        class="text-[#2b2b2bbb] hover:text-[#ef4056] font-bold flex"
                        href=""
                      >
                        <svg
                          viewBox="0 0 24 24"
                          class="w-[18px] h-[18px] fill-[#000000]"
                        >
                          <path
                            d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"
                          ></path>
                        </svg>
                        برند های مختلف گوشی موبایل
                        <span
                          class="w-[2px] h-[13px] bg-orange-600 ml-2 mt-1"
                        ></span> </a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >گوشی شیاومی </a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >گوشی سونی </a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href="">
                        گوشی سامسونگ</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >گوشی نوکیا </a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >گوشی داریا </a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >گوشی موتورولا </a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href="">
                        گوشی انر</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href="">
                        گوشی ناتینگ فون</a
                      ><a
                        class="text-[#2b2b2bbb] hover:text-[#ef4056] font-bold flex"
                        href=""
                      >
                        <svg
                          viewBox="0 0 24 24"
                          class="w-[18px] h-[18px] fill-[#000000]"
                        >
                          <path
                            d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"
                          ></path>
                        </svg>
                        تبلت
                        <span
                          class="w-[2px] h-[13px] bg-orange-600 ml-2 mt-1"
                        ></span> </a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href="">
                        گوشی هواوی</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href="">
                        گوشی جی ای ایکس</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href="">
                        گوشی ال جی</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >گوشی ریلمی</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >گوشی انر</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >گوشی پوکو</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >گوشی بلک بری </a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >گوشی ورتو</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >گوشی پلاستیکی</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >گوشی شبخیر</a
                      >
                    </div>
                    <div
                      class="w-[25%] h-fit flex flex-col items-end pr-3 text-[13px] gap-y-3 py-4"
                    >
                      <div class="w-full h-[40px] bg-transparent"></div>
                      <a
                        class="text-[#2b2b2bbb] hover:text-[#ef4056] font-bold flex"
                        href=""
                      >
                        <svg
                          viewBox="0 0 24 24"
                          class="w-[18px] h-[18px] fill-[#000000]"
                        >
                          <path
                            d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"
                          ></path>
                        </svg>
                        گوشی بر اساس قیمت
                        <span
                          class="w-[2px] h-[13px] bg-orange-600 ml-2 mt-1"
                        ></span> </a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href="">
                        گوشی موبایل ارزون</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >گوشی موبایل گرون</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href="">
                        گوشی موبایل قسطی</a
                      ><a
                        class="text-[#2b2b2bbb] hover:text-[#ef4056] font-bold flex"
                        href=""
                      >
                        <svg
                          viewBox="0 0 24 24"
                          class="w-[18px] h-[18px] fill-[#000000]"
                        >
                          <path
                            d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"
                          ></path>
                        </svg>
                        گوشی بر اساس عملکرد
                        <span
                          class="w-[2px] h-[13px] bg-orange-600 ml-2 mt-1"
                        ></span> </a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >گوشی گیمینگ </a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >5Gگوشی</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >گوشی روزمره </a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href="">
                        گوشی نشکن</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href="">
                        گوشی کلاسیک</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href="">
                        گوشی فانتزی</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      >
                    </div>
                    <div
                      class="w-[25%] h-fit flex flex-col items-end pr-3 text-[13px] gap-y-3 py-4"
                    >
                      <div class="w-full h-[40px] bg-transparent"></div>
                      <a
                        class="text-[#2b2b2bbb] hover:text-[#ef4056] font-bold flex"
                        href=""
                      >
                        <svg
                          viewBox="0 0 24 24"
                          class="w-[18px] h-[18px] fill-[#000000]"
                        >
                          <path
                            d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"
                          ></path>
                        </svg>
                        لوازم جانبی موبایل
                        <span
                          class="w-[2px] h-[13px] bg-orange-600 ml-2 mt-1"
                        ></span> </a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href="">
                        سیم گوشی</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href="">
                        شارژر گوشی</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href="">
                        اداپتور</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href="">
                        گلس</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href="">
                        کاور</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href="">
                        محافظ</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href="">
                        هولدر</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href="">
                        پاور بانک</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      >
                    </div>
                    <div
                      class="w-[25%] h-fit flex flex-col items-end pr-3 text-[13px] gap-y-3 py-4"
                    >
                      <div class="w-full h-[40px] bg-transparent"></div>

                      <a
                        class="text-[#2b2b2bbb] hover:text-[#ef4056] font-bold flex"
                        href=""
                      >
                        <svg
                          viewBox="0 0 24 24"
                          class="w-[18px] h-[18px] fill-[#000000]"
                        >
                          <path
                            d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"
                          ></path>
                        </svg>
                        داغ ترین ها
                        <span
                          class="w-[2px] h-[13px] bg-orange-600 ml-2 mt-1"
                        ></span> </a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a
                        class="text-[#2b2b2bbb] hover:text-[#ef4056] font-bold flex"
                        href=""
                      >
                        <svg
                          viewBox="0 0 24 24"
                          class="w-[18px] h-[18px] fill-[#000000]"
                        >
                          <path
                            d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"
                          ></path>
                        </svg>
                        در لحظه
                        <span
                          class="w-[2px] h-[13px] bg-orange-600 ml-2 mt-1"
                        ></span> </a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      >
                    </div>
                  </div>
                </div>
                <div
                  class="w-full h-[45px] flex justify-end items-center pr-3 text-[12px] bg-[#f5f5f5] hover:bg-[#fff] transition-all duration-300 text-[#2b2b2bee] hover:text-[#ef4056] group/y group/q"
                >
                  <a class="flex gap-x-2" href="#">
                    کالای دیجیتال
                    <svg
                      class="w-[18px] h-[18px] fill-[#2b2b2bbb] group-hover/y:fill-[#ef4056]"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 463 463"
                      xml:space="preserve"
                    >
                      <g>
                        <g>
                          <g>
                            <path
                              d="M455.5,348H447V99.5c0-17.369-14.131-31.5-31.5-31.5h-368C30.131,68,16,82.131,16,99.5V348H7.5
                       c-4.142,0-7.5,3.358-7.5,7.5v16C0,384.458,10.542,395,23.5,395h416c12.958,0,23.5-10.542,23.5-23.5v-16
                       C463,351.358,459.642,348,455.5,348z M31,99.5C31,90.402,38.402,83,47.5,83h368c9.098,0,16.5,7.402,16.5,16.5V348H31V99.5z
                        M448,371.5c0,4.687-3.813,8.5-8.5,8.5h-416c-4.687,0-8.5-3.813-8.5-8.5V363h169.025c-0.011,0.166-0.025,0.331-0.025,0.5
                       c0,4.142,3.358,7.5,7.5,7.5h80c4.142,0,7.5-3.358,7.5-7.5c0-0.169-0.014-0.334-0.025-0.5H448V371.5z"
                            />
                            <path
                              d="M407.5,100h-352c-4.142,0-7.5,3.358-7.5,7.5v216c0,4.142,3.358,7.5,7.5,7.5h352c4.142,0,7.5-3.358,7.5-7.5v-216
                       C415,103.358,411.642,100,407.5,100z M400,316H63V115h337V316z"
                            />
                          </g>
                        </g>
                      </g></svg
                  ></a>
                  <div
                    class="w-[900px] h-full bg-[#fff] absolute top-0 left-0 hidden gap-x-1 flex-row-reverse group-hover/q:flex overflow-auto c"
                  >
                    <div
                      class="w-[25%] h-fit flex flex-col items-end pr-3 text-[13px] gap-y-3 py-4"
                    >
                      <div
                        class="w-full h-[40px] bg-transparent flex items-end"
                      >
                        <a href="#" class="flex justify-start items-end">
                          <p class="text-[#2a78ff] flex ml-20 font-bold">
                            <svg
                              viewBox="0 0 24 24"
                              class="w-[18px] h-[18px] fill-[#0084ff]"
                            >
                              <path
                                d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"
                              ></path>
                            </svg>
                            محصولات دیجیتالی
                          </p>
                        </a>
                      </div>

                      <a
                        class="text-[#2b2b2bbb] hover:text-[#ef4056] font-bold flex"
                        href=""
                      >
                        <svg
                          viewBox="0 0 24 24"
                          class="w-[18px] h-[18px] fill-[#000000]"
                        >
                          <path
                            d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"
                          ></path>
                        </svg>
                        برند های مختلف لپ تاپ
                        <span
                          class="w-[2px] h-[13px] bg-orange-600 ml-2 mt-1"
                        ></span> </a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >گوشی شیاومی </a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >گوشی سونی </a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href="">
                        گوشی سامسونگ</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >گوشی نوکیا </a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >گوشی داریا </a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >گوشی موتورولا </a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href="">
                        گوشی انر</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href="">
                        گوشی ناتینگ فون</a
                      ><a
                        class="text-[#2b2b2bbb] hover:text-[#ef4056] font-bold flex"
                        href=""
                      >
                        <svg
                          viewBox="0 0 24 24"
                          class="w-[18px] h-[18px] fill-[#000000]"
                        >
                          <path
                            d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"
                          ></path>
                        </svg>
                        ایپد
                        <span
                          class="w-[2px] h-[13px] bg-orange-600 ml-2 mt-1"
                        ></span> </a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href="">
                        گوشی هواوی</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href="">
                        گوشی جی ای ایکس</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href="">
                        گوشی ال جی</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >گوشی ریلمی</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >گوشی انر</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >گوشی پوکو</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >گوشی بلک بری </a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >گوشی ورتو</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >گوشی پلاستیکی</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >گوشی شبخیر</a
                      >
                    </div>
                    <div
                      class="w-[25%] h-fit flex flex-col items-end pr-3 text-[13px] gap-y-3 py-4"
                    >
                      <div class="w-full h-[40px] bg-transparent"></div>
                      <a
                        class="text-[#2b2b2bbb] hover:text-[#ef4056] font-bold flex"
                        href=""
                      >
                        <svg
                          viewBox="0 0 24 24"
                          class="w-[18px] h-[18px] fill-[#000000]"
                        >
                          <path
                            d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"
                          ></path>
                        </svg>
                        لپ تاپ بر اساس قیمت
                        <span
                          class="w-[2px] h-[13px] bg-orange-600 ml-2 mt-1"
                        ></span> </a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href="">
                        گوشی موبایل ارزون</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >گوشی موبایل گرون</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href="">
                        گوشی موبایل قسطی</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >گوشی گیمینگ </a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >5Gگوشی</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >گوشی روزمره </a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href="">
                        گوشی نشکن</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href="">
                        گوشی کلاسیک</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href="">
                        گوشی فانتزی</a
                      >
                    </div>
                    <div
                      class="w-[25%] h-fit flex flex-col items-end pr-3 text-[13px] gap-y-3 py-4"
                    >
                      <div class="w-full h-[40px] bg-transparent"></div>
                      <a
                        class="text-[#2b2b2bbb] hover:text-[#ef4056] font-bold flex"
                        href=""
                      >
                        <svg
                          viewBox="0 0 24 24"
                          class="w-[18px] h-[18px] fill-[#000000]"
                        >
                          <path
                            d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"
                          ></path>
                        </svg>
                        لوازم جانبی موبایل
                        <span
                          class="w-[2px] h-[13px] bg-orange-600 ml-2 mt-1"
                        ></span> </a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href="">
                        سیم گوشی</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href="">
                        شارژر گوشی</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href="">
                        اداپتور</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href="">
                        گلس</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href="">
                        کاور</a
                      ><a
                        class="text-[#2b2b2bbb] hover:text-[#ef4056] font-bold flex"
                        href=""
                      >
                        <svg
                          viewBox="0 0 24 24"
                          class="w-[18px] h-[18px] fill-[#000000]"
                        >
                          <path
                            d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"
                          ></path>
                        </svg>
                        اصلی
                        <span
                          class="w-[2px] h-[13px] bg-orange-600 ml-2 mt-1"
                        ></span> </a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href="">
                        هولدر</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href="">
                        پاور بانک</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      >
                    </div>
                    <div
                      class="w-[25%] h-fit flex flex-col items-end pr-3 text-[13px] gap-y-3 py-4"
                    >
                      <div class="w-full h-[40px] bg-transparent"></div>

                      <a
                        class="text-[#2b2b2bbb] hover:text-[#ef4056] font-bold flex"
                        href=""
                      >
                        <svg
                          viewBox="0 0 24 24"
                          class="w-[18px] h-[18px] fill-[#000000]"
                        >
                          <path
                            d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"
                          ></path>
                        </svg>
                        داغ ترین ها
                        <span
                          class="w-[2px] h-[13px] bg-orange-600 ml-2 mt-1"
                        ></span> </a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a
                        class="text-[#2b2b2bbb] hover:text-[#ef4056] font-bold flex"
                        href=""
                      >
                        <svg
                          viewBox="0 0 24 24"
                          class="w-[18px] h-[18px] fill-[#000000]"
                        >
                          <path
                            d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"
                          ></path>
                        </svg>
                        در لحظه
                        <span
                          class="w-[2px] h-[13px] bg-orange-600 ml-2 mt-1"
                        ></span> </a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      >
                      >
                    </div>
                  </div>
                </div>
                <div
                  class="w-full h-[45px] flex justify-end items-center pr-3 text-[12px] bg-[#f5f5f5] hover:bg-[#fff] transition-all duration-300 text-[#2b2b2bee] hover:text-[#ef4056] group/y group/q"
                >
                  <a class="flex gap-x-2" href="#"
                    >کتاب
                    <svg
                      class="w-[18px] h-[18px] fill-[#2b2b2bbb] group-hover/y:fill-[#ef4056]"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      width="800px"
                      height="800px"
                      viewBox="0 0 528.899 528.899"
                      xml:space="preserve"
                    >
                      <g>
                        <path
                          d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981
		c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611
		C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069
		L27.473,390.597L0.3,512.69z"
                        />
                      </g>
                    </svg>
                  </a>
                  <div
                    class="w-[900px] h-full bg-[#fff] absolute top-0 left-0 hidden gap-x-1 flex-row-reverse group-hover/q:flex overflow-auto c"
                  >
                    <div
                      class="w-[25%] h-fit flex flex-col items-end pr-3 text-[13px] gap-y-3 py-4"
                    >
                      <div
                        class="w-full h-[40px] bg-transparent flex items-end"
                      >
                        <a href="#" class="flex justify-start items-end">
                          <p class="text-[#2a78ff] flex ml-20 font-bold">
                            <svg
                              viewBox="0 0 24 24"
                              class="w-[18px] h-[18px] fill-[#0084ff]"
                            >
                              <path
                                d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"
                              ></path>
                            </svg>
                            همه محصولات کتاب
                          </p>
                        </a>
                      </div>

                      <a
                        class="text-[#2b2b2bbb] hover:text-[#ef4056] font-bold flex"
                        href=""
                      >
                        <svg
                          viewBox="0 0 24 24"
                          class="w-[18px] h-[18px] fill-[#000000]"
                        >
                          <path
                            d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"
                          ></path>
                        </svg>
                        ژانر های مختلف کتاب
                        <span
                          class="w-[2px] h-[13px] bg-orange-600 ml-2 mt-1"
                        ></span> </a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >گوشی شیاومی </a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >گوشی سونی </a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href="">
                        گوشی سامسونگ</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >گوشی نوکیا </a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >گوشی داریا </a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >گوشی موتورولا </a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href="">
                        گوشی انر</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href="">
                        گوشی ناتینگ فون</a
                      ><a
                        class="text-[#2b2b2bbb] hover:text-[#ef4056] font-bold flex"
                        href=""
                      >
                        <svg
                          viewBox="0 0 24 24"
                          class="w-[18px] h-[18px] fill-[#000000]"
                        >
                          <path
                            d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"
                          ></path>
                        </svg>
                        تبلت
                        <span
                          class="w-[2px] h-[13px] bg-orange-600 ml-2 mt-1"
                        ></span> </a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href="">
                        گوشی هواوی</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href="">
                        گوشی جی ای ایکس</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href="">
                        گوشی ال جی</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >گوشی ریلمی</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >گوشی انر</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >گوشی پوکو</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >گوشی بلک بری </a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >گوشی ورتو</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >گوشی پلاستیکی</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >گوشی شبخیر</a
                      >
                    </div>
                    <div
                      class="w-[25%] h-fit flex flex-col items-end pr-3 text-[13px] gap-y-3 py-4"
                    >
                      <div class="w-full h-[40px] bg-transparent"></div>
                      <a
                        class="text-[#2b2b2bbb] hover:text-[#ef4056] font-bold flex"
                        href=""
                      >
                        <svg
                          viewBox="0 0 24 24"
                          class="w-[18px] h-[18px] fill-[#000000]"
                        >
                          <path
                            d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"
                          ></path>
                        </svg>
                        گوشی بر اساس قیمت
                        <span
                          class="w-[2px] h-[13px] bg-orange-600 ml-2 mt-1"
                        ></span> </a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href="">
                        گوشی موبایل ارزون</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >گوشی موبایل گرون</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href="">
                        گوشی موبایل قسطی</a
                      ><a
                        class="text-[#2b2b2bbb] hover:text-[#ef4056] font-bold flex"
                        href=""
                      >
                        <svg
                          viewBox="0 0 24 24"
                          class="w-[18px] h-[18px] fill-[#000000]"
                        >
                          <path
                            d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"
                          ></path>
                        </svg>
                        گوشی بر اساس عملکرد
                        <span
                          class="w-[2px] h-[13px] bg-orange-600 ml-2 mt-1"
                        ></span> </a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >گوشی گیمینگ </a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >5Gگوشی</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >گوشی روزمره </a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href="">
                        گوشی نشکن</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href="">
                        گوشی کلاسیک</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href="">
                        گوشی فانتزی</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      >
                    </div>
                    <div
                      class="w-[25%] h-fit flex flex-col items-end pr-3 text-[13px] gap-y-3 py-4"
                    >
                      <div class="w-full h-[40px] bg-transparent"></div>
                      <a
                        class="text-[#2b2b2bbb] hover:text-[#ef4056] font-bold flex"
                        href=""
                      >
                        <svg
                          viewBox="0 0 24 24"
                          class="w-[18px] h-[18px] fill-[#000000]"
                        >
                          <path
                            d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"
                          ></path>
                        </svg>
                        لوازم جانبی موبایل
                        <span
                          class="w-[2px] h-[13px] bg-orange-600 ml-2 mt-1"
                        ></span> </a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href="">
                        سیم گوشی</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href="">
                        شارژر گوشی</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href="">
                        اداپتور</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href="">
                        گلس</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href="">
                        کاور</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href="">
                        محافظ</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href="">
                        هولدر</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href="">
                        پاور بانک</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      >
                    </div>
                    <div
                      class="w-[25%] h-fit flex flex-col items-end pr-3 text-[13px] gap-y-3 py-4"
                    >
                      <div class="w-full h-[40px] bg-transparent"></div>
                      <div class="w-full h-[40px] bg-transparent"></div>
                      <a
                        class="text-[#2b2b2bbb] hover:text-[#ef4056] font-bold flex"
                        href=""
                      >
                        <svg
                          viewBox="0 0 24 24"
                          class="w-[18px] h-[18px] fill-[#000000]"
                        >
                          <path
                            d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"
                          ></path>
                        </svg>
                        داغ ترین ها
                        <span
                          class="w-[2px] h-[13px] bg-orange-600 ml-2 mt-1"
                        ></span> </a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a
                        class="text-[#2b2b2bbb] hover:text-[#ef4056] font-bold flex"
                        href=""
                      >
                        <svg
                          viewBox="0 0 24 24"
                          class="w-[18px] h-[18px] fill-[#000000]"
                        >
                          <path
                            d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"
                          ></path>
                        </svg>
                        در لحظه
                        <span
                          class="w-[2px] h-[13px] bg-orange-600 ml-2 mt-1"
                        ></span> </a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      ><a class="text-[#2b2b2bbb] hover:text-[#ef4056]" href=""
                        >خرید موبایل</a
                      >
                    </div>
                  </div>
                </div>
                <div
                  class="w-full h-[45px] flex justify-end items-center pr-3 text-[12px] bg-[#f5f5f5] hover:bg-[#fff] transition-all duration-300 text-[#2b2b2bee] hover:text-[#ef4056] group/y"
                >
                  <a class="flex gap-x-2" href="#"
                    >خانه و آشپزخانه
                    <svg
                      class="w-[18px] h-[18px] fill-[#2b2b2bbb] group-hover/y:fill-[#ef4056]"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 226.6 226.6"
                      xml:space="preserve"
                    >
                      <path
                        d="M200.575,190.073H26.023c-2.209,0-4-1.791-4-4v-42.706C9.247,140.193,0,128.643,0,115.177
	c0-13.744,9.588-25.291,22.425-28.304c1.431-28.004,24.663-50.348,53.017-50.348h73.002c28.182,0,51.306,22.076,52.988,49.842
	c14.191,1.912,25.168,14.103,25.168,28.809c0,13.466-9.247,25.015-22.024,28.19v42.706
	C204.575,188.282,202.784,190.073,200.575,190.073z M176.46,182.073h20.115v-42.029c0-2.023,1.51-3.727,3.519-3.971
	c10.55-1.28,18.506-10.264,18.506-20.896c0-11.618-9.452-21.07-21.07-21.07s-21.069,9.452-21.069,21.069V182.073z M58.14,182.073
	h110.32v-37.426H58.14V182.073z M30.023,182.073H50.14v-66.896c0-11.618-9.452-21.069-21.07-21.069
	c-0.721,0-1.433,0.037-2.135,0.107c-0.096,0.014-0.191,0.024-0.289,0.031C16.165,95.452,8,104.379,8,115.177
	c0,10.632,7.955,19.616,18.505,20.896c2.009,0.244,3.519,1.948,3.519,3.971V182.073z M58.14,136.648h110.32v-1.942
	c0-5.964-4.853-10.816-10.816-10.816H68.955c-5.964,0-10.815,4.852-10.815,10.816V136.648z M68.955,115.89h88.688
	c4.022,0,7.755,1.269,10.816,3.427v-4.14c0-14.633,10.868-26.775,24.956-28.779c-1.653-23.367-21.192-41.872-44.973-41.872H75.441
	c-23.693,0-43.177,18.37-44.954,41.616c15.374,0.742,27.652,13.482,27.652,29.035v4.14C61.201,117.158,64.933,115.89,68.955,115.89z
	"
                      />
                    </svg>
                  </a>
                </div>
                <div
                  class="w-full h-[45px] flex justify-end items-center pr-3 text-[12px] bg-[#f5f5f5] hover:bg-[#fff] transition-all duration-300 text-[#2b2b2bee] hover:text-[#ef4056] group/y"
                >
                  <a class="flex gap-x-2" href="#"
                    >لوازم خانگی
                    <svg
                      class="w-[18px] h-[18px] fill-[#2b2b2bbb] group-hover/y:fill-[#ef4056]"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 463 463"
                      xml:space="preserve"
                    >
                      <g>
                        <path
                          d="M367.5,0h-272C86.953,0,80,6.953,80,15.5v432c0,8.547,6.953,15.5,15.5,15.5h272c8.547,0,15.5-6.953,15.5-15.5v-432
		C383,6.953,376.047,0,367.5,0z M95,447.5v-432c0-0.276,0.224-0.5,0.5-0.5H200v433H95.5C95.224,448,95,447.776,95,447.5z M368,447.5
		c0,0.276-0.224,0.5-0.5,0.5H215V15h152.5c0.276,0,0.5,0.224,0.5,0.5V447.5z"
                        />
                        <path
                          d="M175.5,136c-4.142,0-7.5,3.358-7.5,7.5v176c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-176
		C183,139.358,179.642,136,175.5,136z"
                        />
                        <path
                          d="M239.5,136c-4.142,0-7.5,3.358-7.5,7.5v176c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-176
		C247,139.358,243.642,136,239.5,136z"
                        />
                        <path
                          d="M151.5,184h-40c-4.142,0-7.5,3.358-7.5,7.5v80c0,4.142,3.358,7.5,7.5,7.5h40c4.142,0,7.5-3.358,7.5-7.5v-80
		C159,187.358,155.642,184,151.5,184z M144,199v9h-25v-9H144z M119,264v-41h25v41H119z"
                        />
                      </g>
                    </svg>
                  </a>
                </div>
                <div
                  class="w-full h-[45px] flex justify-end items-center pr-3 text-[12px] bg-[#f5f5f5] hover:bg-[#fff] transition-all duration-300 text-[#2b2b2bee] hover:text-[#ef4056] group/y"
                >
                  <a class="flex gap-x-2" href="#"
                    >مد وپوشاک
                    <svg
                      class="w-[18px] h-[18px] fill-[#2b2b2bbb] group-hover/y:fill-[#ef4056]"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 230.057 230.057"
                      xml:space="preserve"
                    >
                      <g>
                        <path
                          d="M228.579,83.315l-32.147-41.258c-7.817-10.032-19.594-15.785-32.312-15.785h-21.204c-2.939,0-5.565,1.836-6.574,4.597
		c-3.257,8.909-11.822,14.895-21.313,14.895s-18.055-5.986-21.313-14.895c-1.009-2.761-3.635-4.597-6.574-4.597H65.937
		c-12.717,0-24.495,5.753-32.312,15.786L1.479,83.315c-1.397,1.793-1.837,4.152-1.179,6.328c0.658,2.176,2.331,3.897,4.488,4.615
		l44.558,14.845v87.682c0,3.866,3.134,7,7,7h117.366c3.866,0,7-3.134,7-7v-87.682l44.558-14.845c2.157-0.718,3.83-2.439,4.488-4.615
		C230.416,87.467,229.976,85.108,228.579,83.315z M180.712,94.347V84.057c0-3.866-3.134-7-7-7s-7,3.134-7,7v105.728H63.345V84.057
		c0-3.866-3.134-7-7-7s-7,3.134-7,7v10.29l-30.736-10.24l26.059-33.444c5.146-6.604,12.897-10.391,21.269-10.391h16.681
		c6.295,11.832,18.761,19.491,32.41,19.491c13.649,0,26.115-7.66,32.411-19.491h16.681c8.371,0,16.123,3.787,21.269,10.39
		l26.06,33.445L180.712,94.347z"
                        />
                      </g>
                    </svg>
                  </a>
                </div>
                <div
                  class="w-full h-[45px] flex justify-end items-center pr-3 text-[12px] bg-[#f5f5f5] hover:bg-[#fff] transition-all duration-300 text-[#2b2b2bee] hover:text-[#ef4056] group/y"
                >
                  <a class="flex gap-x-2" href="#">
                    موبایل
                    <svg
                      class="w-[18px] h-[18px] fill-[#2b2b2bbb] group-hover/y:fill-[#ef4056]"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 27.442 27.442"
                      xml:space="preserve"
                    >
                      <g>
                        <path
                          d="M19.494,0H7.948C6.843,0,5.951,0.896,5.951,1.999v23.446c0,1.102,0.892,1.997,1.997,1.997h11.546
                   c1.103,0,1.997-0.895,1.997-1.997V1.999C21.491,0.896,20.597,0,19.494,0z M10.872,1.214h5.7c0.144,0,0.261,0.215,0.261,0.481
                   s-0.117,0.482-0.261,0.482h-5.7c-0.145,0-0.26-0.216-0.26-0.482C10.612,1.429,10.727,1.214,10.872,1.214z M13.722,25.469
                   c-0.703,0-1.275-0.572-1.275-1.276s0.572-1.274,1.275-1.274c0.701,0,1.273,0.57,1.273,1.274S14.423,25.469,13.722,25.469z
                    M19.995,21.1H7.448V3.373h12.547V21.1z"
                        />
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                      </g>
                    </svg>
                  </a>
                </div>
                <div
                  class="w-full h-[45px] flex justify-end items-center pr-3 text-[12px] bg-[#f5f5f5] hover:bg-[#fff] transition-all duration-300 text-[#2b2b2bee] hover:text-[#ef4056] group/y"
                >
                  <a class="flex gap-x-2" href="#">
                    کالای دیجیتال
                    <svg
                      class="w-[18px] h-[18px] fill-[#2b2b2bbb] group-hover/y:fill-[#ef4056]"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 463 463"
                      xml:space="preserve"
                    >
                      <g>
                        <g>
                          <g>
                            <path
                              d="M455.5,348H447V99.5c0-17.369-14.131-31.5-31.5-31.5h-368C30.131,68,16,82.131,16,99.5V348H7.5
                       c-4.142,0-7.5,3.358-7.5,7.5v16C0,384.458,10.542,395,23.5,395h416c12.958,0,23.5-10.542,23.5-23.5v-16
                       C463,351.358,459.642,348,455.5,348z M31,99.5C31,90.402,38.402,83,47.5,83h368c9.098,0,16.5,7.402,16.5,16.5V348H31V99.5z
                        M448,371.5c0,4.687-3.813,8.5-8.5,8.5h-416c-4.687,0-8.5-3.813-8.5-8.5V363h169.025c-0.011,0.166-0.025,0.331-0.025,0.5
                       c0,4.142,3.358,7.5,7.5,7.5h80c4.142,0,7.5-3.358,7.5-7.5c0-0.169-0.014-0.334-0.025-0.5H448V371.5z"
                            />
                            <path
                              d="M407.5,100h-352c-4.142,0-7.5,3.358-7.5,7.5v216c0,4.142,3.358,7.5,7.5,7.5h352c4.142,0,7.5-3.358,7.5-7.5v-216
                       C415,103.358,411.642,100,407.5,100z M400,316H63V115h337V316z"
                            />
                          </g>
                        </g>
                      </g></svg
                  ></a>
                </div>
                <div
                  class="w-full h-[45px] flex justify-end items-center pr-3 text-[12px] bg-[#f5f5f5] hover:bg-[#fff] transition-all duration-300 text-[#2b2b2bee] hover:text-[#ef4056] group/y"
                >
                  <a class="flex gap-x-2" href="#"
                    >کتاب
                    <svg
                      class="w-[18px] h-[18px] fill-[#2b2b2bbb] group-hover/y:fill-[#ef4056]"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      width="800px"
                      height="800px"
                      viewBox="0 0 528.899 528.899"
                      xml:space="preserve"
                    >
                      <g>
                        <path
                          d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981
		c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611
		C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069
		L27.473,390.597L0.3,512.69z"
                        />
                      </g>
                    </svg>
                  </a>
                </div>
                <div
                  class="w-full h-[45px] flex justify-end items-center pr-3 text-[12px] bg-[#f5f5f5] hover:bg-[#fff] transition-all duration-300 text-[#2b2b2bee] hover:text-[#ef4056] group/y"
                >
                  <a class="flex gap-x-2" href="#"
                    >خانه و آشپزخانه
                    <svg
                      class="w-[18px] h-[18px] fill-[#2b2b2bbb] group-hover/y:fill-[#ef4056]"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 226.6 226.6"
                      xml:space="preserve"
                    >
                      <path
                        d="M200.575,190.073H26.023c-2.209,0-4-1.791-4-4v-42.706C9.247,140.193,0,128.643,0,115.177
	c0-13.744,9.588-25.291,22.425-28.304c1.431-28.004,24.663-50.348,53.017-50.348h73.002c28.182,0,51.306,22.076,52.988,49.842
	c14.191,1.912,25.168,14.103,25.168,28.809c0,13.466-9.247,25.015-22.024,28.19v42.706
	C204.575,188.282,202.784,190.073,200.575,190.073z M176.46,182.073h20.115v-42.029c0-2.023,1.51-3.727,3.519-3.971
	c10.55-1.28,18.506-10.264,18.506-20.896c0-11.618-9.452-21.07-21.07-21.07s-21.069,9.452-21.069,21.069V182.073z M58.14,182.073
	h110.32v-37.426H58.14V182.073z M30.023,182.073H50.14v-66.896c0-11.618-9.452-21.069-21.07-21.069
	c-0.721,0-1.433,0.037-2.135,0.107c-0.096,0.014-0.191,0.024-0.289,0.031C16.165,95.452,8,104.379,8,115.177
	c0,10.632,7.955,19.616,18.505,20.896c2.009,0.244,3.519,1.948,3.519,3.971V182.073z M58.14,136.648h110.32v-1.942
	c0-5.964-4.853-10.816-10.816-10.816H68.955c-5.964,0-10.815,4.852-10.815,10.816V136.648z M68.955,115.89h88.688
	c4.022,0,7.755,1.269,10.816,3.427v-4.14c0-14.633,10.868-26.775,24.956-28.779c-1.653-23.367-21.192-41.872-44.973-41.872H75.441
	c-23.693,0-43.177,18.37-44.954,41.616c15.374,0.742,27.652,13.482,27.652,29.035v4.14C61.201,117.158,64.933,115.89,68.955,115.89z
	"
                      />
                    </svg>
                  </a>
                </div>
                <div
                  class="w-full h-[45px] flex justify-end items-center pr-3 text-[12px] bg-[#f5f5f5] hover:bg-[#fff] transition-all duration-300 text-[#2b2b2bee] hover:text-[#ef4056] group/y"
                >
                  <a class="flex gap-x-2" href="#"
                    >لوازم خانگی
                    <svg
                      class="w-[18px] h-[18px] fill-[#2b2b2bbb] group-hover/y:fill-[#ef4056]"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 463 463"
                      xml:space="preserve"
                    >
                      <g>
                        <path
                          d="M367.5,0h-272C86.953,0,80,6.953,80,15.5v432c0,8.547,6.953,15.5,15.5,15.5h272c8.547,0,15.5-6.953,15.5-15.5v-432
		C383,6.953,376.047,0,367.5,0z M95,447.5v-432c0-0.276,0.224-0.5,0.5-0.5H200v433H95.5C95.224,448,95,447.776,95,447.5z M368,447.5
		c0,0.276-0.224,0.5-0.5,0.5H215V15h152.5c0.276,0,0.5,0.224,0.5,0.5V447.5z"
                        />
                        <path
                          d="M175.5,136c-4.142,0-7.5,3.358-7.5,7.5v176c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-176
		C183,139.358,179.642,136,175.5,136z"
                        />
                        <path
                          d="M239.5,136c-4.142,0-7.5,3.358-7.5,7.5v176c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-176
		C247,139.358,243.642,136,239.5,136z"
                        />
                        <path
                          d="M151.5,184h-40c-4.142,0-7.5,3.358-7.5,7.5v80c0,4.142,3.358,7.5,7.5,7.5h40c4.142,0,7.5-3.358,7.5-7.5v-80
		C159,187.358,155.642,184,151.5,184z M144,199v9h-25v-9H144z M119,264v-41h25v41H119z"
                        />
                      </g>
                    </svg>
                  </a>
                </div>
                <div
                  class="w-full h-[45px] flex justify-end items-center pr-3 text-[12px] bg-[#f5f5f5] hover:bg-[#fff] transition-all duration-300 text-[#2b2b2bee] hover:text-[#ef4056] group/y"
                >
                  <a class="flex gap-x-2" href="#"
                    >مد وپوشاک
                    <svg
                      class="w-[18px] h-[18px] fill-[#2b2b2bbb] group-hover/y:fill-[#ef4056]"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 230.057 230.057"
                      xml:space="preserve"
                    >
                      <g>
                        <path
                          d="M228.579,83.315l-32.147-41.258c-7.817-10.032-19.594-15.785-32.312-15.785h-21.204c-2.939,0-5.565,1.836-6.574,4.597
		c-3.257,8.909-11.822,14.895-21.313,14.895s-18.055-5.986-21.313-14.895c-1.009-2.761-3.635-4.597-6.574-4.597H65.937
		c-12.717,0-24.495,5.753-32.312,15.786L1.479,83.315c-1.397,1.793-1.837,4.152-1.179,6.328c0.658,2.176,2.331,3.897,4.488,4.615
		l44.558,14.845v87.682c0,3.866,3.134,7,7,7h117.366c3.866,0,7-3.134,7-7v-87.682l44.558-14.845c2.157-0.718,3.83-2.439,4.488-4.615
		C230.416,87.467,229.976,85.108,228.579,83.315z M180.712,94.347V84.057c0-3.866-3.134-7-7-7s-7,3.134-7,7v105.728H63.345V84.057
		c0-3.866-3.134-7-7-7s-7,3.134-7,7v10.29l-30.736-10.24l26.059-33.444c5.146-6.604,12.897-10.391,21.269-10.391h16.681
		c6.295,11.832,18.761,19.491,32.41,19.491c13.649,0,26.115-7.66,32.411-19.491h16.681c8.371,0,16.123,3.787,21.269,10.39
		l26.06,33.445L180.712,94.347z"
                        />
                      </g>
                    </svg>
                  </a>
                </div>
                <div
                  class="w-full h-[45px] flex justify-end items-center pr-3 text-[12px] bg-[#f5f5f5] hover:bg-[#fff] transition-all duration-300 text-[#2b2b2bee] hover:text-[#ef4056] group/y"
                >
                  <a class="flex gap-x-2" href="#">
                    موبایل
                    <svg
                      class="w-[18px] h-[18px] fill-[#2b2b2bbb] group-hover/y:fill-[#ef4056]"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 27.442 27.442"
                      xml:space="preserve"
                    >
                      <g>
                        <path
                          d="M19.494,0H7.948C6.843,0,5.951,0.896,5.951,1.999v23.446c0,1.102,0.892,1.997,1.997,1.997h11.546
                   c1.103,0,1.997-0.895,1.997-1.997V1.999C21.491,0.896,20.597,0,19.494,0z M10.872,1.214h5.7c0.144,0,0.261,0.215,0.261,0.481
                   s-0.117,0.482-0.261,0.482h-5.7c-0.145,0-0.26-0.216-0.26-0.482C10.612,1.429,10.727,1.214,10.872,1.214z M13.722,25.469
                   c-0.703,0-1.275-0.572-1.275-1.276s0.572-1.274,1.275-1.274c0.701,0,1.273,0.57,1.273,1.274S14.423,25.469,13.722,25.469z
                    M19.995,21.1H7.448V3.373h12.547V21.1z"
                        />
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                      </g>
                    </svg>
                  </a>
                </div>
                <div
                  class="w-full h-[45px] flex justify-end items-center pr-3 text-[12px] bg-[#f5f5f5] hover:bg-[#fff] transition-all duration-300 text-[#2b2b2bee] hover:text-[#ef4056] group/y"
                >
                  <a class="flex gap-x-2" href="#">
                    کالای دیجیتال
                    <svg
                      class="w-[18px] h-[18px] fill-[#2b2b2bbb] group-hover/y:fill-[#ef4056]"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 463 463"
                      xml:space="preserve"
                    >
                      <g>
                        <g>
                          <g>
                            <path
                              d="M455.5,348H447V99.5c0-17.369-14.131-31.5-31.5-31.5h-368C30.131,68,16,82.131,16,99.5V348H7.5
                       c-4.142,0-7.5,3.358-7.5,7.5v16C0,384.458,10.542,395,23.5,395h416c12.958,0,23.5-10.542,23.5-23.5v-16
                       C463,351.358,459.642,348,455.5,348z M31,99.5C31,90.402,38.402,83,47.5,83h368c9.098,0,16.5,7.402,16.5,16.5V348H31V99.5z
                        M448,371.5c0,4.687-3.813,8.5-8.5,8.5h-416c-4.687,0-8.5-3.813-8.5-8.5V363h169.025c-0.011,0.166-0.025,0.331-0.025,0.5
                       c0,4.142,3.358,7.5,7.5,7.5h80c4.142,0,7.5-3.358,7.5-7.5c0-0.169-0.014-0.334-0.025-0.5H448V371.5z"
                            />
                            <path
                              d="M407.5,100h-352c-4.142,0-7.5,3.358-7.5,7.5v216c0,4.142,3.358,7.5,7.5,7.5h352c4.142,0,7.5-3.358,7.5-7.5v-216
                       C415,103.358,411.642,100,407.5,100z M400,316H63V115h337V316z"
                            />
                          </g>
                        </g>
                      </g></svg
                  ></a>
                </div>
                <div
                  class="w-full h-[45px] flex justify-end items-center pr-3 text-[12px] bg-[#f5f5f5] hover:bg-[#fff] transition-all duration-300 text-[#2b2b2bee] hover:text-[#ef4056] group/y"
                >
                  <a class="flex gap-x-2" href="#"
                    >کتاب
                    <svg
                      class="w-[18px] h-[18px] fill-[#2b2b2bbb] group-hover/y:fill-[#ef4056]"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      width="800px"
                      height="800px"
                      viewBox="0 0 528.899 528.899"
                      xml:space="preserve"
                    >
                      <g>
                        <path
                          d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981
		c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611
		C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069
		L27.473,390.597L0.3,512.69z"
                        />
                      </g>
                    </svg>
                  </a>
                </div>
                <div
                  class="w-full h-[45px] flex justify-end items-center pr-3 text-[12px] bg-[#f5f5f5] hover:bg-[#fff] transition-all duration-300 text-[#2b2b2bee] hover:text-[#ef4056] group/y"
                >
                  <a class="flex gap-x-2" href="#"
                    >خانه و آشپزخانه
                    <svg
                      class="w-[18px] h-[18px] fill-[#2b2b2bbb] group-hover/y:fill-[#ef4056]"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 226.6 226.6"
                      xml:space="preserve"
                    >
                      <path
                        d="M200.575,190.073H26.023c-2.209,0-4-1.791-4-4v-42.706C9.247,140.193,0,128.643,0,115.177
	c0-13.744,9.588-25.291,22.425-28.304c1.431-28.004,24.663-50.348,53.017-50.348h73.002c28.182,0,51.306,22.076,52.988,49.842
	c14.191,1.912,25.168,14.103,25.168,28.809c0,13.466-9.247,25.015-22.024,28.19v42.706
	C204.575,188.282,202.784,190.073,200.575,190.073z M176.46,182.073h20.115v-42.029c0-2.023,1.51-3.727,3.519-3.971
	c10.55-1.28,18.506-10.264,18.506-20.896c0-11.618-9.452-21.07-21.07-21.07s-21.069,9.452-21.069,21.069V182.073z M58.14,182.073
	h110.32v-37.426H58.14V182.073z M30.023,182.073H50.14v-66.896c0-11.618-9.452-21.069-21.07-21.069
	c-0.721,0-1.433,0.037-2.135,0.107c-0.096,0.014-0.191,0.024-0.289,0.031C16.165,95.452,8,104.379,8,115.177
	c0,10.632,7.955,19.616,18.505,20.896c2.009,0.244,3.519,1.948,3.519,3.971V182.073z M58.14,136.648h110.32v-1.942
	c0-5.964-4.853-10.816-10.816-10.816H68.955c-5.964,0-10.815,4.852-10.815,10.816V136.648z M68.955,115.89h88.688
	c4.022,0,7.755,1.269,10.816,3.427v-4.14c0-14.633,10.868-26.775,24.956-28.779c-1.653-23.367-21.192-41.872-44.973-41.872H75.441
	c-23.693,0-43.177,18.37-44.954,41.616c15.374,0.742,27.652,13.482,27.652,29.035v4.14C61.201,117.158,64.933,115.89,68.955,115.89z
	"
                      />
                    </svg>
                  </a>
                </div>
                <div
                  class="w-full h-[45px] flex justify-end items-center pr-3 text-[12px] bg-[#f5f5f5] hover:bg-[#fff] transition-all duration-300 text-[#2b2b2bee] hover:text-[#ef4056] group/y"
                >
                  <a class="flex gap-x-2" href="#"
                    >لوازم خانگی
                    <svg
                      class="w-[18px] h-[18px] fill-[#2b2b2bbb] group-hover/y:fill-[#ef4056]"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 463 463"
                      xml:space="preserve"
                    >
                      <g>
                        <path
                          d="M367.5,0h-272C86.953,0,80,6.953,80,15.5v432c0,8.547,6.953,15.5,15.5,15.5h272c8.547,0,15.5-6.953,15.5-15.5v-432
		C383,6.953,376.047,0,367.5,0z M95,447.5v-432c0-0.276,0.224-0.5,0.5-0.5H200v433H95.5C95.224,448,95,447.776,95,447.5z M368,447.5
		c0,0.276-0.224,0.5-0.5,0.5H215V15h152.5c0.276,0,0.5,0.224,0.5,0.5V447.5z"
                        />
                        <path
                          d="M175.5,136c-4.142,0-7.5,3.358-7.5,7.5v176c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-176
		C183,139.358,179.642,136,175.5,136z"
                        />
                        <path
                          d="M239.5,136c-4.142,0-7.5,3.358-7.5,7.5v176c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-176
		C247,139.358,243.642,136,239.5,136z"
                        />
                        <path
                          d="M151.5,184h-40c-4.142,0-7.5,3.358-7.5,7.5v80c0,4.142,3.358,7.5,7.5,7.5h40c4.142,0,7.5-3.358,7.5-7.5v-80
		C159,187.358,155.642,184,151.5,184z M144,199v9h-25v-9H144z M119,264v-41h25v41H119z"
                        />
                      </g>
                    </svg>
                  </a>
                </div>
                <div
                  class="w-full h-[45px] flex justify-end items-center pr-3 text-[12px] bg-[#f5f5f5] hover:bg-[#fff] transition-all duration-300 text-[#2b2b2bee] hover:text-[#ef4056] group/y"
                >
                  <a class="flex gap-x-2" href="#"
                    >مد وپوشاک
                    <svg
                      class="w-[18px] h-[18px] fill-[#2b2b2bbb] group-hover/y:fill-[#ef4056]"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 230.057 230.057"
                      xml:space="preserve"
                    >
                      <g>
                        <path
                          d="M228.579,83.315l-32.147-41.258c-7.817-10.032-19.594-15.785-32.312-15.785h-21.204c-2.939,0-5.565,1.836-6.574,4.597
		c-3.257,8.909-11.822,14.895-21.313,14.895s-18.055-5.986-21.313-14.895c-1.009-2.761-3.635-4.597-6.574-4.597H65.937
		c-12.717,0-24.495,5.753-32.312,15.786L1.479,83.315c-1.397,1.793-1.837,4.152-1.179,6.328c0.658,2.176,2.331,3.897,4.488,4.615
		l44.558,14.845v87.682c0,3.866,3.134,7,7,7h117.366c3.866,0,7-3.134,7-7v-87.682l44.558-14.845c2.157-0.718,3.83-2.439,4.488-4.615
		C230.416,87.467,229.976,85.108,228.579,83.315z M180.712,94.347V84.057c0-3.866-3.134-7-7-7s-7,3.134-7,7v105.728H63.345V84.057
		c0-3.866-3.134-7-7-7s-7,3.134-7,7v10.29l-30.736-10.24l26.059-33.444c5.146-6.604,12.897-10.391,21.269-10.391h16.681
		c6.295,11.832,18.761,19.491,32.41,19.491c13.649,0,26.115-7.66,32.411-19.491h16.681c8.371,0,16.123,3.787,21.269,10.39
		l26.06,33.445L180.712,94.347z"
                        />
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <span class="inline-block w-px h-[15px] bg-[#2b2b2bbb]"></span>
          <div class="text-[12px] mx-2 h-full before:inline-block before:w-full before:h-[2px] before:bg-red-500 before:absolute relative before:bottom-0 before:-translate-x-[110%] hover:before:translate-x-0 overflow-hidden before:transition-all">
            <a class="flex items-center h-full leading-[42px] gap-x-1" href="#">
              <svg
                viewBox="0 0 24 24"
                class="w-[18px] h-[18px] fill-[#2b2b2b77]"
              >
                <path
                  fill-rule="evenodd"
                  d="M15.112 2.234c.687.231 1.153.525 1.895 1.171l.536.474.109.09.142.104.653.42c.837.54 1.244.9 1.663 1.495.381.542.579 1 .794 1.841l.226.941.053.185.049.142.285.719c.36.914.483 1.457.483 2.184 0 .728-.124 1.27-.483 2.184l-.246.615-.08.22-.06.211-.227.941c-.215.842-.413 1.3-.795 1.843-.416.59-.822.95-1.646 1.483l-.67.431-.14.104-.176.147-.471.417c-.742.646-1.208.94-1.898 1.172-.688.23-1.206.272-2.224.199l-.687-.052-.197-.006-.086.001-.212.01-.586.047c-1.018.073-1.537.03-2.23-.201-.686-.231-1.152-.524-1.893-1.17l-.594-.522-.144-.111-.103-.072-.619-.395c-.821-.532-1.229-.894-1.643-1.483-.417-.593-.614-1.085-.855-2.085l-.146-.621-.061-.225-.06-.179-.285-.719C2.123 13.27 2 12.729 2 12c0-.727.124-1.27.483-2.184l.285-.717.082-.258.039-.147.146-.621.118-.46c.195-.707.39-1.131.737-1.624.414-.59.82-.95 1.643-1.483l.552-.352.153-.104.16-.123.124-.105.47-.417c.743-.646 1.209-.94 1.897-1.171.69-.232 1.209-.274 2.227-.2l.7.052.228.005.275-.013.564-.044c1.02-.074 1.539-.031 2.229.2zm-1.931 1.784l-.89.065c-.105.006-.2.008-.291.008l-.275-.007-.156-.009-.563-.044-.385-.024c-.514-.024-.767.012-1.094.122l-.108.039c-.35.132-.62.313-1.138.767l-.55.486-.155.125-.142.107-.23.158-.72.462c-.517.343-.733.545-.958.866-.23.326-.347.596-.51 1.247l-.193.815-.05.19-.05.17-.094.271-.345.87C4.061 11.287 4 11.594 4 12l.002.12c.012.35.082.65.282 1.18l.37.934.07.21.074.257.219.914c.162.65.28.92.51 1.247.247.352.485.564 1.121.973l.559.356c.118.077.204.138.296.207l.073.056.241.2.464.411c.569.5.839.67 1.241.805.404.135.694.159 1.484.1l.306-.025.555-.034.133-.002c.09 0 .186.003.291.008l.166.01.536.043c.79.059 1.08.035 1.478-.098.407-.138.678-.308 1.247-.807l.387-.344.212-.182.181-.142.186-.133.108-.073.721-.462c.518-.342.735-.546.96-.866.25-.357.367-.644.554-1.431l.091-.391c.032-.138.059-.245.084-.34l.075-.26.094-.273.345-.869c.223-.587.284-.894.284-1.299 0-.405-.061-.712-.284-1.299l-.37-.934-.095-.293-.075-.274-.149-.631-.098-.39c-.109-.402-.203-.64-.34-.865l-.115-.175c-.226-.32-.441-.523-.96-.866l-.624-.4a7.664 7.664 0 01-.255-.17l-.212-.157-.155-.126-.697-.613c-.42-.357-.669-.516-.977-.634l-.218-.074c-.322-.098-.603-.12-1.195-.081zM16 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm-1.8-8.1l1.6 1.2-6 8-1.6-1.2 6-8zM11 8.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              شگفت انگیز ها</a
            >
          </div>
          <div class="text-[12px] mx-2 h-full before:inline-block before:w-full before:h-[2px] before:bg-red-500 before:absolute relative before:bottom-0 before:-translate-x-[110%] hover:before:translate-x-0 overflow-hidden before:transition-all">
            <a class="flex items-center h-full leading-[42px] gap-x-1" href="#">
              <svg
                class="w-[18px] h-[18px] fill-[#2b2b2b77]"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 490.875 490.875"
                xml:space="preserve"
              >
                <g>
                  <g>
                    <g>
                      <path
                        d="M451.611,178.111h-31.244c3.668,20.593-5.14,42.301-23.979,53.957c-8.325,5.146-17.877,7.869-27.635,7.869
				c-18.359,0-35.082-9.312-44.729-24.912c-6.822-11.033-9.033-24.246-6.75-36.915h-143.67c2.273,12.669,0.063,25.881-6.758,36.922
				c-9.639,15.592-26.362,24.904-44.721,24.904c-9.765,0-19.316-2.723-27.646-7.869c-18.835-11.656-27.646-33.364-23.974-53.957
				H39.263C17.575,178.11,0,195.685,0,217.373c0,21.676,17.575,39.25,39.263,39.25h4.331l28.793,175.116
				c3.019,18.319,18.847,31.771,37.423,31.771h271.254c18.575,0,34.403-13.452,37.42-31.771l28.784-175.114h4.343
				c21.686,0,39.264-17.576,39.264-39.251C490.875,195.686,473.295,178.111,451.611,178.111z M167.419,418.083
				c-1.186,0.174-2.36,0.266-3.523,0.266c-11.459,0-21.503-8.391-23.269-20.069l-16.306-108.682
				c-1.931-12.87,6.931-24.861,19.801-26.792c12.886-1.875,24.853,6.931,26.792,19.793l16.31,108.692
				C189.155,404.157,180.289,416.151,167.419,418.083z M268.997,394.782c0,13.018-10.541,23.564-23.552,23.564
				c-13.016,0-23.552-10.549-23.552-23.564V286.093c0-13.004,10.537-23.553,23.552-23.553c13.011,0,23.552,10.549,23.552,23.553
				V394.782z M366.561,289.596l-16.317,108.682c-1.754,11.68-11.797,20.069-23.256,20.069c-1.168,0-2.338-0.091-3.527-0.266
				c-12.869-1.931-21.732-13.926-19.801-26.792l16.307-108.692c1.938-12.87,13.857-21.732,26.791-19.794
				C359.625,264.734,368.49,276.727,366.561,289.596z"
                      />
                      <path
                        d="M102.748,218.713c6.037,3.74,12.748,5.521,19.379,5.521c12.341,0,24.407-6.199,31.362-17.464
				c6.415-10.375,6.967-22.646,2.739-33.151l69.947-113.048c6.321-10.222,3.16-23.611-7.062-29.944
				c-3.566-2.203-7.522-3.263-11.423-3.263c-7.286,0-14.402,3.661-18.528,10.324l-69.924,113.048
				c-11.282,0.906-22.02,6.86-28.435,17.232C80.086,185.283,85.449,208.003,102.748,218.713z"
                      />
                      <path
                        d="M334.652,173.619c-4.228,10.505-3.688,22.776,2.729,33.151c6.967,11.266,19.021,17.464,31.373,17.464
				c6.629,0,13.332-1.781,19.379-5.521c17.299-10.71,22.65-33.431,11.937-50.745c-6.398-10.372-17.146-16.326-28.418-17.232
				L301.7,37.688c-4.114-6.664-11.231-10.324-18.519-10.324c-3.899,0-7.855,1.06-11.427,3.263
				c-10.218,6.333-13.354,19.722-7.058,29.944L334.652,173.619z"
                      />
                    </g>
                  </g>
                </g>
              </svg>
              سوپرمارکت</a
            >
          </div>
          <div class="text-[12px] mx-2 h-full before:inline-block before:w-full before:h-[2px] before:bg-red-500 before:absolute relative before:bottom-0 before:-translate-x-[110%] hover:before:translate-x-0 overflow-hidden before:transition-all">
            <a class="flex items-center h-full leading-[42px] gap-x-1" href="#">
              <svg
                class="w-[18px] h-[18px] fill-[#2b2b2b77]"
                style="width: 18px; height: 18px"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 3h12a2.25 2.25 0 012.25 2.25v7.5A2.25 2.25 0 0115 15H3a2.25 2.25 0 01-2.25-2.25v-7.5A2.25 2.25 0 013 3zm0 1.5a.75.75 0 00-.75.75v7.5c0 .414.336.75.75.75h3v-2.69l-.97.97-1.06-1.06.988-.989A2.25 2.25 0 116 5.378V4.5H3zm3 3.75V7.5a.75.75 0 10-.75.75H6zm1.5-2.872V4.5H15a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75H7.5v-2.69l.97.97 1.06-1.06-.988-.989A2.25 2.25 0 107.5 5.378zm0 2.872h.75a.75.75 0 10-.75-.75v.75z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              کارت هدیه
            </a>
          </div>
          <div class="text-[12px] mx-2 h-full before:inline-block before:w-full before:h-[2px] before:bg-red-500 before:absolute relative before:bottom-0 before:-translate-x-[110%] hover:before:translate-x-0 overflow-hidden before:transition-all">
            <a class="flex items-center h-full leading-[42px] gap-x-1" href="#">
              <svg
                viewBox="0 0 24 24"
                class="w-[18px] h-[18px] fill-[#2b2b2b77]"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.015 9.105c.222.397.41.73.466.842.361.724.519 1.31.519 2.053a2 2 0 01-4 0l.003-4.557c0-.953-1.206-1.367-1.79-.613C5.087 9.572 4 11.906 4 13.889 4 18.365 7.578 22 12 22c4.422 0 8-3.635 8-8.111 0-2.968-2.45-6.78-7.295-11.598a1 1 0 00-1.6.262c-.807 1.615-.807 3.28 0 4.894.178.356.582 1.076.91 1.658zM7 12a4 4 0 108 0c0-1.078-.238-1.962-.73-2.947-.079-.156-.31-.569-.566-1.024a50.532 50.532 0 01-.81-1.476c-.273-.546-.404-1.079-.393-1.612C16.18 8.811 18 11.834 18 13.889 18 17.267 15.31 20 12 20s-6-2.733-6-6.111c0-.87.33-1.925 1-3.154V12z"
                  clip-rule="evenodd"
                ></path>
              </svg>

              پرفروش ترین ها</a
            >
          </div>
          <div class="text-[12px] mx-2 h-full before:inline-block before:w-full before:h-[2px] before:bg-red-500 before:absolute relative before:bottom-0 before:-translate-x-[110%] hover:before:translate-x-0 overflow-hidden before:transition-all">
            <a class="flex items-center h-full leading-[42px] gap-x-1" href="#">
              <svg
                viewBox="0 0 24 24"
                class="w-[18px] h-[18px] fill-[#2b2b2b77]"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 4a1 1 0 011 1v14a1 1 0 01-1 1H6a1 1 0 01-.707-.293l-4-4A1 1 0 011 15V9a1 1 0 01.293-.707l4-4A1 1 0 016 4h16zm-1 2H6.414L3 9.414v5.172L6.414 18H21V6zm-6 3.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm2.5 6.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM10 12a3 3 0 11-6 0 3 3 0 016 0zm-4 0a1 1 0 102 0 1 1 0 00-2 0zm12.848-3.47l-5 8-1.696-1.06 5-8 1.696 1.06z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              تخفیف ها و پیشنهاد ها</a
            >
          </div>
          <span class="inline-block w-px h-[15px] bg-[#2b2b2bbb]"></span>
          <div class="text-[12px] mx-2 h-full before:inline-block before:w-full before:h-[2px] before:bg-red-500 before:absolute relative before:bottom-0 before:-translate-x-[110%] hover:before:translate-x-0 overflow-hidden before:transition-all">
            <a class="flex items-center h-full leading-[42px] gap-x-1" href="#">
              سوالی دارید؟</a
            >
          </div>
          <div class="text-[12px] mx-2 h-full before:inline-block before:w-full before:h-[2px] before:bg-red-500 before:absolute relative before:bottom-0 before:-translate-x-[110%] hover:before:translate-x-0 overflow-hidden before:transition-all">
            <a class="flex items-center h-full leading-[42px] gap-x-1" href="#">
              در دیجی کالا بفروشید!</a
            >
          </div>
        </nav>
        <div
          class="w-[15%] h-[inherit] flex justify-center items-center text-[12px] gap-x-2 overflow-hidden cursor-pointer" id="chooseCityBtn"
        >
          <svg viewBox="0 0 24 24" class="w-[20px] h-[20px] fill-[#2b2b2b]">
            <path
              fill-rule="evenodd"
              d="M4 9.611C4 5.391 7.59 2 12 2s8 3.39 8 7.611c0 2.818-1.425 5.518-3.768 8.034a23.496 23.496 0 01-2.514 2.322c-.517.413-.923.706-1.166.867L12 21.2l-.552-.366c-.243-.16-.65-.454-1.166-.867a23.499 23.499 0 01-2.514-2.322C5.425 15.129 4 12.428 4 9.61zm8.47 8.794c.784-.627 1.569-1.34 2.298-2.124C16.8 14.101 18 11.827 18 9.611 18 6.521 15.33 4 12 4S6 6.522 6 9.611c0 2.215 1.2 4.49 3.232 6.67A21.536 21.536 0 0012 18.769c.148-.111.305-.233.47-.364zM12 14a4.001 4.001 0 010-8 4.001 4.001 0 010 8zm0-2a2.001 2.001 0 000-4 2.001 2.001 0 000 4z"
              clip-rule="evenodd"
            ></path>
          </svg>
          لطفا شهر خود را انتخاب کنید
          </div>
          </div>
          <!--middle header end-->
          </div>
          <div class="w-screen h-screen backdrop-blur-sm hidden justify-center items-center fixed top-0 z-[9999999]" id="chooseCity">
            <div class="w-[460px] h-[70vh] rounded-2xl bg-white">
            <div class="w-full h-[75px]  flex justify-between items-center px-5 border-b">
            <span class="font-bold text-[18px]">انتخاب شهر</span>
            <span id="chooseCityClose" class="font-bold text-[36px] cursor-pointer">&times;</span>
            </div>
            <div class="w-[100%] h-[calc(100%-75px)] overflow-auto">
            <div class="w-full h-[70px] px-4 flex justify-start items-center gap-4">
            <svg viewBox="0 0 24 24" class="fill-[#19bfd3] w-[24px] h-[24px]">
            <path fill-rule="evenodd" d="M20.94 11A8.994 8.994 0 0013 3.06V1h-2v2.06A8.994 8.994 0 003.06 11H1v2h2.06A8.994 8.994 0 0011 20.94V23h2v-2.06A8.994 8.994 0 0020.94 13H23v-2h-2.06zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-7 4c0 3.87 3.13 7 7 7s7-3.13 7-7-3.13-7-7-7-7 3.13-7 7z" clip-rule="evenodd"></path>
            </svg>
            <span class="text-[18px] text-[#19bfd3] font-bold">مکان یابی خودکار</span>
            </div>
            <div class="h-[60px] w-full  border-b px-4 flex items-center justify-between">
            <span class="font-bold text-[14px] mr-2">تهران</span>
            <svg class="w-[24px] h-[24px] " viewBox="0 0 24 24"><path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path></svg>
            </div>
            <div class="h-[60px] w-full  border-b px-4 flex items-center justify-between">
            <span class="font-bold text-[14px] mr-2">قم</span>
            <svg class="w-[24px] h-[24px] " viewBox="0 0 24 24"><path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path></svg>
            </div>
            <div class="h-[60px] w-full  border-b px-4 flex items-center justify-between">
            <span class="font-bold text-[14px] mr-2">مشهد</span>
            <svg class="w-[24px] h-[24px] " viewBox="0 0 24 24"><path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path></svg>
            </div>
            <div class="h-[60px] w-full  border-b px-4 flex items-center justify-between">
            <span class="font-bold text-[14px] mr-2">آمریکا</span>
            <svg class="w-[24px] h-[24px] " viewBox="0 0 24 24"><path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path></svg>
            </div>
            <div class="h-[60px] w-full  border-b px-4 flex items-center justify-between">
            <span class="font-bold text-[14px] mr-2">کابل</span>
            <svg class="w-[24px] h-[24px] " viewBox="0 0 24 24"><path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path></svg>
            </div>
            <div class="h-[60px] w-full  border-b px-4 flex items-center justify-between">
            <span class="font-bold text-[14px] mr-2">دوشنبه</span>
            <svg class="w-[24px] h-[24px] " viewBox="0 0 24 24"><path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path></svg>
            </div>
            <div class="h-[60px] w-full  border-b px-4 flex items-center justify-between">
            <span class="font-bold text-[14px] mr-2">کرمان</span>
            <svg class="w-[24px] h-[24px] " viewBox="0 0 24 24"><path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path></svg>
            </div>
            <div class="h-[60px] w-full  border-b px-4 flex items-center justify-between">
            <span class="font-bold text-[14px] mr-2">شیراز</span>
            <svg class="w-[24px] h-[24px] " viewBox="0 0 24 24"><path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path></svg>
            </div>
            <div class="h-[60px] w-full  border-b px-4 flex items-center justify-between">
            <span class="font-bold text-[14px] mr-2">ساوجبلاغ</span>
            <svg class="w-[24px] h-[24px] " viewBox="0 0 24 24"><path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path></svg>
            </div>
            <div class="h-[60px] w-full  border-b px-4 flex items-center justify-between">
            <span class="font-bold text-[14px] mr-2">سنندج</span>
            <svg class="w-[24px] h-[24px] " viewBox="0 0 24 24"><path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path></svg>
            </div>
            <div class="h-[60px] w-full  border-b px-4 flex items-center justify-between">
            <span class="font-bold text-[14px] mr-2">کهگیلویه وبویر احمد</span>
            <svg class="w-[24px] h-[24px] " viewBox="0 0 24 24"><path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path></svg>
            </div>
            <div class="h-[60px] w-full  border-b px-4 flex items-center justify-between">
            <span class="font-bold text-[14px] mr-2">نیشابور</span>
            <svg class="w-[24px] h-[24px] " viewBox="0 0 24 24"><path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path></svg>
            </div>
            </div>
            
            </div>
          </div>
    <!--Header end-->
`,Us=`
  <!--story slider start-->
    <div class="w-full h-[170px] overflow-hidden border-t-2">
      <div class="max-w-[1336px] h-full mx-auto">
        <div class="swiper mySwiper">
          <div class="swiper-wrapper" id="StorySlidesContainer">
            
          </div>
          <div
            class="swiper-button-next mobile:hidden desktop:flex w-10 h-10 bg-[#fff] border-[1px] rounded-[40px] after:text-[15px] after:flex after:justify-center after:items-center after:text-[#2b2b2b] after:font-bold"
          ></div>
          <div
            class="swiper-button-prev desktop:flex mobile:hidden w-10 h-10 bg-[#fff] border-[1px] rounded-[40px] after:text-[15px] after:flex after:justify-center after:items-center after:text-[#2b2b2b] after:font-bold"
          ></div>
        </div>
      </div>
    </div>
    <!--story slider end-->
`,_e,Ks=async()=>{_e=(await(await fetch("https://parisadehghan29.github.io/Digikala-APIs/Digikala-story.json")).json()).map(t=>`
   <div class="swiper-slide w-[110px] id="${t.id}">
              <div
                class="w-full h-full flex justify-center items-center flex-col gap-y-4 p-2"
              >
                <div class="w-[74px] h-[74px] rounded-full">
                  <img
                    src="${t.image}"
                    class="rounded-full outline-[purple] outline-[3px] outline-none outline-offset-[3px]"
                    alt="${t.text}"
                  />
                </div>
                <span class="text-[11px] line-clamp-2 inline-block h-[40px] leading-5"
                  >${t.text}</span
                >
              </div>
            </div>
            
    `),document.querySelector("#StorySlidesContainer").insertAdjacentHTML("beforeend",_e.join(""))};Ks();let Zs=`
 <!--Auto slider start-->
    <div class="w-full mobile:h-[270px] desktop:h-[300px] bigdt:h-[400px] relative z-50">
      <div class="swiper autoSwiper">
        <div class="swiper-wrapper" id="AutoSlides">
         </div>
        <div
          class="swiper-button-next mobile:hidden desktop:flex w-10 h-10 bg-[#fff] border-[1px] rounded-[40px] after:text-[15px] after:flex after:justify-center after:items-center after:text-[#2b2b2b] after:font-bold"
        ></div>
        <div
          class="swiper-button-prev desktop:flex mobile:hidden w-10 h-10 bg-[#fff] border-[1px] rounded-[40px] after:text-[15px] after:flex after:justify-center after:items-center after:text-[#2b2b2b] after:font-bold"
        ></div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <!--Auto slider end-->
`,Qs=async l=>{let s=(await(await fetch("https://parisadehghan29.github.io/Digikala-APIs/Swiper-timer.json")).json()).map(i=>`
   <div class="swiper-slide">
            <img src="${i.image}" alt="${i.alt}" />
          </div>
  `);document.querySelector("#AutoSlides").insertAdjacentHTML("afterbegin",s.join("")),l()};function Js(){new N(".autoSwiper",{spaceBetween:10,centeredSlides:!0,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}Qs(Js);let el=`
 <!-- mobile green banner start-->
    <div class="w-full">
      <img
        class="w-[95%] mobile:block desktop:hidden mt-4 mx-auto"
        src="./images/green-banner.png"
        alt="greenbanner"
      />
    </div>
    <!-- mobile green banner end-->
`,tl=`
    <!-- icon list start-->
    <div class="w-full h-[130px] overflow-hidden">
      <div
        class="w-[1230px] h-[inherit] flex items-center mx-auto desktop:justify-around"
      >
        <div
          class="w-[82px] h-[103px] flex flex-col gap-y-2 justify-center items-center"
        >
          <img
            class="w-[52px] h-[52px] rounded-xl"
            src="./images/sticks/1.jpg"
            alt="icon"
          />
          <span class="text-[11px] text-[#2b2b2bbb]">دیجیکالا جت</span>
        </div>
        <div
          class="w-[82px] h-[103px] flex flex-col gap-y-3 justify-center items-center"
        >
          <img
            class="w-[52px] h-[52px] rounded-xl"
            src="./images/sticks/2-2BthuUp6R-transformed.png"
            alt="icon"
          />
          <span class="text-[11px] text-[#2b2b2bbb]">دیجی پی</span>
        </div>
        <div
          class="w-[82px] h-[103px] flex flex-col gap-y-3 justify-center items-center"
        >
          <img
            class="w-[52px] h-[52px]"
            src="./images/sticks/12.png"
            alt="icon"
          />
          <span class="text-[11px] text-[#2b2b2bbb]">تخفیف پلاس</span>
        </div>
        <div
          class="w-[82px] h-[103px] flex flex-col gap-y-3 justify-center items-center"
        >
          <img
            class="w-[52px] h-[52px] rounded-xl"
            src="./images/sticks/13.png"
            alt="icon"
          />
          <span class="text-[11px] text-[#2b2b2bbb]">دیجیکالا جت</span>
        </div>
        <div
          class="w-[82px] h-[103px] flex flex-col gap-y-3 justify-center items-center"
        >
          <img
            class="w-[52px] h-[52px] rounded-xl"
            src="./images/sticks/14.png"
            alt="icon"
          />
          <span class="text-[11px] text-[#2b2b2bbb]">دیجی پی</span>
        </div>
        <div
          class="w-[82px] h-[103px] flex flex-col gap-y-3 justify-center items-center"
        >
          <img
            class="w-[52px] h-[52px] rounded-full"
            src="./images/sticks/underheader1(7).png"
            alt="icon"
          />
          <span class="text-[11px] text-[#2b2b2bbb]">تخفیف پلاس</span>
        </div>
        <div
          class="w-[82px] h-[103px] flex flex-col gap-y-3 justify-center items-center"
        >
          <img
            class="w-[52px] h-[52px]"
            src="./images/sticks/15.png"
            alt="icon"
          />
          <span class="text-[11px] text-[#2b2b2bbb]">دیجیکالا جت</span>
        </div>
        <div
          class="w-[82px] h-[103px] flex flex-col gap-y-3 justify-center items-center"
        >
          <img
            class="w-[52px] h-[52px] rounded-xl"
            src="./images/sticks/2-2BthuUp6R-transformed.png"
            alt="icon"
          />
          <span class="text-[11px] text-[#2b2b2bbb]">دیجی پی</span>
        </div>
        <div
          class="w-[82px] h-[103px] flex flex-col gap-y-3 justify-center items-center"
        >
          <img
            class="w-[52px] h-[52px] rounded-full"
            src="./images/sticks/mmdi.png"
            alt="icon"
          />
          <span class="text-[11px] text-[#2b2b2bbb]">تخفیف پلاس</span>
        </div>
        <div
          class="w-[82px] h-[103px] flex flex-col gap-y-3 justify-center items-center"
        >
          <img
            class="w-[52px] h-[52px] rounded-xl"
            src="./images/sticks/112.png"
            alt="icon"
          />
          <span class="text-[11px] text-[#2b2b2bbb]">دیجیکالا جت</span>
        </div>
      </div>
    </div>
    <!-- icon list end-->
`,sl=`
    <!--red slider start-->
    <div class="w-full h-[295px] overflow-hidden">
      <div
        class="desktop:w-[90%] py-[20px] desktop:px-4 mobile:px-1 desktop:max-w-[1336px] h-[inherit] bg-[#e1324e] mx-auto desktop:rounded-2xl"
      >
        <div
          class="w-screen h-[30px] desktop:hidden mb-3 mx-5 mobile:flex justify-between"
        >
          <div class="flex h-full items-center gap-x-3">
            <img
              class="w-[24px] h-[24px]"
              src="./images/red-slider/Amazing.svg"
              alt="image"
            />
            <img
              class="w-[108px] h-[20px]"
              src="./images/red-slider/incredible-word.svg"
              alt="image"
            />
          </div>
          <div class="h-full ml-6 flex items-center justify-center">
            <a href="#" class="flex items-center text-[12px] text-[#fff]"
              >مشاهده همه
              <svg class="w-[18px] h-[18px] fill-[#fff]" viewBox="0 0 24 24">
                <path
                  d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="w-full mobile:h-[205px] desktop:h-full">
          <div class="swiper redSwiper">
            <div class="swiper-wrapper [&>*:nth-of-type(1)]:rounded-r-lg [&>*:nth-last-of-type(1)]:rounded-l-lg" id="redSlidesContainer">

            </div>
            <div
              class="swiper-button-next mobile:hidden desktop:flex w-10 h-10 bg-[#fff] border-[1px] rounded-[40px] after:text-[15px] after:flex after:justify-center after:items-center after:text-[#2b2b2b] after:font-bold"
            ></div>
            <div
              class="swiper-button-prev desktop:flex mobile:hidden w-10 h-10 bg-[#fff] border-[1px] rounded-[40px] after:text-[15px] after:flex after:justify-center after:items-center after:text-[#2b2b2b] after:font-bold"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <!--red slider end-->
`,We,ll=async()=>{We=(await(await fetch("https://parisadehghan29.github.io/Digikala-APIs/Digikala-Pishnehad.json")).json()).map(t=>`
   <div class="swiper-slide !w-[160px]" id="${t.id}">
                <div
                  class="w-full h-full flex items-center mobile:gap-y-[2px] desktop:gap-y-2 p-[8px] flex-col"
                >
                  <div
                    class="desktop:w-full desktop:h-[132px] mobile:w-[114px] mobile:h-[114px]"
                  >
                    <img
                      class="w-full h-full !object-contain"
                      src="${t.img}"
                      alt=""
                    />
                  </div>
                  <div>
                    <p class="text-[12px] text-[#62666d] line-clamp-2">${t.title}</p>
                  </div>
                  <div class="flex justify-between w-full">
                    <span
                      class="inline-block w-[34px] h-[20px] bg-[#de314e] leading-5 rounded-[20px] text-[12px] text-white"
                    >
                      ۱۱ ٪
                    </span>
                    <span class="text-[14px] flex">
                      ${t.price}
                      <svg class="w-4 h-4" viewBox="0 0 14 14">
                        <path
                          fill-rule="evenodd"
                          d="M3.057 1.742L3.821 1l.78.75-.776.741-.768-.749zm3.23 2.48c0 .622-.16 1.111-.478 1.467-.201.221-.462.39-.783.505a3.251 3.251 0 01-1.083.163h-.555c-.421 0-.801-.074-1.139-.223a2.045 2.045 0 01-.9-.738A2.238 2.238 0 011 4.148c0-.059.001-.117.004-.176.03-.55.204-1.158.525-1.827l1.095.484c-.257.532-.397 1-.419 1.403-.002.04-.004.08-.004.12 0 .252.055.458.166.618a.887.887 0 00.5.354c.085.028.178.048.278.06.079.01.16.014.243.014h.555c.458 0 .769-.081.933-.244.14-.139.21-.383.21-.731V2.02h1.2v2.202zm5.433 3.184l-.72-.7.709-.706.735.707-.724.7zm-2.856.308c.542 0 .973.19 1.293.569.297.346.445.777.445 1.293v.364h.18v-.004h.41c.221 0 .377-.028.467-.084.093-.055.14-.14.14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 01-.287.863c-.306.405-.804.607-1.495.607h-.627c-.061.733-.434 1.257-1.117 1.573-.267.122-.58.21-.937.265a5.845 5.845 0 01-.914.067v-1.159c.612 0 1.072-.082 1.38-.247.25-.132.376-.298.376-.499h-.515c-.436 0-.807-.113-1.113-.339-.367-.273-.55-.667-.55-1.18 0-.488.122-.901.367-1.24.296-.415.728-.622 1.296-.622zm.533 2.226v-.364c0-.217-.048-.389-.143-.516a.464.464 0 00-.39-.187.478.478 0 00-.396.187.705.705 0 00-.136.449.65.65 0 00.003.067c.008.125.066.22.177.283.093.054.21.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6l-.709.707zm-6.694 4.888h.03c.433-.01.745-.106.937-.29.024.012.065.035.12.068l.074.039.081.042c.135.073.261.133.379.18.345.146.67.22.977.22a1.216 1.216 0 00.87-.34c.3-.285.449-.714.449-1.286a2.19 2.19 0 00-.335-1.145c-.299-.457-.732-.685-1.3-.685-.502 0-.916.192-1.242.575-.113.132-.21.284-.294.456-.032.062-.06.125-.084.191a.504.504 0 00-.03.078 1.67 1.67 0 00-.022.06c-.103.309-.171.485-.205.53-.072.09-.214.14-.427.147-.123-.005-.209-.03-.256-.076-.057-.054-.085-.153-.085-.297V7l-1.201-.5v3.562c0 .261.048.496.143.703.071.158.168.296.29.413.123.118.266.211.43.28.198.084.42.13.665.136v.001h.036zm2.752-1.014a.778.778 0 00.044-.353.868.868 0 00-.165-.47c-.1-.134-.217-.201-.35-.201-.18 0-.33.103-.447.31-.042.071-.08.158-.114.262a2.434 2.434 0 00-.04.12l-.015.053-.015.046c.142.118.323.216.544.293.18.062.325.092.433.092.044 0 .086-.05.125-.152z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <div
                    class="w-full text-[#2b2b2b77] text-[12px] line-through text-left pl-4 pb-4"
                  >
                    ${t.prev}
                  </div>
                </div>
              </div>
            
    `),document.querySelector("#redSlidesContainer").insertAdjacentHTML("beforeend",We.join(""))};ll();let al=`
  <!--green card start-->
    <div class="w-full desktop:h-[110px] mobile:h-[187px] mt-5">
      <div
        class="desktop:w-[90%] mobile:w-[90%] max-w-[1336px] h-full bg-green-bg bg-left bg-no-repeat bg-contain bg-slate-100 mx-auto rounded-2xl flex desktop:flex-row mobile:flex-col gap-2 p-6 desktop:justify-between"
      >
        <div class="flex mobile:h-[38px] desktop:h-[62px] items-center gap-x-4">
          <img
            class="desktop:w-[66px] desktop:h-[62px] mobile:w-[40px] mobile:h-[38px]"
            src="./images/green-card/fresh.png"
            alt="fresh"
          />
          <img
            class="desktop:w-[250px] desktop:h-[28px] mobile:w-[190px] mobile:h-[20px]"
            src="./images/green-card/fresh-incredible-offer.svg"
            alt=""
          />
        </div>
        <div class="flex items-center">
          <span
            class="w-[110px] inline-block h-[28px] text-[#fff] text-[14px] bg-[#029a49] leading-7 text-center rounded-2xl"
          >
            تا ۵۰٪ تخفیف
          </span>
        </div>
        <div class="flex items-center justify-between gap-x-7">
          <div class="flex items-center gap-x-3">
            <div
              class="desktop:w-[74px] desktop:h-[74px] mobile:w-[68px] mobile:h-[68px] rounded-full bg-white relative flex justify-center items-center"
            >
              <img
                class="w-[52px] h-[52px] object-contain"
                src="./images/green-card/prd-1.png"
                alt="product"
              />
              <span
                class="absolute bottom-0 right-0 text-[#fff] text-[11px] leading-5 text-center inline-block w-[34px] h-[20px] bg-[#d32f2f] rounded-xl"
              >
                ۵۰ ٪
              </span>
            </div>
            <div
              class="desktop:w-[74px] desktop:h-[74px] mobile:w-[68px] mobile:h-[68px] rounded-full bg-white relative flex justify-center items-center"
            >
              <img
                class="w-[52px] h-[52px] object-contain"
                src="./images/green-card/11.png"
                alt="product"
              />
              <span
                class="absolute bottom-0 right-0 text-[#fff] text-[11px] leading-5 text-center inline-block w-[34px] h-[20px] bg-[#d32f2f] rounded-xl"
              >
                ۵۰ ٪
              </span>
            </div>
            <div
              class="desktop:w-[74px] desktop:h-[74px] mobile:w-[68px] mobile:h-[68px] rounded-full bg-white relative flex justify-center items-center"
            >
              <img
                class="w-[52px] h-[52px] object-cover"
                src="./images/green-card/12.png"
                alt="product"
              />
              <span
                class="absolute bottom-0 right-0 text-[#fff] text-[11px] leading-5 text-center inline-block w-[34px] h-[20px] bg-[#d32f2f] rounded-xl"
              >
                ۵۰ ٪
              </span>
            </div>
            <div
              class="desktop:w-[74px] desktop:h-[74px] mobile:w-[68px] mobile:h-[68px] rounded-full bg-white relative mobile:hidden desktop:flex justify-center items-center"
            >
              <img
                class="w-[52px] h-[52px] object-contain"
                src="./images/green-card/13.png"
                alt="product"
              />
              <span
                class="absolute bottom-0 right-0 text-[#fff] text-[11px] leading-5 text-center inline-block w-[34px] h-[20px] bg-[#d32f2f] rounded-xl"
              >
                ۳۰٪
              </span>
            </div>
            <div
              class="desktop:w-[74px] desktop:h-[74px] mobile:w-[68px] mobile:h-[68px] rounded-full bg-white relative mobile:hidden desktop:flex justify-center items-center"
            >
              <img
                class="w-[52px] h-[52px] object-contain"
                src="./images/green-card/14.jpg"
                alt="product"
              />
              <span
                class="absolute bottom-0 right-0 text-[#fff] text-[11px] leading-5 text-center inline-block w-[34px] h-[20px] bg-[#d32f2f] rounded-xl"
              >
                ۳۵٪
              </span>
            </div>
            <div
              class="desktop:w-[74px] desktop:h-[74px] mobile:w-[68px] mobile:h-[68px] rounded-full bg-white relative mobile:hidden desktop:flex justify-center items-center"
            >
              <img
                class="w-[52px] h-[52px] object-contain"
                src="./images/green-card/16.png"
                alt="product"
              />
              <span
                class="absolute bottom-0 right-0 text-[#fff] text-[11px] leading-5 text-center inline-block w-[34px] h-[20px] bg-[#d32f2f] rounded-xl"
              >
                ۵۰ ٪
              </span>
            </div>
          </div>
          <div
            class="desktop:px-[20px] desktop:py-[12px] rounded-full bg-[#fff] text-[12px] text-[#029a49] flex items-center gap-x-2 mobile:w-[44px] mobile:h-[44px] desktop:w-auto desktop:h-auto mobile:p-0 justify-center"
          >
            <span class="mobile:hidden desktop:inline-block text-nowrap"
              >بیش از ۳۰ کالا</span
            >
            <svg class="w-[20px] h-[20px] fill-[#029a49]" viewBox="0 0 24 24">
              <path
                fill-rule="evenodd"
                d="M11.293 19.707l1.414-1.414L7.414 13H20v-2H7.414l5.293-5.293-1.414-1.414-7 7a1 1 0 000 1.414l7 7z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <!--green card end-->
`,il=`
 <!--four banners start-->
    <div class="w-full mt-4">
      <div
        class="w-[90%] h-[inherit] max-w-[1336px] mx-auto rounded-2xl grid desktop:grid-cols-4 desktop:grid-rows-1 mobile:grid-cols-2 mobile:grid-rows-2 gap-4" id="FourBannerWrappper">
        <img
      class="w-auto h-auto object-cover rounded-2xl"
      src="./images/four-banners/banner-1.gif"
      alt="عکس"
    />
        <img
      class="w-auto h-auto object-cover rounded-2xl"
      src="./images/four-banners/banner-2.jpg"
      alt="عکس"
    />
        <img
      class="w-auto h-auto object-cover rounded-2xl"
      src="./images/four-banners/banner-3.jpg"
      alt="عکس"
    />
        <img
      class="w-auto h-auto object-cover rounded-2xl"
      src="./images/four-banners/banner-4.jpg"
      alt="عکس"
    />
      </div>
    </div>
    <!--four banners end-->`,rl=`
<!--category start-->
    <div class="w-full desktop:h-[450px] mobile:h-[488px] mt-5">
      <div
        class="desktop:w-[90%] max-w-[1336px] h-[inherit] mx-auto desktop:p-5"
      >
        <div class="w-full h-[44px]">
          <h3 class="text-center text-[21px] text-[#000] font-bold">
            خرید بر اساس دسته بندی
          </h3>
        </div>
        <div class="w-full h-[calc(100%-44px)]">
          <div class="swiper catSwiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide mobile:!w-[900px] desktop:!w-full">
                <div
                  class="w-full h-full grid desktop:grid-cols-8 desktop:grid-rows-2 mobile:grid-rows-3 mobile:grid-cols-6 justify-center items-center"
                >
                  <div
                    class="desktop:w-[110px] desktop:h-[134px] mobile:w-[90px] mobile:h-[121px] flex flex-col justify-center content-center gap-1"
                  >
                    <img
                      class="w-[100px] h-[100px] object-contain"
                      src="./images/category/1.png"
                      alt=""
                    />
                    <span class="text-[12px] text-[#0c0c0c]">موبایل</span>
                  </div>
                  <div
                    class="desktop:w-[110px] desktop:h-[134px] mobile:w-[90px] mobile:h-[121px] flex flex-col justify-center items-center gap-1"
                  >
                    <img
                      class="w-[100px] h-[100px] object-contain"
                      src="./images/category/2.png"
                      alt=""
                    />
                    <span class="text-[12px] text-[#0c0c0c]">جواهرات</span>
                  </div>
                  <div
                    class="desktop:w-[110px] desktop:h-[134px] mobile:w-[90px] mobile:h-[121px] flex flex-col justify-center items-center gap-1"
                  >
                    <img
                      class="w-[100px] h-[100px] object-contain"
                      src="./images/category/3.png"
                      alt=""
                    />
                    <span class="text-[12px] text-[#0c0c0c]">کیف و کفش</span>
                  </div>
                  <div
                    class="desktop:w-[110px] desktop:h-[134px] mobile:w-[90px] mobile:h-[121px] flex flex-col justify-center items-center gap-1"
                  >
                    <img
                      class="w-[100px] h-[100px] object-contain"
                      src="./images/category/4.png"
                      alt=""
                    />
                    <span class="text-[12px] text-[#0c0c0c]">کیف و کفش</span>
                  </div>
                  <div
                    class="desktop:w-[110px] desktop:h-[134px] mobile:w-[90px] mobile:h-[121px] flex flex-col justify-center items-center gap-1"
                  >
                    <img
                      class="w-[100px] h-[100px] object-contain"
                      src="./images/category/6.png"
                      alt=""
                    />
                    <span class="text-[12px] text-[#0c0c0c]">اکسسوری</span>
                  </div>
                  <div
                    class="desktop:w-[110px] desktop:h-[134px] mobile:w-[90px] mobile:h-[121px] flex flex-col justify-center items-center gap-1"
                  >
                    <img
                      class="w-[100px] h-[100px] object-contain"
                      src="./images/category/7.png"
                      alt=""
                    />
                    <span class="text-[12px] text-[#0c0c0c]"
                      >لوازم التحریر</span
                    >
                  </div>
                  <div
                    class="desktop:w-[110px] desktop:h-[134px] mobile:w-[90px] mobile:h-[121px] flex flex-col justify-center items-center gap-1"
                  >
                    <img
                      class="w-[100px] h-[100px] object-contain"
                      src="./images/category/1.png"
                      alt=""
                    />
                    <span class="text-[12px] text-[#0c0c0c]">موبایل</span>
                  </div>
                  <div
                    class="desktop:w-[110px] desktop:h-[134px] mobile:w-[90px] mobile:h-[121px] flex flex-col justify-center items-center gap-1"
                  >
                    <img
                      class="w-[100px] h-[100px] object-contain"
                      src="./images/category/2.png"
                      alt=""
                    />
                    <span class="text-[12px] text-[#0c0c0c]">جواهرات</span>
                  </div>
                  <div
                    class="desktop:w-[110px] desktop:h-[134px] mobile:w-[90px] mobile:h-[121px] flex flex-col justify-center items-center gap-1"
                  >
                    <img
                      class="w-[100px] h-[100px] object-contain"
                      src="./images/category/3.png"
                      alt=""
                    />
                    <span class="text-[12px] text-[#0c0c0c]">کیف و کفش</span>
                  </div>
                  <div
                    class="desktop:w-[110px] desktop:h-[134px] mobile:w-[90px] mobile:h-[121px] flex flex-col justify-center items-center gap-1"
                  >
                    <img
                      class="w-[100px] h-[100px] object-contain"
                      src="./images/category/4.png"
                      alt=""
                    />
                    <span class="text-[12px] text-[#0c0c0c]">کیف و کفش</span>
                  </div>
                  <div
                    class="desktop:w-[110px] desktop:h-[134px] mobile:w-[90px] mobile:h-[121px] flex flex-col justify-center items-center gap-1"
                  >
                    <img
                      class="w-[100px] h-[100px] object-contain"
                      src="./images/category/6.png"
                      alt=""
                    />
                    <span class="text-[12px] text-[#0c0c0c]">اکسسوری</span>
                  </div>
                  <div
                    class="desktop:w-[110px] desktop:h-[134px] mobile:w-[90px] mobile:h-[121px] flex flex-col justify-center items-center gap-1"
                  >
                    <img
                      class="w-[100px] h-[100px] object-contain"
                      src="./images/category/7.png"
                      alt=""
                    />
                    <span class="text-[12px] text-[#0c0c0c]"
                      >لوازم التحریر</span
                    >
                  </div>
                  <div
                    class="desktop:w-[110px] desktop:h-[134px] mobile:w-[90px] mobile:h-[121px] flex flex-col justify-center items-center gap-1"
                  >
                    <img
                      class="w-[100px] h-[100px] object-contain"
                      src="./images/category/3.png"
                      alt=""
                    />
                    <span class="text-[12px] text-[#0c0c0c]">کیف و کفش</span>
                  </div>
                  <div
                    class="desktop:w-[110px] desktop:h-[134px] mobile:w-[90px] mobile:h-[121px] flex flex-col justify-center items-center gap-1"
                  >
                    <img
                      class="w-[100px] h-[100px] object-contain"
                      src="./images/category/4.png"
                      alt=""
                    />
                    <span class="text-[12px] text-[#0c0c0c]">کیف و کفش</span>
                  </div>
                  <div
                    class="desktop:w-[110px] desktop:h-[134px] mobile:w-[90px] mobile:h-[121px] flex flex-col justify-center items-center gap-1"
                  >
                    <img
                      class="w-[100px] h-[100px] object-contain"
                      src="./images/category/6.png"
                      alt=""
                    />
                    <span class="text-[12px] text-[#0c0c0c]">اکسسوری</span>
                  </div>
                  <div
                    class="desktop:w-[110px] desktop:h-[134px] mobile:w-[90px] mobile:h-[121px] flex flex-col justify-center items-center gap-1"
                  >
                    <img
                      class="w-[100px] h-[100px] object-contain"
                      src="./images/category/7.png"
                      alt=""
                    />
                    <span class="text-[12px] text-[#0c0c0c]"
                      >لوازم التحریر</span
                    >
                  </div>
                </div>
              </div>
              <div class="swiper-slide desktop:hidden !w-0"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--category end-->
`,ol=`
    <!--two banners start-->
    <div class="w-full desktop:h-[265px] mobile:h-auto flex justify-center">
      <div
        class="w-[90%] max-w-[1336px] grid desktop:grid-cols-2 mobile:grid-cols-1 gap-4 mx-auto" id="TwoBannersContainer"
      >
       <img
          class="rounded-xl justify-self-stretch"
          src="./images/two-banners/banner-1.jpg"
          alt="عکس"
        />
       <img
          class="rounded-xl justify-self-stretch"
          src="./images/two-banners/banner-2.jpg"
          alt="عکس"
        />
      </div>
    </div>
    <!--two banners end-->
`,nl=`
 <!--popular slider start-->
    <div class="w-full desktop:h-[224px] mobile:h-[170px] mt-5">
      <div
        class="desktop:w-[90%] mobile:w-full mx-auto max-w-[1336px] h-[inherit] desktop:border-[#2b2b2b33] desktop:border-[1px] desktop:rounded-xl p-4 overflow-hidden"
      >
        <div class="w-full h-[40px] flex justify-center items-center gap-2">
          <svg
            viewBox="0 0 25 24"
            class="w-[24px] h-[24px] fill-[rgb(249_188_0)]"
          >
            <path
              d="M7.278 6.192L4.5 3.414 5.914 2l2.778 2.778-1.414 1.414z"
            ></path>
            <path
              fill-rule="evenodd"
              d="M14.497 4.675l1.028 3.162h3.325c2.034 0 2.88 2.603 1.234 3.799l-2.69 1.954 1.028 3.163c.628 1.934-1.586 3.543-3.232 2.347l-2.69-1.954L9.81 19.1c-1.646 1.196-3.86-.413-3.232-2.348l1.028-3.162-2.69-1.954c-1.646-1.196-.8-3.799 1.234-3.8h3.325l1.028-3.161c.629-1.935 3.365-1.935 3.994 0zm-3.641 5.162a.1.1 0 00.095-.07l1.454-4.474a.1.1 0 01.19 0l1.454 4.475a.1.1 0 00.095.069h4.706a.1.1 0 01.058.18l-3.806 2.767a.1.1 0 00-.036.111l1.453 4.476a.1.1 0 01-.153.111l-3.807-2.765a.1.1 0 00-.118 0l-3.807 2.765a.1.1 0 01-.153-.111l1.453-4.476a.1.1 0 00-.036-.111l-3.806-2.766a.1.1 0 01.058-.181h4.706z"
              clip-rule="evenodd"
            ></path>
            <path
              d="M19.167 15.244l3.333 2.222 1.11-1.664-3.334-2.223-1.11 1.665zM5.833 15.244L2.5 17.466l-1.11-1.664 3.334-2.223 1.11 1.665zM11.5 20v3h2v-3h-2zM18.192 6.192l2.778-2.778L19.556 2l-2.778 2.778 1.414 1.414z"
            ></path>
          </svg>
          <p class="destop:text-[21px] mobile:text-[18px]">محبوب‌ترین برندها</p>
        </div>
        <div class="desktop:w-full h-[calc(100%-40px)]">
          <!-- Swiper -->
          <div class="swiper popularSwiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide w-[142px]">
                <div
                  class="w-full h-full border-l-[1px] border-l-[#2b2b2b33] flex justify-center items-center"
                >
                  <img
                    class="!w-[110px] !h-[110px] !object-contain"
                    src="./images/popular/1.png"
                    alt="brand"
                  />
                </div>
              </div>
              <div class="swiper-slide w-[142px]">
                <div
                  class="w-full h-full border-l-[1px] border-l-[#2b2b2b33] flex justify-center items-center"
                >
                  <img
                    class="!w-[110px] !h-[110px] !object-contain"
                    src="./images/popular/2.png"
                    alt="brand"
                  />
                </div>
              </div>
              <div class="swiper-slide w-[142px]">
                <div
                  class="w-full h-full border-l-[1px] border-l-[#2b2b2b33] flex justify-center items-center"
                >
                  <img
                    class="!w-[110px] !h-[110px] !object-contain"
                    src="./images/popular/3.png"
                    alt="brand"
                  />
                </div>
              </div>
              <div class="swiper-slide w-[142px]">
                <div
                  class="w-full h-full border-l-[1px] border-l-[#2b2b2b33] flex justify-center items-center"
                >
                  <img
                    class="!w-[110px] !h-[110px] !object-contain"
                    src="./images/popular/4.png"
                    alt="brand"
                  />
                </div>
              </div>
              <div class="swiper-slide w-[142px]">
                <div
                  class="w-full h-full border-l-[1px] border-l-[#2b2b2b33] flex justify-center items-center"
                >
                  <img
                    class="!w-[110px] !h-[110px] !object-contain"
                    src="./images/popular/13.png"
                    alt="brand"
                  />
                </div>
              </div>
              <div class="swiper-slide w-[142px]">
                <div
                  class="w-full h-full border-l-[1px] border-l-[#2b2b2b33] flex justify-center items-center"
                >
                  <img
                    class="!w-[110px] !h-[110px] !object-contain"
                    src="./images/popular/6.png"
                    alt="brand"
                  />
                </div>
              </div>
              <div class="swiper-slide w-[142px]">
                <div
                  class="w-full h-full border-l-[1px] border-l-[#2b2b2b33] flex justify-center items-center"
                >
                  <img
                    class="!w-[110px] !h-[110px] !object-contain"
                    src="./images/popular/7.png"
                    alt="brand"
                  />
                </div>
              </div>
              <div class="swiper-slide w-[142px]">
                <div
                  class="w-full h-full border-l-[1px] border-l-[#2b2b2b33] flex justify-center items-center"
                >
                  <img
                    class="!w-[110px] !h-[110px] !object-contain"
                    src="./images/popular/kale.png"
                    alt="brand"
                  />
                </div>
              </div>
              <div class="swiper-slide w-[142px]">
                <div
                  class="w-full h-full border-l-[1px] border-l-[#2b2b2b33] flex justify-center items-center"
                >
                  <img
                    class="!w-[110px] !h-[110px] !object-contain"
                    src="./images/popular/9.png"
                    alt="brand"
                  />
                </div>
              </div>
              <div class="swiper-slide w-[142px]">
                <div
                  class="w-full h-full border-l-[1px] border-l-[#2b2b2b33] flex justify-center items-center"
                >
                  <img
                    class="!w-[110px] !h-[110px] !object-contain"
                    src="./images/popular/10.png"
                    alt="brand"
                  />
                </div>
              </div>
              <div class="swiper-slide w-[142px]">
                <div
                  class="w-full h-full border-l-[1px] border-l-[#2b2b2b33] flex justify-center items-center"
                >
                  <img
                    class="!w-[110px] !h-[110px] !object-contain"
                    src="./images/popular/11.png"
                    alt="brand"
                  />
                </div>
              </div>
              <div class="swiper-slide w-[142px]">
                <div
                  class="w-full h-full border-l-[1px] border-l-[#2b2b2b33] flex justify-center items-center"
                >
                  <img
                    class="!w-[110px] !h-[110px] !object-contain"
                    src="./images/popular/12.png"
                    alt="brand"
                  />
                </div>
              </div>
              <div class="swiper-slide w-[142px]">
                <div class="w-full h-full flex justify-center items-center">
                  <img
                    class="!w-[110px] !h-[110px] !object-contain"
                    src="./images/popular/13.png"
                    alt="brand"
                  />
                </div>
              </div>
            </div>
            <div
              class="swiper-button-next mobile:hidden desktop:flex w-10 h-10 bg-[#fff] border-[1px] rounded-[40px] after:text-[15px] after:flex after:justify-center after:items-center after:text-[#2b2b2b] after:font-bold"
            ></div>
            <div
              class="swiper-button-prev desktop:flex mobile:hidden w-10 h-10 bg-[#fff] border-[1px] rounded-[40px] after:text-[15px] after:flex after:justify-center after:items-center after:text-[#2b2b2b] after:font-bold"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <!--popular slider end-->
`,dl=`
    <!--two banners start-->
    <div
      class="w-full desktop:h-[265px] mobile:h-auto flex justify-center mt-5"
    >
      <div
        class="w-[90%] max-w-[1336px] grid desktop:grid-cols-2 mobile:grid-cols-1 gap-4 mx-auto" id="TwoBanners2ndContainer"
      >
        <img
          class="rounded-xl justify-self-stretch"
          src="./images/two-banners/banner-3.jpg"
          alt="عکس"
        />
        <img
          class="rounded-xl justify-self-stretch"
          src="./images/two-banners/banner-4.jpg"
          alt="عکس"
        />
      </div>
    </div>
    <!--two banners end-->
`,cl=`
    <!--category grid start-->
    <div class="w-full mt-5">
      <div
        class="desktop:w-[90%] mobile:w-full max-w-[1336px] h-full mx-auto desktop:border-[1px] desktop:border-[#2b2b2b33] rounded-xl grid desktop:grid-cols-4 mobile:grid-cols-1"
      >
        <div
          class="py-2 px-5 flex flex-col justify-between border-b-[1px] border-b-[#2b2b2b33] desktop:border-b-[0px] border-l-[1px] border-l-[#2b2b2b33]"
        >
          <div class="w-full">
            <h4 class="text-[16px] text-[#23254e] leading-[33px] font-bold">
              گوشی موبایل
            </h4>
            <p class="text-[11px] text-[#81858b] leading-[23px]">
              بر اساس سلیقه شما
            </p>
          </div>
          <div class="w-full grid grid-cols-2 grid-rows-2">
            <div
              class="h-full w-full flex justify-center items-center border-l-[1px] border-l-[#2b2b2b33] border-b-[1px] border-b-[#2b2b2b33]"
            >
              <img
                class="w-[80%] h-[80%] object-contain"
                src="./images/category-grid/1.png"
                alt=""
              />
            </div>
            <div
              class="h-full w-full flex justify-center items-center border-b-[1px] border-b-[#2b2b2b33]"
            >
              <img
                class="w-[80%] h-[80%] object-contain"
                src="./images/category-grid/2.png"
                alt=""
              />
            </div>
            <div
              class="h-full w-full flex justify-center items-center border-l-[1px] border-l-[#2b2b2b33]"
            >
              <img
                class="w-[80%] h-[80%] object-contain"
                src="./images/category-grid/3.png"
                alt=""
              />
            </div>
            <div class="h-full w-full flex justify-center items-center">
              <img
                class="w-[80%] h-[80%] object-contain"
                src="./images/category-grid/4.png"
                alt=""
              />
            </div>
          </div>
          <div class="w-full flex justify-center mb-5">
            <a href="#" class="flex items-center text-teal-400 text-[12px]">
              مشاهده
              <svg viewBox="0 0 24 24" class="w-[18px] h-[18px] fill-teal-400">
                <path
                  d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div
          class="py-2 px-5 flex flex-col justify-between border-b-[1px] border-b-[#2b2b2b33] desktop:border-b-[0px] border-l-[1px] border-l-[#2b2b2b33]"
        >
          <div class="w-full">
            <h4 class="text-[16px] text-[#23254e] leading-[33px] font-bold">
              گوشی موبایل
            </h4>
            <p class="text-[11px] text-[#81858b] leading-[23px]">
              بر اساس سلیقه شما
            </p>
          </div>
          <div class="w-full grid grid-cols-2 grid-rows-2">
            <div
              class="h-full w-full flex justify-center items-center border-l-[1px] border-l-[#2b2b2b33] border-b-[1px] border-b-[#2b2b2b33]"
            >
              <img
                class="w-[80%] h-[80%] object-contain"
                src="./images/category-grid/1.png"
                alt=""
              />
            </div>
            <div
              class="h-full w-full flex justify-center items-center border-b-[1px] border-b-[#2b2b2b33]"
            >
              <img
                class="w-[80%] h-[80%] object-contain"
                src="./images/category-grid/2.png"
                alt=""
              />
            </div>
            <div
              class="h-full w-full flex justify-center items-center border-l-[1px] border-l-[#2b2b2b33]"
            >
              <img
                class="w-[80%] h-[80%] object-contain"
                src="./images/category-grid/3.png"
                alt=""
              />
            </div>
            <div class="h-full w-full flex justify-center items-center">
              <img
                class="w-[80%] h-[80%] object-contain"
                src="./images/category-grid/4.png"
                alt=""
              />
            </div>
          </div>
          <div class="w-full flex justify-center mb-5">
            <a href="#" class="flex items-center text-teal-400 text-[12px]">
              مشاهده
              <svg viewBox="0 0 24 24" class="w-[18px] h-[18px] fill-teal-400">
                <path
                  d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div
          class="py-2 px-5 flex flex-col justify-between border-b-[1px] border-b-[#2b2b2b33] desktop:border-b-[0px] border-l-[1px] border-l-[#2b2b2b33]"
        >
          <div class="w-full">
            <h4 class="text-[16px] text-[#23254e] leading-[33px] font-bold">
              گوشی موبایل
            </h4>
            <p class="text-[11px] text-[#81858b] leading-[23px]">
              بر اساس سلیقه شما
            </p>
          </div>
          <div class="w-full grid grid-cols-2 grid-rows-2">
            <div
              class="h-full w-full flex justify-center items-center border-l-[1px] border-l-[#2b2b2b33] border-b-[1px] border-b-[#2b2b2b33]"
            >
              <img
                class="w-[80%] h-[80%] object-contain"
                src="./images/category-grid/1.png"
                alt=""
              />
            </div>
            <div
              class="h-full w-full flex justify-center items-center border-b-[1px] border-b-[#2b2b2b33]"
            >
              <img
                class="w-[80%] h-[80%] object-contain"
                src="./images/category-grid/2.png"
                alt=""
              />
            </div>
            <div
              class="h-full w-full flex justify-center items-center border-l-[1px] border-l-[#2b2b2b33]"
            >
              <img
                class="w-[80%] h-[80%] object-contain"
                src="./images/category-grid/3.png"
                alt=""
              />
            </div>
            <div class="h-full w-full flex justify-center items-center">
              <img
                class="w-[80%] h-[80%] object-contain"
                src="./images/category-grid/4.png"
                alt=""
              />
            </div>
          </div>
          <div class="w-full flex justify-center mb-5">
            <a href="#" class="flex items-center text-teal-400 text-[12px]">
              مشاهده
              <svg viewBox="0 0 24 24" class="w-[18px] h-[18px] fill-teal-400">
                <path
                  d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="py-2 px-5 flex flex-col justify-between">
          <div class="w-full">
            <h4 class="text-[16px] text-[#23254e] leading-[33px] font-bold">
              گوشی موبایل
            </h4>
            <p class="text-[11px] text-[#81858b] leading-[23px]">
              بر اساس سلیقه شما
            </p>
          </div>
          <div class="w-full grid grid-cols-2 grid-rows-2">
            <div
              class="h-full w-full flex justify-center items-center border-l-[1px] border-l-[#2b2b2b33] border-b-[1px] border-b-[#2b2b2b33]"
            >
              <img
                class="w-[80%] h-[80%] object-contain"
                src="./images/category-grid/1.png"
                alt=""
              />
            </div>
            <div
              class="h-full w-full flex justify-center items-center border-b-[1px] border-b-[#2b2b2b33]"
            >
              <img
                class="w-[80%] h-[80%] object-contain"
                src="./images/category-grid/2.png"
                alt=""
              />
            </div>
            <div
              class="h-full w-full flex justify-center items-center border-l-[1px] border-l-[#2b2b2b33]"
            >
              <img
                class="w-[80%] h-[80%] object-contain"
                src="./images/category-grid/3.png"
                alt=""
              />
            </div>
            <div class="h-full w-full flex justify-center items-center">
              <img
                class="w-[80%] h-[80%] object-contain"
                src="./images/category-grid/4.png"
                alt=""
              />
            </div>
          </div>
          <div class="w-full flex justify-center mb-5">
            <a href="#" class="flex items-center text-teal-400 text-[12px]">
              مشاهده
              <svg viewBox="0 0 24 24" class="w-[18px] h-[18px] fill-teal-400">
                <path
                  d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!--category grid end-->`,pl=`
    <!--digiclub start-->
    <div class="w-full desktop:h-[88px] mobile:h-[202px] mt-5">
      <div
        class="desktop:w-[90%] mobile:w-full max-w-[1336px] h-full mx-auto desktop:rounded-xl bg-gradient-to-r from-[#7cf2f6] to-[#35a6c8] flex desktop:flex-row mobile:flex-col p-4 desktop:justify-between mobile:justify-between"
      >
        <div class="desktop:h-full flex items-center pr-4">
          <img
            class="w-[119px] h-[33px]"
            src="./images/digiclub/digiclub-logo-white.svg"
            alt="digiclub"
          />
        </div>
        <div
          class="flex gap-x-1 desktop:h-full desktop:items-center mobile:w-full desktop:w-auto justify-center"
        >
          <div
            class="flex desktop:flex-row mobile:flex-col bg-white desktop:w-[273px] desktop:h-[63px] mobile:w-[125px] mobile:h-[125px] justify-between items-center overflow-hidden rounded-r-lg mobile:pt-2 desktop:pt-0"
          >
            <svg
              class="w-[20px] h-[20px] fill-teal-400 desktop:mr-4"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M15.9 4.888C15.492 3.22 13.888 2 12 2c-1.894 0-3.504 1.228-3.904 2.906l-.006-.014-.27.136a9 9 0 108.08-.14zm-.174 2.305l.034-.099a7 7 0 11-7.523 0c.11.312.253.617.43.916a6 6 0 106.667 0c.157-.267.289-.54.392-.817zm-1.645 2.39l.137-.137-.136.137h-.001zm0 0a4 4 0 11-4.162.001 9.608 9.608 0 001.544 1.26l.537.341.537-.341a9.612 9.612 0 001.545-1.26zM10 5.723C10 4.792 10.873 4 12 4s2 .792 2 1.722c0 .725-.444 1.533-1.218 2.331a8.16 8.16 0 01-.515.487L12 8.762l-.267-.222a8.16 8.16 0 01-.515-.487C10.444 7.255 10 6.447 10 5.723z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="text-[12px]">چرخ و بخت</span>
            <img
              class="w-[168px] h-[60px] object-cover"
              src="./images/digiclub/1.png"
              alt="digiclub"
            />
          </div>
          <div
            class="flex desktop:flex-row mobile:flex-col bg-white desktop:w-[273px] desktop:h-[63px] mobile:w-[125px] mobile:h-[125px] justify-between items-center overflow-hidden mobile:pt-2 desktop:pt-0"
          >
            <svg
              class="w-[20px] h-[20px] fill-teal-400 desktop:mr-4"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M15.9 4.888C15.492 3.22 13.888 2 12 2c-1.894 0-3.504 1.228-3.904 2.906l-.006-.014-.27.136a9 9 0 108.08-.14zm-.174 2.305l.034-.099a7 7 0 11-7.523 0c.11.312.253.617.43.916a6 6 0 106.667 0c.157-.267.289-.54.392-.817zm-1.645 2.39l.137-.137-.136.137h-.001zm0 0a4 4 0 11-4.162.001 9.608 9.608 0 001.544 1.26l.537.341.537-.341a9.612 9.612 0 001.545-1.26zM10 5.723C10 4.792 10.873 4 12 4s2 .792 2 1.722c0 .725-.444 1.533-1.218 2.331a8.16 8.16 0 01-.515.487L12 8.762l-.267-.222a8.16 8.16 0 01-.515-.487C10.444 7.255 10 6.447 10 5.723z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="text-[12px]">چرخ و بخت</span>
            <img
              class="w-[168px] h-[60px] object-cover"
              src="./images/digiclub/2.png"
              alt="digiclub"
            />
          </div>
          <div
            class="flex desktop:flex-row mobile:flex-col bg-white desktop:w-[273px] desktop:h-[63px] mobile:w-[125px] mobile:h-[125px] justify-between items-center overflow-hidden rounded-l-lg mobile:pt-2 desktop:pt-0"
          >
            <svg
              class="w-[20px] h-[20px] fill-teal-400 desktop:mr-4"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M15.9 4.888C15.492 3.22 13.888 2 12 2c-1.894 0-3.504 1.228-3.904 2.906l-.006-.014-.27.136a9 9 0 108.08-.14zm-.174 2.305l.034-.099a7 7 0 11-7.523 0c.11.312.253.617.43.916a6 6 0 106.667 0c.157-.267.289-.54.392-.817zm-1.645 2.39l.137-.137-.136.137h-.001zm0 0a4 4 0 11-4.162.001 9.608 9.608 0 001.544 1.26l.537.341.537-.341a9.612 9.612 0 001.545-1.26zM10 5.723C10 4.792 10.873 4 12 4s2 .792 2 1.722c0 .725-.444 1.533-1.218 2.331a8.16 8.16 0 01-.515.487L12 8.762l-.267-.222a8.16 8.16 0 01-.515-.487C10.444 7.255 10 6.447 10 5.723z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="text-[12px]">چرخ و بخت</span>
            <img
              class="w-[168px] h-[60px] object-cover"
              src="./images/digiclub/3.png"
              alt="digiclub"
            />
          </div>
        </div>
      </div>
    </div>
    <!--digiclub end-->`,fl=`
    <!--bestSeller slider start-->
    <div class="w-full h-[400px] mt-5 overflow-hidden">
      <div
        class="desktop:w-[90%] mobile:w-full h-full mx-auto max-w-[1336px] desktop:rounded-xl desktop:border-[1px] desktop:border-[#2b2b2b33] p-3 relative"
      >
        <div
          class="w-full h-[44px] text-[21px] flex justify-center items-center"
        >
          <svg viewBox="0 0 24 24" class="w-[24px] h-[24px] fill-[#f9a825]">
            <path
              fill-rule="evenodd"
              d="M12.015 9.105c.222.397.41.73.466.842.361.724.519 1.31.519 2.053a2 2 0 01-4 0l.003-4.557c0-.953-1.206-1.367-1.79-.613C5.087 9.572 4 11.906 4 13.889 4 18.365 7.578 22 12 22c4.422 0 8-3.635 8-8.111 0-2.968-2.45-6.78-7.295-11.598a1 1 0 00-1.6.262c-.807 1.615-.807 3.28 0 4.894.178.356.582 1.076.91 1.658zM7 12a4 4 0 108 0c0-1.078-.238-1.962-.73-2.947-.079-.156-.31-.569-.566-1.024a50.532 50.532 0 01-.81-1.476c-.273-.546-.404-1.079-.393-1.612C16.18 8.811 18 11.834 18 13.889 18 17.267 15.31 20 12 20s-6-2.733-6-6.111c0-.87.33-1.925 1-3.154V12z"
              clip-rule="evenodd"
            ></path>
          </svg>
          پرفروش‌ترین کالاها
          <span
            class="text-[#19bfd3] font-bold absolute top-6 left-6 text-[12px]"
            >مشاهده همه</span
          >
        </div>
        <div class="desktop:w-full h-[calc(100%-44px)]">
          <div class="swiper bestSwiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide w-[314px]">
                <div class="w-full h-full">
                  <div class="w-full h-1/3 flex items-center p-3">
                    <img
                      class="!w-[86px] !h-[86px] !object-cover"
                      src="./images/bestSeller/1.png"
                      alt="bestSeller"
                    />
                    <span class="text-[26px] text-[#19bfd3] font-bold mx-2"
                      >۱</span
                    >
                    <div
                      class="text-[12px] text-right h-full flex items-center border-b-[1px] border-b-[#2b2b2b33]"
                    >
                      <p class="line-clamp-2">
                        کالباس 90 درصد گوشت مرغ هایزم - 250 گرم
                      </p>
                    </div>
                  </div>
                  <div class="w-full h-1/3 flex items-center p-3">
                    <img
                      class="!w-[86px] !h-[86px] !object-cover"
                      src="./images/bestSeller/2.png"
                      alt="bestSeller"
                    />
                    <span class="text-[26px] text-[#19bfd3] font-bold mx-2"
                      >۲</span
                    >
                    <div
                      class="text-[12px] text-right h-full flex items-center border-b-[1px] border-b-[#2b2b2b33]"
                    >
                      <p class="line-clamp-2">
                        گوشی موبایل سامسونگ مدل Galaxy A15 دو سیم کارت ظرفیت 128
                        گیگابایت و رم 4 گیگابایت - ویتنام
                      </p>
                    </div>
                  </div>
                  <div class="w-full h-1/3 flex items-center p-3">
                    <img
                      class="!w-[86px] !h-[86px] !object-cover"
                      src="./images/bestSeller/3.png"
                      alt="bestSeller"
                    />
                    <span class="text-[26px] text-[#19bfd3] font-bold mx-2"
                      >۳</span
                    >
                    <div
                      class="text-[12px] text-right h-full flex items-center"
                    >
                      <p class="line-clamp-2">
                        گوشی موبایل نوکیا مدل 106 2023 دو سیم‌ کارت - مونتاژ
                        ایران تحت لیسانس نوکیا
                      </p>
                    </div>
                  </div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div class="swiper-slide w-[314px]">
                <div class="w-full h-full">
                  <div class="w-full h-1/3 flex items-center p-3">
                    <img
                      class="!w-[86px] !h-[86px] !object-cover"
                      src="./images/bestSeller/1.png"
                      alt="bestSeller"
                    />
                    <span class="text-[26px] text-[#19bfd3] font-bold mx-2"
                      >۱</span
                    >
                    <div
                      class="text-[12px] text-right h-full flex items-center border-b-[1px] border-b-[#2b2b2b33]"
                    >
                      <p class="line-clamp-2">
                        کالباس 90 درصد گوشت مرغ هایزم - 250 گرم
                      </p>
                    </div>
                  </div>
                  <div class="w-full h-1/3 flex items-center p-3">
                    <img
                      class="!w-[86px] !h-[86px] !object-cover"
                      src="./images/bestSeller/2.png"
                      alt="bestSeller"
                    />
                    <span class="text-[26px] text-[#19bfd3] font-bold mx-2"
                      >۲</span
                    >
                    <div
                      class="text-[12px] text-right h-full flex items-center border-b-[1px] border-b-[#2b2b2b33]"
                    >
                      <p class="line-clamp-2">
                        گوشی موبایل سامسونگ مدل Galaxy A15 دو سیم کارت ظرفیت 128
                        گیگابایت و رم 4 گیگابایت - ویتنام
                      </p>
                    </div>
                  </div>
                  <div class="w-full h-1/3 flex items-center p-3">
                    <img
                      class="!w-[86px] !h-[86px] !object-cover"
                      src="./images/bestSeller/3.png"
                      alt="bestSeller"
                    />
                    <span class="text-[26px] text-[#19bfd3] font-bold mx-2"
                      >۳</span
                    >
                    <div
                      class="text-[12px] text-right h-full flex items-center"
                    >
                      <p class="line-clamp-2">
                        گوشی موبایل نوکیا مدل 106 2023 دو سیم‌ کارت - مونتاژ
                        ایران تحت لیسانس نوکیا
                      </p>
                    </div>
                  </div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div class="swiper-slide w-[314px]">
                <div class="w-full h-full">
                  <div class="w-full h-1/3 flex items-center p-3">
                    <img
                      class="!w-[86px] !h-[86px] !object-cover"
                      src="./images/bestSeller/1.png"
                      alt="bestSeller"
                    />
                    <span class="text-[26px] text-[#19bfd3] font-bold mx-2"
                      >۱</span
                    >
                    <div
                      class="text-[12px] text-right h-full flex items-center border-b-[1px] border-b-[#2b2b2b33]"
                    >
                      <p class="line-clamp-2">
                        کالباس 90 درصد گوشت مرغ هایزم - 250 گرم
                      </p>
                    </div>
                  </div>
                  <div class="w-full h-1/3 flex items-center p-3">
                    <img
                      class="!w-[86px] !h-[86px] !object-cover"
                      src="./images/bestSeller/2.png"
                      alt="bestSeller"
                    />
                    <span class="text-[26px] text-[#19bfd3] font-bold mx-2"
                      >۲</span
                    >
                    <div
                      class="text-[12px] text-right h-full flex items-center border-b-[1px] border-b-[#2b2b2b33]"
                    >
                      <p class="line-clamp-2">
                        گوشی موبایل سامسونگ مدل Galaxy A15 دو سیم کارت ظرفیت 128
                        گیگابایت و رم 4 گیگابایت - ویتنام
                      </p>
                    </div>
                  </div>
                  <div class="w-full h-1/3 flex items-center p-3">
                    <img
                      class="!w-[86px] !h-[86px] !object-cover"
                      src="./images/bestSeller/3.png"
                      alt="bestSeller"
                    />
                    <span class="text-[26px] text-[#19bfd3] font-bold mx-2"
                      >۳</span
                    >
                    <div
                      class="text-[12px] text-right h-full flex items-center"
                    >
                      <p class="line-clamp-2">
                        گوشی موبایل نوکیا مدل 106 2023 دو سیم‌ کارت - مونتاژ
                        ایران تحت لیسانس نوکیا
                      </p>
                    </div>
                  </div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div class="swiper-slide w-[314px]">
                <div class="w-full h-full">
                  <div class="w-full h-1/3 flex items-center p-3">
                    <img
                      class="!w-[86px] !h-[86px] !object-cover"
                      src="./images/bestSeller/1.png"
                      alt="bestSeller"
                    />
                    <span class="text-[26px] text-[#19bfd3] font-bold mx-2"
                      >۱</span
                    >
                    <div
                      class="text-[12px] text-right h-full flex items-center border-b-[1px] border-b-[#2b2b2b33]"
                    >
                      <p class="line-clamp-2">
                        کالباس 90 درصد گوشت مرغ هایزم - 250 گرم
                      </p>
                    </div>
                  </div>
                  <div class="w-full h-1/3 flex items-center p-3">
                    <img
                      class="!w-[86px] !h-[86px] !object-cover"
                      src="./images/bestSeller/2.png"
                      alt="bestSeller"
                    />
                    <span class="text-[26px] text-[#19bfd3] font-bold mx-2"
                      >۲</span
                    >
                    <div
                      class="text-[12px] text-right h-full flex items-center border-b-[1px] border-b-[#2b2b2b33]"
                    >
                      <p class="line-clamp-2">
                        گوشی موبایل سامسونگ مدل Galaxy A15 دو سیم کارت ظرفیت 128
                        گیگابایت و رم 4 گیگابایت - ویتنام
                      </p>
                    </div>
                  </div>
                  <div class="w-full h-1/3 flex items-center p-3">
                    <img
                      class="!w-[86px] !h-[86px] !object-cover"
                      src="./images/bestSeller/3.png"
                      alt="bestSeller"
                    />
                    <span class="text-[26px] text-[#19bfd3] font-bold mx-2"
                      >۳</span
                    >
                    <div
                      class="text-[12px] text-right h-full flex items-center"
                    >
                      <p class="line-clamp-2">
                        گوشی موبایل نوکیا مدل 106 2023 دو سیم‌ کارت - مونتاژ
                        ایران تحت لیسانس نوکیا
                      </p>
                    </div>
                  </div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div class="swiper-slide w-[314px]">
                <div class="w-full h-full">
                  <div class="w-full h-1/3 flex items-center p-3">
                    <img
                      class="!w-[86px] !h-[86px] !object-cover"
                      src="./images/bestSeller/1.png"
                      alt="bestSeller"
                    />
                    <span class="text-[26px] text-[#19bfd3] font-bold mx-2"
                      >۱</span
                    >
                    <div
                      class="text-[12px] text-right h-full flex items-center border-b-[1px] border-b-[#2b2b2b33]"
                    >
                      <p class="line-clamp-2">
                        کالباس 90 درصد گوشت مرغ هایزم - 250 گرم
                      </p>
                    </div>
                  </div>
                  <div class="w-full h-1/3 flex items-center p-3">
                    <img
                      class="!w-[86px] !h-[86px] !object-cover"
                      src="./images/bestSeller/2.png"
                      alt="bestSeller"
                    />
                    <span class="text-[26px] text-[#19bfd3] font-bold mx-2"
                      >۲</span
                    >
                    <div
                      class="text-[12px] text-right h-full flex items-center border-b-[1px] border-b-[#2b2b2b33]"
                    >
                      <p class="line-clamp-2">
                        گوشی موبایل سامسونگ مدل Galaxy A15 دو سیم کارت ظرفیت 128
                        گیگابایت و رم 4 گیگابایت - ویتنام
                      </p>
                    </div>
                  </div>
                  <div class="w-full h-1/3 flex items-center p-3">
                    <img
                      class="!w-[86px] !h-[86px] !object-cover"
                      src="./images/bestSeller/3.png"
                      alt="bestSeller"
                    />
                    <span class="text-[26px] text-[#19bfd3] font-bold mx-2"
                      >۳</span
                    >
                    <div
                      class="text-[12px] text-right h-full flex items-center"
                    >
                      <p class="line-clamp-2">
                        گوشی موبایل نوکیا مدل 106 2023 دو سیم‌ کارت - مونتاژ
                        ایران تحت لیسانس نوکیا
                      </p>
                    </div>
                  </div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div class="swiper-slide w-[314px]">
                <div class="w-full h-full">
                  <div class="w-full h-1/3 flex items-center p-3">
                    <img
                      class="!w-[86px] !h-[86px] !object-cover"
                      src="./images/bestSeller/1.png"
                      alt="bestSeller"
                    />
                    <span class="text-[26px] text-[#19bfd3] font-bold mx-2"
                      >۱</span
                    >
                    <div
                      class="text-[12px] text-right h-full flex items-center border-b-[1px] border-b-[#2b2b2b33]"
                    >
                      <p class="line-clamp-2">
                        کالباس 90 درصد گوشت مرغ هایزم - 250 گرم
                      </p>
                    </div>
                  </div>
                  <div class="w-full h-1/3 flex items-center p-3">
                    <img
                      class="!w-[86px] !h-[86px] !object-cover"
                      src="./images/bestSeller/2.png"
                      alt="bestSeller"
                    />
                    <span class="text-[26px] text-[#19bfd3] font-bold mx-2"
                      >۲</span
                    >
                    <div
                      class="text-[12px] text-right h-full flex items-center border-b-[1px] border-b-[#2b2b2b33]"
                    >
                      <p class="line-clamp-2">
                        گوشی موبایل سامسونگ مدل Galaxy A15 دو سیم کارت ظرفیت 128
                        گیگابایت و رم 4 گیگابایت - ویتنام
                      </p>
                    </div>
                  </div>
                  <div class="w-full h-1/3 flex items-center p-3">
                    <img
                      class="!w-[86px] !h-[86px] !object-cover"
                      src="./images/bestSeller/3.png"
                      alt="bestSeller"
                    />
                    <span class="text-[26px] text-[#19bfd3] font-bold mx-2"
                      >۳</span
                    >
                    <div
                      class="text-[12px] text-right h-full flex items-center"
                    >
                      <p class="line-clamp-2">
                        گوشی موبایل نوکیا مدل 106 2023 دو سیم‌ کارت - مونتاژ
                        ایران تحت لیسانس نوکیا
                      </p>
                    </div>
                  </div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div class="swiper-slide w-[314px]">
                <div class="w-full h-full">
                  <div class="w-full h-1/3 flex items-center p-3">
                    <img
                      class="!w-[86px] !h-[86px] !object-cover"
                      src="./images/bestSeller/1.png"
                      alt="bestSeller"
                    />
                    <span class="text-[26px] text-[#19bfd3] font-bold mx-2"
                      >۱</span
                    >
                    <div
                      class="text-[12px] text-right h-full flex items-center border-b-[1px] border-b-[#2b2b2b33]"
                    >
                      <p class="line-clamp-2">
                        کالباس 90 درصد گوشت مرغ هایزم - 250 گرم
                      </p>
                    </div>
                  </div>
                  <div class="w-full h-1/3 flex items-center p-3">
                    <img
                      class="!w-[86px] !h-[86px] !object-cover"
                      src="./images/bestSeller/2.png"
                      alt="bestSeller"
                    />
                    <span class="text-[26px] text-[#19bfd3] font-bold mx-2"
                      >۲</span
                    >
                    <div
                      class="text-[12px] text-right h-full flex items-center border-b-[1px] border-b-[#2b2b2b33]"
                    >
                      <p class="line-clamp-2">
                        گوشی موبایل سامسونگ مدل Galaxy A15 دو سیم کارت ظرفیت 128
                        گیگابایت و رم 4 گیگابایت - ویتنام
                      </p>
                    </div>
                  </div>
                  <div class="w-full h-1/3 flex items-center p-3">
                    <img
                      class="!w-[86px] !h-[86px] !object-cover"
                      src="./images/bestSeller/3.png"
                      alt="bestSeller"
                    />
                    <span class="text-[26px] text-[#19bfd3] font-bold mx-2"
                      >۳</span
                    >
                    <div
                      class="text-[12px] text-right h-full flex items-center"
                    >
                      <p class="line-clamp-2">
                        گوشی موبایل نوکیا مدل 106 2023 دو سیم‌ کارت - مونتاژ
                        ایران تحت لیسانس نوکیا
                      </p>
                    </div>
                  </div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div class="swiper-slide w-[314px]">
                <div class="w-full h-full">
                  <div class="w-full h-1/3 flex items-center p-3">
                    <img
                      class="!w-[86px] !h-[86px] !object-cover"
                      src="./images/bestSeller/1.png"
                      alt="bestSeller"
                    />
                    <span class="text-[26px] text-[#19bfd3] font-bold mx-2"
                      >۱</span
                    >
                    <div
                      class="text-[12px] text-right h-full flex items-center border-b-[1px] border-b-[#2b2b2b33]"
                    >
                      <p class="line-clamp-2">
                        کالباس 90 درصد گوشت مرغ هایزم - 250 گرم
                      </p>
                    </div>
                  </div>
                  <div class="w-full h-1/3 flex items-center p-3">
                    <img
                      class="!w-[86px] !h-[86px] !object-cover"
                      src="./images/bestSeller/2.png"
                      alt="bestSeller"
                    />
                    <span class="text-[26px] text-[#19bfd3] font-bold mx-2"
                      >۲</span
                    >
                    <div
                      class="text-[12px] text-right h-full flex items-center border-b-[1px] border-b-[#2b2b2b33]"
                    >
                      <p class="line-clamp-2">
                        گوشی موبایل سامسونگ مدل Galaxy A15 دو سیم کارت ظرفیت 128
                        گیگابایت و رم 4 گیگابایت - ویتنام
                      </p>
                    </div>
                  </div>
                  <div class="w-full h-1/3 flex items-center p-3">
                    <img
                      class="!w-[86px] !h-[86px] !object-cover"
                      src="./images/bestSeller/3.png"
                      alt="bestSeller"
                    />
                    <span class="text-[26px] text-[#19bfd3] font-bold mx-2"
                      >۳</span
                    >
                    <div
                      class="text-[12px] text-right h-full flex items-center"
                    >
                      <p class="line-clamp-2">
                        گوشی موبایل نوکیا مدل 106 2023 دو سیم‌ کارت - مونتاژ
                        ایران تحت لیسانس نوکیا
                      </p>
                    </div>
                  </div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
            <div
              class="swiper-button-next mobile:hidden desktop:flex w-10 h-10 bg-[#fff] border-[1px] rounded-[40px] after:text-[15px] after:flex after:justify-center after:items-center after:text-[#2b2b2b] after:font-bold"
            ></div>
            <div
              class="swiper-button-prev desktop:flex mobile:hidden w-10 h-10 bg-[#fff] border-[1px] rounded-[40px] after:text-[15px] after:flex after:justify-center after:items-center after:text-[#2b2b2b] after:font-bold"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <!--bestSeller slider end-->`,bl=`
    <!--category grid 2 start-->
    <div class="w-full mt-5">
      <div
        class="desktop:w-[90%] mobile:w-full max-w-[1336px] h-full mx-auto desktop:border-[1px] desktop:border-[#2b2b2b33] rounded-xl grid desktop:grid-cols-4 mobile:grid-cols-1"
      >
        <div
          class="py-2 px-5 flex flex-col justify-between border-b-[1px] border-b-[#2b2b2b33] desktop:border-b-[0px] border-l-[1px] border-l-[#2b2b2b33]"
        >
          <div class="w-full">
            <h4 class="text-[16px] text-[#23254e] leading-[33px] font-bold">
              گوشی موبایل
            </h4>
            <p class="text-[11px] text-[#81858b] leading-[23px]">
              بر اساس سلیقه شما
            </p>
          </div>
          <div class="w-full grid grid-cols-2 grid-rows-2">
            <div
              class="h-full w-full flex justify-center items-center border-l-[1px] border-l-[#2b2b2b33] border-b-[1px] border-b-[#2b2b2b33]"
            >
              <img
                class="w-[80%] h-[80%] object-contain"
                src="./images/category-grid/1.png"
                alt=""
              />
            </div>
            <div
              class="h-full w-full flex justify-center items-center border-b-[1px] border-b-[#2b2b2b33]"
            >
              <img
                class="w-[80%] h-[80%] object-contain"
                src="./images/category-grid/2.png"
                alt=""
              />
            </div>
            <div
              class="h-full w-full flex justify-center items-center border-l-[1px] border-l-[#2b2b2b33]"
            >
              <img
                class="w-[80%] h-[80%] object-contain"
                src="./images/category-grid/3.png"
                alt=""
              />
            </div>
            <div class="h-full w-full flex justify-center items-center">
              <img
                class="w-[80%] h-[80%] object-contain"
                src="./images/category-grid/4.png"
                alt=""
              />
            </div>
          </div>
          <div class="w-full flex justify-center mb-5">
            <a href="#" class="flex items-center text-teal-400 text-[12px]">
              مشاهده
              <svg viewBox="0 0 24 24" class="w-[18px] h-[18px] fill-teal-400">
                <path
                  d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div
          class="py-2 px-5 flex flex-col justify-between border-b-[1px] border-b-[#2b2b2b33] desktop:border-b-[0px] border-l-[1px] border-l-[#2b2b2b33]"
        >
          <div class="w-full">
            <h4 class="text-[16px] text-[#23254e] leading-[33px] font-bold">
              گوشی موبایل
            </h4>
            <p class="text-[11px] text-[#81858b] leading-[23px]">
              بر اساس سلیقه شما
            </p>
          </div>
          <div class="w-full grid grid-cols-2 grid-rows-2">
            <div
              class="h-full w-full flex justify-center items-center border-l-[1px] border-l-[#2b2b2b33] border-b-[1px] border-b-[#2b2b2b33]"
            >
              <img
                class="w-[80%] h-[80%] object-contain"
                src="./images/category-grid/1.png"
                alt=""
              />
            </div>
            <div
              class="h-full w-full flex justify-center items-center border-b-[1px] border-b-[#2b2b2b33]"
            >
              <img
                class="w-[80%] h-[80%] object-contain"
                src="./images/category-grid/2.png"
                alt=""
              />
            </div>
            <div
              class="h-full w-full flex justify-center items-center border-l-[1px] border-l-[#2b2b2b33]"
            >
              <img
                class="w-[80%] h-[80%] object-contain"
                src="./images/category-grid/3.png"
                alt=""
              />
            </div>
            <div class="h-full w-full flex justify-center items-center">
              <img
                class="w-[80%] h-[80%] object-contain"
                src="./images/category-grid/4.png"
                alt=""
              />
            </div>
          </div>
          <div class="w-full flex justify-center mb-5">
            <a href="#" class="flex items-center text-teal-400 text-[12px]">
              مشاهده
              <svg viewBox="0 0 24 24" class="w-[18px] h-[18px] fill-teal-400">
                <path
                  d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div
          class="py-2 px-5 flex flex-col justify-between border-b-[1px] border-b-[#2b2b2b33] desktop:border-b-[0px] border-l-[1px] border-l-[#2b2b2b33]"
        >
          <div class="w-full">
            <h4 class="text-[16px] text-[#23254e] leading-[33px] font-bold">
              گوشی موبایل
            </h4>
            <p class="text-[11px] text-[#81858b] leading-[23px]">
              بر اساس سلیقه شما
            </p>
          </div>
          <div class="w-full grid grid-cols-2 grid-rows-2">
            <div
              class="h-full w-full flex justify-center items-center border-l-[1px] border-l-[#2b2b2b33] border-b-[1px] border-b-[#2b2b2b33]"
            >
              <img
                class="w-[80%] h-[80%] object-contain"
                src="./images/category-grid/1.png"
                alt=""
              />
            </div>
            <div
              class="h-full w-full flex justify-center items-center border-b-[1px] border-b-[#2b2b2b33]"
            >
              <img
                class="w-[80%] h-[80%] object-contain"
                src="./images/category-grid/2.png"
                alt=""
              />
            </div>
            <div
              class="h-full w-full flex justify-center items-center border-l-[1px] border-l-[#2b2b2b33]"
            >
              <img
                class="w-[80%] h-[80%] object-contain"
                src="./images/category-grid/3.png"
                alt=""
              />
            </div>
            <div class="h-full w-full flex justify-center items-center">
              <img
                class="w-[80%] h-[80%] object-contain"
                src="./images/category-grid/4.png"
                alt=""
              />
            </div>
          </div>
          <div class="w-full flex justify-center mb-5">
            <a href="#" class="flex items-center text-teal-400 text-[12px]">
              مشاهده
              <svg viewBox="0 0 24 24" class="w-[18px] h-[18px] fill-teal-400">
                <path
                  d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="py-2 px-5 flex flex-col justify-between">
          <div class="w-full">
            <h4 class="text-[16px] text-[#23254e] leading-[33px] font-bold">
              گوشی موبایل
            </h4>
            <p class="text-[11px] text-[#81858b] leading-[23px]">
              بر اساس سلیقه شما
            </p>
          </div>
          <div class="w-full grid grid-cols-2 grid-rows-2">
            <div
              class="h-full w-full flex justify-center items-center border-l-[1px] border-l-[#2b2b2b33] border-b-[1px] border-b-[#2b2b2b33]"
            >
              <img
                class="w-[80%] h-[80%] object-contain"
                src="./images/category-grid/1.png"
                alt=""
              />
            </div>
            <div
              class="h-full w-full flex justify-center items-center border-b-[1px] border-b-[#2b2b2b33]"
            >
              <img
                class="w-[80%] h-[80%] object-contain"
                src="./images/category-grid/2.png"
                alt=""
              />
            </div>
            <div
              class="h-full w-full flex justify-center items-center border-l-[1px] border-l-[#2b2b2b33]"
            >
              <img
                class="w-[80%] h-[80%] object-contain"
                src="./images/category-grid/3.png"
                alt=""
              />
            </div>
            <div class="h-full w-full flex justify-center items-center">
              <img
                class="w-[80%] h-[80%] object-contain"
                src="./images/category-grid/4.png"
                alt=""
              />
            </div>
          </div>
          <div class="w-full flex justify-center mb-5">
            <a href="#" class="flex items-center text-teal-400 text-[12px]">
              مشاهده
              <svg viewBox="0 0 24 24" class="w-[18px] h-[18px] fill-teal-400">
                <path
                  d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!--category grid 2 end -->`,xl=`
    <!--top off start -->
    <div class="w-full mt-5">
      <div
        class="desktop:w-[90%] h-full mobile:w-full p-4 desktop:rounded-xl max-w-[1336px] mx-auto desktop:border-[1px] desktop:border-[#2b2b2b33]"
      >
        <div
          class="w-full h-[60px] flex justify-center items-center gap-x-2 text-[21px]"
        >
          <svg viewBox="0 0 24 24" class="w-[24px] h-[24px] fill-[#ef4056]">
            <path
              fill-rule="evenodd"
              d="M22 4a1 1 0 011 1v14a1 1 0 01-1 1H6a1 1 0 01-.707-.293l-4-4A1 1 0 011 15V9a1 1 0 01.293-.707l4-4A1 1 0 016 4h16zm-1 2H6.414L3 9.414v5.172L6.414 18H21V6zm-6 3.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm2.5 6.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM10 12a3 3 0 11-6 0 3 3 0 016 0zm-4 0a1 1 0 102 0 1 1 0 00-2 0zm12.848-3.47l-5 8-1.696-1.06 5-8 1.696 1.06z"
              clip-rule="evenodd"
            ></path>
          </svg>
          منتخب محصولات تخفیف و حراج
        </div>
        <div
          class="h-[calc(100%-44px)] grid desktop:grid-cols-6 mobile:grid-cols-2 divide-x desktop:divide-y mobile:divide-y [&>*:nth-of-type(1)]:border-l [&>*:nth-of-type(2)]:!border-t-0 [&>*:nth-of-type(3)]:!border-t-0 [&>*:nth-of-type(4)]:!border-t-0 [&>*:nth-of-type(5)]:!border-t-0 [&>*:nth-of-type(6)]:!border-t-0 mobile:[&>*:nth-of-type(even)]:!border-l-0 desktop:[&>*:nth-of-type(even)]:!border-l [&>*:nth-of-type(6)]:border-l-white [&>*:nth-of-type(12)]:border-l-white [&>*:nth-of-type(18)]:border-l-white [&>*:nth-of-type(1)]:!border-b [&>*:nth-of-type(2)]:!border-b [&>*:nth-of-type(3)]:!border-b [&>*:nth-of-type(4)]:!border-b" id="OffContainer"
        >
          
          
        </div>
      </div>
    </div>
    <!--top off end -->`,ul=async()=>{let t=(await(await fetch("https://parisadehghan29.github.io/Digikala-APIs/Digikala-montakhab.json")).json()).map(s=>`<div
            class="flex justify-center items-center flex-col p-4 gap-y-2"
          >
            <div>
              <img
                class="w-[150px] h-[150px] object-cover"
                src="${s.image}"
                alt="${s.alt}"
              />
            </div>
            <div class="w-full flex justify-between">
              <span
                class="inline-block w-[34px] h-[20px] bg-[#d32f2f] rounded-[10px] text-[12px] text-center leading-[20px] text-white"
                >${s.discount}٪</span
              >
              <span class="text-[16px] flex gap-x-1">
                ${s.price}
                <svg viewBox="0 0 14 14" class="w-[16px] h-[16px]">
                  <path
                    fill-rule="evenodd"
                    d="M3.057 1.742L3.821 1l.78.75-.776.741-.768-.749zm3.23 2.48c0 .622-.16 1.111-.478 1.467-.201.221-.462.39-.783.505a3.251 3.251 0 01-1.083.163h-.555c-.421 0-.801-.074-1.139-.223a2.045 2.045 0 01-.9-.738A2.238 2.238 0 011 4.148c0-.059.001-.117.004-.176.03-.55.204-1.158.525-1.827l1.095.484c-.257.532-.397 1-.419 1.403-.002.04-.004.08-.004.12 0 .252.055.458.166.618a.887.887 0 00.5.354c.085.028.178.048.278.06.079.01.16.014.243.014h.555c.458 0 .769-.081.933-.244.14-.139.21-.383.21-.731V2.02h1.2v2.202zm5.433 3.184l-.72-.7.709-.706.735.707-.724.7zm-2.856.308c.542 0 .973.19 1.293.569.297.346.445.777.445 1.293v.364h.18v-.004h.41c.221 0 .377-.028.467-.084.093-.055.14-.14.14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 01-.287.863c-.306.405-.804.607-1.495.607h-.627c-.061.733-.434 1.257-1.117 1.573-.267.122-.58.21-.937.265a5.845 5.845 0 01-.914.067v-1.159c.612 0 1.072-.082 1.38-.247.25-.132.376-.298.376-.499h-.515c-.436 0-.807-.113-1.113-.339-.367-.273-.55-.667-.55-1.18 0-.488.122-.901.367-1.24.296-.415.728-.622 1.296-.622zm.533 2.226v-.364c0-.217-.048-.389-.143-.516a.464.464 0 00-.39-.187.478.478 0 00-.396.187.705.705 0 00-.136.449.65.65 0 00.003.067c.008.125.066.22.177.283.093.054.21.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6l-.709.707zm-6.694 4.888h.03c.433-.01.745-.106.937-.29.024.012.065.035.12.068l.074.039.081.042c.135.073.261.133.379.18.345.146.67.22.977.22a1.216 1.216 0 00.87-.34c.3-.285.449-.714.449-1.286a2.19 2.19 0 00-.335-1.145c-.299-.457-.732-.685-1.3-.685-.502 0-.916.192-1.242.575-.113.132-.21.284-.294.456-.032.062-.06.125-.084.191a.504.504 0 00-.03.078 1.67 1.67 0 00-.022.06c-.103.309-.171.485-.205.53-.072.09-.214.14-.427.147-.123-.005-.209-.03-.256-.076-.057-.054-.085-.153-.085-.297V7l-1.201-.5v3.562c0 .261.048.496.143.703.071.158.168.296.29.413.123.118.266.211.43.28.198.084.42.13.665.136v.001h.036zm2.752-1.014a.778.778 0 00.044-.353.868.868 0 00-.165-.47c-.1-.134-.217-.201-.35-.201-.18 0-.33.103-.447.31-.042.071-.08.158-.114.262a2.434 2.434 0 00-.04.12l-.015.053-.015.046c.142.118.323.216.544.293.18.062.325.092.433.092.044 0 .086-.05.125-.152z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </div>
            <div class="w-full text-left pl-5">
              <span class="text-[12px] text-[#2b2b2b33] line-through"
                >${s.previousPrice}</span
              >
            </div>
          </div>`);document.querySelector("#OffContainer").insertAdjacentHTML("beforeend",t.join(""))};ul();let hl=`
    <!--bestSeller slider start-->
    <div class="w-full h-[400px] mt-5 overflow-hidden">
      <div
        class="desktop:w-[90%] mobile:w-full h-full mx-auto max-w-[1336px] desktop:rounded-xl desktop:border-[1px] desktop:border-[#2b2b2b33] p-3 relative"
      >
        <div
          class="w-full h-[44px] text-[21px] flex justify-center items-center"
        >
          <svg viewBox="0 0 24 24" class="w-[24px] h-[24px] fill-[#f9a825]">
            <path
              fill-rule="evenodd"
              d="M12.015 9.105c.222.397.41.73.466.842.361.724.519 1.31.519 2.053a2 2 0 01-4 0l.003-4.557c0-.953-1.206-1.367-1.79-.613C5.087 9.572 4 11.906 4 13.889 4 18.365 7.578 22 12 22c4.422 0 8-3.635 8-8.111 0-2.968-2.45-6.78-7.295-11.598a1 1 0 00-1.6.262c-.807 1.615-.807 3.28 0 4.894.178.356.582 1.076.91 1.658zM7 12a4 4 0 108 0c0-1.078-.238-1.962-.73-2.947-.079-.156-.31-.569-.566-1.024a50.532 50.532 0 01-.81-1.476c-.273-.546-.404-1.079-.393-1.612C16.18 8.811 18 11.834 18 13.889 18 17.267 15.31 20 12 20s-6-2.733-6-6.111c0-.87.33-1.925 1-3.154V12z"
              clip-rule="evenodd"
            ></path>
          </svg>
          پرفروش‌ترین کالاها
          <span
            class="text-[#19bfd3] font-bold absolute top-6 left-6 text-[12px]"
            >مشاهده همه</span
          >
        </div>
        <div class="desktop:w-full  h-[calc(100%-44px)]">
          <div class="swiper bestSwiper2nd">
            <div class="swiper-wrapper">
              <div class="swiper-slide w-[314px]">
                <div class="w-full h-full">
                  <div class="w-full h-1/3 flex items-center p-3">
                    <img
                      class="!w-[86px] !h-[86px] !object-cover"
                      src="./images/bestSeller/1.png"
                      alt="bestSeller"
                    />
                    <span class="text-[26px] text-[#19bfd3] font-bold mx-2"
                      >۱</span
                    >
                    <div
                      class="text-[12px] text-right h-full flex items-center border-b-[1px] border-b-[#2b2b2b33]"
                    >
                      <p class="line-clamp-2">
                        کالباس 90 درصد گوشت مرغ هایزم - 250 گرم
                      </p>
                    </div>
                  </div>
                  <div class="w-full h-1/3 flex items-center p-3">
                    <img
                      class="!w-[86px] !h-[86px] !object-cover"
                      src="./images/bestSeller/2.png"
                      alt="bestSeller"
                    />
                    <span class="text-[26px] text-[#19bfd3] font-bold mx-2"
                      >۲</span
                    >
                    <div
                      class="text-[12px] text-right h-full flex items-center border-b-[1px] border-b-[#2b2b2b33]"
                    >
                      <p class="line-clamp-2">
                        گوشی موبایل سامسونگ مدل Galaxy A15 دو سیم کارت ظرفیت 128
                        گیگابایت و رم 4 گیگابایت - ویتنام
                      </p>
                    </div>
                  </div>
                  <div class="w-full h-1/3 flex items-center p-3">
                    <img
                      class="!w-[86px] !h-[86px] !object-cover"
                      src="./images/bestSeller/3.png"
                      alt="bestSeller"
                    />
                    <span class="text-[26px] text-[#19bfd3] font-bold mx-2"
                      >۳</span
                    >
                    <div
                      class="text-[12px] text-right h-full flex items-center"
                    >
                      <p class="line-clamp-2">
                        گوشی موبایل نوکیا مدل 106 2023 دو سیم‌ کارت - مونتاژ
                        ایران تحت لیسانس نوکیا
                      </p>
                    </div>
                  </div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div class="swiper-slide w-[314px]">
                <div class="w-full h-full">
                  <div class="w-full h-1/3 flex items-center p-3">
                    <img
                      class="!w-[86px] !h-[86px] !object-cover"
                      src="./images/bestSeller/1.png"
                      alt="bestSeller"
                    />
                    <span class="text-[26px] text-[#19bfd3] font-bold mx-2"
                      >۱</span
                    >
                    <div
                      class="text-[12px] text-right h-full flex items-center border-b-[1px] border-b-[#2b2b2b33]"
                    >
                      <p class="line-clamp-2">
                        کالباس 90 درصد گوشت مرغ هایزم - 250 گرم
                      </p>
                    </div>
                  </div>
                  <div class="w-full h-1/3 flex items-center p-3">
                    <img
                      class="!w-[86px] !h-[86px] !object-cover"
                      src="./images/bestSeller/2.png"
                      alt="bestSeller"
                    />
                    <span class="text-[26px] text-[#19bfd3] font-bold mx-2"
                      >۲</span
                    >
                    <div
                      class="text-[12px] text-right h-full flex items-center border-b-[1px] border-b-[#2b2b2b33]"
                    >
                      <p class="line-clamp-2">
                        گوشی موبایل سامسونگ مدل Galaxy A15 دو سیم کارت ظرفیت 128
                        گیگابایت و رم 4 گیگابایت - ویتنام
                      </p>
                    </div>
                  </div>
                  <div class="w-full h-1/3 flex items-center p-3">
                    <img
                      class="!w-[86px] !h-[86px] !object-cover"
                      src="./images/bestSeller/3.png"
                      alt="bestSeller"
                    />
                    <span class="text-[26px] text-[#19bfd3] font-bold mx-2"
                      >۳</span
                    >
                    <div
                      class="text-[12px] text-right h-full flex items-center"
                    >
                      <p class="line-clamp-2">
                        گوشی موبایل نوکیا مدل 106 2023 دو سیم‌ کارت - مونتاژ
                        ایران تحت لیسانس نوکیا
                      </p>
                    </div>
                  </div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div class="swiper-slide w-[314px]">
                <div class="w-full h-full">
                  <div class="w-full h-1/3 flex items-center p-3">
                    <img
                      class="!w-[86px] !h-[86px] !object-cover"
                      src="./images/bestSeller/1.png"
                      alt="bestSeller"
                    />
                    <span class="text-[26px] text-[#19bfd3] font-bold mx-2"
                      >۱</span
                    >
                    <div
                      class="text-[12px] text-right h-full flex items-center border-b-[1px] border-b-[#2b2b2b33]"
                    >
                      <p class="line-clamp-2">
                        کالباس 90 درصد گوشت مرغ هایزم - 250 گرم
                      </p>
                    </div>
                  </div>
                  <div class="w-full h-1/3 flex items-center p-3">
                    <img
                      class="!w-[86px] !h-[86px] !object-cover"
                      src="./images/bestSeller/2.png"
                      alt="bestSeller"
                    />
                    <span class="text-[26px] text-[#19bfd3] font-bold mx-2"
                      >۲</span
                    >
                    <div
                      class="text-[12px] text-right h-full flex items-center border-b-[1px] border-b-[#2b2b2b33]"
                    >
                      <p class="line-clamp-2">
                        گوشی موبایل سامسونگ مدل Galaxy A15 دو سیم کارت ظرفیت 128
                        گیگابایت و رم 4 گیگابایت - ویتنام
                      </p>
                    </div>
                  </div>
                  <div class="w-full h-1/3 flex items-center p-3">
                    <img
                      class="!w-[86px] !h-[86px] !object-cover"
                      src="./images/bestSeller/3.png"
                      alt="bestSeller"
                    />
                    <span class="text-[26px] text-[#19bfd3] font-bold mx-2"
                      >۳</span
                    >
                    <div
                      class="text-[12px] text-right h-full flex items-center"
                    >
                      <p class="line-clamp-2">
                        گوشی موبایل نوکیا مدل 106 2023 دو سیم‌ کارت - مونتاژ
                        ایران تحت لیسانس نوکیا
                      </p>
                    </div>
                  </div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div class="swiper-slide w-[314px]">
                <div class="w-full h-full">
                  <div class="w-full h-1/3 flex items-center p-3">
                    <img
                      class="!w-[86px] !h-[86px] !object-cover"
                      src="./images/bestSeller/1.png"
                      alt="bestSeller"
                    />
                    <span class="text-[26px] text-[#19bfd3] font-bold mx-2"
                      >۱</span
                    >
                    <div
                      class="text-[12px] text-right h-full flex items-center border-b-[1px] border-b-[#2b2b2b33]"
                    >
                      <p class="line-clamp-2">
                        کالباس 90 درصد گوشت مرغ هایزم - 250 گرم
                      </p>
                    </div>
                  </div>
                  <div class="w-full h-1/3 flex items-center p-3">
                    <img
                      class="!w-[86px] !h-[86px] !object-cover"
                      src="./images/bestSeller/2.png"
                      alt="bestSeller"
                    />
                    <span class="text-[26px] text-[#19bfd3] font-bold mx-2"
                      >۲</span
                    >
                    <div
                      class="text-[12px] text-right h-full flex items-center border-b-[1px] border-b-[#2b2b2b33]"
                    >
                      <p class="line-clamp-2">
                        گوشی موبایل سامسونگ مدل Galaxy A15 دو سیم کارت ظرفیت 128
                        گیگابایت و رم 4 گیگابایت - ویتنام
                      </p>
                    </div>
                  </div>
                  <div class="w-full h-1/3 flex items-center p-3">
                    <img
                      class="!w-[86px] !h-[86px] !object-cover"
                      src="./images/bestSeller/3.png"
                      alt="bestSeller"
                    />
                    <span class="text-[26px] text-[#19bfd3] font-bold mx-2"
                      >۳</span
                    >
                    <div
                      class="text-[12px] text-right h-full flex items-center"
                    >
                      <p class="line-clamp-2">
                        گوشی موبایل نوکیا مدل 106 2023 دو سیم‌ کارت - مونتاژ
                        ایران تحت لیسانس نوکیا
                      </p>
                    </div>
                  </div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div class="swiper-slide w-[314px]">
                <div class="w-full h-full">
                  <div class="w-full h-1/3 flex items-center p-3">
                    <img
                      class="!w-[86px] !h-[86px] !object-cover"
                      src="./images/bestSeller/1.png"
                      alt="bestSeller"
                    />
                    <span class="text-[26px] text-[#19bfd3] font-bold mx-2"
                      >۱</span
                    >
                    <div
                      class="text-[12px] text-right h-full flex items-center border-b-[1px] border-b-[#2b2b2b33]"
                    >
                      <p class="line-clamp-2">
                        کالباس 90 درصد گوشت مرغ هایزم - 250 گرم
                      </p>
                    </div>
                  </div>
                  <div class="w-full h-1/3 flex items-center p-3">
                    <img
                      class="!w-[86px] !h-[86px] !object-cover"
                      src="./images/bestSeller/2.png"
                      alt="bestSeller"
                    />
                    <span class="text-[26px] text-[#19bfd3] font-bold mx-2"
                      >۲</span
                    >
                    <div
                      class="text-[12px] text-right h-full flex items-center border-b-[1px] border-b-[#2b2b2b33]"
                    >
                      <p class="line-clamp-2">
                        گوشی موبایل سامسونگ مدل Galaxy A15 دو سیم کارت ظرفیت 128
                        گیگابایت و رم 4 گیگابایت - ویتنام
                      </p>
                    </div>
                  </div>
                  <div class="w-full h-1/3 flex items-center p-3">
                    <img
                      class="!w-[86px] !h-[86px] !object-cover"
                      src="./images/bestSeller/3.png"
                      alt="bestSeller"
                    />
                    <span class="text-[26px] text-[#19bfd3] font-bold mx-2"
                      >۳</span
                    >
                    <div
                      class="text-[12px] text-right h-full flex items-center"
                    >
                      <p class="line-clamp-2">
                        گوشی موبایل نوکیا مدل 106 2023 دو سیم‌ کارت - مونتاژ
                        ایران تحت لیسانس نوکیا
                      </p>
                    </div>
                  </div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div class="swiper-slide w-[314px]">
                <div class="w-full h-full">
                  <div class="w-full h-1/3 flex items-center p-3">
                    <img
                      class="!w-[86px] !h-[86px] !object-cover"
                      src="./images/bestSeller/1.png"
                      alt="bestSeller"
                    />
                    <span class="text-[26px] text-[#19bfd3] font-bold mx-2"
                      >۱</span
                    >
                    <div
                      class="text-[12px] text-right h-full flex items-center border-b-[1px] border-b-[#2b2b2b33]"
                    >
                      <p class="line-clamp-2">
                        کالباس 90 درصد گوشت مرغ هایزم - 250 گرم
                      </p>
                    </div>
                  </div>
                  <div class="w-full h-1/3 flex items-center p-3">
                    <img
                      class="!w-[86px] !h-[86px] !object-cover"
                      src="./images/bestSeller/2.png"
                      alt="bestSeller"
                    />
                    <span class="text-[26px] text-[#19bfd3] font-bold mx-2"
                      >۲</span
                    >
                    <div
                      class="text-[12px] text-right h-full flex items-center border-b-[1px] border-b-[#2b2b2b33]"
                    >
                      <p class="line-clamp-2">
                        گوشی موبایل سامسونگ مدل Galaxy A15 دو سیم کارت ظرفیت 128
                        گیگابایت و رم 4 گیگابایت - ویتنام
                      </p>
                    </div>
                  </div>
                  <div class="w-full h-1/3 flex items-center p-3">
                    <img
                      class="!w-[86px] !h-[86px] !object-cover"
                      src="./images/bestSeller/3.png"
                      alt="bestSeller"
                    />
                    <span class="text-[26px] text-[#19bfd3] font-bold mx-2"
                      >۳</span
                    >
                    <div
                      class="text-[12px] text-right h-full flex items-center"
                    >
                      <p class="line-clamp-2">
                        گوشی موبایل نوکیا مدل 106 2023 دو سیم‌ کارت - مونتاژ
                        ایران تحت لیسانس نوکیا
                      </p>
                    </div>
                  </div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div class="swiper-slide w-[314px]">
                <div class="w-full h-full">
                  <div class="w-full h-1/3 flex items-center p-3">
                    <img
                      class="!w-[86px] !h-[86px] !object-cover"
                      src="./images/bestSeller/1.png"
                      alt="bestSeller"
                    />
                    <span class="text-[26px] text-[#19bfd3] font-bold mx-2"
                      >۱</span
                    >
                    <div
                      class="text-[12px] text-right h-full flex items-center border-b-[1px] border-b-[#2b2b2b33]"
                    >
                      <p class="line-clamp-2">
                        کالباس 90 درصد گوشت مرغ هایزم - 250 گرم
                      </p>
                    </div>
                  </div>
                  <div class="w-full h-1/3 flex items-center p-3">
                    <img
                      class="!w-[86px] !h-[86px] !object-cover"
                      src="./images/bestSeller/2.png"
                      alt="bestSeller"
                    />
                    <span class="text-[26px] text-[#19bfd3] font-bold mx-2"
                      >۲</span
                    >
                    <div
                      class="text-[12px] text-right h-full flex items-center border-b-[1px] border-b-[#2b2b2b33]"
                    >
                      <p class="line-clamp-2">
                        گوشی موبایل سامسونگ مدل Galaxy A15 دو سیم کارت ظرفیت 128
                        گیگابایت و رم 4 گیگابایت - ویتنام
                      </p>
                    </div>
                  </div>
                  <div class="w-full h-1/3 flex items-center p-3">
                    <img
                      class="!w-[86px] !h-[86px] !object-cover"
                      src="./images/bestSeller/3.png"
                      alt="bestSeller"
                    />
                    <span class="text-[26px] text-[#19bfd3] font-bold mx-2"
                      >۳</span
                    >
                    <div
                      class="text-[12px] text-right h-full flex items-center"
                    >
                      <p class="line-clamp-2">
                        گوشی موبایل نوکیا مدل 106 2023 دو سیم‌ کارت - مونتاژ
                        ایران تحت لیسانس نوکیا
                      </p>
                    </div>
                  </div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div class="swiper-slide w-[314px]">
                <div class="w-full h-full">
                  <div class="w-full h-1/3 flex items-center p-3">
                    <img
                      class="!w-[86px] !h-[86px] !object-cover"
                      src="./images/bestSeller/1.png"
                      alt="bestSeller"
                    />
                    <span class="text-[26px] text-[#19bfd3] font-bold mx-2"
                      >۱</span
                    >
                    <div
                      class="text-[12px] text-right h-full flex items-center border-b-[1px] border-b-[#2b2b2b33]"
                    >
                      <p class="line-clamp-2">
                        کالباس 90 درصد گوشت مرغ هایزم - 250 گرم
                      </p>
                    </div>
                  </div>
                  <div class="w-full h-1/3 flex items-center p-3">
                    <img
                      class="!w-[86px] !h-[86px] !object-cover"
                      src="./images/bestSeller/2.png"
                      alt="bestSeller"
                    />
                    <span class="text-[26px] text-[#19bfd3] font-bold mx-2"
                      >۲</span
                    >
                    <div
                      class="text-[12px] text-right h-full flex items-center border-b-[1px] border-b-[#2b2b2b33]"
                    >
                      <p class="line-clamp-2">
                        گوشی موبایل سامسونگ مدل Galaxy A15 دو سیم کارت ظرفیت 128
                        گیگابایت و رم 4 گیگابایت - ویتنام
                      </p>
                    </div>
                  </div>
                  <div class="w-full h-1/3 flex items-center p-3">
                    <img
                      class="!w-[86px] !h-[86px] !object-cover"
                      src="./images/bestSeller/3.png"
                      alt="bestSeller"
                    />
                    <span class="text-[26px] text-[#19bfd3] font-bold mx-2"
                      >۳</span
                    >
                    <div
                      class="text-[12px] text-right h-full flex items-center"
                    >
                      <p class="line-clamp-2">
                        گوشی موبایل نوکیا مدل 106 2023 دو سیم‌ کارت - مونتاژ
                        ایران تحت لیسانس نوکیا
                      </p>
                    </div>
                  </div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
            <div
              class="swiper-button-next mobile:hidden desktop:flex w-10 h-10 bg-[#fff] border-[1px] rounded-[40px] after:text-[15px] after:flex after:justify-center after:items-center after:text-[#2b2b2b] after:font-bold"
            ></div>
            <div
              class="swiper-button-prev desktop:flex mobile:hidden w-10 h-10 bg-[#fff] border-[1px] rounded-[40px] after:text-[15px] after:flex after:justify-center after:items-center after:text-[#2b2b2b] after:font-bold"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <!--bestSeller slider end-->
`,vl=`
 <!--readables start-->
    <div class="w-full mt-5">
      <div
        class="desktop:w-[90%] mobile:w-full h-full max-w-[1336px] mx-auto p-3"
      >
        <div class="w-full h-[40px] flex justify-between mb-4">
          <h4 class="text-[16px] font-bold leading-10">خواندنی‌ها</h4>
          <a class="text-[12px] flex items-center text-teal-400" href="#"
            >مطالب بیشتر در دیجی&zwnj;کالا مگ
            <svg viewBox="0 0 24 24" class="w-[24px] h-[24px] fill-teal-400">
              <path
                d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"
              ></path>
            </svg>
          </a>
        </div>
        <div
          class="w-full h-[calc(100%-40px)] grid mobile:grid-cols-1 desktop:grid-cols-4 gap-3 items-stretch desktop:justify-around px-5"
        >
          <a
            class="inline-block border-[1px] border-[#2b2b2b55] rounded-xl"
            href="#"
          >
            <img
              class="w-full rounded-t-xl"
              src="./images/readables/1.png"
              alt=""
            />
            <div class="h-[60px] w-full p-3">
              <span class="text-[12px]"
                >چگونه کیفیت دوربین آیفون را بالا ببریم؛ بهترین تنظیمات برای عکاسی حرفه‌ای</span
              >
            </div>
          </a>
          <a
            class="inline-block border-[1px] border-[#2b2b2b55] rounded-xl"
            href="#"
          >
            <img
              class="w-full rounded-t-xl"
              src="./images/readables/2.png"
              alt=""
            />
            <div class="h-[60px] w-full p-3">
              <span class="text-[12px]"
                >۸ واقعیت جالب درباره کتاب «ماجراهای هاکلبری فین» که نمی‌دانستید</span
              >
            </div>
          </a>
          <a
            class="inline-block border-[1px] border-[#2b2b2b55] rounded-xl"
            href="#"
          >
            <img
              class="w-full rounded-t-xl"
              src="./images/readables/3.png"
              alt=""
            />
            <div class="h-[60px] w-full p-3">
              <span class="text-[12px]"
                >بازسازی سایلنت هیل ۲ از گزینه‌ی فیلتر کلاسیک بهره می‌برد</span
              >
            </div>
          </a>
          <a
            class="inline-block border-[1px] border-[#2b2b2b55] rounded-xl"
            href="#"
          >
            <img
              class="w-full rounded-t-xl"
              src="./images/readables/4.png"
              alt=""
            />
            <div class="h-[60px] w-full p-3">
              <span class="text-[12px]"
                >آرتروز چیست؛ راهنمای جامع برای مدیریت و تسکین علائم</span
              >
            </div>
          </a>
        </div>
      </div>
    </div>
    <!--readables end-->`,ml=`
    <!--mobile footer start-->
    <footer class="w-full p-5 desktop:hidden">
      <div class="w-full text-center text-[#19bfd3] text-[12px]">
        <a class="flex items-center justify-center" href="#"
          >بازگشت به بالا
          <svg viewBox="0 0 24 24" class="w-[24px] h-[24px] fill-[#19bfd3]">
            <path
              d="M7.707 14.707l-1.414-1.414 5-5a1 1 0 011.414 0l5 5-1.414 1.414L12 10.414l-4.293 4.293z"
            ></path>
          </svg>
        </a>
      </div>
      <div
        class="w-full h-[68px] mt-4 flex items-center justify-between border-b-[1px] border-b-[#2b2b2b33]"
      >
        <div class="flex justify-center items-center w-[136px] gap-x-4">
          <svg viewBox="0 0 24 24" class="w-[24px] h-[24px] fill-[#2b2b2b]">
            <path
              fill-rule="evenodd"
              d="M18 17a4.001 4.001 0 01-3.14 3.907A3 3 0 1012 23h2a6 6 0 006-6v-.256a4.502 4.502 0 000-8.488V7a6 6 0 00-6-6h-4a6 6 0 00-6 6v1.256A4.502 4.502 0 005.5 17H7a1 1 0 001-1V9a1 1 0 00-1-1H6V7a4 4 0 014-4h4a4 4 0 014 4v1h-1a1 1 0 00-1 1v7a1 1 0 001 1h1zm.5-2H18v-5h.5a2.5 2.5 0 010 5zM6 10h-.5a2.5 2.5 0 000 5H6v-5zm7 10a1 1 0 11-2 0 1 1 0 012 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div class="flex flex-col justify-between gap-y-2">
            <span class="text-[8px]">۷ روز هفته، ۲۴ ساعت</span>
            <span class="text-[10px]">تماس با پشتیبانی</span>
          </div>
        </div>
        <div
          class="text-[10px] px-[16px] py-[8px] border-[1px] border-[#000] h-min rounded-lg"
        >
          تماس
        </div>
      </div>
      <div
        class="w-full h-[68px] flex items-center justify-between border-b-[1px] border-b-[#2b2b2b33]"
      >
        <div class="flex justify-center items-center gap-x-4">
          <img
            class="w-[44px] h-[44px]"
            src="./images/footer/footerlogo2.png"
            alt="logo"
          />
          <div class="flex flex-col justify-between gap-y-2">
            <span class="text-[8px]"> تجربه خرید بهتر در</span>
            <span class="text-[10px]">اپلیکیشن دیجی‌کالا</span>
          </div>
        </div>
        <div
          class="text-[10px] px-[16px] py-[8px] border-[1px] border-[#000] h-min rounded-lg bg-black text-[#fff]"
        >
          دانلود
        </div>
      </div>
      <div
        class="w-full h-[68px] flex items-center justify-between border-b-[1px] border-b-[#2b2b2b33]"
      >
        <div class="flex justify-center items-center gap-x-4">
          <div class="pr-4">
            <span class="text-[10px] font-bold">با دیجی کالا</span>
          </div>
        </div>
        <div class="text-[10px] px-[16px]">
          <svg class="w-[24px] h-[24px]" viewBox="0 0 18 18">
            <path
              d="M5.78 6.97L4.72 8.03l3.75 3.75a.75.75 0 001.06 0l3.75-3.75-1.06-1.06L9 10.19 5.78 6.97z"
            ></path>
          </svg>
        </div>
      </div>
      <div
        class="w-full h-[68px] flex items-center justify-between border-b-[1px] border-b-[#2b2b2b33]"
      >
        <div class="flex justify-center items-center gap-x-4">
          <div class="pr-4">
            <span class="text-[10px] font-bold">خدمات مشتریان</span>
          </div>
        </div>
        <div class="text-[10px] px-[16px]">
          <svg class="w-[24px] h-[24px]" viewBox="0 0 18 18">
            <path
              d="M5.78 6.97L4.72 8.03l3.75 3.75a.75.75 0 001.06 0l3.75-3.75-1.06-1.06L9 10.19 5.78 6.97z"
            ></path>
          </svg>
        </div>
      </div>
      <div
        class="w-full h-[68px] flex items-center justify-between border-b-[1px] border-b-[#2b2b2b33]"
      >
        <div class="flex justify-center items-center gap-x-4">
          <div class="pr-4">
            <span class="text-[10px] font-bold">راهنمای خرید از دیجی‌کالا</span>
          </div>
        </div>
        <div class="text-[10px] px-[16px]">
          <svg class="w-[24px] h-[24px]" viewBox="0 0 18 18">
            <path
              d="M5.78 6.97L4.72 8.03l3.75 3.75a.75.75 0 001.06 0l3.75-3.75-1.06-1.06L9 10.19 5.78 6.97z"
            ></path>
          </svg>
        </div>
      </div>
      <div
        class="w-full h-[68px] flex items-center justify-between border-b-[1px] border-b-[#2b2b2b33]"
      >
        <div class="flex justify-center items-center gap-x-4">
          <div class="pr-4">
            <span class="text-[10px] font-bold">شرکای تجاری</span>
          </div>
        </div>
        <div class="text-[10px] px-[16px]">
          <svg class="w-[24px] h-[24px]" viewBox="0 0 18 18">
            <path
              d="M5.78 6.97L4.72 8.03l3.75 3.75a.75.75 0 001.06 0l3.75-3.75-1.06-1.06L9 10.19 5.78 6.97z"
            ></path>
          </svg>
        </div>
      </div>
      <div class="w-full h-[81px] relative mt-4">
        <p class="text-[10px] first-line:text-[12px] text-justify">
          یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی
            متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمان ی کوتاه به دست
            مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی که
            فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و توانسته
            از این طریق مشتریان ثابت خود را داشته باشد.
        </p>
        <div
          class="w-full h-[81px] bg-gradient-to-t from-[#ffffffff] to-transparent absolute top-0"
        ></div>
      </div>
    </footer>
    <!--mobile footer end -->
    <!-- footer dewstop start -->
    <footer
      class="w-full mobile:hidden desktop:block px-5 pt-8 max-w-[1500px] mx-auto"
    >
      <div class="w-full flex justify-between max-w-[1500px] mx-auto">
        <img src="./images/footer/digi.svg" alt="logo" />
        <a
          class="px-4 py-2 flex items-center w-fit text-[#a1a3a8] border-[1px] border-[#a1a3a8] rounded-lg"
          href="#"
          >بازگشت به بالا
          <svg class="w-[24px] h-[24px] fill-[#a1a3a8]" viewBox="0 0 24 24">
            <path
              d="M7.707 14.707l-1.414-1.414 5-5a1 1 0 011.414 0l5 5-1.414 1.414L12 10.414l-4.293 4.293z"
            ></path>
          </svg>
        </a>
      </div>
      <div
        class="w-full max-w-[1336px] mx-auto flex gap-x-4 mt-3 items-center text-[12px] text-[#3f4064]"
      >
        <span>تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</span>
        <span class="inline-block w-[2px] h-[12px] bg-slate-400"></span>
        <span>۰۲۱-۹۱۰۰۰۱۰۰</span>
        <span class="inline-block w-[2px] h-[12px] bg-slate-400"></span>
        <span>۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</span>
      </div>
      <div class="w-full max-w-[1336px] mx-auto grid grid-cols-5 mt-14">
        <div class="flex flex-col justify-center items-center">
          <img src="./images/footer/express-delivery.svg" alt="icon" />
          <span>اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس</span>
        </div>
        <div class="flex flex-col justify-center items-center">
          <img src="./images/footer/express-delivery.svg" alt="icon" />
          <span>اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس</span>
        </div>
        <div class="flex flex-col justify-center items-center">
          <img src="./images/footer/express-delivery.svg" alt="icon" />
          <span>اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس</span>
        </div>
        <div class="flex flex-col justify-center items-center">
          <img src="./images/footer/express-delivery.svg" alt="icon" />
          <span>اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس</span>
        </div>
        <div class="flex flex-col justify-center items-center">
          <img src="./images/footer/express-delivery.svg" alt="icon" />
          <span>اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس</span>
        </div>
      </div>
      <!-- middle footer start -->
      <div class="w-full h-[300px] mt-16 max-w-[1500px] mx-auto flex py-5">
        <div class="w-1/4 h-fit flex flex-col gap-y-4">
          <a class="text-[16px] text-bold" href="#">با دیجی‌کالا</a>
          <a class="text-[14px] text-[#81858b]" href="#">اتاق خبر دیجی‌کالا</a>
          <a class="text-[14px] text-[#81858b]" href="#">فروش در دیجی‌کالا</a>
          <a class="text-[14px] text-[#81858b]" href="#">فرصت‌های شغلی</a>
          <a class="text-[14px] text-[#81858b]" href="#"
            >گزارش تخلف در دیجی‌کالا</a
          >
          <a class="text-[14px] text-[#81858b]" href="#">تماس با دیجی‌کالا</a>
          <a class="text-[14px] text-[#81858b]" href="#">درباره دیجی‌کالا</a>
        </div>
        <div class="w-1/4 h-fit flex flex-col gap-y-4">
          <a class="text-[16px] text-bold" href="#">با دیجی‌کالا</a>
          <a class="text-[14px] text-[#81858b]" href="#">اتاق خبر دیجی‌کالا</a>
          <a class="text-[14px] text-[#81858b]" href="#">فروش در دیجی‌کالا</a>
          <a class="text-[14px] text-[#81858b]" href="#">فرصت‌های شغلی</a>
          <a class="text-[14px] text-[#81858b]" href="#"
            >گزارش تخلف در دیجی‌کالا</a
          >
          <a class="text-[14px] text-[#81858b]" href="#">تماس با دیجی‌کالا</a>
          <a class="text-[14px] text-[#81858b]" href="#">درباره دیجی‌کالا</a>
        </div>
        <div class="w-1/4 h-fit flex flex-col gap-y-4">
          <a class="text-[16px] text-bold" href="#">با دیجی‌کالا</a>
          <a class="text-[14px] text-[#81858b]" href="#">اتاق خبر دیجی‌کالا</a>
          <a class="text-[14px] text-[#81858b]" href="#">فروش در دیجی‌کالا</a>
          <a class="text-[14px] text-[#81858b]" href="#">فرصت‌های شغلی</a>
          <a class="text-[14px] text-[#81858b]" href="#"
            >گزارش تخلف در دیجی‌کالا</a
          >
          <a class="text-[14px] text-[#81858b]" href="#">تماس با دیجی‌کالا</a>
          <a class="text-[14px] text-[#81858b]" href="#">درباره دیجی‌کالا</a>
        </div>
        <div class="w-1/4 h-fit flex flex-col gap-y-4">
          <span>همراه ما باشید!</span>
          <div class="flex gap-x-4">
            <svg class="w-[40px] h-[40px] fill-[#81858b]" viewBox="0 0 24 24">
              <path
                fill-rule="evenodd"
                d="M16.033 3H7.967A4.973 4.973 0 003 7.967v8.066A4.973 4.973 0 007.967 21h8.066A4.973 4.973 0 0021 16.033V7.967A4.973 4.973 0 0016.033 3zm3.37 13.033a3.374 3.374 0 01-3.37 3.37H7.967a3.374 3.374 0 01-3.37-3.37V7.967a3.374 3.374 0 013.37-3.37h8.066a3.374 3.374 0 013.37 3.37v8.066zM7.362 12A4.643 4.643 0 0112 7.362 4.643 4.643 0 0116.638 12 4.643 4.643 0 0112 16.638 4.643 4.643 0 017.362 12zM12 15.041a3.044 3.044 0 01-3.041-3.04A3.045 3.045 0 0112 8.958 3.045 3.045 0 0115.041 12 3.044 3.044 0 0112 15.041zm4.005-8.69c.218-.219.52-.343.828-.343.308 0 .61.124.828.343a1.176 1.176 0 010 1.656c-.218.218-.52.343-.828.343a1.18 1.18 0 01-.828-.343 1.18 1.18 0 01-.343-.828c0-.309.125-.611.343-.828z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg class="w-[40px] h-[40px] fill-[#81858b]" viewBox="0 0 24 24">
              <path
                d="M21 6.73a7.374 7.374 0 01-2.12.581 3.708 3.708 0 001.623-2.041 7.444 7.444 0 01-2.346.896 3.693 3.693 0 00-6.292 3.367 10.483 10.483 0 01-7.61-3.858 3.665 3.665 0 00-.5 1.856 3.69 3.69 0 001.642 3.073 3.692 3.692 0 01-1.673-.464v.046a3.696 3.696 0 002.962 3.621c-.31.083-.636.13-.973.13-.238 0-.47-.024-.695-.07a3.695 3.695 0 003.448 2.565 7.409 7.409 0 01-4.585 1.579c-.298 0-.592-.018-.881-.051a10.437 10.437 0 005.66 1.661c6.793 0 10.506-5.626 10.506-10.505l-.013-.478A7.373 7.373 0 0021 6.73z"
              ></path>
            </svg>
            <svg class="w-[40px] h-[40px] fill-[#81858b]" viewBox="0 0 32 32">
              <path
                fill-rule="evenodd"
                d="M6.4 4h19.2C26.92 4 28 5.08 28 6.4v19.2c0 1.32-1.08 2.4-2.4 2.4H6.4C5.08 28 4 26.92 4 25.6V6.4C4 5.08 5.08 4 6.4 4zm1.2 20.4h3.6V13.6H7.6v10.8zm1.8-12.84c-1.2 0-2.16-.96-2.16-2.16 0-1.2.96-2.16 2.16-2.16 1.2 0 2.16.96 2.16 2.16 0 1.2-.96 2.16-2.16 2.16zM20.8 24.4h3.6v-6.84c0-2.28-1.92-4.2-4.2-4.2-1.08 0-2.4.72-3 1.68V13.6h-3.6v10.8h3.6v-6.36c0-.96.84-1.8 1.8-1.8.96 0 1.8.84 1.8 1.8v6.36z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg class="w-[40px] h-[40px] fill-[#81858b]" viewBox="0 0 33 32">
              <path
                fill-rule="evenodd"
                d="M10.58 4.07a5.768 5.768 0 00-.804.33c-.66.324-1.321.978-1.626 1.609-.172.347-.546 1.597-.804 2.667-.029.11.184-.075.781-.671 1.184-1.192 2.31-1.95 3.763-2.546.65-.266 1.92-.625 2.47-.7.168-.024.294-.052.277-.064a28.734 28.734 0 00-1.195-.347c-1.046-.284-1.241-.319-1.856-.342-.494-.017-.781 0-1.005.064zm1.207 2.523a10.498 10.498 0 013.493-.984 10.5 10.5 0 016.877 1.76c2.333 1.573 3.861 3.911 4.436 6.77.149.746.149 2.957 0 3.703-.575 2.859-2.103 5.197-4.436 6.77a10.405 10.405 0 01-10.37.776 10.4 10.4 0 01-5.831-7.899c-.11-.74-.11-2.257 0-2.997a10.399 10.399 0 015.831-7.9zm4.395 5.463c.408-1.592-.643-3.276-2.258-3.611-.994-.209-1.947.086-2.688.827-1.173 1.18-1.178 2.969-.018 4.138 1.615 1.626 4.39.868 4.964-1.354zm5.332-2.142c1.333.348 2.223 1.482 2.223 2.83 0 .874-.247 1.499-.833 2.09-.402.404-.89.682-1.413.81-.724.167-1.333.092-2.04-.261-1.149-.567-1.81-1.898-1.557-3.13.132-.649.35-1.06.816-1.534.603-.608 1.224-.874 2.068-.886.224-.005.558.035.736.081zm-3.982 6.111c0-.463-.27-.885-.706-1.11-1.08-.562-2.264.566-1.758 1.683.155.347.258.457.597.614.902.428 1.867-.186 1.867-1.187zm-5.165.284c.173.029.523.162.776.289 1.149.567 1.81 1.898 1.557 3.13-.132.649-.35 1.06-.816 1.534-.942.955-2.258 1.163-3.464.55-1.546-.787-2.057-2.83-1.069-4.277.66-.954 1.85-1.44 3.016-1.226zm9.813 4.93c.316-1.522-.643-3.055-2.154-3.449a2.991 2.991 0 00-2.838.776 2.935 2.935 0 00.017 4.172c.89.897 2.24 1.11 3.43.532.695-.335 1.379-1.238 1.545-2.031zM23.48 7.212c-.144-.104-.259-.208-.259-.231 0-.024.172.011.39.069.213.058.8.214 1.305.347 1.23.319 1.746.579 2.327 1.152a3.627 3.627 0 011.091 2.639c0 .457-.046.694-.367 1.932a46.007 46.007 0 01-.397 1.435c-.017.012-.057-.167-.098-.399-.235-1.504-.89-3.165-1.723-4.41-.609-.92-1.614-2.036-2.27-2.534zM4.893 17.831c0 .023-.144.578-.316 1.238-.27 1.036-.316 1.273-.316 1.725 0 1.024.373 1.92 1.086 2.632.614.608 1.028.81 2.545 1.216.672.179 1.235.318 1.246.312.012-.011-.051-.08-.143-.15-.322-.25-1.362-1.296-1.707-1.725-1.05-1.302-1.867-3.026-2.223-4.664-.103-.492-.172-.717-.172-.584zm19.442 6.151c.287-.295.626-.671.752-.84.127-.161.236-.277.247-.248.023.07-.591 2.367-.74 2.755-.288.787-.995 1.545-1.788 1.938-1.074.532-1.786.544-3.55.07-1.334-.358-1.333-.36-1.31-.382a5.53 5.53 0 01.62-.145 11.493 11.493 0 005.769-3.148z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <div class="flex gap-y-3 flex-col">
            <span class="text-[16px] text-bold"
              >با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید</span
            >
            <div class="flex gap-x-2">
              <div class="w-[261px] h-[48px] bg-[#2b2b2b33] px-2 rounded-lg">
                <input
                  class="bg-transparent w-full h-full outline-none border-none placeholder:text-[red]"
                  type="text"
                  placeholder="ایمیل شما"
                />
              </div>
              <button
                class="w-[55px] h-[48px] bg-[#2b2b2b66] rounded-lg text-[white]"
              >
                ثبت
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- middle footer end -->
      <!--footer download section start-->
      <div
        class="w-full h-[76px] bg-[#3c4b6d] rounded-xl p-5 flex justify-between"
      >
        <div class="h-full flex items-center gap-x-4">
          <img
            class="w-[44px] h-[44px]"
            src="./images/footer/footerlogo2.png"
            alt="logo"
          />
          <span class="text-[21px] text-[#fff]">
            دانلود اپلیکیشن دیجی‌کالا</span
          >
        </div>
        <div class="flex gap-x-3 h-full items-center">
          <div class="w-[142px] h-[44px] bg-white rounded-md">
            <img
              class="w-full h-full object-cover rounded-md"
              src="./images/footer/coffe-bazzar.svg"
              alt="cafe"
            />
          </div>
          <div class="w-[142px] h-[44px] bg-white rounded-md">
            <img
              class="w-full h-full object-cover rounded-md"
              src="./images/footer/myket.svg"
              alt="myket"
            />
          </div>
          <div class="w-[142px] h-[44px] bg-white rounded-md">
            <img
              class="w-full h-full object-cover rounded-md"
              src="./images/footer/sib-app.svg"
              alt="sib"
            />
          </div>
          <div class="w-[44px] h-[44px] bg-white rounded-md">
            <img
              class="w-full h-full object-cover rounded-md"
              src="./images/footer/more.svg"
              alt="sib"
            />
          </div>
        </div>
      </div>
      <!--footer download section end-->
      <!--footer last text start-->
      <div class="w-full  mt-5 flex gap-x-5">
        <div class="w-[calc(100%-356px)] h-full relative">
          <h3 class="text-[21px] text-[#62666d] font-bold">
            فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین
          </h3>
          <p class="text-[12px] text-[#81858b] leading-7">
            یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی
            متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمان ی کوتاه به دست
            مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی که
            فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و توانسته
            از این طریق مشتریان ثابت خود را داشته باشد. یکی از مهم‌ترین
            دغدغه‌های کاربران دیجی‌کالا یا هر فروشگاه‌ اینترنتی دیگری، این است
            که کالای خریداری شده چه زمانی به دستشان می‌رسد. دیجی‌کالا شیوه‌های
            مختلفی از ارسال را متناسب با فروشنده کالا،‌ مقصد کالا و همچنین نوع
            کالا در اختیار کاربران خود قرار می‌دهد. هر یک از روش های ارسال دیجی
            کالا شرایط و ویژگی‌های خاص خود را دارند که ممکن است گاهی برای
            کاربران جدید، مبهم و پیچیده به نظر برسند. برای آگاهی بیشتر مشتریان
            از خدمات دیجی‌کالا، این فروشگاه اینترنتی در بخشی از وب‌سایت خود
            راهنمای کاملی از شیوه‌‌های ارسال را به صورت ساده و به دور از
            پیچیدگی، قرار داده است که شامل 8 نوع ارسال کالا به روش‌های زیر است:
            ارسال امروز، دریافت حضوری، دریافت از گنجه، ارسال توسط فروشنده، ارسال
            عادی، ارسال کالاهای بزرگ، سنگین و
          </p>
          <div
            class="w-full h-full bg-gradient-to-t from-[#fff] to-transparent absolute top-0"
          >
          
          <a
          class="text-[12px] text-teal-400 flex items-center mt-5 absolute bottom-0 right-0"
          href="#">
            بیشتربخوانید
            <svg
            class="w-[18px] h-[18px] fill-teal-400"
            viewBox="0 0 24 24">
              <path
                d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"
              ></path>
            </svg></div>
        
          </a>
        </div>
        <div class="flex gap-x-4 w-[356px]">
          <div
            class="w-[108px] h-[108px] border-[1px] border-[#2b2b2b33] rounded-lg flex justify-center items-center"
          >
            <img
              class="w-[75px] h-[75px] object-contain"
              src="./images/footer/rezi.png"
              alt="rezi"
            />
          </div>
          <div
            class="w-[108px] h-[108px] border-[1px] border-[#2b2b2b33] rounded-lg flex justify-center items-center"
          >
            <img
              class="w-[75px] h-[75px] object-contain"
              src="./images/footer/kasbokar.png"
              alt="rezi"
            />
          </div>
          <div
            class="w-[108px] h-[108px] border-[1px] border-[#2b2b2b33] rounded-lg flex justify-center items-center"
          >
            <img
              class="w-[75px] h-[75px] object-contain"
              src="./images/footer/rezi.png"
              alt="rezi"
            />
          </div>
        </div>
      </div>
      <!--footer last text end-->
      <!--footer text center start-->
      <div class="w-full py-8 border-t-[1px] border-t-[#2b2b2b33] mt-5 ">
        <p class="mx-auto text-[11px] text-center ">برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع» کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه (فروشگاه آنلاین دیجی‌کالا) است.</p>
      </div>
      <!--footer text center end-->
     
    </footer>
     <!--footer logos start-->
    <div class="w-full h-[160px] desktop:flex flex-wrap justify-center bg-[#f0f0f1] mobile:hidden">
     <div class="w-full h-1/2 flex justify-center">
      <div class="h-full flex justify-center items-center w-[185px] py-3 border-b-[1px] border-b-[#2b2b2b33] border-l-[1px] border-l-[#2b2b2b33]">
        <img class="h-[30px]" src="./images/footer/footer-logos/digiclub.svg" alt="logo">
      </div>
      <div class="h-full flex flex-grow-[1] justify-center items-center w-[185px] py-3 border-b-[1px] border-b-[#2b2b2b33] border-l-[1px] border-l-[#2b2b2b33]">
        <img class="h-[30px]" src="./images/footer/footer-logos/digiclub.svg" alt="logo">
      </div>
      <div class="h-full flex flex-grow-[1] justify-center items-center w-[185px] py-3 border-b-[1px] border-b-[#2b2b2b33] border-l-[1px] border-l-[#2b2b2b33]">
        <img class="h-[30px]" src="./images/footer/footer-logos/digiclub.svg" alt="logo">
      </div>
      <div class="h-full flex flex-grow-[1] justify-center items-center w-[185px] py-3 border-b-[1px] border-b-[#2b2b2b33] border-l-[1px] border-l-[#2b2b2b33]">
        <img class="h-[30px]" src="./images/footer/footer-logos/digiclub.svg" alt="logo">
      </div>
      <div class="h-full flex flex-grow-[1] justify-center items-center w-[185px] py-3 border-b-[1px] border-b-[#2b2b2b33] border-l-[1px] border-l-[#2b2b2b33]">
        <img class="h-[30px]" src="./images/footer/footer-logos/digiclub.svg" alt="logo">
      </div>
      <div class="h-full flex flex-grow-[1] justify-center items-center w-[185px] py-3 border-b-[1px] border-b-[#2b2b2b33] border-l-[1px] border-l-[#2b2b2b33]">
        <img class="h-[30px]" src="./images/footer/footer-logos/digiclub.svg" alt="logo">
      </div>
      <div class="h-full flex flex-grow-[1] justify-center items-center w-[185px] py-3 border-b-[1px] border-b-[#2b2b2b33] border-l-[1px] border-l-[#2b2b2b33]">
        <img class="h-[30px]" src="./images/footer/footer-logos/digiclub.svg" alt="logo">
      </div>
      <div class="h-full flex flex-grow-[1] justify-center items-center w-[185px] py-3 border-b-[1px] border-b-[#2b2b2b33]">
        <img class="h-[30px]" src="./images/footer/footer-logos/digiclub.svg" alt="logo">
      </div>
     </div>
      <div class="w-full flex justify-center h-1/2">
        <div class="h-full flex flex-grow-[1] justify-center items-center w-[210px] py-3 border-l-[1px] border-l-[#2b2b2b33]">
          <img class="h-[30px]" src="./images/footer/footer-logos/digiclub.svg" alt="logo">
        </div>
        <div class="h-full flex flex-grow-[1] justify-center items-center w-[210px] py-3 border-l-[1px] border-l-[#2b2b2b33]">
          <img class="h-[30px]" src="./images/footer/footer-logos/digiclub.svg" alt="logo">
        </div>
        <div class="h-full flex flex-grow-[1] justify-center items-center w-[210px] py-3 border-l-[1px] border-l-[#2b2b2b33]">
          <img class="h-[30px]" src="./images/footer/footer-logos/digiclub.svg" alt="logo">
        </div>
        <div class="h-full flex flex-grow-[1] justify-center items-center w-[210px] py-3 border-l-[1px] border-l-[#2b2b2b33]">
          <img class="h-[30px]" src="./images/footer/footer-logos/digiclub.svg" alt="logo">
        </div>
        <div class="h-full flex flex-grow-[1] justify-center items-center w-[210px] py-3 border-l-[1px] border-l-[#2b2b2b33]">
          <img class="h-[30px]" src="./images/footer/footer-logos/digiclub.svg" alt="logo">
        </div>
        <div class="h-full flex flex-grow-[1] justify-center items-center w-[210px] py-3 border-l-[1px] border-l-[#2b2b2b33]">
          <img class="h-[30px]" src="./images/footer/footer-logos/digiclub.svg" alt="logo">
        </div>
        <div class="h-full flex flex-grow-[1] justify-center items-center w-[210px] py-3 border-l-[1px] border-l-[#2b2b2b33]">
          <img class="h-[30px]" src="./images/footer/footer-logos/digiclub.svg" alt="logo">
        </div>
      </div>
     
    </div>
          <!--footer logos end-->
    <!-- footer desktop end -->
`,gl=`

<button id="supportBtn"
  class="w-[55px] z-[9999999] h-[55px] cursor-pointer bg-[crimson] mobile:hidden desktop:flex justify-center items-center fixed bottom-10 rounded-full right-10"
>
  <svg viewBox="0 0 24 24" class="w-[24px] h-[24px] fill-[whitesmoke]">
    <path
      fill-rule="evenodd"
      d="M18 17a4.001 4.001 0 01-3.14 3.907A3 3 0 1012 23h2a6 6 0 006-6v-.256a4.502 4.502 0 000-8.488V7a6 6 0 00-6-6h-4a6 6 0 00-6 6v1.256A4.502 4.502 0 005.5 17H7a1 1 0 001-1V9a1 1 0 00-1-1H6V7a4 4 0 014-4h4a4 4 0 014 4v1h-1a1 1 0 00-1 1v7a1 1 0 001 1h1zm.5-2H18v-5h.5a2.5 2.5 0 010 5zM6 10h-.5a2.5 2.5 0 000 5H6v-5zm7 10a1 1 0 11-2 0 1 1 0 012 0z"
      clip-rule="evenodd"
    ></path>
  </svg>
</button>
<div id="supportPop" class="w-[300px] h-[500px] rounded-xl bg-white border-[1px] border-[#ef4056] right-[40px] hidden fixed z-[9999999] top-[100px]">
<div class="w-[100%] h-[60px] bg-[#ef4056] rounded-t-xl flex justify-between px-4 items-center">
<span class="text-[16px] text-white font-bold">پشتیبانی آنلاین</span>
<span id="supportClose" class="cursor-pointer">
<svg class="w-[24px] h-[24px] fill-white" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M11.293 19.707l1.414-1.414L7.414 13H20v-2H7.414l5.293-5.293-1.414-1.414-7 7a1 1 0 000 1.414l7 7z" clip-rule="evenodd"></path></svg>
</span>
</div>
<div class="w-full h-[calc(100%-60px)] rounded-b-xl p-2 overflow-auto">
  <div class="w-full h-[90px]">
  <p class="text-[19px] text-[#000]">سلام
  👋👋
  </p>
  <p class="text-[14px] text-[#000]">
  اینجا می‌توانید تعدادی از پرسش های متداول را ببینید یا در صورت تمایل با ما آنلاین گفتگو کنید!
  </p>
  </div>
  <div class="border mt-4 px-2 py-4 flex rounded-lg justify-between">
  <p class="text-[14px] w-[80%] ">چگونه میتوانم یک پروفایل ایجاد کنم؟</p>
  <span><svg class="w-[24px] h-[24px] fill-black" viewBox="0 0 24 24"><path d="M7.707 9.29l-1.414 1.414 5 5a1 1 0 001.414 0l5-5-1.414-1.414L12 13.583 7.707 9.29z"></path></svg></span>
  </div>
  <div class="border mt-4 px-2 py-4 flex rounded-lg justify-between">
  <p class="text-[14px] w-[80%] ">چگونه میتوانم یک پروفایل ایجاد کنم؟</p>
  <span><svg class="w-[24px] h-[24px] fill-black" viewBox="0 0 24 24"><path d="M7.707 9.29l-1.414 1.414 5 5a1 1 0 001.414 0l5-5-1.414-1.414L12 13.583 7.707 9.29z"></path></svg></span>
  </div>
  <div class="border mt-4 px-2 py-4 flex rounded-lg justify-between">
  <p class="text-[14px] w-[80%] ">چگونه میتوانم یک پروفایل ایجاد کنم؟</p>
  <span><svg class="w-[24px] h-[24px] fill-black" viewBox="0 0 24 24"><path d="M7.707 9.29l-1.414 1.414 5 5a1 1 0 001.414 0l5-5-1.414-1.414L12 13.583 7.707 9.29z"></path></svg></span>
  </div>
  <div class="border mt-4 px-2 py-4 flex rounded-lg justify-between">
  <p class="text-[14px] w-[80%] ">چگونه میتوانم یک پروفایل ایجاد کنم؟</p>
  <span><svg class="w-[24px] h-[24px] fill-black" viewBox="0 0 24 24"><path d="M7.707 9.29l-1.414 1.414 5 5a1 1 0 001.414 0l5-5-1.414-1.414L12 13.583 7.707 9.29z"></path></svg></span>
  </div>
</div>
</div>
    
    <div
      class="w-full h-[55px] bg-white sticky bottom-0 desktop:hidden flex shadow-[0px_-10px_10px_-15px_rgba(0,0,0,0.9)] z-[9999999]"
    >
      <div class="w-1/4 h-ful flex flex-col justify-center items-center">
        <svg viewBox="0 0 24 24" class="w-[24px] h-[24px] fill-slate-700">
          <path
            d="M20 11.586v6.586a3 3 0 01-3 3H7a3 3 0 01-3-3v-6.586l-1.293 1.293-1.414-1.415L9.879 2.88a3 3 0 014.242 0l8.586 8.585-1.414 1.415L20 11.586z"
          ></path>
        </svg>
        <span class="text-[12px] text-slate-700 mt-1">خانه</span>
      </div>
      <div class="w-1/4 h-ful flex flex-col justify-center items-center">
        <svg viewBox="0 0 24 24" class="w-[24px] h-[24px] fill-slate-700">
          <path
            fill-rule="evenodd"
            d="M10 2H3a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1V3a1 1 0 00-1-1zM4 9V4h5v5H4zm17 4a1 1 0 011 1v7a1 1 0 01-1 1h-7a1 1 0 01-1-1v-7a1 1 0 011-1h7zm-3.5-2a4.5 4.5 0 110-9 4.5 4.5 0 010 9zM20 6.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM6.5 22a4.5 4.5 0 110-9 4.5 4.5 0 010 9zM9 17.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm6 2.5v-5h5v5h-5z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span class="text-[12px] text-slate-700 mt-1">دسته‌بندی</span>
      </div>
      <div class="w-1/4 h-ful flex flex-col justify-center items-center">
        <svg viewBox="0 0 24 24" class="w-[24px] h-[24px] fill-slate-700">
          <path
            fill-rule="evenodd"
            d="M20 4h2V2h-3a1 1 0 00-1 1v1H3a1 1 0 00-.995 1.1l1 10A1 1 0 004 16h15a1 1 0 001-1V4zm-2 17a2 2 0 110-4 2 2 0 010 4zM5 21a2 2 0 110-4 2 2 0 010 4zm13-7V6H4.105l.8 8H18z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span class="text-[12px] text-slate-700 mt-1">سبد خرید</span>
      </div>
      <div class="w-1/4 h-ful flex flex-col justify-center items-center">
        <svg viewBox="0 0 24 24" class="w-[24px] h-[24px] fill-slate-700">
          <path
            fill-rule="evenodd"
            d="M12 2a5 5 0 015 5v1A5 5 0 017 8V7a5 5 0 015-5zm9.996 18.908C21.572 16.318 18.096 14 12 14c-6.095 0-9.572 2.318-9.996 6.908A1 1 0 003 22h18a1 1 0 00.996-1.092zM4.188 20c.728-2.677 3.231-4 7.812-4 4.58 0 7.084 1.323 7.812 4H4.188zM9 7a3 3 0 116 0v1a3 3 0 01-6 0V7z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span class="text-[12px] text-slate-700 mt-1">دیجی‌کالای من</span>
      </div>
    </div>`;function G(l){document.querySelector("#container").insertAdjacentHTML("beforeend",l)}G(Ws);G(Us);G(Zs);G(el);G(tl);G(sl);G(al);G(il);G(rl);G(ol);G(nl);G(dl);G(cl);G(pl);G(fl);G(bl);G(xl);G(hl);G(vl);G(ml);G(gl);new N(".mySwiper",{slidesPerView:"auto",spaceBetween:0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});new N(".redSwiper",{slidesPerView:"auto",spaceBetween:3,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});new N(".catSwiper",{});new N(".popularSwiper",{slidesPerView:"auto",spaceBetween:0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});new N(".bestSwiper",{slidesPerView:"auto",spaceBetween:0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});new N(".bestSwiper2nd",{slidesPerView:"auto",spaceBetween:0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});let me=document.querySelector("#chooseCity"),wl=document.querySelector("#chooseCityBtn"),yl=document.querySelector("#chooseCityClose");wl.addEventListener("click",()=>{me.classList.remove("hidden"),me.classList.add("flex"),document.body.classList.add("overflow-hidden")});yl.addEventListener("click",()=>{me.classList.remove("flex"),me.classList.add("hidden"),document.body.classList.remove("overflow-hidden")});let tt=document.querySelector("#supportPop"),Sl=document.querySelector("#supportBtn"),Ml=document.querySelector("#supportClose");Sl.addEventListener("click",()=>{tt.classList.remove("hidden")});Ml.addEventListener("click",()=>{tt.classList.add("hidden")});

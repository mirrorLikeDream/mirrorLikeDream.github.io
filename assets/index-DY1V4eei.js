import{a0 as G,a9 as de,a7 as ue,aa as Le,r as C,ab as Oe,ac as He,ad as Ne,ae as Ee,af as fe,d as Z,D as O,C as ve,n as z,e as M,F as he,x as be,h as k,ag as me,g as ge,P as De,k as $,J as we,a as g,ah as J,K as H,$ as A,ai as ye,L as We,v as p,m as Y,aj as Ze,l as ee,ak as Me,t as W,E as Fe,al as je,am as Ue,i as ie,G as Q,Z as Ve,an as qe,ao as oe,ap as Ke,aq as Ye,ar as Xe,j as Ge,as as Je,at as Qe,R as pe,s as et,q as se,au as tt,av as nt,f as at,a3 as lt,aw as it,Y as ot,a1 as st,S as rt,ax as ct}from"./index-BwIqwHK2.js";import{u as xe}from"./index-BGeby0Sf.js";function dt(e,a,o){let l,r=0;const t=e.scrollLeft,s=o===0?1:Math.round(o*1e3/16);let c=t;function h(){de(l)}function m(){c+=(a-t)/s,e.scrollLeft=c,++r<s&&(l=G(m))}return m(),h}function ut(e,a,o,l){let r,t=ue(e);const s=t<a,c=o===0?1:Math.round(o*1e3/16),h=(a-t)/c;function m(){de(r)}function y(){t+=h,(s&&t>a||!s&&t<a)&&(t=a),Le(e,t),s&&t<a||!s&&t>a?r=G(y):l&&(r=G(l))}return y(),m}function ft(){const e=C([]),a=[];return Oe(()=>{e.value=[]}),[e,l=>(a[l]||(a[l]=r=>{e.value[l]=r}),a[l])]}function Se(e,a){if(!He||!window.IntersectionObserver)return;const o=new IntersectionObserver(t=>{a(t[0].intersectionRatio>0)},{root:document.body}),l=()=>{e.value&&o.observe(e.value)},r=()=>{e.value&&o.unobserve(e.value)};Ne(r),Ee(r),fe(l)}const[vt,ht]=M("sticky"),bt={zIndex:z,position:ve("top"),container:Object,offsetTop:O(0),offsetBottom:O(0)};var mt=Z({name:vt,props:bt,emits:["scroll","change"],setup(e,{emit:a,slots:o}){const l=C(),r=he(l),t=be({fixed:!1,width:0,height:0,transform:0}),s=C(!1),c=k(()=>me(e.position==="top"?e.offsetTop:e.offsetBottom)),h=k(()=>{if(s.value)return;const{fixed:f,height:T,width:u}=t;if(f)return{width:`${u}px`,height:`${T}px`}}),m=k(()=>{if(!t.fixed||s.value)return;const f=ge(De(e.zIndex),{width:`${t.width}px`,height:`${t.height}px`,[e.position]:`${c.value}px`});return t.transform&&(f.transform=`translate3d(0, ${t.transform}px, 0)`),f}),y=f=>a("scroll",{scrollTop:f,isFixed:t.fixed}),I=()=>{if(!l.value||J(l))return;const{container:f,position:T}=e,u=H(l),S=ue(window);if(t.width=u.width,t.height=u.height,T==="top")if(f){const d=H(f),B=d.bottom-c.value-t.height;t.fixed=c.value>u.top&&d.bottom>0,t.transform=B<0?B:0}else t.fixed=c.value>u.top;else{const{clientHeight:d}=document.documentElement;if(f){const B=H(f),b=d-B.top-c.value-t.height;t.fixed=d-c.value<u.bottom&&d>B.top,t.transform=b<0?-b:0}else t.fixed=d-c.value<u.bottom}y(S)};return $(()=>t.fixed,f=>a("change",f)),we("scroll",I,{target:r,passive:!0}),Se(l,I),$([ye,We],()=>{!l.value||J(l)||!t.fixed||(s.value=!0,A(()=>{const f=H(l);t.width=f.width,t.height=f.height,s.value=!1}))}),()=>{var f;return g("div",{ref:l,style:h.value},[g("div",{class:ht({fixed:t.fixed&&!s.value}),style:m.value},[(f=o.default)==null?void 0:f.call(o)])])}}});const gt=p(mt),[wt,re]=M("tabs");var yt=Z({name:wt,props:{count:Y(Number),inited:Boolean,animated:Boolean,duration:Y(z),swipeable:Boolean,lazyRender:Boolean,currentIndex:Y(Number)},emits:["change"],setup(e,{emit:a,slots:o}){const l=C(),r=c=>a("change",c),t=()=>{var c;const h=(c=o.default)==null?void 0:c.call(o);return e.animated||e.swipeable?g(Me,{ref:l,loop:!1,class:re("track"),duration:+e.duration*1e3,touchable:e.swipeable,lazyRender:e.lazyRender,showIndicators:!1,onChange:r},{default:()=>[h]}):h},s=c=>{const h=l.value;h&&h.state.active!==c&&h.swipeTo(c,{immediate:!e.inited})};return $(()=>e.currentIndex,s),Ze(()=>{s(e.currentIndex)}),ee({swipeRef:l}),()=>g("div",{class:re("content",{animated:e.animated||e.swipeable})},[t()])}});const[Te,K]=M("tabs"),xt={type:ve("line"),color:String,border:Boolean,sticky:Boolean,shrink:Boolean,active:O(0),duration:O(.3),animated:Boolean,ellipsis:W,swipeable:Boolean,scrollspy:Boolean,offsetTop:O(0),background:String,lazyRender:W,showHeader:W,lineWidth:z,lineHeight:z,beforeChange:Function,swipeThreshold:O(5),titleActiveColor:String,titleInactiveColor:String},Ce=Symbol(Te);var St=Z({name:Te,props:xt,emits:["change","scroll","rendered","clickTab","update:active"],setup(e,{emit:a,slots:o}){let l,r,t,s,c;const h=C(),m=C(),y=C(),I=C(),f=xe(),T=he(h),[u,S]=ft(),{children:d,linkChildren:B}=Fe(Ce),b=be({inited:!1,position:"",lineStyle:{},currentIndex:-1}),N=k(()=>d.length>+e.swipeThreshold||!e.ellipsis||e.shrink),F=k(()=>({borderColor:e.color,background:e.background})),E=(n,i)=>{var v;return(v=n.name)!=null?v:i},j=k(()=>{const n=d[b.currentIndex];if(n)return E(n,b.currentIndex)}),L=k(()=>me(e.offsetTop)),te=k(()=>e.sticky?L.value+l:0),D=n=>{const i=m.value,v=u.value;if(!N.value||!i||!v||!v[b.currentIndex])return;const x=v[b.currentIndex].$el,w=x.offsetLeft-(i.offsetWidth-x.offsetWidth)/2;s&&s(),s=dt(i,w,n?0:+e.duration)},_=()=>{const n=b.inited;A(()=>{const i=u.value;if(!i||!i[b.currentIndex]||e.type!=="line"||J(h.value))return;const v=i[b.currentIndex].$el,{lineWidth:x,lineHeight:w}=e,R=v.offsetLeft+v.offsetWidth/2,P={width:ie(x),backgroundColor:e.color,transform:`translateX(${R}px) translateX(-50%)`};if(n&&(P.transitionDuration=`${e.duration}s`),Q(w)){const q=ie(w);P.height=q,P.borderRadius=q}b.lineStyle=P})},Re=n=>{const i=n<b.currentIndex?-1:1;for(;n>=0&&n<d.length;){if(!d[n].disabled)return n;n+=i}},U=(n,i)=>{const v=Re(n);if(!Q(v))return;const x=d[v],w=E(x,v),R=b.currentIndex!==null;b.currentIndex!==v&&(b.currentIndex=v,i||D(),_()),w!==e.active&&(a("update:active",w),R&&a("change",w,x.title)),t&&!e.scrollspy&&qe(Math.ceil(oe(h.value)-L.value))},V=(n,i)=>{const v=d.find((w,R)=>E(w,R)===n),x=v?d.indexOf(v):0;U(x,i)},ne=(n=!1)=>{if(e.scrollspy){const i=d[b.currentIndex].$el;if(i&&T.value){const v=oe(i,T.value)-te.value;r=!0,c&&c(),c=ut(T.value,v,n?0:+e.duration,()=>{r=!1})}}},ke=(n,i,v)=>{const{title:x,disabled:w}=d[i],R=E(d[i],i);w||(Ke(e.beforeChange,{args:[R],done:()=>{U(i),ne()}}),Ye(n)),a("clickTab",{name:R,title:x,event:v,disabled:w})},Ie=n=>{t=n.isFixed,a("scroll",n)},Be=n=>{A(()=>{V(n),ne(!0)})},$e=()=>{for(let n=0;n<d.length;n++){const{top:i}=H(d[n].$el);if(i>te.value)return n===0?0:n-1}return d.length-1},_e=()=>{if(e.scrollspy&&!r){const n=$e();U(n)}},Pe=()=>{if(e.type==="line"&&d.length)return g("div",{class:K("line"),style:b.lineStyle},null)},ae=()=>{var n,i,v;const{type:x,border:w,sticky:R}=e,P=[g("div",{ref:R?void 0:y,class:[K("wrap"),{[Ve]:x==="line"&&w}]},[g("div",{ref:m,role:"tablist",class:K("nav",[x,{shrink:e.shrink,complete:N.value}]),style:F.value,"aria-orientation":"horizontal"},[(n=o["nav-left"])==null?void 0:n.call(o),d.map(q=>q.renderTitle(ke)),Pe(),(i=o["nav-right"])==null?void 0:i.call(o)])]),(v=o["nav-bottom"])==null?void 0:v.call(o)];return R?g("div",{ref:y},[P]):P},le=()=>{_(),A(()=>{var n,i;D(!0),(i=(n=I.value)==null?void 0:n.swipeRef.value)==null||i.resize()})};$(()=>[e.color,e.duration,e.lineWidth,e.lineHeight],_),$(ye,le),$(()=>e.active,n=>{n!==j.value&&V(n)}),$(()=>d.length,()=>{b.inited&&(V(e.active),_(),A(()=>{D(!0)}))});const Ae=()=>{V(e.active,!0),A(()=>{b.inited=!0,y.value&&(l=H(y.value).height),D(!0)})},ze=(n,i)=>a("rendered",n,i);return ee({resize:le,scrollTo:Be}),je(_),Ue(_),fe(Ae),Se(h,_),we("scroll",_e,{target:T,passive:!0}),B({id:f,props:e,setLine:_,scrollable:N,onRendered:ze,currentName:j,setTitleRefs:S,scrollIntoView:D}),()=>g("div",{ref:h,class:K([e.type])},[e.showHeader?e.sticky?g(gt,{container:h.value,offsetTop:L.value,onScroll:Ie},{default:()=>[ae()]}):ae():null,g(yt,{ref:I,count:d.length,inited:b.inited,animated:e.animated,duration:e.duration,swipeable:e.swipeable,lazyRender:e.lazyRender,currentIndex:b.currentIndex,onChange:U},{default:()=>{var n;return[(n=o.default)==null?void 0:n.call(o)]}})])}});const Tt=Symbol(),[Ct,ce]=M("tab"),Rt=Z({name:Ct,props:{id:String,dot:Boolean,type:String,color:String,title:String,badge:z,shrink:Boolean,isActive:Boolean,disabled:Boolean,controls:String,scrollable:Boolean,activeColor:String,inactiveColor:String,showZeroBadge:W},setup(e,{slots:a}){const o=k(()=>{const r={},{type:t,color:s,disabled:c,isActive:h,activeColor:m,inactiveColor:y}=e;s&&t==="card"&&(r.borderColor=s,c||(h?r.backgroundColor=s:r.color=s));const f=h?m:y;return f&&(r.color=f),r}),l=()=>{const r=g("span",{class:ce("text",{ellipsis:!e.scrollable})},[a.title?a.title():e.title]);return e.dot||Q(e.badge)&&e.badge!==""?g(Xe,{dot:e.dot,content:e.badge,showZero:e.showZeroBadge},{default:()=>[r]}):r};return()=>g("div",{id:e.id,role:"tab",class:[ce([e.type,{grow:e.scrollable&&!e.shrink,shrink:e.shrink,active:e.isActive,disabled:e.disabled}])],style:o.value,tabindex:e.disabled?void 0:e.isActive?0:-1,"aria-selected":e.isActive,"aria-disabled":e.disabled||void 0,"aria-controls":e.controls,"data-allow-mismatch":"attribute"},[l()])}}),[kt,X]=M("tab"),It=ge({},nt,{dot:Boolean,name:z,badge:z,title:String,disabled:Boolean,titleClass:at,titleStyle:[String,Object],showZeroBadge:W});var Bt=Z({name:kt,props:It,setup(e,{slots:a}){const o=xe(),l=C(!1),r=tt(),{parent:t,index:s}=Ge(Ce);if(!t)return;const c=()=>{var u;return(u=e.name)!=null?u:s.value},h=()=>{l.value=!0,t.props.lazyRender&&A(()=>{t.onRendered(c(),e.title)})},m=k(()=>{const u=c()===t.currentName.value;return u&&!l.value&&h(),u}),y=C(""),I=C("");Je(()=>{const{titleClass:u,titleStyle:S}=e;y.value=u?lt(u):"",I.value=S&&typeof S!="string"?it(ot(S)):S});const f=u=>g(Rt,et({key:o,id:`${t.id}-${s.value}`,ref:t.setTitleRefs(s.value),style:I.value,class:y.value,isActive:m.value,controls:o,scrollable:t.scrollable.value,activeColor:t.props.titleActiveColor,inactiveColor:t.props.titleInactiveColor,onClick:S=>u(r.proxy,s.value,S)},se(t.props,["type","color","shrink"]),se(e,["dot","badge","title","disabled","showZeroBadge"])),{title:a.title}),T=C(!m.value);return $(m,u=>{u?T.value=!1:st(()=>{T.value=!0})}),$(()=>e.title,()=>{t.setLine(),t.scrollIntoView()}),ct(Tt,m),ee({id:o,renderTitle:f}),()=>{var u;const S=`${t.id}-${s.value}`,{animated:d,swipeable:B,scrollspy:b,lazyRender:N}=t.props;if(!a.default&&!d)return;const F=b||m.value;if(d||B)return g(Qe,{id:o,role:"tabpanel",class:X("panel-wrapper",{inactive:T.value}),tabindex:m.value?0:-1,"aria-hidden":!m.value,"aria-labelledby":S,"data-allow-mismatch":"attribute"},{default:()=>{var L;return[g("div",{class:X("panel")},[(L=a.default)==null?void 0:L.call(a)])]}});const j=l.value||b||!N?(u=a.default)==null?void 0:u.call(a):null;return pe(g("div",{id:o,role:"tabpanel",class:X("panel"),tabindex:F?0:-1,"aria-labelledby":S,"data-allow-mismatch":"attribute"},[j]),[[rt,F]])}}});const Pt=p(Bt),At=p(St);export{At as T,Pt as a};

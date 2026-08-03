import{a as L,c as H}from"./chunk-4RGTAOAO.js";import{a as k}from"./chunk-4GWMMBRD.js";function _(e){let n=String(e??"").toLowerCase();return D.includes(n)?!0:n.length>E.length&&n.endsWith(E)}function T(e,n,l="1"){let d=new URL(String(e),"http://x/");return d.searchParams.set(n,l),String(e).startsWith("http")?d.href:d.pathname+d.search+d.hash}function W(e,n,l,d,p){let o=Math.max(0,Math.min(n-d,Number(e&&e.x))),s=Math.max(0,Math.min(l-p,Number(e&&e.y)));return{x:Number.isFinite(o)?o:0,y:Number.isFinite(s)?s:0}}function V(e){try{let n=e&&e.getItem(O);if(!n)return null;let l=JSON.parse(n);return!l||!Number.isFinite(Number(l.x))||!Number.isFinite(Number(l.y))?null:{x:Number(l.x),y:Number(l.y)}}catch{return null}}function z(e,n){try{return e.setItem(O,JSON.stringify({x:Math.round(n.x),y:Math.round(n.y)})),!0}catch{return!1}}function q(e={}){if(typeof document>"u"||document.getElementById("devtools-btn"))return null;let n=e.tools||F,l=e.toolOpts||{},d=e.store!==void 0?e.store:typeof localStorage<"u"?localStorage:null,p=document.createElement("style");p.textContent=I,document.head.appendChild(p);let o=document.createElement("button");o.id="devtools-btn",o.type="button",o.title="dev tools (drag to move)",o.textContent="DEV",document.body.appendChild(o);let s=document.createElement("div");s.id="devtools",s.style.display="none",s.innerHTML=`
   <h4><span>dev tools</span><button id="dt-close" type="button">x</button></h4>
   <div id="dt-list"></div>
   <div class="dt-foot">dev hosts only - not in production builds</div>`,document.body.appendChild(s);let v=new Map;function g(t,a){let r=W({x:t,y:a},window.innerWidth,window.innerHeight,o.offsetWidth||34,o.offsetHeight||34);return o.style.left=`${r.x}px`,o.style.top=`${r.y}px`,r}let m=V(d),P=m?g(m.x,m.y):g(12,12);function y(){let t=o.getBoundingClientRect(),a=L(window);s.style.maxHeight=`${Math.max(0,Math.round(a.h-12))}px`;let r=s.offsetWidth||268,c=s.offsetHeight||200,u=Math.max(6,Math.min(a.w-r-6,t.left)),j=t.bottom+8+c<=a.h?t.bottom+8:Math.max(6,t.top-8-c);s.style.left=`${u}px`,s.style.top=`${j}px`}function b(){let t=s.querySelector("#dt-list");t.innerHTML=n.map((a,r)=>{let c=$(a),u=v.has(a.flag),h=c==="absent"?"not in this build":u?"active":c==="navigate"?"reloads":"";return`<button class="dt-item${u?" on":""}" type="button" id="dt-i${r}"
        ${c==="absent"||u?"disabled":""}>
        <span class="dt-nm"><span>${f(a.label)}</span>
          <span class="dt-flag">?${f(a.flag)}=1</span></span>
        <span class="dt-desc">${f(a.desc)}${h?` <span class="dt-st">[${f(h)}]</span>`:""}</span></button>`}).join("");for(let a=0;a<n.length;a++){let r=t.querySelector(`#dt-i${a}`);r&&!r.disabled&&r.addEventListener("click",()=>w(n[a]))}}function w(t){let a=$(t);return a==="absent"?null:a==="navigate"?(window.location.href=T(window.location.href,t.flag),null):t.load().then(r=>{let c=typeof l[t.ctx]=="function"?l[t.ctx]():{},u=t.mount(r,c);return v.set(t.flag,u||!0),b(),u}).catch(r=>{console.error(`devtools: ${t.flag} failed to mount`,r)})}function S(){s.style.display="block",y(),o.classList.add("on")}function x(){s.style.display="none",o.classList.remove("on")}let M=()=>s.style.display!=="none",i=null;o.addEventListener("pointerdown",t=>{let a=o.getBoundingClientRect();i={dx:t.clientX-a.left,dy:t.clientY-a.top,x0:t.clientX,y0:t.clientY,moved:!1},o.setPointerCapture(t.pointerId),t.stopPropagation(),t.preventDefault()}),o.addEventListener("pointermove",t=>{i&&(!i.moved&&Math.abs(t.clientX-i.x0)<C&&Math.abs(t.clientY-i.y0)<C||(i.moved=!0,o.classList.add("dragging"),g(t.clientX-i.dx,t.clientY-i.dy),M()&&y(),t.stopPropagation()))});function N(t){if(!i)return;let a=i.moved;if(i=null,o.classList.remove("dragging"),a){let r=o.getBoundingClientRect();d&&z(d,{x:r.left,y:r.top})}else M()?x():S();t&&t.stopPropagation()}o.addEventListener("pointerup",N),o.addEventListener("pointercancel",()=>{i=null,o.classList.remove("dragging")});for(let t of["pointerdown","wheel","touchstart"])s.addEventListener(t,a=>a.stopPropagation());return s.querySelector("#dt-close").addEventListener("click",x),b(),{btn:o,panel:s,open:S,close:x,activate:w,paint:b,pos:P,destroy(){o.remove(),s.remove(),p.remove()}}}var D,E,F,R,$,O,I,f,C,X=k(()=>{H();D=Object.freeze(["localhost","127.0.0.1"]),E=".trycloudflare.com";F=Object.freeze([{flag:"wave",module:"wavepanel.mjs",label:"W2 review",desc:"every change in the wave under review, one panel",load:()=>import("./wavepanel-ZWHFMCRS.js"),mount:(e,n)=>e.mountWavePanel(n),ctx:"wave"},{flag:"vistune",module:"vistune.mjs",label:"visual tuning",desc:"flip each visual fix between shipped and previous, live",load:()=>import("./vistune-HWVRM2YC.js"),mount:(e,n)=>e.mountVisTune(n),ctx:"vistune"},{flag:"areasel",module:"areasel.mjs",label:"area select",desc:"drag a box on the map, copy one blob that names the exact view",load:()=>import("./areasel-5MNDU2RB.js"),mount:(e,n)=>e.mountAreaSel(n),ctx:"areasel"},{flag:"bldtune",module:"bldtune.mjs",label:"building thresholds",desc:"building admission and level-of-detail thresholds",load:null,mount:null,ctx:"bldtune"},{flag:"diag",module:"gesturediag.mjs",label:"gesture readout",desc:"on-device frame and gesture timing readout",load:null,mount:null,ctx:"diag"}]),R=e=>typeof e.load=="function",$=e=>R(e)?typeof e.mount=="function"?"mount":"navigate":"absent";O="ridemapper.devtools.pos";I=`
#devtools-btn{position:fixed;left:12px;top:12px;z-index:10001;width:34px;height:34px;
 display:flex;align-items:center;justify-content:center;padding:0;
 font:600 10px/1 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;letter-spacing:.06em;
 color:#1a1509;background:#7ec8a9;border:1px solid #d9a441;border-radius:9px;
 box-shadow:0 4px 14px rgba(0,0,0,.5);cursor:grab;touch-action:none;user-select:none}
#devtools-btn.dragging{cursor:grabbing}
#devtools-btn.on{background:#d9a441}
@media (hover: hover){#devtools-btn:hover{filter:brightness(1.12)}}
#devtools{position:fixed;z-index:10001;width:268px;
 font:11px/1.45 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;
 color:#e8e6e0;background:rgba(18,18,20,.93);border:1px solid rgba(255,255,255,.18);
 border-radius:8px;padding:9px 10px;backdrop-filter:blur(6px);
 box-shadow:0 6px 24px rgba(0,0,0,.5);user-select:none;touch-action:auto;
 overflow:auto}
#devtools h4{margin:0 0 7px;font-size:11px;font-weight:600;letter-spacing:.04em;
 text-transform:uppercase;color:#fff;display:flex;justify-content:space-between;
 align-items:center;gap:8px}
#devtools h4 button{font:inherit;line-height:1;padding:2px 7px;cursor:pointer;
 color:#cfccc6;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.16);
 border-radius:3px}
#devtools .dt-item{display:block;width:100%;text-align:left;margin:5px 0 0;
 padding:5px 7px;font:inherit;color:#e8e6e0;background:rgba(255,255,255,.05);
 border:1px solid rgba(255,255,255,.16);border-radius:5px;cursor:pointer}
#devtools .dt-item[disabled]{cursor:not-allowed;opacity:.45}
#devtools .dt-item.on{border-color:#d9a441}
@media (hover: hover){#devtools .dt-item:not([disabled]):hover{
 background:rgba(255,255,255,.11)}}
#devtools .dt-nm{display:flex;justify-content:space-between;gap:8px;color:#fff}
#devtools .dt-flag{color:#8f8c86;font-weight:400}
#devtools .dt-desc{color:#a7a49e;margin-top:2px}
#devtools .dt-st{color:#f2c76b}
#devtools .dt-foot{margin-top:8px;padding-top:7px;
 border-top:1px solid rgba(255,255,255,.10);color:#8f8c86}
`,f=e=>String(e).replace(/[&<>"]/g,n=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[n]),C=4});X();export{F as DEVTOOLS,D as DEV_HOSTS,E as DEV_HOST_SUFFIX,O as POS_KEY,W as clampPos,_ as devHost,T as flagUrl,q as mountDevTools,V as readPos,$ as toolActivation,R as toolAvailable,z as writePos};

import{b as E,c as L,e as W,g as h,h as C,j,k,s as q,t as z,u as P,w as I}from"./chunk-2PPOO3RN.js";import{b as S,c as V}from"./chunk-4RGTAOAO.js";import{a as O}from"./chunk-4GWMMBRD.js";function K(r){let s=r??(typeof location<"u"?location.search:"");if(!s)return!1;let n=new URLSearchParams(s).get(T);return n!=null&&n!==""&&n!=="0"&&n!=="false"}function R(r={}){let s=r.wave||B,n=r.rows||L,u=r.tools||A,x=r.launchers||{},w=new Map(n.map(t=>[t.key,t])),g=new Map(u.map(t=>[t.id,t])),o=s.groups.map(t=>({task:t.task,title:t.title,note:t.note||"",items:[...(t.keys||[]).map(i=>w.has(i)?{kind:"knob",id:i,row:w.get(i),status:"ready"}:{kind:"knob",id:i,row:null,status:"absent"}),...(t.tools||[]).map(i=>{let f=g.get(i)||{id:i,label:i,desc:""};return{kind:"tool",id:i,tool:f,status:typeof x[i]=="function"?"ready":"absent"}})]})),m=o.flatMap(t=>t.items);return{id:s.id,title:s.title,groups:o,keys:m.filter(t=>t.kind==="knob"&&t.row).map(t=>t.id),absent:m.filter(t=>t.status==="absent").map(t=>t.id)}}function D(r){let s=0;for(let n of r){let u=W(n);u&&k(n)!==u.def&&s++}return s}function H(r){let s=h();for(let n of r)delete s[n];for(let n of r)C(n);return s}function X(r={}){if(typeof document>"u"||document.getElementById("wavepanel"))return null;h();let s=r.tools||{},n=R({wave:r.wave,launchers:s}),u=()=>{typeof r.repaint=="function"&&r.repaint()},x=new Set,w=document.createElement("style");w.textContent=_,document.head.appendChild(w);let g=(e,a)=>`wp-${e}-${a}-`,o=document.createElement("div");o.id="wavepanel",o.innerHTML=`
   <h4 id="wp-head">${c(n.id)} review
     <button id="wp-fold" type="button">-</button></h4>
   <div class="wp-body">
    ${n.groups.map((e,a)=>`<div class="wp-sec">
      <div class="wp-grp">[${c(e.task)}] ${c(e.title)}</div>
      ${e.note?`<div class="wp-note">${c(e.note)}</div>`:""}
      ${e.items.map((p,l)=>m(p,g(a,l))).join("")}
    </div>`).join("")}
    <button class="wp-reset" id="wp-reset" type="button">reset ${c(n.id)} to defaults</button>
    <div class="wp-foot"><span>b:${c(E)}</span>
      <span id="wp-count"></span></div>
   </div>`,document.body.appendChild(o);function m(e,a){if(e.kind==="knob")return e.status==="ready"?q(e.row,a):`<div class="wp-gone">${c(e.id)} <span class="wp-st">[not in this
             build]</span></div>`;let p=e.status==="absent"?" disabled":"",l=e.status==="absent"?' <span class="wp-st">[not in this build]</span>':"";return`<button class="wp-tool" type="button" id="${a}c"${p}>
      <span class="wp-tnm">${c(e.tool.label)}</span>
      <span class="wp-tdesc">${c(e.tool.desc)}${l}</span></button>`}function t(){for(let a=0;a<n.groups.length;a++){let p=n.groups[a];for(let l=0;l<p.items.length;l++){let d=p.items[l];if(d.kind==="knob"&&d.status==="ready")z(o,g(a,l),d.row,k(d.id));else if(d.kind==="tool"&&x.has(d.id)){let b=o.querySelector(`#${g(a,l)}c`);b&&(b.classList.add("on"),b.disabled=!0)}}}let e=D(n.keys);o.querySelector("#wp-count").textContent=e===0?"all defaults":`${e} overridden`}for(let e=0;e<n.groups.length;e++){let a=n.groups[e];for(let p=0;p<a.items.length;p++){let l=a.items[p],d=g(e,p);if(l.kind==="knob"&&l.status==="ready")P(o,d,l.row,b=>{j(l.id,b),t(),u()});else if(l.kind==="tool"&&l.status==="ready"){let b=o.querySelector(`#${d}c`);b&&b.addEventListener("click",()=>{try{let v=s[l.id]();v&&typeof v.then=="function"&&v.catch(M=>console.error(`wavepanel: ${l.id} failed`,M))}catch(v){console.error(`wavepanel: ${l.id} failed`,v)}x.add(l.id),t(),u()})}}}o.querySelector("#wp-reset").addEventListener("click",()=>{H(n.keys),t(),u()}),o.querySelector("#wp-fold").addEventListener("click",e=>{e.stopPropagation();let a=o.classList.toggle("min");o.querySelector("#wp-fold").textContent=a?"+":"-",y.apply()});for(let e of["pointerdown","wheel","touchstart"])o.addEventListener(e,a=>a.stopPropagation());let i=null,f=o.querySelector("#wp-head");f.addEventListener("pointerdown",e=>{if(e.target.closest("button"))return;let a=o.getBoundingClientRect();i={dx:e.clientX-a.left,dy:e.clientY-a.top},o.style.left=`${a.left}px`,o.style.top=`${a.top}px`,o.style.bottom="auto",f.setPointerCapture(e.pointerId),e.preventDefault()}),f.addEventListener("pointermove",e=>{i&&(o.style.left=`${e.clientX-i.dx}px`,o.style.top=`${e.clientY-i.dy}px`)});let $=()=>{i=null,y.apply()};f.addEventListener("pointerup",$),f.addEventListener("pointercancel",$),t();let y=S(o);return{el:o,model:n,paint:t,bounds:y,destroy(){y.unbind(),o.remove(),w.remove()}}}var T,A,B,_,c,U=O(()=>{V();I();T="wave",A=Object.freeze([{id:"vglobe",module:"vectorglobe.mjs",label:"vector globe A/B",desc:"draw the world as lines instead of a painted image"},{id:"labellab",module:"labellab.mjs",label:"label edge lab",desc:"compare globe label placement rules on synthetic clusters"}]),B=Object.freeze({id:"W2",title:"W2 changes under review",groups:Object.freeze([{task:"W2-2",title:"clip labels",keys:["clipcross","clipsep","clipdiamond","clipscan","cliproute","clipstick","panstep"]},{task:"W2-3",title:"playback zoom",keys:["plaympp"]},{task:"W2-4",title:"building shading",note:"outline floor reverses the 2026-07-27 max-zoom-out ruling",keys:["bldwallgrad","bldroofgrad","bldcontact","bldcontacttint","bldsoftramp","bldinkfloor"]},{task:"W2-5",title:"tilt response",keys:["tiltmap"]},{task:"W2-6",title:"vector globe",tools:["vglobe"]},{task:"W2-7",title:"label edge lab",tools:["labellab"]},{task:"W4-1",title:"landmark buildings",keys:["bldlandmark","bldlmroof","bldlmwall"]}])});_=`
#wavepanel{position:fixed;left:12px;bottom:12px;z-index:10000;width:300px;
 font:11px/1.45 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;
 color:#e8e6e0;background:rgba(18,18,20,.92);border:1px solid rgba(255,255,255,.18);
 border-radius:8px;padding:9px 10px;backdrop-filter:blur(6px);
 box-shadow:0 6px 24px rgba(0,0,0,.5);user-select:none;
 overflow:auto}
#wavepanel.min{width:auto;overflow:visible}
#wavepanel.min .wp-body{display:none}
#wavepanel h4{font-size:11px;font-weight:600;letter-spacing:.04em;
 text-transform:uppercase;color:#fff;display:flex;justify-content:space-between;
 align-items:center;gap:8px;cursor:move;touch-action:none; position:sticky;top:0;z-index:3;background:#121214;
 margin:-9px -10px 7px;padding:9px 10px 7px}
#wavepanel h4 button{font:inherit;line-height:1;padding:1px 6px;cursor:pointer;
 color:#cfccc6;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.16);
 border-radius:3px}
#wavepanel .wp-sec{margin:8px 0 0;padding-top:7px;
 border-top:1px solid rgba(255,255,255,.10)}
#wavepanel .wp-sec:first-of-type{border-top:0;padding-top:0;margin-top:0}
#wavepanel .wp-grp{color:#8f8c86;letter-spacing:.03em;margin-bottom:4px}
#wavepanel .wp-note{color:#f2c76b;margin:0 0 4px}
#wavepanel .wp-gone{color:#8f8c86;margin:4px 0 0}
#wavepanel .vt-lab{color:#a7a49e;margin:5px 0 2px}
#wavepanel .vt-lab .vt-off{color:#f2c76b}
#wavepanel .vt-row{display:flex;align-items:center;gap:7px;margin:3px 0}
#wavepanel .vt-row input[type=range]{flex:1;min-width:0;height:14px;accent-color:#d9a441}
#wavepanel .vt-val{width:40px;text-align:right;color:#f2c76b;
 font-variant-numeric:tabular-nums}
#wavepanel .vt-unset{flex:1;padding:3px 2px;font:inherit;color:#cfccc6;cursor:pointer;
 background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.16);border-radius:4px}
#wavepanel .vt-unset.on{background:#8a8579;border-color:#8a8579;color:#14140f;font-weight:600}
#wavepanel .vt-seg{display:flex;gap:0}
#wavepanel .vt-seg button{flex:1;padding:3px 2px;font:inherit;color:#cfccc6;cursor:pointer;
 background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.16);margin-left:-1px;
 overflow:hidden;text-overflow:ellipsis}
#wavepanel .vt-seg button:first-child{margin-left:0;border-radius:4px 0 0 4px}
#wavepanel .vt-seg button:last-child{border-radius:0 4px 4px 0}
#wavepanel .vt-seg button.on{background:#d9a441;border-color:#d9a441;color:#1a1509;
 font-weight:600}
#wavepanel .vt-seg button.dflt.on{background:#8a8579;border-color:#8a8579;color:#14140f}
#wavepanel .wp-tool{display:block;width:100%;text-align:left;margin:5px 0 0;
 padding:5px 7px;font:inherit;color:#e8e6e0;background:rgba(255,255,255,.05);
 border:1px solid rgba(255,255,255,.16);border-radius:5px;cursor:pointer}
#wavepanel .wp-tool[disabled]{cursor:not-allowed;opacity:.45}
#wavepanel .wp-tool.on{border-color:#d9a441}
@media (hover: hover){#wavepanel .wp-tool:not([disabled]):hover{
 background:rgba(255,255,255,.11)}}
#wavepanel .wp-tnm{color:#fff}
#wavepanel .wp-tdesc{color:#a7a49e;margin-top:2px}
#wavepanel .wp-st{color:#f2c76b}
#wavepanel .wp-reset{margin-top:7px;width:100%;padding:4px 0;font:inherit;cursor:pointer;
 color:#cfccc6;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.16);
 border-radius:4px}
#wavepanel .wp-foot{margin-top:8px;padding-top:7px;
 border-top:1px solid rgba(255,255,255,.10);color:#8f8c86;
 display:flex;justify-content:space-between;gap:8px}
`,c=r=>String(r).replace(/[&<>"]/g,s=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[s])});U();export{B as WAVE,T as WAVE_FLAG,A as WAVE_TOOLS,X as mountWavePanel,H as resetWave,D as waveOverrides,R as wavePanelModel,K as wavePanelRequested};

import{p as c,m as v,f as d,g as m,l as h,O as u,t as g,o as C,v as r,u as V,c as f}from"./index-e9f3bc7c.js";const k=c({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...v(),...d()},"VDivider"),y=m()({name:"VDivider",props:k(),setup(e,a){let{attrs:t}=a;const{themeClasses:s}=h(e),{textColorClasses:o,textColorStyles:l}=u(g(e,"color")),n=C(()=>{const i={};return e.length&&(i[e.vertical?"maxHeight":"maxWidth"]=r(e.length)),e.thickness&&(i[e.vertical?"borderRightWidth":"borderTopWidth"]=r(e.thickness)),i});return V(()=>f("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},s.value,o.value,e.class],style:[n.value,l.value,e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}});export{y as V};

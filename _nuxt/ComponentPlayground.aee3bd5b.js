import{a5 as b,u as d,b as a,a as u,e as $,o as v,f as I,h as w,p as P,i as C,j as x,k as _,a9 as j,l as B,B as r}from"./entry.7e5e5716.js";import{u as D}from"./asyncData.cf2367cf.js";/* empty css                                */import E from"./ComponentPlaygroundData.0fc6985c.js";import"./TabsHeader.80556e98.js";/* empty css                       */import"./ComponentPlaygroundProps.4de8a855.js";import"./ProseH4.9f69ae5a.js";/* empty css                    */import"./ProseCodeInline.bd8e1110.js";/* empty css                            */import"./Badge.e55d5dbe.js";import"./ContentSlot.49983a03.js";/* empty css                  */import"./ProseP.bd2843b6.js";/* empty css                   */import"./index.6de0229b.js";/* empty css                                     */import"./ComponentPlaygroundSlots.vue.13cb4b89.js";import"./ComponentPlaygroundTokens.vue.4af28ca5.js";/* empty css                                    */async function z(o){b();const e=d(o);{const{data:n}=await D(`nuxt-component-meta${e?`-${e}`:""}`,()=>$fetch(`/api/component-meta${e?`/${e}`:""}`));return a(()=>n.value)}}const N=o=>(P("data-v-c263ebcc"),o=o(),C(),o),k=N(()=>x("div",{class:"ellipsis-item"},null,-1)),A=[k],V=u({__name:"Ellipsis",props:{width:{type:String,default:"10rem"},height:{type:String,default:"10rem"},zIndex:{type:String,default:"10"},top:{type:String,default:"0"},left:{type:String,default:"auto"},right:{type:String,default:"auto"},blur:{type:String,default:"50px"},colors:{type:Array,default:()=>["rgba(0, 71, 225, 0.22)","rgba(26, 214, 255, 0.22)","rgba(0, 220, 130, 0.22)"]}},setup(o){const e=o,n=a(()=>((t=e)=>t.top)()),s=a(()=>((t=e)=>t.left)()),i=a(()=>((t=e)=>t.right)()),c=a(()=>((t=e)=>t.zIndex)()),f=a(()=>((t=e)=>t.width)()),g=a(()=>((t=e)=>t.height)()),h=a(()=>((t=e)=>`blur(${t.blur})`)()),y=a(()=>((t=e)=>{var p,m,l;return`linear-gradient(97.62deg, ${(p=t==null?void 0:t.colors)==null?void 0:p[0]} 2.27%, ${(m=t==null?void 0:t.colors)==null?void 0:m[1]} 50.88%, ${(l=t==null?void 0:t.colors)==null?void 0:l[2]} 98.48%)`})()),{$pinceau:S}=$(e,void 0,{_cCN_top:n,_eih_insetInlineStart:s,_IfB_insetInlineEnd:i,_SsE_zIndex:c,_wj8_maxWidth:f,_t33_height:g,_Jfd_filter:h,_yUj_background:y});return(t,p)=>(v(),I("div",{class:w(["ellipsis",[d(S)]])},A,2))}}),q=_(V,[["__scopeId","data-v-c263ebcc"]]),O=u({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const e=a(()=>j(o.component)),n=B({...o.props}),s=await z(o.component);return{as:e,formProps:n,componentData:s}},render(o){const e=Object.entries(this.$slots).reduce((n,[s,i])=>{if(s.startsWith("component-")){const c=s.replace("component-","");n[c]=i}return n},{});return r("div",{class:"component-playground"},[r("div",{class:"component-playground-wrapper"},[r(q,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),r(o.as,{...o.formProps,class:"component-playground-component"},{...e})]),r(E,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),rt=_(O,[["__scopeId","data-v-5e699dca"]]);export{rt as default};

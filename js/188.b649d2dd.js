(self["webpackChunkwebpage1"]=self["webpackChunkwebpage1"]||[]).push([[188],{6314:function(e,t,a){var l=a(2109),s=a(2597);l({target:"Object",stat:!0},{hasOwn:s})},6965:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return A}});var l=a(3396),s=a(6824),o=a(8521);const n={class:"login"},i={class:"v-application__wrap",style:{height:"100%"}},r=(0,l._)("h1",{class:"text-center mr-15 text2"}," 仿生魚監控站 ",-1);function c(e,t,a,c,u,d){const m=(0,l.up)("loginnavbar"),p=(0,l.up)("logininput");return(0,l.wg)(),(0,l.iD)("div",n,[(0,l.Wm)(m,{class:"loginnavbar-bg"}),(0,l._)("div",i,[r,(0,l.Wm)(s.o,{class:"mt-2"},{default:(0,l.w5)((()=>[(0,l.Wm)(o.D,{class:"d-flex justify-center",xs:"12"},{default:(0,l.w5)((()=>[(0,l.Wm)(p,{class:"logininput"})])),_:1})])),_:1})])])}var u=a(5119),d=a(9242),m=a(870),p=a(9752),v=a(6422),g=a(3369),b=a(836),f=a(5768),h=a(3185),w=a(5180),y=a(489),k=a(8717),S=a(4231),_=a(5975),x=a(7041),I=a(5221),V=a(4870),O=a(3766),W=a(131),U=a(1107),C=a(9888);const N=(0,O.U)({multiLine:Boolean,timeout:{type:[Number,String],default:5e3},vertical:Boolean,...(0,w.y)({location:"bottom"}),...(0,y.F)(),...(0,S.I)(),...(0,I.bk)(),...(0,x.x$)(),...(0,W.CE)((0,f.B)({transition:"v-snackbar-transition"}),["persistent","noClickAnimation","scrim","scrollStrategy"])},"VSnackbar"),D=(0,U.ev)()({name:"VSnackbar",props:N(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t;const s=(0,k.z)(e,"modelValue"),{locationStyles:o}=(0,w.T)(e),{positionClasses:n}=(0,y.K)(e),{scopeId:i}=(0,_.a)(),{themeClasses:r}=(0,x.ER)(e),{colorClasses:c,colorStyles:u,variantClasses:d}=(0,I.c1)(e),{roundedClasses:m}=(0,S.b)(e),p=(0,V.iH)();(0,l.YP)(s,g),(0,l.YP)((()=>e.timeout),g),(0,l.bv)((()=>{s.value&&g()}));let v=-1;function g(){window.clearTimeout(v);const t=Number(e.timeout);s.value&&-1!==t&&(v=window.setTimeout((()=>{s.value=!1}),t))}function O(){window.clearTimeout(v)}return(0,C.L)((()=>{const[t]=f.y.filterProps(e);return(0,l.Wm)(f.y,(0,l.dG)({ref:p,class:["v-snackbar",{"v-snackbar--active":s.value,"v-snackbar--multi-line":e.multiLine&&!e.vertical,"v-snackbar--vertical":e.vertical},n.value,e.class],style:e.style},t,{modelValue:s.value,"onUpdate:modelValue":e=>s.value=e,contentProps:(0,l.dG)({class:["v-snackbar__wrapper",r.value,c.value,m.value,d.value],style:[o.value,u.value],onPointerenter:O,onPointerleave:g},t.contentProps),persistent:!0,noClickAnimation:!0,scrim:!1,scrollStrategy:"none",_disableGlobalStack:!0},i),{default:()=>[(0,I.Ux)(!1,"v-snackbar"),a.default&&(0,l.Wm)("div",{class:"v-snackbar__content",role:"status","aria-live":"polite"},[a.default()]),a.actions&&(0,l.Wm)(b.z,{defaults:{VBtn:{variant:"text",ripple:!1}}},{default:()=>[(0,l.Wm)("div",{class:"v-snackbar__actions"},[a.actions()])]})],activator:a.activator})})),(0,h.F)({},p)}});var j=a(5869);const E={class:"container"},P=(0,l._)("div",{class:"text-subtitle-1 text-black"},"使用者名稱",-1),T={class:"text-black text-subtitle-1 d-flex align-center justify-space-between"},$={class:"text-caption text-decoration-underline text-white",href:"#",rel:"noopener noreferrer",target:"_blank"},J=(0,l._)("br",null,null,-1);function F(e,t,a,s,o,n){return(0,l.wg)(),(0,l.j4)(g.K,null,{default:(0,l.w5)((()=>[(0,l.Wm)(p._,{class:"mx-auto px-8 py-11","max-width":"344",color:"white"},{default:(0,l.w5)((()=>[(0,l._)("div",E,[(0,l.Wm)(v.O,{modelValue:e.form,"onUpdate:modelValue":t[3]||(t[3]=t=>e.form=t),onSubmit:(0,d.iM)(n.onSubmit,["prevent"])},{default:(0,l.w5)((()=>[P,(0,l.Wm)(j.h,{modelValue:e.account,"onUpdate:modelValue":t[0]||(t[0]=t=>e.account=t),readonly:e.loading,rules:[n.required],class:"mb-2",clearable:"",placeholder:"Enter your UserName"},null,8,["modelValue","readonly","rules"]),(0,l._)("div",T,[(0,l.Uk)(" 密碼 "),(0,l.wy)((0,l._)("a",$," 忘記密碼?",512),[[d.F8,!1]])]),(0,l.Wm)(j.h,{"append-inner-icon":e.visible?"mdi-eye-off":"mdi-eye",type:e.visible?"text":"password",modelValue:e.password,"onUpdate:modelValue":t[1]||(t[1]=t=>e.password=t),readonly:e.loading,rules:[n.required],"onClick:appendInner":t[2]||(t[2]=t=>e.visible=!e.visible),placeholder:"Enter your password"},null,8,["append-inner-icon","type","modelValue","readonly","rules"]),J,(0,l.Wm)(D,{timeout:2e3,color:"blue-grey",rounded:"pill"},{activator:(0,l.w5)((({props:t})=>[(0,l.Wm)(m.T,(0,l.dG)({rounded:"pill",disabled:!e.form,loading:e.loading,block:"",color:"success",size:"large",type:"submit",variant:"elevated",class:"mb-3"},t),{default:(0,l.w5)((()=>[(0,l.Uk)(" 登入 ")])),_:2},1040,["disabled","loading"])])),_:1})])),_:1},8,["modelValue","onSubmit"])])])),_:1})])),_:1})}a(6314),a(7658);var q=a(4161);const B=a(8082);var G={data:()=>({form:!1,salt:"kowkoww151s5ww",account:null,password:null,token:"",visible:!1,loading:!1}),methods:{onSubmit(){const e=this.password+this.salt,t=B.MD5(e).toString();this.form&&(this.loading=!0,q.Z.post("http://20.89.131.34:443/api/v1/account/login",{username:this.account,password:t}).then((e=>{if(console.log(e),this.loading=!1,200==e.status){const t=e.data.fishesID["002"],a=[],l=[],s=[],o=e.data.fishesID["003"],n=[],i=[],r=[];Object.hasOwn(e.data.fishesID,"002")&&Object.entries(t).forEach((([e,t])=>{1===t?l.push(e):2===t?s.push(e):a.push(e)})),Object.hasOwn(e.data.fishesID,"003")&&Object.entries(o).forEach((([e,t])=>{1===t?i.push(e):2===t?r.push(e):n.push(e)})),localStorage.setItem("fish20",JSON.stringify(a)),localStorage.setItem("fish21",JSON.stringify(l)),localStorage.setItem("fish22",JSON.stringify(s)),localStorage.setItem("fish30",JSON.stringify(n)),localStorage.setItem("fish31",JSON.stringify(i)),localStorage.setItem("fish32",JSON.stringify(r)),localStorage.setItem("UserName",e.data.username),localStorage.setItem("UserEmail",e.data.email),localStorage.setItem("UserLevel",e.data.level),localStorage.setItem("UserSection",e.data.section);const c=e.data.registrationTime,u=new Date(c),d=u.getFullYear(),m=u.getMonth()+1,p=u.getDate(),v=u.getHours(),g=u.getMinutes(),b=u.getSeconds(),f=`${d}-${m}-${p} ${v}:${g}:${b}`;localStorage.setItem("registrationTime",f),document.cookie="token="+e.data.token+"; path=/",window.location.replace("http://20.89.131.34:443/static/dist/home")}else alert("登入失敗")})).catch((e=>{console.log(e),this.loading=!1,alert("登入失敗")})))},required(e){return!!e||"Field is required"}}},L=a(89);const M=(0,L.Z)(G,[["render",F]]);var Z=M,z={name:"login",components:{loginnavbar:u.Z,logininput:Z},data:()=>({})};const Y=(0,L.Z)(z,[["render",c]]);var A=Y}}]);
//# sourceMappingURL=188.b649d2dd.js.map
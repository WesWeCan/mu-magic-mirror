import{d,T as u,o as r,c,w as i,a,u as s,Z as p,g as f,t as _,h as w,b as t,e as g,n as y,f as b}from"./app-CF6YtaFa.js";import{_ as k}from"./GuestLayout.vue_vue_type_script_setup_true_lang-Bt2sWjBc.js";import{_ as h,a as x,b as V}from"./TextInput.vue_vue_type_script_setup_true_lang-DjTgoFpL.js";import{P as v}from"./PrimaryButton-CUyurG4Z.js";import"./ApplicationLogo-mI1NmMUM.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const B=t("div",{class:"mb-4 text-sm text-gray-600"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),N={key:0,class:"mb-4 font-medium text-sm text-green-600"},P={class:"flex items-center justify-end mt-4"},q=d({__name:"ForgotPassword",props:{status:{}},setup(C){const e=u({email:""}),m=()=>{e.post(route("password.email"))};return(o,l)=>(r(),c(k,null,{default:i(()=>[a(s(p),{title:"Forgot Password"}),B,o.status?(r(),f("div",N,_(o.status),1)):w("",!0),t("form",{onSubmit:b(m,["prevent"])},[t("div",null,[a(h,{for:"email",value:"Email"}),a(x,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":l[0]||(l[0]=n=>s(e).email=n),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),a(V,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),t("div",P,[a(v,{class:y({"opacity-25":s(e).processing}),disabled:s(e).processing},{default:i(()=>[g(" Email Password Reset Link ")]),_:1},8,["class","disabled"])])],32)]),_:1}))}});export{q as default};

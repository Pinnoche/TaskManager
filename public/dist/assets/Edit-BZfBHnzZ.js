import{T as f,l as g,o as h,c as x,w as r,b as a,t as _,a as s,u as e,Z as b,e as y,d as k,n as v,j as w}from"./app-NNbMdg4f.js";import{_ as V}from"./AuthenticatedLayout-D5EahcJ5.js";import{_ as m,a as n,b as u}from"./TextInput-BTn_Qm1Q.js";import{P as N}from"./PrimaryButton-DWoBgJGC.js";import"./ApplicationLogo-D4fRK7d5.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const q={class:"font-semibold text-xl text-gray-800 leading-tight"},B={class:"py-12"},S={class:"max-w-7xl mx-auto mb-2 sm:px-6 lg:px-8"},T={class:"mt-4"},$={class:"mt-4"},j={class:"flex items-center justify-end mt-4"},U={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},C=a("button",{class:"bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"},"View your Tasks",-1),O={__name:"Edit",props:{task:{type:Object,requied:!0},pageName:{type:String,default:""}},setup(d){const i=d,t=f({author:"",title:"",description:""});g(()=>{t.author=i.task.author,t.title=i.task.title,t.description=i.task.description});const c=()=>{t.patch(route("tasks.update",i.task.id))};return(p,o)=>(h(),x(V,null,{header:r(()=>[a("h2",q,_(d.pageName),1)]),default:r(()=>[s(e(b),{title:d.pageName},null,8,["title"]),a("div",B,[a("div",S,[a("form",{class:"bg-white overflow-hidden shadow-sm sm:rounded-lg sm:px-6 sm:py-2 lg:px-8 lg:py-3",onSubmit:y(c,["prevent"])},[a("div",null,[s(m,{for:"author",value:"Author:"}),s(n,{id:"author",type:"text",class:"mt-1 block w-full",modelValue:e(t).author,"onUpdate:modelValue":o[0]||(o[0]=l=>e(t).author=l),required:""},null,8,["modelValue"]),s(u,{class:"mt-2",message:e(t).errors.author},null,8,["message"])]),a("div",T,[s(m,{for:"title",value:"Title:"}),s(n,{id:"title",type:"text",class:"mt-1 block w-full",modelValue:e(t).title,"onUpdate:modelValue":o[1]||(o[1]=l=>e(t).title=l),required:""},null,8,["modelValue"]),s(u,{class:"mt-2",message:e(t).errors.title},null,8,["message"])]),a("div",$,[s(m,{for:"description",value:"Desciprtion"}),s(n,{id:"description",type:"text",class:"mt-1 block w-full",modelValue:e(t).description,"onUpdate:modelValue":o[2]||(o[2]=l=>e(t).description=l),required:""},null,8,["modelValue"]),s(u,{class:"mt-2",message:e(t).errors.description},null,8,["message"])]),a("div",j,[s(N,{class:v(["ms-4 bg-blue-500",{"opacity-25":e(t).processing}]),disabled:e(t).processing},{default:r(()=>[k(" Submit ")]),_:1},8,["class","disabled"])])],32)]),a("div",U,[s(e(w),{href:p.route("tasks.index")},{default:r(()=>[C]),_:1},8,["href"])])])]),_:1}))}};export{O as default};
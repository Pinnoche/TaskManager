import{T as p,o as f,f as g,a as e,u as t,w as i,F as _,Z as x,b as a,t as h,e as b,n as y,d as v,j as w}from"./app-NNbMdg4f.js";import{_ as V}from"./AuthenticatedLayout-D5EahcJ5.js";import{_ as r,a as m,b as d}from"./TextInput-BTn_Qm1Q.js";import{P as k}from"./PrimaryButton-DWoBgJGC.js";import"./ApplicationLogo-D4fRK7d5.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const N={class:"font-semibold text-xl text-gray-800 leading-tight"},B={class:"py-12"},S={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},T={class:"mt-4"},$={class:"mt-4"},q={class:"flex items-center justify-end mt-4"},C={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},U=a("button",{class:"bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"},"View your Tasks",-1),E={__name:"Create",props:{pageName:{type:String,default:""}},setup(n){const s=p({author:"",title:"",description:""}),u=()=>{s.post(route("tasks.store"))};return(c,l)=>(f(),g(_,null,[e(t(x),{title:n.pageName},null,8,["title"]),e(V,null,{header:i(()=>[a("h2",N,h(n.pageName),1)]),default:i(()=>[a("div",B,[a("div",S,[a("form",{class:"bg-white overflow-hidden shadow-sm sm:rounded-lg sm:px-6 sm:py-2 lg:px-8 lg:py-3 mb-2",onSubmit:b(u,["prevent"])},[a("div",null,[e(r,{for:"author",value:"Author:"}),e(m,{id:"author",type:"text",class:"mt-1 block w-full",modelValue:t(s).author,"onUpdate:modelValue":l[0]||(l[0]=o=>t(s).author=o),required:""},null,8,["modelValue"]),e(d,{class:"mt-2",message:t(s).errors.author},null,8,["message"])]),a("div",T,[e(r,{for:"title",value:"Title:"}),e(m,{id:"title",type:"text",class:"mt-1 block w-full",modelValue:t(s).title,"onUpdate:modelValue":l[1]||(l[1]=o=>t(s).title=o),required:""},null,8,["modelValue"]),e(d,{class:"mt-2",message:t(s).errors.title},null,8,["message"])]),a("div",$,[e(r,{for:"description",value:"Desciprtion"}),e(m,{id:"description",type:"text",class:"mt-1 block w-full",modelValue:t(s).description,"onUpdate:modelValue":l[2]||(l[2]=o=>t(s).description=o),required:""},null,8,["modelValue"]),e(d,{class:"mt-2",message:t(s).errors.description},null,8,["message"])]),a("div",q,[e(k,{class:y(["ms-4 bg-blue-500",{"opacity-25":t(s).processing}]),disabled:t(s).processing},{default:i(()=>[v(" Submit ")]),_:1},8,["class","disabled"])])],32)]),a("div",C,[e(t(w),{href:c.route("tasks.index")},{default:i(()=>[U]),_:1},8,["href"])])])]),_:1})],64))}};export{E as default};

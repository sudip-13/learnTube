"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[910],{44092:function(e,t,a){a.d(t,{DarkModeProvider:function(){return n},v:function(){return r}});var s=a(57437),l=a(2265);let o=(0,l.createContext)(),n=e=>{let{children:t}=e,[a,n]=(0,l.useState)(!1);return(0,s.jsx)(o.Provider,{value:{isDarkMode:a,toggleDarkMode:()=>{n(e=>!e),console.log("toggle dark mode ",a)}},children:t})},r=()=>(0,l.useContext)(o)},70910:function(e,t,a){a.d(t,{default:function(){return q}});var s=a(89483),l=a(57437),o=a(2265),n=a(56452),r=a(44092),i=a(16463),c=a(39828),h=a(7486),d=a(87611),g=a(75676);let x=e=>(0,l.jsx)("svg",{"aria-hidden":"true",focusable:"false",height:"1em",role:"presentation",viewBox:"0 0 24 24",width:"1em",...e,children:(0,l.jsx)("path",{d:"M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z",fill:"currentColor"})}),m=e=>(0,l.jsx)("svg",{"aria-hidden":"true",focusable:"false",height:"1em",role:"presentation",viewBox:"0 0 24 24",width:"1em",...e,children:(0,l.jsxs)("g",{fill:"currentColor",children:[(0,l.jsx)("path",{d:"M19 12a7 7 0 11-7-7 7 7 0 017 7z"}),(0,l.jsx)("path",{d:"M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z"})]})});var p=a(17916),u=a(52419),w=a(92692),v=a(77372),f=a(2428),j=a(76208),b=a(54509),y=a(24077),F=a(95256),C=a(81887),N=a(41234),k=a(47971),S=a(21432),z=a(56884),M=a(19593),L=a.n(M);function T(){let e=(0,s._)(["\nquery Exam($email:String){\n    getIsCreator(email: $email) {\n        isCreator\n      }\n      getSearchBarDetails(email: $email) {\n        searchHistory\n        videoDescription\n        videoTags\n        videoTitle\n      }\n      getNotifications(email: $email) {\n        email\n        avatar\n        channelLogo\n        isRead\n        message\n        notificationId\n        timeStamp\n        videoId\n        videoThumbnail\n      }\n  }\n"]);return T=function(){return e},e}let H=(0,S.Ps)(T());var q=e=>{let{query:t}=e,{isDarkMode:a,toggleDarkMode:s}=(0,r.v)(),[S,M]=(0,o.useState)(""),[T,q]=(0,o.useState)(""),[B,I]=(0,o.useState)(""),[V,A]=(0,o.useState)(""),[P,Q]=(0,o.useState)(""),[E,O]=(0,o.useState)(""),[D,R]=(0,o.useState)(),[W,J]=(0,o.useState)(!1),[_,Z]=(0,o.useState)(!1),[$,K]=(0,o.useState)(!1),[U,Y]=(0,o.useState)(!1),[G,X]=(0,o.useState)(0),[ee,et]=(0,o.useState)(!1),[ea,es]=(0,o.useState)(""),[el,eo]=(0,o.useState)([]),[en,er]=(0,o.useState)([]),[ei,ec]=(0,o.useState)(""),[eh,ed]=(0,o.useState)(!1),[eg,ex]=(0,o.useState)(null),[em,ep]=(0,o.useState)(""),eu=(0,i.useRouter)(),[ew]=(0,n.F_)(p.I8),[ev]=(0,n.QJ)(p.I8),[ef]=(0,n.Gn)(p.I8),[ej]=(0,n.UQ)(p.I8),{isOpen:eb,onOpen:ey,onClose:eF,onOpenChange:eC}=(0,j.q)(),eN=(0,o.useCallback)(()=>{s()},[s]),{loading:ek,error:eS,data:ez,refetch:eM}=(0,z.a)(H,{variables:{email:T}}),eL=()=>{J(!W)},eT=(0,o.useCallback)(async()=>{D?eu.push("/creator/upload"):eu.push("/creator/register")},[D]),eH=(0,o.useCallback)(async()=>{if(!P)return console.log("Input field cannot be empty"),"Blank input";if("name"===E)try{let e=await ef({displayName:P});console.log(e),e&&(et(!0),setTimeout(()=>{window.location.reload()},2e3))}catch(e){console.log("Firebase error",e)}else if("avatar"===E)try{let e=await ef({photoURL:P});console.log(e),e&&(et(!0),setTimeout(()=>{window.location.reload()},2e3))}catch(e){console.log("Firebase error",e)}else if("password"!==E)return"No profile found";else try{let e=await ej(P);console.log(e),e&&(et(!0),setTimeout(()=>{window.location.reload()},2e3))}catch(e){console.log("Firebase error",e)}},[P,E]),eq=(0,o.useCallback)(async e=>{"nameChange"===e?(O("name"),A("Change your name"),ey()):"passwordChange"===e?(O("password"),A("Change your password"),ey()):"avatarChange"===e&&(O("avatar"),A("Change your avatar"),ey())},[V,E]),eB=(0,o.useCallback)(async()=>{try{let e=await ev();console.log(e),e&&setTimeout(()=>{window.location.reload()},2e3)}catch(e){console.log("firebase error",e)}},[]),eI=e=>{let t=parseInt(e,10);if(isNaN(t))return"Invalid timestamp";let a=new Date,s=new Date(t),l=Math.floor((a.getTime()-s.getTime())/1e3);return l<0?"Future timestamp":l<60?"".concat(l," seconds ago"):l<3600?"".concat(Math.floor(l/60)," minutes ago"):l<86400?"".concat(Math.floor(l/3600)," hours ago"):"".concat(Math.floor(l/86400)," days ago")},eV=(0,o.useCallback)(async e=>{if(!e)return"Blank input";try{let t=e||ea,a=await fetch("".concat("http://localhost:9063","/features/addtosearchhistory"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:T,searchString:t})});await a.json(),a.ok&&console.log("Search string saved successfully");let s="".concat("http://localhost:3000","/search/").concat(t);eu.push(s)}catch(e){console.error("Failed to fetch",e)}},[T,ea]),eA=(0,o.useCallback)(async e=>{try{let t=await fetch("".concat("http://localhost:9063","/features/removefromsearchHistory"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:T,searchString:e})}),a=await t.json();console.log(a),eM(),t.ok&&(console.log("search String deleted successfully"),eM())}catch(e){console.error("Failed to fetch",e)}},[T]),eP=async()=>{K(!$)},eQ=async()=>{ec(""),ed(!0),eg&&await eg.start()},eE=async()=>{ed(!1),eV(ei),eg&&await eg.stop(),Z(!1)},eO=(0,o.useCallback)(async()=>{eV(ei),Z(!_),eh&&eE(),eQ()},[eh,ei,eV,eQ,Z,eE]),eD=(0,o.useCallback)(async()=>{try{let e=await fetch("".concat("http://localhost:9063","/features/clearallnotification"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:T})}),t=await e.json();console.log(t),eM(),e.ok&&(Y(!0),setTimeout(()=>{Y(!1)},3e3))}catch(e){console.error("Failed to clear all notifications",e)}},[T,Y]),eR=(0,o.useCallback)(async e=>{try{let t=await fetch("".concat("http://localhost:9063","/features/markasread"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:T,notificationId:e})}),a=await t.json();console.log(a),eM()}catch(e){console.error("Failed to clear all notifications",e)}},[T]);return(0,o.useEffect)(()=>{let e=()=>{J(!1),Z(!1)};return W||_?document.addEventListener("click",e):document.removeEventListener("click",e),()=>{document.removeEventListener("click",e)}},[W,_,Z,J]),(0,o.useEffect)(()=>{ew&&(M(ew.displayName||""),I(ew.photoURL||""),q(ew.email||""),eM()),ez&&""!==T&&(R(ez.getIsCreator[0].isCreator),eo(ez.getSearchBarDetails),er(ez.getNotifications),eM()),en&&(X(en.filter(e=>!e.isRead).length),eM())},[ew,R,X,D,ez,eo,en,er]),(0,o.useEffect)(()=>{let e=e=>{es(e.target.value.toLowerCase())},t=document.querySelector("[data-search-content]");if(t)return t.addEventListener("input",e),()=>{t.removeEventListener("input",e)}},[es]),(0,o.useEffect)(()=>{if(!eg){if("webkitSpeechRecognition"in window){let e=new window.webkitSpeechRecognition;e.continuous=!0,e.lang="en-US",ex(e)}else console.error("Speech recognition is not supported in this browser.")}eg&&(eg.onresult=e=>{console.log("onresult:",e),eg.stop(),setTimeout(()=>{eV(e.results[0][0].transcript)},1e3),ec(e.results[0][0].transcript),ed(!1)})},[eg,ec,ed,eV]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(L(),{}),(0,l.jsx)("nav",{id:"navbar",className:"p-3 ".concat(a?"bg-white":""," z-50 shadow-md shadow-gray-700 fixed top-0 backdrop-blur-md backdrop-brightness-0 w-full"),children:(0,l.jsxs)("ul",{className:"flex gap-6 items-center",children:[(0,l.jsx)("li",{className:"ml-5 ".concat(a?"hover:bg-gray-300":"hover:bg-gray-700"," rounded-full p-1 cursor-pointer"),children:(0,l.jsx)(c.e,{color:"warning",delay:700,showArrow:!0,content:"Menu",children:(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:a?"#000000":"#FFFFFF",children:[(0,l.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,l.jsx)("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"})]})})}),(0,l.jsxs)("li",{className:"flex justify-center items-center gap-3 ml-8",children:[(0,l.jsx)("img",{height:50,width:50,src:"https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/05/Mastercard_2019_logo.svg-e1659036851269.png?auto=format&q=60&fit=max&w=930",alt:""}),(0,l.jsx)("p",{className:"font-bold ".concat(a?"text-black":""," text-xl"),children:"LearnTube"})]}),(0,l.jsxs)("li",{className:"flex ml-32 mr-20",children:[(0,l.jsxs)("svg",{className:"absolute mt-2.5 ml-2",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:a?"#000000":"#FFFFFF",children:[(0,l.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,l.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})]}),(0,l.jsx)(c.e,{color:"warning",delay:700,showArrow:!0,content:"Search with voice",children:(0,l.jsxs)("svg",{onClick:()=>eO(),className:"absolute mt-2.5 ".concat(a?"hover:bg-gray-300":"hover:bg-gray-700"," rounded-full hover:p-1"),style:{marginLeft:"560px"},xmlns:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:a?"#000000":"#FFFFFF",children:[(0,l.jsxs)("g",{children:[(0,l.jsx)("rect",{fill:"none",height:"24",width:"24"}),(0,l.jsx)("rect",{fill:"none",height:"24",width:"24"}),(0,l.jsx)("rect",{fill:"none",height:"24",width:"24"})]}),(0,l.jsxs)("g",{children:[(0,l.jsx)("g",{}),(0,l.jsxs)("g",{children:[(0,l.jsx)("path",{d:"M12,14c1.66,0,3-1.34,3-3V5c0-1.66-1.34-3-3-3S9,3.34,9,5v6C9,12.66,10.34,14,12,14z"}),(0,l.jsx)("path",{d:"M17,11c0,2.76-2.24,5-5,5s-5-2.24-5-5H5c0,3.53,2.61,6.43,6,6.92V21h2v-3.08c3.39-0.49,6-3.39,6-6.92H17z"})]})]})]})}),(0,l.jsx)(c.e,{color:"warning",delay:700,showArrow:!0,content:"Search a content",children:(0,l.jsx)("input",{style:{width:"600px"},type:"search",id:"search-content",value:t,onChange:e=>ep(e.target.value),placeholder:"Search here... or [ctrl+k]",className:"bg-inherit border ".concat(a?"text-black":"text-white"," border-gray-700 rounded-medium p-2 px-10 w-96"),onClick:()=>{eL()},"data-search-content":!0,onKeyPress:e=>{"Enter"===e.key&&eV(ea)}})}),(0,l.jsx)(c.e,{color:"warning",delay:700,showArrow:!0,content:"Click to search",children:(0,l.jsx)(h.A,{className:"font-semibold text-white ml-4",color:"success",onClick:()=>eV(ea),children:"Search"})})]}),(0,l.jsx)("li",{children:(0,l.jsx)(c.e,{color:"warning",delay:700,showArrow:!0,content:"Toggle theme",children:(0,l.jsx)("button",{children:(0,l.jsx)(d.i,{onClick:eN,defaultSelected:!0,size:"lg",color:"success",startContent:(0,l.jsx)(m,{}),endContent:(0,l.jsx)(x,{})})})})}),(0,l.jsx)("li",{onClick:()=>eT(),className:"rounded-full ".concat(a?"hover:bg-gray-300":"hover:bg-gray-700"," p-1 cursor-pointer"),children:(0,l.jsx)(c.e,{color:"warning",delay:700,showArrow:!0,content:"Create video",children:(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"36px",viewBox:"0 0 24 24",width:"36px",fill:a?"#000000":"#FFFFFF",children:[(0,l.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,l.jsx)("path",{d:"M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM15 16H5V8h10v8zm-6-1h2v-2h2v-2h-2V9H9v2H7v2h2z"})]})})}),(0,l.jsx)("li",{onClick:eP,className:"rounded-full px-1 ".concat(a?"hover:bg-gray-300":"hover:bg-gray-700","  p-0.5 cursor-pointer"),children:(0,l.jsx)(c.e,{color:"warning",delay:700,showArrow:!0,content:"Notifications",children:(0,l.jsx)(g.O,{content:G,shape:"circle",color:"danger",children:(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"28px",viewBox:"0 0 24 24",width:"28px",fill:a?"#000000":"#FFFFFF",children:[(0,l.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,l.jsx)("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"})]})})})}),(0,l.jsx)("li",{className:"cursor-pointer",children:(0,l.jsxs)(u.F,{placement:"bottom-end",children:[(0,l.jsx)(w.S,{children:(0,l.jsx)(h.A,{isIconOnly:!0,variant:"light",children:B?(0,l.jsx)("img",{className:"h-8 w-8 rounded-full",src:B,alt:""}):(0,l.jsx)("img",{className:"h-8 w-8 rounded-full",src:"https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg",alt:""})})}),ew?(0,l.jsxs)(v.a,{"aria-label":"Profile Actions",variant:"flat",children:[(0,l.jsxs)(f.W,{className:"h-14 gap-2",children:[(0,l.jsxs)("p",{className:"font-semibold",children:["Signed in as: ",S]}),(0,l.jsx)("p",{className:"font-semibold",children:T})]},"profile"),(0,l.jsx)(f.W,{onPress:()=>eq("nameChange"),children:"Change username"},"userName"),(0,l.jsx)(f.W,{onPress:()=>eq("passwordChange"),children:"Change password"},"password"),(0,l.jsx)(f.W,{onPress:()=>eq("avatarChange"),children:"Change avatar"},"avatar"),(0,l.jsx)(f.W,{children:"Switch account"},"Switch-account"),(0,l.jsx)(f.W,{onPress:()=>eB(),color:"danger",children:"Log Out"},"logout")]}):(0,l.jsxs)(v.a,{"aria-label":"Profile Actions",variant:"flat",children:[(0,l.jsxs)(f.W,{className:"h-14 gap-2",children:[(0,l.jsx)("p",{className:"font-semibold",children:"You are not signed in"}),(0,l.jsx)("p",{className:"font-semibold text-gray-500 text-small",children:"for better experience please click on below button"})]},"profile"),(0,l.jsx)(f.W,{onPress:e=>{eu.push("/login")},className:"text-center font-extrabold",color:"primary",children:"Login"},"login")]})]})})]})}),(0,l.jsx)(b.R,{backdrop:"opaque",size:"3xl",isOpen:eb,onClose:eF,motionProps:{variants:{enter:{y:0,opacity:1,transition:{duration:.3,ease:"easeInOut"}},exit:{y:-20,opacity:0,transition:{duration:.2,ease:"easeIn"}}}},children:(0,l.jsx)(y.A,{children:e=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(F.k,{id:"model-header",className:"flex flex-col gap-1",children:V}),(0,l.jsxs)(C.I,{children:[(0,l.jsx)(N.Y,{onChange:e=>Q(e.target.value),classNames:{base:"max-w-full h-10",mainWrapper:"h-full",input:"text-small",inputWrapper:"h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20"},placeholder:"Enter something here...",size:"sm",type:"search"}),(0,l.jsx)("p",{className:"text-red-500",children:"This operation have to performs page reload."})]}),(0,l.jsxs)(k.R,{children:[(0,l.jsx)(h.A,{color:"danger",variant:"light",onPress:e,children:"Close"}),ee?(0,l.jsx)(h.A,{isLoading:!0,color:"primary",onPress:()=>eH(),children:"Changing..."}):(0,l.jsx)(h.A,{color:"primary",onPress:()=>eH(),children:"Change"})]})]})})}),W&&el&&(0,l.jsx)("div",{className:"z-50 top-20 rounded-md fixed shadow-lg shadow-gray-500 ".concat(a?"bg-white":"bg-gray-700"),style:{marginLeft:"440px",marginRight:"480px",width:"700px"},children:(0,l.jsx)("div",{className:"flex cursor-pointer",children:(0,l.jsx)("div",{className:"flex flex-col",children:""===ea?Array.from(new Set(el.flatMap(e=>e.searchHistory))).map((e,t)=>(0,l.jsxs)("div",{className:"flex ",children:[(0,l.jsxs)("div",{className:"flex ".concat(a?"hover:bg-gray-300":"hover:bg-gray-700"),children:[(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"mt-2 ml-2",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:a?"#000000":"#FFFFFF",children:[(0,l.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,l.jsx)("path",{d:"M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.25 2.52.77-1.28-3.52-2.09V8z"})]}),(0,l.jsx)("p",{className:"p-2 ".concat(a?"text-black":"text-white"),style:{width:"630px"},onClick:()=>eV(e),children:e})]}),(0,l.jsxs)("svg",{onClick:()=>eA(e),className:"ml-20 mt-1 hover:bg-red-500  p-1 rounded-full absolute right-2",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:a?"#000000":"#FFFFFF",children:[(0,l.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,l.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"})]})]},t)):el.filter(e=>e.videoTitle.toLowerCase().includes(ea.toLowerCase())||e.videoDescription.toLowerCase().includes(ea.toLowerCase())||e.videoTags.some(e=>e.toLowerCase().includes(ea.toLowerCase()))).map((e,t)=>(0,l.jsx)("div",{children:(0,l.jsxs)("div",{className:"flex ".concat(a?"hover:bg-gray-300":"hover:bg-gray-700"),children:[(0,l.jsxs)("svg",{className:"mt-2 ml-2",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:a?"#000000":"#FFFFFF",children:[(0,l.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,l.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})]}),(0,l.jsx)("p",{className:"p-2 ".concat(a?"text-black":"text-white"),onClick:()=>eV(e.videoTitle),children:e.videoTitle})]})},t))})})}),_&&eg&&(0,l.jsxs)("div",{id:"voicesearch-container",children:[(0,l.jsx)("div",{style:{width:"100vw",height:"100vh",position:"fixed",top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",backdropFilter:"blur(5px)",zIndex:9998}}),(0,l.jsxs)("div",{id:"hs-custom-backdrop-modal",style:{width:"900px",height:"500px",marginLeft:"400px",zIndex:9999},className:"hs-overlay z-50 ".concat(a?"text-black bg-white":"text-white bg-gray-700"," fixed top-32 overflow-x-hidden overflow-y-auto pointer-events-auto rounded-xl"),children:[(0,l.jsxs)("svg",{onClick:eE,className:"right-2 top-2 absolute p-2 ".concat(a?"hover:bg-gray-300":"hover:bg-gray-800"," cursor-pointer rounded-full"),xmlns:"http://www.w3.org/2000/svg",height:"48px",viewBox:"0 0 24 24",width:"48px",fill:a?"#000000":"#FFFFFF",children:[(0,l.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,l.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"})]}),(0,l.jsxs)("div",{className:"flex mr-10 mt-28 ml-10",children:[eh?(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"240",fill:"#eb4034",viewBox:"0 -960 960 960",width:"240",children:(0,l.jsx)("path",{d:"M480.12-400q-51.04 0-86.58-35.46Q358-470.91 358-522v-242q0-51.09 35.42-86.54Q428.84-886 479.88-886q51.04 0 86.58 35.46Q602-815.09 602-764v242q0 51.09-35.42 86.54Q531.16-400 480.12-400ZM436-96v-128.85q-113-13.31-185.5-98.42Q178-408.39 178-522h86q0 90 63.18 152T480-308q89.64 0 152.82-62Q696-432 696-522h86q0 114.39-73.5 199.12Q635-238.16 522-224.85V-96h-86Z"})}):(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"240",fill:a?"#000000":"#FFFFFF",viewBox:"0 -960 960 960",width:"240",children:(0,l.jsx)("path",{d:"M480.12-400q-51.04 0-86.58-35.46Q358-470.91 358-522v-242q0-51.09 35.42-86.54Q428.84-886 479.88-886q51.04 0 86.58 35.46Q602-815.09 602-764v242q0 51.09-35.42 86.54Q531.16-400 480.12-400ZM436-96v-128.85q-113-13.31-185.5-98.42Q178-408.39 178-522h86q0 90 63.18 152T480-308q89.64 0 152.82-62Q696-432 696-522h86q0 114.39-73.5 199.12Q635-238.16 522-224.85V-96h-86Z"})}),eg?(0,l.jsx)("p",{className:"text-4xl mt-20 ml-20",children:ei||"Listening ..."}):(0,l.jsx)("p",{className:"text-4xl mt-20 ml-20",children:"Your browser does not support speech recognition or allow recognition"})]})]})]}),(0,l.jsx)("div",{id:"notification-container",className:"",children:$&&(0,l.jsxs)("div",{className:"z-50 ".concat(a?"text-black bg-white shadow-gray-500 shadow-md":"text-white bg-gray-800"," scrollbar-w-2 scrollbar-thumb-rounded-full scrollbar-track-bg-gray-300 scrollbar-thumb-bg-gray-500 scrollbar-track-rounded-full overflow-y-auto top-20 fixed rounded-md right-10"),style:{width:"30rem",height:"40rem"},children:[en.map((e,t)=>(0,l.jsx)("div",{id:"notification",className:" cursor-pointer ".concat(a?"hover:bg-gray-300":"hover:bg-gray-700"," pb-5 p-1"),children:(0,l.jsxs)("div",{onClick:()=>eR(e.notificationId),className:"flex ml-3 mr-3 mt-3",children:[(0,l.jsx)("img",{className:"h-10 rounded-full mt-5",src:e.avatar,alt:""}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{className:"text-sm ml-3 max-w-64 mt-5",children:e.message}),(0,l.jsxs)("span",{className:"flex",children:[(0,l.jsx)("span",{className:"ml-3 text-sm text-gray-500",children:eI(e.timeStamp)}),!e.isRead&&(0,l.jsx)(c.e,{color:"warning",delay:700,showArrow:!0,content:"unread massage",children:(0,l.jsx)("svg",{className:"ml-3 animate-ping mt-1.5 fill-red-600",xmlns:"http://www.w3.org/2000/svg",height:"11",viewBox:"0 -960 960 960",width:"11",children:(0,l.jsx)("path",{d:"M480-200q-117 0-198.5-81.5T200-480q0-117 81.5-198.5T480-760q117 0 198.5 81.5T760-480q0 117-81.5 198.5T480-200Z"})})})]})]}),(0,l.jsx)("img",{className:"h-20 absolute right-2 rounded-lg",src:e.videoThumbnail,alt:""})]})},t)),(0,l.jsx)(c.e,{color:"warning",delay:700,showArrow:!0,content:"clear all",children:U?(0,l.jsxs)("svg",{className:"p-2 rounded-full ".concat(a?"bg-gray-300":"bg-gray-700","  fixed bottom-20 ml-52"),xmlns:"http://www.w3.org/2000/svg",height:"48px",viewBox:"0 0 24 24",width:"48px",fill:a?"#000000":"#FFFFFF",children:[(0,l.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,l.jsx)("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"})]}):(0,l.jsxs)("svg",{onClick:eD,className:"p-2 rounded-full ".concat(a?"bg-gray-300":"bg-gray-700","  fixed bottom-20 ml-52"),xmlns:"http://www.w3.org/2000/svg",height:"48px",viewBox:"0 0 24 24",width:"48px",fill:a?"#000000":"#FFFFFF",children:[(0,l.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,l.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"})]})})]})})]})}},17916:function(e,t,a){a.d(t,{$x:function(){return h},I8:function(){return r},UP:function(){return d},Xg:function(){return c},cd:function(){return g}});var s=a(15236),l=a(5186),o=a(99854);let n=(0,s.ZF)({apiKey:"AIzaSyBm3wHNJBJlnYhBQBWZkVFjLcufqcA5FtA",authDomain:"learntube-4326c.firebaseapp.com",projectId:"learntube-4326c",storageBucket:"learntube-4326c.appspot.com",messagingSenderId:"312956664065",appId:"1:312956664065:web:27127dbb7e611c8e4b8300",measurementId:"G-KDEL369JSH"}),r=(0,l.v0)(n),i=(0,o.cF)(n,"gs://learntube-4326c.appspot.com"),c=async e=>{let t=(0,o.iH)(i,"upload/thumbnail/".concat(Date.now(),"-").concat(e.name));return await (0,o.KV)(t,e)},h=async e=>{let t=(0,o.iH)(i,"upload/video/".concat(Date.now(),"-").concat(e.name));return await (0,o.KV)(t,e)},d=async e=>{let t=new l.lI(r,"recaptcha-container",{});return t.render(),(0,l.$g)(r,e,t)},g=async e=>await (0,o.Jt)((0,o.iH)(i,e))}}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3251],{8775:function(e,t,a){Promise.resolve().then(a.bind(a,41291))},41291:function(e,t,a){"use strict";a.r(t);var l=a(89483),s=a(57437),n=a(17916),r=a(2265),i=a(41234),o=a(2281),c=a(41506),d=a(85872),u=a(8127),m=a(5440),x=a(66486),h=a(7486),p=a(73890),v=a(21432),f=a(56884),g=a(56452),b=a(95956),j=a(16463),w=a(19593),N=a.n(w);a(44193);var y=a(44092);function C(){let e=(0,l._)(["\nquery Exam($email:String){\n    getCourseName(email:$email) {\n      courseNames\n    } \n  }\n"]);return C=function(){return e},e}let k=(0,v.Ps)(C());t.default=()=>{let e=(0,j.useRouter)(),{isDarkMode:t}=(0,y.v)(),[a,l]=(0,r.useState)(!1),[v,w]=(0,r.useState)(!1),[C,S]=(0,r.useState)(!1),[F,z]=(0,r.useState)(null),[H,V]=(0,r.useState)(null),[T,I]=(0,r.useState)(null),[M,B]=(0,r.useState)(!1),[L]=(0,g.F_)(n.I8),[P,Y]=(0,r.useState)(""),[E,U]=(0,r.useState)(""),[D,J]=(0,r.useState)(""),[O,_]=(0,r.useState)(""),[A,$]=(0,r.useState)(""),[R,X]=(0,r.useState)(""),[q,K]=(0,r.useState)(""),[W,Z]=(0,r.useState)(""),[G,Q]=(0,r.useState)([]),[ee,et]=(0,r.useState)(!1),[ea,el]=(0,r.useState)(!1),[es,en]=(0,r.useState)(""),[er,ei]=(0,r.useState)(""),{loading:eo,error:ec,data:ed}=(0,f.a)(k,{variables:{email:P}}),eu=(0,r.useCallback)(async()=>{console.log(es,er,P),el(!0);try{let t=await fetch("".concat("https://learntube-2.onrender.com","/video/uploadvideo"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:P,courseName:A,courseDescription:R,price:E,videoTitle:O,videoDescription:D,videoUrl:W,videoTags:q,videoThumbnail:es,courseThumbUrl:er})});console.log(t),t.ok?(b.Am.success("Video uploaded",{position:"top-center",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),el(!1),setTimeout(()=>{e.push("/")},1e3)):b.Am.error("Video upload failed",{position:"top-center",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}catch(e){console.log("Internal server error",e)}},[P,et,er,A,es,R,O,D,E,W,q,H]),em=(0,r.useCallback)(async()=>{try{if(T){et(!0);let e=(await (0,n.Xg)(T)).ref.fullPath,t=await (0,n.cd)(e);ei(t),console.log(t)}et(!0);let e=(await (0,n.Xg)(H)).ref.fullPath,t=await (0,n.cd)(e);en(t);let a=(await (0,n.$x)(F)).ref.fullPath,l=await (0,n.cd)(a);Z(l),et(!1),B(!0)}catch(e){throw Error("Firebase upload failed",e.message)}},[F,W,Z,ei,en,et]);return(0,r.useEffect)(()=>{L&&Y(L.email||""),ed&&""!==P&&Q(ed.getCourseName.map(e=>({label:e.courseNames,value:e.courseNames})))},[L,ed,P,Q]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(N(),{}),(0,s.jsx)(b.Ix,{}),(0,s.jsxs)("div",{style:{height:"1000px"},className:"flex ".concat(t?"bg-white":"bg-black"),children:[(0,s.jsxs)("div",{className:"ml-10 ",style:{maxWidth:"600px"},children:[(0,s.jsx)("h1",{className:"text-3xl font-bold mt-20 ".concat(t?"text-zinc-700":"text-orange-500"," "),children:"Upload You video"}),(0,s.jsx)("p",{className:"mt-10 text-lg ".concat(t?"text-zinc-500":"text-orange-200"),children:"You need to export the video content as a vertical over-under of equidistant projection before you upload it to YouTube. The aspect ratio should be at 1:1, and the resolution should be from 5120\xd75120 to 8192\xd78192. Use square pixels. The video should have a horizontal layout and fill out the whole player window."}),(0,s.jsx)("p",{className:"mt-10 text-lg ".concat(t?"text-zinc-500":"text-orange-200"),children:"By default, you can upload videos that are up to 15 minutes long. Verified accounts can upload videos longer than 15 minutes."}),(0,s.jsx)("p",{className:"mt-10 text-lg ".concat(t?"text-zinc-500":"text-orange-200"),children:"The simplest way to avoid YouTube copyright claims is to soundtrack your content with copyright-free music that you know you have permission to use. Check out Uppbeat, a free music platform for creators, and download the best free music for YouTube. Its safe, free and you wont get any copyright claims!"})]}),(0,s.jsx)("div",{className:"border shadow-lg shadow-orange-400 border-gray-700 p-7 rounded-lg absolute",style:{marginTop:"40px",width:"550px",marginLeft:"800px"},children:C?(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"py-5 px-2",children:(0,s.jsxs)("div",{className:"max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl",children:[(0,s.jsx)("div",{className:"md:flex",children:(0,s.jsx)("div",{className:"w-full p-3",children:(0,s.jsxs)("div",{className:"relative h-36 rounded-lg border-dashed border-2 border-orange-600 flex justify-center items-center",children:[(0,s.jsx)("div",{className:"absolute",children:(0,s.jsxs)("div",{className:"flex flex-col items-center",children:[(0,s.jsx)("i",{className:"fa fa-folder-open fa-4x text-blue-700",children:(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 24 24",height:"90px",viewBox:"0 0 24 24",width:"90px",fill:"#fc6203",children:[(0,s.jsx)("g",{children:(0,s.jsx)("rect",{fill:"none",height:"24",width:"24"})}),(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M7,9l1.41,1.41L11,7.83V16h2V7.83l2.59,2.58L17,9l-5-5L7,9z"})})]})}),(0,s.jsx)("span",{className:"block text-gray-400 font-normal",children:"Upload video thumbnail"})]})}),(0,s.jsx)("input",{accept:".png,.avif,.jpeg,.jpg",type:"file",className:"h-full w-full opacity-0",name:"",onChange:e=>{V(e.target.files&&e.target.files[0])}})]})})}),(0,s.jsxs)("div",{className:"ml-3 flex",children:[ee&&(0,s.jsx)(p.W,{color:"warning",size:"sm",isIndeterminate:!0,"aria-label":"Loading...",className:"max-w-40 mt-3 mr-5"}),H&&(0,s.jsxs)("div",{className:"text-center flex ml-5",children:[(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"mt-1 mr-2",height:"18px",viewBox:"0 0 24 24",width:"18px",fill:"#FFFFFF",children:[(0,s.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,s.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"})]}),(0,s.jsx)("p",{className:"text-gray-500 mr-2 text-sm mt-1",children:H.name})]})]})]})}),(0,s.jsx)("div",{className:"py-5 px-2",children:(0,s.jsxs)("div",{className:"max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl",children:[(0,s.jsx)("div",{className:"md:flex",children:(0,s.jsx)("div",{className:"w-full p-3",children:(0,s.jsxs)("div",{className:"relative h-36 rounded-lg border-dashed border-2 border-orange-600 flex justify-center items-center",children:[(0,s.jsx)("div",{className:"absolute",children:(0,s.jsxs)("div",{className:"flex flex-col items-center",children:[(0,s.jsx)("i",{className:"fa fa-folder-open fa-4x text-blue-700",children:(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 24 24",height:"90px",viewBox:"0 0 24 24",width:"90px",fill:"#fc6203",children:[(0,s.jsx)("g",{children:(0,s.jsx)("rect",{fill:"none",height:"24",width:"24"})}),(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M7,9l1.41,1.41L11,7.83V16h2V7.83l2.59,2.58L17,9l-5-5L7,9z"})})]})}),(0,s.jsx)("span",{className:"block text-gray-400 font-normal",children:"Upload your video"})]})}),(0,s.jsx)("input",{accept:".mp4,.avi,.mov,.mkv",type:"file",className:"h-full w-full opacity-0",name:"",onChange:e=>{z(e.target.files&&e.target.files[0])}})]})})}),(0,s.jsxs)("div",{className:"ml-3 flex",children:[ee&&(0,s.jsx)(p.W,{color:"warning",size:"sm",isIndeterminate:!0,"aria-label":"Loading...",className:"max-w-40 mt-3 mr-5"}),F&&(0,s.jsxs)("div",{className:"text-center flex",children:[(0,s.jsxs)("svg",{className:"mt-1 mr-2",xmlns:"http://www.w3.org/2000/svg",height:"18px",viewBox:"0 0 24 24",width:"18px",fill:"#FFFFFF",children:[(0,s.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,s.jsx)("path",{d:"M15 8v8H5V8h10m1-2H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7c0-.55-.45-1-1-1z"})]}),(0,s.jsx)("p",{className:"text-gray-500 text-sm mt-1",children:F.name})]})]})]})}),M?(0,s.jsxs)(h.A,{className:"mt-5 ml-48 flex font-semibold",color:"danger",onClick:eu,children:["Submit",ea&&(0,s.jsx)(x.c,{color:"success",size:"sm"})]}):(0,s.jsxs)(h.A,{className:"mt-5 ml-48 flex text-white font-semibold",color:"warning",onClick:em,children:[(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#FFFFFF",children:[(0,s.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,s.jsx)("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3zM8 13h2.55v3h2.9v-3H16l-4-4z"})]}),"Upload",ee&&(0,s.jsx)(x.c,{color:"danger",size:"sm"})]})]}):(0,s.jsxs)("div",{children:[(0,s.jsx)(i.Y,{color:"primary",className:"mb-5 ".concat(t?"text-black":"text-white"),type:"text",variant:"underlined",value:O,onChange:e=>_(e.target.value),label:"Video title"}),(0,s.jsx)(i.Y,{color:"primary",className:"mb-5 ".concat(t?"text-black":"text-white"),type:"text",variant:"underlined",label:"Video description",value:D,onChange:e=>J(e.target.value)}),(0,s.jsxs)(o.X,{className:"mb-5",label:"Upload on your existing course",orientation:"horizontal",children:[(0,s.jsx)(c.J,{onClick:()=>l(!0),value:"yes",children:"Yes"}),(0,s.jsx)(c.J,{onClick:()=>l(!1),value:"no",children:"No"})]}),a?(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"flex mb-5 w-full flex-wrap md:flex-nowrap",children:(0,s.jsx)(d.g,{variant:"underlined",label:"Select a course",className:"max-w-xs",value:A,onChange:e=>$(e.target.value),children:G.map(e=>(0,s.jsx)(u.R,{value:e.value,children:e.label},e.value))})}),(0,s.jsx)(m.Y,{variant:"underlined",label:"Tags",labelPlacement:"outside",placeholder:"Enter your desired tags",className:"col-span-12 md:col-span-6 mb-6 md:mb-0"})]}):(0,s.jsxs)("div",{children:[(0,s.jsx)(i.Y,{color:"primary",className:"mb-5 ".concat(t?"text-black":"text-white"),type:"text",value:A,onChange:e=>$(e.target.value),variant:"underlined",label:"Course name"}),(0,s.jsx)(i.Y,{color:"primary",className:"mb-5 ".concat(t?"text-black":"text-white"),type:"text",onChange:e=>X(e.target.value),variant:"underlined",label:"Course description"}),(0,s.jsxs)("div",{className:"max-w-xs mb-5",children:[(0,s.jsx)("label",{className:"mb-1 block dark:text-neutral-400 text-sm font-medium text-neutral-500",children:"Upload course thumbnail"}),(0,s.jsx)("input",{id:"example1",accept:".png,.avif,.jpeg,.jpg",onChange:e=>{I(e.target.files&&e.target.files[0])},type:"file",className:"mt-2 block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-teal-500 file:py-2 file:px-4 file:text-sm file:font-semibold text-neutral-500 hover:file:bg-teal-700 focus:outline-none disabled:pointer-events-none disabled:opacity-60"})]}),(0,s.jsxs)(o.X,{className:"mb-5",label:"Is this a paid course",orientation:"horizontal",children:[(0,s.jsx)(c.J,{onClick:()=>w(!0),value:"paid",children:"Yes"}),(0,s.jsx)(c.J,{onClick:()=>w(!1),value:"free",children:"No"})]}),v&&(0,s.jsx)(i.Y,{className:"mb-5",value:E,onChange:e=>U(e.target.value),type:"text",variant:"underlined",label:"Course price"}),(0,s.jsx)(m.Y,{color:"primary",className:"col-span-12 md:col-span-6 mb-6 md:mb-0 ".concat(t?"text-black":"text-white"),variant:"underlined",label:"Tags",labelPlacement:"outside",placeholder:"Enter your desired tags, separated by commas",value:q,onChange:e=>{K(e.target.value.split(",").map(e=>e.trim()).join(", "))}})]}),(0,s.jsxs)(h.A,{onPress:()=>S(!0),className:"mt-10 ml-48 flex",color:"danger",children:["Next",(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#FFFFFF",children:[(0,s.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,s.jsx)("path",{d:"M22 12l-4-4v3H3v2h15v3l4-4z"})]})]})]})})]})]})}},44092:function(e,t,a){"use strict";a.d(t,{DarkModeProvider:function(){return r},v:function(){return i}});var l=a(57437),s=a(2265);let n=(0,s.createContext)(),r=e=>{let{children:t}=e,[a,r]=(0,s.useState)(!1),[i,o]=(0,s.useState)("");return(0,l.jsx)(n.Provider,{value:{isDarkMode:a,savePreviousVideoId:e=>{o(e)},prevVideoId:i,toggleDarkMode:()=>{r(e=>!e),console.log("toggle dark mode ",a)}},children:t})},i=()=>(0,s.useContext)(n)},17916:function(e,t,a){"use strict";a.d(t,{$x:function(){return d},I8:function(){return i},UP:function(){return u},Xg:function(){return c},cd:function(){return m}});var l=a(15236),s=a(5186),n=a(99854);let r=(0,l.ZF)({apiKey:"AIzaSyBm3wHNJBJlnYhBQBWZkVFjLcufqcA5FtA",authDomain:"learntube-4326c.firebaseapp.com",projectId:"learntube-4326c",storageBucket:"learntube-4326c.appspot.com",messagingSenderId:"312956664065",appId:"1:312956664065:web:27127dbb7e611c8e4b8300",measurementId:"G-KDEL369JSH"}),i=(0,s.v0)(r),o=(0,n.cF)(r,"gs://learntube-4326c.appspot.com"),c=async e=>{let t=(0,n.iH)(o,"upload/thumbnail/".concat(Date.now(),"-").concat(e.name));return await (0,n.KV)(t,e)},d=async e=>{let t=(0,n.iH)(o,"upload/video/".concat(Date.now(),"-").concat(e.name));return await (0,n.KV)(t,e)},u=async e=>{let t=new s.lI(i,"recaptcha-container",{});return t.render(),(0,s.$g)(i,e,t)},m=async e=>await (0,n.Jt)((0,n.iH)(o,e))},16463:function(e,t,a){"use strict";var l=a(71169);a.o(l,"ServerInsertedHTMLContext")&&a.d(t,{ServerInsertedHTMLContext:function(){return l.ServerInsertedHTMLContext}}),a.o(l,"useRouter")&&a.d(t,{useRouter:function(){return l.useRouter}})},44193:function(){},1144:function(e,t,a){"use strict";a.d(t,{Z:function(){return n}});var l=a(20357),s={};function n(e,t,...a){var r;let i=t?` [${t}]`:" ",o=`[Next UI]${i}: ${e}`;if("undefined"!=typeof console&&!s[o]&&(s[o]=!0,(null==(r=null==l?void 0:l.env)?void 0:r.NODE_ENV)!=="production"))return console.warn(o,a)}},60543:function(e,t,a){"use strict";a.d(t,{t:function(){return s}});var l=a(2265);function s(e={}){let{rerender:t=!1,delay:a=0}=e,s=(0,l.useRef)(!1),[n,r]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{s.current=!0;let e=null;return t&&(a>0?e=setTimeout(()=>{r(!0)},a):r(!0)),()=>{s.current=!1,t&&r(!1),e&&clearTimeout(e)}},[t]),[(0,l.useCallback)(()=>s.current,[]),n]}}},function(e){e.O(0,[8405,4050,5390,3109,6486,6452,9593,7486,4049,6323,9898,4241,5956,4306,4597,133,2971,7023,1744],function(){return e(e.s=8775)}),_N_E=e.O()}]);
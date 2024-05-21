(()=>{var e={};e.id=410,e.ids=[410],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},83122:e=>{"use strict";e.exports=require("undici")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},57310:e=>{"use strict";e.exports=require("url")},71542:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>d}),r(31830),r(35866),r(22790),r(19644);var a=r(23191),s=r(88716),o=r(37922),i=r.n(o),n=r(95231),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);r.d(t,l);let d=["",{children:["(sidebar)",{children:["history",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,31830)),"D:\\Learn Tube\\app\\(sidebar)\\history\\page.tsx"]}]},{}]},{"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,22790)),"D:\\Learn Tube\\app\\layout.tsx"],loading:[()=>Promise.resolve().then(r.bind(r,19644)),"D:\\Learn Tube\\app\\loading.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\Learn Tube\\app\\(sidebar)\\history\\page.tsx"],u="/(sidebar)/history/page",p={require:r,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/(sidebar)/history/page",pathname:"/history",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},43517:(e,t,r)=>{Promise.resolve().then(r.bind(r,24948))},24948:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>w});var a=r(10326),s=r(17577),o=r.n(s),i=r(4829),n=r(72058),l=r(27100),d=r(84521),c=r(84011),u=r(24293),p=r(56644),m=r(10983),h=r(78882),x=r(37761),b=r(98684),f=r.n(b);r(45996);var g=r(35047),v=r(14059);let y=(0,u.Ps)`

query history($email: String) {
    getHistory(email: $email) {
        courseID
        courseFees
        videoId
        videoTitle
        channelLogo
        videoPublishedAt
        videoViews
        videoThumbnail
        viewedAt
    }
  }

`,w=()=>{let e=(0,g.useRouter)(),[t,r]=o().useState(!1),[u,b]=(0,s.useState)(""),[w,j]=(0,s.useState)([]),[N]=(0,m.F_)(h.I8),{isDarkMode:P}=(0,x.v)(),{loading:_,error:T,data:q}=(0,p.a)(y,{variables:{email:u}}),k=e=>{let t=parseInt(e,10);if(isNaN(t))return"Invalid timestamp";let r=new Date,a=new Date(t),s=Math.floor((r.getTime()-a.getTime())/1e3);return s<0?"Future timestamp":s<60?`${s} seconds ago`:s<3600?`${Math.floor(s/60)} minutes ago`:s<86400?`${Math.floor(s/3600)} hours ago`:`${Math.floor(s/86400)} days ago`},S=(0,s.useCallback)(async(t,r,a)=>{try{let e=await fetch("https://learntube-2.onrender.com/features/addtohistory",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:u,videoId:t})}),r=await e.json();console.log("Video added to history:",r)}catch(e){console.error("Failed to add video to history:",e)}if(null===r){e.push(`/video/${t}`);return}try{let r=await fetch("https://learntube-2.onrender.com/api/isenroll",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:u,courseId:a})}),s=await r.json();!0===s.isEnrolled?e.push(`/video/${t}`):e.push(`/payment/${a}`)}catch(e){console.error("Failed to fetch enrollment status:",e)}},[u]);return(0,s.useEffect)(()=>{N&&b(N.email||""),q&&u&&(j(q.getHistory),console.table(q.getHistory))},[b,q,j,u,N]),(0,a.jsxs)(a.Fragment,{children:[a.jsx(f(),{}),a.jsx(i.default,{query:""}),a.jsx(n.default,{}),_?a.jsx("div",{className:`pt-52 pl-72 pb-10  min-h-screen ${P?"bg-white":"bg-black"}`,children:[...Array(6)].map((e,r)=>(0,a.jsxs)("div",{className:"flex mb-5",children:[a.jsx(v.X,{isLoaded:t,className:"w-72 mb-5 rounded-lg",children:a.jsx("div",{className:"h-36 w-full rounded-lg bg-gray-500"})}),(0,a.jsxs)("div",{className:"w-full flex items-center gap-3 ml-7",children:[a.jsx("div",{children:a.jsx(v.X,{className:"flex rounded-full w-12 h-12"})}),(0,a.jsxs)("div",{className:"w-full flex flex-col gap-2",children:[a.jsx(v.X,{className:"h-3 w-3/5 rounded-lg"}),a.jsx(v.X,{className:"h-3 w-4/5 rounded-lg"})]})]})]},r))}):(0,a.jsxs)("div",{className:`${P?"bg-white text-black":"bg-black text-white"} pb-10`,children:[a.jsx("nav",{className:"pt-24 pr-20",children:(0,a.jsxs)("ul",{className:"flex flex-row-reverse gap-10",children:[a.jsx(c.e,{color:"warning",delay:700,showArrow:!0,content:"Fiter videos",children:(0,a.jsxs)("li",{className:"flex ext-blue-500 text-blue-500 font-semibold hover:bg-blue-200 px-2 rounded-2xl cursor-default py-1",children:[(0,a.jsxs)("svg",{className:"mr-2",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#2e4bc9",children:[a.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),a.jsx("path",{d:"M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"})]}),"Filter"]})}),a.jsx(c.e,{color:"warning",delay:700,showArrow:!0,content:"Save watch history",children:a.jsx("li",{className:"z-0",children:a.jsx(l.i,{classNames:{base:(0,d.cn)("inline-flex flex-row-reverse w-full max-w-md items-center","justify-between cursor-pointer rounded-lg gap-2 p-2 ","data-[selected=true]:border-primary"),wrapper:"p-0 h-4 overflow-visible",thumb:(0,d.cn)("w-6 h-6 border-2 shadow-lg","group-data-[hover=true]:border-primary","group-data-[selected=true]:ml-6","group-data-[pressed=true]:w-7","group-data-[selected]:group-data-[pressed]:ml-4")}})})}),a.jsx("li",{className:"text-3xl font-bold text-amber-600",style:{marginRight:"680px"},children:"Watch History"})]})}),a.jsx("div",{className:"ml-80 ",children:(0,a.jsxs)("div",{id:"description-container",className:"",style:{marginTop:"40px"},children:[a.jsx("p",{className:"text-xl mb-7",children:"Today"}),w.map((e,t)=>(0,a.jsxs)("div",{id:"video-content",className:"flex mb-10",children:[a.jsx("img",{className:"transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-150 rounded-md",height:200,width:200,src:e.videoThumbnail,alt:"",onClick:()=>{S(e.videoId,e.courseFees,e.courseID)}}),(0,a.jsxs)("div",{className:"flex mt-10 ml-5 justify-center mr-10",children:[a.jsx("div",{children:a.jsx("img",{height:30,width:30,className:"rounded-full m-1",src:e.channelLogo,alt:""})}),(0,a.jsxs)("div",{className:"ml-3",children:[a.jsx("h1",{className:"font-bold",children:e.videoTitle})," ",(0,a.jsxs)("p",{className:"text-gray-500 text-small",children:[e.videoViews," views - ",k(e.videoPublishedAt)," "]})]})]})]},t))]})})]})]})}},31830:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>i,__esModule:()=>o,default:()=>n});var a=r(68570);let s=(0,a.createProxy)(String.raw`D:\Learn Tube\app\(sidebar)\history\page.tsx`),{__esModule:o,$$typeof:i}=s;s.default;let n=(0,a.createProxy)(String.raw`D:\Learn Tube\app\(sidebar)\history\page.tsx#default`)},45996:()=>{},14059:(e,t,r)=>{"use strict";r.d(t,{X:()=>u});var a=r(84521),s=(0,r(64723).tv)({slots:{base:["group","relative","overflow-hidden","bg-content3 dark:bg-content2","before:opacity-100","before:absolute","before:inset-0","before:-translate-x-full","before:animate-[shimmer_2s_infinite]","before:border-t","before:border-content4/30","before:bg-gradient-to-r","before:from-transparent","before:via-content4","dark:before:via-default-700/10","before:to-transparent","after:opacity-100","after:absolute","after:inset-0","after:-z-10","after:bg-content3","dark:after:bg-content2","data-[loaded=true]:!bg-transparent","data-[loaded=true]:before:opacity-0 data-[loaded=true]:before:animate-none","data-[loaded=true]:after:opacity-0"],content:["opacity-0","group-data-[loaded=true]:opacity-100"]},variants:{disableAnimation:{true:{base:"before:animate-none before:transition-none after:transition-none",content:"transition-none"},false:{base:"transition-background !duration-300 before:transition-opacity before:!duration-300",content:"transition-opacity motion-reduce:transition-none !duration-300"}}},defaultVariants:{disableAnimation:!1}}),o=r(50214),i=r(88672),n=r(17236),l=r(17577),d=r(10326),c=(0,a.Gp)((e,t)=>{let{Component:r,children:c,getSkeletonProps:u,getContentProps:p}=function(e){let[t,r]=(0,a.oe)(e,s.variantKeys),{as:d,children:c,isLoaded:u=!1,className:p,classNames:m,...h}=t,x=(0,l.useMemo)(()=>s({...r}),[(0,o.Xx)(r),c]),b=(0,i.W)(null==m?void 0:m.base,p);return{Component:d||"div",children:c,slots:x,classNames:m,getSkeletonProps:(e={})=>({"data-loaded":(0,n.PB)(u),className:x.base({class:(0,i.W)(b,null==e?void 0:e.className)}),...h}),getContentProps:(e={})=>({className:x.content({class:(0,i.W)(null==m?void 0:m.content,null==e?void 0:e.className)})})}}({...e});return(0,d.jsx)(r,{ref:t,...u(),children:(0,d.jsx)("div",{...p(),children:c})})});c.displayName="NextUI.Skeleton";var u=c}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[948,806,621,371,624,983,898,641,805,508,229,140,58],()=>r(71542));module.exports=a})();
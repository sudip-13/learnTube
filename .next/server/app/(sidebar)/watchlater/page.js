(()=>{var e={};e.id=524,e.ids=[524],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},83122:e=>{"use strict";e.exports=require("undici")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},57310:e=>{"use strict";e.exports=require("url")},35451:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>o.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>d}),a(41689),a(35866),a(22790),a(19644);var r=a(23191),s=a(88716),n=a(37922),o=a.n(n),i=a(95231),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);a.d(t,l);let d=["",{children:["(sidebar)",{children:["watchlater",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,41689)),"D:\\Projects\\Project Management\\learntube-1.0\\app\\(sidebar)\\watchlater\\page.tsx"]}]},{}]},{"not-found":[()=>Promise.resolve().then(a.t.bind(a,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,22790)),"D:\\Projects\\Project Management\\learntube-1.0\\app\\layout.tsx"],loading:[()=>Promise.resolve().then(a.bind(a,19644)),"D:\\Projects\\Project Management\\learntube-1.0\\app\\loading.tsx"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\Projects\\Project Management\\learntube-1.0\\app\\(sidebar)\\watchlater\\page.tsx"],u="/(sidebar)/watchlater/page",m={require:a,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/(sidebar)/watchlater/page",pathname:"/watchlater",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},36145:(e,t,a)=>{Promise.resolve().then(a.bind(a,19383))},19383:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>v});var r=a(10326),s=a(17577),n=a.n(s),o=a(35779),i=a(72058),l=a(35047),d=a(14059),c=a(84011),u=a(78882),m=a(10983),p=a(24293),h=a(56644),x=a(37761),g=a(98684),b=a.n(g);a(45996);let f=(0,p.Ps)`

query playlist($email: String) {
    getWatchLater(email: $email) {
        courseID
        courseFees
        videoId
        videoTitle
        channelLogo
        videoPublishedAt
        videoViews
        videoThumbnail
    }
  }

`,v=()=>{let{isDarkMode:e}=(0,x.v)(),[t,a]=n().useState(!1),p=(0,l.useRouter)(),[g,v]=(0,s.useState)(""),[j,y]=(0,s.useState)([]),[w]=(0,m.F_)(u.I8),{loading:P,error:N,data:_}=(0,h.a)(f,{variables:{email:g}}),M=e=>{let t=parseInt(e,10);if(isNaN(t))return"Invalid timestamp";let a=new Date,r=new Date(t),s=Math.floor((a.getTime()-r.getTime())/1e3);return s<0?"Future timestamp":s<60?`${s} seconds ago`:s<3600?`${Math.floor(s/60)} minutes ago`:s<86400?`${Math.floor(s/3600)} hours ago`:`${Math.floor(s/86400)} days ago`},q=(0,s.useCallback)(async(e,t,a)=>{try{let t=await fetch("http://localhost:9063/features/addtohistory",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:g,videoId:e})}),a=await t.json();console.log("Video added to history:",a)}catch(e){console.error("Failed to add video to history:",e)}null===t&&p.push(`/video/${e}`);try{let t=await fetch("http://localhost:9063/api/isenroll",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:g,courseId:a})}),r=await t.json();!0===r.isEnrolled?p.push(`/video/${e}`):p.push(`/payment/${a}`)}catch(e){console.error("Failed to fetch enrollment status:",e)}},[g]);return(0,s.useEffect)(()=>{w&&v(w.email||""),_&&g&&(y(_.getWatchLater),console.log(_.getWatchLater))},[v,_,w,y]),(0,r.jsxs)(r.Fragment,{children:[r.jsx(b(),{}),r.jsx(o.default,{query:""}),r.jsx(i.default,{}),P?r.jsx("div",{className:`pt-40 pl-72 pb-10  min-h-screen ${e?"bg-white":"bg-black"}`,children:[...Array(6)].map((e,a)=>(0,r.jsxs)("div",{className:"flex mb-5",children:[r.jsx(d.X,{isLoaded:t,className:"w-72 mb-5 rounded-lg",children:r.jsx("div",{className:"h-36 w-full rounded-lg bg-gray-500"})}),(0,r.jsxs)("div",{className:"w-full flex items-center gap-3 ml-7",children:[r.jsx("div",{children:r.jsx(d.X,{className:"flex rounded-full w-12 h-12"})}),(0,r.jsxs)("div",{className:"w-full flex flex-col gap-2",children:[r.jsx(d.X,{className:"h-3 w-3/5 rounded-lg"}),r.jsx(d.X,{className:"h-3 w-4/5 rounded-lg"})]})]})]},a))}):(0,r.jsxs)("div",{className:`${e?"bg-white text-black":"bg-black text-white"} pb-10`,children:[r.jsx("nav",{className:"pt-20 pr-20 ",children:(0,r.jsxs)("ul",{className:"flex flex-row-reverse gap-10",children:[r.jsx(c.e,{color:"warning",delay:700,showArrow:!0,content:"clear all",children:r.jsx("li",{className:`flex ext-blue-500 ${e?"hover:bg-gray-300":"hover:bg-gray-700"} font-semibold rounded-full cursor-default`,children:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"m-2",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#e30b13",children:[r.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),r.jsx("path",{d:"M5 13h14v-2H5v2zm-2 4h14v-2H3v2zM7 7v2h14V7H7z"})]})})}),r.jsx("li",{className:"text-3xl font-bold text-amber-600",style:{marginRight:"820px"},children:"Watch later list"})]})}),r.jsx("div",{className:"ml-80 ",children:r.jsx("div",{id:"description-container",className:"",style:{marginTop:"40px"},children:j.map((e,t)=>(0,r.jsxs)("div",{id:"video-content",className:"flex mb-10",children:[r.jsx("img",{className:"transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-150 rounded-md",height:200,width:200,src:e.videoThumbnail,onClick:()=>{q(e.videoId,e.courseFees,e.courseID)},alt:""}),(0,r.jsxs)("div",{className:"flex mt-10 ml-5 justify-center mr-10",children:[r.jsx("div",{children:r.jsx("img",{height:30,width:30,className:"rounded-full m-1",src:e.channelLogo,alt:""})}),(0,r.jsxs)("div",{className:"ml-3",children:[r.jsx("h1",{className:"font-bold",children:e.videoTitle})," ",(0,r.jsxs)("p",{className:"text-gray-500 text-sm",children:[e.videoViews," views - ",M(e.videoPublishedAt)," "]})]})]})]},t))})})]})]})}},41689:(e,t,a)=>{"use strict";a.r(t),a.d(t,{$$typeof:()=>o,__esModule:()=>n,default:()=>i});var r=a(68570);let s=(0,r.createProxy)(String.raw`D:\Projects\Project Management\learntube-1.0\app\(sidebar)\watchlater\page.tsx`),{__esModule:n,$$typeof:o}=s;s.default;let i=(0,r.createProxy)(String.raw`D:\Projects\Project Management\learntube-1.0\app\(sidebar)\watchlater\page.tsx#default`)},45996:()=>{},14059:(e,t,a)=>{"use strict";a.d(t,{X:()=>u});var r=a(84521),s=(0,a(64723).tv)({slots:{base:["group","relative","overflow-hidden","bg-content3 dark:bg-content2","before:opacity-100","before:absolute","before:inset-0","before:-translate-x-full","before:animate-[shimmer_2s_infinite]","before:border-t","before:border-content4/30","before:bg-gradient-to-r","before:from-transparent","before:via-content4","dark:before:via-default-700/10","before:to-transparent","after:opacity-100","after:absolute","after:inset-0","after:-z-10","after:bg-content3","dark:after:bg-content2","data-[loaded=true]:!bg-transparent","data-[loaded=true]:before:opacity-0 data-[loaded=true]:before:animate-none","data-[loaded=true]:after:opacity-0"],content:["opacity-0","group-data-[loaded=true]:opacity-100"]},variants:{disableAnimation:{true:{base:"before:animate-none before:transition-none after:transition-none",content:"transition-none"},false:{base:"transition-background !duration-300 before:transition-opacity before:!duration-300",content:"transition-opacity motion-reduce:transition-none !duration-300"}}},defaultVariants:{disableAnimation:!1}}),n=a(50214),o=a(88672),i=a(17236),l=a(17577),d=a(10326),c=(0,r.Gp)((e,t)=>{let{Component:a,children:c,getSkeletonProps:u,getContentProps:m}=function(e){let[t,a]=(0,r.oe)(e,s.variantKeys),{as:d,children:c,isLoaded:u=!1,className:m,classNames:p,...h}=t,x=(0,l.useMemo)(()=>s({...a}),[(0,n.Xx)(a),c]),g=(0,o.W)(null==p?void 0:p.base,m);return{Component:d||"div",children:c,slots:x,classNames:p,getSkeletonProps:(e={})=>({"data-loaded":(0,i.PB)(u),className:x.base({class:(0,o.W)(g,null==e?void 0:e.className)}),...h}),getContentProps:(e={})=>({className:x.content({class:(0,o.W)(null==p?void 0:p.content,null==e?void 0:e.className)})})}}({...e});return(0,d.jsx)(a,{ref:t,...u(),children:(0,d.jsx)("div",{...m(),children:c})})});c.displayName="NextUI.Skeleton";var u=c}};var t=require("../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[948,806,621,7,898,983,641,805,508,331,497,58],()=>a(35451));module.exports=r})();
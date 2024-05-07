(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3524],{11978:function(e,t,a){Promise.resolve().then(a.bind(a,97354))},97354:function(e,t,a){"use strict";a.r(t);var n=a(89483),o=a(57437),s=a(2265),l=a(70910),i=a(82386),r=a(16463),c=a(89857),d=a(39828),u=a(17916),h=a(56452),m=a(21432),f=a(56884),b=a(44092),v=a(19593),x=a.n(v);function g(){let e=(0,n._)(["\n\nquery playlist($email: String) {\n    getWatchLater(email: $email) {\n        courseID\n        courseFees\n        videoId\n        videoTitle\n        channelLogo\n        videoPublishedAt\n        videoViews\n        videoThumbnail\n    }\n  }\n\n"]);return g=function(){return e},e}a(44193);let p=(0,m.Ps)(g());t.default=()=>{let{isDarkMode:e}=(0,b.v)(),[t,a]=s.useState(!1),n=(0,r.useRouter)(),[m,v]=(0,s.useState)(""),[g,j]=(0,s.useState)([]),[y]=(0,h.F_)(u.I8),{loading:N,error:w,data:k}=(0,f.a)(p,{variables:{email:m}}),T=e=>{let t=parseInt(e,10);if(isNaN(t))return"Invalid timestamp";let a=new Date,n=new Date(t),o=Math.floor((a.getTime()-n.getTime())/1e3);return o<0?"Future timestamp":o<60?"".concat(o," seconds ago"):o<3600?"".concat(Math.floor(o/60)," minutes ago"):o<86400?"".concat(Math.floor(o/3600)," hours ago"):"".concat(Math.floor(o/86400)," days ago")},I=(0,s.useCallback)(async(e,t,a)=>{try{let t=await fetch("".concat("http://localhost:9063","/features/addtohistory"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:m,videoId:e})}),a=await t.json();console.log("Video added to history:",a)}catch(e){console.error("Failed to add video to history:",e)}null===t&&n.push("/video/".concat(e));try{let t=await fetch("".concat("http://localhost:9063","/api/isenroll"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:m,courseId:a})}),o=await t.json();!0===o.isEnrolled?n.push("/video/".concat(e)):n.push("/payment/".concat(a))}catch(e){console.error("Failed to fetch enrollment status:",e)}},[m]);return(0,s.useEffect)(()=>{y&&v(y.email||""),k&&m&&(j(k.getWatchLater),console.log(k.getWatchLater))},[v,k,y,j]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(x(),{}),(0,o.jsx)(l.default,{query:""}),(0,o.jsx)(i.default,{}),N?(0,o.jsx)("div",{className:"pt-40 pl-72 pb-10  min-h-screen ".concat(e?"bg-white":"bg-black"),children:[...Array(6)].map((e,a)=>(0,o.jsxs)("div",{className:"flex mb-5",children:[(0,o.jsx)(c.X,{isLoaded:t,className:"w-72 mb-5 rounded-lg",children:(0,o.jsx)("div",{className:"h-36 w-full rounded-lg bg-gray-500"})}),(0,o.jsxs)("div",{className:"w-full flex items-center gap-3 ml-7",children:[(0,o.jsx)("div",{children:(0,o.jsx)(c.X,{className:"flex rounded-full w-12 h-12"})}),(0,o.jsxs)("div",{className:"w-full flex flex-col gap-2",children:[(0,o.jsx)(c.X,{className:"h-3 w-3/5 rounded-lg"}),(0,o.jsx)(c.X,{className:"h-3 w-4/5 rounded-lg"})]})]})]},a))}):(0,o.jsxs)("div",{className:"".concat(e?"bg-white text-black":"bg-black text-white"," pb-10"),children:[(0,o.jsx)("nav",{className:"pt-20 pr-20 ",children:(0,o.jsxs)("ul",{className:"flex flex-row-reverse gap-10",children:[(0,o.jsx)(d.e,{color:"warning",delay:700,showArrow:!0,content:"clear all",children:(0,o.jsx)("li",{className:"flex ext-blue-500 ".concat(e?"hover:bg-gray-300":"hover:bg-gray-700"," font-semibold rounded-full cursor-default"),children:(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"m-2",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#e30b13",children:[(0,o.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,o.jsx)("path",{d:"M5 13h14v-2H5v2zm-2 4h14v-2H3v2zM7 7v2h14V7H7z"})]})})}),(0,o.jsx)("li",{className:"text-3xl font-bold text-amber-600",style:{marginRight:"820px"},children:"Watch later list"})]})}),(0,o.jsx)("div",{className:"ml-80 ",children:(0,o.jsx)("div",{id:"description-container",className:"",style:{marginTop:"40px"},children:g.map((e,t)=>(0,o.jsxs)("div",{id:"video-content",className:"flex mb-10",children:[(0,o.jsx)("img",{className:"transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-150 rounded-md",height:200,width:200,src:e.videoThumbnail,onClick:()=>{I(e.videoId,e.courseFees,e.courseID)},alt:""}),(0,o.jsxs)("div",{className:"flex mt-10 ml-5 justify-center mr-10",children:[(0,o.jsx)("div",{children:(0,o.jsx)("img",{height:30,width:30,className:"rounded-full m-1",src:e.channelLogo,alt:""})}),(0,o.jsxs)("div",{className:"ml-3",children:[(0,o.jsx)("h1",{className:"font-bold",children:e.videoTitle})," ",(0,o.jsxs)("p",{className:"text-gray-500 text-sm",children:[e.videoViews," views - ",T(e.videoPublishedAt)," "]})]})]})]},t))})})]})]})}},44193:function(){},89857:function(e,t,a){"use strict";a.d(t,{X:function(){return u}});var n=a(4984),o=(0,a(9576).tv)({slots:{base:["group","relative","overflow-hidden","bg-content3 dark:bg-content2","before:opacity-100","before:absolute","before:inset-0","before:-translate-x-full","before:animate-[shimmer_2s_infinite]","before:border-t","before:border-content4/30","before:bg-gradient-to-r","before:from-transparent","before:via-content4","dark:before:via-default-700/10","before:to-transparent","after:opacity-100","after:absolute","after:inset-0","after:-z-10","after:bg-content3","dark:after:bg-content2","data-[loaded=true]:!bg-transparent","data-[loaded=true]:before:opacity-0 data-[loaded=true]:before:animate-none","data-[loaded=true]:after:opacity-0"],content:["opacity-0","group-data-[loaded=true]:opacity-100"]},variants:{disableAnimation:{true:{base:"before:animate-none before:transition-none after:transition-none",content:"transition-none"},false:{base:"transition-background !duration-300 before:transition-opacity before:!duration-300",content:"transition-opacity motion-reduce:transition-none !duration-300"}}},defaultVariants:{disableAnimation:!1}}),s=a(36222),l=a(65263),i=a(53640),r=a(2265),c=a(57437),d=(0,n.Gp)((e,t)=>{let{Component:a,children:d,getSkeletonProps:u,getContentProps:h}=function(e){let[t,a]=(0,n.oe)(e,o.variantKeys),{as:c,children:d,isLoaded:u=!1,className:h,classNames:m,...f}=t,b=(0,r.useMemo)(()=>o({...a}),[(0,s.Xx)(a),d]),v=(0,l.W)(null==m?void 0:m.base,h);return{Component:c||"div",children:d,slots:b,classNames:m,getSkeletonProps:(e={})=>({"data-loaded":(0,i.PB)(u),className:b.base({class:(0,l.W)(v,null==e?void 0:e.className)}),...f}),getContentProps:(e={})=>({className:b.content({class:(0,l.W)(null==m?void 0:m.content,null==e?void 0:e.className)})})}}({...e});return(0,c.jsx)(a,{ref:t,...u(),children:(0,c.jsx)("div",{...h(),children:d})})});d.displayName="NextUI.Skeleton";var u=d}},function(e){e.O(0,[8405,4050,2330,3109,9593,7486,6452,4049,9898,6323,4241,6048,8700,910,2386,2971,7023,1744],function(){return e(e.s=11978)}),_N_E=e.O()}]);
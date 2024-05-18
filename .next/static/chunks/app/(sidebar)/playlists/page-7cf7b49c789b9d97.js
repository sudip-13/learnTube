(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7914],{93287:function(e,t,a){Promise.resolve().then(a.bind(a,8627))},8627:function(e,t,a){"use strict";a.r(t);var n=a(89483),s=a(57437),o=a(2265),l=a(10282),i=a(82386),r=a(39828),d=a(17916),c=a(56452),u=a(21432),h=a(56884),m=a(44092),f=a(19593),b=a.n(f);a(44193);var x=a(16463),p=a(89857);function v(){let e=(0,n._)(["\n\nquery playlist($email: String) {\n    getPlaylist(email: $email) {\n        courseID\n        courseFees\n        videoId\n        videoTitle\n        channelLogo\n        videoPublishedAt\n        videoViews\n        videoThumbnail\n    }\n  }\n\n"]);return v=function(){return e},e}let g=(0,u.Ps)(v());t.default=()=>{let{isDarkMode:e}=(0,m.v)(),t=(0,x.useRouter)(),[a,n]=(0,o.useState)(""),[u,f]=(0,o.useState)([]),[v]=(0,c.F_)(d.I8),[y,j]=o.useState(!1),{loading:N,error:w,data:k}=(0,h.a)(g,{variables:{email:a}}),P=e=>{let t=parseInt(e,10);if(isNaN(t))return"Invalid timestamp";let a=new Date,n=new Date(t),s=Math.floor((a.getTime()-n.getTime())/1e3);return s<0?"Future timestamp":s<60?"".concat(s," seconds ago"):s<3600?"".concat(Math.floor(s/60)," minutes ago"):s<86400?"".concat(Math.floor(s/3600)," hours ago"):"".concat(Math.floor(s/86400)," days ago")},S=(0,o.useCallback)(async(e,n,s)=>{try{let t=await fetch("".concat("http://localhost:9063","/features/addtohistory"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a,videoId:e})}),n=await t.json();console.log("Video added to history:",n)}catch(e){console.error("Failed to add video to history:",e)}null===n&&t.push("/video/".concat(e));try{let n=await fetch("".concat("http://localhost:9063","/api/isenroll"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a,courseId:s})}),o=await n.json();!0===o.isEnrolled?t.push("/video/".concat(e)):t.push("/payment/".concat(s))}catch(e){console.error("Failed to fetch enrollment status:",e)}},[a]);return(0,o.useEffect)(()=>{v&&n(v.email||""),k&&a&&(f(k.getPlaylist),console.table(k.getPlaylist))},[n,k,v,f]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(b(),{}),(0,s.jsx)(l.default,{query:""}),(0,s.jsx)(i.default,{}),N?(0,s.jsx)("div",{className:"pt-40 pl-72 pb-10  min-h-screen ".concat(e?"bg-white":"bg-black"),children:[...Array(6)].map((e,t)=>(0,s.jsxs)("div",{className:"flex mb-5",children:[(0,s.jsx)(p.X,{isLoaded:y,className:"w-72 mb-5 rounded-lg",children:(0,s.jsx)("div",{className:"h-36 w-full rounded-lg bg-gray-500"})}),(0,s.jsxs)("div",{className:"w-full flex items-center gap-3 ml-7",children:[(0,s.jsx)("div",{children:(0,s.jsx)(p.X,{className:"flex rounded-full w-12 h-12"})}),(0,s.jsxs)("div",{className:"w-full flex flex-col gap-2",children:[(0,s.jsx)(p.X,{className:"h-3 w-3/5 rounded-lg"}),(0,s.jsx)(p.X,{className:"h-3 w-4/5 rounded-lg"})]})]})]},t))}):(0,s.jsxs)("div",{className:"".concat(e?"bg-white text-black":"bg-black text-white"," pb-10"),children:[(0,s.jsx)("nav",{className:"pt-20 pr-20",children:(0,s.jsxs)("ul",{className:"flex flex-row-reverse gap-10",children:[(0,s.jsx)(r.e,{color:"warning",delay:700,showArrow:!0,content:"Fiter platlist",children:(0,s.jsxs)("li",{className:"flex ext-blue-500 text-blue-500 font-semibold hover:bg-blue-200 px-2 rounded-2xl cursor-default py-1",children:[(0,s.jsxs)("svg",{className:"mr-2",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#2e4bc9",children:[(0,s.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,s.jsx)("path",{d:"M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"})]}),"Filter"]})}),(0,s.jsx)(r.e,{color:"warning",delay:700,showArrow:!0,content:"Manage your playlist",children:(0,s.jsx)("li",{className:"text-blue-500 font-semibold hover:bg-blue-200 px-2 rounded-2xl cursor-default py-1",children:"Manage"})}),(0,s.jsx)("li",{className:"text-3xl font-bold text-amber-600",style:{marginRight:"650px"},children:"Saved Playlists"})]})}),(0,s.jsx)("div",{className:"ml-80",children:(0,s.jsx)("div",{id:"description-container",className:"",style:{marginTop:"40px"},children:u.map((e,t)=>(0,s.jsxs)("div",{onClick:()=>{S(e.videoId,e.courseFees,e.courseID)},id:"video-content",className:"flex mb-10 cursor-pointer",children:[(0,s.jsx)("img",{className:"transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-150 rounded-md",height:200,width:200,src:e.videoThumbnail,alt:""}),(0,s.jsxs)("div",{className:"flex mt-10 ml-5 justify-center mr-10",children:[(0,s.jsx)("div",{children:(0,s.jsx)("img",{height:30,width:30,className:"rounded-full m-1",src:e.channelLogo,alt:""})}),(0,s.jsxs)("div",{className:"ml-3",children:[(0,s.jsx)("h1",{className:"font-bold",children:e.videoTitle})," ",(0,s.jsxs)("p",{className:"text-gray-500 text-sm",children:[e.videoViews," views - ",P(e.videoPublishedAt)," "]})]})]})]},t))})})]})]})}},44193:function(){},89857:function(e,t,a){"use strict";a.d(t,{X:function(){return u}});var n=a(4984),s=(0,a(9576).tv)({slots:{base:["group","relative","overflow-hidden","bg-content3 dark:bg-content2","before:opacity-100","before:absolute","before:inset-0","before:-translate-x-full","before:animate-[shimmer_2s_infinite]","before:border-t","before:border-content4/30","before:bg-gradient-to-r","before:from-transparent","before:via-content4","dark:before:via-default-700/10","before:to-transparent","after:opacity-100","after:absolute","after:inset-0","after:-z-10","after:bg-content3","dark:after:bg-content2","data-[loaded=true]:!bg-transparent","data-[loaded=true]:before:opacity-0 data-[loaded=true]:before:animate-none","data-[loaded=true]:after:opacity-0"],content:["opacity-0","group-data-[loaded=true]:opacity-100"]},variants:{disableAnimation:{true:{base:"before:animate-none before:transition-none after:transition-none",content:"transition-none"},false:{base:"transition-background !duration-300 before:transition-opacity before:!duration-300",content:"transition-opacity motion-reduce:transition-none !duration-300"}}},defaultVariants:{disableAnimation:!1}}),o=a(36222),l=a(65263),i=a(53640),r=a(2265),d=a(57437),c=(0,n.Gp)((e,t)=>{let{Component:a,children:c,getSkeletonProps:u,getContentProps:h}=function(e){let[t,a]=(0,n.oe)(e,s.variantKeys),{as:d,children:c,isLoaded:u=!1,className:h,classNames:m,...f}=t,b=(0,r.useMemo)(()=>s({...a}),[(0,o.Xx)(a),c]),x=(0,l.W)(null==m?void 0:m.base,h);return{Component:d||"div",children:c,slots:b,classNames:m,getSkeletonProps:(e={})=>({"data-loaded":(0,i.PB)(u),className:b.base({class:(0,l.W)(x,null==e?void 0:e.className)}),...f}),getContentProps:(e={})=>({className:b.content({class:(0,l.W)(null==m?void 0:m.content,null==e?void 0:e.className)})})}}({...e});return(0,d.jsx)(a,{ref:t,...u(),children:(0,d.jsx)("div",{...h(),children:c})})});c.displayName="NextUI.Skeleton";var u=c}},function(e){e.O(0,[8405,4050,4705,5390,3109,6486,6452,9593,7486,4049,6323,9898,4241,809,3393,7084,282,2386,2971,7023,1744],function(){return e(e.s=93287)}),_N_E=e.O()}]);
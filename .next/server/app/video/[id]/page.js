(()=>{var e={};e.id=150,e.ids=[150],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},83122:e=>{"use strict";e.exports=require("undici")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},57310:e=>{"use strict";e.exports=require("url")},86782:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>o.a,__next_app__:()=>h,originalPathname:()=>x,pages:()=>c,routeModule:()=>m,tree:()=>d}),a(69887),a(22790),a(19644),a(35866);var s=a(23191),i=a(88716),l=a(37922),o=a.n(l),r=a(95231),n={};for(let e in r)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>r[e]);a.d(t,n);let d=["",{children:["video",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,69887)),"D:\\Projects\\Project Management\\learntube-1.0\\app\\video\\[id]\\page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,22790)),"D:\\Projects\\Project Management\\learntube-1.0\\app\\layout.tsx"],loading:[()=>Promise.resolve().then(a.bind(a,19644)),"D:\\Projects\\Project Management\\learntube-1.0\\app\\loading.tsx"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\Projects\\Project Management\\learntube-1.0\\app\\video\\[id]\\page.tsx"],x="/video/[id]/page",h={require:a,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/video/[id]/page",pathname:"/video/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},85605:(e,t,a)=>{Promise.resolve().then(a.bind(a,31930))},31930:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>M});var s=a(10326),i=a(33265),l=a(35779),o=a(35047),r=a(64278),n=a(50898),d=a(18677),c=a(7902),x=a(96017),h=a(17577),m=a.n(h),u=a(74624),p=a(84011),y=a(24293),v=a(56644),g=a(10983),f=a(78882),j=a(37761),b=a(98684),w=a.n(b);a(45996);var k=a(14059),F=a(12453),N=a(7194);let S=(0,i.default)(async()=>{},{loadableGenerated:{modules:["app\\video\\[id]\\page.tsx -> lottie-react"]},ssr:!1}),P=(0,i.default)(async()=>{},{loadableGenerated:{modules:["app\\video\\[id]\\page.tsx -> react-player"]},ssr:!1}),V=(0,y.Ps)`
query GetVideoUrl( $email: String, $videoId: String,$channelId: String) {
    getFeatures(email: $email, videoID: $videoId, channelId: $channelId) {
        dislikedVideos
        hasInHistory
        haveInMyVideos
        haveInPlaylist
        haveInWatchLater
        isLiked
        subscribedchannel
        totalSubscriber
      }
      getAllVideoUrl {
        allEmail
        allThumbnailUrls
        allVideoTitles
        allVideoUrls
        channelLogo
        channelName
        courseFees
        courseId
        uploadAt
        videoId
        views
      }
      getVideoUrl (email: $email, videoID: $videoId) {
        channelId
        channelName
        channelLogo
        creatorEmail
        videoDescription
        videoPublishedAt
        videoTags
        videoTitle
        videoURl
        videoViews
      }
      getComments(videoID: $videoId) {
        count
        comments
        timeStamp
        user
        channelId
        channelLogo
      }
    }
`,M=({params:e})=>{let[t]=(0,g.F_)(f.I8),{isDarkMode:a}=(0,j.v)(),[i,y]=m().useState(!1),b=(0,o.useRouter)(),[M,A]=(0,h.useState)(!1),[T,$]=(0,h.useState)(!1),[I,D]=(0,h.useState)(!1),[C,B]=(0,h.useState)(!1),[z,E]=(0,h.useState)(""),[L,_]=(0,h.useState)(""),[O,G]=(0,h.useState)([]),[H,U]=(0,h.useState)([]),[q,R]=(0,h.useState)(""),[J,X]=(0,h.useState)(""),[W,Z]=(0,h.useState)(""),[K,Y]=(0,h.useState)(""),[Q,ee]=(0,h.useState)(""),[et,ea]=(0,h.useState)(""),[es,ei]=(0,h.useState)(""),[el,eo]=(0,h.useState)(""),[er,en]=(0,h.useState)(""),[ed,ec]=(0,h.useState)(!1),[ex,eh]=(0,h.useState)(""),[em,eu]=(0,h.useState)(""),[ep,ey]=(0,h.useState)(""),[ev,eg]=(0,h.useState)(0),ef=()=>{ec(!ed)},ej=()=>{A(!M)},eb=()=>{$(!T)},ew=decodeURIComponent(e.id),{loading:ek,error:eF,data:eN,refetch:eS}=(0,v.a)(V,{variables:{email:L,videoId:ew,channelId:ex}}),eP=e=>{let t=parseInt(e,10);if(isNaN(t))return"Invalid timestamp";let a=new Date,s=new Date(t),i=Math.floor((a.getTime()-s.getTime())/1e3);return i<0?"Future timestamp":i<60?`${i} seconds ago`:i<3600?`${Math.floor(i/60)} minutes ago`:i<86400?`${Math.floor(i/3600)} hours ago`:`${Math.floor(i/86400)} days ago`},eV=(0,h.useCallback)(async()=>{try{let e=await fetch("http://localhost:9063/api/subscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:L,creatorEmail:er,channelId:ex})}),t=await e.json();console.log(t),e.ok&&ef()}catch(e){console.log(e)}},[L,ef,er,ex]),eM=(0,h.useCallback)(async()=>{try{let e=await fetch("http://localhost:9063/features/addtodislikevideo",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:L,videoId:ew})}),t=await e.json();console.log(t),e.ok&&(B(!0),D(!1))}catch(e){console.error("Failed to fetch",e)}},[B,D,L,ew]),eA=(0,h.useCallback)(async()=>{try{let e=await fetch("http://localhost:9063/features/addtolikedvideos",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:L,videoId:ew})}),t=await e.json();console.log(t),e.ok&&(D(!0),B(!1))}catch(e){console.error("Failed to like this video",e)}},[D,L,B,ew]),eT=(0,h.useCallback)(async()=>{try{let e=await fetch("http://localhost:9063/features/addtowatchlater",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:L,videoId:ew})}),t=await e.json();console.log(t),e.ok&&eb()}catch(e){console.error("Failed to add watch later",e)}},[L,ew,eb]),e$=(0,h.useCallback)(async()=>{try{(await fetch("http://localhost:9063/features/addtoplaylist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:L,videoId:ew})})).ok&&(ej(),console.log("video added successfully"))}catch(e){console.error("Failed to add to playlist",e)}},[L,ew,ej]),eI=e=>{let t=new Date(e),a=Math.floor(Math.abs(new Date().getTime()-t.getTime())/36e5),s=Math.floor(a/24);return s>=1?`${s} day${s>1?"s":""} ago`:`${a} hour${a>1?"s":""} ago`},eD=(0,h.useCallback)(async()=>{console.log(er,L);try{let e=await fetch("http://localhost:9063/video/addcomment",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:L,videoId:ew,comment:em,logo:ep,user:L,creatorEmail:er})}),t=await e.json();console.log(t),eu("")}catch(e){console.error("Failed to add comment, server error",e)}},[er,ew,em,ep,L,eu]),eC=(0,h.useCallback)(async(e,t,a)=>{try{let t=await fetch("http://localhost:9063/features/addtohistory",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:L,videoId:e})}),a=await t.json();console.log("Video added to history:",a)}catch(e){console.error("Failed to add video to history:",e)}if(null===t){b.push(`/video/${e}`);return}try{let t=await fetch("http://localhost:9063/api/isenroll",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:L,courseId:a})}),s=await t.json();!0===s.isEnrolled?b.push(`/video/${e}`):b.push(`/payment/${a}`)}catch(e){console.error("Failed to fetch enrollment status:",e)}},[L,b]),eB=()=>{eg(Date.now())},ez=async()=>{if(0!==ev){let e=Date.now()-ev;console.log(`Watch time: ${e} milliseconds:${L}`),eg(0);try{let t=await fetch("http://localhost:9063/features/calculatewatchtime",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:er,watchTime:e})}),a=await t.json();console.log(a)}catch(e){console.error("Failed to add comment, server error",e)}}};return(0,h.useEffect)(()=>(eB(),()=>{ez()}),[]),(0,h.useEffect)(()=>{eN&&(E(eN.getVideoUrl[0].videoURl),eh(eN.getVideoUrl[0].channelId),A(eN.getFeatures[0].haveInPlaylist),$(eN.getFeatures[0].haveInWatchLater),D(eN.getFeatures[0].isLiked),ec(eN.getFeatures[0].subscribedchannel),B(eN.getFeatures[0].dislikedVideos),G(eN.getAllVideoUrl),en(eN.getVideoUrl[0].creatorEmail),X(eN.getVideoUrl[0].videoTitle),Z(eN.getVideoUrl[0].videoDescription),Y(eN.getVideoUrl[0].channelName),ee(eN.getVideoUrl[0].channelLogo),ea(eN.getVideoUrl[0].videoViews),ei(eN.getVideoUrl[0].videoPublishedAt),eo(eN.getVideoUrl[0].videoTags),U(eN.getComments),R(eN.getFeatures[0].totalSubscriber),console.log(eN)),t&&(_(t.email||""),ey(t.photoURL||""),eS())},[t,ey,_,ex,eh,en,G,ei,Y,ee,ea,R,E,X,Z,eo,A,eN,U]),(0,s.jsxs)(s.Fragment,{children:[s.jsx(w(),{}),s.jsx(l.default,{query:""}),ek?(0,s.jsxs)("div",{className:`p-10 ${a?"bg-white":"bg-black"} pt-24 flex`,children:[(0,s.jsxs)("div",{style:{width:"1000px"},children:[s.jsx("div",{className:`rounded-lg mr-5 ${a?"bg-gray-200":"bg-gray-700"} `,style:{height:"500px "},children:(0,s.jsxs)("div",{className:"flex space-x-2 justify-center items-center",children:[s.jsx("div",{className:"w-4 h-4 rounded-full mt-60 animate-pulse dark:bg-violet-600"}),s.jsx("div",{className:"w-4 h-4 rounded-full mt-60 animate-pulse dark:bg-violet-600"}),s.jsx("div",{className:"w-4 h-4 rounded-full mt-60 animate-pulse dark:bg-violet-600"})]})}),(0,s.jsxs)("div",{className:"mt-5 mr-5",children:[s.jsx(k.X,{isLoaded:i,className:"w-full mb-5 rounded-lg",children:s.jsx("div",{className:"h-3 w-full  rounded-lg bg-gray-500"})}),(0,s.jsxs)("div",{className:"w-full flex items-center gap-3",children:[s.jsx("div",{children:s.jsx(k.X,{className:"flex rounded-full w-12 h-12"})}),(0,s.jsxs)("div",{className:"w-full flex flex-col gap-2",children:[s.jsx(k.X,{className:"h-3 w-3/5 rounded-lg"}),s.jsx(k.X,{className:"h-3 w-4/5 rounded-lg"})]})]})]})]}),s.jsx("div",{className:"",children:[void 0,void 0,void 0,void 0,void 0].map((e,t)=>s.jsx(F.w,{className:`w-[500px] ${a?"bg-slate-100":"bg-slate-600"} space-y-7 p-4 mb-5 h-32 radius="lg`,children:(0,s.jsxs)("div",{className:"flex",children:[s.jsx("div",{className:"mr-8",children:s.jsx(k.X,{className:"h-20 w-40 rounded-lg"})}),(0,s.jsxs)("div",{className:"max-w-[300px] w-full flex items-center gap-3",children:[s.jsx("div",{children:s.jsx(k.X,{className:"flex rounded-full w-12 h-12"})}),(0,s.jsxs)("div",{className:"w-full flex flex-col gap-2",children:[s.jsx(k.X,{className:"h-3 w-3/5 rounded-lg"}),s.jsx(k.X,{className:"h-3 w-4/5 rounded-lg"})]})]})]})},t))})]}):(0,s.jsxs)("div",{className:`py-20 ${a?"bg-white":"bg-black"}  px-10 flex`,children:[(0,s.jsxs)("div",{id:"video-container",style:{maxWidth:"950px"},children:[s.jsx(P,{width:960,height:550,controls:!0,url:z,onPlay:eB,onPause:ez}),(0,s.jsxs)("div",{children:[s.jsx("h1",{className:`text-xl font-bold mt-3 ${a?"text-black":"text-white"} mb-5`,children:J}),s.jsx("nav",{className:"mb-5",children:(0,s.jsxs)("ul",{className:"flex gap-4",children:[s.jsx("li",{children:s.jsx(p.e,{color:"warning",delay:700,showArrow:!0,content:"Jane's channel",children:s.jsx(r.z,{onClick:()=>b.push(`/channel/${ex}`),className:`${a?"text-black":"text-white"}`,name:K,description:`${q} subscribers`,avatarProps:{src:Q}})})}),s.jsx("li",{children:s.jsx(p.e,{color:"warning",delay:700,showArrow:!0,content:"Subscribe",children:s.jsx(n.A,{className:`${ed?`bg-transparent ${a?"text-black bg-gray-200":"text-white bg-gray-700 "} border-default-200`:""}`,color:"primary",radius:"full",size:"md",variant:ed?"bordered":"solid",onPress:()=>eV(),children:ed?"Unsubscribe":"Subscribe"})})}),s.jsx("li",{className:"ml-16",children:(0,s.jsxs)(d.g,{variant:"bordered",children:[s.jsx(p.e,{color:"warning",delay:700,showArrow:!0,content:"Like",children:s.jsx(n.A,{onPress:eA,children:I?s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:a?"#000000":"#FFFFFF",height:"24",viewBox:"0 -960 960 960",width:"24",children:s.jsx("path",{d:"M720-120H320v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h218q32 0 56 24t24 56v80q0 7-1.5 15t-4.5 15L794-168q-9 20-30 34t-44 14ZM240-640v520H80v-520h160Z"})}):(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:a?"#000000":"#FFFFFF",children:[s.jsx("path",{d:"M0 0h24v24H0V0zm0 0h24v24H0V0z",fill:"none"}),s.jsx("path",{d:"M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1z"})]})})}),s.jsx(p.e,{color:"warning",delay:700,showArrow:!0,content:"Dislike",children:s.jsx(n.A,{onPress:eM,children:C?s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:a?"#000000":"#FFFFFF",height:"24",viewBox:"0 -960 960 960",width:"24",children:s.jsx("path",{d:"M240-840h400v520L360-40l-50-50q-7-7-11.5-19t-4.5-23v-14l44-174H120q-32 0-56-24t-24-56v-80q0-7 1.5-15t4.5-15l120-282q9-20 30-34t44-14Zm480 520v-520h160v520H720Z"})}):(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:a?"#000000":"#FFFFFF",children:[s.jsx("path",{d:"M0 0h24v24H0V0zm0 0h24v24H0V0z",fill:"none"}),s.jsx("path",{d:"M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm0 12-4.34 4.34L12 14H3v-2l3-7h9v10zm4-12h4v12h-4z"})]})})})]})}),s.jsx("li",{children:s.jsx(p.e,{color:"warning",delay:700,showArrow:!0,content:"Share this video",children:(0,s.jsxs)(n.A,{className:`flex ${a?" text-black":""}`,variant:"bordered",children:[(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:a?"#000000":"#FFFFFF",children:[s.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),s.jsx("path",{d:"M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"})]}),"Share"]})})}),s.jsx("li",{children:s.jsx(p.e,{color:"warning",delay:700,showArrow:!0,content:"Add to playlist",children:(0,s.jsxs)(n.A,{onPress:e$,className:`flex ${a?" text-black":""}`,variant:"bordered",children:[M?(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:a?"#000000":"#FFFFFF",children:[s.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),s.jsx("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"})]}):(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:a?"#000000":"#FFFFFF",children:[s.jsx("g",{children:s.jsx("rect",{fill:"none",height:"24",width:"24"})}),s.jsx("g",{children:s.jsx("path",{d:"M14,10H3v2h11V10z M14,6H3v2h11V6z M18,14v-4h-2v4h-4v2h4v4h2v-4h4v-2H18z M3,16h7v-2H3V16z"})})]}),"Save"]})})}),s.jsx("li",{children:s.jsx(p.e,{color:"warning",delay:700,showArrow:!0,content:"Add to watch later",children:(0,s.jsxs)(n.A,{onPress:eT,className:`flex ${a?" text-black":""}`,variant:"bordered",children:[T?(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:a?"#000000":"#FFFFFF",children:[s.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),s.jsx("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"})]}):(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:a?"#000000":"#FFFFFF",children:[s.jsx("g",{children:s.jsx("rect",{fill:"none",height:"24",width:"24",x:"0"})}),s.jsx("g",{children:s.jsx("g",{children:s.jsx("path",{d:"M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8 S16.41,20,12,20z M12.5,7H11v6l5.2,3.2l0.8-1.3l-4.5-2.7V7z"})})})]}),"Watch later"]})})}),s.jsx("li",{children:(0,s.jsxs)("svg",{className:"mt-2",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:a?"#000000":"#FFFFFF",children:[s.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),s.jsx("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"})]})})]})}),s.jsx(p.e,{color:"warning",delay:700,showArrow:!0,content:"Video details",children:s.jsx(c.d,{variant:"shadow",children:(0,s.jsxs)(x.G,{className:"text-gray-300","aria-label":"Accordion 1",title:"Video Description",children:[(0,s.jsxs)("h1",{className:"mb-5",children:[et," views  ",es," - ",el]}),s.jsx("h2",{className:"mb-5",children:J}),s.jsx("p",{children:W})]},"1")})}),(0,s.jsxs)("div",{className:`mt-5 ${a?"text-black":"text-white"} flex`,children:[s.jsx("h3",{children:H.length?`${H.length} comments`:"No comments"}),s.jsx(p.e,{color:"warning",delay:700,showArrow:!0,content:"Filter to read",children:(0,s.jsxs)(n.A,{className:`flex ${a?"text-black":"text-white"} ml-10`,variant:"bordered",children:[(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:a?"#000000":"#FFFFFF",children:[s.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),s.jsx("path",{d:"M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"})]}),"Sort"]})})]}),(0,s.jsxs)("div",{className:"flex gap-7 mb-10",children:[s.jsx("img",{className:"h-10 mt-3 rounded-full",src:ep,alt:""}),s.jsx(u.Y,{type:"text",color:"primary",className:`ml-0 ${a?"text-black":"text-white"}`,onChange:e=>eu(e.target.value),value:em,variant:"underlined",label:"Add a comment"}),s.jsx(n.A,{onPress:()=>eD(),className:`ml-10 ${a?"text-black":"text-white"}`,variant:"bordered",children:"Add"})]}),H.map((e,t)=>(0,s.jsxs)("div",{className:"mb-3",children:[(0,s.jsxs)("div",{className:"flex",children:[s.jsx("img",{className:"h-8 mr-5 rounded-full",src:e.channelLogo,alt:""}),s.jsx("p",{className:"text-md text-blue-700 font-semibold",children:e.channelId})]}),s.jsx("p",{className:`ml-16 text-sm ${a?"text-black":"tuserId}hite"}`,children:e.comments}),(0,s.jsxs)("p",{className:"text-blue-500 text-sm ml-14 mt-2",children:[s.jsx("span",{children:eP(e.timeStamp)}),s.jsx("span",{className:"hover:underline ml-5 hover:text-blue-950 cursor-pointer",children:"reply"})]})]},t))]})]}),s.jsx("div",{children:s.jsx("div",{children:O.map((e,t)=>s.jsx(p.e,{color:"warning",delay:700,showArrow:!0,content:e.allVideoTitles,children:(0,s.jsxs)("div",{className:"ml-10 flex mb-5 cursor-pointer",children:[s.jsx("img",{onClick:()=>{eC(e.videoId,e.courseFees,e.courseId)},style:{height:"130px",width:"200px"},className:"rounded-md",src:e.allThumbnailUrls,alt:""}),(0,s.jsxs)("div",{className:"max-w-56 ml-3",children:[s.jsx("h1",{className:`font-semibold ${a?"text-black":"text-white"}`,children:e.allVideoTitles}),(0,s.jsxs)("div",{onClick:()=>b.push(`/channel/${e.channelId}`),className:"font-semibold text-medium flex mt-1",children:[s.jsx("img",{className:"h-7 rounded-full",src:e.channelLogo,alt:""}),s.jsx("span",{className:"ml-2 text-blue-600 font-semibold text-medium",children:e.channelName})]}),(0,s.jsxs)("div",{className:"text-gray-500 space-x-3 flex text-xs mt-1",children:[(0,s.jsxs)("span",{children:[e.views," views"]}),s.jsx("span",{children:eI(e.uploadAt)}),s.jsx("span",{children:null!==e.courseFees&&s.jsx(S,{className:"h-5",animationData:N})})]})]})]})},t))})})]})]})}},33265:(e,t,a)=>{"use strict";a.d(t,{default:()=>i.a});var s=a(43353),i=a.n(s)},43353:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let s=a(98052);a(10326),a(17577);let i=s._(a(77028));function l(e,t){var a;let s={loading:e=>{let{error:t,isLoading:a,pastDelay:s}=e;return null}};"function"==typeof e&&(s.loader=e);let l={...s,...t};return(0,i.default)({...l,modules:null==(a=l.loadableGenerated)?void 0:a.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},933:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return i}});let s=a(94129);function i(e){let{reason:t,children:a}=e;throw new s.BailoutToCSRError(t)}},77028:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return d}});let s=a(10326),i=a(17577),l=a(933),o=a(46618);function r(e){return{default:e&&"default"in e?e.default:e}}let n={loader:()=>Promise.resolve(r(()=>null)),loading:null,ssr:!0},d=function(e){let t={...n,...e},a=(0,i.lazy)(()=>t.loader().then(r)),d=t.loading;function c(e){let r=d?(0,s.jsx)(d,{isLoading:!0,pastDelay:!0,error:null}):null,n=t.ssr?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.PreloadCss,{moduleIds:t.modules}),(0,s.jsx)(a,{...e})]}):(0,s.jsx)(l.BailoutToCSR,{reason:"next/dynamic",children:(0,s.jsx)(a,{...e})});return(0,s.jsx)(i.Suspense,{fallback:r,children:n})}return c.displayName="LoadableComponent",c}},46618:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return i}});let s=a(10326);function i(e){let{moduleIds:t}=e,{getExpectedRequestStore:i}=a(55403),l=i(),o=[];if(l.reactLoadableManifest&&t){let e=l.reactLoadableManifest;for(let a of t){if(!e[a])continue;let t=e[a].files.filter(e=>e.endsWith(".css"));o.push(...t)}}return 0===o.length?null:(0,s.jsx)(s.Fragment,{children:o.map(e=>(0,s.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:l.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},69887:(e,t,a)=>{"use strict";a.r(t),a.d(t,{$$typeof:()=>o,__esModule:()=>l,default:()=>r});var s=a(68570);let i=(0,s.createProxy)(String.raw`D:\Projects\Project Management\learntube-1.0\app\video\[id]\page.tsx`),{__esModule:l,$$typeof:o}=i;i.default;let r=(0,s.createProxy)(String.raw`D:\Projects\Project Management\learntube-1.0\app\video\[id]\page.tsx#default`)},45996:()=>{},14059:(e,t,a)=>{"use strict";a.d(t,{X:()=>x});var s=a(84521),i=(0,a(64723).tv)({slots:{base:["group","relative","overflow-hidden","bg-content3 dark:bg-content2","before:opacity-100","before:absolute","before:inset-0","before:-translate-x-full","before:animate-[shimmer_2s_infinite]","before:border-t","before:border-content4/30","before:bg-gradient-to-r","before:from-transparent","before:via-content4","dark:before:via-default-700/10","before:to-transparent","after:opacity-100","after:absolute","after:inset-0","after:-z-10","after:bg-content3","dark:after:bg-content2","data-[loaded=true]:!bg-transparent","data-[loaded=true]:before:opacity-0 data-[loaded=true]:before:animate-none","data-[loaded=true]:after:opacity-0"],content:["opacity-0","group-data-[loaded=true]:opacity-100"]},variants:{disableAnimation:{true:{base:"before:animate-none before:transition-none after:transition-none",content:"transition-none"},false:{base:"transition-background !duration-300 before:transition-opacity before:!duration-300",content:"transition-opacity motion-reduce:transition-none !duration-300"}}},defaultVariants:{disableAnimation:!1}}),l=a(50214),o=a(88672),r=a(17236),n=a(17577),d=a(10326),c=(0,s.Gp)((e,t)=>{let{Component:a,children:c,getSkeletonProps:x,getContentProps:h}=function(e){let[t,a]=(0,s.oe)(e,i.variantKeys),{as:d,children:c,isLoaded:x=!1,className:h,classNames:m,...u}=t,p=(0,n.useMemo)(()=>i({...a}),[(0,l.Xx)(a),c]),y=(0,o.W)(null==m?void 0:m.base,h);return{Component:d||"div",children:c,slots:p,classNames:m,getSkeletonProps:(e={})=>({"data-loaded":(0,r.PB)(x),className:p.base({class:(0,o.W)(y,null==e?void 0:e.className)}),...u}),getContentProps:(e={})=>({className:p.content({class:(0,o.W)(null==m?void 0:m.content,null==e?void 0:e.className)})})}}({...e});return(0,d.jsx)(a,{ref:t,...x(),children:(0,d.jsx)("div",{...h(),children:c})})});c.displayName="NextUI.Skeleton";var x=c},7371:(e,t,a)=>{"use strict";a.d(t,{S:()=>x});var s=a(10326),i=a(17577),l=a(40339);let o=(0,i.createContext)(null);var r=a(30346);let n=e=>!e.isLayoutDirty&&e.willUpdate(!1),d=e=>!0===e,c=e=>d(!0===e)||"id"===e,x=({children:e,id:t,inherit:a=!0})=>{let x=(0,i.useContext)(l.p),h=(0,i.useContext)(o),[m,u]=(0,r.N)(),p=(0,i.useRef)(null),y=x.id||h;null===p.current&&(c(a)&&y&&(t=t?y+"-"+t:y),p.current={id:t,group:d(a)&&x.group||function(){let e=new Set,t=new WeakMap,a=()=>e.forEach(n);return{add:s=>{e.add(s),t.set(s,s.addEventListener("willUpdate",a))},remove:s=>{e.delete(s);let i=t.get(s);i&&(i(),t.delete(s)),a()},dirty:a}}()});let v=(0,i.useMemo)(()=>({...p.current,forceRender:m}),[u]);return(0,s.jsx)(l.p.Provider,{value:v,children:e})}},7194:e=>{"use strict";e.exports=JSON.parse('{"v":"5.4.4","fr":30,"ip":0,"op":141,"w":500,"h":500,"nm":"Comp 1","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"keyhole Outlines","parent":5,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":10,"s":[0,0,0],"e":[0,-23.842,0],"to":[0,-3.974,0],"ti":[0,3.974,0]},{"i":{"x":0.667,"y":0.667},"o":{"x":0.167,"y":0.167},"t":32,"s":[0,-23.842,0],"e":[0,-23.842,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":61,"s":[0,-23.842,0],"e":[0,0,0],"to":[0,3.974,0],"ti":[13.492,-3.312,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":73,"s":[0,0,0],"e":[-80.952,-3.968,0],"to":[-13.492,3.312,0],"ti":[22.024,-50.463,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":88,"s":[-80.952,-3.968,0],"e":[-31.746,46.825,0],"to":[-2.778,5.026,0],"ti":[-2.116,-0.066,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":100.8,"s":[-31.746,46.825,0],"e":[125.397,-112.698,0],"to":[2.009,0.063,0],"ti":[-1.33,1.35,0]},{"t":120}],"ix":2},"a":{"a":0,"k":[250,321.697,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":3,"s":[0,0,100],"e":[100,100,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":10,"s":[100,100,100],"e":[80,80,100]},{"i":{"x":[0.747,0.747,0.747],"y":[1,1,1]},"o":{"x":[0.31,0.31,0.31],"y":[0,0,0]},"t":22,"s":[80,80,100],"e":[80,80,100]},{"i":{"x":[0.75,0.75,0.75],"y":[1,1,1]},"o":{"x":[0.408,0.408,0.408],"y":[0,0,0]},"t":73,"s":[80,80,100],"e":[80,80,100]},{"i":{"x":[0.833,0.833,0.833],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0,0,0]},"t":81,"s":[80,80,100],"e":[40,40,100]},{"i":{"x":[0.833,0.833,0.833],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0,0,0]},"t":88,"s":[40,40,100],"e":[40,40,100]},{"i":{"x":[0.833,0.833,0.833],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0,0,0]},"t":113.6,"s":[40,40,100],"e":[0,0,100]},{"t":120}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-28.765],[28.765,0],[0,28.765],[-28.765,0]],"o":[[0,28.765],[-28.765,0],[0,-28.765],[28.765,0]],"v":[[52.083,0],[0,52.083],[-52.083,0],[0,-52.083]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":73,"s":[0.270999983245,0.352999997606,0.39199999641,1],"e":[1,1,1,1]},{"t":81}],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[250,321.697],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[-5.696,-0.805],[-0.488,0],[0,0],[-0.058,5.753],[0.076,0.525],[0,0]],"o":[[0,0],[-0.806,5.696],[0.483,0.069],[0,0],[5.752,0.059],[0.005,-0.53],[0,0],[0,0]],"v":[[-22.808,-35.081],[-30.85,23.169],[-21.995,34.941],[-20.537,35.044],[21.13,35.044],[31.651,24.733],[31.546,23.148],[23.504,-35.102]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.270999983245,0.352999997606,0.39199999641,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.572,"y":1},"o":{"x":0.253,"y":0},"t":10,"s":[249.703,320],"e":[249.703,401.456],"to":[0,13.576],"ti":[0,-13.576]},{"i":{"x":0.667,"y":0.667},"o":{"x":0.167,"y":0.167},"t":27,"s":[249.703,401.456],"e":[249.703,401.456],"to":[0,0],"ti":[0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":61,"s":[249.703,401.456],"e":[249.703,320],"to":[0,-13.576],"ti":[0,13.576]},{"t":73}],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Tick Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[250,252.08,0],"ix":2},"a":{"a":0,"k":[250,250,0],"ix":1},"s":{"a":0,"k":[40,40,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[221.889,-160.282],[-98.672,160.282],[-221.889,37.063]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":90,"s":[100],"e":[75]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":100.8,"s":[75],"e":[0]},{"t":114}],"ix":1},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":90,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[250,244.8],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":90,"op":900,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Shape Layer 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[250,331.2,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":32,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-220,-115],[-300,115],[-252,115],[-172,-115]],"c":true}],"e":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[216,-115],[136,115],[184,115],[264,-115]],"c":true}]},{"t":61}],"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"}],"shapes":[{"ty":"rc","d":1,"s":{"a":0,"k":[280,230],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":36,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.840000107709,0.360000011968,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false}],"ip":32,"op":62,"st":10,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Shape Layer 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-360,"ix":10},"p":{"a":0,"k":[250,250,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.615,0.615,0.667],"y":[1,1,1]},"o":{"x":[0.24,0.24,0.333],"y":[0,0,0]},"t":94,"s":[0,0,100],"e":[166,166,100]},{"t":120}],"ix":6}},"ao":0,"shapes":[{"ty":"rc","d":1,"s":{"a":0,"k":[280,280],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":742,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[0.098039224744,0.776470661163,0.4392157197,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":94,"s":[0],"e":[30]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.608],"y":[0]},"t":112,"s":[30],"e":[0]},{"t":120}],"ix":5},"lc":2,"lj":2,"bm":0,"d":[{"n":"d","nm":"dash","v":{"a":0,"k":0,"ix":1}},{"n":"g","nm":"gap","v":{"a":0,"k":110,"ix":2}},{"n":"o","nm":"offset","v":{"a":0,"k":0,"ix":7}}],"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false}],"ip":94,"op":121,"st":88,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Shape Layer 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":32,"s":[0],"e":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":61,"s":[0],"e":[-360]},{"t":81}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":10,"s":[250,250,0],"e":[250,331.2,0],"to":[0,13.533,0],"ti":[0,-13.533,0]},{"i":{"x":0.667,"y":0.667},"o":{"x":0.167,"y":0.167},"t":32,"s":[250,331.2,0],"e":[250,331.2,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":61,"s":[250,331.2,0],"e":[250,250,0],"to":[0,-13.533,0],"ti":[0,13.533,0]},{"t":81}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[0,0,100],"e":[100,100,100]},{"i":{"x":[0.751,0.751,0.751],"y":[1,1,1]},"o":{"x":[0.311,0.311,0.311],"y":[0,0,0]},"t":10,"s":[100,100,100],"e":[100,100,100]},{"i":{"x":[0.746,0.746,0.746],"y":[1,1,1]},"o":{"x":[0.405,0.405,0.405],"y":[0,0,0]},"t":73,"s":[100,100,100],"e":[126,126,100]},{"t":81}],"ix":6}},"ao":0,"shapes":[{"ty":"rc","d":1,"s":{"a":1,"k":[{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":10,"s":[280,280],"e":[280,230]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.167,0.167],"y":[0,0]},"t":32,"s":[280,230],"e":[280,230]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":61,"s":[280,230],"e":[280,280]},{"t":81}],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":10,"s":[742],"e":[36]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":32,"s":[36],"e":[36]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":61,"s":[36],"e":[742]},{"t":81}],"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":73,"s":[1,0.756862804936,0.027450982262,1],"e":[0.098039217293,0.776470601559,0.439215689898,1]},{"t":81}],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false}],"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"Lock Handle Outlines","parent":5,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":50,"s":[0],"e":[-15]},{"t":55}],"ix":10},"p":{"a":0,"k":[-82.537,-107,0],"ix":2},"a":{"a":0,"k":[146.829,217.75,0],"ix":1},"s":{"a":0,"k":[80,80,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[-56.978,0],[0,-47.575],[0,0]],"o":[[0,0],[-0.002,-47.575],[56.977,0],[0,0],[0,0]],"v":[[-103.166,92.292],[-103.166,-6.152],[0,-92.292],[103.168,-6.152],[103.168,92.292]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.07058823529411765,0.07450980392156863,0.058823529411764705,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":64.642,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":50,"s":[100],"e":[84]},{"t":55}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":3,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":10,"s":[249.995,350],"e":[249.995,125.458],"to":[0,-37.424],"ti":[0,37.424]},{"i":{"x":0.667,"y":0.667},"o":{"x":0.167,"y":0.167},"t":32,"s":[249.995,125.458],"e":[249.995,125.458],"to":[0,0],"ti":[0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":61,"s":[249.995,125.458],"e":[249.995,372],"to":[0,41.09],"ti":[0,-41.09]},{"t":73}],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":10,"op":74,"st":0,"bm":0}],"markers":[]}')}};var t=require("../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),s=t.X(0,[948,806,621,7,898,983,641,805,508,331,749,477,497],()=>a(86782));module.exports=s})();
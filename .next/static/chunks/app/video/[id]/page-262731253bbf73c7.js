(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[150],{85435:function(e,t,a){Promise.resolve().then(a.bind(a,891))},891:function(e,t,a){"use strict";a.r(t);var s=a(89483),i=a(57437),n=a(57818),l=a(10282),o=a(16463),r=a(24996),d=a(7486),c=a(17283),x=a(21244),h=a(44510),m=a(2265),u=a(41234),p=a(39828),v=a(21432),f=a(56884),y=a(56452),g=a(17916),w=a(44092),k=a(19593),b=a.n(k);a(44193);var j=a(89857),F=a(50343),N=a(30770),S=a(92525);function T(){let e=(0,s._)(["\nquery GetVideoUrl( $email: String, $videoId: String,$channelId: String) {\n    getFeatures(email: $email, videoID: $videoId, channelId: $channelId) {\n        dislikedVideos\n        hasInHistory\n        haveInMyVideos\n        haveInPlaylist\n        haveInWatchLater\n        isLiked\n        subscribedchannel\n        totalSubscriber\n      }\n      getAllVideoUrl {\n        allEmail\n        allThumbnailUrls\n        allVideoTitles\n        allVideoUrls\n        channelLogo\n        channelName\n        courseFees\n        courseId\n        uploadAt\n        videoId\n        views\n        channelId\n      }\n\n      getVideoUrl (email: $email, videoID: $videoId) {\n        channelId\n        channelName\n        channelLogo\n        creatorEmail\n        videoDescription\n        videoPublishedAt\n        videoTags\n        videoTitle\n        videoURl\n        videoViews\n        videoThumb\n      }\n      getComments(videoID: $videoId) {\n        count\n        comments\n        timeStamp\n        user\n        channelId\n        channelLogo\n      }\n    }\n"]);return T=function(){return e},e}let M=(0,n.default)(()=>Promise.resolve().then(a.t.bind(a,43393,23)),{loadableGenerated:{webpack:()=>[43393]},ssr:!1}),V=(0,v.Ps)(T());t.default=e=>{let{params:t}=e,a=(0,o.useRouter)(),s=(0,m.useRef)();(0,m.useRef)(null);let n=(0,m.useRef)(null),[v,k]=(0,m.useState)(!0),[T,P]=(0,m.useState)(!1),[A,I]=(0,m.useState)(!1),[C,B]=(0,m.useState)(0),[E,z]=(0,m.useState)(!1),[L,D]=(0,m.useState)(0),[O,H]=(0,m.useState)(0),[G,_]=(0,m.useState)(!1),[R,q]=(0,m.useState)(""),[U,Z]=(0,m.useState)(!1),[J]=(0,y.F_)(g.I8),{isDarkMode:W,savePreviousVideoId:X,prevVideoId:$}=(0,w.v)(),[K,Y]=m.useState(!1),[Q,ee]=(0,m.useState)(!1),[et,ea]=(0,m.useState)(!1),[es,ei]=(0,m.useState)(!1),[en,el]=(0,m.useState)(!1),[eo,er]=(0,m.useState)(""),[ed,ec]=(0,m.useState)(""),[ex,eh]=(0,m.useState)([]),[em,eu]=(0,m.useState)([]),[ep,ev]=(0,m.useState)(""),[ef,ey]=(0,m.useState)(!1),[eg,ew]=(0,m.useState)(""),[ek,eb]=(0,m.useState)(!1),[ej,eF]=(0,m.useState)(""),[eN,eS]=(0,m.useState)(""),[eT,eM]=(0,m.useState)(""),[eV,eP]=(0,m.useState)(""),[eA,eI]=(0,m.useState)(""),[eC,eB]=(0,m.useState)(""),[eE,ez]=(0,m.useState)(""),[eL,eD]=(0,m.useState)(""),[eO,eH]=(0,m.useState)(!1),[eG,e_]=(0,m.useState)(""),[eR,eq]=(0,m.useState)(""),[eU,eZ]=(0,m.useState)(""),[eJ,eW]=(0,m.useState)(0),[eX,e$]=(0,m.useState)(0),eK=()=>{eH(!eO)},eY=()=>{ee(!Q)},eQ=()=>{ea(!et)},e0=decodeURIComponent(t.id),{loading:e1,error:e2,data:e3}=(0,f.a)(V,{variables:{email:ed,videoId:e0,channelId:eG}}),e4=e=>{let t=parseInt(e,10);if(isNaN(t))return"Invalid timestamp";let a=new Date,s=new Date(t),i=Math.floor((a.getTime()-s.getTime())/1e3);return i<0?"Future timestamp":i<60?"".concat(i," seconds ago"):i<3600?"".concat(Math.floor(i/60)," minutes ago"):i<86400?"".concat(Math.floor(i/3600)," hours ago"):"".concat(Math.floor(i/86400)," days ago")},e6=(0,m.useCallback)(async()=>{try{(await fetch("".concat("https://learntube-2.onrender.com","/api/subscribe"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:ed,creatorEmail:eL,channelId:eG})})).ok&&eK()}catch(e){console.log(e)}},[ed,eK,eL,eG]),e5=(0,m.useCallback)(async()=>{try{(await fetch("".concat("https://learntube-2.onrender.com","/features/addtodislikevideo"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:ed,videoId:e0})})).ok?(el(!0),ei(!1),ew("Successfully disliked video")):ew("Failed to disliked video"),ey(!0),setTimeout(()=>{ey(!1)},3e3)}catch(e){ew("Failed to disliked video"),ey(!0),setTimeout(()=>{ey(!1)},3e3),console.error("Failed to fetch",e)}},[el,ei,ed,e0]),e7=(0,m.useCallback)(async()=>{try{(await fetch("".concat("https://learntube-2.onrender.com","/features/addtolikedvideos"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:ed,videoId:e0})})).ok?(ei(!0),el(!1),ew("Added to liked video")):ew("Failed to liked video"),ey(!0),setTimeout(()=>{ey(!1)},3e3)}catch(e){ew("Failed to liked video"),ey(!0),setTimeout(()=>{ey(!1)},3e3),console.error("Failed to like this video",e)}},[ei,ed,el,e0]),e8=(0,m.useCallback)(async()=>{try{(await fetch("".concat("https://learntube-2.onrender.com","/features/addtowatchlater"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:ed,videoId:e0})})).ok&&eQ()}catch(e){console.error("Failed to add watch later",e)}},[ed,e0,eQ]),e9=(0,m.useCallback)(async()=>{try{(await fetch("".concat("https://learntube-2.onrender.com","/features/addtoplaylist"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:ed,videoId:e0})})).ok&&eY()}catch(e){console.error("Failed to add to playlist",e)}},[ed,e0,eY]),te=e=>{let t=new Date(e),a=Math.floor(Math.abs(new Date().getTime()-t.getTime())/36e5),s=Math.floor(a/24);return s>=1?"".concat(s," day").concat(s>1?"s":""," ago"):"".concat(a," hour").concat(a>1?"s":""," ago")},tt=(0,m.useCallback)(async()=>{console.log(eL,ed);try{let e=await fetch("".concat("https://learntube-2.onrender.com","/video/addcomment"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:ed,videoId:e0,comment:eR,logo:eU,user:ed,creatorEmail:eL})});e.ok?ew("Comment added successfully"):ew("Failed to add comment"),ey(!0),setTimeout(()=>{ey(!1)},3e3);let t=await e.json();console.log(t),eq("")}catch(e){console.error("Failed to add comment, server error",e),ew("Failed to add comment"),ey(!0),setTimeout(()=>{ey(!1)},3e3)}},[eL,ew,ey,e0,eR,eU,ed,eq]),ta=(0,m.useCallback)(async(e,t,s)=>{try{let t=await fetch("".concat("https://learntube-2.onrender.com","/features/addtohistory"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:ed,videoId:e})}),a=await t.json();console.log("Video added to history:",a)}catch(e){console.error("Failed to add video to history:",e)}if(null===t){a.push("/video/".concat(e));return}try{let t=await fetch("".concat("https://learntube-2.onrender.com","/api/isenroll"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:ed,courseId:s})}),i=await t.json();!0===i.isEnrolled?a.push("/video/".concat(e)):a.push("/payment/".concat(s))}catch(e){console.error("Failed to fetch enrollment status:",e)}},[ed,a]),ts=()=>{eW(Date.now())},ti=async()=>{if(0!==eJ){let e=Date.now()-eJ;console.log("Watch time: ".concat(e," milliseconds:").concat(ed)),eW(0);try{let t=await fetch("".concat("https://learntube-2.onrender.com","/features/calculatewatchtime"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:eL,watchTime:e})}),a=await t.json();console.log(a)}catch(e){console.error("Failed to add comment, server error",e)}}};(0,m.useCallback)(async()=>{setTimeout(()=>{a.push("/video/".concat(R))},3e3)},[R]),(0,m.useCallback)(async()=>{a.push("/video/".concat($))},[$]);let tn=()=>{s.current&&(s.current.pause(),k(!1))},tl=()=>{s.current&&(s.current.play(),k(!0))},to=(0,m.useCallback)(()=>{let e=document.getElementById("video-player");if(e){let t=e.currentTime;e$(t-10),isNaN(t)||(e.currentTime=Math.max(0,t-10))}},[]),tr=(0,m.useCallback)(()=>{let e=document.getElementById("video-player");if(e){let t=e.currentTime;e$(t+10),isNaN(t)||(e.currentTime=Math.max(0,t+10))}},[]);return(0,m.useEffect)(()=>()=>clearInterval(n.current),[v]),(0,m.useEffect)(()=>(ts(),()=>{ti()}),[]),(0,m.useEffect)(()=>{e3&&(e3.getVideoUrl.map(e=>{er(e.videoURl),e_(e.channelId),eS(e.videoDescription),eD(e.creatorEmail),eF(e.videoTitle),eM(e.channelName),eP(e.channelLogo),eI(e.videoViews),eB(e.videoPublishedAt),ez(e.videoTags)}),e3.getFeatures.map(e=>{ee(e.haveInPlaylist),ea(e.haveInWatchLater),ei(e.isLiked),eH(e.subscribedchannel),el(e.dislikedVideos),ev(e.totalSubscriber)}),eh(e3.getAllVideoUrl),eu(e3.getComments)),J&&(ec(J.email||""),eZ(J.photoURL||"")),e2&&a.push("/error/502")},[J,eZ,e2,ec,eG,e_,eD,eh,eB,eM,eP,eI,ev,er,eF,eS,ez,ee,e3,eu]),(0,m.useEffect)(()=>{if(ex){var e;q(null===(e=ex[0])||void 0===e?void 0:e.videoId)}X(e0)},[ex,X,q]),(0,m.useEffect)(()=>{let e=document.getElementById("video-player");e&&H(e.duration)},[E,H]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(b(),{}),(0,i.jsx)(l.default,{query:""}),ef&&(0,i.jsx)(S.Z,{message:"".concat(eg),position:""}),e1?(0,i.jsxs)("div",{className:"p-10 ".concat(W?"bg-white":"bg-black"," pt-24 flex"),children:[(0,i.jsxs)("div",{style:{width:"1000px"},children:[(0,i.jsx)("div",{className:"rounded-lg mr-5 ".concat(W?"bg-gray-200":"bg-gray-700"," "),style:{height:"500px "},children:(0,i.jsxs)("div",{className:"flex space-x-2 justify-center items-center",children:[(0,i.jsx)("div",{className:"w-4 h-4 rounded-full mt-60 animate-pulse dark:bg-violet-600"}),(0,i.jsx)("div",{className:"w-4 h-4 rounded-full mt-60 animate-pulse dark:bg-violet-600"}),(0,i.jsx)("div",{className:"w-4 h-4 rounded-full mt-60 animate-pulse dark:bg-violet-600"})]})}),(0,i.jsxs)("div",{className:"mt-5 mr-5",children:[(0,i.jsx)(j.X,{isLoaded:K,className:"w-full mb-5 rounded-lg",children:(0,i.jsx)("div",{className:"h-3 w-full  rounded-lg bg-gray-500"})}),(0,i.jsxs)("div",{className:"w-full flex items-center gap-3",children:[(0,i.jsx)("div",{children:(0,i.jsx)(j.X,{className:"flex rounded-full w-12 h-12"})}),(0,i.jsxs)("div",{className:"w-full flex flex-col gap-2",children:[(0,i.jsx)(j.X,{className:"h-3 w-3/5 rounded-lg"}),(0,i.jsx)(j.X,{className:"h-3 w-4/5 rounded-lg"})]})]})]})]}),(0,i.jsx)("div",{className:"",children:[void 0,void 0,void 0,void 0,void 0].map((e,t)=>(0,i.jsx)(F.w,{className:"w-[500px] ".concat(W?"bg-slate-100":"bg-slate-600",' space-y-7 p-4 mb-5 h-32 radius="lg'),children:(0,i.jsxs)("div",{className:"flex",children:[(0,i.jsx)("div",{className:"mr-8",children:(0,i.jsx)(j.X,{className:"h-20 w-40 rounded-lg"})}),(0,i.jsxs)("div",{className:"max-w-[300px] w-full flex items-center gap-3",children:[(0,i.jsx)("div",{children:(0,i.jsx)(j.X,{className:"flex rounded-full w-12 h-12"})}),(0,i.jsxs)("div",{className:"w-full flex flex-col gap-2",children:[(0,i.jsx)(j.X,{className:"h-3 w-3/5 rounded-lg"}),(0,i.jsx)(j.X,{className:"h-3 w-4/5 rounded-lg"})]})]})]})},t))})]}):(0,i.jsxs)("div",{className:"py-20 ".concat(W?"bg-white":"bg-black","  px-10 flex"),children:[(0,i.jsxs)("div",{id:"video-container",style:{maxWidth:"950px"},children:[(0,i.jsxs)("div",{children:[U?(0,i.jsxs)("div",{onMouseEnter:()=>Z(!0),children:[(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"absolute z-[100] ml-[200px] mt-48",height:"80px",viewBox:"0 -960 960 960",width:"80px",fill:"#e8eaed",children:(0,i.jsx)("path",{d:"M220-240v-480h80v480h-80Zm520 0L380-480l360-240v480Z"})}),(0,i.jsx)("svg",{onClick:to,xmlns:"http://www.w3.org/2000/svg",className:"absolute z-[100] ml-[300px] mt-48",height:"80px",viewBox:"0 -960 960 960",width:"80px",fill:"#e8eaed",children:(0,i.jsx)("path",{d:"M860-240 500-480l360-240v480Zm-400 0L100-480l360-240v480Z"})}),v?(0,i.jsx)("svg",{onClick:()=>tn(),className:"absolute z-[100] ml-[450px] mt-48",xmlns:"http://www.w3.org/2000/svg",height:"80px",viewBox:"0 -960 960 960",width:"80px",fill:"#e8eaed",children:(0,i.jsx)("path",{d:"M560-200v-560h160v560H560Zm-320 0v-560h160v560H240Z"})}):(0,i.jsx)("svg",{onClick:()=>tl(),className:"absolute z-[100] ml-[450px] mt-48",xmlns:"http://www.w3.org/2000/svg",height:"80px",viewBox:"0 -960 960 960",width:"80px",fill:"#e8eaed",children:(0,i.jsx)("path",{d:"m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"})}),(0,i.jsx)("svg",{onClick:()=>tr(),className:"absolute z-[100] ml-[600px] mt-48",xmlns:"http://www.w3.org/2000/svg",height:"80px",viewBox:"0 -960 960 960",width:"80px",fill:"#e8eaed",children:(0,i.jsx)("path",{d:"M100-240v-480l360 240-360 240Zm400 0v-480l360 240-360 240Z"})}),(0,i.jsx)("svg",{className:"absolute z-[100] ml-[700px] mt-48",xmlns:"http://www.w3.org/2000/svg",height:"80px",viewBox:"0 -960 960 960",width:"80px",fill:"#e8eaed",children:(0,i.jsx)("path",{d:"M660-240v-480h80v480h-80Zm-440 0v-480l360 240-360 240Z"})})]}):null,(0,i.jsx)("video",{onMouseEnter:()=>Z(!0),onMouseLeave:()=>{setTimeout(()=>{Z(!1)},3e3)},controls:!0,muted:!1,id:"video-player",onPlay:ts,onPause:ti,autoPlay:!0,ref:s,width:960,height:570,src:eo})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{className:"text-xl font-bold mt-3 ".concat(W?"text-black":"text-white"," mb-5"),children:ej}),(0,i.jsx)("nav",{className:"mb-5",children:(0,i.jsxs)("ul",{className:"flex gap-4",children:[(0,i.jsx)("li",{children:(0,i.jsx)(p.e,{color:"warning",delay:700,showArrow:!0,content:"Jane's channel",children:(0,i.jsx)(r.z,{onClick:()=>a.push("/channel/".concat(eG)),className:"".concat(W?"text-black":"text-white"),name:eT,description:"".concat(ep," subscribers"),avatarProps:{src:eV}})})}),(0,i.jsx)("li",{children:(0,i.jsx)(p.e,{color:"warning",delay:700,showArrow:!0,content:"Subscribe",children:(0,i.jsx)(d.A,{className:"".concat(eO?"bg-transparent ".concat(W?"text-black bg-gray-200":"text-white bg-gray-700 "," border-default-200"):""),color:"primary",radius:"full",size:"md",variant:eO?"bordered":"solid",onPress:()=>e6(),children:eO?"Unsubscribe":"Subscribe"})})}),(0,i.jsx)("li",{className:"ml-16",children:(0,i.jsxs)(c.g,{variant:"bordered",children:[(0,i.jsx)(p.e,{color:"warning",delay:700,showArrow:!0,content:"Like",children:(0,i.jsx)(d.A,{onPress:e7,children:es?(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:W?"#000000":"#FFFFFF",height:"24",viewBox:"0 -960 960 960",width:"24",children:(0,i.jsx)("path",{d:"M720-120H320v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h218q32 0 56 24t24 56v80q0 7-1.5 15t-4.5 15L794-168q-9 20-30 34t-44 14ZM240-640v520H80v-520h160Z"})}):(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:W?"#000000":"#FFFFFF",children:[(0,i.jsx)("path",{d:"M0 0h24v24H0V0zm0 0h24v24H0V0z",fill:"none"}),(0,i.jsx)("path",{d:"M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1z"})]})})}),(0,i.jsx)(p.e,{color:"warning",delay:700,showArrow:!0,content:"Dislike",children:(0,i.jsx)(d.A,{onPress:e5,children:en?(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:W?"#000000":"#FFFFFF",height:"24",viewBox:"0 -960 960 960",width:"24",children:(0,i.jsx)("path",{d:"M240-840h400v520L360-40l-50-50q-7-7-11.5-19t-4.5-23v-14l44-174H120q-32 0-56-24t-24-56v-80q0-7 1.5-15t4.5-15l120-282q9-20 30-34t44-14Zm480 520v-520h160v520H720Z"})}):(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:W?"#000000":"#FFFFFF",children:[(0,i.jsx)("path",{d:"M0 0h24v24H0V0zm0 0h24v24H0V0z",fill:"none"}),(0,i.jsx)("path",{d:"M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm0 12-4.34 4.34L12 14H3v-2l3-7h9v10zm4-12h4v12h-4z"})]})})})]})}),(0,i.jsx)("li",{children:(0,i.jsx)(p.e,{color:"warning",delay:700,showArrow:!0,content:"Share this video",children:(0,i.jsxs)(d.A,{className:"flex ".concat(W?" text-black":""),variant:"bordered",children:[(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:W?"#000000":"#FFFFFF",children:[(0,i.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,i.jsx)("path",{d:"M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"})]}),"Share"]})})}),(0,i.jsx)("li",{children:(0,i.jsx)(p.e,{color:"warning",delay:700,showArrow:!0,content:"Add to playlist",children:(0,i.jsxs)(d.A,{onPress:e9,className:"flex ".concat(W?" text-black":""),variant:"bordered",children:[Q?(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:W?"#000000":"#FFFFFF",children:[(0,i.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,i.jsx)("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"})]}):(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:W?"#000000":"#FFFFFF",children:[(0,i.jsx)("g",{children:(0,i.jsx)("rect",{fill:"none",height:"24",width:"24"})}),(0,i.jsx)("g",{children:(0,i.jsx)("path",{d:"M14,10H3v2h11V10z M14,6H3v2h11V6z M18,14v-4h-2v4h-4v2h4v4h2v-4h4v-2H18z M3,16h7v-2H3V16z"})})]}),"Save"]})})}),(0,i.jsx)("li",{children:(0,i.jsx)(p.e,{color:"warning",delay:700,showArrow:!0,content:"Add to watch later",children:(0,i.jsxs)(d.A,{onPress:e8,className:"flex ".concat(W?" text-black":""),variant:"bordered",children:[et?(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:W?"#000000":"#FFFFFF",children:[(0,i.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,i.jsx)("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"})]}):(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:W?"#000000":"#FFFFFF",children:[(0,i.jsx)("g",{children:(0,i.jsx)("rect",{fill:"none",height:"24",width:"24",x:"0"})}),(0,i.jsx)("g",{children:(0,i.jsx)("g",{children:(0,i.jsx)("path",{d:"M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8 S16.41,20,12,20z M12.5,7H11v6l5.2,3.2l0.8-1.3l-4.5-2.7V7z"})})})]}),"Watch later"]})})}),(0,i.jsx)("li",{children:(0,i.jsxs)("svg",{className:"mt-2",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:W?"#000000":"#FFFFFF",children:[(0,i.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,i.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"})]})})]})}),(0,i.jsx)(p.e,{color:"warning",delay:700,showArrow:!0,content:"Video details",children:(0,i.jsx)(x.d,{variant:"shadow",children:(0,i.jsxs)(h.G,{className:"text-gray-300","aria-label":"Accordion 1",title:"Video Description",children:[(0,i.jsxs)("h1",{className:"mb-5",children:[eA," views  ",eC," - ",eE]}),(0,i.jsx)("h2",{className:"mb-5",children:ej}),(0,i.jsx)("p",{children:eN})]},"1")})}),(0,i.jsxs)("div",{className:"mt-5 ".concat(W?"text-black":"text-white"," flex"),children:[(0,i.jsxs)("h3",{children:[em.length," comments"]}),(0,i.jsx)(p.e,{color:"warning",delay:700,showArrow:!0,content:"Filter to read",children:(0,i.jsxs)(d.A,{className:"flex ".concat(W?"text-black":"text-white"," ml-10"),variant:"bordered",children:[(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:W?"#000000":"#FFFFFF",children:[(0,i.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,i.jsx)("path",{d:"M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"})]}),"Sort"]})})]}),(0,i.jsxs)("div",{className:"flex gap-7 mb-10",children:[(0,i.jsx)("img",{className:"h-10 mt-3 rounded-full",src:eU,alt:""}),(0,i.jsx)(u.Y,{type:"text",color:"primary",className:"ml-0 ".concat(W?"text-black":"text-white"),onChange:e=>eq(e.target.value),value:eR,variant:"underlined",label:"Add a comment"}),(0,i.jsx)(d.A,{onPress:()=>tt(),className:"ml-10 ".concat(W?"text-black":"text-white"),variant:"bordered",children:"Add"})]}),em.map((e,t)=>(0,i.jsxs)("div",{className:"mb-3",children:[(0,i.jsxs)("div",{className:"flex",children:[(0,i.jsx)("img",{className:"h-8 mr-5 rounded-full",src:e.channelLogo,alt:""}),(0,i.jsx)("p",{className:"text-md text-blue-700 font-semibold",children:e.channelId})]}),(0,i.jsx)("p",{className:"ml-16 text-sm ".concat(W?"text-black":"tuserId}hite"),children:e.comments}),(0,i.jsxs)("p",{className:"text-gray-500 text-sm ml-14 mt-2",children:[(0,i.jsx)("span",{children:e4(e.timeStamp)}),(0,i.jsx)("span",{className:"hover:underline ml-5 hover:text-blue-950 cursor-pointer",children:"reply"})]})]},t))]})]}),(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:ex.map((e,t)=>(0,i.jsx)(p.e,{color:"warning",delay:700,showArrow:!0,content:e.allVideoTitles,children:(0,i.jsxs)("div",{className:"ml-10 flex mb-5 cursor-pointer",children:[(0,i.jsx)("img",{onClick:()=>{ta(e.videoId,e.courseFees,e.courseId)},style:{height:"130px",width:"200px"},className:"rounded-md",src:e.allThumbnailUrls,alt:""}),(0,i.jsxs)("div",{className:"max-w-56 ml-3",children:[(0,i.jsx)("h1",{className:"font-semibold ".concat(W?"text-black":"text-white"),children:e.allVideoTitles}),(0,i.jsxs)("div",{onClick:()=>a.push("/channel/".concat(e.channelId)),className:"font-semibold text-medium flex mt-1",children:[(0,i.jsx)("img",{className:"h-7 rounded-full",src:e.channelLogo,alt:""}),(0,i.jsx)("span",{className:"ml-2 text-blue-600 font-semibold text-medium",children:e.channelName})]}),(0,i.jsxs)("div",{className:"text-gray-500 ml-9 space-x-3 flex text-xs",children:[(0,i.jsxs)("span",{children:[e.views," views"]}),(0,i.jsx)("span",{children:te(e.uploadAt)}),(0,i.jsx)("span",{children:null!==e.courseFees&&(0,i.jsx)(M,{className:"h-3",animationData:N})})]})]})]})},t))})})]})]})}},57818:function(e,t,a){"use strict";a.d(t,{default:function(){return i.a}});var s=a(50551),i=a.n(s)},50551:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}});let s=a(51609);a(57437),a(2265);let i=s._(a(40148));function n(e,t){var a;let s={loading:e=>{let{error:t,isLoading:a,pastDelay:s}=e;return null}};"function"==typeof e&&(s.loader=e);let n={...s,...t};return(0,i.default)({...n,modules:null==(a=n.loadableGenerated)?void 0:a.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},10912:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return i}});let s=a(55592);function i(e){let{reason:t,children:a}=e;if("undefined"==typeof window)throw new s.BailoutToCSRError(t);return a}},40148:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return d}});let s=a(57437),i=a(2265),n=a(10912),l=a(61481);function o(e){return{default:e&&"default"in e?e.default:e}}let r={loader:()=>Promise.resolve(o(()=>null)),loading:null,ssr:!0},d=function(e){let t={...r,...e},a=(0,i.lazy)(()=>t.loader().then(o)),d=t.loading;function c(e){let o=d?(0,s.jsx)(d,{isLoading:!0,pastDelay:!0,error:null}):null,r=t.ssr?(0,s.jsxs)(s.Fragment,{children:["undefined"==typeof window?(0,s.jsx)(l.PreloadCss,{moduleIds:t.modules}):null,(0,s.jsx)(a,{...e})]}):(0,s.jsx)(n.BailoutToCSR,{reason:"next/dynamic",children:(0,s.jsx)(a,{...e})});return(0,s.jsx)(i.Suspense,{fallback:o,children:r})}return c.displayName="LoadableComponent",c}},61481:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return i}});let s=a(57437);function i(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let{getExpectedRequestStore:i}=a(58512),n=i(),l=[];if(n.reactLoadableManifest&&t){let e=n.reactLoadableManifest;for(let a of t){if(!e[a])continue;let t=e[a].files.filter(e=>e.endsWith(".css"));l.push(...t)}}return 0===l.length?null:(0,s.jsx)(s.Fragment,{children:l.map(e=>(0,s.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:n.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},44193:function(){},89857:function(e,t,a){"use strict";a.d(t,{X:function(){return x}});var s=a(4984),i=(0,a(9576).tv)({slots:{base:["group","relative","overflow-hidden","bg-content3 dark:bg-content2","before:opacity-100","before:absolute","before:inset-0","before:-translate-x-full","before:animate-[shimmer_2s_infinite]","before:border-t","before:border-content4/30","before:bg-gradient-to-r","before:from-transparent","before:via-content4","dark:before:via-default-700/10","before:to-transparent","after:opacity-100","after:absolute","after:inset-0","after:-z-10","after:bg-content3","dark:after:bg-content2","data-[loaded=true]:!bg-transparent","data-[loaded=true]:before:opacity-0 data-[loaded=true]:before:animate-none","data-[loaded=true]:after:opacity-0"],content:["opacity-0","group-data-[loaded=true]:opacity-100"]},variants:{disableAnimation:{true:{base:"before:animate-none before:transition-none after:transition-none",content:"transition-none"},false:{base:"transition-background !duration-300 before:transition-opacity before:!duration-300",content:"transition-opacity motion-reduce:transition-none !duration-300"}}},defaultVariants:{disableAnimation:!1}}),n=a(36222),l=a(65263),o=a(53640),r=a(2265),d=a(57437),c=(0,s.Gp)((e,t)=>{let{Component:a,children:c,getSkeletonProps:x,getContentProps:h}=function(e){let[t,a]=(0,s.oe)(e,i.variantKeys),{as:d,children:c,isLoaded:x=!1,className:h,classNames:m,...u}=t,p=(0,r.useMemo)(()=>i({...a}),[(0,n.Xx)(a),c]),v=(0,l.W)(null==m?void 0:m.base,h);return{Component:d||"div",children:c,slots:p,classNames:m,getSkeletonProps:(e={})=>({"data-loaded":(0,o.PB)(x),className:p.base({class:(0,l.W)(v,null==e?void 0:e.className)}),...u}),getContentProps:(e={})=>({className:p.content({class:(0,l.W)(null==m?void 0:m.content,null==e?void 0:e.className)})})}}({...e});return(0,d.jsx)(a,{ref:t,...x(),children:(0,d.jsx)("div",{...h(),children:c})})});c.displayName="NextUI.Skeleton";var x=c},19482:function(e,t,a){"use strict";a.d(t,{S:function(){return x}});var s=a(57437),i=a(2265),n=a(5050);let l=(0,i.createContext)(null);var o=a(63232);let r=e=>!e.isLayoutDirty&&e.willUpdate(!1),d=e=>!0===e,c=e=>d(!0===e)||"id"===e,x=({children:e,id:t,inherit:a=!0})=>{let x=(0,i.useContext)(n.p),h=(0,i.useContext)(l),[m,u]=(0,o.N)(),p=(0,i.useRef)(null),v=x.id||h;null===p.current&&(c(a)&&v&&(t=t?v+"-"+t:v),p.current={id:t,group:d(a)&&x.group||function(){let e=new Set,t=new WeakMap,a=()=>e.forEach(r);return{add:s=>{e.add(s),t.set(s,s.addEventListener("willUpdate",a))},remove:s=>{e.delete(s);let i=t.get(s);i&&(i(),t.delete(s)),a()},dirty:a}}()});let f=(0,i.useMemo)(()=>({...p.current,forceRender:m}),[u]);return(0,s.jsx)(n.p.Provider,{value:f,children:e})}},30770:function(e){"use strict";e.exports=JSON.parse('{"v":"5.4.4","fr":30,"ip":0,"op":141,"w":500,"h":500,"nm":"Comp 1","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"keyhole Outlines","parent":5,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":10,"s":[0,0,0],"e":[0,-23.842,0],"to":[0,-3.974,0],"ti":[0,3.974,0]},{"i":{"x":0.667,"y":0.667},"o":{"x":0.167,"y":0.167},"t":32,"s":[0,-23.842,0],"e":[0,-23.842,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":61,"s":[0,-23.842,0],"e":[0,0,0],"to":[0,3.974,0],"ti":[13.492,-3.312,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":73,"s":[0,0,0],"e":[-80.952,-3.968,0],"to":[-13.492,3.312,0],"ti":[22.024,-50.463,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":88,"s":[-80.952,-3.968,0],"e":[-31.746,46.825,0],"to":[-2.778,5.026,0],"ti":[-2.116,-0.066,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":100.8,"s":[-31.746,46.825,0],"e":[125.397,-112.698,0],"to":[2.009,0.063,0],"ti":[-1.33,1.35,0]},{"t":120}],"ix":2},"a":{"a":0,"k":[250,321.697,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":3,"s":[0,0,100],"e":[100,100,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":10,"s":[100,100,100],"e":[80,80,100]},{"i":{"x":[0.747,0.747,0.747],"y":[1,1,1]},"o":{"x":[0.31,0.31,0.31],"y":[0,0,0]},"t":22,"s":[80,80,100],"e":[80,80,100]},{"i":{"x":[0.75,0.75,0.75],"y":[1,1,1]},"o":{"x":[0.408,0.408,0.408],"y":[0,0,0]},"t":73,"s":[80,80,100],"e":[80,80,100]},{"i":{"x":[0.833,0.833,0.833],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0,0,0]},"t":81,"s":[80,80,100],"e":[40,40,100]},{"i":{"x":[0.833,0.833,0.833],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0,0,0]},"t":88,"s":[40,40,100],"e":[40,40,100]},{"i":{"x":[0.833,0.833,0.833],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0,0,0]},"t":113.6,"s":[40,40,100],"e":[0,0,100]},{"t":120}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-28.765],[28.765,0],[0,28.765],[-28.765,0]],"o":[[0,28.765],[-28.765,0],[0,-28.765],[28.765,0]],"v":[[52.083,0],[0,52.083],[-52.083,0],[0,-52.083]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":73,"s":[0.270999983245,0.352999997606,0.39199999641,1],"e":[1,1,1,1]},{"t":81}],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[250,321.697],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[-5.696,-0.805],[-0.488,0],[0,0],[-0.058,5.753],[0.076,0.525],[0,0]],"o":[[0,0],[-0.806,5.696],[0.483,0.069],[0,0],[5.752,0.059],[0.005,-0.53],[0,0],[0,0]],"v":[[-22.808,-35.081],[-30.85,23.169],[-21.995,34.941],[-20.537,35.044],[21.13,35.044],[31.651,24.733],[31.546,23.148],[23.504,-35.102]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.270999983245,0.352999997606,0.39199999641,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.572,"y":1},"o":{"x":0.253,"y":0},"t":10,"s":[249.703,320],"e":[249.703,401.456],"to":[0,13.576],"ti":[0,-13.576]},{"i":{"x":0.667,"y":0.667},"o":{"x":0.167,"y":0.167},"t":27,"s":[249.703,401.456],"e":[249.703,401.456],"to":[0,0],"ti":[0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":61,"s":[249.703,401.456],"e":[249.703,320],"to":[0,-13.576],"ti":[0,13.576]},{"t":73}],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Tick Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[250,252.08,0],"ix":2},"a":{"a":0,"k":[250,250,0],"ix":1},"s":{"a":0,"k":[40,40,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[221.889,-160.282],[-98.672,160.282],[-221.889,37.063]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":90,"s":[100],"e":[75]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":100.8,"s":[75],"e":[0]},{"t":114}],"ix":1},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":90,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[250,244.8],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":90,"op":900,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Shape Layer 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[250,331.2,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":32,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-220,-115],[-300,115],[-252,115],[-172,-115]],"c":true}],"e":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[216,-115],[136,115],[184,115],[264,-115]],"c":true}]},{"t":61}],"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"}],"shapes":[{"ty":"rc","d":1,"s":{"a":0,"k":[280,230],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":36,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.840000107709,0.360000011968,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false}],"ip":32,"op":62,"st":10,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Shape Layer 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-360,"ix":10},"p":{"a":0,"k":[250,250,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.615,0.615,0.667],"y":[1,1,1]},"o":{"x":[0.24,0.24,0.333],"y":[0,0,0]},"t":94,"s":[0,0,100],"e":[166,166,100]},{"t":120}],"ix":6}},"ao":0,"shapes":[{"ty":"rc","d":1,"s":{"a":0,"k":[280,280],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":742,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[0.098039224744,0.776470661163,0.4392157197,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":94,"s":[0],"e":[30]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.608],"y":[0]},"t":112,"s":[30],"e":[0]},{"t":120}],"ix":5},"lc":2,"lj":2,"bm":0,"d":[{"n":"d","nm":"dash","v":{"a":0,"k":0,"ix":1}},{"n":"g","nm":"gap","v":{"a":0,"k":110,"ix":2}},{"n":"o","nm":"offset","v":{"a":0,"k":0,"ix":7}}],"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false}],"ip":94,"op":121,"st":88,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Shape Layer 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":32,"s":[0],"e":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":61,"s":[0],"e":[-360]},{"t":81}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":10,"s":[250,250,0],"e":[250,331.2,0],"to":[0,13.533,0],"ti":[0,-13.533,0]},{"i":{"x":0.667,"y":0.667},"o":{"x":0.167,"y":0.167},"t":32,"s":[250,331.2,0],"e":[250,331.2,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":61,"s":[250,331.2,0],"e":[250,250,0],"to":[0,-13.533,0],"ti":[0,13.533,0]},{"t":81}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[0,0,100],"e":[100,100,100]},{"i":{"x":[0.751,0.751,0.751],"y":[1,1,1]},"o":{"x":[0.311,0.311,0.311],"y":[0,0,0]},"t":10,"s":[100,100,100],"e":[100,100,100]},{"i":{"x":[0.746,0.746,0.746],"y":[1,1,1]},"o":{"x":[0.405,0.405,0.405],"y":[0,0,0]},"t":73,"s":[100,100,100],"e":[126,126,100]},{"t":81}],"ix":6}},"ao":0,"shapes":[{"ty":"rc","d":1,"s":{"a":1,"k":[{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":10,"s":[280,280],"e":[280,230]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.167,0.167],"y":[0,0]},"t":32,"s":[280,230],"e":[280,230]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":61,"s":[280,230],"e":[280,280]},{"t":81}],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":10,"s":[742],"e":[36]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":32,"s":[36],"e":[36]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":61,"s":[36],"e":[742]},{"t":81}],"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":73,"s":[1,0.756862804936,0.027450982262,1],"e":[0.098039217293,0.776470601559,0.439215689898,1]},{"t":81}],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false}],"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"Lock Handle Outlines","parent":5,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":50,"s":[0],"e":[-15]},{"t":55}],"ix":10},"p":{"a":0,"k":[-82.537,-107,0],"ix":2},"a":{"a":0,"k":[146.829,217.75,0],"ix":1},"s":{"a":0,"k":[80,80,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[-56.978,0],[0,-47.575],[0,0]],"o":[[0,0],[-0.002,-47.575],[56.977,0],[0,0],[0,0]],"v":[[-103.166,92.292],[-103.166,-6.152],[0,-92.292],[103.168,-6.152],[103.168,92.292]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.07058823529411765,0.07450980392156863,0.058823529411764705,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":64.642,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":50,"s":[100],"e":[84]},{"t":55}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":3,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":10,"s":[249.995,350],"e":[249.995,125.458],"to":[0,-37.424],"ti":[0,37.424]},{"i":{"x":0.667,"y":0.667},"o":{"x":0.167,"y":0.167},"t":32,"s":[249.995,125.458],"e":[249.995,125.458],"to":[0,0],"ti":[0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":61,"s":[249.995,125.458],"e":[249.995,372],"to":[0,41.09],"ti":[0,-41.09]},{"t":73}],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":10,"op":74,"st":0,"bm":0}],"markers":[]}')}},function(e){e.O(0,[8405,4050,4705,5390,3109,6486,6452,9593,7486,4049,6323,9898,4241,809,3393,7084,3478,504,282,2971,7023,1744],function(){return e(e.s=85435)}),_N_E=e.O()}]);
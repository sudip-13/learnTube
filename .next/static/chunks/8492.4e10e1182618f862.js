(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8492],{9535:function(e){"use strict";var t=function(e){var t;return!!e&&"object"==typeof e&&"[object RegExp]"!==(t=Object.prototype.toString.call(e))&&"[object Date]"!==t&&e.$$typeof!==r},r="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function n(e,t){return!1!==t.clone&&t.isMergeableObject(e)?l(Array.isArray(e)?[]:{},e,t):e}function a(e,t,r){return e.concat(t).map(function(e){return n(e,r)})}function o(e){return Object.keys(e).concat(Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return Object.propertyIsEnumerable.call(e,t)}):[])}function i(e,t){try{return t in e}catch(e){return!1}}function l(e,r,s){(s=s||{}).arrayMerge=s.arrayMerge||a,s.isMergeableObject=s.isMergeableObject||t,s.cloneUnlessOtherwiseSpecified=n;var u,c,y=Array.isArray(r);return y!==Array.isArray(e)?n(r,s):y?s.arrayMerge(e,r,s):(c={},(u=s).isMergeableObject(e)&&o(e).forEach(function(t){c[t]=n(e[t],u)}),o(r).forEach(function(t){(!i(e,t)||Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))&&(i(e,t)&&u.isMergeableObject(r[t])?c[t]=(function(e,t){if(!t.customMerge)return l;var r=t.customMerge(e);return"function"==typeof r?r:l})(t,u)(e[t],r[t],u):c[t]=n(r[t],u))}),c)}l.all=function(e,t){if(!Array.isArray(e))throw Error("first argument should be an array");return e.reduce(function(e,r){return l(e,r,t)},{})},e.exports=l},24054:function(e){function t(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(Error("Failed to load "+this.src),e)}}e.exports=function(e,r,n){var a=document.head||document.getElementsByTagName("head")[0],o=document.createElement("script");"function"==typeof r&&(n=r,r={}),r=r||{},n=n||function(){},o.type=r.type||"text/javascript",o.charset=r.charset||"utf8",o.async=!("async"in r)||!!r.async,o.src=e,r.attrs&&function(e,t){for(var r in t)e.setAttribute(r,t[r])}(o,r.attrs),r.text&&(o.text=""+r.text),("onload"in o?t:function(e,t){e.onreadystatechange=function(){("complete"==this.readyState||"loaded"==this.readyState)&&(this.onreadystatechange=null,t(null,e))}})(o,n),o.onload||t(o,n),a.appendChild(o)}},75356:function(e,t,r){"use strict";r.r(t);var n=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function a(e,t){if(e.length!==t.length)return!1;for(var r,a,o=0;o<e.length;o++)if(!((r=e[o])===(a=t[o])||n(r)&&n(a)))return!1;return!0}t.default=function(e,t){void 0===t&&(t=a);var r,n,o=[],i=!1;return function(){for(var a=[],l=0;l<arguments.length;l++)a[l]=arguments[l];return i&&r===this&&t(a,o)||(n=e.apply(this,a),i=!0,r=this,o=a),n}}},20450:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,o){try{return function e(o,i){if(o===i)return!0;if(o&&i&&"object"==typeof o&&"object"==typeof i){var l,s,u,c;if(o.constructor!==i.constructor)return!1;if(Array.isArray(o)){if((l=o.length)!=i.length)return!1;for(s=l;0!=s--;)if(!e(o[s],i[s]))return!1;return!0}if(r&&o instanceof Map&&i instanceof Map){if(o.size!==i.size)return!1;for(c=o.entries();!(s=c.next()).done;)if(!i.has(s.value[0]))return!1;for(c=o.entries();!(s=c.next()).done;)if(!e(s.value[1],i.get(s.value[0])))return!1;return!0}if(n&&o instanceof Set&&i instanceof Set){if(o.size!==i.size)return!1;for(c=o.entries();!(s=c.next()).done;)if(!i.has(s.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(o)&&ArrayBuffer.isView(i)){if((l=o.length)!=i.length)return!1;for(s=l;0!=s--;)if(o[s]!==i[s])return!1;return!0}if(o.constructor===RegExp)return o.source===i.source&&o.flags===i.flags;if(o.valueOf!==Object.prototype.valueOf&&"function"==typeof o.valueOf&&"function"==typeof i.valueOf)return o.valueOf()===i.valueOf();if(o.toString!==Object.prototype.toString&&"function"==typeof o.toString&&"function"==typeof i.toString)return o.toString()===i.toString();if((l=(u=Object.keys(o)).length)!==Object.keys(i).length)return!1;for(s=l;0!=s--;)if(!Object.prototype.hasOwnProperty.call(i,u[s]))return!1;if(t&&o instanceof Element)return!1;for(s=l;0!=s--;)if(("_owner"!==u[s]&&"__v"!==u[s]&&"__o"!==u[s]||!o.$$typeof)&&!e(o[u[s]],i[u[s]]))return!1;return!0}return o!=o&&i!=i}(e,o)}catch(e){if((e.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw e}}},68348:function(e,t,r){var n=Object.create,a=Object.defineProperty,o=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,l=Object.getPrototypeOf,s=Object.prototype.hasOwnProperty,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let l of i(t))s.call(e,l)||l===r||a(e,l,{get:()=>t[l],enumerable:!(n=o(t,l))||n.enumerable});return e},y=(e,t,r)=>(r=null!=e?n(l(e)):{},c(!t&&e&&e.__esModule?r:a(r,"default",{value:e,enumerable:!0}),e)),p=(e,t,r)=>(u(e,"symbol"!=typeof t?t+"":t,r),r),d={};((e,t)=>{for(var r in t)a(e,r,{get:t[r],enumerable:!0})})(d,{default:()=>P}),e.exports=c(a({},"__esModule",{value:!0}),d);var f=y(r(2265)),h=y(r(20450)),m=r(44291),b=r(52975);class P extends f.Component{constructor(){super(...arguments),p(this,"mounted",!1),p(this,"isReady",!1),p(this,"isPlaying",!1),p(this,"isLoading",!0),p(this,"loadOnReady",null),p(this,"startOnPlay",!0),p(this,"seekOnPlay",null),p(this,"onDurationCalled",!1),p(this,"handlePlayerMount",e=>{if(this.player){this.progress();return}this.player=e,this.player.load(this.props.url),this.progress()}),p(this,"getInternalPlayer",e=>this.player?this.player[e]:null),p(this,"progress",()=>{if(this.props.url&&this.player&&this.isReady){let e=this.getCurrentTime()||0,t=this.getSecondsLoaded(),r=this.getDuration();if(r){let n={playedSeconds:e,played:e/r};null!==t&&(n.loadedSeconds=t,n.loaded=t/r),(n.playedSeconds!==this.prevPlayed||n.loadedSeconds!==this.prevLoaded)&&this.props.onProgress(n),this.prevPlayed=n.playedSeconds,this.prevLoaded=n.loadedSeconds}}this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval)}),p(this,"handleReady",()=>{if(!this.mounted)return;this.isReady=!0,this.isLoading=!1;let{onReady:e,playing:t,volume:r,muted:n}=this.props;e(),n||null===r||this.player.setVolume(r),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):t&&this.player.play(),this.handleDurationCheck()}),p(this,"handlePlay",()=>{this.isPlaying=!0,this.isLoading=!1;let{onStart:e,onPlay:t,playbackRate:r}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&1!==r&&this.player.setPlaybackRate(r),e(),this.startOnPlay=!1),t(),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck()}),p(this,"handlePause",e=>{this.isPlaying=!1,this.isLoading||this.props.onPause(e)}),p(this,"handleEnded",()=>{let{activePlayer:e,loop:t,onEnded:r}=this.props;e.loopOnEnded&&t&&this.seekTo(0),t||(this.isPlaying=!1,r())}),p(this,"handleError",(...e)=>{this.isLoading=!1,this.props.onError(...e)}),p(this,"handleDurationCheck",()=>{clearTimeout(this.durationCheckTimeout);let e=this.getDuration();e?this.onDurationCalled||(this.props.onDuration(e),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)}),p(this,"handleLoaded",()=>{this.isLoading=!1})}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(e){if(!this.player)return;let{url:t,playing:r,volume:n,muted:a,playbackRate:o,pip:i,loop:l,activePlayer:s,disableDeferredLoading:u}=this.props;if(!(0,h.default)(e.url,t)){if(this.isLoading&&!s.forceLoad&&!u&&!(0,b.isMediaStream)(t)){console.warn(`ReactPlayer: the attempt to load ${t} is being deferred until the player has loaded`),this.loadOnReady=t;return}this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(t,this.isReady)}e.playing||!r||this.isPlaying||this.player.play(),e.playing&&!r&&this.isPlaying&&this.player.pause(),!e.pip&&i&&this.player.enablePIP&&this.player.enablePIP(),e.pip&&!i&&this.player.disablePIP&&this.player.disablePIP(),e.volume!==n&&null!==n&&this.player.setVolume(n),e.muted!==a&&(a?this.player.mute():(this.player.unmute(),null!==n&&setTimeout(()=>this.player.setVolume(n)))),e.playbackRate!==o&&this.player.setPlaybackRate&&this.player.setPlaybackRate(o),e.loop!==l&&this.player.setLoop&&this.player.setLoop(l)}getDuration(){return this.isReady?this.player.getDuration():null}getCurrentTime(){return this.isReady?this.player.getCurrentTime():null}getSecondsLoaded(){return this.isReady?this.player.getSecondsLoaded():null}seekTo(e,t,r){if(!this.isReady){0!==e&&(this.seekOnPlay=e,setTimeout(()=>{this.seekOnPlay=null},5e3));return}if(t?"fraction"===t:e>0&&e<1){let t=this.player.getDuration();if(!t){console.warn("ReactPlayer: could not seek using fraction –\xa0duration not yet available");return}this.player.seekTo(t*e,r);return}this.player.seekTo(e,r)}render(){let e=this.props.activePlayer;return e?f.default.createElement(e,{...this.props,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError}):null}}p(P,"displayName","Player"),p(P,"propTypes",m.propTypes),p(P,"defaultProps",m.defaultProps)},10742:function(e,t,r){var n=Object.create,a=Object.defineProperty,o=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,l=Object.getPrototypeOf,s=Object.prototype.hasOwnProperty,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let l of i(t))s.call(e,l)||l===r||a(e,l,{get:()=>t[l],enumerable:!(n=o(t,l))||n.enumerable});return e},y=(e,t,r)=>(r=null!=e?n(l(e)):{},c(!t&&e&&e.__esModule?r:a(r,"default",{value:e,enumerable:!0}),e)),p=(e,t,r)=>(u(e,"symbol"!=typeof t?t+"":t,r),r),d={};((e,t)=>{for(var r in t)a(e,r,{get:t[r],enumerable:!0})})(d,{createReactPlayer:()=>T}),e.exports=c(a({},"__esModule",{value:!0}),d);var f=y(r(2265)),h=y(r(9535)),m=y(r(75356)),b=y(r(20450)),P=r(44291),g=r(52975),w=y(r(68348));let v=(0,g.lazy)(()=>r.e(7664).then(r.t.bind(r,56147,23))),O="undefined"!=typeof window&&window.document&&"undefined"!=typeof document,k=void 0!==r.g&&r.g.window&&r.g.window.document,_=Object.keys(P.propTypes),S=O||k?f.Suspense:()=>null,j=[],T=(e,t)=>{var r;return r=class extends f.Component{constructor(){super(...arguments),p(this,"state",{showPreview:!!this.props.light}),p(this,"references",{wrapper:e=>{this.wrapper=e},player:e=>{this.player=e}}),p(this,"handleClickPreview",e=>{this.setState({showPreview:!1}),this.props.onClickPreview(e)}),p(this,"showPreview",()=>{this.setState({showPreview:!0})}),p(this,"getDuration",()=>this.player?this.player.getDuration():null),p(this,"getCurrentTime",()=>this.player?this.player.getCurrentTime():null),p(this,"getSecondsLoaded",()=>this.player?this.player.getSecondsLoaded():null),p(this,"getInternalPlayer",(e="player")=>this.player?this.player.getInternalPlayer(e):null),p(this,"seekTo",(e,t,r)=>{if(!this.player)return null;this.player.seekTo(e,t,r)}),p(this,"handleReady",()=>{this.props.onReady(this)}),p(this,"getActivePlayer",(0,m.default)(r=>{for(let t of[...j,...e])if(t.canPlay(r))return t;return t||null})),p(this,"getConfig",(0,m.default)((e,t)=>{let{config:r}=this.props;return h.default.all([P.defaultProps.config,P.defaultProps.config[t]||{},r,r[t]||{}])})),p(this,"getAttributes",(0,m.default)(e=>(0,g.omit)(this.props,_))),p(this,"renderActivePlayer",e=>{if(!e)return null;let t=this.getActivePlayer(e);if(!t)return null;let r=this.getConfig(e,t.key);return f.default.createElement(w.default,{...this.props,key:t.key,ref:this.references.player,config:r,activePlayer:t.lazyPlayer||t,onReady:this.handleReady})})}shouldComponentUpdate(e,t){return!(0,b.default)(this.props,e)||!(0,b.default)(this.state,t)}componentDidUpdate(e){let{light:t}=this.props;!e.light&&t&&this.setState({showPreview:!0}),e.light&&!t&&this.setState({showPreview:!1})}renderPreview(e){if(!e)return null;let{light:t,playIcon:r,previewTabIndex:n,oEmbedUrl:a,previewAriaLabel:o}=this.props;return f.default.createElement(v,{url:e,light:t,playIcon:r,previewTabIndex:n,previewAriaLabel:o,oEmbedUrl:a,onClick:this.handleClickPreview})}render(){let{url:e,style:t,width:r,height:n,fallback:a,wrapper:o}=this.props,{showPreview:i}=this.state,l=this.getAttributes(e),s="string"==typeof o?this.references.wrapper:void 0;return f.default.createElement(o,{ref:s,style:{...t,width:r,height:n},...l},f.default.createElement(S,{fallback:a},i?this.renderPreview(e):this.renderActivePlayer(e)))}},p(r,"displayName","ReactPlayer"),p(r,"propTypes",P.propTypes),p(r,"defaultProps",P.defaultProps),p(r,"addCustomPlayer",e=>{j.push(e)}),p(r,"removeCustomPlayers",()=>{j.length=0}),p(r,"canPlay",t=>{for(let r of[...j,...e])if(r.canPlay(t))return!0;return!1}),p(r,"canEnablePIP",t=>{for(let r of[...j,...e])if(r.canEnablePIP&&r.canEnablePIP(t))return!0;return!1}),r}},88492:function(e,t,r){let n,a,o;var i=Object.create,l=Object.defineProperty,s=Object.getOwnPropertyDescriptor,u=Object.getOwnPropertyNames,c=Object.getPrototypeOf,y=Object.prototype.hasOwnProperty,p=(e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let a of u(t))y.call(e,a)||a===r||l(e,a,{get:()=>t[a],enumerable:!(n=s(t,a))||n.enumerable});return e},d={};((e,t)=>{for(var r in t)l(e,r,{get:t[r],enumerable:!0})})(d,{default:()=>b}),e.exports=p(l({},"__esModule",{value:!0}),d);var f=(o=null!=(n=r(63872))?i(c(n)):{},p(!a&&n&&n.__esModule?o:l(o,"default",{value:n,enumerable:!0}),n)),h=r(10742);let m=f.default[f.default.length-1];var b=(0,h.createReactPlayer)(f.default,m)},84170:function(e,t,r){var n=Object.defineProperty,a=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,i=Object.prototype.hasOwnProperty,l={};((e,t)=>{for(var r in t)n(e,r,{get:t[r],enumerable:!0})})(l,{AUDIO_EXTENSIONS:()=>k,DASH_EXTENSIONS:()=>j,FLV_EXTENSIONS:()=>T,HLS_EXTENSIONS:()=>S,MATCH_URL_DAILYMOTION:()=>g,MATCH_URL_FACEBOOK:()=>d,MATCH_URL_FACEBOOK_WATCH:()=>f,MATCH_URL_KALTURA:()=>O,MATCH_URL_MIXCLOUD:()=>w,MATCH_URL_MUX:()=>p,MATCH_URL_SOUNDCLOUD:()=>c,MATCH_URL_STREAMABLE:()=>h,MATCH_URL_TWITCH_CHANNEL:()=>P,MATCH_URL_TWITCH_VIDEO:()=>b,MATCH_URL_VIDYARD:()=>v,MATCH_URL_VIMEO:()=>y,MATCH_URL_WISTIA:()=>m,MATCH_URL_YOUTUBE:()=>u,VIDEO_EXTENSIONS:()=>_,canPlay:()=>A}),e.exports=((e,t,r,l)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let s of o(t))i.call(e,s)||s===r||n(e,s,{get:()=>t[s],enumerable:!(l=a(t,s))||l.enumerable});return e})(n({},"__esModule",{value:!0}),l);var s=r(52975);let u=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,c=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/,y=/vimeo\.com\/(?!progressive_redirect).+/,p=/stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,d=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,f=/^https?:\/\/fb\.watch\/.+$/,h=/streamable\.com\/([a-z0-9]+)$/,m=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,b=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,P=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,g=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,w=/mixcloud\.com\/([^/]+\/[^/]+)/,v=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,O=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,k=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,_=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,S=/\.(m3u8)($|\?)/i,j=/\.(mpd)($|\?)/i,T=/\.(flv)($|\?)/i,E=e=>{if(e instanceof Array){for(let t of e)if("string"==typeof t&&E(t)||E(t.src))return!0;return!1}return!!((0,s.isMediaStream)(e)||(0,s.isBlobUrl)(e))||k.test(e)||_.test(e)||S.test(e)||j.test(e)||T.test(e)},A={youtube:e=>e instanceof Array?e.every(e=>u.test(e)):u.test(e),soundcloud:e=>c.test(e)&&!k.test(e),vimeo:e=>y.test(e)&&!_.test(e)&&!S.test(e),mux:e=>p.test(e),facebook:e=>d.test(e)||f.test(e),streamable:e=>h.test(e),wistia:e=>m.test(e),twitch:e=>b.test(e)||P.test(e),dailymotion:e=>g.test(e),mixcloud:e=>w.test(e),vidyard:e=>v.test(e),kaltura:e=>O.test(e),file:E}},63872:function(e,t,r){var n=Object.defineProperty,a=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,i=Object.prototype.hasOwnProperty,l={};((e,t)=>{for(var r in t)n(e,r,{get:t[r],enumerable:!0})})(l,{default:()=>c}),e.exports=((e,t,r,l)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let s of o(t))i.call(e,s)||s===r||n(e,s,{get:()=>t[s],enumerable:!(l=a(t,s))||l.enumerable});return e})(n({},"__esModule",{value:!0}),l);var s=r(52975),u=r(84170),c=[{key:"youtube",name:"YouTube",canPlay:u.canPlay.youtube,lazyPlayer:(0,s.lazy)(()=>r.e(4439).then(r.t.bind(r,24665,23)))},{key:"soundcloud",name:"SoundCloud",canPlay:u.canPlay.soundcloud,lazyPlayer:(0,s.lazy)(()=>r.e(6125).then(r.t.bind(r,61637,23)))},{key:"vimeo",name:"Vimeo",canPlay:u.canPlay.vimeo,lazyPlayer:(0,s.lazy)(()=>r.e(3743).then(r.t.bind(r,14781,23)))},{key:"mux",name:"Mux",canPlay:u.canPlay.mux,lazyPlayer:(0,s.lazy)(()=>r.e(4258).then(r.t.bind(r,12936,23)))},{key:"facebook",name:"Facebook",canPlay:u.canPlay.facebook,lazyPlayer:(0,s.lazy)(()=>r.e(2121).then(r.t.bind(r,73574,23)))},{key:"streamable",name:"Streamable",canPlay:u.canPlay.streamable,lazyPlayer:(0,s.lazy)(()=>r.e(2546).then(r.t.bind(r,79243,23)))},{key:"wistia",name:"Wistia",canPlay:u.canPlay.wistia,lazyPlayer:(0,s.lazy)(()=>r.e(8055).then(r.t.bind(r,12842,23)))},{key:"twitch",name:"Twitch",canPlay:u.canPlay.twitch,lazyPlayer:(0,s.lazy)(()=>r.e(6216).then(r.t.bind(r,96663,23)))},{key:"dailymotion",name:"DailyMotion",canPlay:u.canPlay.dailymotion,lazyPlayer:(0,s.lazy)(()=>r.e(7596).then(r.t.bind(r,8816,23)))},{key:"mixcloud",name:"Mixcloud",canPlay:u.canPlay.mixcloud,lazyPlayer:(0,s.lazy)(()=>r.e(4667).then(r.t.bind(r,21664,23)))},{key:"vidyard",name:"Vidyard",canPlay:u.canPlay.vidyard,lazyPlayer:(0,s.lazy)(()=>r.e(8888).then(r.t.bind(r,24812,23)))},{key:"kaltura",name:"Kaltura",canPlay:u.canPlay.kaltura,lazyPlayer:(0,s.lazy)(()=>r.e(261).then(r.t.bind(r,54100,23)))},{key:"file",name:"FilePlayer",canPlay:u.canPlay.file,canEnablePIP:e=>u.canPlay.file(e)&&(document.pictureInPictureEnabled||(0,s.supportsWebKitPresentationMode)())&&!u.AUDIO_EXTENSIONS.test(e),lazyPlayer:(0,s.lazy)(()=>r.e(6011).then(r.t.bind(r,16776,23)))}]},44291:function(e,t,r){let n,a,o;var i=Object.create,l=Object.defineProperty,s=Object.getOwnPropertyDescriptor,u=Object.getOwnPropertyNames,c=Object.getPrototypeOf,y=Object.prototype.hasOwnProperty,p=(e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let a of u(t))y.call(e,a)||a===r||l(e,a,{get:()=>t[a],enumerable:!(n=s(t,a))||n.enumerable});return e},d={};((e,t)=>{for(var r in t)l(e,r,{get:t[r],enumerable:!0})})(d,{defaultProps:()=>S,propTypes:()=>k}),e.exports=p(l({},"__esModule",{value:!0}),d);let{string:f,bool:h,number:m,array:b,oneOfType:P,shape:g,object:w,func:v,node:O}=(o=null!=(n=r(41448))?i(c(n)):{},p(!a&&n&&n.__esModule?o:l(o,"default",{value:n,enumerable:!0}),n)).default,k={url:P([f,b,w]),playing:h,loop:h,controls:h,volume:m,muted:h,playbackRate:m,width:P([f,m]),height:P([f,m]),style:w,progressInterval:m,playsinline:h,pip:h,stopOnUnmount:h,light:P([h,f,w]),playIcon:O,previewTabIndex:m,previewAriaLabel:f,fallback:O,oEmbedUrl:f,wrapper:P([f,v,g({render:v.isRequired})]),config:g({soundcloud:g({options:w}),youtube:g({playerVars:w,embedOptions:w,onUnstarted:v}),facebook:g({appId:f,version:f,playerId:f,attributes:w}),dailymotion:g({params:w}),vimeo:g({playerOptions:w,title:f}),mux:g({attributes:w,version:f}),file:g({attributes:w,tracks:b,forceVideo:h,forceAudio:h,forceHLS:h,forceSafariHLS:h,forceDisableHls:h,forceDASH:h,forceFLV:h,hlsOptions:w,hlsVersion:f,dashVersion:f,flvVersion:f}),wistia:g({options:w,playerId:f,customControls:b}),mixcloud:g({options:w}),twitch:g({options:w,playerId:f}),vidyard:g({options:w})}),onReady:v,onStart:v,onPlay:v,onPause:v,onBuffer:v,onBufferEnd:v,onEnded:v,onError:v,onDuration:v,onSeek:v,onPlaybackRateChange:v,onPlaybackQualityChange:v,onProgress:v,onClickPreview:v,onEnablePIP:v,onDisablePIP:v},_=()=>{},S={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,previewAriaLabel:"",oEmbedUrl:"https://noembed.com/embed?url={url}",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:_},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},title:null},mux:{attributes:{},version:"2"},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.1.4",dashVersion:"3.1.3",flvVersion:"1.5.0",forceDisableHls:!1},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:_,onStart:_,onPlay:_,onPause:_,onBuffer:_,onBufferEnd:_,onEnded:_,onError:_,onDuration:_,onSeek:_,onPlaybackRateChange:_,onPlaybackQualityChange:_,onProgress:_,onClickPreview:_,onEnablePIP:_,onDisablePIP:_}},52975:function(e,t,r){var n=Object.create,a=Object.defineProperty,o=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,l=Object.getPrototypeOf,s=Object.prototype.hasOwnProperty,u=(e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let l of i(t))s.call(e,l)||l===r||a(e,l,{get:()=>t[l],enumerable:!(n=o(t,l))||n.enumerable});return e},c=(e,t,r)=>(r=null!=e?n(l(e)):{},u(!t&&e&&e.__esModule?r:a(r,"default",{value:e,enumerable:!0}),e)),y={};((e,t)=>{for(var r in t)a(e,r,{get:t[r],enumerable:!0})})(y,{callPlayer:()=>C,getConfig:()=>E,getSDK:()=>T,isBlobUrl:()=>I,isMediaStream:()=>M,lazy:()=>h,omit:()=>A,parseEndTime:()=>O,parseStartTime:()=>v,queryString:()=>_,randomString:()=>k,supportsWebKitPresentationMode:()=>R}),e.exports=u(a({},"__esModule",{value:!0}),y);var p=c(r(2265)),d=c(r(24054)),f=c(r(9535));let h=e=>p.default.lazy(async()=>{let t=await e();return"function"==typeof t.default?t:t.default}),m=/[?&#](?:start|t)=([0-9hms]+)/,b=/[?&#]end=([0-9hms]+)/,P=/(\d+)(h|m|s)/g,g=/^\d+$/;function w(e,t){if(e instanceof Array)return;let r=e.match(t);if(r){let e=r[1];if(e.match(P))return function(e){let t=0,r=P.exec(e);for(;null!==r;){let[,n,a]=r;"h"===a&&(t+=3600*parseInt(n,10)),"m"===a&&(t+=60*parseInt(n,10)),"s"===a&&(t+=parseInt(n,10)),r=P.exec(e)}return t}(e);if(g.test(e))return parseInt(e)}}function v(e){return w(e,m)}function O(e){return w(e,b)}function k(){return Math.random().toString(36).substr(2,5)}function _(e){return Object.keys(e).map(t=>`${t}=${e[t]}`).join("&")}function S(e){return window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:window.module&&window.module.exports&&window.module.exports[e]?window.module.exports[e]:null}let j={},T=function(e,t,r=null,n=()=>!0,a=d.default){let o=S(t);return o&&n(o)?Promise.resolve(o):new Promise((n,o)=>{if(j[e]){j[e].push({resolve:n,reject:o});return}j[e]=[{resolve:n,reject:o}];let i=t=>{j[e].forEach(e=>e.resolve(t))};if(r){let e=window[r];window[r]=function(){e&&e(),i(S(t))}}a(e,n=>{n?(j[e].forEach(e=>e.reject(n)),j[e]=null):r||i(S(t))})})};function E(e,t){return(0,f.default)(t.config,e.config)}function A(e,...t){let r=[].concat(...t),n={};for(let t of Object.keys(e))-1===r.indexOf(t)&&(n[t]=e[t]);return n}function C(e,...t){if(!this.player||!this.player[e]){let t=`ReactPlayer: ${this.constructor.displayName} player could not call %c${e}%c \u2013 `;return this.player?this.player[e]||(t+="The method was not available"):t+="The player was not available",console.warn(t,"font-weight: bold",""),null}return this.player[e](...t)}function M(e){return"undefined"!=typeof window&&void 0!==window.MediaStream&&e instanceof window.MediaStream}function I(e){return/^blob:/.test(e)}function R(e=document.createElement("video")){let t=!1===/iPhone|iPod/.test(navigator.userAgent);return e.webkitSupportsPresentationMode&&"function"==typeof e.webkitSetPresentationMode&&t}}}]);
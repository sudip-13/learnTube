(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6216],{96663:function(e,t,r){let a,s,l;var n=Object.create,i=Object.defineProperty,o=Object.getOwnPropertyDescriptor,p=Object.getOwnPropertyNames,h=Object.getPrototypeOf,d=Object.prototype.hasOwnProperty,u=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,y=(e,t,r,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let s of p(t))d.call(e,s)||s===r||i(e,s,{get:()=>t[s],enumerable:!(a=o(t,s))||a.enumerable});return e},c=(e,t,r)=>(u(e,"symbol"!=typeof t?t+"":t,r),r),m={};((e,t)=>{for(var r in t)i(e,r,{get:t[r],enumerable:!0})})(m,{default:()=>g}),e.exports=y(i({},"__esModule",{value:!0}),m);var P=(l=null!=(a=r(2265))?n(h(a)):{},y(!s&&a&&a.__esModule?l:i(l,"default",{value:a,enumerable:!0}),a)),f=r(52975),b=r(84170);class g extends P.Component{constructor(){super(...arguments),c(this,"callPlayer",f.callPlayer),c(this,"playerID",this.props.config.playerId||`twitch-player-${(0,f.randomString)()}`),c(this,"mute",()=>{this.callPlayer("setMuted",!0)}),c(this,"unmute",()=>{this.callPlayer("setMuted",!1)})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e,t){let{playsinline:r,onError:a,config:s,controls:l}=this.props,n=b.MATCH_URL_TWITCH_CHANNEL.test(e),i=n?e.match(b.MATCH_URL_TWITCH_CHANNEL)[1]:e.match(b.MATCH_URL_TWITCH_VIDEO)[1];if(t){n?this.player.setChannel(i):this.player.setVideo("v"+i);return}(0,f.getSDK)("https://player.twitch.tv/js/embed/v1.js","Twitch").then(t=>{this.player=new t.Player(this.playerID,{video:n?"":i,channel:n?i:"",height:"100%",width:"100%",playsinline:r,autoplay:this.props.playing,muted:this.props.muted,controls:!!n||l,time:(0,f.parseStartTime)(e),...s.options});let{READY:a,PLAYING:o,PAUSE:p,ENDED:h,ONLINE:d,OFFLINE:u,SEEK:y}=t.Player;this.player.addEventListener(a,this.props.onReady),this.player.addEventListener(o,this.props.onPlay),this.player.addEventListener(p,this.props.onPause),this.player.addEventListener(h,this.props.onEnded),this.player.addEventListener(y,this.props.onSeek),this.player.addEventListener(d,this.props.onLoaded),this.player.addEventListener(u,this.props.onLoaded)},a)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){this.callPlayer("pause")}seekTo(e,t=!0){this.callPlayer("seek",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentTime")}getSecondsLoaded(){return null}render(){return P.default.createElement("div",{style:{width:"100%",height:"100%"},id:this.playerID})}}c(g,"displayName","Twitch"),c(g,"canPlay",b.canPlay.twitch),c(g,"loopOnEnded",!0)}}]);
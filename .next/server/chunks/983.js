"use strict";exports.id=983,exports.ids=[983],exports.modules={10983:(e,r,t)=>{t.d(r,{$4:()=>d,Cp:()=>h,F_:()=>l,Fe:()=>v,Gn:()=>S,Kp:()=>b,QJ:()=>y,Rp:()=>f,UQ:()=>w});var n=t(18591),u=t(17577);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function a(e,r,t,n){return new(t||(t=Promise))(function(u,a){function s(e){try{o(n.next(e))}catch(e){a(e)}}function c(e){try{o(n.throw(e))}catch(e){a(e)}}function o(e){var r;e.done?u(e.value):((r=e.value)instanceof t?r:new t(function(e){e(r)})).then(s,c)}o((n=n.apply(e,r||[])).next())})}function s(e,r){var t,n,u,a,s={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(t)throw TypeError("Generator is already executing.");for(;s;)try{if(t=1,n&&(u=2&a[0]?n.return:a[0]?n.throw||((u=n.return)&&u.call(n),0):n.next)&&!(u=u.call(n,a[1])).done)return u;switch(n=0,u&&(a=[2&a[0],u.value]),a[0]){case 0:case 1:u=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,n=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(u=(u=s.trys).length>0&&u[u.length-1])&&(6===a[0]||2===a[0])){s=0;continue}if(3===a[0]&&(!u||a[1]>u[0]&&a[1]<u[3])){s.label=a[1];break}if(6===a[0]&&s.label<u[1]){s.label=u[1],u=a;break}if(u&&s.label<u[2]){s.label=u[2],s.ops.push(a);break}u[2]&&s.ops.pop(),s.trys.pop();continue}a=r.call(e,s)}catch(e){a=[6,e],n=0}finally{t=u=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var c=function(){return(c=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var u in r=arguments[t])Object.prototype.hasOwnProperty.call(r,u)&&(e[u]=r[u]);return e}).apply(this,arguments)},o=function(e){return{loading:null==e,value:e}},i=function(e){var r=e?e():void 0,t=(0,u.useReducer)(function(e,r){switch(r.type){case"error":return c(c({},e),{error:r.error,loading:!1,value:void 0});case"reset":return o(r.defaultValue);case"value":return c(c({},e),{error:void 0,loading:!1,value:r.value});default:return e}},o(r)),n=t[0],a=t[1],s=(0,u.useCallback)(function(){a({type:"reset",defaultValue:e?e():void 0})},[e]),i=(0,u.useCallback)(function(e){a({type:"error",error:e})},[]),l=(0,u.useCallback)(function(e){a({type:"value",value:e})},[]);return(0,u.useMemo)(function(){return{error:n.error,loading:n.loading,reset:s,setError:i,setValue:l,value:n.value}},[n.error,n.loading,s,i,l,n.value])},l=function(e,r){var t=i(function(){return e.currentUser}),c=t.error,o=t.loading,l=t.setError,f=t.setValue,v=t.value;return(0,u.useEffect)(function(){var t=(0,n.Aj)(e,function(e){return a(void 0,void 0,void 0,function(){return s(this,function(t){switch(t.label){case 0:if(!(null==r?void 0:r.onUserChanged))return[3,4];t.label=1;case 1:return t.trys.push([1,3,,4]),[4,r.onUserChanged(e)];case 2:return t.sent(),[3,4];case 3:return l(t.sent()),[3,4];case 4:return f(e),[2]}})})},l);return function(){t()}},[e]),[v,o,c]},f=function(e,r){var t=(0,u.useState)(),c=t[0],o=t[1],i=(0,u.useState)(),l=i[0],f=i[1],v=(0,u.useState)(!1),d=v[0],h=v[1];return[(0,u.useCallback)(function(t,u){return a(void 0,void 0,void 0,function(){var a;return s(this,function(s){switch(s.label){case 0:h(!0),o(void 0),s.label=1;case 1:return s.trys.push([1,5,6,7]),[4,(0,n.Xb)(e,t,u)];case 2:if(a=s.sent(),!(r&&r.sendEmailVerification&&a.user))return[3,4];return[4,(0,n.w$)(a.user,r.emailVerificationOptions)];case 3:s.sent(),s.label=4;case 4:return f(a),[2,a];case 5:return o(s.sent()),[3,7];case 6:return h(!1),[7];case 7:return[2]}})})},[e,r]),l,d,c]},v=function(e){var r=(0,u.useState)(),t=r[0],c=r[1],o=(0,u.useState)(!1),i=o[0],l=o[1];return[(0,u.useCallback)(function(r,t){return a(void 0,void 0,void 0,function(){return s(this,function(u){switch(u.label){case 0:l(!0),c(void 0),u.label=1;case 1:return u.trys.push([1,3,4,5]),[4,(0,n.LS)(e,r,t)];case 2:return u.sent(),[2,!0];case 3:return c(u.sent()),[2,!1];case 4:return l(!1),[7];case 5:return[2]}})})},[e]),i,t]},d=function(e){var r=(0,u.useState)(),t=r[0],c=r[1],o=(0,u.useState)(!1),i=o[0],l=o[1];return[(0,u.useCallback)(function(r,t){return a(void 0,void 0,void 0,function(){return s(this,function(u){switch(u.label){case 0:l(!0),c(void 0),u.label=1;case 1:return u.trys.push([1,3,4,5]),[4,(0,n.oo)(e,r,t)];case 2:return u.sent(),[2,!0];case 3:return c(u.sent()),[2,!1];case 4:return l(!1),[7];case 5:return[2]}})})},[e]),i,t]},h=function(e){var r=(0,u.useState)(),t=r[0],c=r[1],o=(0,u.useState)(),i=o[0],l=o[1],f=(0,u.useState)(!1),v=f[0],d=f[1];return[(0,u.useCallback)(function(r,t){return a(void 0,void 0,void 0,function(){var u;return s(this,function(a){switch(a.label){case 0:d(!0),c(void 0),a.label=1;case 1:return a.trys.push([1,3,4,5]),[4,(0,n.e5)(e,r,t)];case 2:return l(u=a.sent()),[2,u];case 3:return c(a.sent()),[3,5];case 4:return d(!1),[7];case 5:return[2]}})})},[e]),i,v,t]},b=function(e){return p(e,(0,u.useCallback)(function(e,r){var t=new n.hJ;return e&&e.forEach(function(e){return t.addScope(e)}),r&&t.setCustomParameters(r),t},[]))},p=function(e,r){var t=(0,u.useState)(),c=t[0],o=t[1],i=(0,u.useState)(),l=i[0],f=i[1],v=(0,u.useState)(!1),d=v[0],h=v[1];return[(0,u.useCallback)(function(t,u){return a(void 0,void 0,void 0,function(){var a,c;return s(this,function(s){switch(s.label){case 0:h(!0),o(void 0),s.label=1;case 1:return s.trys.push([1,3,4,5]),a=r(t,u),[4,(0,n.rh)(e,a)];case 2:return f(c=s.sent()),[2,c];case 3:return o(s.sent()),[3,5];case 4:return h(!1),[7];case 5:return[2]}})})},[e,r]),l,d,c]},y=function(e){var r=(0,u.useState)(),t=r[0],n=r[1],c=(0,u.useState)(!1),o=c[0],i=c[1];return[(0,u.useCallback)(function(){return a(void 0,void 0,void 0,function(){return s(this,function(r){switch(r.label){case 0:i(!0),n(void 0),r.label=1;case 1:return r.trys.push([1,3,4,5]),[4,e.signOut()];case 2:return r.sent(),[2,!0];case 3:return n(r.sent()),[2,!1];case 4:return i(!1),[7];case 5:return[2]}})})},[e]),o,t]},w=function(e){var r=(0,u.useState)(),t=r[0],c=r[1],o=(0,u.useState)(!1),i=o[0],l=o[1];return[(0,u.useCallback)(function(r){return a(void 0,void 0,void 0,function(){return s(this,function(t){switch(t.label){case 0:l(!0),c(void 0),t.label=1;case 1:if(t.trys.push([1,5,6,7]),!e.currentUser)return[3,3];return[4,(0,n.gQ)(e.currentUser,r)];case 2:return t.sent(),[2,!0];case 3:throw Error("No user is logged in");case 4:return[3,7];case 5:return c(t.sent()),[2,!1];case 6:return l(!1),[7];case 7:return[2]}})})},[e]),i,t]},S=function(e){var r=(0,u.useState)(),t=r[0],c=r[1],o=(0,u.useState)(!1),i=o[0],l=o[1];return[(0,u.useCallback)(function(r){return a(void 0,void 0,void 0,function(){return s(this,function(t){switch(t.label){case 0:l(!0),c(void 0),t.label=1;case 1:if(t.trys.push([1,5,6,7]),!e.currentUser)return[3,3];return[4,(0,n.ck)(e.currentUser,r)];case 2:return t.sent(),[2,!0];case 3:throw Error("No user is logged in");case 4:return[3,7];case 5:return c(t.sent()),[2,!1];case 6:return l(!1),[7];case 7:return[2]}})})},[e]),i,t]}}};
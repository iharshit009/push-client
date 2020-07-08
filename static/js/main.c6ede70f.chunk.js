(this.webpackJsonppush_server_client=this.webpackJsonppush_server_client||[]).push([[0],{57:function(e,t,n){e.exports=n(68)},62:function(e,t,n){},63:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},64:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),i=n.n(o),c=(n(62),n(63),n(64),n(10)),l=n(11),s=n(112),u=n(116),g=n(117),p=n(118),m=n(69),d=n(123),f=n(119),h=n(122),v=n(120),b=n(115),E=n(29),w=n(110),y=n(121);function S(){var e=Object(a.useState)(""),t=Object(c.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)(""),l=Object(c.a)(i,2),s=l[0],u=l[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{variant:"h6",gutterBottom:!0},"Add public VAPID key & Server URL"),r.a.createElement(w.a,{container:!0,spacing:3},r.a.createElement(w.a,{item:!0,xs:12},r.a.createElement(y.a,{required:!0,id:"vapidkey",name:"vapidkey",label:"Public VAPID key",multiline:!0,fullWidth:!0,value:n,onChange:function(e){o(e.target.value),localStorage.setItem("Vapid",e.target.value)},autoComplete:"Public VAPID key"})),r.a.createElement(w.a,{item:!0,xs:12},r.a.createElement(y.a,{required:!0,id:"serverurl",name:"serverurl",label:"Server URL",fullWidth:!0,value:s,onChange:function(e){u(e.target.value),localStorage.setItem("Url",e.target.value)},autoComplete:"Server URL"}))))}function k(){var e=Object(a.useState)(localStorage.getItem("subs")),t=Object(c.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)(0),l=Object(c.a)(i,2),s=l[0],u=l[1];return Object(a.useEffect)((function(){o(localStorage.getItem("subs")),null===n&&(u(s+1),console.log(s))}),[s]),r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{variant:"h6",gutterBottom:!0},"Subscription object"),r.a.createElement(w.a,{container:!0,spacing:3},r.a.createElement(w.a,{item:!0,xs:12},r.a.createElement(E.a,{key:s,style:{wordBreak:"break-all"}},n))))}n(111),n(113),n(114),Object(s.a)((function(e){return{listItem:{padding:e.spacing(1,0)},total:{fontWeight:700},title:{marginTop:e.spacing(2)}}}));var j=localStorage.getItem("Url");function O(e){return fetch("".concat(j,"/notifications/subscribe"),{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})}function N(){var e=function(e){for(var t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),n=window.atob(t),a=new Uint8Array(n.length),r=0;r<n.length;++r)a[r]=n.charCodeAt(r);return a}(localStorage.getItem("Vapid"));"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.pushManager?t.pushManager.getSubscription().then((function(n){null===n?(console.log("No subscription detected, make a request."),t.pushManager.subscribe({applicationServerKey:e,userVisibleOnly:!0}).then((function(e){console.log("New subscription added."),O(e),localStorage.setItem("subs",JSON.stringify(e))})).catch((function(e){"granted"!==Notification.permission?console.log("Permission was not granted."):console.error("An error ocurred during the subscription process.",e)}))):(localStorage.setItem("subs",JSON.stringify(n)),console.log("Existed subscription detected."),O(n),console.log(localStorage.getItem("subs")))})):console.log("Push manager unavailable.")})).catch((function(e){console.error("An error ocurred during Service Worker registration.",e)}))}function A(){return r.a.createElement(E.a,{variant:"body2",color:"textSecondary",align:"center"},"Made with \u2661 by ",r.a.createElement(b.a,{color:"inherit",href:"https://www.linkedin.com/in/dhananjaypurohit/"},"Dhananjay Purohit")," ",".")}var I=Object(s.a)((function(e){return{appBar:{position:"relative"},layout:Object(l.a)({width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(2)),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:Object(l.a)({marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}),stepper:{padding:e.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)}}})),W=["VAPID key & Server URL","Generated Subscription object"];function P(){var e=I(),t=r.a.useState(0),n=Object(c.a)(t,2),a=n[0],o=n[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null),r.a.createElement(g.a,{position:"absolute",color:"default",className:e.appBar},r.a.createElement(p.a,null,r.a.createElement(E.a,{variant:"h6",color:"inherit",noWrap:!0},"Push Notifications demo"))),r.a.createElement("main",{className:e.layout},r.a.createElement(m.a,{className:e.paper},r.a.createElement(E.a,{component:"h1",variant:"h4",align:"center"},"Check push notification server"),r.a.createElement(d.a,{activeStep:a,className:e.stepper},W.map((function(e){return r.a.createElement(f.a,{key:e},r.a.createElement(h.a,null,e))}))),r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,0===a?r.a.createElement(S,null):r.a.createElement(k,null),r.a.createElement("div",{className:e.buttons},r.a.createElement(v.a,{variant:"contained",color:"primary",onClick:a===W.length-1?function(){o(a-1),localStorage.clear()}:function(){o(a+1),N()},className:e.button},a===W.length-1?"Back":"Next"))))),r.a.createElement(A,null)))}var C=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(P,null))},x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){var t=new URL("/push-client",window.location.href);if(t.origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat(t.origin,"/push-client/").concat("service-worker.js");x?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):B(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):B(n,e)}))}}(),localStorage.clear()}},[[57,1,2]]]);
//# sourceMappingURL=main.c6ede70f.chunk.js.map
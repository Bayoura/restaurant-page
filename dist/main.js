(()=>{"use strict";var e,n,t,r,o,a,i,c,s,l,d,u,p,m,f={28:(e,n,t)=>{t.d(n,{Z:()=>b});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),l=new URL(t(920),t.b),d=new URL(t(933),t.b),u=new URL(t(347),t.b),p=new URL(t(760),t.b),m=i()(o()),f=s()(l),g=s()(d),h=s()(u),v=s()(p);m.push([e.id,"@font-face {\n    font-family: 'Gideon Roman';\n    src: url("+f+") format('truetype'); \n}\n@font-face {\n    font-family: 'Redressed';\n    src: url("+g+") format('truetype'); \n}\n\n*,\n*::after,\n*::before {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    color: var(--eggshell);\n    font-family: 'Gideon Roman', Helvetica, cursive;\n}\n\n*:focus {\n    outline: 4px dotted var(--brown);\n}\n\n:root {\n    --green: hsl(103deg 13% 39%);\n    --green-80-transp: hsl(103deg 13% 39% / 80%);\n    --green-90-transp: hsl(103deg 13% 39% / 90%);\n    --eggshell: hsl(23deg 87% 94%);\n    --orange: hsl(23deg 68% 75%);\n    --brown: hsl(23deg 27% 31%);\n}\n\nbody {\n    background-image: url("+h+");\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center center;\n    background-attachment: fixed; /* Background image is fixed in the viewport so that it doesn’t move when the content’s height is greater than the image’s height */\n    background-color: var(--brown); /* background color that will be displayed while background image is loading */\n    display: flex;\n    justify-content: center;\n    min-height: 100vh; \n    min-width: 100vw;\n} \n\n#content {\n    background-color: hsl(0deg 100% 100% / 60%);\n    width: 1200px;\n    max-width: 85%;\n    position: relative;\n}\n\n/* -------------------NAVBAR--------------------- */\n\n.logo-container {\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n}\n\n.logo-container img {\n    height: 80px;\n}\n\nh1 {\n    color: var(--orange);\n    font-family: 'Redressed', Helvetica, cursive;\n    font-size: 4rem;\n}\n\nheader {\n    background-color: var(--green);\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 20px 35px;\n}\n\n.menu ul {\n    display: flex;\n    gap: 20px;\n}\n\n.menu ul li {\n    list-style: none;\n    font-size: 1.6rem;\n}\n\n.nav-link {\n    text-decoration: none;\n    position: relative;\n}\n\n/* underline hover animation */\n.nav-link::after {\n    content: '';\n    position: absolute;\n    width: 100%;\n    transform: scaleX(0);\n    height: 2px;\n    bottom: 0;\n    left: 0;\n    background-color: var(--eggshell);\n    transform-origin: bottom right;\n    transition: transform 0.25s ease-in;\n}\n\n.nav-link:hover::after {\n    transform: scaleX(1);\n    transform-origin: bottom left;\n}\n\n\n/* ----------------------WELCOME-BOX-------------------- */\n\n.welcome-box {\n    background-color:var(--green-80-transp);\n    border: 6px solid var(--green-90-transp);\n    border-radius: 5px;\n    text-align: center;\n    padding: 20px;\n    width: 80%;\n    max-width: 700px;\n    margin: 100px auto;\n}\n\nh2 {\n    margin-top: 25px;\n    margin-bottom: 20px;\n    font-size: 2.5rem;\n}\n\n.welcome-box p {\n    font-size: 1.5rem;\n    margin-bottom: 25px;\n}\n\n.welcome-box button {\n    background-color: var(--orange);\n    border: none;\n    border-radius: 3px;\n    color: hsl(103deg 13% 28%);\n    cursor: pointer;\n    font-size: 1.7rem;\n    font-weight: bold;\n    margin-bottom: 25px;\n    padding: 15px 10px;\n    transition: 300ms ease-in;\n}\n\n.welcome-box button:hover {\n    background-color: var(--eggshell);\n    color: var(--green);\n}\n\n/* footer {\n    text-align: center;\n    font-weight: 300;\n}\n\n.attribution {\n    padding: 20px 0 10px 0;\n    font-size: 0.875rem;\n}\n\n\n.credit,\n.credit a {\n    font-size: 0.625rem; \n    padding: 5px;\n}\n\nfooter a {\n    font-style: italic;\n    font-weight: 400;\n    color: #cddef8;\n} */\n\n@media (max-width: 767px) {\n    body {\n        background-image: url("+v+");\n    }\n    #content {\n        max-width: 70%;\n    }\n}",""]);const b=m},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),l=0;l<a.length;l++){var d=t(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},920:(e,n,t)=>{e.exports=t.p+"a63a077548c774e2bdc9.ttf"},933:(e,n,t)=>{e.exports=t.p+"6906003e71fba0eba09a.ttf"},760:(e,n,t)=>{e.exports=t.p+"c373ad2d7dbb8059d9ea.jpg"},347:(e,n,t)=>{e.exports=t.p+"25707a96ead5e3c77876.jpg"}},g={};function h(e){var n=g[e];if(void 0!==n)return n.exports;var t=g[e]={id:e,exports:{}};return f[e](t,t.exports,h),t.exports}h.m=f,h.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return h.d(n,{a:n}),n},h.d=(e,n)=>{for(var t in n)h.o(n,t)&&!h.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},h.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),h.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;h.g.importScripts&&(e=h.g.location+"");var n=h.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),h.p=e})(),h.b=document.baseURI||self.location.href,e=h(379),n=h.n(e),t=h(795),r=h.n(t),o=h(569),a=h.n(o),i=h(565),c=h.n(i),s=h(216),l=h.n(s),d=h(589),u=h.n(d),p=h(28),(m={}).styleTagTransform=u(),m.setAttributes=c(),m.insert=a().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=l(),n()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals,function(){const e=document.getElementById("content"),n=document.createElement("header"),t=document.createElement("div"),r=document.createElement("h1"),o=document.createElement("img"),a=document.createElement("nav"),i=document.createElement("ul"),c=document.createElement("li"),s=document.createElement("li"),l=document.createElement("li"),d=document.createElement("a"),u=document.createElement("a"),p=document.createElement("a"),m=document.createElement("div"),f=document.createElement("h2"),g=document.createElement("p"),h=document.createElement("button");r.innerText="Sweet Relief",o.src="../src/images/sweet-relief-logo.png",o.alt="a mortar and pestle: the sweet relief logo",t.tabIndex=0,d.innerText="Our Remedies",d.setAttribute("href","#"),u.innerText="About",u.setAttribute("href","#"),p.innerText="Contact",p.setAttribute("href","#"),f.innerText="Welcome, weary traveller!",g.innerText="Whatever ailment plagues you, be assured, we got a cure. Our treatments range from medicinal teas over healing herbs and soothing ointments to magic potions. Whether you suffer from a headache, a flesh wound or food poisoning — we have the remedy to provide you with sweet relief.",h.innerText="Look at what we have to offer",h.type="button",t.classList.add("logo-container"),a.classList.add("menu"),d.classList.add("nav-link"),u.classList.add("nav-link"),p.classList.add("nav-link"),m.classList.add("welcome-box"),t.append(r,o),c.appendChild(d),s.appendChild(u),l.appendChild(p),i.append(c,s,l),a.append(i),n.append(t,a),m.append(f,g,h),e.append(n,m)}()})();
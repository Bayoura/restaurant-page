(()=>{"use strict";var n,e,t,r,o,a,i,c,s,l,d,p,u,m,f={28:(n,e,t)=>{t.d(e,{Z:()=>v});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),l=new URL(t(920),t.b),d=new URL(t(933),t.b),p=new URL(t(673),t.b),u=new URL(t(391),t.b),m=i()(o()),f=s()(l),g=s()(d),h=s()(p),b=s()(u);m.push([n.id,"@font-face {\n    font-family: 'Gideon Roman';\n    src: url("+f+") format('truetype'); \n}\n@font-face {\n    font-family: 'Redressed';\n    src: url("+g+") format('truetype'); \n}\n\n*,\n*::after,\n*::before {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    color: var(--eggshell);\n    font-family: 'Gideon Roman', Helvetica, cursive;\n}\n\n*:focus {\n    outline: 4px dotted var(--brown);\n}\n\n:root {\n    --green: hsl(103deg 13% 39%);\n    --green-80-transp: hsl(103deg 13% 39% / 80%);\n    --green-90-transp: hsl(103deg 13% 39% / 90%);\n    --eggshell: hsl(23deg 87% 94%);\n    --orange: hsl(23deg 68% 75%);\n    --brown: hsl(23deg 27% 31%);\n}\n\nbody {\n    background-image: url("+h+");\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center center;\n    background-attachment: fixed; /* Background image is fixed in the viewport so that it doesn’t move when the content’s height is greater than the image’s height */\n    background-color: var(--brown); /* background color that will be displayed while background image is loading */\n    display: flex;\n    justify-content: center;\n    min-height: 100vh; \n    min-width: 100vw;\n} \n\n#content {\n    background-color: hsl(0deg 100% 100% / 60%);\n    width: 1200px;\n    max-width: 85%;\n}\n\n/* -------------------NAVBAR--------------------- */\n\n.logo-container {\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n}\n\n.logo-container img {\n    height: 80px;\n}\n\nh1 {\n    color: var(--orange);\n    font-family: 'Redressed', Helvetica, cursive;\n    font-size: 4rem;\n}\n\nheader {\n    background-color: var(--green);\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 20px 35px;\n}\n\n.menu ul {\n    display: flex;\n    gap: 20px;\n}\n\n.menu ul li {\n    list-style: none;\n    font-size: 1.6rem;\n}\n\n.nav-link {\n    text-decoration: none;\n    position: relative;\n}\n\n/* underline hover animation */\n.nav-link::after {\n    content: '';\n    position: absolute;\n    width: 100%;\n    transform: scaleX(0);\n    height: 2px;\n    bottom: 0;\n    left: 0;\n    background-color: var(--eggshell);\n    transform-origin: bottom right;\n    transition: transform 0.25s ease-in;\n}\n\n.nav-link:hover::after {\n    transform: scaleX(1);\n    transform-origin: bottom left;\n}\n\n\n/* ----------------------WELCOME-BOX-------------------- */\n\n.welcome-box {\n    background-color:var(--green-80-transp);\n    border: 6px solid var(--green-90-transp);\n    border-radius: 5px;\n    text-align: center;\n    padding: 20px;\n    width: 80%;\n    max-width: 700px;\n    margin: 100px auto;\n}\n\nh2 {\n    margin-top: 25px;\n    margin-bottom: 20px;\n    font-size: 2.5rem;\n}\n\n.welcome-box p {\n    font-size: 1.5rem;\n    margin-bottom: 25px;\n}\n\n.welcome-box button {\n    background-color: var(--orange);\n    border: none;\n    border-radius: 3px;\n    color: hsl(103deg 13% 28%);\n    cursor: pointer;\n    font-size: 1.7rem;\n    font-weight: bold;\n    margin-bottom: 25px;\n    padding: 15px 10px;\n    transition: 300ms ease-in;\n}\n\n.welcome-box button:hover {\n    background-color: var(--eggshell);\n    color: var(--green);\n}\n\n/* footer {\n    text-align: center;\n    font-weight: 300;\n}\n\n.attribution {\n    padding: 20px 0 10px 0;\n    font-size: 0.875rem;\n}\n\n\n.credit,\n.credit a {\n    font-size: 0.625rem; \n    padding: 5px;\n}\n\nfooter a {\n    font-style: italic;\n    font-weight: 400;\n    color: #cddef8;\n} */\n\n@media (max-width: 991px) {\n    header {\n        flex-direction: column;\n    }\n}\n\n@media (max-width: 767px) {\n    body {\n        background-image: url("+b+");\n    }\n    header {\n        padding: 15px 25px;\n    }\n    .logo-container {\n        flex-direction: column;\n    }\n    .logo-container img {\n        height: 50px;\n    }\n    h1 {\n        font-size: 3rem;\n    }\n    .menu ul {\n        flex-wrap: wrap;\n        justify-content: center;\n    }\n    .menu ul li {\n        font-size: 1.4rem;\n    }\n    h2 {\n        font-size: 2rem;\n        margin-top: 10px;\n    }\n    .welcome-box {\n        padding: 10px;\n        margin: 40px auto;\n        width: 90%;\n    }\n    .welcome-box p {\n        font-size: 1.3rem;\n    }\n    .welcome-box button {\n        font-size: 1.5rem;\n        margin-bottom: 15px;\n        padding: 5px;\n    }\n}",""]);const v=m},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=o(m,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},920:(n,e,t)=>{n.exports=t.p+"a63a077548c774e2bdc9.ttf"},933:(n,e,t)=>{n.exports=t.p+"6906003e71fba0eba09a.ttf"},673:(n,e,t)=>{n.exports=t.p+"6a1644bcf17e9b7161e5.jpg"},391:(n,e,t)=>{n.exports=t.p+"6eb04df5f96775db5f77.jpg"}},g={};function h(n){var e=g[n];if(void 0!==e)return e.exports;var t=g[n]={id:n,exports:{}};return f[n](t,t.exports,h),t.exports}h.m=f,h.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return h.d(e,{a:e}),e},h.d=(n,e)=>{for(var t in e)h.o(e,t)&&!h.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},h.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),h.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;h.g.importScripts&&(n=h.g.location+"");var e=h.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),h.p=n})(),h.b=document.baseURI||self.location.href,n=h(379),e=h.n(n),t=h(795),r=h.n(t),o=h(569),a=h.n(o),i=h(565),c=h.n(i),s=h(216),l=h.n(s),d=h(589),p=h.n(d),u=h(28),(m={}).styleTagTransform=p(),m.setAttributes=c(),m.insert=a().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=l(),e()(u.Z,m),u.Z&&u.Z.locals&&u.Z.locals,function(){const n=document.getElementById("content"),e=document.createElement("header"),t=document.createElement("div"),r=document.createElement("h1"),o=document.createElement("img"),a=document.createElement("nav"),i=document.createElement("ul"),c=document.createElement("li"),s=document.createElement("li"),l=document.createElement("li"),d=document.createElement("a"),p=document.createElement("a"),u=document.createElement("a"),m=document.createElement("div"),f=document.createElement("h2"),g=document.createElement("p"),h=document.createElement("p"),b=document.createElement("button");r.innerText="Sweet Relief",o.src="../src/images/sweet-relief-logo.png",o.alt="a mortar and pestle: the sweet relief logo",t.tabIndex=0,d.innerText="Our Remedies",d.setAttribute("href","#"),p.innerText="About",p.setAttribute("href","#"),u.innerText="Contact",u.setAttribute("href","#"),f.innerText="Welcome, weary traveller!",g.innerText="Whatever ailment plagues you, be assured, we got a cure. Our treatments range from medicinal teas over healing herbs and soothing ointments to magic potions.",h.innerText="Whether you suffer from a headache, a flesh wound or food poisoning — we have the remedy to provide you with sweet relief.",b.innerText="Look at what we have to offer",b.type="button",t.classList.add("logo-container"),a.classList.add("menu"),d.classList.add("nav-link"),p.classList.add("nav-link"),u.classList.add("nav-link"),m.classList.add("welcome-box"),t.append(r,o),c.appendChild(d),s.appendChild(p),l.appendChild(u),i.append(c,s,l),a.append(i),e.append(t,a),m.append(f,g,h,b),n.append(e,m)}()})();
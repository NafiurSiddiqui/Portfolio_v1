parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"aXXJ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.checkProjectBodyActivation=O,exports.transactionalActivatedDesktop=exports.promoActivatedDesktop=exports.projectWrapper=exports.newsletterActivatedDesktop=exports.landingPageActivatedDesktop=void 0;var e=require("./tray"),t=require("./nameCard"),a=document.body,n=document.querySelector(".projectScreen__project"),c=document.querySelector(".projectScreen__project_modal-close "),s=document.querySelector(".projectScreen__project-project__wrapper");exports.projectWrapper=s;var o=document.querySelector(".projectScreen__project-project__wrapper-landingPage"),l=document.querySelector(".projectScreen__project-cross"),r=document.querySelector(".navigation-container"),i=document.getElementById("project-promo"),d=document.querySelectorAll(".project-promo__image"),p=document.getElementById("project-promo__img-codeschool"),m=document.getElementById("project-promo__img-meal"),v=document.getElementById("project-transactional"),g=document.getElementById("project-transactional__image"),u=document.getElementById("project-newsletter"),j=document.getElementById("project-newsletter__img"),L=document.getElementById("project-qpick__img"),y=document.getElementById("project-techwear__img"),C=document.getElementById("project-qpick__vdo"),P=document.getElementById("project-techwear__vdo"),A=document.getElementById("project-landingPage"),_=document.querySelector(".landingPage.slide1"),k=document.querySelector(".landingPage.slide2"),E=document.querySelector(".landingPage.slide3"),f=document.querySelector(".landingPage.slide4"),w=document.querySelector(".main-content__card-container__card"),I=document.getElementById("promo"),x=document.getElementById("transactional"),B=document.getElementById("newsletter"),S=document.getElementById("newsletterTray"),q=document.getElementById("landingPage"),D=null;exports.promoActivatedDesktop=D;var h=null;exports.transactionalActivatedDesktop=h;var X=null;exports.newsletterActivatedDesktop=X;var b=null;exports.landingPageActivatedDesktop=b;var W=function(){i.classList.remove("project-promo-active"),v.classList.remove("project-transactional-active"),u.classList.remove("project-newsletter-active"),A.classList.remove("project-landingPage-active"),f.style.transform="translateX(360%)",k.style.transform="translateX(120%)",E.style.transform="translateX(240%)"};function M(){a.classList.contains("card-active")&&a.classList.remove("card-active")}function O(e,t,n,c,s,o,l,r,i,d){!0!==e&&!0!==t&&!0!==n&&!0!==c&&!0!==s||(a.classList.remove(o),a.classList.remove(l),a.classList.remove(r),a.classList.remove(i),a.classList.remove(d))}function T(e){a.classList.toggle(e)}function z(){n.classList.add("project-active"),c.classList.toggle("negativeIndex")}function F(){!0===t.contactActivated&&w.classList.remove("hidden")}c.addEventListener("click",function(){console.log("cool"),n.classList.remove("project-active"),c.classList.remove("negativeIndex"),W()}),l.addEventListener("click",function(){n.classList.remove("project-active"),c.classList.remove("negativeIndex"),W()}),I.addEventListener("click",function(){O(h,X,b,null,null,e.transactionalClass,e.newsletterClass,e.landingPageClass,e.contactPageClass,null),F(),(0,e.checkProjectActivation)(e.promoActivated,e.transactionalActivated,e.newsletterActivated,t.contactActivated,e.landingPageActivated,e.promoClass,e.transactionalClass,e.newsletterClass,e.contactPageClass,e.landingPageClass),T(e.promoClass),exports.promoActivatedDesktop=D=!0}),p.addEventListener("click",function(){z(),i.classList.add("project-promo-active")}),m.addEventListener("click",function(){console.log("ok"),n.classList.add("project-active"),i.classList.add("project-promo-active"),s.classList.add("slideLeft")}),x.addEventListener("click",function(){O(D,X,b,null,null,e.promoClass,e.newsletterClass,e.landingPageClass,e.contactPageClass,null),F(),(0,e.checkProjectActivation)(e.promoActivated,e.transactionalActivated,e.newsletterActivated,t.contactActivated,e.landingPageActivated,e.promoClass,e.transactionalClass,e.newsletterClass,e.contactPageClass,e.landingPageClass),T(e.transactionalClass),exports.transactionalActivatedDesktop=h=!0}),g.addEventListener("click",function(){z(),v.classList.add("project-transactional-active"),r.classList.add("hidden")}),B.addEventListener("click",function(){O(D,h,b,null,null,e.promoClass,e.transactionalClass,e.landingPageClass,e.contactPageClass,null),F(),(0,e.checkProjectActivation)(e.promoActivated,e.transactionalActivated,e.newsletterActivated,t.contactActivated,e.landingPageActivated,e.promoClass,e.transactionalClass,e.newsletterClass,e.contactPageClass,e.landingPageClass),T(e.newsletterClass),exports.newsletterActivatedDesktop=X=!0}),j.addEventListener("click",function(){z(),u.classList.add("project-newsletter-active"),r.classList.add("hidden")}),q.addEventListener("click",function(){O(D,h,X,null,null,e.promoClass,e.transactionalClass,e.newsletterClass,e.contactPageClass,null),F(),(0,e.checkProjectActivation)(e.promoActivated,e.transactionalActivated,e.newsletterActivated,t.contactActivated,e.landingPageActivated,e.promoClass,e.transactionalClass,e.newsletterClass,e.contactPageClass,e.landingPageClass),T(e.landingPageClass),exports.landingPageActivatedDesktop=b=!0}),L.addEventListener("click",function(){z(),A.classList.add("project-landingPage-active"),E.style.transform="translateX(0%)",_.style.transform="translateX(-120%)",r.style.display="inline-block"}),C.addEventListener("click",function(){z(),A.classList.add("project-landingPage-active"),f.style.transform="translateX(0%)"}),y.addEventListener("click",function(){z(),A.classList.add("project-landingPage-active")}),P.addEventListener("click",function(){z(),A.classList.add("project-landingPage-active"),k.style.transform="translateX(0%)"});
},{"./tray":"uyL9","./nameCard":"KIHz"}],"KIHz":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.mainContent=exports.contactActivated=void 0;var t=require("./projects"),e=require("./tray"),a=null;exports.contactActivated=a;var c=document.querySelector(".main-content__card-container__card"),n=document.querySelector(".main-content__card-sideA"),o=document.querySelector(".main-content__card-sideB"),r=document.querySelector(".svg-arrow__container"),s=document.getElementById("arrow-container"),i=document.body,d=document.querySelector(".main-content");exports.mainContent=d;var l=document.querySelector(".main-content_indicator-container");function v(){screenContainer.innerHTML=""}c.addEventListener("click",function(){console.log("working"),!0===e.trayActivated?(i.classList.remove("trayActivate"),c.classList.add("aboutMeActive"),c.classList.remove("cardSlideTop"),(0,e.checkProjectActivation)(e.transactionalActivated,e.newsletterActivated,e.landingPageActivated,a,e.promoActivated,e.transactionalClass,e.newsletterClass,e.landingPageClass,e.contactPageClass,e.promoClass)):!1===e.trayActivated&&(r.classList.toggle("arrowActivate"),c.classList.remove("aboutMeActive"),i.classList.toggle("card-active")),i.classList.contains("card-active")?l.classList.add("hidden"):l.classList.remove("hidden"),i.classList.toggle("card-active"),r.classList.toggle("arrowActivate"),c.classList.remove("aboutMeActive"),l.classList.toggle("hidden")});
},{"./projects":"aXXJ","./tray":"uyL9"}],"uyL9":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.checkProjectActivation=p,exports.newsletterClass=exports.newsletterActivated=exports.landingPageClass=exports.landingPageActivated=exports.contactPageClass=void 0,exports.openProject=v,exports.trayActivated=exports.transactionalClass=exports.transactionalActivated=exports.promoClass=exports.promoActivated=exports.projectActivated=void 0;var t=require("./nameCard"),e=document.body,a=document.querySelector(".main-content__card-container__card"),n=document.querySelector(".main-content__btn-container-tray"),o=document.querySelector(".main-content__btn-container-tray__header-container"),c=document.getElementById("promoTray"),r=document.getElementById("transactionalTray"),s=document.getElementById("newsletterTray"),i=document.getElementById("promoTray"),l=document.querySelector(".main-content_indicator-container"),d=document.querySelector(".main-content__card-container__card");function v(a){t.mainContent.classList.toggle(a),n.classList.add("traySlideDown"),e.classList.remove("trayActivate")}function p(e,a,n,o,c,r,s,i,l,d){!0!==e&&!0!==a&&!0!==n&&!0!==o&&!0!==c||(t.mainContent.classList.remove(r),t.mainContent.classList.remove(s),t.mainContent.classList.remove(i),t.mainContent.classList.remove(l),t.mainContent.classList.remove(d))}var m=null;exports.trayActivated=m;var u=null;exports.projectActivated=u;var x=null;exports.promoActivated=x;var A=null;exports.transactionalActivated=A;var g=null;exports.newsletterActivated=g;var y=null;exports.landingPageActivated=y;var L="projectPromoActivate";exports.promoClass=L;var C="projectTransactionActivate";exports.transactionalClass=C;var _="projectNewsletterActivate";exports.newsletterClass=_;var P="projectLandingPageActivate";exports.landingPageClass=P;var k="contact-page-active";exports.contactPageClass=k,o.addEventListener("click",function(){n.classList.remove("traySlideDown"),e.classList.toggle("trayActivate"),a.classList.add("cardSlideTop"),exports.trayActivated=m=!0,e.classList.contains("trayActivate")||(a.classList.remove("cardSlideTop"),exports.trayActivated=m=!1),d.classList.contains("cardSlideTop")?(console.log("removed"),l.classList.add("hidden")):(console.log("can't remove"),l.classList.remove("hidden")),e.classList.remove("card-active")}),t.mainContent.addEventListener("click",function(){}),c.addEventListener("click",function(){console.log("clicked!"),console.log(t.contactActivated),p(A,g,y,t.contactActivated,null,C,_,P,k,null),v(L),exports.promoActivated=x=!0}),transactionalTray.addEventListener("click",function(){p(x,g,y,t.contactActivated,null,L,_,P,k,null),v(C),exports.transactionalActivated=A=!0}),s.addEventListener("click",function(){console.log("clicked!"),p(x,A,y,t.contactActivated,null,L,C,P,k,null),v(_),exports.newsletterActivated=g=!0}),landingPageTray.addEventListener("click",function(){console.log("clicked!"),p(x,A,g,t.contactActivated,null,L,C,_,k,null),v(P),exports.transactionalActivated=A=!0});
},{"./nameCard":"KIHz"}],"nDZe":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.logoReset=void 0;var e=require("./tray"),t=require("./projects"),a=require("./nameCard"),o=document.getElementById("logo"),c=document.body,s=document.querySelector(".main-content_indicator-container"),n=document.querySelector(".main-content__card-container__card"),i=o.addEventListener("click",function(){console.log("cool"),(0,t.checkProjectBodyActivation)(t.transactionalActivatedDesktop,t.newsletterActivatedDesktop,t.landingPageActivatedDesktop,t.promoActivatedDesktop,null,e.transactionalClass,e.newsletterClass,e.landingPageClass,e.promoClass,null),(0,e.checkProjectActivation)(e.transactionalActivated,e.newsletterActivated,e.landingPageActivated,e.contactActivated,e.promoActivated,e.transactionalClass,e.newsletterClass,e.landingPageClass,e.contactPageClass,e.promoClass),c.classList.remove("card-active"),c.classList.remove("trayActivate"),a.mainContent.classList.remove("contact-page-active"),s.classList.remove("hidden"),n.classList.remove("hidden")});exports.logoReset=i,console.log(o);
},{"./tray":"uyL9","./projects":"aXXJ","./nameCard":"KIHz"}],"cJVa":[function(require,module,exports) {
"use strict";var e=require("./projects"),t=require("./logoReset"),n=document.querySelectorAll(".landingPage"),r=document.querySelector(".fa.fa-angle-left"),c=document.querySelector(".fa.fa-angle-right");r.addEventListener("click",function(){e.projectWrapper.classList.remove("slideLeft")}),c.addEventListener("click",function(){e.projectWrapper.classList.add("slideLeft")});var a=0,o=n.length,i=function(e){n.forEach(function(t,n){t.style.transform="translateX(".concat(120*(n-e),"%)")})},l=function(){a===o-1?a=0:a++,i(a)},s=function(){0===a?a=o-1:a--,i(a)};n.forEach(function(e,t){e.style.transform="translateX(".concat(200*t,"%)")}),r.addEventListener("click",s),c.addEventListener("click",l);
},{"./projects":"aXXJ","./logoReset":"nDZe"}],"U86B":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.contactActivated=void 0;var t=require("./projects"),e=require("./tray"),a=require("./nameCard"),c=null;exports.contactActivated=c;var n=document.querySelector(".header__contact"),o=document.getElementById("contact"),s=document.querySelector(".main-content__screen-container"),r=document.querySelector(".main-content__card-container__card");n.addEventListener("click",function(){(0,t.checkProjectBodyActivation)(t.transactionalActivatedDesktop,t.newsletterActivatedDesktop,t.landingPageActivatedDesktop,t.promoActivatedDesktop,e.promoClass,e.transactionalClass,e.newsletterClass,e.landingPageClass,e.contactPageClass,null),(0,e.checkProjectActivation)(e.promoActivated,e.transactionalActivated,e.landingPageActivated,e.newsletterActivated,null,e.promoClass,e.transactionalClass,e.landingPageClass,e.newsletterClass,null),a.mainContent.classList.toggle(e.contactPageClass),exports.contactActivated=c=!0,r.classList.toggle("hidden")});
},{"./projects":"aXXJ","./tray":"uyL9","./nameCard":"KIHz"}],"a3pH":[function(require,module,exports) {
module.exports="/btns.3ec9e81f.mp3";
},{}],"WmBV":[function(require,module,exports) {
module.exports="/reset.6b1429c8.mp3";
},{}],"i35Q":[function(require,module,exports) {
module.exports="/cardOn_A.83f0d038.mp3";
},{}],"Cgz5":[function(require,module,exports) {
module.exports="/cardOn_B.eff8110f.mp3";
},{}],"Rsd6":[function(require,module,exports) {
module.exports="/social.bd00e463.mp3";
},{}],"nCst":[function(require,module,exports) {
module.exports="/contact.bfbc1b20.mp3";
},{}],"I1uL":[function(require,module,exports) {
module.exports="/trayUp.5236794f.mp3";
},{}],"E8R3":[function(require,module,exports) {
module.exports="/mail.cb57dd7f.mp3";
},{}],"SFry":[function(require,module,exports) {
"use strict";var e=l(require("../sound/btns.mp3")),n=l(require("../sound/reset.mp3")),o=l(require("../sound/cardOn_A.mp3")),t=l(require("../sound/cardOn_B.mp3")),u=l(require("../sound/social.mp3")),r=l(require("../sound/contact.mp3")),c=l(require("../sound/trayUp.mp3")),d=l(require("../sound/mail.mp3"));function l(e){return e&&e.__esModule?e:{default:e}}var a=document.querySelector(".main-content__card-sideA"),i=document.querySelector(".main-content__card-sideB"),m=document.querySelectorAll(".project-btn"),s=document.querySelectorAll(".project-btn__tray"),v=document.querySelector(".header__logo-container"),f=document.querySelector(".header__contact"),p=document.querySelectorAll(".social-media_link");console.log(p);var y=document.querySelector(".contact-screen__mail-btn"),_=new Audio(u.default);_.volume=.3;var q=new Audio(o.default);q.volume=.3;var A=new Audio(t.default);A.volume=.3;var E=new Audio(e.default);E.volume=.2;var k=new Audio(r.default);k.volume=.2;var w=new Audio(n.default);w.volume=.2;var L=new Audio(c.default);L.volume=.2;var S=new Audio(d.default);S.volume=.2,a.addEventListener("click",function(){q.play()}),i.addEventListener("click",function(){A.play()}),m.forEach(function(e){e.addEventListener("click",function(){console.log("sound ok"),E.play()})}),f.addEventListener("click",function(){k.play()}),v.addEventListener("click",function(){w.play()}),s.forEach(function(e){e.addEventListener("click",function(){E.play()})}),p.forEach(function(e){e.addEventListener("click",function(){_.play()})}),y.addEventListener("click",function(){S.play()});
},{"../sound/btns.mp3":"a3pH","../sound/reset.mp3":"WmBV","../sound/cardOn_A.mp3":"i35Q","../sound/cardOn_B.mp3":"Cgz5","../sound/social.mp3":"Rsd6","../sound/contact.mp3":"nCst","../sound/trayUp.mp3":"I1uL","../sound/mail.mp3":"E8R3"}],"aRYt":[function(require,module,exports) {
"use strict";require("./tray"),require("./nameCard"),require("./projects"),require("./slider"),require("./logoReset"),require("./contactBtn"),require("./sound");
},{"./tray":"uyL9","./nameCard":"KIHz","./projects":"aXXJ","./slider":"cJVa","./logoReset":"nDZe","./contactBtn":"U86B","./sound":"SFry"}]},{},["aRYt"], null)
//# sourceMappingURL=/main.3340c82a.js.map
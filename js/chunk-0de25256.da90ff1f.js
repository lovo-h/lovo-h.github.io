(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0de25256"],{"057f":function(t,e,n){var r=n("fc6a"),o=n("241c").f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?c(t):o(r(t))}},"159b":function(t,e,n){var r=n("da84"),o=n("fdbc"),i=n("17c2"),a=n("9112");for(var c in o){var s=r[c],u=s&&s.prototype;if(u&&u.forEach!==i)try{a(u,"forEach",i)}catch(f){u.forEach=i}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,o=n("a640"),i=o("forEach");t.exports=i?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"18fa":function(t,e,n){"use strict";n("5611")},"1dde":function(t,e,n){var r=n("d039"),o=n("b622"),i=n("2d00"),a=o("species");t.exports=function(t){return i>=51||!r((function(){var e=[],n=e.constructor={};return n[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"371a":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contact-container"},[n("b-container",{attrs:{fluid:"md"}},[n("b-row",[n("b-col",{staticClass:"col-style"},[n("span",{staticClass:"col-subheading"},[t._v(" Contact ")]),n("p",[t._v(" Feel free to contact me, whether you have a question or just want to say hello. I will try my best to get back to you when I can. ")]),n("p",[t._v(" Don't forget to leave your contact info so I can get back to you. Cheers! ")]),n("b-form",{on:{submit:function(e){return e.preventDefault(),t.submit(t.email)}}},[n("b-form-textarea",{staticClass:"textarea-custom",attrs:{placeholder:t.emailPlaceholder,rows:"9",required:""},model:{value:t.email.message,callback:function(e){t.$set(t.email,"message",e)},expression:"email.message"}}),n("div",{staticClass:"d-flex justify-content-end mt-4"},[n("b-button",{staticClass:"mr-4",staticStyle:{"min-width":"5.13rem"},attrs:{type:"reset",variant:"outline-light",disabled:t.isLoading}},[t._v(" Clear ")]),n("b-button",{staticStyle:{"min-width":"5.13rem"},attrs:{type:"submit",variant:"primary",disabled:t.isLoading}},[t.isLoading?n("b-spinner",{staticStyle:{width:"1.5rem",height:"1.5rem"}}):n("span",[t._v(" Submit ")])],1)],1)],1)],1)],1)],1)],1)},o=[],i=n("5530"),a=n("2f62"),c={name:"Contact",data:function(){return{email:this.initEmailForm()}},computed:Object(i["a"])(Object(i["a"])({},Object(a["c"])("contact",["isLoading"])),{},{emailPlaceholder:function(){return"Hey Hector,\n\nI just wanted to say hello. If you could reach me at john.doe@gmail.com, I would like to talk about xyz.\n\nThanks,\nYour name"}}),methods:Object(i["a"])(Object(i["a"])({},Object(a["b"])("contact",["sendEmail"])),{},{initEmailForm:function(){return{message:null}},submit:function(t){var e=this,n=t.message;console.log(n),this.sendEmail(n).then((function(){e.email=e.initEmailForm(),e.$bvToast.toast("Your message was sent.",{title:"Succeeded",variant:"success",autoHideDelay:7e3,solid:!0})})).catch((function(){e.$bvToast.toast("Message failed to send. Please try again later.",{title:"Failed",variant:"danger",autoHideDelay:7e3,solid:!0})}))}})},s=c,u=(n("18fa"),n("2877")),f=Object(u["a"])(s,r,o,!1,null,"d3cb663a",null);e["default"]=f.exports},"4de4":function(t,e,n){"use strict";var r=n("23e7"),o=n("b727").filter,i=n("1dde"),a=i("filter");r({target:"Array",proto:!0,forced:!a},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("b64b"),n("a4d3"),n("4de4"),n("e439"),n("159b"),n("dbb4");function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},5611:function(t,e,n){},"65f0":function(t,e,n){var r=n("861d"),o=n("e8b5"),i=n("b622"),a=i("species");t.exports=function(t,e){var n;return o(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?r(n)&&(n=n[a],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"746f":function(t,e,n){var r=n("428f"),o=n("5135"),i=n("e538"),a=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});o(e,t)||a(e,t,{value:i.f(t)})}},8418:function(t,e,n){"use strict";var r=n("c04e"),o=n("9bf2"),i=n("5c6c");t.exports=function(t,e,n){var a=r(e);a in t?o.f(t,a,i(0,n)):t[a]=n}},a4d3:function(t,e,n){"use strict";var r=n("23e7"),o=n("da84"),i=n("d066"),a=n("c430"),c=n("83ab"),s=n("4930"),u=n("fdbf"),f=n("d039"),l=n("5135"),b=n("e8b5"),d=n("861d"),p=n("825a"),h=n("7b0b"),m=n("fc6a"),y=n("c04e"),v=n("5c6c"),g=n("7c73"),w=n("df75"),O=n("241c"),j=n("057f"),S=n("7418"),P=n("06cf"),E=n("9bf2"),x=n("d1e7"),k=n("9112"),C=n("6eeb"),D=n("5692"),I=n("f772"),F=n("d012"),_=n("90e3"),A=n("b622"),N=n("e538"),T=n("746f"),H=n("d44e"),J=n("69f3"),L=n("b727").forEach,$=I("hidden"),q="Symbol",Y="prototype",z=A("toPrimitive"),B=J.set,M=J.getterFor(q),Q=Object[Y],W=o.Symbol,G=i("JSON","stringify"),K=P.f,R=E.f,U=j.f,V=x.f,X=D("symbols"),Z=D("op-symbols"),tt=D("string-to-symbol-registry"),et=D("symbol-to-string-registry"),nt=D("wks"),rt=o.QObject,ot=!rt||!rt[Y]||!rt[Y].findChild,it=c&&f((function(){return 7!=g(R({},"a",{get:function(){return R(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=K(Q,e);r&&delete Q[e],R(t,e,n),r&&t!==Q&&R(Q,e,r)}:R,at=function(t,e){var n=X[t]=g(W[Y]);return B(n,{type:q,tag:t,description:e}),c||(n.description=e),n},ct=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof W},st=function(t,e,n){t===Q&&st(Z,e,n),p(t);var r=y(e,!0);return p(n),l(X,r)?(n.enumerable?(l(t,$)&&t[$][r]&&(t[$][r]=!1),n=g(n,{enumerable:v(0,!1)})):(l(t,$)||R(t,$,v(1,{})),t[$][r]=!0),it(t,r,n)):R(t,r,n)},ut=function(t,e){p(t);var n=m(e),r=w(n).concat(pt(n));return L(r,(function(e){c&&!lt.call(n,e)||st(t,e,n[e])})),t},ft=function(t,e){return void 0===e?g(t):ut(g(t),e)},lt=function(t){var e=y(t,!0),n=V.call(this,e);return!(this===Q&&l(X,e)&&!l(Z,e))&&(!(n||!l(this,e)||!l(X,e)||l(this,$)&&this[$][e])||n)},bt=function(t,e){var n=m(t),r=y(e,!0);if(n!==Q||!l(X,r)||l(Z,r)){var o=K(n,r);return!o||!l(X,r)||l(n,$)&&n[$][r]||(o.enumerable=!0),o}},dt=function(t){var e=U(m(t)),n=[];return L(e,(function(t){l(X,t)||l(F,t)||n.push(t)})),n},pt=function(t){var e=t===Q,n=U(e?Z:m(t)),r=[];return L(n,(function(t){!l(X,t)||e&&!l(Q,t)||r.push(X[t])})),r};if(s||(W=function(){if(this instanceof W)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=_(t),n=function(t){this===Q&&n.call(Z,t),l(this,$)&&l(this[$],e)&&(this[$][e]=!1),it(this,e,v(1,t))};return c&&ot&&it(Q,e,{configurable:!0,set:n}),at(e,t)},C(W[Y],"toString",(function(){return M(this).tag})),C(W,"withoutSetter",(function(t){return at(_(t),t)})),x.f=lt,E.f=st,P.f=bt,O.f=j.f=dt,S.f=pt,N.f=function(t){return at(A(t),t)},c&&(R(W[Y],"description",{configurable:!0,get:function(){return M(this).description}}),a||C(Q,"propertyIsEnumerable",lt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:W}),L(w(nt),(function(t){T(t)})),r({target:q,stat:!0,forced:!s},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var n=W(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),r({target:"Object",stat:!0,forced:!s,sham:!c},{create:ft,defineProperty:st,defineProperties:ut,getOwnPropertyDescriptor:bt}),r({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:dt,getOwnPropertySymbols:pt}),r({target:"Object",stat:!0,forced:f((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(h(t))}}),G){var ht=!s||f((function(){var t=W();return"[null]"!=G([t])||"{}"!=G({a:t})||"{}"!=G(Object(t))}));r({target:"JSON",stat:!0,forced:ht},{stringify:function(t,e,n){var r,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(r=e,(d(e)||void 0!==t)&&!ct(t))return b(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!ct(e))return e}),o[1]=e,G.apply(null,o)}})}W[Y][z]||k(W[Y],z,W[Y].valueOf),H(W,q),F[$]=!0},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},b64b:function(t,e,n){var r=n("23e7"),o=n("7b0b"),i=n("df75"),a=n("d039"),c=a((function(){i(1)}));r({target:"Object",stat:!0,forced:c},{keys:function(t){return i(o(t))}})},b727:function(t,e,n){var r=n("0366"),o=n("44ad"),i=n("7b0b"),a=n("50c4"),c=n("65f0"),s=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,f=4==t,l=6==t,b=7==t,d=5==t||l;return function(p,h,m,y){for(var v,g,w=i(p),O=o(w),j=r(h,m,3),S=a(O.length),P=0,E=y||c,x=e?E(p,S):n||b?E(p,0):void 0;S>P;P++)if((d||P in O)&&(v=O[P],g=j(v,P,w),t))if(e)x[P]=g;else if(g)switch(t){case 3:return!0;case 5:return v;case 6:return P;case 2:s.call(x,v)}else switch(t){case 4:return!1;case 7:s.call(x,v)}return l?-1:u||f?f:x}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},dbb4:function(t,e,n){var r=n("23e7"),o=n("83ab"),i=n("56ef"),a=n("fc6a"),c=n("06cf"),s=n("8418");r({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,n,r=a(t),o=c.f,u=i(r),f={},l=0;while(u.length>l)n=o(r,e=u[l++]),void 0!==n&&s(f,e,n);return f}})},e439:function(t,e,n){var r=n("23e7"),o=n("d039"),i=n("fc6a"),a=n("06cf").f,c=n("83ab"),s=o((function(){a(1)})),u=!c||s;r({target:"Object",stat:!0,forced:u,sham:!c},{getOwnPropertyDescriptor:function(t,e){return a(i(t),e)}})},e538:function(t,e,n){var r=n("b622");e.f=r},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}}}]);
//# sourceMappingURL=chunk-0de25256.da90ff1f.js.map
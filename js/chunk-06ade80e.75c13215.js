(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-06ade80e"],{"1dde":function(t,e,i){var n=i("d039"),r=i("b622"),s=i("2d00"),o=r("species");t.exports=function(t){return s>=51||!n((function(){var e=[],i=e.constructor={};return i[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"352e":function(t,e,i){"use strict";i("5c03")},4288:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{color:"white",display:"flex"}},[i("span",{staticStyle:{display:"flex","flex-direction":"column"}},t._l(t.itemsByFirstHalf,(function(e,n){return i("span",{key:n},[i("fa-icon",{staticClass:"item-icon",attrs:{icon:"caret-right"}}),t._v(" "+t._s(e)+" ")],1)})),0),t.itemsBySecondHalf.length>0?i("span",{staticClass:"ml-4",staticStyle:{display:"flex","flex-direction":"column"}},t._l(t.itemsBySecondHalf,(function(e,n){return i("span",{key:n},[i("fa-icon",{staticClass:"item-icon",attrs:{icon:"caret-right"}}),t._v(" "+t._s(e)+" ")],1)})),0):t._e()])},r=[],s=(i("fb6a"),{name:"ItemList",props:{items:{type:Array,required:!0},isTwoColumns:{type:Boolean,default:!1}},computed:{itemsQuotient:function(){return Math.floor(this.items.length/2)},itemsByFirstHalf:function(){if(!this.isTwoColumns)return this.items;var t=this.items.length%2,e=this.itemsQuotient+t;return this.items.slice(0,e)},itemsBySecondHalf:function(){return this.isTwoColumns?this.items.slice(this.itemsQuotient):[]}}}),o=s,c=(i("352e"),i("2877")),a=Object(c["a"])(o,n,r,!1,null,"1e27a844",null);e["default"]=a.exports},"5c03":function(t,e,i){},8418:function(t,e,i){"use strict";var n=i("c04e"),r=i("9bf2"),s=i("5c6c");t.exports=function(t,e,i){var o=n(e);o in t?r.f(t,o,s(0,i)):t[o]=i}},e8b5:function(t,e,i){var n=i("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},fb6a:function(t,e,i){"use strict";var n=i("23e7"),r=i("861d"),s=i("e8b5"),o=i("23cb"),c=i("50c4"),a=i("fc6a"),u=i("8418"),l=i("b622"),f=i("1dde"),d=f("slice"),m=l("species"),p=[].slice,y=Math.max;n({target:"Array",proto:!0,forced:!d},{slice:function(t,e){var i,n,l,f=a(this),d=c(f.length),h=o(t,d),v=o(void 0===e?d:e,d);if(s(f)&&(i=f.constructor,"function"!=typeof i||i!==Array&&!s(i.prototype)?r(i)&&(i=i[m],null===i&&(i=void 0)):i=void 0,i===Array||void 0===i))return p.call(f,h,v);for(n=new(void 0===i?Array:i)(y(v-h,0)),l=0;h<v;h++,l++)h in f&&u(n,l,f[h]);return n.length=l,n}})}}]);
//# sourceMappingURL=chunk-06ade80e.75c13215.js.map
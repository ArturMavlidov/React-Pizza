(this["webpackJsonpreact-pizza"]=this["webpackJsonpreact-pizza"]||[]).push([[0],{44:function(t,e,c){},46:function(t,e,c){},47:function(t,e,c){},48:function(t,e,c){},49:function(t,e,c){},68:function(t,e,c){},69:function(t,e,c){},70:function(t,e,c){"use strict";c.r(e);var n=c(0),i=c.n(n),a=c(17),s=c.n(a),r=c(9),o=c(5),l=c(12),j=c(34),d=c(3),b="SET_SORT_BY",u="SET_CATEGORY",h="SET_PIZZAS",O="SET_LOADED",m="SET_PIZZA_CART",x="CLEAR_CART",p="REMOVE_CART_ITEM",f="PLUS_CART_ITEM",v="MINUS_CART_ITEM",C={category:null,sortBy:"rating"},_=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case b:return Object(d.a)(Object(d.a)({},t),{},{sortBy:e.payload});case u:return Object(d.a)(Object(d.a)({},t),{},{category:e.payload});default:return t}},g={items:[],isLoaded:!1},y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case h:return Object(d.a)(Object(d.a)({},t),{},{items:e.payload,isLoaded:!0});case O:return Object(d.a)(Object(d.a)({},t),{},{isLoaded:!1});default:return t}},k=c(11),w=c(23),N=c(33),z={items:{},totalPrice:0,totalCount:0},L=function(t){return t.reduce((function(t,e){return e.price+t}),0)},E=function(t,e){return Object.values(t).reduce((function(t,c){var n=function(t,e){var c=e.split("."),n=Object(N.a)(c),i=n[0];return n.slice(1).reduce((function(t,e){return t[e]}),t[i])}(c,e);return t+n}),0)},P=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case m:var c=t.items[e.payload.id]?[].concat(Object(w.a)(t.items[e.payload.id].items),[e.payload]):[e.payload],n=Object(d.a)(Object(d.a)({},t.items),{},Object(k.a)({},e.payload.id,{items:c,totalPrice:L(c)})),i=E(n,"items.length"),a=E(n,"totalPrice");return Object(d.a)(Object(d.a)({},t),{},{items:n,totalCount:i,totalPrice:a});case v:var s=t.items[e.payload].items.slice(1),r=Object(d.a)(Object(d.a)({},t.items),{},Object(k.a)({},e.payload,{items:s,totalPrice:L(s)})),o=E(r,"items.length"),l=E(r,"totalPrice");return Object(d.a)(Object(d.a)({},t),{},{items:r,totalCount:o,totalPrice:l});case f:var j=[].concat(Object(w.a)(t.items[e.payload].items),[t.items[e.payload].items[0]]),b=Object(d.a)(Object(d.a)({},t.items),{},Object(k.a)({},e.payload,{items:j,totalPrice:L(j)})),u=E(b,"items.length"),h=E(b,"totalPrice");return Object(d.a)(Object(d.a)({},t),{},{items:b,totalCount:u,totalPrice:h});case p:var O=Object(d.a)({},t.items),C=O[e.payload].totalPrice,_=O[e.payload].items.length;return delete O[e.payload],Object(d.a)(Object(d.a)({},t),{},{items:O,totalPrice:t.totalPrice-C,totalCount:t.totalCount-_});case x:return{totalPrice:0,totalCount:0,items:{}};default:return t}},B=Object(l.b)({filters:_,pizzas:y,cart:P}),V=Object(l.d)(B,Object(l.c)(Object(l.a)(j.a),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(t){return t})),M=c(14),T=c.n(M),S=(c(44),c(1)),A=Object(n.memo)((function(t){var e=t.outline,c=t.children,n=t.className,i=t.onClick;t.data;return Object(S.jsx)("button",{onClick:i,className:T()("button",n,{"button--outline":e}),children:c})})),R=c.p+"static/media/pizza-logo.56ac8703.svg",I=c.p+"static/media/cart.e0b31d96.svg";c(46);function Z(){var t=Object(o.c)((function(t){return t.cart})),e=t.totalPrice,c=t.totalCount;return Object(S.jsx)("div",{className:"header",children:Object(S.jsxs)("div",{className:"container",children:[Object(S.jsx)(r.b,{to:"/React-Pizza",children:Object(S.jsxs)("div",{className:"header__logo",children:[Object(S.jsx)("img",{width:"38",src:R,alt:"Pizza logo"}),Object(S.jsxs)("div",{children:[Object(S.jsx)("h1",{children:"React Pizza"}),Object(S.jsx)("p",{children:"\u0441\u0430\u043c\u0430\u044f \u0432\u043a\u0443\u0441\u043d\u0430\u044f \u043f\u0438\u0446\u0446\u0430 \u0432\u043e \u0432\u0441\u0435\u043b\u0435\u043d\u043d\u043e\u0439"})]})]})}),Object(S.jsx)("div",{className:"header__cart",children:Object(S.jsx)(r.b,{to:"/cart",children:Object(S.jsxs)(A,{className:"button--cart",children:[Object(S.jsxs)("span",{children:[e," \u20bd"]}),Object(S.jsx)("div",{className:"button__delimiter"}),Object(S.jsx)("img",{src:I,alt:""}),Object(S.jsx)("span",{children:c})]})})})]})})}c(47);var H=i.a.memo((function(t){var e=t.items,c=t.categoryIndex,n=t.onClickItem,i=function(t){return function(){n(t)}};return Object(S.jsx)("div",{children:Object(S.jsx)("div",{className:"categories",children:Object(S.jsxs)("ul",{children:[Object(S.jsx)("li",{className:null===c?"active":" ",onClick:i(null),children:"\u0412\u0441\u0435"}),null===e||void 0===e?void 0:e.map((function(t,e){return Object(S.jsx)("li",{className:c-1===e?"active":"",onClick:i(e+1),children:t},"".concat(t,"_").concat(e))}))]})})})})),D=c(8),W=c.p+"static/media/arrow-top.cfefae00.svg",U=(c(48),i.a.memo((function(t){var e=t.items,c=t.onClick,i=Object(n.useState)(!1),a=Object(D.a)(i,2),s=a[0],r=a[1],o=Object(n.useState)(e[0].name),l=Object(D.a)(o,2),j=l[0],d=l[1],b=Object(n.useRef)(),u=function(t){(t.path||t.composedPath&&t.composedPath()).includes(b.current)||r(!1)};Object(n.useEffect)((function(){return document.body.addEventListener("click",u),function(){document.body.removeEventListener("click",u)}}),[]);return Object(S.jsxs)("div",{ref:b,className:"sort",children:[Object(S.jsxs)("div",{className:"sort__label",children:[Object(S.jsx)("img",{className:s?"rotated":"",src:W,alt:""}),Object(S.jsx)("b",{children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u043f\u043e:"}),Object(S.jsx)("span",{onClick:function(){r(!s)},children:j})]}),s&&Object(S.jsx)("div",{className:"sort__popup",children:Object(S.jsx)("ul",{children:e.map((function(t,e){return Object(S.jsx)("li",{className:j===t.name?"active":"",onClick:(n=t.name,i=t.type,function(){d(n),c(i)}),children:t.name},"".concat(t.type,"_").concat(e));var n,i}))})})]})})));U.defaultProps={items:[]};var X=U,J=(c(49),Object(n.memo)((function(t){var e=t.id,c=t.imageUrl,i=t.name,a=t.price,s=t.types,r=t.sizes,o=t.addedCount,l=t.addPizza,j=["\u0442\u043e\u043d\u043a\u043e\u0435","\u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043e\u043d\u043d\u043e\u0435"],d=r,b=Object(n.useState)(s[0]),u=Object(D.a)(b,2),h=u[0],O=u[1],m=Object(n.useState)(0),x=Object(D.a)(m,2),p=x[0],f=x[1],v=function(t){return function(){O(t)}},C=function(t){return function(){f(t)}},_=function(){return 1===p?a+150:2===p?a+225:a};return Object(S.jsxs)("div",{className:"pizza-block",children:[Object(S.jsx)("img",{className:"pizza-block__image",src:c,alt:"Pizza"}),Object(S.jsx)("h4",{className:"pizza-block__title",children:i}),Object(S.jsxs)("div",{className:"pizza-block__selector",children:[Object(S.jsx)("ul",{children:j.map((function(t,e){return Object(S.jsx)("li",{className:T()({active:h===e,disabled:!s.includes(e)}),onClick:v(e),children:t},"".concat(t,"_").concat(e))}))}),Object(S.jsx)("ul",{children:d.map((function(t,e){return Object(S.jsxs)("li",{className:T()({active:e===p}),onClick:C(e),children:[t," \u0441\u043c."]},"".concat(t,"_").concat(e))}))})]}),Object(S.jsxs)("div",{className:"pizza-block__bottom",children:[Object(S.jsxs)("div",{className:"pizza-block__price",children:["\u043e\u0442 ",_()," \u20bd"]}),Object(S.jsxs)(A,{onClick:function(){var t={id:e,name:i,imageUrl:c,price:_(),size:r[p],type:j[h]};l(t)},className:"button--add",outline:!0,children:[Object(S.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(S.jsx)("path",{d:"M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z",fill:"white"})}),Object(S.jsx)("span",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),o&&Object(S.jsx)("i",{children:o})]})]})]})}))),Y=c(35),G=function(){return Object(S.jsxs)(Y.a,{className:"pizza-block",speed:2,width:280,height:460,viewBox:"0 0 280 460",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(S.jsx)("rect",{x:"0",y:"249",rx:"3",ry:"3",width:"280",height:"24"}),Object(S.jsx)("rect",{x:"0",y:"282",rx:"10",ry:"10",width:"280",height:"84"}),Object(S.jsx)("rect",{x:"0",y:"382",rx:"0",ry:"0",width:"89",height:"27"}),Object(S.jsx)("rect",{x:"129",y:"382",rx:"30",ry:"30",width:"151",height:"44"}),Object(S.jsx)("circle",{cx:"133",cy:"120",r:"120"})]})},q=c(36),F=c.n(q),K=function(t,e){return function(c){c($(!1)),"alphabet"===e&&(e="name");return F.a.get("https://react-pizza-7ffa3-default-rtdb.firebaseio.com/pizzas.json").then((function(n){var i=function(c){var n=t?c.filter((function(e){return e.category===t})):c;return n.sort((function(t,c){return"rating"===e?c.rating-t.rating:"price"===e?c.price-t.price:"alphabet"===e?c.name-t.name:void 0})),n}(n.data);c(Q(i))}))}},Q=function(t){return{type:h,payload:t}},$=function(t){return{type:O,payload:t}},tt=["\u041c\u044f\u0441\u043d\u044b\u0435","\u0412\u0435\u0433\u0435\u0442\u0430\u0440\u0438\u0430\u043d\u0441\u043a\u0438\u0435","\u0413\u0440\u0438\u043b\u044c","\u041e\u0441\u0442\u0440\u044b\u0435","\u0417\u0430\u043a\u0440\u044b\u0442\u044b\u0435"],et=[{name:"\u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u0438",type:"rating"},{name:"\u0446\u0435\u043d\u0435",type:"price"},{name:"\u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0443",type:"alphabet"}];function ct(){var t=Object(o.b)(),e=Object(o.c)((function(t){return t.pizzas})),c=e.items,a=e.isLoaded,s=Object(o.c)((function(t){return t.cart.items})),r=Object(o.c)((function(t){return t.filters})),l=r.category,j=r.sortBy;Object(n.useEffect)((function(){t(K(l,j))}),[l,j]);var h=i.a.useCallback((function(e){t({type:u,payload:e})}),[]),O=i.a.useCallback((function(e){t({type:b,payload:e})}),[]),x=Object(n.useCallback)((function(e){t({type:m,payload:e})}),[]);return Object(S.jsxs)("div",{className:"container",children:[Object(S.jsxs)("div",{className:"content__top",children:[Object(S.jsx)(H,{items:tt,categoryIndex:l,onClickItem:h}),Object(S.jsx)(X,{items:et,onClick:O})]}),Object(S.jsx)("h2",{className:"content__title",children:"\u0412\u0441\u0435 \u043f\u0438\u0446\u0446\u044b"}),Object(S.jsx)("div",{className:"content__items",children:a?c.map((function(t){var e;return Object(n.createElement)(J,Object(d.a)(Object(d.a)({},t),{},{key:t.id,addedCount:null===(e=s[t.id])||void 0===e?void 0:e.items.length,addPizza:x}))})):Array(12).fill(0).map((function(t,e){return Object(S.jsx)(G,{},e)}))})]})}function nt(t){var e=t.id,c=t.name,n=t.type,i=t.size,a=t.totalPrice,s=t.totalCount,r=t.onPlus,l=t.onMinus,j=Object(o.b)(),d=function(t){j({type:p,payload:t})};return Object(S.jsxs)("div",{className:"cart__item",children:[Object(S.jsx)("div",{className:"cart__item-img",children:Object(S.jsx)("img",{className:"pizza-block__image",src:"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",alt:"Pizza"})}),Object(S.jsxs)("div",{className:"cart__item-info",children:[Object(S.jsx)("h3",{children:c}),Object(S.jsxs)("p",{children:[n," \u0442\u0435\u0441\u0442\u043e, ",i," \u0441\u043c."]})]}),Object(S.jsxs)("div",{className:"cart__item-count",children:[Object(S.jsx)(A,{onClick:s>1?function(){l(e)}:null,outline:!0,className:"button--circle cart__item-count-minus",children:Object(S.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(S.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),Object(S.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})}),Object(S.jsx)("b",{children:s}),Object(S.jsx)(A,{onClick:function(){r(e)},outline:!0,className:"button--circle cart__item-count-plus",children:Object(S.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(S.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),Object(S.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})})]}),Object(S.jsx)("div",{className:"cart__item-price",children:Object(S.jsxs)("b",{children:[a," \u20bd"]})}),Object(S.jsx)("div",{className:"cart__item-remove",children:Object(S.jsx)(A,{className:"button--circle",onClick:function(){return d(e)},outline:!0,children:Object(S.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(S.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),Object(S.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})})})]})}var it=c.p+"static/media/empty-cart.db905d1f.png";function at(){var t=Object(o.b)(),e=Object(o.c)((function(t){return t.cart})),c=e.totalPrice,n=e.totalCount,i=e.items,a=Object.keys(i).map((function(t){return i[t].items[0]})),s=function(e){t({type:f,payload:e})},l=function(e){t({type:v,payload:e})};return n?Object(S.jsx)("div",{className:"container container--cart",children:Object(S.jsxs)("div",{className:"cart",children:[Object(S.jsxs)("div",{className:"cart__top",children:[Object(S.jsxs)("h2",{className:"content__title",children:[Object(S.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(S.jsx)("path",{d:"M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(S.jsx)("path",{d:"M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(S.jsx)("path",{d:"M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]}),"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"]}),Object(S.jsxs)("div",{className:"cart__clear",children:[Object(S.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(S.jsx)("path",{d:"M2.5 5H4.16667H17.5",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(S.jsx)("path",{d:"M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(S.jsx)("path",{d:"M8.33337 9.16667V14.1667",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(S.jsx)("path",{d:"M11.6666 9.16667V14.1667",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})]}),Object(S.jsx)("span",{onClick:function(){t({type:x})},children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043a\u043e\u0440\u0437\u0438\u043d\u0443"})]})]}),Object(S.jsx)("div",{className:"content__items",children:a.map((function(t){return Object(S.jsx)(nt,{id:t.id,name:t.name,type:t.type,size:t.size,totalPrice:i[t.id].totalPrice,totalCount:i[t.id].items.length,onMinus:l,onPlus:s},t.id)}))}),Object(S.jsxs)("div",{className:"cart__bottom",children:[Object(S.jsxs)("div",{className:"cart__bottom-details",children:[Object(S.jsxs)("span",{children:["\u0412\u0441\u0435\u0433\u043e \u043f\u0438\u0446\u0446: ",Object(S.jsxs)("b",{children:[n," \u0448\u0442."]})]}),Object(S.jsxs)("span",{children:["\u0421\u0443\u043c\u043c\u0430 \u0437\u0430\u043a\u0430\u0437\u0430: ",Object(S.jsxs)("b",{children:[c," \u20bd"]})]})]}),Object(S.jsxs)("div",{className:"cart__bottom-buttons",children:[Object(S.jsx)(r.b,{to:"/React-Pizza",children:Object(S.jsxs)("div",{className:"button button--outline button--add go-back-btn",children:[Object(S.jsx)("svg",{width:"8",height:"14",viewBox:"0 0 8 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(S.jsx)("path",{d:"M7 13L1 6.93015L6.86175 1",stroke:"#D3D3D3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Object(S.jsx)("span",{children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"})]})}),Object(S.jsx)("div",{className:"button pay-btn",children:Object(S.jsx)("span",{children:"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u0441\u0435\u0439\u0447\u0430\u0441"})})]})]})]})}):Object(S.jsx)("div",{className:"container container--cart",children:Object(S.jsxs)("div",{className:"cart cart--empty",children:[Object(S.jsx)("h2",{children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f \ud83d\ude15"}),Object(S.jsxs)("p",{children:["\u0412\u0435\u0440\u043e\u044f\u0442\u043d\u0435\u0439 \u0432\u0441\u0435\u0433\u043e, \u0432\u044b \u043d\u0435 \u0437\u0430\u043a\u0430\u0437\u044b\u0432\u0430\u043b\u0438 \u0435\u0449\u0451 \u043f\u0438\u0446\u0446\u0443.",Object(S.jsx)("br",{}),"\u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u0438\u0446\u0446\u0443, \u043f\u0435\u0440\u0435\u0439\u0434\u0438 \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443."]}),Object(S.jsx)("img",{src:it,alt:"Empty cart"}),Object(S.jsx)(r.b,{to:"/",children:Object(S.jsx)("div",{className:"button button--black",children:Object(S.jsx)("span",{children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"})})})]})})}var st=c(2);c(68);function rt(){return Object(S.jsxs)("div",{className:"wrapper",children:[Object(S.jsx)(Z,{}),Object(S.jsx)("div",{className:"content",children:Object(S.jsxs)(st.c,{children:[Object(S.jsx)(st.a,{path:"/React-Pizza",element:Object(S.jsx)(ct,{}),exact:!0}),Object(S.jsx)(st.a,{path:"/cart",element:Object(S.jsx)(at,{}),exact:!0})]})})]})}c(69);s.a.render(Object(S.jsx)(i.a.StrictMode,{children:Object(S.jsx)(r.a,{children:Object(S.jsx)(o.a,{store:V,children:Object(S.jsx)(rt,{})})})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.1b74b6c4.chunk.js.map
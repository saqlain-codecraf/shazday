(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[190],{1742:function(e,c,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cart",function(){return n(1062)}])},2684:function(e,c,n){"use strict";var t=n(5893);c.Z=function(e){var c=e.step;return(0,t.jsx)("div",{className:"checkout-status",children:(0,t.jsxs)("ul",{className:"checkout-steps",children:[(0,t.jsx)("li",{className:"".concat("cart"===c?"active":"done"),children:(0,t.jsx)("i",{className:"icon-cart"})}),(0,t.jsx)("li",{className:"".concat("checkout"===c?"active":"done"),children:(0,t.jsx)("i",{className:"icon-delivery"})})]})})}},3336:function(e,c,n){"use strict";var t=n(5893),s=n(7294),r=n(5617),a=n(5815),i=n(1664),l=n.n(i),o=n(1163),h=n(5675),d=n.n(h);c.Z=function(e){var c=e.isErrorPage,n=(0,o.useRouter)(),i=function(e){return n.pathname===e},h=(0,r.v9)((function(e){return e.cart})).cartItems,u=["/"],x=(0,s.useState)(!(!u.includes(n.pathname)||c)),j=x[0],m=x[1],f=(0,s.useState)(!1),p=f[0],N=f[1],b=(0,s.useState)(!1),v=b[0],_=b[1],g=(0,s.useRef)(null),k=(0,s.useRef)(null),y=function(){0===window.pageYOffset?m(!0):m(!1)};(0,s.useEffect)((function(){u.includes(n.pathname)&&!c&&(y(),window.onscroll=function(){y()})}),[]);return(0,a.Z)(g,(function(){N(!1)})),(0,a.Z)(k,(function(){_(!1)})),(0,t.jsx)("header",{className:"site-header ".concat(j?"":"site-header--fixed"),children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)(l(),{href:"/",children:(0,t.jsx)("a",{className:"navIcons",children:(0,t.jsx)(d(),{src:"/images/shazdayLogo.jpg",style:{borderRadius:100},width:70,height:70,alt:"logo"})})}),(0,t.jsxs)("div",{className:"nav-items-container",children:[(0,t.jsxs)("nav",{ref:g,className:"site-nav ".concat(p?"site-nav--open":""),children:[(0,t.jsx)(l(),{href:"/",children:(0,t.jsx)("a",{style:{color:i("/")?"#c38f00":"inherit"},children:"HOME"})}),(0,t.jsx)(l(),{href:"/",children:(0,t.jsx)("a",{style:{color:i("/products")?"#c38f00":"inherit"},children:"PRODUCTS"})}),(0,t.jsx)(l(),{href:"/",children:(0,t.jsx)("a",{style:{color:i("/Blogs")?"#c38f00":"inherit"},children:"BLOGS"})}),(0,t.jsx)(l(),{href:"/About",children:(0,t.jsx)("a",{style:{color:i("/About")?"#c38f00":"inherit"},children:"ABOUT"})}),(0,t.jsx)(l(),{href:"/Contact",children:(0,t.jsx)("a",{style:{color:i("/Contact")?"#c38f00":"inherit"},children:"CONTACT"})}),(0,t.jsx)("button",{className:"site-nav__btn",children:(0,t.jsx)("p",{children:"Account"})})]}),(0,t.jsxs)("div",{className:"site-header__actions",children:[(0,t.jsxs)("button",{ref:k,className:"search-form-wrapper ".concat(v?"search-form--active":""),children:[(0,t.jsxs)("form",{className:"search-form",children:[(0,t.jsx)("i",{className:"icon-cancel",onClick:function(){return _(!v)}}),(0,t.jsx)("input",{type:"text",name:"search",placeholder:"Enter the product you are looking for"})]}),(0,t.jsx)("i",{onClick:function(){return _(!v)},className:"icon-search"})]}),(0,t.jsx)(l(),{href:"/",children:(0,t.jsxs)("button",{className:"btn-cart",children:[(0,t.jsx)("i",{className:"icon-cart"}),h.length>0&&(0,t.jsx)("span",{className:"btn-cart__count",children:h.length})]})}),(0,t.jsx)(l(),{href:"/",children:(0,t.jsx)("button",{className:"site-header__btn-avatar",children:(0,t.jsx)("i",{className:"icon-avatar"})})}),(0,t.jsx)("button",{onClick:function(){return N(!0)},className:"site-header__btn-menu",children:(0,t.jsx)("i",{className:"btn-hamburger",children:(0,t.jsx)("span",{})})})]})]})]})})}},9429:function(e,c,n){"use strict";n.d(c,{Z:function(){return l}});var t=n(5893),s=n(9008),r=n.n(s),a=n(3336),i=n(1163);function l(e){var c=e.children,n=e.title,s=void 0===n?"Next.js Ecommerce":n,l=(0,i.useRouter)().pathname;return(0,t.jsxs)("div",{className:"app-main",children:[(0,t.jsx)(r(),{children:(0,t.jsx)("title",{children:s})}),(0,t.jsx)(a.Z,{}),(0,t.jsx)("main",{className:"/"!==l?"main-page":"",children:c})]})}},1062:function(e,c,n){"use strict";n.r(c),n.d(c,{default:function(){return h}});var t=n(5893),s=n(9429),r=n(5617),a=n(2684),i=n(6286),l=function(e){var c=e.thumb,n=e.name,s=e.id,a=e.color,l=e.size,o=e.count,h=e.price,d=(0,r.I0)(),u=function(e){if(!(e<=0)){var t={product:{thumb:c,name:n,id:s,color:a,size:l,count:e,price:h},count:e};d((0,i.kM)(t))}};return(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsxs)("div",{className:"cart-product",children:[(0,t.jsx)("div",{className:"cart-product__img",children:(0,t.jsx)("img",{src:c,alt:""})}),(0,t.jsxs)("div",{className:"cart-product__content",children:[(0,t.jsx)("h3",{children:n}),(0,t.jsxs)("p",{children:["#",s]})]})]})}),(0,t.jsx)("td",{className:"cart-item-before","data-label":"Color",children:a}),(0,t.jsx)("td",{className:"cart-item-before","data-label":"Size",children:l}),(0,t.jsx)("td",{children:(0,t.jsxs)("div",{className:"quantity-button",children:[(0,t.jsx)("button",{type:"button",onClick:function(){return u(o-1)},className:"quantity-button__btn",children:"-"}),(0,t.jsx)("span",{children:o}),(0,t.jsx)("button",{type:"button",onClick:function(){return u(o+1)},className:"quantity-button__btn",children:"+"})]})}),(0,t.jsxs)("td",{children:["$",h]}),(0,t.jsx)("td",{className:"cart-item-cancel",children:(0,t.jsx)("i",{className:"icon-cancel",onClick:function(){d((0,i.kh)({thumb:c,name:n,id:s,color:a,size:l,count:o,price:h}))}})})]})},o=function(){var e=(0,r.v9)((function(e){return e.cart})).cartItems;return(0,t.jsx)("section",{className:"cart",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsxs)("div",{className:"cart__intro",children:[(0,t.jsx)("h3",{className:"cart__title",children:"Shopping Cart"}),(0,t.jsx)(a.Z,{step:"cart"})]}),(0,t.jsxs)("div",{className:"cart-list",children:[e.length>0&&(0,t.jsx)("table",{children:(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{style:{textAlign:"left"},children:"Product"}),(0,t.jsx)("th",{children:"Color"}),(0,t.jsx)("th",{children:"Size"}),(0,t.jsx)("th",{children:"Ammount"}),(0,t.jsx)("th",{children:"Price"}),(0,t.jsx)("th",{})]}),e.map((function(e){return(0,t.jsx)(l,{id:e.id,thumb:e.thumb,name:e.name,color:e.color,price:e.price,size:e.size,count:e.count},e.id)}))]})}),0===e.length&&(0,t.jsx)("p",{children:"Nothing in the cart"})]}),(0,t.jsxs)("div",{className:"cart-actions",children:[(0,t.jsxs)("a",{href:"/products",className:"cart__btn-back",children:[(0,t.jsx)("i",{className:"icon-left"})," Continue Shopping"]}),(0,t.jsx)("input",{type:"text",placeholder:"Promo Code",className:"cart__promo-code"}),(0,t.jsxs)("div",{className:"cart-actions__items-wrapper",children:[(0,t.jsxs)("p",{className:"cart-actions__total",children:["Total cost ",(0,t.jsxs)("strong",{children:["$",function(){var c=0;return e.length>0&&e.map((function(e){return c+=e.price*e.count})),c}().toFixed(2)]})]}),(0,t.jsx)("a",{href:"/cart/checkout",className:"btn btn--rounded btn--yellow",children:"Checkout"})]})]})]})})},h=function(){return(0,t.jsx)(s.Z,{children:(0,t.jsx)(o,{})})}}},function(e){e.O(0,[689,774,888,179],(function(){return c=1742,e(e.s=c);var c}));var c=e.O();_N_E=c}]);
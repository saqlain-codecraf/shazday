(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[345],{7153:function(e,c,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/products",function(){return s(9430)}])},3267:function(e,c,s){"use strict";var n=s(5893);c.Z=function(){return(0,n.jsx)("section",{className:"breadcrumb",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("ul",{className:"breadcrumb-list",children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#",children:(0,n.jsx)("i",{className:"icon-home"})})}),(0,n.jsx)("li",{children:"All Products"})]})})})}},3418:function(e,c,s){"use strict";var n=s(5893);c.Z=function(e){var c=e.color,s=e.name,t=e.type,r=void 0===t?"checkbox":t,l=e.onChange,i=e.valueName;return(0,n.jsxs)("label",{htmlFor:c+"-"+s,className:"checkbox-color",children:[(0,n.jsx)("input",{onChange:function(e){l&&l(e.target.getAttribute("data-name"))},value:c,"data-name":i,name:s,type:r,id:c+"-"+s}),(0,n.jsx)("span",{className:"checkbox__check",children:(0,n.jsx)("span",{className:"checkbox__color",style:{backgroundColor:c}})})]})}},9430:function(e,c,s){"use strict";s.r(c),s.d(c,{default:function(){return k}});var n=s(5893),t=s(9429),r=s(6923),l=s(3267),i=s(7294),o=function(e){var c=e.type,s=void 0===c?"":c,t=e.label,r=e.name,l=e.onChange;return(0,n.jsxs)("label",{htmlFor:t+"-"+r,className:"checkbox ".concat(s?"checkbox--"+s:""),children:[(0,n.jsx)("input",{name:r,onChange:l,type:"checkbox",id:t+"-"+r}),(0,n.jsx)("span",{className:"checkbox__check"}),(0,n.jsx)("p",{children:t})]})},a=s(3418),d=s(8460),u=[{id:"1",name:"T-Shirts",count:"172"},{id:"2",name:"Sweatshirts",count:"131"},{id:"3",name:"Tank Tops",count:"56"},{id:"4",name:"Dress shirts",count:"8"}],p=s(549),h=s(5211),x=(0,d.ZP.createSliderWithTooltip)(d.ZP.Range),m=function(){var e=(0,i.useState)(!1),c=e[0],s=e[1];return(0,n.jsxs)("form",{className:"products-filter",onChange:function(){},children:[(0,n.jsxs)("button",{type:"button",onClick:function(){return s(!c)},className:"products-filter__menu-btn ".concat(c?"products-filter__menu-btn--active":""),children:["Add Filter ",(0,n.jsx)("i",{className:"icon-down-open"})]}),(0,n.jsxs)("div",{className:"products-filter__wrapper ".concat(c?"products-filter__wrapper--open":""),children:[(0,n.jsxs)("div",{className:"products-filter__block",children:[(0,n.jsx)("button",{type:"button",children:"Product type"}),(0,n.jsx)("div",{className:"products-filter__block__content",children:u.map((function(e){return(0,n.jsx)(o,{name:"product-type",label:e.name},e.id)}))})]}),(0,n.jsxs)("div",{className:"products-filter__block",children:[(0,n.jsx)("button",{type:"button",children:"Price"}),(0,n.jsx)("div",{className:"products-filter__block__content",children:(0,n.jsx)(x,{min:0,max:20,defaultValue:[3,10],tipFormatter:function(e){return"".concat(e,"%")}})})]}),(0,n.jsxs)("div",{className:"products-filter__block",children:[(0,n.jsx)("button",{type:"button",children:"Size"}),(0,n.jsx)("div",{className:"products-filter__block__content checkbox-square-wrapper",children:h.Z.map((function(e){return(0,n.jsx)(o,{type:"square",name:"product-size",label:e.label},e.id)}))})]}),(0,n.jsxs)("div",{className:"products-filter__block",children:[(0,n.jsx)("button",{type:"button",children:"Color"}),(0,n.jsx)("div",{className:"products-filter__block__content",children:(0,n.jsx)("div",{className:"checkbox-color-wrapper",children:p.Z.map((function(e){return(0,n.jsx)(a.Z,{valueName:e.color,name:"product-color",color:e.color},e.id)}))})})]}),(0,n.jsx)("button",{type:"submit",className:"btn btn-submit btn--rounded btn--yellow",children:"Apply"})]})]})},j=s(5522),_=s(8575),b=function(){return(0,n.jsxs)("a",{href:"#",className:"product-item product-item--loading",children:[(0,n.jsx)("div",{className:"product__image"}),(0,n.jsxs)("div",{className:"product__description",children:[(0,n.jsx)("h3",{}),(0,n.jsx)("div",{className:"product__price",children:(0,n.jsx)("h4",{})})]})]})},f=function(){return(0,n.jsxs)("section",{className:"products-list",children:[(0,n.jsx)(b,{}),(0,n.jsx)(b,{}),(0,n.jsx)(b,{}),(0,n.jsx)(b,{}),(0,n.jsx)(b,{}),(0,n.jsx)(b,{})]})},N=function(){var e=(0,j.ZP)("/api/products",(function(e){return fetch(e).then((function(e){return e.json()}))})),c=e.data;return e.error?(0,n.jsx)("div",{children:"Failed to load users"}):(0,n.jsxs)(n.Fragment,{children:[!c&&(0,n.jsx)(f,{}),c&&(0,n.jsx)("section",{className:"products-list",children:c.map((function(e){return(0,n.jsx)(_.Z,{id:e.id,name:e.name,price:e.price,color:e.color,currentPrice:e.currentPrice,images:e.images},e.id)}))})]})},v=function(){var e=(0,i.useState)(!1),c=e[0],s=e[1];return(0,n.jsxs)("section",{className:"products-content",children:[(0,n.jsxs)("div",{className:"products-content__intro",children:[(0,n.jsxs)("h2",{children:["Men's Tops ",(0,n.jsx)("span",{children:"(133)"})]}),(0,n.jsx)("button",{type:"button",onClick:function(){return s(!c)},className:"products-filter-btn",children:(0,n.jsx)("i",{className:"icon-filters"})}),(0,n.jsxs)("form",{className:"products-content__filter ".concat(c?"products-order-open":""),children:[(0,n.jsxs)("div",{className:"products__filter__select",children:[(0,n.jsx)("h4",{children:"Show products: "}),(0,n.jsx)("div",{className:"select-wrapper",children:(0,n.jsx)("select",{children:(0,n.jsx)("option",{children:"Popular"})})})]}),(0,n.jsxs)("div",{className:"products__filter__select",children:[(0,n.jsx)("h4",{children:"Sort by: "}),(0,n.jsx)("div",{className:"select-wrapper",children:(0,n.jsx)("select",{children:(0,n.jsx)("option",{children:"Popular"})})})]})]})]}),(0,n.jsx)(N,{})]})},k=function(){return(0,n.jsxs)(t.Z,{children:[(0,n.jsx)(l.Z,{}),(0,n.jsx)("section",{className:"products-page",children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)(m,{}),(0,n.jsx)(v,{})]})}),(0,n.jsx)(r.Z,{})]})}},549:function(e,c,s){"use strict";c.Z=[{id:"1",label:"Black",color:"#000000"},{id:"2",label:"Brown",color:"#6F3E18"},{id:"3",label:"Yellow",color:"#D4BE8D"},{id:"4",label:"Gray",color:"#838383"},{id:"5",label:"White",color:"#F3F3F3"},{id:"6",label:"Blue",color:"#0F73AD"}]},5211:function(e,c,s){"use strict";c.Z=[{id:"1",label:"XS"},{id:"2",label:"S"},{id:"3",label:"M"},{id:"4",label:"L"},{id:"5",label:"XL"},{id:"6",label:"XXL"}]}},function(e){e.O(0,[689,522,936,460,491,774,888,179],(function(){return c=7153,e(e.s=c);var c}));var c=e.O();_N_E=c}]);
(this.webpackJsonpcart=this.webpackJsonpcart||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c(4),a=c.n(n),i=c(5),r=(c(10),[{id:1,name:"Pizza",img:"fas fa-pizza-slice fs-1",price:199,quantity:1},{id:2,name:"Burger",img:"fas fa-hamburger fs-1",price:99,quantity:1},{id:3,name:"Ice cream",img:"fas fa-ice-cream fs-1",price:49,quantity:1},{id:4,name:"Hotdog",img:"fas fa-hotdog fs-1",price:149,quantity:1},{id:5,name:"Cake",img:"fas fa-cheese fs-1",price:139,quantity:1},{id:6,name:"Waffle",img:"fas fa-stroopwafel fs-1",price:249,quantity:1}]),l=c(2),d=c(0);var j=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),c=t[0],n=t[1];Object(s.useEffect)((function(){document.body.style.background=!0===c?"#212529":"#fff"}),[c]);var a=Object(l.b)(),j=a.cartTotal,b=a.isEmpty,m=a.items,o=a.totalItems,h=a.addItem,x=a.removeItem,u=a.updateItemQuantity,f=a.emptyCart;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("nav",{className:c?"container bg-dark text-white p-2 rounded shadow my-2 d-flex align-items-center justify-content-between":"container bg-white p-2 rounded shadow my-2 d-flex align-items-center justify-content-between",children:[Object(d.jsxs)("h5",{className:"m-0",children:["Food Hub ",Object(d.jsx)("i",{className:"fas fa-home"})]}),Object(d.jsxs)("div",{className:"d-flex align-items-center justify-content-center",children:[Object(d.jsx)("i",{className:c?"fas fa-sun fs-5 me-2":"fas fa-moon fs-5 me-2",onClick:function(){return n(!c)}}),Object(d.jsx)("h5",{className:"m-2",children:Object(d.jsxs)("span",{className:"badge bg-primary",children:[Object(d.jsx)("i",{className:"fas fa-shopping-cart"}),o]})}),Object(d.jsx)("h5",{className:"m-2",children:Object(d.jsxs)("span",{className:"badge bg-primary",children:["Total Rs.",j]})})]})]}),Object(d.jsxs)("div",{className:"container mt-4",children:[Object(d.jsx)("h1",{className:c?"text-center text-white":"text-center",children:"Products"}),Object(d.jsx)("div",{className:"row justify-content-between",children:r.map((function(e){return Object(d.jsxs)("div",{className:c?"bg-dark text-white shadow rounded col-lg-5 m-2 py-2 d-flex align-items-center justify-content-around":"bg-white shadow rounded col-lg-5 m-2 py-2 d-flex align-items-center justify-content-around",children:[Object(d.jsx)("i",{className:e.img}),Object(d.jsxs)("div",{className:"details d-flex align-items-center justify-content-center flex-column",children:[Object(d.jsx)("h3",{children:e.name}),Object(d.jsxs)("h5",{children:["Rs.",e.price]})]}),Object(d.jsx)("button",{className:"btn btn-success bg-gradient",onClick:function(){return h(e)},children:"Add To Cart"})]},e.id)}))})]}),Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:"container my-4",children:[Object(d.jsx)("h1",{className:c?"text-center text-white":"text-center",children:"Cart"}),b?Object(d.jsx)("h3",{className:c?"text-center text-white":"text-center",children:"No item in the cart"}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("table",{className:c?"table table-dark table-hover":"table table-hover",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{scope:"col",children:"#"}),Object(d.jsx)("th",{scope:"col",children:"Name"}),Object(d.jsx)("th",{scope:"col",children:"Price"}),Object(d.jsx)("th",{scope:"col",children:"Quantity"}),Object(d.jsx)("th",{scope:"col"})]})}),Object(d.jsx)("tbody",{children:m.map((function(e,t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{scope:"row",children:t+1}),Object(d.jsx)("td",{children:e.name}),Object(d.jsxs)("td",{children:["Rs.",e.price]}),Object(d.jsx)("td",{children:e.quantity}),Object(d.jsxs)("td",{children:[Object(d.jsx)("button",{className:"btn btn-danger btn-sm bg-gradient",onClick:function(){return x(e.id)},children:Object(d.jsx)("i",{className:"fas fa-times"})}),Object(d.jsxs)("div",{className:"btn-group m-2",children:[Object(d.jsx)("button",{className:"btn btn-warning text-white bg-gradient btn-sm",onClick:function(){return u(e.id,e.quantity-1)},children:Object(d.jsx)("i",{className:"fas fa-minus"})}),Object(d.jsx)("button",{className:"btn btn-success bg-gradient btn-sm",onClick:function(){return u(e.id,e.quantity+1)},children:Object(d.jsx)("i",{className:"fas fa-plus"})})]})]})]},t)}))})]}),Object(d.jsx)("div",{className:"text-center",children:Object(d.jsx)("button",{className:"btn btn-danger bg-gradient",onClick:function(){return f()},children:"Empty Cart"})})]})]})]})};a.a.render(Object(d.jsx)(l.a,{children:Object(d.jsx)(j,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.abe67f7e.chunk.js.map
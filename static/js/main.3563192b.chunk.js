(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var s=n(7),r=n.n(s),a=n(2),c=n(3),o=n(5),i=n(4),l=n(1),u=n.n(l),h=n(0),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j=function(t){Object(o.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(a.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={goods:b,isReverse:!1,length:1,sortBy:""},t.reverse=function(){t.setState((function(t){return{isReverse:!t.isReverse}}))},t.sortAlphabetically=function(){t.setState({sortBy:"alphabetically"})},t.sortByLength=function(){t.setState({sortBy:"length"})},t.reset=function(){t.setState({sortBy:"",length:1,isReverse:!1})},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.goods,s=e.sortBy,r=e.isReverse,a=e.length,c=n.filter((function(t){return t.length>=a}));return s&&c.sort((function(t,e){switch(s){case"alphabetically":return t.localeCompare(e);case"length":return t.length-e.length;default:return 0}})),r&&c.reverse(),Object(h.jsxs)("div",{className:"GoodsList",children:[Object(h.jsx)("button",{className:"buttons__item",type:"button",onClick:this.sortAlphabetically,children:"Alphabetically"}),Object(h.jsx)("button",{className:"buttons__item",type:"button",onClick:this.sortByLength,children:"Goods length"}),Object(h.jsx)("button",{className:"buttons__item",type:"button",onClick:this.reverse,children:"Reverse"}),Object(h.jsx)("select",{className:"buttons__select",value:a,onChange:function(e){t.setState({length:+e.target.value})},children:[1,2,3,4,5,6,7,8,9,10].map((function(t){return Object(h.jsx)("option",{value:t,children:t},t)}))}),Object(h.jsx)("button",{className:"buttons__item",type:"button",onClick:this.reset,children:"Reset"}),Object(h.jsx)("ul",{className:"goods__list",children:c.map((function(t){return Object(h.jsx)("li",{children:t},t)}))})]})}}]),n}(u.a.Component),d=(n(13),function(t){Object(o.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(a.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={isStarted:!1},t.startSort=function(){t.setState({isStarted:!0})},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.state.isStarted;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"Goods"}),!t&&Object(h.jsx)("button",{onClick:this.startSort,type:"button",children:"Start!"}),t&&Object(h.jsx)(j,{})]})}}]),n}(u.a.Component));r.a.render(Object(h.jsx)(d,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.3563192b.chunk.js.map
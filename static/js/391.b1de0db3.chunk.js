"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[391],{916:function(t,e,n){n.d(e,{w:function(){return s}});var c=n(434),i="Filter_input__N7T3z",o=n(324),a=n(184),s=function(){var t=(0,c.I0)();return(0,a.jsx)("input",{className:i,type:"text",placeholder:"Search by name",onChange:function(e){return t((0,o.xO)(e.target.value))}})}},391:function(t,e,n){n.r(e),n.d(e,{default:function(){return m}});var c=n(433),i=(n(791),n(535)),o=n(434),a=n(324),s=n(686),r=n(184),l=function(){var t=(0,o.I0)(),e=(0,o.v9)((function(t){return t.contacts.contacts.items})),n=(0,o.v9)((function(t){return t.contacts.filter})),l=e.filter((function(t){return t.favorite})).filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())})),u=(0,c.Z)(l).sort((function(t,e){return t.name.localeCompare(e.name)}));return(0,r.jsx)("ul",{className:i.Z.list,children:u.length>0?u.map((function(e){return(0,r.jsxs)("li",{className:i.Z.item,children:[(0,r.jsx)("button",{className:i.Z.button,onClick:function(){return function(e){t((0,a.QJ)(e.id)),s.Notify.info('Contact "'.concat(e.name,'" removed from favorites'))}(e)},title:'Remove favorite "'.concat(e.name,'"'),children:"\ud83d\udc99"}),(0,r.jsxs)("a",{className:i.Z.link,href:"tel:".concat(e.number),children:[(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:e.name}),":"]}),(0,r.jsxs)("span",{children:[e.number,":"]})]}),(0,r.jsx)("button",{className:"".concat(i.Z.button," ").concat(i.Z.buttonDelete),onClick:function(){return n=e.name,c=e.id,t((0,a.GK)(c)),s.Notify.info('Contact "'.concat(n,'" deleted')),void t((0,a.QJ)(c));var n,c},title:'Delete contact "'.concat(e.name,'"'),children:"Delete"})]},e.id)})):(0,r.jsx)("h3",{className:i.Z.subtitle,children:"No favorites contacts found."})})},u=n(971),f=n(916),m=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h2",{className:u.Z.title,children:"Favorite contacts"}),(0,r.jsx)(f.w,{}),(0,r.jsx)(l,{})]})}},535:function(t,e){e.Z={list:"ContactList_list__csErn",item:"ContactList_item__EZYHO",link:"ContactList_link__SuaLH",button:"ContactList_button__7kL4l",subtitle:"ContactList_subtitle__sjzfd",buttonDelete:"ContactList_buttonDelete__3LEoC"}},971:function(t,e){e.Z={title:"styles_title__Eys6g",subtitle:"styles_subtitle__DqUiJ"}}}]);
//# sourceMappingURL=391.b1de0db3.chunk.js.map
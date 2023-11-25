"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[246],{6641:function(t,e,n){n.d(e,{C:function(){return h}});var a=n(3433),o=(n(2791),n(6535)),r=n(9434),i=n(9324),c=n(1686),s=n(4414),l=n(1129),u=n(27),d=n(9981),m=n(8275),f=n(184),h=function(){var t=(0,r.I0)(),e=(0,r.v9)(l.EX),n=(0,r.v9)(l.uG),h=(0,r.v9)(l.oY),_=(0,r.v9)(m.S),b=e.filter((function(t){return t.name.trim().toLowerCase().includes(n.toLowerCase().trim())||t.number.trim().toString().includes(n.toLowerCase().trim())})),v=(0,a.Z)(b).sort((function(t,e){return t.name.localeCompare(e.name)})),p=function(t){var n=e.find((function(e){return e.id===t}));return n&&!0===n.favorite};return(0,f.jsxs)("ul",{className:o.Z.list,children:[h&&(0,f.jsx)("div",{className:o.Z.loaderWrapper,children:(0,f.jsx)(s.Z,{})}),v.length>0?v.map((function(e){return(0,f.jsxs)("li",{className:o.Z.item,children:[p(e.id)?(0,f.jsx)("button",{className:o.Z.button,onClick:function(){return function(e){t((0,i.QJ)(e.id)),c.Notify.info('Contact "'.concat(e.name,'" removed from favorites'))}(e)},title:'Remove favorite "'.concat(e.name,'"'),children:"\ud83d\udc99"}):(0,f.jsx)("button",{className:o.Z.button,onClick:function(){return function(e){t((0,i.Jh)(e.id)),c.Notify.success('Contact "'.concat(e.name,'" added to favorites'))}(e)},title:'Add to favorite "'.concat(e.name,'"'),children:"\ud83e\udd0d"}),(0,f.jsx)("button",{className:o.Z.button,title:"Edit this conatct",onClick:function(){return t((0,u.h7)(e))},children:"\ud83d\udd8a"}),(0,f.jsxs)("a",{className:o.Z.link,href:"tel:".concat(e.number),children:[(0,f.jsxs)("span",{children:[(0,f.jsx)("b",{children:e.name}),":"]}),(0,f.jsxs)("span",{children:[" ",e.number]})]}),(0,f.jsx)("button",{className:"".concat(o.Z.button," ").concat(o.Z.buttonDelete),onClick:function(){return n=e.name,a=e.id,t((0,i.GK)(a)),c.Notify.info('Contact "'.concat(n,'" deleted')),void t((0,i.QJ)(a));var n,a},title:'Delete contact "'.concat(e.name,'"'),children:"Delete"})]},e.id)})):(0,f.jsx)("h3",{className:o.Z.subtitle,children:"No contacts found."}),_&&(0,f.jsx)(d.u,{})]})}},1916:function(t,e,n){n.d(e,{w:function(){return c}});var a=n(9434),o="Filter_input__N7T3z",r=n(9324),i=n(184),c=function(){var t=(0,a.I0)();return(0,i.jsx)("input",{className:o,type:"text",placeholder:"Search...",onChange:function(e){return t((0,r.xO)(e.target.value))},title:"Search by name or phone number"})}},9981:function(t,e,n){n.d(e,{u:function(){return j}});var a=n(9439),o=n(2791),r="ModalEdit_closeBtn__C1Xdb",i="ModalEdit_modal__qHL5S",c="ModalEdit_wrapper__Ji4aZ",s="ModalEdit_overlay__NLf+E",l="ModalEdit_title__hTaq7",u="ModalEdit_subtitle__MZsWw",d="ModalEdit_form__BYjr7",m="ModalEdit_input__lQxNb",f="ModalEdit_button__Iw1sV",h=n(9434),_=n(8275),b=n(27),v=n(1129),p=n(9324),x=n(1686),C=n(184),j=function(){var t=(0,h.I0)(),e=(0,h.v9)(_.D),n=(0,h.v9)(v.EX);(0,o.useEffect)((function(){var e=function(e){"Escape"===e.code&&t((0,b.Mr)())};return window.addEventListener("keydown",e),document.body.style.overflow="hidden",function(){window.removeEventListener("keydown",e),document.body.style.overflow="auto"}}),[t]);return(0,C.jsx)("div",{onClick:function(e){e.target===e.currentTarget&&t((0,b.Mr)())},className:s,children:(0,C.jsxs)("div",{className:i,children:[(0,C.jsx)("button",{className:r,onClick:function(){return t((0,b.Mr)())},children:"\u274c"}),(0,C.jsxs)("div",{className:c,children:[(0,C.jsx)("h3",{className:l,children:"Edit contact:"}),(0,C.jsxs)("p",{className:u,children:['"',e.name," : ",e.number,'"']}),(0,C.jsxs)("form",{className:d,onSubmit:function(o){o.preventDefault();var r=(0,a.Z)(o.target.elements,2),i=r[0],c=r[1],s=n.some((function(t){return t.name.toLowerCase()===i.value.toLowerCase()&&t.id!==e.id})),l=n.some((function(t){return t.number===c.value&&t.id!==e.id}));if(s)alert("A contact with that name already exists, try changing the name");else if(l)alert("A contact with this phone number already exists");else{var u={name:i.value,number:c.value,id:e.id};try{t((0,p.mP)(u)),t((0,b.cU)(u))}catch(d){x.Notify.error('Contact "'.concat(u.name,'" not edited.  Error: ').concat(d.message))}finally{x.Notify.success('Contact "'.concat(u.name,'"  edited successfully'))}}},children:[(0,C.jsx)("input",{className:m,type:"text",name:"name",defaultValue:e.name,placeholder:"Enter new name",required:!0,pattern:"^[A-Za-z\u0410-\u042f\u0430-\u044f\u0407\u0457\u0406\u0456\\d\\s]+$",title:"You can enter letters of the Latin and Cyrillic alphabets, numbers, and spaces."}),(0,C.jsx)("input",{className:m,type:"tel",name:"number",defaultValue:e.number,placeholder:"Enter new number",required:!0,pattern:"^[\\d+\\s\\-*#]{5,18}$",title:"Phone number can contain digits, spaces, hyphens, or symbols like *, #, etc. Length: 5-18 characters."}),(0,C.jsx)("button",{type:"submit",className:f,title:"Change this contact information",children:"Change information"})]})]})]})})}},6246:function(t,e,n){n.r(e);var a=n(6641),o=n(1916),r=n(8971),i=n(184);e.default=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{className:r.Z.title,children:"All contacts"}),(0,i.jsx)(o.w,{}),(0,i.jsx)(a.C,{})]})}},1129:function(t,e,n){n.d(e,{EX:function(){return a},oY:function(){return o},uG:function(){return r}});var a=function(t){return t.contacts.contacts.items},o=function(t){return t.contacts.contacts.isLoading},r=function(t){return t.contacts.filter}},8275:function(t,e,n){n.d(e,{D:function(){return o},S:function(){return a}});var a=function(t){return t.modal.isOpenModal},o=function(t){return t.modal.modalData}},6535:function(t,e){e.Z={list:"ContactList_list__csErn",item:"ContactList_item__EZYHO",link:"ContactList_link__SuaLH",button:"ContactList_button__7kL4l",subtitle:"ContactList_subtitle__sjzfd",buttonDelete:"ContactList_buttonDelete__3LEoC",loaderWrapper:"ContactList_loaderWrapper__goayi"}},8971:function(t,e){e.Z={title:"styles_title__Eys6g",subtitle:"styles_subtitle__DqUiJ"}}}]);
//# sourceMappingURL=246.15dd6cb3.chunk.js.map
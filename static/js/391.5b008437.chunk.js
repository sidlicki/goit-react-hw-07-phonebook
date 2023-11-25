"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[391],{1916:function(t,e,n){n.d(e,{w:function(){return c}});var a=n(9434),r="Filter_input__N7T3z",i=n(9324),o=n(184),c=function(){var t=(0,a.I0)();return(0,o.jsx)("input",{className:r,type:"text",placeholder:"Search...",onChange:function(e){return t((0,i.xO)(e.target.value))},title:"Search by name or phone number"})}},9981:function(t,e,n){n.d(e,{u:function(){return C}});var a=n(9439),r=n(2791),i="ModalEdit_closeBtn__C1Xdb",o="ModalEdit_modal__qHL5S",c="ModalEdit_wrapper__Ji4aZ",s="ModalEdit_overlay__NLf+E",l="ModalEdit_title__hTaq7",u="ModalEdit_subtitle__MZsWw",d="ModalEdit_form__BYjr7",m="ModalEdit_input__lQxNb",f="ModalEdit_button__Iw1sV",_=n(9434),h=n(8275),b=n(27),v=n(1129),p=n(9324),x=n(1686),j=n(184),C=function(){var t=(0,_.I0)(),e=(0,_.v9)(h.D),n=(0,_.v9)(v.EX);(0,r.useEffect)((function(){var e=function(e){"Escape"===e.code&&t((0,b.Mr)())};return window.addEventListener("keydown",e),document.body.style.overflow="hidden",function(){window.removeEventListener("keydown",e),document.body.style.overflow="auto"}}),[t]);return(0,j.jsx)("div",{onClick:function(e){e.target===e.currentTarget&&t((0,b.Mr)())},className:s,children:(0,j.jsxs)("div",{className:o,children:[(0,j.jsx)("button",{className:i,onClick:function(){return t((0,b.Mr)())},children:"\u274c"}),(0,j.jsxs)("div",{className:c,children:[(0,j.jsx)("h3",{className:l,children:"Edit contact:"}),(0,j.jsxs)("p",{className:u,children:['"',e.name," : ",e.number,'"']}),(0,j.jsxs)("form",{className:d,onSubmit:function(r){r.preventDefault();var i=(0,a.Z)(r.target.elements,2),o=i[0],c=i[1],s=n.some((function(t){return t.name.toLowerCase()===o.value.toLowerCase()&&t.id!==e.id})),l=n.some((function(t){return t.number===c.value&&t.id!==e.id}));if(s)alert("A contact with that name already exists, try changing the name");else if(l)alert("A contact with this phone number already exists");else{var u={name:o.value,number:c.value,id:e.id};try{t((0,p.mP)(u)),t((0,b.cU)(u))}catch(d){x.Notify.error('Contact "'.concat(u.name,'" not edited.  Error: ').concat(d.message))}finally{x.Notify.success('Contact "'.concat(u.name,'"  edited successfully'))}}},children:[(0,j.jsx)("input",{className:m,type:"text",name:"name",defaultValue:e.name,placeholder:"Enter new name",required:!0,pattern:"^[A-Za-z\u0410-\u042f\u0430-\u044f\u0407\u0457\u0406\u0456\\d\\s]+$",title:"You can enter letters of the Latin and Cyrillic alphabets, numbers, and spaces."}),(0,j.jsx)("input",{className:m,type:"tel",name:"number",defaultValue:e.number,placeholder:"Enter new number",required:!0,pattern:"^[\\d+\\s\\-*#]{5,18}$",title:"Phone number can contain digits, spaces, hyphens, or symbols like *, #, etc. Length: 5-18 characters."}),(0,j.jsx)("button",{type:"submit",className:f,title:"Change this contact information",children:"Change information"})]})]})]})})}},3391:function(t,e,n){n.r(e),n.d(e,{default:function(){return v}});var a=n(3433),r=(n(2791),n(6535)),i=n(9434),o=n(9324),c=n(1686),s=n(1129),l=n(4414),u=n(27),d=n(9981),m=n(8275),f=n(184),_=function(){var t=(0,i.I0)(),e=(0,i.v9)(s.EX),n=(0,i.v9)(s.uG),_=(0,i.v9)(s.oY),h=(0,i.v9)(m.S),b=e.filter((function(t){return t.favorite})).filter((function(t){return t.name.trim().toLowerCase().includes(n.toLowerCase().trim())||t.number.trim().toString().includes(n.toLowerCase().trim())})),v=(0,a.Z)(b).sort((function(t,e){return t.name.localeCompare(e.name)}));return(0,f.jsxs)("ul",{className:r.Z.list,children:[_&&(0,f.jsx)("div",{className:r.Z.loaderWrapper,children:(0,f.jsx)(l.Z,{})}),v.length>0?v.map((function(e){return(0,f.jsxs)("li",{className:r.Z.item,children:[(0,f.jsx)("button",{className:r.Z.button,onClick:function(){return function(e){t((0,o.QJ)(e.id)),c.Notify.info('Contact "'.concat(e.name,'" removed from favorites'))}(e)},title:'Remove favorite "'.concat(e.name,'"'),children:"\ud83d\udc99"}),(0,f.jsx)("button",{className:r.Z.button,title:"Edit this conatct",onClick:function(){return t((0,u.h7)(e))},children:"\ud83d\udd8a"}),(0,f.jsxs)("a",{className:r.Z.link,href:"tel:".concat(e.number),children:[(0,f.jsxs)("span",{children:[(0,f.jsx)("b",{children:e.name}),":"]}),(0,f.jsxs)("span",{children:[" ",e.number]})]}),(0,f.jsx)("button",{className:"".concat(r.Z.button," ").concat(r.Z.buttonDelete),onClick:function(){return n=e.name,a=e.id,t((0,o.GK)(a)),c.Notify.info('Contact "'.concat(n,'" deleted')),void t((0,o.QJ)(a));var n,a},title:'Delete contact "'.concat(e.name,'"'),children:"Delete"})]},e.id)})):(0,f.jsx)("h3",{className:r.Z.subtitle,children:"No favorites contacts found."}),h&&(0,f.jsx)(d.u,{})]})},h=n(8971),b=n(1916),v=function(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h2",{className:h.Z.title,children:"Favorite contacts"}),(0,f.jsx)(b.w,{}),(0,f.jsx)(_,{})]})}},1129:function(t,e,n){n.d(e,{EX:function(){return a},oY:function(){return r},uG:function(){return i}});var a=function(t){return t.contacts.contacts.items},r=function(t){return t.contacts.contacts.isLoading},i=function(t){return t.contacts.filter}},8275:function(t,e,n){n.d(e,{D:function(){return r},S:function(){return a}});var a=function(t){return t.modal.isOpenModal},r=function(t){return t.modal.modalData}},6535:function(t,e){e.Z={list:"ContactList_list__csErn",item:"ContactList_item__EZYHO",link:"ContactList_link__SuaLH",button:"ContactList_button__7kL4l",subtitle:"ContactList_subtitle__sjzfd",buttonDelete:"ContactList_buttonDelete__3LEoC",loaderWrapper:"ContactList_loaderWrapper__goayi"}},8971:function(t,e){e.Z={title:"styles_title__Eys6g",subtitle:"styles_subtitle__DqUiJ"}}}]);
//# sourceMappingURL=391.5b008437.chunk.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[197],{2197:function(e,n,t){t.r(n),t.d(n,{default:function(){return J}});var a=t(5048),s=t(9439),r=t(2791),i=t(5705),o=t(6727),c=t(9085),l=(t(5462),t(4691)),u=t(3661),d=t(7445),m="Form_form__e1yzW",h="Form_label__8nx+5",x="Form_input__FTtTw",p="Form_btn__0ebGo",_="Form_error__Roa6G",f=t(3329),j=function(){var e=(0,u.Tn)(),n=(0,s.Z)(e,2),t=n[0],a=n[1],j=a.isLoading,b=a.isSuccess,g=a.isError,v=(0,u.Jx)().data;(0,r.useEffect)((function(){b&&(0,d.fI)()}),[b]),(0,r.useEffect)((function(){g&&(0,d.I3)()}),[g]);var C=o.Ry().shape({name:o.Z_().min(2,"Too Short!").max(20,"Too Long!").required("Name is required field"),phone:o.Rx().typeError("That does not look like a phone number").positive("A phone number can't start with a minus").integer("A phone number can't include a decimal point").required("A phone number is required")});return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(c.Ix,{autoClose:1e3,position:"top-center"}),(0,f.jsx)(i.J9,{initialValues:{name:"",phone:""},validationSchema:C,onSubmit:function(e,n){var a=n.resetForm,s=e.name,r=e.phone;v.find((function(n){return n.name.toLowerCase()===e.name.toLowerCase()}))?alert("".concat(e.name," is already in contacts!")):t({name:s,number:r})&&a()},children:(0,f.jsxs)(i.l0,{className:m,children:[(0,f.jsxs)("label",{className:h,children:["Name",(0,f.jsx)(i.gN,{className:x,type:"text",name:"name",placeholder:"Name"}),(0,f.jsx)(i.Bc,{className:_,name:"name",component:"div"})]}),(0,f.jsxs)("label",{className:h,children:["Number",(0,f.jsx)(i.gN,{className:x,type:"tel",name:"phone",placeholder:"phone"}),(0,f.jsx)(i.Bc,{className:_,name:"phone",component:"div"})]}),(0,f.jsxs)("button",{className:p,disabled:j,type:"submit",children:[j&&(0,f.jsx)(l.s5,{height:"20",width:"20"}),"Add contact"]})]})})]})},b=t(3628),g=t(6895),v=t(6351),C="Filter_label__vEd1E",N="Filter_input__N7T3z",w=function(){var e=(0,a.I0)(),n=(0,a.v9)(v.zK);return(0,f.jsxs)("label",{className:C,children:["Find contacts by name",(0,f.jsx)(b.DebounceInput,{minLength:1,debounceTimeout:300,className:N,type:"text",value:n,placeholder:"Search",onChange:function(n){var t;t=n.target.value,e((0,g.T)(t))}})]})},y="ContactList_contactList__UFVCg",F="ContactList_default__obqAl",S=t(1413),L=t(4925),k="button-styled_btn__eaOIc",A=["children","disabled","isLoading"],I=function(e){var n=e.children,t=e.disabled,a=e.isLoading,s=(0,L.Z)(e,A);return(0,f.jsxs)("button",(0,S.Z)((0,S.Z)({className:k,disabled:t},s),{},{type:"submit",children:[a&&(0,f.jsx)(l.s5,{height:"20",width:"20"}),n]}))},T="ContactItem_contactItem__aUSMv",Z=function(e){var n=e.id,t=e.name,a=e.number,i=(0,r.useState)(!1),o=(0,s.Z)(i,2),d=o[0],m=o[1],h=(0,r.useState)(t),x=(0,s.Z)(h,2),p=x[0],_=x[1],j=(0,r.useState)(a),b=(0,s.Z)(j,2),g=b[0],v=b[1],C=(0,u.Nt)(),N=(0,s.Z)(C,2),w=N[0],y=N[1],F=y.isLoading,S=y.isSuccess,L=(0,u.wv)(),k=(0,s.Z)(L,2),A=k[0],Z=k[1],E=Z.isLoading,q=Z.isSuccess;(0,r.useEffect)((function(){S&&c.Am.success("Contact has been deleted!"),q&&(m(!1),c.Am.success("Contact has been updated!"))}),[S,q]);var P=function(e){"name"===e.target.name?_(e.target.value):"number"===e.target.name&&v(e.target.value)};return(0,f.jsx)("li",{className:T,children:d?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("input",{type:"text",name:"name",value:p,onChange:P}),(0,f.jsx)("input",{type:"text",name:"number",value:g,onChange:P}),(0,f.jsxs)("div",{children:[(0,f.jsxs)(I,{onClick:function(){A({id:n,name:p,number:g})},disabled:E,children:[E&&(0,f.jsx)(l.s5,{height:"20",width:"20"}),"Save"]}),(0,f.jsx)(I,{onClick:function(){m(!1),_(t),v(a)},children:"Cancel"})]})]}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("span",{children:[t,":"]})," ",(0,f.jsx)("span",{children:a}),(0,f.jsxs)("div",{children:[(0,f.jsx)(I,{onClick:function(){m(!0)},children:"Edit"}),(0,f.jsxs)(I,{onClick:function(){window.confirm("Are you sure you want to delete this contact?")&&w(n)},disabled:F,children:[F&&(0,f.jsx)(l.s5,{height:"20",width:"20"}),"Delete"]})]})]})})},E=function(){var e=(0,a.v9)(v.zK),n=(0,u.Jx)(),t=n.data,s=n.isLoading,r=n.error;return(0,f.jsxs)(f.Fragment,{children:[s&&(0,f.jsx)("p",{className:F,children:"...loading"}),r&&(0,f.jsx)("p",{className:F,children:"Sorry, something went wrong, please try again later!"}),t&&0===t.length&&(0,f.jsx)("p",{children:"There is no contact!"}),(0,f.jsx)("ul",{className:y,children:t&&(0,v.F4)(t,e).map((function(e){var n=e.id,t=e.name,a=e.number;return(0,f.jsx)(Z,{name:t,number:a,id:n},n)}))})]})},q="ContactsPage_wrapper__HYOyv",P="ContactsPage_titlePhone__ODE41",z="ContactsPage_titleCont__JLcCo",J=function(){return(0,a.v9)(v.M7)&&(0,f.jsxs)("div",{className:q,children:[(0,f.jsx)("h1",{className:P,children:"Phonebook"}),(0,f.jsx)(j,{}),(0,f.jsx)("h2",{className:z,children:"Contacts"}),(0,f.jsx)(w,{}),(0,f.jsx)(E,{})]})}},7445:function(e,n,t){t.d(n,{G$:function(){return r},I3:function(){return i},fI:function(){return o},oo:function(){return s}});var a=t(9085),s=function(){return a.Am.error("Sorry, wrong email or password!")},r=function(){return a.Am.error("Sorry, incorrect data entered!")},i=function(){return a.Am.error("Sorry, something went wrong, please try again later!")},o=function(){return a.Am.success("Contact added!")}}}]);
//# sourceMappingURL=197.e638b0d1.chunk.js.map
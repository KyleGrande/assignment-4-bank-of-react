(this["webpackJsonpbank-of-react"]=this["webpackJsonpbank-of-react"]||[]).push([[0],{30:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(22),r=n.n(s),i=(n(30),n(23)),o=n(15),d=n(21),l=n(5),b=n(6),u=n(7),j=n(8),h=n(19),m=n.n(h),O=n(4),p=n(2),x=n(0),f=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{children:["Balance: ",this.props.accountBalance]})}}]),n}(c.Component),v=f,N=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("img",{src:"https://picsum.photos/200/200",alt:"bank"}),Object(x.jsx)("h1",{children:"Bank of React"}),Object(x.jsx)(O.b,{to:"/userProfile",children:"User Profile"}),Object(x.jsx)("br",{}),Object(x.jsx)(O.b,{to:"/login",children:"Login"}),Object(x.jsx)("br",{}),Object(x.jsx)(O.b,{to:"/credits",children:"Credits (to be implemented in the Assignment)"}),Object(x.jsx)("br",{}),Object(x.jsx)(O.b,{to:"/debits",children:"Debits (to be implemented in the Assignment)"}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)(v,{accountBalance:this.props.accountBalance})]})}}]),n}(c.Component),g=N,S=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"User Profile"}),Object(x.jsxs)("div",{children:["Username: ",this.props.userName]}),Object(x.jsxs)("div",{children:["Member Since: ",this.props.memberSince]}),Object(x.jsx)("br",{}),Object(x.jsx)(O.b,{to:"/",children:"Return to Home"})]})}}]),n}(c.Component),C=S,y=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(l.a)(this,n),(c=t.call(this,e)).handleChange=function(e){var t=Object(o.a)({},c.state.user);t.userName=e.target.value,c.setState({user:t})},c.handleSubmit=function(e){e.preventDefault(),c.props.mockLogIn(c.state.user),c.setState({redirect:!0})},c.state={user:{userName:c.props.user.userName,password:""},redirect:!1},c}return Object(b.a)(n,[{key:"render",value:function(){return this.state.redirect?Object(x.jsx)(p.a,{to:"/userProfile"}):Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"Login"}),Object(x.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{children:"User Name"}),Object(x.jsx)("input",{type:"text",name:"userName",defaultValue:this.props.user.userName,onChange:this.handleChange})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{children:"Password"}),Object(x.jsx)("input",{type:"password",name:"password"})]}),Object(x.jsx)("button",{children:"Log In"})]}),Object(x.jsx)("br",{}),Object(x.jsx)(O.b,{to:"/",children:"Return to Home"})]})}}]),n}(c.Component),B=n(13),k=(n(41),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={description:"",amount:""},e.handleChange=function(t){var n=t.target,c=n.name,a=n.value;e.setState(Object(B.a)({},c,a))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,c=n.description,a=n.amount,s={id:Math.floor(1e5*Math.random()),description:c,amount:a,date:(new Date).toISOString().slice(0,10)};e.props.addCredit(s),e.setState({description:"",amount:""})},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this;return Object(x.jsxs)("div",{className:"credits",children:[Object(x.jsxs)("div",{className:"credits-header",children:[Object(x.jsx)("div",{className:"credits-header-left",children:Object(x.jsx)(O.b,{to:"/",className:"return-button",children:"HOME"})}),Object(x.jsx)("div",{className:"credits-header-center",children:"Credits"}),Object(x.jsx)("div",{className:"credits-header-right",children:Object(x.jsx)(v,{accountBalance:this.props.accountBalance})})]}),Object(x.jsxs)("div",{className:"credit-content",children:[Object(x.jsx)("ul",{className:"credit-list",children:e.props.credits.slice().reverse().map((function(e){var t=e.date.slice(0,10);return Object(x.jsx)("li",{className:"credit-item",children:Object(x.jsxs)("div",{className:"credit-info",children:[Object(x.jsx)("div",{className:"credit-amount",children:e.amount}),Object(x.jsx)("div",{className:"credit-description",children:e.description}),Object(x.jsx)("div",{className:"credit-date",children:t})]})},e.id)}))}),Object(x.jsxs)("form",{onSubmit:this.handleSubmit,className:"credit-form",children:[Object(x.jsxs)("div",{className:"form-row",children:[Object(x.jsx)("label",{htmlFor:"description",className:"form-label",children:"Description"}),Object(x.jsx)("input",{type:"text",name:"description",id:"description",value:this.state.description,onChange:this.handleChange,className:"form-input"})]}),Object(x.jsxs)("div",{className:"form-row",children:[Object(x.jsx)("label",{htmlFor:"amount",className:"form-label",children:"Amount"}),Object(x.jsx)("input",{type:"number",name:"amount",id:"amount",value:this.state.amount,onChange:this.handleChange,className:"form-input"})]}),Object(x.jsx)("button",{type:"submit",className:"form-button",children:"Add Credit"})]})]})]})}}]),n}(c.Component)),L=k,w=(n(42),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={description:"",amount:""},e.handleChange=function(t){var n=t.target,c=n.name,a=n.value;e.setState(Object(B.a)({},c,a))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,c=n.description,a=n.amount,s={id:Math.floor(1e5*Math.random()),description:c,amount:a,date:(new Date).toISOString().slice(0,10)};e.props.addDebit(s),e.setState({description:"",amount:""})},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this;return Object(x.jsxs)("div",{className:"debits",children:[Object(x.jsxs)("div",{className:"debits-header",children:[Object(x.jsx)("div",{className:"debits-header-left",children:Object(x.jsx)(O.b,{to:"/",className:"return-button",children:"HOME"})}),Object(x.jsx)("div",{className:"debits-header-center",children:"Debits"}),Object(x.jsx)("div",{className:"debits-header-right",children:Object(x.jsx)(v,{accountBalance:this.props.accountBalance})})]}),Object(x.jsxs)("div",{className:"debit-content",children:[Object(x.jsx)("ul",{className:"debit-list",children:e.props.debits.slice().reverse().map((function(e){var t=e.date.slice(0,10);return Object(x.jsx)("li",{className:"debit-item",children:Object(x.jsxs)("div",{className:"debit-info",children:[Object(x.jsx)("div",{className:"debit-amount",children:e.amount}),Object(x.jsx)("div",{className:"debit-description",children:e.description}),Object(x.jsx)("div",{className:"debit-date",children:t})]})},e.id)}))}),Object(x.jsxs)("form",{onSubmit:this.handleSubmit,className:"debit-form",children:[Object(x.jsxs)("div",{className:"form-row",children:[Object(x.jsx)("label",{htmlFor:"description",className:"form-label",children:"Description"}),Object(x.jsx)("input",{type:"text",name:"description",id:"description",value:this.state.description,onChange:this.handleChange,className:"form-input"})]}),Object(x.jsxs)("div",{className:"form-row",children:[Object(x.jsx)("label",{htmlFor:"amount",className:"form-label",children:"Amount"}),Object(x.jsx)("input",{type:"number",name:"amount",id:"amount",value:this.state.amount,onChange:this.handleChange,className:"form-input"})]}),Object(x.jsx)("button",{type:"submit",className:"form-button",children:"Add Debit"})]})]})]})}}]),n}(c.Component)),D=w,U=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).addCredit=function(t){var n=[].concat(Object(d.a)(e.state.creditList),[t]);e.setState({creditList:n,accountBalance:e.state.accountBalance+Number(t.amount)})},e.addDebit=function(t){var n=[].concat(Object(d.a)(e.state.debitList),[t]);e.setState({debitList:n,accountBalance:e.state.accountBalance-Number(t.amount)})},e.mockLogIn=function(t){var n=Object(o.a)({},e.state.currentUser);n.userName=t.userName,e.setState({currentUser:n})},e.state={accountBalance:1234567.89,creditList:[],debitList:[],currentUser:{userName:"Joe Smith",memberSince:"11/22/99"}},e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=Object(i.a)(m.a.mark((function e(){var t,n,c,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://johnnylaicode.github.io/api/credits.json");case 2:return e.next=4,e.sent.json();case 4:return t=e.sent,e.next=7,fetch("https://johnnylaicode.github.io/api/debits.json");case 7:return e.next=9,e.sent.json();case 9:n=e.sent,this.setState({creditList:t,debitList:n}),c=0,a=0,t.forEach((function(e){c+=e.amount})),n.forEach((function(e){a+=e.amount})),this.setState({accountBalance:c-a});case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(x.jsx)(O.a,{basename:"/assignment-4-bank-of-react",children:Object(x.jsxs)("div",{children:[Object(x.jsx)(p.b,{exact:!0,path:"/",render:function(){return Object(x.jsx)(g,{accountBalance:e.state.accountBalance})}}),Object(x.jsx)(p.b,{exact:!0,path:"/userProfile",render:function(){return Object(x.jsx)(C,{userName:e.state.currentUser.userName,memberSince:e.state.currentUser.memberSince})}}),Object(x.jsx)(p.b,{exact:!0,path:"/login",render:function(){return Object(x.jsx)(y,{user:e.state.currentUser,mockLogIn:e.mockLogIn})}}),Object(x.jsx)(p.b,{exact:!0,path:"/credits",render:function(){return Object(x.jsx)(L,{credits:e.state.creditList,addCredit:e.addCredit,accountBalance:e.state.accountBalance})}}),Object(x.jsx)(p.b,{exact:!0,path:"/debits",render:function(){return Object(x.jsx)(D,{debits:e.state.debitList,addDebit:e.addDebit,accountBalance:e.state.accountBalance})}})]})})}}]),n}(c.Component),I=U,M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(I,{})}),document.getElementById("root")),M()}},[[43,1,2]]]);
//# sourceMappingURL=main.1bb8dbc8.chunk.js.map
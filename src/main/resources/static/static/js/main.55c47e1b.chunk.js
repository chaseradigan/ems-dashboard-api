(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){e.exports=a(70)},38:function(e,t,a){},39:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(29),s=a.n(l),c=(a(38),a(7)),o=a(8),i=a(10),m=a(9),u=a(11),d=a(12),h=a(13),v=(a(39),a(17)),p=a.n(v),b=a(30),f=a(6),E=a(18),_=a.n(E);var g=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={filePath:e.filePath,currentList:[],oldList:[],value:"",oldvalue:"",consumers:!1,errorsCur:null,errorsOld:null},a.handleChange=a.handleChange.bind(Object(f.a)(Object(f.a)(a))),a.handleOldChange=a.handleOldChange.bind(Object(f.a)(Object(f.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(f.a)(Object(f.a)(a))),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleOldChange",value:function(e){this.setState({oldvalue:e.target.value})}},{key:"handleSubmit",value:function(e){this.setState({consumers:!0}),e.preventDefault()}},{key:"componentDidMount",value:function(){var e=Object(b.a)(p.a.mark(function e(){var t,a,r,n,l,s;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,a=this.props.match.params.queue,r="".concat(t)+"/"+"".concat(a)+"/logs/final.txt",e.next=5,_.a.get("http://localhost:3000/api/test",{headers:{path:r}});case 5:return n=e.sent,l="".concat(t)+"/"+"".concat(a)+"/logs/past.txt",e.next=9,_.a.get("http://localhost:3000/api/test",{headers:{path:l}});case 9:s=e.sent,this.setState({currentList:n.data,oldList:s.data,errorsCur:n.data.errors,errorsOld:s.data.errors});case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=this;if(this.state.value===this.state.oldvalue&&this.state.value.length>0){var a,r,l=!0,s=!1,c=void 0;try{for(var o,i=this.state.currentList[Symbol.iterator]();!(l=(o=i.next()).done);l=!0){var m=o.value;m.server===this.state.value&&(r=m.consumers)}}catch(f){s=!0,c=f}finally{try{l||null==i.return||i.return()}finally{if(s)throw c}}var u=!0,d=!1,h=void 0;try{for(var v,p=this.state.oldList[Symbol.iterator]();!(u=(v=p.next()).done);u=!0){var b=v.value;b.server===this.state.oldvalue&&(a=b.consumers)}}catch(f){d=!0,h=f}finally{try{u||null==p.return||p.return()}finally{if(d)throw h}}e=function(e,t){if(e&&t){var a=[];for(var r in e=e.toString().split(",").map(String),t=t.toString().split(",").map(String),e)t.includes(e[r])||a.push(e[r]);for(r in t)e.includes(t[r])||a.push(t[r]);return a.sort(function(e,t){return e-t})}}(a,r)}return this.state.errorsCur&&this.state.errorsOld?n.a.createElement("div",{className:"alert alert-danger"},n.a.createElement("div",{className:"row"},this.state.errorsCur),n.a.createElement("div",{className:"row"},this.state.errorsOld)):n.a.createElement("div",{className:" container  text-dark"},n.a.createElement("div",{className:"row align-top"},n.a.createElement("div",{className:"col-6 mb-5 mt-5"},null==this.state.errorsOld?n.a.createElement("form",{className:"form-control-sm  mb-5 ",onSubmit:this.handleSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"form-label"},"Old Queues"),n.a.createElement("select",{value:this.state.oldvalue,onChange:this.handleOldChange},n.a.createElement("option",null,"Choose a Queue..."),this.state.oldList.map(function(e){return n.a.createElement("option",{key:e.server,value:e.server},e.server)}))),n.a.createElement("input",{className:"btn btn-primary",type:"submit",value:"Submit"})):n.a.createElement("div",{className:"alert alert-danger mx-auto"},this.state.errorsOld)),n.a.createElement("div",{className:"col-6 mb-5 mt-5"},null==this.state.errorsCur?n.a.createElement("form",{className:"form-control-sm  mb-5",onSubmit:this.handleSubmit},n.a.createElement("div",{className:" form-group "},n.a.createElement("div",{className:"form-label"},"Current Queues"),n.a.createElement("select",{value:this.value,onChange:this.handleChange},n.a.createElement("option",null,"Choose a Queue..."),this.state.currentList.map(function(e){return n.a.createElement("option",{key:e.server,value:e.server},e.server)}))),n.a.createElement("input",{className:"btn btn-primary",type:"submit",value:"Submit"})):n.a.createElement("div",{className:"alert alert-danger mx-auto"},this.state.errorsCur))),n.a.createElement("div",{className:"row mb-5 text-dark"},null!=e?n.a.createElement("div",{className:"card mx-auto"},n.a.createElement("div",{className:"sm-shadow card-header font-weight-bold display-5 bg-warning"},"Consumer Change for ",n.a.createElement("u",null," ",this.state.value)),e.map(function(e){return n.a.createElement("div",{className:"mx-2"},"- ",e)})):""),n.a.createElement("div",{className:"row  "},n.a.createElement("div",{className:"col-6 mb-5"},this.state.consumers?n.a.createElement("div",null,this.state.oldList.map(function(e){return n.a.createElement("div",null,e.server===t.state.oldvalue?n.a.createElement("div",{className:"row border border-dark bg-white"},n.a.createElement("h3",{className:"col-10 font-weight-bold text-left"},"Old Consumers"),n.a.createElement("div",{className:"col-sm-2 font-weight-light display-5 text-left"},e.consumers.length),e.consumers.map(function(e){return n.a.createElement("div",{className:"small border-top border-dark mb-0"},e)})):"")})):""),n.a.createElement("div",{className:"col-6 mb-5"},this.state.consumers?n.a.createElement("div",null,this.state.currentList.map(function(e){return n.a.createElement("div",null,e.server===t.state.value?n.a.createElement("div",{className:"row border border-dark bg-white"},n.a.createElement("h3",{className:"col-10 font-weight-bold text-left"},"Current Consumers"),n.a.createElement("div",{className:"col-sm-2 font-weight-light display-5 text-left"},e.consumers.length),e.consumers.map(function(e){return n.a.createElement("div",{className:"small border-top border-dark mb-0"},e)})):"")})):"")))}}]),t}(r.Component),N=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleClick2",value:function(){}},{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement(d.b,{to:"/".concat("EMS_U1")},n.a.createElement("button",{className:"btn btn-light",onClick:this.handleClick1},"EMS_U1")),n.a.createElement(d.b,{to:"/".concat("EMS_U2")},n.a.createElement("button",{className:"btn btn-light",onClick:this.handleClick2},"EMS_U2")))}}]),t}(r.Component),O=function(e){var t=e.servers,a=e.id;return n.a.createElement("div",null,t.map(function(e){return n.a.createElement("div",{className:"row",key:e},n.a.createElement(d.b,{to:"/".concat(a,"/").concat(e)},n.a.createElement("button",{className:"btn btn-light"},e)))}))},y=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.match.params;return n.a.createElement("div",{className:"container text-dark "},"EMS_U1"===e.id?n.a.createElement(O,{servers:["APP_U1_p1d0_7022","APP_U1_p1d1_7122","APP_U1_p2d0_7022","APP_U1_p2d1_7122","APP_U1_p5d0_7022","APP_U1_p5d1_7122","APP_U1_p6d0_7022","APP_U1_p6d1_7122"],id:e.id}):n.a.createElement(O,{servers:["APP_U2_p1d0_7022","APP_U2_p1d1_7122","APP_U2_p2d0_7022","APP_U2_p2d1_7122","APP_U2_p5d0_7022","APP_U2_p5d1_7122","APP_U2_p6d0_7022","APP_U2_p6d1_7122"],id:e.id}))}}]),t}(r.Component),P=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement(d.a,null,n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header bg-light"},n.a.createElement("div",{className:"container"}),n.a.createElement(h.a,{exact:!0,path:"/",component:N}),n.a.createElement(h.a,{exact:!0,path:"/:id",component:y}),n.a.createElement(h.a,{exact:!0,path:"/:id/:queue",component:g}))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(69);s.a.render(n.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.55c47e1b.chunk.js.map
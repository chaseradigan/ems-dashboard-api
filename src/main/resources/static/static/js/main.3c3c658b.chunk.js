(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){e.exports=a(70)},38:function(e,t,a){},39:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(30),c=a.n(r),i=(a(38),a(8)),l=a(9),o=a(11),u=a(10),m=a(12),h=a(13),d=a(14),p=(a(39),a(7)),v=a.n(p),f=a(16),b=a(4),g=a(17),E=a.n(g),_=function(e){function t(e){var a;Object(i.a)(this,t);var n=(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).props.match.params.id,s=a.props.match.params.queue;return a.state={filePath:"".concat(n,"/").concat(s,"/logs/"),currentList:[],oldList:[],currentQList:[],oldQList:[],compareList:[],value:"",oldvalue:"",consumers:!1,errorsCur:null,errorsOld:null},a.handleChange=a.handleChange.bind(Object(b.a)(Object(b.a)(a))),a.handleOldChange=a.handleOldChange.bind(Object(b.a)(Object(b.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(b.a)(Object(b.a)(a))),a.fetchList=a.fetchList.bind(Object(b.a)(Object(b.a)(a))),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(){var e=Object(f.a)(v.a.mark(function e(t){var a,n,s;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.value,this.setState({value:a}),n="".concat(this.state.filePath,"final.txt"),e.next=5,E.a.get("/getqueue",{headers:{path:n,queue:a}});case 5:s=e.sent,this.setState({currentList:s.data.consumers,errorsCur:s.data.errors});case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"handleOldChange",value:function(){var e=Object(f.a)(v.a.mark(function e(t){var a,n,s;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.value,this.setState({oldvalue:a}),n="".concat(this.state.filePath,"past.txt"),e.next=5,E.a.get("/getqueue",{headers:{path:n,queue:a}});case 5:s=e.sent,this.setState({oldList:s.data.consumers,errorsOld:s.data.errors});case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"handleSubmit",value:function(e){this.setState({consumers:!0}),e.preventDefault()}},{key:"fetchList",value:function(){var e=Object(f.a)(v.a.mark(function e(t){var a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("/queuelist",{headers:{path:t}});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"compare",value:function(){var e=Object(f.a)(v.a.mark(function e(t){var a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("/compare",{headers:{path:this.state.filePath,queue:t}});case 2:a=e.sent,this.setState({compareList:a.data.changes});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=this,t="".concat(this.state.filePath,"final.txt");this.fetchList(t).then(function(t){e.setState({currentQList:t.data.queues,errorsCur:t.data.errors})}).catch(function(t){e.setState({errorsCur:t.response.data}),console.log(t.response)});var a="".concat(this.state.filePath,"past.txt");this.fetchList(a).then(function(t){e.setState({oldQList:t.data.queues,errorsOld:t.data.errors})}).catch(function(t){e.setState({errorsOld:t.response.data}),console.log(t.response)})}},{key:"render",value:function(){return this.state.errorsCur||this.state.errorsOld?s.a.createElement("div",{className:"alert alert-danger"},s.a.createElement("div",{className:"row"},this.state.errorsCur),s.a.createElement("div",{className:"row"},this.state.errorsOld)):(this.state.value===this.state.oldvalue&&0===this.state.compareList.length&&this.state.value?this.compare(this.state.value):this.state.value!==this.state.oldvalue&&0!==this.state.compareList.length&&this.setState({compareList:[]}),s.a.createElement("div",{className:" container  text-dark"},s.a.createElement("div",{className:"row align-top"},s.a.createElement("div",{className:"col-6 mb-5 mt-5"},s.a.createElement("form",{className:"form-control-sm  mb-5 ",onSubmit:this.handleSubmit},s.a.createElement("div",{className:"form-group"},s.a.createElement("div",{className:"form-label"},"Old Queues"),s.a.createElement("select",{value:this.state.oldvalue,onChange:this.handleOldChange},s.a.createElement("option",null,"Choose a Queue..."),this.state.oldQList.map(function(e){return s.a.createElement("option",{key:e,value:e},e)}))),s.a.createElement("input",{className:"btn btn-primary",type:"submit",value:"Submit"}))),s.a.createElement("div",{className:"col-6 mb-5 mt-5"},s.a.createElement("form",{className:"form-control-sm  mb-5",onSubmit:this.handleSubmit},s.a.createElement("div",{className:" form-group "},s.a.createElement("div",{className:"form-label"},"Current Queues"),s.a.createElement("select",{value:this.value,onChange:this.handleChange},s.a.createElement("option",null,"Choose a Queue..."),this.state.currentQList.map(function(e){return s.a.createElement("option",{key:e,value:e},e)}))),s.a.createElement("input",{className:"btn btn-primary",type:"submit",value:"Submit"})))),this.state.compareList.length>0&&this.state.consumers&&s.a.createElement("div",null,s.a.createElement("ul",{className:"list-group"},s.a.createElement("li",{className:"list-group-item active"},"Changes in ",this.state.value,": ",this.state.compareList.length),this.state.compareList.map(function(e){return"+"===e.substring(0,1)?s.a.createElement("li",{className:"list-group-item small list-group-item-success display-4 font-weight-light "},e):s.a.createElement("li",{className:"list-group-item list-group-item-danger small display-4 font-weight-light "},e)}))),s.a.createElement("div",{className:"row  "},s.a.createElement("div",{className:"col-6 mb-5"},this.state.consumers&&this.state.oldList.length>0&&s.a.createElement("div",null,s.a.createElement("ul",{className:"list-group"},s.a.createElement("li",{className:"list-group-item active"},"Old Consumers:\xa0",this.state.oldList.length),this.state.oldList.map(function(e){return s.a.createElement("li",{className:"list-group-item small display-4 font-weight-light "},e)})))),s.a.createElement("div",{className:"col-6 mb-5"},this.state.consumers&&this.state.currentList.length>0&&s.a.createElement("div",null,s.a.createElement("ul",{className:"list-group"},s.a.createElement("li",{className:"list-group-item active"},"Current Consumers:\xa0",this.state.currentList.length),this.state.currentList.map(function(e){return s.a.createElement("li",{className:"list-group-item small display-4 font-weight-light "},e)})))))))}}]),t}(n.Component),O=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleClick2",value:function(){}},{key:"render",value:function(){return s.a.createElement("div",{className:"container"},s.a.createElement(h.b,{to:"/".concat("EMS_U1")},s.a.createElement("button",{className:"btn btn-light",onClick:this.handleClick1},"EMS_U1")),s.a.createElement(h.b,{to:"/".concat("EMS_U2")},s.a.createElement("button",{className:"btn btn-light",onClick:this.handleClick2},"EMS_U2")))}}]),t}(n.Component),P=function(e){var t=e.servers,a=e.id;return s.a.createElement("div",null,t.map(function(e){return s.a.createElement("div",{className:"row",key:e},s.a.createElement(h.b,{to:"/".concat(a,"/").concat(e)},s.a.createElement("button",{className:"btn btn-light"},e)))}))},N=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.match.params;return s.a.createElement("div",{className:"container text-dark "},"EMS_U1"===e.id?s.a.createElement(P,{servers:["APP_U1_p1d0_7022","APP_U1_p1d1_7122","APP_U1_p2d0_7022","APP_U1_p2d1_7122","APP_U1_p5d0_7022","APP_U1_p5d1_7122","APP_U1_p6d0_7022","APP_U1_p6d1_7122"],id:e.id}):s.a.createElement(P,{servers:["APP_U2_p1d0_7022","APP_U2_p1d1_7122","APP_U2_p2d0_7022","APP_U2_p2d1_7122","APP_U2_p5d0_7022","APP_U2_p5d1_7122","APP_U2_p6d0_7022","APP_U2_p6d1_7122"],id:e.id}))}}]),t}(n.Component),j=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(h.a,null,s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header bg-light"},s.a.createElement("div",{className:"container"}),s.a.createElement(d.a,{exact:!0,path:"/",component:O}),s.a.createElement(d.a,{exact:!0,path:"/:id",component:N}),s.a.createElement(d.a,{exact:!0,path:"/:id/:queue",component:_}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(69);c.a.render(s.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.3c3c658b.chunk.js.map
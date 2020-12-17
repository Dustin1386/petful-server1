(this["webpackJsonppetful-client"]=this["webpackJsonppetful-client"]||[]).push([[0],{22:function(e,t,n){e.exports=n(37)},27:function(e,t,n){},28:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(19),c=n.n(r),l=n(5),s=n(3),i=n(9),u=n(6),m=n(4),p=n(7),d=o.a.createContext({catsList:[],dogsList:[],adopters:[],petType:"",setDogList:function(){},setAdopters:function(){},dequeue:function(){},setPetType:function(){}}),h=d,f=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).setAdopters=function(e){n.setState({adopters:e})},n.setCatList=function(e){n.setState({catsList:e})},n.setDogList=function(e){n.setState({dogsList:e})},n.setPetType=function(e){n.setState({petType:e})},n.state={catsList:[],dogsList:[],adopters:[],petType:"cats"},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e={catsList:this.state.catsList,dogsList:this.state.dogsList,adopters:this.state.adopters,petType:this.state.petType,setDogList:this.setDogList,setCatList:this.setCatList,setAdopters:this.setAdopters,setPetType:this.setPetType};return o.a.createElement(d.Provider,{value:e},this.props.children)}}]),t}(a.Component),E=(n(27),n(11));n(28);function g(){return o.a.createElement("div",{className:"HomeMain__div"},o.a.createElement("h2",null,"Your Local Adoption Shelter"),o.a.createElement("p",null,"These pets have lost their way, we would like you to have one, but you don't get to pick."),o.a.createElement("h3",null,"The Adoption Process"),o.a.createElement("p",null,"We operate on a First in First out basis."," "),o.a.createElement("div",{className:"LinkContainer"},o.a.createElement(l.b,{to:"/signup"},o.a.createElement("div",{className:"HomeMain__div photoLink cat"},o.a.createElement("h3",null,"Adopt a Cat")))," ",o.a.createElement(l.b,{to:"/signup"},o.a.createElement("div",{className:"HomeMain__div photoLink dog"},o.a.createElement("h3",null,"Adopt a Dog")))))}var v={API_ENDPOINT:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_ENDPOINT};console.log("config",v.API_ENDPOINT);var b={getPetList:function(e){return fetch("".concat(v.API_ENDPOINT,"/").concat(e)).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).catch((function(e){return console.log("Error",e)}))},getAdopters:function(){return fetch("".concat(v.API_ENDPOINT,"/adopters")).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},postAdopterName:function(e){return fetch("".concat(v.API_ENDPOINT,"/adopters/post"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:e})}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).catch((function(e){console.error({error:e})}))},deletePet:function(e){return fetch("".concat(v.API_ENDPOINT,"/").concat(e),{method:"DELETE",headers:{"Content-type":"application/json"}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).catch((function(e){return console.log("Error",e)}))},deleteAdopter:function(){return fetch("".concat(v.API_ENDPOINT,"/adopters"),{method:"DELETE",headers:{"Content-type":"application/json"}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).catch((function(e){return console.log("Error",e)}))}},y=(n(34),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault();var t=e.target.adopterName;b.getAdopters().then((function(e){console.log("res",e),n.context.setAdopters(e)})).catch((function(e){return console.log("Error",e)})),b.postAdopterName(t.value).then((function(e){n.context.setAdopters(e)})),n.props.history.push("/adopt/pets")},n.render=function(){return o.a.createElement("div",{className:"SignupMain__div"},o.a.createElement("h2",null,"FIFO Adoption"),o.a.createElement("p",null,'"first in first out".'),o.a.createElement("p",null,"If you'd like to join the list, please enter your name below. Depending on your choice of dog or cat, you'll be redirected to view the adoptees in line. Please note that you cannot view the animals without signing up on the list."),o.a.createElement("form",{onSubmit:function(e){return n.handleSubmit(e)}},o.a.createElement("h3",null,"Join the Queue"),o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"adopterName"},"Your Full Name:")," ",o.a.createElement("input",{type:"text",id:"adopterName",name:"adopterName",required:!0})),o.a.createElement("div",{className:"SignupMain__div buttonContainer"},o.a.createElement("button",{className:"SignupMain__button",type:"submit",onClick:function(){return n.context.setPetType("cats")}},"Adopt a Cat")," ",o.a.createElement("button",{className:"SignupMain__button",type:"submit",onClick:function(){return n.context.setPetType("dogs")}},"Adopt a Dog"))))},n}return Object(p.a)(t,e),t}(a.Component));function N(){return o.a.createElement("div",{className:"DefaultMain__div"},o.a.createElement("header",{className:"DefaultMain-header"},o.a.createElement("h1",null,"Dustys Lil Shop of Pets")),o.a.createElement(o.a.Fragment,null,o.a.createElement(E.a,{exact:!0,path:"/",component:g}),o.a.createElement(E.a,{exact:!0,path:"/signup",component:y})))}y.contextType=h;n(35);var A=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).formatList=function(){return o.a.createElement(o.a.Fragment,null,n.context.adopters.map((function(e,t){return o.a.createElement("li",{key:t},e.name)})))},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.context.adopters&&console.log(this.context.adopters),o.a.createElement(o.a.Fragment,null,o.a.createElement("h3",null,"Current Line"),o.a.createElement("ol",null,this.formatList()))}}]),t}(a.Component);A.contextType=h;var _=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={index:0},n.changeIndex=function(e){if(!(n.state.index<=1)||e){var t=n.context.dogsList.length;console.log(t),1===e&&t-1===n.state.index&&(e=-n.state.index),n.setState({index:n.state.index+e})}},n.handleAdopt=function(e){b.deletePet(e).then((function(t){return"dogs"===e?n.context.setDogList(t):n.context.setCatList(t)})),b.deleteAdopter().then((function(e){n.context.setAdopters(e)}))},n.componentDidMount=function(){var e=n.context.petType;b.getPetList(e).then((function(t){return"dogs"===e?n.context.setDogList(t):n.context.setCatList(t)})),n.interval=setInterval((function(){n.handleAdopt(e)}),3e3)},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e,t,n=this,a=this.context.petType||"",r=this.state.index,c=("dogs"===a?this.context.dogsList:this.context.catsList||[])[r]||{};return 1===(this.context.adopters.length||0)&&clearInterval(this.interval),0===r?(e="Available",t="green"):(e="Not currently available (not first in line for adoption)",t="orange"),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"AdoptMain__div"},o.a.createElement("h1",null,"FIDO & FIFO ADOPTION"),o.a.createElement("div",{className:"AdoptMain__div body"},o.a.createElement("div",{className:"AdoptMain__div petInfo"},o.a.createElement("h2",{className:"AdoptMain__header"},a," for Adoption"),o.a.createElement("div",{className:"photoButtonsContainer"},this.state.index<1?o.a.createElement("button",{className:"AdoptMain__button disabled"},o.a.createElement("i",{className:"fas fa-chevron-left"})):o.a.createElement("button",{className:"AdoptMain__button",onClick:function(){return n.changeIndex(-1)}},o.a.createElement("i",{className:"fas fa-chevron-left"}))," ",o.a.createElement("img",{src:c.imageURL,alt:c.imageDescription,className:"AdoptMain__img"}),o.a.createElement("button",{className:"AdoptMain__button",onClick:function(){return n.changeIndex(1)}},o.a.createElement("i",{className:"fas fa-chevron-right"}))),o.a.createElement("h3",null,1===this.context.adopters.length?"Congratulations on your new pet, ".concat(c.name,"!"):c.name),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("span",{className:"bold"},"Adoption Status:"," ",o.a.createElement("span",{className:t},e))),o.a.createElement("li",null,o.a.createElement("span",{className:"bold"},"Sex:")," ",c.sex),o.a.createElement("li",null,o.a.createElement("span",{className:"bold"},"Age:")," ",c.age),o.a.createElement("li",null,o.a.createElement("span",{className:"bold"},"Breed:")," ",c.breed),o.a.createElement("li",null,o.a.createElement("span",{className:"bold"},"Story:")," ",c.story))),o.a.createElement("div",{className:"AdoptMain__div lineInfo"},o.a.createElement(A,null)))))}}]),t}(a.Component);function O(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.b,{to:"/signup"},"Adopt Now"))}_.contextType=h;var j=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={error:null},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.state.error?o.a.createElement("main",{className:"error-page"},o.a.createElement("h1",null,"Something seems to have gone wrong"),o.a.createElement("p",null,"Try refreshing the page"),o.a.createElement("p",null,this.state.error)):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{error:e}}}]),t}(a.Component);function x(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",null,o.a.createElement("h1",null,"Dustys Lil Shop of Pets")),o.a.createElement("h2",null,"Are you lost?"),o.a.createElement("p",null,"Looks like your url doesn't match any of our pages. Try going back, or click ",o.a.createElement(l.b,{to:"/"},"here")," to go home."))}n(36);var P=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).renderNavRoutes=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(E.a,{exact:!0,path:"/",component:O}),o.a.createElement(E.a,{exact:!0,path:"/signup",component:O}))},n.renderMainRoutes=function(){return o.a.createElement(E.c,null,o.a.createElement(E.a,{exact:!0,path:"/",component:N}),o.a.createElement(E.a,{exact:!0,path:"/signup",component:N}),o.a.createElement(E.a,{path:"/adopt/pets",component:_}),o.a.createElement(E.a,{component:x}))},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("nav",null,o.a.createElement(l.b,{to:"/"},o.a.createElement("i",{className:"fas fa-paw"})," Dustys Lil Shop of Pets")," ",this.renderNavRoutes()),o.a.createElement(j,null,o.a.createElement("main",{className:"App__main"},this.renderMainRoutes())),o.a.createElement("footer",null,o.a.createElement("p",{className:"footer__p"},"Little Dustin"))," ")}}]),t}(a.Component);c.a.render(o.a.createElement(f,null,o.a.createElement(l.a,null,o.a.createElement(P,null))),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.cab81ee7.chunk.js.map
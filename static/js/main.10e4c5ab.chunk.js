(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(57),i=t.n(l),c=(t(69),t(70),t(32)),o=t(15),d={background:"rebeccapurple",marginBottom:"1em",padding:"1em .5em"},s={margin:0,color:"white",textDecoration:"none",textAlign:"left"},u=function(e){var n=e.siteTitle;return r.a.createElement("div",{style:d},r.a.createElement("h1",{style:s},n))},f={title:"RSS Dashboard"},g=(t(78),function(e){var n=e.children;return r.a.createElement("div",null,r.a.createElement(u,{siteTitle:f.title}),r.a.createElement("div",{style:{padding:"5em"}},n))}),m=t(59),E=t.n(m),p=t(16),v=t(63),F=function(e){var n=e.key,t=e.value;localStorage.setItem(n,JSON.stringify(t))},h=function(e){var n=localStorage.getItem(e);return JSON.parse(n)},b=new E.a,S=function(e){var n=e;return n="".concat("https://cors-anywhere.herokuapp.com/").concat(e),new Promise(function(e,t){return b.parseURL(n,function(n,a){if(n){var r=n.message||"Unexpected error occurred";return t(r)}return e(a)})})},y=function(e){return{type:"SELECT_RSS_FEED_TAG",tagId:e}},D=function(e){return{type:"TOGGLE_IS_LOADING_FEED",isLoading:e}},R=function(e){return{type:"UPDATE_RSS_FEEDS",feedTags:e}},O=function(e){return{type:"SELECT_RSS_FEED",rssFeed:e}},T=function(e){return{type:"ADD_ERROR_MESSAGE",errorMessage:e}},_=function(e){var n=function(e){var n=h("rssFeeds")||[];if(n.length>0){var t=n.filter(function(n){return n.id!==e});return F({key:"rssFeeds",value:t}),t}return n}(e);return R(n)},w=function(e,n){var t=function(e){var n=e.tagId,t=e.newName,a=h("rssFeeds")||[],r=a.findIndex(function(e){return e.id===n});if(r>-1){var l=Object(v.a)(a),i=Object(p.a)({},l[r],{name:t});return l.splice(r,1,i),F({key:"rssFeeds",value:l}),l}return a}({tagId:e,newName:n});return R(t)},k=function(e){return function(n){n(D(!0)),S(e).then(function(t){n(D(!1)),n(O(t));var a=function(e,n){return{id:(new Date).getTime(),url:n,name:e||n}}(t.title,e),r=function(e){var n=e.id,t=e.name,a=e.url,r=h("rssFeeds")||[];return r.push({id:n,name:t,url:a}),F({key:"rssFeeds",value:r}),r}(a);return n(R(r)),n(y(a.id))}).catch(function(e){n(D(!1)),n(T(e))})}},L=t(1),j=t.n(L),x=(j.a.string,j.a.bool,j.a.string,j.a.number,j.a.func,j.a.func,j.a.func,t(60)),I={margin:"0 .5em 0 0",display:"inline-block",fontWeight:"normal"},M=function(e){var n=e.author;return r.a.createElement("h4",{style:I},n)},A={margin:0,display:"inline-block",fontSize:12},G=function(e){var n=e.pubDate;return r.a.createElement("p",{style:A},"".concat(new Date(n).toLocaleDateString()))},N=(j.a.string,j.a.string,j.a.string.isRequired,j.a.string,j.a.shape({name:j.a.string}),{fontSize:18,fontWeight:"bold",textDecoration:"none",color:"#000000a6"}),C={border:"1px solid #ebedf0",borderRight:0,borderLeft:0,borderTop:0,padding:"15px",color:"#000000a6"},U={margin:"1em 0",fontSize:12},P={margin:0},z=function(e){var n=e.link,t=e.title,a=e.pubDate,l=e.author,i=e.content;return r.a.createElement("div",{style:C},r.a.createElement("a",{style:N,href:n},t),r.a.createElement("div",{style:P},l&&r.a.createElement(M,{author:l}),a&&r.a.createElement(G,{pubDate:a})),r.a.createElement("div",{style:U,dangerouslySetInnerHTML:{__html:i}}))};z.defaultProps={link:"",content:"",author:null,pubDate:null};var W=z,J={border:"1px solid #ebedf0",borderTop:0,borderRight:0,borderLeft:0},B=function(e){var n=e.title;return r.a.createElement("div",{style:J},r.a.createElement("h2",null,n))},q={border:"1px solid #ebedf0",borderRadius:2,width:"100%",position:"relative",padding:"20px"},H={},$=function(e){var n=e.items,t=Object(x.a)(e,["items"]);return r.a.createElement("div",{style:q},r.a.createElement(B,t),0===n.length?r.a.createElement("div",{style:H},"No Items found"):n.map(function(e){return r.a.createElement(W,Object.assign({key:e.title},e))}))},K=function(e){var n=e.name,t=e.size,a=e.spin,l=e.className;return r.a.createElement("i",Object.assign({},e,{className:"fa fa-".concat(n," fa-").concat(t," ").concat(a?"fa-spin":""," ").concat(l)}))};K.defaultName="Icon",K.defaultProps={spin:!1,size:"1x",className:""};var Q=K,V={marginRight:".3em"},X={background:"transparent",border:0,color:"white",boxShadow:"0 0 0 0",padding:0},Y={},Z=function(e){var n=e.url,t=e.isSelected,l=e.name,i=e.id,c=e.onFeedDelete,d=e.onFeedClick,s=e.onFeedUpdate,u=Object(a.useState)(!1),f=Object(o.a)(u,2),g=f[0],m=f[1],E=Object(a.useState)(l),v=Object(o.a)(E,2),F=v[0],h=v[1],b={border:"1px solid #6e2a9e",display:"inline-block",padding:"5px",borderRadius:"30px",background:"".concat(t?"#9352ea":"#6e2a9e"),color:"white",fontSize:"14px",cursor:"pointer"};function S(){m(!g)}return r.a.createElement("div",{style:b,alt:n,id:i},g&&r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"text",value:F,onChange:function(e){var n=e.target.value;h(n)},style:V}),r.a.createElement(Q,{name:"check-circle",onClick:function(){F&&F.length>0&&F!==l&&s(i,F),S()}})),!g&&r.a.createElement("div",{onDoubleClick:S},r.a.createElement("span",{type:"button",onClick:function(){d(i)},style:Object(p.a)({},X,V)},l),r.a.createElement("span",{type:"button",onClick:function(){c(i)},style:Object(p.a)({},Y,X)},r.a.createElement(Q,{name:"times-circle"}))))};Z.defaultProps={url:null,isSelected:!1,name:null,id:null,onFeedDelete:null,onFeedClick:null,onFeedUpdate:null};var ee=Z,ne=function(e){var n=e.feedTags,t=e.handleDeleteFeed,a=e.handleSelectFeed,l=e.handleUpdateFeed,i=e.selectedFeed;return r.a.createElement("div",null,n.map(function(e){return r.a.createElement(ee,Object.assign({},e,{isSelected:i&&i.id===e.id,onFeedDelete:t,onFeedClick:a,onFeedUpdate:l}))}))};ne.defaultProps={handleDeleteFeed:null,handleSelectFeed:null,handleUpdateFeed:null,selectedFeed:null};var te=ne,ae=function(e){var n=e.selectedFeed,t=e.handleSelectRssFeedTag,l=e.handleNewRssFeed,i=e.handleGetRssFeed,c=e.rssFeed,d=e.isLoadingFeed,s=e.feedTags,u=e.handleDeleteFeedTag,f=e.handleUpdateFeedTag,m=e.errorMessage,E=Object(a.useState)(""),p=Object(o.a)(E,2),v=p[0],F=p[1];return Object(a.useEffect)(function(){n&&i(n.url)},[n]),r.a.createElement(g,null,r.a.createElement("div",null,r.a.createElement("div",null,s&&r.a.createElement(te,{selectedFeed:n,handleDeleteFeed:u,handleUpdateFeed:f,handleSelectFeed:function(e){e!==n.id&&t(e)},feedTags:s})),r.a.createElement("p",null,"Error message:",m),r.a.createElement("input",{type:"text",value:v,onChange:function(e){var n=e.target.value;F(n)},placeholder:"URL Link"}),r.a.createElement("button",{type:"button",onClick:function(){l(v)}},"Add Feed")),r.a.createElement("div",null,d?r.a.createElement("div",null,"Loading..."):c&&r.a.createElement($,c)))};ae.defaultProps={selectedFeed:null,handleSelectRssFeedTag:null,handleNewRssFeed:null,handleGetRssFeed:null,rssFeed:null,isLoadingFeed:null};var re=Object(c.b)(function(e){var n=e.rssFeed,t=e.feedTags;return{rssFeed:n,errorMessage:e.errorMessage,feedTags:t,selectedFeed:e.selectedFeed,isLoadingFeed:e.isLoadingFeed}},function(e){return{handleNewRssFeed:function(n){e(k(n))},handleSelectRssFeedTag:function(n){e(function(e){return y(e)}(n))},handleErrorMsg:function(n){e(T(n))},handleRemoveErrorMsg:function(){e({type:"DISMISS_ERROR_MESSAGE"})},handleDeleteFeedTag:function(n){e(_(n))},handleUpdateFeedTag:function(n,t){e(w(n,t))},handleGetRssFeed:function(n){var t;e((t=n,function(e){e(D(!0)),S(t).then(function(n){e(D(!1)),e(O(n))}).catch(function(n){return e(D(!1)),e(T(n))})}))}}})(ae),le=t(11),ie=t(61),ce=(t(124),t(62)),oe=h("rssFeeds")||[],de={rssFeed:null,feedTags:oe,selectedFeed:oe[0],errorMessage:"",isLoadingFeed:!1},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SELECT_RSS_FEED_TAG":return function(e,n){var t=n.tagId,a=e.feedTags,r=a.findIndex(function(e){return e.id===t});return Object.assign({},e,{selectedFeed:a[r]})}(e,n);case"SELECT_RSS_FEED":return function(e,n){var t=n.rssFeed;return Object.assign({},e,{rssFeed:t,errorMessage:""})}(e,n);case"ADD_ERROR_MESSAGE":return function(e,n){var t=n.errorMessage,a=e.rssFeed;return Object.assign({},e,{errorMessage:t,rssFeed:t&&0===t.length?null:a})}(e,n);case"DISMISS_ERROR_MESSAGE":return function(e){return Object.assign({},e,{errorMessage:""})}(e);case"UPDATE_RSS_FEEDS":return function(e,n){return Object.assign({},e,{feedTags:n.feedTags})}(e,n);case"TOGGLE_IS_LOADING_FEED":return function(e,n){var t=n.isLoading,a=e.isLoadingFeed;return Object.assign({},e,{isLoadingFeed:void 0===t?!a:t})}(e,n);default:return e}},ue=function(e){var n=[ie.a];var t=le.applyMiddleware.apply(void 0,n),a=Object(ce.composeWithDevTools)(t);return Object(le.createStore)(se,e,a)}();var fe=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(c.a,{store:ue},r.a.createElement(re,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(125);i.a.render(r.a.createElement(fe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},64:function(e,n,t){e.exports=t(126)},69:function(e,n,t){},70:function(e,n,t){},78:function(e,n,t){},85:function(e,n){},87:function(e,n){}},[[64,1,2]]]);
//# sourceMappingURL=main.10e4c5ab.chunk.js.map
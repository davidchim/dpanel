(self.webpackChunk=self.webpackChunk||[]).push([[8615],{55809:function(N,R,e){"use strict";var c=e(87462),n=e(67294),x=e(44805),P=e(84089),O=function(M,L){return n.createElement(P.Z,(0,c.Z)({},M,{ref:L,icon:x.Z}))},W=n.forwardRef(O);R.Z=W},23430:function(N,R,e){"use strict";e.d(R,{Z:function(){return M}});var c=e(87462),n=e(67294),x={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"download",theme:"outlined"},P=x,O=e(84089),W=function(a,o){return n.createElement(O.Z,(0,c.Z)({},a,{ref:o,icon:P}))},T=n.forwardRef(W),M=T},5966:function(N,R,e){"use strict";var c=e(97685),n=e(1413),x=e(45987),P=e(21770),O=e(72723),W=e(55241),T=e(97435),M=e(67294),L=e(35510),a=e(85893),o=["fieldProps","proFieldProps"],s=["fieldProps","proFieldProps"],f="text",i=function(u){var d=u.fieldProps,y=u.proFieldProps,A=(0,x.Z)(u,o);return(0,a.jsx)(L.Z,(0,n.Z)({valueType:f,fieldProps:d,filedConfig:{valueType:f},proFieldProps:y},A))},l=function(u){var d=(0,P.Z)(u.open||!1,{value:u.open,onChange:u.onOpenChange}),y=(0,c.Z)(d,2),A=y[0],p=y[1];return(0,a.jsx)(O.Z.Item,{shouldUpdate:!0,noStyle:!0,children:function(_){var t,E=_.getFieldValue(u.name||[]);return(0,a.jsx)(W.Z,(0,n.Z)((0,n.Z)({getPopupContainer:function(D){return D&&D.parentNode?D.parentNode:D},onOpenChange:function(D){return p(D)},content:(0,a.jsxs)("div",{style:{padding:"4px 0"},children:[(t=u.statusRender)===null||t===void 0?void 0:t.call(u,E),u.strengthText?(0,a.jsx)("div",{style:{marginTop:10},children:(0,a.jsx)("span",{children:u.strengthText})}):null]}),overlayStyle:{width:240},placement:"rightTop"},u.popoverProps),{},{open:A,children:u.children}))}})},j=function(u){var d=u.fieldProps,y=u.proFieldProps,A=(0,x.Z)(u,s),p=(0,M.useState)(!1),r=(0,c.Z)(p,2),_=r[0],t=r[1];return d!=null&&d.statusRender&&A.name?(0,a.jsx)(l,{name:A.name,statusRender:d==null?void 0:d.statusRender,popoverProps:d==null?void 0:d.popoverProps,strengthText:d==null?void 0:d.strengthText,open:_,onOpenChange:t,children:(0,a.jsx)("div",{children:(0,a.jsx)(L.Z,(0,n.Z)({valueType:"password",fieldProps:(0,n.Z)((0,n.Z)({},(0,T.Z)(d,["statusRender","popoverProps","strengthText"])),{},{onBlur:function(v){var D;d==null||(D=d.onBlur)===null||D===void 0||D.call(d,v),t(!1)},onClick:function(v){var D;d==null||(D=d.onClick)===null||D===void 0||D.call(d,v),t(!0)}}),proFieldProps:y,filedConfig:{valueType:f}},A))})}):(0,a.jsx)(L.Z,(0,n.Z)({valueType:"password",fieldProps:d,proFieldProps:y,filedConfig:{valueType:f}},A))},m=i;m.Password=j,m.displayName="ProFormComponent",R.Z=m},1699:function(N,R,e){"use strict";e.d(R,{u:function(){return L}});var c=e(9783),n=e.n(c),x=e(97857),P=e.n(x),O=e(67294),W=e(82346),T=e(42075),M=e(85893),L=function(o){var s=(0,W.useAccess)(),f=Array.isArray(o.access)?o.access:[o.access],i;return typeof o.children=="function"?i=o.children(f.reduce(function(l,j){return P()(P()({},l),{},n()({},j,s[j]))},{})):f.every(function(l){return s[l]})?i=o.children:i=o.fallback,o.space?(0,M.jsx)(T.Z,P()(P()({},o.space),{},{children:i})):i}},80821:function(N,R,e){"use strict";e.d(R,{Z:function(){return L}});var c=e(5574),n=e.n(c),x=e(24963),P=e(86738),O=e(28036),W=e(83062),T=e(67294),M=e(85893);function L(a){var o=(0,T.useState)(!1),s=n()(o,2),f=s[0],i=s[1],l=(0,T.useContext)(x.Z),j=l.lang,m=l.notice,g=l.message,u=function(){i(!0);var y=a.action();y instanceof Promise?y.then(function(A){if(i(!1),A){typeof a.onSuccess=="function"&&a.onSuccess(A);var p="";a.messageSuccess?typeof a.messageSuccess=="function"?p=a.messageSuccess(A):p=a.messageSuccess.indexOf("notification.")==0?j(a.messageSuccess):a.messageSuccess:p=j("notification.finish"),a.asynced?g.info(p):g.success(p)}}).catch(function(A){i(!1),typeof a.onError=="function"&&a.onError(A)}):i(!1)};return a.confirm?(0,M.jsx)(P.Z,{style:{width:500},title:a.confirmTitle?a.confirmTitle:j("notification.title.tip"),description:typeof a.confirm=="string"&&a.confirm.indexOf("notification.")==0?j(a.confirm):a.confirm,onConfirm:u,okText:"Yes",cancelText:"No",onOpenChange:a.confirmOnOpenChange,children:(0,M.jsx)(O.ZP,{block:a.block,disabled:a.disabled,icon:!a.children&&f?void 0:a.icon,loading:f,danger:a.danger,type:a.type,children:a.children})}):(0,M.jsx)(W.Z,{title:a.tips,children:(0,M.jsx)(O.ZP,{block:a.block,style:a.ghost?{padding:0,height:"auto",width:"auto"}:{},disabled:a.disabled,icon:!a.children&&f?void 0:a.icon,loading:f,onClick:u,danger:a.danger,type:a.type,children:a.children})})}},81146:function(N,R,e){"use strict";var c=e(15009),n=e.n(c),x=e(99289),P=e.n(x),O=e(97857),W=e.n(O),T=e(67294),M=e(97269),L=e(62370),a=e(5966),o=e(97462),s=e(82346),f=e(71230),i=e(15746),l=e(34041),j=e(28036),m=e(84567),g=e(42075),u=e(54964),d=e(80821),y=e(23430),A=e(93162),p=e.n(A),r=e(12320),_=e.n(r),t=e(78267),E=e.n(t),v=e(75458),D=e.n(v),h=e(85893),C=new r.Terminal(W()(W()({},u.a),{},{fontSize:12})),U=new t.FitAddon,V=new v.SearchAddon,H=(0,T.forwardRef)(function(I,z){(0,T.useImperativeHandle)(z,function(){return{fit:function(){C.clear(),U.fit()},start:function(){return P()(n()().mark(function Z(){return n()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return w.next=2,X({lineTotal:500});case 2:case"end":return w.stop()}},Z)}))()},close:function(){G.progress.close(I.id)}}});var k=(0,T.useRef)(),G=(0,s.useModel)("subscriber");G.addDataHandler(I.id,function(K){C.write(K.data.replaceAll(`
`,`

`))});var X=function(){var K=P()(n()().mark(function Z(b){return n()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return C.clear(),b.download=!1,F.next=4,I.request(b);case 4:case"end":return F.stop()}},Z)}));return function(b){return K.apply(this,arguments)}}();return(0,T.useEffect)(function(){return window.addEventListener("resize",function(){U.fit()}),C.loadAddon(U),C.open(document.getElementById("terminal-container-log")),U.fit(),function(){C.clear(),C.reset(),G.progress.close(I.id)}},[]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(M.A,{submitter:!1,layout:"horizontal",onValuesChange:function(Z,b){X({id:I.id,lineTotal:parseInt(b.lineTotal),showTime:b.showTime})},formRef:k,children:(0,h.jsxs)(f.Z,{gutter:[10,0],children:[(0,h.jsx)(i.Z,{span:8,children:(0,h.jsx)(L.Z,{name:"lineTotal",initialValue:"500",label:"\u83B7\u53D6\u65E5\u5FD7\u6761\u6570",children:(0,h.jsxs)(l.Z,{defaultValue:"500",children:[(0,h.jsx)(l.Z.Option,{value:"100",children:"100\u6761\u65E5\u5FD7\u6570\u636E"}),(0,h.jsx)(l.Z.Option,{value:"200",children:"200\u6761\u65E5\u5FD7\u6570\u636E"}),(0,h.jsx)(l.Z.Option,{value:"500",children:"500\u6761\u65E5\u5FD7\u6570\u636E"}),(0,h.jsx)(l.Z.Option,{value:"1000",children:"1000\u6761\u65E5\u5FD7\u6570\u636E"}),(0,h.jsx)(l.Z.Option,{value:"-1",children:"\u5168\u90E8\uFF08\u4E0B\u8F7D\u53EF\u89C1\uFF09"})]})})}),(0,h.jsx)(i.Z,{children:(0,h.jsx)(j.ZP,{onClick:function(){C.clear()},children:"\u6E05\u5C4F"})}),(0,h.jsx)(i.Z,{children:(0,h.jsx)(L.Z,{name:"showTime",valuePropName:"checked",children:(0,h.jsx)(m.Z,{children:"\u663E\u793A\u65F6\u95F4"})})}),(0,h.jsx)(i.Z,{children:(0,h.jsx)(a.Z,{label:"\u67E5\u627E",name:"keywork"})}),(0,h.jsx)(i.Z,{children:(0,h.jsx)(o.Z,{name:["keywork"],children:function(Z){var b=Z.keywork;return(0,h.jsxs)(g.Z,{size:10,children:[(0,h.jsx)(j.ZP,{onClick:function(){V.findNext(b)},children:"\u4E0B\u4E00\u4E2A"},"next"),(0,h.jsx)(j.ZP,{onClick:function(){V.findPrevious(b)},children:"\u4E0A\u4E00\u4E2A"},"prev")]})}})}),(0,h.jsx)(i.Z,{children:(0,h.jsx)(d.Z,{icon:(0,h.jsx)(y.Z,{}),action:P()(n()().mark(function K(){var Z,b,w;return n()().wrap(function($){for(;;)switch($.prev=$.next){case 0:if(!I.download){$.next=5;break}return $.next=3,I.download({lineTotal:parseInt((Z=k.current)===null||Z===void 0?void 0:Z.getFieldValue("lineTotal")),showTime:(b=k.current)===null||b===void 0?void 0:b.getFieldValue("showTime")});case 3:w=$.sent,(0,A.saveAs)(w.data,w.name);case 5:case"end":return $.stop()}},K)})),children:"\u4E0B\u8F7D\u65E5\u5FD7"})})]})}),(0,h.jsx)("div",{style:{marginTop:"20px",height:I.showInDrawer?"75vh":"580px"},id:"terminal-container-log"})]})});R.Z=H},54964:function(N,R,e){"use strict";e.d(R,{a:function(){return s}});var c=e(5574),n=e.n(c),x=e(78267),P=e.n(x),O=e(75458),W=e.n(O),T=e(67294),M=e(12320),L=e.n(M),a=e(89629),o=e(85893),s={convertEol:!0,fontFamily:'Menlo, Monaco, "Courier New", monospace',fontWeight:400,fontSize:16,cursorStyle:"block",cursorBlink:!0,theme:{foreground:"#bfbfbf",cursor:"gray",selectionForeground:"#ffffff"}},f=new M.Terminal(s),i=new O.SearchAddon,l=new x.FitAddon,j=(0,T.forwardRef)(function(m,g){var u,d=(0,T.useState)(!0),y=n()(d,2),A=y[0],p=y[1];return(0,T.useEffect)(function(){return window.addEventListener("resize",function(){m.showInModal||l.fit()}),m.style&&m.style.fontSize&&(f.options.fontSize=m.style.fontSize),f.loadAddon(l),f.loadAddon(i),f.open(document.getElementById(m.id?m.id:"terminal-container")),m.showInModal||l.fit(),function(){f.reset(),p(!0)}},[]),(0,T.useImperativeHandle)(g,function(){return{write:function(_){A&&(l.fit(),p(!1)),f.write(_)},clear:function(){f.clear()},getTerminal:function(){return f},findNext:function(_){i.findNext(_)},findPrev:function(_){i.findPrevious(_)},fit:function(){l.fit()},onData:function(_){return f.onData(_)}}}),(0,o.jsx)("div",{id:m.id?m.id:"terminal-container",style:{width:m.width?m.width:"100%",height:m.height?m.height:"500px",marginTop:(u=m.style)===null||u===void 0?void 0:u.marginTop}})});R.Z=j},24963:function(N,R,e){"use strict";var c=e(67294),n=(0,c.createContext)({});R.Z=n},50070:function(N,R,e){"use strict";e.r(R),e.d(R,{AppDetailContext:function(){return g},default:function(){return u}});var c=e(15009),n=e.n(c),x=e(99289),P=e.n(x),O=e(5574),W=e.n(O),T=e(1699),M=e(24963),L=e(60335),a=e(55809),o=e(90078),s=e(82346),f=e(25593),i=e(28036),l=e(50136),j=e(67294),m=e(85893),g=(0,j.createContext)({});function u(){var d,y=(0,j.useContext)(M.Z),A=y.lang,p=y.loading,r=y.message,_=(0,s.useParams)(),t=(0,s.useSearchParams)(),E=W()(t,2),v=E[0],D=E[1],h=(d=v.get("tab"))!==null&&d!==void 0?d:"edit",C=(0,j.useState)("edit"),U=W()(C,2),V=U[0],H=U[1],I=(0,s.useNavigate)(),z=(0,j.useState)(1),k=W()(z,2),G=k[0],X=k[1],K=[{label:(0,m.jsx)(s.Link,{to:"/app/detail/edit/".concat(_.id,"?tab=edit"),children:"\u5BB9\u5668\u8BE6\u60C5"}),key:"edit"},{label:(0,m.jsx)(s.Link,{to:"/app/detail/network/".concat(_.id,"?tab=network"),children:"\u7F51\u7EDC\u7BA1\u7406"}),key:"network"},{label:(0,m.jsx)(f.Z.Link,{children:"\u6587\u4EF6\u7BA1\u7406"}),key:"file",onClick:function(){r.info(A("app.detail.createExplorerPlugin")),I("/app/detail/file/".concat(_.id,"?tab=file"))}},{label:(0,m.jsx)(f.Z.Link,{children:"\u8FD0\u884C\u65E5\u5FD7"}),key:"log",onClick:function(){I("/app/detail/log/".concat(_.id,"?tab=log"))}},{label:(0,m.jsx)(f.Z.Link,{children:"\u8FD0\u884C\u72B6\u6001"}),key:"stat",onClick:function(){I("/app/detail/stat/".concat(_.id,"?tab=stat"))}},{label:"",key:"containerName",icon:(0,m.jsx)(a.Z,{}),disabled:!0}],Z=(0,j.useState)(K),b=W()(Z,2),w=b[0],F=b[1];(0,j.useEffect)(function(){p.show(),H(h);var Y=function(){var q=P()(n()().mark(function ne(){var ee,J,Q;return n()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return ee=K,B.prev=1,B.next=4,(0,L.jV)({md5:(J=_.id)!==null&&J!==void 0?J:""});case 4:Q=B.sent,ee.map(function(S){return S.key=="containerName"&&(S.label=Q.data.info.Name),(!Q.data.info.State.Running||Q.data.info.State.Restarting)&&(S.key=="file"||S.key=="stat")&&(S.disabled=!0),S}),F(ee),B.next=13;break;case 9:return B.prev=9,B.t0=B.catch(1),I("/app/list"),B.abrupt("return");case 13:return B.prev=13,p.destroy(),B.finish(13);case 16:case"end":return B.stop()}},ne,null,[[1,9,13,16]])}));return function(){return q.apply(this,arguments)}}();Y()},[G,_]);var $=function(q){H(q.key)};return(0,m.jsx)(g.Provider,{value:{reload:function(){X(G+1)}},children:(0,m.jsxs)(o._z,{header:{extra:[(0,m.jsx)(T.u,{access:"canSeeContainerListManageCreate",children:(0,m.jsx)(s.Link,{to:"/app/create/image",children:(0,m.jsx)(i.ZP,{type:"primary",children:"\u521B\u5EFA\u5BB9\u5668"})})},"create")]},children:[(0,m.jsx)(l.Z,{mode:"horizontal",onClick:$,selectedKeys:[V],items:w}),(0,m.jsx)(s.Outlet,{})]})})}},88685:function(N,R,e){"use strict";e.r(R),e.d(R,{default:function(){return i}});var c=e(15009),n=e.n(c),x=e(99289),P=e.n(x),O=e(38345),W=e(82346),T=e(81146),M=e(67294),L=e(50070),a=e(62597),o=e(60335),s=e(85893);function f(l){var j=function(g){if(l.check&&l.check(g)){g.preventDefault();return}if(g.target&&g.target.className&&g.target.className.indexOf(l.targetClassName)!==-1){g.preventDefault();return}};return(0,M.useEffect)(function(){return window.addEventListener("wheel",j,{passive:!1}),function(){window.removeEventListener("wheel",j)}},[]),(0,s.jsx)(s.Fragment,{children:l.children})}function i(){var l=(0,W.useParams)(),j=(0,M.useRef)(),m=(0,M.useContext)(L.AppDetailContext);return(0,M.useEffect)(function(){return m.reload(),setTimeout(function(){if(l.id){var g,u;(g=j.current)===null||g===void 0||g.start(),(u=j.current)===null||u===void 0||u.fit()}},1e3),function(){var g;(g=j.current)===null||g===void 0||g.close()}},[]),(0,s.jsx)(O.Z,{direction:"column",gutter:[0,10],children:l.id&&(0,s.jsx)(f,{check:function(u){return!!(u&&u.target&&u.target.parentNode.parentNode.className&&u.target.parentNode.parentNode.className.indexOf("xterm")!==-1)},children:(0,s.jsx)(T.Z,{id:"container:log:".concat(l.id),ref:j,request:function(){var g=P()(n()().mark(function u(d){return n()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,(0,a.Tb)({id:l.id,lineTotal:d.lineTotal,download:d.download,showTime:d.showTime});case 2:case"end":return A.stop()}},u)}));return function(u){return g.apply(this,arguments)}}(),download:function(){var g=P()(n()().mark(function u(d){var y,A,p;return n()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,(0,a.XH)({id:l.id,lineTotal:d.lineTotal,showTime:d.showTime});case 2:return A=_.sent,_.next=5,(0,o.jV)({md5:(y=l.id)!==null&&y!==void 0?y:""});case 5:return p=_.sent,_.abrupt("return",{data:new Blob([A],{type:"text/plain"}),name:p.data.info.Name.replaceAll("/","")+"_"+new Date().toLocaleDateString()+".log"});case 7:case"end":return _.stop()}},u)}));return function(u){return g.apply(this,arguments)}}()})})})}},62597:function(N,R,e){"use strict";e.d(R,{$G:function(){return W},Ct:function(){return m},Tb:function(){return o},XH:function(){return f},cl:function(){return L},fp:function(){return M},iE:function(){return l},xb:function(){return u},ze:function(){return y}});var c=e(15009),n=e.n(c),x=e(99289),P=e.n(x),O=e(82346);function W(p){return T.apply(this,arguments)}function T(){return T=P()(n()().mark(function p(r){return n()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,O.request)("/api/app/site/create-by-image",{method:"POST",data:r}));case 1:case"end":return t.stop()}},p)})),T.apply(this,arguments)}var M={EnvValueRuleRequired:1,EnvValueRuleDisabled:2,EnvValueTypeNumber:1024,EnvValueTypeText:2048,EnvValueTypeSelect:4096};function L(p){return a.apply(this,arguments)}function a(){return a=P()(n()().mark(function p(r){return n()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,O.request)("/api/app/site/get-list",{method:"POST",data:r}));case 1:case"end":return t.stop()}},p)})),a.apply(this,arguments)}function o(p){return s.apply(this,arguments)}function s(){return s=P()(n()().mark(function p(r){return n()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r.download=!1,t.next=3,(0,O.request)("/api/app/log/run",{method:"POST",data:r});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}},p)})),s.apply(this,arguments)}function f(p){return i.apply(this,arguments)}function i(){return i=P()(n()().mark(function p(r){return n()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r.download=!0,t.next=3,(0,O.request)("/api/app/log/run",{method:"POST",data:r,responseType:"blob"});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}},p)})),i.apply(this,arguments)}function l(p){return j.apply(this,arguments)}function j(){return j=P()(n()().mark(function p(r){return n()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r.id=String(r.id),t.next=3,(0,O.request)("/api/app/site/get-detail",{data:r,method:"POST"});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}},p)})),j.apply(this,arguments)}function m(p){return g.apply(this,arguments)}function g(){return g=P()(n()().mark(function p(r){return n()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,O.request)("/api/app/container/delete",{method:"POST",data:r}));case 1:case"end":return t.stop()}},p)})),g.apply(this,arguments)}function u(p){return d.apply(this,arguments)}function d(){return d=P()(n()().mark(function p(r){return n()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,O.request)("/api/app/site/delete",{method:"POST",data:r}));case 1:case"end":return t.stop()}},p)})),d.apply(this,arguments)}function y(p){return A.apply(this,arguments)}function A(){return A=P()(n()().mark(function p(r){return n()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,O.request)("/api/app/container/ignore",{method:"POST",data:r}));case 1:case"end":return t.stop()}},p)})),A.apply(this,arguments)}},60335:function(N,R,e){"use strict";e.d(R,{IE:function(){return M},IW:function(){return W},KK:function(){return i},LJ:function(){return j},RF:function(){return d},Re:function(){return g},aF:function(){return A},eE:function(){return s},jV:function(){return a}});var c=e(15009),n=e.n(c),x=e(99289),P=e.n(x),O=e(82346);function W(r){return T.apply(this,arguments)}function T(){return T=P()(n()().mark(function r(_){return n()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.abrupt("return",(0,O.request)("/api/app/container/status",{method:"POST",data:_}));case 1:case"end":return E.stop()}},r)})),T.apply(this,arguments)}function M(r){return L.apply(this,arguments)}function L(){return L=P()(n()().mark(function r(_){return n()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.abrupt("return",(0,O.request)("/api/app/container/get-list",{data:_,method:"POST"}));case 1:case"end":return E.stop()}},r)})),L.apply(this,arguments)}function a(r){return o.apply(this,arguments)}function o(){return o=P()(n()().mark(function r(_){return n()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.abrupt("return",(0,O.request)("/api/app/container/get-detail",{data:_,method:"POST"}));case 1:case"end":return E.stop()}},r)})),o.apply(this,arguments)}function s(r){return f.apply(this,arguments)}function f(){return f=P()(n()().mark(function r(_){return n()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.abrupt("return",(0,O.request)("/api/app/container/update",{data:_,method:"POST"}));case 1:case"end":return E.stop()}},r)})),f.apply(this,arguments)}function i(){return l.apply(this,arguments)}function l(){return l=P()(n()().mark(function r(){return n()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,O.request)("/api/app/container/prune",{method:"POST"}));case 1:case"end":return t.stop()}},r)})),l.apply(this,arguments)}function j(r){return m.apply(this,arguments)}function m(){return m=P()(n()().mark(function r(_){return n()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.abrupt("return",(0,O.request)("/api/app/container/export",{method:"POST",data:_,responseType:"blob"}));case 1:case"end":return E.stop()}},r)})),m.apply(this,arguments)}function g(r){return u.apply(this,arguments)}function u(){return u=P()(n()().mark(function r(_){return n()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.abrupt("return",(0,O.request)("/api/app/container/commit",{method:"POST",data:_}));case 1:case"end":return E.stop()}},r)})),u.apply(this,arguments)}function d(r){return y.apply(this,arguments)}function y(){return y=P()(n()().mark(function r(_){return n()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.abrupt("return",(0,O.request)("/api/app/container/upgrade",{method:"POST",data:_}));case 1:case"end":return E.stop()}},r)})),y.apply(this,arguments)}function A(r){return p.apply(this,arguments)}function p(){return p=P()(n()().mark(function r(_){return n()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.abrupt("return",(0,O.request)("/api/app/container/copy",{method:"POST",data:_}));case 1:case"end":return E.stop()}},r)})),p.apply(this,arguments)}},86738:function(N,R,e){"use strict";e.d(R,{Z:function(){return E}});var c=e(67294),n=e(21640),x=e(93967),P=e.n(x),O=e(21770),W=e(98423),T=e(53124),M=e(55241),L=e(86743),a=e(81643),o=e(28036),s=e(33671),f=e(10110),i=e(24457),l=e(66330),j=e(83559);const m=v=>{const{componentCls:D,iconCls:h,antCls:C,zIndexPopup:U,colorText:V,colorWarning:H,marginXXS:I,marginXS:z,fontSize:k,fontWeightStrong:G,colorTextHeading:X}=v;return{[D]:{zIndex:U,[`&${C}-popover`]:{fontSize:k},[`${D}-message`]:{marginBottom:z,display:"flex",flexWrap:"nowrap",alignItems:"start",[`> ${D}-message-icon ${h}`]:{color:H,fontSize:k,lineHeight:1,marginInlineEnd:z},[`${D}-title`]:{fontWeight:G,color:X,"&:only-child":{fontWeight:"normal"}},[`${D}-description`]:{marginTop:I,color:V}},[`${D}-buttons`]:{textAlign:"end",whiteSpace:"nowrap",button:{marginInlineStart:z}}}}},g=v=>{const{zIndexPopupBase:D}=v;return{zIndexPopup:D+60}};var u=(0,j.I$)("Popconfirm",v=>m(v),g,{resetStyle:!1}),d=function(v,D){var h={};for(var C in v)Object.prototype.hasOwnProperty.call(v,C)&&D.indexOf(C)<0&&(h[C]=v[C]);if(v!=null&&typeof Object.getOwnPropertySymbols=="function")for(var U=0,C=Object.getOwnPropertySymbols(v);U<C.length;U++)D.indexOf(C[U])<0&&Object.prototype.propertyIsEnumerable.call(v,C[U])&&(h[C[U]]=v[C[U]]);return h};const y=v=>{const{prefixCls:D,okButtonProps:h,cancelButtonProps:C,title:U,description:V,cancelText:H,okText:I,okType:z="primary",icon:k=c.createElement(n.Z,null),showCancel:G=!0,close:X,onConfirm:K,onCancel:Z,onPopupClick:b}=v,{getPrefixCls:w}=c.useContext(T.E_),[F]=(0,f.Z)("Popconfirm",i.Z.Popconfirm),$=(0,a.Z)(U),Y=(0,a.Z)(V);return c.createElement("div",{className:`${D}-inner-content`,onClick:b},c.createElement("div",{className:`${D}-message`},k&&c.createElement("span",{className:`${D}-message-icon`},k),c.createElement("div",{className:`${D}-message-text`},$&&c.createElement("div",{className:`${D}-title`},$),Y&&c.createElement("div",{className:`${D}-description`},Y))),c.createElement("div",{className:`${D}-buttons`},G&&c.createElement(o.ZP,Object.assign({onClick:Z,size:"small"},C),H||(F==null?void 0:F.cancelText)),c.createElement(L.Z,{buttonProps:Object.assign(Object.assign({size:"small"},(0,s.nx)(z)),h),actionFn:K,close:X,prefixCls:w("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},I||(F==null?void 0:F.okText))))};var p=v=>{const{prefixCls:D,placement:h,className:C,style:U}=v,V=d(v,["prefixCls","placement","className","style"]),{getPrefixCls:H}=c.useContext(T.E_),I=H("popconfirm",D),[z]=u(I);return z(c.createElement(l.ZP,{placement:h,className:P()(I,C),style:U,content:c.createElement(y,Object.assign({prefixCls:I},V))}))},r=function(v,D){var h={};for(var C in v)Object.prototype.hasOwnProperty.call(v,C)&&D.indexOf(C)<0&&(h[C]=v[C]);if(v!=null&&typeof Object.getOwnPropertySymbols=="function")for(var U=0,C=Object.getOwnPropertySymbols(v);U<C.length;U++)D.indexOf(C[U])<0&&Object.prototype.propertyIsEnumerable.call(v,C[U])&&(h[C[U]]=v[C[U]]);return h};const t=c.forwardRef((v,D)=>{var h,C;const{prefixCls:U,placement:V="top",trigger:H="click",okType:I="primary",icon:z=c.createElement(n.Z,null),children:k,overlayClassName:G,onOpenChange:X,onVisibleChange:K}=v,Z=r(v,["prefixCls","placement","trigger","okType","icon","children","overlayClassName","onOpenChange","onVisibleChange"]),{getPrefixCls:b}=c.useContext(T.E_),[w,F]=(0,O.Z)(!1,{value:(h=v.open)!==null&&h!==void 0?h:v.visible,defaultValue:(C=v.defaultOpen)!==null&&C!==void 0?C:v.defaultVisible}),$=(B,S)=>{F(B,!0),K==null||K(B),X==null||X(B,S)},Y=B=>{$(!1,B)},q=B=>{var S;return(S=v.onConfirm)===null||S===void 0?void 0:S.call(void 0,B)},ne=B=>{var S;$(!1,B),(S=v.onCancel)===null||S===void 0||S.call(void 0,B)},ee=(B,S)=>{const{disabled:ae=!1}=v;ae||$(B,S)},J=b("popconfirm",U),Q=P()(J,G),[te]=u(J);return te(c.createElement(M.Z,Object.assign({},(0,W.Z)(Z,["title"]),{trigger:H,placement:V,onOpenChange:ee,open:w,ref:D,overlayClassName:Q,content:c.createElement(y,Object.assign({okType:I,icon:z},v,{prefixCls:J,close:Y,onConfirm:q,onCancel:ne})),"data-popover-inject":!0}),k))});t._InternalPanelDoNotUseOrYouWillBeFired=p;var E=t},93162:function(N,R,e){var c,n,x;(function(P,O){n=[],c=O,x=typeof c=="function"?c.apply(R,n):c,x!==void 0&&(N.exports=x)})(this,function(){"use strict";function P(o,s){return typeof s=="undefined"?s={autoBom:!1}:typeof s!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),s={autoBom:!s}),s.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(o.type)?new Blob(["\uFEFF",o],{type:o.type}):o}function O(o,s,f){var i=new XMLHttpRequest;i.open("GET",o),i.responseType="blob",i.onload=function(){a(i.response,s,f)},i.onerror=function(){console.error("could not download file")},i.send()}function W(o){var s=new XMLHttpRequest;s.open("HEAD",o,!1);try{s.send()}catch(f){}return 200<=s.status&&299>=s.status}function T(o){try{o.dispatchEvent(new MouseEvent("click"))}catch(f){var s=document.createEvent("MouseEvents");s.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),o.dispatchEvent(s)}}var M=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof e.g=="object"&&e.g.global===e.g?e.g:void 0,L=M.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),a=M.saveAs||(typeof window!="object"||window!==M?function(){}:"download"in HTMLAnchorElement.prototype&&!L?function(o,s,f){var i=M.URL||M.webkitURL,l=document.createElement("a");s=s||o.name||"download",l.download=s,l.rel="noopener",typeof o=="string"?(l.href=o,l.origin===location.origin?T(l):W(l.href)?O(o,s,f):T(l,l.target="_blank")):(l.href=i.createObjectURL(o),setTimeout(function(){i.revokeObjectURL(l.href)},4e4),setTimeout(function(){T(l)},0))}:"msSaveOrOpenBlob"in navigator?function(o,s,f){if(s=s||o.name||"download",typeof o!="string")navigator.msSaveOrOpenBlob(P(o,f),s);else if(W(o))O(o,s,f);else{var i=document.createElement("a");i.href=o,i.target="_blank",setTimeout(function(){T(i)})}}:function(o,s,f,i){if(i=i||open("","_blank"),i&&(i.document.title=i.document.body.innerText="downloading..."),typeof o=="string")return O(o,s,f);var l=o.type==="application/octet-stream",j=/constructor/i.test(M.HTMLElement)||M.safari,m=/CriOS\/[\d]+/.test(navigator.userAgent);if((m||l&&j||L)&&typeof FileReader!="undefined"){var g=new FileReader;g.onloadend=function(){var y=g.result;y=m?y:y.replace(/^data:[^;]*;/,"data:attachment/file;"),i?i.location.href=y:location=y,i=null},g.readAsDataURL(o)}else{var u=M.URL||M.webkitURL,d=u.createObjectURL(o);i?i.location=d:location.href=d,i=null,setTimeout(function(){u.revokeObjectURL(d)},4e4)}});M.saveAs=a.saveAs=a,N.exports=a})}}]);

"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8272],{78272:function(ie,S,e){e.d(S,{Z:function(){return m}});var K=e(5574),v=e.n(K),F=e(15009),l=e.n(F),y=e(99289),j=e.n(y),o=e(67294),$=e(37767),x=e(60335),A=e(82346),H=e(58638),L=e(85265),N=e(96074),M=e(83062),T=e(86250),V=e(52031),ae=e(14189),te=e(27813),re=e(90234),X=e(184),z=e(25593),J=e(95591),Y=e(5251),a=e(85893),le=(0,o.forwardRef)(function(s,u){var i,_=(0,o.useState)(!1),f=v()(_,2),I=f[0],Z=f[1];return(0,o.useImperativeHandle)(u,function(){return{}}),(0,a.jsx)(X.a,{submitter:!1,title:(0,Y.fi)(s.containerInfo.Name,"/")+" - \u6587\u4EF6\u7BA1\u7406",onOpenChange:function(g){Z(g)},trigger:(0,a.jsx)(z.Z.Link,{children:(0,a.jsx)(J.Z,{})},"file"),children:I&&(0,a.jsx)(re.Z,{md5:s.containerInfo.Id,initPath:(i=s.containerInfo.Config.WorkingDir)!==null&&i!==void 0?i:"/"})})}),b=le,ue=e(43831),q=e(52209),de=(0,o.forwardRef)(function(s,u){(0,o.useImperativeHandle)(u,function(){return{}});var i=(0,o.useState)(!1),_=v()(i,2),f=_[0],I=_[1];return(0,a.jsx)(X.a,{submitter:!1,title:(0,Y.fi)(s.containerInfo.Name,"/")+" - \u7F51\u7EDC\u7BA1\u7406",onOpenChange:function(n){I(n)},open:f,trigger:(0,a.jsx)(z.Z.Link,{children:(0,a.jsx)(q.Z,{})},"file"),children:(0,a.jsx)(ue.Z,{ghost:!0,containerInfo:s.containerInfo})})}),t=de,O=e(81146),W=e(45742),G=e(62597),se=(0,o.forwardRef)(function(s,u){(0,o.useImperativeHandle)(u,function(){return{show:function(E){return j()(l()().mark(function c(){var d;return l()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,x.jV)({md5:E});case 2:d=r.sent,d.data&&ne(d.data.info),I(!0);case 5:case"end":return r.stop()}},c)}))()}}});var i=(0,o.useState)(!1),_=v()(i,2),f=_[0],I=_[1],Z=(0,o.useState)(),n=v()(Z,2),g=n[0],ne=n[1],B=(0,o.useRef)();return(0,a.jsxs)(a.Fragment,{children:[s.showTriggerButton&&(0,a.jsx)(z.Z.Link,{onClick:j()(l()().mark(function C(){return l()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:ne(s.containerInfo),I(!0);case 2:case"end":return c.stop()}},C)})),children:(0,a.jsx)(M.Z,{title:"\u8FD0\u884C\u65E5\u5FD7",children:(0,a.jsx)(W.Z,{})})},"log"),(0,a.jsx)(L.Z,{title:"\u5BB9\u5668\u65E5\u5FD7",open:f,forceRender:!0,onClose:function(){I(!1)},afterOpenChange:function(E){if(E)setTimeout(function(){var d,h;(d=B.current)===null||d===void 0||d.start(),(h=B.current)===null||h===void 0||h.fit()},1e3);else{var c;(c=B.current)===null||c===void 0||c.close()}},width:800,children:g&&f&&(0,a.jsx)(O.Z,{ref:B,showInDrawer:!0,id:"container:log:".concat(g==null?void 0:g.Id),request:function(){var C=j()(l()().mark(function E(c){var d;return l()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,G.Tb)({id:(d=g.Id)!==null&&d!==void 0?d:"",lineTotal:c.lineTotal,download:c.download,showTime:c.showTime});case 2:case"end":return r.stop()}},E)}));return function(E){return C.apply(this,arguments)}}(),download:function(){var C=j()(l()().mark(function E(c){var d,h,r,U;return l()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,(0,G.XH)({id:(d=g.Id)!==null&&d!==void 0?d:"",lineTotal:c.lineTotal,showTime:c.showTime});case 2:return r=p.sent,p.next=5,(0,x.jV)({md5:(h=g.Id)!==null&&h!==void 0?h:""});case 5:return U=p.sent,p.abrupt("return",{data:new Blob([r],{type:"text/plain"}),name:U.data.info.Name.replaceAll("/","")+"_"+new Date().toLocaleDateString()+".log"});case 7:case"end":return p.stop()}},E)}));return function(E){return C.apply(this,arguments)}}()})})]})}),P=se,oe=e(65913),Q=e(14245),R=e(1699),ee=(0,o.forwardRef)(function(s,u){var i;(0,o.useImperativeHandle)(u,function(){return{show:function(h){return j()(l()().mark(function r(){return l()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return E(!0),D.next=3,c(h);case 3:case"end":return D.stop()}},r)}))()}}});var _=(0,A.useAccess)(),f=(0,o.useRef)(),I=(0,o.useState)(),Z=v()(I,2),n=Z[0],g=Z[1],ne=(0,o.useState)(!1),B=v()(ne,2),C=B[0],E=B[1],c=function(){var d=j()(l()().mark(function h(r){var U,D;return l()().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return(U=f.current)===null||U===void 0||U.show(),k.next=3,(0,x.jV)({md5:r}).finally(function(){var w;(w=f.current)===null||w===void 0||w.destroy()});case 3:D=k.sent,D.data&&(D.data.info.HostConfig.NetworkMode=="host"&&D.data.info.Config.ExposedPorts&&Object.keys(D.data.info.Config.ExposedPorts).map(function(w){D.data.info.NetworkSettings.Ports[w]=[{HostIp:"0.0.0.0",HostPort:w.substring(0,w.indexOf("/"))}]}),g(D.data));case 5:case"end":return k.stop()}},h)}));return function(r){return d.apply(this,arguments)}}();return(0,a.jsx)(L.Z,{title:"\u5FEB\u6377\u67E5\u770B\u5BB9\u5668 - ".concat((0,Y.fi)((i=n==null?void 0:n.info.Name)!==null&&i!==void 0?i:"","/")),open:C,onClose:function(){E(!1),s.onFinish&&s.onFinish()},width:800,extra:(0,a.jsxs)(R.u,{access:"canSeeContainerList",space:{split:(0,a.jsx)(N.Z,{type:"vertical"})},children:[(n==null?void 0:n.info)&&n.info.State.Running&&(0,a.jsx)(b,{containerInfo:n.info}),(n==null?void 0:n.info)&&_.canSeeContainerListManageOp&&(0,a.jsx)(t,{containerInfo:n.info}),(n==null?void 0:n.info)&&n.info.State.Running&&(0,a.jsx)(P,{containerInfo:n.info,showTriggerButton:!0}),(0,a.jsx)(R.u,{access:"canSeeContainerListManage",children:(0,a.jsx)(M.Z,{title:"\u67E5\u770B\u5B8C\u6574\u4FE1\u606F",children:(0,a.jsx)(A.Link,{to:"/app/detail/edit/"+(n==null?void 0:n.info.Id),children:(0,a.jsx)(H.Z,{})},"detail")})})]}),children:(0,a.jsx)(oe.Z,{ref:f,children:(0,a.jsxs)(T.Z,{vertical:!0,gap:20,children:[n&&(0,a.jsx)(R.u,{access:"canSeeContainerList",children:(0,a.jsx)(ae.Z,{ghost:!0,data:n==null?void 0:n.info,onFinish:j()(l()().mark(function d(){return l()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c(n.info.Id);case 2:return r.t0=r.sent,r.abrupt("return",[r.t0]);case 4:case"end":return r.stop()}},d)}))})}),n&&(0,a.jsx)(R.u,{access:["canSeeContainerListManage","canSeeContainerListManageOp"],children:(0,a.jsx)(te.Z,{ghost:!0,data:n,checkContainerUpgrade:function(){E(!1),s.onUpgradeFinish&&s.onUpgradeFinish()}})}),n&&(0,a.jsx)($.Z,{data:n,ghost:!0}),(0,a.jsx)(V.Z,{data:n==null?void 0:n.info,ghost:!0}),n&&(0,a.jsx)(Q.Z,{data:n.info,ghost:!0})]})})})}),m=ee},81146:function(ie,S,e){var K=e(15009),v=e.n(K),F=e(99289),l=e.n(F),y=e(97857),j=e.n(y),o=e(67294),$=e(97269),x=e(62370),A=e(5966),H=e(97462),L=e(82346),N=e(71230),M=e(15746),T=e(34041),V=e(28036),ae=e(84567),te=e(42075),re=e(54964),X=e(80821),z=e(23430),J=e(93162),Y=e.n(J),a=e(12320),le=e.n(a),b=e(78267),ue=e.n(b),q=e(75458),de=e.n(q),t=e(85893),O=new a.Terminal(j()(j()({},re.a),{},{fontSize:12})),W=new b.FitAddon,G=new q.SearchAddon,se=(0,o.forwardRef)(function(P,oe){(0,o.useImperativeHandle)(oe,function(){return{fit:function(){O.clear(),W.fit()},start:function(){return l()(v()().mark(function s(){return v()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,ee({lineTotal:500});case 2:case"end":return i.stop()}},s)}))()},close:function(){R.progress.close(P.id)}}});var Q=(0,o.useRef)(),R=(0,L.useModel)("subscriber");R.addDataHandler(P.id,function(m){O.write(m.data.replaceAll(`
`,`

`))});var ee=function(){var m=l()(v()().mark(function s(u){return v()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return O.clear(),u.download=!1,_.next=4,P.request(u);case 4:case"end":return _.stop()}},s)}));return function(u){return m.apply(this,arguments)}}();return(0,o.useEffect)(function(){return window.addEventListener("resize",function(){W.fit()}),O.loadAddon(W),O.open(document.getElementById("terminal-container-log")),W.fit(),function(){O.clear(),O.reset(),R.progress.close(P.id)}},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)($.A,{submitter:!1,layout:"horizontal",onValuesChange:function(s,u){ee({id:P.id,lineTotal:parseInt(u.lineTotal),showTime:u.showTime})},formRef:Q,children:(0,t.jsxs)(N.Z,{gutter:[10,0],children:[(0,t.jsx)(M.Z,{span:8,children:(0,t.jsx)(x.Z,{name:"lineTotal",initialValue:"500",label:"\u83B7\u53D6\u65E5\u5FD7\u6761\u6570",children:(0,t.jsxs)(T.Z,{defaultValue:"500",children:[(0,t.jsx)(T.Z.Option,{value:"100",children:"100\u6761\u65E5\u5FD7\u6570\u636E"}),(0,t.jsx)(T.Z.Option,{value:"200",children:"200\u6761\u65E5\u5FD7\u6570\u636E"}),(0,t.jsx)(T.Z.Option,{value:"500",children:"500\u6761\u65E5\u5FD7\u6570\u636E"}),(0,t.jsx)(T.Z.Option,{value:"1000",children:"1000\u6761\u65E5\u5FD7\u6570\u636E"}),(0,t.jsx)(T.Z.Option,{value:"-1",children:"\u5168\u90E8\uFF08\u4E0B\u8F7D\u53EF\u89C1\uFF09"})]})})}),(0,t.jsx)(M.Z,{children:(0,t.jsx)(V.ZP,{onClick:function(){O.clear()},children:"\u6E05\u5C4F"})}),(0,t.jsx)(M.Z,{children:(0,t.jsx)(x.Z,{name:"showTime",valuePropName:"checked",children:(0,t.jsx)(ae.Z,{children:"\u663E\u793A\u65F6\u95F4"})})}),(0,t.jsx)(M.Z,{children:(0,t.jsx)(A.Z,{label:"\u67E5\u627E",name:"keywork"})}),(0,t.jsx)(M.Z,{children:(0,t.jsx)(H.Z,{name:["keywork"],children:function(s){var u=s.keywork;return(0,t.jsxs)(te.Z,{size:10,children:[(0,t.jsx)(V.ZP,{onClick:function(){G.findNext(u)},children:"\u4E0B\u4E00\u4E2A"},"next"),(0,t.jsx)(V.ZP,{onClick:function(){G.findPrevious(u)},children:"\u4E0A\u4E00\u4E2A"},"prev")]})}})}),(0,t.jsx)(M.Z,{children:(0,t.jsx)(X.Z,{icon:(0,t.jsx)(z.Z,{}),action:l()(v()().mark(function m(){var s,u,i;return v()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:if(!P.download){f.next=5;break}return f.next=3,P.download({lineTotal:parseInt((s=Q.current)===null||s===void 0?void 0:s.getFieldValue("lineTotal")),showTime:(u=Q.current)===null||u===void 0?void 0:u.getFieldValue("showTime")});case 3:i=f.sent,(0,J.saveAs)(i.data,i.name);case 5:case"end":return f.stop()}},m)})),children:"\u4E0B\u8F7D\u65E5\u5FD7"})})]})}),(0,t.jsx)("div",{style:{marginTop:"20px",height:P.showInDrawer?"75vh":"580px"},id:"terminal-container-log"})]})});S.Z=se},65913:function(ie,S,e){var K=e(5574),v=e.n(K),F=e(74330),l=e(67294),y=e(85893),j=(0,l.forwardRef)(function(o,$){(0,l.useImperativeHandle)($,function(){return{show:function(){L(!0)},destroy:function(){L(!1)}}});var x=(0,l.useState)(!1),A=v()(x,2),H=A[0],L=A[1];return(0,y.jsx)(F.Z,{spinning:H,size:"default",children:o.children})});S.Z=j}}]);

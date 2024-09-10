"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9002],{80821:function(z,O,e){e.d(O,{Z:function(){return K}});var B=e(5574),c=e.n(B),p=e(93246),f=e(54006),Z=e(31418),E=e(86738),b=e(14726),R=e(83062),S=e(67294),P=e(85893);function K(s){var V=(0,S.useState)(!1),N=c()(V,2),C=N[0],W=N[1],M=Z.Z.useApp(),G=(0,f.useIntl)(),I=function(){W(!0),s.action().then(function(T){if(W(!1),typeof s.onSuccess=="function"&&s.onSuccess(T),s.messageSuccess){var v="";typeof s.messageSuccess=="function"?v=s.messageSuccess(T):v=s.messageSuccess,v.indexOf(".")>-1&&(v=G.formatMessage({id:v})),s.asynced?(0,p.Rk)(M,v):(0,p.$h)(M,v)}}).catch(function(T){W(!1),typeof s.onError=="function"&&s.onError(T)})};return s.confirm?(0,P.jsx)(E.Z,{style:{width:500},title:"\u63D0\u793A",description:s.confirm,onConfirm:I,okText:"Yes",cancelText:"No",children:(0,P.jsx)(b.ZP,{disabled:s.disabled,icon:s.icon,loading:C,danger:s.danger,type:s.type,children:s.children})}):(0,P.jsx)(R.Z,{title:s.tips,children:(0,P.jsx)(b.ZP,{disabled:s.disabled,icon:s.icon,loading:C,onClick:I,danger:s.danger,type:s.type,children:s.children})})}},78451:function(z,O,e){e.d(O,{Z:function(){return p}});var B=e(67294),c=e(85893);function p(f){return(0,c.jsx)("span",{style:{wordBreak:"break-word"},children:f.content})}},86783:function(z,O,e){e.r(O),e.d(O,{default:function(){return je}});var B=e(15009),c=e.n(B),p=e(99289),f=e.n(p),Z=e(80821),E=e(78451),b=e(5574),R=e.n(b),S=e(54006);function P(u){return K.apply(this,arguments)}function K(){return K=f()(c()().mark(function u(h){return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,S.request)("/api/app/volume/get-list",{method:"POST",data:h}));case 1:case"end":return t.stop()}},u)})),K.apply(this,arguments)}function s(u){return V.apply(this,arguments)}function V(){return V=f()(c()().mark(function u(h){return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,S.request)("/api/app/volume/create",{method:"POST",data:h}));case 1:case"end":return t.stop()}},u)})),V.apply(this,arguments)}function N(){return C.apply(this,arguments)}function C(){return C=f()(c()().mark(function u(){return c()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,(0,S.request)("/api/app/volume/prune",{method:"POST"});case 2:return i.abrupt("return",i.sent);case 3:case"end":return i.stop()}},u)})),C.apply(this,arguments)}function W(u){return M.apply(this,arguments)}function M(){return M=f()(c()().mark(function u(h){return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,S.request)("/api/app/volume/delete",{method:"POST",data:h});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},u)})),M.apply(this,arguments)}function G(u){return I.apply(this,arguments)}function I(){return I=f()(c()().mark(function u(h){return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,S.request)("/api/app/volume/get-detail",{method:"POST",data:h}));case 1:case"end":return t.stop()}},u)})),I.apply(this,arguments)}var J=e(93246),T=e(184),v=e(5966),q=e(62370),_=e(86615),ee=e(97462),ne=e(17186),te=e(24739),re=e(31418),ae=e(14726),Y=e(34041),y=e(67294),n=e(85893),ue=(0,y.forwardRef)(function(u,h){var i=(0,y.useState)(!1),t=R()(i,2),o=t[0],m=t[1],l=re.Z.useApp(),a=(0,y.useRef)();return(0,y.useImperativeHandle)(h,function(){return{}}),(0,n.jsxs)(T.a,{name:"create",title:"\u6DFB\u52A0\u5B58\u50A8\u5377",open:o,onOpenChange:function(r){m(r)},formRef:a,trigger:(0,n.jsx)(ae.ZP,{type:"primary",children:"\u6DFB\u52A0"}),onFinish:function(){var g=f()(c()().mark(function r(d){var D,$,U,w,x,A;return c()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return w=[],d.otherOptions&&d.otherOptions.map(function(k){w.push(k.name+`
`+k.value)}),j.next=4,s({name:d.name,driver:"local",type:d.type,nfsUrl:(D=d.nfsUrl)!==null&&D!==void 0?D:"",nfsMountPoint:($=d.nfsMountPoint)!==null&&$!==void 0?$:"",nfsOptions:(U=d.nfsOptions)!==null&&U!==void 0?U:"",tmpfsOptions:d.tmpfsOptions,otherOptions:w});case 4:if(x=j.sent,!(x&&x.data&&x.data.info.Name!="")){j.next=10;break}return(0,J.$h)(l,"\u6DFB\u52A0\u5B58\u50A8\u5377\u6210\u529F"),u.onFinish&&u.onFinish(),(A=a.current)===null||A===void 0||A.resetFields(),j.abrupt("return",!0);case 10:case"end":return j.stop()}},r)}));return function(r){return g.apply(this,arguments)}}(),children:[(0,n.jsx)(v.Z,{label:"\u540D\u79F0",name:"name",placeholder:"\u6307\u5B9A\u552F\u4E00\u5B58\u50A8\u5377\u540D\u79F0"}),(0,n.jsx)(q.Z,{label:"\u7C7B\u578B",name:"driver",children:(0,n.jsx)(Y.Z,{defaultValue:"local",children:(0,n.jsx)(Y.Z.Option,{value:"local",children:"local"})})}),(0,n.jsx)(_.Z.Group,{name:"type",label:"\u5B58\u50A8\u7C7B\u578B",valueEnum:{default:"\u9ED8\u8BA4",tmpfs:"tmpfs",nfs:"Nfs",nfs4:"Nfs4",other:"\u81EA\u5B9A\u4E49"},initialValue:"default"}),(0,n.jsx)(ee.Z,{name:["type"],children:function(r){var d=r.type;if(d=="other")return(0,n.jsx)(ne.u,{name:"otherOptions",creatorButtonProps:{creatorButtonText:"\u5B58\u50A8"},copyIconProps:!1,min:0,children:(0,n.jsxs)(te.UW,{children:[(0,n.jsx)(v.Z,{name:"name",label:"\u540D\u79F0",placeholder:"\u4F8B\u5982:mountpoint"}),(0,n.jsx)(v.Z,{name:"value",label:"\u503C",placeholder:"\u4F8B\u5982:/etc/path"})]})});if(d=="nfs"||d=="nfs4")return[(0,n.jsx)(v.Z,{label:"\u5730\u5740",name:"nfsUrl",required:!0,rules:[{required:!0}],placeholder:"\u914D\u7F6ENfs\u670D\u52A1\u5730\u5740,\u4F8B\u5982 my.nfs.com \u6216\u662F 172.16.1.13 "},"nfsUrl"),(0,n.jsx)(v.Z,{label:"\u6302\u8F7D\u70B9",name:"nfsMountPoint",required:!0,rules:[{required:!0}],placeholder:"\u4F8B\u5982, /export/share, :/export/share, /share or :/share"},"nfsMountPoint"),(0,n.jsx)(v.Z,{label:"\u914D\u7F6E",name:"nfsOptions",initialValue:"rw,noatime,rsize=8192,wsize=8192,tcp,timeo=14"},"nfsOptions")];if(d=="tmpfs")return[(0,n.jsx)(v.Z,{label:"\u914D\u7F6E",name:"tmpfsOptions",initialValue:"size=100m,uid=1000"},"tmpfsOptions")]}})]})}),le=ue,Q=e(38345),se=e(45360),ie=e(85576),F=e(26412),oe=e(63490),H=e(66309),de=(0,y.forwardRef)(function(u,h){var i;(0,y.useImperativeHandle)(h,function(){return{showDetail:function(A){U.open({type:"loading",content:"\u6B63\u5728\u83B7\u53D6\u5B58\u50A8\u5377\u8BE6\u60C5",duration:0});var L=G({name:A}).then(function(j){d(j.data),l(!0)}).finally(function(){U.destroy()})}}});var t=(0,y.useState)(!1),o=R()(t,2),m=o[0],l=o[1],a=(0,y.useState)(),g=R()(a,2),r=g[0],d=g[1],D=se.ZP.useMessage(),$=R()(D,2),U=$[0],w=$[1];return(0,n.jsxs)(n.Fragment,{children:[w,(0,n.jsxs)(ie.Z,{width:800,open:m,footer:!1,onCancel:function(){return l(!1)},children:[(0,n.jsx)(Q.Z,{title:"\u5B58\u50A8\u8BE6\u60C5",ghost:!0,children:(0,n.jsxs)(F.Z,{labelStyle:{width:"150px"},column:1,bordered:!0,children:[(0,n.jsx)(F.Z.Item,{label:"\u540D\u79F0",children:r==null?void 0:r.info.Name}),(0,n.jsx)(F.Z.Item,{label:"\u521B\u5EFA\u65F6\u95F4",children:new Date((i=r==null?void 0:r.info.CreatedAt)!==null&&i!==void 0?i:"").toLocaleString()}),(0,n.jsx)(F.Z.Item,{label:"\u6302\u8F7D\u70B9",children:r==null?void 0:r.info.Mountpoint}),(0,n.jsx)(F.Z.Item,{label:"\u7C7B\u578B",children:r==null?void 0:r.info.Driver}),(r==null?void 0:r.info.Labels)&&(0,n.jsx)(F.Z.Item,{label:"Lables",children:(0,n.jsx)(F.Z,{labelStyle:{width:"150px"},column:1,bordered:!0,children:(r==null?void 0:r.info.Labels)&&Object.keys(r==null?void 0:r.info.Labels).map(function(x){return(0,n.jsx)(F.Z.Item,{label:x,children:r.info.Labels[x]})})})})]})}),(0,n.jsx)(Q.Z,{title:"\u4F7F\u7528\u5BB9\u5668",ghost:!0,children:(0,n.jsx)(oe.Z,{rowKey:"Id",columns:[{title:"\u5BB9\u5668\u540D\u79F0",dataIndex:"Name",render:function(A,L,j){return(0,n.jsx)(S.Link,{target:"_blank",to:"/app/detail/edit/".concat(L.Id),children:L.Name})}},{title:"\u5BB9\u5668\u5185\u8DEF\u5F84",dataIndex:"Mount"},{title:"\u6743\u9650",render:function(A,L,j){return L.RW?(0,n.jsx)(H.Z,{children:"\u8BFB\u5199"}):(0,n.jsx)(H.Z,{children:"\u53EA\u8BFB"})}}],dataSource:r==null?void 0:r.inUseContainer,pagination:!1})})]})]})}),ce=de,fe=e(67255),me=e(43425),ve=e(6110),he=e(88717),X=e(42075),pe=e(96074),ge=e(22015),xe=e(83062);function je(){var u=(0,y.useRef)(),h=(0,y.useRef)();return(0,n.jsxs)(ve._z,{header:{extra:[(0,n.jsx)(le,{onFinish:function(){var t,o;!((t=u.current)===null||t===void 0)&&t.reloadAndRest&&((o=u.current)===null||o===void 0||o.reloadAndRest())}},"create")]},children:[(0,n.jsx)(ce,{ref:h}),(0,n.jsx)(he.Z,{scroll:{x:"max-content"},rowKey:"Name",pagination:(0,fe.O)(),columns:[{title:"\u540D\u79F0",dataIndex:"Name",width:300,render:function(t,o,m,l,a){return(0,n.jsx)(E.Z,{content:o.Name})}},{title:"\u72B6\u6001",ellipsis:!0,search:!1,render:function(t,o,m,l,a){return o.InUse?(0,n.jsx)(H.Z,{color:"cyan",children:"\u4F7F\u7528\u4E2D"}):(0,n.jsx)(n.Fragment,{})}},{title:"\u7C7B\u578B",ellipsis:!0,width:80,search:!1,dataIndex:"Driver"},{title:"\u6302\u8F7D\u70B9",search:!1,width:400,dataIndex:"Mountpoint",render:function(t,o,m,l,a){return(0,n.jsx)(E.Z,{content:o.Mountpoint})}},{title:"\u521B\u5EFA\u65F6\u95F4",ellipsis:!0,width:200,search:!1,dataIndex:"CreatedAt",render:function(t,o,m,l,a){return new Date(o.CreatedAt).toLocaleString()}},{title:"\u64CD\u4F5C",width:100,search:!1,render:function(t,o,m,l,a){return(0,n.jsx)(X.Z,{split:(0,n.jsx)(pe.Z,{type:"vertical"}),children:(0,n.jsx)(ge.Z.Link,{onClick:function(){var r;(r=h.current)===null||r===void 0||r.showDetail(o.Name)},children:(0,n.jsx)(xe.Z,{title:"\u7BA1\u7406",children:(0,n.jsx)(me.Z,{})})})})}}],request:function(){var i=f()(c()().mark(function t(o,m,l){var a,g;return c()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,P({name:o.name});case 2:return a=d.sent,g=[],a.data.inUse?g=a.data.list.map(function(D){return a.data.inUse.indexOf(D.Name)!=-1?D.InUse=!0:D.InUse=!1,D}):g=a.data.list,d.abrupt("return",{data:g,success:!0,total:a.data.list.length});case 6:case"end":return d.stop()}},t)}));return function(t,o,m){return i.apply(this,arguments)}}(),rowSelection:{defaultSelectedRowKeys:[],alwaysShowAlert:!0},actionRef:u,tableAlertOptionRender:function(t){var o=t.selectedRowKeys;return(0,n.jsxs)(X.Z,{size:16,children:[(0,n.jsx)(Z.Z,{danger:!0,type:"primary",action:function(){return W({name:o})},onSuccess:function(){var l,a;return!((l=u.current)===null||l===void 0)&&l.reloadAndRest&&((a=u.current)===null||a===void 0||a.reloadAndRest()),!0},onError:function(){var l,a;return!((l=u.current)===null||l===void 0)&&l.reset&&((a=u.current)===null||a===void 0||a.reset()),!0},messageSuccess:"\u5220\u9664\u6210\u529F",children:"\u6279\u91CF\u5220\u9664"}),(0,n.jsx)(Z.Z,{action:function(){return N()},onSuccess:function(){var l,a;return!((l=u.current)===null||l===void 0)&&l.reloadAndRest&&((a=u.current)===null||a===void 0||a.reloadAndRest()),!0},onError:function(){var l,a;return!((l=u.current)===null||l===void 0)&&l.reset&&((a=u.current)===null||a===void 0||a.reset()),!0},messageSuccess:"\u6E05\u9664\u6210\u529F",confirm:"\u662F\u5426\u6E05\u7406\u672A\u4F7F\u7528\u7684\u533F\u540D\u5B58\u50A8\uFF1F",children:"\u6E05\u7406\u672A\u4F7F\u7528\u5B58\u50A8"})]})}})]})}},67255:function(z,O,e){e.d(O,{O:function(){return B},j:function(){return c}});function B(){var p,f=parseInt((p=localStorage.getItem("dpanel-pagesize"))!==null&&p!==void 0?p:"0");return{showSizeChanger:!0,defaultPageSize:f!=null?f:20}}function c(p){var f="dpanel-table-column-".concat(p),Z={};if(localStorage.getItem(f)){var E;Z=JSON.parse((E=localStorage.getItem(f))!==null&&E!==void 0?E:"{}")}return{defaultValue:Z,onChange:function(R){localStorage.setItem("dpanel-table-column-".concat(p),JSON.stringify(R))}}}}}]);

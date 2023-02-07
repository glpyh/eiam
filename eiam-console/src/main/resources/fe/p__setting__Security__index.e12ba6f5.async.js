/*
 * eiam-console - Employee Identity and Access Management Program
 * Copyright © 2020-2023 TopIAM (support@topiam.cn)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
"use strict";(self.webpackChunktopiam_console=self.webpackChunktopiam_console||[]).push([[2666],{76593:function(me,X,s){s.d(X,{W:function(){return v}});var G=s(94184),l=s.n(G),M=s(11281),g=s.n(M),U=s(12812),x=s.n(U),V=s(14855),u=s(46986),c=s(67294),z=u.ZP.ConfigContext,w=function(R){var j=R.prefixCls;return x()({},"".concat(j),{margin:"0 auto"})};function J(W){var R=(0,c.useContext)(z),j=R.getPrefixCls,q=".".concat(j());return(0,V.Xj)("ContainerComponent",function(B){var e=g()(g()({},B),{},{prefixCls:".".concat(W),antCls:q});return[w(e)]})}var $=s(85893),Q="topiam-container",v=function(R){var j=R.children,q=j===void 0?null:j,B=R.maxWidth,e=B===void 0?1e3:B,ue=J(Q),re=ue.wrapSSR,te=ue.hashId;return re((0,$.jsx)("div",{className:l()("".concat(Q),te),style:{maxWidth:e},children:q}))}},11911:function(me,X,s){s.d(X,{Gh:function(){return x},SC:function(){return V},Zw:function(){return l},b$:function(){return U},n6:function(){return M},pR:function(){return g},rD:function(){return G}});var G;(function(u){u.EX900005="EX900005",u.EX000102="EX000102",u.EX000202="EX000202",u.SUCCESS="200"})(G||(G={}));var l;(function(u){u.ALIYUN="aliyun",u.QI_NIU="qiniu",u.TENCENT="tencent",u.NET_EASE="netease",u.MAXMIND="maxmind"})(l||(l={}));var M;(function(u){u.ALIYUN="aliyun",u.TENCENT="tencent",u.GEE_TEST="geetest",u.HCAPTCHA="hcaptcha",u.RECAPTCHA="recaptcha"})(M||(M={}));var g;(function(u){u.STANDARD="standard",u.CUSTOM_MADE="custom_made"})(g||(g={}));var U;(function(u){u.SAML2="saml2",u.OIDC="oidc",u.CAS="cas",u.JWT="jwt",u.FORM="form",u.OAUTH2="oauth2"})(U||(U={}));var x;(function(u){u.ALLOW="ALLOW",u.DENY="DENY"})(x||(x={}));var V;(function(u){u.ROLE="ROLE",u.RESOURCE="RESOURCE",u.USER="USER",u.ORGANIZATION="ORGANIZATION",u.USER_GROUP="USER_GROUP"})(V||(V={}))},4560:function(me,X,s){s.r(X),s.d(X,{default:function(){return as}});var G=s(97983),l=s.n(G),M=s(40794),g=s.n(M),U=s(12741),x=s.n(U),V=s(14459),u=s(11281),c=s.n(u),z=s(76593),w=s(62387),J=s(38345),$=s(97269),Q=s(2236),v=s(43825),W=s(2453),R=s(57953),j=s(43262),q=s(96074),B=s(67294),e=s(85893),ue={labelCol:{span:6},wrapperCol:{span:18}},re=function(i){var F=v.Z.useForm(),o=x()(F,1),n=o[0],E=(0,B.useState)(!0),P=x()(E,2),D=P[0],C=P[1],A=(0,B.useState)(!1),O=x()(A,2),y=O[0],I=O[1];return(0,B.useEffect)(function(){i.visible&&(C(!0),(0,w.EA)().then(function(t){t.success&&(n.setFieldsValue(t.result),C(!1))}))},[n,i.visible]),(0,e.jsx)(J.Z,{title:"\u57FA\u7840\u8BBE\u7F6E",headerBordered:!0,children:(0,e.jsx)(z.W,{children:(0,e.jsx)($.A,c()(c()({form:n,scrollToFirstError:!0},ue),{},{layout:"horizontal",requiredMark:!1,labelAlign:"left",onFinish:function(){var t=g()(l()().mark(function p(d){var m,a,r;return l()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return m=d,C(!0),I(!0),Math.sign(d.sessionMaximum)===0&&(m=c()(c()({},m),{},{sessionMaximum:1}),n.setFieldValue("sessionMaximum",1)),h.next=6,(0,w.r3)(m).finally(function(){C(!1),I(!1)});case 6:a=h.sent,r=a.success,r&&W.ZP.success("\u64CD\u4F5C\u6210\u529F");case 9:case"end":return h.stop()}},p)}));return function(p){return t.apply(this,arguments)}}(),submitter:{render:function(p,d){return(0,e.jsx)(Q.S,{children:d})},submitButtonProps:{loading:y},resetButtonProps:{style:{display:"none"}}},children:(0,e.jsxs)(R.Z,{spinning:D,children:[(0,e.jsx)($.A.Item,{name:"sessionMaximum",extra:"\u540C\u4E00\u7528\u6237\u540C\u65F6\u5728\u7EBF\u6570\u91CF\uFF0C-1\u4E3A\u4E0D\u9650\u5236\u3002",label:"\u7528\u6237\u5E76\u53D1\u6570",children:(0,e.jsx)(j.Z,{min:-1,max:100})}),(0,e.jsx)($.A.Item,{label:"\u4F1A\u8BDD\u6709\u6548\u65F6\u95F4",name:"sessionValidTime",addonAfter:"\u79D2\uFF08\u6682\u672A\u652F\u6301\uFF09",children:(0,e.jsx)(j.Z,{min:18e3,readOnly:!0})}),(0,e.jsx)($.A.Item,{label:"\u8BB0\u4F4F\u6211\u6709\u6548\u65F6\u95F4",name:"rememberMeValidTime",addonAfter:"\u79D2",children:(0,e.jsx)(j.Z,{min:43200})}),(0,e.jsx)($.A.Item,{label:"\u9A8C\u8BC1\u7801\u6709\u6548\u65F6\u95F4",name:"verifyCodeValidTime",extra:"\u9A8C\u8BC1\u573A\u666F\u4E0B\uFF0C\u9A8C\u8BC1\u7801\u9A8C\u8BC1\u6709\u6548\u65F6\u95F4\u3002",addonAfter:"\u5206",children:(0,e.jsx)(j.Z,{min:1,max:30})}),(0,e.jsx)(q.Z,{}),(0,e.jsx)($.A.Item,{label:"\u8FDE\u7EED\u767B\u5F55\u5931\u8D25\u6301\u7EED\u65F6\u95F4",name:"loginFailureDuration",addonAfter:"\u5206\u949F",children:(0,e.jsx)(j.Z,{})}),(0,e.jsx)($.A.Item,{label:"\u8FDE\u7EED\u767B\u5F55\u5931\u8D25\u6B21\u6570",name:"loginFailureCount",extra:'\u7BA1\u7406\u5458\u8BBE\u7F6E\u7528\u6237\u8FDE\u7EED\u767B\u5F55\u5931\u8D25\u6B21\u6570\uFF0C\u5728"\u5141\u8BB8\u6301\u7EED\u65F6\u95F4" \u8FBE\u5230\u8BBE\u7F6E\u503C\uFF0C\u5F53\u524D\u8D26\u6237\u88AB\u9501\u5B9A\u3002',addonAfter:"\u81EA\u52A8\u9501\u5B9A",children:(0,e.jsx)(j.Z,{})}),(0,e.jsx)($.A.Item,{label:"\u81EA\u52A8\u89E3\u9501\u65F6\u95F4",name:"autoUnlockTime",extra:"\u7BA1\u7406\u5458\u8BBE\u7F6E\u81EA\u52A8\u89E3\u9501\u65F6\u95F4\uFF0C\u7528\u6237\u8FDE\u7EED\u767B\u5F55\u5931\u8D25\u88AB\u9501\u5B9A\u540E\uFF0C\u8FBE\u5230\u5BF9\u5E94\u65F6\u95F4\uFF0C\u5C06\u81EA\u52A8\u89E3\u9501\u3002",addonAfter:"\u5206\u949F",children:(0,e.jsx)(j.Z,{min:0})})]})}))})})},te=s(69677),fe=s(99138),le=s(71230),_=s(15746),K=s(83062),ve=s(72269),Y=s(25035),Ce=s(86615),ie=s(52688),ne=s(97462),ee=s(2093),he=s(69400),xe=s(51158),be=function(i){var F=i.visible,o=i.onCancel,n=(0,B.useState)(),E=x()(n,2),P=E[0],D=E[1],C=(0,B.useState)(!0),A=x()(C,2),O=A[0],y=A[1];return(0,ee.Z)(g()(l()().mark(function I(){var t,p,d,m;return l()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(!F){r.next=9;break}return y(!0),r.next=4,(0,w.uE)();case 4:t=r.sent,p=t.success,d=t.result,p&&d&&(m=d==null?void 0:d.map(function(f){return f.value}),D(m)),y(!1);case 9:case"end":return r.stop()}},I)})),[F]),(0,e.jsx)(he.Z,{open:F,title:"\u5185\u7F6E\u5F31\u5BC6\u7801\u5E93",footer:!1,onCancel:o,destroyOnClose:!0,children:(0,e.jsx)(R.Z,{spinning:O,children:(0,e.jsx)(xe.ZP,{size:"small",bordered:!1,dataSource:P,pagination:{simple:!0},renderItem:function(t){return(0,e.jsx)(xe.ZP.Item,{children:t})}})})})},Pe=s(94184),Fe=s.n(Pe),De=s(12812),ae=s.n(De),Ie=s(14855),pe=s(46986),Te=pe.ZP.ConfigContext,Ne=function(F){var o=F.prefixCls,n=F.antCls;return ae()({},"".concat(o),ae()({},".ant-pro-field-radio-vertical  ".concat(n,"-radio-wrapper"),{display:"block",height:"30px","margin-bottom":" 5px","line-height":"30px"}))};function we(i){var F=(0,B.useContext)(Te),o=F.getPrefixCls,n=".".concat(o());return(0,Ie.Xj)("SettingPasswordPolicy",function(E){var P=c()(c()({},E),{},{prefixCls:".".concat(i),antCls:n});return[Ne(P)]})}var $e=te.Z.TextArea,je="password-policy",Re={labelCol:{span:6},wrapperCol:{span:18}},Le=function(i){var F=v.Z.useForm(),o=x()(F,1),n=o[0],E=we(je),P=E.wrapSSR,D=E.hashId,C=(0,B.useState)(!1),A=x()(C,2),O=A[0],y=A[1],I=(0,B.useState)(!0),t=x()(I,2),p=t[0],d=t[1];return(0,ee.Z)(g()(l()().mark(function m(){var a;return l()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:if(!i.visible){f.next=7;break}return d(!0),f.next=4,(0,w.Tz)();case 4:a=f.sent,a!=null&&a.success&&n.setFieldsValue(c()({},a==null?void 0:a.result)),d(!1);case 7:case"end":return f.stop()}},m)})),[n,i.visible]),P((0,e.jsxs)(J.Z,{title:"\u5BC6\u7801\u7B56\u7565",headerBordered:!0,className:Fe()("".concat(je),D),children:[(0,e.jsx)(fe.Z,{style:{backgroundColor:"#f1f1f2",border:"1px solid #f1f1f2"},message:"\u914D\u7F6E\u5BC6\u7801\u76F8\u5173\u7B56\u7565\u3002\u4FDD\u5B58\u540E\uFF0C\u6240\u6709\u5BC6\u7801\u65B0\u589E\u6216\u53D8\u66F4\u5747\u4F1A\u8FDB\u884C\u6821\u9A8C\u3002"}),(0,e.jsx)("br",{}),(0,e.jsxs)(z.W,{children:[(0,e.jsx)($.A,c()(c()({form:n,scrollToFirstError:!0},Re),{},{layout:"horizontal",labelAlign:"left",onFinish:function(){var m=g()(l()().mark(function a(r){var f,h;return l()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return d(!0),N.next=3,(0,w.RJ)(r).finally(function(){d(!1)});case 3:f=N.sent,h=f.success,h&&W.ZP.success("\u4FDD\u5B58\u6210\u529F");case 6:case"end":return N.stop()}},a)}));return function(a){return m.apply(this,arguments)}}(),submitter:{render:function(a,r){return(0,e.jsx)(Q.S,{children:r})},resetButtonProps:{style:{display:"none"}}},children:(0,e.jsxs)(R.Z,{spinning:p,children:[(0,e.jsx)(v.Z.Item,{label:"\u5BC6\u7801\u957F\u5EA6\u9650\u5236",style:{marginBottom:0},children:(0,e.jsxs)(le.Z,{gutter:[8,8],children:[(0,e.jsx)(_.Z,{xs:10,sm:10,md:8,lg:8,xl:6,children:(0,e.jsx)(v.Z.Item,{label:"\u6700\u5C0F\u957F\u5EA6",name:"passwordLeastLength",children:(0,e.jsx)(j.Z,{min:8,max:10})})}),(0,e.jsx)(_.Z,{xs:10,sm:10,md:8,lg:8,xl:6,children:(0,e.jsx)(v.Z.Item,{label:"\u6700\u5927\u957F\u5EA6",name:"passwordBiggestLength",style:{float:"right"},children:(0,e.jsx)(j.Z,{min:1,max:30})})})]})}),(0,e.jsx)(Ce.Z.Group,{layout:"vertical",label:"\u5BC6\u7801\u590D\u6742\u5EA6",name:"passwordComplexity",options:[{value:"0",label:"\u4EFB\u610F\u5BC6\u7801"},{value:"1",label:"\u5FC5\u987B\u5305\u542B\u6570\u5B57\u548C\u5B57\u6BCD"},{value:"2",label:"\u5FC5\u987B\u5305\u542B\u6570\u5B57\u548C\u5927\u5199\u5B57\u6BCD"},{value:"3",label:"\u5FC5\u987B\u5305\u542B\u6570\u5B57\u3001\u5927\u5199\u5B57\u6BCD\u3001\u5C0F\u5199\u5B57\u6BCD\u3001\u548C\u7279\u6B8A\u5B57\u7B26"},{value:"4",label:"\u81F3\u5C11\u5305\u542B\u6570\u5B57\u3001\u5B57\u6BCD\u3001\u548C\u7279\u6B8A\u5B57\u7B26\u4E2D\u7684\u4E24\u79CD"},{value:"5",label:"\u81F3\u5C11\u5305\u542B\u6570\u5B57\u3001\u5927\u5199\u5B57\u6BCD\u3001\u5C0F\u5199\u5B57\u6BCD\u3001\u548C\u7279\u6B8A\u5B57\u7B26\u4E2D\u7684\u4E09\u79CD"}]}),(0,e.jsx)(v.Z.Item,{style:{marginBottom:0},label:(0,e.jsxs)("span",{children:["\u5BC6\u7801\u8FC7\u671F\u68C0\u67E5\xA0",(0,e.jsx)(K.Z,{title:"\u5F00\u542F\u540E\uFF0C\u7CFB\u7EDF\u4F1A\u8BA1\u7B97\u5BC6\u7801\u8BBE\u7F6E\u65F6\u95F4",children:(0,e.jsx)(Y.Z,{})})]}),children:(0,e.jsxs)(le.Z,{gutter:[8,8],children:[(0,e.jsx)(_.Z,{xs:10,sm:11,md:9,lg:8,xl:6,children:(0,e.jsxs)(v.Z.Item,{label:"\u6709\u6548\u671F",children:[(0,e.jsx)(v.Z.Item,{name:"passwordValidDays",noStyle:!0,children:(0,e.jsx)(j.Z,{min:7,max:365})}),(0,e.jsx)("span",{children:"\xA0\u5929"})]})}),(0,e.jsx)(_.Z,{xs:12,sm:13,md:12,lg:9,xl:8,children:(0,e.jsxs)(v.Z.Item,{label:"\u8FC7\u671F\u524D",children:[(0,e.jsx)(v.Z.Item,{name:"passwordValidWarnBeforeDays",noStyle:!0,children:(0,e.jsx)(j.Z,{min:7,max:30})}),(0,e.jsx)("span",{children:"\xA0\u5929\u63D0\u9192"})]})})]})}),(0,e.jsx)(v.Z.Item,{name:"notSameChars",label:(0,e.jsxs)("span",{children:["\u5BC6\u7801\u76F8\u540C\u5B57\u7B26\xA0",(0,e.jsx)(K.Z,{title:"\u5BC6\u7801\u4E0D\u80FD\u8FDE\u7EED\u5B58\u5728\u76F8\u540C\u5B57\u7B26\u4E2A\u6570",children:(0,e.jsx)(Y.Z,{})})]}),children:(0,e.jsx)(j.Z,{min:1,max:10})}),(0,e.jsx)(ie.Z,{name:"includeAccountCheck",valuePropName:"checked",label:(0,e.jsxs)("span",{children:["\u7528\u6237\u4FE1\u606F\u68C0\u67E5\xA0",(0,e.jsx)(K.Z,{title:"\u5F00\u542F\u540E\uFF0C\u5BC6\u7801\u4E2D\u5C06\u4E0D\u80FD\u5305\u542B\u7528\u6237\u540D\u3001\u624B\u673A\u53F7\u3001\u90AE\u7BB1\u524D\u7F00\u548C\u59D3\u540D\u62FC\u97F3",children:(0,e.jsx)(Y.Z,{})})]})}),(0,e.jsx)(ie.Z,{name:"historyPasswordCheck",label:(0,e.jsxs)("span",{children:["\u5386\u53F2\u5BC6\u7801\u68C0\u67E5\xA0",(0,e.jsx)(K.Z,{title:"\u68C0\u67E5\u8BBE\u7F6E\u7684\u5BC6\u7801\u662F\u5426\u4E3A\u5386\u53F2\u5BC6\u7801\u3002",children:(0,e.jsx)(Y.Z,{})})]})}),(0,e.jsx)(ne.Z,{name:["historyPasswordCheck"],children:function(a){var r=a.historyPasswordCheck;return r?(0,e.jsx)(v.Z.Item,{label:(0,e.jsxs)("span",{children:["\u5386\u53F2\u5BC6\u7801\u6B21\u6570\u8303\u56F4\xA0",(0,e.jsx)(K.Z,{title:"\u68C0\u67E5\u5386\u53F2\u5BC6\u7801\u6B21\u6570\u8303\u56F4\uFF0C\u8BE5\u503C\u5FC5\u987B\u4ECB\u4E8E1\u523010\u6B21\u5BC6\u7801\u4E4B\u95F4\u3002",children:(0,e.jsx)(Y.Z,{})})]}),children:(0,e.jsx)(v.Z.Item,{name:"historyPasswordCheckCount",noStyle:!0,children:(0,e.jsx)(j.Z,{min:1,max:10})})}):(0,e.jsx)(e.Fragment,{})}}),(0,e.jsx)(v.Z.Item,{label:(0,e.jsxs)("span",{children:["\u975E\u6CD5\u5B57\u7B26\u5E8F\u5217\xA0",(0,e.jsx)(K.Z,{title:"\u9632\u6B62\u975E\u6CD5\u5B57\u7B26\u5E8F\u5217\uFF0C\u4F8B\u5982\u952E\u76D8\u3001\u5B57\u6BCD\u3001\u6570\u5B57\u3002",children:(0,e.jsx)(Y.Z,{})})]}),name:"illegalSequenceCheck",valuePropName:"checked",children:(0,e.jsx)(ve.Z,{})}),(0,e.jsxs)(v.Z.Item,{label:(0,e.jsxs)("span",{children:["\u5F31\u5BC6\u7801\u68C0\u67E5\xA0",(0,e.jsx)(K.Z,{title:"\u5F31\u5BC6\u7801\u901A\u5E38\u662F\u6307\u5BB9\u6613\u88AB\u522B\u4EBA\u731C\u6D4B\u5230\u6216\u88AB\u7834\u89E3\u5DE5\u5177\u7834\u89E3\u7684\u5BC6\u7801\u3002\u5728\u8BBE\u7F6E\u6216\u4FEE\u6539\u5BC6\u7801\u65F6\uFF0C\u5982\u679C\u5BC6\u7801\u662F\u5F31\u5BC6\u7801\u5B57\u5178\u4E2D\u7684\u5BC6\u7801\uFF0C\u5219\u7CFB\u7EDF\u4F1A\u5F3A\u5236\u7528\u6237\u91CD\u65B0\u8BBE\u7F6E\uFF0C\u4EE5\u63D0\u5347\u7528\u6237\u5BC6\u7801\u7684\u5B89\u5168\u6027\u3002",children:(0,e.jsx)(Y.Z,{})})]}),children:[(0,e.jsx)(v.Z.Item,{noStyle:!0,name:"weakPasswordCheck",valuePropName:"checked",children:(0,e.jsx)(ve.Z,{})}),(0,e.jsx)(ne.Z,{name:["weakPasswordCheck"],children:function(a){var r=a.weakPasswordCheck;return r&&(0,e.jsx)("span",{children:(0,e.jsx)("a",{onClick:function(){y(!0)},children:"\xA0\u5185\u7F6E\u5F31\u5BC6\u7801\u5E93"})})}})]}),(0,e.jsx)(ne.Z,{name:["weakPasswordCheck"],children:function(a){var r=a.weakPasswordCheck;return r&&(0,e.jsx)(v.Z.Item,{label:"\u5176\u4ED6\u5F31\u5BC6\u7801",extra:(0,e.jsx)("span",{children:"\u6BCF\u884C\u4EE3\u8868\u4E00\u6761\u5F31\u5BC6\u7801"}),children:(0,e.jsx)(le.Z,{children:(0,e.jsx)(_.Z,{span:10,children:(0,e.jsx)(v.Z.Item,{name:"customWeakPassword",style:{marginBottom:5},children:(0,e.jsx)($e,{rows:3})})})})})}})]})})),(0,e.jsx)(be,{visible:O,onCancel:function(){y(!1)}})]})]}))},Oe=Le,Ee=s(84865),L=s(11911),We=s(28058),ge=s(64317),Be=s(26713),se=s(5966),Ge=function(){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(se.Z,{name:["config","regionId"],label:"RegionId",rules:[{required:!0,message:" RegionId \u4E3A\u5FC5\u586B\u9879"}]}),(0,e.jsx)(se.Z,{name:["config","accessKeyId"],label:"accessKeyId",rules:[{required:!0,message:"AccessKeyId \u4E3A\u5FC5\u586B\u9879"}]}),(0,e.jsx)(se.Z,{name:["config","accessKeySecret"],label:"accessKeySecret",rules:[{required:!0,message:"AccessKeySecret \u4E3A\u5FC5\u586B\u9879"}]}),(0,e.jsx)(ge.Z,{name:["config","mode"],label:"\u9A8C\u8BC1\u65B9\u5F0F",options:[{value:"slide",label:"\u6ED1\u52A8\u9A8C\u8BC1"},{value:"traceless",label:"\u65E0\u75D5\u9A8C\u8BC1"},{value:"smart",label:"\u667A\u80FD\u9A8C\u8BC1"}],rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u9A8C\u8BC1\u65B9\u5F0F"}]})]})},Me=Ge,Ue=function(){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(se.Z,{name:["config","captchaId"],label:"\u9A8C\u8BC1 ID",rules:[{required:!0,message:"\u9A8C\u8BC1 ID \u4E3A\u5FC5\u586B\u9879"}]}),(0,e.jsx)(se.Z.Password,{name:["config","captchaKey"],label:"\u9A8C\u8BC1 KEY",rules:[{required:!0,message:"\u9A8C\u8BC1 KEY \u4E3A\u5FC5\u586B\u9879"}]})]})},oe=Ue,Ve=function(){return(0,e.jsx)(e.Fragment,{})},Ke=Ve,Ye=he.Z.confirm,ke={labelCol:{xs:{span:24},sm:{span:7},md:{span:6}},wrapperCol:{xs:{span:24},sm:{span:13},md:{span:14}}},He={wrapperCol:{xs:{span:24,offset:0},sm:{span:17,offset:7},md:{span:18,offset:6}}},ce=L.n6.GEE_TEST,Xe=function(i){var F=v.Z.useForm(),o=x()(F,1),n=o[0],E=i.visible,P=(0,B.useState)(ce),D=x()(P,2),C=D[0],A=D[1],O=(0,B.useState)(!1),y=x()(O,2),I=y[0],t=y[1],p=(0,B.useState)(!1),d=x()(p,2),m=d[0],a=d[1];return(0,ee.Z)(g()(l()().mark(function r(){var f,h,Z;return l()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:if(!E){T.next=11;break}return n.resetFields(),t(!0),T.next=5,(0,w.mg)();case 5:return f=T.sent,h=f.success,Z=f.result,h&&Z&&Z.enabled?(a(Z.enabled),A(Z.provider),n.setFieldsValue(c()({},Z))):n.setFieldsValue({provider:C}),t(!1),T.abrupt("return");case 11:a(!1);case 12:case"end":return T.stop()}},r)})),[E]),(0,e.jsx)(R.Z,{spinning:I,children:(0,e.jsx)(J.Z,{title:"\u884C\u4E3A\u9A8C\u8BC1\u7801",headerBordered:!0,bordered:!1,collapsed:!m,style:{marginBottom:"24px"},extra:(0,e.jsx)(ie.Z,{noStyle:!0,fieldProps:{checked:m,onChange:function(){var r=g()(l()().mark(function h(Z){return l()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:Z?a(Z):Ye({title:"\u8B66\u544A",icon:(0,e.jsx)(We.Z,{}),content:"\u5173\u95ED\u6B64\u529F\u80FD\u5C06\u65E0\u6CD5\u4F7F\u7528\u884C\u4E3A\u9A8C\u8BC1\u7801\u9A8C\u8BC1\uFF0C\u8BF7\u786E\u8BA4\u662F\u5426\u5173\u95ED\u3002",okText:"\u786E\u5B9A",okType:"danger",cancelText:"\u53D6\u6D88",centered:!0,onOk:function(){var S=g()(l()().mark(function k(){var Ze,Se;return l()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return t(!0),H.next=3,(0,w.$g)().finally(function(){t(!1)});case 3:if(Ze=H.sent,Se=Ze.success,!Se){H.next=12;break}return a(Z),W.ZP.success("\u64CD\u4F5C\u6210\u529F"),A(ce),n.resetFields(),n.setFieldsValue({provider:ce}),H.abrupt("return");case 12:case"end":return H.stop()}},k)}));function ye(){return S.apply(this,arguments)}return ye}(),onCancel:function(){}});case 1:case"end":return T.stop()}},h)}));function f(h){return r.apply(this,arguments)}return f}()}}),children:(0,e.jsx)(z.W,{children:(0,e.jsxs)($.A,c()(c()({form:n,scrollToFirstError:!0,layout:"horizontal",initialValues:{provider:"aliyun"}},ke),{},{labelAlign:"right",onReset:function(){n.resetFields(),n.setFieldsValue({provider:C})},submitter:{render:function(f,h){return(0,e.jsx)(v.Z.Item,c()(c()({},He),{},{children:(0,e.jsx)(Be.Z,{children:h})}))},submitButtonProps:{style:{display:m?"":"none"}},resetButtonProps:{style:{display:m?"":"none"}}},onFinish:function(){var r=g()(l()().mark(function f(h){var Z,N;return l()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,(0,w.oE)({provider:h.provider,config:c()(c()({},h.config),{},{provider:h.provider})});case 2:if(Z=S.sent,N=Z.success,!N){S.next=7;break}return W.ZP.success("\u4FDD\u5B58\u6210\u529F"),S.abrupt("return",Promise.resolve(!0));case 7:return S.abrupt("return",Promise.reject());case 8:case"end":return S.stop()}},f)}));return function(f){return r.apply(this,arguments)}}(),children:[(0,e.jsx)(ge.Z,{name:"provider",label:"\u670D\u52A1\u63D0\u4F9B\u5546",rules:[{required:!0}],fieldProps:{onChange:function(){var r=g()(l()().mark(function h(Z){var N,T,S;return l()().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return t(!0),A(Z),n.resetFields(),n.setFieldsValue({provider:Z}),k.next=6,(0,w.mg)();case 6:N=k.sent,T=N.success,S=N.result,T&&S&&S.enabled&&Z===S.provider&&(a(S.enabled),n.setFieldsValue(c()({},S))),t(!1);case 11:case"end":return k.stop()}},h)}));function f(h){return r.apply(this,arguments)}return f}()},options:[{value:L.n6.GEE_TEST,label:"\u6781\u9A8C\uFF08\u6682\u672A\u5B9E\u73B0\uFF0C\u6B22\u8FCEPR\uFF09",disabled:!0},{value:L.n6.ALIYUN,label:"\u963F\u91CC\u4E91\uFF08\u6682\u672A\u5B9E\u73B0\uFF0C\u6B22\u8FCEPR\uFF09",disabled:!0},{value:L.n6.TENCENT,label:"\u817E\u8BAF\u4E91\uFF08\u6682\u672A\u5B9E\u73B0\uFF0C\u6B22\u8FCEPR\uFF09",disabled:!0},{value:L.n6.RECAPTCHA,label:"reCaptcha\uFF08\u6682\u672A\u5B9E\u73B0\uFF0C\u6B22\u8FCEPR\uFF09",disabled:!0},{value:L.n6.HCAPTCHA,label:"hCaptcha\uFF08\u6682\u672A\u5B9E\u73B0\uFF0C\u6B22\u8FCEPR\uFF09",disabled:!0}]}),C===L.n6.ALIYUN&&(0,e.jsx)(Me,{}),C===L.n6.TENCENT&&(0,e.jsx)(Ke,{}),C===L.n6.GEE_TEST&&(0,e.jsx)(oe,{}),C===L.n6.RECAPTCHA&&(0,e.jsx)(oe,{}),C===L.n6.HCAPTCHA&&(0,e.jsx)(oe,{})]}))})})})},ze=s(63434),Je=s(38755),Qe=pe.ZP.ConfigContext;function qe(i){var F=(0,B.useContext)(Qe),o=F.getPrefixCls,n=".".concat(o()),E=(0,Je.l)(function(){return ae()({},".".concat(i),ae()({marginBottom:"24px"},".ant-pro-field-checkbox-vertical ".concat(n,"-checkbox-group-item"),{height:"30px"}))});return{className:E}}var Ae="setting-mfa",_e={labelCol:{xs:{span:24},sm:{span:7},md:{span:6}},wrapperCol:{xs:{span:24},sm:{span:13},md:{span:14}}},es={wrapperCol:{xs:{span:24,offset:0},sm:{span:17,offset:7},md:{span:18,offset:6}}},ss=function(i){var F=v.Z.useForm(),o=x()(F,1),n=o[0],E=(0,B.useState)(!1),P=x()(E,2),D=P[0],C=P[1],A=i.visible,O=qe(Ae),y=O.className;return(0,ee.Z)(g()(l()().mark(function I(){var t,p,d;return l()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!A){a.next=11;break}return n.resetFields(),C(!0),a.next=5,(0,w.Vr)();case 5:return t=a.sent,p=t.success,d=t.result,p&&d&&n.setFieldsValue(c()({},d)),C(!1),a.abrupt("return");case 11:case"end":return a.stop()}},I)})),[A]),(0,e.jsx)("div",{className:y,children:(0,e.jsxs)(J.Z,{title:"\u591A\u56E0\u7D20\u8BA4\u8BC1",headerBordered:!0,bordered:!1,className:Fe()("".concat(Ae)),children:[(0,e.jsx)(fe.Z,{style:{backgroundColor:"#f1f1f2",border:"1px solid #f1f1f2"},message:"\u652F\u6301\u5728\u8D26\u5BC6\u767B\u5F55\u540E\uFF0C\u5F00\u542F\u4E8C\u6B21\u8BA4\u8BC1\u3002"}),(0,e.jsx)("br",{}),(0,e.jsx)(z.W,{children:(0,e.jsx)($.A,c()(c()({form:n,scrollToFirstError:!0,layout:"horizontal",labelAlign:"right"},_e),{},{onReset:function(){n.resetFields()},submitter:{render:function(t,p){return(0,e.jsx)(v.Z.Item,c()(c()({},es),{},{children:(0,e.jsx)(Be.Z,{children:p})}))},resetButtonProps:{style:{display:"none"}}},onFinish:function(){var I=g()(l()().mark(function t(p){var d,m;return l()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return C(!0),r.next=3,(0,w.nW)(c()({},p)).finally(function(){C(!1)});case 3:d=r.sent,m=d.success,m&&(W.ZP.success("\u4FDD\u5B58\u6210\u529F"),p.mode==="none"&&n.resetFields(["manner"]));case 6:case"end":return r.stop()}},t)}));return function(t){return I.apply(this,arguments)}}(),children:(0,e.jsx)(R.Z,{spinning:D,children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Ce.Z.Group,{label:"MFA\u6A21\u5F0F",name:"mode",initialValue:"none",options:[{label:"\u5173\u95ED",value:"none"},{label:"\u5E38\u5F00\u6A21\u5F0F",value:"always"},{label:"\u667A\u80FD\u6A21\u5F0F\uFF08\u6682\u4E0D\u652F\u6301\uFF09",value:"smart",disabled:!0}],extra:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{children:"\u5E38\u5F00\u6A21\u5F0F\u4E0B\u6BCF\u6B21\u767B\u5F55\u90FD\u9700\u8981\u4E8C\u6B21\u8BA4\u8BC1\u3002"}),(0,e.jsx)("br",{}),(0,e.jsx)("span",{children:"\u667A\u80FD\u6A21\u5F0F\u4E0B\u4E0D\u5FC5\u6BCF\u6B21\u767B\u5F55\u90FD\u4E8C\u6B21\u8BA4\u8BC1\uFF0C\u7CFB\u7EDF\u4F1A\u7075\u6D3B\u8FDB\u884C\u5224\u65AD\u3002"})]})}),(0,e.jsx)(ne.Z,{name:["mode"],children:function(t){var p=t.mode;return p&&p!=="none"&&(0,e.jsx)(ze.Z.Group,{label:"\u4E8C\u6B21\u8BA4\u8BC1\u65B9\u5F0F",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4E8C\u6B21\u8BA4\u8BC1\u65B9\u5F0F"}],name:"factors",layout:"vertical",options:[{label:"\u77ED\u4FE1\u9A8C\u8BC1\u7801",value:"sms_otp"},{label:"\u90AE\u4EF6\u9A8C\u8BC1\u7801",value:"email_otp"},{label:"\u8F6F\u4EF6\u52A8\u6001\u7801",value:"app_totp"}]})}})]})})}))})]})})},us=ss,b;(function(i){i.BASIC_SETTING="basic_setting",i.PASSWORD_POLICY="password_policy",i.MFA="mfa",i.CAPTCHA="captcha"})(b||(b={}));var de=s(67038),ns=s(98971),as=function(){var i=(0,B.useState)(),F=x()(i,2),o=F[0],n=F[1],E=(0,ns.useLocation)();return(0,ee.Z)(g()(l()().mark(function P(){var D,C,A;return l()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:if(D=(0,de.parse)(E.search),C=D,A=C.tab,!(!A||!(A.toUpperCase()in b))){y.next=6;break}return n(b.BASIC_SETTING),Ee.m.replace({pathname:E.pathname,search:(0,de.stringify)({tab:b.BASIC_SETTING})}),y.abrupt("return");case 6:n(A);case 7:case"end":return y.stop()}},P)})),[o]),(0,e.jsxs)(V._z,{content:"\u7CFB\u7EDF\u5168\u5C40\u5B89\u5168\u914D\u7F6E\u3001\u5982\u5BC6\u7801\u7B56\u7565\u3001\u4F1A\u8BDD\u7B56\u7565\u3002 \u5728\u5BC6\u7801\u7B56\u7565\u4E2D\u53EF\u4EE5\u8BBE\u7F6E\u76F8\u5E94\u7684\u5BC6\u7801\u590D\u6742\u5EA6\u3001\u76F8\u5E94\u7684\u9501\u5B9A\u89E3\u9501\u7B56\u7565\uFF0C\u8FD8\u53EF\u4EE5\u8BBE\u7F6E\u662F\u5426\u5141\u8BB8\u4E0E\u5386\u53F2\u5BC6\u7801\u91CD\u590D\u7B49\u9AD8\u7EA7\u7B56\u7565\u3002\u540C\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u201C\u5F00\u542F\u5F31\u5BC6\u7801\u5B57\u5178\u5E93\u201D\u6765\u68C0\u67E5\u5BC6\u7801\u7684\u5B89\u5168\u5F3A\u5EA6\u3002",tabActiveKey:o,onTabChange:function(D){n(D),Ee.m.replace({pathname:E.pathname,search:(0,de.stringify)({tab:D})})},tabList:[{tab:"\u57FA\u7840\u8BBE\u7F6E",key:b.BASIC_SETTING},{tab:"\u591A\u56E0\u7D20\u8BA4\u8BC1",key:b.MFA},{tab:"\u884C\u4E3A\u9A8C\u8BC1\u7801",key:b.CAPTCHA},{tab:"\u5BC6\u7801\u7B56\u7565",key:b.PASSWORD_POLICY}],children:[o===b.BASIC_SETTING&&(0,e.jsx)(re,{visible:o===b.BASIC_SETTING}),o===b.PASSWORD_POLICY&&(0,e.jsx)(Oe,{visible:o===b.PASSWORD_POLICY}),o===b.CAPTCHA&&(0,e.jsx)(Xe,{visible:o===b.CAPTCHA}),o===b.MFA&&(0,e.jsx)(us,{visible:o===b.MFA})]})}}}]);
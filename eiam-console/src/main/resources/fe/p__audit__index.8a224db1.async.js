/*
 * eiam-console - Employee Identity and Access Management Program
 * Copyright © 2020-2022 TopIAM (support@topiam.cn)
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
"use strict";(self.webpackChunktopiam_console=self.webpackChunktopiam_console||[]).push([[8271],{70147:function(te,Y,a){a.d(Y,{F:function(){return C},N:function(){return E}});var C;(function(O){O.admin="admin",O.user="user"})(C||(C={}));var E;(function(O){O.success="success",O.fail="fail"})(E||(E={}))},36598:function(te,Y,a){a.r(Y),a.d(Y,{default:function(){return be}});var C=a(12741),E=a.n(C),O=a(14459),S=a(70147),q=a(97983),Z=a.n(q),g=a(40794),o=a.n(g),I=a(11281),F=a.n(I),c=a(25191),B=a(98971);function A(T,y,x){return U.apply(this,arguments)}function U(){return U=o()(Z()().mark(function T(y,x,m){return Z()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.abrupt("return",(0,B.request)("/api/audit/list",{params:F()(F()(F()({},y),{},{startEventTime:y.eventTime&&y.eventTime[0],endEventTime:y.eventTime&&y.eventTime[1]},(0,c.YE)(x)),(0,c.oH)(m))}).then(function(N){var M,h,t,i,p={data:N!=null&&(M=N.result)!==null&&M!==void 0&&M.list?N==null||(h=N.result)===null||h===void 0?void 0:h.list:[],success:N==null?void 0:N.success,total:N!=null&&(t=N.result)!==null&&t!==void 0&&t.pagination?N==null||(i=N.result)===null||i===void 0?void 0:i.pagination.total:0};return Promise.resolve(p)}));case 1:case"end":return D.stop()}},T)})),U.apply(this,arguments)}function d(T){return b.apply(this,arguments)}function b(){return b=o()(Z()().mark(function T(y){return Z()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.abrupt("return",(0,B.request)("/api/audit/types/".concat(y)));case 1:case"end":return m.stop()}},T)})),b.apply(this,arguments)}var V=a(39398),ae=a(1413),$=a(67294),ge={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"}}]},name:"caret-right",theme:"outlined"},xe=ge,Ce=a(84089),re=function(y,x){return $.createElement(Ce.Z,(0,ae.Z)((0,ae.Z)({},y),{},{ref:x,icon:xe}))};re.displayName="CaretRightOutlined";var se=$.forwardRef(re),le=a(1914),oe=a(2093),G=a(34041),ce=a(98033),u=a(76521),n=a(26713),f=a(51904),l=a(27484),v=a.n(l),z=a(17057),L=a(95462),R=a(30381),X=a.n(R),w=a(12812),j=a.n(w),Q=a(38755);function J(T){var y=".".concat(T),x=(0,Q.l)(function(){var m;return j()({},"".concat(y),(m={display:"flex",paddingLeft:"10px"},j()(m,"&-line-user",{flex:1,marginRight:"24px"}),j()(m,"&-line-event",{flex:1,marginRight:"24px"}),j()(m,"&-line-geo",{flex:1,marginRight:"24px"}),j()(m,"&-label",{display:"block",minWidth:"80px",color:"#878a95",fontSize:"14px"}),j()(m,"&-content",{display:"block",flexWrap:"wrap",overflowX:"auto",color:"#293350",fontSize:"14px"}),j()(m,"&-each-line",{display:"flex",marginBottom:"14px"}),j()(m,"&-target",{flex:1}),m))});return{className:x}}var _=a(94184),r=a.n(_),e=a(85893),s="audit-expanded-card",ee=z.Z.Text,ie={user:"\u7528\u6237",admin:"\u7BA1\u7406\u5458"},k=function(y){var x,m,P,D,N,M,h,t=y.record,i=J(s),p=i.className,K=function(H){return!H||H==="null"||H==="-"||H==="undefined"?"-":H};return(0,e.jsx)("div",{className:p,children:(0,e.jsxs)("div",{className:r()("".concat(s)),children:[(0,e.jsxs)("div",{className:r()("".concat(s,"-line-user")),children:[(0,e.jsxs)("div",{className:r()("".concat(s,"-each-line")),children:[(0,e.jsx)("span",{className:r()("".concat(s,"-label")),children:"\u64CD\u4F5C\u8005 ID"}),(0,e.jsx)("span",{className:r()("".concat(s,"-content")),children:(0,e.jsx)(L.Z,{style:{marginBottom:0},className:r()("".concat(s,"-content")),copyable:!0,children:K(t.userId)})})]}),(0,e.jsxs)("div",{className:r()("".concat(s,"-each-line")),children:[(0,e.jsx)("span",{className:r()("".concat(s,"-label")),children:"\u64CD\u4F5C\u8005\u540D\u79F0"}),(0,e.jsx)("span",{className:r()("".concat(s,"-content")),children:K(t.username)})]}),(0,e.jsxs)("div",{className:r()("".concat(s,"-each-line")),children:[(0,e.jsx)("span",{className:r()("".concat(s,"-label")),children:"\u64CD\u4F5C\u8005\u7C7B\u578B"}),(0,e.jsx)("span",{className:r()("".concat(s,"-content")),children:ie[t.userType]})]})]}),(0,e.jsxs)("div",{className:r()("".concat(s,"-line-geo")),children:[(0,e.jsxs)("div",{className:r()("".concat(s,"-each-line")),children:[(0,e.jsx)("span",{className:r()("".concat(s,"-label")),children:"\u8BBE\u5907\u7C7B\u578B"}),(0,e.jsx)("span",{className:r()("".concat(s,"-content")),children:t.userAgent&&((x=t.userAgent)===null||x===void 0?void 0:x.deviceType)||"-"})]}),(0,e.jsxs)("div",{className:r()("".concat(s,"-each-line")),children:[(0,e.jsx)("span",{className:r()("".concat(s,"-label")),children:"\u64CD\u4F5C\u7CFB\u7EDF"}),(0,e.jsx)("span",{className:r()("".concat(s,"-content")),children:t.userAgent&&((m=t.userAgent)===null||m===void 0?void 0:m.platform)||"-"})]}),(0,e.jsxs)("div",{className:r()("".concat(s,"-each-line")),children:[(0,e.jsx)("span",{className:r()("".concat(s,"-label")),children:"\u5BA2\u6237\u7AEFIP"}),(0,e.jsx)("span",{className:r()("".concat(s,"-content")),children:((P=t.geoLocation)===null||P===void 0?void 0:P.ip)||"-"})]}),(0,e.jsxs)("div",{className:r()("".concat(s,"-each-line")),children:[(0,e.jsx)("span",{className:r()("".concat(s,"-label")),children:"\u6D4F\u89C8\u5668"}),(0,e.jsx)("span",{className:r()("".concat(s,"-content")),children:t.userAgent&&((D=t.userAgent)===null||D===void 0?void 0:D.browser)||"-"})]}),(0,e.jsxs)("div",{className:r()("".concat(s,"-each-line")),children:[(0,e.jsx)("span",{className:r()("".concat(s,"-label")),children:"\u56FD\u5BB6"}),(0,e.jsx)("span",{className:r()("".concat(s,"-content")),children:t.geoLocation&&((N=t.geoLocation)===null||N===void 0?void 0:N.countryName)||"-"})]}),(0,e.jsxs)("div",{className:r()("".concat(s,"-each-line")),children:[(0,e.jsx)("span",{className:r()("".concat(s,"-label")),children:"\u7701\u4EFD"}),(0,e.jsx)("span",{className:r()("".concat(s,"-content")),children:t.geoLocation&&((M=t.geoLocation)===null||M===void 0?void 0:M.provinceName)||"-"})]}),(0,e.jsxs)("div",{className:r()("".concat(s,"-each-line")),children:[(0,e.jsx)("span",{className:r()("".concat(s,"-label")),children:"\u57CE\u5E02"}),(0,e.jsx)("span",{className:r()("".concat(s,"-content")),children:t.geoLocation&&((h=t.geoLocation)===null||h===void 0?void 0:h.cityName)||"-"})]})]}),(0,e.jsxs)("div",{className:r()("".concat(s,"-line-event")),children:[(0,e.jsxs)("div",{className:r()("".concat(s,"-each-line")),children:[(0,e.jsx)("span",{className:r()("".concat(s,"-label")),children:"\u4E8B\u4EF6\u65F6\u95F4"}),(0,e.jsx)("span",{className:r()("".concat(s,"-content")),children:(0,e.jsx)(ee,{style:{maxWidth:"100%"},ellipsis:!0,children:X()(t.eventTime).format("YYYY.MM.DD HH:mm:ss")})})]}),(0,e.jsxs)("div",{className:r()("".concat(s,"-each-line")),children:[(0,e.jsx)("span",{className:r()("".concat(s,"-label")),children:"\u4E8B\u4EF6\u7C7B\u578B"}),(0,e.jsx)("span",{className:r()("".concat(s,"-content")),children:t.eventType})]}),(0,e.jsxs)("div",{className:r()("".concat(s,"-each-line")),children:[(0,e.jsx)("span",{className:r()("".concat(s,"-label")),children:"\u4E8B\u4EF6\u72B6\u6001"}),(0,e.jsxs)("span",{className:r()("".concat(s,"-content")),children:[t.eventStatus===S.N.success&&(0,e.jsx)("span",{style:{color:"#87d068"},children:"\u6210\u529F"}),t.eventStatus===S.N.fail&&(0,e.jsx)("span",{style:{color:"#e54545"},children:"\u5931\u8D25"})]})]})]}),t.targets&&(0,e.jsx)("div",{className:r()("".concat(s,"-line-target")),children:(0,e.jsxs)("div",{className:r()("".concat(s,"-each-line")),children:[(0,e.jsx)("span",{className:r()("".concat(s,"-label")),children:"\u64CD\u4F5C\u5BF9\u8C61"}),(0,e.jsx)("span",{className:r()("".concat(s,"-content")),children:(0,e.jsx)("pre",{children:JSON.stringify(t.targets,null,3)},t.id)})]})})]})})},ye=a(46986),ue=ye.ZP.ConfigContext;function ne(T){var y=".".concat(T),x=(0,$.useContext)(ue),m=x.getPrefixCls,P=".".concat(m()),D=(0,Q.l)(function(){return j()({},"".concat(y),j()({},"".concat(P,"-table-expanded-row-fixed"),{width:"auto !important"}))});return{className:D}}var de="audit-admin",ve=G.Z.OptGroup,W=G.Z.Option,je=ce.Z.RangePicker,fe=function(){var T=(0,$.useRef)(),y=(0,$.useState)(),x=E()(y,2),m=x[0],P=x[1],D=ne(de),N=D.className;(0,oe.Z)(o()(Z()().mark(function h(){return Z()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:d(S.F.admin).then(function(p){p.success&&P(p.result)});case 1:case"end":return i.stop()}},h)})),[]);var M=[{title:"\u4E8B\u4EF6\u7C7B\u578B",dataIndex:"eventType",fixed:"left",renderFormItem:function(){return(0,e.jsx)(G.Z,{placeholder:"\u8BF7\u9009\u62E9\u4E8B\u4EF6\u7C7B\u578B",showSearch:!0,allowClear:!0,mode:"multiple",maxTagCount:"responsive",children:m&&m.map(function(t){return(0,e.jsx)(ve,{label:t.name,children:t.types&&t.types.map(function(i){return(0,e.jsx)(W,{value:i.code,children:i.name},i.code)})},t.code)})},"select")}},{title:"\u64CD\u4F5C\u8005",ellipsis:!0,dataIndex:"username",fieldProps:{placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}},{title:"\u5BA2\u6237\u7AEFIP",dataIndex:"geoLocation",ellipsis:!0,valueType:"text",hideInSearch:!0,render:function(t,i){var p=i.geoLocation;return p?(0,e.jsx)(u.Z,{status:"success",text:p.ip}):(0,e.jsx)(u.Z,{status:"error",text:"\u672A\u77E5"})}},{title:"\u64CD\u4F5C\u7CFB\u7EDF",ellipsis:!0,dataIndex:"platform",render:function(t,i){var p=i.userAgent;return p.platform}},{title:"\u6D4F\u89C8\u5668",ellipsis:!0,dataIndex:"browser",render:function(t,i){var p=i.userAgent;return p.browser}},{title:"\u4E8B\u4EF6\u65F6\u95F4",sorter:!0,defaultSortOrder:"descend",ellipsis:!0,align:"center",dataIndex:"eventTime",valueType:"dateTime",renderFormItem:function(){return(0,e.jsx)(je,{showTime:{hideDisabledOptions:!0,defaultValue:[v()("00:00:00","HH:mm:ss"),v()("11:59:59","HH:mm:ss")]},placeholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"],format:"YYYY-MM-DD HH:mm:ss"})}},{title:"\u4E8B\u4EF6\u72B6\u6001",dataIndex:"eventStatus",hideInSearch:!0,align:"center",fixed:"right",width:100,render:function(t){return(0,e.jsxs)(n.Z,{children:[t===S.N.success&&(0,e.jsx)(f.Z,{color:"#87d068",children:"\u6210\u529F"}),t===S.N.fail&&(0,e.jsx)(f.Z,{color:"#e54545",children:"\u5931\u8D25"})]})}}];return(0,e.jsx)("div",{className:N,children:(0,e.jsx)(le.Z,{columns:M,scroll:{x:1200},pagination:{showQuickJumper:!0,defaultPageSize:10},search:{},expandable:{expandRowByClick:!0,expandedRowClassName:function(){return r()("".concat(de))},expandedRowRender:function(t,i){return(0,e.jsx)(k,{record:t,index:i,type:S.F.admin})},expandIcon:function(t){var i=t.expanded,p=t.onExpand,K=t.record;return i?(0,e.jsx)(V.Z,{onClick:function(H){return p(K,H)}}):(0,e.jsx)(se,{onClick:function(H){return p(K,H)}})}},actionRef:T,params:{userType:S.F.admin},request:A,rowKey:"id",dateFormatter:"string"})})},me="audit-user",Ne=G.Z.OptGroup,Se=G.Z.Option,he=ce.Z.RangePicker,Fe=function(){var T=(0,$.useRef)(),y=(0,$.useState)(),x=E()(y,2),m=x[0],P=x[1],D=ne(me),N=D.className;(0,oe.Z)(o()(Z()().mark(function h(){return Z()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:d(S.F.user).then(function(p){p.success&&P(p.result)});case 1:case"end":return i.stop()}},h)})),[]);var M=[{title:"\u4E8B\u4EF6\u7C7B\u578B",dataIndex:"eventType",fixed:"left",renderFormItem:function(){return(0,e.jsx)(G.Z,{placeholder:"\u8BF7\u9009\u62E9\u4E8B\u4EF6\u7C7B\u578B",showSearch:!0,allowClear:!0,mode:"multiple",maxTagCount:"responsive",children:m&&m.map(function(t){return(0,e.jsx)(Ne,{label:t.name,children:t.types&&t.types.map(function(i){return(0,e.jsx)(Se,{value:i.code,children:i.name},i.code)})},t.code)})},"select")}},{title:"\u64CD\u4F5C\u8005",ellipsis:!0,dataIndex:"username",fieldProps:{placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}},{title:"\u5BA2\u6237\u7AEFIP",dataIndex:"geoLocation",ellipsis:!0,valueType:"text",hideInSearch:!0,render:function(t,i){var p=i.geoLocation;return p?(0,e.jsx)(u.Z,{status:"success",text:p.ip}):(0,e.jsx)(u.Z,{status:"error",text:"\u672A\u77E5"})}},{title:"\u64CD\u4F5C\u7CFB\u7EDF",ellipsis:!0,dataIndex:"platform",render:function(t,i){var p=i.userAgent;return p.platform}},{title:"\u6D4F\u89C8\u5668",ellipsis:!0,dataIndex:"browser",render:function(t,i){var p=i.userAgent;return p.browser}},{title:"\u4E8B\u4EF6\u65F6\u95F4",sorter:!0,defaultSortOrder:"descend",ellipsis:!0,align:"center",dataIndex:"eventTime",valueType:"dateTime",renderFormItem:function(){return(0,e.jsx)(he,{showTime:{hideDisabledOptions:!0,defaultValue:[v()("00:00:00","HH:mm:ss"),v()("11:59:59","HH:mm:ss")]},placeholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"],format:"YYYY-MM-DD HH:mm:ss"})}},{title:"\u4E8B\u4EF6\u72B6\u6001",dataIndex:"eventStatus",hideInSearch:!0,align:"center",fixed:"right",width:100,render:function(t){return(0,e.jsxs)(n.Z,{children:[t===S.N.success&&(0,e.jsx)(f.Z,{color:"#87d068",children:"\u6210\u529F"}),t===S.N.fail&&(0,e.jsx)(f.Z,{color:"#e54545",children:"\u5931\u8D25"})]})}}];return(0,e.jsx)("div",{className:N,children:(0,e.jsx)(le.Z,{columns:M,scroll:{x:1200},pagination:{showQuickJumper:!0,defaultPageSize:10},search:{},expandable:{expandRowByClick:!0,expandedRowClassName:function(){return r()("".concat(me))},expandedRowRender:function(t,i){return(0,e.jsx)(k,{record:t,index:i,type:S.F.user})},expandIcon:function(t){var i=t.expanded,p=t.onExpand,K=t.record;return i?(0,e.jsx)(V.Z,{onClick:function(H){return p(K,H)}}):(0,e.jsx)(se,{onClick:function(H){return p(K,H)}})}},actionRef:T,params:{userType:S.F.user},request:A,rowKey:"id",dateFormatter:"string"})})},be=function(){var T=(0,$.useState)(S.F.user),y=E()(T,2),x=y[0],m=y[1];return(0,e.jsxs)(O._z,{tabActiveKey:x,onTabChange:function(D){m(D)},tabList:[{key:S.F.user,tab:"\u7528\u6237\u884C\u4E3A"},{key:S.F.admin,tab:"\u7BA1\u7406\u5458\u884C\u4E3A"}],content:"\u5BA1\u8BA1\u65E5\u5FD7\u8BB0\u5F55\u4E86\u6240\u6709\u5E73\u53F0\u7528\u6237\u8FDB\u884C\u7684\u5173\u952E\u64CD\u4F5C\uFF0C\u65E0\u8BBA\u662F\u7BA1\u7406\u5458\u8FDB\u884C\u7684\u6279\u91CF\u64CD\u4F5C\u3001\u8FD8\u662F\u7528\u6237\u4FA7\u8FDB\u884C\u7684\u591A\u56E0\u7D20\u8BA4\u8BC1\uFF0C\u90FD\u53EF\u4EE5\u5728\u8FD9\u91CC\u627E\u5230\u5BF9\u5E94\u7684\u8BB0\u5F55\uFF0C\u4EE5\u5BF9\u67D0\u6B21\u6539\u53D8\u63D0\u4F9B\u5145\u5206\u7684\u6EAF\u6E90\u6570\u636E\u3002",children:[x===S.F.user&&(0,e.jsx)(Fe,{}),x===S.F.admin&&(0,e.jsx)(fe,{})]})}},2093:function(te,Y,a){var C=a(67294),E=a(92770),O=function(Z,g,o,I){function F(c){return c instanceof o?c:new o(function(B){B(c)})}return new(o||(o=Promise))(function(c,B){function A(b){try{d(I.next(b))}catch(V){B(V)}}function U(b){try{d(I.throw(b))}catch(V){B(V)}}function d(b){b.done?c(b.value):F(b.value).then(A,U)}d((I=I.apply(Z,g||[])).next())})},S=function(Z,g){var o={label:0,sent:function(){if(c[0]&1)throw c[1];return c[1]},trys:[],ops:[]},I,F,c,B;return B={next:A(0),throw:A(1),return:A(2)},typeof Symbol=="function"&&(B[Symbol.iterator]=function(){return this}),B;function A(d){return function(b){return U([d,b])}}function U(d){if(I)throw new TypeError("Generator is already executing.");for(;o;)try{if(I=1,F&&(c=d[0]&2?F.return:d[0]?F.throw||((c=F.return)&&c.call(F),0):F.next)&&!(c=c.call(F,d[1])).done)return c;switch(F=0,c&&(d=[d[0]&2,c.value]),d[0]){case 0:case 1:c=d;break;case 4:return o.label++,{value:d[1],done:!1};case 5:o.label++,F=d[1],d=[0];continue;case 7:d=o.ops.pop(),o.trys.pop();continue;default:if(c=o.trys,!(c=c.length>0&&c[c.length-1])&&(d[0]===6||d[0]===2)){o=0;continue}if(d[0]===3&&(!c||d[1]>c[0]&&d[1]<c[3])){o.label=d[1];break}if(d[0]===6&&o.label<c[1]){o.label=c[1],c=d;break}if(c&&o.label<c[2]){o.label=c[2],o.ops.push(d);break}c[2]&&o.ops.pop(),o.trys.pop();continue}d=g.call(Z,o)}catch(b){d=[6,b],F=0}finally{I=c=0}if(d[0]&5)throw d[1];return{value:d[0]?d[1]:void 0,done:!0}}};function q(Z,g){function o(I){return(0,E.mf)(I[Symbol.asyncIterator])}(0,C.useEffect)(function(){var I=Z(),F=!1;function c(){return O(this,void 0,void 0,function(){var B;return S(this,function(A){switch(A.label){case 0:if(!o(I))return[3,4];A.label=1;case 1:return[4,I.next()];case 2:return B=A.sent(),B.done||F?[3,3]:[3,1];case 3:return[3,6];case 4:return[4,I];case 5:A.sent(),A.label=6;case 6:return[2]}})})}return c(),function(){F=!0}},g)}Y.Z=q},92770:function(te,Y,a){a.d(Y,{mf:function(){return E}});var C=function(o){return o!==null&&typeof o=="object"},E=function(o){return typeof o=="function"},O=function(o){return typeof o=="string"},S=function(o){return typeof o=="boolean"},q=function(o){return typeof o=="number"},Z=function(o){return typeof o=="undefined"}},51904:function(te,Y,a){a.d(Y,{Z:function(){return ce}});var C=a(4942),E=a(87462),O=a(97685),S=a(97937),q=a(94184),Z=a.n(q),g=a(67294),o=a(53124),I=a(98787),F=a(28704),c=a(8796),B=a(67968),A=a(45503);function U(u){if(typeof u!="string")return u;var n=u.charAt(0).toUpperCase()+u.slice(1);return n}var d=a(14747),b=function(n,f,l){var v=U(l);return(0,C.Z)({},n.componentCls+"-"+f,{color:n["color"+l],background:n["color"+v+"Bg"],borderColor:n["color"+v+"Border"]})},V=function(n){return c.i.reduce(function(f,l){var v,z=n[l+"-1"],L=n[l+"-3"],R=n[l+"-6"],X=n[l+"-7"];return(0,E.Z)((0,E.Z)({},f),(v={},(0,C.Z)(v,n.componentCls+"-"+l,{color:X,background:z,borderColor:L}),(0,C.Z)(v,n.componentCls+"-"+l+"-inverse",{color:n.colorTextLightSolid,background:R,borderColor:R}),v))},{})},ae=function(n){var f,l=n.paddingXXS,v=n.lineWidth,z=n.tagPaddingHorizontal,L=z-v,R=l-v;return(0,C.Z)({},n.componentCls,(0,E.Z)((0,E.Z)({},(0,d.Wf)(n)),(f={display:"inline-block",height:"auto",marginInlineEnd:n.marginXS,paddingInline:L,fontSize:n.tagFontSize,lineHeight:n.tagLineHeight+"px",whiteSpace:"nowrap",background:n.tagDefaultBg,border:n.lineWidth+"px "+n.lineType+" "+n.colorBorder,borderRadius:n.borderRadiusSM,opacity:1,transition:"all "+n.motionDurationMid,textAlign:"start","&&-rtl":{direction:"rtl"},"&, a, a:hover":{color:n.tagDefaultColor}},(0,C.Z)(f,n.componentCls+"-close-icon",{marginInlineStart:R,color:n.colorTextDescription,fontSize:n.tagIconSize,cursor:"pointer",transition:"all "+n.motionDurationMid,"&:hover":{color:n.colorTextHeading}}),(0,C.Z)(f,"&&-has-color",(0,C.Z)({borderColor:"transparent"},"&, a, a:hover, "+n.iconCls+"-close, "+n.iconCls+"-close:hover",{color:n.colorTextLightSolid})),(0,C.Z)(f,"&-checkable",{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer","&:not(&-checked):hover":{color:n.colorPrimary,backgroundColor:n.colorFillSecondary},"&:active, &-checked":{color:n.colorTextLightSolid},"&-checked":{backgroundColor:n.colorPrimary,"&:hover":{backgroundColor:n.colorPrimaryHover}},"&:active":{backgroundColor:n.colorPrimaryActive}}),(0,C.Z)(f,"&-hidden",{display:"none"}),(0,C.Z)(f,"> "+n.iconCls+" + span, > span + "+n.iconCls,{marginInlineStart:L}),f)))},$=(0,B.Z)("Tag",function(u){var n=u.fontSize,f=u.lineHeight,l=u.lineWidth,v=u.fontSizeIcon,z=Math.round(n*f),L=u.fontSizeSM,R=z-l*2,X=u.colorFillAlter,w=u.colorText,j=(0,A.TS)(u,{tagFontSize:L,tagLineHeight:R,tagDefaultBg:X,tagDefaultColor:w,tagIconSize:v-2*l,tagPaddingHorizontal:8});return[ae(j),V(j),b(j,"success","Success"),b(j,"processing","Info"),b(j,"error","Error"),b(j,"warning","Warning")]}),ge=function(u,n){var f={};for(var l in u)Object.prototype.hasOwnProperty.call(u,l)&&n.indexOf(l)<0&&(f[l]=u[l]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function")for(var v=0,l=Object.getOwnPropertySymbols(u);v<l.length;v++)n.indexOf(l[v])<0&&Object.prototype.propertyIsEnumerable.call(u,l[v])&&(f[l[v]]=u[l[v]]);return f},xe=function(n){var f,l=n.prefixCls,v=n.className,z=n.checked,L=n.onChange,R=n.onClick,X=ge(n,["prefixCls","className","checked","onChange","onClick"]),w=g.useContext(o.E_),j=w.getPrefixCls,Q=function(k){L==null||L(!z),R==null||R(k)},J=j("tag",l),_=$(J),r=(0,O.Z)(_,2),e=r[0],s=r[1],ee=Z()(J,(f={},(0,C.Z)(f,J+"-checkable",!0),(0,C.Z)(f,J+"-checkable-checked",z),f),v,s);return e(g.createElement("span",(0,E.Z)({},X,{className:ee,onClick:Q})))},Ce=xe,re=function(u,n){var f={};for(var l in u)Object.prototype.hasOwnProperty.call(u,l)&&n.indexOf(l)<0&&(f[l]=u[l]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function")for(var v=0,l=Object.getOwnPropertySymbols(u);v<l.length;v++)n.indexOf(l[v])<0&&Object.prototype.propertyIsEnumerable.call(u,l[v])&&(f[l[v]]=u[l[v]]);return f},se=new RegExp("^("+I.Y.join("|")+")(-inverse)?$"),le=new RegExp("^("+I.E.join("|")+")$"),oe=function(n,f){var l,v=n.prefixCls,z=n.className,L=n.style,R=n.children,X=n.icon,w=n.color,j=n.onClose,Q=n.closeIcon,J=n.closable,_=J===void 0?!1:J,r=re(n,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),e=g.useContext(o.E_),s=e.getPrefixCls,ee=e.direction,ie=g.useState(!0),k=(0,O.Z)(ie,2),ye=k[0],ue=k[1];g.useEffect(function(){"visible"in r&&ue(r.visible)},[r.visible]);var ne=function(){return w?se.test(w)||le.test(w):!1},de=(0,E.Z)({backgroundColor:w&&!ne()?w:void 0},L),ve=ne(),W=s("tag",v),je=$(W),fe=(0,O.Z)(je,2),me=fe[0],Ne=fe[1],Se=Z()(W,(l={},(0,C.Z)(l,W+"-"+w,ve),(0,C.Z)(l,W+"-has-color",w&&!ve),(0,C.Z)(l,W+"-hidden",!ye),(0,C.Z)(l,W+"-rtl",ee==="rtl"),l),z,Ne),he=function(P){P.stopPropagation(),j==null||j(P),!P.defaultPrevented&&ue(!1)},Fe=function(){return _?Q?g.createElement("span",{className:W+"-close-icon",onClick:he},Q):g.createElement(S.Z,{className:W+"-close-icon",onClick:he}):null},be="onClick"in r||R&&R.type==="a",T=X||null,y=T?g.createElement(g.Fragment,null,T,g.createElement("span",null,R)):R,x=g.createElement("span",(0,E.Z)({},r,{ref:f,className:Se,style:de}),y,Fe());return me(be?g.createElement(F.Z,null,x):x)},G=g.forwardRef(oe);G.CheckableTag=Ce;var ce=G}}]);

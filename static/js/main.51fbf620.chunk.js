(this.webpackJsonpfpb_search_page=this.webpackJsonpfpb_search_page||[]).push([[0],{145:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(70),s=n.n(r),o=(n(86),n(40)),i=n(3),l=n(6),u=n(10),h=n(29),d=n.n(h),b=n(30),j=n.n(b),g=n(76),f=n(157),m=n(33),O=n.n(m),p=n(1);var x=function(e){var t,n=e.changeParameter,c=e.data,r=e.langCode,s=Object(a.useState)([]),o=Object(u.a)(s,2),i=o[0],l=o[1],h=Object(a.useState)(r),d=Object(u.a)(h,2),b=d[0],j=d[1],g=Object(a.useState)(!1),f=Object(u.a)(g,2),m=f[0],x=f[1],k=function(e){n("lang.code",e.target.value),j(e.target.value)};Object(a.useEffect)((function(){var e=O.a.parse(document.location.search);e.lang?"langs"===e.lang||"subjects"===e.lang?(n("lang.code","en"),j("en")):(n("lang.code",e.lang),j(e.lang)):(n("lang.code",""),j(""))}),[]),Object(a.useEffect)((function(){if(c){var e=[{code:"en",name:"English"}];c.children[0].children.forEach((function(t){"string"===typeof t.language.name&&t.language.name.length>0&&"en"!==t.language.code&&e.push(t.language)})),e.sort((function(e,t){return e.name>t.name})),l(e)}}),[c]),t=i&&i.map((function(e){return function(e){return Object(p.jsx)("div",{children:Object(p.jsxs)("label",{children:[Object(p.jsx)("input",{type:"radio",className:"lang",value:e.code,onChange:k,checked:e.code===b},e.code),e.name]})})}(e)}));var v=Object(p.jsxs)("form",{className:"filters",children:[Object(p.jsxs)("label",{children:[Object(p.jsx)("input",{type:"radio",className:"sect-select",value:"",onChange:k,checked:""===b},"all"),"All Languages"]}),t]});return Object(p.jsxs)("div",{className:"langFilters",children:[Object(p.jsxs)("div",{className:"filterHeader",children:[Object(p.jsx)("h3",{children:"Filter by Language"}),Object(p.jsx)("button",{onClick:function(){return x(!m)},children:m?"-":"+"})]}),m?v:""]})};var k=function(e){return Object(a.useEffect)((function(){document.getElementById("searchBar").value=e.defaultTerm}),[]),Object(p.jsx)("form",{onSubmit:function(e){e.preventDefault()},name:"searchBar",className:"searchbar",children:Object(p.jsx)("input",{id:"searchBar",autoComplete:"off",type:"text",name:"searchTerm",placeholder:"Search Book or Author",className:"searchterm",onChange:function(t){e.changeParameter("searchTerm",t.target.value)}})})};var v=function(e){var t=e.data;return Object(p.jsx)("li",{className:"result",children:Object(p.jsxs)("a",{href:t.url,target:"_blank",rel:"noreferrer",children:["(",t.lang.code,") ",t.title,t.author?" by ".concat(t.author):""]})})},E=n(156),y=n(78),S=n(77);var w=function(e){var t=e.children,n=e.sect,c=e.href,r=e.id,s=Object(a.useState)(null),o=Object(u.a)(s,2),i=o[0],l=o[1],h=Object(a.useState)(null),d=Object(u.a)(h,2),b=d[0],j=d[1];return Object(a.useEffect)((function(){var e=c.split("/");2===e.length?(".."!==e[0]&&l(e[0]),j(e[1])):(j(e[0]),l("docs"===n?n:null))}),[c]),i&&b?Object(p.jsx)("a",{id:r,href:"/free-programming-books-search/?&sect=".concat(i,"&file=").concat(b),children:t}):b?Object(p.jsx)("a",{id:r,href:"/free-programming-books-search/?file=".concat(b),children:t}):Object(p.jsx)("a",{id:r,href:"/free-programming-books-search/",children:t})};var C=function(e){var t=e.file,n=e.sect,c=Object(a.useState)(null),r=Object(u.a)(c,2),s=r[0],i=r[1],l=Object(a.useState)(!0),h=Object(u.a)(l,2),b=h[0],g=h[1];return Object(a.useEffect)((function(){function e(){return(e=Object(o.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,g(!0),a=null,!n||!t){e.next=9;break}return e.next=6,j.a.get("https://raw.githubusercontent.com/EbookFoundation/free-programming-books/main/".concat(n,"/").concat(t));case 6:a=e.sent,e.next=18;break;case 9:if(n||!t){e.next=15;break}return e.next=12,j.a.get("https://raw.githubusercontent.com/EbookFoundation/free-programming-books/main/".concat(t));case 12:a=e.sent,e.next=18;break;case 15:return e.next=17,j.a.get("https://raw.githubusercontent.com/EbookFoundation/free-programming-books/main/README.md");case 17:a=e.sent;case 18:i(a.data),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(0),console.log("Couldn't get data. Please try again later");case 24:g(!1);case 25:case"end":return e.stop()}}),e,null,[[0,21]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t,n]),b?Object(p.jsx)("p",{children:"Loading..."}):s?Object(p.jsx)("section",{children:Object(p.jsx)(E.a,{children:s,remarkRehypeOptions:{allowDangerousHtml:!0},rehypePlugins:[y.a,S.a],components:{a:function(e){var t=e.className,a=e.children,c=e.href,r=e.id;return c.startsWith("http")||"#"===c.charAt(0)?Object(p.jsx)("a",{className:t,href:c,id:r,children:a}):Object(p.jsx)(w,{children:a,className:t,sect:n,href:c,id:r})}}})}):Object(p.jsx)("p",{children:"Error: Could not retrieve data."})},N=n.p+"static/media/sun.4c5a4fb0.png",T=n.p+"static/media/moon.dd634065.png",F={dark:"",light:"dark-content"},L=function(e){if(e===F.light)document.body.classList.add("dark-content"),setTimeout((function(){document.getElementsByClassName("header")[0].classList.add("dark-content")}),0);else document.body.classList.remove("dark-content"),setTimeout((function(){document.getElementsByClassName("header")[0].classList.remove("dark-content")}),0)},P=Object(a.createContext)({theme:F.dark,changeTheme:function(){}});function M(e){var t=Object(a.useState)(e.theme),n=Object(u.a)(t,2),c=n[0],r=n[1];return L(c),Object(p.jsx)(P.Provider,{value:{theme:c,changeTheme:function(e){r(e)}},children:e.children})}function B(e){for(var t=[],n=[],a=0;a<e.children.length;a++)e.children[a].children.forEach((function(e){e.sections.forEach((function(a){n.includes(a.section)||n.push(a.section),a.entries.forEach((function(n){t.push({author:n.author,title:n.title,url:n.url,lang:e.language,section:a.section})})),a.subsections.forEach((function(n){n.entries.forEach((function(c){t.push({author:c.author,title:c.title,url:c.url,lang:e.language,section:a.section,subsection:n.section})}))}))}))}));return{arr:t,sections:n}}var _=function(){var e=Object(a.useState)(void 0),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)([]),s=Object(u.a)(r,2),h=s[0],b=s[1],m=Object(a.useState)(!0),E=Object(u.a)(m,2),y=E[0],S=E[1],w=O.a.parse(document.location.search).search||"",M=Object(a.useState)({searchTerm:w,"lang.code":""}),_=Object(u.a)(M,2),H=_[0],A=_[1],D=Object(a.useState)([]),R=Object(u.a)(D,2),G=R[0],I=R[1],J=Object(f.a)(["lightMode"]),$=Object(u.a)(J,2),V=$[0],W=$[1],q=Object(a.useState)({lang:"",subject:""}),z=Object(u.a)(q,2),K=z[0],Q=z[1],U=Object(a.useState)(""),X=Object(u.a)(U,2),Y=X[0],Z=X[1],ee=null,te=function(e,t){A(Object(l.a)(Object(l.a)({},H),{},Object(i.a)({},e,t)))};return Object(a.useEffect)((function(){function e(){return(e=Object(o.a)(d.a.mark((function e(){var t,n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,Q(O.a.parse(document.location.search)),K.lang&&("langs"===K.lang||"subjects"===K.lang?te("lang.code","en"):te("lang.code",K.lang)),e.next=5,j.a.get("https://raw.githubusercontent.com/EbookFoundation/free-programming-books-search/main/fpb.json");case 5:t=e.sent,c(t.data),n=B(t.data),a=n.arr,n.sections,b(a),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),Z("Couldn't get data. Please try again later");case 14:S(!1);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}L(V.lightMode?F.lightMode:F.darkMode),function(){e.apply(this,arguments)}()}),[]),Object(a.useEffect)((function(){if(h){for(var e=new g.a(h,{useExtendedSearch:!0,findAllMatches:!0,shouldSort:!0,includeScore:!0,includeMatches:!0,threshold:.2,keys:["author","title","lang.code","section"]}),t=[],n=[],a=0,c=Object.entries(H);a<c.length;a++){var r=Object(u.a)(c[a],2),s=r[0],o=r[1];null!==o&&""!==o&&("lang.code"!==s&&"section"!==s||t.push(Object(i.a)({},s,"^".concat(o))),"searchTerm"===s&&(n.push({author:o}),n.push({title:o})))}t.push({$or:n});var l=e.search({$and:t});l=l.slice(0,40),I(l)}}),[H,h]),Y?Object(p.jsxs)("h1",{children:["Error: ",Y]}):(H.searchTerm&&0!==G.length&&(ee=G&&G.map((function(e){return Object(p.jsx)(v,{data:e.item})}))),Object(p.jsxs)("div",{className:"wrapper",children:[Object(p.jsx)(P.Consumer,{children:function(e){var t=e.changeTheme,n=V.lightMode&&"true"!==V.lightMode.toLowerCase();return t(n?F.light:F.dark),Object(p.jsx)("img",{alt:"Toggle light/dark mode",src:n?T:N,onClick:function(){W("lightMode",n),t(n?F.light:F.dark)},style:{width:"20px",height:"20px",display:"block",marginLeft:"auto"}})}}),Object(p.jsxs)("header",{className:"header",children:[Object(p.jsx)("h1",{children:Object(p.jsx)("a",{href:"/free-programming-books-search/",children:"free-programming-books"})}),Object(p.jsxs)("p",{children:[Object(p.jsx)("img",{className:"emoji",title:":books:",alt:":books:",src:"https://github.githubassets.com/images/icons/emoji/unicode/1f4da.png",height:"20",width:"20"})," ","Freely available programming books"]}),Object(p.jsx)("p",{className:"view",children:Object(p.jsxs)("a",{href:"https://github.com/EbookFoundation/free-programming-books",target:"_blank",rel:"noreferrer",children:["View the Project on GitHub ",Object(p.jsx)("small",{children:"EbookFoundation/free-programming-books"})]})}),Object(p.jsxs)("p",{children:["Does a link not work?",Object(p.jsx)("br",{}),Object(p.jsx)("a",{href:"https://github.com/EbookFoundation/free-programming-books/issues/",target:"_blank",rel:"noreferrer",children:"Report an error on GitHub"})]}),Object(p.jsx)("div",{children:y?Object(p.jsx)("p",{}):Object(p.jsxs)("div",{children:[Object(p.jsx)(k,{changeParameter:te,defaultTerm:H.searchTerm})," ",Object(p.jsx)(x,{changeParameter:te,data:n,langCode:H["lang.code"]})," "]})})]}),Object(p.jsx)("section",{className:"search-results",children:y?Object(p.jsx)("p",{children:"Loading"}):ee?Object(p.jsxs)("div",{children:[Object(p.jsx)("br",{}),Object(p.jsx)("h2",{children:"Search Results"}),Object(p.jsx)("ul",{children:ee})]}):H.searchTerm?Object(p.jsxs)("div",{children:[Object(p.jsx)("br",{}),Object(p.jsx)("h2",{children:"No results found."})]}):Object(p.jsx)(C,{file:K.file,sect:K.sect})}),Object(p.jsxs)("footer",{children:[Object(p.jsxs)("p",{children:["This project is maintained by"," ",Object(p.jsx)("a",{href:"https://github.com/EbookFoundation",target:"_blank",rel:"noreferrer",children:"EbookFoundation"})]}),Object(p.jsx)("p",{children:Object(p.jsxs)("small",{children:["Hosted on GitHub Pages \u2014 Theme by"," ",Object(p.jsx)("a",{href:"https://github.com/orderedlist",target:"_blank",rel:"noreferrer",children:"orderedlist"})]})})]})]}))},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,158)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))},A=n(155);s.a.render(Object(p.jsx)(A.a,{children:Object(p.jsx)(M,{children:Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(_,{})})})}),document.getElementById("root")),H()},86:function(e,t,n){}},[[145,1,2]]]);
//# sourceMappingURL=main.51fbf620.chunk.js.map
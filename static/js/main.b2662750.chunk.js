(this["webpackJsonpworkflow-sample"]=this["webpackJsonpworkflow-sample"]||[]).push([[0],{110:function(e,t,a){e.exports=a(139)},115:function(e,t,a){},116:function(e,t,a){},139:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(12),o=a.n(r),c=(a(115),a(116),a(61)),i=a(15),u=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,"Workflow Management PoC"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(c.b,{to:"/workflows/create"},"Workflow creation"))))},s=a(32),m=a(52),d=a(99),f=a(25),E=a(51),p=a(83),h=a(42),w=a(101),b=function(e){var t,a=e.onNodeClick,r={nodes:[{id:"node1",height:100,width:100,offsetX:200,offsetY:100,annotations:[{content:"Step 1 - Document Selection"}]},{id:"node2",height:100,width:100,offsetX:400,offsetY:300,annotations:[{content:"Step 2 - Document Review"}]}],connectors:[{id:"connector1",sourceID:"node1",targetID:"node2"}]},o=Object(n.useCallback)((function(e){if("node1"===e.id)return l.a.createElement("button",{onClick:function(){return alert("test")}},"Test")}),[]);return l.a.createElement(w.a,{id:"diagram",width:"100%",height:"550px",ref:function(e){return t=e},nodeTemplate:o,created:function(e){r.nodes.forEach((function(e){t.add(e)})),r.connectors.forEach((function(e){t.add(e)}))},click:function(e){if(e){var t=e.actualObject.properties.id;a&&a(t)}}})},g=a(166),k=a(169),v=a(167),C=a(168),O=a(95),y=a.n(O),S=a(162),x=Object(S.a)((function(e){return{sheetTitle:{padding:0,margin:"0 0 24px 24px",textAlign:"left"},drawer:{width:440,flexShrink:0},drawerPaper:{width:440},boxAlign:{textAlign:"right"}}})),j=function(e){var t=e.isOpen,a=void 0!==t&&t,n=e.title,r=e.handleClose,o=e.children,c=x();return l.a.createElement(g.a,{className:c.drawer,variant:"persistent",anchor:"right",open:a,classes:{paper:c.drawerPaper}},l.a.createElement(k.a,{className:c.sheetTitle},l.a.createElement(v.a,{className:c.boxAlign},l.a.createElement(C.a,{onClick:r},l.a.createElement(y.a,null))),n),o)},N=a(72),W=function(e){var t=e.isOpen,a=e.header,n=e.body;return l.a.createElement("div",{style:{position:"absolute",top:0,right:0}},l.a.createElement(N.a,{show:t,delay:3e3,autohide:!0},l.a.createElement(N.a.Header,null,l.a.createElement("strong",{className:"mr-auto"},a)),l.a.createElement(N.a.Body,null,n)))},A=a(70),F=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(f.a.Group,null,l.a.createElement(f.a.Label,null,"Select reviewers to review"),l.a.createElement(A.a,{id:"basic-typeahead-multiple",labelKey:"name",multiple:!0,onChange:r,options:["Pritam","Ashish","Anupam"],placeholder:"Choose reviewers...",selected:a})))},T=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1];return l.a.createElement(n.Fragment,null,l.a.createElement(f.a.Group,null,l.a.createElement(f.a.Label,null,"Select document to review"),l.a.createElement(A.a,{id:"basic-typeahead-single",labelKey:"name",onChange:r,options:["F24H Wizard","MadCap Flare POC"],placeholder:"Choose a document...",selected:a})))},B=a(164),I=a(165),P=a(100),D=a.n(P),G=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(!1),c=Object(s.a)(o,2),i=c[0],u=c[1],w=Object(n.useState)(!1),g=Object(s.a)(w,2),k=g[0],v=g[1],C=Object(n.useState)(!1),O=Object(s.a)(C,2),y=O[0],S=O[1],x=Object(n.useState)(!1),N=Object(s.a)(x,2),A=N[0],P=N[1],G=function(){u(!1)},H=Object(n.useCallback)((function(){if(a)switch(a){case"node1":return l.a.createElement(T,null);case"node2":return l.a.createElement(F,null);default:return null}}),[a]);return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{fluid:!0},l.a.createElement(p.a,{style:{margin:"20px"}},l.a.createElement(h.a,{xs:6,style:{textAlign:"left"}},l.a.createElement("h4",null,"Create Workflow")),l.a.createElement(h.a,{xs:3},l.a.createElement(m.a,{variant:"primary",onClick:function(){console.log("handle start"),S(!0)}},"Start Workflow")),l.a.createElement(h.a,{xs:3},l.a.createElement("span",null,"Status: ",l.a.createElement(D.a,{style:{color:"grey"}}),"Not Started"))),l.a.createElement(p.a,null,l.a.createElement(h.a,null,l.a.createElement(b,{onNodeClick:function(e){e&&(r(e),console.log("node clicked"),u(!0))}}),l.a.createElement(j,{isOpen:i,handleClose:G,title:"Step Configuration"},l.a.createElement(B.a,null,H()),l.a.createElement(I.a,null,l.a.createElement(m.a,{variant:"light",onClick:G},"Cancel"),l.a.createElement(m.a,{variant:"primary",onClick:function(){v(!0),u(!1)}},"Save"))))),l.a.createElement(W,{isOpen:k,header:"Workflow Configuration",body:"Saved step configuration"}),l.a.createElement(W,{isOpen:A,header:"Workflow",body:"New workflow started"})),l.a.createElement(E.a,{show:y,backdrop:"static"},l.a.createElement(E.a.Header,{closeButton:!0},l.a.createElement(E.a.Title,null,"New workflow")),l.a.createElement(E.a.Body,null,l.a.createElement(f.a,null,l.a.createElement(f.a.Group,{controlId:"formWorkflowName"},l.a.createElement(f.a.Label,null,"Workflow name"),l.a.createElement(f.a.Control,{type:"text"}),l.a.createElement(f.a.Text,{className:"text-muted"},"Give your workflow a name. It helps in indentification")))),l.a.createElement(E.a.Footer,null,l.a.createElement(m.a,{variant:"secondary",onClick:function(){return S(!1)}},"Close"),l.a.createElement(m.a,{variant:"primary",onClick:function(){S(!1),P(!0)}},"Save"))))};a(137),a(138);var H=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(c.a,{basename:"/"},l.a.createElement(i.a,{exact:!0,path:"/",component:u}),l.a.createElement(i.a,{exact:!0,path:"/workflows/create",component:G})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[110,1,2]]]);
//# sourceMappingURL=main.b2662750.chunk.js.map
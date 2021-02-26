(this.webpackJsonpguitarsheet=this.webpackJsonpguitarsheet||[]).push([[0],{101:function(t,e,n){"use strict";n.r(e);var r,a,c,o,i,l,d,b,j,s,x,u,g,O,h,f,p,m,k,y,S,v=n(0),w=n.n(v),C=n(39),I=n.n(C),W=n(9),z=n(6),F=n(81),M=n(7),A=n(8),D=n(105),E=n(107),N=n(80),P=n(108),B=n(49),G=n(2),J=A.a.div(r||(r=Object(M.a)(["\n  width : 100%;\n  height : 6rem;\n  display : flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow : 4px 4px 2px grey;\n"]))),L=A.a.span(a||(a=Object(M.a)(["\n  font-weight: bold;\n  font-size : 2.5rem;\n  color : black;\n"]))),T=A.a.div(c||(c=Object(M.a)(["\n  width : 50%;\n  display : flex;\n  align-items: center;\n  flex-direction: column;\n  margin : 0 auto;\n  margin-top: 2rem;\n  @media(max-width: 1500px){ width : 65%; }\n  @media(max-width: 1300px){ width : 80%; }\n  @media(max-width: 768px){ width : 95%; }\n  \n"]))),R=A.a.div(o||(o=Object(M.a)(["\n  width : 100%;\n  height : auto;\n  padding : 2rem;\n  border : 3px solid black;\n  border-radius : 10px;\n  display : flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),V=A.a.div(i||(i=Object(M.a)(["\n  width : 80%;\n  height : auto;\n  display : grid;\n  position: relative;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(5, 40px);\n  background-color: black;\n  border : 4px solid black;\n  border-right : none;\n  gap : 4px;\n  ","\n  \n"])),(function(t){return 1===t.num?"border-left : 14px solid black;":null})),q=A.a.div(l||(l=Object(M.a)(["\n  width : 40%;\n  margin-bottom: 2rem;\n  display : flex;\n  justify-content: center;\n"]))),H=A.a.div(d||(d=Object(M.a)(["\n  background-color : white;\n\n"]))),K=A.a.div(b||(b=Object(M.a)(["\n  width :100%;\n  display : grid;\n  position : absolute;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(6, 44px);\n  top : -23.5px;\n"]))),Q=A.a.div(j||(j=Object(M.a)(["\n  width : 80%;\n  display : flex;\n  margin-top : 1.5rem;\n  justify-content: space-between;\n"]))),U=A.a.div(s||(s=Object(M.a)(["\n  width : 80%;\n  display : flex;\n  justify-content: center;\n  margin-top : 1rem;\n"]))),X=A.a.div(x||(x=Object(M.a)(["\n  background-color : transparent;\n  display : flex;\n  justify-content: center;\n  align-items: center;\n  cursor : pointer;\n  &:hover {\n    background-color : rgba(0,0,0,0.3)\n  }\n"]))),Y=A.a.div(u||(u=Object(M.a)(["\n  ","\n  height: 36px;\n  width: 36px;\n  border-radius: 22.125px;\n  background-color : black;\n"])),(function(t){return!0===t.view?"display : block;":"display : none;"})),Z=A.a.div(g||(g=Object(M.a)(["\n  ","\n  height: 100%;\n  width: 36px;\n  border-top-left-radius: 22.125px;\n  border-top-right-radius: 22.125px;\n  background-color : black;\n"])),(function(t){return!0===t.view?"display : block;":"display : none;"})),$=A.a.div(O||(O=Object(M.a)(["\n  ","\n  height: 100%;\n  width: 36px;\n  border-bottom-left-radius: 22.125px;\n  border-bottom-right-radius: 22.125px;\n  background-color : black;\n"])),(function(t){return!0===t.view?"display : block;":"display : none;"})),_=A.a.div(h||(h=Object(M.a)(["\n  ","\n  height: 100%;\n  width: 36px;\n  background-color : black;\n"])),(function(t){return!0===t.view?"display : block;":"display : none;"})),tt=A.a.div(f||(f=Object(M.a)(["\n  width : 100%;\n  height : auto;\n  padding : 2rem;\n  \n  display : flex;\n  justify-content: center;\n  align-items: center;\n"]))),et=A.a.svg.attrs({version:"1.1",xmlns:"http://www.w3.org/2000/svg"})(p||(p=Object(M.a)(["\n  width : 82%;\n  min-height : 330px;\n"]))),nt=A.a.rect(m||(m=Object(M.a)(["\n  x : calc("," - 20px)\n"])),(function(t){return t.x})),rt=A.a.line(k||(k=Object(M.a)(["\n  \n"]))),at=A.a.circle(y||(y=Object(M.a)(["\n\n"]))),ct=A.a.text(S||(S=Object(M.a)(["\n\n"]))),ot=function(){var t=Object(v.createRef)(),e=Object(v.useState)({circleState:new Array(24).fill(!1),longState:new Array(24).fill(0),longCoord:{},dragStartIndex:null,code:"",num:1}),n=Object(F.a)(e,2),r=n[0],a=n[1];return Object(v.useEffect)((function(){}),[r]),Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(J,{children:Object(G.jsx)(L,{children:"GuitarSheet"})}),Object(G.jsxs)(T,{children:[Object(G.jsxs)(R,{children:[Object(G.jsx)(q,{children:Object(G.jsx)(D.a,{placeholder:"Code",onChange:function(t){a((function(e){return Object(z.a)(Object(z.a)({},e),{},{circleState:Object(W.a)(e.circleState),longState:Object(W.a)(e.longState),longCoord:Object(z.a)({},e.longCoord),code:t.target.value})}))}})}),Object(G.jsxs)(V,{num:r.num,children:[new Array(20).fill(0).map((function(t,e){return Object(G.jsx)(H,{},e)})),Object(G.jsx)(K,{children:new Array(24).fill(0).map((function(t,e){return Object(G.jsxs)(X,{onDragStart:function(t){return function(t,e){a((function(t){var n=Object(W.a)(t.circleState),r=Object(W.a)(t.longState);return!0===n[e]&&(n[e]=!1),Object(z.a)(Object(z.a)({},t),{},{circleState:Object(W.a)(n),longState:Object(W.a)(r),longCoord:Object(z.a)({},t.longCoord),dragStartIndex:e})}))}(0,e)},onDragEnter:function(t){return function(t,e){a((function(t){var n=Object(W.a)(t.circleState),r=Object(W.a)(t.longState);if(!0===n[e]&&(n[e]=!1),t.dragStartIndex%4===e%4){t.dragStartIndex>e?(2===r[t.dragStartIndex+4]&&(r[t.dragStartIndex+4]=0),3===r[e]?(r[e-4]=0,r[e]=1):(r[t.dragStartIndex]=2,r[e]=1)):t.dragStartIndex<e&&(1===r[t.dragStartIndex-4]&&(r[t.dragStartIndex-4]=0),3===r[e]?(r[e+4]=0,r[e]=2):(r[t.dragStartIndex]=1,r[e]=2));for(var a=1;a<Math.abs(Math.floor(e/4)-Math.floor(t.dragStartIndex/4));a++)e>t.dragStartIndex?r[t.dragStartIndex+4*a]=3:r[t.dragStartIndex-4*a]=3}return Object(z.a)(Object(z.a)({},t),{},{circleState:Object(W.a)(n),longState:Object(W.a)(r),longCoord:Object(z.a)({},t.longCoord)})}))}(0,e)},onDragEnd:function(t){return function(t,e){a((function(t){var n=Object(W.a)(t.circleState),r=Object(W.a)(t.longState),a=Object(z.a)({},t.longCoord),c=0;if(1===r[e]){for(;2!==r[e+4*(c+=1)];);a[e]=c+1}else if(2===r[e]){for(;1!==r[e-4*(c+=1)];);a[e-4*c]=c+1}return Object(z.a)(Object(z.a)({},t),{},{circleState:Object(W.a)(n),longState:Object(W.a)(r),longCoord:Object(z.a)({},a)})}))}(0,e)},onClick:function(t){a((function(t){var n=Object(W.a)(t.circleState);return n[e]=!n[e],function(t){for(var e=function(e){var n=Object.keys(r.longCoord)[e];if(t>=Number(n)&&t<=Number(n)+4*(r.longCoord[n]-1)&&t%4===Number(n)%4)return a((function(t){for(var e=Object(W.a)(t.longState),r=Object(z.a)({},t.longCoord),a=0;a<r[n];a++)e[Number(n)+4*a]=0;return delete r[n],Object(z.a)(Object(z.a)({},t),{},{circleState:Object(W.a)(t.circleState),longState:Object(W.a)(e),longCoord:Object(z.a)({},r)})})),"break"},n=0;n<Object.keys(r.longCoord).length&&"break"!==e(n);n++);}(e),Object(z.a)(Object(z.a)({},t),{},{circleState:n,longState:Object(W.a)(t.longState),longCoord:Object(z.a)({},t.longCoord)})}))},children:[Object(G.jsx)(Y,{view:r.circleState[e]},e),Object(G.jsx)(Z,{view:1===r.longState[e]},24+e),Object(G.jsx)($,{view:2===r.longState[e]},48+e),Object(G.jsx)(_,{view:3===r.longState[e]},72+e)]},e)}))})]}),Object(G.jsxs)(Q,{children:[Object(G.jsx)(E.a,{size:"large",min:1,max:17,defaultValue:1,onChange:function(t){a((function(e){return Object(z.a)(Object(z.a)({},e),{},{circleState:Object(W.a)(e.circleState),longState:Object(W.a)(e.longState),longCoord:Object(z.a)({},e.longCoord),num:t})}))}}),Object(G.jsx)(E.a,{size:"large",min:1,max:17,value:(null===r||void 0===r?void 0:r.num)+1,disabled:!0}),Object(G.jsx)(E.a,{size:"large",min:1,max:17,value:(null===r||void 0===r?void 0:r.num)+2,disabled:!0}),Object(G.jsx)(E.a,{size:"large",min:1,max:17,value:(null===r||void 0===r?void 0:r.num)+3,disabled:!0})]}),Object(G.jsx)(U,{children:Object(G.jsx)(N.a,{icon:Object(G.jsx)(P.a,{}),size:"large",onClick:function(e){Object(B.saveSvgAsPng)(t.current,"GuitarSheet.png")},children:"Download"})})]}),Object(G.jsx)(tt,{children:Object(G.jsxs)(et,{ref:t,children:[1===r.num?Object(G.jsx)(rt,{x1:"0",y1:"15%",x2:"0",y2:"85%",stroke:"black",strokeWidth:"25"}):Object(G.jsx)(rt,{x1:"0",y1:"15%",x2:"0",y2:"85%",stroke:"black",strokeWidth:"6"}),Object(G.jsx)(rt,{x1:"25%",y1:"15%",x2:"25%",y2:"85%",stroke:"black",strokeWidth:"3"}),Object(G.jsx)(rt,{x1:"50%",y1:"15%",x2:"50%",y2:"85%",stroke:"black",strokeWidth:"3"}),Object(G.jsx)(rt,{x1:"75%",y1:"15%",x2:"75%",y2:"85%",stroke:"black",strokeWidth:"3"}),Object(G.jsx)(rt,{x1:"0",y1:"15%",x2:"100%",y2:"15%",stroke:"black",strokeWidth:"3"}),Object(G.jsx)(rt,{x1:"0",y1:"29%",x2:"100%",y2:"29%",stroke:"black",strokeWidth:"3"}),Object(G.jsx)(rt,{x1:"0",y1:"43%",x2:"100%",y2:"43%",stroke:"black",strokeWidth:"3"}),Object(G.jsx)(rt,{x1:"0",y1:"57%",x2:"100%",y2:"57%",stroke:"black",strokeWidth:"3"}),Object(G.jsx)(rt,{x1:"0",y1:"71%",x2:"100%",y2:"71%",stroke:"black",strokeWidth:"3"}),Object(G.jsx)(rt,{x1:"0",y1:"85%",x2:"100%",y2:"85%",stroke:"black",strokeWidth:"3"}),r.circleState.map((function(t,e){return!0===t?Object(G.jsx)(at,{cx:e%4*25+12.5+"%",cy:14*Math.floor(e/4)+15+"%",r:"20px",color:"black"},e):null})),Object.keys(r.longCoord).map((function(t,e){return Object(G.jsx)(nt,{x:t%4*25+12.5+"%",y:14*Math.floor(t/4)+15-7+"%",width:"40px",height:14*r.longCoord[t]+"%",rx:"5%",ry:"5%",color:"black"},e)})),Object(G.jsx)(ct,{x:"11%",y:"100%",fontSize:"2rem",children:r.num}),Object(G.jsx)(ct,{x:"36.5%",y:"100%",fontSize:"2rem",children:r.num+1}),Object(G.jsx)(ct,{x:"61.5%",y:"100%",fontSize:"2rem",children:r.num+2}),Object(G.jsx)(ct,{x:"86.5%",y:"100%",fontSize:"2rem",children:r.num+3}),r.code]})})]})]})};var it=function(){return Object(G.jsx)(G.Fragment,{children:Object(G.jsx)(ot,{})})},lt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,109)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),r(t),a(t),c(t),o(t)}))};n(100);I.a.render(Object(G.jsx)(w.a.StrictMode,{children:Object(G.jsx)(it,{})}),document.getElementById("root")),lt()}},[[101,1,2]]]);
//# sourceMappingURL=main.fae837ac.chunk.js.map
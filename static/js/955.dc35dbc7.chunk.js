"use strict";(self.webpackChunkss_test_task=self.webpackChunkss_test_task||[]).push([[955],{9955:function(e,n,l){l.r(n),l.d(n,{default:function(){return j}});var r=l(2982),a=l(885),t=l(2497),o=l(6151),c=l(793),i=l(890),s=l(1413),d=l(2791),u=l(6259),p=l(9823),f=l(184);function h(e){var n=e.droppableId,l=e.columns,r=e.handleSelect,a=e.handleCancelSelection;return(0,f.jsx)(c.bK,{droppableId:n,children:function(e){return(0,f.jsxs)(t.CK,(0,s.Z)((0,s.Z)({dense:!0},e.droppableProps),{},{ref:e.innerRef,children:[l.map((function(e,l){return(0,f.jsx)(c._l,{draggableId:e,index:l,children:function(l){return(0,f.jsxs)("div",(0,s.Z)((0,s.Z)((0,s.Z)({ref:l.innerRef},l.draggableProps),l.dragHandleProps),{},{children:["available"===n?(0,f.jsx)(t.oH,{onClick:function(){return r(e)},children:(0,f.jsx)(u.Z,{primary:e,align:"left"})}):(0,f.jsxs)(t.oH,{children:[(0,f.jsx)(u.Z,{primary:e,align:"left"}),(0,f.jsx)(t.Qh,{"aria-label":"clear",onClick:function(){return a(e)},children:(0,f.jsx)(p.Z,{})})]}),l.placeholder]}))}},e)})),e.placeholder]}))}})}function b(e){var n,l=e.droppableId,r=e.columns,a=e.handleSelect,o=e.handleCancelSelection;return(0,f.jsxs)(t.uy,{children:[(0,f.jsxs)(i.Z,{align:"center",children:[(n=l,n.charAt(0).toUpperCase()+n.slice(1))," Columns"]}),(0,f.jsx)(h,{droppableId:l,columns:r,handleSelect:a,handleCancelSelection:o})]})}var x=l(53),Z=l(9434);function j(e){var n=e.isModalOpen,l=e.handleToggleModal,i=(0,Z.I0)(),s=(0,Z.v9)(x.H7),u=(0,Z.v9)(x.Vz),p=(0,d.useState)((0,r.Z)(u)),h=(0,a.Z)(p,2),j=h[0],v=h[1],C=(0,d.useState)(""),I=(0,a.Z)(C,2),S=I[0],g=I[1],m=(0,d.useMemo)((function(){return j.filter((function(e){return e.toLowerCase().includes(S)}))}),[S,j]),k=(0,d.useState)((0,r.Z)(s)),y=(0,a.Z)(k,2),_=y[0],w=y[1];return u&&(0,f.jsx)(t.oA,{open:n,onClose:l,children:(0,f.jsxs)(t.SM,{children:[(0,f.jsx)(t.uO,{size:"small",label:"Search available columns...",type:"text",autoComplete:"off",onChange:function(e){return function(e){g(e.toLowerCase())}(e.target.value)}}),(0,f.jsx)(c.Z5,{onDragEnd:function(e){var n=e.source,l=e.destination;if(l&&n.droppableId!==l.droppableId){var t=(0,r.Z)("available"===n.droppableId?j:_),o=t.splice(n.index,1),c=(0,a.Z)(o,1)[0],i=(0,r.Z)("available"===l.droppableId?j:_);i.splice(l.index,0,c),v("available"===l.droppableId?i:t),w("selected"===l.droppableId?i:t)}},children:(0,f.jsxs)(t.So,{children:[(0,f.jsx)(b,{droppableId:"available",columns:m,handleSelect:function(e){v((function(n){return(0,r.Z)(n.filter((function(n){return n!==e})))})),w((function(n){return[].concat((0,r.Z)(n),[e])}))}}),(0,f.jsx)(b,{droppableId:"selected",columns:_,handleCancelSelection:function(e){w((function(n){return(0,r.Z)(n.filter((function(n){return n!==e})))})),v((function(n){return[].concat((0,r.Z)(n),[e])}))}})]})}),(0,f.jsx)(o.Z,{variant:"contained",onClick:function(){l(),function(e,n){i((0,x.jL)(e)),i((0,x.e2)(n))}(j,_)},children:"Apply"})]})})}}}]);
//# sourceMappingURL=955.dc35dbc7.chunk.js.map
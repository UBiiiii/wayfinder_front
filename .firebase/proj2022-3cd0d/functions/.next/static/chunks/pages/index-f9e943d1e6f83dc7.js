(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1585)}])},1585:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r,s=n(7568),l=n(1799),o=n(9396),c=n(655),a=n(5893),i=n(3940),u=n(7294),d=n(1163),f=n(471),h=n(6293),x=n(9473),p=n(2826),g=function(){var e=(0,u.useState)(""),t=e[0],n=e[1];return(0,u.useEffect)(function(){var e;n((null===(e=i.I8.currentUser)||void 0===e?void 0:e.uid)||"")},[t]),(0,a.jsx)("div",{className:"w-full flex h-[75px] bg-black",children:t&&(0,a.jsxs)("div",{className:"flex w-full h-full text-white justify-between items-center px-10",children:[(0,a.jsx)("div",{className:"text-lg text-white",children:"Map-Manager"}),(0,a.jsx)("button",{className:"px-2 py-1 bg-white text-black rounded-md",onClick:function(){i.fZ.signOut(i.I8)},children:"Log-out"})]})})},m=(r=function(){var e=(0,x.I0)(),t=(0,x.v9)(function(e){return e.rooms.datas}),n=(0,x.v9)(function(e){return e.rooms.nodes}),r=(0,x.v9)(function(e){return e.rooms.bles}),d=(0,u.useRef)(null);(0,u.useRef)(null);var f=(0,u.useState)(""),m=f[0],v=f[1],b=(0,u.useState)(""),w=b[0],j=b[1],y=(0,u.useState)(""),k=y[0],N=y[1],_=(0,u.useState)({}),Q=(_[0],_[1]),C=(0,u.useState)(!1),S=C[0],E=C[1],Z=(0,u.useState)(""),L=Z[0],X=Z[1],M=(0,u.useState)(""),R=M[0],O=M[1],B=(0,u.useState)(""),A=B[0],D=B[1],I=(0,u.useState)(""),z=I[0],V=I[1],U=(0,u.useState)(""),T=U[0],F=U[1],Y=(0,u.useState)(""),P=Y[0],q=Y[1],W=(0,u.useState)(),G=W[0],H=W[1],J=(0,u.useState)(!1),K=J[0];J[1];var $=(0,u.useState)(!1),ee=$[0],et=$[1],en=(0,u.useState)(!1),er=en[0],es=en[1],el=(0,u.useState)(!1),eo=el[0],ec=el[1],ea=(0,u.useState)(!1),ei=ea[0],eu=ea[1],ed=(0,u.useState)(!1),ef=ed[0],eh=ed[1],ex=(0,u.useState)(!1),ep=ex[0],eg=ex[1],em=(0,u.useState)(!1),ev=em[0],eb=em[1],ew=(0,u.useRef)(null);(0,u.useRef)(null),(0,u.useEffect)(function(){if(""!==m)return i.rX.getDownloadURL(i.rX.ref(i.tO,"floor".concat(m,"/").concat(m,"층 기본 지도(명칭x).png"))).then(function(e){return j(e)}),i.rX.getDownloadURL(i.rX.ref(i.tO,"floor".concat(m,"/").concat(m,"층 기본 지도(명칭x)(모바일).png"))).then(function(e){return N(e)}),i.lQ.onValue(i.lQ.ref(i.db,m),function(t){var n=[];t.exists()&&t.forEach(function(e){e.val().position_key&&n.push((0,l.Z)({id:e.key},e.val()))}),e((0,p.CF)(n))})},[m]),(0,u.useEffect)(function(){if(""!==m)return i.lQ.onValue(i.lQ.ref(i.db,"nodes/".concat(m)),function(t){var n=[];t.exists()&&t.forEach(function(e){n.push((0,o.Z)((0,l.Z)({id:e.key},e.val()),{links:e.val().links||[]}))}),e((0,p.fL)(n))})},[m]),(0,u.useEffect)(function(){if(""!==m)return i.lQ.onValue(i.lQ.ref(i.db,"bles/".concat(m)),function(t){var n=[];t.exists()&&t.forEach(function(e){n.push((0,l.Z)({id:e.key},e.val()))}),e((0,p.qb)(n))})},[m]);var ej,ey,ek,eN,e_,eQ,eC,eS=function(e){var t=e.data,n=e.key;return t.position_key.x,t.position_key.y,(0,a.jsx)("button",{className:"\n         text-black bg-gray-400\n          top-3 px-2 py-1 rounded-md\n        ",onClick:function(){eE(t)},children:t.id},n)},eE=function(e){Q(e),D(e.charge),F(e.specific),O(e.name),V(e.phone),X(e.id),q(e.with)},eZ=function(e){var t=e.data,n=e.key,r=e.pos,s=t.position_key.x,l=t.position_key.y,o=t.name.split(" "),c=[];return o.forEach(function(e){c.push(e)}),(0,a.jsx)("div",{className:"\n          absolute top-3 w-24\n          ".concat("mirror"===r?"text-white":"text-black","\n        "),style:{top:"".concat(l-15*c.length,"px"),left:"".concat(s-45,"px")},children:c.map(function(e,t){return(0,a.jsx)("span",{className:"block",children:e},t)})},n)},eL=function(e){var t=e.data,n=e.key,r=t.x,s=t.y;return(0,a.jsx)("div",{className:"absolute z-30 w-5 h-5 rounded-full text-sm cursor-pointer\n          ".concat(G===t?"bg-red-600":"bg-green-400","\n          ").concat(ef?"block":"hidden","\n        "),style:{top:"".concat(s-10,"px"),left:"".concat(r-10,"px")},onClick:function(){return eV(t)},children:t.id},n)},eX=function(e){var t=e.data,n=e.key,r=t.x,s=t.y;return(0,a.jsx)("div",{className:"absolute z-30 w-5 h-5 rounded-full text-sm cursor-pointer bg-blue-600 text-white\n          ".concat(ep?"block":"hidden","\n        "),style:{top:"".concat(s-10,"px"),left:"".concat(r-10,"px")},onClick:function(){return eV(t)},children:t.id},n)},eM=function(e){v(e),X(""),O(""),D(""),F(""),V(""),q(""),console.log(e),E(!1)},eR=function(){var e,n;et(!0),eh(!1),eg(!1),h.SE(document.getElementById("userView")).then((e=(0,s.Z)(function(e){var n;return(0,c.__generator)(this,function(n){return i.rX.uploadBytesResumable(i.rX.ref(i.tO,"map/floor".concat(m,".png")),e).on("state_changed",function(e){console.log(e.bytesTransferred/e.totalBytes)},function(e){console.log(e)},function(){console.log("save complete"),t.forEach(function(e){eB(m,e.id)}),et(!1)}),[2]})}),function(t){return e.apply(this,arguments)})),h.SE(document.getElementById("mobileView")).then((n=(0,s.Z)(function(e){var t;return(0,c.__generator)(this,function(t){return i.rX.uploadBytesResumable(i.rX.ref(i.tO,"map/floor".concat(m,"_mobile.png")),e).on("state_changed",function(e){console.log(e.bytesTransferred/e.totalBytes)},function(e){console.log(e)},function(){console.log("save mobile complete")}),[2]})}),function(e){return n.apply(this,arguments)}))},eO=(ej=(0,s.Z)(function(){return(0,c.__generator)(this,function(e){return L&&(i.lQ.update(i.lQ.ref(i.db,"".concat(m,"/").concat(L)),{name:R,phone:z,charge:A,specific:T}),console.log(P),P&&i.lQ.update(i.lQ.ref(i.db,"".concat(m,"/").concat(P)),{name:R,phone:z,charge:A,specific:T})),[2]})}),function(){return ej.apply(this,arguments)}),eB=(ey=(0,s.Z)(function(e,t){var n,r,l,o;return(0,c.__generator)(this,function(a){switch(a.label){case 0:if(!(n=ew.current))return[3,2];return r=n.getContext("2d"),console.log("save path"),l=document.createElement("img"),(o=document.createElement("img")).setAttribute("crossOrigin","anonymous"),l.setAttribute("crossOrigin","anonymous"),l.onload=(0,s.Z)(function(){return(0,c.__generator)(this,function(a){switch(a.label){case 0:return o.onload=(0,s.Z)(function(){return(0,c.__generator)(this,function(e){var a;return n.width=517,n.height=1180,null==r||r.drawImage(l,0,0,n.width,n.height),null==r||r.drawImage(o,0,0,n.width,n.height),n.toBlob((a=(0,s.Z)(function(e){return(0,c.__generator)(this,function(n){switch(n.label){case 0:return[4,i.rX.uploadBytes(i.rX.ref(i.tO,"result/floor".concat(m,"/").concat(t,".png")),e)];case 1:return n.sent(),console.log("save map ".concat(t,"}")),[2]}})}),function(e){return a.apply(this,arguments)})),null==r||r.clearRect(0,0,n.width,n.height),[2]})}),[4,i.rX.getDownloadURL(i.rX.ref(i.tO,"path/floor".concat(e,"/").concat(t,".png")))];case 1:return o.src=a.sent(),[2]}})}),[4,i.rX.getDownloadURL(i.rX.ref(i.tO,"map/floor".concat(e,".png")))];case 1:l.src=a.sent(),a.label=2;case 2:return[2]}})}),function(e,t){return ey.apply(this,arguments)}),eA=(ek=(0,s.Z)(function(e){var t,n;return(0,c.__generator)(this,function(r){switch(r.label){case 0:if(!er)return[3,2];return console.log(e.nativeEvent.offsetX,e.nativeEvent.offsetY),[4,i.lQ.get(i.lQ.ref(i.db,"nodes/".concat(m)))];case 1:n=(t=r.sent()).exists()?t.val().length:0,i.lQ.set(i.lQ.ref(i.db,"nodes/".concat(m,"/").concat(n)),{x:e.nativeEvent.offsetX,y:e.nativeEvent.offsetY}),r.label=2;case 2:return es(!1),[2]}})}),function(e){return ek.apply(this,arguments)}),eD=(eN=(0,s.Z)(function(e){var t,n,r,s,l,o;return(0,c.__generator)(this,function(c){switch(c.label){case 0:if(G)return[3,1];return H(e),[2];case 1:if(!((t=G).id!==e.id))return[3,9];return[4,i.lQ.get(i.lQ.ref(i.db,"links/".concat(m)))];case 2:return s={id:r=(n=c.sent()).exists()?n.val().length:0,node1:null==t?void 0:t.id,node2:null==e?void 0:e.id,mass:Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))},[4,i.lQ.set(i.lQ.ref(i.db,"links/".concat(m,"/").concat(r)),s)];case 3:return c.sent(),[4,i.lQ.get(i.lQ.ref(i.db,"nodes/".concat(m,"/").concat(t.id,"/links")))];case 4:return l=c.sent().val()||[],[4,i.lQ.get(i.lQ.ref(i.db,"nodes/".concat(m,"/").concat(e.id,"/links")))];case 5:return[4,c.sent().val()];case 6:return o=c.sent()||[],l.push(s),o.push(s),console.log(t.id,e.id),[4,i.lQ.update(i.lQ.ref(i.db,"nodes/".concat(m,"/").concat(t.id)),{links:l})];case 7:return c.sent(),[4,i.lQ.update(i.lQ.ref(i.db,"nodes/".concat(m,"/").concat(e.id)),{links:o})];case 8:return c.sent(),console.log("add link"),[3,10];case 9:console.log("same node"),c.label=10;case 10:H(void 0),ec(!1),c.label=11;case 11:return[2]}})}),function(e){return eN.apply(this,arguments)}),eI=(e_=(0,s.Z)(function(e){var t;return(0,c.__generator)(this,function(n){switch(n.label){case 0:return[4,i.lQ.get(i.lQ.ref(i.db,"nodes/".concat(m,"/").concat(e.id,"/dest")))];case 1:if((t=n.sent().val()||[]).includes(e.id))return[3,3];return t.push(L),console.log(t),[4,i.lQ.set(i.lQ.ref(i.db,"nodes/".concat(m,"/").concat(e.id,"/dest")),t)];case 2:n.sent(),n.label=3;case 3:return eu(!1),[2]}})}),function(e){return e_.apply(this,arguments)}),ez=(eQ=(0,s.Z)(function(e){var t,n,r,s,l;return(0,c.__generator)(this,function(o){switch(o.label){case 0:return[4,i.lQ.get(i.lQ.ref(i.db,"nodes/".concat(m)))];case 1:return t=o.sent().val(),[4,i.lQ.get(i.lQ.ref(i.db,"links/".concat(m)))];case 2:return n=o.sent().val(),r=Object.values(t),Object.values(n),s=e.id,console.log(r),l=r.filter(function(e,t){return t!==s}).map(function(e,t){return e.id=t}),console.log(s),console.log(l),[2]}})}),function(e){return eQ.apply(this,arguments)}),eV=(eC=(0,s.Z)(function(e){return(0,c.__generator)(this,function(t){switch(t.label){case 0:if(!eo)return[3,2];return[4,eD(e)];case 1:t.sent(),t.label=2;case 2:if(!ei)return[3,4];return[4,eI(e)];case 3:t.sent(),t.label=4;case 4:if(!ev)return[3,6];return[4,ez(e)];case 5:t.sent(),t.label=6;case 6:return[2]}})}),function(e){return eC.apply(this,arguments)});return(0,a.jsxs)("div",{className:"relative flex flex-col w-full h-full",children:[(0,a.jsx)(g,{}),K&&(0,a.jsxs)("div",{className:"absolute z-50 flex justify-center items-center w-screen h-screen bg-gray-500 bg-opacity-80 backdrop-blur-xl text-4xl gap-5",children:[(0,a.jsx)("svg",{className:"animate-spin",width:220,height:220,viewBox:"0 0 220 220",fill:"none",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",children:(0,a.jsx)("path",{d:"M10 110C10 170 58 210 110 210C162 210 210 166 210 110C210 54 162 10 110 10",stroke:"#AE71C4",strokeWidth:20})}),"Save Map Data..."]}),ee&&(0,a.jsxs)("div",{className:"absolute z-50 flex justify-center items-center w-screen h-screen bg-gray-500 bg-opacity-80 backdrop-blur-xl text-4xl gap-5",children:[(0,a.jsx)("svg",{className:"animate-spin",width:220,height:220,viewBox:"0 0 220 220",fill:"none",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",children:(0,a.jsx)("path",{d:"M10 110C10 170 58 210 110 210C162 210 210 166 210 110C210 54 162 10 110 10",stroke:"#AE71C4",strokeWidth:20})}),"Save Path Data..."]}),(0,a.jsxs)("div",{id:"dataField",className:"w-full px-40 z-30",children:[(0,a.jsxs)("div",{id:"choice",className:"px-4 py-4 h-20 justify-between flex",children:[(0,a.jsxs)("div",{id:"floor",className:"overflow-visible relative",children:[(0,a.jsx)("button",{className:"px-2 py-1 border-2 rounded-md bg-black text-white",onClick:function(){return E(!S)},children:"Floor"}),S&&(0,a.jsx)("div",{className:"border-2 bg-white absolute w-full",children:["3","4"].map(function(e,t){return(0,a.jsx)("div",{className:"cursor-pointer",onClick:function(){return eM(e)},children:e},t)})})]}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("button",{className:"\n                  h-min px-2 py-1 border-2 rounded-md text-white\n                  ".concat(er?"bg-green-500":"bg-black","\n                "),onClick:function(){es(!er)},children:"Add Node"}),(0,a.jsx)("button",{className:"\n                  h-min px-2 py-1 border-2 rounded-md text-white\n                  ".concat(eo?"bg-green-500":"bg-black","\n                "),onClick:function(){ec(!eo)},children:"Add Link"}),(0,a.jsx)("button",{className:"\n                  h-min px-2 py-1 border-2 rounded-md text-white\n                  ".concat(ev?"bg-green-500":"bg-black","\n                "),onClick:function(){eb(!ev)},children:"Delete Node"})]}),(0,a.jsxs)("div",{className:"flex gap-3",children:[(0,a.jsxs)("div",{className:"flex items-start gap-3",onClick:function(){eh(!ef)},children:[ef?(0,a.jsx)("div",{className:"flex-grow-0 flex-shrink-0 w-[24px] h-[24px] rounded-sm bg-[#49454f]",children:(0,a.jsx)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"flex-grow-0 flex-shrink-0 w-6 h-6 relative",preserveAspectRatio:"xMidYMid meet",children:(0,a.jsx)("path",{d:"M10 16.4L6 12.4L7.4 11L10 13.6L16.6 7L18 8.4L10 16.4Z",fill:"white"})})}):(0,a.jsx)("div",{className:"flex-grow-0 flex-shrink-0 w-[24px] h-[24px] rounded-sm border-2 border-[#49454f]"}),"Show node"]}),(0,a.jsxs)("div",{className:"flex items-start gap-3",onClick:function(){eg(!ep)},children:[ep?(0,a.jsx)("div",{className:"flex-grow-0 flex-shrink-0 w-[24px] h-[24px] rounded-sm bg-[#49454f]",children:(0,a.jsx)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"flex-grow-0 flex-shrink-0 w-6 h-6 relative",preserveAspectRatio:"xMidYMid meet",children:(0,a.jsx)("path",{d:"M10 16.4L6 12.4L7.4 11L10 13.6L16.6 7L18 8.4L10 16.4Z",fill:"white"})})}):(0,a.jsx)("div",{className:"flex-grow-0 flex-shrink-0 w-[24px] h-[24px] rounded-sm border-2 border-[#49454f]"}),"Show BLE"]})]})]}),(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)("button",{className:"h-min px-2 py-1 border-2 rounded-md bg-black text-white",onClick:eR,children:"Save Map"}),(0,a.jsx)("button",{className:"\n                h-min px-2 py-1 border-2 rounded-md text-white\n                ".concat(ei?"bg-green-500":"bg-black","\n              "),onClick:function(){eu(!ei)},children:"Set Node"}),(0,a.jsx)("button",{className:"h-min px-2 py-1 border-2 rounded-md bg-black text-white",onClick:eO,children:"Change Apply"})]})]}),(0,a.jsxs)("div",{id:"room_data",className:"w-full flex flex-col gap-3 z-0",children:[(0,a.jsxs)("table",{className:"table-fixed border-2 w-full bg-white",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{className:"border-b-2",children:[(0,a.jsx)("th",{children:" Num"}),(0,a.jsx)("th",{children:" Name"}),(0,a.jsx)("th",{children:" Charge"}),(0,a.jsx)("th",{children:" Tel."})]})}),(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("input",{type:"text",value:L,className:"w-full border-none h-10 text-center",readOnly:!0})}),(0,a.jsx)("td",{children:(0,a.jsx)("input",{type:"text",value:R,className:"w-full border-none h-10 text-center",onChange:function(e){O(e.target.value)}})}),(0,a.jsx)("td",{children:(0,a.jsx)("input",{type:"text",value:A,className:"w-full border-none h-10 text-center",onChange:function(e){D(e.target.value)}})}),(0,a.jsx)("td",{children:(0,a.jsx)("input",{type:"text",value:z,className:"w-full border-none h-10 text-center",onChange:function(e){V(e.target.value)}})})]})})]}),(0,a.jsxs)("div",{children:["Detail",(0,a.jsx)("textarea",{className:"w-full h-30 resize-none cursor-text",value:T,onChange:function(e){F(e.target.value)}})]})]})]}),(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsxs)("div",{id:"mapField",className:"w-fit items-center justify-center grid grid-cols-2 px-10 py-10 ".concat(m?"flex":"hidden"),children:[(0,a.jsxs)("div",{className:"w-[537px] flex flex-col gap-3 text-center justify-center",children:["Mobile Zone",(0,a.jsxs)("div",{id:"mobileView",className:"relative w-[517px] h-[1180px]",children:[(0,a.jsx)("img",{id:"",src:k,className:"flex w-full h-full object-cover"}),(null==t?void 0:t.length)&&(null==t?void 0:t.filter(function(e){return void 0!==e.position_key}).map(function(e,t){return(0,a.jsx)(eZ,{data:e,pos:"mobile"},t)}))]})]}),(0,a.jsxs)("div",{className:"w-[537px] flex flex-col gap-3 text-center justify-center",children:["User view",(0,a.jsxs)("div",{id:"userView",ref:d,className:"relative w-[517px] h-[1180px] bg-no-repeat bg-center bg-cover bg-white dark:bg-black",onMouseDown:function(e){return eA(e)},children:[(0,a.jsx)("img",{src:w,className:"flex w-full h-full object-cover"}),(null==t?void 0:t.length)&&(null==t?void 0:t.filter(function(e){return void 0!==e.position_key}).map(function(e,t){return(0,a.jsx)(eZ,{data:e,pos:"mirror"},t)})),(null==n?void 0:n.length)&&(null==n?void 0:n.map(function(e,t){return(0,a.jsx)(eL,{data:e},t)})),(null==r?void 0:r.length)&&(null==r?void 0:r.map(function(e,t){return(0,a.jsx)(eX,{data:e},t)}))]})]}),(0,a.jsx)("canvas",{hidden:!0,id:"mycanvas2",ref:ew})]}),(0,a.jsxs)("div",{className:"".concat(m?"flex flex-col":"hidden"," w-fit px-10 py-10 gap-3"),children:["Room List",null==t?void 0:t.map(function(e,t){return(0,a.jsx)(eS,{data:e},t)})]})]})]})},function(e){var t=(0,d.useRouter)().replace,n=(0,u.useState)(!1),o=n[0],h=n[1];return(0,u.useEffect)(function(){h(!0);var e,n=i.fZ.onAuthStateChanged(i.I8,(e=(0,s.Z)(function(e){return(0,c.__generator)(this,function(n){return(null==e?void 0:e.uid)?(console.log("auth state logged in"),h(!1)):(i.fZ.signOut(i.I8),console.log("auth state logged out"),t("/login")),[2]})}),function(t){return e.apply(this,arguments)}));return function(){return n()}},[]),o?(0,a.jsx)("div",{className:"flex justify-center items-center min-h-screen bg-gray-100",children:(0,a.jsx)(f.frZ,{size:30,className:"animate-spin"})}):(0,a.jsx)(r,(0,l.Z)({},e))})}},function(e){e.O(0,[955,464,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);
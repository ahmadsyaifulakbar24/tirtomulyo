(this.webpackJsonptirtomulyo=this.webpackJsonptirtomulyo||[]).push([[0],{89:function(e,a,t){},95:function(e,a,t){},96:function(e,a,t){"use strict";t.r(a);var i=t(0),n=t.n(i),c=t(10),r=t.n(c),s=(t(89),t(74)),o=t(145),l=t(46),u=t(7),d=t(18),j=t(13),b=t(123),m=t(124),g=t(125),p=t(126),h=t(127),x=t(128),O=t(129),f=t(130),k=t(131),v=t(132),w=t(56),y=t(148),N=t(147),C=t(72),q=t.n(C),T=[{name:"Tentang kami",url:"/about"},{name:"Eduwisata",url:"/eduwisata"},{name:"Galleri",url:"/gallery"},{name:"Panduan Wisata",url:"/travel-guide"}],B=t(55),I=t(1),S=Object(b.a)((function(e){return{root:{flexGrow:1},logo:{color:"#fff",cursor:"pointer",flexGrow:1},navLinks:{display:"flex"},drawer:Object(j.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),menuButton:Object(j.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),button:{color:"white",textTransform:"none",padding:e.spacing(0,4,0,4)},drawerPaper:{width:240},active:{color:B.a[900]},activeBackground:{color:"#fff",background:B.a[900]}}})),L=function(){var e=S(),a=Object(u.f)(),t=Object(u.e)(),n=Object(i.useState)(!1),c=Object(d.a)(n,2),r=c[0],s=c[1],o=Object(i.useState)(!1),l=Object(d.a)(o,2),j=l[0],b=l[1],C=function(){s(!r)},B=Object(I.jsx)(m.a,{children:T.map((function(i,n){return Object(I.jsx)(g.a,{button:!0,children:Object(I.jsx)(p.a,{className:"".concat(e.button," ").concat(t.pathname===i.url?e.active:null),onClick:function(){return a(i.url)},children:Object(I.jsx)(h.a,{children:i.name})})},n)}))}),L=Object(I.jsx)(i.Fragment,{children:T.map((function(i,n){return Object(I.jsx)(p.a,{className:"".concat(e.button," ").concat(t.pathname===i.url?j?e.activeBackground:e.active:null),color:"inherit",variant:j&&t.pathname===i.url?"contained":"text",onClick:function(){return a(i.url)},children:Object(I.jsx)(h.a,{children:i.name})})}))});return window.addEventListener("scroll",(function(){window.scrollY>=80?b(!0):b(!1)})),Object(I.jsxs)("div",{className:e.root,children:[Object(I.jsxs)(x.a,{elevation:"0",position:"fixed",color:j?"primary":"transparent",children:[Object(I.jsx)(O.a,{}),Object(I.jsx)(f.a,{children:Object(I.jsxs)(k.a,{disableGutters:!0,children:[Object(I.jsx)(v.a,{color:"fff","aria-label":"open drawer",edge:"start",onClick:C,className:e.menuButton,children:Object(I.jsx)(q.a,{})}),Object(I.jsx)(w.a,{variant:"h6",className:e.logo,onClick:function(){return a("/")},children:"Desa Tirtomulyo"}),Object(I.jsx)(y.a,{xsDown:!0,implementation:"css",children:L})]})})]}),Object(I.jsx)(y.a,{smUp:!0,implementation:"css",children:Object(I.jsx)("nav",{className:e.drawer,children:Object(I.jsx)(N.a,{classes:{paper:e.drawerPaper},variant:"temporary",anchor:"left",open:r,onClose:C,ModalProps:{keepMounted:!0},children:B})})})]})},A=t(134),M=t(73),P=t.n(M),W=Object(b.a)((function(e){return{fab:{position:"fixed",bottom:e.spacing(3),right:e.spacing(2)}}})),D=function(){window.scrollTo(0,0)},E=function(){var e=W();return Object(I.jsx)(A.a,{className:e.fab,color:"primary","aria-label":"add",onClick:D,children:Object(I.jsx)(P.a,{})})},F=t(146),z=t(135),G=Object(b.a)((function(e){return{root:{marginTop:e.spacing(10)},navLink:{display:"flex"},button:{textTransform:"none",color:"#fff",padding:e.spacing(0,4,0,4)},copyright:Object(j.a)({flexGrow:1,fontWeight:500,padding:e.spacing(2)},e.breakpoints.down("sm"),{textAlign:"center"})}})),R=function(){var e=G(),a=Object(u.f)(),t=Object(I.jsx)(m.a,{className:e.navLink,children:T.map((function(t,i){return Object(I.jsx)(p.a,{className:e.button,size:"small",onClick:function(){return a(t.url)},children:t.name})}))});return Object(I.jsx)("footer",{className:e.root,children:Object(I.jsx)(F.a,{py:{lg:1},bgcolor:"primary.main",color:"primary.contrastText",children:Object(I.jsx)(f.a,{children:Object(I.jsxs)(z.a,{container:!0,alignItems:"center",children:[Object(I.jsx)("div",{className:e.copyright,children:"Created By Ahmad Syaiful Akbar \xa9 2021"}),Object(I.jsx)(y.a,{mdDown:!0,implementation:"css",children:Object(I.jsx)("div",{children:t})})]})})})})};var Y=function(e){var a=e.children,t=Object(i.useState)(!0),n=Object(d.a)(t,2),c=n[0],r=n[1];return window.addEventListener("scroll",(function(){window.scrollY>=80?r(!0):r(!1)})),Object(I.jsxs)("div",{children:[Object(I.jsx)(L,{}),Object(I.jsx)("div",{children:a}),c?Object(I.jsx)(E,{}):null,Object(I.jsx)(R,{})]})},K=t(100),J="./assets/images/",H=Object(b.a)((function(e){return{root:Object(j.a)({backgroundImage:"url(".concat(J,"banner.jpg)"),height:"30vh",width:"100%",backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed",backgroundRepeat:" no-repeat",backgroundPositionY:-275},e.breakpoints.down("sm"),{height:"20vh",backgroundPositionY:-250}),contentCenter:Object(j.a)({position:"absolute",top:195,left:0,display:"block",width:"100%",height:"100%",color:"white",textAlign:"center"},e.breakpoints.down("sm"),{top:105}),title:{fontSize:45,fontWeight:600}}}));var Q=function(e){var a=H();return Object(I.jsx)(i.Fragment,{children:Object(I.jsx)(F.a,{className:a.root,children:Object(I.jsx)(F.a,{className:a.contentCenter,children:Object(I.jsx)(f.a,{children:Object(I.jsx)(w.a,{className:a.title,variant:"h3",children:e.title})})})})})},V=t(136),Z=t(137),U=t(140),X=t(139),$=t(138),_=Object(b.a)({root:{maxWidth:375,margin:"auto"}});var ee=function(){var e=_();return Object(I.jsxs)(V.a,{className:e.root,children:[Object(I.jsxs)(Z.a,{children:[Object(I.jsx)($.a,{component:"img",alt:"Contemplative Reptile",height:"215",image:"".concat(J,"banner.jpg"),title:"Contemplative Reptile"}),Object(I.jsx)(X.a,{children:Object(I.jsx)(w.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Lizard"})})]}),Object(I.jsx)(U.a,{children:Object(I.jsx)(p.a,{size:"small",color:"primary",href:"/eduwisata/detail-eduwisata",children:"Baca Selengkapnya"})})]})},ae=Object(K.a)((function(e){return{root:{marginTop:e.spacing(7)}}}));var te=function(){var e=ae(),a=Object(i.useState)([{data:1},{data:1},{data:1},{data:1},{data:1},{data:1}]),t=Object(d.a)(a,2),n=t[0];return t[1],Object(I.jsxs)("div",{children:[Object(I.jsx)(Q,{title:"Eduwisata"}),Object(I.jsx)(f.a,{className:e.root,children:Object(I.jsx)(z.a,{container:!0,spacing:5,children:n.map((function(e,a){return Object(I.jsx)(z.a,{item:!0,lg:4,sm:6,xs:12,children:Object(I.jsx)(ee,{})})}))})})]})},ie=Object(b.a)((function(e){return{root:{marginTop:e.spacing(7)},image:Object(j.a)({width:"100%",height:"auto"},e.breakpoints.down("md"),{marginBottom:e.spacing(3)}),video:Object(j.a)({},e.breakpoints.down("md"),{marginBottom:e.spacing(3)}),titleContent:{fontWeight:900},subTitle:{marginTop:e.spacing(2)},gridContent:Object(j.a)({},e.breakpoints.down("md"),{flexDirection:"column-reverse",alignItems:"inherit"})}}));var ne=function(){var e=ie();return Object(I.jsxs)(i.Fragment,{children:[Object(I.jsx)(F.a,{children:Object(I.jsx)(f.a,{className:e.root,children:Object(I.jsxs)(z.a,{container:!0,alignItems:"center",justifyContent:"space-between",children:[Object(I.jsx)(z.a,{item:!0,lg:4,xs:12,children:Object(I.jsx)("iframe",{className:e.video,width:"100%",height:"257",src:"https://www.youtube.com/embed/N-E4-PRzJyg",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),Object(I.jsx)(z.a,{container:!0,lg:7,xs:12,children:Object(I.jsxs)(z.a,{item:!0,children:[Object(I.jsx)(w.a,{className:e.titleContent,variant:"h4",color:"primary",children:"Membantu Perkembangan Bisnis Klien Melalui Solusi Digital Yang Inovatif"}),Object(I.jsx)(w.a,{className:e.subTitle,variant:"subtitle1",children:"Sesuai dengan visi kami, kami selalu berusaha untuk mengembangkan aplikasi web dan mobile inovatif yang disukai pengguna dan dapat memajukan bisnis klien. Dengan lebih dari 10 tahun pengalaman dalam bidang pengembangan aplikasi, kami menyediakan servis komprehensif untuk produk digital Anda:"})]})})]})})}),Object(I.jsx)(F.a,{bgcolor:B.a[50],py:7,className:e.root,children:Object(I.jsx)(f.a,{children:Object(I.jsxs)(z.a,{className:e.gridContent,container:!0,alignItems:"center",justifyContent:"space-between",children:[Object(I.jsx)(z.a,{container:!0,lg:7,xs:12,children:Object(I.jsxs)(z.a,{item:!0,children:[Object(I.jsx)(w.a,{className:e.titleContent,variant:"h4",color:"primary",children:"Kami Adalah Bagian Dari Tim Anda"}),Object(I.jsx)(w.a,{className:e.subTitle,variant:"subtitle1",children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, fugit? Consectetur excepturi voluptatibus inventore quasi quos distinctio eius odit facilis quo dolorem saepe, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, fugit? Consectetur excepturi voluptatibus inventore quasi quos distinctio eius odit facilis quo dolorem saepe,"})]})}),Object(I.jsx)(z.a,{item:!0,lg:4,xs:12,children:Object(I.jsx)("iframe",{className:e.video,width:"100%",height:"257",src:"https://www.youtube.com/embed/uB9RdXJVH1Y",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})]})})})]})};var ce=function(){return Object(I.jsxs)(i.Fragment,{children:[Object(I.jsx)(Q,{title:"Tentang Kami"}),Object(I.jsx)(ne,{})]})},re=Object(b.a)((function(e){return{root:{marginTop:e.spacing(5)},title:{fontWeight:600,paddingBottom:e.spacing(3)},image:{width:"100%"},description:{marginTop:15}}}));var se=function(){var e=re();return Object(I.jsxs)("div",{children:[Object(I.jsx)(Q,{}),Object(I.jsxs)(f.a,{className:e.root,children:[Object(I.jsx)(w.a,{className:e.title,variant:"h3",component:"h2",children:"Ini title Blog"}),Object(I.jsx)("img",{className:e.image,src:"".concat(J,"banner.jpg"),alt:"title"}),Object(I.jsx)(w.a,{className:e.description,color:"textSecondary",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cum sit ad debitis ab eius accusantium fuga atque quos voluptatibus adipisci aliquam maiores, earum reiciendis explicabo qui cumque ullam dignissimos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cum sit ad debitis ab eius accusantium fuga atque quos voluptatibus adipisci aliquam maiores, earum reiciendis explicabo qui cumque ullam dignissimos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cum sit ad debitis ab eius accusantium fuga atque quos voluptatibus adipisci aliquam maiores, earum reiciendis explicabo qui cumque ullam dignissimos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cum sit ad debitis ab eius accusantium fuga atque quos voluptatibus adipisci aliquam maiores, earum reiciendis explicabo qui cumque ullam dignissimos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cum sit ad debitis ab eius accusantium fuga atque quos voluptatibus adipisci aliquam maiores, earum reiciendis explicabo qui cumque ullam dignissimos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cum sit ad debitis ab eius accusantium fuga atque quos voluptatibus adipisci aliquam maiores, earum reiciendis explicabo qui cumque ullam dignissimos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cum sit ad debitis ab eius accusantium fuga atque quos voluptatibus adipisci aliquam maiores, earum reiciendis explicabo qui cumque ullam dignissimos?"})]})]})},oe=t(141),le=t(142),ue=t(143),de=t(52),je=t.n(de),be=t(133),me=t(19),ge=Object(b.a)((function(e){return{root:{marginTop:e.spacing(7)},groupGallery:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},imageList:{transform:"translateZ(0)"},titleBar:{background:"linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"},icon:{color:"white"},titleContent:{fontWeight:900,marginBottom:e.spacing(3)}}})),pe=[{img:"".concat(J,"banner.jpg"),title:"Image",author:"author",cols:1.5,colsMobile:1.5},{img:"".concat(J,"banner.jpg"),title:"Image",author:"author",cols:1.5,colsMobile:1.5},{img:"".concat(J,"banner.jpg"),title:"Image",author:"author",cols:1,colsMobile:3},{img:"".concat(J,"banner.jpg"),title:"Image",author:"author",cols:1,colsMobile:1.5},{img:"".concat(J,"banner.jpg"),title:"Image",author:"author",cols:1,colsMobile:1.5}];var he=function(){var e=ge(),a=Object(me.a)(),t=Object(be.a)(a.breakpoints.down("sm")),n=t?1:2;return Object(I.jsxs)(i.Fragment,{children:[Object(I.jsx)(Q,{title:"Gallery"}),Object(I.jsx)(F.a,{className:e.root,children:Object(I.jsx)(f.a,{children:Object(I.jsx)("div",{className:e.groupGallery,children:Object(I.jsx)(oe.a,{rowHeight:200,gap:1,className:e.imageList,cols:3,children:pe.map((function(a){return Object(I.jsxs)(le.a,{cols:t?a.colsMobile:a.cols,rows:n,children:[Object(I.jsx)("img",{src:a.img,alt:a.title}),Object(I.jsx)(ue.a,{title:a.title,position:"top",actionIcon:Object(I.jsx)(v.a,{"aria-label":"star ".concat(a.title),className:e.icon,children:Object(I.jsx)(je.a,{})}),actionPosition:"left",className:e.titleBar})]},a.img)}))})})})})]})},xe=Object(b.a)((function(e){var a;return{root:{backgroundImage:"url(".concat(J,"banner.jpg)"),height:"100vh",width:"100%",backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed"},contentCenter:{position:"absolute",top:150,left:0,display:"block",width:"100%",height:"100%",color:"white",textAlign:"center"},logo:(a={},Object(j.a)(a,e.breakpoints.down("sm"),{width:"50%"}),Object(j.a)(a,"height","auto"),a),title:{paddingTop:"1%",fontSize:45,fontWeight:600}}}));var Oe=function(){var e=xe();return Object(I.jsx)(i.Fragment,{children:Object(I.jsx)(F.a,{className:e.root,children:Object(I.jsx)(f.a,{children:Object(I.jsxs)(F.a,{className:e.contentCenter,children:[Object(I.jsx)("img",{className:e.logo,src:"".concat(J,"kendal.png"),alt:"logo-kendal"}),Object(I.jsxs)(w.a,{className:e.title,variant:"h3",children:["Selamat Datang Ke Desa Tirtomulyo ",Object(I.jsx)("br",{}),"Desa Wisata Penuh Keindahan"]})]})})})})},fe=Object(b.a)((function(e){return{root:{marginTop:e.spacing(3)},image:{width:"100%",height:"auto",borderRadius:10},titleContent:{fontWeight:900},subTitle:{marginTop:e.spacing(2)},gridContent:{marginTop:e.spacing(3)},gridContentMobile:Object(j.a)({},e.breakpoints.down("md"),{marginTop:e.spacing(3)}),gridParent:Object(j.a)({},e.breakpoints.down("md"),{flexDirection:"column-reverse"})}}));var ke=function(e){var a=fe();return Object(I.jsxs)("div",{className:a.root,children:[Object(I.jsx)(F.a,{bgcolor:B.a[50],py:7,children:Object(I.jsx)(f.a,{children:Object(I.jsxs)(z.a,{container:!0,alignItems:"center",justifyContent:"space-between",children:[Object(I.jsx)(z.a,{item:!0,lg:5,xs:12,children:Object(I.jsx)("img",{className:a.image,src:"".concat(J,"content1.jpg"),alt:""})}),Object(I.jsx)(z.a,{container:!0,lg:6,xs:12,children:Object(I.jsxs)(z.a,{item:!0,className:a.gridContentMobile,children:[Object(I.jsx)(w.a,{className:a.titleContent,variant:"h4",color:"primary",children:"Buat Website anda dengan cepat"}),Object(I.jsx)(w.a,{className:a.subTitle,variant:"subtitle1",children:"Sebutkan satu perusahaan hebat yang tidak punya website, sepertinya Anda akan kesulitan. Terutama di era setelah COVID, di mana semua hal dilakukan secara digital, Anda akan ketinggalan jika tidak dapat ditemukan secara online. Membuat website yang baik begitu penting karena 57% pengguna menyatakan mereka tidak mau merekomendasikan bisnis dengan website yang jelek. Tapi jangan khawatir, jika Anda ingin meluncurkan website yang didesain dengan baik ataupun membuat pengalaman digital baru untuk pelanggan Anda, tim kami Software siap membantu!"})]})})]})})}),Object(I.jsx)(F.a,{py:7,children:Object(I.jsx)(f.a,{children:Object(I.jsxs)(z.a,{className:a.gridParent,container:!0,alignItems:"center",justifyContent:"space-between",children:[Object(I.jsx)(z.a,{className:a.gridContentMobile,container:!0,lg:6,xs:12,children:Object(I.jsxs)(z.a,{item:!0,children:[Object(I.jsx)(w.a,{className:a.titleContent,variant:"h4",color:"primary",children:"Buat Aplikasi Mobile Anda"}),Object(I.jsx)(w.a,{className:a.subTitle,variant:"subtitle1",children:"Kami menyediakan jasa pengembangan aplikasi mobile sesuai dengan kebutuhan bisnis Anda. Apa yang membedakan kami dari yang lain adalah desain kami yang cermat, kualitas aplikasi yang baik, dan fungsionalitas yang canggih dari aplikasi mobile Anda. Dengan pengalaman meluncurkan ratusan aplikasi iOS dan Android berkualitas, kami menghadirkan produk digital terbaik yang menyenangkan pengguna dan terintegrasi dengan tujuan bisnis Anda."})]})}),Object(I.jsx)(z.a,{item:!0,lg:5,xs:12,children:Object(I.jsx)("img",{className:a.image,src:"".concat(J,"content2.jpg"),alt:""})})]})})})]})},ve=[{img:"".concat(J,"banner.jpg"),title:"Image",author:"author",cols:1.5,colsMobile:1.5},{img:"".concat(J,"banner.jpg"),title:"Image",author:"author",cols:1.5,colsMobile:1.5},{img:"".concat(J,"banner.jpg"),title:"Image",author:"author",cols:1,colsMobile:3},{img:"".concat(J,"banner.jpg"),title:"Image",author:"author",cols:1,colsMobile:1.5},{img:"".concat(J,"banner.jpg"),title:"Image",author:"author",cols:1,colsMobile:1.5}],we=Object(b.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},imageList:{transform:"translateZ(0)"},titleBar:{background:"linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"},icon:{color:"white"},titleContent:{fontWeight:900,marginBottom:e.spacing(3)}}}));var ye=function(){var e=we(),a=Object(me.a)(),t=Object(be.a)(a.breakpoints.down("sm")),i=t?1:2;return Object(I.jsx)(F.a,{bgcolor:B.a[50],py:3,children:Object(I.jsxs)(f.a,{children:[Object(I.jsx)(w.a,{className:e.titleContent,variant:"h4",color:"primary",children:"Gallery"}),Object(I.jsx)("div",{className:e.root,children:Object(I.jsx)(oe.a,{rowHeight:200,gap:1,className:e.imageList,cols:3,children:ve.map((function(a){return Object(I.jsxs)(le.a,{cols:t?a.colsMobile:a.cols,rows:i,children:[Object(I.jsx)("img",{src:a.img,alt:a.title}),Object(I.jsx)(ue.a,{title:a.title,position:"top",actionIcon:Object(I.jsx)(v.a,{"aria-label":"star ".concat(a.title),className:e.icon,children:Object(I.jsx)(je.a,{})}),actionPosition:"left",className:e.titleBar})]},a.img)}))})}),Object(I.jsx)(z.a,{container:!0,justifyContent:"center",style:{paddingTop:30},children:Object(I.jsx)(p.a,{variant:"contained",color:"primary",size:"large",href:"/gallery",children:"Lihat Lebih Banyak"})})]})})},Ne=t(144),Ce=Object(b.a)((function(e){return{card:{minWidth:275},title:{fontSize:17},price:{fontWeight:600},subPrice:{fontSize:17}}}));var qe=function(e){var a=Ce();return Object(I.jsxs)(V.a,{className:a.card,variant:"outlined",children:[Object(I.jsxs)(X.a,{children:[Object(I.jsxs)(F.a,{sx:{mb:3},children:[Object(I.jsx)(w.a,{className:a.title,color:"textSecondary",gutterBottom:!0,align:"center",children:"Paket A"}),Object(I.jsxs)(w.a,{className:a.price,variant:"h4",component:"h2",align:"center",children:["Rp. 140.000",Object(I.jsx)("span",{className:a.subPrice,children:"/orang"})]})]}),Object(I.jsx)(Ne.a,{variant:"middle"}),Object(I.jsx)(F.a,{sx:{mt:3},children:"asfalsdfl asdfklj kjslf"})]}),Object(I.jsx)(U.a,{children:Object(I.jsx)(p.a,{fullWidth:!0,variant:"contained",color:"primary",size:"large",children:"Pesan"})})]})},Te=Object(b.a)((function(e){return{root:{margin:e.spacing(10,0,10,0),flexGrow:1}}}));var Be=function(){var e=Te();return Object(I.jsx)(f.a,{children:Object(I.jsx)("div",{className:e.root,children:Object(I.jsxs)(z.a,{container:!0,spacing:3,children:[Object(I.jsx)(z.a,{item:!0,xs:12,sm:4,children:Object(I.jsx)(qe,{})}),Object(I.jsx)(z.a,{item:!0,xs:12,sm:4,children:Object(I.jsx)(qe,{})}),Object(I.jsx)(z.a,{item:!0,xs:12,sm:4,children:Object(I.jsx)(qe,{})})]})})})};var Ie=function(){return Object(I.jsxs)(i.Fragment,{children:[Object(I.jsx)(O.a,{}),Object(I.jsx)(Oe,{}),Object(I.jsx)(Be,{}),Object(I.jsx)(ke,{}),Object(I.jsx)(ye,{})]})},Se=Object(s.a)({palette:{primary:{main:"#388e3c"},secondary:{main:"#11cb5f"}}});function Le(){return Object(I.jsx)(o.a,{theme:Se,children:Object(I.jsx)(l.a,{basename:"/tirtomulyo",children:Object(I.jsx)(Y,{children:Object(I.jsxs)(u.c,{children:[Object(I.jsx)(u.a,{path:"/",element:Object(I.jsx)(Ie,{})}),Object(I.jsx)(u.a,{path:"/gallery",element:Object(I.jsx)(he,{})}),Object(I.jsx)(u.a,{path:"/eduwisata",element:Object(I.jsx)(te,{})}),Object(I.jsx)(u.a,{path:"/eduwisata/:slug",element:Object(I.jsx)(se,{})}),Object(I.jsx)(u.a,{path:"/about",element:Object(I.jsx)(ce,{})})]})})})})}t(95);var Ae=function(){return Object(I.jsx)(Le,{})},Me=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,150)).then((function(a){var t=a.getCLS,i=a.getFID,n=a.getFCP,c=a.getLCP,r=a.getTTFB;t(e),i(e),n(e),c(e),r(e)}))};r.a.render(Object(I.jsx)(n.a.StrictMode,{children:Object(I.jsx)(Ae,{})}),document.getElementById("root")),Me()}},[[96,1,2]]]);
//# sourceMappingURL=main.25a9ef19.chunk.js.map
(function(e){function t(t){for(var c,s,i=t[0],n=t[1],o=t[2],b=0,f=[];b<i.length;b++)s=i[b],Object.prototype.hasOwnProperty.call(l,s)&&l[s]&&f.push(l[s][0]),l[s]=0;for(c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c]);d&&d(t);while(f.length)f.shift()();return r.push.apply(r,o||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],c=!0,i=1;i<a.length;i++){var n=a[i];0!==l[n]&&(c=!1)}c&&(r.splice(t--,1),e=s(s.s=a[0]))}return e}var c={},l={app:0},r=[];function s(t){if(c[t])return c[t].exports;var a=c[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=c,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)s.d(a,c,function(t){return e[t]}.bind(null,c));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],n=i.push.bind(i);i.push=t,i=i.slice();for(var o=0;o<i.length;o++)t(i[o]);var d=n;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"51ab":function(e,t,a){e.exports=a.p+"img/KODEX_new_bi.74c35a1e.png"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var c=a("7a23");a("7b17"),a("f9e3");function l(e,t,a,l,r,s){var i=Object(c["w"])("Navbar"),n=Object(c["w"])("router-view");return Object(c["r"])(),Object(c["e"])(c["a"],null,[Object(c["i"])(i),Object(c["i"])(n,{"상품리스트":r.상품리스트},null,8,["상품리스트"])],64)}var r=a("51ab"),s=a.n(r),i={class:"navbar navbar-expand-lg navbar-light bg-light fixed-top"},n={class:"container"},o=Object(c["f"])("img",{src:s.a,style:{"padding-bottom":"0px",height:"auto",width:"120px",display:"block"}},null,-1),d=[o],b=Object(c["f"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarColor01","aria-controls":"navbarColor01","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(c["f"])("span",{class:"navbar-toggler-icon"})],-1),f={class:"collapse navbar-collapse",id:"navbarColor01"},h={class:"navbar-nav me-auto"},u={class:"nav-item"},O=Object(c["h"])("Home "),j=Object(c["f"])("span",{class:"visually-hidden"},"(current)",-1),p=[O,j],v={class:"nav-item"},m=Object(c["f"])("li",{class:"nav-item dropdown"},[Object(c["f"])("a",{class:"nav-link dropdown-toggle","data-bs-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"true","aria-expanded":"false"},"SNS"),Object(c["f"])("div",{class:"dropdown-menu"},[Object(c["f"])("a",{class:"dropdown-item",href:"#"},"Youtube"),Object(c["f"])("a",{class:"dropdown-item",href:"#"},"KakaoTalk"),Object(c["f"])("a",{class:"dropdown-item",href:"#"},"Blog"),Object(c["f"])("div",{class:"dropdown-divider"}),Object(c["f"])("a",{class:"dropdown-item",href:"#"},"kodex.com"),Object(c["f"])("a",{class:"dropdown-item",href:"http://m.kodex.com/product_view.do?fId=2ETFF5"},"samsungfund.com")])],-1),g=Object(c["f"])("form",{class:"d-flex"},[Object(c["f"])("input",{class:"form-control me-sm-2",type:"text",placeholder:"Search"}),Object(c["f"])("button",{class:"btn btn-danger my-2 my-sm-0",type:"submit"},"Search")],-1);function w(e,t,a,l,r,s){return Object(c["r"])(),Object(c["e"])("nav",i,[Object(c["f"])("div",n,[Object(c["f"])("a",{class:"navbar-brand",href:"#",onClick:t[0]||(t[0]=function(e){return s.moveRoute("/")})},d),b,Object(c["f"])("div",f,[Object(c["f"])("ul",h,[Object(c["f"])("li",u,[Object(c["f"])("a",{class:"nav-link",href:"#",onClick:t[1]||(t[1]=function(e){return s.moveRoute("/")})},p)]),Object(c["f"])("li",v,[Object(c["f"])("a",{class:"nav-link",href:"#",onClick:t[2]||(t[2]=function(e){return s.moveRoute("/products")})},"Products")]),m]),g])])])}var x={methods:{moveRoute:function(e){var t=this.$router;t.push(e),console.log(this.$router.currentRoute._rawValue.fullPath)}}},y=a("6b0d"),E=a.n(y);const k=E()(x,[["render",w]]);var M=k,T=[{id:"1",code:"ETF01",name:"KODEX 200",nav:"1220000",inav:"1203000",trade:"100"},{id:"2",code:"ETF02",name:"KODEX 인버스",nav:"120000",inav:"10000",trade:"100"},{id:"3",code:"ETF03",name:"KODEX 레버리지",nav:"10000",inav:"120000",trade:"100"},{id:"4",code:"ETF04",name:"KODEX 건설",nav:"10000",inav:"10000",trade:"100"},{id:"5",code:"ETF05",name:"KODEX IT",nav:"10000",inav:"10000",trade:"100"},{id:"6",code:"ETF06",name:"KODEX 자동차",nav:"10000",inav:"10000",trade:"100"},{id:"7",code:"ETF07",name:"KODEX 2차전지",nav:"10000",inav:"10000",trade:"100"},{id:"8",code:"ETF07",name:"KODEX 반도체",nav:"10000",inav:"10000",trade:"100"},{id:"5",code:"ETF05",name:"KODEX IT",nav:"10000",inav:"10000",trade:"100"},{id:"6",code:"ETF06",name:"KODEX 자동차",nav:"10000",inav:"10000",trade:"100"},{id:"7",code:"ETF07",name:"KODEX 2차전지",nav:"10000",inav:"10000",trade:"100"},{id:"8",code:"ETF07",name:"KODEX 반도체",nav:"10000",inav:"10000",trade:"100"},{id:"5",code:"ETF05",name:"KODEX IT",nav:"10000",inav:"10000",trade:"100"},{id:"6",code:"ETF06",name:"KODEX 자동차",nav:"10000",inav:"10000",trade:"100"},{id:"7",code:"ETF07",name:"KODEX 2차전지",nav:"10000",inav:"10000",trade:"100"},{id:"8",code:"ETF07",name:"KODEX 반도체",nav:"10000",inav:"10000",trade:"100"}],P={name:"App",data:function(){return{"상품리스트":T,"라우터주소":3}},components:{Navbar:M},methods:{}};const A=E()(P,[["render",l]]);var C=A,R=a("6c02"),Y=Object(c["g"])('<div class="container"><nav class="navbar navbar-expand-lg navbar-dark bg-danger fixed-top-product" aria-label="Twelfth navbar example"><div class="navbar-collapse justify-content-md-center" id="navbarsExample10"><ul class="navbar-nav"><li class="nav-item mt-2"><a class="nav-link active text-center" aria-current="page" href="#"><strong>KODEX 미국 나스닥 레버리지 (12/2)</strong></a></li></ul></div></nav></div>',1),F=Object(c["f"])("main",{role:"main"},[Object(c["f"])("div",{id:"myCarousel",class:"carousel slide","data-bs-ride":"carousel"},[Object(c["f"])("div",{class:"carousel-indicators"},[Object(c["f"])("button",{type:"button","data-bs-target":"#myCarousel","data-bs-slide-to":"0",class:"active","aria-current":"true","aria-label":"Slide 1"}),Object(c["f"])("button",{type:"button","data-bs-target":"#myCarousel","data-bs-slide-to":"1","aria-label":"Slide 2"}),Object(c["f"])("button",{type:"button","data-bs-target":"#myCarousel","data-bs-slide-to":"2","aria-label":"Slide 3"}),Object(c["f"])("button",{type:"button","data-bs-target":"#myCarousel","data-bs-slide-to":"3","aria-label":"Slide 4"})]),Object(c["f"])("div",{class:"carousel-inner"},[Object(c["f"])("div",{class:"carousel-item active"},[Object(c["f"])("svg",{class:"bd-placeholder-img",width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",preserveAspectRatio:"xMidYMid slice",focusable:"false"},[Object(c["f"])("rect",{width:"100%",height:"100%",fill:"#777"})]),Object(c["f"])("div",{class:"container"},[Object(c["f"])("div",{class:"carousel-caption text-start"},[Object(c["f"])("h1",null,[Object(c["h"])("나스닥 레버리지😡"),Object(c["f"])("br"),Object(c["h"])("12월 2일 국내상장!")]),Object(c["f"])("p",null,[Object(c["h"])("미국 투자의 새로운 패러다임"),Object(c["f"])("br"),Object(c["h"])("곧 한국 상륙!")]),Object(c["f"])("br"),Object(c["f"])("p",null,[Object(c["f"])("a",{class:"btn btn-lg btn-danger",href:"#"},"바로가기")])])])]),Object(c["f"])("div",{class:"carousel-item"},[Object(c["f"])("svg",{class:"bd-placeholder-img",width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",preserveAspectRatio:"xMidYMid slice",focusable:"false"},[Object(c["f"])("rect",{width:"100%",height:"100%",fill:"#777"})]),Object(c["f"])("div",{class:"container"},[Object(c["f"])("div",{class:"carousel-caption text"},[Object(c["f"])("h1",null,[Object(c["h"])("나스닥 레버리지 "),Object(c["f"])("br"),Object(c["h"])("1분 안에 끝내기")]),Object(c["f"])("br"),Object(c["f"])("p",null,"1분 안에 상품 파악 끝!"),Object(c["f"])("br"),Object(c["f"])("p",null,[Object(c["f"])("a",{class:"btn btn-lg btn-danger",href:"#"},"바로가기")])])])]),Object(c["f"])("div",{class:"carousel-item"},[Object(c["f"])("svg",{class:"bd-placeholder-img",width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",preserveAspectRatio:"xMidYMid slice",focusable:"false"},[Object(c["f"])("rect",{width:"100%",height:"100%",fill:"#777"})]),Object(c["f"])("div",{class:"container"},[Object(c["f"])("div",{class:"carousel-caption text"},[Object(c["f"])("h1",null,[Object(c["h"])("혜부장 ETF"),Object(c["f"])("br"),Object(c["h"])("유튜브 영상")]),Object(c["f"])("p",null,[Object(c["h"])("나스닥 레버리지 인버스?"),Object(c["f"])("br"),Object(c["h"])("얼른 혜부해보자!")]),Object(c["f"])("br"),Object(c["f"])("p",null,[Object(c["f"])("a",{class:"btn btn-lg btn-danger",href:"#"},"바로가기")])])])]),Object(c["f"])("div",{class:"carousel-item"},[Object(c["f"])("svg",{class:"bd-placeholder-img",width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",preserveAspectRatio:"xMidYMid slice",focusable:"false"},[Object(c["f"])("rect",{width:"100%",height:"100%",fill:"#777"})]),Object(c["f"])("div",{class:"container"},[Object(c["f"])("div",{class:"carousel-caption text-end"},[Object(c["f"])("h1",null,[Object(c["h"])("신규 상장 EVENT"),Object(c["f"])("br"),Object(c["h"])("12.2~12.31")]),Object(c["f"])("p",null,[Object(c["h"])("얼리버드는 항상 옳다."),Object(c["f"])("br"),Object(c["h"])("가자구, 어서!")]),Object(c["f"])("br"),Object(c["f"])("p",null,[Object(c["f"])("a",{class:"btn btn-lg btn-danger",href:"#"},"바로가기")])])])])]),Object(c["f"])("button",{class:"carousel-control-prev",type:"button","data-bs-target":"#myCarousel","data-bs-slide":"prev"},[Object(c["f"])("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),Object(c["f"])("span",{class:"visually-hidden"},"Previous")]),Object(c["f"])("button",{class:"carousel-control-next",type:"button","data-bs-target":"#myCarousel","data-bs-slide":"next"},[Object(c["f"])("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),Object(c["f"])("span",{class:"visually-hidden"},"Next")])]),Object(c["f"])("div",{class:"container marketing"},[Object(c["f"])("div",{class:"row"},[Object(c["f"])("div",{class:"col-lg-4 text-center"},[Object(c["f"])("svg",{class:"bd-placeholder-img rounded-circle",width:"140",height:"140",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":"Placeholder: 140x140",preserveAspectRatio:"xMidYMid slice",focusable:"false"},[Object(c["f"])("title",null,"Placeholder"),Object(c["f"])("rect",{width:"100%",height:"100%",fill:"#777"}),Object(c["f"])("text",{x:"50%",y:"50%",fill:"#777",dy:".3em"},"140x140")]),Object(c["f"])("h2",null,"Top 1"),Object(c["f"])("p",null,"Some representative placeholder content for the three columns of text below the carousel. This is the first column."),Object(c["f"])("p",null,[Object(c["f"])("a",{class:"btn btn-danger",href:"#"},"View details »")])]),Object(c["f"])("div",{class:"col-lg-4 text-center"},[Object(c["f"])("svg",{class:"bd-placeholder-img rounded-circle",width:"140",height:"140",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":"Placeholder: 140x140",preserveAspectRatio:"xMidYMid slice",focusable:"false"},[Object(c["f"])("title",null,"Placeholder"),Object(c["f"])("rect",{width:"100%",height:"100%",fill:"#777"}),Object(c["f"])("text",{x:"50%",y:"50%",fill:"#777",dy:".3em"},"140x140")]),Object(c["f"])("h2",null,"Top 2"),Object(c["f"])("p",null,"Another exciting bit of representative placeholder content. This time, we've moved on to the second column."),Object(c["f"])("p",null,[Object(c["f"])("a",{class:"btn btn-danger",href:"#"},"View details »")])]),Object(c["f"])("div",{class:"col-lg-4 text-center"},[Object(c["f"])("svg",{class:"bd-placeholder-img rounded-circle",width:"140",height:"140",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":"Placeholder: 140x140",preserveAspectRatio:"xMidYMid slice",focusable:"false"},[Object(c["f"])("title",null,"Placeholder"),Object(c["f"])("rect",{width:"100%",height:"100%",fill:"#777"}),Object(c["f"])("text",{x:"50%",y:"50%",fill:"#777",dy:".3em"},"140x140")]),Object(c["f"])("h2",null,"Top3"),Object(c["f"])("p",null,"And lastly this, the third column of representative placeholder content."),Object(c["f"])("p",null,[Object(c["f"])("a",{class:"btn btn-danger",href:"#"},"View details »")])])]),Object(c["f"])("hr",{class:"featurette-divider"}),Object(c["f"])("div",{class:"row featurette"},[Object(c["f"])("div",{class:"col-md-7"},[Object(c["f"])("h2",{class:"featurette-heading"},[Object(c["h"])("First featurette heading. "),Object(c["f"])("span",{class:"text-muted"},"It’ll blow your mind.")]),Object(c["f"])("p",{class:"lead"},"Some great placeholder content for the first featurette here. Imagine some exciting prose here.")]),Object(c["f"])("div",{class:"col-md-5"},[Object(c["f"])("svg",{class:"bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto",width:"500",height:"500",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":"Placeholder: 500x500",preserveAspectRatio:"xMidYMid slice",focusable:"false"},[Object(c["f"])("title",null,"Placeholder"),Object(c["f"])("rect",{width:"100%",height:"100%",fill:"#eee"}),Object(c["f"])("text",{x:"50%",y:"50%",fill:"#aaa",dy:".3em"},"500x500")])])]),Object(c["f"])("hr",{class:"featurette-divider"}),Object(c["f"])("div",{class:"row featurette"},[Object(c["f"])("div",{class:"col-md-7 order-md-2"},[Object(c["f"])("h2",{class:"featurette-heading"},[Object(c["h"])("Oh yeah, it’s that good. "),Object(c["f"])("span",{class:"text-muted"},"See for yourself.")]),Object(c["f"])("p",{class:"lead"},"Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.")]),Object(c["f"])("div",{class:"col-md-5 order-md-1"},[Object(c["f"])("svg",{class:"bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto",width:"500",height:"500",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":"Placeholder: 500x500",preserveAspectRatio:"xMidYMid slice",focusable:"false"},[Object(c["f"])("title",null,"Placeholder"),Object(c["f"])("rect",{width:"100%",height:"100%",fill:"#eee"}),Object(c["f"])("text",{x:"50%",y:"50%",fill:"#aaa",dy:".3em"},"500x500")])])]),Object(c["f"])("hr",{class:"featurette-divider"}),Object(c["f"])("div",{class:"row featurette"},[Object(c["f"])("div",{class:"col-md-7"},[Object(c["f"])("h2",{class:"featurette-heading"},[Object(c["h"])("And lastly, this one. "),Object(c["f"])("span",{class:"text-muted"},"Checkmate.")]),Object(c["f"])("p",{class:"lead"},"And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.")]),Object(c["f"])("div",{class:"col-md-5"},[Object(c["f"])("svg",{class:"bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto",width:"500",height:"500",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":"Placeholder: 500x500",preserveAspectRatio:"xMidYMid slice",focusable:"false"},[Object(c["f"])("title",null,"Placeholder"),Object(c["f"])("rect",{width:"100%",height:"100%",fill:"#eee"}),Object(c["f"])("text",{x:"50%",y:"50%",fill:"#aaa",dy:".3em"},"500x500")])])]),Object(c["f"])("hr",{class:"featurette-divider"})]),Object(c["f"])("footer",{class:"container"},[Object(c["f"])("p",{class:"float-right"},[Object(c["f"])("a",{href:"#"},"Back to top")]),Object(c["f"])("p",null,[Object(c["h"])("© 2017-2021 Company, Inc. · "),Object(c["f"])("a",{href:"#"},"Privacy"),Object(c["h"])(" · "),Object(c["f"])("a",{href:"#"},"Terms")])])],-1);function D(e,t,a,l,r,s){return Object(c["r"])(),Object(c["e"])(c["a"],null,[Y,F],64)}var K={};const S=E()(K,[["render",D]]);var X=S,V=Object(c["g"])('<link href="carousel.css" rel="stylesheet"><link href="product.css" rel="stylesheet"><div class="container"><nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top-product" aria-label="Twelfth navbar example"><div class="navbar-collapse justify-content-md-center" id="navbarsExample10"><ul class="navbar-nav"><li class="nav-item mt-2"><a class="nav-link active text-center" aria-current="page" href="#"><strong>KODEX 미국 나스닥 인버스 (12/2)</strong></a></li></ul></div></nav></div>',3),_=Object(c["f"])("main",{role:"main"},[Object(c["f"])("div",{id:"myCarousel",class:"carousel slide","data-bs-ride":"carousel"},[Object(c["f"])("div",{class:"carousel-indicators"},[Object(c["f"])("button",{type:"button","data-bs-target":"#myCarousel","data-bs-slide-to":"0",class:"active","aria-current":"true","aria-label":"Slide 1"}),Object(c["f"])("button",{type:"button","data-bs-target":"#myCarousel","data-bs-slide-to":"1","aria-label":"Slide 2"}),Object(c["f"])("button",{type:"button","data-bs-target":"#myCarousel","data-bs-slide-to":"2","aria-label":"Slide 3"}),Object(c["f"])("button",{type:"button","data-bs-target":"#myCarousel","data-bs-slide-to":"3","aria-label":"Slide 4"})]),Object(c["f"])("div",{class:"carousel-inner"},[Object(c["f"])("div",{class:"carousel-item active"},[Object(c["f"])("svg",{class:"bd-placeholder-img",width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",preserveAspectRatio:"xMidYMid slice",focusable:"false"},[Object(c["f"])("rect",{width:"100%",height:"100%",fill:"#777"})]),Object(c["f"])("div",{class:"container"},[Object(c["f"])("div",{class:"carousel-caption text-start"},[Object(c["f"])("h1",null,[Object(c["h"])("나스닥 인버스🥶 "),Object(c["f"])("br"),Object(c["h"])("12월 2일 국내상장!")]),Object(c["f"])("p",null,[Object(c["h"])("미국 투자의 새로운 패러다임"),Object(c["f"])("br"),Object(c["h"])("곧 한국 상륙!")]),Object(c["f"])("br"),Object(c["f"])("p",null,[Object(c["f"])("a",{class:"btn btn-lg btn-primary",href:"#"},"바로가기")])])])]),Object(c["f"])("div",{class:"carousel-item"},[Object(c["f"])("svg",{class:"bd-placeholder-img",width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",preserveAspectRatio:"xMidYMid slice",focusable:"false"},[Object(c["f"])("rect",{width:"100%",height:"100%",fill:"#777"})]),Object(c["f"])("div",{class:"container"},[Object(c["f"])("div",{class:"carousel-caption text"},[Object(c["f"])("h1",null,[Object(c["h"])("나스닥 인버스 "),Object(c["f"])("br"),Object(c["h"])("1분 안에 끝내기")]),Object(c["f"])("br"),Object(c["f"])("p",null,"1분 안에 상품 파악 끝!"),Object(c["f"])("br"),Object(c["f"])("p",null,[Object(c["f"])("a",{class:"btn btn-lg btn-primary",href:"#"},"바로가기")])])])]),Object(c["f"])("div",{class:"carousel-item"},[Object(c["f"])("svg",{class:"bd-placeholder-img",width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",preserveAspectRatio:"xMidYMid slice",focusable:"false"},[Object(c["f"])("rect",{width:"100%",height:"100%",fill:"#777"})]),Object(c["f"])("div",{class:"container"},[Object(c["f"])("div",{class:"carousel-caption text"},[Object(c["f"])("h1",null,[Object(c["h"])("혜부장 ETF"),Object(c["f"])("br"),Object(c["h"])("유튜브 영상")]),Object(c["f"])("p",null,[Object(c["h"])("나스닥 레버리지 인버스?"),Object(c["f"])("br"),Object(c["h"])("얼른 혜부해보자!")]),Object(c["f"])("br"),Object(c["f"])("p",null,[Object(c["f"])("a",{class:"btn btn-lg btn-primary",href:"#"},"바로가기")])])])]),Object(c["f"])("div",{class:"carousel-item"},[Object(c["f"])("svg",{class:"bd-placeholder-img",width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",preserveAspectRatio:"xMidYMid slice",focusable:"false"},[Object(c["f"])("rect",{width:"100%",height:"100%",fill:"#777"})]),Object(c["f"])("div",{class:"container"},[Object(c["f"])("div",{class:"carousel-caption text-end"},[Object(c["f"])("h1",null,[Object(c["h"])("신규 상장 EVENT"),Object(c["f"])("br"),Object(c["h"])("12.2~12.31")]),Object(c["f"])("p",null,[Object(c["h"])("얼리버드는 항상 옳다."),Object(c["f"])("br"),Object(c["h"])("가자구, 어서!")]),Object(c["f"])("br"),Object(c["f"])("p",null,[Object(c["f"])("a",{class:"btn btn-lg btn-primary",href:"#"},"바로가기")])])])])]),Object(c["f"])("button",{class:"carousel-control-prev",type:"button","data-bs-target":"#myCarousel","data-bs-slide":"prev"},[Object(c["f"])("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),Object(c["f"])("span",{class:"visually-hidden"},"Previous")]),Object(c["f"])("button",{class:"carousel-control-next",type:"button","data-bs-target":"#myCarousel","data-bs-slide":"next"},[Object(c["f"])("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),Object(c["f"])("span",{class:"visually-hidden"},"Next")])]),Object(c["f"])("div",{class:"container marketing"},[Object(c["f"])("div",{class:"row"},[Object(c["f"])("div",{class:"col-lg-4 text-center"},[Object(c["f"])("svg",{class:"bd-placeholder-img rounded-circle",width:"140",height:"140",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":"Placeholder: 140x140",preserveAspectRatio:"xMidYMid slice",focusable:"false"},[Object(c["f"])("title",null,"Placeholder"),Object(c["f"])("rect",{width:"100%",height:"100%",fill:"#777"}),Object(c["f"])("text",{x:"50%",y:"50%",fill:"#777",dy:".3em"},"140x140")]),Object(c["f"])("h2",null,"Top 1"),Object(c["f"])("p",null,"Some representative placeholder content for the three columns of text below the carousel. This is the first column."),Object(c["f"])("p",null,[Object(c["f"])("a",{class:"btn btn-primary",href:"#"},"View details »")])]),Object(c["f"])("div",{class:"col-lg-4 text-center"},[Object(c["f"])("svg",{class:"bd-placeholder-img rounded-circle",width:"140",height:"140",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":"Placeholder: 140x140",preserveAspectRatio:"xMidYMid slice",focusable:"false"},[Object(c["f"])("title",null,"Placeholder"),Object(c["f"])("rect",{width:"100%",height:"100%",fill:"#777"}),Object(c["f"])("text",{x:"50%",y:"50%",fill:"#777",dy:".3em"},"140x140")]),Object(c["f"])("h2",null,"Top 2"),Object(c["f"])("p",null,"Another exciting bit of representative placeholder content. This time, we've moved on to the second column."),Object(c["f"])("p",null,[Object(c["f"])("a",{class:"btn btn-primary",href:"#"},"View details »")])]),Object(c["f"])("div",{class:"col-lg-4 text-center"},[Object(c["f"])("svg",{class:"bd-placeholder-img rounded-circle",width:"140",height:"140",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":"Placeholder: 140x140",preserveAspectRatio:"xMidYMid slice",focusable:"false"},[Object(c["f"])("title",null,"Placeholder"),Object(c["f"])("rect",{width:"100%",height:"100%",fill:"#777"}),Object(c["f"])("text",{x:"50%",y:"50%",fill:"#777",dy:".3em"},"140x140")]),Object(c["f"])("h2",null,"Top3"),Object(c["f"])("p",null,"And lastly this, the third column of representative placeholder content."),Object(c["f"])("p",null,[Object(c["f"])("a",{class:"btn btn-primary",href:"#"},"View details »")])])]),Object(c["f"])("hr",{class:"featurette-divider"}),Object(c["f"])("div",{class:"row featurette"},[Object(c["f"])("div",{class:"col-md-7"},[Object(c["f"])("h2",{class:"featurette-heading"},[Object(c["h"])("First featurette heading. "),Object(c["f"])("span",{class:"text-muted"},"It’ll blow your mind.")]),Object(c["f"])("p",{class:"lead"},"Some great placeholder content for the first featurette here. Imagine some exciting prose here.")]),Object(c["f"])("div",{class:"col-md-5"},[Object(c["f"])("svg",{class:"bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto",width:"500",height:"500",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":"Placeholder: 500x500",preserveAspectRatio:"xMidYMid slice",focusable:"false"},[Object(c["f"])("title",null,"Placeholder"),Object(c["f"])("rect",{width:"100%",height:"100%",fill:"#eee"}),Object(c["f"])("text",{x:"50%",y:"50%",fill:"#aaa",dy:".3em"},"500x500")])])]),Object(c["f"])("hr",{class:"featurette-divider"}),Object(c["f"])("div",{class:"row featurette"},[Object(c["f"])("div",{class:"col-md-7 order-md-2"},[Object(c["f"])("h2",{class:"featurette-heading"},[Object(c["h"])("Oh yeah, it’s that good. "),Object(c["f"])("span",{class:"text-muted"},"See for yourself.")]),Object(c["f"])("p",{class:"lead"},"Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.")]),Object(c["f"])("div",{class:"col-md-5 order-md-1"},[Object(c["f"])("svg",{class:"bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto",width:"500",height:"500",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":"Placeholder: 500x500",preserveAspectRatio:"xMidYMid slice",focusable:"false"},[Object(c["f"])("title",null,"Placeholder"),Object(c["f"])("rect",{width:"100%",height:"100%",fill:"#eee"}),Object(c["f"])("text",{x:"50%",y:"50%",fill:"#aaa",dy:".3em"},"500x500")])])]),Object(c["f"])("hr",{class:"featurette-divider"}),Object(c["f"])("div",{class:"row featurette"},[Object(c["f"])("div",{class:"col-md-7"},[Object(c["f"])("h2",{class:"featurette-heading"},[Object(c["h"])("And lastly, this one. "),Object(c["f"])("span",{class:"text-muted"},"Checkmate.")]),Object(c["f"])("p",{class:"lead"},"And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.")]),Object(c["f"])("div",{class:"col-md-5"},[Object(c["f"])("svg",{class:"bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto",width:"500",height:"500",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":"Placeholder: 500x500",preserveAspectRatio:"xMidYMid slice",focusable:"false"},[Object(c["f"])("title",null,"Placeholder"),Object(c["f"])("rect",{width:"100%",height:"100%",fill:"#eee"}),Object(c["f"])("text",{x:"50%",y:"50%",fill:"#aaa",dy:".3em"},"500x500")])])]),Object(c["f"])("hr",{class:"featurette-divider"})]),Object(c["f"])("footer",{class:"container"},[Object(c["f"])("p",{class:"float-right"},[Object(c["f"])("a",{href:"#"},"Back to top")]),Object(c["f"])("p",null,[Object(c["h"])("© 2017-2021 Company, Inc. · "),Object(c["f"])("a",{href:"#"},"Privacy"),Object(c["h"])(" · "),Object(c["f"])("a",{href:"#"},"Terms")])])],-1);function I(e,t,a,l,r,s){return Object(c["r"])(),Object(c["e"])(c["a"],null,[V,_],64)}var N={};const B=E()(N,[["render",I]]);var H=B,L=(a("b0c0"),{class:"card text-white bg-danger mb-3",style:{"max-width":"20rem",cursor:"pointer"}}),$={class:"card-header"},J={class:"card-body"},q={class:"card-title"},U={class:"card-text"},z=Object(c["f"])("br",null,null,-1),G={class:"card-text"};function Q(e,t,a,l,r,s){return Object(c["r"])(),Object(c["e"])("div",L,[Object(c["f"])("div",$,Object(c["y"])(a.상품.code),1),Object(c["f"])("div",J,[Object(c["f"])("h4",q,Object(c["y"])(a.상품.name),1),Object(c["f"])("span",U,"iNAV : "+Object(c["y"])(a.상품.inav)+"원",1),z,Object(c["f"])("span",G,"NAV : "+Object(c["y"])(a.상품.nav)+"원",1)])])}var W={name:"list",data:function(){return{}},props:{"상품":Object}};const Z=E()(W,[["render",Q]]);var ee=Z,te=Object(c["f"])("br",null,null,-1),ae=Object(c["f"])("br",null,null,-1),ce=Object(c["f"])("br",null,null,-1),le=Object(c["f"])("br",null,null,-1),re={class:"container"},se={class:"row justify-content-around left"};function ie(e,t,a,l,r,s){var i=Object(c["w"])("List");return Object(c["r"])(),Object(c["e"])(c["a"],null,[te,ae,ce,le,Object(c["f"])("div",re,[Object(c["f"])("div",se,[(Object(c["r"])(!0),Object(c["e"])(c["a"],null,Object(c["v"])(a.상품리스트,(function(e,t){return Object(c["r"])(),Object(c["d"])(i,{"상품":e,key:t},null,8,["상품"])})),128))])])],64)}var ne={data:function(){return{}},props:{"상품리스트":Object},components:{List:ee}};const oe=E()(ne,[["render",ie]]);var de=oe,be={class:"d-flex h-100 text-center text-white bg-dark"},fe=Object(c["g"])('<div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column"><header class="mb-auto"><div><h3 class="float-md-start mb-0">Cover</h3><nav class="nav nav-masthead justify-content-center float-md-end"><a class="nav-link active" aria-current="page" href="#">Home</a><a class="nav-link" href="#">Features</a><a class="nav-link" href="#">Contact</a></nav></div></header><main class="px-3"><h1>Cover your page.</h1><p class="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p><p class="lead"><a href="#" class="btn btn-lg btn-danger fw-bold">Learn more</a></p></main><footer class="mt-auto text-white-50"><p>Cover template for <a href="https://getbootstrap.com/" class="text-white">Bootstrap</a>, by <a href="https://twitter.com/mdo" class="text-white">@mdo</a>.</p></footer></div>',1),he=[fe];function ue(e,t,a,l,r,s){return Object(c["r"])(),Object(c["e"])("div",be,he)}var Oe={};const je=E()(Oe,[["render",ue]]);var pe=je,ve=Object(c["g"])('<div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light"><div class="col-md-5 p-lg-5 mx-auto my-5"><h2 class="display-7 fw-normal"><strong>미국 ETF 최종보스 국내 상륙!</strong></h2><p class="lead fw-normal mt-4">국내 최초 KODEX 나스닥 레버리지/인버스 신규상장!</p><a class="btn btn-outline-secondary" href="https://www.youtube.com/channel/UCohjHDdtYtoKYtiCSVFoHAw">Coming soon</a></div><div class="product-device shadow-sm d-none d-md-block"></div><div class="product-device product-device-2 shadow-sm d-none d-md-block"></div></div>',1),me={class:"d-md-flex flex-md-equal w-100 my-md-3 ps-md-3"},ge=Object(c["f"])("div",{class:"my-3 p-3"},[Object(c["f"])("h2",{class:"display-7"},"😡KODEX 미국나스닥 레버리지 (x2)"),Object(c["f"])("p",{class:"text-white"},[Object(c["h"])("야수의 "),Object(c["f"])("strong",null,"심장"),Object(c["h"])("을 가지고 있는 당신, "),Object(c["f"])("strong",null,"심장"),Object(c["h"])("을 걸어라.")])],-1),we=Object(c["f"])("div",{class:"bg-dark shadow-sm mx-auto",style:{width:"80%",height:"300px","border-radius":"21px 21px 0 0"}},null,-1),xe=[ge,we],ye=Object(c["f"])("br",null,null,-1),Ee=Object(c["f"])("div",{class:"my-3 py-3"},[Object(c["f"])("h2",{class:"display-7"},"🥶KODEX 미국나스닥 인버스 (-1)"),Object(c["f"])("p",{class:"text-white"},[Object(c["h"])("모두가 "),Object(c["f"])("strong",null,"Yes"),Object(c["h"])("를 외칠 때 당신은 "),Object(c["f"])("strong",null,"No"),Object(c["h"])("를 외친다.")])],-1),ke=Object(c["f"])("div",{class:"bg-light shadow-sm mx-auto",style:{width:"80%",height:"300px","border-radius":"21px 21px 0 0"}},null,-1),Me=[Ee,ke];function Te(e,t,a,l,r,s){return Object(c["r"])(),Object(c["e"])("main",null,[ve,Object(c["f"])("div",me,[Object(c["f"])("div",{class:"bg-danger me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden",onClick:t[0]||(t[0]=function(e){return s.moveRoute("/product")}),style:{cursor:"pointer"}},xe),ye,Object(c["f"])("div",{class:"bg-primary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden",onClick:t[1]||(t[1]=function(e){return s.moveRoute("/product_inverse")}),style:{cursor:"pointer"}},Me)])])}var Pe={methods:{moveRoute:function(e){var t=this.$router;t.push(e)}}};const Ae=E()(Pe,[["render",Te]]);var Ce=Ae,Re=[{path:"/product",component:X},{path:"/product_inverse",component:H},{path:"/List",component:ee},{path:"/Products",component:de},{path:"/",component:Ce},{path:"/Cover",component:pe},{path:"",component:Ce}],Ye=Object(R["a"])({history:Object(R["b"])(),routes:Re,scrollBehavior:function(e,t,a){return a||{top:0,behavior:"smooth"}}}),Fe=Ye;Object(c["c"])(C).use(Fe).mount("#app")}});
//# sourceMappingURL=app.b45938db.js.map
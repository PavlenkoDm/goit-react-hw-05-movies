"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[884],{713:function(e,n,t){t.d(n,{n:function(){return o}});var r=t(861),i=t(757),s=t.n(i),a=t(243);function o(e){return c.apply(this,arguments)}function c(){return(c=(0,r.Z)(s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get(n);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},930:function(e,n,t){t.d(n,{n:function(){return r.n}});var r=t(713)},884:function(e,n,t){t.r(n);var r=t(439),i=t(689),s=t(87),a=t(791),o=t(686),c=t(930),l=t(184);n.default=function(){var e,n,t=(0,i.UO)().movieId,u=(0,i.TH)(),d=(0,a.useState)({}),h=(0,r.Z)(d,2),m=h[0],v=h[1],f=(0,a.useRef)(null!==(e=null===(n=u.state)||void 0===n?void 0:n.from)&&void 0!==e?e:{pathname:"/"}),p=(0,i.s0)();(0,a.useEffect)((function(){t&&(o.Loading.arrows(),(0,c.n)("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=854977f2e9fa8d2e098b4e957b2e6d0a&language=en-US")).then((function(e){if(e){var n=e.genres,t=e.title,r=e.release_date,i=e.poster_path,s=e.vote_average,a=e.overview;v({movieGenres:n.map((function(e){return e.name})).join(" "),releaseDate:new Date(r).getUTCFullYear(),title:t,imgUrl:"".concat("https://image.tmdb.org/t/p/original").concat(i),userScore:Math.round(10*s),overview:a})}else console.log("Ooops something wrong!")})).catch((function(e){return console.log(e.message)})).finally((function(){o.Loading.remove()})))}),[t]);var j=m.movieGenres,x=m.releaseDate,g=m.title,w=m.imgUrl,b=m.userScore,k=m.overview;return(0,l.jsxs)("main",{children:[(0,l.jsxs)("section",{children:[(0,l.jsx)("button",{className:"back-btn",type:"button",onClick:function(){return p("".concat(f.current.pathname).concat(f.current.search))},children:"Go Back"}),(0,l.jsx)("h1",{style:{display:"none"},children:"Main movie info"}),(0,l.jsxs)("article",{className:"movie-info",children:[(0,l.jsx)("img",{className:"poster",src:w,alt:j,style:{width:200}}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("h2",{children:[g," (",x,")"]}),(0,l.jsxs)("p",{children:["User Score: ",b,"%"]}),(0,l.jsx)("h3",{children:"Overview"}),(0,l.jsx)("p",{className:"description",children:k}),(0,l.jsx)("h3",{children:"Genres"}),(0,l.jsx)("p",{children:j})]})]})]}),(0,l.jsxs)("section",{className:"additional",children:[(0,l.jsx)("h2",{children:"Additional information"}),(0,l.jsx)("div",{children:(0,l.jsxs)("ul",{className:"additional_list",children:[(0,l.jsx)("li",{children:(0,l.jsx)(s.rU,{to:"cast",children:"Cast"})}),(0,l.jsx)("li",{children:(0,l.jsx)(s.rU,{to:"reviews",children:"Rewievs"})})]})})]}),(0,l.jsx)(i.j3,{})]})}}}]);
//# sourceMappingURL=884.cedca64b.chunk.js.map
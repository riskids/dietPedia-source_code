(this.webpackJsonpDietPedia=this.webpackJsonpDietPedia||[]).push([[0],{44:function(e,t,c){},94:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(1),i=c.n(a),n=c(32),r=c.n(n),l=(c(44),c(18)),d=c.n(l),o=c(33),j=c(34),h=c(35),u=c(38),b=c(37),m=c(2),x=c(12),O=c.n(x),g=c(13),p=c(14),v=c.n(p);var f=function(e){return Object(s.jsx)("div",{class:"col-12",children:Object(s.jsx)("a",{href:e.link,children:Object(s.jsx)("div",{class:"card card-article",children:Object(s.jsx)("div",{class:"card-body card-body-custom",children:Object(s.jsxs)("div",{class:"row",children:[Object(s.jsx)("div",{class:"col-5",children:Object(s.jsx)("img",{class:"img-fluid img-article",src:e.thumbnail,alt:"..."})}),Object(s.jsxs)("div",{class:"col-7 col-article",children:[Object(s.jsx)("h6",{class:"card-title",children:e.title}),Object(s.jsx)("p",{class:"card-text",children:Object(s.jsx)("small",{class:"text-muted",children:Object(s.jsxs)("i",{children:["sumber ",Object(s.jsx)("strong",{children:e.source})]})})})]})]})})},e.id)})})};var N=function(e){return Object(s.jsx)("div",{className:"col-12",children:Object(s.jsxs)("div",{className:"card card-custom",children:[Object(s.jsx)("div",{className:"card-body",children:Object(s.jsx)("h5",{className:"card-title",children:e.item})}),Object(s.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(s.jsx)("li",{className:"list-group-item card-bg-color",children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-2",children:Object(s.jsx)("a",{children:Object(s.jsx)("object",{data:"img/done.png",width:"27",height:"27",children:" "})})}),Object(s.jsx)("div",{className:"col-3",children:Object(s.jsx)("a",{children:"Brand"})}),Object(s.jsx)("div",{className:"col-7",children:Object(s.jsx)("a",{children:e.brand})})]})}),Object(s.jsx)("li",{className:"list-group-item card-bg-color",children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-2",children:Object(s.jsx)("object",{data:"img/Steak.png",width:"27",height:"27",children:" "})}),Object(s.jsx)("div",{className:"col-3",children:Object(s.jsx)("a",{children:"Porsi"})}),Object(s.jsx)("div",{className:"col-7",children:Object(s.jsx)("a",{children:e.porsi})})]})}),Object(s.jsx)("li",{className:"list-group-item card-bg-color",children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-2",children:Object(s.jsx)("object",{data:"img/Pizza.png",width:"27",height:"27",children:" "})}),Object(s.jsx)("div",{className:"col-3",children:Object(s.jsx)("a",{children:"Kalori"})}),Object(s.jsx)("div",{className:"col-7",children:Object(s.jsxs)("a",{children:[e.kalori," kal"]})})]})}),Object(s.jsx)("li",{className:"list-group-item card-bg-color",children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-2",children:Object(s.jsx)("object",{data:"img/Love.png",width:"27",height:"27",children:" "})}),Object(s.jsx)("div",{className:"col-3",children:Object(s.jsx)("a",{children:"Lemak"})}),Object(s.jsx)("div",{className:"col-7",children:Object(s.jsxs)("a",{children:[e.lemak," mg"]})})]})})]})]},e.id)})},k=c(10);var w=function(){return Object(s.jsx)("nav",{class:"navbar shadow-nav bg-green navbar-expand fixed-bottom",children:Object(s.jsxs)("ul",{class:"navbar-nav nav-justified w-100",children:[Object(s.jsx)(k.b,{to:"/search",className:"nav-link",children:Object(s.jsx)("span",{class:"material-icons size-34",children:"search"})}),Object(s.jsx)(k.b,{to:"/article",className:"nav-link",children:Object(s.jsx)("span",{class:"material-icons size-34",children:"explore"})})]})})};var y=function(e){return Object(s.jsx)("div",{children:Object(s.jsx)("h4",{children:"404 Not Found"})})},_=function(e){Object(u.a)(c,e);var t=Object(b.a)(c);function c(e){var a;return Object(j.a)(this,c),(a=t.call(this,e)).fetchSearchnutritionResults=function(){var e=arguments.length>1?arguments[1]:void 0,t="https://nutritionix-api.p.rapidapi.com/v1_1/search/".concat(e),c={method:"GET",url:t,params:{fields:"item_name,item_id,brand_name,nf_calories,nf_total_fat"},headers:{"x-rapidapi-key":"518dacdf68mshe074609f26cc4e9p107185jsn84ce96ca1395","x-rapidapi-host":"nutritionix-api.p.rapidapi.com"}};a.cancel&&a.cancel.cancel(),a.cancel=O.a.CancelToken.source(),Object(g.trackPromise)(O.a.request(c,{cancelToken:a.cancel.token}).then((function(e){var t=e.data.hits.length?"":"Makanan Tidak Terdaftar.";a.setState({nutritionResults:e.data.hits,nutritionMessage:t,loading:!1})})).catch((function(e){(O.a.isCancel(e)||e)&&a.setState({loading:!1,nutritionMessage:"Internet Tidak Terdeteksi."})})))},a.handleOnInputChange=function(e){var t=e.target.value;t?a.setState({queryNut:t,loading:!0,nutritionMessage:""},(function(){a.fetchSearchnutritionResults(1,t)})):a.setState({queryNut:t,nutritionResults:{},nutritionMessage:""}),console.log(a.state.nutritionResults)},a.renderSearchnutritionResults=function(){var e=a.state.nutritionResults;if(Object.keys(e).length&&e.length)return Object(s.jsx)("div",{className:"hasil-search",children:Object(s.jsx)("div",{className:"row",children:e.map((function(t,c){return Object(s.jsx)(N,{id:e[c].fields._id,item:e[c].fields.item_name,brand:e[c].fields.brand_name,porsi:e[c].fields.nf_serving_size_qty,kalori:e[c].fields.nf_calories,lemak:e[c].fields.nf_total_fat})}))})})},a.getThumbnail=function(){var e={method:"GET",url:"https://google-search3.p.rapidapi.com/api/v1/images/q=diet%20food",headers:{"x-rapidapi-key":"518dacdf68mshe074609f26cc4e9p107185jsn84ce96ca1395","x-rapidapi-host":"google-search3.p.rapidapi.com"}};O.a.request(e).then((function(e){a.setState({thumbnailResults:e.data.image_results})})).catch((function(e){console.log(e)}))},a.state={queryNut:"",nutritionResults:{},articleResults:{},thumbnailResults:{},loadingArticle:!0,nutritionMessage:"",articleMessage:""},a}return Object(h.a)(c,[{key:"getGoogleNews",value:function(){var e=Object(o.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://google-search3.p.rapidapi.com/api/v1/news/q=diet+sehat&hl=id",{method:"GET",headers:{"x-rapidapi-key":"518dacdf68mshe074609f26cc4e9p107185jsn84ce96ca1395","x-rapidapi-host":"google-search3.p.rapidapi.com"},redirect:"follow",referrerPolicy:"no-referrer"});case 2:return t=e.sent,e.t0=this,e.next=6,t.json();case 6:e.t1=e.sent,e.t2={articleResults:e.t1,loadingArticle:!1},e.t0.setState.call(e.t0,e.t2);case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderGoogleNews",value:function(){var e=this.state,t=e.articleResults,c=e.thumbnailResults,a=t.entries;if(Object.keys(t).length&&t.entries.length&&Object.keys(c).length&&c.length)return console.log(c,a),Object(s.jsx)("div",{children:a.slice(0,19).map((function(e,t){return Object(s.jsx)(f,{id:t,title:e.title,link:e.link,source:e.source.title,thumbnail:c[t].image.src})}))})}},{key:"componentDidMount",value:function(){this.getGoogleNews(),this.getThumbnail()}},{key:"render",value:function(){var e=this,t=this.state,c=t.queryNut,a=t.nutritionMessage,i=(t.articleResults,t.loadingArticle);return Object(s.jsxs)("div",{children:[Object(s.jsx)(w,{}),Object(s.jsxs)(m.c,{children:[Object(s.jsx)(m.a,{path:"/search",render:function(){return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-12 bagian-atas",children:Object(s.jsx)("h2",{children:"Cari Makanan"})}),Object(s.jsx)("div",{className:"col-12",children:Object(s.jsxs)("div",{class:"form-group has-search",children:[Object(s.jsx)("span",{class:"material-icons size-22 form-control-feedback",children:"search"}),Object(s.jsx)("input",{className:"form-control me-2 search-custom",type:"text",name:"queryNut",value:c,placeholder:"Search...",onChange:e.handleOnInputChange})]})}),Object(s.jsxs)("div",{className:"col-12",children:[Object(s.jsx)("br",{}),a&&Object(s.jsx)("h5",{children:a})]})]}),Object(s.jsx)(T,{}),e.renderSearchnutritionResults()]})}}),Object(s.jsx)(m.a,{path:"/article",render:function(){return Object(s.jsx)("div",{children:Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"hasil-search",children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{class:"col-12 bagian-atas",children:Object(s.jsx)("h2",{children:"Artikel"})}),e.renderGoogleNews(),Object(s.jsx)(v.a,{className:i?"show-loader":"hide-loader",type:"ThreeDots",color:"#94B447",height:"100",width:"100"})]})})})})}}),Object(s.jsx)(m.a,{component:y})]})]})}}]),c}(i.a.Component),R=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,95)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,n=t.getTTFB;c(e),s(e),a(e),i(e),n(e)}))},T=(c(93),t.default=function(e){return Object(g.usePromiseTracker)().promiseInProgress&&Object(s.jsx)("div",{style:{width:"100%",height:"100",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(s.jsx)(v.a,{type:"ThreeDots",color:"#94B447",height:"100",width:"100"})})}),S=Object(s.jsx)(k.a,{children:Object(s.jsx)(_,{})});r.a.render(S,document.getElementById("root")),R()}},[[94,1,2]]]);
//# sourceMappingURL=main.bea68f8b.chunk.js.map
webpackJsonp([1],{"0+pg":function(t,e){},"0csq":function(t,e,n){"use strict";var s=n("JSwV"),i=n("lH2t"),r=n("S4H+"),a=n("pNOi"),o=n("LnN7"),u=n("F5sT"),l=n("3zJd"),d=n("14gb"),c=l({graph:"hangzhou-roads"});c.onChange(function(t){t.fromId===_.pointId&&t.toId===b.pointId||(L(),k())});var h=void 0,f=void 0,v=void 0,p=void 0,g=void 0,m=0,_=new o(k,P),b=new o(k,P),y={visible:!1,lastSearchTook:0,pathLength:0,graphNodeCount:"",graphLinksCount:""},w=u(c),x={loadPositions:E,updateSearchAlgorithm:function(){M(),c.set("finder",w.pathFinderSettings.selected),k()},updateSelectedGraph:function(){c.set({graph:w.graphSettings.selected,fromId:-1,toId:-1}),E(),S()},getGraph:function(){return h},getGraphBBox:function(){return f},progress:new a,stats:y,routeStart:_,routeEnd:b,pathInfo:{svgPath:"",noPath:!1},handleSceneClick:function(t){_.visible?b.visible||C(t,b):C(t,_)},getRouteHandleUnderCursor:function(t,e){var n=e.getTransform().scale/e.getPixelRatio();if(_.intersects(t.sceneX,t.sceneY,n))return _;if(b.intersects(t.sceneX,t.sceneY,n))return b},clearRoute:S,pathFinderSettings:w.pathFinderSettings,graphSettings:w.graphSettings};function k(){if(_.visible&&b.visible){var t=_.pointId,e=b.pointId;!function(){m&&(clearTimeout(m),m=0);m=setTimeout(function(){if(m=0,_.visible&&b.visible){var t=_.pointId,e=b.pointId;c.get("fromId")!=t&&c.set("fromId",t),c.get("toId")!==e&&c.set("toId",e)}},400)}();var n,s=window.performance.now(),i=function(t,e){return p.find(t,e).map(function(t){return t.data})}(t,e),r=window.performance.now()-s;x.pathInfo.noPath=0===i.length,x.pathInfo.svgPath=(n=i).length<1?"":n.map(function(t,e){var n;return(0===e?"M":"")+(n=t).x+","+n.y}).join(" "),y.lastSearchTook=Math.round(100*r)/100+"ms",y.pathLength=function(t){for(var e=0,n=1;n<t.length;++n)e+=D(t[n-1],t[n]);return N(Math.round(e))}(i),y.visible=!0}else x.pathInfo.svgPath=""}function S(){_.clear(),b.clear(),c.set({fromId:-1,toId:-1})}function C(t,e){if(v){var n=P(t.sceneX,t.sceneY);if(!n)throw new Error("Point should be defined at this moment");e.setFrom(n)}}function E(){var t=c.get("graph");v=null,h=null,y.visible=!1,x.progress.reset(),r(t,x.progress).then(I).catch(function(t){x.progress.setError("Could not load the graph",t)})}function I(t){var e;h=t.graph,f=t.graphBBox,p=null,e=t.points,(v=s()).initAsync(e,{progress:function(t,e){t%500==0&&(x.progress.message="初始化树",x.progress.completed=Math.round(100*t/e)+"%")},done:function(){x.progress.treeReady=!0}}),g={"a-greedy-star":i.aGreedy(h,{distance:Y,heuristic:Y}),nba:i.nba(h,{distance:Y,heuristic:Y}),"astar-uni":i.aStar(h,{distance:Y,heuristic:Y}),dijkstra:i.aStar(h,{distance:Y})},M(),L(),y.graphNodeCount=N(h.getNodesCount()),y.graphLinksCount=N(h.getLinksCount()),d.fire("graph-loaded"),setTimeout(function(){k()},0)}function M(){var t=w.pathFinderSettings.selected;if(!(p=g[t]))throw new Error("Cannot find pathfinder "+t)}function L(){if(h){var t=c.get("fromId"),e=c.get("toId"),n=h.getNode(t),s=h.getNode(e);n&&_.setFrom(n),s&&b.setFrom(s)}}function N(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function P(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2e3;if(v){var s=v.pointsAround(t,e,n).map(function(t){return h.getNode(t/2)}).sort(function(n,s){return T(n.data,t,e)-T(s.data,t,e)});return s.length>0?s[0]:P(t,e,2*n)}}function T(t,e,n){var s=t.x-e,i=t.y-n;return Math.sqrt(s*s+i*i)}function Y(t,e){return D(t.data,e.data)}function D(t,e){var n=t.x-e.x,s=t.y-e.y;return Math.sqrt(n*n+s*s)}t.exports=x},"14gb":function(t,e,n){"use strict";var s=n("puH/")({});t.exports=s},"3Zuw":function(t,e,n){"use strict";var s=r(n("Zrlr")),i=r(n("wxAW"));function r(t){return t&&t.__esModule?t:{default:t}}var a=function(){function t(){(0,s.default)(this,t),this.minX=Number.POSITIVE_INFINITY,this.minY=Number.POSITIVE_INFINITY,this.maxX=Number.NEGATIVE_INFINITY,this.maxY=Number.NEGATIVE_INFINITY}return(0,i.default)(t,[{key:"growBy",value:function(t){this.minX-=t,this.minY-=t,this.maxX+=t,this.maxY+=t}},{key:"addPoint",value:function(t,e){if(void 0===t)throw new Error("Point is not defined");var n=t,s=e;void 0===s&&(n=t.x,s=t.y),n<this.minX&&(this.minX=n),n>this.maxX&&(this.maxX=n),s<this.minY&&(this.minY=s),s>this.maxY&&(this.maxY=s)}},{key:"addRect",value:function(t){if(!t)throw new Error("rect is not defined");this.addPoint(t.left,t.top),this.addPoint(t.right,t.top),this.addPoint(t.left,t.bottom),this.addPoint(t.right,t.bottom)}},{key:"merge",value:function(t){t.minX<this.minX&&(this.minX=t.minX),t.minY<this.minY&&(this.minY=t.minY),t.maxX>this.maxX&&(this.maxX=t.maxX),t.maxY>this.maxY&&(this.maxY=t.maxY)}},{key:"left",get:function(){return this.minX}},{key:"top",get:function(){return this.minY}},{key:"right",get:function(){return this.maxX}},{key:"bottom",get:function(){return this.maxY}},{key:"width",get:function(){return this.maxX-this.minX}},{key:"height",get:function(){return this.maxY-this.minY}},{key:"cx",get:function(){return(this.minX+this.maxX)/2}},{key:"cy",get:function(){return(this.minY+this.maxY)/2}}]),t}();t.exports=a},"4kcz":function(t,e){},F5sT:function(t,e,n){"use strict";t.exports=function(t){var e=function(t){return{selected:t.get("graph"),graphs:[{value:"hangzhou-roads",name:"杭州 (7.6 MB)"},{value:"amsterdam-roads",name:"阿姆斯特丹 (1.1 MB)"},{value:"seattle-roads",name:"西雅图 (2.4 MB)"},{value:"rome-roads",name:"罗马 (3.8 MB)"},{value:"delhi-roads",name:"新德里 (3.9 MB)"},{value:"moscow-roads",name:"莫斯科 (6.5 MB)"},{value:"tokyo-roads",name:"东京 (12.3 MB)"}]}}(t),n=function(t){return{selected:t.get("finder")||"nba",algorithms:[{value:"a-greedy-star",name:"Greedy A* (suboptimal)"},{value:"nba",name:"NBA*"},{value:"astar-uni",name:"Unidirectional A*"},{value:"dijkstra",name:"Dijkstra"}]}}(t);return{graphSettings:e,pathFinderSettings:n}}},LnN7:function(t,e,n){"use strict";var s=r(n("Zrlr")),i=r(n("wxAW"));function r(t){return t&&t.__esModule?t:{default:t}}var a=function(){function t(e,n){(0,s.default)(this,t),this.visible=!1,this.beingDragged=!1,this.pointId=-1,this.x=0,this.y=0,this.r=18,this.pointChanged=e,this.findNearestPoint=n}return(0,i.default)(t,[{key:"startDragging",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=this;function s(s){s.stopPropagation(),s.preventDefault();var i=void 0,r=void 0;if(s.touches){for(var a=void 0,o=0;o<s.touches.length;++o)if(s.touches[o].identifier===e){a=s.touches[o];break}if(!a)return;i=a.clientX,r=a.clientY}else i=s.clientX,r=s.clientY;var u=t.getSceneCoordinate(i,r);n.x=u.x,n.y=u.y;var l=n.findNearestPoint(u.x,u.y);n.pointId=l.id,n.pointChanged(n)}function i(t){if(t.touches&&t.touches.length>0)for(var r=0;r<t.touches.length;++r){if(t.touches[r].identifier===e)return}n.beingDragged=!1,document.removeEventListener("mousemove",s,!0),document.removeEventListener("mouseup",i,!0),document.removeEventListener("touchmove",s,!0),document.removeEventListener("touchend",i,!0),document.removeEventListener("touchcancel",i,!0)}this.beingDragged=!0,document.addEventListener("mousemove",s,!0),document.addEventListener("touchmove",s,{capture:!0,passive:!1}),document.addEventListener("touchend",i,!0),document.addEventListener("touchcancel",i,!0),document.addEventListener("mouseup",i,!0)}},{key:"setFrom",value:function(t){this.visible=!0,this.pointId=t.id,this.x=t.data.x,this.y=t.data.y,this.pointChanged(this)}},{key:"clear",value:function(){this.visible=!1,this.pointId=-1,this.x=0,this.y=0,this.pointChanged(this)}},{key:"intersects",value:function(t,e,n){if(!this.visible||this.beingDragged)return!1;var s=this.r/n,i=t-this.x,r=e-this.y;return i*i+r*r<=s*s}}]),t}();t.exports=a},LwKS:function(t,e,n){"use strict";var s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("div",{staticClass:"background absolute",on:{click:function(e){return e.preventDefault(),t.close(e)}}}),t._v(" "),n("div",{staticClass:"content"},[n("h3",[t._v("ngraph.path "),n("a",{staticClass:"close bold",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.close(e)}}},[t._v("close")])]),t._v(" "),t._m(0),n("p",[t._v("\n      Don't use this website for actual navigation :).\n    ")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),n("a",{staticClass:"large-close bold",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.close(e)}}},[t._v("\n      close\n    ")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("\n      This website is a demo for the "),e("a",{staticClass:"highlighted",attrs:{href:"https://github.com/anvaka/ngraph.path"}},[this._v("ngraph.path")]),this._v("\n      library. The library implements pathfinding algorithms for generic graphs (not limited to grids).\n    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("My goal was to build a very fast library, that could help many developers\n      find their paths. In my tests, the library showed great performance with median\n      path finding speed "),e("span",{staticClass:"bold"},[this._v("34ms")]),this._v(" on "),e("span",{staticClass:"bold"},[this._v("733,844")]),this._v(" edges graph.\n    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("I built the roads graph for this demo using amazing "),e("a",{staticClass:"highlighted",attrs:{href:"http://www.openstreetmap.org/",target:"_blank"}},[this._v("OpenStreetMap")]),this._v(".\n    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{staticClass:"highlighted",attrs:{href:"https://github.com/anvaka/ngraph.path"}},[this._v("Learn more ")]),this._v(" about this project on GitHub\n      ")]),e("li",[this._v("\n      Stay tuned for updates on "),e("a",{staticClass:"highlighted",attrs:{href:"https://twitter.com/anvaka"}},[this._v("Twitter.")])]),e("li",[e("a",{staticClass:"highlighted",attrs:{href:"https://www.youtube.com/watch?v=hGeZuIEV6KU"}},[this._v(" Watch a video")]),this._v(" demo.\n      ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("With passion,"),e("br"),this._v(" Anvaka")])}]};e.a=s},M93x:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("xJD8"),i=n.n(s);for(var r in s)"default"!==r&&function(t){n.d(e,t,function(){return s[t]})}(r);var a=n("w5t3");var o=function(t){n("0+pg")},u=n("VU/8")(i.a,a.a,!1,o,null,null);e.default=u.exports},NHnr:function(t,e,n){"use strict";var s=r(n("7+uW")),i=r(n("M93x"));function r(t){return t&&t.__esModule?t:{default:t}}s.default.config.productionTip=!1,new s.default({el:"#app",template:"<App/>",components:{App:i.default}})},"S4H+":function(t,e,n){"use strict";var s,i=n("//Fk"),r=(s=i)&&s.__esModule?s:{default:s};var a=n("vccH"),o="static/",u=n("T/ob"),l=n("3Zuw"),d=n("4gmu");t.exports=function(t,e){var n=u(),s=void 0,i=void 0,c=new l;return a(o+"/"+t+".co.bin",{responseType:"arraybuffer",progress:p("加载交点坐标")}).then(function(t){return s=new Int32Array(t),console.log("已下载节点: "+s.length/2),function(t){return console.time("add nodes to graph"),e.message="正在向图中添加节点",new r.default(function(n){d(t,h,function(){e.pointsReady=!0,console.timeEnd("add nodes to graph"),n()},{step:2}),e.pointsReady=!0})}(s)}).then(function(){return a(o+"/"+t+".gr.bin",{responseType:"arraybuffer",progress:p("加载路线图")}).then(f)}).then(function(){return{graph:n,points:s,links:i,graphBBox:c}});function h(t,s,i){var r=Math.floor(s/2),a=i[s+1];n.addNode(r,{x:t,y:a}),c.addPoint(t,a),s%500==0&&(e.completed=Math.round(100*s/i.length)+"%")}function f(t){return i=new Int32Array(t),e.message="正在向图中添加边",console.time("add edges to graph"),new r.default(function(t){d(i,v,function(){console.timeEnd("add edges to graph"),e.linksReady=!0,console.log(n.getLinksCount()+" edges; "+n.getNodesCount()+" nodes."),t()},{step:2})})}function v(t,s,i){var r=t-1,a=i[s+1]-1;n.addLink(r,a),s%500==0&&(e.completed=Math.round(100*s/i.length)+"%")}function p(t){return function(n){e.message=t,e.completed=Math.round(100*n.percent)+"%"}}}},SRj4:function(t,e,n){"use strict";var s=u(n("Zx67")),i=u(n("Zrlr")),r=u(n("wxAW")),a=u(n("zwoO")),o=u(n("Pf15"));function u(t){return t&&t.__esModule?t:{default:t}}var l=function(t){function e(t,n){(0,i.default)(this,e);var r=(0,a.default)(this,(e.__proto__||(0,s.default)(e)).call(this));return r.g=t,r.dx=0,r.dy=0,r.scale=0,r.drawCallback=n||d,r}return(0,o.default)(e,t),(0,r.default)(e,[{key:"draw",value:function(){var t=this.worldTransform;if(e=this.worldTransform,n=this,e.scale!=n.scale||e.dx!==n.dx||e.dy!==n.dy){var e,n,s=this.scene.getPixelRatio(),i=t.scale/s,r=t.dx/s,a=t.dy/s;this.g.setAttributeNS(null,"transform","matrix("+i+", 0, 0, "+i+", "+r+", "+a+")"),this.scale=t.scale,this.dx=t.dx,this.dy=t.dy,this.drawCallback(this)}}}]),e}(n("vkLu").Element);function d(){}t.exports=l},Zs8U:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mounted:function(){var t=this;this.closeHandler=function(e){27===e.keyCode&&(e.preventDefault(),t.close())},document.addEventListener("keyup",this.closeHandler)},beforeDestroy:function(){document.removeEventListener("keyup",this.closeHandler)},methods:{close:function(){this.$emit("close")}}}},c27y:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("Zs8U"),i=n.n(s);for(var r in s)"default"!==r&&function(t){n.d(e,t,function(){return s[t]})}(r);var a=n("LwKS");var o=function(t){n("4kcz")},u=n("VU/8")(i.a,a.a,!1,o,null,null);e.default=u.exports},h1eN:function(t,e,n){"use strict";var s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("g",{attrs:{transform:t.screenScale}},[n("circle",{attrs:{r:t.r,fill:"red",stroke:"white","stroke-width":t.strokeWidth}}),t._v(" "),n("text",{staticClass:"no-pointer",attrs:{"font-size":t.fontSize,fill:"white","text-anchor":"middle",y:t.textY}},[t._v(t._s(t.symbol))])])},staticRenderFns:[]};e.a=s},nEty:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"RoutePoint",props:{point:Object,scale:Number,symbol:String,r:Number,strokeWidth:{type:Number,default:2},fontSize:{type:Number,default:28},textY:{type:Number,default:10}},computed:{screenScale:function(){var t=1/this.scale;return"matrix("+t+", 0, 0, "+t+", "+this.point.x+", "+this.point.y+")"}}}},pNOi:function(t,e,n){"use strict";var s=r(n("Zrlr")),i=r(n("wxAW"));function r(t){return t&&t.__esModule?t:{default:t}}var a=function(){function t(){(0,s.default)(this,t),this.reset()}return(0,i.default)(t,[{key:"setError",value:function(t,e){this.errorMessage=t,this.errorDetails=e}},{key:"reset",value:function(){this.errorMessage=null,this.errorDetails=null,this.message="",this.completed="",this.pointsReady=!1,this.linksReady=!1,this.treeReady=!1}},{key:"visible",get:function(){return!(this.pointsReady&&this.linksReady&&this.treeReady)}}]),t}();t.exports=a},qEFR:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("nEty"),i=n.n(s);for(var r in s)"default"!==r&&function(t){n.d(e,t,function(){return s[t]})}(r);var a=n("h1eN"),o=n("VU/8")(i.a,a.a,!1,null,null,null);e.default=o.exports},vccH:function(t,e,n){"use strict";var s,i=n("//Fk"),r=(s=i)&&s.__esModule?s:{default:s};t.exports=function(t,e){e||(e={});return new r.default(function(n,s){var i=new XMLHttpRequest;"function"==typeof e.progress&&i.addEventListener("progress",function(t){t.lengthComputable&&e.progress({loaded:t.loaded,total:t.total,percent:t.loaded/t.total})},!1);i.addEventListener("load",function(){if(200===i.status){var r=i.response;"json"===e.responseType&&"string"==typeof r&&(r=JSON.parse(r)),n(r)}else s("Unexpected status code "+i.status+" when calling "+t)},!1),i.addEventListener("error",function(){s("Failed to download "+t)},!1),i.addEventListener("abort",function(){s("Cancelled download of "+t)},!1),i.open("GET",t),e.responseType&&(i.responseType=e.responseType);i.send(null)})}},w5t3:function(t,e,n){"use strict";var s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("canvas",{ref:"canvas",staticClass:"absolute"}),t._v(" "),t.webGLEnabled?t._e():n("div",[t._m(0)]),t._v(" "),t.webGLEnabled?n("div",[n("svg",{ref:"svg",staticClass:"svg-overlay absolute"},[n("g",{staticClass:"scene"},[n("path",{ref:"foundPath",attrs:{d:t.pathInfo.svgPath,"stroke-width":"6x",stroke:"red",fill:"transparent"}}),t._v(" "),t.routeStart.visible?n("route-point",{attrs:{point:t.routeStart,scale:t.scale,r:t.routeStart.r,symbol:"A",fontSize:28}}):t._e(),t._v(" "),t.routeEnd.visible?n("route-point",{attrs:{point:t.routeEnd,scale:t.scale,r:t.routeEnd.r,symbol:"B",fontSize:28}}):t._e()],1)]),t._v(" "),t.progress.visible?n("div",{staticClass:"progress center absolute"},[t.progress.errorMessage?t._e():n("div",[t._v("\n        "+t._s(t.progress.message)+" "+t._s(t.progress.completed)+"\n      ")]),t._v(" "),t.progress.errorMessage?n("div",{staticClass:"error"},[n("div",[t._v(t._s(t.progress.errorMessage))]),t._v(" "),n("div",{staticClass:"error-details"},[t._v(t._s(t.progress.errorDetails))])]):t._e()]):t._e(),t._v(" "),t.loaded&&!t.progress.visible?n("div",{staticClass:"controls absolute"},[t.helpVisible?n("div",{staticClass:"help"},[t._v("\n        "+t._s(t.getHelpText())+"\n      ")]):t._e(),t._v(" "),t.helpVisible?t._e():n("div",{staticClass:"route-info-container"},[n("svg",{staticClass:"route-info",attrs:{viewBox:"0 0 400 40"},on:{click:function(e){e.preventDefault(),t.detailsVisible=!t.detailsVisible}}},[n("g",[n("path",{attrs:{d:"M20,20 L80,20 M290,20 L350,20","stroke-width":"4",stroke:"red",fill:"transparent"}}),t._v(" "),n("route-point",{attrs:{point:{x:20,y:20},scale:1,r:12,symbol:"A",fontSize:12,strokeWidth:1,textY:4}}),t._v(" "),n("route-point",{attrs:{point:{x:350,y:20},scale:1,r:12,symbol:"B",fontSize:12,strokeWidth:1,textY:4}}),t._v(" "),n("text",{attrs:{x:"185.5",y:"25",fill:"white","text-anchor":"middle","font-size":"18px"}},[t._v(t._s(t.pathText))])],1),t._v(" "),n("g",[t.detailsVisible?t._e():n("path",{attrs:{d:"M372,15 L388,15 380.5,28z","stroke-width":"0",stroke:"white",fill:"hsl(215, 34%, 64%)"}}),t._v(" "),t.detailsVisible?n("path",{attrs:{d:"M372,28 L388,28 380.5,15z","stroke-width":"0",stroke:"white",fill:"hsl(215, 34%, 64%)"}}):t._e()])]),t._v(" "),n("a",{staticClass:"reset",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.clearRoute(e)}}},[t._v("重置AB")])]),t._v(" "),t.detailsVisible&&!t.helpVisible?n("div",{staticClass:"details"},[n("div",{staticClass:"row"},[n("div",{staticClass:"label"},[t._v("路径长度:")]),t._v(" "),n("div",{staticClass:"col"},[t._v(t._s(t.stats.pathLength))])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"label"},[t._v("搜索算法:")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.pathFinder.selected,expression:"pathFinder.selected"}],staticClass:"col",on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.pathFinder,"selected",e.target.multiple?n:n[0])},t.updateSearchAlgorithm]}},t._l(t.pathFinder.algorithms,function(e){return n("option",{domProps:{value:e.value}},[t._v(t._s(e.name))])}),0)])]):t._e()]):t._e(),t._v(" "),t.progress.visible?t._e():n("div",{staticClass:"graph-name",attrs:{title:t.graphNameTitle}},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.graphSettings.selected,expression:"graphSettings.selected"}],staticClass:"col",on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.graphSettings,"selected",e.target.multiple?n:n[0])},t.updateGraph]}},t._l(t.graphSettings.graphs,function(e){return n("option",{domProps:{value:e.value}},[t._v(t._s(e.name))])}),0)])]):t._e(),t._v(" "),t.progress.visible||"USA-road-d.NY"===t.graphSettings.selected?t._e():n("div",{staticClass:"osm-note"},[t._v("\n    Graph was extracted from "),n("a",{attrs:{href:"https://www.openstreetmap.org",target:"_blank"}},[t._v("www.openstreetmap.org")]),t._v(".\n    It is made available under "),n("a",{attrs:{href:"https://opendatacommons.org/licenses/odbl/summary/",target:"_blank"}},[t._v("ODbL")])]),t._v(" "),t.aboutVisible?n("about",{on:{close:function(e){t.aboutVisible=!1}}}):t._e()],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"absolute no-webgl"},[e("h4",[this._v("WebGL is not enabled :(")]),this._v(" "),e("div",[this._v("While "),e("a",{staticClass:"highlighted",attrs:{href:"https://github.com/anvaka/ngraph.path"}},[this._v("ngraph.path")]),this._v(" does not require any webgl, this demo needs it.")]),this._v(" "),e("iframe",{staticClass:"video-demo",attrs:{src:"https://www.youtube.com/embed/hGeZuIEV6KU",frameborder:"0",allowfullscreen:""}})])}]};e.a=s},xJD8:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o(n("0csq")),i=o(n("SRj4")),r=o(n("qEFR")),a=o(n("c27y"));function o(t){return t&&t.__esModule?t:{default:t}}var u=n("14gb"),l=n("vkLu");e.default={name:"app",components:{RoutePoint:r.default,About:a.default},mounted:function(){this.webGLEnabled=l.isWebGLEnabled(this.$refs.canvas),this.webGLEnabled&&(s.default.loadPositions(),u.on("graph-loaded",this.createScene,this))},beforeDestroy:function(){u.off("graph-loaded",this.createScene),this.ensurePreviousSceneDestroyed()},data:function(){return{webGLEnabled:!0,loaded:!1,detailsVisible:!1,progress:s.default.progress,routeStart:s.default.routeStart,routeEnd:s.default.routeEnd,stats:s.default.stats,scale:1,pathInfo:s.default.pathInfo,pathFinder:s.default.pathFinderSettings,graphSettings:s.default.graphSettings,aboutVisible:!1}},computed:{graphNameTitle:function(){var t=this.stats;return t?t.graphNodeCount+" nodes; "+t.graphLinksCount+" edges":""},helpVisible:function(){return!(this.routeStart.visible&&this.routeEnd.visible)},pathText:function(){return this.pathInfo.noPath?"No path ("+this.stats.lastSearchTook+")":"搜索时间: "+this.stats.lastSearchTook}},methods:{clearRoute:function(){s.default.clearRoute()},getHelpText:function(){return this.routeStart.visible?this.routeEnd.visible?void 0:"点击任意位置选择终点":"点击任意位置选择起点"},ensurePreviousSceneDestroyed:function(){this.scene&&(this.scene.dispose(),this.scene=null),this.unsubscribeMoveEvents&&(this.unsubscribeMoveEvents(),this.unsubscribeMoveEvents=null)},createScene:function(){this.ensurePreviousSceneDestroyed();var t=this.$refs.canvas;this.loaded=!0,this.scene=l.scene(t);var e=this.scene,n=new i.default(this.$refs.svg.querySelector(".scene"),this.updateSVGElements.bind(this));this.scene.appendChild(n),e.setClearColor(12/255,41/255,82/255,1);var r=s.default.getGraphBBox().width/8;e.setViewBox({left:-r,top:-r,right:r,bottom:r});var a=s.default.getGraph(),o=a.getLinksCount(),u=new l.WireCollection(o);u.color={r:.8,g:.8,b:.8,a:.7},a.forEachLink(function(t){var e=a.getNode(t.fromId).data,n=a.getNode(t.toId).data;u.add({from:e,to:n})}),e.appendChild(u),e.on("mousemove",this.onMouseMoveOverScene,this),e.on("click",this.onSceneClick,this);var d=this.handleMouseDown.bind(this);document.body.addEventListener("mousedown",d,!0),document.body.addEventListener("touchstart",d,!0),this.unsubscribeMoveEvents=function(){document.body.removeEventListener("mousedown",d,!0),document.body.removeEventListener("touchstart",d,!0)}},updateSVGElements:function(t){var e=6/t.scale;this.$refs.foundPath.setAttributeNS(null,"stroke-width",e+"px"),this.scale=t.scale/this.scene.getPixelRatio()},handleMouseDown:function(t){var e,n=void 0;if(t.touches){var i=(t.changedTouches||t.touches)[0];e=this.scene.getSceneCoordinate(i.clientX,i.clientY),n=i.identifier}else e=this.scene.getSceneCoordinate(t.clientX,t.clientY);var r=s.default.getRouteHandleUnderCursor({sceneX:e.x,sceneY:e.y},this.scene);if(r)return t.stopPropagation(),t.preventDefault(),void r.startDragging(this.scene,n)},updateGraph:function(){this.ensurePreviousSceneDestroyed(),setTimeout(function(){s.default.updateSelectedGraph()},0)},updateSearchAlgorithm:function(){s.default.updateSearchAlgorithm()},onSceneClick:function(t){s.default.handleSceneClick(t)},onMouseMoveOverScene:function(t){new Date;var e=s.default.getRouteHandleUnderCursor(t,this.scene);e!==this.prevHandle&&(this.$refs.canvas.style.cursor=e?"pointer":"",this.prevHandle=e)}}}}},["NHnr"]);
//# sourceMappingURL=app.80f818257f50dc13d707.js.map
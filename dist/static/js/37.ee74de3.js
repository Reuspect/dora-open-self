webpackJsonp([37],{281:function(n,t,e){function o(n){e(777)}var s=e(6)(e(750),e(789),o,null,null);n.exports=s.exports},714:function(n,t,e){function o(n){e(734)}var s=e(6)(e(721),e(735),o,null,null);n.exports=s.exports},721:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["user"],data:function(){return{colorList:["#409EFF","#67C23A","#E6A23C","#F56C6C","#909399","#409EFF","#67C23A","#E6A23C","#F56C6C","#909399"]}},methods:{renderLogo:function(){var n=Math.round(6*Math.random()+1);return this.colorList[n]}}}},724:function(n,t,e){t=n.exports=e(20)(!1),t.push([n.i,"\n.random-logo .randomLogo {\n  color: #ffffff;\n  border-radius: 50%;\n  max-width: 75%;\n  height: 40px;\n  width: 40px;\n  display: block;\n  position: absolute;\n  line-height: 40px;\n  text-align: center;\n  font-size: 20px;\n  -webkit-box-shadow: 0px 1px 1px #aaa;\n          box-shadow: 0px 1px 1px #aaa;\n}\n.random-logo img {\n  border-radius: 50%;\n  max-width: 75%;\n  height: 40px;\n  width: 40px;\n  position: absolute;\n  -webkit-box-shadow: 0px 1px 1px #aaa;\n          box-shadow: 0px 1px 1px #aaa;\n}\n",""])},734:function(n,t,e){var o=e(724);"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);e(21)("423bdf58",o,!0,{})},735:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"random-logo"},[n.user.logo.indexOf("defaultlogo.png")>0?e("div",[e("span",{staticClass:"randomLogo",style:{backgroundColor:n.renderLogo()}},[n._v(n._s(n.user.userName.substring(0,1).toLocaleUpperCase()))])]):e("div",[e("img",{attrs:{src:n.user.logo,alt:n.user.userName,title:n.user.userName}})])])},staticRenderFns:[]}},750:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e(714),s=e.n(o);t.default={props:["regUsers"],filters:{},components:{RandomLogo:s.a},data:function(){return{list:null}}}},757:function(n,t,e){t=n.exports=e(20)(!1),t.push([n.i,"\n.user-list {\n  padding: 0;\n}\n.user-list ul {\n    padding: 0;\n    margin: 0;\n}\n.user-list ul li {\n      display: block;\n      position: relative;\n      width: 100%;\n      border-bottom: 1px solid #eee;\n      padding: 15px;\n}\n.user-list ul li label {\n        height: 40px;\n        line-height: 40px;\n        margin-left: 50px;\n}\n",""])},777:function(n,t,e){var o=e(757);"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);e(21)("d7657a28",o,!0,{})},789:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"dash-box"},[e("h2",{staticClass:"dash-title"},[n._v(n._s(n.$t("main.nearNewUsers")))]),n._v(" "),e("div",{staticClass:"user-list"},[e("ul",n._l(n.regUsers,function(t){return e("li",{key:t._id},[e("random-logo",{attrs:{user:t}}),n._v(" "),e("label",{attrs:{for:""}},[n._v(n._s(t.userName))])],1)}),0)])])},staticRenderFns:[]}}});
webpackJsonp([27,46,48,64],{1053:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(24),n=a.n(s),i=a(292),o=a.n(i),r=a(269),l=a.n(r),c=a(270),p=a.n(c),d=a(50);e.default={name:"index",data:function(){return{}},components:{DataTable:o.a,TopBar:l.a,Pagination:p.a},methods:a.i(d.b)([]),computed:n()({},a.i(d.a)(["bakDataList"])),mounted:function(){this.$store.dispatch("getBakDateList")}}},1100:function(t,e,a){e=t.exports=a(20)(!1),e.push([t.i,"",""])},1401:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"adminUser"},[a("el-row",{staticClass:"dr-datatable"},[a("el-col",{attrs:{span:24}},[a("TopBar",{attrs:{type:"backUpData"}}),t._v(" "),a("DataTable",{attrs:{dataList:t.bakDataList.docs,pageInfo:t.bakDataList.pageInfo}}),t._v(" "),a("Pagination",{attrs:{pageInfo:t.bakDataList.pageInfo,pageType:"backUpData"}})],1)],1)],1)},staticRenderFns:[]}},1419:function(t,e,a){var s=a(1100);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a(21)("52ff34e2",s,!0,{})},269:function(t,e,a){function s(t){a(617)}var n=a(6)(a(613),a(629),s,null,null);t.exports=n.exports},270:function(t,e,a){function s(t){a(635)}var n=a(6)(a(632),a(634),s,null,null);t.exports=n.exports},292:function(t,e,a){var s=a(6)(a(828),a(927),null,null,null);t.exports=s.exports},326:function(t,e,a){function s(t){a(1419)}var n=a(6)(a(1053),a(1401),s,null,null);t.exports=n.exports},613:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(271),n=a.n(s),i=a(94),o=a(272);a.n(o);e.default={props:{pageInfo:Object,type:String,ids:Array,code:String,path:String},data:function(){return{selectUserList:[],loading:!1,systemModelTypes:[{value:"all",label:this.$t("topBar.systemModelTypes_all")},{value:"h5-exception",label:this.$t("topBar.systemModelTypes_h5")},{value:"node-exception",label:this.$t("topBar.systemModelTypes_node")},{value:"login",label:this.$t("topBar.systemModelTypes_login")}],targetSysLogType:"all",loadingState:!1,formState:{show:!1},searchkey:"",authPost:"0",authPostOptions:[{value:"0",label:"全部"},{value:"1",label:"待审核"}]}},methods:{remoteMethod:function(t){if(""!==t){this.loading=!0;this.queryUserListByParams({searchkey:t,group:"1"})}else this.selectUserList=[]},changeUserOptions:function(t){this.$store.dispatch("getContentList",{userId:t})},queryUserListByParams:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this;i.a.regUserList(t).then(function(t){var a=t.data.data.docs;a?(e.selectUserList=a.map(function(t){return{value:t._id,label:t.userName}}),e.loading=!1):e.selectUserList=[]}).catch(function(t){console.log(t),e.selectUserList=[]})},changePostOptions:function(t){"0"==t?this.$store.dispatch("getContentList"):"1"==t&&this.$store.dispatch("getContentList",{state:"1"})},selectSysLogType:function(t){this.targetSysLogType=t,"all"==t?this.$store.dispatch("getSystemLogsList"):this.$store.dispatch("getSystemLogsList",{type:t})},searchResult:function(t){var e=this.pageInfo?this.pageInfo.searchkey:"";"content"==this.type?this.$store.dispatch("getContentList",{searchkey:e}):"contentTag"==this.type?this.$store.dispatch("getContentTagList",{searchkey:e}):"contentMessage"==this.type?this.$store.dispatch("getContentMessageList",{searchkey:e}):"regUser"==this.type&&this.$store.dispatch("getRegUserList",{searchkey:e,isTopBar:"1"})},addUser:function(){this.$store.dispatch("showAdminUserForm")},addRole:function(){this.$store.dispatch("showAdminGroupForm")},addHelp:function(){this.$store.dispatch("showHelpCenterForm")},addResource:function(){this.$store.dispatch("showAdminResourceForm",{type:"root",formData:{parentId:"0"}})},addContent:function(){this.$store.dispatch("showContentForm"),this.$router.push("/addContent")},directUser:function(){this.$store.dispatch("showDirectUserForm")},addAds:function(){this.$store.dispatch("adsInfoForm",{edit:!1,formData:{}}),this.$router.push("/addAds")},addSysAnnounce:function(){this.$store.dispatch("showContentForm"),this.$router.push("/addSysAnnounce")},addTopCates:function(){this.$store.dispatch("showContentCategoryForm",{type:"root",formData:{parentId:"0"}})},clearSystemOptionLogs:function(){var t=this;this.$confirm(this.$t("main.del_notice"),this.$t("main.scr_modal_title"),{confirmButtonText:this.$t("main.confirmBtnText"),cancelButtonText:this.$t("main.cancelBtnText"),type:"warning"}).then(function(){return i.a.clearSystemOptionLogs()}).then(function(e){200===e.data.status?(t.$store.dispatch("getSystemLogsList"),t.$message({message:"清空日志成功",type:"success"})):t.$message.error(e.data.message)}).catch(function(e){t.$message({type:"info",message:t.$t("main.scr_modal_del_error_info")})})},branchDelete:function(t){var e=this,a=this;if("msg"===t?this.$t("topBar.del_message"):"user"===t?this.$t("topBar.del_user"):"systemlogs"===t?this.$t("topBar.del_sysopt_log"):"systemnotify"===t&&this.$t("topBar.del_sys_notice"),n()(a.ids))return this.$message({type:"info",message:this.$t("validate.selectNull",{label:this.$t("main.target_Item")})}),!1;this.$confirm(this.$t("main.del_notice"),this.$t("main.scr_modal_title"),{confirmButtonText:this.$t("main.confirmBtnText"),cancelButtonText:this.$t("main.cancelBtnText"),type:"warning"}).then(function(){var e=a.ids.join();return"msg"===t?i.a.deleteContentMessage({ids:e}):"user"===t?i.a.deleteRegUser({ids:e}):"systemlogs"===t?i.a.deleteSystemOptionLogs({ids:e}):"systemnotify"===t?i.a.deleteSystemNotify({ids:e}):"content"===t?i.a.deleteContent({ids:e}):void 0}).then(function(a){200===a.data.status?("msg"===t?e.$store.dispatch("getContentMessageList"):"user"===t?e.$store.dispatch("getRegUserList"):"systemlogs"===t?e.$store.dispatch("getSystemLogsList"):"systemnotify"===t?e.$store.dispatch("getSystemNotifyList"):"content"===t&&e.$store.dispatch("getContentList"),e.$message({message:""+e.$t("main.scr_modal_del_succes_info"),type:"success"})):e.$message.error(a.data.message)}).catch(function(t){e.$message({type:"info",message:e.$t("main.scr_modal_del_error_info")})})},addTag:function(){this.$store.dispatch("showContentTagForm")},delUser:function(){},bakUpData:function(){var t=this;this.$confirm(this.$t("backUpData.askBak"),this.$t("main.scr_modal_title"),{confirmButtonText:this.$t("main.confirmBtnText"),cancelButtonText:this.$t("main.cancelBtnText"),type:"warning"}).then(function(){return t.loadingState=!0,i.a.bakUpData()}).then(function(e){200===e.data.status?(t.loadingState=!1,t.$store.dispatch("getBakDateList"),t.$message({message:t.$t("backUpData.bakSuccess"),type:"success"})):t.$message.error(e.data.message)}).catch(function(e){t.$message({type:"info",message:t.$t("backUpData.bakEr")+e})})},saveTemplate:function(){var t=this,e={code:this.code,path:this.path};i.a.updateTemplateFileText(e).then(function(e){200==e.data.status?t.$message({message:t.$t("main.updateSuccess"),type:"success"}):t.$message.error(e.data.message)})},setHasRead:function(){var t=this;if(n()(this.ids))return this.$message({type:"info",message:this.$t("validate.selectNull",{label:this.$t("main.target_Item")})}),!1;var e=this.ids.join();i.a.setNoticeRead({ids:e}).then(function(e){if(200===e.data.status){t.$store.dispatch("getSystemNotifyList");var a=t.$store.getters.loginState.noticeCounts;t.$store.dispatch("loginState",{noticeCounts:a-t.ids.length})}else t.$message.error(e.data.message)})}},components:{}}},615:function(t,e,a){e=t.exports=a(20)(!1),e.push([t.i,"\n.option-button {\n  display: inline-block;\n}\n",""])},617:function(t,e,a){var s=a(615);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a(21)("30368a68",s,!0,{})},629:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dr-toolbar"},[a("div",{staticClass:"option-button el-col-6"},["adminGroup"===t.type?a("div",[a("el-button",{attrs:{size:"small",type:"primary",plain:"",round:""},on:{click:t.addRole}},[a("i",{staticClass:"fa fa-fw fa-plus",attrs:{"aria-hidden":"true"}})])],1):"adminUser"===t.type?a("div",[a("el-button",{attrs:{size:"small",type:"primary",plain:"",round:""},on:{click:t.addUser}},[a("i",{staticClass:"fa fa-fw fa-plus"})])],1):"adminResource"===t.type?a("div",[a("el-button",{attrs:{size:"small",type:"primary",plain:"",round:""},on:{click:t.addResource}},[a("i",{staticClass:"fa fa-fw fa-plus",attrs:{"aria-hidden":"true"}})])],1):"content"===t.type?a("div",[a("el-button",{attrs:{size:"small",type:"primary",plain:"",round:""},on:{click:function(e){return t.addContent("content")}}},[a("i",{staticClass:"fa fa-fw fa-plus",attrs:{"aria-hidden":"true"}})]),t._v(" "),a("el-button",{attrs:{size:"small",type:"danger",plain:"",round:""},on:{click:function(e){return t.branchDelete("content")}}},[a("i",{staticClass:"fa fa-fw fa-trash-o"})]),t._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"分配文章到用户",placement:"top"}},[a("el-button",{attrs:{size:"small",type:"warning",plain:"",round:""},on:{click:function(e){return t.directUser("content")}}},[a("i",{staticClass:"fa fa-fw fa-street-view",attrs:{"aria-hidden":"true"}})])],1)],1):"contentCategory"===t.type?a("div",[a("el-button",{attrs:{size:"small",type:"primary",plain:"",round:""},on:{click:t.addTopCates}},[a("i",{staticClass:"fa fa-fw fa-plus",attrs:{"aria-hidden":"true"}})])],1):"contentMessage"===t.type?a("div",[a("el-button",{attrs:{size:"small",type:"danger",plain:"",round:""},on:{click:function(e){return t.branchDelete("msg")}}},[a("i",{staticClass:"fa fa-fw fa-trash-o"})])],1):"contentTag"===t.type?a("div",[a("el-button",{attrs:{size:"small",type:"primary",plain:"",round:""},on:{click:t.addTag}},[a("i",{staticClass:"fa fa-fw fa-plus",attrs:{"aria-hidden":"true"}})])],1):"regUser"===t.type?a("div",[a("el-button",{attrs:{size:"small",type:"danger",plain:"",round:""},on:{click:function(e){return t.branchDelete("user")}}},[a("i",{staticClass:"fa fa-fw fa-trash-o"})])],1):"backUpData"===t.type?a("div",[a("el-button",{attrs:{size:"small",type:"primary",plain:"",round:"",loading:t.loadingState},on:{click:t.bakUpData}},[a("i",{staticClass:"fa fa-fw fa-cloud-download",attrs:{"aria-hidden":"true"}})])],1):"adminTemplate"===t.type?a("div",[a("el-button",{attrs:{size:"small",type:"primary",plain:"",round:""},on:{click:t.saveTemplate}},[a("i",{staticClass:"fa fa-fw fa-save",attrs:{"aria-hidden":"true"}})])],1):"systemOptionLogs"===t.type?a("div",[a("el-button",{attrs:{size:"small",type:"danger",plain:"",round:""},on:{click:function(e){return t.branchDelete("systemlogs")}}},[a("i",{staticClass:"fa fa-fw fa-trash-o"})]),t._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"清空所有日志",placement:"right-start"}},[a("el-button",{attrs:{size:"small",type:"warning",plain:"",round:""},on:{click:t.clearSystemOptionLogs}},[a("i",{staticClass:"fa fa-fw fa-window-restore"})])],1)],1):"systemNotify"===t.type?a("div",[a("el-button",{attrs:{size:"small",type:"primary",plain:"",round:""},on:{click:function(e){return t.setHasRead()}}},[a("i",{staticClass:"fa fa-fw fa-eye",attrs:{"aria-hidden":"true"}})]),t._v(" "),a("el-button",{attrs:{size:"small",type:"danger",plain:"",round:""},on:{click:function(e){return t.branchDelete("systemnotify")}}},[a("i",{staticClass:"fa fa-fw fa-trash-o"})])],1):"systemAnnounce"===t.type?a("div",[a("el-button",{attrs:{type:"primary",size:"small",plain:"",round:""},on:{click:t.addSysAnnounce}},[a("i",{staticClass:"fa fa-fw fa-plus"})])],1):"ads"===t.type?a("div",[a("el-button",{attrs:{type:"primary",size:"small",plain:"",round:""},on:{click:t.addAds}},[a("i",{staticClass:"fa fa-fw fa-plus"})])],1):"helpCenter"===t.type?a("div",[a("el-button",{attrs:{type:"primary",size:"small",plain:"",round:""},on:{click:t.addHelp}},[a("i",{staticClass:"fa fa-fw fa-plus"})])],1):t._e()]),t._v(" "),a("div",{staticClass:"el-col-18"},["content"===t.type?a("div",{staticClass:"dr-toolbar-right"},[a("el-select",{staticClass:"dr-searchInput",attrs:{size:"small",clearable:"",filterable:"",remote:"","reserve-keyword":"",placeholder:"请输入用户名","remote-method":t.remoteMethod,loading:t.loading},on:{change:t.changeUserOptions},model:{value:t.pageInfo.user,callback:function(e){t.$set(t.pageInfo,"user",e)},expression:"pageInfo.user"}},t._l(t.selectUserList,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1),t._v(" "),a("el-input",{staticClass:"dr-searchInput",attrs:{size:"small",placeholder:t.$t("topBar.keywords"),"suffix-icon":"el-icon-search","on-icon-click":t.searchResult},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchResult(e)}},model:{value:t.pageInfo.searchkey,callback:function(e){t.$set(t.pageInfo,"searchkey",e)},expression:"pageInfo.searchkey"}}),t._v(" "),a("div",{staticClass:"dr-select-box"},[a("el-select",{attrs:{size:"small",placeholder:"请选择"},on:{change:t.changePostOptions},model:{value:t.authPost,callback:function(e){t.authPost=e},expression:"authPost"}},t._l(t.authPostOptions,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1)],1):"contentTag"===t.type?a("div",{staticClass:"dr-toolbar-right"},[a("el-input",{staticClass:"dr-searchInput",attrs:{size:"small",placeholder:t.$t("topBar.tagName"),"suffix-icon":"el-icon-search","on-icon-click":t.searchResult},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchResult(e)}},model:{value:t.pageInfo.searchkey,callback:function(e){t.$set(t.pageInfo,"searchkey",e)},expression:"pageInfo.searchkey"}})],1):"contentMessage"===t.type?a("div",{staticClass:"dr-toolbar-right"},[a("el-input",{staticClass:"dr-searchInput",attrs:{size:"small",placeholder:t.$t("topBar.messageContent"),"suffix-icon":"el-icon-search","on-icon-click":t.searchResult},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchResult(e)}},model:{value:t.pageInfo.searchkey,callback:function(e){t.$set(t.pageInfo,"searchkey",e)},expression:"pageInfo.searchkey"}})],1):"regUser"===t.type?a("div",{staticClass:"dr-toolbar-right"},[a("el-input",{staticClass:"dr-searchInput",attrs:{size:"small",placeholder:"用户名/手机号/邮箱","suffix-icon":"el-icon-search","on-icon-click":t.searchResult},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchResult(e)}},model:{value:t.pageInfo.searchkey,callback:function(e){t.$set(t.pageInfo,"searchkey",e)},expression:"pageInfo.searchkey"}})],1):"systemOptionLogs"===t.type?a("div",{staticClass:"dr-toolbar-right"},[a("el-select",{staticClass:"dr-searchInput",attrs:{size:"small",placeholder:t.$t("main.ask_select_label")},on:{change:t.selectSysLogType},model:{value:t.targetSysLogType,callback:function(e){t.targetSysLogType=e},expression:"targetSysLogType"}},t._l(t.systemModelTypes,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1):"adminTemplate"===t.type?a("div",{staticClass:"dr-toolbar-right",staticStyle:{"text-align":"left"}},[a("el-tag",{attrs:{"v-if":t.path,type:"info",size:"small"}},[t._v(t._s(t.path))])],1):a("div",{staticClass:"dr-toolbar-right"},[t._v(" ")])])])},staticRenderFns:[]}},632:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{pageInfo:Object,pageType:String},methods:{renderPageList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,a=this.pageInfo?this.pageInfo.searchkey:"",s=this.pageInfo?this.pageInfo.state:"",n=this.pageInfo?this.pageInfo.user:"",i=t;if("content"===this.pageType)this.$store.dispatch("getContentList",{current:i,pageSize:e,searchkey:a,state:s,userId:n});else if("adminUser"===this.pageType)this.$store.dispatch("getAdminUserList",{current:i,pageSize:e,searchkey:a});else if("adminGroup"===this.pageType)this.$store.dispatch("getAdminGroupList",{current:i,pageSize:e,searchkey:a});else if("contentMessage"===this.pageType)this.$store.dispatch("getContentMessageList",{current:i,pageSize:e,searchkey:a});else if("contentTag"===this.pageType)this.$store.dispatch("getContentTagList",{current:i,pageSize:e,searchkey:a});else if("regUser"===this.pageType)this.$store.dispatch("getRegUserList",{current:i,pageSize:e,searchkey:a});else if("backUpData"===this.pageType)this.$store.dispatch("getBakDateList",{current:i,pageSize:e,searchkey:a});else if("systemOptionLogs"===this.pageType){var o=this.pageInfo?this.pageInfo.type:"";this.$store.dispatch("getSystemLogsList",{current:i,pageSize:e,searchkey:a,type:o})}else"systemNotify"===this.pageType?this.$store.dispatch("getSystemNotifyList",{current:i,pageSize:e,searchkey:a}):"systemAnnounce"===this.pageType?this.$store.dispatch("getSystemAnnounceList",{current:i,pageSize:e,searchkey:a}):"ads"===this.pageType?this.$store.dispatch("getAdsList",{current:i,pageSize:e,searchkey:a}):"siteMessage"===this.pageType?this.$store.dispatch("getSiteMessageList",{current:i,pageSize:e,searchkey:a}):"helpCenter"===this.pageType?this.$store.dispatch("getHelpCenterList",{current:i,pageSize:e,searchkey:a}):"versionManage"===this.pageType&&this.$store.dispatch("getVersionManageList",{current:i,pageSize:e,searchkey:a})},handleSizeChange:function(t){console.log("每页 "+t+" 条");var e=this.pageInfo?this.pageInfo.current:1;this.renderPageList(e,t)},handleCurrentChange:function(t){console.log("当前页: "+t);var e=this.pageInfo?this.pageInfo.pageSize:10;this.renderPageList(t,e)}},data:function(){return{}}}},633:function(t,e,a){e=t.exports=a(20)(!1),e.push([t.i,".dr-pagination{text-align:center;margin:15px auto}",""])},634:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"block dr-pagination"},[t.pageInfo?a("div",[a("el-pagination",{attrs:{"current-page":t.pageInfo.current,"page-sizes":[10,30,50],"page-size":t.pageInfo.pageSize,layout:"sizes, prev, pager, next",total:t.pageInfo.totalItems},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){return t.$set(t.pageInfo,"current",e)},"update:current-page":function(e){return t.$set(t.pageInfo,"current",e)}}})],1):t._e()])},staticRenderFns:[]}},635:function(t,e,a){var s=a(633);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a(21)("6ac273b6",s,!0,{})},828:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(94);e.default={props:{dataList:Array,pageInfo:Object},data:function(){return{loading:!1,multipleSelection:[]}},methods:{handleSelectionChange:function(t){this.multipleSelection=t},deleteDataItem:function(t,e){var a=this;this.$confirm(this.$t("main.del_notice"),this.$t("main.scr_modal_title"),{confirmButtonText:this.$t("main.confirmBtnText"),cancelButtonText:this.$t("main.cancelBtnText"),type:"warning"}).then(function(){return s.a.deletetBakDataItem({ids:e[t]._id})}).then(function(t){200===t.data.status?(a.$store.dispatch("getBakDateList",a.pageInfo),a.$message({message:a.$t("main.scr_modal_del_succes_info"),type:"success"})):a.$message.error(t.data.message)}).catch(function(){a.$message({type:"info",message:a.$t("main.scr_modal_del_error_info")})})}}}},927:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{align:"center",data:t.dataList,"tooltip-effect":"dark"},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),a("el-table-column",{attrs:{prop:"fileName",label:t.$t("backUpData.fileName"),width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("i",{staticClass:"fa fa-database",style:{color:"#99A9BF"}}),t._v(" "+t._s(e.row.fileName)+"\n            ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"logs",label:t.$t("backUpData.option")}}),t._v(" "),a("el-table-column",{attrs:{prop:"date",label:t.$t("backUpData.bakTime")}}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("main.dataTableOptions"),width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",type:"danger",plain:"",round:"",icon:"el-icon-delete"},on:{click:function(a){return t.deleteDataItem(e.$index,t.dataList)}}})]}}])})],1)],1)},staticRenderFns:[]}}});
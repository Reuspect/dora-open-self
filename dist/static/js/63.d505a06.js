webpackJsonp([63],{295:function(t,e,a){var o=a(6)(a(831),a(952),null,null,null);t.exports=o.exports},831:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(94);e.default={props:["dialogState","forderlist"],data:function(){return{cateRules:{name:[{required:!0,message:this.$t("validate.inputNull",{label:this.$t("contentCategory.cate_name")}),trigger:"blur"},{min:2,max:20,message:this.$t("validate.rangelength",{min:2,max:20}),trigger:"blur"}],defaultUrl:[{required:!0,message:this.$t("validate.inputNull",{label:this.$t("contentCategory.seoUrl")}),trigger:"blur"}],comments:[{message:this.$t("validate.inputNull",{label:this.$t("main.comments_label")}),trigger:"blur"},{min:4,max:100,message:this.$t("validate.ranglengthandnormal",{min:4,max:100}),trigger:"blur"}]}}},methods:{handleChange:function(t){console.log(t)},confirm:function(){this.$store.dispatch("hideContentCategoryForm")},submitForm:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;var a=e.dialogState.formData;e.dialogState.edit?o.a.updateContentCategory(a).then(function(t){200===t.data.status?(e.$store.dispatch("hideContentCategoryForm"),e.$store.dispatch("getContentCategoryList"),e.$message({message:e.$t("main.updateSuccess"),type:"success"})):e.$message.error(t.data.message)}):o.a.addContentCategory(a).then(function(t){200===t.data.status?(e.$store.dispatch("hideContentCategoryForm"),e.$store.dispatch("getContentCategoryList"),e.$message({message:e.$t("main.addSuccess"),type:"success"})):e.$message.error(t.data.message)})})}}}},952:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dr-AdminResourceForm"},[a("el-dialog",{attrs:{xs:20,sm:20,md:6,lg:6,xl:6,size:"small",title:t.$t("contentCategory.form_title"),visible:t.dialogState.show,"close-on-click-modal":!1},on:{"update:visible":function(e){return t.$set(t.dialogState,"show",e)}}},[a("el-form",{ref:"cateRuleForm",staticClass:"demo-ruleForm",attrs:{model:t.dialogState.formData,rules:t.cateRules,"label-width":"120px"}},[a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"children"===t.dialogState.type&&!t.dialogState.edit,expression:"dialogState.type==='children' && !dialogState.edit"}],attrs:{label:t.$t("adminResource.lb_parentType"),prop:"label"}},[a("el-input",{attrs:{size:"small",disabled:!0},model:{value:t.dialogState.formData.parentObj.name,callback:function(e){t.$set(t.dialogState.formData.parentObj,"name",e)},expression:"dialogState.formData.parentObj.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("contentCategory.cate_name"),prop:"name"}},[a("el-input",{attrs:{size:"small"},model:{value:t.dialogState.formData.name,callback:function(e){t.$set(t.dialogState.formData,"name",e)},expression:"dialogState.formData.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("contentCategory.enabel"),prop:"enable"}},[a("el-switch",{attrs:{"on-text":t.$t("main.radioOn"),"off-text":t.$t("main.radioOff")},model:{value:t.dialogState.formData.enable,callback:function(e){t.$set(t.dialogState.formData,"enable",e)},expression:"dialogState.formData.enable"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("contentCategory.type"),prop:"type"}},[a("el-radio",{staticClass:"radio",attrs:{label:"1"},model:{value:t.dialogState.formData.type,callback:function(e){t.$set(t.dialogState.formData,"type",e)},expression:"dialogState.formData.type"}},[t._v(t._s(t.$t("contentCategory.typeNormal")))])],1),t._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"0"==t.dialogState.formData.parentId,expression:"dialogState.formData.parentId == '0'"}],attrs:{label:t.$t("templateConfig.temp"),prop:"contentTemp"}},[a("el-select",{attrs:{size:"small",placeholder:"请选择"},model:{value:t.dialogState.formData.contentTemp,callback:function(e){t.$set(t.dialogState.formData,"contentTemp",e)},expression:"dialogState.formData.contentTemp"}},t._l(t.forderlist,function(t){return a("el-option",{key:t._id,attrs:{label:t.name,value:t._id}})}),1)],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("contentCategory.seoUrl"),prop:"defaultUrl"}},[a("el-input",{attrs:{size:"small"},model:{value:t.dialogState.formData.defaultUrl,callback:function(e){t.$set(t.dialogState.formData,"defaultUrl",e)},expression:"dialogState.formData.defaultUrl"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("contentCategory.sort"),prop:"sortId"}},[a("el-input-number",{attrs:{size:"small",min:1,max:50},on:{change:t.handleChange},model:{value:t.dialogState.formData.sortId,callback:function(e){t.$set(t.dialogState.formData,"sortId",e)},expression:"dialogState.formData.sortId"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("contentCategory.keywords"),prop:"keywords"}},[a("el-input",{attrs:{type:"textarea",rows:2},model:{value:t.dialogState.formData.keywords,callback:function(e){t.$set(t.dialogState.formData,"keywords",e)},expression:"dialogState.formData.keywords"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("contentCategory.comments"),prop:"comments"}},[a("el-input",{attrs:{size:"small",type:"texarea"},model:{value:t.dialogState.formData.comments,callback:function(e){t.$set(t.dialogState.formData,"comments",e)},expression:"dialogState.formData.comments"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{size:"medium",type:"primary"},on:{click:function(e){return t.submitForm("cateRuleForm")}}},[t._v(t._s(t.dialogState.edit?t.$t("main.form_btnText_update"):t.$t("main.form_btnText_save")))])],1)],1)],1)],1)},staticRenderFns:[]}}});
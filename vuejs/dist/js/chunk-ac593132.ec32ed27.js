(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ac593132"],{a632:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.admin?s("div",{class:e.ismobile?"content mx-1 mt-2 px-0":"content ml-5 mt-2 mr-5 pl-5 pr-5 "},[s("h1",{staticClass:"title has-text-centered has-text-weight-bold has-text-white"},[e._v("Manage Global Site Settings")]),s("div",{staticClass:"loading"},[s("loading",{attrs:{active:e.loading,"can-cancel":!1,"is-full-page":e.fullpage},on:{"update:active":function(t){e.loading=t}}})],1),s("article",{class:e.errorMessage?"message is-danger":"message is-hidden is-danger"},[s("div",{staticClass:"message-header"},[s("p",[e._v("Error Proccessing")]),s("button",{staticClass:"delete",attrs:{"aria-label":"delete"},on:{click:function(t){e.errorMessage=!1}}})]),s("div",{staticClass:"message-body"},[e._v(" "+e._s(e.resultmessage)+" ")])]),s("article",{class:e.successMessage?"message is-success":"message is-hidden is-success"},[s("div",{staticClass:"message-header"},[s("p",[e._v("Success !")]),s("button",{staticClass:"delete",attrs:{"aria-label":"delete"},on:{click:function(t){e.successMessage=!1}}})]),s("div",{staticClass:"message-body"},[e._v(" "+e._s(e.resultmessage)+" ")])]),s("div",{staticClass:"columns is-centered is-multiline is-vcentered"},[s("div",{staticClass:"column is-two-thirds"},[s("div",{staticClass:"box has-background-light"},[s("form",{on:{submit:function(t){return t.preventDefault(),e.handleSavePrefs(t)}}},[s("div",{staticClass:"columns is-multiline is-mobile"},[e._m(0),s("div",{staticClass:"column is-one-third"},[s("div",{staticClass:"field"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.request,expression:"request"}],staticClass:"switch is-danger",attrs:{type:"checkbox",id:"request",name:"request"},domProps:{checked:Array.isArray(e.request)?e._i(e.request,null)>-1:e.request},on:{change:function(t){var s=e.request,a=t.target,i=!!a.checked;if(Array.isArray(s)){var n=null,r=e._i(s,n);a.checked?r<0&&(e.request=s.concat([n])):r>-1&&(e.request=s.slice(0,r).concat(s.slice(r+1)))}else e.request=i}}}),s("label",{attrs:{for:"request"}},[s("span",{staticClass:"content"},[e._v(e._s(e.request?"Allowed":"Disallowed"))])])])]),e._m(1),s("div",{staticClass:"column is-one-third"},[s("div",{staticClass:"field"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.adminreqs,expression:"adminreqs"}],staticClass:"switch is-danger",attrs:{type:"checkbox",id:"adminreqs",name:"adminreqs"},domProps:{checked:Array.isArray(e.adminreqs)?e._i(e.adminreqs,null)>-1:e.adminreqs},on:{change:function(t){var s=e.adminreqs,a=t.target,i=!!a.checked;if(Array.isArray(s)){var n=null,r=e._i(s,n);a.checked?r<0&&(e.adminreqs=s.concat([n])):r>-1&&(e.adminreqs=s.slice(0,r).concat(s.slice(r+1)))}else e.adminreqs=i}}}),s("label",{attrs:{for:"adminreqs"}},[s("span",{staticClass:"content"},[e._v(e._s(e.adminreqs?"Allowed":"Disallowed"))])])])]),s("div",{staticClass:"column has-text-centered is-full"},[s("button",{staticClass:"button is-netflix-red",attrs:{type:"submit",disabled:e.disabled}},[e._v(" Save Changes ")])])])])])])])]):e._e()},i=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"column is-two-thirds"},[s("p",{staticClass:"subtitle has-text-weight-bold"},[e._v("Allow User Requests")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"column is-two-thirds"},[s("p",{staticClass:"subtitle has-text-weight-bold"},[e._v("Allow Admin and Superadmin Requests")])])}],n=(s("99af"),s("4de4"),s("96cf"),s("1da1")),r=s("e826"),d=s("9062"),l=s.n(d),c=(s("e40d"),{components:{Loading:l.a},metaInfo:function(){var e=this;return{title:this.metatitle,titleTemplate:function(t){return t&&e.siteName?t?"".concat(t," | ").concat(e.siteName):"".concat(e.siteName):"Loading..."}}},data:function(){return{notify:!0,metatitle:"Site Settings",user:{},token:{},disabled:!0,admin:!1,superadmin:!1,request:!0,resultmessage:"",successMessage:!1,errorMessage:!1,adminreqs:!0,defaultData:{request:!0,adminreqs:!0},gds:[],currgd:{},loading:!1,fullpage:!0}},methods:{gotoPage:function(e,t){this.$ga.event({eventCategory:"Page Navigation",eventAction:e+" - "+this.siteName,eventLabel:"Admin Area"}),t?this.$router.push({path:"/"+this.currgd.id+":"+t+e}):this.$router.push({path:"/"+this.currgd.id+":"+e})},getSiteSettings:function(){var e=this;this.loading=!0,this.$http.post(window.apiRoutes.getSiteSettings).then((function(t){t.data.auth&&t.data.registered?(e.request=t.data.data.requests,e.adminreqs=t.data.data.adminRequests,e.defaultData.request=t.data.data.requests,e.defaultData.adminreqs=t.data.data.adminRequests,e.loading=!1):(e.request=e.defaultData.request,e.adminreqs=e.defaultData.adminreqs,e.loading=!1)}))},checkButtonDisability:function(){this.request!==this.defaultData.request||this.adminreqs!==this.defaultData.adminreqs?this.disabled=!1:this.disabled=!0},handleSavePrefs:function(){var e=this;this.loading=!0,this.$http.post(window.apiRoutes.setSiteSettings,{email:this.user.email,requests:this.request,adminrequests:this.adminreqs}).then(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(s){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.loading=!1,!(s.data.auth&&s.data.registered&&s.data.changed)){t.next=11;break}return t.next=4,e.getSiteSettings();case 4:e.successMessage=!0,e.errorMessage=!1,e.resultmessage=s.data.message,e.loading=!1,e.disabled=!0,t.next=18;break;case 11:return t.next=13,e.getSiteSettings();case 13:e.successMessage=!1,e.errorMessage=!0,e.resultmessage=s.data.message,e.loading=!1,e.disabled=!0;case 18:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},computed:{ismobile:function(){var e=window.innerWidth>0?window.innerWidth:screen.width;return!(e>966)},siteName:function(){var e=this;return window.gds.filter((function(t,s){return s==e.$route.params.id}))[0]}},beforeMount:function(){this.loading=!0;var e=Object(r["b"])();e.isThere?"hybrid"==e.type?(this.$ga.event({eventCategory:"User Initialized",eventAction:"Hybrid - "+this.siteName,eventLabel:"Site Settings",nonInteraction:!0}),this.user=e.data.user,this.logged=e.data.logged,this.loading=e.data.loading):"normal"==e.type&&(this.$ga.event({eventCategory:"User Initialized",eventAction:"Normal - "+this.siteName,eventLabel:"Site Settings",nonInteraction:!0}),this.user=e.data.user,this.token=e.data.token,this.logged=e.data.logged,this.loading=e.data.loading,this.admin=e.data.admin,this.superadmin=e.data.superadmin):(this.logged=e.data.logged,this.loading=e.data.loading)},mounted:function(){this.getSiteSettings()},created:function(){var e=Object(r["a"])(this.$route.params.id);this.gds=e.gds,this.currgd=e.current,this.$ga.page({page:this.$route.path,title:"Admin Area - "+this.siteName,location:window.location.href})},watch:{request:"checkButtonDisability",adminreqs:"checkButtonDisability"}}),o=c,u=s("2877"),g=Object(u["a"])(o,a,i,!1,null,null,null);t["default"]=g.exports},e40d:function(e,t,s){}}]);
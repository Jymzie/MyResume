"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[136],{6:(t,e,o)=>{o.d(e,{A:()=>a});var i=o(314),r=o.n(i)()((function(t){return t[1]}));r.push([t.id,'.custom-outline{border-color:#ff4081!important}.timeline{margin-top:20px;position:relative}.timeline:before{background:#8a9196;background:linear-gradient(90deg,#8a9196 0,#7a8288 60%,#62696d);border-radius:4px;content:"";filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#8a9196",endColorstr="#62696d",GradientType=1);height:calc(100% + 50px);left:14px;position:absolute;top:5px;width:4px}.timeline-month{background-color:#444950;border:1px solid #17191b;border-radius:40px;border-right-color:#000;display:inline-block;margin-bottom:30px;padding:4px 15px 4px 35px;position:relative;width:auto}.timeline-month span{background-color:#111;border:1px solid #000;border-bottom-right-radius:40px;border-top-right-radius:40px;box-sizing:border-box;display:inline-block;left:calc(100% - 10px);padding:4px 10px 4px 20px;position:absolute;top:-1px;white-space:nowrap;z-index:-1}.timeline-month:before{background:#8a9196;background:linear-gradient(180deg,#8a9196 0,#7a8288 60%,#70787d);border:1px solid #17191b;border-radius:100%;content:"";filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#8a9196",endColorstr="#70787d",GradientType=0);height:20px;left:5px;position:absolute;width:20px}.timeline-section{display:block;margin-bottom:30px;padding-left:35px;position:relative}.timeline-date{background:linear-gradient(#74cae3,#5bc0de 60%,#4ab9db);border:1px solid #17191b;border-radius:20px;color:#fff;display:inline-block;margin-bottom:15px;padding:2px 15px;position:relative;text-shadow:1px 1px 1px rgba(0,0,0,.3)}.timeline-section:before{background-color:#444950;content:"";height:1px;left:20px;position:absolute;top:12px;width:30px}.timeline-section:after{background:linear-gradient(180deg,#8a9196 0,#7a8288 60%,#70787d);border:1px solid #17191b;border-radius:100%;content:"";height:10px;left:11px;position:absolute;top:7px;width:10px}.timeline-section .col-sm-4{margin-bottom:15px}.timeline-box{background-color:#444950;border:1px solid #17191b;border-radius:15px;border-bottom-right-radius:0;border-top-left-radius:0;overflow:hidden;position:relative;transition:all .3s ease}.box-icon{position:absolute;right:5px;top:0}.box-title{border-bottom:1px solid #17191b;padding:5px 15px}.box-title i{margin-right:5px}.box-content{background-color:#17191b;padding:5px 15px}.box-content strong{color:#666;font-style:italic;margin-right:5px}.box-item{margin-bottom:5px}.box-footer{background-color:#444950;border-top:1px solid #17191b;font-style:italic;padding:5px 15px;text-align:right}.theme--light.v-input--switch .v-input--switch__track,.v-input--switch:not(.v-input--switch--flat):not(.v-input--switch--inset) .v-input--switch__thumb{color:purple}b a{color:#bbdefb!important;cursor:pointer;text-decoration:none}',""]);const a=r},136:(t,e,o)=>{o.r(e),o.d(e,{default:()=>l});const i={props:{SoundEffect:{type:Function}},data:function(){return{overlaydialog:!1,overlaycount:0,overlaytext:"",exptip:!1,toportfolio:"sa",Experience:[{company:"H.R.D. SINGAPORE PTE LTD",logo:"HRD.webp",address:"Block 3, Cavite Economic Zone III, Gen. Trias, Cavite",year:"Nov 6, 2023 - PRESENT",startdate:"Nov 6, 2023",role:"Programmer / IT Support",color:"purple",info:["Diagnose and troubleshoots company's website/systems.","Developed a system/function that enhanced the production's work efficiency.","Contributed a Kaizen named <b style='color:#BBDEFB'><a href='BarChart' target='_blank'>Access Manager</a></b> to systemize user's access permission to Barchart Maker and Shukka System.","Developed a website system named <b style='color:#BBDEFB'><a href='Plan' target='_blank'>Balcony Handrail Management System</a></b> for Paperless and Real-Time Process Monitoring.","Developed a website system named <b style='color:#BBDEFB'><a href='View' target='_blank'>Nail Pitch System</a></b> to track the HTI i-Cube production data."]},{company:"INTERN - CVSU-CCAT - ElStudio",logo:"CVSU.webp",address:"EM's Barrio, Tejeros Convention, Gen. Trias, Cavite",year:"March 2 - May 28, 2023",startdate:"March 2, 2023",role:"Web Developer",color:"green",info:["Applied the basic front end languages for website development (HTML, CSS, Javascript and PHP).","Developed the <b style='color:#BBDEFB'>ElStudio I.D. System</b> that creates and scan QR codes for Biometric purposes."]}],technicalskills:[{title:"Languages",icon:"mdi-xml",items:["HTML","CSS","Javascript","PHP","Java","C"]},{title:"Frameworks",icon:"mdi-electron-framework",items:["Laravel","Vue","React","Wordpress"]},{title:"Databases",icon:"mdi-database",items:["MsSQL","MySQL","MongoDB"]},{title:"Web Hosting",icon:"mdi-server",items:["Git","Bluehost","cPanel","InfinityFree"]},{title:"Soft Skills",icon:"mdi-puzzle",items:["Adaptability","Communication","Creativity","Time Management","Problem Solving"]},{title:"Others",icon:"mdi-robot-confused",items:["Photoshop","SAI","PowerDirector","Fire Fighter"]}]}},methods:{handleClick:function(t){console.log("Clicked!")},CloseDialog:function(){this.exptip=!1,this.overlaydialog=!1,this.overlaytext="",this.SoundEffect("close"),console.log(this.toportfolio)},mHoverSelect:function(t,e){this.$vuetify.breakpoint.width<911&&(this.exptip=!0),this.SoundEffect("slide"),this.overlaycount=e,this.overlaytext=t,this.overlaydialog=!0},mSlideCarousel:function(t){this.SoundEffect("slide"),2==t?(this.overlaycount++,2==this.overlaycount&&(this.overlaycount=0),this.overlaytext=this.Experience[this.overlaycount]):(this.overlaycount--,-1==this.overlaycount&&(this.overlaycount=1),this.overlaytext=this.Experience[this.overlaycount])}},watch:{toportfolio:function(t){console.log(t)}}};var r=o(72),a=o.n(r),s=o(6),n={insert:"head",singleton:!1};a()(s.A,n);s.A.locals;const l=(0,o(486).A)(i,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-row",[o("v-col",{staticClass:"text-center ",attrs:{cols:"12"}},[o("v-icon",{staticClass:"blue--text mx-2 pb-5 textshadow",attrs:{"x-large":""}},[t._v("mdi-briefcase-variant")]),t._v(" "),o("span",{staticClass:"font-weight-bold Pacifico titlesize textshadow"},[t._v("Experience")]),t._v(" "),o("br"),t._v(" "),o("v-col",{attrs:{cols:"0",lg:"12"}})],1),t._v(" "),o("v-col",{staticClass:"text-center justify-center align-center d-flex gap-0",staticStyle:{margin:"auto"},attrs:{cols:t.$vuetify.breakpoint.width>911?5:12}},[o("v-timeline",{attrs:{dense:""}},t._l(t.Experience,(function(e,i){return o("v-timeline-item",{key:i,scopedSlots:t._u([{key:"icon",fn:function(){return[o("v-avatar",[o("img",{attrs:{src:"images/"+e.logo}})])]},proxy:!0}],null,!0)},[t._v(" "),o("v-card",{attrs:{color:t.overlaytext.year==e.year?"#142432":""}},[o("v-card-title",{staticClass:"font-weight-bold blue--text"},[t._v("\n                                "+t._s(e.year)+"\n                            ")]),t._v(" "),o("v-card-text",{class:t.overlaytext.year==e.year?" white--text":""},[o("span",{staticClass:"font-weight-bold",staticStyle:{"font-size":"120%"}},[t._v("\n                                    "+t._s(e.company))]),t._v(" "),o("br"),t._v("\n                                "+t._s(e.address)+"\n                            ")]),t._v(" "),o("v-card-actions",[o("v-spacer"),t._v(" "),o("v-btn",{class:t.overlaytext.year!=e.year?"blue white--text":"grey",staticStyle:{"font-size":"10px"},attrs:{"x-small":""},on:{click:function(o){return t.mHoverSelect(e,i)}}},[o("v-icon",{directives:[{name:"show",rawName:"v-show",value:t.overlaytext.year!=e.year,expression:"overlaytext.year != item.year"}]},[t._v("mdi-dots-horizontal")]),t._v(" "),o("v-avatar",{directives:[{name:"show",rawName:"v-show",value:t.overlaytext.year==e.year,expression:"overlaytext.year == item.year"}]},[o("v-img",{attrs:{src:"images/fastforward.gif"}})],1)],1)],1)],1)],1)})),1)],1),t._v(" "),o("v-col",{attrs:{cols:t.$vuetify.breakpoint.width>911?7:12}},[!t.overlaydialog||t.$vuetify.breakpoint.width<912?o("v-scroll-x-reverse-transition",[o("v-card",{staticClass:"seethrough mt-5"},[o("v-card-title",{staticClass:"titlecolor white--text font-weight-bold"},[o("v-icon",{staticClass:"blue--text mx-2 Pacifico",attrs:{"x-large":""}},[t._v("mdi-cogs")]),t._v(" "),o("h2",{staticClass:"Playfair"},[t._v("SKILLS")])],1),t._v(" "),o("v-card-text",[o("v-list",{staticClass:"seethrough"},t._l(t.technicalskills,(function(e){return o("v-list-group",{key:e.title,attrs:{"no-action":"","prepend-icon":e.icon},on:{click:function(e){return t.SoundEffect("slide")}},scopedSlots:t._u([{key:"activator",fn:function(){return[o("v-list-item-content",[o("v-list-item-title",[t._v(t._s(e.title))])],1)]},proxy:!0}],null,!0)},[t._v(" "),o("v-row",{staticClass:"d-flex justify-center"},t._l(e.items,(function(e,i){return o("v-col",{key:i,staticClass:"text-center",attrs:{cols:"6",xl:"2",lg:"3",md:"4",sm:"6"}},[o("img",{attrs:{src:"images/skill/"+e+".webp",height:"70",width:"70"}}),t._v(" "),o("p",[t._v(t._s(e))])])})),1)],1)})),1)],1)],1)],1):o("v-scroll-x-reverse-transition",{attrs:{mode:"out-in"}},[o("v-img",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.width>911,expression:"$vuetify.breakpoint.width > 911"}],staticClass:"customradius my-5 mr-5",attrs:{src:"images/exp.webp",height:"600"}},[o("v-col",{staticClass:"text-right",attrs:{cols:"12"}},[o("v-icon",{staticClass:"text-right white--text closehover",staticStyle:{"z-index":"10"},attrs:{right:"","x-large":""},on:{click:t.CloseDialog}},[t._v("mdi-close")])],1),t._v(" "),o("v-overlay",{staticClass:"px-2",attrs:{"v-model":!0,absolute:"",color:"#14143C"}},[o("v-fade-transition",{attrs:{mode:"out-in"}},[o("div",{key:t.overlaytext.role},[o("span",{staticClass:"text-h5"},[o("b",[t._v("Position:")]),t._v(" "),o("i",{staticClass:"Playfair"},[t._v(t._s(t.overlaytext.role))])]),t._v(" "),o("br"),o("br"),t._v(" "),o("ul",t._l(t.overlaytext.info,(function(e,i){return o("li",{key:i,domProps:{innerHTML:t._s(e)}})})),0)])])],1)],1)],1)],1)],1),t._v(" "),o("v-dialog",{attrs:{fullscreen:""},model:{value:t.exptip,callback:function(e){t.exptip=e},expression:"exptip"}},[o("v-img",{staticClass:"customradius my-5 mr-5",attrs:{src:"images/exp.webp",height:"600"}},[o("v-col",{staticClass:"text-right",attrs:{cols:"12"}},[o("v-icon",{staticClass:"text-right white--text closehover",staticStyle:{"z-index":"10"},attrs:{right:"","x-large":""},on:{click:t.CloseDialog}},[t._v("mdi-close")])],1),t._v(" "),o("v-overlay",{staticClass:"px-2",attrs:{"v-model":!0,absolute:"",color:"#14143C"}},[o("v-fade-transition",{attrs:{mode:"out-in"}},[o("div",{key:t.overlaytext.role},[o("span",{staticClass:"text-h5"},[o("b",[t._v("Position:")]),t._v(" "),o("i",{staticClass:"Playfair"},[t._v(t._s(t.overlaytext.role))])]),t._v(" "),o("br"),o("br"),t._v(" "),o("ul",t._l(t.overlaytext.info,(function(e,i){return o("li",{key:i,domProps:{innerHTML:t._s(e)}})})),0)])])],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);
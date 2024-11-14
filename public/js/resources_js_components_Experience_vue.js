"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Experience_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Experience.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Experience.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    isMobile: {
      type: Boolean
    },
    SoundEffect: {
      type: Function
    },
    screensize: {
      type: Object
    }
  },
  data: function data() {
    return {
      overlaydialog: false,
      overlaycount: 0,
      overlaytext: '',
      exptip: false,
      Experience: [{
        company: 'H.R.D. SINGAPORE PTE LTD',
        logo: 'HRD.png',
        address: 'Block 3, Cavite Economic Zone III, Gen. Trias, Cavite',
        year: 'Nov 6, 2023 - PRESENT',
        startdate: 'Nov 6, 2023',
        role: 'Programmer / IT Support',
        color: 'purple',
        info: ["Diagnose and troubleshoots company's website/systems.", "Developed a system/function that enhanced the production's work efficiency.", "Contributed a Kaizen named \"Access Manager\" to systemize user's access permission to \"Barchart Maker\" and \"Shukka System\".", 'Developed a website system named "Balcony Handrail Management System" for Paperless and Real-Time Process Monitoring.', 'Developed a website system named "Nail Pitch System" to track the HTI i-Cube production data.']
      }, {
        company: 'INTERN - CVSU-CCAT - ElStudio',
        logo: 'CVSU.png',
        address: "EM's Barrio, Tejeros Convention, Gen. Trias, Cavite",
        year: 'March 2 - May 28, 2023',
        startdate: 'March 2, 2023',
        role: 'Web Developer',
        color: 'green',
        info: ['Applied the basic front end languages for website development (HTML, CSS, Javascript and PHP).', 'Developed the ElStudio I.D. System that creates and scan QR codes for Biometric purposes.']
      }],
      technicalskills: [{
        title: 'Languages',
        icon: 'mdi-xml',
        items: ['HTML', 'CSS', 'Javascript', 'PHP', 'Java', 'C++']
      }, {
        title: 'Frameworks',
        icon: 'mdi-electron-framework',
        items: ['Laravel', 'Vue', 'React', 'Wordpress']
      }, {
        title: 'Databases',
        icon: 'mdi-database',
        items: ['MsSQL', 'MySQL', 'MongoDB']
      }, {
        title: 'Web Hosting',
        icon: 'mdi-server',
        items: ['Git', 'Bluehost', 'cPanel', 'InfinityFree']
      }, {
        title: 'Soft Skills',
        icon: 'mdi-puzzle',
        items: ['Adaptability', 'Communication', 'Creativity', 'Time Management', 'Problem Solving']
      }, {
        title: 'Others',
        icon: 'mdi-robot-confused',
        items: ['Photoshop', 'SAI', 'PowerDirector', 'Fire Fighter']
      }]
    };
  },
  methods: {
    CloseDialog: function CloseDialog() {
      if (this.isMobile) this.exptip = false;
      this.overlaydialog = false;
      this.overlaytext = '';
      this.SoundEffect('close');
    },
    mHoverSelect: function mHoverSelect(item, count) {
      if (this.isMobile && this.screensize.width < 911) this.exptip = true;
      this.SoundEffect('slide');
      this.overlaycount = count;
      this.overlaytext = item;
      this.overlaydialog = true;
    },
    mSlideCarousel: function mSlideCarousel(item) {
      this.SoundEffect('slide');
      if (item == 2) {
        this.overlaycount++;
        if (this.overlaycount == 2) this.overlaycount = 0;
        this.overlaytext = this.Experience[this.overlaycount];
      } else {
        this.overlaycount--;
        if (this.overlaycount == -1) this.overlaycount = 1;
        this.overlaytext = this.Experience[this.overlaycount];
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Experience.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Experience.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.custom-outline {\r\n    border-color: #ff4081 !important;\n}\n.timeline {\r\n    margin-top: 20px;\r\n    position: relative;\n}\n.timeline:before {\r\n    position: absolute;\r\n    content: '';\r\n    width: 4px;\r\n    height: calc(100% + 50px);\r\n    background: rgb(138, 145, 150);\r\n    background: linear-gradient(to right, rgba(138, 145, 150, 1) 0%, rgba(122, 130, 136, 1) 60%, rgba(98, 105, 109, 1) 100%);\r\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#8a9196', endColorstr='#62696d', GradientType=1);\r\n    left: 14px;\r\n    top: 5px;\r\n    border-radius: 4px;\n}\n.timeline-month {\r\n    position: relative;\r\n    padding: 4px 15px 4px 35px;\r\n    background-color: #444950;\r\n    display: inline-block;\r\n    width: auto;\r\n    border-radius: 40px;\r\n    border: 1px solid #17191B;\r\n    border-right-color: black;\r\n    margin-bottom: 30px;\n}\n.timeline-month span {\r\n    position: absolute;\r\n    top: -1px;\r\n    left: calc(100% - 10px);\r\n    z-index: -1;\r\n    white-space: nowrap;\r\n    display: inline-block;\r\n    background-color: #111;\r\n    padding: 4px 10px 4px 20px;\r\n    border-top-right-radius: 40px;\r\n    border-bottom-right-radius: 40px;\r\n    border: 1px solid black;\r\n    box-sizing: border-box;\n}\n.timeline-month:before {\r\n    position: absolute;\r\n    content: '';\r\n    width: 20px;\r\n    height: 20px;\r\n    background: rgb(138, 145, 150);\r\n    background: linear-gradient(to bottom, rgba(138, 145, 150, 1) 0%, rgba(122, 130, 136, 1) 60%, rgba(112, 120, 125, 1) 100%);\r\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#8a9196', endColorstr='#70787d', GradientType=0);\r\n    border-radius: 100%;\r\n    border: 1px solid #17191B;\r\n    left: 5px;\n}\n.timeline-section {\r\n    padding-left: 35px;\r\n    display: block;\r\n    position: relative;\r\n    margin-bottom: 30px;\n}\n.timeline-date {\r\n    margin-bottom: 15px;\r\n    padding: 2px 15px;\r\n    background: linear-gradient(#74cae3, #5bc0de 60%, #4ab9db);\r\n    position: relative;\r\n    display: inline-block;\r\n    border-radius: 20px;\r\n    border: 1px solid #17191B;\r\n    color: #fff;\r\n    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);\n}\n.timeline-section:before {\r\n    content: '';\r\n    position: absolute;\r\n    width: 30px;\r\n    height: 1px;\r\n    background-color: #444950;\r\n    top: 12px;\r\n    left: 20px;\n}\n.timeline-section:after {\r\n    content: '';\r\n    position: absolute;\r\n    width: 10px;\r\n    height: 10px;\r\n    background: linear-gradient(to bottom, rgba(138, 145, 150, 1) 0%, rgba(122, 130, 136, 1) 60%, rgba(112, 120, 125, 1) 100%);\r\n    top: 7px;\r\n    left: 11px;\r\n    border: 1px solid #17191B;\r\n    border-radius: 100%;\n}\n.timeline-section .col-sm-4 {\r\n    margin-bottom: 15px;\n}\n.timeline-box {\r\n    position: relative;\r\n\r\n    background-color: #444950;\r\n    border-radius: 15px;\r\n    border-top-left-radius: 0px;\r\n    border-bottom-right-radius: 0px;\r\n    border: 1px solid #17191B;\r\n    transition: all 0.3s ease;\r\n    overflow: hidden;\n}\n.box-icon {\r\n    position: absolute;\r\n    right: 5px;\r\n    top: 0px;\n}\n.box-title {\r\n    padding: 5px 15px;\r\n    border-bottom: 1px solid #17191B;\n}\n.box-title i {\r\n    margin-right: 5px;\n}\n.box-content {\r\n    padding: 5px 15px;\r\n    background-color: #17191B;\n}\n.box-content strong {\r\n    color: #666;\r\n    font-style: italic;\r\n    margin-right: 5px;\n}\n.box-item {\r\n    margin-bottom: 5px;\n}\n.box-footer {\r\n    padding: 5px 15px;\r\n    border-top: 1px solid #17191B;\r\n    background-color: #444950;\r\n    text-align: right;\r\n    font-style: italic;\n}\n.v-input--switch:not(.v-input--switch--flat):not(.v-input--switch--inset) .v-input--switch__thumb {\r\n    color: purple\n}\n.theme--light.v-input--switch .v-input--switch__track {\r\n    color: purple\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Experience.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Experience.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Experience_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Experience.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Experience.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Experience_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Experience_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/Experience.vue":
/*!************************************************!*\
  !*** ./resources/js/components/Experience.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Experience_vue_vue_type_template_id_e09d7dd6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Experience.vue?vue&type=template&id=e09d7dd6& */ "./resources/js/components/Experience.vue?vue&type=template&id=e09d7dd6&");
/* harmony import */ var _Experience_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Experience.vue?vue&type=script&lang=js& */ "./resources/js/components/Experience.vue?vue&type=script&lang=js&");
/* harmony import */ var _Experience_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Experience.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/Experience.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Experience_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Experience_vue_vue_type_template_id_e09d7dd6___WEBPACK_IMPORTED_MODULE_0__.render,
  _Experience_vue_vue_type_template_id_e09d7dd6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Experience.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Experience.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Experience.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Experience_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Experience.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Experience.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Experience_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Experience.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Experience.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Experience_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Experience.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Experience.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/Experience.vue?vue&type=template&id=e09d7dd6&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Experience.vue?vue&type=template&id=e09d7dd6& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Experience_vue_vue_type_template_id_e09d7dd6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Experience_vue_vue_type_template_id_e09d7dd6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Experience_vue_vue_type_template_id_e09d7dd6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Experience.vue?vue&type=template&id=e09d7dd6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Experience.vue?vue&type=template&id=e09d7dd6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Experience.vue?vue&type=template&id=e09d7dd6&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Experience.vue?vue&type=template&id=e09d7dd6& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { staticClass: "text-center ", attrs: { cols: "12" } },
            [
              _c(
                "v-icon",
                {
                  staticClass: "blue--text mx-2 pb-5 textshadow",
                  attrs: { "x-large": "" },
                },
                [_vm._v("mdi-briefcase-variant")]
              ),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass: "font-weight-bold Pacifico titlesize textshadow",
                },
                [_vm._v("Experience")]
              ),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("v-col", { attrs: { cols: "0", lg: "12" } }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            {
              staticClass:
                "text-center justify-center align-center d-flex gap-0",
              staticStyle: { margin: "auto" },
              attrs: { cols: _vm.screensize.width > 911 ? 5 : 12 },
            },
            [
              _c(
                "v-timeline",
                { attrs: { dense: "" } },
                _vm._l(_vm.Experience, function (item, i) {
                  return _c(
                    "v-timeline-item",
                    {
                      key: i,
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "icon",
                            fn: function () {
                              return [
                                _c("v-avatar", [
                                  _c("img", {
                                    attrs: { src: "images/" + item.logo },
                                  }),
                                ]),
                              ]
                            },
                            proxy: true,
                          },
                        ],
                        null,
                        true
                      ),
                    },
                    [
                      _vm._v(" "),
                      _c(
                        "v-card",
                        {
                          attrs: {
                            color:
                              _vm.overlaytext.year == item.year
                                ? "#142432"
                                : "",
                          },
                        },
                        [
                          _c(
                            "v-card-title",
                            { staticClass: "font-weight-bold blue--text" },
                            [
                              _vm._v(
                                "\r\n                                " +
                                  _vm._s(item.year) +
                                  "\r\n                            "
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-card-text",
                            {
                              class:
                                _vm.overlaytext.year == item.year
                                  ? " white--text"
                                  : "",
                            },
                            [
                              _c(
                                "span",
                                {
                                  staticClass: "font-weight-bold",
                                  staticStyle: { "font-size": "120%" },
                                },
                                [
                                  _vm._v(
                                    "\r\n                                    " +
                                      _vm._s(item.company)
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(
                                "\r\n                                " +
                                  _vm._s(item.address) +
                                  "\r\n                            "
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-card-actions",
                            [
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  class:
                                    _vm.overlaytext.year != item.year
                                      ? "blue white--text"
                                      : "grey",
                                  staticStyle: { "font-size": "10px" },
                                  attrs: { "x-small": "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.mHoverSelect(item, i)
                                    },
                                  },
                                },
                                [
                                  _c(
                                    "v-icon",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value:
                                            _vm.overlaytext.year != item.year,
                                          expression:
                                            "overlaytext.year != item.year",
                                        },
                                      ],
                                    },
                                    [_vm._v("mdi-dots-horizontal")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-avatar",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value:
                                            _vm.overlaytext.year == item.year,
                                          expression:
                                            "overlaytext.year == item.year",
                                        },
                                      ],
                                    },
                                    [
                                      _c("v-img", {
                                        attrs: {
                                          src: "images/fastforward.gif",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  )
                }),
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: _vm.screensize.width > 911 ? 7 : 12 } },
            [
              !_vm.overlaydialog || _vm.screensize.width < 912
                ? _c(
                    "v-scroll-x-reverse-transition",
                    [
                      _c(
                        "v-card",
                        { staticClass: "seethrough mt-5" },
                        [
                          _c(
                            "v-card-title",
                            {
                              staticClass:
                                "titlecolor white--text font-weight-bold",
                            },
                            [
                              _c(
                                "v-icon",
                                {
                                  staticClass: "blue--text mx-2 Pacifico",
                                  attrs: { "x-large": "" },
                                },
                                [_vm._v("mdi-cogs")]
                              ),
                              _vm._v(" "),
                              _c("h2", { staticClass: "Playfair" }, [
                                _vm._v("SKILLS"),
                              ]),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-card-text",
                            [
                              _c(
                                "v-list",
                                { staticClass: "seethrough" },
                                _vm._l(_vm.technicalskills, function (item) {
                                  return _c(
                                    "v-list-group",
                                    {
                                      key: item.title,
                                      attrs: {
                                        "no-action": "",
                                        "prepend-icon": item.icon,
                                      },
                                      on: {
                                        click: function ($event) {
                                          return _vm.SoundEffect("slide")
                                        },
                                      },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "activator",
                                            fn: function () {
                                              return [
                                                _c(
                                                  "v-list-item-content",
                                                  [
                                                    _c("v-list-item-title", [
                                                      _vm._v(
                                                        _vm._s(item.title)
                                                      ),
                                                    ]),
                                                  ],
                                                  1
                                                ),
                                              ]
                                            },
                                            proxy: true,
                                          },
                                        ],
                                        null,
                                        true
                                      ),
                                    },
                                    [
                                      _vm._v(" "),
                                      _c(
                                        "v-row",
                                        {
                                          staticClass: "d-flex justify-center",
                                        },
                                        _vm._l(
                                          item.items,
                                          function (subitem, i) {
                                            return _c(
                                              "v-col",
                                              {
                                                key: i,
                                                staticClass: "text-center",
                                                attrs: {
                                                  cols: "6",
                                                  xl: "2",
                                                  lg: "3",
                                                  md: "4",
                                                  sm: "6",
                                                },
                                              },
                                              [
                                                _c("img", {
                                                  attrs: {
                                                    src:
                                                      "images/skill/" +
                                                      subitem +
                                                      ".png",
                                                    height: "70",
                                                    width: "70",
                                                  },
                                                }),
                                                _vm._v(" "),
                                                _c("p", [
                                                  _vm._v(_vm._s(subitem)),
                                                ]),
                                              ]
                                            )
                                          }
                                        ),
                                        1
                                      ),
                                    ],
                                    1
                                  )
                                }),
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  )
                : _c(
                    "v-scroll-x-reverse-transition",
                    { attrs: { mode: "out-in" } },
                    [
                      _c(
                        "v-img",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.screensize.width > 911,
                              expression: "screensize.width > 911",
                            },
                          ],
                          staticClass: "customradius my-5 mr-5",
                          attrs: { src: "images/parallax2.jpg", height: "600" },
                        },
                        [
                          _c(
                            "v-col",
                            {
                              staticClass: "text-right",
                              attrs: { cols: "12" },
                            },
                            [
                              _c(
                                "v-icon",
                                {
                                  staticClass:
                                    "text-right white--text closehover",
                                  staticStyle: { "z-index": "10" },
                                  attrs: { right: "", "x-large": "" },
                                  on: { click: _vm.CloseDialog },
                                },
                                [_vm._v("mdi-close")]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-overlay",
                            {
                              staticClass: "px-2",
                              attrs: {
                                "v-model": true,
                                absolute: "",
                                color: "#14143C",
                              },
                            },
                            [
                              _c(
                                "v-fade-transition",
                                { attrs: { mode: "out-in" } },
                                [
                                  _c("div", { key: _vm.overlaytext.role }, [
                                    _c("span", { staticClass: "text-h5" }, [
                                      _vm._v(
                                        "Position: " +
                                          _vm._s(_vm.overlaytext.role)
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("br"),
                                    _c("br"),
                                    _vm._v(" "),
                                    _c(
                                      "ul",
                                      _vm._l(
                                        _vm.overlaytext.info,
                                        function (info, i) {
                                          return _c("li", { key: i }, [
                                            _vm._v(_vm._s(info)),
                                          ])
                                        }
                                      ),
                                      0
                                    ),
                                  ]),
                                ]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { fullscreen: "" },
          model: {
            value: _vm.exptip,
            callback: function ($$v) {
              _vm.exptip = $$v
            },
            expression: "exptip",
          },
        },
        [
          _c(
            "v-img",
            {
              staticClass: "customradius my-5 mr-5",
              attrs: { src: "images/parallax2.jpg", height: "600" },
            },
            [
              _c(
                "v-col",
                { staticClass: "text-right", attrs: { cols: "12" } },
                [
                  _c(
                    "v-icon",
                    {
                      staticClass: "text-right white--text closehover",
                      staticStyle: { "z-index": "10" },
                      attrs: { right: "", "x-large": "" },
                      on: { click: _vm.CloseDialog },
                    },
                    [_vm._v("mdi-close")]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-overlay",
                {
                  staticClass: "px-2",
                  attrs: { "v-model": true, absolute: "", color: "#14143C" },
                },
                [
                  _c("v-fade-transition", { attrs: { mode: "out-in" } }, [
                    _c("div", { key: _vm.overlaytext.role }, [
                      _c("span", { staticClass: "text-h5" }, [
                        _vm._v("Position: " + _vm._s(_vm.overlaytext.role)),
                      ]),
                      _vm._v(" "),
                      _c("br"),
                      _c("br"),
                      _vm._v(" "),
                      _c(
                        "ul",
                        _vm._l(_vm.overlaytext.info, function (info, i) {
                          return _c("li", { key: i }, [_vm._v(_vm._s(info))])
                        }),
                        0
                      ),
                    ]),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
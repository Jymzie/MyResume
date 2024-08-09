"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Overview_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Overview.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Overview.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      grid1: [{
        id: 1,
        name: "element1"
      }, {
        id: 2,
        name: "element2"
      }, {
        id: 3,
        name: "element3"
      }, {
        id: 4,
        name: "element4"
      }, {
        id: 5,
        name: "element5"
      }],
      grid2: [{
        id: 1,
        name: "element1"
      }, {
        id: 2,
        name: "element2"
      }, {
        id: 3,
        name: "element3"
      }, {
        id: 4,
        name: "element4"
      }, {
        id: 5,
        name: "element5"
      }],
      lastScrollY: 0,
      gridAnimation: ""
    };
  },
  methods: {
    scrollHandler: function scrollHandler() {
      var diff = window.scrollY - this.lastScrollY;
      //scroll up
      if (diff < 0) {
        this.gridAnimation = "grid-animation-reverse-running";
      } else {
        this.gridAnimation = "";
      }
      this.lastScrollY = window.scrollY;
    }
  },
  mounted: function mounted() {
    window.addEventListener("scroll", this.scrollHandler);
  },
  unmounted: function unmounted() {
    window.removeEventListener("scroll", this.scrollHandler);
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Overview.vue?vue&type=style&index=0&id=7f4ac338&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Overview.vue?vue&type=style&index=0&id=7f4ac338&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.horizontal-grid[data-v-7f4ac338] {\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n  height: 500px;\n}\n.horizontal-grid-1[data-v-7f4ac338],\r\n.horizontal-grid-2[data-v-7f4ac338] {\r\n  display: flex;\n}\n.horizontal-grid-1[data-v-7f4ac338] {\r\n  margin-left: 160px;\n}\n.elements[data-v-7f4ac338] {\r\n  border: 1px solid #e2e2e2;\r\n  border-radius: 16px;\r\n  padding: 16px;\r\n  margin: 32px 0 0 32px;\r\n  flex: 0 0 320px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\n}\n@keyframes scroll-data-v-7f4ac338 {\n0% {\r\n    transform: translate(0px);\n}\n100% {\r\n    transform: translate(-1760px);\n}\n}\n.grid-animation[data-v-7f4ac338] {\r\n  animation: scroll-data-v-7f4ac338 10s linear infinite;\n}\n@keyframes scroll-reverse-data-v-7f4ac338 {\n0% {\r\n    transform: translate(-1760px);\n}\n100% {\r\n    transform: translate(0px);\n}\n}\n.grid-animation-reverse[data-v-7f4ac338] {\r\n  animation: scroll-reverse-data-v-7f4ac338 5s linear infinite;\r\n  animation-play-state: paused;\n}\n.grid-animation-reverse-running[data-v-7f4ac338] {\r\n  animation-play-state: running;\n}\n.grid-animation[data-v-7f4ac338]:hover,\r\n.grid-animation-reverse[data-v-7f4ac338]:hover {\r\n  animation-play-state: paused;\n}\n.elements[data-v-7f4ac338]:hover {\r\n  cursor: pointer;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2) !important;\r\n  transform: scale(0.97);\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Overview.vue?vue&type=style&index=0&id=7f4ac338&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Overview.vue?vue&type=style&index=0&id=7f4ac338&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Overview_vue_vue_type_style_index_0_id_7f4ac338_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Overview.vue?vue&type=style&index=0&id=7f4ac338&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Overview.vue?vue&type=style&index=0&id=7f4ac338&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Overview_vue_vue_type_style_index_0_id_7f4ac338_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Overview_vue_vue_type_style_index_0_id_7f4ac338_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/Overview.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/Overview.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Overview_vue_vue_type_template_id_7f4ac338_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Overview.vue?vue&type=template&id=7f4ac338&scoped=true& */ "./resources/js/components/Overview.vue?vue&type=template&id=7f4ac338&scoped=true&");
/* harmony import */ var _Overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Overview.vue?vue&type=script&lang=js& */ "./resources/js/components/Overview.vue?vue&type=script&lang=js&");
/* harmony import */ var _Overview_vue_vue_type_style_index_0_id_7f4ac338_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Overview.vue?vue&type=style&index=0&id=7f4ac338&scoped=true&lang=css& */ "./resources/js/components/Overview.vue?vue&type=style&index=0&id=7f4ac338&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Overview_vue_vue_type_template_id_7f4ac338_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Overview_vue_vue_type_template_id_7f4ac338_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7f4ac338",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Overview.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Overview.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Overview.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Overview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Overview.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Overview.vue?vue&type=style&index=0&id=7f4ac338&scoped=true&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/Overview.vue?vue&type=style&index=0&id=7f4ac338&scoped=true&lang=css& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Overview_vue_vue_type_style_index_0_id_7f4ac338_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Overview.vue?vue&type=style&index=0&id=7f4ac338&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Overview.vue?vue&type=style&index=0&id=7f4ac338&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/Overview.vue?vue&type=template&id=7f4ac338&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Overview.vue?vue&type=template&id=7f4ac338&scoped=true& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Overview_vue_vue_type_template_id_7f4ac338_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Overview_vue_vue_type_template_id_7f4ac338_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Overview_vue_vue_type_template_id_7f4ac338_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Overview.vue?vue&type=template&id=7f4ac338&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Overview.vue?vue&type=template&id=7f4ac338&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Overview.vue?vue&type=template&id=7f4ac338&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Overview.vue?vue&type=template&id=7f4ac338&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "horizontal-grid" }, [
    _c(
      "div",
      { staticClass: "grid-animation-reverse", class: _vm.gridAnimation },
      [
        _c("div", { staticClass: "grid-animation" }, [
          _c(
            "div",
            { staticClass: "horizontal-grid-1" },
            [
              _vm._l(_vm.grid1, function (element) {
                return _c("div", { key: element.id, staticClass: "elements" }, [
                  _vm._v("\n          " + _vm._s(element.name) + "\n        "),
                ])
              }),
              _vm._v(" "),
              _vm._l(_vm.grid1, function (element) {
                return _c("div", { key: element.id, staticClass: "elements" }, [
                  _vm._v("\n          " + _vm._s(element.name) + "\n        "),
                ])
              }),
              _vm._v(" "),
              _vm._l(_vm.grid1, function (element) {
                return _c("div", { key: element.id, staticClass: "elements" }, [
                  _vm._v("\n          " + _vm._s(element.name) + "\n        "),
                ])
              }),
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "horizontal-grid-2" },
            [
              _vm._l(_vm.grid2, function (element) {
                return _c("div", { key: element.id, staticClass: "elements" }, [
                  _vm._v("\n          " + _vm._s(element.name) + "\n        "),
                ])
              }),
              _vm._v(" "),
              _vm._l(_vm.grid2, function (element) {
                return _c("div", { key: element.id, staticClass: "elements" }, [
                  _vm._v("\n          " + _vm._s(element.name) + "\n        "),
                ])
              }),
              _vm._v(" "),
              _vm._l(_vm.grid2, function (element) {
                return _c("div", { key: element.id, staticClass: "elements" }, [
                  _vm._v("\n          " + _vm._s(element.name) + "\n        "),
                ])
              }),
            ],
            2
          ),
        ]),
      ]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
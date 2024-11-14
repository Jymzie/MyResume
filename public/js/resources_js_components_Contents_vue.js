"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Contents_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Contents.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Contents.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Education_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Education.vue */ "./resources/js/components/Education.vue");
/* harmony import */ var _Experience_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Experience.vue */ "./resources/js/components/Experience.vue");
/* harmony import */ var _Portfolio_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Portfolio.vue */ "./resources/js/components/Portfolio.vue");
/* harmony import */ var _Skills_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Skills.vue */ "./resources/js/components/Skills.vue");
/* harmony import */ var _Summary_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Summary.vue */ "./resources/js/components/Summary.vue");
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
//
//
//
//
//






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    SummaryVue: _Summary_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    EducationVue: _Education_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    ExperienceVue: _Experience_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    PortfolioVue: _Portfolio_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    SkillsVue: _Skills_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: {
    //from App.vue
    SoundEffect: {
      type: Function
    },
    notificationSystem: {
      type: Object
    },
    detail: {
      type: Array
    },
    screensize: {
      type: Object
    },
    isMobile: {
      type: Boolean
    }
  },
  data: function data() {
    return {
      isActive: {
        summary: true,
        education: false,
        experience: false,
        portfolio: false
      },
      hasWatched: false,
      intro: true,
      introtime: false,
      summary: "A Technology Enthusiast with 1+ year of experience in web development and system support. Proficient in creating responsive user interfaces, writing and testing of codes, troubleshootings, database structure planning, and implementing new features based on client's request. Proven track record of improving system performance and enhancing user satisfaction.",
      // icons: [{
      //         icon: 'mdi-facebook',
      //         link: 'https://www.google.com/'
      //     },
      //     {
      //         icon: 'mdi-linkedin',
      //         link: 'https://www.google.com/'
      //     },
      //     {
      //         icon: 'mdi-github',
      //         link: 'https://www.google.com/'
      //     },
      // ],
      icons: [{
        icon: 'mdi-facebook',
        link: 'https://www.facebook.com/jimwell.cruz.9'
      }, {
        icon: 'mdi-linkedin',
        link: 'https://www.linkedin.com/in/jimwell-punzalan-80513830b/'
      }, {
        icon: 'mdi-github',
        link: 'https://github.com/Jymzie'
      }],
      reference: [{
        name: 'Aries M. Gelera',
        role: 'Director, Research and Extension',
        contact: '+63-935-163-2872',
        gmail: 'aries.gelera@cvsu.edu.ph'
      }, {
        name: 'Karlo Jose E. Nabablit',
        role: 'Lecturer',
        contact: '+63-917-573-6767',
        gmail: 'karlojose.nabablit@cvsu.edu.ph'
      }]
    };
  },
  methods: {
    mOpenCover: function mOpenCover() {
      var _this = this;
      this.introtime = true;
      this.SoundEffect('select');
      setTimeout(function () {
        _this.intro = false;
        _this.$toast.show('Welcome!', 'Jymz:', _this.notificationSystem.options.ballon);
        // const link = document.createElement("a");
        // link.href = "http://10.169.142.112/Resume/"
        // link.click();
        // link.remove();
        setTimeout(function () {
          _this.SoundEffect('success');
        }, 300);
      }, 800);
    },
    onIntersect: function onIntersect(entries, observer, item) {
      this.isActive[entries[0].target.id] = item;
      this.$emit("currentanchor", entries);
      if (entries[0].target.id == 'education' && !this.hasWatched) this.hasWatched = true;
    }
  },
  watch: {
    isActive: {
      handler: function handler(newValue) {
        if (newValue.education == true && !this.hasWatched) {
          var entries = [{
            target: {
              id: 'education'
            },
            isIntersecting: true
          }];
          this.$emit("currentanchor", entries);
          this.hasWatched = true;
        }
      },
      deep: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Education.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Education.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
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
  created: function created() {
    this.overlaytext = this.Education[0];
  },
  mounted: function mounted() {
    var _this = this;
    this.$watch('screensize', function (newValue, oldValue) {
      _this.overlaytext = _this.Education[0];
      _this.overlaycount = 0;
    }, {
      deep: true
    });
  },
  data: function data() {
    return {
      overlaycount: 0,
      overlaytext: '',
      gradpic: ['gradpic.JPG', 'gradpic2.JPG'],
      Education: [{
        school: 'CAVITE STATE UNIVERSITY - CCAT',
        logo: 'CVSU.png',
        address: "EM's Barrio, Tejeros Convention, Rosario, Cavite",
        year: '2018-2023',
        course: 'Bachelor of Science in Information Technology (BSIT)',
        award: 'CUM LAUDE',
        grade: '1.45/5.00'
      }, {
        school: 'SAINT AUGUSTINE - SENIOR HIGH',
        logo: 'SAS.png',
        address: 'Daang Amaya 3, Tanza, Cavite',
        year: '2016-2018',
        course: 'Senior High School - STEM Strand',
        award: ''
      }, {
        school: 'SAINT AUGUSTINE SCHOOL',
        logo: 'SAS.png',
        address: 'St. Cruz St., Poblacion 1, Tanza, Cavite',
        year: '2012-2016',
        course: 'Junior High School',
        award: 'BEST IN DEPORTMENT'
      }]
    };
  },
  methods: {
    mHoverSelect: function mHoverSelect(item, count) {
      if (this.overlaytext != item && this.$vuetify.breakpoint.name == 'lg') this.SoundEffect('slide');
      this.overlaycount = count;
      this.overlaytext = item;
    },
    mSlideCarousel: function mSlideCarousel(item) {
      this.SoundEffect('slide');
      if (item == 1) {
        this.overlaycount++;
        if (this.overlaycount == 3) this.overlaycount = 0;
        this.overlaytext = this.Education[this.overlaycount];
      } else {
        this.overlaycount--;
        if (this.overlaycount == -1) this.overlaycount = 2;
        this.overlaytext = this.Education[this.overlaycount];
      }
    }
  }
});

/***/ }),

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Portfolio.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Portfolio.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
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
      carousel: false,
      carouselitem: [],
      Portfolios: [{
        img: ['placeholder.png'],
        // ['NPSLogin.PNG', 'NPSmonitoring.png', 'NPSview.PNG', 'NPSdataflow.png'],
        title: 'Nail Pitching System',
        info: 'This system is made to keep track the proof that factory production comply the norms of nail pitching every panel made in HTI i-Cube.'
      }, {
        img: ['placeholder.png'],
        // ['BHMLogin.PNG', 'BHMDashboard.PNG', 'BHMChecking.png', 'BMProcess.png'],
        title: 'BH Product Management System',
        info: 'The system covers the management of balcony handrail products from receiving of data from HRD up to exporting of actual materials. It includes product allocation, process status, completeness and control of products quality and delivery.'
      }, {
        img: ['placeholder.png'],
        // ['AMTable.PNG', 'AMTable2.PNG', 'AMDialog.png', 'AMKaizen.png', 'AMBefore.png', 'AMAfter.png'],
        title: 'Access Manager',
        info: "Access Manager is a Kaizen System that covers the BarchartMaker and HTIShukka System's account creation and access control."
      }, {
        img: ['ElsHome.png', 'ElsScan.png', 'ElsQR.png'],
        title: 'ElStudio I.D. System',
        info: 'The system is built in with biometric function for monitoring of attendance and inventory'
      }, {
        img: ['PetAdopt.png', 'PetInfo.png', 'PetHome.png'],
        title: 'WCMS: Pet Adopt Website',
        info: 'Pet Adopt is a website made by the students of Cavite State University - CCAT Campus that can help some animals especially the homeless one in finding their own home through people who can access the website with a single click'
      }]
    };
  },
  methods: {
    mOpenCarousel: function mOpenCarousel(item, title) {
      this.SoundEffect('select');
      this.carouselitem.img = item;
      this.carouselitem.title = title;
      this.carousel = true;
      console.log(this.$vuetify.breakpoint.name);
    }
  },
  watch: {
    carousel: function carousel(val) {
      if (val == false) this.SoundEffect('close');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Skills.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Skills.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    isMobile: {
      type: Boolean
    },
    SoundEffect: {
      type: Function
    }
  },
  data: function data() {
    return {
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
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Summary.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Summary.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    summary: {
      type: String
    },
    isMobile: {
      type: Boolean
    },
    icons: {
      type: Array
    },
    SoundEffect: {
      type: Function
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Contents.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Contents.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.iconcolor {\r\n    color: linear-gradient(219deg, rgba(124, 143, 161, 1) 0%, rgba(79, 94, 110, 1) 18%, rgba(20, 36, 50, 1) 48%);\n}\n.boxcolor {\r\n    background: linear-gradient(103deg, rgba(20, 36, 50, 1) 10%, rgba(76, 94, 110, 1) 74%, rgba(124, 143, 161, 1) 94%);\n}\n.footcolor {\r\n    background: linear-gradient(180deg, rgba(124, 143, 161, 1) 0%, rgba(79, 94, 110, 1) 18%, rgba(20, 36, 50, 1) 48%);\n}\n.customradius {\r\n    border-radius: 20px;\n}\n.v-col:hover {\r\n    transition-timing-function: ease;\n}\n.fade-enter-active,\r\n.fade-leave-active {\r\n    transition: opacity 0.5s ease;\n}\n.fade-enter-from,\r\n.fade-leave-to {\r\n    opacity: 0;\n}\n.v-parallax_image {\r\n    filter: brightness(10%);\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Contents.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Contents.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Contents_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Contents.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Contents.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Contents_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Contents_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/js/components/Contents.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/Contents.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Contents_vue_vue_type_template_id_4ccf5385___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contents.vue?vue&type=template&id=4ccf5385& */ "./resources/js/components/Contents.vue?vue&type=template&id=4ccf5385&");
/* harmony import */ var _Contents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contents.vue?vue&type=script&lang=js& */ "./resources/js/components/Contents.vue?vue&type=script&lang=js&");
/* harmony import */ var _Contents_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Contents.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/Contents.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Contents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Contents_vue_vue_type_template_id_4ccf5385___WEBPACK_IMPORTED_MODULE_0__.render,
  _Contents_vue_vue_type_template_id_4ccf5385___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Contents.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Education.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/Education.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Education_vue_vue_type_template_id_f87c0466___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Education.vue?vue&type=template&id=f87c0466& */ "./resources/js/components/Education.vue?vue&type=template&id=f87c0466&");
/* harmony import */ var _Education_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Education.vue?vue&type=script&lang=js& */ "./resources/js/components/Education.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Education_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Education_vue_vue_type_template_id_f87c0466___WEBPACK_IMPORTED_MODULE_0__.render,
  _Education_vue_vue_type_template_id_f87c0466___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Education.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

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

/***/ "./resources/js/components/Portfolio.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/Portfolio.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Portfolio_vue_vue_type_template_id_04abcb6d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Portfolio.vue?vue&type=template&id=04abcb6d& */ "./resources/js/components/Portfolio.vue?vue&type=template&id=04abcb6d&");
/* harmony import */ var _Portfolio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Portfolio.vue?vue&type=script&lang=js& */ "./resources/js/components/Portfolio.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Portfolio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Portfolio_vue_vue_type_template_id_04abcb6d___WEBPACK_IMPORTED_MODULE_0__.render,
  _Portfolio_vue_vue_type_template_id_04abcb6d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Portfolio.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Skills.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Skills.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Skills_vue_vue_type_template_id_49478526___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Skills.vue?vue&type=template&id=49478526& */ "./resources/js/components/Skills.vue?vue&type=template&id=49478526&");
/* harmony import */ var _Skills_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Skills.vue?vue&type=script&lang=js& */ "./resources/js/components/Skills.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Skills_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Skills_vue_vue_type_template_id_49478526___WEBPACK_IMPORTED_MODULE_0__.render,
  _Skills_vue_vue_type_template_id_49478526___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Skills.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Summary.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Summary.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Summary_vue_vue_type_template_id_df38e3ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Summary.vue?vue&type=template&id=df38e3ea& */ "./resources/js/components/Summary.vue?vue&type=template&id=df38e3ea&");
/* harmony import */ var _Summary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Summary.vue?vue&type=script&lang=js& */ "./resources/js/components/Summary.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Summary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Summary_vue_vue_type_template_id_df38e3ea___WEBPACK_IMPORTED_MODULE_0__.render,
  _Summary_vue_vue_type_template_id_df38e3ea___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Summary.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Contents.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Contents.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Contents.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Contents.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Education.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/Education.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Education_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Education.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Education.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Education_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/components/Portfolio.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/Portfolio.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Portfolio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Portfolio.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Portfolio.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Portfolio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Skills.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Skills.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Skills_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Skills.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Skills.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Skills_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Summary.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Summary.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Summary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Summary.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Summary.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Summary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Contents.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Contents.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Contents_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Contents.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Contents.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/Experience.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Experience.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Experience_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Experience.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Experience.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/Contents.vue?vue&type=template&id=4ccf5385&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Contents.vue?vue&type=template&id=4ccf5385& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contents_vue_vue_type_template_id_4ccf5385___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contents_vue_vue_type_template_id_4ccf5385___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contents_vue_vue_type_template_id_4ccf5385___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Contents.vue?vue&type=template&id=4ccf5385& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Contents.vue?vue&type=template&id=4ccf5385&");


/***/ }),

/***/ "./resources/js/components/Education.vue?vue&type=template&id=f87c0466&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Education.vue?vue&type=template&id=f87c0466& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Education_vue_vue_type_template_id_f87c0466___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Education_vue_vue_type_template_id_f87c0466___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Education_vue_vue_type_template_id_f87c0466___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Education.vue?vue&type=template&id=f87c0466& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Education.vue?vue&type=template&id=f87c0466&");


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

/***/ "./resources/js/components/Portfolio.vue?vue&type=template&id=04abcb6d&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Portfolio.vue?vue&type=template&id=04abcb6d& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Portfolio_vue_vue_type_template_id_04abcb6d___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Portfolio_vue_vue_type_template_id_04abcb6d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Portfolio_vue_vue_type_template_id_04abcb6d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Portfolio.vue?vue&type=template&id=04abcb6d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Portfolio.vue?vue&type=template&id=04abcb6d&");


/***/ }),

/***/ "./resources/js/components/Skills.vue?vue&type=template&id=49478526&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Skills.vue?vue&type=template&id=49478526& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Skills_vue_vue_type_template_id_49478526___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Skills_vue_vue_type_template_id_49478526___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Skills_vue_vue_type_template_id_49478526___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Skills.vue?vue&type=template&id=49478526& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Skills.vue?vue&type=template&id=49478526&");


/***/ }),

/***/ "./resources/js/components/Summary.vue?vue&type=template&id=df38e3ea&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Summary.vue?vue&type=template&id=df38e3ea& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Summary_vue_vue_type_template_id_df38e3ea___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Summary_vue_vue_type_template_id_df38e3ea___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Summary_vue_vue_type_template_id_df38e3ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Summary.vue?vue&type=template&id=df38e3ea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Summary.vue?vue&type=template&id=df38e3ea&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Contents.vue?vue&type=template&id=4ccf5385&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Contents.vue?vue&type=template&id=4ccf5385& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    "v-card",
    { staticStyle: { "border-radius": "0px" }, attrs: { id: "summary" } },
    [
      _c(
        "v-parallax",
        {
          directives: [
            {
              name: "intersect",
              rawName: "v-intersect.quiet",
              value: _vm.onIntersect,
              expression: "onIntersect",
              modifiers: { quiet: true },
            },
          ],
          attrs: { id: "summary", src: "images/parallax6.jpg", height: "900" },
        },
        [
          _c(
            "v-img",
            {
              staticClass: " justify-center align-center",
              attrs: {
                src: "images/photpaper.png",
                contain: "",
                height: "100%",
              },
            },
            [
              _c(
                "v-lazy",
                {
                  attrs: {
                    options: {
                      threshold: 0.5,
                    },
                    "min-height": "200",
                    transition: "scale-transition",
                  },
                  model: {
                    value: _vm.isActive.summary,
                    callback: function ($$v) {
                      _vm.$set(_vm.isActive, "summary", $$v)
                    },
                    expression: "isActive.summary",
                  },
                },
                [
                  _c("SummaryVue", {
                    attrs: {
                      summary: _vm.summary,
                      icons: _vm.icons,
                      isMobile: _vm.isMobile,
                      SoundEffect: _vm.SoundEffect,
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
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "titlecolor" },
        [
          _c(
            "v-parallax",
            {
              directives: [
                {
                  name: "intersect",
                  rawName: "v-intersect.quiet",
                  value: _vm.onIntersect,
                  expression: "onIntersect",
                  modifiers: { quiet: true },
                },
              ],
              staticStyle: { padding: "100px 3vw 30px 3vw" },
              attrs: {
                id: "education",
                src: "images/parallax1.png",
                height: "1000",
              },
            },
            [
              _c(
                "v-lazy",
                {
                  attrs: {
                    options: {
                      threshold: 0.5,
                    },
                    transition: "scale-transition",
                  },
                  model: {
                    value: _vm.isActive.education,
                    callback: function ($$v) {
                      _vm.$set(_vm.isActive, "education", $$v)
                    },
                    expression: "isActive.education",
                  },
                },
                [
                  _c("EducationVue", {
                    attrs: {
                      isMobile: _vm.isMobile,
                      SoundEffect: _vm.SoundEffect,
                      screensize: _vm.screensize,
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
      _vm._v(" "),
      _c(
        "v-parallax",
        {
          directives: [
            {
              name: "intersect",
              rawName: "v-intersect.quiet",
              value: _vm.onIntersect,
              expression: "onIntersect",
              modifiers: { quiet: true },
            },
          ],
          attrs: {
            id: "experience",
            src: "images/parallax6.jpg",
            height:
              _vm.isMobile &&
              (_vm.screensize.height >= 667 ||
                (_vm.screensize.height >= 540 && _vm.screensize.width >= 720))
                ? 1600
                : 1100,
          },
        },
        [
          _c(
            "v-lazy",
            {
              attrs: {
                options: {
                  threshold: 0.5,
                },
                transition: "scale-transition",
              },
              model: {
                value: _vm.isActive.experience,
                callback: function ($$v) {
                  _vm.$set(_vm.isActive, "experience", $$v)
                },
                expression: "isActive.experience",
              },
            },
            [
              _c("ExperienceVue", {
                attrs: {
                  isMobile: _vm.isMobile,
                  SoundEffect: _vm.SoundEffect,
                  screensize: _vm.screensize,
                },
              }),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "titlecolor" },
        [
          _c(
            "v-parallax",
            {
              directives: [
                {
                  name: "intersect",
                  rawName: "v-intersect.quiet",
                  value: _vm.onIntersect,
                  expression: "onIntersect",
                  modifiers: { quiet: true },
                },
              ],
              attrs: {
                id: "portfolio",
                src: "images/collage.png",
                height:
                  _vm.isMobile && _vm.screensize.height >= 667 ? 1800 : 1200,
              },
            },
            [
              _c(
                "v-lazy",
                {
                  attrs: {
                    options: {
                      threshold: 0.5,
                    },
                    "min-height": "200",
                    transition: "scale-transition",
                  },
                  model: {
                    value: _vm.isActive.portfolio,
                    callback: function ($$v) {
                      _vm.$set(_vm.isActive, "portfolio", $$v)
                    },
                    expression: "isActive.portfolio",
                  },
                },
                [
                  _c("PortfolioVue", {
                    attrs: {
                      isMobile: _vm.isMobile,
                      SoundEffect: _vm.SoundEffect,
                      screensize: _vm.screensize,
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
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "content-class": "elevation-0" },
          model: {
            value: _vm.intro,
            callback: function ($$v) {
              _vm.intro = $$v
            },
            expression: "intro",
          },
        },
        [
          _c(
            "div",
            { staticClass: "d-flex text-center" },
            [
              _c("v-col", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value:
                      _vm.$vuetify.breakpoint.name == "xl" ||
                      _vm.$vuetify.breakpoint.name == "lg" ||
                      _vm.$vuetify.breakpoint.name == "md",
                    expression:
                      "$vuetify.breakpoint.name == 'xl' || $vuetify.breakpoint.name == 'lg' || $vuetify.breakpoint.name == 'md'",
                  },
                ],
                attrs: { cols: "0", lg: "3", md: "2", sm: "0" },
              }),
              _vm._v(" "),
              _c(
                "v-col",
                {
                  staticClass: "white--text",
                  attrs: { cols: "12", lg: "6", md: "8", sm: "12" },
                },
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        {
                          class:
                            _vm.$vuetify.breakpoint.name == "xs"
                              ? "text-center"
                              : "text-right",
                          attrs: { cols: "12", lg: "4", sm: "4" },
                        },
                        [
                          _c("img", {
                            staticClass: "rounded-circle",
                            attrs: { src: "images/profile.jpg", width: "140" },
                          }),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          class:
                            _vm.$vuetify.breakpoint.name == "xs"
                              ? "text-center"
                              : "text-left",
                          attrs: { cols: "12", lg: "8", sm: "8" },
                        },
                        [
                          _c("h1", { staticClass: "Playfair" }, [
                            _vm._v("Hey there!"),
                          ]),
                          _vm._v(" "),
                          _c("h1", { staticClass: "Playfair" }, [
                            _vm._v("I'm "),
                            _c("b", { staticClass: "Pacifico" }, [
                              _vm._v("Jimwell C. Punzalan"),
                            ]),
                            _vm._v(","),
                          ]),
                          _vm._v(" "),
                          _c("h1", { staticClass: "Playfair" }, [
                            _vm._v("Devoted "),
                            _c("b", { staticClass: "blue--text Pacifico" }, [
                              _vm._v("IT Specialist"),
                            ]),
                          ]),
                        ]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12", lg: "7", sm: "7" } },
                        _vm._l(_vm.icons, function (icon) {
                          return _c(
                            "v-btn",
                            {
                              key: icon.icon,
                              staticClass: "mx-4",
                              attrs: {
                                dark: "",
                                icon: "",
                                href: icon.link,
                                target: "_blank",
                              },
                              on: {
                                click: function ($event) {
                                  return _vm.SoundEffect("select")
                                },
                              },
                            },
                            [
                              _c(
                                "v-icon",
                                {
                                  staticClass: "blue--text text-left iconhover",
                                  attrs: { large: "", size: "24px" },
                                  on: {
                                    mouseenter: function ($event) {
                                      return _vm.SoundEffect("slide")
                                    },
                                  },
                                },
                                [
                                  _vm._v(
                                    "\r\n                                " +
                                      _vm._s(icon.icon) +
                                      "\r\n                            "
                                  ),
                                ]
                              ),
                            ],
                            1
                          )
                        }),
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          class:
                            _vm.$vuetify.breakpoint.name == "xs"
                              ? "text-center"
                              : "text-left",
                          attrs: { cols: "12", lg: "5", sm: "5" },
                        },
                        [
                          _c(
                            "v-btn",
                            {
                              staticClass: "rounded-pill blue white--text",
                              attrs: { disabled: _vm.introtime },
                              on: { click: _vm.mOpenCover },
                            },
                            [_vm._v("Take Tour")]
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
              _c("v-col", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.$vuetify.breakpoint.name != "sm",
                    expression: "$vuetify.breakpoint.name != 'sm'",
                  },
                ],
                attrs: { cols: "0", lg: "3", md: "2", sm: "0" },
              }),
            ],
            1
          ),
        ]
      ),
      _vm._v(" "),
      _c("v-footer", { staticClass: "footcolor", attrs: { dark: "" } }, [
        _c(
          "div",
          { staticClass: "mb-2" },
          [
            _c(
              "v-row",
              { staticClass: "mt-2 text-center grey--text" },
              [
                _c(
                  "v-col",
                  {
                    staticClass: "text-left",
                    attrs: { cols: "12", md: "4", sm: "12" },
                  },
                  [
                    _c("h2", { staticClass: "white--text" }, [_vm._v("ABOUT")]),
                    _vm._v(
                      "\r\n\r\n                    " +
                        _vm._s(_vm.summary) +
                        "\r\n\r\n                "
                    ),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "v-col",
                  {
                    staticClass: "text-left",
                    attrs: {
                      cols: "12",
                      md: "4",
                      sm:
                        _vm.screensize.width >= 739 &&
                        _vm.screensize.width <= 1280
                          ? 6
                          : 12,
                    },
                  },
                  [
                    _c(
                      "h2",
                      {
                        directives: [
                          {
                            name: "intersect",
                            rawName: "v-intersect.quiet",
                            value: _vm.onIntersect,
                            expression: "onIntersect",
                            modifiers: { quiet: true },
                          },
                        ],
                        staticClass: "white--text",
                        attrs: { id: "references" },
                      },
                      [_vm._v("REFERENCES")]
                    ),
                    _vm._v(" "),
                    _c(
                      "v-row",
                      _vm._l(_vm.reference, function (item, i) {
                        return _c(
                          "v-col",
                          {
                            key: i,
                            attrs: {
                              cols: _vm.screensize.width <= 375 ? 12 : 6,
                              xl: "4",
                              lg: "6",
                              md: "12",
                              sm: _vm.screensize.width >= 667 ? 6 : 12,
                            },
                          },
                          [
                            _c(
                              "v-list-item",
                              { attrs: { dense: "" } },
                              [
                                _c(
                                  "v-list-item-content",
                                  [
                                    _c("v-list-item-title", [
                                      _vm._v(_vm._s(item.name)),
                                    ]),
                                    _vm._v(" "),
                                    _c("v-list-item-subtitle", [
                                      _vm._v(_vm._s(item.role)),
                                    ]),
                                    _vm._v(" "),
                                    _c("v-list-item-subtitle", [
                                      _vm._v(_vm._s(item.contact)),
                                    ]),
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
                  {
                    staticClass: "text-left",
                    attrs: {
                      cols: "12",
                      md: "4",
                      sm:
                        _vm.screensize.width >= 740 &&
                        _vm.screensize.width <= 1280
                          ? 6
                          : 12,
                    },
                  },
                  [
                    _c("h2", { staticClass: "white--text" }, [
                      _vm._v("INFORMATION"),
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.detail, function (item, i) {
                      return _c(
                        "v-list-item",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: item.icon != "",
                              expression: "item.icon != ''",
                            },
                          ],
                          key: i,
                          attrs: { dense: "" },
                        },
                        [
                          _c(
                            "v-list-item-icon",
                            [
                              _c("v-icon", { staticClass: "blue--text" }, [
                                _vm._v(
                                  "\r\n                                " +
                                    _vm._s(item.icon) +
                                    "\r\n                            "
                                ),
                              ]),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item-content",
                            [
                              _c("v-list-item-title", [
                                _vm._v(
                                  "\r\n                                " +
                                    _vm._s(item.text) +
                                    "\r\n                            "
                                ),
                              ]),
                            ],
                            1
                          ),
                        ],
                        1
                      )
                    }),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c(
                      "v-col",
                      { staticClass: "text-right" },
                      _vm._l(_vm.icons, function (icon) {
                        return _c(
                          "v-btn",
                          {
                            key: icon.icon,
                            staticClass: "mx-4",
                            attrs: {
                              icon: "",
                              href: icon.link,
                              target: "_blank",
                            },
                            on: {
                              click: function ($event) {
                                return _vm.SoundEffect("select")
                              },
                            },
                          },
                          [
                            _c(
                              "v-icon",
                              {
                                staticClass: "blue--text iconhover",
                                attrs: { "x-large": "", size: "24px" },
                                on: {
                                  mouseenter: function ($event) {
                                    return _vm.SoundEffect("slide")
                                  },
                                },
                              },
                              [
                                _vm._v(
                                  "\r\n                                " +
                                    _vm._s(icon.icon) +
                                    "\r\n                            "
                                ),
                              ]
                            ),
                          ],
                          1
                        )
                      }),
                      1
                    ),
                  ],
                  2
                ),
              ],
              1
            ),
          ],
          1
        ),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Education.vue?vue&type=template&id=f87c0466&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Education.vue?vue&type=template&id=f87c0466& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
            [_vm._v("mdi-school")]
          ),
          _vm._v(" "),
          _c(
            "b",
            {
              staticClass:
                "white--text font-weight-bold Pacifico titlesize textshadow",
            },
            [_vm._v("Education")]
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-col",
        {
          attrs: {
            cols: "12",
            lg: "6",
            sm: _vm.isMobile && _vm.screensize.width >= 739 ? 6 : 12,
          },
        },
        [
          (
            _vm.$vuetify.breakpoint.name == "lg" ||
            _vm.$vuetify.breakpoint.name == "xl" ||
            (_vm.isMobile && _vm.screensize.width >= 739)
              ? false
              : true
          )
            ? _c(
                "v-carousel",
                {
                  staticClass: "mb-n10",
                  attrs: { height: "180", "hide-delimiters": "" },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "prev",
                        fn: function (ref) {
                          var on = ref.on
                          var attrs = ref.attrs
                          return [
                            _c(
                              "v-icon",
                              _vm._g(
                                _vm._b(
                                  {
                                    attrs: { "x-large": "" },
                                    on: {
                                      click: function ($event) {
                                        return _vm.mSlideCarousel(-1)
                                      },
                                    },
                                  },
                                  "v-icon",
                                  attrs,
                                  false
                                ),
                                on
                              ),
                              [_vm._v("mdi-chevron-left")]
                            ),
                          ]
                        },
                      },
                      {
                        key: "next",
                        fn: function (ref) {
                          var on = ref.on
                          var attrs = ref.attrs
                          return [
                            _c(
                              "v-icon",
                              _vm._g(
                                _vm._b(
                                  {
                                    attrs: { "x-large": "" },
                                    on: {
                                      click: function ($event) {
                                        return _vm.mSlideCarousel(1)
                                      },
                                    },
                                  },
                                  "v-icon",
                                  attrs,
                                  false
                                ),
                                on
                              ),
                              [_vm._v("mdi-chevron-right")]
                            ),
                          ]
                        },
                      },
                    ],
                    null,
                    false,
                    191509737
                  ),
                },
                [
                  _vm._v(" "),
                  _vm._v(" "),
                  _vm._l(_vm.Education, function (item, i) {
                    return _c(
                      "v-carousel-item",
                      {
                        key: i,
                        on: {
                          mouseover: function ($event) {
                            return _vm.mHoverSelect(item, i)
                          },
                        },
                      },
                      [
                        _c(
                          "v-card",
                          { staticClass: "mt-6" },
                          [
                            _c(
                              "v-card-text",
                              { staticClass: "text-center" },
                              [
                                _c(
                                  "v-list-item",
                                  [
                                    _c(
                                      "v-list-item-avatar",
                                      {
                                        staticClass: "elevation-5",
                                        attrs: { width: 80, height: 80 },
                                      },
                                      [
                                        _c("v-img", {
                                          attrs: { src: "images/" + item.logo },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-list-item-content",
                                      [
                                        _c("v-list-item-title", [
                                          _vm._v(_vm._s(item.school)),
                                        ]),
                                        _vm._v(" "),
                                        _c("v-list-item-subtitle", [
                                          _vm._v(_vm._s(item.year)),
                                        ]),
                                        _vm._v(" "),
                                        _c("v-list-item-subtitle", [
                                          _vm._v(_vm._s(item.address)),
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
                        ),
                      ],
                      1
                    )
                  }),
                ],
                2
              )
            : _vm._l(_vm.Education, function (item, i) {
                return _c(
                  "v-col",
                  {
                    key: i,
                    attrs: {
                      cols: _vm.overlaytext.year == item.year ? 12 : 11,
                    },
                    on: {
                      mouseover: function ($event) {
                        return _vm.mHoverSelect(item, i)
                      },
                    },
                  },
                  [
                    _c(
                      "v-card",
                      { staticClass: "mt-6" },
                      [
                        _c(
                          "v-card-text",
                          { staticClass: "text-center" },
                          [
                            _c(
                              "v-list-item",
                              [
                                _c(
                                  "v-list-item-avatar",
                                  {
                                    staticClass: "elevation-5",
                                    attrs: {
                                      width:
                                        _vm.overlaytext.year == item.year
                                          ? 80
                                          : 40,
                                      height:
                                        _vm.overlaytext.year == item.year
                                          ? 80
                                          : 40,
                                    },
                                  },
                                  [
                                    _c("v-img", {
                                      attrs: { src: "images/" + item.logo },
                                    }),
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-item-content",
                                  [
                                    _c("v-list-item-title", [
                                      _vm._v(_vm._s(item.school)),
                                    ]),
                                    _vm._v(" "),
                                    _c("v-list-item-subtitle", [
                                      _vm._v(_vm._s(item.year)),
                                    ]),
                                    _vm._v(" "),
                                    _c("v-list-item-subtitle", [
                                      _vm._v(_vm._s(item.address)),
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
                    ),
                  ],
                  1
                )
              }),
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "v-col",
        {
          attrs: {
            cols: "12",
            lg: "6",
            sm: _vm.isMobile && _vm.screensize.width >= 739 ? 6 : 12,
          },
        },
        [
          _c(
            "v-carousel",
            {
              staticClass: "white",
              class:
                this.$vuetify.breakpoint.name == "lg" ||
                this.$vuetify.breakpoint.name == "xl"
                  ? "customradius"
                  : "customradius",
              attrs: {
                "show-arrows": false,
                cycle: "",
                interval: "9000",
                "hide-delimiters": "",
                height: "500",
              },
            },
            [
              _vm._l(_vm.gradpic, function (img, i) {
                return _c("v-carousel-item", {
                  key: i,
                  attrs: { src: "images/" + img },
                })
              }),
              _vm._v(" "),
              _c(
                "v-overlay",
                { attrs: { "v-model": true, absolute: "", color: "#14143C" } },
                [
                  _c("v-fade-transition", { attrs: { mode: "out-in" } }, [
                    _c(
                      "div",
                      { key: _vm.overlaytext.year, staticClass: "text-center" },
                      [
                        _c("span", [
                          _vm._v("S.Y. " + _vm._s(_vm.overlaytext.year)),
                        ]),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass: "font-weight-bold",
                            staticStyle: { "font-size": "120%" },
                          },
                          [
                            _c("v-icon", { staticClass: "blue--text" }, [
                              _vm._v("mdi-school"),
                            ]),
                            _vm._v(
                              "\r\n                            " +
                                _vm._s(_vm.overlaytext.school) +
                                "\r\n                        "
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(
                          "\r\n                        " +
                            _vm._s(_vm.overlaytext.address) +
                            "\r\n                        "
                        ),
                        _c("br"),
                        _c("br"),
                        _vm._v(" "),
                        _c(
                          "i",
                          {
                            staticClass: "Playfair",
                            staticStyle: { "font-size": "120%" },
                          },
                          [_vm._v(_vm._s(_vm.overlaytext.course))]
                        ),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        _c(
                          "span",
                          { staticClass: "yellow--text font-weight-bold" },
                          [
                            _c(
                              "v-icon",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: _vm.overlaytext.award != "",
                                    expression: "overlaytext.award != ''",
                                  },
                                ],
                                staticClass: "yellow--text",
                              },
                              [_vm._v("mdi-medal")]
                            ),
                            _vm._v(
                              "\r\n                            " +
                                _vm._s(_vm.overlaytext.award) +
                                "\r\n                        "
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.overlaytext.grade != null,
                                expression: "overlaytext.grade != null",
                              },
                            ],
                            staticClass: "mt-n4",
                          },
                          [_vm._v("- GWA: " + _vm._s(_vm.overlaytext.grade))]
                        ),
                      ]
                    ),
                  ]),
                ],
                1
              ),
            ],
            2
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Portfolio.vue?vue&type=template&id=04abcb6d&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Portfolio.vue?vue&type=template&id=04abcb6d& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
                [_vm._v("mdi-folder")]
              ),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass: "font-weight-bold Pacifico titlesize textshadow",
                },
                [_vm._v("Portfolio")]
              ),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("v-col", { attrs: { cols: "0", lg: "12" } }),
            ],
            1
          ),
          _vm._v(" "),
          _vm._l(_vm.Portfolios, function (item, i) {
            return _c(
              "v-col",
              {
                key: i,
                attrs: {
                  cols: "12",
                  sm: _vm.screensize.width >= 667 ? 6 : 12,
                  md: "6",
                  lg: "4",
                  xl: "3",
                },
              },
              [
                _c("v-hover", {
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "default",
                        fn: function (ref) {
                          var hover = ref.hover
                          return [
                            _c(
                              "v-card",
                              { staticClass: "boxcolor pa-1 ma-2 elevation-0" },
                              [
                                _c(
                                  "v-carousel",
                                  {
                                    staticClass: "white",
                                    attrs: {
                                      "show-arrows-on-hover": "",
                                      cycle: "",
                                      interval: "9000",
                                      "hide-delimiters": "",
                                      height: "240px",
                                    },
                                  },
                                  _vm._l(item.img, function (img, i) {
                                    return _c("v-carousel-item", {
                                      key: i,
                                      attrs: { src: "images/portfolio/" + img },
                                    })
                                  }),
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "white--text d-flex justify-center Playfair",
                                  },
                                  [_vm._v(_vm._s(item.title))]
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-fade-transition",
                                  [
                                    hover
                                      ? _c(
                                          "v-overlay",
                                          {
                                            attrs: {
                                              absolute: "",
                                              color: "#14143C",
                                              opacity: "0.70",
                                            },
                                          },
                                          [
                                            _c(
                                              "div",
                                              { staticClass: "text-center" },
                                              [
                                                _c(
                                                  "p",
                                                  { staticClass: "ma-1" },
                                                  [_vm._v(_vm._s(item.info))]
                                                ),
                                                _c("br"),
                                                _vm._v(" "),
                                                _c(
                                                  "v-btn",
                                                  {
                                                    staticClass: "blue",
                                                    on: {
                                                      click: function ($event) {
                                                        return _vm.mOpenCarousel(
                                                          item.img,
                                                          item.title
                                                        )
                                                      },
                                                    },
                                                  },
                                                  [
                                                    _c(
                                                      "v-icon",
                                                      { staticClass: "mr-2" },
                                                      [_vm._v("mdi-expand-all")]
                                                    ),
                                                    _vm._v(
                                                      "\r\n                                        Expand\r\n                                    "
                                                    ),
                                                  ],
                                                  1
                                                ),
                                              ],
                                              1
                                            ),
                                          ]
                                        )
                                      : _vm._e(),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ]
                        },
                      },
                    ],
                    null,
                    true
                  ),
                }),
              ],
              1
            )
          }),
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { fullscreen: "" },
          model: {
            value: _vm.carousel,
            callback: function ($$v) {
              _vm.carousel = $$v
            },
            expression: "carousel",
          },
        },
        [
          _c(
            "v-card",
            { staticClass: "grey darken-3" },
            [
              _c(
                "v-card-title",
                { staticClass: "white--text titlecolor" },
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        {
                          style: _vm.isMobile ? "font-size:80%" : "",
                          attrs: { cols: "10" },
                        },
                        [
                          _vm._v(
                            "\r\n                        " +
                              _vm._s(_vm.carouselitem.title) +
                              "\r\n                    "
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "text-right", attrs: { cols: "2" } },
                        [
                          _c(
                            "v-icon",
                            {
                              staticClass: "white--text closehover",
                              attrs: { "x-large": "" },
                              on: {
                                click: function ($event) {
                                  _vm.carousel = !_vm.carousel
                                },
                              },
                            },
                            [_vm._v("mdi-close")]
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
                "v-carousel",
                { attrs: { "show-arrows-on-hover": "", height: "90vh" } },
                _vm._l(_vm.carouselitem.img, function (img, i) {
                  return _c("v-carousel-item", {
                    key: i,
                    attrs: { src: "images/portfolio/" + img, contain: "" },
                  })
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Skills.vue?vue&type=template&id=49478526&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Skills.vue?vue&type=template&id=49478526& ***!
  \******************************************************************************************************************************************************************************************************************/
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
        { staticClass: "my-5" },
        [
          _c(
            "v-col",
            { attrs: { cols: "12", lg: "6", sm: _vm.isMobile ? 6 : 12 } },
            [
              _c(
                "v-card",
                { staticClass: "seethrough mt-5", attrs: { id: "skill" } },
                [
                  _c(
                    "v-card-title",
                    { staticClass: "titlecolor white--text font-weight-bold" },
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
                      _c("h2", { staticClass: "Playfair" }, [_vm._v("SKILLS")]),
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
                                              _vm._v(_vm._s(item.title)),
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
                                { staticClass: "d-flex justify-center" },
                                _vm._l(item.items, function (subitem, i) {
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
                                            "images/skill/" + subitem + ".png",
                                          height: "70",
                                          width: "70",
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c("p", [_vm._v(_vm._s(subitem))]),
                                    ]
                                  )
                                }),
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
          ),
          _vm._v(" "),
          _c(
            "v-col",
            {
              staticClass: "justify-center align-center d-flex font-bold",
              attrs: { cols: "12", lg: "6", sm: _vm.isMobile ? 6 : 12 },
            },
            [
              _c("div", [
                _c("h1", { staticClass: "Playfair" }, [
                  _c("b", { staticClass: "blue--text Pacifico" }, [
                    _vm._v("Exploration"),
                  ]),
                  _vm._v(" is"),
                ]),
                _vm._v(" "),
                _c("h1", { staticClass: "Playfair" }, [
                  _c("b", { staticClass: "green--text Pacifico" }, [
                    _vm._v("Curiosity"),
                  ]),
                  _vm._v(" put into"),
                ]),
                _vm._v(" "),
                _c("h1", { staticClass: "red--text Pacifico" }, [
                  _vm._v("Action"),
                ]),
                _vm._v(" "),
                _c("br"),
              ]),
            ]
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Summary.vue?vue&type=template&id=df38e3ea&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Summary.vue?vue&type=template&id=df38e3ea& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
            {
              staticClass: "justify-center align-center d-flex font-bold",
              attrs: { cols: "12", lg: "7", sm: _vm.isMobile ? 6 : 12 },
            },
            [
              _c(
                "div",
                [
                  _c("h1", { staticClass: "Playfair whiteshadow" }, [
                    _vm._v("Hey there!"),
                  ]),
                  _vm._v(" "),
                  _c("h1", { staticClass: "Playfair whiteshadow" }, [
                    _vm._v("I'm "),
                    _c("b", { staticClass: "Pacifico" }, [
                      _vm._v("Jimwell C. Punzalan"),
                    ]),
                    _vm._v(","),
                  ]),
                  _vm._v(" "),
                  _c("h1", { staticClass: "Playfair whiteshadow" }, [
                    _vm._v("Devoted "),
                    _c("b", { staticClass: "blue--text Pacifico" }, [
                      _vm._v("IT Specialist"),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _vm._l(_vm.icons, function (icon) {
                    return _c(
                      "v-btn",
                      {
                        key: icon.icon,
                        staticClass: "mx-4",
                        attrs: {
                          dark: "",
                          icon: "",
                          href: icon.link,
                          target: "_blank",
                        },
                        on: {
                          mouseenter: function ($event) {
                            return _vm.SoundEffect("slide")
                          },
                          click: function ($event) {
                            return _vm.SoundEffect("select")
                          },
                        },
                      },
                      [
                        _c(
                          "v-icon",
                          {
                            staticClass:
                              "blue--text text-left iconhover whiteshadow",
                            attrs: { large: "", size: "24px" },
                          },
                          [
                            _vm._v(
                              "\r\n                        " +
                                _vm._s(icon.icon) +
                                "\r\n                    "
                            ),
                          ]
                        ),
                      ],
                      1
                    )
                  }),
                ],
                2
              ),
            ]
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", lg: "4", sm: _vm.isMobile ? 6 : 12 } },
            [
              _c(
                "v-card",
                { staticClass: "seethrough" },
                [
                  _c(
                    "v-card-title",
                    { staticClass: "titlecolor white--text font-weight-bold" },
                    [
                      _c(
                        "v-icon",
                        {
                          staticClass: "blue--text mx-2",
                          attrs: { "x-large": "" },
                        },
                        [_vm._v("mdi-book-open-page-variant")]
                      ),
                      _vm._v(" "),
                      _c("h2", { staticClass: "Playfair" }, [
                        _vm._v("SUMMARY"),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-card-text", [
                    _c("p", { staticClass: "ma-4" }, [
                      _vm._v(_vm._s(_vm.summary)),
                    ]),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("v-col", { attrs: { cols: "0", lg: "1", sm: "0" } }),
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
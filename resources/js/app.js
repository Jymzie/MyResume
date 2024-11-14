require('./bootstrap');
import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from './router'
import store from './store'
import App from './template/App'
import VueIziToast from 'vue-izitoast'
import 'izitoast/dist/css/iziToast.css';
 

Vue.use(Vuetify);
Vue.use(VueIziToast);

// Vue.directive('scroll', {
//     inserted: function(el, binding) {
//         binding.value = null;
//       let f = function(evt) {
//         if (binding.value(evt, el)) {
//           window.removeEventListener('scroll', f);
//         }
//       };
//       window.addEventListener('scroll', f);
//     },
//   });

new Vue({
    el: '#app',  
    // methods: {
    //     handleScroll: function(evt, el) {
    //      if (window.scrollY > 50) {
    //        el.setAttribute("style", "opacity: 1; transform: translate3d(0, -10px, 0)")
    //      }
    //      return window.scrollY > 100;
    //      }
    //    },
    store,
    router:Router,
    vuetify: new Vuetify(),
    // render: function (h) {
    //     let handleScroll = this.handleScroll;
    //     return h(App, {props: {handleScroll}});
    // }
    render: h=>h(App)
});
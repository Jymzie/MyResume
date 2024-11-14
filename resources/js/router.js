import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Contents',
            component: () => import('./components/Contents'),
        },
    ],
    scrollBehavior: function(to, from, savedPosition) {
        return new Promise((resolve, reject) => {
            
                if (to.hash){
                    resolve({selector: to.hash,
                        offset: { x: 0, y:-40 },
                        behavior: 'smooth',})
                }   
                       
                else
                    resolve({x:0, y:0,
                        behavior: 'smooth'})
          
          })
    },
});

router.beforeEach((to, from, next) =>{
    
// window.addEventListener('scroll', function(event) {
//     var doc = document.documentElement;
//     // var left = (window.scrollX || doc.scrollLeft) - (doc.clientLeft || 0);
//     var top = (window.scrollY || doc.scrollTop)  - (doc.clientTop || 0);
//         console.log(top);
//     if(top >= 2553 && top <= 2580)
//         next({name: 'Contents', hash:'#experience'})
    
//    });
    // console.log('window.scrollY:', window.scrollY)
    // from.meta?.scrollTop && (from.meta.scrollTop = window.scrollY)
    // console.log('from:\t', from.name, '\t', from.meta)
    // console.log('to:\t\t', to.name, '\t', to.meta)
    
    if(to.name == null){
        next({name: 'Contents'})
    }
    else{
      next()  
    }
})

export default router
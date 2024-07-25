import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let router = new VueRouter({
    mode: 'hash',
    base: '/Resume/',
    routes: [
        {
            path: '/Overview',
            name: 'Overview',
            component: () => import('./components/Overview'),
        },
        {
            path: '/Experience',
            name: 'Experience',
            component: () => import('./components/Experience'),
        },
        {
            path: '/',
            name: 'Contents',
            component: () => import('./components/Contents'),
        },
    ],
    scrollBehavior: function(to, from, savedPosition) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (to.hash) 
                    resolve({selector: to.hash,
                            offset: { x: 0, y: 220 },
                            behavior: 'smooth',})
                else
                    resolve(savedPosition || {x:0, y:0})
            }, 500)
          })
    },
});

router.beforeEach((to, from, next) =>{
    if(to.name == null){
        next({name: 'Contents'})
    }
    else{
      next()  
    }
})

export default router
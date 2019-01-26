import Vue from 'vue'
import App from './App.vue'

import axios from 'axios';
import Router from './router/index'
import VueResource from 'vue-resource'
import Auth from './packages/auth/Auth'
import moment from 'moment'




Vue.use(axios);
Vue.use(VueResource);
Vue.use(Auth);
Vue.use(moment);

Vue.filter('timeago', function (value) {
    return moment.utc(value).local().fromNow();
});



//Vue.http.options.root = 'http://localhost:8000';

/*Vue.http.headers.common['Authorization'] = 'Bearer ' + Vue.auth.getToken()

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        return Vue.auth.isAuthenticated() ? next() : next({ path: '/login' });
    }
    if (to.matched.some(record => record.meta.forGuest)) {
        return Vue.auth.isAuthenticated() ? next({ path: '/companies' }) : next();
    }
    next();
});*/

Vue.http.headers.common['Authorization'] = 'Bearer ' + Vue.auth.getToken();

Router.beforeEach(
    (to, from, next) => {

        if(to.matched.some(record => record.meta.forVisitors)){

    if(Vue.auth.isAuthenticated()){
        next({
            path: '/companies'
        })
    }else next()
}

else if(to.matched.some(record => record.meta.forAuth))
        {
            if(! Vue.auth.isAuthenticated()){
                next({
                    path: '/login'
                })
            }else next()
        }

else next()

    }
    )

new Vue({
    el: '#app',
    router: Router,
//  store,
    template: '<App/>',
    components: { App }
});

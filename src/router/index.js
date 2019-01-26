import Vue from 'vue'

import Vuex from 'vuex'
import VueRouter from 'vue-router'


import Home from '../components/Home.vue'
import Login from '../components/authentication/Login.vue'

import Logout from '../components/authentication/Logout.vue'
import Companies from '../components/company/Companies.vue'
import Show from '../components/company/Show.vue'
import Edit from '../components/company/Edit.vue'
import CreateProject from '../components/company/Project/Create.vue'
import CreateCompany from '../components/company/Create.vue'
import ProjectShow from '../components/company/Project/Show.vue'
import Projects from '../components/company/Project/Projects.vue'
import Create1 from '../components/company/Project/Create1.vue'



Vue.use(VueRouter);
Vue.use(Vuex)

const router = new VueRouter({
   mode: 'history',
   linkActiveClass: 'active',
    routes: [
        {path: '/', name: 'home', component: Home},
        { path: '/login', component: Login,  meta: { forVisitors: true} },

        { path: '/logout', component: Logout,  meta: { forAuth: true }  },
      
        { path: '/companies', component: Companies, name: 'companies',  meta: { forAuth: true } },
        {path: '/companies/create', component:CreateCompany, name: 'createcompany',  meta: { forAuth: true } },
        { path: '/companies/:company', component: Show,  meta: { forAuth: true } },
        {path: '/companies/:company/edit', component: Edit,  meta: { forAuth: true } },
        { path: '/projects', component: Projects, name: 'projects',  meta: { forAuth: true } },
        {path: '/projects/create/:company', component:CreateProject, name: 'createproject',  meta: { forAuth: true } },
        {path: '/projects/create', component:Create1, name: 'create1',  meta: { forAuth: true } },
        { path: '/projects/:project', component: ProjectShow,  meta: { forAuth: true } },
    ]
});

export default router
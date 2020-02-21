import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Tables from './views/TablesTableMultiplication.vue';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/tables/:max', name: 'tables', component: Tables},
  ]
});
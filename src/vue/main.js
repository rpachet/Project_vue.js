import Vue from 'vue' //librairie "vue" dans node_modules
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import app from './app.vue' //fichier app.vue local
import movielist from './components/movielist.vue'
import editmovie from './components/editmovie.vue'
import MovieItemComponent from './components/movieitem.vue'
import my_store from './Store.js'

Vue.component('movie-item', MovieItemComponent);
Vue.use(VueRouter);





const router = new VueRouter({
  routes:[
    {
      path: '/',
      component: movielist
    },
    {
      path: '/edit',
      name: 'edit',
      component: editmovie
  },

  ]
})



new Vue({
  el: '#app',
  render: h => h(app),
  router,
  store: my_store,
})

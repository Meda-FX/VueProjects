// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router' //Importing Router from nodeJs
import Posts from './components/Posts' // Import post component from components so we can use it in Route
import Contact from './components/Contact' // Import Contact component from components so we can use it in Route

// Use Router in our applcation
Vue.use(VueRouter)

//Constructing our route, we will put our routes in a constant 'routes' variable
const  routes = [
  {
    //each object will have two properties 'path' and 'component'
    path: '/', component: Posts
  },
  {
    //each object will have two properties 'path' and 'component'
    path: '/contact', component: Contact
  }
];

// Register the Router into Vue below,
// Fitst we intanciate Routher 
const router = new VueRouter({routes: routes})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  components: { App },
  template: '<App/>'
})

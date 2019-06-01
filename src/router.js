import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ContactForm from './components/ContactForm.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/addContact',
      name: 'addContact',
      component: ContactForm
    }
  ]
})

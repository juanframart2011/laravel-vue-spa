require('./bootstrap');

window.Vue = require('vue');

Vue.component('landing-page', require('./components/landing.vue').default);
Vue.component('contact-page', require('./components/contact.vue').default);
Vue.component('about-page', require('./components/about.vue').default);


const app = new Vue({
    el: '#app',
    data:{
        menu:0,
    },
    methods: {
        changePage(menu){
            this.menu = menu;
        }
    },
});
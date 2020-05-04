require('./bootstrap');

import VueRouter from 'vue-router';
import router from './routes';
import moment from "moment";

import Index from './components/index';
import myNav from './components/nav.vue';
import myFooter from './components/my-footer';
import StarRating from "./sheard/components/StarRating";
import Success from "./sheard/components/Success";

window.Vue = require('vue');

Vue.use(VueRouter);

Vue.filter("fromNow", value => moment(value).fromNow());

Vue.component("StarRating", StarRating);
Vue.component("success", Success);

const app = new Vue({
    el: '#app',
    router: router,
    components: {
        "index": Index,
        "my-footer": myFooter,
        "my-nav": myNav
    }
});

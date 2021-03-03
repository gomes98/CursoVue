import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'
import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

//Temporario
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MywibmFtZSI6Ik1pY2hlbGUgU2FudGFuYSIsImVtYWlsIjoibWljaGVsZUBnbWFpbC5jb20iLCJhZG1pbiI6ZmFsc2UsImlhdCI6MTYxNDcwNTMxNSwiZXhwIjoxNjE0OTY0NTE1fQ.Nu2FhdNKFlVrKLCxxXtDzLr2xQBWIMzqBKWOvLJ07aE'

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')
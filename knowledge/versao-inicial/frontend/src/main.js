import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

//Temporario
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ik1hdXJpY2lvIEdvbWVzIiwiZW1haWwiOiJnb21lczk4QGdtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE2MTQ2ODQ2NTEsImV4cCI6MTYxNDk0Mzg1MX0.eGoKFqTWhr1HGEgqbHofAnKmn9dTqijEdluoP_T9mCw'

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')
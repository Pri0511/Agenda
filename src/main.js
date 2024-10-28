import { createApp } from 'vue'
import { Quasar } from 'quasar'


import 'quasar/src/css/index.sass';

import App from './App.vue'
const myApp = createApp(App)


myApp.use( Quasar,{
    plugins:{},
})


myApp.mount('#app')


import './assets/base.css'
import './index.css';
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { VueFire, VueFireAuth } from 'vuefire';
import { firebaseApp } from './config/firebaseConfig';

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

import { addPrimevueComponents } from './config/primevueConfig';

const app = createApp(App)

app.use(router)
app.use(VueFire, {
    firebaseApp: firebaseApp,
    modules: [
        VueFireAuth()
    ]
})
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
})
addPrimevueComponents(app);
app.mount('#app')

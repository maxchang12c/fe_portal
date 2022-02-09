import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './translations'
import vuetify from './plugins/vuetify'
import { Form, Field } from 'vee-validate'
import './plugins/validators'
// import 'vue-toastification/dist/index.css'
// import 'material-design-icons-iconfont/dist/material-design-icons.css'

const app = createApp(App)

app.use(router)
app.use(i18n)
app.use(vuetify)
app.component('Form', Form)
app.component('Field', Field)

app.mount('#app')

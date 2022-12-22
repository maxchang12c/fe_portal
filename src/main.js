import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import App from './App.vue'
import router from '@/router/index.ts'

//mixins
import commonMixin from '@/mixins/common'

//prime vue components
import Card from 'primevue/card'
import TabMenu from 'primevue/tabmenu'
import DeferredContent from 'primevue/deferredcontent'
import Dock from 'primevue/dock'
import Button from 'primevue/button'
import Image from 'primevue/image'
import AutoComplete from 'primevue/autocomplete'
import Paginator from 'primevue/paginator'
import PanelMenu from 'primevue/panelmenu'
import Sidebar from 'primevue/sidebar'
import Galleria from 'primevue/galleria'
import ScrollTop from 'primevue/scrolltop'
import ScrollPanel from 'primevue/scrollpanel'
import Carousel from 'primevue/carousel'
import Password from 'primevue/password'
import Checkbox from 'primevue/checkbox'
import InputText from 'primevue/inputtext'
import Calendar from 'primevue/calendar'
import Dropdown from 'primevue/dropdown'
import Badge from 'primevue/badge'
import Divider from 'primevue/divider'
import Fieldset from 'primevue/fieldset'

import 'primevue/resources/themes/saga-blue/theme.css' //theme
import 'primevue/resources/primevue.min.css' //core css
import 'primeicons/primeicons.css' //icons
import '/node_modules/primeflex/primeflex.css'

const app = createApp(App)

app.use(PrimeVue)
app.use(router)

app.component('Divider', Divider)
app.component('Badge', Badge)
app.component('Card', Card)
app.component('TabMenu', TabMenu)
app.component('DeferredContent', DeferredContent)
app.component('Dock', Dock)
app.component('Button', Button)
app.component('Image', Image)
app.component('AutoComplete', AutoComplete)
app.component('Paginator', Paginator)
app.component('PanelMenu', PanelMenu)
app.component('Sidebar', Sidebar)
app.component('Galleria', Galleria)
app.component('ScrollTop', ScrollTop)
app.component('ScrollPanel', ScrollPanel)
app.component('Carousel', Carousel)
app.component('Password', Password)
app.component('Checkbox', Checkbox)
app.component('InputText', InputText)
app.component('Calendar', Calendar)
app.component('Dropdown', Dropdown)
app.component('Fieldset', Fieldset)
//mixin installation
app.mixin(commonMixin)

app.mount('#app')

import VueI18n from 'vue-i18n'
import enUS from './en'
import zhCN from './zh'

let messages = {
  en_US: {
    ...enUS
  },
  zh_CN: {
    ...zhCN
  }
}

const i18n = VueI18n.createI18n({
  locale: 'en_US', // set locale
  fallbackLocale: 'en_US', // set fallback locale
  messages, // set locale messages
  silentTranslationWarn: true
  // If you need to specify other options, you can set other options
  // ...
})

export default i18n

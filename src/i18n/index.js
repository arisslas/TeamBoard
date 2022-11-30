import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { es } from './locales/es.js'
import { en } from './locales/en.js'
import { fr } from './locales/fr.js'


Vue.use(VueI18n)

let language = (navigator.language || navigator.userLanguage).substr(0, 2)
let defaultLanguage = 'en'


if (language === 'es' || language === 'en' || language === 'fr') {
  defaultLanguage = language
}

export const i18n = new VueI18n({
  locale: defaultLanguage,
  fallbackLocale: defaultLanguage,
  messages: {
    es,
    en,
    fr
  }
})

export function setI18nSetup() {
  setHtmlLangAttribute()
}

function setHtmlLangAttribute() {
  const html = document.documentElement
  html.setAttribute('lang', defaultLanguage)
}

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { translationKeys } from '@/languages/languages'

i18n.use(initReactI18next).init({
  resources: {
    'en-US': { translation: translationKeys['en-US'] },
    'pt-BR': { translation: translationKeys['pt-BR'] },
  },
  lng: 'en-US',
  fallbackLng: 'en-US',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n

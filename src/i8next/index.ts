import il8n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enJSON from './translations/en.json'
import ptJSON from './translations/ptBR.json'

il8n.use(initReactI18next).init({
  fallbackLng: 'English',

  interpolation: {
    escapeValue: false
  },

  resources: {
    English: enJSON,
    Português: ptJSON
  }

})
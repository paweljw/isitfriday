import React from 'react';
import ReactDOM from 'react-dom';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import './index.css';
import App from './App';

import pl from './locales/pl'
import en from './locales/en'

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    detection: {
      order: ['cookie', 'localStorage', 'navigator'],
    },
    whitelist: ['en', 'pl'],
    resources: {
      pl,
      en
    },
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false
    }
  });

ReactDOM.render(<App />, document.getElementById('root'));

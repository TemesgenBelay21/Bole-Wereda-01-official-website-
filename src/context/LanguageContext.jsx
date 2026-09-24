import { createContext, useContext, useEffect, useState } from 'react'
import en from '../data/lang-en.js'
import am from '../data/lang-am.js'

const LanguageContext = createContext(null)

const LANG_KEY = 'bole-wereda-1-lang'
const dictionaries = { en, am }

function getInitialLang() {
  let stored
  try {
    stored = localStorage.getItem(LANG_KEY)
  } catch {
    stored = null
  }
  if (stored === 'en' || stored === 'am') return stored
  return 'en'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem(LANG_KEY, lang)
    } catch {
      /* storage unavailable — language still applies for this session */
    }
  }, [lang])

  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'am' : 'en'))
  }

  const t = dictionaries[lang]

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)

  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return ctx
}

export default LanguageContext
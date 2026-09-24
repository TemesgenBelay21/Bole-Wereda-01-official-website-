import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext(null)

const THEME_KEY = 'bole-wereda-1-theme'

function getInitialTheme() {
  let stored
  try {
    stored = localStorage.getItem(THEME_KEY)
  } catch {
    stored = null
  }
  if (stored === 'light' || stored === 'dark') return stored
  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return 'dark'
  }
  return 'light'
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.dataset.theme = 'dark'
    } else {
      delete root.dataset.theme
    }
    try {
      localStorage.setItem(THEME_KEY, theme)
    } catch {
      /* storage unavailable — theme still applies for this session */
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)

  if (!ctx) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return ctx
}

export default ThemeContext
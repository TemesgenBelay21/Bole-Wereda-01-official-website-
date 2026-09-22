import { useEffect, useState } from 'react'
import { Moon, Sun, Menu, X, Languages } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext.jsx'
import { useLanguage } from '../../context/LanguageContext.jsx'
import styles from './Header.module.css'

function Emblem() {
  return (
    <svg
      className={styles.emblem}
      viewBox="0 0 48 48"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M24 3 4 10v13c0 11.2 8.2 18.6 20 22 11.8-3.4 20-10.8 20-22V10L24 3Z"
        fill="#03438A"
        stroke="#F4F1DE"
        strokeWidth="2"
      />
      <path
        d="M24 10l3.2 6.6 7.2 1-5.2 5.1 1.2 7.2L24 26.5l-6.4 3.4 1.2-7.2-5.2-5.1 7.2-1L24 10Z"
        fill="#F4F1DE"
      />
    </svg>
  )
}

function Header() {
  const { theme, toggleTheme } = useTheme()
  const { lang, t, toggleLang } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
      lang={lang}
    >
      <div className={`${styles.inner} container`}>
        <a href="#hero" className={styles.brand} onClick={closeMenu}>
          <Emblem />
          <span className={styles.brandText}>
            <span className={styles.brandName}>{t.site.name}</span>
            <span className={styles.brandSub}>{t.site.sub}</span>
          </span>
        </a>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`} aria-label="Primary">
          <ul className={styles.navList}>
            {t.nav.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className={styles.navLink} onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.iconButton}
            onClick={toggleLang}
            aria-label="Switch language"
            title={t.switchLabel}
          >
            <Languages className={styles.icon} size={18} />
            <span className={styles.langCode}>{lang === 'en' ? 'አማ' : 'EN'}</span>
          </button>

          <button
            type="button"
            className={styles.iconButton}
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            {theme === 'dark' ? (
              <Sun className={styles.icon} size={18} />
            ) : (
              <Moon className={styles.icon} size={18} />
            )}
          </button>

          <button
            type="button"
            className={`${styles.iconButton} ${styles.menuButton}`}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
import { useLanguage } from '../../context/LanguageContext.jsx'
import styles from './SkipLink.module.css'

function SkipLink() {
  const { lang, t } = useLanguage()

  return (
    <a href="#main" className={styles.skip} lang={lang}>
      {t.ui.skipToContent}
    </a>
  )
}

export default SkipLink
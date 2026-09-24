import { MapPin, Phone, Mail } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext.jsx'
import styles from './Footer.module.css'

function Footer() {
  const { lang, t } = useLanguage()

  return (
    <footer className={styles.footer} lang={lang}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <h3 className={styles.heading}>{t.footer.blurbTitle}</h3>
            <p className={styles.blurb}>{t.footer.blurb}</p>
          </div>

          <nav className={styles.col} aria-label="Footer">
            <h3 className={styles.heading}>{t.footer.quickLinksTitle}</h3>
            <ul className={styles.links}>
              {t.nav.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className={styles.link}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.col}>
            <h3 className={styles.heading}>{t.footer.contactTitle}</h3>
            <ul className={styles.contactList}>
              <li>
                <MapPin size={16} className={styles.contactIcon} aria-hidden="true" />
                <span>{t.contact.addressValue}</span>
              </li>
              <li>
                <Phone size={16} className={styles.contactIcon} aria-hidden="true" />
                <span>{t.contact.phoneValue}</span>
              </li>
              <li>
                <Mail size={16} className={styles.contactIcon} aria-hidden="true" />
                <span>{t.contact.emailValue}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <span className={styles.credit}>{t.site.name}</span>
          <span className={styles.meta}>
            {t.footer.credit} · {new Date().getFullYear()} {t.footer.rights}
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
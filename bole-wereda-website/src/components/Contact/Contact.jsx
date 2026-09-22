import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import {
  FacebookIcon,
  XIcon,
  TelegramIcon,
  YouTubeIcon,
} from './BrandIcons.jsx'
import { useLanguage } from '../../context/LanguageContext.jsx'
import styles from './Contact.module.css'

// PLACEHOLDER social links — replace with the wereda's official profiles
// before public launch.
const socials = [
  { name: 'Facebook', href: 'https://facebook.com/', icon: FacebookIcon },
  { name: 'X (Twitter)', href: 'https://twitter.com/', icon: XIcon },
  { name: 'Telegram', href: 'https://telegram.org/', icon: TelegramIcon },
  { name: 'YouTube', href: 'https://youtube.com/', icon: YouTubeIcon },
]

const MAP_SRC =
  'https://www.google.com/maps?q=Bole%20Sub%20City%2C%20Addis%20Ababa%2C%20Ethiopia&output=embed'

function Contact() {
  const { lang, t } = useLanguage()

  const rows = [
    { icon: MapPin, label: t.contact.addressLabel, value: t.contact.addressValue },
    { icon: Phone, label: t.contact.phoneLabel, value: t.contact.phoneValue },
    { icon: Mail, label: t.contact.emailLabel, value: t.contact.emailValue },
    { icon: Clock, label: t.contact.hoursLabel, value: t.contact.hoursValue },
  ]

  return (
    <section id="contact" className={`section ${styles.contact}`} lang={lang}>
      <div className="container">
        <div className="section-head center" data-reveal>
          <span className="eyebrow">{t.contact.eyebrow}</span>
          <h2 className="section-title">{t.contact.title}</h2>
          <p className="section-sub">{t.contact.subtitle}</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.info} data-reveal>
            <ul className={styles.rows}>
              {rows.map(({ icon: Icon, label, value }) => (
                <li className={styles.row} key={label}>
                  <span className={styles.rowIcon}>
                    <Icon size={19} />
                  </span>
                  <div>
                    <span className={styles.rowLabel}>{label}</span>
                    <span className={styles.rowValue}>{value}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className={styles.socialBlock}>
              <span className={styles.socialTitle}>{t.contact.socialTitle}</span>
              <div className={styles.socials}>
                {socials.map(({ name, href, icon: Icon }) => (
                  <a
                    className={styles.social}
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    title={name}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.mapCard} data-reveal style={{ '--reveal-delay': '160ms' }}>
            <span className={styles.mapTitle}>{t.contact.mapTitle}</span>
            <p className={styles.mapHint}>{t.contact.mapHint}</p>
            <div className={styles.mapFrame}>
              <iframe
                src={MAP_SRC}
                title={t.contact.mapTitle}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
import {
  IdCard,
  Store,
  Receipt,
  HeartHandshake,
  ShieldAlert,
  Briefcase,
  Sprout,
  Shield,
  GraduationCap,
  Megaphone,
  HandHeart,
  ShoppingBasket,
} from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext.jsx'
import styles from './Services.module.css'

const serviceIcons = [
  IdCard,
  Store,
  Receipt,
  HeartHandshake,
  ShieldAlert,
  Briefcase,
  Sprout,
  Shield,
  GraduationCap,
  Megaphone,
  HandHeart,
  ShoppingBasket,
]

function Services() {
  const { lang, t } = useLanguage()

  return (
    <section id="services" className={`section ${styles.services}`} lang={lang}>
      <div className="container">
        <div className="section-head center" data-reveal>
          <span className="eyebrow">{t.services.eyebrow}</span>
          <h2 className="section-title">{t.services.title}</h2>
          <p className="section-sub">{t.services.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {t.services.items.map((service, index) => {
            const Icon = serviceIcons[index] ?? IdCard
            return (
              <article
                className={styles.card}
                key={index}
                data-reveal
                style={{ '--reveal-delay': `${(index % 3) * 90}ms` }}
              >
                <span className={styles.icon}>
                  <Icon size={24} strokeWidth={1.9} />
                </span>
                <h3 className={styles.title}>{service.title}</h3>
                <p className={styles.desc}>{service.desc}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
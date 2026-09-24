import { Landmark, Users, ShieldCheck } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext.jsx'
import styles from './About.module.css'

const pillars = [
  { key: 'civic', icon: Landmark },
  { key: 'service', icon: Users },
  { key: 'trust', icon: ShieldCheck },
]

function About() {
  const { lang, t } = useLanguage()

  return (
    <section id="about" className={`section ${styles.about}`} lang={lang}>
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">{t.about.eyebrow}</span>
          <h2 className="section-title">{t.about.title}</h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.text} data-reveal>
            {t.about.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <aside className={styles.sidebar} data-reveal style={{ '--reveal-delay': '160ms' }}>
            {pillars.map(({ key, icon: Icon }, index) => (
              <div className={styles.pillar} key={key}>
                <span className={styles.pillarIcon}>
                  <Icon size={20} />
                </span>
                <div>
                  <h3 className={styles.pillarTitle}>{t.about.pillars[index]?.title}</h3>
                  <p className={styles.pillarText}>{t.about.pillars[index]?.text}</p>
                </div>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  )
}

export default About
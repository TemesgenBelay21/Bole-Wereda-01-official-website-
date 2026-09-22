import { ChevronDown, ArrowRight } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext.jsx'
import styles from './Hero.module.css'

function Hero() {
  const { lang, t } = useLanguage()

  return (
    <section id="hero" className={styles.hero} lang={lang}>
      <img
        className={styles.bgImage}
        src="/images/hero/hero.jpg"
        alt={t.hero.imgAlt}
        fetchPriority="high"
        decoding="async"
      />
      <div className={styles.overlay} aria-hidden="true" />
      <div className={`${styles.content} container`}>
        <span className={styles.badge} data-reveal>
          {t.hero.badge}
        </span>
        <p className={styles.eyebrow} data-reveal style={{ '--reveal-delay': '80ms' }}>
          {t.hero.eyebrow}
        </p>
        <h1 className={styles.title} data-reveal style={{ '--reveal-delay': '160ms' }}>
          {t.hero.title}{' '}
          <span className={styles.highlight}>{t.hero.titleHighlight}</span>
        </h1>
        <p className={styles.subtitle} data-reveal style={{ '--reveal-delay': '240ms' }}>
          {t.hero.subtitle}
        </p>
        <div className={styles.actions} data-reveal style={{ '--reveal-delay': '320ms' }}>
          <a href="#services" className="btn btn-primary">
            {t.hero.ctaPrimary}
            <ArrowRight size={17} />
          </a>
          <a href="#contact" className="btn btn-outline">
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>

      <a href="#about" className={styles.scrollCue} aria-label="Scroll to About section">
        <ChevronDown size={20} />
      </a>
    </section>
  )
}

export default Hero
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext.jsx'
import styles from './FAQ.module.css'

function FAQ() {
  const { lang, t } = useLanguage()
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index))
  }

  return (
    <section id="faq" className={`section ${styles.faq}`} lang={lang}>
      <div className="container">
        <div className="section-head center" data-reveal>
          <span className="eyebrow">{t.faq.eyebrow}</span>
          <h2 className="section-title">{t.faq.title}</h2>
          <p className="section-sub">{t.faq.subtitle}</p>
        </div>

        <div className={styles.list} data-reveal>
          {t.faq.items.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div
                className={`${styles.item} ${isOpen ? styles.open : ''}`}
                key={index}
              >
                <button
                  type="button"
                  className={styles.question}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  onClick={() => toggle(index)}
                >
                  <span className={styles.questionText}>{item.q}</span>
                  <span className={styles.iconWrap}>
                    <ChevronDown size={20} className={styles.icon} />
                  </span>
                </button>
                <div
                  id={`faq-panel-${index}`}
                  className={styles.panel}
                  role="region"
                >
                  <div className={styles.answer}>{item.a}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ
import { useLanguage } from '../../context/LanguageContext.jsx'
import styles from './Gallery.module.css'

// Collect every image present in the gallery folder so new photos are
// picked up automatically without code changes.
const galleryModules = import.meta.glob('/public/images/gallery/*.{jpg,jpeg,png,webp,avif,svg}', {
  eager: true,
  query: '?url',
  import: 'default',
})

const galleryImages = Object.values(galleryModules).map((url) => ({ url }))

function Gallery() {
  const { lang, t } = useLanguage()

  return (
    <section id="gallery" className={`section ${styles.gallery}`} lang={lang}>
      <div className="container">
        <div className="section-head center" data-reveal>
          <span className="eyebrow">{t.gallery.eyebrow}</span>
          <h2 className="section-title">{t.gallery.title}</h2>
          <p className="section-sub">{t.gallery.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {galleryImages.map((image, index) => (
            <figure
              className={styles.item}
              key={index}
              data-reveal
              style={{ '--reveal-delay': `${index * 90}ms` }}
            >
              <img
                src={image.url}
                alt={t.gallery.imgAlt}
                className={styles.img}
                loading="lazy"
              />
              <figcaption className={styles.caption}>
                <span className={styles.captionText}>{t.gallery.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
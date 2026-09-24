import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import styles from './BackToTop.module.css'

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href="#hero"
      className={`${styles.button} ${visible ? styles.visible : ''}`}
      aria-label="Back to top"
      title="Back to top"
      tabIndex={visible ? 0 : -1}
    >
      <ArrowUp size={20} />
    </a>
  )
}

export default BackToTop
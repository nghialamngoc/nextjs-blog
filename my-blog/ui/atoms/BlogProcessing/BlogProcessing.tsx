import { useEffect, useRef } from 'react'

import styles from './BlogProcessing.module.css'

export const BlogProcessing = () => {
  const processingEl = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!processingEl.current) {
      return
    }

    const body = document.body,
      html = document.documentElement

    const height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    )

    const scroll = () => {
      const html = document.documentElement
      const scrollHeight = html.scrollTop
      const percent = ((window.innerHeight + scrollHeight) / height) * 100
      if (processingEl.current) {
        processingEl.current.style.width = percent + '%'
      }
    }
    scroll()
    document.addEventListener('scroll', scroll)

    return () => {
      document.removeEventListener('scroll', scroll)
    }
  }, [processingEl])

  return (
    <div className={styles.root}>
      <div ref={processingEl} className={styles.processing}></div>
      <div className={styles.bar}></div>
    </div>
  )
}

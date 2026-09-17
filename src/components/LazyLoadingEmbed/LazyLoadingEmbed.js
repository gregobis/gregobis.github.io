import React, { useEffect, useRef, useState } from 'react'
import * as styles from './LazyLoadingEmbed.module.css'

const LazyLoadingEmbed = ({ embed, album }) => {
  const [isVisible, setIsVisible] = useState(false)
  const embedRef = useRef(null)

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true)
      return undefined
    }

    if (!embedRef.current) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(embedRef.current)

    return () => observer.disconnect()
  }, [])

  const embedHtml = embed?.embed

  if (!embedHtml || typeof embedHtml !== 'string') {
    return null
  }

  const srcMatch = embedHtml.match(/src=["']([^"']+)["']/)

  if (!srcMatch) {
    return null
  }

  const albumMatch = srcMatch[1].match(/album=([^/&]+)/)

  if (!albumMatch) {
    return null
  }

  const formattedSrcUrl = `https://bandcamp.com/EmbeddedPlayer/album=${albumMatch[1]}/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/`

  return (
    <div ref={embedRef} className={styles.lazyEmbedContainer}>
      {isVisible && (
        <iframe
          title={`${album || 'Album'} Bandcamp embed`}
          width="170"
          height="170"
          className={styles.iframe}
          src={formattedSrcUrl}
          seamless
        />
      )}
    </div>
  )
}

export default LazyLoadingEmbed

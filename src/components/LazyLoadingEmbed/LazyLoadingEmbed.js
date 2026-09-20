import React from 'react'
import * as styles from './LazyLoadingEmbed.module.css'

const LazyLoadingEmbed = ({ embed, album }) => {
  const embedHtml = embed?.embed?.embed || embed?.embed

  if (!embedHtml || typeof embedHtml !== 'string') {
    return null
  }

  const srcMatch = embedHtml.match(/src=["']([^"']+)["']/)

  if (!srcMatch) {
    return null
  }

  const formattedSrcUrl = srcMatch[1]

  return (
    <div className={styles.lazyEmbedContainer}>
      <iframe
        title={`${album || 'Album'} Bandcamp embed`}
        width="170"
        height="170"
        className={styles.iframe}
        src={formattedSrcUrl}
        loading="lazy"
        seamless
      />
    </div>
  )
}

export default LazyLoadingEmbed

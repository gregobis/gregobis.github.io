import React from 'react'
import * as styles from './LazyLoadingEmbed.module.css'

const LazyLoadingEmbed = ({ embed, album }) => {
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

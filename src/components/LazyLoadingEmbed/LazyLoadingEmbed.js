import React from 'react'
import * as styles from "./LazyLoadingEmbed.module.css"

const LazyLoadingEmbed = (embed, album) => {
    const embedSplit = embed.embed.embed.split(' ');
    const src = embedSplit.find((string) => {
        return string.startsWith("src")
    })
    const srcSplit = src.split("/")
    const albumId = srcSplit.find((string) => {
        return string.startsWith("album=")
    })
    const formattedSrcUrl = `https://bandcamp.com/EmbeddedPlayer/${albumId}/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/`
    const href = embedSplit.find((string) => {
        return string.startsWith("href")
    })

    return (
        <iframe title={`${album} bandcamp embed`} width="170px" height="170px" className={styles.iframe} src={formattedSrcUrl} seamless />
    )
}

export default LazyLoadingEmbed

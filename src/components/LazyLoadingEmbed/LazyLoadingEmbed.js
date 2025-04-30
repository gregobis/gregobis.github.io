import React, { useState, useEffect, useRef } from 'react'
import * as styles from "./LazyLoadingEmbed.module.css"

const LazyLoadingEmbed = (embed, album) => {
    const [isVisible, setIsVisible] = useState(false);
    const iframeRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Stop observing once visible
                }
            },
            { threshold: 0.1 } // Trigger when 10% of the component is visible
        );

        if (iframeRef.current) {
            observer.observe(iframeRef.current);
        }

        return () => {
            if (iframeRef.current) {
                observer.unobserve(iframeRef.current);
            }
        };
    }, []);

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
        <div ref={iframeRef} className={styles.lazyEmbedContainer}>
            {isVisible && (
                <iframe
                    title={`${album} bandcamp embed`}
                    width="170px"
                    height="170px"
                    className={styles.iframe}
                    src={formattedSrcUrl}
                    seamless
                />
            )}
        </div>
    )
}

export default LazyLoadingEmbed

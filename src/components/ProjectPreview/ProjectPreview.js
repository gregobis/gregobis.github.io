import React from 'react'
import LazyLoadingEmbed from '../LazyLoadingEmbed'
import Col from "react-bootstrap/Col"
import * as styles from "./ProjectPreview.module.css"

const ProjectPreview = ({ project }) => {
  const {band, album, label, year, embed, categories}= project
  
return (
  <Col sm="6" md="4" className="py-4 text-center d-flex flex-column justify-content-between align-items-center mx-auto">
  <div className="my-3">
    <span className={styles.bandName}>{ band }</span>
    <span className={styles.albumName}>{ album }</span>
    <span className={styles.categories}>
    {categories.map((category, index)=> 
      <span key={index}>
        <span className={`darken-${category.color.name}--text`}>
          {category.title}
        </span>
        <span>{index !== categories.length - 1 ? ' | ' : ''}</span>
      </span>
    )}
    </span>
  </div>
  <LazyLoadingEmbed embed={embed} album={album}/>
  <div className="my-3">
    <span className={styles.label}>{ label }</span>
    <span className={styles.year}>{ year }</span>
  </div>
</Col>
)}

export default ProjectPreview
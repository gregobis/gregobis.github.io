import React from 'react'
import ProjectPreview from '../ProjectPreview'
import Row from "react-bootstrap/Row"

const ProjectList = ({ projects }) => {
  return (
    <Row>
      {projects.map(({ node }) => {
        return (
            <ProjectPreview project={node} />
        )
      })}
    </Row>
  )
}
export default ProjectList

import React from 'react'
import ProjectPreview from '../ProjectPreview'
import Row from 'react-bootstrap/Row'

const ProjectList = ({ projects }) => {
  return (
    <Row>
      {projects.map(({ node }, index) => {
        return <ProjectPreview key={index} project={node} />
      })}
    </Row>
  )
}
export default ProjectList

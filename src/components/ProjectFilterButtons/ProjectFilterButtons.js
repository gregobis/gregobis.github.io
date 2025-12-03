import React from 'react'
import { graphql } from 'gatsby'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const ProjectFilterButtons = ({ categories }) => {
  return (
    <Container>
      <Row className="my-5">
        <Col xs={12} md={6} lg={3} className="my-1">
          <Button bsPrefix="custom-btn" className="btn malachite--btn w-100" href="/projects">
            All
          </Button>
        </Col>
        {categories.map(({ node }, index) => (
          <Col key={index} xs={12} md={6} lg={3} className="my-1">
            <Button
              bsPrefix="custom-btn"
              className={`btn ${node.color.name}--btn w-100`}
              href={`/projects/${node.slug}`}
            >
              {node.title}
            </Button>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default ProjectFilterButtons

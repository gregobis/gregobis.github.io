import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const HomepageHero = ({ data }) => {
  return (
    <Container fluid className="py-5 blue--bg">
      <Container className="my-5">
        <Row>
          <Col>
            <h1 className="text-center">{data.name}</h1>
          </Col>
        </Row>
        <Row>
          <Col sm="8" lg="6" className="mx-auto">
            <p>{data.intro.intro}</p>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
export default HomepageHero

import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const DynamicHero = ({ color, title="Projects" }) => {
  return (
    <Container fluid className={`py-5 ${color}--bg`}>
      <Container className="my-5">
        <Row>
          <Col>
            <h1 className="text-center">{title}</h1>  
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
export default DynamicHero

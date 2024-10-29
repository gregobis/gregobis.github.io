import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const ContactMe = () => {
    return (
        <Container fluid className="py-5 kournikova--bg">
            <Container className="my-5">  
                <h3 className="text-center">Contact Me</h3> 
                <Row className="py-4">
                    <Col lg="6" className="mx-auto">
                        <p className="text-center">I'll do whatever you want me to do.</p>
                    </Col>
                </Row>
                <Row>
                    <Col md="6" lg="3" className="mx-auto">
                        <Button bsPrefix="custom-btn" className="btn aquamarine--btn w-100" href="/contact">Contact me</Button>
                    </Col>
                </Row>           
            </Container>
        </Container>  

    )
}
export default ContactMe
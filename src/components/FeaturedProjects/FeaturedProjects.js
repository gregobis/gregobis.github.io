import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ProjectPreview from '../ProjectPreview'


const FeaturedProjects = ({ projects }) => {
    return (
        <Container fluid className="py-5">
            <Container className="my-5">
                <h2 className="text-center">Projects</h2>        
                <Row className="py-4">
                    {projects.map(({ node }) => {
                        return (
                            <ProjectPreview project={node}/>
                        )
                    })}
                </Row>
                <Row>
                    <Col md="6" lg="3" className="mx-auto">
                        <Button bsPrefix="custom-btn" className="btn aquamarine--btn w-100" href="/projects" aria-label="See more projects">See more projects</Button>
                    </Col>
                </Row>
            </Container>
        </Container>

    )
}
export default FeaturedProjects
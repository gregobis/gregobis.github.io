import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as FaIcons from 'react-icons/fa6'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      allContentfulMe(filter: { contentful_id: { eq: "UBWBtTQcJcEJ4madRTVQh" } }) {
        nodes {
          name
          intro {
            intro
          }
          tagline
          email
          socialMedia {
            url
            fontAwesomeIcon
            name
          }
        }
      }
    }
  `)
  const { name, tagline, email, socialMedia } = data.allContentfulMe.nodes[0]
  return (
    <div className="py-5 border-top">
      <Container>
        <Row className="row flex-md-row justify-content-between">
          <Col sm md="4">
            {/* // TODO convert this to theme-ui text */}
            <p className="h5 mb-3">
              <a className="navbar-brand" rel="author" href="/">
                {name}
              </a>
            </p>
            <p>{tagline}</p>
          </Col>

          <Col sm md="3">
            <div>
              <a href={`mailto:${email}`}>{email}</a>
            </div>
            <Row className="mt-3" xs="auto">
              {socialMedia &&
                socialMedia.map((item, idx) => {
                  const IconComponent = FaIcons[item.fontAwesomeIcon]
                  return (
                    <div key={idx}>
                      <a
                        className="social-icon"
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`view my ${item.name}`}
                      >
                        <IconComponent size={32} />
                      </a>
                    </div>
                  )
                })}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default Footer

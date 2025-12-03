import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const NavBar = () => {
  const data = useStaticQuery(graphql`
    query NavQuery {
      allContentfulMe(filter: { contentful_id: { eq: "UBWBtTQcJcEJ4madRTVQh" } }) {
        nodes {
          name
        }
      }
      allContentfulPage(filter: { addToNav: { eq: true } }) {
        nodes {
          tItle
          slug
        }
      }
    }
  `)
  const logo = data.allContentfulMe.nodes[0]
  const pages = data.allContentfulPage.nodes

  return (
    <Navbar expand="lg" bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand rel="author" href="/">
          {logo.name}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            {pages.map((page, index) => (
              <Nav.Link key={index} href={`/${page.slug}`}>
                {page.tItle}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar

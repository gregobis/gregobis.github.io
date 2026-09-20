import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const renderFormattedIntro = (text) => {
  if (!text || typeof text !== 'string') {
    return null
  }

  const paragraphs = text
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)

  return paragraphs.map((paragraph, paragraphIndex) => {
    const withLinks = paragraph.replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')

    const withLineBreaks = withLinks.replace(/\n/g, '<br />')

    return (
      <p key={paragraphIndex} dangerouslySetInnerHTML={{ __html: withLineBreaks }} />
    )
  })
}

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
            {renderFormattedIntro(data.intro.intro)}
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default HomepageHero

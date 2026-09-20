import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const renderInlineContent = (text, paragraphIndex) => {
  const linkPattern = /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g
  const content = []
  let lastIndex = 0
  let match
  let itemIndex = 0

  while ((match = linkPattern.exec(text)) !== null) {
    const textBeforeLink = text.slice(lastIndex, match.index)
    content.push(
      ...textBeforeLink.split('\n').flatMap((part, index, parts) => [
        part,
        ...(index < parts.length - 1 ? [<br key={`break-${paragraphIndex}-${itemIndex++}`} />] : []),
      ])
    )
    content.push(
      <a
        key={`link-${paragraphIndex}-${itemIndex++}`}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
      >
        {match[1]}
      </a>
    )
    lastIndex = match.index + match[0].length
  }

  const remainingText = text.slice(lastIndex)
  content.push(
    ...remainingText.split('\n').flatMap((part, index, parts) => [
      part,
      ...(index < parts.length - 1 ? [<br key={`break-${paragraphIndex}-${itemIndex++}`} />] : []),
    ])
  )

  return content
}

const renderFormattedIntro = (text) => {
  if (!text || typeof text !== 'string') {
    return null
  }

  const paragraphs = text
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)

  return paragraphs.map((paragraph, index) => (
    <p
      key={index}
      style={{ marginBottom: index === paragraphs.length - 1 ? 0 : '1.5rem' }}
    >
      {renderInlineContent(paragraph, index)}
    </p>
  ))
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

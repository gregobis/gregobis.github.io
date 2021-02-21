import React from 'react'
import { Container, Heading } from 'theme-ui'

export default ({ data }) => (
  <Container>
      <Heading as="h1">{data.name}</Heading>
      <p>{data.intro.intro}</p>
  </Container>
)

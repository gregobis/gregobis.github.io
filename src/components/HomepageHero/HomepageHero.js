import React from 'react'
import { Container, Heading, Text } from 'theme-ui'

const HomepageHero = ({ data }) => {
  return (
    <>
      <Heading as="h1">{data.name}</Heading>
      <Text>{data.intro.intro}</Text>
    </>
  )
}
export default HomepageHero
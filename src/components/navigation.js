import React from 'react'
import { Link } from 'gatsby'
import { NavLink, Flex, Text, Heading } from 'theme-ui'

export default () => (
  <Flex as='nav' role="navigation">
    <NavLink href='/' p={2}>
      <Heading
        sx={{
          fontSize: 4,
          fontWeight: 'bold',
        }}>      
        HOME
      </Heading>
    </NavLink>
    <NavLink href='/blog/"' p={2}>
      <Text
        sx={{
          fontSize: 4,
          fontWeight: 'bold',
        }}>      
        Blog
      </Text>
    </NavLink>
  </Flex>
)

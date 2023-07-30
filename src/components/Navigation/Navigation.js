import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { NavLink, Flex, MenuButton } from 'theme-ui'
import styles from './Navigation.module.css'


const NavBar = () => {
  const data = useStaticQuery(graphql`
    query NavQuery {
      site {
        siteMetadata {
          title
        }
      }
      allContentfulPage(filter: {addToNav: {eq: true}}) {
        nodes {
          tItle
          slug
        }
      }
    }
  `)
  const siteTitle = data.site.siteMetadata.title
  const pages = data.allContentfulPage.nodes
  return (
    <nav>
      <Flex>
        <div>
          <Link
            href="/"
            className={styles.brand}>
              { siteTitle}
          </Link>
        </div>
        <MenuButton aria-label="Toggle Menu" />
        <Flex as="nav">
          {pages.map((page) => 
            <NavLink href={`/${page.slug}`} p={2}>
              {page.tItle}
            </NavLink>
          )}
        </Flex>
      </Flex>
    </nav>
  )
}

export default NavBar;

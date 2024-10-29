import React from 'react'
import { graphql } from 'gatsby'
import HomepageHero from '../components/HomepageHero'
import Layout from '../components/Layout'
import FeaturedProjects from '../components/FeaturedProjects'
import ContactMe from '../components/ContactMe'

const Homepage = ({location, data}) => {
  const siteTitle = data?.site.siteMetadata.title
  const projects = data?.allContentfulProject.edges
  const [greg] = data?.allContentfulMe.edges

  return (
    <Layout location={location.pathname} siteTitle={siteTitle}>
      <HomepageHero data={greg.node} />
      <FeaturedProjects projects={projects}/>
      <ContactMe />
    </Layout>
  )
}

export default Homepage

export const pageQuery = await  graphql`
  query HomeQuery {
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
    allContentfulProject(sort: {year: DESC}, filter: {featured: {eq: true}}) {
      edges {
        node {
          album
          band
          featured
          categories {
            title
            color {
              name
            }
          }
          year
          label
          embed {
            embed
          }
        }
      }
    }
    allContentfulMe(filter: {contentful_id: {eq: "UBWBtTQcJcEJ4madRTVQh"}}) {
      edges {
        node {
          name
          intro {
            intro
          }
          tagline
          email
        }
      }
    }
  }
`

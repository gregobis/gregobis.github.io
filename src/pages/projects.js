import React, {useState} from 'react'
import { graphql } from 'gatsby'
import { Heading } from 'theme-ui'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import ProjectPreview from '../components/ProjectPreview'

const Projects = ({location, data}) => {
  const [projectFilter, setProjectFilter] = useState()
  const siteTitle = data.site.siteMetadata.title
  const projects = data.allContentfulProject.edges

  return (
    <Layout location={location.pathname}>
      <div style={{ background: '#fff' }}>
        <Helmet title={`${siteTitle} | ${projectFilter} Projects`} />
        <div className="wrapper">
          <Heading as="h2">Projects</Heading>
          <ul className="article-list">
            {projects.map(({ node }) => {
              return (
                <li key={node.slug}>
                  <ProjectPreview project={node} />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default Projects

export const pageQuery = graphql`
  query ProjectsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulProject(sort: { fields: [year], order: DESC }) {
      edges {
        node {
          album
          band
          featured
          categories {
            title
          }
          year
          label
          embed {
            embed
          }
        }
      }
    }
  }
`

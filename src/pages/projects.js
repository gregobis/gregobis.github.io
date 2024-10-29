import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import ProjectFilterButtons from '../components/ProjectFilterButtons'
import Container from "react-bootstrap/Container"
import DynamicHero from '../components/DynamicHero'
import ProjectList from '../components/ProjectList'


const Projects = ({location, data}) => {
  const siteTitle = data.site.siteMetadata.title  
  const categories = data.allContentfulCategory.edges
  const projects = data.allContentfulProject.edges

  return (
    <Layout location={location.pathname}>
        <Helmet
          title={`${siteTitle} | Projects`}
          description="Greg Obis is an audio engineer that has worked
          with artists on labels such as Sub Pop, Matador, ANTI-,
          Car Park, Sacred Bones, Numero Group, Fire Talk, 
          and International Anthem. 
          A personable and skilled audio engineer,
          Greg specializes in mastering, recording, and mixing records.
          Contact him to discuss your project."
        />
        <div className="wrapper">
          <DynamicHero color="malachite" title="Projects"/>
          <Container className="py-5">
            <ProjectFilterButtons categories={categories}/>
            <ProjectList projects={projects}/>
          </Container>
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
    allContentfulCategory {
      edges {
        node {
          title
          color {
            name
            colorPicker
          }
          slug
        }
      }
    }
    allContentfulProject(sort: {year: DESC}) {
      edges {
        node {
          album
          band
          featured
          categories {
            title
            color {
              name
              colorPicker
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
  }
`

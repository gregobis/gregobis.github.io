import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import ProjectFilterButtons from '../components/ProjectFilterButtons'
import Container from "react-bootstrap/Container"
import DynamicHero from '../components/DynamicHero'
import ProjectList from '../components/ProjectList'


const Projects = ({location, data, pageContext}) => {
  const { projectFilter, color, filterTitle } = pageContext
  const siteTitle = data.site.siteMetadata.title  
  const categories = data.allContentfulCategory.edges
  const projects = data.filteredProjects.edges

  return (
    <Layout location={location.pathname}>
        <Helmet>
        <title>{`${siteTitle} | ${projectFilter} Projects`}</title>
            <meta name='description' content= 'Greg Obis is an audio engineer that has worked with artists on labels such as Sub Pop, Matador, ANTI-, Car Park, Sacred Bones, Numero Group, Fire Talk, and International Anthem. A personable and skilled audio engineer, Greg specializes in mastering, recording, and mixing records. Contact him to discuss your project.' />
        </Helmet> 
        <div className="wrapper">
          <DynamicHero color={color} title={filterTitle}/>
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
    query($projectFilter: [String]){
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
        filteredProjects: allContentfulProject(
            sort: {year: DESC}
            filter: {categories: {elemMatch: {slug: {in: $projectFilter}}}}
            ) {
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

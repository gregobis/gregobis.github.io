import React from 'react'
import { Heading } from 'theme-ui'
import ProjectPreview from '../ProjectPreview'

const FeaturedProjects = ({ projects }) => {
    return (
        <>
            <Heading as="h2">Projects</Heading> 
            {projects.map(({ node }) => {
                return (
                <div>
                    <ProjectPreview project={node}/>
                </div>
                )
            })}

            
            <a href="/projects">See more</a>
        </>

    )
}
export default FeaturedProjects
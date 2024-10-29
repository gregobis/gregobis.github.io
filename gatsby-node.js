const path = require(`path`)
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}
exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(`
        query {
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
        }
    `)
    data.allContentfulCategory.edges.forEach(edge => {
        const {slug, color: { name: colorName }, title} = edge.node 
        actions.createPage({
            path: `/projects/${slug}`,
            component: require.resolve(`./src/templates/project-category.js`),
            context: {
                projectFilter: slug,
                color: colorName,
                filterTitle: title,
              },
        })
    })
}

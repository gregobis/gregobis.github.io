import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'

const Contact = ({location}) => {
  const data = useStaticQuery(graphql`
    query ContactPageQuery {
        allContentfulMe(
          filter: { contentful_id: { eq: "UBWBtTQcJcEJ4madRTVQh" } }
        ) {
          nodes {
            image {
              url
            }
          }
        }
    }
  `)

  const imageUrl = data.allContentfulMe.nodes[0].image.url
    return (
      <Layout location={location.pathname}>
        <article className="kournikova--bg py-5">
          <div className="container my-5">
            <div className="row">
              <div className="col-12">
                <header>
                  <h1 className="text-center">Contact</h1>
                </header>
              </div>
            </div>
          </div>
        </article>

        <article className="py-5">
          <div className="container my-5">
            <div className="row flex-column">
              <div className="col-md-6 mx-auto pb-4">
                <h2 className="text-center">Contact me</h2>
                <p class="text-center">
                  I'd love to hear about your project! Please reach out to me at <a href="mailto:gregobis@gmail.com">gregobis@gmail.com</a>, and I'll do my best to get back to you promptly.
                </p>
              </div>
              <div className="col-md-6 mb-4 mb-md-0 mx-auto">
                <img className="img-responsive"
            src={imageUrl}
            alt="Greg Obis"/>   
              </div>
            </div>
          </div>
        </article>
      </Layout>
    )
}

export default Contact

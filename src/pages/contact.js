import React from 'react'
import get from 'lodash/get'
import Layout from '../components/Layout'

const Contact = ({location}) => {
    return (
      <Layout location={location.pathname}>
        <h1>Contact</h1>
      </Layout>
    )
}

export default Contact
{/* <article className="{{ page.background-color }}--bg py-5">
  <div className="container my-5">
    <div className="row">
      <div className="col-12">
        <header>
          <h1 className="text-center">{{ page.title | escape }}</h1>
        </header>
      </div>
    </div>
  </div>
</article>

<article className="py-5">
  <div className="container my-5">
    <div className="row flex-column-reverse flex-md-row">
      <div className="col-md-6 mx-auto">
        <h2 className="text-center">Contact me</h2>
        <p className="text-center">Tell me about your project.</p>
        {%- include contact-form.html -%}
      </div>
      <div className="col-md-6 mb-4 mb-md-0 mx-auto">
      <img className="img-responsive"
  src="/assets/images/greg-obis.jpeg"
  alt="Greg Obis">   
      </div>
    </div>
  </div>
</article> */}
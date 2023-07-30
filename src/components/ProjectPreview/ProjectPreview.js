import React from 'react'

const ProjectPreview = ({ project }) => {
  const {band, album, label, year, embed} = project
return (
  <div className="col-12 col-sm-6 col-md-4 py-4 text-center d-flex flex-column justify-content-between mx-auto">
  <div className="my-3">
    <h4>{ band }</h4>
    <h5 className="font-italic">{ album }</h5>
    <h6 className="text-uppercase">
      {/* {% if project %}
        {% assign categories = project.categories %}
      {% endif %}
      {% for category in categories %}
        {% assign categoryObject = site.categories | where: "object-id", category  | first %}
        <span className="darken-{{ categoryObject.background-color }}--text">{{categoryObject.title}}</span>{% unless forloop.last %} | {% endunless %}
      {% endfor %} */}
    </h6>
  </div>

    <div
    dangerouslySetInnerHTML={{
      __html: embed.embed,
    }}
  />
  <div className="my-3">
    <h5>{ label }</h5>
    <h6>{ year }</h6>
  </div>
</div>
)}

export default ProjectPreview
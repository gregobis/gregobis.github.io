---
layout: default
title: contact
background-color: kournikova
---

<article class="{{ page.background-color }}--bg py-5">
  <div class="container my-5">
    <div class="row">
      <div class="col-12">
        <header>
          <h1 class="text-center">{{ page.title | escape }}</h1>
        </header>
      </div>
    </div>
  </div>
</article>

<article class="py-5">
  <div class="container my-5">
    <div class="row flex-column-reverse flex-md-row">
      <div class="col-md-6 mx-auto">
        <h2 class="text-center">Contact me</h2>
        <p class="text-center">Tell me about your project.</p>
        {%- include contact-form.html -%}
      </div>
      <div class="col-md-6 mb-4 mb-md-0 mx-auto">
      <img class="img-responsive"
  src="/assets/images/greg-obis.jpeg"
  alt="Greg Obis">   
      </div>
    </div>
  </div>
</article>
